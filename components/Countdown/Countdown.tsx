"use client";

import { useEffect, useState } from "react";


const weddingDate = new Date(
  "2027-07-12T17:00:00"
);


function calculateTime() {

  const now = new Date();

  const difference =
    weddingDate.getTime() -
    now.getTime();


  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }


  return {

    days:
      Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
      ),


    hours:
      Math.floor(
        (difference /
        (1000 * 60 * 60))
        % 24
      ),


    minutes:
      Math.floor(
        (difference /
        (1000 * 60))
        % 60
      ),


    seconds:
      Math.floor(
        (difference /
        1000)
        % 60
      ),

  };

}



export default function Countdown() {


  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });



  useEffect(() => {

    setTime(calculateTime());


    const timer = setInterval(() => {

      setTime(calculateTime());

    }, 1000);



    return () => clearInterval(timer);


  }, []);



  const items = [

    {
      value: time.days,
      label: "дней"
    },

    {
      value: time.hours,
      label: "часов"
    },

    {
      value: time.minutes,
      label: "минут"
    },

    {
      value: time.seconds,
      label: "секунд"
    },

  ];



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

      <div
        className="
          text-center
        "
      >

        <p
          className="
            uppercase
            tracking-[8px]
            text-xs
            text-[#B89664]
            mb-10
          "
        >
          Save The Date
        </p>



        <h2
          className="
            text-7xl
            md:text-9xl
            text-[#5F554B]
            font-light
          "
        >
          12
        </h2>



        <p
          className="
            text-2xl
            tracking-[12px]
            text-[#B89664]
            mt-4
          "
        >
          ИЮЛЯ
        </p>



        <p
          className="
            text-xl
            text-[#5F554B]
            mt-3
          "
        >
          2027
        </p>



        <div
          className="
            w-24
            h-px
            bg-[#B89664]
            mx-auto
            my-12
          "
        />



        <div
          className="
            grid
            grid-cols-4
            gap-5
            max-w-xl
            mx-auto
          "
        >

          {
            items.map((item)=>(

              <div key={item.label}>

                <div
                  className="
                    text-3xl
                    md:text-5xl
                    text-[#5F554B]
                    font-light
                  "
                >
                  {item.value}
                </div>


                <p
                  className="
                    text-xs
                    uppercase
                    tracking-widest
                    text-[#B89664]
                    mt-2
                  "
                >
                  {item.label}
                </p>

              </div>

            ))
          }

        </div>


      </div>


    </section>

  );

}