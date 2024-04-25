import React from "react";
import Nav from "../Nav/Nav";

export default function PersonalInfBanner() {
  return (
    <div className=" bg-personal">
      <div className=" bg-[#0c406898]">
        <Nav />
        <div className=" flex flex-col justify-center items-center py-60">
          <h1 className=" md:text-[80px] text-center text-white font-medium">
            PERSONAL
          </h1>
          <div className=" flex bg-white h-1 w-60 mb-1"></div>
          <h1 className=" md:text-[80px] text-center text-white font-bold">
            INFORMATION
          </h1>
          {/* <p className=" w-2/4 text-center text-white text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit cubilia
            augue tellus rhoncus, mus etiam dictum justo ad.
          </p> */}
        </div>
      </div>
    </div>
  );
}
