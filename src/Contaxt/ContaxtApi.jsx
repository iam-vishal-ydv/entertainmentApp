import { useState, useEffect } from "react";
import { createContext } from "react";
import { getPopularMovie } from "../Api/Api";

export const context = createContext();

const ContextApiStates = (props) => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [datialS, setDatialS] = useState([]);
  const [upcoming,setUpcoming]=useState([])
  const [cast,setCast]=useState([])
  const [popular,setPopular]=useState([])
  const [topRated,setTopRated]=useState([])
  const [airingToday,setAiringToday]=useState([])
  const [loading,setLoading]=useState(false)
  const [getTvInfo,setGetTvInfo]=useState([])


 
  const popularApi = async() => {


    try{
 const res= await getPopularMovie()
      setTrandingMovies(res.results)
      setAiringToday(res?.data.results
      )
    }catch(err){
      console.log(err)
    }
  
  };

  

  useEffect(() => {
    popularApi();

  }, []);

  return (
    <context.Provider
      value={{
        trandingMovies,
        setTrandingMovies,
        datialS,
        setDatialS,
        upcoming,
        setUpcoming,
        cast,
        setCast,
        popular,
        setPopular,
        topRated,
        setTopRated,
        airingToday,
        setAiringToday,setLoading,
        loading,
        getTvInfo,
        setGetTvInfo
    
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default ContextApiStates;
