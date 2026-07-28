"use client";

import { motion } from "framer-motion";


export default function Loader() {


    return (

        <motion.div


            initial={{
    opacity:0
}}

animate={{
    opacity:1
}}

transition={{
    duration:1.5
}}


            className="
min-h-screen
flex
items-center
justify-center
bg-[#FAF9F7]
"


        >


            <div className="text-center">


<motion.h1

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
script
text-6xl
md:text-7xl
text-[#5F554B]
font-normal
"

>

Arsen & Assel

</motion.h1>



<motion.div

initial={{
width:0
}}

animate={{
width:70
}}

transition={{
duration:1,
delay:0.5
}}

className="
h-[1px]
bg-[#B89664]
mx-auto
my-10
"

/>



<p

className="
uppercase
tracking-[7px]
text-[10px]
text-[#9B8B78]
"

>

Wedding Invitation

</p>


</div>


        </motion.div>

    )

}