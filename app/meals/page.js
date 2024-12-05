import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Meals</h1>
      <div className="link-container">
        <p className="link">
          <Link href="/">Home</Link>
        </p>
        <p className="link">
          <Link href="/meals/pizza">Pizza</Link>
        </p>
        <p className="link">
          <Link href="/meals/burger">Burger</Link>
        </p>
        <p className="link">
          <Link href="/meals/share">Share Meals</Link>
        </p>
      </div>
    </main>
  );
}
