import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello NextJS</h1>
      <p style={{ color: "teal", marginTop: ".5rem" }}>
        <Link href="/about">About</Link>
      </p>
    </main>
  );
}
