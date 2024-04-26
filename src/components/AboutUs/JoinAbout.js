import Image from "next/image";
import React from "react";
import RowButton from "../RowButton";

export default function JoinAbout() {
  return (
    <div>
      <div className=" flex justify-center -mb-1">
        <div className=" flex bg-[#00AAA3] h-1 md:w-[400px] mb-1"></div>
      </div>
      <div className=" flex flex-wrap bg-[#93D3D8] gap-10 lg:gap-0 items-center justify-center p-20">
        <div className=" md:w-[400px] flex flex-col justify-center items-center gap-4">
          <h2 className="  text-[#00AAA3] text-center inline-block border-b-4 border-[#00aaa48c] mb-2">
            JOIN US
          </h2>
          <RowButton link={"/contact"} />
        </div>
        <div className=" w-[200px] h-[100px] relative md:w-[600px] md:h-[240px]">
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
        </div>
      </div>
    </div>
  );
}
