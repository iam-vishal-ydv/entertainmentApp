import { useContext, useEffect } from "react";
 import {context} from '../Contaxt/ContaxtApi'

     

    export const useMovieCard=()=>{
       const {setPopular,setTopRated}=useContext(context)
          
          const popularMovieApiFun=()=>{
        
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTY4N2JlMTUzZDA4ZmM4OWI4MDcwOTIxNzY3NjY3ZSIsInN1YiI6IjYzYmQ3NjgyNWJlMDBlMDBiMDkwMTBiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CxXHekOJaBQOfRKV-wChJKPtsF_NMsgXul9XzsGl01I'
                }
              };
              
              fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
                .then(response => response.json())
                .then(response => setPopular(response?.results))
                .catch(err => console.error(err));
          
   
        
        }


            const topRated=()=>{
            
            
              const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTY4N2JlMTUzZDA4ZmM4OWI4MDcwOTIxNzY3NjY3ZSIsInN1YiI6IjYzYmQ3NjgyNWJlMDBlMDBiMDkwMTBiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CxXHekOJaBQOfRKV-wChJKPtsF_NMsgXul9XzsGl01I'
                }
              };
              
              fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
                .then(response => response.json())
                .then(response => setTopRated(response?.results))
                .catch(err => console.error(err));
               
            
            }
               

             useEffect(()=>{
            
                popularMovieApiFun()
                topRated()
            
            
            },[])
    
        return  <>
        
        
        
        </>


        
        
        
        
        
        
    
    
    }