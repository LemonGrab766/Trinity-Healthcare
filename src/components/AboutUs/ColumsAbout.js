/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { AuditIcon, HealthIcon, StrategicIcon, TalentIcon } from "./Icons";

export default function ColumsAbout() {
  return (
    <div>
      <div
        className={`relative flex flex-col-reverse md:flex-row-reverse  items-end mt-20 `}
      >
        <div className="relative flex items-center  justify-center w-full h-48 md:w-[1000px] md:h-[400px] ">
          <Image
            className=" "
            src={"/images/about-us-page/staff-augmentation.webp"}
            alt={"SERVICES"}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center 100%",
            }}
          />
        </div>
        <div className=" relative flex justify-center items-center w-full bg-[#0C4068] p-5 mt-16 md:mt-0 md:p-10 py-0 md:py-16">
          <div className=" z-20 bg-[#00AAA3] p-1 hidden md:flex absolute -bottom-[30px] -right-[55px]">
            <svg
              width="100"
              height="100"
              viewBox="0 0 166 166"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2036_612)">
                <path
                  d="M90.8514 166C87.4865 166 84.1217 166 80.7568 166C79.2613 165.813 77.7658 165.626 76.2703 165.439C59.0721 163.383 43.9302 156.279 31.2185 144.502C5.04734 119.827 -1.68239 82.6261 14.2072 50.286C14.5811 49.3513 14.5811 48.9775 13.8334 48.2297C9.9077 44.3041 5.98202 40.3784 2.05634 36.4527C-1.30852 33.0878 -0.373835 29.3491 4.11265 27.6667C9.34688 25.6104 14.5811 23.741 19.8154 21.8716C20.75 21.4977 21.3108 20.9369 21.6847 20.0023C23.5541 14.768 25.6104 9.53378 27.4798 4.29955C29.1622 -0.186936 32.9009 -0.934684 36.2658 2.24324C40.1915 6.16892 44.1172 10.0946 48.0428 14.0203C48.7906 14.768 49.1644 14.768 50.0991 14.3941C69.9145 4.86036 90.6644 2.99099 111.414 10.2815C140.577 20.75 158.336 41.5 164.505 71.9707C165.065 74.9617 165.439 77.9527 165.813 80.9437C165.813 84.3085 165.813 87.6734 165.813 91.0383C165.439 94.0293 165.065 97.2072 164.505 100.198C159.27 131.977 133.66 158.149 101.881 164.505C98.1419 165.065 94.4032 165.439 90.8514 166ZM58.8852 39.8176C85.2433 24.6757 115.714 34.5833 130.108 56.0811C144.315 77.2049 141.511 105.432 123.565 123.378C105.619 141.324 77.3919 144.128 56.2681 129.921C34.7703 115.527 24.8626 85.0563 39.8176 58.8851C39.2568 58.8851 38.8829 58.8851 38.509 58.8851C35.8919 59.4459 33.2748 59.8198 30.4708 60.3806C28.0406 60.9414 25.7973 60.5676 24.1149 58.5113C23.5541 57.7635 22.8063 57.0158 22.0586 56.0811C9.34688 82.4392 14.0203 119.64 43.3694 142.072C71.223 163.196 110.854 160.392 135.529 135.529C160.766 110.106 163.196 70.4752 140.577 42.0608C118.518 13.8333 81.8784 9.72072 55.8942 22.2455C56.6419 22.8063 57.3897 22.9932 57.9505 23.5541C60.5676 25.6104 61.1284 28.0405 60.3807 31.2185C59.6329 34.0225 59.446 36.8266 58.8852 39.8176ZM58.8852 51.9685C62.8108 55.8941 66.5496 59.6329 70.2883 63.3716C71.0361 64.1194 71.4099 63.7455 72.1577 63.3716C78.5135 59.4459 85.4302 58.5113 92.5338 60.3806C105.806 63.7455 114.405 77.2049 111.788 90.8513C109.358 104.311 96.6464 113.658 83.187 112.162C63.7455 109.919 53.464 88.982 63.5586 72.1576C64.1194 71.223 63.9325 70.8491 63.1847 70.1013C60.9415 67.8581 58.6982 65.6149 56.455 63.3716C54.9595 61.8761 53.464 60.1937 51.9685 58.6982C39.2568 73.6531 37.7613 99.4504 54.9595 116.649C71.9708 133.66 99.6374 133.66 116.649 116.462C133.66 99.2635 133.473 71.7838 116.275 54.7725C99.0766 37.7613 73.2793 39.6306 58.8852 51.9685ZM71.223 78.1396C67.2973 85.6171 69.5406 94.777 76.4572 99.6374C83.3739 104.498 92.7207 103.189 98.3289 96.8333C103.937 90.4775 103.937 80.9437 98.1419 74.5878C93.0946 68.9797 83.5608 67.2973 78.1397 71.4099C78.7005 71.7838 79.0744 72.1577 79.4482 72.5315C82.6262 75.7094 85.991 79.0743 89.169 82.2522C90.4775 83.7477 91.0383 85.4302 90.4775 87.2995C89.9167 89.1689 88.4212 90.2905 86.5518 90.4775C84.6825 90.8513 83.3739 90.1036 82.0653 88.795C78.5135 85.4302 74.9617 81.8784 71.223 78.1396ZM48.6036 41.8739C49.3514 37.9482 50.0991 34.5833 50.473 31.0315C50.473 30.4707 50.0991 29.723 49.7253 29.3491C44.8649 24.4887 40.0045 19.6284 35.1442 14.768C34.7703 14.3941 34.5834 14.2072 34.0226 14.0203C32.9009 17.0113 31.9663 19.8153 30.8446 22.4324C30.4708 23.3671 30.4708 24.1149 31.4054 24.8626C36.2658 29.536 40.9392 34.3964 45.7996 39.0698C46.7343 39.8176 47.482 40.7522 48.6036 41.8739ZM41.687 48.6036C35.705 42.6216 29.9099 36.8266 24.1149 31.2185C23.928 31.0315 23.3672 30.8446 22.9933 30.8446C20.0023 31.9662 16.8244 33.0878 13.8334 34.2095C13.8334 34.3964 13.8334 34.5833 13.8334 34.5833C19.0676 39.8176 24.1149 45.0518 29.3491 50.0991C29.723 50.473 30.2838 50.6599 30.8446 50.473C34.3964 49.9122 37.9482 49.3513 41.687 48.6036Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2036_612">
                  <rect width="166" height="166" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="relative flex flex-col justify-end items-center md:items-start w-full md:max-w-[600px] md:mr-12 ">
            <div className=" z-20 hidden md:flex absolute -top-[105px] left-[65px]">
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
            <div className=" relative flex justify-start items-start ">
              <h2 className=" text-white font-extrabold -mb-3 md:ml-[60px] leading-none">
                OUR <br /> MISSION:
              </h2>
            </div>
            <p className=" p-5 md:ml-10 text-white text-justify ">
              {
                "To serve as catalysts for  transformation, guiding  healthcare entities towards  greater efficiency, effectiveness,  and sustainability in care  delivery."
              }
            </p>
          </div>
        </div>
      </div>
      <div className={`relative flex flex-col md:flex-row  items-end `}>
        <div className=" hidden md:flex absolute top-0  z-[1] flex-1 pt-[450px] bg-white  w-[250px]"></div>
        <div className=" hidden md:flex absolute top-0 right-0  flex-1 pt-[450px] bg-[#93d3d875]  w-screen">
          <div className=" z-20 bg-[#00AAA3] p-1 hidden md:flex absolute -bottom-[0px] left-[250px]">
            <svg
              width="80"
              height="80"
              viewBox="0 0 102 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2036_656)">
                <path
                  d="M0.499945 88.8073C1.0511 87.4294 1.32668 85.7759 2.15342 84.5358C4.08248 81.2288 7.11386 79.4375 10.972 79.2997C13.8656 79.162 16.7592 79.0242 19.515 80.4021C19.515 78.3352 19.515 76.4062 19.515 74.6149C19.515 70.7568 21.0306 67.7254 24.062 65.383C25.9911 64.0051 28.1957 63.3161 30.6759 63.3161C33.2939 63.3161 35.912 63.1783 38.53 64.5562C38.53 62.4894 38.53 60.5603 38.53 58.6313C38.53 56.5644 38.9433 54.4976 40.1834 52.7063C42.2503 49.3993 45.2817 47.6081 49.2776 47.4703C52.0334 47.3325 54.927 47.1947 57.545 48.7104C57.545 46.5057 57.545 44.5767 57.545 42.6476C57.6828 37.9628 59.7496 34.518 64.0211 32.7268C65.5368 32.0378 67.1903 32.0378 68.8437 31.7622C69.8083 31.6244 70.7728 31.7622 71.7373 31.7622C71.7373 31.2111 71.7373 30.7977 71.7373 30.3843C71.7373 21.5658 71.7373 12.7472 71.7373 3.92867C71.7373 2.1374 72.2885 0.759506 74.0798 0.0705566C82.4849 0.0705566 90.7523 0.0705566 99.1575 0.0705566C99.2953 0.208347 99.4331 0.208347 99.5709 0.346136C101.638 1.31067 102.051 3.37751 100.673 5.16878C100.122 5.85773 99.4331 6.40889 98.8819 6.96005C97.504 8.33795 96.1261 9.57806 94.7482 11.0937C95.1616 11.3693 95.4372 11.6449 95.7128 11.9205C97.3662 13.574 99.1575 15.2274 100.673 17.0187C102.189 18.6722 101.5 21.2902 99.4331 21.8414C98.8819 21.9792 98.3308 21.9791 97.9174 21.9791C91.5791 21.9791 85.3785 21.9791 79.0402 21.9791C78.6268 21.9791 78.2134 21.9791 77.8001 21.9791C77.8001 25.2861 77.8001 28.5931 77.8001 31.9C78.2134 31.9 78.6268 31.9 78.9024 31.9C82.6227 31.9 86.2053 31.9 89.9256 31.9C90.7523 31.9 91.5791 31.9 92.268 32.0378C97.6418 33.0023 101.362 37.4116 101.362 43.061C101.362 55.4621 101.362 67.8632 101.362 80.2643C101.362 86.1892 101.362 92.1142 101.362 98.0392C101.362 100.106 100.122 101.208 98.0552 101.346C97.7796 101.346 97.504 101.346 97.2284 101.346C66.2257 101.346 35.223 101.346 4.22027 101.346C2.429 101.346 1.0511 100.795 0.224365 99.1415C0.499945 95.559 0.499945 92.1142 0.499945 88.8073ZM95.575 95.1456C95.575 94.7322 95.575 94.3188 95.575 94.0433C95.575 77.0951 95.575 60.2847 95.575 43.3366C95.575 39.6163 93.6459 37.6872 89.9256 37.6872C83.0361 37.6872 76.0088 37.6872 69.1193 37.6872C65.399 37.6872 63.4699 39.6163 63.4699 43.3366C63.4699 60.2847 63.4699 77.0951 63.4699 94.0433C63.4699 94.4566 63.4699 94.7322 63.4699 95.1456C74.2175 95.1456 84.8274 95.1456 95.575 95.1456ZM57.545 95.1456C57.545 94.7322 57.545 94.3188 57.545 94.0433C57.545 90.4607 57.545 86.8782 57.545 83.4334C57.545 75.3038 57.545 67.1742 57.545 59.0446C57.545 55.5999 55.4781 53.6708 52.0334 53.6708C51.3444 53.6708 50.7933 53.6708 50.1043 53.6708C46.384 53.6708 44.3171 55.5999 44.3171 59.3202C44.3171 70.8946 44.3171 82.4689 44.3171 94.1811C44.3171 94.5944 44.3171 94.87 44.3171 95.2834C48.8642 95.1456 53.1357 95.1456 57.545 95.1456ZM38.3922 95.1456C38.3922 95.0078 38.53 94.87 38.53 94.87C38.53 87.9805 38.53 81.091 38.53 74.2015C38.53 71.4457 36.7387 69.6544 33.9829 69.3789C33.0184 69.2411 32.0538 69.2411 31.0893 69.2411C27.369 69.2411 25.4399 71.1701 25.4399 74.8905C25.4399 81.2288 25.4399 87.5671 25.4399 93.9055C25.4399 94.3188 25.4399 94.5944 25.4399 95.0078C29.8492 95.1456 34.1207 95.1456 38.3922 95.1456ZM19.515 95.1456C19.515 93.3543 19.6527 91.563 19.515 89.9096C19.3772 87.4293 17.4481 85.5003 14.9679 85.3625C13.7278 85.3625 12.4877 85.3625 11.2476 85.3625C8.90513 85.5003 6.83828 87.1538 6.70049 89.634C6.5627 91.4253 6.70049 93.3543 6.70049 95.2834C10.8342 95.1456 15.1057 95.1456 19.515 95.1456ZM77.8001 15.7786C82.3471 15.7786 86.7564 15.7786 91.3035 15.7786C90.339 14.9519 89.65 14.1251 88.9611 13.4362C87.3076 11.6449 87.3076 10.1292 88.9611 8.47574C89.65 7.649 90.4767 6.96005 91.4413 5.99552C86.7564 5.99552 82.2094 5.99552 77.8001 5.99552C77.8001 9.30248 77.8001 12.6094 77.8001 15.7786Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2036_656">
                  <rect
                    width="101"
                    height="101"
                    fill="white"
                    transform="translate(0.5 0.0705566)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="relative z-[2] flex items-center  justify-center w-full h-48 md:w-[1000px] md:h-[400px] ">
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
        </div>
        <div className=" relative flex justify-center items-center w-full  p-5 mt-16 md:mt-0 md:p-10 py-0 md:py-16">
          <div className="relative flex flex-col justify-end items-center md:items-start w-full md:max-w-[600px] md:mr-12 ">
            <div className=" hidden md:flex absolute -bottom-[165px] right-[65px]">
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
            <div className=" relative flex justify-start items-start ">
              <h2 className=" text-[#0C4068] font-extrabold -mb-3 md:ml-[60px] leading-none">
                OUR <br /> VISION:
              </h2>
            </div>
            <p className=" p-5 md:ml-10 text-[#0C4068] text-justify ">
              {
                "To foster a culture of excellence and  innovation within healthcare  organizations, inspiring continuous  learning, adaptation, and  improvement to meet the changing  needs of patients and communities."
              }
            </p>
          </div>
        </div>
      </div>
      <div className=" relative md:mt-40 md:ml-32 flex">
        <div className="relative flex items-center  justify-center w-full h-48 md:w-[300px] md:h-[814px] ">
          <Image
            className=" "
            src={"/images/about-us-page/corporate-values.webp"}
            alt={"SERVICES"}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "80% center",
            }}
          />
          <div className="absolute bg-[#0C4068] w-12 h-12 top-[300px] -left-5"></div>
        </div>
        <div className=" flex flex-col justify-start items-start text-start md:mt-6 w-full  ">
          <h2 className=" text-[#0C4068] font-extrabold-mb-3 md:ml-[40px] leading-none">
            CORPORATE <br /> VALUES:
          </h2>
          <div className=" w-full md:py-3 md:mt-5 bg-[#93d3d875] text-[#0C4068]  ">
            <div className=" md:ml-[40px] flex flex-col gap-3 mt-3 max-w-[750px]  text-[20px]">
              <p>
                <span className=" font-bold mr-1">
                  <span className=" text-[25px]">V</span>alues-Driven:
                </span>
                Our actions are grounded in our strong ethical and professional
                values.
              </p>
              <p>
                <span className=" font-bold mr-1">
                  <span className=" text-[25px]">I</span>nnovation:
                </span>
                We constantly innovate to improve healthcare services and
                processes.
              </p>
              <p>
                <span className=" font-bold mr-1">
                  <span className=" text-[25px]">S</span>ustainability:
                </span>
                We promote practices that ensure the long-term health of the
                organizations we advise.
              </p>
              <p>
                <span className=" font-bold mr-1">
                  <span className=" text-[25px]">I</span>ntegrity:
                </span>
                We act with honesty and transparency in all our operations.
              </p>
              <p>
                <span className=" font-bold mr-1">
                  <span className=" text-[25px]">O</span>penness:
                </span>
                We are open to new ideas and approaches that can improve
                healthcare.
              </p>
              <p>
                <span className=" font-bold mr-1">
                  <span className=" text-[25px]">N</span>urturing:
                </span>
                We support and develop talent within our partner organizations.
              </p>
              <p>
                <span className=" font-bold mr-1">
                  <span className=" text-[25px]">A</span>daptability:
                </span>
                We quickly adapt to the changing market needs and our clients'
                needs.
              </p>
              <p>
                <span className=" font-bold mr-1">
                  <span className=" text-[25px]">R</span>espect:
                </span>
                We treat all our stakeholders with respect and dignity.
              </p>
              <p>
                <span className=" font-bold mr-1">
                  <span className=" text-[25px]">Y</span>ielding Results:
                </span>
                We focus on delivering tangible results that improve patient
                care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative md:mt-40 md:mr-32 flex">
        <div className=" flex flex-col justify-start items-start text-start md:mt-6 w-full  ">
          <h2 className=" text-[#0C4068]  md:pl-32  -mb-3 md:ml-[40px] leading-none">
            OUR <br />
            EXPERTISE
          </h2>
          <div className=" w-full md:py-3 md:mt-10  bg-[#93d3d875] text-[#0C4068] md:pl-32   ">
            <div className=" text-[25px] mt-20 md:pr-5 text-[#0C4068] flex flex-col items-start justify-center gap-10">
              <div className="flex  gap-5 justify-center items-center">
                <div className=" flex min-w-[100px] items-center">
                  <StrategicIcon />
                </div>
                <div>
                  <h1 className=" text-[40px] font-bold">
                    Strategic Consulting:
                  </h1>
                  <p>Expert advice to optimize processes and policies.</p>
                </div>
              </div>
              <div className="flex  gap-5  justify-center items-center">
                <div className=" flex min-w-[100px] items-center">
                  <TalentIcon />
                </div>
                <div className=" ">
                  <h1 className=" text-[40px] font-bold">Talent Management:</h1>
                  <p>
                    We attract and manage the best talent to meet our clients'
                    needs
                  </p>
                </div>
              </div>
              <div className="flex gap-5  justify-center items-center">
                <div className=" flex min-w-[100px] items-center">
                  <HealthIcon />
                </div>
                <div className="  ">
                  <h1 className=" text-[40px] font-bold  justify-center items-center">
                    Health Informatics:
                  </h1>
                  <p>
                    We implement advanced technology solutions to improve
                    operational efficiency.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 justify-center items-center">
                <div className=" flex min-w-[100px] items-center">
                  <AuditIcon />
                </div>
                <div className="">
                  <h1 className=" text-[40px] font-bold">
                    Audit and Compliance:
                  </h1>
                  <p>
                    We ensure that our clients' practices comply with current
                    regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center  justify-center w-full h-48 md:w-[300px] md:h-[900px] ">
          <Image
            className=" "
            src={"/images/about-us-page/our-expertise.webp"}
            alt={"our-expertise.webp"}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "60% center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
