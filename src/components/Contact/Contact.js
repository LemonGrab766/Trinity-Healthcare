import React from "react";
import Form from "./Form";
import Networks from "../Networks";

export default function Contact() {
  return (
    <div className=" bg-[#00aaa47a] ">
      <div className=" bg-contact flex flex-wrap items-center justify-evenly p-5 md:p-20 ">
        <div>
          <h2 className="text-[#0C4068] text-center inline-block border-b-8 border-[#00aaa491] mb-2">
            CONTACT US
          </h2>
          <Networks color={"#0C4068"} />
        </div>
        <Form />
      </div>
    </div>
  );
}
