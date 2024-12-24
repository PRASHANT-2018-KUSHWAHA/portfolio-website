"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-black text-white transition-transform duration-300 bg-gradient-to-r from-gray-900 via-black to-gray-900 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } shadow-lg z-50`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        {/* Left Section: Logo and Title */}
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
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
            Prashant&apos;s Portfolio
          </h1>
          </Link>
        </div>

        {/* Right Section: Navigation */}
        <div className="lg:hidden">
          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute lg:static bg-black lg:bg-transparent top-14 lg:top-auto right-0 lg:right-auto w-full lg:w-auto flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 p-6 lg:p-0 ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
