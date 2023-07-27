import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const slides = [
  {
    url: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Fine Interior Rooms",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    title: "Fine Interior Rooms",
  },
  {
    url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    title: "Fine Interior Rooms",
  },
  {
    url: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    title: "Fine Interior Rooms",
  },
  {
    url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    title: "Fine Interior Rooms",
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    console.log(currentSlide);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    console.log(currentSlide);
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative">
      <div
        className="w-full h-full rounded-2xl bg-center duration-500"
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl left-5 rounded-full p2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl right-5 rounded-full p2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-2 rounded-full duration-500 cursor-pointer ${
              index === currentSlide ? "bg-black" : "bg-black/20"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
