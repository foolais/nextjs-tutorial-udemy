import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading-out";

export const metadata = {
  title: "All Meals | NextLevel Food",
  description: "Browse our meals",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="pb-12">
        <h1 className="text-heading">
          Delicious Food, created by <span className="text-primary">you</span>
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
