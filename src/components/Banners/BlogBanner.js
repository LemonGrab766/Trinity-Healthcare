import React from "react";
import Nav from "../Nav/Nav";

export default function BlogBanner() {
  return (
    <div className=" bg-blog">
      <div className=" bg-[#0c406898]">
        <Nav />
        <div className=" flex flex-col justify-center items-center py-60">
          <h1 className=" text-[80px] flex gap-6 text-white font-bold ">
           BLOG
          </h1>
          <div className=" flex bg-white h-1 w-60 mb-1"></div>
        </div>
      </div>
    </div>
  );
}
