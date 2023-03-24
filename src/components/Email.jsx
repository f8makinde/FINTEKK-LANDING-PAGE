import React from 'react'

const Email = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1440px] mx-auto px-2 py-6 bg-[#2E5CFF] text-white'>
         <div className='flex flex-col space-y-6 md:text-center text-left items-center'>
            <h1 className='md:text-[50px] text-[38px]'>Start growing your wealth today</h1>
            <div className='bg-transparent flex md:flex-row flex-col'>
                <input type='email' placeholder='Enter your email address' className='bg-transparent text-white px-20 py-3 border rounded-tl-3xl rounded-bl-3xl border-[#FFFFFF]'/>
                <button className='text-black bg-white py-3 w-28 rounded-tr-3xl rounded-br-3xl'>Sign up</button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Email
