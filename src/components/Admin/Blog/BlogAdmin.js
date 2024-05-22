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
    <div className=" relative bg-white text-black   min-h-screen  shadow-2xl shadow-gray-600  m-2  md:mx-20 my-10 rounded-xl">
      <div className="">
        <h1 className=" text-center font-bold text-[60px] text-[#0C4068]">
          Blogs
        </h1>
        <Link
          href={"/admin/blog/form"}
          className=" absolute right-5 top-5 flex justify-center items-center
           bg-[#00AAA3]  hover:bg-[#00938D]  px-2 py-2 ml-[-20px]
            rounded-lg  text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Create Blog
        </Link>

        <div className=" flex flex-wrap justify-center items-center p-20 gap-10">
          {!!blogs.length &&
            blogs?.map((blog) => (
              <Link href={"/admin/blog/" + blog.title.replace(/ /g, "-").toLowerCase()} key={blog._id}>
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
