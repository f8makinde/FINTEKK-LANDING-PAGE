import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
const FaqProps = ({text, all}) => {
    const [show, setShow] = useState(false)
  return (
    <div>
       <div className='flex justify-between py-6 px-4 border border-white items-center rounded-lg'>
           <h1 className='text-white text-2xl'>{text}</h1>

           <button onClick={() => setShow(!show)}> 
            {show ?  
    <FaAngleUp size={30}/> : <FaAngleDown className='text-white' size={30}/> 
              
              }
       
             
            </button>
          
          
         </div>
    </div>
  )
}

export default FaqProps
