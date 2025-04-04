import React, { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="font-bold text-white text-2xl z-20">Experiences</h1>
      {!nav ? (
        <RiMenu5Fill
          className="z-20 cursor-pointer text-white"
          onClick={handleNav}
          size={30}
        />
      ) : (
        <RiMenu4Line
          className="z-20 cursor-pointer text-white"
          onClick={handleNav}
          size={30}
        />
      )}
      {nav && (
        <div className="fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 flex-col z-10 ease-in-out duration-200 ">
          <ul className=" flex flex-col  w-full h-full items-center justify-center">
            <li className="font-bold text-xl md:text-3xl p-4 md:p-8 capitalize">
              home
            </li>
            <li className="font-bold text-xl md:text-3xl p-4 md:p-8 capitalize">
              destinations
            </li>
            <li className="font-bold text-xl md:text-3xl p-4 md:p-8 capitalize">
              Reservation
            </li>
            <li className="font-bold text-xl md:text-3xl p-4 md:p-8 capitalize">
              Amenties
            </li>
            <li className="font-bold text-xl md:text-3xl p-4 md:p-8 capitalize">
              Rooms
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
