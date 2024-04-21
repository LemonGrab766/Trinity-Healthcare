const { S3Client } = require("@aws-sdk/client-s3");
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const client = new S3Client({
  region: process.env.S3_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCES_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
});

const bucketName = process.env.S3_BUCKET_NAME;

export async function POST(req) {
  const formData = await req.formData();
  const image = formData.get("file");

  if (image && typeof image === "object" && image.name) {
    const Body = await image.arrayBuffer();
    const ext = image.name.split(".").pop();
    const newFileName = Date.now() + "." + ext;
    await client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        ACL: "public-read",
        Key: newFileName,
        Body,
        ContentType: image.type,
      })
    );
    const link = `https://${bucketName}.s3.amazonaws.com/${newFileName}`;

    return NextResponse.json({
      success: true,
      message: "Successfully image uploaded",
      link,
    });
  }

  return NextResponse.json({
    success: false,
    message: "Image is required",
    data: null,
  });
}
