import useGetUser from "@/app/hooks/useGetUser";
import { LibraryUserBook } from "@/app/types/database";
import Link from "next/link";
import { useState } from "react";
import ShelfModal from "../ShelfModal/ShelfModal";

export default function LibraryBookCard({
  userBook,
}: {
  userBook: LibraryUserBook;
}) {
  if (!userBook) return null;

  const book = userBook.book ?? userBook.book; // support either nested book or flat
  const authors = (book as any)?.authors || [];

  const { userId } = useGetUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div key={book.id} className="group flex flex-col gap-3">
      <div className="relative aspect-2/3 w-full overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-orange-500/10">
        <div className="group relative cursor-pointer">
          <img
            src={book?.cover || "/no_cover.jpg"}
            alt="Book cover"
            className="mt-3 w-full object-fill  aspect-2/3  rounded transition-opacity duration-300 group-hover:opacity-40"
            loading="lazy"
          ></img>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-50 transition-opacity duration-300 group-hover:opacity-100">
          <button
            className="text-sm text-white"
            onClick={() => setIsModalOpen(true)}
          >
            Edit
          </button>
        </div>
      </div>

      {isModalOpen && userId && (
        <ShelfModal
          mode="update"
          userId={userId}
          bookId={book.id}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <div className="flex flex-col">
        <Link
          href={`/book/${book.id}`}
          className="font-bold  cursor-pointer hover:underline  hover:text-orange-600 transition-colors line-clamp-2"
        >
          {book.title}
        </Link>
        <div className="mt-1 text-xs text-gray-400 font-medium">
          {authors.map((a: any, aIndex: number) => {
            return (
              <div key={`${a.id}`}>
                <Link
                  href={`/author/${a.id}`}
                  className="hover:font-bold hover:underline transition-colors "
                >
                  {a.name}
                </Link>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
}
