import React, { useEffect, useState, useCallback } from "react";
import { getTVShowGenres, getTVShowsByGenre } from "../../Api/Api";
import { Genre } from "../../Component/Genre/Genre";
import { Card } from "../../Component/Card/Card";
import CardSkeleton from "../../Component/CardSkeleton/CardSkeleton";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";


const TvShow = () => {
  const [storeRes, setStoreRes] = useState([]); 
  const [selectedGenres, setSelectedGenres] = useState([]); 
  const [getTVShows, setGetTVShows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Fetch all TV show genres on mount
    const getAllGenre = async () => {
      try {
        const res = await getTVShowGenres();
        setStoreRes(res?.data?.genres);
      } catch (error) {
        console.log(error);
      }
    };

    getAllGenre();
  }, []);

  useEffect(() => {
    if (selectedGenres) {
      setLoading(true); 
      getTVShowsByGenreID(selectedGenres, page); // Join selected genre IDs with comma
    }
  }, [selectedGenres, page]);

  const getTVShowsByGenreID = async (ids, page) => {
    try {
      const res = await getTVShowsByGenre(ids, page);
      setGetTVShows((prev) => [...prev, ...res?.data?.results]);
      setHasMore(res?.data?.results.length > 0);
      setLoading(false); 
    } catch (err) {
      console.log(err);
      setLoading(false); 
    }
  };

  const handleClick = (genreId) => {
   
    setSelectedGenres( (prev)=>   prev.includes(genreId) ? prev.filter((id)=> id !==genreId ): [...prev,genreId])
    setPage(1); 
 

  };

  const handleDelete = (genreId) => {
    setSelectedGenres((prev) => prev.filter((id) => id !== genreId));
    setPage(1); 
    setGetTVShows([]);
  };

  const loadMoreMovies = useCallback(() => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore]);

  useInfiniteScroll(loadMoreMovies);

  return (
    <>
      <Genre
        selectedGenres={selectedGenres}
        handleClick={handleClick}
        handleDelete={handleDelete}
        res={storeRes}
      />

      <div className="container mx-auto pt-14 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : getTVShows.map((show, index) => (
                <Card
                  key={index}
                  images={show.poster_path}
                  id={show.id}
                  title={show.name}
                  date={show.first_air_date}
                  rating={show.vote_average}
                  type={"tv"}
                />
              ))
          }
        </div>
        {!hasMore && <p className="text-center mt-4">No more TV shows to load</p>}
      </div>
    </>
  );
};

export default TvShow;
