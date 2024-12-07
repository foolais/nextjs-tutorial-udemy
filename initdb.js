const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyData = [
  {
    title: "Asian Food",
    slug: "asian-food",
    image: "/images/asian-food.jpg",
    description: "This is a description of the Asian food.",
    instructions: "1. Do this\n2. Do that\n3. Do something else",
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "Japan Food",
    slug: "japan-food",
    image: "/images/japan-food.jpg",
    description: "This is a description of the Japan food.",
    instructions: "1. Do this\n2. Do that\n3. Do something else",
    creator: "Mary Doe",
    creator_email: "marydoe@example.com",
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
    )`
).run();

async function initData() {
  const stmt = db.prepare(`INSERT INTO meals VALUES (
            null,
            @slug,
            @title,
            @image,
            @description,
            @instructions,
            @creator,
            @creator_email
        )`);

  for (const meal of dummyData) {
    stmt.run(meal);
  }
}

initData();
