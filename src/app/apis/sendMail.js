import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Configure nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Or use a service like SendGrid
      auth: {
        user: process.env.EMAIL_USER, // Set in your environment variables
        pass: process.env.EMAIL_PASSWORD, // Set in your environment variables
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_RECEIVER, // Your email address
        subject: `Contact Form Message from ${name}`,
        text: message,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email.", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
