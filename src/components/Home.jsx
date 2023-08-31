import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import TypewriterComponent from "typewriter-effect";
const Home = () => {
  return (
    <div className="w-full bg-[#0a192f] h-screen" name="home">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full px-11">
        <p className="text-sky-200 font-semibold text-4xl">Hi, My Name is</p>
        <h1 className="text-4xl md:text-7xl font-extrabold text-white py-2">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString("Josse Surya Pinem").start();
            }}
          />
        </h1>
        <h2 className="text-4xl md:7xl font-bold text-zinc-300">
          I'm Fullstack Developer
        </h2>
        <p className="text-[#8892b0] font-semibold max-w-[500px] py-2">
          I am a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div className="mt-2">
          <a
            className="text-white border-2 p-4 items-center hover:bg-blue-200 font-semibold flex w-[180px] text-2xl hover:text-black hover:font-bold"
            href="https://wa.link/2s7u5m"
            target="_blank"
          >
            Hire Me !
            <span>
              <HiArrowNarrowRight className="ml-2 text-2xl" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
