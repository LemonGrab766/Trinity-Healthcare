/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Section from "./Section";
import Image from "next/image";
import RowButton from "../RowButton";

export default function Sections() {
  return (
    <div>
      <div className="">
        <div className={`flex flex-col-reverse md:flex-row  items-center `}>
          <div className=" items-start w-full  z-20">
            <div className="relative flex items-center  justify-center w-full h-48 md:w-[600px] md:h-[500px] ">
              <Image
                className=" "
                src={"/images/about-us-page/about-us-banner.webp"}
                alt={"ABOUT US"}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 0%",
                }}
              />
              <div className="flex absolute -bottom-5 justify-center items-center">
                <RowButton link={"/about-us"} />
              </div>
            </div>
          </div>
          <div className=" md:absolute flex flex-col justify-center md:justify-end items-start w-full md:max-w-[600px] md:right-10">
            <div className=" hidden md:flex absolute top-0 right-[220px] flex-1 pt-36 pr-5 bg-[#93d3d875] mb-5 w-screen">
              <div className="absolute bg-[#0C4068] w-12 h-12 -top-6 -right-3"></div>
            </div>
            <div className="relative   z-20 flex justify-start items-start pt-16 md:pr-5 mb-5 w-full md:w-auto md:flex-grow">
              <h2 className="text-[#0C4068] font-extrabold -mb-3 ml-10">
                {"ABOUT US"}
              </h2>
            </div>
            <p className=" px-5 md:px-0 md:ml-10 text-[#0C4068] text-justify">
              Welcome to Trinity Healthcare Services, here every action and
              decision is aimed at revolutionizing healthcare. With over three
              decades of experience and a deep foundation in health informatics,
              we have established ourselves as leaders in healthcare consulting
              and talent management. Our team of experts works tirelessly to
              lead each organization toward unprecedented operational efficiency
              and top-quality patient care.
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col-reverse md:flex-row-reverse  items-center mt-20 `}
        >
          <div className="relative flex items-center  justify-center w-full h-48 md:w-[800px] md:h-[500px] ">
            <Image
              className=" "
              src={"/images/services/services.webp"}
              alt={"SERVICES"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 100%",
              }}
            />
            <div className="flex absolute -bottom-5 justify-center items-center">
              <RowButton link={"/services"} />
            </div>
          </div>
          <div className=" relative flex justify-center items-center w-full bg-[#0C4068] p-5 mt-16 md:mt-0 md:p-10">
            <div className=" bg-[#00AAA3] p-3 hidden md:flex absolute -bottom-[40px] right-0">
              <svg
                width="100"
                height="100"
                viewBox="0 0 166 155"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2001_177)">
                  <path
                    d="M166 97.6196C165.59 98.8483 165.59 100.077 165.18 101.306C161.901 112.364 150.835 119.327 139.358 117.279C128.291 115.231 120.094 105.402 120.504 93.9334C120.914 84.1036 127.472 75.5026 136.899 73.0451C137.309 73.0451 137.719 72.6356 138.538 72.6356C138.538 68.5398 138.538 64.0345 137.719 59.9387C136.079 51.7473 128.291 46.0132 120.094 47.2419C111.486 48.0611 105.338 55.0239 105.338 64.0345C105.338 76.3217 105.338 89.0185 105.338 101.306C105.338 107.859 105.338 114.003 105.338 120.556C104.928 138.577 90.9926 153.322 72.5481 154.55C54.5136 155.779 39.3481 142.673 36.479 126.29C36.0691 123.832 36.0691 121.785 36.0691 119.327C36.0691 111.955 36.0691 104.582 36.0691 97.21C36.0691 96.8005 36.0691 95.9813 36.0691 95.9813C31.9704 94.7526 28.2815 93.9334 24.5926 92.2951C9.42716 84.9228 1.22963 73.0451 0.819753 55.843C0 44.3749 0 33.3164 0 22.2579C0 13.6568 6.14815 7.51321 14.7556 7.51321C15.5753 7.51321 16.8049 7.51321 18.0346 7.51321C18.0346 6.69406 18.0346 5.87491 18.0346 5.46534C18.4444 2.18874 20.4938 0.140869 22.9531 0.140869C25.4123 0.140869 27.8716 2.18874 27.8716 4.64619C27.8716 8.74193 27.8716 12.8377 27.8716 16.9334C27.8716 19.3909 25.8222 21.0292 23.7728 21.4387C21.3136 21.8483 19.2642 20.21 18.4444 18.1621C18.4444 17.7526 18.0346 17.343 18.0346 16.9334H17.6247C11.8864 16.5238 9.83704 18.1621 9.83704 24.3058C10.2469 34.1356 9.83704 44.3749 9.83704 54.2047C9.83704 69.7685 20.4938 82.4653 35.6593 84.9228C52.4642 87.7898 69.679 74.6834 70.9086 57.8909C70.9086 56.2526 71.3185 54.6143 71.3185 52.5664C71.3185 42.7366 71.3185 32.4973 71.3185 22.6675C71.3185 18.9813 69.2691 16.9334 65.5802 16.9334C65.1704 16.9334 64.3506 16.9334 63.9407 16.9334C63.5309 16.9334 62.7111 17.343 62.7111 17.7526C61.8914 20.21 59.842 21.4387 57.3827 21.4387C54.9235 21.0292 53.284 18.9813 53.284 16.5238C53.284 12.8377 53.284 9.15151 53.284 5.46534C53.284 2.18874 55.3333 0.140869 57.7926 0.140869C60.6617 0.140869 62.3012 2.18874 62.7111 5.05576C62.7111 5.46534 62.7111 6.28449 62.7111 7.10364C63.9407 7.10364 65.1704 7.10364 65.9901 7.10364C74.1877 7.10364 80.3358 13.2473 80.7457 21.0292C81.1556 33.3164 81.1556 45.6036 80.7457 57.8909C79.9259 75.5026 66.4 90.6568 49.1852 94.343C47.9556 94.7526 46.7259 94.7526 45.4963 95.1622C45.4963 95.5717 45.4963 96.3909 45.4963 96.8005C45.4963 104.173 45.4963 111.955 45.4963 119.327C45.4963 132.843 55.3333 143.082 68.8593 144.311C80.7457 145.54 92.6321 136.939 95.5012 124.652C95.9111 122.604 95.9111 120.556 95.9111 118.098C95.9111 100.077 95.9111 81.6462 95.9111 63.6249C95.9111 52.976 100.83 44.7845 110.257 39.8696C127.472 30.859 147.965 43.1462 148.375 62.3962C148.375 65.6728 148.375 68.9494 148.375 71.8164C151.654 73.8643 154.933 75.093 157.802 77.1409C162.311 80.4175 165.18 85.3324 166 91.0664C166 91.476 166 91.8856 166.41 92.2951C166 93.9334 166 95.5717 166 97.6196Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2001_177">
                    <rect
                      width="166"
                      height="154"
                      fill="white"
                      transform="translate(0 0.140869)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col justify-end items-center md:items-start w-full md:max-w-[600px] md:mr-12 ">
              <div className=" relative flex justify-start items-start">
                <h2 className=" text-white font-extrabold -mb-7 md:ml-[60px]">
                  SERVICES
                </h2>
              </div>
              <p className=" p-5 md:ml-10 text-white text-justify ">
                Transform healthcare with Trinity HealthCare Services. Expert
                consultancy and staff solutions that drive efficiency and
                innovation in care delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={` relative flex flex-col-reverse md:flex-row  items-center justify-center w-full my-20 md:px-32  `}
      >
        <div className=" w-full">
          <div className=" hidden md:flex absolute top-[190px]  right-0 flex-1 pt-[400px]  bg-[#93d3d875] w-screen">
            <div className="absolute bg-[#0C4068] w-12 h-12 top-32 left-[120px] z-30"></div>
          </div>
          <div className=" relative z-20 flex items-center  justify-center  w-full h-48 md:w-[650px] md:h-[400px] ">
            <div className=" hidden md:flex absolute top-[170px] z-20 right-[100%] flex-1 pt-[400px]  bg-white w-screen"></div>
            <Image
              className=" "
              src={"/images/blog-min.webp"}
              alt={"BLOG"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 0%",
              }}
            />
            <div className="flex absolute -bottom-5 justify-center items-center">
              <RowButton link={"/about-us"} />
            </div>
          </div>
        </div>
        <div className=" p-5 md:p-0 z-20 flex flex-col justify-center md:justify-end items-center md:items-start w-full md:max-w-[600px]">
          <div className="relative    flex justify-center items-center text-center md:text-start md:justify-start md:items-start pt-16 pr-5 mb-5 w-full md:w-auto md:flex-grow">
            <h2 className="text-[#0C4068] font-extrabold -mb-3 md:ml-10 leading-none ">
              RECENT
              <br />
              BLOG
            </h2>
          </div>
          <p className=" md:ml-10 text-[#0C4068] text-justify">
            Explore our blog for fresh insights on revolutionizing healthcare
            through expert consultancy and strategic staff solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
