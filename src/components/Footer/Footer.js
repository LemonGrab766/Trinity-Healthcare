import Image from "next/image";
import Link from "next/link";
import React from "react";
import TwitterIcon from "../Icons/TwitterIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import Networks from "../Networks";

export default function Footer() {
  return (
    <div className=" bg-[#0C4068] flex justify-between p-16">
      <div className=" flex  items-center gap-10">
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
      <div className=" flex">
        <div className=" flex justify-center items-end ">
          <Link href={"/hola"}>
            <TwitterIcon color={"#00AAA3"} />
          </Link>
          <Link href={"/hola"}>
            <LinkedinIcon color={"#00AAA3"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
