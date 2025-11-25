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

export async function GET(request: NextRequest) {
  const bookId = "";

  if (!bookId) {
    return NextResponse.json(
      { error: "Missing query" },
      { status: 400, headers: corsHeaders }
    );
  }

  try {
    const response = await fetch(
      `https://openlibrary.org/works/${bookId}.json`
    );
    if (response.ok) {
      const data = response.json();
      return NextResponse.json(data, { headers: corsHeaders });
    }
  } catch (e) {
    console.error(e);
    return new NextResponse("Invalid request body", {
      status: 400,
      headers: corsHeaders,
    });
  }
}
