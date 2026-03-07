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

    const books = await prisma.userBook.findMany({
      where: {
        userId: userId,
      },
      include: {
        // join book
        book: {
          include: { authors: true }, // join authors
        },
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
  { params }: { params: Promise<{ userId: string }> },
) {
  try {
    const auth = await getAuthenticatedId();
    if (auth.error) return auth.error;

    const authenticatedId = auth.userId;

    // get id in url to compare
    const { userId } = await params;

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

    // authors stored as objs: [id: '01293', name:'Oliver', .....] - authors: Author[]
    const { bookId, title, authors, cover, authorCover, status } =
      await request.json();

    if (!authenticatedId || !bookId) {
      return new NextResponse("Missing body", {
        status: 400,
        headers: corsHeaders,
      });
    }

    // add book and author to the according table
    const book = await prisma.book.upsert({
      where: { id: bookId },
      // add authors to fill data gaps in case
      update: {
        authors: {
          connectOrCreate: authors.map((a: any) => ({
            where: { id: a.id },
            create: { id: a.id, name: a.name, cover: a.cover },
          })),
        },
      },
      create: {
        id: bookId,
        title: title,
        cover: cover,
        authors: {
          connectOrCreate: authors.map(
            (a: { id: string; name: string; cover: string }) => ({
              where: { id: a.id },
              create: { id: a.id, name: a.name, cover: a.cover },
            }),
          ),
        },
      },
    });
    console.log("Successfully added book and author to db");

    // create user book or update if already exist
    const newUserBook = await prisma.userBook.upsert({
      where: { userId_bookId: { userId: authenticatedId, bookId } },
      // composite key pattern
      update: { status: status }, // if exist, update
      create: {
        userId: authenticatedId,
        bookId: bookId,
        status: status.trim(),
      },
    });
    console.log(book, "Successfully added user-book to db");

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
  { params }: { params: Promise<{ userId: string }> },
) {
  try {
    const auth = await getAuthenticatedId();
    if (auth.error) return auth.error;

    const authenticatedId = auth.userId;

    // get id in url to compare
    const { userId } = await params;

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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) {
  try {
    const auth = await getAuthenticatedId();
    if (auth.error) return auth.error;

    const authenticatedId = auth.userId;

    // get id in url to compare
    const { userId } = await params;

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

    const { bookId, status } = await request.json();

    if (!authenticatedId || !bookId || !status) {
      return new NextResponse("Missing body", {
        status: 400,
        headers: corsHeaders,
      });
    }

    const updatedBook = await prisma.userBook.update({
      where: { userId_bookId: { userId: authenticatedId, bookId } },
      data: { status: status },
    });
    console.log("Updated userBook successfully");
    return NextResponse.json(updatedBook, {
      status: 200,
      headers: corsHeaders,
    });
  } catch (e) {
    console.error(e);
    return new NextResponse("Error updating book", {
      status: 400,
      headers: corsHeaders,
    });
  }
}
