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
  const url = request.nextUrl; // get url obj of request, for example: https://openlibrary.org/search.json?q=the+lord+of+the+rings
  const searchParams = url.searchParams; // get search parameters object of the URL representing query string, for ex: {'q': 'the lord of the rings'}
  const query = searchParams.get("q"); // get query string

  if (!query) {
    return NextResponse.json(
      { error: "Missing query" },
      { status: 400, headers: corsHeaders }
    );
  }

  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}`
  );
  const data = await response.json();
  return NextResponse.json(data, { headers: corsHeaders });
}
