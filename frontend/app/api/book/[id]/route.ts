import { NextRequest, NextResponse } from "next/server";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

// ref: https://nextjs.org/docs/app/api-reference/file-conventions/route#dynamic-route-segments
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: "Missing query" },
      { status: 400, headers: corsHeaders }
    );
  }
  try {
    const response = await fetch(`https://openlibrary.org/works/${id}.json`);
    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data, { headers: corsHeaders });
    }

    const error = await response.text();
    return NextResponse.json(`OpenLibrary API error: ${error}`, {
      status: response.status,
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
