"use client";

import Header from "../components/Header";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = async (e: { preventDefault: () => void; target: { name: { value: any; }; email: { value: any; }; message: { value: any; }; }; }) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const response = await fetch("/apis/sendMail.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message. Please send it through mail.");
      window.open("mailto:prashantkushwaha000@gmail.com");
    }
  };
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white text-white pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Me</h1>
          <p className="text-center text-gray-300 text-lg mb-12 fade-in">
            I'm always excited to connect! Feel free to reach out using any of the methods below.
          </p>

          {/* Contact Options */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center text-center">
              <FaEnvelope className="text-blue-600 text-4xl mb-3" />
              <a
                href="mailto:prashantkushwaha000@gmail.com"
                className="text-lg text-gray-300 hover:text-blue-400 transition"
              >
                prashantkushwaha000@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <FaPhoneAlt className="text-blue-600 text-4xl mb-3" />
              <p className="text-lg text-gray-300">+91 7597419907</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <FaLinkedin className="text-blue-600 text-4xl mb-3" />
              <a
                href="https://www.linkedin.com/in/prashant-kushwaha-96a230142/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-blue-400 transition"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <FaGithub className="text-blue-600 text-4xl mb-3" />
              <a
                href="https://github.com/PRASHANT-2018-KUSHWAHA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-blue-400 transition"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 transition text-white font-bold py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
