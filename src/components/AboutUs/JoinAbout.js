import Image from "next/image";
import React from "react";
import RowButton from "../RowButton";

export default function JoinAbout() {
  return (
    <div>
   
      <div className=" flex flex-wrap bg-join-us gap-10 lg:gap-0 items-end justify-center pt-[350px]">
        <div className=" w-full bg-[#93d3d8b9] flex justify-center items-center gap-10 h-full">
          <h2 className="  text-[#0C4068] text-center">
            JOIN US
          </h2>
          <RowButton link={"/contact"}  whiteButton={true} />
        </div>
        {/* <div className=" w-[200px] h-[100px] relative md:w-[600px] md:h-[240px]">
          <Image
            src={"/images/about-us-page/join-us.webp"}
            alt=""
            // width={600}
            // height={600}
            className=" shadow-lg rounded-xl  shadow-gray-600"
            objectFit="cover"
            objectPosition="top"
            layout="fill"
          />
        </div> */}
      </div>
      <div className=" relative  flex justify-center">
        <div className=" absolute -bottom-[8px] flex bg-[#00AAA3] h-2 md:w-[900px] mb-1"></div>
      </div>
    </div>
  );
}
