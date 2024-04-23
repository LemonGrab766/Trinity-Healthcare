"use client";

import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = ({ services }) => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop interval={10000}>
      {services.map((service, index) => (
        <div
          key={index}
          className={` flex flex-col gap-10  h-full p-10 rounded-2xl`}
        >
          <h2 className=" text-[#00AAA3] font-normal">
            <span className="inline-block border-b-4 border-[#00aaa486] mr-8 font-bold">
              {service.title.split(" ")[0]}
            </span>
            {service.title.substring(service.title.indexOf(" ") + 1)}
          </h2>
          <div className=" flex sm:max-h-[400px] ">
            <Image
              src={service.image}
              alt={service.title}
              width={1000}
              height={1000}
              // objectFit="cover"
              // objectPosition="center"
              // layout="fill"
              layout="responsive"
              className=" rounded-2xl shadow-xl shadow-gray-600"
            />
          </div>
          <div className=" flex text-[#0C4068] gap-3 items-center justify-center">
            {service?.text.map((text, index) => (
              <div key={index}>
                <h3 className=" mb-2 font-bold text-[20px]">{text.title}</h3>
                <p className=" font-medium">{text.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComp;
