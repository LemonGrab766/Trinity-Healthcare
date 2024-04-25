"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CarouselComp = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const totalServices = services.length;

  const nextService = () => {
    setAnimationClass("slide-out-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalServices);
      setAnimationClass("slide-in-right");
    }, 200);
  };

  const prevService = () => {
    setAnimationClass("slide-out-right");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + totalServices) % totalServices
      );
      setAnimationClass("slide-in-left");
    }, 200);
  };

  const service = services[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("slide-out-left");

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalServices);
        setAnimationClass("slide-in-right");
      }, 200);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative">
      <button
        className="absolute -bottom-16 left-1/3  lg:bottom-auto lg:-left-10 lg:top-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-[#00AAA3] hover:bg-[#00938D] text-white  rounded-lg"
        onClick={prevService}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <div
        className={`flex flex-col gap-10 h-full p-5 md:p-10 rounded-2xl ${animationClass}`}
      >
        <h2 className="text-[#00AAA3] text-[20px] md:text-[60px] font-normal text-center">
          <span className="inline-block border-b-4 border-[#00aaa486] mr-3 md:mr-8 font-bold">
            {service.title.split(" ")[0]}
          </span>
          {service.title.substring(service.title.indexOf(" ") + 1)}
        </h2>
        <div className="flex relative sm:max-h-[400px] h-[400px]">
          {/* <Image
            src={service.image}
            alt={service.title}
            // width={1000}
            // height={1000}
            objectPosition="center"
            objectFit="cover"
            layout="fill"
            className="rounded-2xl absolute shadow-xl shadow-gray-600"
          /> */}
          <Image
        src={service.image}
        alt={service.title}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        className="rounded-2xl absolute shadow-xl shadow-gray-600"
      />
        </div>
        <div className="flex flex-wrap gap-10 lg:gap-0  text-white justify-around">
          {service.text.map((text, index) => (
            <div
              key={index}
              className={` ${
                service.text.length > 2 ? " max-w-[350px] " : " max-w-[400px] "
              } bg-[#00AAA3] p-5 rounded-xl mt-3`}
            >
              <h3 className="mb-5 font-bold text-[20px]">{text.title}</h3>
              <p className="font-medium">{text.text}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute -bottom-16 right-1/3 lg:bottom-auto  lg:-right-10 lg:top-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-[#00AAA3] hover:bg-[#00938D] text-white  rounded-lg"
        onClick={nextService}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselComp;
