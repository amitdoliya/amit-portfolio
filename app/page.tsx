"use client"


import Header from "./_components/header";

import About from "./_components/about";
import SkillSet from "./_components/skils";
import Experience from "./_components/experience";
import Services from "./_components/services";
import ProjectCard from "./_components/projects";




export default function Home() {
  

  return (
  <section className="min-h-screen">
   
<Header/>

<About/>
<SkillSet/>
<Experience/>
<Services/>
<ProjectCard/>


  </section>
  );
}
