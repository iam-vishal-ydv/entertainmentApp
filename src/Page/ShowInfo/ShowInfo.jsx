import React from "react";

import { AiFillStar } from "react-icons/ai";
import { useLocation, useParams } from "react-router";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { Cast } from "../../cast/Cast";
import { useTvInfo } from "../../hooks/useTvInfo";

const ShowInfo = () => {

  const { id } = useParams()
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const reqFor = query.get('reqFor');

  const datialS = reqFor === "tv" ? useTvInfo(id) : useMovieDetails(id);



  const poster = `https://image.tmdb.org/t/p/w500${datialS?.backdrop_path}`;

  const BackPoster = `https://image.tmdb.org/t/p/original${
    datialS?.backdrop_path || datialS?.backdrop_path
  }`;
  const title = datialS?.title || datialS?.original_title;
  const vote = datialS?.vote_average?.toFixed(1);

  return (
    <>
      <div className="  h-full mt-5  bg-backgroundColor  ">
        <div className="">
          <div className="absolute w-full h-[70vh] bg-gradient-to-t from-backgroundColor  ">
            {" "}
          </div>
          <img
            src={BackPoster}
            alt=""
            className="w-full h-[70vh] opacity-10 bg-backgroundColor object-cover "
          />
        </div>
        <div className="flex justify-center  ">
          <div className="flex flex-col items-center md:flex-row md:max-w-2xl   lg:max-w-3xl absolute xl:max-w-4xl md:mt-[-400px] mt-[-200px] text-white ">
            <div className="  ">
              <img
                className="w-[100%] h-full lg:h-full md:h-80 md:w-[100%]  object-cover rounded-sm"
                src={poster}
                alt=""
              />
            </div>
            <div className="float-left w-[70%] md:pl-12  ">
              <p className="text-2xl md:text-5xl mb-3 mt-3 md:mt-0 lg:text-2xl">
                {title}
              </p>
              <div className="flex flex-row items-center ">
                <div className="flex flex-row justify-center items-center mr-5 pb-2">
                  <AiFillStar className="text-3xl mr-2" />
                  <p className="text-4xl ">{vote}</p>
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-flow-col auto-cols-max gap-4 ">
                    <p className="text-cyan-600 text-sm md:text-base">
                      Released: {datialS?.release_date}{" "}
                    </p>
                    <p className="text-cyan-600 text-sm md:text-base">
                      {datialS?.runtime} min
                    </p>
                  </div>

                  <div className="grid grid-flow-col auto-cols-max gap-4 mb-3">
                    {datialS?.genres &&
                      datialS?.genres.slice(0, 5).map((genre, i) => (
                        <span key={i} className="text-sm  md:text-base">
                          {genre.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-8">{datialS?.overview} </p>
            </div>
          </div>
        </div>

        <Cast />
      </div>
    </>
  );
};

export default ShowInfo;
