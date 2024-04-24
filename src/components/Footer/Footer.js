import Image from "next/image";
import Link from "next/link";
import React from "react";
import TwitterIcon from "../Icons/TwitterIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import Networks from "../Networks";

export default function Footer() {
  return (
    <div className=" bg-[#0C4068] flex justify-around py-16">
      <div className=" flex  items-center gap-10 mr-40">
        <div className=" bg-white p-5 rounded-2xl">
          <Link href={"/"}>
            <Image
              src={"/images/Frame.png"}
              alt="Icon"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div>
          <Networks />
        </div>
      </div>
      <div className=" flex ml-40">
        <div className=" flex justify-center items-end ">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon color={"#00AAA3"} />
          </a>
          <a
            href="https://www.linkedin.com/in/lasonya-darrell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon color={"#00AAA3"} />
          </a>
        </div>
      </div>
    </div>
  );
}
