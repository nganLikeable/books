import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      {
        error: "Missing author id",
      },
      { status: 400, headers: corsHeaders }
    );
  }

  try {
    const res = await fetch(
      `https://openlibrary.org/authors/${id}/works.json?limit=100`
    );
    if (!res.ok) {
      const error = await res.text();
      return NextResponse.json(`OpenLibrary API error: ${error}`, {
        status: res.status,
        headers: corsHeaders,
      });
    }
    const data = await res.json();
    return NextResponse.json(data, { headers: corsHeaders });
  } catch (e) {
    console.error(e);
    return new NextResponse("Invalid request body", {
      status: 400,
      headers: corsHeaders,
    });
  }
}
