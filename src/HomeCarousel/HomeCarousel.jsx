import React, { useContext, useEffect, useState } from "react";
import { HomeCarouselCard } from "./HomeCarouselCard";
import { context } from "../Contaxt/ContaxtApi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getPopularMovie } from "../Api/Api";

export const HomeCarousel = () => {
  const [response, setResponse] = useState([]);
  const {setLoading}=useContext(context)


  useEffect(() => {
    fetchMoiveData();
  }, []);

  const fetchMoiveData = async () => {
    setLoading(true)
    try {
      const {
        data: { results },
      } = await getPopularMovie();
      setResponse(results);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        transitionDuration={100}
        containerClass="carousel-container"
        customTransition="all 1sec"
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
      >
        {response?.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div>
                <HomeCarouselCard
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
    </>
  );
};
