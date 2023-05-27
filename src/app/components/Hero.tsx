import React from 'react'
import Wrapper from './Wrapper'

const Hero = () => {
  return (
    <Wrapper>
    <div className='grid grid-cols-2'>
        {/* Hero Left Column Start*/}
        <div className='flex flex-col mt-16 gap-8'>
            <div className='bg-[#E1EDFF] w-28 h-10 flex items-center justify-center font-bold text-blue-600 rounded-md'>Sale 70%</div>
            {/* <h1 className='text-[66px]  font-bold'>An Industrial Take on Streetwears</h1> */}
            <h1 className='text-7xl font-bold'>An Industrial Take on Streetwears</h1>
            <p>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <p>Start Shopping</p>

        </div>
        {/* Hero Right Column Start */}
        <div>2</div>
        {/* Hero Right Column END*/}
    </div>
    </Wrapper>
  )
}

export default Hero