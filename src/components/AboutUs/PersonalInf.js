import React from "react";
import RowButton from "../RowButton";
import Image from "next/image";

export default function PersonalInf() {
  return (
    <div className=" flex flex-wrap gap-10 lg:gap-12 items-center py-20">
      <div className=" w-[200px] h-[100px] relative md:w-[650px] md:h-[340px]">
        <Image
          src={"/images/personal-page/personal-banner.webp"}
          alt=""
          className=""
          objectFit="cover"
          objectPosition="center 20%"
          layout="fill"
        />
        <div className=" relative flex justify-center items-end h-full -bottom-[20px] z-30">
          <RowButton link={"/personal-information"} />
        </div>
      </div>
      <div className=" md:w-[400px] flex flex-col justify-center items-center gap-4">
        <h2 className="  text-[#0C4068] text-start  mb-2">
          PERSONAL INFORMATION
        </h2>
      </div>
    </div>
  );
}
