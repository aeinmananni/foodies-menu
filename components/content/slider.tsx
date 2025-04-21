"use client";

import { IMAGE_SLIDER_ITEMS } from "@/components/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < IMAGE_SLIDER_ITEMS.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80">
      {IMAGE_SLIDER_ITEMS.map((item, index) => (
        <Image
          key={item.id}
          src={item.image}
          alt={item.alt}
          width={800}
          height={500}
          priority
          className={`absolute w-full h-full object-cover transition-all duration-1000 rounded-md ${
            index === currentImageIndex
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-105 rotate-3"
          }`}
        />
      ))}
    </div>
  );
}
