"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import ThemeToggleButton from "./ThemeToggleButton";

export default function ResponsiveNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div>
      {/* Sidebar for Mobile */}
      <aside
        className={`fixed top-0 right-0 h-full shadow-lg z-50 w-64 transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
      >
        <div className="p-6">
          {/* Profile Section */}
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Prashant's Profile"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <h1 className="text-xl font-semibold">
              Prashant<span className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>'s</span> Portfolio
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-6">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="flex items-center text-lg font-medium hover:text-blue-500 transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>
          <div className="bottom-0 absolute end-0 p-6">
            <ThemeToggleButton />
          </div>
        </div>
      </aside>

      {/* Top Navbar for Desktop */}
      <header
        className={`hidden lg:block fixed top-0 right-0 w-full shadow-lg z-50 transition-colors
          ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Link href="/">
                <Image
                  src="/profile.jpeg"
                  alt="Prashant's Profile"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </Link>
            </div>
            <Link href="/">
              <h1 className="text-xl font-semibold">
                Prashant<span className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>'s</span> Portfolio
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-10">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <Link href={`/${link.toLowerCase()}`} className="hover:text-blue-500">
                  {link}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggleButton />
            </li>
          </ul>
        </nav>
      </header>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          className={`fixed top-4 right-4 p-2 rounded-md z-50 transition-colors
            ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Content Area */}
      <main
        className={`flex-1 ${menuOpen ? "mr-0" : "mr-0 lg:mr-0"} lg:pr-72 transition-colors
          ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
      >
        {/* Page content goes here */}
      </main>
    </div>
  );
}
