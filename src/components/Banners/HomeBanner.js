import React from "react";
import Nav from "../Nav/Nav";
import Head from "next/head";

export default function HomeBanner() {
  return (
    <div className=" bg-home">
      <Head>
        <title>Trinity Healthcare Services</title>
      </Head>
      <div className=" bg-[#0c4068c5]">
        <Nav />
        <div className=" flex flex-col justify-center items-center py-60">
          <h1 className=" text-[40px] md:text-[80px] text-center text-white font-bold">
            Pioneering Care, Empowering Health
          </h1>
          <div className=" flex bg-white h-1  w-1/3 mb-1"></div>
          {/* <p className=" w-2/4 text-center text-white text-[20px]">
            Pioneering Care, Empowering Health
          </p> */}
        </div>
      </div>
    </div>
  );
}
