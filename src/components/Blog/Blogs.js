"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useRef, useState } from "react";
import ErrComp from "../ErrComp";
import Spinner from "../Spinner";
import { useRouter, useSearchParams } from "next/navigation";

function BlogsComponent() {
  const searchParams = useSearchParams();

  const search = searchParams.get("page") || 1;
  const blogContainerRef = useRef(null);
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(search);
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/blog?page=" + page);
        setBlogs(data);
        setLoading(false);
        setTimeout(() => {
          if (
            (searchParams.get("page") || page >= 2) &&
            blogContainerRef.current
          ) {
            blogContainerRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      } catch (error) {
        setLoading(false);
        setErr("An error has occurred");
        setIsModalVisible(true);
      }
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
    <div
      ref={blogContainerRef}
      className=" bg-white text-black      mx-20 my-10 "
    >
      <div className="">
        {!!loading && (
          <div className=" flex items-center h-full justify-center mt-60 ">
            <Spinner size={200} />
          </div>
        )}
        <div className=" flex flex-wrap justify-center items-center p-20 gap-10">
          {!!blogs.length &&
            !loading &&
            blogs?.map((blog) => (
              <Link href={"/blog/" + blog._id} key={blog._id}>
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
      {!!blogs.length && (
        <div className=" flex justify-center gap-10 items-center pb-10">
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
                router.push("/blog?page=" + (page - 1));
              }
            }}
            className=" px-4 py-2 bg-[#00AAA3] hover:bg-[#00938D] text-white  rounded-lg"
          >
            previous page
          </button>
          <h3 className=" text-[#0C4068] font-bold">{page}</h3>
          <button
            onClick={() => {
              if (blogs.length >= 6) {
                setPage(page + 1);
                router.push("/blog?page=" + (page + 1));
              }
            }}
            className=" px-4 py-2 bg-[#00AAA3] hover:bg-[#00938D] text-white  rounded-lg"
          >
            next page
          </button>
        </div>
      )}
      <ErrComp
        message={message}
        setMessage={setMessage}
        err={err}
        setErr={setErr}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
}

export default function Blogs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogsComponent />
    </Suspense>
  );
}
