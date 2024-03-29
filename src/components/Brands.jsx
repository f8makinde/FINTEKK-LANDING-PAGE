import React from 'react'
import bloomberg from '../assets/bloomberg logo.png'
import cbnc from '../assets/CNBC logo.png'
import forbes from '../assets/Forbes logo.png'
import stripe from '../assets/stripe logo.png'
import quartz from '../assets/Quartz logo.png'

const Brands = () => {
  return (
    <div className='w-full bg-[#FBFBFB]'>
        <div className='max-w-[1440px] mt-16 p-6 mx-auto'>
             <div className='flex items-center justify-between' style={{ overflow: 'auto',
  whiteSpace: 'nowrap', gap:24}} >
                <img src={bloomberg} alt='bloomberg logo'  className='md:max-w-[100%]'  data-aos="fade-up"  data-aos-duration="3000" />
                <img src={cbnc} alt='cbnc-logo'  className='md:max-w-[100%]'  data-aos="fade-down"  data-aos-duration="3000"/>
                <img src={forbes} alt='forbes logo'  className='md:max-w-[100%]'  data-aos="fade-up"  data-aos-duration="3000"/>
                <img src={stripe} alt='stripe-logo'  className='md:max-w-[100%]'  data-aos="fade-down"  data-aos-duration="3000"/>
                <img src={quartz} alt='quartz-logo' className='md:max-w-[100%]' data-aos="fade-up"  data-aos-duration="3000"/>
             </div>
        </div>
    </div>
  )
}

export default Brands
