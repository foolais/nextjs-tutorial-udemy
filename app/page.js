import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p style={{ color: "teal", marginTop: ".5rem" }}>
        <Link href="/about">About</Link>
      </p>
    </main>
  );
}
