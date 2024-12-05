import Link from "next/link";

export default function ShareMeals() {
  return (
    <main>
      <h1>Share Meals</h1>
      <div className="link-container">
        <p className="link">
          <Link href="/meals">Go Back</Link>
        </p>
      </div>
    </main>
  );
}
