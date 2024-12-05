import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="link-container">
        <p className="link">
          <Link href="/about">About</Link>
        </p>
        <p className="link">
          <Link href="/blog">Blog</Link>
        </p>
      </div>
    </main>
  );
}
