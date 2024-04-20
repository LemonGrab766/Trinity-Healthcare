import Link from "next/link";
import React from "react";

export default function RowButton({ link }) {
  return (
    <div>
      <Link href={link}>
        <button className=" bg-[#00AAA3] hover:bg-[#00938D] p-2 px-5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
