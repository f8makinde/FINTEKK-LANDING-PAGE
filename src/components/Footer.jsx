import React from 'react'
import { footerData } from './FooterData'
const Footer = () => {
  return (
    <div className='w-full bg-[#FBFBFB]'>
      <div className='max-w-[1440px] mx-auto px-4 py-14'>
         <div className='grid md:grid-cols-2 gap-4'>
            <div>
                <h1 className='text-[#172E80] md:text-[38px] text-[28px] font-medium'>Fintekk</h1>
                <p className='text-[#777777] text-xl'>Fintekk is the bank that does it all.Manage </p>
                <p  className='text-[#777777] text-xl'>everything directly and easy with fintekk.</p>
            </div>
          <div className='grid lg:grid-cols-4 grid-cols-2 gap-2'>
              {footerData.map((footerLists) => {
                const {title, list} = footerLists
                return(
                    <div>
                 <h1 className='text-xl text-[#172E80] font-medium'>{title}</h1>
                 <ul className='flex flex-col gap-2'>
                   {list.map((list) => {
                       return <li className='text-xl text-[#172E80]'>{list}</li>
                   })}
                     </ul>  
                    </div>
                 
                )
              })}
          </div>

         </div>
         <div className='text-xl text-[#172E80] flex md:flex-row flex-col font-medium gap-2 justify-between py-10'>
              <h1>Copyright 2023 fintekk. All rights reserved</h1>
              <h1>Terms and Conditions, Privacy Policy</h1>
          </div>
      </div>
    </div>
  )
}

export default Footer
