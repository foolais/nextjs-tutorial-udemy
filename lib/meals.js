import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // add delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Something went wrong");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMealsBySlug(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
