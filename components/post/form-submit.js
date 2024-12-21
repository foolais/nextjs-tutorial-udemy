"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) return <p className="text-loading">Submitting...</p>;

  return (
    <>
      <button type="reset" className="hover:text-primary font-semibold">
        Reset
      </button>
      <button className="btn-primary">Create Post</button>
    </>
  );
}
