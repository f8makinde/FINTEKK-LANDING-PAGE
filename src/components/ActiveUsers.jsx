import React from 'react'
import CountUp from 'react-countup';
const ActiveUsers = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1440px] mx-auto py-24'>
        <div className='center md:text-[3rem] sm:text-[2.5rem] text-[1.7rem] font-medium flex text-center justify-center px-2'>
          <h1 className='text-[#172E80] font-bold'>More than <span className='text-[#2E5CFF]'><CountUp
  start={0}
  end={10000}
  duration={2.75}
  separator=","
  enableScrollSpy
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
  
></CountUp></span> active users <br />trust Fintekk</h1>

        </div>
        </div>
    </div>
  )
}

export default ActiveUsers
