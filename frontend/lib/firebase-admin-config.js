import admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      databaseURL: "https://ngan-books.firebaseio.com",
    });
    console.log("Firebase admin initialized");
  } catch (e) {
    console.error("Firebase admin initialization error", e);
  }
}

const firebase = admin.apps.length ? admin.app() : admin.initializeApp(config);
const adminAuth = admin.auth();
const adminDb = admin.firestore();
export { admin, adminAuth, adminDb, firebase };
