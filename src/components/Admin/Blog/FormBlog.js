"use client";
import ErrComp from "@/components/ErrComp";
import CloseIcon from "@/components/Icons/CloseIcon";
import Spinner from "@/components/Spinner";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function FormBlog({ blogEdit }) {
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [focusTitle, setFocusTitle] = useState(false);
  const [focusSubtitle, setFocusSubtitle] = useState(false);
  const [focusText, setFocusText] = useState(false);
  const [focusVideo, setFocusVideo] = useState(false);
  const [isUpload, setIsUpload] = useState(false);

  const route = useRouter();

  const [blog, setBlog] = useState(
    blogEdit || {
      title: "",
      subTitle: "",
      image: "",
      text: "",
      video: "",
    }
  );

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      if (!blogEdit) {
        const { data } = await axios.post("/api/blog", blog);

        setBlog({
          title: "",
          subTitle: "",
          image: "",
          text: "",
          video: "",
        });
        setMessage("Blog Created");
      } else {
        const { data } = await axios.put("/api/blog", blog);

        setMessage("Blog edited");
        route.push("/admin/blog");
      }
      setIsModalVisible(true);
    } catch (error) {
      setErr("An error has occurred");
      setIsModalVisible(true);
    }
  };

  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUpload(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post(`/api/s3`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setBlog((prev) => ({
        ...prev,
        image: res.data.link,
      }));
      // setImage(res.data.links[0]);
      setIsUpload(false);
    }
  }

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setBlog((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  function deleteImg() {
    setBlog((prev) => ({
      ...prev,
      image: "",
    }));
  }

  async function deleteBlog() {
    if (!blogEdit) {
      return;
    }
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1E88E5",
        cancelButtonColor: "#1E2124",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, borrar",
      });

      if (result.isConfirmed) {
        const { data } = await axios.delete("/api/blog?id=" + blog._id);
        Swal.fire({
          title: "Borrado",
          text: "El registro ha sido eliminado.",
          icon: "success",
        });
        route.push("/admin/blog");
        return;
      }
    } catch (error) {
      setErr("An error has occurred");
      setIsModalVisible(true);
    }
  }

  return (
    <div>
      <div className=" relative bg-white text-black   min-h-screen  shadow-2xl shadow-gray-600   mx-20 my-10 rounded-xl">
        {!!blogEdit && (
          <div className=" absolute right-10 top-8">
            <button
              onClick={deleteBlog}
              className=" flex gap-3 items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-800 rounded-2xl text-white font-semibold"
            >
              Delete blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="">
          <h1 className=" text-center font-bold text-[60px] text-[#0C4068]">
            {!blogEdit ? "Create Blog" : "Edit Blog"}
          </h1>
        </div>
        <div className=" p-10">
          <form onSubmit={onSubmit} className=" flex  flex-col gap-10  ">
            <div className="flex flex-col ">
              <label
                htmlFor="title"
                className={`text-20px font-bold mb-3 ${
                  focusTitle ? "text-[#00AAA3]" : "text-gray-400"
                }`}
              >
                Title
              </label>

              <input
                id="title"
                name="title"
                className="inline-block w-full border-b-4 focus:outline-none"
                style={{ borderColor: focusTitle ? "#00AAA3" : "#ccc" }}
                onChange={handleInputChange}
                onFocus={() => setFocusTitle(true)}
                onBlur={() => setFocusTitle(false)}
                placeholder="Title"
                required
                value={blog.title}
              />
            </div>
            <div className="flex gap-5 items-center">
              {!!blog.image && !isUpload && (
                <div className=" w-auto bg-gray-200 p-1 shadow-sm rounded-sm border border-gray-300 relative">
                  <Image
                    className="rounded-lg"
                    alt=""
                    src={blog.image}
                    width={100}
                    height={100}
                  />
                  <button
                    type="button"
                    className="z-10 absolute top-1 right-1"
                    onClick={deleteImg}
                  >
                    <CloseIcon />
                  </button>
                </div>
              )}
              {isUpload && (
                <div className="h-24 flex items-center">
                  <Spinner size={60} />
                </div>
              )}
              <label
                className="w-24 h-24 bg-white cursor-pointer flex flex-col
         text-center items-center justify-center
          text-sm gap-1 text-primary rounded-sm shadow-sm border border-primary"
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <div>Add image</div>
                <input type="file" className="hidden" onChange={uploadImages} />
              </label>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="subTitle"
                className={`text-20px font-bold mb-3 ${
                  focusSubtitle ? "text-[#00AAA3]" : "text-gray-400"
                }`}
              >
                Subtitle
              </label>
              <input
                id="subTitle"
                name="subTitle"
                className="inline-block w-full border-b-4 focus:outline-none"
                style={{ borderColor: focusSubtitle ? "#00AAA3" : "#ccc" }}
                onChange={handleInputChange}
                onFocus={() => setFocusSubtitle(true)}
                onBlur={() => setFocusSubtitle(false)}
                value={blog.subTitle}
                placeholder="subTitle"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="text"
                className={`text-20px font-bold mb-3 ${
                  focusText ? "text-[#00AAA3]" : "text-gray-400"
                }`}
              >
                Blog Text
              </label>
              <textarea
                id="text"
                name="text"
                className="inline-block w-full border-4 focus:outline-none rounded-lg p-3 min-h-[500px]"
                style={{ borderColor: focusText ? "#00AAA3" : "#ccc" }}
                onChange={handleInputChange}
                onFocus={() => setFocusText(true)}
                onBlur={() => setFocusText(false)}
                value={blog.text}
                placeholder="text..."
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="video"
                className={`text-20px font-bold mb-3 ${
                  focusVideo ? "text-[#00AAA3]" : "text-gray-400"
                }`}
              >
                Video
              </label>

              <input
                id="video"
                name="video"
                className="inline-block w-full border-b-4 focus:outline-none"
                style={{ borderColor: focusVideo ? "#00AAA3" : "#ccc" }}
                onChange={handleInputChange}
                onFocus={() => setFocusVideo(true)}
                onBlur={() => setFocusVideo(false)}
                value={blog.video}
                placeholder="Url..."
              />
            </div>
            <button className=" bg-[#00AAA3] hover:bg-[#00938D] text-white py-2 rounded-2xl">
              Submit
            </button>
          </form>
          <ErrComp
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            err={err}
            setErr={setErr}
            message={message}
            setMessage={setMessage}
          />
        </div>
      </div>
    </div>
  );
}
