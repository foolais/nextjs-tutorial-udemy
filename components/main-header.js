import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  const onHover = "hover:bg-primary hover:bg-clip-text hover:text-transparent";

  const nav = [
    { routes: "/", name: "Home" },
    { routes: "/meals", name: "Meals" },
    { routes: "/blog", name: "Blog" },
    { routes: "/community", name: "Community" },
    { routes: "/about", name: "About" },
  ];

  return (
    <header>
      <Link href="/" className="flex items-center gap-4 text-2xl font-semibold">
        <img src={logoImg.src} alt="Logo" width={75} height={75} />
        <span className="bg-primary bg-clip-text text-transparent">
          NextJS Meal App
        </span>
      </Link>
      <nav className="my-4">
        <ul className="flex">
          {nav.map((item, index) => (
            <li key={index}>
              <Link href={item.routes} className={onHover}>
                {item.name}
              </Link>
              {index < nav.length - 1 && <span className="mx-3">|</span>}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
