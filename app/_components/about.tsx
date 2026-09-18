import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side: Experience */}
        <div className="flex justify-center w-full md:w-1/2">
          <div className="rounded-full border border-white bg-gradient-to-l to-blue-200 via-blue-300 from-blue-500 w-64 h-64 flex flex-col justify-center items-center shadow-lg">
            <h2 className="text-6xl font-bold text-blue-700">3</h2>
            <p className="text-xl font-semibold text-gray-800 mt-2">
              Years of Experience
            </p>
          </div>
        </div>

        {/* Right side: About Me */}
        <div className="max-w-2xl md:w-1/2">
          <h2 className="text-4xl text-blue-700 font-bold mb-6 font-[cursive] inline-block px-4 py-4 rounded-xl animate-pulse">
            About Me
          </h2>
          <p className="text-gray-600 mb-6">
            Hi, I&apos;m a passionate{" "}
            <span className="text-blue-700 font-semibold">
              Frontend Developer
            </span>{" "}
            with <span className="text-blue-700 font-semibold">3 years</span> of
            experience building responsive and visually appealing web
            applications. I have a strong foundation in{" "}
            <span className="font-semibold">HTML</span>,{" "}
            <span className="font-semibold">CSS, Tailwind</span>,{" "}
            <span className="font-semibold">JavaScript</span>, and modern
            frameworks like{" "}
            <span className="font-semibold">React.js, Next.js</span>.
          </p>
          <p className="text-gray-600 mb-6">
            Over the years, I&apos;ve collaborated with clients across
            industries to create seamless user experiences, optimized website
            performance, and delivered projects that drive results. My focus is
            on crafting clean, efficient, and accessible front-end solutions.
          </p>
          <p className="text-gray-600">
            I&apos;m passionate about learning new technologies, following
            design trends, and taking on new challenges that push my skills
            further. Let&apos;s connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
