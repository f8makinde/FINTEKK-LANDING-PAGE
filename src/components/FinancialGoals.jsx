import React from 'react'
import iphone from '../assets/Fintekk app- phone.png'
import FinancialGoalsProps from './FinancialGoalsProps'
const FinancialGoals = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1540px] px-2 py-32 mx-auto'>
        <div className='grid md:grid-cols-2 mx-auto overflow-hidden px-2 justify-between'>
            <div 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500">
            <img src={iphone} alt='iphone-img' className='mt-16 md:max-w-full mx-auto object-cover' />
            </div>

        <div className='flex flex-col space-y-12 grid-cols-3 overflow-hidden'   
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500">
            <h1 className='text-[#172E80] md:text-[50px] text-[28px] font-medium'>Start the journey to reach your financial goals today.</h1>
            <FinancialGoalsProps num='01' title='Download the mobile app' text='Sign up for an account with your name, email  and phone number.'/>
            <FinancialGoalsProps num='02' title='Create a free account' text='Sign up for an account with your name, email  and phone number.'/>
            <FinancialGoalsProps num='03' title='Add a payment method' text='Using your debit card, bank account, QR code, perform your first transaction.'/>
            <button className='text-xl rounded-2xl px-8 mx-auto py-4'>Download Now</button>
        </div>
     
        </div>
        </div>
      </div>
  )
}

export default FinancialGoals
