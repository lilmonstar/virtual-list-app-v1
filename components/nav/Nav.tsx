'use client'

import Link from 'next/link'
import { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Nav = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <>
        <div className='w-full bg-[#131921] text-white flex items-center justify-between p-2'>
            <div>
                <Link href="/" className='p-1 border-[1px] border-[#131921] hover:border-white'>Product Library</Link>
            </div>
            <div className='flex gap-4 md:gap-10 items-center'>
                <Link href="/" className='hidden md:block p-1 border-[1px] border-[#131921] hover:border-white'>Home</Link>
                <Link href="/about" className='hidden md:block p-1 border-[1px] border-[#131921] hover:border-white'>About</Link>
                <Link href="/products" className='hidden md:block p-1 border-[1px] border-[#131921] hover:border-white'>Products</Link>
                <AiOutlineMenu onClick={()=>setOpenSidebar(true)} className='block md:hidden cursor-pointer'/>
            </div>
        </div>
        <div className={openSidebar?'fixed w-full h-screen bg-gray-200/40 top-0 right-0 z-[95]': ''}>
            <div className={openSidebar?'fixed w-[60%] md:w-[45%] lg:w-[40%] h-screen top-0 right-0 text-white bg-[#131921] z-[100] p-4 ease-in duration-500' :
                'fixed w-[60%] md:w-[45%] lg:w-[40%] h-screen top-0 right-[-100%] text-white bg-[#131921] z-[100] p-4 ease-in duration-500'}>
                <AiOutlineClose size={20} onClick={()=>setOpenSidebar(false)} className='cursor-pointer hover:scale-105'/>
                <div className='flex flex-col gap-10 items-center justify-center'>
                    <Link href="/" onClick={()=>setOpenSidebar(false)} className='block p-1 border-[1px] border-[#131921] hover:border-white'>Home</Link>
                    <Link href="/about" onClick={()=>setOpenSidebar(false)} className='block p-1 border-[1px] border-[#131921] hover:border-white'>About</Link>
                    <Link href="/products" onClick={()=>setOpenSidebar(false)} className='block p-1 border-[1px] border-[#131921] hover:border-white'>Products</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav