import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export default function proxy(request: NextRequest) {
  // get active token - cookie
  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // no redirect or blocking
  return NextResponse.next();
}

// protect these routes if no token
export const config = {
  matcher: [
    "/user/:userId([a-zA-Z0-9]+)/library",
    "/api/user/:userId([a-zA-Z0-9]+)/books",
  ],
};
