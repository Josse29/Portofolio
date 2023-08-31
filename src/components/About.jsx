import React from "react";
import { Josse } from "../assets/images";
const About = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f]  text-gray-300 h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="text-center p-6">
            <p className="text-4xl border-b-4 border-sky-600 inline font-bold pb-2">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full flex justify-evenly mt-4 px-5 flex-wrap">
          <div className="max-w-[600px]">
            <p className="font-semibold text-right sm:text-4xl text-3xl px-3">
              Hi. I'm Josse Surya Pinem, nice to meet you. Please take a look
              around.
            </p>
            <p className="text-right text-[#8892b0] font-semibold sm:text-2xl text-lg mt-3 px-3">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
          <img src={Josse} alt="" className="h-[355px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
