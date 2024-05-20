import Image from "next/image";
import React from "react";

export default function SectionAbout() {
  return (
    <div
      className={` relative grid md:grid-cols-[1.5fr_2fr]  justify-center items-center`}
    >
      <>
        <div className=" relative z-20 flex items-start justify-start w-full h-48 md:w-[600px] md:h-[400px]">
          <Image
            className=""
            src={"/images/about-us-page/about-img.webp"}
            alt={"AboutImg"}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center 50%",
            }}
          />
        </div>
        <div className=" hidden md:flex absolute  flex-1 right-0 pt-[200px] bg-[#93d3d875] mb-5 w-screen"></div>

        <div className=" relative z-20 w-full ">
          <h2 className=" text-[#0C4068] text-start pl-5  mb-2 max-w-[800px]">
            <span className=" font-normal">Welcome to</span> Trinity HealthCare
            Services
          </h2>
        </div>
      </>
    </div>
  );
}
