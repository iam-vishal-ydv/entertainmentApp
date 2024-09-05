
import React  from "react";
import { useContext } from "react";
import { ImStarHalf} from "react-icons/im";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { image } from "../../Config";
import "animate.css";
import {  useNavigate } from "react-router-dom";

import { context } from "../../Contaxt/ContaxtApi";
import { useMovieCard } from "../../hooks/useMovieCrard";



   const ToRated=()=>{

    const { topRated } = useContext(context);
    useMovieCard();
     
  
   
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 1020 },
        items: 6,
        slidesToSlide: 2,
        partialVisibilityGutter: 40,
      },
      desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 3,
        slidesToSlide: 3,
        partialVisibilityGutter: 30,
      },
      tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <>
        <div className="text-white w-full mt-8 ">
          <div className="text-2xl flex  gap-4 ml-10    ">
            <span>
              <ImStarHalf size={32} className="text-red-500 mt-1" />
            </span>
             <span className="border-b-2   border-red-500 font-semibold">  Top Rated  </span> 
          </div>
  
          <div className="w-full    mt-4 ">
            <Carousel
              responsive={responsive}
              transitionDuration={100}
              containerClass="carousel-container"
              infinite={true}
              autoPlay={true}
            >
              {topRated.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <TopRatedCard
                      posterPath={item.poster_path}
                      voteAverage={item.vote_average}
                      id={item.id}
                      
                    />
                  </React.Fragment>
                );
              })}
            </Carousel>
          </div>
        </div>
      </>
    );
  };
  
  const TopRatedCard = ({ posterPath,id }) => {
  
    const cardPoster = `${image}${posterPath}`;
    const navigate=useNavigate()
          
  
    return (
      <>
        <div   onClick={()=> navigate(`/showinfo/${id}`)}   className="w-60 h-72  px-1  relative cursor-pointer  rounded-md m-5 inline-block   hover:-translate-y-6  transition ease-in duration-150">
          <div className="   w-60 h-96  absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            {" "}
          </div>
  
          <img className="rounded-md" src={cardPoster} alt="imagePoster" />
  
        
        </div>
      </>
    );
}


export default ToRated