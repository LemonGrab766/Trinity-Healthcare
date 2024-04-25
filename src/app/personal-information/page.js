import PersonalInfBanner from "@/components/Banners/PersonalInfBanner";
import Footer from "@/components/Footer/Footer";
import ColumsPersonal from "@/components/Personal/ColumsPersonal";
import LasonyaInf from "@/components/Personal/LasonyaInf";
import PersonalSummary from "@/components/Personal/PersonalSummary";
import Resume from "@/components/Personal/Resume";
import Testimonials from "@/components/Personal/Testimonials";
import React from "react";

export default function Page() {
  return <div>
    <PersonalInfBanner />
    <LasonyaInf />
    <PersonalSummary />
    <ColumsPersonal />
    <Testimonials />
    <Resume/>
    <Footer />
  </div>;
}
