import React from "react";
import RowButton from "../RowButton";
import Image from "next/image";

export default function PersonalInf() {
  return (
    <div className=" flex flex-wrap gap-10 lg:gap-20 items-center justify-center p-20">
      <div className=" w-[200px] h-[100px] relative md:w-[450px] md:h-[240px]">
        <Image
          src={"/images/personal-page/personal-banner.webp"}
          alt=""
          className=" shadow-lg rounded-xl  shadow-gray-600"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
      </div>
      <div className=" md:w-[400px] flex flex-col justify-center items-center gap-4">
        <h2 className="  text-[#00AAA3] text-center  mb-2">
          PERSONAL
          <span className=" inline-block border-b-4 border-[#00aaa48c]">
            INFORMATION
          </span>
        </h2>
        <RowButton link={"/personal-information"} />
      </div>
    </div>
  );
}
