import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const { ZOHO_SMTP_USER, ZOHO_SMTP_PASS, ZOHO_TO_ADDRESS, MONGODB_DB } =
  process.env;

export async function POST(req) {
  try {
    const { name, email, phone, message, subject } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1️⃣ Save to DB first
    const client = await clientPromise;
    const db = client.db(MONGODB_DB);
    const col = db.collection("contacts");

    const contactDoc = {
      name,
      email,
      phone: phone || null,
      subject,
      message,
      createdAt: new Date(),
    };
    const { insertedId } = await col.insertOne(contactDoc);

    // 2️⃣ Email template with company colors
    const subject2 = `📩 Site Contact: ${name}`;
    const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #38b6ff; border-radius:8px; overflow:hidden;">
  <div style="background:#38b6ff; color:#ffffff; padding:16px 24px; font-size:18px; font-weight:bold;">
    Nestlink Software Company, New Inquiry
  </div>
  <div style="padding:24px; background:#ffffff; color:#111827; font-size:15px; line-height:1.6;">
    <p><strong>New message received:</strong></p>
    <table style="width:100%; border-collapse:collapse;">
      <tr>
        <td style="padding:8px; font-weight:bold; width:120px;">Name:</td>
        <td style="padding:8px;">${name}</td>
      </tr>
      <tr>
        <td style="padding:8px; font-weight:bold; width:120px;">Subject:</td>
        <td style="padding:8px;">${subject}</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="padding:8px; font-weight:bold;">Email:</td>
        <td style="padding:8px;">${email}</td>
      </tr>
      <tr>
        <td style="padding:8px; font-weight:bold;">Phone:</td>
        <td style="padding:8px;">${phone || "N/A"}</td>
      </tr>
      <tr style="background:#f9fafb; vertical-align:top;">
        <td style="padding:8px; font-weight:bold;">Message:</td>
        <td style="padding:8px; white-space:pre-line;">${message}</td>
      </tr>
    </table>
  </div>
</div

    `;

    // 3️⃣ Send via Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: ZOHO_SMTP_USER,
        pass: ZOHO_SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Anira Insurance Agency" <${ZOHO_SMTP_USER}>`,
      to: ZOHO_TO_ADDRESS,
      bcc: "melvinssimon@gmail.com",
      replyTo: email,
      subject2,
      html: htmlBody,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"
        }\n\nMessage:\n${message}`,
    });

    return NextResponse.json({
      ok: true,
      id: insertedId,
      messageId: info.messageId,
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}