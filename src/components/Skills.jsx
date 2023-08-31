import React from "react";
import { skilss } from "./../data";
const Skills = () => {
  return (
    <div name="skilss" className="bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full text-gray-300">
        <div>
          <div className="text-center p-6">
            <p className="text-4xl border-b-4 border-sky-600 inline font-bold pb-2">
              Skills
            </p>
          </div>
          <p className="p-6 text-center">
            // These are the technologies I've worked with //
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center">
          {skilss.map((skill) => (
            <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-100 cursor-pointer"
              key={skill.id}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-20 mx-auto"
              />
              <p className="my-4 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
