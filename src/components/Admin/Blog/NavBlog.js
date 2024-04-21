"use client";
import { UserContext } from "@/components/UserContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function NavBlog() {
  const inactiveLink =
    "flex hover:bg-[#00938D]  px-2 py-2 hover:ml-[-20px] hover:rounded-lg";
  const activeLink =
    inactiveLink + " bg-[#00AAA3] px-2 py-2 ml-[-30px] text-white rounded-lg";
  const pathname = usePathname();

  const { user, setUser } = useContext(UserContext);

  return (
    <aside
      className={`
        text-white  flex-1 min-w-[300px] shadow-2xl  h-full`}
    >
      <div className=" fixed bg-[#93d3d8] lg:min-w-[250px] xl:w-[300px] lg:w-[300px]   px-10 h-full shadow-gray-600">
        <div className=" flex justify-center items-center w-full mt-5">
          <Link href={"/"}>
            <Image
              src={"/images/Frame.png"}
              alt="Icon"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <nav className="flex flex-col gap-3 mt-32 md:mt-12 ">
          <Link
            href={"/admin/blog"}
            className={pathname === "/admin/blog" ? activeLink : inactiveLink}
          >
            Blogs
          </Link>
          <Link
            href={"/admin/blog/form"}
            className={
              pathname === "/admin/blog/form" ? activeLink : inactiveLink
            }
          >
            Create Blog
          </Link>
        </nav>
      </div>
    </aside>
  );
}
