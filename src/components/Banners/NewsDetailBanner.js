"use client";
import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Head from "next/head";

export default function NewsDetailBanner({ image, title }) {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setBgLoaded(true);
  }, [image]);

  return (
    <div style={{ position: "relative" }}>
      <Head>
        <title>{title || "New"}</title>
      </Head>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          visibility: bgLoaded ? "visible" : "hidden",
          opacity: bgLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div
        className={` ${
          bgLoaded ? "bg-[#00aaa48f]" : "bg-[#00aaa48f]"
        } transition-colors duration-200 ease-in-out `}
        style={{ position: "relative" }}
      >
        <Nav />
        <div className="flex flex-col justify-center items-center py-60">
          <h1 className="text-[60px] flex gap-6 text-white font-bold">New</h1>
          <div className="flex bg-white h-1 w-60 mb-1"></div>
          <h1 className="text-[40px] md:text-[60px] flex gap-6 text-white font-bold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
