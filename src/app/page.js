"use client"
import AdminNav from "@/components/Admin/AdminNav";
import HomeBanner from "@/components/Banners/HomeBanner";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Sections from "@/components/Sections/Sections";
import { UserContext } from "@/components/UserContext";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Sections />
      <Contact />
      <Footer />
    </div>
  );
}
