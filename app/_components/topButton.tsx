"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function TopButton() {
  return (
    <Link
      href="/"
      aria-label="Go to home page"
      className="fixed bottom-5 right-5 z-50
      bg-blue-600 text-white p-3 rounded-full
      shadow-lg hover:bg-blue-700 transition"
    >
      <ArrowUp size={24} />
    </Link>
  );
}
