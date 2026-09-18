"use client";

import { useRouter } from "next/navigation";
import { ArrowUp } from "lucide-react";

export default function TopButton() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={goToHome}
      aria-label="Go to home page"
      className="fixed bottom-5 right-5 z-50
      bg-blue-600 text-white p-3 rounded-full
      shadow-lg hover:bg-blue-700 transition"
    >
      <ArrowUp size={24} />
    </button>
  );
}
