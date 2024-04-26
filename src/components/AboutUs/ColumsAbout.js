/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function ColumsAbout() {
  return (
    <div>
      <div className=" flex justify-center -mb-1">
        <div className=" flex bg-[#00AAA3] h-1 md:w-[400px] mb-1"></div>
      </div>
      <div className="grid  w-full md:grid-cols-2  grid-cols-1 justify-center items-start">
        <div className="flex flex-col items-center text-[#00AAA3] py-5 md:p-20">
          <div className="flex items-center justify-center">
            <Image
              src="/images/about-us-page/icons/out-mission.webp"
              alt="Our Mission"
              width={120}
              height={120}
            />
          </div>
          <h2 className="flex mt-4 gap-4">
            <span className="font-normal">Our</span>
            <span className="inline-block border-b-4 border-[#00aaa48c]">
              Mission
            </span>
          </h2>
          <p className="text-[#0C4068] font-medium max-w-[350px] mt-4">
            "To serve as catalysts for transformation, guiding healthcare
            entities towards greater efficiency, effectiveness, and
            sustainability in care delivery."
          </p>
        </div>
        <div className="bg-[#93D3D8] w-full flex flex-col items-center text-[#0C4068] py-5  md:p-20">
          <div className="flex items-center justify-center">
            <Image
              src="/images/about-us-page/icons/our-vision.webp"
              alt="Our Vision"
              width={120}
              height={120}
            />
          </div>
          <h2 className="flex mt-4 gap-4">
            <span className="font-normal">Our</span>
            <span className="inline-block border-b-4 border-[#0c4068a4]">
              Vision
            </span>
          </h2>
          <p className="text-[#0C4068] font-medium max-w-[350px] mt-4">
            "To foster a culture of excellence and innovation within healthcare
            organizations, inspiring continuous learning, adaptation, and
            improvement to meet the changing needs of patients and communities."
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full justify-center items-start">
        <div className="bg-[#93D3D8] h-full order-last md:order-first flex flex-col items-center text-[#0C4068] py-5  md:p-20">
          <div className="flex items-center justify-center">
            <Image
              src="/images/about-us-page/icons/our-values.webp"
              alt="Our Vision"
              width={120}
              height={120}
            />
          </div>
          <h2 className="flex mt-4 gap-4">
            <span className="font-normal">Our</span>
            <span className="inline-block border-b-4 border-[#0c4068a4]">
              VALUES
            </span>
          </h2>
          <div className=" flex flex-col gap-3 mt-3 max-w-[350px]">
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
              We focus on delivering tangible results that improve patient care.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-[#00AAA3] py-5  md:p-20">
          <div className="flex items-center justify-center">
            <Image
              src="/images/about-us-page/icons/our-experience.webp"
              alt="Our Mission"
              width={120}
              height={120}
            />
          </div>
          <h2 className="flex flex-wrap justify-center mt-4 lg:gap-4">
            <span className="font-normal">Our</span>
            <span className="inline-block border-b-4 border-[#00aaa48c]">
              Expertise
            </span>
          </h2>
          <p className="text-[#0C4068] font-medium max-w-[350px] mt-4">
            We offer a wide range of services designed to elevate the standards
            of care and operation across all facets of the healthcare industry:
          </p>

          <div className=" mt-20 text-[#0C4068] max-w-[400px] flex flex-col items-center justify-center gap-10">
            <div className="flex  gap-5 justify-center items-center">
              <div className=" flex min-w-[100px] items-center">
                <Image
                  src="/images/about-us-page/icons/strategic-consulting.webp"
                  alt="strategic-consulting"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                <h1 className=" text-[25px] font-bold">
                  Strategic Consulting:
                </h1>
                <p>Expert advice to optimize processes and policies.</p>
              </div>
            </div>
            <div className="flex  gap-5  max-w-[400px] justify-center items-center">
              <div className=" flex min-w-[100px] items-center">
                <Image
                  src="/images/about-us-page/icons/talent-management.webp"
                  alt="talent-management"
                  width={120}
                  height={120}
                />
              </div>
              <div className=" ">
                <h1 className=" text-[25px] font-bold">Talent Management:</h1>
                <p>
                  We attract and manage the best talent to meet our clients'
                  needs
                </p>
              </div>
            </div>
            <div className="flex gap-5  justify-center items-center">
              <div className=" flex min-w-[100px] items-center">
                <Image
                  src="/images/about-us-page/icons/health-informatics.webp"
                  alt="health-informatics"
                  width={120}
                  height={120}
                />
              </div>
              <div className="  ">
                <h1 className=" text-[25px] font-bold  justify-center items-center">
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
                <Image
                  src="/images/about-us-page/icons/audit-and-compliance.webp"
                  alt="audit-and-compliance"
                  width={120}
                  height={120}
                />
              </div>
              <div className="">
                <h1 className=" text-[25px] font-bold">
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
      <div className=" flex justify-center -mb-1">
        <div className=" flex bg-[#00AAA3] h-1 md:w-[400px] mb-1"></div>
      </div>
    </div>
  );
}
