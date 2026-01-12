"use client";
import { useAuthors } from "@/app/hooks/useAuthors";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { useFetchAuthorWorks } from "@/app/hooks/useFetchAuthorWorks";
import "react-loading-skeleton/dist/skeleton.css";
import BookCardSkeleton from "../BookCardSkeleton/BookCardSkeleton";
import BookList from "../BookList/BookList";
import Spinner from "../Spinner/Spinner";

export default function AuthorDetail() {
  const pathname = usePathname();
  const authorId = pathname ? pathname.split("/")[2] : "";

  // convert id to string to use as parameter
  // useMemo to ensure array stay the same, preventing re-renders infinitely
  const arr = useMemo(() => [authorId], [authorId]);
  const { authors, loading } = useAuthors(arr);
  const author = authors.length > 0 ? authors[0] : [];

  // const [books, setBooks] = useState([]);

  const [loadingBooks, setLoadingBooks] = useState(false);

  const { books, isLoadingBooks } = useFetchAuthorWorks(authorId);

  // safeguard, preventing data.name running when data is still null - fetching
  if (loading || !author) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Spinner />
      </div>
    );
  }
  console.log(author);

  return (
    <div className="m-20">
      <div className="flex flex-row gap-5">
        {/* prevent shrinking when image still loading*/}
        <div className="shrink-0 w-40">
          <img
            className=" object-scale-down max-h-full drop-shadow-md rounded-md m-auto "
            src={author.cover}
            alt="author image"
          ></img>
        </div>
        <div className="flex flex-col w-full m-2">
          <div className="">
            <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
            <hr className="border-gray-300"></hr>
          </div>
          <div className="mb-5">
            <table className="table-auto w-full text-sm ">
              <tbody>
                <tr className="">
                  <th className="text-left font-semibold text-slate-600 pr-8">
                    Born
                  </th>
                  <td className=" py-1">{author.birthdate}</td>
                </tr>
                {author.deathdate && (
                  <tr className="">
                    <th className="text-left font-semibold text-slate-600 pr-8">
                      Died
                    </th>
                    <td className=" py-1">{author.deathdate}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div>
            <p className="text-justify">{author.bio}</p>
          </div>
          <div className="mt-10 mb-2">
            <h2 className="text-0.7 font-semibold">{author.name}'s books</h2>
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
