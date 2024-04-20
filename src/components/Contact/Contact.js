import React from "react";
import Form from "./Form";
import Networks from "../Networks";

export default function Contact() {
  return (
    <div className=" bg-[#00aaa47a] ">
      <div className=" bg-contact flex items-center justify-evenly p-20 ">
        <div>
          <h2 className="text-[#0C4068] inline-block border-b-8 border-[#00aaa491] mb-2">
            CONTACT US
          </h2>
          <Networks color={"#0C4068"} />
        </div>
        <Form />
      </div>
    </div>
  );
}
