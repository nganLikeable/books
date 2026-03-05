# Bookie: Full-Stack Library & Book Review Manager

Live Demo: 👉 [View the project on Vercel](https://books-vplo-n102bg9mb-nganlikeables-projects.vercel.app/)

> **Test Account:** `test3@gmail.com` / `123456`

## About This Project

A modern web application for tracking your reading jourey, managing personal bookshelves with statuses (want to read, currently reading and read) and book reviews. Inspired by Goodreads and my reading interest.

## Tech Stack

- Nextjs (App router)
- Tailwind CSS
- PostgreSQL with Prisma ORM
- Firebase Authentication & Admin SDK

### Deployment

- Vercel

## Key Features

- Authentication: Secure user sessions using Firebase Authentication and custom Middleware
- Dynamic Shelving: Move books between shelves(status) or remove with instant UI updates with full CRUD functionality
- Reviews: Add book review if book status is saved as 'READ' - to be updated
- Global Search: Integrated OpenLibrary API [openlibrary](https://openlibrary.org/) for real-time book discovery via API endpoints.
- Responsive Design: Modern UI with themes.

## Local SetUp

1. Clone the repository

```bash
https://github.com/nganLikeable/books.git
```

2. Install dependencies

```bash
npm install
```

3. Environment Configuration
   Create a .env.local and .env file in the root directory and add your credentials

- .env.local:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
NEXT_PUBLIC_FIREBASE_APP_ID=""
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=""

# firebase admin
FIREBASE_ADMIN_PROJECT_ID=""
FIREBASE_ADMIN_PRIVATE_KEY=""
FIREBASE_ADMIN_CLIENT_EMAIL=""
```

- .env file:

```bash
DATABASE_URL=""
```

4. Database Initialization (Prisma)

```bash
npx prisma generate
npx prisma db push
npx prisma migrate dev --name init
```

- View Data (Prisma Studio)

```bash
npx prisma studio
```

5. Run Project

```bash
npm run dev
```

## Project Structure

```
├── app/
│ ├── api/ # Serverless API routes (BFF Pattern)
│ ├── components/ # Reusable UI components (Modals, Ratings, etc.)
│ ├── hooks/ # Custom React hooks for data fetching
│ └── (pages)/ # Next.js App Router pages
├── lib/ # Shared utilities (Prisma client, Auth helpers)
├── prisma/ # Database schema and migrations
```

## Usage

1. Search for Books: Use the search bar to find books via the OpenLibrary API
2. Authentication: sign in, sign up and log out options to keep track of your library
3. Manage shelves: click on a book and the within button to open the shelf modal. Select a status to save it to your library.
4. Review Books: If a book is marked as 'READ', the user has an option to add a review and star rating.
5. Library&Review View: Access your profile to see your book library and reviews.

## Future Roadmap

- [ ] Dockerization
- [ ] AWS Integration
- [ ] Remove reviews
- [ ] Summaries of books using LLMs
