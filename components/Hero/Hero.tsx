"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    console.log("HERO LOADED");
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Затемнение фотографии */}
      <div className="absolute inset-0 bg-white/45 z-10" />

      {/* Фоновое изображение */}
      <Image
        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2000&auto=format&fit=crop"
        alt="Wedding"
        fill
        priority
        className="object-cover"
      />

      {/* Контент */}
      <div className="relative z-20 flex h-full items-center justify-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.6,
          }}
          className="text-center px-6"
        >

          <p className="uppercase tracking-[8px] text-[#B89664] text-sm mb-6">

            Wedding Invitation

          </p>

          <h1
className="
script
text-8xl
md:text-9xl
text-[#5F554B]
mb-2
"
>
Арсен
</h1>

          <p className="text-5xl text-[#B89664] italic mb-2">

            &

          </p>

          <h2
className="
script
text-8xl
md:text-9xl
text-[#5F554B]
"
>
Асель
</h2>

          <div className="w-24 h-px bg-[#B89664] mx-auto my-10"></div>

          <p className="max-w-xl mx-auto text-lg leading-8 text-[#5F554B]">

            Приглашают вас разделить самый счастливый день
            своей жизни.

          </p>

          <button
            className="
            mt-12
            border
            border-[#B89664]
            rounded-full
            px-10
            py-4
            text-[#B89664]
            transition-all
            duration-500
            hover:bg-[#B89664]
            hover:text-white
            "
          >

            Открыть приглашение

          </button>

        </motion.div>

      </div>

    </section>
  );
}