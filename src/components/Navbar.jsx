import React, { useState } from 'react'
import LogoImg from '../assets/Fintekk.png'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <div className='w-full shadow-lg'>
        <div className='max-w-[1440px] mx-auto p-4 gap-8'>
            <div className='md:flex hidden items-center justify-between'>
            <img src={LogoImg} alt='logo-img' />
            <ul className='flex items-center'>
                <li className='px-3 lg:text-2xl md:text-xl text-[#171717]'><a href=''>Home</a></li>
                <li className='px-3 lg:text-2xl md:text-xl text-[#171717]'><a href=''>About</a></li>
                <li className='px-3 lg:text-2xl md:text-xl text-[#171717]'><a href=''>FAQs</a></li>
                <li className='px-3 lg:text-2xl md:text-xl text-[#171717]'><a href=''>Contact Us</a></li>
            </ul>
            <div className='flex gap-6'>
                <div>
                <button className='py-3 px-6  border border-[#2E5CFF] bg-transparent text-[#2E5CFF] rounded-xl font-medium'><a href=''>Login</a></button>
                </div>
                <div>
                <button className='py-3 px-6  border border-[#2E5CFF] rounded-xl font-medium'><a href=''>Sign Up for Free</a></button>
                </div>
                </div>
            </div>
           
                <div className='md:hidden flex justify-between p-4'>
                <div>
                    <img src={LogoImg} alt='logo-img' className='w-[4.25rem] object-cover'/> 
                 </div>
                 <div onClick={() => setShowNav(!showNav)} className=''>
                 {showNav ? <AiOutlineClose className= 'text-[#172E80]'size={20}/> : <FaBars className= 'text-[#172E80]'size={20}/>}
                </div>
                </div>
          
        <div className={showNav ? 'md:hidden flex flex-col justify-between px-4' : 'hidden'}> 
            <ul className='py-2'>
                <li className='py-2 lg:text-lg text-[#171717]'><a href=''>Home</a></li>
                <li className='py-2 lg:text-lg text-[#171717]'><a href=''>About</a></li>
                <li className='py-2 lg:text-lg text-[#171717]'><a href=''>FAQs</a></li>
                <li className='py-2 lg:text-lg text-[#171717]'><a href=''>Contact Us</a></li>
            </ul>
            <div className='flex flex-wrap gap-6'>
                <button className='w-full py-3 px-4  border border-[#2E5CFF] bg-transparent text-[#2E5CFF] rounded-xl font-medium'><a href=''>Login</a></button>
                <button  className='w-full py-3 px-6  border border-[#2E5CFF] rounded-xl font-medium'><a href=''>Sign Up for Free</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
