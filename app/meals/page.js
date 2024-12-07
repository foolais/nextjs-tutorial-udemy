import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";

export default async function Meals() {
  const meals = await getMeals();

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold tracwing-wide">
          Delicious Food, created by{" "}
          <span className="bg-primary bg-clip-text text-transparent">you</span>
        </h1>
        <p className="mt-6 mb-4 text-lg tracking-wide">
          Choose your favorite recipe and make it by yourself!
        </p>
        <p>
          <Link
            href="/meals/share"
            className="bg-primary py-2 px-4 rounded-md font-semibold hover:text-foreground transition-all duration-300 ease-in-out"
          >
            Share your recipe
          </Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
