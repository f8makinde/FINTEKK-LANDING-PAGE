import React from 'react'

const FinancialGoalsProps = ({num, title, text}) => {
  return (
    
      <div className='flex space-x-12'>
         <div>
            <h2 className='text-[#2E5CFF] text-[28px]'>{num}</h2>
            <div class="border-l-2 border-blue-900"></div>
         </div>
         <div className='flex flex-col gap-2'>
            <h1 className='text-[#172E80] text-[28px] font-medium'>{title}</h1>
            <p className='text-[#777777] text-[28px]'>{text}</p>     
         </div>
      </div>
  )
}

export default FinancialGoalsProps
