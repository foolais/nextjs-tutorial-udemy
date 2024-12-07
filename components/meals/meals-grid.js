import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul>
      {meals &&
        meals.map((meal, index) => (
          <li key={index}>
            <MealItem {...meal} />
          </li>
        ))}
    </ul>
  );
}
