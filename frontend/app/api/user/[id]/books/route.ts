import { adminAuth } from "@/lib/firebase-admin-config";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // get token from cookie
    const cookieStore = await cookies();

    // return cookie obj, then extract the string
    const token = cookieStore.get("auth-token")?.value;

    if (!token) {
      return new NextResponse("No cookie found", {
        status: 401,
        headers: corsHeaders,
      });
    }

    // retrieve user id from firebase admin
    const decodedToken = await adminAuth.verifyIdToken(token);
    const authenticatedId = decodedToken.uid;

    // get id in url to compare
    const { id } = await params;

    // security check: url id must match token id from firebase
    if (id !== authenticatedId) {
      return new NextResponse(
        "Forbidden: You cannot modify another user's profile",
        {
          status: 403,
          headers: corsHeaders,
        }
      );
    }

    const { bookId, status } = await request.json();

    if (!authenticatedId || !bookId) {
      return new NextResponse("Missing body", {
        status: 400,
        headers: corsHeaders,
      });
    }
    const newUserBook = await prisma.userBook.upsert({
      where: { userId_bookId: { userId: authenticatedId, bookId } },
      // composite key pattern
      update: { status: status }, // if exist, update
      create: { userId: authenticatedId, bookId, status: status },
    });
    return NextResponse.json(newUserBook, {
      status: 201,
      headers: corsHeaders,
    });
  } catch (e) {
    console.error(e);
    return new NextResponse("Invalid request body", {
      status: 400,
      headers: corsHeaders,
    });
  }
}
