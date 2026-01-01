import { auth } from "@/app/firebase/firebase-config";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function userGetUser() {
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserLoading(false);
    });
  }, []);
  return { user, userId: user?.uid, userLoading };
}
