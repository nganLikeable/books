import { BookWithDetails } from "@/app/types/database";
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

    // // get unique author Ids
    // const authorIds = data.entries
    //   .flatMap(
    //     (book: any) =>
    //       book.authors?.map((a: any) => a.author.key.split("/")[2]) || []
    //   )
    //   .filter(Boolean); // remove null or undefined
    // const uniqueAuthorIds = new Set<string>(authorIds);
    // const aIds = Array.from(uniqueAuthorIds);

    // // preventing fetching for the same authors
    // const authorCache: Record<string, { id: string; name: string }> = {};

    // await Promise.all(
    //   aIds.map(async (id) => {
    //     try {
    //       const res = await fetch(`https://openlibrary.org/authors/${id}.json`);
    //       if (!res.ok) {
    //         console.warn(`Author fetch failed: ${id}`, res.status);
    //         return;
    //       }
    //       const data = await res.json();
    //       if (data?.name) {
    //         authorCache[id] = {
    //           id: id,
    //           name: data.name,
    //         };
    //       }
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   })
    // );

    const books = data.entries.map((book: any): BookWithDetails => {
      const covers = book.covers;
      const coverId =
        covers && covers.length > 0 && covers[0] > 0 ? String(covers[0]) : null;
      // console.log(`Book: ${item.title} | Cover ID: ${coverId}`);

      // if (covers && covers[0].toString().length > 1 && covers[0] > 0) {
      const cover = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : "/no_cover.jpg";

      // const thisBookAuthorIds: string[] =
      //   book.authors?.map((a: any) => a.author.key.split("/")[2]) || [];

      return {
        id: book.key.split("/")[2],
        title: book.title,
        cover: cover,
        // authors: thisBookAuthorIds.map((id) => ({
        //   id: id,
        //   name: authorCache[id]?.name || "Unknown",
        //   cover: null,
        // })),
      };
    });

    return NextResponse.json(books, { headers: corsHeaders });
  } catch (e) {
    console.error(e);
    return new NextResponse("Invalid request body", {
      status: 400,
      headers: corsHeaders,
    });
  }
}
