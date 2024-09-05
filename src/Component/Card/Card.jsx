import React from 'react';
import { image } from "../../Config";
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router';

export const Card = ({ images, id, title, date,rating,type }) => {
    const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/showinfo/${id}?reqFor=${type}`)} className="relative w-60 h-80 mx-auto rounded-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:-translate-y-2 duration-300 ease-in-out">
      <img
        className="w-full h-full object-cover rounded-md"
        src={`${image}${images}`}
        alt="imagePoster"
      />
      
      <div className="absolute inset-0 bg-gray-800 bg-opacity-70 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-end justify-between px-4 py-2">
      <div className=' w-full'>
      <div className="text-white text-sm font-semibold mb-1">{title}</div>
        <div className=' flex  justify-between items-center'>
        <div className="text-white flex items-end gap-2 text-xs font-semibold"><AiFillStar size={17} className="text-yellow-400 mt-1" /> {Math.floor(rating * 10) / 10}</div>
        <div className="text-white text-xs font-semibold">{date}</div>
        </div>
      </div>
      </div>
    </div>
  );
};
