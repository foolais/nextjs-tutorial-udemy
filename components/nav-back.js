"use client";

import { useRouter } from "next/navigation";

export default function NavBack({ text }) {
  const router = useRouter();
  return (
    <div
      onClick={router.back}
      className="hover:text-primary text-lg font-semibold transition-all duration-300 ease-in-out text-stone-300 cursor-pointer flex items-center gap-2 w-max"
    >
      <span>{"< "}</span>
      {text}
    </div>
  );
}
