import React from "react";
import { works } from "../data";
import TypewriterComponent from "typewriter-effect";
const Work = () => {
  const projects = works;
  return (
    <div name="work" className="bg-[#0a192f] w-full text-gray-300 h-full">
      <div className="max-w-[820px] flex flex-col mx-auto">
        <div className="mt-5 text-center ">
          <p className="text-4xl font-bold border-sky-600 border-b-4 inline pb-2">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work </p>
        </div>
        {/* Container for Projects */}
        <div className="grid sm:grid-cols-2 gap-8 justify-items-center">
          {/* Grid Item */}
          {projects.map((project) => (
            <div className="content-project" key={project.id}>
              <img src={project.image} />
              <div className="desc flex flex-col justify-center p-4 ">
                <p className="text-3xl pb-2 font-extrabold">{project.name}</p>
                <p className="text-xl font-semibold">
                  <TypewriterComponent
                    onInit={(typewriter) => {
                      typewriter.typeString("Coming Soon...").start();
                    }}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
