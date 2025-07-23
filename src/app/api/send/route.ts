import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongo";

// Sanitize
function sanitize(input: any) {
  if (typeof input !== "string") return "";
  return input.replace(/\$/g, "").replace(/\./g, "").trim();
}

// Validate
function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const { fullName, email, message } = await request.json();

    // Empty Fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    const sanitizedData = {
      fullName: sanitize(fullName),
      email: sanitize(email),
      message: sanitize(message),
    };

    const client = await clientPromise;
    const db = client.db("customers");
    const collection = db.collection("list");

    const result = await collection.insertOne(sanitizedData);

    return NextResponse.json(
      { success: true, insertedId: result.insertedId },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: Request) {
  const allowedOrigins = ["https://m0skwa.tech"];
  const origin = request.headers.get("origin") || "";

  const response = new NextResponse(null, {
    status: 204,
  });

  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}
