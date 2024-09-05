import React, { useEffect, useState, useCallback } from "react";
import { getGenre, getMovieByGenre } from "../../Api/Api";
import { Genre } from "../../Component/Genre/Genre";
import { Card } from "../../Component/Card/Card";
import CardSkeleton from "../../Component/CardSkeleton/CardSkeleton";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const Movie = () => {
  const [storeRes, setStoreRes] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [getMovie, setGetMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllGenre = async () => {
      try {
        const res = await getGenre();
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
      getMoviesByGenreID(selectedGenres, page);
    }
  }, [selectedGenres, page]);

  const getMoviesByGenreID = async (ids, page) => {


    try {
      const res = await getMovieByGenre(ids, page); 
      setGetMovie((prev) => [...prev, ...res?.data?.results]);
      setHasMore(res?.data?.results.length > 0);
      setLoading(false); 
    } catch (err) {
      console.log(err);
      setLoading(false); 
    }
  };



  const handleClick = (genreId) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
    setPage(1); 
    setGetMovie([]);
  };

  const handleDelete = (genreId) => {
    setSelectedGenres((prev) => prev.filter((id) => id !== genreId));
    setPage(1); 
    setGetMovie([]);
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
            : getMovie.map((res, index) => (
                <Card
                  key={index}
                  images={res.poster_path}
                  id={res.id}
                  title={res.title}
                  date={res.release_date}
                  rating={res.vote_average}
                  type={"movie"}
                />
              ))
          }
        </div>
        {!hasMore && <p className="text-center mt-4">No more movies to load</p>}
      </div>
    </>
  );
};

export default Movie;
