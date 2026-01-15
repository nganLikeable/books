"use client";
import { useAuthors } from "@/app/hooks/useAuthors";
import { useBook } from "@/app/hooks/useBook";
import useGetUser from "@/app/hooks/useGetUser";
import { Author } from "@/app/types/database";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import SaveToShelfButton from "../SaveToShelfButton/SaveToShelfButton";
import ShelfModal from "../ShelfModal/ShelfModal";
import Spinner from "../Spinner/Spinner";

export default function BookDetails() {
  const pathname = usePathname();
  const bookId = pathname ? pathname.split("/")[2] : "";

  const { bookWithDetails, loading } = useBook(bookId);
  console.log(bookWithDetails);

  const title = bookWithDetails?.title;

  const authorIds = bookWithDetails?.authorIds || [];

  const { authors, loading_a } = useAuthors(authorIds || []);
  console.log(authors);

  const { userId } = useGetUser();

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading || loading_a) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Spinner />
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/*left col - sticky*/}
        <aside className="w-full md:w-64 lg:w-72 md:sticky md:top-10 flex flex-col gap-5">
          <div className="relative aspect-2/3 w-full rounded-lg overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
            {bookWithDetails?.cover ? (
              <img
                src={bookWithDetails.cover}
                alt="Book cover"
                loading="lazy"
              ></img>
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400 italic text-sm">
                No cover available
              </div>
            )}
          </div>
          <div className="w-full">
            <SaveToShelfButton onClick={() => setIsModalOpen(true)} />
          </div>
        </aside>

        {/* Modal Logic */}
        {isModalOpen && userId && (
          <ShelfModal
            bookId={bookId}
            userId={userId}
            title={title || ""}
            authors={authors}
            cover={bookWithDetails?.cover || ""}
            onClose={() => setIsModalOpen(false)}
          />
        )}

        {/* right col */}
        <section className="flex-1 flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              {bookWithDetails?.title}
            </h1>
            {authors.map((a: Author, index: number) => (
              <span key={`${a}-${index}`}>
                <Link
                  className="font-semibold text-orange-600 hover:text-orange-700 transition-colors decoration-orange-200 underline-offset-4 hover:underline"
                  href={`/author/${authorIds[index]}`}
                >
                  {a.name}
                </Link>
                <br></br>
              </span>
            ))}
          </header>
          <hr className="border-gray-100" />
          {/* description */}
          <article className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-[0.15em] font-bold text-gray-500">
              Description
            </h3>
            <div className="prose prose-sm md:prose-base text-foreground leading-relaxed max-w-none">
              <p className="whitespace-pre-line">
                {bookWithDetails?.description ||
                  "A detailed description for this work is currently unavailable."}
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
