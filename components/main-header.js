import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  const onHover = "hover:bg-primary hover:bg-clip-text hover:text-transparent";

  const nav = [
    { routes: "/meals", name: "Meals" },
    { routes: "/blog", name: "Blog" },
    { routes: "/community", name: "Community" },
    { routes: "/about", name: "About" },
  ];

  return (
    <header className="flex items-center justify-between mb-6">
      <Link href="/" className="flex items-center gap-4 text-2xl font-semibold">
        <Image
          src={logoImg}
          alt="Logo"
          width={75}
          height={75}
          priority
          placeholder="blur"
        />
        <span className="bg-primary bg-clip-text text-transparent">
          NextJS Meal App
        </span>
      </Link>
      <nav className="my-4">
        <ul className="flex gap-6">
          {nav.map((item, index) => (
            <li key={index}>
              <Link href={item.routes} className={onHover}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
