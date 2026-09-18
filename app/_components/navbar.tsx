"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 py-3 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500">
      {/* pl-1 = left space kam, pr-5 = right space same */}
      <nav className="mx-2 h-16 pl-1 pr-5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 rounded-full flex items-center justify-between border border-white shadow-md">
        {/* Logo - left me chipka hua */}
        <Link href="/" className="flex items-center -ml-12">
          <Image
            src="/image/minelogo.png"
            alt="Amit Logo"
            width={200}
            height={60}
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <p className="text-gray-700 hover:text-blue-700 text-base font-semibold transition">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="text-gray-700 hover:text-blue-700 text-base font-medium transition">
              About
            </p>
          </Link>
          <Link href="/services">
            <p className="text-gray-700 hover:text-blue-700 text-base font-medium transition">
              Services
            </p>
          </Link>
          <Link href="/projects">
            <p className="text-gray-700 hover:text-blue-700 text-base font-medium transition">
              Projects
            </p>
          </Link>
          <Link href="/contact">
            <p className="bg-blue-700 hover:bg-white text-white hover:text-black border border-transparent hover:border-blue-700 font-medium py-2.5 px-6 rounded-full transition">
              Contact
            </p>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mx-2 mt-2 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 rounded-2xl p-4 shadow-md">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <p className="block py-2 text-gray-700 hover:text-blue-700 text-sm font-medium">
              Home
            </p>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <p className="block py-2 text-gray-700 hover:text-blue-700 text-sm font-medium">
              About
            </p>
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            <p className="block py-2 text-gray-700 hover:text-blue-700 text-sm font-medium">
              Services
            </p>
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            <p className="block py-2 text-gray-700 hover:text-blue-700 text-sm font-medium">
              Projects
            </p>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <p className="inline-block py-2 mt-2 bg-blue-700 hover:bg-white text-white hover:text-black text-center text-sm font-semibold px-6 rounded-full">
              Contact
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
