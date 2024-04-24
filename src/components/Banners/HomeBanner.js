import React from "react";
import Nav from "../Nav/Nav";

export default function HomeBanner() {
  return (
    <div className=" bg-home">
      <div className=" bg-[#00aaa4af]">
        <Nav />
        <div className=" flex flex-col justify-center items-center py-60">
          <h1 className=" md:text-[80px] text-center text-white font-bold">
            Trinity Healthcare Services
          </h1>
          <div className=" flex bg-white h-1 w-60 mb-1"></div>
          {/* <p className=" w-2/4 text-center text-white text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit cubilia
            augue tellus rhoncus, mus etiam dictum justo ad.
          </p> */}
        </div>
      </div>
    </div>
  );
}
