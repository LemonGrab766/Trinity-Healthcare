import React from "react";
import Form from "./Form";
import Networks from "../Networks";

export default function ContactPage() {
  return (
    <div className=" flex justify-around p-20 bg-[#93D3D8]">
      <div className=" w-[200px] flex justify-center items-center">
        <Networks color={"#0C4068"} />
      </div>
      <div className=" w-[900px]">
        <Form />
      </div>
    </div>
  );
}
