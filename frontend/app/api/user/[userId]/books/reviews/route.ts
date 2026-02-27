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
  { params }: { params: Promise<{ userId: string }> },
) {
  try {
    const auth = await getAuthenticatedId();
    if (auth.error) return auth.error;

    const authenticatedId = auth.userId;
    // get id in url to compare
    const { userId } = await params;
    console.log(userId);

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

    const reviews = await prisma.user.findMany({
      select: {
        reviews: {
          include: {
            book: { select: { title: true, cover: true } },
          },
        },
      },
    });

    console.log("Review retrieved successfully");

    return NextResponse.json(reviews, { status: 201, headers: corsHeaders });
  } catch (e) {
    console.error(e);
    return new NextResponse("Error fetching book review", {
      status: 500,
      headers: corsHeaders,
    });
  }
}
