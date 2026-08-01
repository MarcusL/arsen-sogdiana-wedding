"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [status, setStatus] = useState(
    "JavaScript ещё не запустился"
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStatus(
        "JavaScript работает на этом телефоне"
      );
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section
      className="
        min-h-[100svh]
        flex
        items-center
        justify-center
        bg-[#F8F5EF]
        px-6
        py-20
      "
    >
      <div className="text-center">
        <h2 className="text-3xl text-[#5F554B]">
          Тест Countdown
        </h2>

        <p className="mt-6 text-xl text-[#B89664]">
          {status}
        </p>
      </div>
    </section>
  );
}