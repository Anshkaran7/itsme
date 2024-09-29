'use client';
import About from "@/components/About";
import { Colorful } from "@/components/Colourful";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar/Navbar";
import SideMail from "@/components/SideMail";
import { Social } from "@/components/Social";

export default function App() {
  return (
   <div>
      <Navbar />

      <div className="scroll-container">
        <main className="container mx-auto px-4 md:px-20 lg:px-28 xl:px-40">
          {/* Intro Section */}
          <div className="snap-section mb-20 ">
            <Intro />
          </div>

          {/* About Section */}
          <div className="snap-section mb-20">
            <About />
          </div>

          {/* Experience Section */}
          <div className="snap-section mb-20">
            <Experience />
          </div>

          {/* Contact Section */}
          <div className="snap-section mb-20">
            <Contact />
          </div>
        </main>
      </div>

      {/* Social and SideMail components for all screens */}
      <div className="fixed bottom-0 left-0 w-full flex justify-between px-4 md:px-20">
        <Social />
        <SideMail />
      </div>

      {/* Background effect */}
      <div className="blurred"></div>

      {/* Colorful component */}
      <Colorful />
    </div>
  );
}
