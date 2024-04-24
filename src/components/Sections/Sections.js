import React from "react";
import Section from "./Section";

export default function Sections() {
  return (
    <div>
      <div className="bg-sections-home">
        <div className=" bg-[#ffffffb7]">
          <Section
            image={"/images/home/about-us-home.png"}
            title={"ABOUT US"}
            text={
              "At Trinity HealthCare Services, we are dedicated to transforming the healthcare landscape by providing top-tier consultancy and staff augmentation services. With over three decades of experience, we stand at the forefront of healthcare innovation, helping organizations navigate the complexities of modern healthcare with ease and efficiency."
            }
          />
        </div>
        <Section
          image={"/images/home/services.png"}
          title={"SERVICES"}
          text={
            "Our services are designed to elevate the standards of care, efficiency, and effectiveness within healthcare organizations. Explore our range of expert services tailored to meet the evolving needs of the healthcare sector:"
          }
          position={"left"}
        />
      </div>
      <Section
        image={"/images/home/recent-blog.png"}
        title={"BLOG"}
        text={
          "Discover a world of unique ideas and tips on our blog! Dive into inspiring articles and enriching content designed to fuel your curiosity and stimulate your creativity. Click here to explore new horizons every week. Don't miss out!"
        }
      />
    </div>
  );
}
