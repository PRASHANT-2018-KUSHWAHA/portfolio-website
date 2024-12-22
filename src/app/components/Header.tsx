"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);

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
      className={`fixed top-0 left-0 w-full bg-black text-white transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } shadow-lg z-50`}
    >
      <nav className="flex justify-between items-center p-5">
        <div className="flex items-center space-x-4">
          {/* Profile image */}
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
          {/* Portfolio Title */}
          <h1 className="text-2xl font-semibold text-blue-600 font-bold">Prashant&apos;s Portfolio</h1>
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
