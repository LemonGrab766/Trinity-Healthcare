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
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/lasonya-darrell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
        <div className=" flex justify-between w-full max-w-[1000px] ">
          <Link href={"/about-us"}>
            <button className="nav-button ">ABOUT US</button>
          </Link>

          <button className="nav-button ">SERVICES</button>
          <Link href={"/blog"}>
            <button className="nav-button ">BLOG</button>
          </Link>
          <Link href={"/contact"}>
            <button className="nav-button ">CONTACT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
