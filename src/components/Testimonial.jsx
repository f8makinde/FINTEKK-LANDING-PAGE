import React from 'react'
import Reviews from './Reviews'


const Testimonial = () => {
  return (
    <div className='w-full bg-[#FBFBFB] my-24 py-10'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='grid md:grid-cols-3 mx-auto gap-6'>
         <div className='flex flex-col space-y-2'>
            <h1 className='text-[#3A3A3A] text-2xl font-medium'>TESTIMONIALS</h1>
            <h className='text-5xl text-[#172E80]'>What Our Customers Say About Us</h>
         </div>
         <div className='col-span-2'>
            <Reviews />
         </div>

      </div>
      </div>
    </div>
  )
}

export default Testimonial
