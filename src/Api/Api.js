import axios from "axios";
const  baseUrl="https://api.themoviedb.org/3"


const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTY4N2JlMTUzZDA4ZmM4OWI4MDcwOTIxNzY3NjY3ZSIsInN1YiI6IjYzYmQ3NjgyNWJlMDBlMDBiMDkwMTBiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CxXHekOJaBQOfRKV-wChJKPtsF_NMsgXul9XzsGl01I",
    },
  };

  export const getPopularMovie=()=>{
    return axios.get(`${baseUrl}/movie/upcoming?language=en-US&page=1`,options)
}

 export const getGenre=()=>{
  return axios.get(`${baseUrl}/genre/movie/list?language=en`,options)
}

export const getMovieByGenre = (id, page = 1) => {

  const url = id
    ? `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`
    : `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  return axios.get(url, options);
};


export const getTVShowGenres = () => {
  return axios.get(`${baseUrl}/genre/tv/list?language=en`, options);
};


export const getTVShowsByGenre = (id, page = 1) => {
  const url = id
    ? `${baseUrl}/discover/tv?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`
    : `${baseUrl}/discover/tv?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  return axios.get(url, options);
};


export const infocard=(id)=>{
  return axios.get( `https://api.themoviedb.org/3/movie/${id}?language=en-US1`,
    options)
}

export const getCaste=(id)=>{
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
}



export const Tvcard=(id)=>{
  return axios.get( `https://api.themoviedb.org/3/tv/${id}?language=en-US1`,
    options)
}

export const TvCaste=(id)=>{
  return axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`, options)
}