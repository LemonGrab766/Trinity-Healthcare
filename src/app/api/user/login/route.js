/** @format */

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { mongooseConnect } from "@/libs/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await mongooseConnect();
    const secretKey = process?.env?.SECRET_KEY;
    const { name, password } = await req.json();

    if (!name || !password) {
      return NextResponse.json(
        { message: "There are missing fields to fill out" },
        { status: 400 }
      );
    }

    const userFind = await User.findOne({ name });

    if (!userFind) {
      return NextResponse.json({ message: "incorrect data" }, { status: 400 });
    }

    const isCorrect = await bcrypt.compare(password, userFind.password);

    if (!isCorrect) {
      return NextResponse.json({ message: "incorrect data" }, { status: 400 });
    }

    const { password: userPass, ...rest } = userFind._doc;
    const token = jwt.sign(rest, secretKey, {
      expiresIn: 604800,
    });

    const response = NextResponse.json(
      { userLogged: rest, message: "Successful login" },
      { status: 200 }
    );

    response.cookies.set("auth_cookie", token, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 604800,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
