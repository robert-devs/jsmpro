import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white'>
        <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 md:px-16">
            <Link href="/" >
                <Image 
                    src="/jsm-logo.svg"      
                    alt ="logo image"
                    width={55}
                    height={55}
                />
            </Link>
            <Image 
                src="/hamburger-menu.svg"      
                alt ="hambuger image"
                width={40}
                height={40}
                className='block md:hidden'
            />
            <ul className='flex-center justify-center max-md:hidden md:gap-x-10 '>
                <li className='body-text text-gradient_blue-purple !font-bold'>
                    <Link href="https://jmastery.pro/next13" target='_blank'>
                        Next.js 13.5 course
                    </Link>     
                </li>
                <li className='body-text text-gradient_blue-purple !font-normal'>
                    <Link href="https://jmastery.pro/masterclass" target='_blank'>
                        masterclass
                    </Link>     
                </li>


            </ul>
        </div>
    </nav>
  )
}

export default Navbar