"use client";

import { Content, Footer } from "@/components";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState<boolean>(true);

  useEffect(() => {
    setState(false);
  }, [state]);
  return (
    <div
      className={`flex flex-col gap-20 justify-center items-center duration-700 ${
        state ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <Content />
      <Footer />
    </div>
  );
}
