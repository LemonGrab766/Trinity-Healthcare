import Image from "next/image";
import React from "react";
import Networks from "../Networks";

export default function LasonyaInf() {
  return (
    <div className={`grid md:grid-cols-[1.8fr_2fr] grid-cols-1 `}>
      <>
        <div className=" flex ">
          <div className="w-[200px] h-[200px] relative md:w-[600px] md:h-[500px] ">
            <Image
              className=""
              src={"/images/personal-page/lasonya.webp"}
              alt={"LasonyaImg"}
              objectFit="cover"
              objectPosition="center 40%"
              layout="fill"
            />
          </div>
        </div>
        <div className=" max-w-[800px] text-center md:text-start flex flex-col justify-center">
          <h2 className=" text-[#00AAA3] font-extrabold">LASONYA DARRAELL,</h2>
          <h3 className=" text-[25px] text-[#00AAA3] mb-3">
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
