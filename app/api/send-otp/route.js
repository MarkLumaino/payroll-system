import nodemailer from "nodemailer";

// POST API to send OTP
export async function POST(req) {
  try {
    const { email } = await req.json();

    // ✅ Validate email
    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: "Email is required" }),
        { status: 400 }
      );
    }

    // ✅ Check env variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("EMAIL_USER or EMAIL_PASS is missing in .env");
      return new Response(
        JSON.stringify({ success: false, error: "Email credentials not configured" }),
        { status: 500 }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password (16 chars, no spaces)
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"RAKSON" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Verification Code",
      html: `
        <div style="font-family: sans-serif; text-align: center;">
          <h2>Your OTP is: <strong>${otp}</strong></h2>
          <p>It expires in 5 minutes.</p>
        </div>
      `,
    });

    // ✅ Return OTP (usually you’d save it in a DB/session instead)
    return new Response(JSON.stringify({ success: true, otp }), { status: 200 });

  } catch (error) {
    console.error("Error sending OTP:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
