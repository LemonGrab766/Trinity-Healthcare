import Image from "next/image";
import React from "react";
import RowButton from "../RowButton";

export default function ServicesDetails({ service }) {
  //   const paragraphs = service.text.split("\n\n");

  return (
    <div className=" grid w-full md:grid-cols-[1fr_1.8fr] grid-cols-1 md:gap-10 justify-center items-start p-5 md:px-40 md:py-20 text-[#0C4068]">
      <div className="relative flex items-center  justify-center w-48 h-full md:w-[100%]">
        <Image
          className=" "
          src={service.image}
          alt={service.title}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 100%",
          }}
        />
      </div>
      <div className=" flex flex-col gap-6 font-medium mb-16">
        {service?.text?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className=" flex flex-col items-center justify-center mt-10">
          <h2>CONTACT US</h2>
          <RowButton link={"/contact"} />
        </div>
      </div>
    </div>
  );
}
