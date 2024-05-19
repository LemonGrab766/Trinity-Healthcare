import Link from "next/link";
import React from "react";

export default function RowButton({ link, whiteButton }) {
  const buttonName = link.replace(/\//g, " ").trim();
  return (
    <div>
      <Link href={link}>
        <button
          name={buttonName}
          aria-label={"visit " + buttonName}
          className={` ${
            whiteButton
              ? `bg-white hover:bg-[#00AAA3] text-[#00AAA3] hover:text-white `
              : "bg-[#00AAA3] hover:bg-[#00938D] text-white"
          } p-2 px-5  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 `}
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
