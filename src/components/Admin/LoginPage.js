"use client";
import axios from "axios";
import React, { useState } from "react";
import ErrComp from "../ErrComp";
import BackButton from "../BackButton";

export default function LoginPage() {
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [focusName, setFocusName] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const name = ev.target.name.value;
      const password = ev.target.password.value;
      const { data } = await axios.post("/api/user/login", {
        name,
        password,
      });
      setMessage(data.message);
      setIsModalVisible(true);
    } catch (error) {
      setErr("An error has occurred");
      setIsModalVisible(true);
    }
  };

  return (
    <div className="bg-contact h-screen ">
      <div className=" h-screen bg-[#3ed3d857] flex justify-center items-center">
        <BackButton />
        <div className=" bg-white p-20 flex flex-col rounded-xl  min-w-[630px] shadow-lg shadow-gray-600">
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
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className={`text-20px font-bold mb-3 ${
                  focusPassword ? "text-[#00AAA3]" : "text-gray-400"
                }`}
              >
                Your Password
              </label>
              <input
                id="email"
                name="password"
                type="password"
                className="inline-block w-full border-b-4 focus:outline-none"
                style={{ borderColor: focusPassword ? "#00AAA3" : "#ccc" }}
                onFocus={() => setFocusPassword(true)}
                onBlur={() => setFocusPassword(false)}
                required
                placeholder="Password"
              />
            </div>
            <button className=" bg-[#00AAA3] hover:bg-[#00938D] text-white py-2 rounded-2xl">
              Login
            </button>
          </form>{" "}
        </div>
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
  );
}
