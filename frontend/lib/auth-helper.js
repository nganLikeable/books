import { adminAuth } from "@/lib/firebase-admin-config";
import { cookies } from "next/headers";

export async function getAuthenticatedId() {
  // get token from cookie
  const cookieStore = await cookies();

  // return cookie obj, then extract the string
  const token = cookieStore.get("auth-token")?.value;

  if (!token) {
    throw new Error("UNAUTHORIZED");
  } // retrieve user id from firebase admin
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    return decodedToken.uid;
  } catch (e) {
    console.error("Firebase admin  verify error", e);
    throw new Error("INVALID_TOKEN");
  }
}
