import Image from "next/image";
import React from "react";

export default function SectionAbout() {
  return (
    <div
      className={`grid grid-cols-[1.5fr_2fr] gap-4 p-20 justify-center items-center`}
    >
      <>
        <div className=" flex items-center  justify-center ">
          <Image
            className="shadow-lg rounded-xl  shadow-gray-600"
            src={"/images/about-us-page/about-img.png"}
            alt={"AboutImg"}
            width={400}
            height={400}
          />
        </div>
        <div className=" max-w-[800px]">
          <h2 className=" text-[#00AAA3]  mb-2">
            <span className=" font-normal">Welcome to</span> Trinity{" "}
            <span className="inline-block border-b-4 border-[#00aaa48c]">
              HealthCare
            </span>{" "}
            Services
          </h2>
        </div>
      </>
    </div>
  );
}
