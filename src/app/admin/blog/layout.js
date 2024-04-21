import NavBlog from "@/components/Admin/Blog/NavBlog";

export default function BlogLayout({ children }) {
  return (
    <div className=" bg-admin h-full flex justify-center">
      <NavBlog />
      <div className=" w-full">{children}</div>
    </div>
  );
}
