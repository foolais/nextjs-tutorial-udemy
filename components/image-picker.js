"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  function pickImageHandler() {
    imageInput.current.click();
  }

  function imageChangesHandler(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="grid gap-4">
        <div className="relative w-56 h-56 border-[1px] border-white flex items-center justify-center">
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="images"
              fill
              className="object-cover object-center"
            />
          ) : (
            <p className="text-sm">No image picked yet.</p>
          )}
        </div>
        <input
          ref={imageInput}
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={imageChangesHandler}
          required
        />
        <button
          className="h-max w-max bg-primary bg-clip-text text-transparent border-[1px] border-[#ff512f] px-2 py-1 rounded-md font-semibold transition-all duration-300 ease-in-out hover:bg-primary hover:bg-clip-padding hover:text-black"
          type="button"
          onClick={pickImageHandler}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
