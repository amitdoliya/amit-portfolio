import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0047FF] text-white py-12 px-8 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="mb-10 md:mb-0">
            <h2 className="text-5xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-sm mb-8">
              I&apos;m available for freelance projects, collaborations, or just
              a friendly chat.
            </p>
            <Link href="/contact">
              <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
                Get in Touch
                <span>→</span>
              </button>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-8 text-sm">
            {/* Email */}
            <Link href="httsp://amitdoliya1994@gmail.com">
              <div className="flex items-center gap-4 hover:cursor-pointer ">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 13.065l11.6-8.065h-23.2l11.6 8.065zm0 2.935l-12-8.343v14.343h24v-14.343l-12 8.343z" />
                  </svg>
                </div>
                <span>amitdoliya1994@gmail.com</span>
              </div>
            </Link>

            {/* Phone */}
            <div className="flex items-center gap-4 hover:cursor-pointer">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24a11.72 11.72 0 003.68.59c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.21 2.45.62 3.57.11.35.03.74-.25 1.02l-2.25 2.2z" />
                </svg>
              </div>
              <span>+91 9829472438</span>
            </div>

            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/in/amit-doliya-246031143">
              <div className="flex items-center gap-4 hover:cursor-pointer">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                     2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 
                     19h-3v-10h3v10zm-1.5-11.268c-.966 
                     0-1.75-.784-1.75-1.75s.784-1.75 
                     1.75-1.75 1.75.784 1.75 1.75-.784 
                     1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.064-1.868-3.064-1.868 
                     0-2.154 1.459-2.154 2.968v5.7h-3v-10h2.881v1.367h.041c.401-.757 
                     1.379-1.555 2.838-1.555 3.036 0 3.6 
                     2.001 3.6 4.604v5.584z"
                    />
                  </svg>
                </div>
                <p className="underline">LinkedIn</p>
              </div>
            </Link>
            <div className="flex items-center gap-4 hover:cursor-pointer">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                {/* GitHub Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.15c-3.2.69-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.3 1.19-3.12-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.04 11.04 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.24 2.75.12 3.04.74.82 1.19 1.86 1.19 3.12 0 4.45-2.7 5.43-5.27 5.72.42.37.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A10.5 10.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
              </div>
              <Link href={"https://github.com/amitdoliya"}>
                <p className="underline">GitHub</p>
              </Link>
            </div>

            {/* Skype */}
            <div className="flex items-center gap-4 hover:cursor-pointer">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                {/* Skype Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12c0 2.3.7 4.5 1.9 6.4C2.7 19.4 3.6 20 4.5 20.6c.8.5 1.7.9 2.7 1.1 1 .3 2 .4 3 .4 6.6 0 12-5.4 12-12S18.6 0 12 0zm1.7 16.5c-1.4 0-2.4-.5-3.1-1.1-.5-.4-1.3-.4-1.7 0-.4.5-.4 1.3 0 1.7 1 1 2.6 1.8 4.8 1.8 2.5 0 4.4-1.2 4.4-3.4 0-2.2-1.8-3-4.1-3.5-2.4-.5-2.8-.9-2.8-1.6 0-.7.8-1.2 2.1-1.2 1.2 0 2 .4 2.5.7.5.3 1.2.2 1.5-.3.3-.5.2-1.2-.3-1.5-.8-.5-1.8-.9-3-1v-.7c0-.6-.5-1.2-1.2-1.2-.6 0-1.2.5-1.2 1.2v.7c-2.3.3-4 1.7-4 3.7 0 2.3 1.8 3.1 4.2 3.6 2.3.5 2.7.9 2.7 1.6 0 .7-.7 1.2-2.1 1.2z" />
                </svg>
              </div>
              <a href="#" className="underline">
                Skype ID live:.cid.d3d32be738552fed
              </a>
            </div>

            {/* Address */}
            <div className="flex  items-center gap-4 hover:cursor-pointer">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 
                     13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 
                     9.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 
                     2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"
                  />
                </svg>
              </div>

              <p>• Jaipur, Rajasthan, 302012 </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Top Links */}

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex space-x-8 mb-4 md:mb-0">
              <Link href="/about">
                <p className="hover:text-blue-700">About</p>
              </Link>
              <Link href="/services">
                <p className="hover:text-blue-700">Services</p>
              </Link>
              <Link href="/projects">
                <p className="hover:text-blue-700">Projects</p>
              </Link>
              <Link href="/contact">
                <p className="hover:text-blue-700">Contact </p>
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="border border-gray-700 my-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Left Text */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-semibold">
                Let&apos;s Connect and Collaborate
              </h2>
            </div>

            {/* CEO Info */}
            <Link href="https://www.linkedin.com/in/amit-doliya-246031143">
              <div className="flex items-center space-x-4 mb-6 md:mb-0 hover:cursor-pointer">
                <Image
                  src="/image/amit.jpeg" // ✅ note the leading slash
                  alt="Profile Image"
                  width={64} // 16 * 4 = 64px
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">Amit Doliya</h3>
                  <p className="text-xs text-gray-400">Frontend Developer</p>
                  <p className="text-xs">amitdoliya1994@gmail.com</p>
                </div>
                <div className="w-10 h-10  rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="bg-blue-700  rounded-full"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 
             0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 
             0-1.75-.784-1.75-1.75s.784-1.75 
             1.75-1.75 1.75.784 1.75 1.75-.784 
             1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.064-1.868-3.064-1.868 
             0-2.154 1.459-2.154 2.968v5.7h-3v-10h2.881v1.367h.041c.401-.757 
             1.379-1.555 2.838-1.555 3.036 0 3.6 
             2.001 3.6 4.604v5.584z"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Button */}
            <div>
              <Link href="/contact">
                <p className="inline-flex items-center bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-200">
                  Let&apos;s Talk
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </p>
              </Link>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border border-gray-700 my-6"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-6 space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/amitlogo.png"
                alt="Logo"
                width={20} // h-5 = 20px
                height={20} // w-5 = 20px
                className="h-5 w-5"
              />
              <p>© 2026 Amit | All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <p>Developed by Amit Doliya</p>
              <p>Designed by Amit Doliya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
