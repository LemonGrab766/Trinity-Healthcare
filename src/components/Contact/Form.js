"use client";
import axios from "axios";
import React, { useState } from "react";
import ErrComp from "../ErrComp";

export default function Form() {
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [focusName, setFocusName] = useState(false);
  const [focusLastName, setFocusLastName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);
  const [focusPhone, setFocusPhone] = useState(false);
  const [focusOrganization, setFocusOrganization] = useState(false);
  const [focusType, setFocusType] = useState("");

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const name = ev.target.name.value;
      const lastName = ev.target["last-name"].value;
      const email = ev.target.email.value;
      const message = ev.target.message.value;
      const phone = ev.target.phone.value;
      const organization = ev?.target?.organization?.value || "";

      const { data } = await axios.post("/api/send", {
        name,
        lastName,
        email,
        message,
        phone,
        focusType,
        organization,
      });
      setMessage(data.message);
      setIsModalVisible(true);
    } catch (error) {
      setErr("An error has occurred");
      setIsModalVisible(true);
    }
  };

  return (
    <div className="bg-white p-10 flex flex-col rounded-3xl  w-full ">
      <form onSubmit={onSubmit} className=" flex  flex-col gap-10  ">
        <div className="flex flex-col ">
          <label
            htmlFor="name"
            className={`text-20px font-bold mb-3 ${
              focusName ? "text-[#00AAA3]" : "text-gray-400"
            }`}
          >
            First Name
          </label>
          <input
            id="name"
            name="name"
            className="inline-block w-full border-b-4 focus:outline-none px-3"
            style={{ borderColor: focusName ? "#00AAA3" : "#ccc" }}
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
            placeholder="First Name*"
            required
          />
        </div>
        <div className="flex flex-col ">
          <label
            htmlFor="last-name"
            className={`text-20px font-bold mb-3 ${
              focusLastName ? "text-[#00AAA3]" : "text-gray-400"
            }`}
          >
            Last Name
          </label>
          <input
            id="last-name"
            name="last-name"
            className="inline-block w-full border-b-4 focus:outline-none px-3"
            style={{ borderColor: focusLastName ? "#00AAA3" : "#ccc" }}
            onFocus={() => setFocusLastName(true)}
            onBlur={() => setFocusLastName(false)}
            placeholder="Last Name*"
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
            className="inline-block w-full border-b-4 focus:outline-none px-3"
            style={{ borderColor: focusEmail ? "#00AAA3" : "#ccc" }}
            onFocus={() => setFocusEmail(true)}
            onBlur={() => setFocusEmail(false)}
            placeholder="Email*"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className={`text-20px font-bold mb-3 ${
              focusPhone ? "text-[#00AAA3]" : "text-gray-400"
            }`}
          >
            Your Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="inline-block w-full border-b-4 focus:outline-none px-3"
            style={{ borderColor: focusPhone ? "#00AAA3" : "#ccc" }}
            onFocus={() => setFocusPhone(true)}
            onBlur={() => setFocusPhone(false)}
            placeholder="Phone"
            // pattern="^[\d+\-()]*$"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="type"
            className={`text-20px font-bold mb-3  text-gray-400
            `}
            // ${
            //   focusPhone ? "text-[#00AAA3]" : "text-gray-400"
            // }
          >
            Which best describes you?
          </label>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="health_system"
              name="type"
              value="health_system"
              className="mr-2"
              onChange={(ev) => setFocusType(ev.target.value)}
              required
            />
            <label htmlFor="health_system" className="text-gray-700">
              Health system
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="talent"
              name="type"
              value="talent"
              onChange={(ev) => setFocusType(ev.target.value)}
              className="mr-2"
              required
            />
            <label htmlFor="talent" className="text-gray-700">
              Talent
            </label>
          </div>
        </div>

        {focusType === "health_system" && (
          <div className="flex flex-col">
            <label
              htmlFor="organization"
              className={`text-20px font-bold mb-3 ${
                focusOrganization ? "text-[#00AAA3]" : "text-gray-400"
              }`}
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              className="inline-block w-full border-b-4 focus:outline-none px-3"
              style={{ borderColor: focusOrganization ? "#00AAA3" : "#ccc" }}
              onFocus={() => setFocusOrganization(true)}
              onBlur={() => setFocusOrganization(false)}
              placeholder="Organization Name*"
              // required
            />
          </div>
        )}

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
            className="inline-block w-full border-4 focus:outline-none rounded-lg min-h-[100px] px-3"
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
