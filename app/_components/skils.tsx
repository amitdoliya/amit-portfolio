"use client";

import Image from "next/image";

const skills = [
  {
    name: "Next.js",
    percentage: 88,
    color: "#000000",
    logo: "/logos/nextjs.svg",
  },
  {
    name: "React.js",
    percentage: 85,
    color: "#3b82f6",
    logo: "/logos/reactjs.svg",
  },
  { name: "HTML", percentage: 80, color: "#f97316", logo: "/logos/html5.svg" },
  { name: "CSS", percentage: 85, color: "#3b82f6", logo: "/logos/css.svg" },
  {
    name: "bootstrap",
    percentage: 75,
    color: "#8b5cf6",
    logo: "/logos/bootstrap.svg",
  },
  {
    name: "Tailwind CSS",
    percentage: 92,
    color: "#06b6d4",
    logo: "/logos/tailwinds.svg",
  },
  {
    name: "JavaScript",
    percentage: 78,
    color: "#facc15",
    logo: "/logos/javascript.svg",
  },
  {
    name: "TypeScript",
    percentage: 85,
    color: "#3b82f6",
    logo: "/logos/typescript.svg",
  },
  {
    name: "RTK Query",
    percentage: 70,
    color: "#8b5cf6",
    logo: "/logos/rtk.png",
  },
  {
    name: "Node.js",
    percentage: 60,
    color: "#10b981",
    logo: "/logos/nodejs.svg",
  },
  {
    name: "Express.js",
    percentage: 60,
    color: "#4b5563",
    logo: "/logos/expressjs.svg",
  },
  {
    name: "MongoDB",
    percentage: 50,
    color: "#22c55e",
    logo: "/logos/mongodb.png",
  },
];

export default function SkillSet() {
  return (
    <section className="py-10 px-0  mx-auto text-center bg-linear-to-ssr from-blue-200 via-blue-300 to-blue-500">
      <h2 className="text-4xl text-blue-700 font-bold mb-6 font-[cursive] relative inline-block px-8 py-4  rounded-xl animate-pulse">
        My skill Set
      </h2>

      <p className="text-gray-800 mb-12">
        Here are some technologies I work with
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <svg
                className="w-full h-full -rotate-90"
                viewBox="0 0 100 100"
                aria-label={`${skill.percentage}% ${skill.name}`}
                role="img"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke={skill.color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 44}`}
                  strokeDashoffset={`${2 * Math.PI * 44 * (1 - skill.percentage / 100)}`}
                />
              </svg>
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
