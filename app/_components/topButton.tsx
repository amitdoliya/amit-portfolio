"use client";

import { ArrowUp } from "lucide-react";

export default function TopButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
      className="fixed bottom-5 right-5 z-50
        rounded-full bg-blue-600 p-3
        text-white shadow-lg
        hover:bg-blue-700 transition"
    >
      <ArrowUp size={24} />
    </button>
  );
}
