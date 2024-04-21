import { NextResponse } from "next/server";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import { mongooseConnect } from "@/libs/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    const secretKey = process?.env?.SECRET_KEY;
    const headersList = headers();
    const token = headersList.get("token");
    if (!token) {
      return NextResponse.json(
        { message: "No se encontro token" },
        { status: 400 }
      );
    }
    try {
      const isTokenValid = jwt.verify(token, secretKey);
      const data = isTokenValid;

      await mongooseConnect();
      const userFind = await User.findById(data._id);

      if (!userFind) {
        return NextResponse.json(
          { message: "No se encontro el usuario" },
          { status: 400 }
        );
      }

      const { password: userPass, ...rest } = userFind._doc;

      return NextResponse.json({ user: rest }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Ha ocurrido un error", error },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Ha ocurrido un error", error },
      { status: 500 }
    );
  }
}
