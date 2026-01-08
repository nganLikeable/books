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
  response: NextResponse,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authenticatedId = await getAuthenticatedId();

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

    const { status } = await response.json();

    if (!status) {
      return new NextResponse("Missing body - book status", {
        status: 400,
        headers: corsHeaders,
      });
    }

    const books = await prisma.userBook.findMany({
      where: {
        status: status,
      },
    });
    return NextResponse.json(books, { status: 200, headers: corsHeaders });
  } catch (e) {
    console.error(e);
    return new NextResponse("Error fetching books with status", {
      status: 500,
      headers: corsHeaders,
    });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authenticatedId = await getAuthenticatedId();

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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authenticatedId = await getAuthenticatedId();

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

    const { bookId } = await request.json();
    if (!authenticatedId || !bookId) {
      return new NextResponse("Missing body", {
        status: 400,
        headers: corsHeaders,
      });
    }

    const deletedBook = await prisma.userBook.delete({
      where: { userId_bookId: { userId: authenticatedId, bookId: bookId } },
    });
    return NextResponse.json(deletedBook, {
      status: 200,
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
