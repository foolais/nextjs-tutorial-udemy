"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import asianFood from "@/assets/asian-food.jpg";
import westernFood from "@/assets/western-food.jpg";
import koreanFood from "@/assets/korean-food.jpg";
import japanFood from "@/assets/japan-food.jpg";

const images = [
  { data: asianFood, alt: "asian food" },
  { data: westernFood, alt: "western food" },
  { data: koreanFood, alt: "korean food" },
  { data: japanFood, alt: "japan food" },
];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <Image
              src={image.data}
              alt={image.alt}
              className="object-cover rounded-lg w-auto h-auto"
              width={300}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
