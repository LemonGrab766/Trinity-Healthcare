"use client";
import FormNews from "@/components/Admin/news/FormNews";
import Spinner from "@/components/Spinner";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (params.title) {
      const getNews = async () => {
        try {
          const { data } = await axios.get("/api/news?title=" + params.title);

          setNews(data);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
          console.log(error);
        }
      };
      getNews();
    }
  }, [params]);

  return (
    <div>
      {loading && (
        <div className=" bg-white h-screen flex justify-center items-center rounded-2xl m-20">
          <Spinner size={200} />
        </div>
      )}
      {!loading && news?._id && <FormNews newsEdit={news} />}
      {!!error && !loading && (
        <div className=" bg-white h-screen flex justify-center items-center rounded-2xl m-20">
          <h2 className=" text-red-700">an error has occurred</h2>
        </div>
      )}
    </div>
  );
}
