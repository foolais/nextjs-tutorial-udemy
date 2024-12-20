import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import NavLink from "./nav-link";

const nav = [
  { routes: "/meals", name: "Meals" },
  { routes: "/news", name: "News" },
  { routes: "/archive", name: "Archive" },
  { routes: "/community", name: "Community" },
  { routes: "/about", name: "About" },
];

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between mb-6">
      <Link
        href="/"
        className="flex items-center gap-4 text-2xl font-semibold group"
      >
        <Image
          src={logoImg}
          alt="Logo"
          width={75}
          height={75}
          priority
          placeholder="blur"
          className="group-hover:rotate-45 transition-all duration-300 ease-in-out"
        />
        <span className="text-primary ">NextLevel Food</span>
      </Link>
      <nav className="my-4">
        <ul className="flex gap-6">
          {nav.map((item, index) => (
            <li key={index}>
              <NavLink item={item} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
