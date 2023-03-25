import React from 'react'
import questionImg from '../assets/Illustration.png'
import FaqProps from './FaqProps'

const Faq = () => {
  
  return (
    <div className='w-full'>
        <div className='max-w-full'>
        <div className='flex lg:flex-row flex-col-reverse'>
            <div className='bg-[#2E5CFF] w-full py-24 px-3'>
                <div className=' max-w-[600px] mx-auto space-y-8' data-aos="fade-up"
     data-aos-duration="3000">
                <h1 className='md:text-[67px] text-white font-medium text-[38px]'>FAQs</h1>
           <FaqProps text='Is fintekk’s security guaranteed?' all='Lorem ipsum dolor sit amet consectetur adipisicing elit.'/>
           <FaqProps text='How to activate Fintekk account' all='Sit esse dolorem temporibus nam, quasi explicabo numquam culpa voluptate'/>
           <FaqProps text='What should i do if i forget my pin' all='aut architecto expedita in, molestiae, omnis veniam libero nisi laborum rerum cupiditate?'/>
                </div>

            </div>
           <img src={questionImg} alt='question-img'/>
        </div>
      </div>
      </div>
 
  )
}

export default Faq
