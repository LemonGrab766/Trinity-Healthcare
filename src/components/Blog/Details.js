import React from "react";

const transformYouTubeUrl = (url) => {
  if (url.includes("youtube.com/watch?v=")) {
    return url.replace("watch?v=", "embed/");
  } else if (url.includes("youtu.be/")) {
    return url.replace("youtu.be", "youtube.com/embed");
  }
  return url;
};

// Función para validar y transformar la URL
const getValidYouTubeUrl = (url) => {
  try {
    let validUrl = new URL(url);
    return transformYouTubeUrl(validUrl.href);
  } catch (e) {
    return null;
  }
};

export default function Details({ blog }) {
  const paragraphs = blog.text.split("\n\n");
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className=" px-40 py-20 text-[#0C4068]">
      {!!blog.subTitle && <h2 className=" mb-16">{blog.subTitle}</h2>}
      <div className=" flex flex-col gap-6 font-medium mb-16">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {!!blog.video && (
        <div className=" flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src={getValidYouTubeUrl(blog.video)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
