import React from "react";
import Nav from "../Nav/Nav";
import Head from "next/head";

export default function BlogBanner() {
  return (
    <div className=" bg-blog">
      <Head>
        <title>Blog</title>
      </Head>
      <div className=" bg-[#0c406898]">
        <Nav />
        <div className=" flex flex-col justify-center items-center py-60">
          <h1 className=" text-[40px] md:text-[80px] flex gap-6 text-white font-bold ">
            BLOG
          </h1>
          <div className=" flex bg-white h-1 w-60 mb-1"></div>
        </div>
      </div>
    </div>
  );
}
