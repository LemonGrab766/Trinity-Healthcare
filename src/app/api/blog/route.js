import { mongooseConnect } from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Blog from "@/models/Blog";

export const POST = async (req) => {
  try {
    await mongooseConnect();
    const { title, subTitle, image, text, video } = await req.json();

    if (!title || !image || !text) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }
    const blog = await Blog.create({
      title,
      subTitle,
      image,
      text,
      video
    });
    if (!blog) {
      return NextResponse.json(
        { error: "It seems that an error has occurred" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(blog, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    await mongooseConnect();
    const _id = new URL(req.url).searchParams.get("id");

    if (_id) {
      const blog = await Blog.findById(_id);
      if (blog) {
        return NextResponse.json(blog, { status: 200 });
      } else {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }
    } else {
      const page = new URL(req.url).searchParams.get("page");
      const itemsPerPage = 6;
      const skipCount = (page - 1) * itemsPerPage;

      const blogs = await Blog.find()
        .sort({ createdAt: -1 })
        .skip(skipCount)
        .limit(itemsPerPage);

      return NextResponse.json(blogs, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const PUT = async (req) => {
  try {
    await mongooseConnect();
    const body = await req.json();

    const updatedBlog = await Blog.findByIdAndUpdate({ _id: body._id }, body, {
      new: true,
    });

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    } else {
      return NextResponse.json(updatedBlog, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    await mongooseConnect();
    const _id = new URL(req.url).searchParams.get("id");

    if (!_id) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }
    await Blog.deleteOne({ _id });
    return NextResponse.json({ message: "Ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
