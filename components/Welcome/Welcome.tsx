"use client";

import { motion } from "framer-motion";


export default function Welcome() {


    return (

        <section
            className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-[#FAF9F7]
            px-6
            "
        >


            <motion.div

                initial={{
                    opacity:0,
                    y:50,
                }}

                whileInView={{
                    opacity:1,
                    y:0,
                }}

                viewport={{
                    once:true,
                }}

                transition={{
                    duration:1.2,
                }}

                className="
                max-w-3xl
                text-center
                "

            >


                <p
                    className="
                    uppercase
                    tracking-[8px]
                    text-sm
                    text-[#B89664]
                    mb-8
                    "
                >

                    Our Wedding

                </p>



                <h2
                    className="
                    text-5xl
                    md:text-7xl
                    text-[#5F554B]
                    mb-10
                    "
                >

                    Дорогие родные
                    <br/>
                    и друзья

                </h2>



                <div
                    className="
                    w-20
                    h-px
                    bg-[#B89664]
                    mx-auto
                    mb-10
                    "
                />



                <p
                    className="
                    text-lg
                    leading-9
                    text-[#7E7266]
                    "
                >

                    В нашей жизни наступает особенный день,
                    которым мы хотим поделиться с самыми
                    близкими людьми.


                    <br/>
                    <br/>


                    Мы будем счастливы видеть вас рядом
                    и разделить вместе этот важный момент.

                </p>


            </motion.div>


        </section>

    );

}