"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <section
      className="
        min-h-[100svh]
        flex
        items-center
        justify-center
        bg-[#FAF9F7]
        px-6
      "
    >
      <div className="text-center">
        {/* Имена */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            script
            text-6xl
            sm:text-7xl
            md:text-8xl
            text-[#5F554B]
            font-normal
            leading-none
          "
        >
          Arsen & Sogdiana
        </motion.h1>

        {/* Золотая линия */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 1.3,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="
            h-px
            w-20
            bg-[#B89664]
            mx-auto
            my-10
            origin-center
          "
        />

        {/* Подпись */}
        <motion.p
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 1,
            ease: "easeOut",
          }}
          className="
            uppercase
            tracking-[0.5em]
            text-[9px]
            sm:text-[10px]
            text-[#9B8B78]
            pl-[0.5em]
          "
        >
          Wedding Invitation
        </motion.p>
      </div>
    </section>
  );
}