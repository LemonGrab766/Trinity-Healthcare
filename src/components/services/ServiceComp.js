import React from "react";
import Carousel from "./Carrousel";
import RowButton from "../RowButton";

const services = [
  {
    title: "CONSULTANCY SERVICES",
    image: "/images/services/consultancy-services.jpg",
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
    image: "/images/services/staff-augmentation.jpg",
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
    image: "/images/services/operationa-impromevent.jpg",
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
    image: "/images/services/technology-implementation.jpg",
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
  return (
    <div className=" md:my-20 md:px-20 ">
      <Carousel services={services} />
      <div className=" flex flex-col justify-center items-center text-center gap-4 mt-10 mb-5 md:mb-0 ">
        <h2 className="  text-[#00AAA3] inline-block border-b-4 border-[#00aaa48c] mb-2">
          CONTACT US
        </h2>
        <RowButton link={"/contact"} />
      </div>
    </div>
  );
}
