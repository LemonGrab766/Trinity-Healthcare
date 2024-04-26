/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <div className=" bg-[#57bbb87a] ">
      <div className=" bg-contact flex flex-col items-center justify-evenly p-5 md:p-20 ">
        <div>
          <h2 className="text-[#0C4068] text-center text-[20px] md:text-[60px] inline-block border-b-8 border-[#0C4068] mb-2">
            TESTIMONIALS
          </h2>
        </div>
        <div className="flex flex-col gap-20 mt-12 px-4 md:px-32 text-[#0C4068]">
          <div className=" relative bg-white rounded-2xl py-8 px-14">
            <Image
              src={"/images/personal-page/Icons/left.webp"}
              height={70}
              width={70}
              alt=""
              className=" absolute -top-7 -left-3"
            />
            <h4>
              "LaSonya is a forward-thinking leader skilled in IT and business
              negotiations. She inspires and challenges her team effectively."
            </h4>
            <h3 className=" text-end text-[#00AAA3] text-[18px] font-bold">
              - CEO, Convergence Med Ltd.
            </h3>
          </div>
          <div className=" relative bg-white rounded-2xl py-8 px-14">
            <Image
              src={"/images/personal-page/Icons/right.webp"}
              height={70}
              width={70}
              alt=""
              className=" absolute -top-7 -right-3"
            />
            <h4>
              "Organized and self-sufficient in project management, LaSonya has
              been a critical component of our project's success."
            </h4>
            <h3 className=" text-end text-[#00AAA3] text-[18px] font-bold">
              - Executive Director, Cumberland Pediatric Foundation
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
