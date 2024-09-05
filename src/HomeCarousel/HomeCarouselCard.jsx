import React from "react";
import { BsCalendar2Week } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";
export const HomeCarouselCard = ({
  backdropPath,
  title,
  ratings,
  releaseDate,
  id,
}) => {

  
  const images = `https://image.tmdb.org/t/p/w1280${backdropPath}`;

  return (
    <div className="w-full   bg-black m-auto relative    sm:h-64 lg:h-64 xl:h-[450px]  md:h-64  ">
      <img className="absolute  bg-auto   w-full  " src={images} alt="pic" />
      <div className="absolute w-full sm:h-[218px]  xl:h-[450px] md:h-[450px]  bg-gradient-to-t from-backgroundColor ">
        {" "}
      </div>
      <div className="lg:ml-44 md:ml-36 sm:ml-28">
        <div className=" absolute mt-14 ml-10 sm:mt-20 sm:text-xl sm:font-semibold  lg:mt-44  text-white  lg:text-4xl ">
          {title}
        </div>
        <div className=" absolute mt-24 ml-10 sm:mt-28 sm:font-semibold lg:mt-64   text-white text-base flex gap-5 ">
          <div className="flex gap-4 text-base">
            {" "}
            <BsCalendar2Week size={15} color="red" className="mt-1" />{" "}
            {releaseDate}
          </div>

          <div className="flex gap-1 text-base">
            {" "}
            <AiFillStar size={17} className="text-yellow-400 mt-1" /> {Math.floor(ratings * 10) / 10}
          </div>
        </div>

        <div className=" absolute bottom-6 ml-10 sm:bottom-20  text-white md:bottom-16   lg:bottom-24  ">
          <Link
            to={`/showinfo/${id}`}
            className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48  rounded rotate-[-40deg] bg-red-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative px-2  w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Watch
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
