import React from 'react'
import googlePlay from '../assets/Frame 705.png'
import appleStoreLogo from '../assets/Apple_logo_black logo.png'
import heroImg from '../assets/Picture+floating cards.png'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1440px] mx-auto mt-10 px-6'>
           <div className='grid md:grid-cols-2 gap-4'>
              <div  data-aos='fade-up' className='mt-8 mx-auto md:text-left text-center'>
                <h1 className='md:text-[4.1875rem] sm:text-5xl text-4xl text-[#172E80] font-medium'>Pay, Invest, Save<br />your Cash with a<br /> single bank</h1>
                <p className='md:text-2xl text-xl text-[#777777] py-4'>Fintekk is the bank that does it all. Manage everything directly and easy with fintekk.</p>
                <button className='py-3 px-6  border border-[#2E5CFF] rounded-xl font-medium mt-4'>Sign Up for Free</button>
                <div className='py-6 md:flex gap-4'>
                    <div className='flex justify-center py-2'>
                    <button className='flex gap-2 items-center py-3 px-4 border border-[#3A3A3A80] bg-transparent text-[#3A3A3A80] rounded-2xl font-medium capitalize mx-'>
                       <img src={googlePlay} alt='' />
                       <p>Get on Android</p>
                    </button>
                    </div>
                    <div className='flex justify-center py-2'>
                    <button className='flex gap-2 items-center py-3 px-4 border border-[#3A3A3A80] bg-transparent text-[#3A3A3A80] rounded-2xl font-medium capitalize'>
                       <img src={appleStoreLogo} alt='' />
                       <p>Get on iphone</p>
                    </button>
                    </div>

                </div>
              </div>
              <div 
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="3000">
                 <img src={heroImg} alt='hero-img' className=''style={{maxWidth: '100%'}}/>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Hero