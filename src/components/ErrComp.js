"use client";
import React, { useEffect } from "react";

export default function ErrComp({
  isModalVisible,
  setIsModalVisible,
  err,
  setErr,
  message,
  setMessage,
}) {
  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(() => {
        setIsModalVisible(false);
        setErr("");
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isModalVisible]);

  return (
    <div>
      {isModalVisible && err && !message && (
        <div className=" z-20 fixed bottom-4 left-4 bg-red-500 text-white p-2 rounded-md">
          {err}
        </div>
      )}
      {isModalVisible && message && !err && (
        <div className=" z-20 fixed bottom-4 left-4 bg-green-500 text-white p-2 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
}
