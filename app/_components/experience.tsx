"use client"
import React, { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";

const experienceData = [
  {
    id: 1,
    companyLogo: "/logos/telepathylogo.png",
    companyName: "Telepathy Infotech Pvt Ltd",
    location: "Jaipur, Rajasthan , India",
    date: "July 2024 - ",
    workType: "Onsite",
    designation: "Frontend Developer",
    description:
      "Developing responsive UIs and interactive components or API integration using Next.js, React.js, Rtk query, HTML, CSS, Tailwind, Shadcn UI, Bootstrap. Product-based responsibilities.",
  },
  {
    id: 2,
    companyLogo: "/logos/vynlogo.png",
    companyName: "Vyn automation Pvt Ltd",
    location: "Jaipur, Rajasthan , India",
    date: "Jan 2024 - June 2024",
    workType: "Onsite",
    designation: "Mern stack Developer",
    description:
      "Worked on dashboard modules with MSSQL, Node.js, Next.js, Tailwind CSS. Based on service.",
  },
  {
    id: 3,
    companyLogo: "/logos/Softfuturalogo.png",
    companyName: "Softfutura Pvt Ltd",
    location: "Jaipur, Rajasthan , India",
    date: "Jan 2023 - Oct 2023",
    workType: "Onsite",
    designation: "UI/UX Designer",
    description:
      "Designed user interfaces mobile-friendly using HTML, CSS, JavaScript, and media queries.",
  },
  {
    id: 4,
    companyLogo: "/logos/grras.png",
    companyName: "Grass solutions Pvt Ltd",
    location: "Jaipur, Rajasthan , India",
    date: "6 months",
    workType: "Onsite",
    designation: "MERN Stack Intern",
    description: "Built full-stack features during internship.",
  },
];
interface Experience {
  id: number;
  companyLogo: string;
  companyName: string;
  location: string;
  date: string;
  workType: string;
  designation: string;
  description: string;
}



const ExperienceCard = ({ exp }: {exp:Experience}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden duration-300 ease-in-out bg-white hover:bg-cyan-200 border border-black hover:border-0 rounded-lg w-full max-w-[90%] md:max-w-[400px] mx-auto transition-colors`}
      style={{
        height: "auto",
        clipPath: hovered
          ? "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0% 100%)"
          : "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        transition: "clip-path 0.4s ease-in-out",
      }}
    >
      {hovered && (
        <div className="absolute top-0 right-0 w-10 h-10 bg-white border-t-2 border-r-2 border-black rotate-45 translate-x-[10px] -translate-y-[10px] z-10 pointer-events-none" />
      )}

      <div className="p-4 sm:p-6 flex flex-col justify-between text-left z-20 relative">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
        <Image
  src={exp.companyLogo}
  alt={exp.companyName}
  width={56} // 14 * 4 = 56px
  height={56}
  className="object-contain p-1 rounded-md border border-blue-700"
/>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                {exp.companyName}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <CalendarDays className="w-4 h-4 mr-1" />
                {exp.date}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mt-3">
          <MapPin className="w-4 h-4 mr-1" />
          {exp.location}
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-4 items-start gap-4">
          <div className="text-gray-700 font-semibold text-sm sm:text-base w-full sm:w-[70%]">
            {exp.designation}
            <p className="text-gray-600 font-normal text-sm break-words mt-1">
              {exp.description}
            </p>
          </div>

          <div className="flex justify-center items-center py-2 px-4 bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-3xl">
            {exp.workType}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="py-10 px-2 sm:px-4 mx-auto text-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500">
      <h2 className="text-2xl sm:text-4xl text-blue-700 font-bold mb-10 font-[cursive] relative inline-block px-4 py-4 rounded-xl animate-pulse">
        Experience
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 w-full mt-8 sm:mt-12">
        {experienceData.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
