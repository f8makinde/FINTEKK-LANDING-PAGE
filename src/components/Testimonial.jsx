import React from 'react'
import Reviews from './Reviews'


const Testimonial = () => {
  return (
    <div className='w-full bg-[#FBFBFB] my-24 py-10'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='grid md:grid-cols-2 mx-auto md:space-x-6 px-6'>

            <div className='md:text-left text-center py-2'>
        <h1 className='text-[#3A3A3A] text-2xl font-medium'>TESTIMONIALS</h1>
            <h1 className='md:text-5xl text-[38px] font-medium text-[#172E80]'>What Our Customers Say About Us</h1>
         </div>
         <div>
            <Reviews />
         </div>

      </div>
      </div>
    </div>
  )
}

export default Testimonial
