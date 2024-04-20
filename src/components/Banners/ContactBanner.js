import React from "react";
import Nav from "../Nav/Nav";

export default function ContactBanner() {
  return (
    <div className=" bg-contact-page">
      <div className=" bg-[#00aaa48f]">
        <Nav />
        <div className=" flex flex-col justify-center items-center py-60">
          <h1 className=" text-[80px] flex gap-6 text-white font-bold ">
            CONTACT
          </h1>
          <div className=" flex bg-white h-1 w-60 mb-1"></div>
        </div>
      </div>
    </div>
  );
}
