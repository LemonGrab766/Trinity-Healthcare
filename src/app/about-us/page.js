import ColumsAbout from "@/components/AboutUs/ColumsAbout";
import JoinAbout from "@/components/AboutUs/JoinAbout";
import PersonalInf from "@/components/AboutUs/PersonalInf";
import SectionAbout from "@/components/AboutUs/SectionAbout";
import AdminNav from "@/components/Admin/AdminNav";
import AboutUsBanner from "@/components/Banners/AboutUsBanner";
import Footer from "@/components/Footer/Footer";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <AboutUsBanner />
      <SectionAbout />
      <ColumsAbout />
      <PersonalInf />
      <JoinAbout />
      <Footer />
    </div>
  );
}
