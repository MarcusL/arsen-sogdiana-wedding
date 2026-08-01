"use client";

import { motion } from "framer-motion";


type Petal = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  rotate: number;
  drift: number;
};


const petals: Petal[] = [
  {
    id: 1,
    left: 4,
    duration: 13,
    delay: 0,
    size: 14,
    rotate: 20,
    drift: 70,
  },
  {
    id: 2,
    left: 11,
    duration: 16,
    delay: 3,
    size: 18,
    rotate: 110,
    drift: -60,
  },
  {
    id: 3,
    left: 18,
    duration: 11,
    delay: 6,
    size: 12,
    rotate: 250,
    drift: 50,
  },
  {
    id: 4,
    left: 25,
    duration: 18,
    delay: 1,
    size: 20,
    rotate: 70,
    drift: -80,
  },
  {
    id: 5,
    left: 32,
    duration: 14,
    delay: 8,
    size: 15,
    rotate: 180,
    drift: 65,
  },
  {
    id: 6,
    left: 39,
    duration: 17,
    delay: 4,
    size: 19,
    rotate: 300,
    drift: -55,
  },
  {
    id: 7,
    left: 46,
    duration: 12,
    delay: 10,
    size: 13,
    rotate: 40,
    drift: 75,
  },
  {
    id: 8,
    left: 53,
    duration: 15,
    delay: 2,
    size: 17,
    rotate: 140,
    drift: -65,
  },
  {
    id: 9,
    left: 60,
    duration: 19,
    delay: 7,
    size: 21,
    rotate: 230,
    drift: 60,
  },
  {
    id: 10,
    left: 67,
    duration: 13,
    delay: 5,
    size: 14,
    rotate: 330,
    drift: -70,
  },
  {
    id: 11,
    left: 74,
    duration: 16,
    delay: 9,
    size: 18,
    rotate: 90,
    drift: 55,
  },
  {
    id: 12,
    left: 81,
    duration: 12,
    delay: 3,
    size: 12,
    rotate: 200,
    drift: -50,
  },
  {
    id: 13,
    left: 88,
    duration: 18,
    delay: 6,
    size: 20,
    rotate: 280,
    drift: 80,
  },
  {
    id: 14,
    left: 95,
    duration: 14,
    delay: 11,
    size: 16,
    rotate: 150,
    drift: -60,
  },
];


export default function Petals() {

  return (

    <div
      aria-hidden="true"
      className="
        fixed
        inset-0
        pointer-events-none
        overflow-hidden
        z-[50]
      "
    >

      {
        petals.map((petal) => (

          <motion.div

            key={petal.id}

            initial={{
              y: -120,
              x: 0,
              rotate: petal.rotate,
              opacity: 0,
            }}

            animate={{
              y: "110vh",

              x: [
                0,
                petal.drift,
                -petal.drift * 0.5,
                petal.drift * 0.3,
              ],

              rotate: [
                petal.rotate,
                petal.rotate + 180,
                petal.rotate + 420,
                petal.rotate + 720,
              ],

              opacity: [
                0,
                0.8,
                0.65,
                0,
              ],
            }}

            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            }}

            style={{
              left: `${petal.left}%`,
            }}

            className="
              absolute
              top-0
              will-change-transform
            "
          >

            <svg
              width={petal.size}
              height={petal.size * 1.5}
              viewBox="0 0 30 45"
              fill="none"
            >

              <path

                d="
                  M15 1
                  C5 10 2 20 15 44
                  C28 20 25 10 15 1
                "

                fill="#EFE6DA"

                stroke="#D8C5AB"

                strokeWidth="0.6"

              />

              <path

                d="
                  M15 4
                  C14 15 14 28 15 42
                "

                stroke="#D8C5AB"

                strokeWidth="0.5"

                opacity="0.65"

              />

            </svg>

          </motion.div>

        ))
      }

    </div>

  );

}