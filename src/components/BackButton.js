import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const route = useRouter();

  function back() {
    route.back();
  }

  return (
    <div className=" absolute top-4 left-5 ">
      <button
        onClick={back}
        className=" px-4 py-2 bg-[#00AAA3] hover:bg-[#00938D] text-white  rounded-lg"
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
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </button>
    </div>
  );
}
