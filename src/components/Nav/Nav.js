"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "../Icons/TwitterIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import AdminNav from "../Admin/AdminNav";

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && isMenuOpen) {
        setVisible(true);
      } else if (currentScrollY < 300) {
        setVisible(true);
        setIsMenuOpen(true);
      } else {
        setVisible(false);
        setIsMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <div className="">
      {!isMenuOpen ? (
        <div className=" flex justify-center items-center fixed z-20 right-5 top-5 bg-[#0C4068] text-white p-2 rounded-xl">
          <button
            onClick={() => {
              setIsMenuOpen(true);
              setVisible(true);
            }}
            className=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      ) : null}

      <div
        className={` flex flex-wrap fixed justify-center z-20 w-full bg-[#93d3d8] items-center p-8 py-2 shadow-2xl shadow-gray-600 transition-transform duration-300 ${
          visible ? "translate-y-0 " : "-translate-y-full"
        }`}
      >
        <AdminNav />
        <div className=" sm:w-1/3 flex justify-center items-center">
          <Link href={"/"}>
            <Image
              src={"/images/icon.webp"}
              alt="Icon"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className=" flex flex-col sm:w-2/3 items-end justify-end px-16 -mt-5">
          <div className=" flex justify-center items-center ">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/lasonya-darrell"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Linkedin"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className=" flex flex-wrap justify-center max-w-[1000px] ">
            <div className=" flex items-center justify-center">
              <Link href={"/about-us"}>
                <button className="nav-button ">ABOUT US</button>
              </Link>
              <Link href={"/services"}>
                <button className="nav-button ">SERVICES</button>
              </Link>
            </div>
            <div className=" flex  items-center justify-center">
              <Link href={"/blog"}>
                <button className="nav-button ">BLOG</button>
              </Link>
              <Link href={"/contact"}>
                <button className="nav-button ">CONTACT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex mb-[200px] md:mb-[100px]"></div>
    </div>
  );
}
