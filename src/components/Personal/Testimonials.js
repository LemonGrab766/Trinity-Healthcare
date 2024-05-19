/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <div className=" bg-[#0C4068] ">
      <div className="flex flex-col items-center justify-evenly p-5 md:p-20 ">
        <div>
          <h2 className="text-white text-center text-[20px] md:text-[60px] inline-block border-b-8 border-[#0C4068] mb-2">
            TESTIMONIALS
          </h2>
        </div>
        <div className="flex flex-col gap-20 mt-12 px-4 md:px-32 text-[#0C4068]">
          <div className=" relative bg-white rounded-2xl py-8 px-14">
            <div className=" z-20 hidden md:flex absolute -top-[60px] -left-[10px]">
              <svg
                width="100"
                height="100"
                viewBox="0 0 139 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2036_607)">
                  <path
                    d="M139 18.2176C121.555 31.3511 112.551 39.2595 110.581 56.6298H132.247V110.859H79.7702V64.9618C79.7702 21.042 112.129 6.77863 124.368 0L139 18.2176ZM99.8887 76.1183V90.8054H112.973V76.1183H99.8887ZM59.2298 18.2176C41.9251 31.3511 32.7804 39.2595 30.8107 56.6298H52.4767V110.859H0V64.9618C0 21.042 32.3583 6.77863 44.5982 0L59.2298 18.2176ZM19.6964 76.1183V90.8054H32.7804V76.1183H19.6964Z"
                    fill="#00AFA4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2036_607">
                    <rect width="139" height="111" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h4>
              "LaSonya is a forward-thinking leader skilled in IT and business
              negotiations. She inspires and challenges her team effectively."
            </h4>
            <h3 className=" text-end text-[#00AAA3] text-[18px] font-bold">
              - CEO, Convergence Med Ltd.
            </h3>
          </div>
          <div className=" relative bg-white rounded-2xl py-8 px-14">
            <div className=" hidden md:flex absolute -top-[49px] -right-[10px]">
              <svg
                width="100"
                height="100"
                viewBox="0 0 139 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2036_620)">
                  <path
                    d="M1.59263e-06 93.2824C17.4453 80.1488 26.4494 72.2404 28.419 54.8702L6.75304 54.8702L6.75305 0.641209L59.2298 0.641213L59.2298 46.5382C59.2298 90.458 26.8715 104.721 14.6316 111.5L1.59263e-06 93.2824ZM39.1114 35.3817L39.1114 20.6946L26.0273 20.6946L26.0273 35.3817L39.1114 35.3817ZM79.7703 93.2824C97.0749 80.1488 106.22 72.2405 108.189 54.8702L86.5233 54.8702L86.5233 0.641216L139 0.64122L139 46.5382C139 90.458 106.642 104.721 94.4018 111.5L79.7703 93.2824ZM119.304 35.3817L119.304 20.6946L106.22 20.6946L106.22 35.3817L119.304 35.3817Z"
                    fill="#00AFA4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2036_620">
                    <rect
                      width="139"
                      height="111"
                      fill="white"
                      transform="translate(139 111.5) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h4>
              "Organized and self-sufficient in project management, LaSonya has
              been a critical component of our project's success."
            </h4>
            <h3 className=" text-end text-[#00AAA3] text-[18px] font-bold">
              - Executive Director, Cumberland Pediatric Foundation
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
