"use client";

import { useFormStatus } from "react-dom";

export default function MealFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-primary py-2 px-4 rounded-md font-semibold hover:text-foreground transition-all duration-300 ease-in-out"
    >
      {pending ? "Submiting..." : "Share Meal"}
    </button>
  );
}
