
 import React from 'react'
 import { useContext } from 'react'
 import {context} from '../Contaxt/ContaxtApi'
 import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import {LuUsers } from 'react-icons/lu';
import  imageNotFound from "../assets/imageNotFound.jpg"

 
 export const Cast = () => {

     const {cast}=useContext(context)
   
  

     const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 8,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8,
          
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

   return (
   <>


<div className='text-white  text-3xl      ml-10 py-6  flex gap-4 '>  <LuUsers color='red' />   Cast </div>

  <Carousel
        responsive={responsive}
        transitionDuration={100}
        containerClass="carousel-container"
        customTransition="all 1sec"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        infinite={true}
      >
        {cast.map((item) => {
         
         const castImage= item.profile_path === null ?  imageNotFound : `https://image.tmdb.org/t/p/w500${item.profile_path  }`
        
          return (
            <React.Fragment key={item.id}>
              <div >
                <CastCarousel
                  castPic={castImage}
                  name={item.original_name}
                  
               
                />
              </div>
            </React.Fragment>
          );
        })}
      </Carousel>   
    
   </>
   )
 }



 const CastCarousel=({name,castPic})=>{
   


return<>

<div className=' flex  flex-wrap  '> 
<div className='w-28   text-center   flex  flex-wrap   ml-10  mt-10'> <img   className=' h-28  object-cover  cursor-pointer   transform transition duration-500 hover:scale-110     hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]   rounded-[50%]    w-28' src={castPic} alt="pic" />
      
      <span className='py-3  text-white'> {name} </span>
       </div>  
</div>
</>


}
 