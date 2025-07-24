import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongo";

interface RequestBody {
  fullName: string;
  email: string;
  message: string;
  status: string;
}

function sanitize(input: string): string {
  return input.replace(/\$/g, "").replace(/\./g, "").trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const { fullName, email, message, status } =
      (await request.json()) as RequestBody;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

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
      status: sanitize(status),
    };

    console.log("[API] Connecting to MongoDB...");
    const client = await clientPromise;

    console.log("[API] Connected. Inserting...");
    const db = client.db("customers");
    const collection = db.collection("list");

    const result = await collection.insertOne(sanitizedData);

    console.log("[API] Insert successful:", result.insertedId);

    return NextResponse.json(
      { success: true, insertedId: result.insertedId },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: Request) {
  const allowedOrigins = [
    "https://m0skwa.tech",
    "https://www.m0skwa.tech",
    "http://localhost:3000",
  ];
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
