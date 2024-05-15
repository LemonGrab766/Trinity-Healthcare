import React from "react";
import Form from "./Form";
import Networks from "../Networks";

export default function Contact() {
  return (
    <div className="relative z-30 ">
      <div className="  flex flex-wrap items-center justify-between md:h-[1000px] ">
        <div className=" w-full md:w-2/5 bg-white h-full p-10 flex flex-col items-center justify-center">
          <h2 className="text-[#0C4068] font-black mb-2">
            CONTACT <br /> US
          </h2>
          <div className=" flex bg-[#93d3d875] w-screen items-center justify-center py-10">
            <Networks color={"#0C4068"} size={"10px"} />
          </div>
        </div>
        <div className=" w-full md:w-3/5 bg-[#0C4068] px-5 md:px-20 py-10 md:py-0 h-full flex items-center justify-center">
          <Form />
        </div>
      </div>
      <div className=" relative flex justify-center  ">
        <div className=" absolute -top-[4px] flex bg-[#00AAA3] h-2 md:w-[800px] mb-1"></div>
      </div>
    </div>
  );
}
