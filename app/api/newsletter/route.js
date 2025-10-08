import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

const { MONGODB_DB } = process.env;

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Save to DB
    const client = await clientPromise;
    const db = client.db(MONGODB_DB);
    const col = db.collection("newsletter_subscriptions");

    // Check if email already exists
    const existingSubscriber = await col.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 409 }
      );
    }

    const subscriptionDoc = {
      email,
      subscribedAt: new Date(),
      active: true,
    };

    const { insertedId } = await col.insertOne(subscriptionDoc);

    return NextResponse.json({
      ok: true,
      id: insertedId,
      message: "Successfully subscribed to newsletter",
    });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return NextResponse.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}