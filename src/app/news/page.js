"use client";
import NewsBanner from "@/components/Banners/NewsBanner";
import Footer from "@/components/Footer/Footer";
import News from "@/components/News/News";
import React from "react";

export default function Page() {
  return (
    <div>
      <NewsBanner />
      <News />
      <Footer />
    </div>
  );
}
