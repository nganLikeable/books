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

export async function POST(request: NextRequest) {
  try {
    const { id, title, authors, cover } = await request.json();

    if (!id || !title || !authors) {
      return new NextResponse("Missing title", {
        status: 400,
        headers: corsHeaders,
      });
    }
    const newBook = await prisma.book.create({
      data: { id, title, authors, cover },
    });
    return NextResponse.json(newBook, { status: 201, headers: corsHeaders });
  } catch (e) {
    console.error(e);
    return new NextResponse("Invalid request body", {
      status: 400,
      headers: corsHeaders,
    });
  }
}
