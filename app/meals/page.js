import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading-out";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="pb-12 px-8">
        <h1 className="text-3xl font-bold tracking-wide">
          Delicious Food, created by{" "}
          <span className="bg-primary bg-clip-text text-transparent">you</span>
        </h1>
        <p className="mt-2 mb-4 text-lg tracking-wide">
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
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
