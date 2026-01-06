import { adminAuth } from "@/lib/firebase-admin-config";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export async function getAuthenticatedId() {
  // get token from cookie
  const cookieStore = await cookies();

  // return cookie obj, then extract the string
  const token = cookieStore.get("auth-token")?.value;

  if (!token) {
    return {
      error: new NextResponse(
        JSON.stringify({ error: "Unauthorized - No token provided" }),
        { status: 401, headers: corsHeaders }
      ),
    };
  } // retrieve user id from firebase admin
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    return decodedToken.uid;
  } catch (e) {
    console.error(e);
    return {
      error: new NextResponse(
        JSON.stringify({ error: "Invalid or expired token" }),
        { status: 401, headers: corsHeaders }
      ),
    };
  }
}
