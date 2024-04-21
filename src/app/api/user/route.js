import { mongooseConnect } from "@/libs/mongodb";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(req) {
  try {
    await mongooseConnect();

    return NextResponse.json(
        { message: "This is disabled :D" },
        { status: 200 }
      );


    const { name, password } = await req.json();

    if (!name || !password) {
      return NextResponse.json(
        { message: "There are missing fields to fill out" },
        { status: 400 }
      );
    }

    const passwordEncrp = await bcrypt.hash(password, 10);
    const userDoc = await User.create({
      name,
      password: passwordEncrp,
    });

    const { password: userPass, ...rest } = userDoc._doc;

    return NextResponse.json(
      {
        user: rest,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

