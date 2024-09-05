import React, { useContext } from 'react'
 import {HomeCarousel} from '../HomeCarousel/HomeCarousel'
 import  Popular  from  '../Page/MovieList/Popular'
 import  TopRated  from  '../Page/MovieList/TopRated'
import AiringToday from '../Page/AiringToday/AiringToday'
import { context } from '../Contaxt/ContaxtApi'
import Loader from '../Component/Loader/Loader'


export const HomeRoutes = () => {
  const {loading}=useContext(context)
  return (
   <>
      { loading ? <Loader/> : (<>
        <HomeCarousel     />
     <AiringToday/>
     <Popular/>
      <TopRated/>
      
       </>)}
 
   
   </>
  )
}
