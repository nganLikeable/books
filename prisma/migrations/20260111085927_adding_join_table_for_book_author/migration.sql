-- CreateTable
CREATE TABLE "AuthorBook" (
    "bookId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "AuthorBook_pkey" PRIMARY KEY ("bookId","authorId")
);

-- AddForeignKey
ALTER TABLE "AuthorBook" ADD CONSTRAINT "AuthorBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorBook" ADD CONSTRAINT "AuthorBook_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
