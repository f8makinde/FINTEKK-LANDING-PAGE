import React, { useState } from 'react'
import { data } from './ReviewsData'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";


const Reviews = () => {
  
    const [index, setIndex] = useState(0)
    const {text, name, stars} = data[index]
    const newNumber = (num) => {
        if(num > data.length - 1){
            return 0
        }
        else if(num < 0){
            return data.length - 1
        }
        return num
    }
 
    const prev = () => {
        setIndex((index) => {
            const newIndex = index - 1
            return newNumber(newIndex)
        })

    }
    const next = () => {
        setIndex((index) => {
        const newIndex = index + 1
        return newNumber(newIndex)
        })
    }
    const handleChange = () => {   
        setIndex((index) => {
             const newIndex = index + 1
             return newNumber(newIndex)
        })
        }
  return (      
       <div className='flex flex-col md:flex-row gap-2'>
                <div className='bg-white px-12 py-6 flex flex-col space-y-2  md:text-left text-center'>
                <p className='text-[#3A3A3A] text-xl'>{text}</p>
                <h1 className='text-[#172E80] text-2xl'>{name}</h1>
                <div className='md:mx-0 mx-auto'>
                <img src={stars} alt={name} />
                </div>
            
                </div>
                <div className='flex flex-row md:flex-col mx-auto justify-center w-14 gap-3 items-center'>
                   <FaArrowUp onClick={prev} size={20} className='text-[#172E80]'/>
                  
                   <button className='px-2 rounded-full text-[#3A3A3A] focus:text-white focus:bg-[#172E80] bg-transparent' onClick={handleChange}>{1}</button>
                    <button className='px-2 rounded-full  focus:text-white focus:bg-[#172E80] text-[#3A3A3A] bg-transparent' onClick={handleChange}>{2}</button>
                    <button className='px-2  focus:text-white  active:text-white active:bg-[#172E80] focus:bg-[#172E80] rounded-full text-[#3A3A3A] bg-transparent' onClick={handleChange}>{3}</button>
                   <FaArrowDown onClick={next} size={20} className='text-[#172E80]'/>
                </div>
        </div>
  )
}

export default Reviews
