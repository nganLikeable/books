"use client";
import { useAuthors } from "@/app/hooks/useAuthors";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { useFetchAuthorWorks } from "@/app/hooks/useFetchAuthorWorks";
import "react-loading-skeleton/dist/skeleton.css";
import BookList from "../BookList/BookList";
import Spinner from "../Spinner/Spinner";

export default function AuthorDetail() {
  const pathname = usePathname();
  const authorId = pathname ? pathname.split("/")[2] : "";

  // convert id to string to use as parameter
  // useMemo to ensure array stay the same, preventing re-renders infinitely
  const arr = useMemo(() => [authorId], [authorId]);
  const { authors, loading: isLoadingAuthors } = useAuthors(arr);
  const author = authors.length > 0 ? authors[0] : [];

  // const [books, setBooks] = useState([]);

  // const [loadingBooks, setLoadingBooks] = useState(false);

  const { books, isLoadingBooks } = useFetchAuthorWorks(authorId);

  // safeguard, preventing data.name running when data is still null - fetching
  if (isLoadingAuthors || isLoadingBooks || !author) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Spinner />
      </div>
    );
  }
  console.log(author);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 ">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* prevent shrinking when image still loading*/}
        <aside className="w-full md:w-1/3 lg:w-1/4 shrink-0 flex flex-col gap-6 sticky md:top-24">
          <div className="relative aspect-square md:aspect-3/4 overflow-hidden rounded-2xl shadow-2xl bg-zinc-100 border border-zinc-20">
            <img
              className=" w-full h-full object-cover "
              src={author.cover}
              alt="author image"
            ></img>
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <header className="mb-3">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
              {author.name}
            </h1>
            <div className="h-1.5 w-24 bg-orange-600 rounded-full" />{" "}
          </header>
          <div className="mb-3">
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
            <div>
              <p className="text-justify">{author.bio}</p>
            </div>
            <div className="mt-10 mb-2">
              <h2 className="text-0.7 font-semibold">{author.name}'s books</h2>
              <hr className="border-gray-300"></hr>
            </div>
            <div>
              <BookList books={books} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
