import Image from "next/image";
import React from "react";
import RowButton from "../RowButton";

export default function Section({ image, title, text, position }) {
  const gridTemplate =
    position === "left"
      ? "grid-cols-[2fr_1.5fr] bg-[#93d3d8de]"
      : "grid-cols-[1.5fr_2fr]";

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
      className={`grid ${gridTemplate} gap-4 p-20 justify-center items-center`}
    >
      {position === "left" ? (
        <>
          <div className=" flex flex-col justify-end items-end  ">
            <div className=" w-2/3 text-start  ">
              <h2 className=" text-[#00AAA3]   inline-block border-b-4 border-[#00aaa486] mb-2">
                {title}
              </h2>
            </div>
            <p className=" w-2/3">{text}</p>
          </div>
          <div className=" relative flex items-center justify-center">
            <Image
              className="shadow-lg rounded-xl shadow-gray-600"
              src={image}
              alt={title}
              width={400}
              height={400}
            />
            <div className=" flex absolute -bottom-5 justify-center items-center">
              <RowButton link={getLink()} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" relative  flex items-center  justify-center ">
            <Image
              className="shadow-lg rounded-xl  shadow-gray-600"
              src={image}
              alt={title}
              width={400}
              height={400}
            />
            <div className=" flex absolute -bottom-5 justify-center items-center">
              <RowButton link={getLink()} />
            </div>
          </div>
          <div className="">
            <h2 className=" text-[#00AAA3] inline-block border-b-4 border-[#00aaa48c] mb-2">
              {title}
            </h2>
            <p className=" w-2/3">{text}</p>
          </div>
        </>
      )}
    </div>
  );
}
