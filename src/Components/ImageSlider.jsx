import React, { useState } from "react";
import { GoTools } from "react-icons/go";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/31415299/pexels-photo-31415299/free-photo-of-sushi-roll-on-red-chopsticks-with-dark-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "sushi",
    },
    {
      url: "https://images.pexels.com/photos/5490968/pexels-photo-5490968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "poached egg",
    },
    {
      url: "https://images.pexels.com/photos/6510294/pexels-photo-6510294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "spicy lobsters",
    },
    {
      url: "https://images.pexels.com/photos/6287548/pexels-photo-6287548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "pasta",
    },
    {
      url: "https://images.pexels.com/photos/5491010/pexels-photo-5491010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "vorschmack ",
    },
    {
      url: "https://images.pexels.com/photos/7627443/pexels-photo-7627443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "beefsteak",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16  px-4 relative group">
      <div
        title={slides[currentIndex].title}
        className=" w-full h-full  rounded-2xl bg-center bg-cover duration-500 uppercase"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* left arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <HiOutlineArrowSmallLeft onClick={prevSlide} size={30} />
      </div>
      {/* right arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <HiOutlineArrowSmallRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slides, slideIndex) => (
          <div
            className={` ${
              currentIndex === slideIndex && "scale-150 ease-in-out"
            }text-2xl cursor-pointer hover:scale-130 duration-150 ease-in-out`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
