import React from "react";
import Island from "../assets/island.jpg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="w-full h-screen ">
      <img
        className="w-full h-full top-0 left-0 object-cover "
        src={Island}
        alt="/"
      />
      <div className="bg-black/30 w-full h-screen top-0 left-0 absolute" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white ">
        <div className="md:left-[10%] max-w-[1100px] mx=-auto absolute p-4 ">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl ">
            <ReactTyped
              strings={["Private Beaches", "~ & ~", "Getaway"]}
              typeSpeed={150}
              backSpeed={60}
              loop
            ></ReactTyped>
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quasi, necessitatibus laboriosam aut cumque illo nemo in ab sequi
            ut?
          </p>
          <button className="py-3 px-2 rounded-full shadow-2xl bg-white text-black hover:scale-110  ">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
