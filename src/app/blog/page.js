"use client"
import AdminNav from "@/components/Admin/AdminNav";
import BlogBanner from "@/components/Banners/BlogBanner";
import Blogs from "@/components/Blog/Blogs";
import Footer from "@/components/Footer/Footer";
import React from "react";

export default function Page() {
  return (
    <div>
      <BlogBanner />
      <Blogs />
      <Footer />
    </div>
  );
}
