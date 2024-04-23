"use client";
import axios from "axios";
import React, { useState } from "react";
import ErrComp from "../ErrComp";

export default function Form() {
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const name = ev.target.name.value;
      const email = ev.target.email.value;
      const message = ev.target.message.value;
      const { data } = await axios.post("/api/send", {
        name,
        email,
        message,
      });
      setMessage(data.message);
      setIsModalVisible(true);
    } catch (error) {
      setErr("An error has occurred");
      setIsModalVisible(true);
    }
  };

  return (
    <div className="bg-white p-20 flex flex-col rounded-xl  min-w-[630px] shadow-lg shadow-gray-600">
      <form onSubmit={onSubmit} className=" flex  flex-col gap-10  ">
        <div className="flex flex-col ">
          <label
            htmlFor="name"
            className={`text-20px font-bold mb-3 ${
              focusName ? "text-[#00AAA3]" : "text-gray-400"
            }`}
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            className="inline-block w-full border-b-4 focus:outline-none"
            style={{ borderColor: focusName ? "#00AAA3" : "#ccc" }}
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
            placeholder="Name LastName"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className={`text-20px font-bold mb-3 ${
              focusEmail ? "text-[#00AAA3]" : "text-gray-400"
            }`}
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="inline-block w-full border-b-4 focus:outline-none"
            style={{ borderColor: focusEmail ? "#00AAA3" : "#ccc" }}
            onFocus={() => setFocusEmail(true)}
            onBlur={() => setFocusEmail(false)}
            placeholder="email@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className={`text-20px font-bold mb-3 ${
              focusMessage ? "text-[#00AAA3]" : "text-gray-400"
            }`}
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="inline-block w-full border-4 focus:outline-none rounded-lg min-h-[100px]"
            style={{ borderColor: focusMessage ? "#00AAA3" : "#ccc" }}
            onFocus={() => setFocusMessage(true)}
            onBlur={() => setFocusMessage(false)}
            placeholder="message..."
          />
        </div>
        <button className=" bg-[#00AAA3] hover:bg-[#00938D] text-white py-2 rounded-2xl">
          Send Message
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
  );
}
