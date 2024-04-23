import ServicesBanner from "@/components/Banners/ServicesBanner";
import Footer from "@/components/Footer/Footer";
import ServiceComp from "@/components/services/ServiceComp";
import React from "react";

export default function Page() {
  return (
    <div>
      <ServicesBanner />
      <ServiceComp />
      <Footer />
    </div>
  );
}
