"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import { useTheme } from "../components/ThemeProvider"; // Assuming you're using a ThemeContext or hook

export default function Home() {
  const { theme } = useTheme(); // Assuming theme state is provided via context or hook

  return (
    <>
      <Header />
      <main
        className={`p-5 min-h-screen flex flex-col lg:flex-row items-center lg:justify-between max-w-7xl mx-auto transition-all ${
          theme === "dark" ? "dark:bg-dark-background dark:text-dark-text" : "bg-light-background text-light-text"
        }`}
      >
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-lg mb-6 lg:mb-0 mt-24 lg:mt-0">
          <h1
            className={`text-4xl font-bold font-semibold transition-all ${
              theme === "dark" ? "text-dark-primary" : "text-light-primary"
            } fade-in`}
          >
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg fade-in fade-in-delay-1">
            I&apos;m Prashant, a developer passionate about creating amazing web applications.
          </p>
        </div>

        {/* Profile Image */}
        <div
          className={`w-42 h-42 rounded-full overflow-hidden shadow-lg fade-in fade-in-delay-2 mt-24 lg:mt-0 ${
            theme === "dark" ? "border border-gray-700" : "border border-gray-300"
          }`}
        >
          <Image
            src="/profile.jpeg" // Replace with your profile image path
            alt="Prashant's Profile Image"
            className="object-cover"
            width={200}
            height={200}
            priority
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
