"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getBlogs = async () => {
      const { data } = await axios.get("/api/blog?page=" + page);
      setBlogs(data);
    };
    getBlogs();
  }, [page]);

  function truncateText(text, maxLength) {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  return (
    <div className=" bg-white text-black   min-h-screen  shadow-2xl shadow-gray-600   mx-20 my-10 rounded-xl">
      <div className="">
        <h1 className=" text-center font-bold text-[60px] text-[#0C4068]">
          Blogs
        </h1>
        <div className=" flex flex-wrap justify-center items-center p-20 gap-10">
          {!!blogs.length &&
            blogs?.map((blog) => (
              <Link href={"/admin/blog/" + blog._id} key={blog._id}>
                <div className=" w-[300px] bg-[#93D3D8] hover:bg-white border-2 hover:border-[#00AAA3] p-5 rounded-2xl">
                  <div className=" flex flex-col gap-3 items-center justify-center">
                    <h1 className="text-[#0C4068] font-bold text-[15px] ">
                      {blog.title}
                    </h1>
                    <div className="imageContainer shadow-2xl shadow-gray-600">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  </div>
                  <div className=" flex  mt-4 justify-center items-center text-[#0C4068]">
                    <p className="text-[14px] font-medium text-center px-3">
                      {truncateText(blog.text, 120)}{" "}
                      {/* Ejemplo con 100 caracteres */}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className=" flex justify-center gap-10 items-center pb-10">
        <button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
          className=" px-4 py-2 bg-[#00AAA3] hover:bg-[#00938D] text-white  rounded-lg"
        >
          previous page
        </button>
        <h3>{page}</h3>
        <button
          onClick={() => {
            if (blogs.length >= 6) {
              setPage(page + 1);
            }
          }}
          className=" px-4 py-2 bg-[#00AAA3] hover:bg-[#00938D] text-white  rounded-lg"
        >
          next page
        </button>
      </div>
    </div>
  );
}
