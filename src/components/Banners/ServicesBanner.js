import React from "react";
import Nav from "../Nav/Nav";
import Head from "next/head";

export default function ServicesBanner({ title }) {
  return (
    <div className=" bg-services">
      <Head>
        <title>{title || "Services"}</title>
      </Head>
      <div className=" bg-[#00aaa48f]">
        <Nav />
        <div className=" flex flex-col justify-center items-center py-60">
          <h1 className=" text-[40px] text-center md:text-[80px] flex gap-6 text-white font-bold ">
            {title || "SERVICES"}
          </h1>
          <div className=" flex bg-white h-1 w-60 mb-1"></div>
        </div>
      </div>
    </div>
  );
}
