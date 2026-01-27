export const navLinks = (userId?: string) => [
  { href: "/", label: "Bookie" },
  { href: "/about", label: "About" },
  { href: "/browse", label: "Browse" },
  {
    href: userId ? `/user/${userId}/library` : "/sign-in",
    label: "Your library",
  },
];
