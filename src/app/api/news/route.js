import { mongooseConnect } from "@/libs/mongodb";
import New from "@/models/News";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await mongooseConnect();
    const { title, subTitle, image, text, video } = await req.json();

    if (!title || !image || !text) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }
    const news = await New.create({
      title,
      subTitle,
      image,
      text,
      video,
    });
    if (!news) {
      return NextResponse.json(
        { error: "It seems that an error has occurred" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(news, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    await mongooseConnect();
    const titleParam = new URL(req.url).searchParams.get("title");

    if (titleParam) {
      const processedTitle = titleParam.replace(/-/g, " ").toLowerCase();
      const news = await New.findOne({
        title: new RegExp(`^${processedTitle}$`, "i"),
      });

      if (news) {
        return NextResponse.json(news, { status: 200 });
      } else {
        return NextResponse.json({ error: "New not found" }, { status: 404 });
      }
    } else {
      const page = new URL(req.url).searchParams.get("page");
      const itemsPerPage = 6;
      const skipCount = (page - 1) * itemsPerPage;

      const news = await New.find()
        .sort({ createdAt: -1 })
        .skip(skipCount)
        .limit(itemsPerPage);

      return NextResponse.json(news, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const PUT = async (req) => {
  try {
    await mongooseConnect();
    const body = await req.json();

    const updatedNew = await New.findByIdAndUpdate({ _id: body._id }, body, {
      new: true,
    });

    if (!updatedNew) {
      return NextResponse.json({ error: "New not found" }, { status: 404 });
    } else {
      return NextResponse.json(updatedNew, { status: 200 });
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
    await New.deleteOne({ _id });
    return NextResponse.json({ message: "Ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
