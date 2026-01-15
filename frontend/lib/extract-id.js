export function extractCover(idString) {
  const id = id.split("/")[2];

  return id
    ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`
    : "/no_cover.jpg";
}
