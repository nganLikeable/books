import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");

  if (!query || query.trim().length < 2) {
    return NextResponse.json([]);
  }

  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=6&fields=key,title,author_name,cover_i`
    );
    const data = await response.json();

    const suggestions = (data.docs || []).map((doc: any) => ({
      id: doc.key?.split("/")[2],
      title: doc.title,
      author: doc.author_name?.[0] ?? null,
      cover: doc.cover_i
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-S.jpg`
        : null,
    }));

    return NextResponse.json(suggestions);
  } catch (e) {
    return NextResponse.json([]);
  }
}
