"use client";

import ImagePicker from "@/components/image-picker";
import MealFormSubmit from "@/components/meals/meal-form-submit";
import { shareMealHandler } from "@/lib/actions";
import { useActionState } from "react";

export default function ShareMeals() {
  const inputContainer = "grid gap-1 mb-4";
  const labelClassName = "uppercase font-semibold text-sm";
  const inputClassName = "bg-black px-4 py-2 rounded-md";

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
            <p className={inputContainer}>
              <label htmlFor="name" className={labelClassName}>
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={inputClassName}
              />
            </p>
            <p className={inputContainer}>
              <label htmlFor="email" className={labelClassName}>
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={inputClassName}
              />
            </p>
          </div>
          <p className={inputContainer}>
            <label htmlFor="title" className={labelClassName}>
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className={inputClassName}
            />
          </p>
          <p className={inputContainer}>
            <label htmlFor="summary" className={labelClassName}>
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              className={inputClassName}
            />
          </p>
          <p className={inputContainer}>
            <label htmlFor="instructions" className={labelClassName}>
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="5"
              className={inputClassName}
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
