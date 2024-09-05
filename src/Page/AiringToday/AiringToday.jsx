import React from "react";
import { context } from "../../Contaxt/ContaxtApi";
import { useContext } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const AiringToday = () => {
  const { airingToday } = useContext(context);


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
          <div className="w-[90%]  m-auto  mt-8 gap-20">
          <div className="text-2xl flex  gap-4 ml-10    ">
         
             <span className="border-b-2   border-red-500 font-semibold">  Hot Right Now  </span> 
             <span>
            🔥
            </span>
          </div>
      <Carousel
        responsive={responsive}
        transitionDuration={100}
        containerClass="carousel-container"
        customTransition="all 1sec"
        autoPlay={true}
        autoPlaySpeed={10000}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        
      >
        {airingToday.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div>
                <AiringTodayCard
                  backdropPath={item.backdrop_path}
                  title={item.original_title}
                  ratings={item.vote_average}
                  releaseDate={item.release_date}
                  id={item.id}
                />
              </div>
              
            </React.Fragment>
          );
        })}
      </Carousel>
      </div>
    </>
  );
};

const AiringTodayCard = ({backdropPath}) => {
 

  return (
    <>


        <div className="w-[90%]   m-auto mt-8 ">
        {/* <div className="absolute w-full sm:h-[218px]   md:h-[450px]  bg-gradient-to-t from-backgroundColor ">
        {" "}
      </div> */}
       
          <img className="rounded-md"
            src={`https://image.tmdb.org/t/p/w1280${backdropPath}`}
            alt="image"
          />
          
        
      
        </div>
    
    </>
  );
};

export default AiringToday;
