import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/2b7d07c7-b8ea-451e-bcd8-8461cfbeb4d5"
        className="flex flex-col w-[80%] sm:max-w-[650px]"
      >
        <div className="pb-8 mt-11 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-sky-600 text-gray-300 pb-2">
            Contact
          </p>
          <p className="text-gray-300 py-4 mt-3">
            // Submit the form below or shoot me an email - pinemjosse@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-sky-600 hover:border-white-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
