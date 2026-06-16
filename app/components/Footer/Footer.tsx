import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-line-bg mt-16 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-xs text-gray-400">
        <span>© {new Date().getFullYear()} Bookie — made by Ngan</span>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/nganLikeable"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ngannk7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
