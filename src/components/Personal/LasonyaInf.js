import Image from "next/image";
import React from "react";
import Networks from "../Networks";

export default function LasonyaInf() {
  return (
    <div
      className={`grid md:grid-cols-[1.5fr_2fr] grid-cols-1  p-5  md:p-20 justify-center items-center`}
    >
      <>
        <div className=" w-full flex justify-center md:justify-end pr-10">
          <div className="w-[200px] h-[200px] relative md:w-[400px] md:h-[400px] ">
            <Image
              className="shadow-lg rounded-xl  shadow-gray-600"
              src={"/images/personal-page/lasonya.jpg"}
              alt={"LasonyaImg"}
              objectFit="cover"
              objectPosition="center"
              layout="fill"
            />
          </div>
        </div>
        <div className=" max-w-[800px] text-center md:text-start ">
          <h2 className=" text-[#00AAA3] font-extrabold">LASONYA DARRAELL,</h2>
          <h3 className=" text-[35px] text-[#00AAA3] mb-3">
            <span className=" lg:inline-block lg:border-b-4 lg:border-[#00aaa48c]">
              RN BSN, PMP, M.ED, C
            </span>
            OE
          </h3>
          <Networks color={"#0C4068"} />
        </div>
      </>
    </div>
  );
}
