import React from "react";
import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "../Icons/TwitterIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

export default function Nav() {
  return (
    <div className=" flex bg-[#93d3d8da] p-8">
      <div className=" w-1/3 flex justify-center items-center">
        <Link href={"/"}>
          <Image
            src={"/images/Frame.png"}
            alt="Icon"
            width={200}
            height={200}
          />
        </Link>
      </div>

      <div className=" flex flex-col w-2/3 items-end justify-end px-16">
        <div className=" flex justify-center items-center ">
          <Link href={"/hola"} className="">
            <TwitterIcon />
          </Link>
          <Link href={"/hola"}>
            <LinkedinIcon />
          </Link>
        </div>
        <div className=" flex justify-between w-full max-w-[1000px] ">
          <Link href={"/about-us"}>
            <button className="nav-button ">ABOUT US</button>
          </Link>

          <button className="nav-button ">SERVICES</button>

          <button className="nav-button ">BLOG</button>
          <Link href={"/contact"}>
            <button className="nav-button ">CONTACT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
