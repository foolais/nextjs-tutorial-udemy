"use client";

import ImagePicker from "@/components/image-picker";
import MealFormSubmit from "@/components/meals/meal-form-submit";
import { shareMealHandler } from "@/lib/actions";
import { useActionState } from "react";

export default function ShareMeals() {
  const [state, formAction] = useActionState(shareMealHandler, {
    message: null,
  });

  return (
    <>
      <header className="pb-10 px-8">
        <h1 className="text-3xl font-bold tracking-wide">
          Share your <span className="text-primary">favorite meals</span>
        </h1>
        <p className="mt-2 mb-4 text-lg">Or any other meal you like!</p>
      </header>
      <main>
        <form className="w-[650px] px-8" action={formAction}>
          <div className="grid grid-cols-2 gap-4">
            <p className="input-container">
              <label htmlFor="name" className="input-label">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-field"
              />
            </p>
            <p className="input-container">
              <label htmlFor="email" className="input-label">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
              />
            </p>
          </div>
          <p className="input-container">
            <label htmlFor="title" className="input-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input-field"
            />
          </p>
          <p className="input-container">
            <label htmlFor="summary" className="input-label">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              className="input-field"
            />
          </p>
          <p className="input-container">
            <label htmlFor="instructions" className="input-label">
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="5"
              className="input-field"
            />
          </p>
          <ImagePicker label="meal image" name="image" />
          {state.message && (
            <p className="text-red-500 text-center font-semibold my-4">
              {state.message}
            </p>
          )}
          <p className="flex justify-end">
            <MealFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
