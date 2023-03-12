import React from 'react'
import Offer from './Offer'
import cash from '../assets/bro.png'
import analysis from '../assets/Frame 721 (1).png'
import savingBox from '../assets/Frame 720 (1).png'
const OurServices = () => {
  return (
    <div className='w-full bg-[#FBFBFB] py-10'>
        <div className='text-center px-2 mx-auto flex flex-col gap-3'>
            <h1 className='text-[#3A3A3A] text-[2xl] text-2xl pt-10'>OUR SERVICES</h1>
            <h2 className='text-[#172E80] md:text-5xl text-4xl font-bold py-2'>What we offer</h2>
            <p className='text-[#777777] text-xl'>We help individuals become more flexible and responsible with their finances and <br />handle  payments smooth and easy. </p>
        </div>
        <div className='max-w-[1440px] mx-auto mt-12'>
            <div className='grid md:grid-cols-3 px-4 sm:px-2 justify-center gap-16'>
                <div className='bg-[#F4F6FF] rounded-[30px]'>
                  <Offer title='Easy Payment' text='Stress-free payment for all transactions that you do at any time.' image={cash}/>
                </div>
                <div className='bg-[#FEF7F1] rounded-[30px]'>
                <Offer title='Investments' text='Grow your money by investing in pre-vetted investment opportunities.' image={analysis}/>
                </div>
                <div className='bg-[#F4F6FF] rounded-[30px]'>
                <Offer title='Fixed Savings' text='Build a dedicated savings faster on your terms automatically or manually.' image={savingBox}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices
