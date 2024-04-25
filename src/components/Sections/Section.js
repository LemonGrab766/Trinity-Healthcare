import Image from "next/image";
import React from "react";
import RowButton from "../RowButton";

export default function Section({ image, title, text, position }) {
  const flexDirection =
    position === "left" ? "md:flex-row bg-[#93d3d8de]" : "md:flex-row-reverse";

  const getLink = () => {
    if (title === "ABOUT US") {
      return "/about-us";
    } else if (title === "SERVICES") {
      return "/services";
    } else if (title === "BLOG") {
      return "/blog";
    } else {
      return "/contact";
    }
  };

  return (
    <div
      className={`flex flex-col ${flexDirection} gap-4 p-4 md:p-20 items-center justify-around `}
    >
      <div className="flex flex-col justify-end items-start md:items-end w-full md:max-w-[600px]">
        <div className=" flex justify-start items-start w-full">
          <h2 className="text-[#00AAA3] inline-block border-b-4 border-[#00aaa486] mb-2">
            {title}
          </h2>
        </div>
        <p>{text}</p>
      </div>
      <div className="relative flex items-center justify-center w-full md:w-1/3 mt-4 md:mt-0">
        <Image
          className="shadow-lg rounded-xl shadow-gray-600"
          src={image}
          alt={title}
          width={400}
          height={400}
          // layout="intrinsic"
        />
        <div className="flex absolute -bottom-5 justify-center items-center">
          <RowButton link={getLink()} />
        </div>
      </div>
    </div>
  );
}
