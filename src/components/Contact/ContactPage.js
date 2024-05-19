import React from "react";
import Form from "./Form";
import Networks from "../Networks";

export default function ContactPage() {
  return (
    // <div className=" flex flex-wrap justify-around p-20 bg-[#93D3D8]">
    //   <div className=" w-[300px] flex justify-center items-center">
    //     <Networks color={"#0C4068"} />
    //   </div>
    //   <div className=" md:w-[900px]">
    //     <Form />
    //   </div>
    // </div>
    <div className=" bg-[#93D3D8] ">
      <div className=" flex  flex-col md:flex-row gap-10 items-center justify-evenly p-5 md:p-20 ">
        <div className=" ">
          <Networks color={"#0C4068"} size={"10px"} />
        </div>
        <div className=" md:w-[70%]">
          <Form />
        </div>
      </div>
    </div>
  );
}
