"use client";
import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919829472438"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-4  bottom-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
    >
      {/* <FaWhatsapp size={24} /> */}
    </a>
  );
}
