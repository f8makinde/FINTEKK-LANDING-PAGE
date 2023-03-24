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
                <div className='bg-white px-12 py-6 flex flex-col space-y-2'>
                <p className='text-[#3A3A3A] text-xl'>{text}</p>
                <h1 className='text-[#172E80] text-2xl'>{name}</h1>
                <div>
                <img src={stars} alt={name} />
                </div>
            
                </div>
                <div className='flex flex-col justify-center w-14 items-center space-y-3'>
                   <FaArrowUp onClick={prev} size={20}/>
                  
                   <button className='py-2 px-4 rounded-full' onClick={handleChange}>{1}</button>
                    <button className='py-2 px-4 rounded-full' onClick={handleChange}>{2}</button>
                    <button className='py-2 px-4 rounded-full' onClick={handleChange}>{3}</button>
                   <FaArrowDown onClick={next} size={20} />
                </div>
        </div>
  )
}

export default Reviews
