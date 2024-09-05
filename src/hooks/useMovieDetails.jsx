import {  getCaste, infocard } from "../Api/Api";
import { context } from "../Contaxt/ContaxtApi";
import { useContext, useEffect } from "react";

export const useMovieDetails = (paramsId) => {
  const { setDatialS, datialS ,setCast,setLoading} = useContext(context);

  const getMovieInfo = async(id) => {
    setLoading(true)
    
      try{
          
         const res= await infocard(id)
         setDatialS(res?.data)
         setLoading(false)

      }catch(error){
        console.log(error)
      }
  };


        const castApi= async(id)=>{
        
          setLoading(true)
          try {
            const response = await getCaste(id);
            setCast(response?.data?.cast);
            setLoading(false)
          } catch (error) {
            console.error("Failed to fetch cast:", error);
          }
        }

  



  useEffect(() => {
     if(paramsId){
      getMovieInfo(paramsId)
      castApi(paramsId)
     }
 
  }, []);

  return datialS
};




