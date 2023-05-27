import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Logo.webp'
import Link from 'next/link'
import {BsCartDash, BsSearch} from 'react-icons/bs'
import Wrapper from './Wrapper'

const Navbar = () => {
  return (
    <Wrapper>
    <div  className=' flex justify-between h-24 items-center'>
        <div>
            <Image src={Logo} alt="Logo" />
        </div>
        <div className='flex gap-7 '>
            <Link href="/">Female</Link>
            <Link href="/">Male</Link>
            <Link href="/">Kids</Link>
            <Link href="/">All Products</Link>
        </div>

        <div className='flex items-center gap-2'>
            <BsSearch/>
            <input className='border border-gray-500 w-[300px] h-7 rounded-md' type="text"  placeholder='Search something...'/>
        </div>
        <div className='bg-gray-300 relative rounded-full w-[50px] h-[50px] flex items-center justify-center'>
            
            <BsCartDash className='text-xl' />
            <div className='bg-red-700 w-5 h-5 text-white text-sm rounded-full flex justify-center items-center absolute top-1 left-7 '>5</div>
        </div>
    </div>
    </Wrapper>
  )
}

export default Navbar