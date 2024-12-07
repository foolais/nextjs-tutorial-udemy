const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyData = [
  {
    title: "Asian Food",
    slug: "asian-food",
    image: "/images/asian-food.jpg",
    summary:
      "A fresh and healthy dish typically made from a mix of raw vegetables, such as lettuce, tomatoes, cucumbers, and onions, often complemented with a dressing, cheese, nuts, or croutons.",
    instructions:
      "1. Wash and dry the lettuce.\n2. Chop the vegetables (tomatoes, cucumbers, onions) into bite-sized pieces.\n3. Mix the lettuce and vegetables in a large bowl.\n4. Add your favorite dressing and toss the salad.\n5. Top with croutons, cheese, or nuts as desired.",
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "Japan Food",
    slug: "japan-food",
    image: "/images/japan-food.jpg",
    summary:
      "A flavorful Japanese noodle dish served in a savory broth, often seasoned with soy sauce or miso.",
    instructions:
      "1. Bring a pot of water to a boil and cook the ramen noodles according to the package instructions. Drain and set aside.\n2. In a separate pot, heat the broth and add soy sauce, miso paste, or other seasonings to taste.\n3. Prepare your toppings: slice boiled eggs, chop green onions, and cook any meat or vegetables you want to add (e.g., sliced pork, mushrooms, or spinach).\n4. Place the cooked noodles in a bowl and pour the hot broth over them.\n5. Arrange the toppings neatly on top of the noodles. Serve hot and enjoy!",
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
    summary TEXT NOT NULL,
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
            @summary,
            @instructions,
            @creator,
            @creator_email
        )`);

  for (const meal of dummyData) {
    stmt.run(meal);
  }
}

initData();
