import ImagePicker from "@/components/image-picker";
import { shareMealHandler } from "@/lib/actions";

export default function ShareMeals() {
  const inputContainer = "grid gap-1 mb-4";
  const labelClassName = "uppercase font-semibold text-sm";
  const inputClassName = "bg-black px-4 py-2 rounded-md";

  return (
    <>
      <header className="pb-10 px-8">
        <h1 className="text-3xl font-bold tracking-wide">
          Share your{" "}
          <span className="bg-primary bg-clip-text text-transparent">
            favorite meals
          </span>
        </h1>
        <p className="mt-2 mb-4 text-lg">Or any other meal you like!</p>
      </header>
      <main>
        <form className="w-[650px] px-8" action={shareMealHandler}>
          <div className="grid grid-cols-2 gap-4">
            <p className={inputContainer}>
              <label htmlFor="name" className={labelClassName}>
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
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
                required
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
              required
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
              required
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
              required
            />
          </p>
          <ImagePicker label="meal image" name="image" />
          <p className="flex justify-end">
            <button
              type="submit"
              className="bg-primary py-2 px-4 rounded-md font-semibold hover:text-foreground transition-all duration-300 ease-in-out"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
