import { Suspense } from "react";
import SearchPage from "../components/SearchPage/SearchPage";

export default function Search() {
  return (
    <Suspense fallback={<div className="my-16 mx-auto px-20">Loading...</div>}>
      <SearchPage />
    </Suspense>
  );
}
