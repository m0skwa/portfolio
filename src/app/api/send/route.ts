import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongo";

interface RequestBody {
  fullName: string;
  email: string;
  message: string;
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
    const { fullName, email, message } = (await request.json()) as RequestBody;

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

    console.log("Connecting to MongoDB…");
    const client = await clientPromise;

    console.log("Connected. Inserting data...");
    const db = client.db("customers");
    const collection = db.collection("list");

    const result = await collection.insertOne({
      fullName: sanitize(fullName),
      email: sanitize(email),
      message: sanitize(message),
    });

    console.log("Insert result:", result.insertedId);

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
        error: (error as Error).message, // optional, zu Debugzwecken
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: Request) {
  const allowedOrigins = ["https://m0skwa.tech", "https://www.m0skwa.tech"];
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
