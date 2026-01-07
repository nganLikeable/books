"use client";
import { useAuthor } from "@/app/hooks/useAuthor";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import BookCardSkeleton from "../BookCardSkeleton/BookCardSkeleton";
import BookList from "../BookList/BookList";

export default function AuthorDetail() {
  const pathname = usePathname();
  const authorId = pathname ? pathname.split("/")[2] : "";
  const { data, loading } = useAuthor(authorId);
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(false);

  // get books of author
  useEffect(() => {
    if (!authorId || authorId === "undefined" || !data) return;
    async function fetchBooks() {
      try {
        setLoadingBooks(true);
        const response = await fetch(`/api/author/${authorId}/works`);
        const data = await response.json();
        if (!data.entries) {
          return;
        }
        const parsedBooks = data.entries.map((item) => {
          //   console.log("work item:", item);
          //  only save books with covers available
          //  some books covers arrays are available yet the values are not in the right form, for ex: -1
          const covers = item.covers;
          if (covers && covers[0].toString().length > 1 && covers[0] > 0) {
            return {
              key: item.key,
              title: item.title,
              author_name: data.name,
              cover_i: String(item.covers[0]),
            };
          }
        });

        setBooks(parsedBooks);
      } catch (e) {
        console.error("Failed to fetch works", e);
      } finally {
        setLoadingBooks(false);
      }
    }
    fetchBooks();
  }, [authorId, data]);

  // safeguard, preventing data.name running when data is still null - fetching
  if (loading || !data) {
    return <div className="p-10 text-center">Loading Author...</div>;
  }

  const name = data.name;
  const bio = data.bio || "Bio not available";
  const birthdate = data.birth_date || "Unknown";
  const deathdate = data.death_date || "";
  const authorCover =
    `https://covers.openlibrary.org/a/olid/${authorId}-L.jpg` ||
    "/no_avatar.jpeg";

  return (
    <div className="m-20">
      <div className="flex flex-row gap-5">
        {/* prevent shrinking when image still loading*/}
        <div className="shrink-0 w-40">
          <img
            className="sticky object-scale-down max-h-full drop-shadow-md rounded-md m-auto "
            src={authorCover}
            alt="author image"
          ></img>
        </div>
        <div className="flex flex-col w-full m-2">
          <div className="">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <hr className="border-gray-300"></hr>
          </div>
          <div className="mb-5">
            <table className="table-auto w-full text-sm ">
              <tbody>
                <tr className="">
                  <th className="text-left font-semibold text-slate-600 pr-8">
                    Born
                  </th>
                  <td className=" py-1">{birthdate}</td>
                </tr>
                {deathdate && (
                  <tr className="">
                    <th className="text-left font-semibold text-slate-600 pr-8">
                      Died
                    </th>
                    <td className=" py-1">{deathdate}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div>
            <p className="text-justify">{bio}</p>
          </div>
          <div className="mt-10 mb-2">
            <h2 className="text-0.7 font-semibold">{name}'s books</h2>
            <hr className="border-gray-300"></hr>
          </div>
          <div>
            {loadingBooks ? (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7.5  w-full">
                {Array.from({ length: 40 }).map((_, i) => (
                  <BookCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <BookList books={books} />
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
