/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function PersonalSummary() {
  return (
    <div>
      <div className="flex flex-col bg-[#93D3D8] items-center text-[#00AAA3] py-5 md:p-20 lg:px-40 px-5">
        <div className="flex items-center justify-center">
          <Image
            src="/images/personal-page/Icons/profesional-summary.webp"
            alt="Our Mission"
            width={120}
            height={120}
          />
        </div>
        <h2 className="flex text-[20px] md:text-[40px] mt-4 gap-4">
          <span className="inline-block border-b-4 border-[#00aaa48c]">
            PROFESSIONAL
          </span>
          <span className="font-normal">SUMMARY</span>
        </h2>
        <p className="text-[#0C4068] font-medium mt-4">
          LaSonya Darrell is an accomplished healthcare and IT professional with
          over 25 years of diverse, global experience. As a Certified Project
          Manager, Registered Nurse, and business intelligence expert, she has
          successfully designed, built, and revamped systems and processes
          within healthcare and insurance sectors. LaSonya excels in Clinical
          Operations, SDLC, SQL, SAS, and has a strong background in Oncology
          and Business Intelligence. Her expertise in claims processing systems
          and EHR solutions has significantly improved the operational
          efficiency of numerous organizations.
        </p>
      </div>
    </div>
  );
}
