import React from "react";


import { Lightbulb, MonitorSmartphone, Presentation, Wrench } from "lucide-react";
import CanvasCard from "./canvasCard";


function Services() {
  return (
      <section className="py-15 mx-auto   text-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500">
      <h2 className="text-4xl text-blue-700 font-bold mb-30 font-[cursive] relative inline-block px-4 py-4  rounded-xl animate-pulse">
          Services
         </h2>


<div className="pl-24  pt-10 grid grid-cols md:grid-cols-2 lg:grid-cols-3 items-center sm:grid-cols-1 mb-20  gap-25">

  
  <CanvasCard


    icon={<MonitorSmartphone className="w-8 h-8 text-green-500" />}
    title="Website Development"

    details="Can build custom websites and admin panels from scratch or using Figma to ReactJS, Figma to NextJS, and PSD to HTML, etc. Develop responsive, visually appealing, and user-friendly interfaces."
    align="center"
  />

   <CanvasCard
    icon={<Lightbulb className="w-8 h-8 text-blue-500" />}

    title="User Interface (UI) Design"
    details="Design intuitive user interfaces that enhance UX and reflect the client's brand. Provide wireframing, prototyping, and UI mockups. Build custom, responsive websites using tools like Figma to ReactJS or NextJS."
    align="center"
  />
  <CanvasCard
    icon={<Lightbulb className="w-8 h-8 text-blue-500" />}
    title="Website Consultancy & Technical Advice"
    details="Offer guidance and expertise to clients on frontend technologies..."
    align="center"
  />
  <CanvasCard
    icon={<MonitorSmartphone className="w-8 h-8 text-green-500" />}
    title="Responsive Web Design & Optimization"
    details="Adapt existing websites or create new ones to be responsive and mobile-friendly..."
    align="center"
  />
  <CanvasCard
    icon={<Presentation className="w-8 h-8 text-yellow-500" />}
    title="Training and Workshops"
    details="Conduct training sessions or workshops to educate clients..."
    align="center"
  />
  <CanvasCard
    icon={<Wrench className="w-8 h-8 text-red-500" />}
    title="Website Maintenance and Support"
    details="Provide ongoing maintenance and support services..."
    align="center"
  />
</div>

         </section>
  );
}

export default Services;
