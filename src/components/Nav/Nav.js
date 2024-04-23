"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "../Icons/TwitterIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <div
        className={` flex fixed z-10 w-full bg-[#93d3d8] items-center p-8 py-2 shadow-2xl shadow-gray-600 transition-transform duration-300 ${
          visible ? "translate-y-0 " : "-translate-y-full"
        }`}
      >
        <div className=" w-1/3 flex justify-center items-center">
          <Link href={"/"}>
            <Image
              src={"/images/icon.png"}
              alt="Icon"
              width={100}
              height={200}
            />
          </Link>
        </div>

        <div className=" flex flex-col w-2/3 items-end justify-end px-16 -mt-5">
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
      <div className=" flex mb-[100px]"></div>
    </div>
  );
}
