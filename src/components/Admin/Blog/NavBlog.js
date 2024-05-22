"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBlog() {
  const [isOpen, setIsOpen] = useState(false);

  const inactiveLink =
    "flex hover:bg-[#00938D]  px-2 py-2 ml-[-20px] hover:rounded-lg";
  const activeLink =
    inactiveLink + " bg-[#00AAA3] px-2 py-2 ml-[-20px] text-white rounded-lg";
  const pathname = usePathname();

  return (
    <aside
      className={`
        text-white  md:flex-1 md:min-w-[300px] shadow-2xl  h-full`}
    >
      <div className="flex  md:hidden justify-center items-center fixed z-30 left-5 top-5 bg-[#0C4068] text-white p-2 rounded-xl">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
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

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block  fixed bg-[#93d3d8] z-20 lg:min-w-[250px] xl:w-[300px] lg:w-[300px]   px-10 h-full shadow-gray-600`}
      >
        <div className=" flex justify-center items-center w-full mt-5">
          <Link href={"/"}>
            <Image
              src={"/images/Frame.webp"}
              alt="Icon"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <nav className="flex flex-col gap-3 mt-10 md:mt-12 ">
          <Link
            href={"/admin/blog"}
            onClick={() => setIsOpen(!isOpen)}
            className={pathname === "/admin/blog" ? activeLink : inactiveLink}
          >
            Blogs
          </Link>
          <Link
            href={"/admin/news"}
            onClick={() => setIsOpen(!isOpen)}
            className={pathname === "/admin/news" ? activeLink : inactiveLink}
          >
            News
          </Link>
        </nav>
      </div>
    </aside>
  );
}
