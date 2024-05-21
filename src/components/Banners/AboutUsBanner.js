import React from "react";
import Nav from "../Nav/Nav";
import Head from "next/head";

export default function AboutUsBanner() {
  return (
    <div className=" bg-about-us">
      <Head>
        <title>AboutUs</title>
      </Head>
      <div className=" bg-[#0c406898]">
        <Nav />
        <div className=" flex flex-col justify-center items-center py-60">
          <h1 className="text-[40px] md:text-[80px] flex gap-6 text-white font-light ">
            ABOUT <span className="font-bold ">US</span>
          </h1>
          <div className=" flex bg-white h-1 w-60 mb-1"></div>
        </div>
      </div>
    </div>
  );
}
