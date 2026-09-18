"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

const images = ["/image/image.png", "/image/image2.png", "/image/girl.png"];

export default function Contact() {
  const [currentImage, setCurrentImage] = useState(0);

  const formRef = useRef<HTMLDivElement>(null);

  const [formHeight, setFormHeight] = useState(400);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Match image height with form
  useLayoutEffect(() => {
    const updateHeight = () => {
      if (formRef.current) {
        setFormHeight(formRef.current.clientHeight);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // IMPORTANT:
    // Save the form before the async operation
    const form = e.currentTarget;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm("service_xkaswgm", "template_9gr6p95", form, {
        publicKey: "ZVgTzzEpb9Lx5ji7p",
      });

      setStatus("Message sent successfully! ✅");

      // Reset form after successful email
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("Failed to send message. Please try again. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center py-8 min-h-screen px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl border border-white rounded-2xl shadow-lg overflow-hidden">
        {/* ================= IMAGE ================= */}
        <div
          className="relative md:w-1/2 w-full"
          style={{
            height: `${formHeight}px`,
          }}
        >
          <Image
            src={images[currentImage]}
            alt={`Contact image ${currentImage + 1}`}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ================= FORM ================= */}
        <div ref={formRef} className="md:w-1/2 w-full p-6 wrapper">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Let&apos;s Connect
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="block text-black font-medium mb-1 text-left"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-black font-medium mb-1 text-left"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* SUBJECT */}
            <div>
              <label
                htmlFor="subject"
                className="block text-black font-medium mb-1 text-left"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Enter subject"
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="block text-black font-medium mb-1 text-left"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {/* STATUS */}
            {status && (
              <p
                className={`text-center font-medium ${
                  status.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
