import { getMealsBySlug } from "@/lib/meals";
import Image from "next/image";

export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;
  const meal = await getMealsBySlug(mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className="flex gap-8 lg:w-3/5 mx-auto">
        <div className="relative h-52 lg:h-64 w-1/2 rounded-lg overflow-hidden">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="p-4 w-1/2">
          <h1 className="text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-primary">
            {meal.title}
          </h1>
          <p className="my-3 text-stone-400">
            by{" "}
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-primary bg-clip-text text-transparent"
            >
              {meal.creator}
            </a>
          </p>
          <p className="font-light text-stone-400 text-sm text-balance">
            {meal.summary}
          </p>
        </div>
      </header>
      <main className="mt-8">
        <div className="bg-stone-800 rounded-lg px-8 py-4 lg:w-3/5 mx-auto">
          <h2 className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-primary">
            Instructions
          </h2>
          <p
            dangerouslySetInnerHTML={{ __html: meal.instructions }}
            className="my-4 leading-8"
          />
        </div>
      </main>
    </>
  );
}
