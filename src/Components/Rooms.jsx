import React from "react";
import Img1 from "../assets/img6.jpg";
import Img2 from "../assets/img7.jpg";
import Img3 from "../assets/img8.jpg";
const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20   pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 ">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold ">Fine interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          debitis saepe ipsam id. Atque, quos.
        </p>
      </div>
      <div className="grid-cols-2 grid col-span-2 gap-2">
        <img className=" object-cover h-full w-full" src={Img1} alt="/" />
        <img
          className="row-span-2 object-cover h-full w-full"
          src={Img2}
          alt="/"
        />
        <img className="  object-cover h-full w-full" src={Img3} alt="/" />
      </div>
    </div>
  );
};

export default Rooms;
