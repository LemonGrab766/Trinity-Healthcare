import Image from "next/image";
import React from "react";
import RowButton from "../RowButton";

export default function JoinAbout() {
  return (
    <div className=" flex items-center justify-center p-20">
      <div className=" w-[400px] flex flex-col justify-center items-center gap-4">
        <h2 className="  text-[#00AAA3] inline-block border-b-4 border-[#00aaa48c] mb-2">
          JOIN US
        </h2>
        <RowButton link={"/contact"} />
      </div>
      <div className=" w-[600px]">
        <Image
          src={"/images/about-us-page/join.png"}
          alt=""
          width={600}
          height={600}
          className=" shadow-lg rounded-xl  shadow-gray-600"
        />
      </div>
    </div>
  );
}
