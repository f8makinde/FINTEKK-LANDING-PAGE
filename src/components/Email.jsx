import React from 'react'

const Email = () => {
  return (
    <div className='w-full my-16 md:px-2 px-10'>
      <div className='max-w-[1440px] mx-auto px-2 bg-[#2E5CFF] text-white rounded-3xl py-14'>
         <div className='flex flex-col space-y-3 md:text-center md:px-2 px-4'>
            <h1 className='md:text-[50px] text-[38px] font-semibold'>Start growing <br/>your wealth today</h1>
            <div className='bg-transparent flex md:flex-row flex-col border border-[#FFFFFF] mx-0 md:mx-auto md:rounded-3xl rounded-xl'>
                <input type='email' placeholder='Enter your email address' className='bg-transparent  text-base outline-none text-white py-3 placeholder-white md:px-28 indent-3'/>
                <button className='md:flex hidden text-[#172E80] font-medium bg-white py-3 w-28 rounded-3xl indent-6'>Sign up</button>
             
            </div>
            <button className='md:hidden flex text-[#172E80] bg-white py-3 w-28 font-medium rounded-xl indent-6'>Sign up</button>
         </div>
      </div>
    </div>
  )
}

export default Email
