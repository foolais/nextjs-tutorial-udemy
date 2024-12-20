"use client";

export default function Error({ error }) {
  return (
    <main className="text-center">
      <h1 className="text-4xl font-extrabold uppercase text-primary">
        An error occurred
      </h1>
      <p className="mt-4 tetx-lg">{error.message}</p>
    </main>
  );
}
