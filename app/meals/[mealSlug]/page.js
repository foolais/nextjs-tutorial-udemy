import Link from "next/link";

export default async function MealDetails({ params }) {
  const { mealSlug } = await params;
  return (
    <main>
      <h1>Meal {mealSlug}</h1>
      <div className="link-container">
        <p className="link">
          <Link href="/meals">Go Back</Link>
        </p>
      </div>
    </main>
  );
}
