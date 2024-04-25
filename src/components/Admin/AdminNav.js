"use client";
import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import Link from "next/link";

export default function AdminNav() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className=" fixed left-5 z-20  top-10 ">
      {!user?.name ? null : (
        <Link href={"/admin/blog"}>
          <button className=" nav-button bg-[#93d3d8]">Blog</button>
        </Link>
      )}
    </div>
  );
}
