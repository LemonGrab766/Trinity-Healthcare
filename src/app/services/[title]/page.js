"use client";
import ServicesBanner from "@/components/Banners/ServicesBanner";
import Footer from "@/components/Footer/Footer";
import ServicesDetails from "@/components/services/Service-Detail";
import React, { useEffect, useState } from "react";

const services = [
  {
    title: "STRATEGIC CONSULTING",
    image: "/images/services/strategic-consulting.webp",
    text: [
      `Our Strategic Consulting service offers expert advice
      designed to optimize your organization's processes and policies.
      By leveraging industry insights and strategic foresight, we enhance your operational
      effectiveness and drive significant improvements. Clients benefit from tailored
      solutions that not only solve immediate challenges but also lay a foundation
      for sustained success, making us a trusted partner in your strategic planning.`,
    ],
  },
  {
    title: "HEALTH INFORMATICS",
    image: "/images/services/services.webp",
    text: [
      `Our Health Informatics service provides cutting-edge technology solutions tailored
      to enhance operational efficiency in healthcare settings. We specialize in integrating
      and optimizing electronic health records (EHRs), data analytics, and telehealth systems.
      Our approach ensures that healthcare providers can focus on patient care with improved accuracy
      and accessibility of medical data. The benefit is a streamlined workflow that enhances both
      patient outcomes and organizational productivity.`,
    ],
  },
  {
    title: "TALENT MANAGEMENT",
    image: "/images/services/talent-managment.webp",
    text: [
      `Our Talent Management service excels in attracting and managing top-tier
      talent to fulfill our clients' specific needs. We implement strategic hiring
      practices and ongoing development programs that ensure your workforce is not
      only skilled but also aligned with your company’s goals. Our clients experience
      improved employee retention rates, enhanced team performance, and greater
      adaptability in dynamic business environments.`,
    ],
  },
  {
    title: "AUDIT AND COMPLIANCE",
    image: "/images/services/audit.webp",
    text: [
      `Our Audit and Compliance service ensures that your organization adheres to all
      relevant regulations and standards. We conduct thorough audits and provide compliance
      management solutions that mitigate risks and foster a culture of accountability.
      By staying up-to-date with regulatory changes, we help our clients maintain impeccable
      standards of practice, safeguarding their reputation and ensuring operational integrity.`,
    ],
  },
  {
    title: "HOME CARE SERVICES AND NURSE CARE MANAGEMENT",
    image: "/images/services/home-care.webp",
    text: [
      `Our Home Care Services offer comprehensive care management, administered by highly
      qualified nurses who ensure the health and comfort of patients in their own homes.
      This service is tailored for individuals needing regular medical attention, elderly care,
      or post-operative support. The benefits include personalized care plans, greater convenience,
      and the assurance of professional medical management, all contributing to faster recovery
      and improved quality of life for patients.`,
    ],
  },
];

export default function Page({ params }) {
  const [service, setService] = useState({});
  useEffect(() => {
    if (params.title) {
      const getService = () => {
        const title = params.title.replace(/-/g, " ").toUpperCase();
        for (const service of services) {
          console.log(title);
          if (service.title === title) {
            return setService(service);
          }
        }
      };
      getService();
    }
  }, [params]);

  return (
    <div>
      <ServicesBanner title={service.title || "SERVICES"} />
      {!!service && <ServicesDetails service={service} />}
      <Footer />
    </div>
  );
}
