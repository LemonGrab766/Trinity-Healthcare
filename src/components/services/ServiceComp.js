import React from "react";
import Carousel from "./Carrousel";
import RowButton from "../RowButton";
import Image from "next/image";
import { TalentIcon } from "../AboutUs/Icons";

const services = [
  {
    title: "CONSULTANCY SERVICES",
    image: "/images/services/consultancy-services.webp",
    imgProp: "center 18%",
    text: [
      {
        title: "Strategic Healthcare Management:",
        text: "Partner with us to refine your organizational strategies and enhance operational efficiency. Our experts guide you through process optimizations, strategic planning, and the implementation of best practices to ensure sustainable growth.",
      },
      {
        title: "Health Informatics Solutions:",
        text: "Leverage our expertise in health informatics to transform data into actionable insights. We help you implement advanced analytics tools and systems that improve decision-making and patient outcomes.",
      },
      {
        title: "Regulatory Compliance and Risk Management: ",
        text: "Stay ahead of the curve with our comprehensive compliance solutions. We assist in navigating the complex regulatory landscape, ensuring that your practices not only meet but exceed the required healthcare standards.",
      },
    ],
  },
  {
    title: "STAFF AUGMENTATION",
    image: "/images/services/staff-augmentation.webp",
    imgProp: "center 30%",
    text: [
      {
        title: "Clinical Staffing Solutions:",
        text: "Fill your staffing gaps with our qualified healthcare professionals. From temporary placements to permanent hires, we provide skilled personnel to enhance your service delivery.",
      },
      {
        title: "Training and Development:",
        text: "Elevate the capabilities of your team with our tailored training programs. We focus on continuing education, leadership development, and specialized skill training to keep your staff at the forefront of healthcare innovation.",
      },
    ],
  },
  {
    title: "OPERATIONAL IMPROVEMENT",
    image: "/images/services/operationa-impromevent.webp",
    text: [
      {
        title: "Process Redesign and Efficiency Optimization:",
        text: "Transform your healthcare processes with our expert analysis and innovative redesign strategies. We focus on streamlining operations to maximize efficiency and reduce costs.",
      },
      {
        title: "Patient Experience Enhancement:",
        text: "Enhance patient satisfaction and care standards by adopting our cutting-edge approaches to patient care. We help you integrate patient-centered practices that improve outcomes and patient loyalty.",
      },
    ],
  },
  {
    title: "TECHNOLOGY IMPLEMENTATION",
    image: "/images/services/technology-implementation.webp",
    text: [
      {
        title: "EMR and EHR Systems:",
        text: "Implement or upgrade your electronic medical records systems with our expert guidance. Our team ensures a seamless transition and optimized utilization of EMR/EHR systems for better health data management.",
      },
      {
        title: "Digital Transformation Services:",
        text: "Embrace the future with our digital transformation strategies. From telemedicine to mobile health applications, we enable your organization to use technology to its fullest potential, improving accessibility and patient engagement.",
      },
    ],
  },
];

export default function ServiceComp() {
  // return (
  //   <div className=" md:my-20 md:px-20 ">
  //     <Carousel services={services} />
  //     <div className=" flex flex-col justify-center items-center text-center gap-4 mt-10 mb-5 md:mb-0 ">
  //       <h2 className="  text-[#00AAA3] inline-block border-b-4 border-[#00aaa48c] mb-2">
  //         CONTACT US
  //       </h2>
  //       <RowButton link={"/contact"} />
  //     </div>
  //   </div>
  // );
  return (
    <div className="">
      <div className={`flex flex-col-reverse md:flex-row  items-center `}>
        <div className=" items-start w-full  z-20">
          <div className="relative flex items-center  justify-center w-full h-48 md:w-[600px] md:h-[500px] ">
            <Image
              className=" "
              src={"/images/services/strategic-consulting.webp"}
              alt={"STRATEGIC CONSULTING:"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "0% center",
              }}
            />
            <div className="flex absolute -bottom-5 justify-center items-center">
              <RowButton link={"/services"} />
            </div>
          </div>
        </div>
        <div className=" md:absolute flex flex-col justify-center md:justify-end items-start w-full md:max-w-[600px] md:right-[150px]">
          <div className=" hidden md:flex absolute top-0 right-[110px] flex-1 pt-32 pr-5 bg-[#93d3d875] mb-5 w-screen">
            <div className="absolute bg-[#00AAA3] -top-7 -right-9 p-3">
              <svg
                width="70"
                height="60"
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
          </div>
          <div className="relative   z-20 flex justify-start items-start pt-16 md:pr-5 mb-5 w-full md:w-auto md:flex-grow">
            <h2 className="text-[#0C4068] text-[65px] font-extrabold -mb-3 ml-10 leading-none">
              STRATEGIC CONSULTING:
            </h2>
          </div>
          <p className=" px-5 md:px-0 md:ml-10 text-[#0C4068] text-[20px] text-justify">
            Expert advice to optimize processes and policies.
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
          <div className=" bg-[#00AAA3] hidden md:flex absolute -bottom-[40px] right-0">
            <TalentIcon noColor={true} w={"130px"} h={"130px"} />
          </div>
          <div className="flex flex-col justify-end items-center  md:ml-[40px] md:items-start w-full md:max-w-[600px] md:mr-12 ">
            <div className=" relative flex justify-start items-start">
              <h2 className=" text-white font-extrabold text-[80px] leading-none">
                HEALTH INFORMATICS:
              </h2>
            </div>
            <p className="  text-[20px] text-white text-justify pr-10 ">
              We implement advanced technology solutions to improve operational
              efficiency.
            </p>
          </div>
        </div>
      </div>
      <div className={`flex flex-col-reverse md:flex-row  items-center mt-20 `}>
        <div className=" items-start w-full  z-20">
          <div className="relative flex items-center  justify-center w-full h-48 md:w-[600px] md:h-[500px] ">
            <Image
              className=" "
              src={"/images/services/talent-managment.webp"}
              alt={"STRATEGIC CONSULTING:"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="flex absolute -bottom-5 justify-center items-center">
              <RowButton link={"/services"} />
            </div>
          </div>
        </div>
        <div className=" md:absolute flex flex-col justify-center md:justify-end items-start w-full md:max-w-[600px] md:right-[150px]">
          <div className=" hidden md:flex absolute top-0 right-[110px] flex-1 pt-32 pr-5 bg-[#93d3d875] mb-5 w-screen">
            <div className="absolute bg-[#00AAA3] -top-16 -right-12 p-3">
              <svg
                width="100"
                height="100"
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2038_715)">
                  <path
                    d="M2.65734 114C0.797203 113.203 0 111.874 0 109.748C0.265734 106.028 0 102.308 0.265734 98.8532C1.32867 85.8322 11.958 74.4056 24.7133 72.014C27.3706 71.4825 29.7622 71.4825 32.4196 71.2168C32.1538 70.9511 32.1538 70.6853 31.8881 70.6853C25.7762 64.042 22.5874 56.3357 22.3217 47.3007C22.3217 41.986 22.0559 36.9371 22.5874 31.6224C24.1818 17.8042 31.3566 7.97204 43.5804 2.65736C63.5105 -5.84614 86.0979 6.1119 90.6154 27.3706C91.1469 29.4965 91.4126 31.6224 91.4126 33.7483C91.4126 39.063 91.6783 44.3776 91.1469 49.6923C90.6154 57.6644 87.4266 64.3077 82.1119 70.1539C81.8462 70.4196 81.5804 70.6853 81.3147 70.9511C82.9091 70.9511 84.5035 71.2168 85.8322 71.2168C99.3846 72.2797 111.343 83.1748 113.469 96.7273C113.734 97.5245 113.734 98.5874 114 99.3846C114 103.371 114 107.357 114 111.343C113.469 112.406 112.671 113.203 111.608 113.734C111.077 113.734 110.545 113.734 109.748 113.734C107.888 112.937 107.091 111.343 107.357 109.217C107.357 106.825 107.357 104.168 107.357 101.776C107.091 92.4755 102.839 85.5665 94.8671 80.7832C93.007 79.7203 90.8811 78.9231 88.4895 78.3916C88.4895 78.9231 88.4895 79.1888 88.4895 79.4546C88.4895 82.6434 88.4895 86.0979 88.4895 89.2867C88.4895 90.0839 88.7552 90.3497 89.5525 90.8811C93.8042 93.007 96.1958 97.5245 95.1329 102.042C94.0699 106.825 90.0839 110.014 85.3007 109.748C80.5175 109.748 76.5315 106.559 75.4685 101.776C74.4056 97.2588 76.7972 92.7413 81.049 90.6154C81.5804 90.3497 81.8462 90.0839 81.8462 89.2867C81.8462 85.8322 81.8462 82.1119 81.8462 78.6574C81.8462 78.3916 81.8462 78.1259 81.8462 77.5944C81.3147 77.5944 80.7832 77.5944 80.5175 77.5944C79.1888 77.3287 78.6573 77.8602 77.8601 79.1888C72.2797 89.8182 66.4336 100.182 60.8531 110.811C60.3217 112.14 59.5245 112.937 58.1958 113.734C57.6643 113.734 57.1329 113.734 56.3357 113.734C55.007 113.203 54.4755 112.14 53.6783 111.077C51.2867 106.825 49.1608 102.573 46.7692 98.056C43.3147 91.6783 39.8601 85.035 36.1399 78.6574C35.8741 78.3916 35.6084 77.8602 35.0769 77.8602C33.7483 77.8602 32.4196 77.8602 31.0909 77.8602C31.0909 78.3916 31.0909 78.6574 31.0909 78.9231C31.0909 82.3776 31.0909 85.5665 31.0909 89.021C31.0909 89.8182 31.3566 90.0839 32.1538 90.3497C36.6713 92.2098 39.3287 95.3986 40.1259 100.182C40.3916 102.308 40.3916 104.699 40.3916 106.825C40.3916 108.951 39.0629 110.28 37.2028 110.28C35.3427 110.28 33.7483 108.951 33.7483 106.825C33.7483 105.231 33.7483 103.371 33.7483 101.776C33.7483 98.5874 31.0909 96.1958 28.1678 96.1958C24.979 96.1958 22.5874 98.5874 22.5874 101.776C22.5874 103.371 22.5874 105.231 22.5874 106.825C22.5874 108.951 21.2587 110.28 19.3986 110.28C17.5385 110.28 15.9441 108.951 15.9441 106.825C15.9441 105.231 15.9441 103.371 15.9441 101.776C15.9441 96.4616 19.1329 91.9441 24.1818 90.0839C24.7133 89.8182 24.979 89.5525 24.979 89.021C24.979 85.8322 24.979 82.6434 24.979 79.4546C24.979 79.1888 24.979 78.9231 24.979 78.6574C24.7133 78.6574 24.4476 78.6574 24.1818 78.6574C15.6783 81.049 8.23776 89.5525 7.44056 98.3217C7.17483 102.042 7.17483 105.497 7.17483 109.217C7.17483 111.343 6.37762 112.671 4.51748 113.469C3.45455 114 3.18881 114 2.65734 114ZM84.7692 36.1399C74.4056 38.7972 65.1049 36.6713 56.8671 29.7623C48.6294 36.4056 39.3287 38.5315 28.965 36.1399C28.965 39.5944 28.965 43.049 28.965 46.5035C28.965 48.6294 29.2308 50.4895 29.4965 52.6154C32.1538 64.8392 43.049 74.1399 55.5385 74.4056C68.2937 74.9371 79.986 66.4336 83.4406 54.2098C85.3007 48.3637 84.5035 42.2518 84.7692 36.1399ZM77.5944 30.5595C78.6573 30.2937 80.7832 30.028 83.1748 29.4965C84.2378 29.2308 84.2378 28.965 83.972 27.9021C80.2517 13.021 65.6364 3.72029 50.7552 7.44057C39.8601 10.0979 32.951 17.2727 30.028 28.1678C29.7622 28.9651 30.028 29.2308 30.8252 29.4965C32.6853 29.7623 34.8112 30.2937 36.6713 30.5595C43.5804 30.8252 49.4266 28.1678 54.4755 23.1189C55.2727 22.3217 56.0699 21.7902 57.1329 21.7902C58.4615 21.7902 59.2587 22.5874 60.0559 23.3846C64.5734 27.9021 70.1538 30.2937 77.5944 30.5595ZM56.8671 82.9091C54.7413 85.3007 52.8811 87.4266 50.7552 89.8182C50.2238 90.3497 50.2238 90.8811 50.4895 91.4126C52.3497 94.8671 54.4755 98.5874 56.3357 102.042C56.6014 102.308 56.8671 102.839 57.1329 103.371C57.1329 103.105 57.1329 102.839 57.3986 102.839C59.5245 99.1189 61.3846 95.3986 63.5105 91.6783C63.7762 91.4126 63.5105 90.8811 63.5105 90.6154C61.1189 88.2238 58.993 85.5665 56.8671 82.9091ZM84.7692 103.371C86.6294 103.371 88.2238 101.776 88.2238 100.182C88.2238 98.3217 86.6294 96.7273 85.035 96.7273C83.1748 96.7273 81.5804 98.056 81.5804 99.9161C81.5804 101.776 82.9091 103.371 84.7692 103.371Z"
                    fill="white"
                  />
                  <path
                    d="M111.343 114C112.406 113.469 113.203 112.671 113.734 111.608C113.734 112.406 113.734 113.203 113.734 114C113.203 114 112.406 114 111.343 114Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2038_715">
                    <rect width="114" height="114" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="relative   z-20 flex justify-start items-start pt-16 md:pr-5 mb-5 w-full md:w-auto md:flex-grow">
            <h2 className="text-[#0C4068] text-[65px] font-extrabold -mb-3 ml-10 leading-none">
              TALENT MANAGEMENT:
            </h2>
          </div>
          <p className=" px-5 md:px-0 md:ml-10 text-[#0C4068] text-[20px] text-justify">
            We attract and manage the best talent to meet our clients needs.
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col-reverse md:flex-row-reverse  items-center mt-20 `}
      >
        <div className="relative flex items-center  justify-center w-full h-48 md:w-[800px] md:h-[500px] ">
          <Image
            className=" "
            src={"/images/services/audit.webp"}
            alt={"audit"}
            fill
            style={{
              objectFit: "cover",
              objectPosition: " 80% center",
            }}
          />
          <div className="flex absolute -bottom-5 justify-center items-center">
            <RowButton link={"/services"} />
          </div>
        </div>
        <div className=" relative flex justify-center items-center w-full bg-[#0C4068] p-5 mt-16 md:mt-0 md:p-10">
          <div className=" bg-[#00AAA3] p-4 hidden md:flex absolute -bottom-[40px] right-0">
            <svg
              width="100"
              height="100"
              viewBox="0 0 142 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2038_721)">
                <path
                  d="M54.8722 0C86.7573 0 111.227 21.1332 115.306 49.6815C115.676 51.906 115.676 54.5013 116.047 57.0966C116.047 57.8381 116.418 58.5796 117.159 58.9504C130.877 65.9948 139.034 77.1175 141.629 92.3185C143.112 101.958 141.259 111.227 136.439 119.755C136.068 120.867 135.697 121.608 136.068 122.721C137.18 126.799 138.293 130.507 139.405 134.585C140.517 138.292 137.922 140.888 134.214 139.775C130.136 138.663 126.058 137.551 121.979 136.439C121.238 136.439 120.125 136.439 119.755 136.809C97.5093 149.044 70.0732 140.517 58.9505 117.53C58.5798 116.418 57.8382 116.418 56.726 116.418C46.7155 116.418 37.4466 113.452 28.9192 108.632C28.1777 107.52 27.0654 107.52 26.3239 107.89C20.3918 109.373 14.4596 111.227 8.89829 112.71C4.81996 113.822 2.22466 111.227 3.33693 107.52C4.81996 101.587 6.30299 95.6553 8.15677 90.094C8.52753 88.9817 8.15677 88.2402 7.78602 87.4987C-5.932 63.3995 -1.48291 33.7389 18.9087 15.201C29.6607 5.1906 43.0079 0.370757 54.8722 0ZM12.2351 103.812C12.6059 103.812 12.9766 103.812 13.3474 103.441C17.7965 102.329 22.2455 101.217 26.3239 99.7337C27.8069 99.3629 29.2899 99.3629 30.773 100.475C42.2664 107.52 54.5014 110.115 67.8487 107.52C93.8017 102.7 112.34 76.376 107.89 50.0522C104.183 28.1775 87.8696 11.4935 65.9949 8.15666C47.457 5.56136 31.5145 11.4935 19.2795 25.953C5.19072 43.0078 3.70769 65.9948 15.5719 85.2741C16.3134 86.7572 16.6842 88.2402 16.3134 89.7232C14.8304 94.1723 13.7181 98.9922 12.2351 103.812ZM130.507 130.507C129.765 127.54 129.024 124.945 128.282 122.721C127.541 120.496 127.911 118.642 129.024 116.789C139.405 99.7337 133.843 77.1175 116.418 67.107C116.047 66.7363 115.676 66.7363 115.306 66.7363C109.373 93.8016 93.0602 110.115 65.9949 116.047C66.3656 116.418 66.3657 117.159 66.7364 117.53C77.1176 134.585 99.363 139.775 116.418 129.394C118.272 128.282 119.755 127.911 121.608 128.653C124.945 129.023 127.541 129.765 130.507 130.507Z"
                  fill="white"
                />
                <path
                  d="M45.9741 45.9739C45.9741 41.5248 45.9741 37.4465 45.9741 33.3682C45.9741 29.6606 47.0864 28.5483 51.1647 28.5483C55.9845 28.5483 60.4336 28.5483 65.2535 28.5483C68.5903 28.5483 70.0733 30.0314 70.0733 33.3682C70.0733 37.4465 70.0733 41.8956 70.0733 46.3447C70.8148 46.3447 71.1856 46.3447 71.9271 46.3447C75.6347 46.3447 79.3422 46.3447 83.0498 46.3447C86.3866 46.3447 87.8696 47.8277 87.8696 51.1645C87.8696 55.9844 87.8696 60.8042 87.8696 65.6241C87.8696 68.9609 86.3866 70.0731 83.0498 70.0731C79.3422 70.0731 75.2639 70.0731 71.5563 70.0731C71.1856 70.0731 70.444 70.0731 69.7025 70.0731C69.7025 73.0392 69.7025 76.0053 69.7025 78.6006C69.7025 80.4543 69.7025 81.9374 69.7025 83.7912C69.7025 86.3865 68.2195 87.8695 65.6242 87.8695C60.4336 87.8695 55.243 87.8695 50.4232 87.8695C47.4571 87.8695 45.9741 86.3865 45.9741 83.4204C45.9741 79.7128 45.9741 75.6345 45.9741 71.9269C45.9741 71.1854 45.9741 70.8147 45.9741 69.7024C45.2326 69.7024 44.8618 69.7024 44.1203 69.7024C40.4127 69.7024 36.7051 69.7024 32.9976 69.7024C29.6608 69.7024 28.1777 68.2194 28.1777 64.8825C28.1777 60.0627 28.1777 55.2429 28.1777 50.423C28.1777 47.0862 29.6608 45.6032 32.9976 45.6032C36.7051 45.6032 40.4127 45.6032 44.1203 45.6032C44.8618 45.9739 45.2326 45.9739 45.9741 45.9739ZM80.0837 62.2872C80.0837 59.3212 80.0837 56.3551 80.0837 53.7598C79.3422 53.7598 78.9715 53.7598 78.23 53.7598C74.5224 53.7598 70.4441 53.7598 66.7365 53.7598C63.7704 53.7598 62.6581 52.2768 62.2874 49.3107C62.2874 45.2324 62.2874 41.5248 62.2874 37.4465C62.2874 37.0758 62.2874 36.3342 62.2874 35.5927C59.3213 35.5927 56.726 35.5927 53.76 35.5927C53.76 36.3342 53.76 36.705 53.76 37.4465C53.76 41.1541 53.76 45.2324 53.76 48.94C53.76 51.906 52.277 53.3891 49.3109 53.3891C45.6033 53.3891 41.525 53.3891 37.8174 53.3891C37.0759 53.3891 36.7051 53.3891 35.9636 53.3891C35.9636 56.3551 35.9636 58.9504 35.9636 61.9165C36.7051 61.9165 37.0759 61.9165 37.8174 61.9165C41.525 61.9165 45.6033 61.9165 49.3109 61.9165C52.277 61.9165 53.76 63.3995 53.76 66.3656C53.76 70.0731 53.76 74.1515 53.76 77.859C53.76 78.6006 53.76 79.3421 53.76 79.7128C56.726 79.7128 59.6921 79.7128 62.2874 79.7128C62.2874 75.2637 62.2874 71.1854 62.2874 67.1071C62.2874 63.0288 63.3997 61.9165 67.478 61.9165C71.5563 62.2872 75.6347 62.2872 80.0837 62.2872Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2038_721">
                  <rect width="142" height="142" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col justify-end items-center  md:ml-[40px] md:items-start w-full md:max-w-[600px] md:mr-12 ">
            <div className=" relative flex justify-start items-start">
              <h2 className=" text-white font-extrabold text-[80px] leading-none">
                AUDIT AND COMPLIANCE:
              </h2>
            </div>
            <p className="  text-[20px] text-white text-justify pr-10 ">
              {
                "We ensure that our clients' practices comply with current regulations."
              }
            </p>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col-reverse md:flex-row  items-center mt-20 mb-32 `}
      >
        <div className=" items-start w-full  z-20">
          <div className="relative flex items-center  justify-center w-full h-48 md:w-[600px] md:h-[700px] ">
            <Image
              className=" "
              src={"/images/services/home-care.webp"}
              alt={"home-care"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="flex absolute -bottom-5 justify-center items-center">
              <RowButton link={"/services"} />
            </div>
          </div>
        </div>
        <div className=" md:absolute flex flex-col justify-center md:justify-end items-start w-full md:max-w-[600px] md:right-[150px]">
          <div className=" hidden md:flex absolute top-0 right-[110px] flex-1 pt-[200px] pr-5 bg-[#93d3d875] mb-5 w-screen">
            <div className="absolute bg-[#00AAA3] -top-10 -right-16 p-3">
              <svg
                width="80"
                height="80"
                viewBox="0 0 108 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2038_741)">
                  <path
                    d="M69.6656 0.830566C71.4704 1.60754 71.9861 3.1615 71.9861 4.97445C71.9861 8.85934 71.9861 12.4852 71.9861 16.3701C71.9861 16.6291 71.9861 17.1471 71.9861 17.6651C72.5017 17.6651 72.7596 17.6651 73.2752 17.6651C77.4005 17.6651 81.268 17.6651 85.3933 17.6651C87.7138 17.6651 89.0029 18.9601 89.0029 21.291C89.0029 26.7298 89.0029 31.9097 89.0029 37.3486C89.0029 39.6795 87.7138 40.9745 85.3933 40.9745C81.268 40.9745 77.4005 40.9745 73.2752 40.9745C73.0174 40.9745 72.5017 40.9745 71.9861 40.9745C71.9861 41.4924 71.9861 41.7514 71.9861 42.2694C71.9861 46.4133 71.9861 50.2982 71.9861 54.4421C71.9861 56.773 70.6969 58.068 68.3764 58.068C62.962 58.068 57.8054 58.068 52.3909 58.068C50.0704 58.068 48.7813 56.773 48.7813 54.4421C48.7813 50.0392 48.7813 45.6363 48.7813 41.2334C48.2656 41.2334 48.0078 41.2334 47.7499 41.2334C43.6246 41.2334 39.7572 41.2334 35.6319 41.2334C33.3114 41.2334 32.0222 39.9385 32.0222 37.6075C32.0222 32.4277 32.0222 26.9888 32.0222 21.809C32.0222 19.4781 33.3114 18.1831 35.6319 18.1831C40.015 18.1831 44.3981 18.1831 48.7813 18.1831C48.7813 17.6651 48.7813 17.4061 48.7813 17.1471C48.7813 13.2622 48.7813 9.37733 48.7813 5.75143C48.7813 3.67949 49.2969 2.38452 51.1017 1.60754C57.2897 0.830566 63.4776 0.830566 69.6656 0.830566ZM65.5403 51.3342C65.5403 50.8162 65.5403 50.5572 65.5403 50.0392C65.5403 45.8953 65.5403 42.0104 65.5403 37.8665C65.5403 35.5356 66.8294 34.2406 69.1499 34.2406C73.2752 34.2406 77.1427 34.2406 81.268 34.2406C81.5258 34.2406 82.0415 34.2406 82.2993 34.2406C82.2993 30.6147 82.2993 27.2478 82.2993 23.6219C81.7837 23.6219 81.5258 23.6219 81.0102 23.6219C77.1427 23.6219 73.0174 23.6219 69.1499 23.6219C66.8294 23.6219 65.5403 22.327 65.5403 19.996C65.5403 15.8521 65.5403 11.9673 65.5403 7.82337C65.5403 7.56438 65.5403 7.04639 65.5403 6.7874C61.9307 6.7874 58.5788 6.7874 54.9692 6.7874C54.9692 7.30539 54.9692 7.56438 54.9692 8.08237C54.9692 12.2263 54.9692 16.1111 54.9692 20.255C54.9692 22.586 53.6801 23.8809 51.3596 23.8809C47.2343 23.8809 43.3668 23.8809 39.2415 23.8809C38.9837 23.8809 38.468 23.8809 38.2102 23.8809C38.2102 27.5068 38.2102 30.8737 38.2102 34.4996C42.5933 34.4996 46.9764 34.4996 51.3596 34.4996C53.6801 34.4996 54.9692 35.7946 54.9692 38.1255C54.9692 42.2694 54.9692 46.1543 54.9692 50.2982C54.9692 50.5572 54.9692 51.0752 54.9692 51.3342C58.5788 51.3342 62.1885 51.3342 65.5403 51.3342Z"
                    fill="white"
                  />
                  <path
                    d="M76.1115 76.4564C77.6584 75.1614 79.2054 73.6074 80.7524 72.3125C84.3621 68.9456 87.9717 65.5787 91.8392 62.4707C97.2536 57.8089 105.504 60.3988 107.309 67.1326C108.34 71.0175 107.051 74.3844 104.215 76.9743C99.8319 80.8592 95.7066 84.7441 91.3235 88.629C88.2295 91.4779 85.1355 94.0679 82.0416 96.9168C78.1741 100.284 73.791 102.356 68.6343 102.356C56.7741 102.356 44.9139 102.356 33.0536 102.356C32.2801 102.356 31.7645 102.615 31.2488 103.133C29.7018 104.687 28.1548 106.241 26.8657 107.794C26.0922 108.571 25.0609 109.089 24.0295 109.089C17.3259 109.089 10.6223 109.089 4.17651 109.089C2.11386 109.089 0.824707 107.794 0.824707 105.723C0.824707 100.284 0.824707 94.5858 0.824707 89.147C0.824707 88.111 1.08254 87.0751 2.11386 86.2981C8.30182 79.8233 14.7476 73.6074 20.9356 67.1326C27.6392 60.3988 38.2102 59.1038 46.4608 64.0247C49.5548 65.8376 52.6488 66.6146 56.0006 66.6146C59.3524 66.6146 62.7042 66.6146 66.056 66.6146C71.7283 66.3556 76.3693 70.7585 76.3693 76.1974C76.1115 75.9384 76.1115 76.1974 76.1115 76.4564ZM6.75483 102.356C7.01266 102.356 7.01266 102.356 7.01266 102.356C12.1693 102.356 17.0681 102.356 22.2247 102.356C22.4825 102.356 22.9982 102.097 23.256 101.838C24.803 100.284 26.35 98.7297 27.6392 97.4348C28.6705 96.3988 29.7018 95.8808 30.991 95.8808C43.109 95.8808 55.2271 95.8808 67.603 95.8808C71.7283 95.8808 75.0801 94.5858 78.1741 91.7369C83.5886 86.8161 89.003 81.8952 94.4175 77.2333C96.2223 75.4204 98.2849 73.8664 100.09 72.0535C101.121 71.0175 101.379 69.9815 101.121 68.6866C100.605 67.3916 99.8319 66.6146 98.5428 66.6146C97.5115 66.3556 96.4801 66.8736 95.7066 67.6506C90.0343 72.5715 84.362 77.7513 78.6898 82.6722C76.6271 84.4851 74.5645 85.2621 71.9862 85.2621C63.2199 85.2621 54.7115 85.2621 45.9452 85.2621C43.8825 85.2621 42.5934 83.9671 42.5934 82.1542C42.5934 80.3412 44.1404 79.0463 46.203 79.0463C47.75 79.0463 49.0392 79.0463 50.5861 79.0463C56.0006 79.0463 61.1572 79.0463 66.5717 79.0463C68.1187 79.0463 69.4078 78.2693 69.9235 76.7153C70.4392 74.6434 68.8922 72.8305 66.5717 72.5715C63.2199 72.5715 59.6102 72.5715 56.2584 72.5715C51.6175 72.5715 47.2343 71.5355 43.3669 69.2046C37.1789 65.5787 29.9596 66.6146 24.803 71.5355C19.1307 77.2333 13.2006 83.1902 7.52832 88.888C7.27049 89.147 7.01266 89.406 7.01266 89.924C6.75483 94.0679 6.75483 98.2117 6.75483 102.356Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2038_741">
                    <rect
                      width="107"
                      height="108"
                      fill="white"
                      transform="translate(0.566895 0.830566)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="relative   z-20 flex justify-start items-start pt-16 md:pr-5 mb-5 w-full md:w-auto md:flex-grow">
            <h2 className="text-[#0C4068] text-[65px] font-extrabold -mb-3 ml-10 leading-none">
              HOME CARE SERVICES AND NURSE CARE MANAGEMENT:
            </h2>
          </div>
          <p className=" px-5 md:px-0 md:ml-10 text-[#0C4068] text-[20px] text-justify">
            full face-to-face assessments, handpick expertly trained carers and
            personal assistants, and ensure continuity and co-ordination of care
            through effective carer and customer partnerships.
          </p>
        </div>
      </div>
      <div className=" relative  flex justify-center">
        <div className=" absolute -bottom-[8px] flex bg-[#00AAA3] h-2 md:w-[900px] mb-1"></div>
      </div>
    </div>
  );
}
