import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header>
      <nav>
        <ul className="flex gap-6">
          {links.map((link) => {
            return (
              <li key={link}>
                <Link
                  href={`/archive/${link}`}
                  className="hover:text-primary text-lg transition-all duration-300 ease-in-out"
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
