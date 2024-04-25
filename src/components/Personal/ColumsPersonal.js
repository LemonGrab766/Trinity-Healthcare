import Image from "next/image";
import React from "react";

const expertise = [
  "Healthcare Operations and Strategy",
  "System and Provider Configurations",
  "Data Analysis and Business Intelligence (Power BI, SQL, SAS, Tableau)",
  "Clinical Software Implementation",
  "Leadership and Team Management",
  "Digital Transformation and Process Optimization",
  "Education",
];
const education = [
  "Bachelor of Science in Nursing (BSN)",
  "Master of Education (M.Ed)",
  "Certified Project Manager (PMP)",
  "Certified Organizational Effectiveness (COE)",
];

export default function ColumsPersonal() {
  return (
    <div>
      <div className=" flex justify-center -mb-1">
        <div className=" flex bg-[#00AAA3] h-1 md:w-[400px] mb-1"></div>
      </div>
      <div className="grid  w-full md:grid-cols-2   grid-cols-1 justify-center items-start">
        <div className="flex flex-col items-center text-[#0C4068] h-full md:border-r-2 md:border-[#00AAA3] py-5 lg:p-20 px-5 ">
          <div className="flex items-center justify-center mb-3 ">
            <Image
              src="/images/personal-page/Icons/cap.png"
              alt="Our Mission"
              width={150}
              height={150}
            />
          </div>
          <div className="md:px-20">
            <h2 className=" mt-4  leading-none">
              <span className="font-normal mr-5">CARRER</span>
              <span className="inline-block border-b-4 border-[#00aaa48c]">
                HIGHLIGHTS
              </span>
            </h2>
            <div className=" flex relative mt-10">
              <div className=" flex bg-[#00aaa436] absolute h-[70%] w-[6px] mb-1 ml-2"></div>
              <div className=" ml-10 flex flex-col gap-10">
                <div className=" relative flex flex-col gap-5">
                  <div className=" flex w-5 h-5 bg-[#00AAA3] rounded-full absolute  -left-[39px]"></div>
                  <h3 className=" font-bold">
                    Director of Clinical Operations, Bermuda Hospitals Board
                  </h3>
                  <p>June 2023 - Present</p>
                  <p className="text-[#0C4068] font-medium max-w-[350px]">
                    Overseeing clinical support and operational management,
                    enhancing patient experience, and elevating healthcare
                    standards within the organization.
                  </p>
                </div>
                <div className=" relative flex flex-col gap-5">
                  <div className=" flex w-5 h-5 bg-[#00AAA3] rounded-full absolute  -left-[39px]"></div>
                  <h3 className=" font-bold">
                    Program Director, Project Manager PMO
                  </h3>
                  <p>February 2020 - June 2023</p>
                  <p className="text-[#0C4068] font-medium max-w-[350px] mt-4">
                    Led an $80 million system implementation across hospital and
                    clinic networks, enhancing governance and stakeholder
                    engagement.
                  </p>
                </div>
                <div className=" relative flex flex-col gap-5">
                  <div className=" flex w-5 h-5 bg-[#00AAA3] rounded-full absolute  -left-[39px]"></div>
                  <h3 className=" font-bold">
                    Lead Program Manager/Business Intelligence
                  </h3>
                  <p>February 2019 - March 2020</p>
                  <p className="text-[#0C4068] font-medium max-w-[350px] mt-4">
                    Managed a $5 million system implementation, oversaw business
                    intelligence solutions, and facilitated cross-functional
                    team collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col h-full md:border-l-2 md:border-[#00AAA3] items-center text-[#00AAA3] py-5  md:p-20 px-5">
          <div className=" lg:px-20">
            <div className="flex items-center justify-center">
              <Image
                src="/images/personal-page/Icons/skill.png"
                alt="skill"
                width={120}
                height={120}
              />
            </div>
            <h2 className=" mt-7  leading-none">
              <span className="font-normal 2xl:mr-5 ">SKILLS AND</span>
              <span className="inline-block border-b-4 border-[#00aaa48c] ">
                EXPERTISE
              </span>
            </h2>
            <div className=" py-10 pl-10 text-[#0C4068]">
              <ul className=" list-disc">
                {expertise.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" flex justify-center -mb-1">
            <div className=" flex bg-[#00AAA3] h-1 md:w-[400px] mb-1"></div>
          </div>
          <div className=" lg:px-20 mt-10">
            <div className="flex items-center justify-center">
              <Image
                src="/images/personal-page/Icons/education.png"
                alt="education"
                width={130}
                height={130}
              />
            </div>

            <h2 className=" mt-7 ">
              <span className="inline-block border-b-4 border-[#00aaa48c] ">
                EDUCATION
              </span>
            </h2>

            <div className=" py-10 pl-10 text-[#0C4068]">
              <ul className=" list-disc">
                {education.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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
