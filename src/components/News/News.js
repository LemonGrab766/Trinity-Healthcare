"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useRef, useState } from "react";
import ErrComp from "../ErrComp";
import Spinner from "../Spinner";
import { useRouter, useSearchParams } from "next/navigation";

function NewsComponent() {
  const searchParams = useSearchParams();

  const search = searchParams.get("page") || 1;
  const newContainerRef = useRef(null);
  const router = useRouter();

  const [news, setNews] = useState([]);
  const [page, setPage] = useState(search);
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/news?page=" + page);
        setNews(data);
        setLoading(false);
        setTimeout(() => {
          if (
            (searchParams.get("page") || page >= 2) &&
            newContainerRef.current
          ) {
            newContainerRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      } catch (error) {
        setLoading(false);
        setErr("An error has occurred");
        setIsModalVisible(true);
      }
    };
    getNews();
  }, [page]);

  function truncateText(text, maxLength) {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  return (
    <div
      ref={newContainerRef}
      className=" bg-white text-black      mx-20 my-10 "
    >
      <div className="">
        {!!loading && (
          <div className=" flex items-center h-full justify-center mt-60 ">
            <Spinner size={200} />
          </div>
        )}
        <div className=" flex flex-col justify-center items-center p-20 gap-10">
          {!!news.length &&
            !loading &&
            news?.map((n) => (
              <Link
                href={"/news/" + n.title.replace(/ /g, "-").toLowerCase()}
                key={n._id}
              >
                <div className=" flex w-full  gap-6 hover:bg-[#93D3D8] p-5 rounded-2xl">
                  <div className=" flex w-full  gap-3 items-center justify-center">
                    <div className=" w-full imageContainer shadow-2xl shadow-gray-600">
                      <Image
                        src={n.image}
                        alt={n.title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col gap-6  mt-4 justify-center items-start text-[#0C4068]">
                    <h1 className="text-[#0C4068] font-bold text-[30px] px-3 ">
                      {n.title}
                    </h1>
                    <p className="text-[14px] font-medium text-start px-3">
                      {truncateText(n.text, 120)}{" "}
                      {/* Ejemplo con 100 caracteres */}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      {!!news.length && (
        <div className=" flex flex-wrap justify-center gap-10 items-center pb-10">
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
                router.push("/news?page=" + (page - 1));
              }
            }}
            className=" px-4 py-2 bg-[#00AAA3] hover:bg-[#00938D] text-white  rounded-lg"
          >
            previous page
          </button>
          <h3 className="w-full text-center sm:w-auto text-[#0C4068] font-bold">
            {page}
          </h3>
          <button
            onClick={() => {
              if (news.length >= 6) {
                setPage(page + 1);
                router.push("/news?page=" + (page + 1));
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

export default function News() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsComponent />
    </Suspense>
  );
}
