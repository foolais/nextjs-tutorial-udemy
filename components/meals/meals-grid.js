import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      {meals &&
        meals.map((meal, index) => (
          <li key={index}>
            <MealItem {...meal} />
          </li>
        ))}
    </ul>
  );
}
