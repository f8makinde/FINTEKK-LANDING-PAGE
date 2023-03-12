import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Offer = ({title, text, image}) => {
  return (
    <div className='flex flex-col px-8 py-10 gap-6'>
        <h1 className='text-[#172E80] text-[38px] font-medium'>{title}</h1>
        <p className='text-[#777777] text-xl'>{text}</p>
        <button className='bg-transparent text-[#2E5CFF] flex items-center gap-2 text-lg'>Read More<FaArrowRight /></button>
        <img src={image} alt={title} className='mx-auto'/>
    </div>
  )
}

export default Offer
