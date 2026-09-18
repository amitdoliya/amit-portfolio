// import React from "react";
// interface CanvasCardProps {
//   icon: React.ReactNode;
//   title: string;
//   details: string;
//   align?: "left" | "right" | "center";
// }

// const CanvasCard = ({
//   icon,
//   title,
//   details,
//   align = "right",
// }: CanvasCardProps) => {
//   return (
//     <div className="relative  block w-62.5 h-62.5 text-inherit no-underline gap-16 group">
//       {/* Border */}
//       <div className="absolute top-10 -left-10 h-full w-full z-0 rotate-[-10deg]  skew-[-10deg]  transition-all duration-200 ease-in-out group-hover:rotate-[-14deg] active:rotate-[-14deg] group-hover:skew-[-14deg] active:skew-[-140eg] group-hover:scale-95 active:scale-95">
//         <svg
//           viewBox="0 0 400 400"
//           preserveAspectRatio="none"
//           className="w-full h-full"
//         >
//           <rect
//             x="0"
//             y="0"
//             width="400"
//             height="400"
//             stroke="#000"
//             fill="none"
//             strokeWidth="7"
//             className="rect-gradient stroke-current"
//           />
//         </svg>
//       </div>

//       {/* Content Container */}
//       <div className="absolute flex flex-col p-5 justify-between w-full h-full -top-7 left-0 rotate-[-10deg] skew-[-10deg] overflow-hidden bg-white transition-all duration-200 ease-in-out group-hover:rotate-[-14deg] active:rotate-[-14deg]  group-hover:skew-[-14deg] active:skew-[-14deg] group-hover:scale-95">
//         {/* Title and Icon */}
//         <div className="flex flex-col items-start gap-2">
//           <div className="w-6 h-6">{icon}</div>
//           <h6 className="text-base font-bold text-black mt-6">{title}</h6>
//         </div>

//         {/* Bottom Details */}
//         <p className="text-sm text-gray-500 mb-5 ">{details}</p>
//       </div>

//       {/* Optional Bottom Label */}
//       <div
//         className={`absolute bottom-0 ${
//           align === "left" ? "left-[-25%]" : "left-[85%]"
//         } uppercase text-red-500 z-10`}
//       >
//         <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10 opacity-0 transform -translate-x-10 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0">
//           {/* Hover content if any */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CanvasCard;

"use client";

import React, { useState } from "react";

interface CanvasCardProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  align?: "left" | "right" | "center";
}

const CanvasCard = ({
  icon,
  title,
  details,
  align = "right",
}: CanvasCardProps) => {
  const [isActive, setIsActive] = useState(false);

  const toggleCard = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      onClick={toggleCard}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleCard();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      className={`relative block w-62.5 h-62.5 text-inherit no-underline gap-16 group cursor-pointer ${
        isActive ? "is-active" : ""
      }`}
    >
      {/* Border */}
      <div
        className="
          absolute top-10 -left-10
          h-full w-full z-0
          rotate-[-10deg] skew-[-10deg]
          transition-all duration-200 ease-in-out

          group-hover:rotate-[-14deg]
          group-hover:skew-[-14deg]
          group-hover:scale-95

          group-[.is-active]:rotate-[-14deg]
          group-[.is-active]:skew-[-14deg]
          group-[.is-active]:scale-95
        "
      >
        <svg
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <rect
            x="0"
            y="0"
            width="400"
            height="400"
            stroke="#000"
            fill="none"
            strokeWidth="7"
            className="rect-gradient stroke-current"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div
        className="
          absolute flex flex-col p-5
          justify-between w-full h-full
          -top-7 left-0
          rotate-[-10deg] skew-[-10deg]
          overflow-hidden bg-white
          transition-all duration-200 ease-in-out

          group-hover:rotate-[-14deg]
          group-hover:skew-[-14deg]
          group-hover:scale-95

          group-[.is-active]:rotate-[-14deg]
          group-[.is-active]:skew-[-14deg]
          group-[.is-active]:scale-95
        "
      >
        {/* Title and Icon */}
        <div className="flex flex-col items-start gap-2">
          <div className="w-6 h-6">{icon}</div>

          <h6 className="text-base font-bold text-black mt-6">{title}</h6>
        </div>

        {/* Bottom Details */}
        <p className="text-sm text-gray-500 mb-5">{details}</p>
      </div>

      {/* Optional Bottom Label */}
      <div
        className={`absolute bottom-0 ${
          align === "left"
            ? "left-[-25%]"
            : align === "center"
              ? "left-1/2 -translate-x-1/2"
              : "left-[85%]"
        } uppercase text-red-500 z-10`}
      >
        <div
          className="
            absolute inset-0
            flex flex-col items-center
            justify-center p-4 text-center z-10
            opacity-0 -translate-x-10
            transition-all duration-700

            group-hover:opacity-100
            group-hover:translate-x-0

            group-[.is-active]:opacity-100
            group-[.is-active]:translate-x-0
          "
        >
          {/* Hover content */}
        </div>
      </div>
    </div>
  );
};

export default CanvasCard;
