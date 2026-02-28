export const navLinks = (userId?: string) => [
  { href: "/", label: "Bookie" },
  { href: "/about", label: "About" },

  {
    href: userId ? `/user/${userId}/library` : "/sign-in",
    label: "Your library",
  },
  {
    href: userId ? `/user/${userId}/reviews` : "/sign-in",
    label: "Your reviews",
  },
];
