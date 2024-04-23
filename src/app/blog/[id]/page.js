"use client";
import AdminNav from "@/components/Admin/AdminNav";
import BlogDetailBanner from "@/components/Banners/BlogDetailBanner";
import Details from "@/components/Blog/Details";
import Footer from "@/components/Footer/Footer";
import Spinner from "@/components/Spinner";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (params.id) {
      const getBlog = async () => {
        try {
          const { data } = await axios.get("/api/blog?id=" + params.id);

          setBlog(data);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
          console.log(error);
        }
      };
      getBlog();
    }
  }, [params]);

  return (
    <div>
      <BlogDetailBanner image={blog.image} title={blog.title} />
      {loading && (
        <div className=" bg-white h-screen flex justify-center items-center rounded-2xl m-20">
          <Spinner size={200} />
        </div>
      )}
      {!loading && blog?._id && <Details blog={blog} />}
      {!!error && !loading && (
        <div className=" bg-white h-screen flex justify-center items-center rounded-2xl m-20">
          <h2 className=" text-red-700">an error has occurred</h2>
        </div>
      )}
      <Footer />
    </div>
  );
}
