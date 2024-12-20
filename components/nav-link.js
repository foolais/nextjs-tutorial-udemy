"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ item }) {
  const path = usePathname();
  return (
    <Link
      href={item.routes}
      className={
        path.startsWith(item.routes)
          ? "text-primary font-semibold"
          : "hover:text-primary transition-all duration-300 ease-in-out font-semibold"
      }
    >
      {item.name}
    </Link>
  );
}
