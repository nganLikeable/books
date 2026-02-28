import { getAuthenticatedId } from "@/lib/auth-helper";
import { prisma } from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string; bookId: string }> },
) {
  try {
    const auth = await getAuthenticatedId();
    if (auth.error) return auth.error;

    const authenticatedId = auth.userId;
    // get id in url to compare
    const { userId, bookId } = await params;
    console.log(userId, bookId);

    // security check: url id must match token id from firebase
    if (userId !== authenticatedId) {
      console.log("UserId", userId, "bookId", bookId);
      return new NextResponse(
        "Forbidden: You cannot modify another user's profile",
        {
          status: 403,
          headers: corsHeaders,
        },
      );
    }
    console.log("Authenticated");

    const review = await prisma.review.findUnique({
      where: { bookId_userId: { bookId, userId: authenticatedId } },
    });

    console.log("Review retrieved successfully");

    return NextResponse.json(review, { status: 201, headers: corsHeaders });
  } catch (e) {
    console.error(e);
    return new NextResponse("Error fetching book review", {
      status: 500,
      headers: corsHeaders,
    });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string; bookId: string }> },
) {
  try {
    const auth = await getAuthenticatedId();
    if (auth.error) return auth.error;

    const authenticatedId = auth.userId;

    // get id in url to compare
    const { userId, bookId } = await params;
    console.log(userId, bookId);

    const { rating, content } = await request.json();
    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      return new NextResponse("Invalid rating", { status: 400 });
    }
    // security check: url id must match token id from firebase
    if (userId !== authenticatedId) {
      return new NextResponse(
        "Forbidden: You cannot modify another user's profile",
        {
          status: 403,
          headers: corsHeaders,
        },
      );
    }
    console.log("Authenticated");

    const review = await prisma.review.upsert({
      where: { bookId_userId: { bookId, userId: authenticatedId } },
      update: { rating, content, updatedAt: new Date() },
      create: {
        id: crypto.randomUUID(),
        userId: authenticatedId,
        bookId,
        rating,
        content,
      },
    });
    console.log("Successfully added review");
    return NextResponse.json(review, { status: 200, headers: corsHeaders });
  } catch (e) {
    console.error(e);
    return new NextResponse("Invalid request body", {
      status: 400,
      headers: corsHeaders,
    });
  }
}
