"use client";

import NavBack from "../nav-back";
import FormSubmit from "./form-submit";
import { useActionState } from "react";

export default function PostForm({ action }) {
  const [state, formAction] = useActionState(action, {});

  return (
    <>
      <header>
        <NavBack text="Back to all posts" />
        <h1 className="text-heading my-6">
          <span className="text-primary">Create</span> a new post
        </h1>
      </header>
      <main>
        <form action={formAction} className="w-10/12">
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
            <label htmlFor="image" className="input-label">
              Image
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              id="image"
              name="image"
              className="input-field"
            />
          </p>
          <p className="input-container">
            <label htmlFor="content" className="input-label">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows="5"
              className="input-field"
            />
          </p>
          <div className="flex gap-8 justify-end mt-8">
            <FormSubmit />
          </div>
          {state.errors && (
            <ul className="text-red-500 flex justify-end gap-4 mt-4">
              {state.errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </form>
      </main>
    </>
  );
}
