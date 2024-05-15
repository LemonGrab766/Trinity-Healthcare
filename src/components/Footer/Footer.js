import Image from "next/image";
import Link from "next/link";
import React from "react";
import TwitterIcon from "../Icons/TwitterIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import Networks from "../Networks";

export default function Footer() {
  return (
    <div className=" bg-[#0C4068] flex flex-wrap justify-around py-16">
      <div className=" flex  flex-wrap justify-center items-center gap-10 sm:mr-40">
        <div className=" bg-white p-5 rounded-2xl">
          <Link href={"/"}>
            <Image
              src={"/images/Frame.webp"}
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
      <div className=" flex sm:ml-40">
        <div className=" flex justify-center items-end gap-2 ">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Twitter"
          >
            <TwitterIcon color={"#00AAA3"} w={"35px"} h={"35px"} />
          </a>
          <a
            href="https://www.linkedin.com/in/lasonya-darrell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Linkedin"
          >
            <LinkedinIcon color={"#00AAA3"} w={"38px"} h={"38px"} />
          </a>
        </div>
      </div>
    </div>
  );
}
