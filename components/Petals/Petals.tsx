"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


type Petal = {
    id: number;
    left: number;
    duration: number;
    delay: number;
    size: number;
    rotate: number;
};


export default function Petals() {


    const [petals, setPetals] = useState<Petal[]>([]);



    useEffect(() => {


        const generatedPetals = Array.from(
            { length: 20 },
            (_, index) => ({

                id: index,

                left: Math.random() * 100,

                duration:
                    8 + Math.random() * 10,

                delay:
                    Math.random() * 10,

                size:
                    12 + Math.random() * 15,

                rotate:
                    Math.random() * 360,

            })
        );


        setPetals(generatedPetals);


    }, []);



    return (

        <div
            className="
            fixed
            inset-0
            pointer-events-none
            overflow-hidden
            z-[50]
            "
        >


            {
                petals.map((petal)=>(


                    <motion.div


                        key={petal.id}


                        initial={{

                            y:-100,

                            rotate:petal.rotate,

                            opacity:0,

                        }}


                        animate={{


                            y:"110vh",


                            rotate:
                                petal.rotate + 360,


                            opacity:[

                                0,

                                1,

                                1,

                                0

                            ]

                        }}



                        transition={{


                            duration:
                                petal.duration,


                            delay:
                                petal.delay,


                            repeat:Infinity,


                            ease:"linear"


                        }}



                        style={{

                            left:
                            `${petal.left}%`,

                        }}


                        className="
                        absolute
                        top-0
                        "


                    >


                        <svg

                            width={petal.size}

                            height={petal.size * 1.5}

                            viewBox="0 0 30 45"

                        >


                            <path

                                d="
                                M15 1
                                C5 10 2 20 15 44
                                C28 20 25 10 15 1
                                "

                                fill="#EFE6DA"

                            />


                        </svg>


                    </motion.div>


                ))
            }


        </div>

    );

}