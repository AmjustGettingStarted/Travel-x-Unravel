import React from "react";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
const Plan = () => {
  return (
    <div className=" max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2  gap-4 *: ">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] ">
        <img
          className="row-span-3 object-cover w-full h-full p-2 "
          src={Img1}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 "
          src={Img2}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 "
          src={Img3}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2 "
          src={Img4}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 "
          src={Img5}
          alt="/"
        />
      </div>

      {/* Ridht Side */}
      <div className="flex flex-col h-full justify-center  ">
        <h3 className="capitalize text-5xl md:text-6xl lg:text-7xl">
          plan your next trip.
        </h3>
        <p className="text-2xl py-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          optio.
        </p>
        <p className="pb-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          itaque quo esse similique magnam inventore ipsa dolor cumque expedita
          sint quas eius nulla placeat dolores exercitationem id impedit nisi
          tempore!
        </p>
        <div className="">
          <button className=" border py-3 px-2 rounded-full border-black mr-4 hover:shadow-2xl hover:scale-110">
            Learn More
          </button>
          <button className=" border py-3 px-2 rounded-full border-black mr-4 hover:shadow-2xl hover:scale-110">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
