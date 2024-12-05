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
          ? "bg-primary bg-clip-text text-transparent"
          : "hover:bg-primary hover:bg-clip-text hover:text-transparent transition-all duration-300 ease-in-out"
      }
    >
      {item.name}
    </Link>
  );
}
