import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import Boxes from "./Boxes";

const About = () => {
  return (
    <section className="py-16 mx-4 md:mx-8 lg:max-w-7xl lg:mx-auto">
      <h1 className=" text-3xl text-center font-bold">A PROPOS</h1>
      <p className=" max-w-3xl text-base text-center text-gray-400 my-4 px-8 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore lacus vel facilisis.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="">
          <img
          className=" w-auto rounded-md drop-shadow-md"
            src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="unsplash store"
          />
        </div>
        <div className="pt-3">
          <h3 className="font-bold text-xl text-blue-700">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h3>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="mt-4 text-gray-600">
            <li className="flex gap-2 mb-4"> <FaCheckDouble className="text-blue-700"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li className="flex gap-2 mb-4"> <FaCheckDouble className="text-blue-700"/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li className="flex gap-2 mb-4"> <FaCheckDouble className="text-blue-700"/> Voluptate repellendus pariatur reprehenderit corporis sint.</li>
            <li className="flex gap-2 mb-4"> <FaCheckDouble className="text-blue-700"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
          </ul>
        </div>
      </div>
      <Boxes/>
    </section>
  );
};

export default About;
