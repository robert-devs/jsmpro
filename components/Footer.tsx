import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white flex justify-between items-center w-full gap-y-10 border-t border-black-400 bg-black px-20 py-12 max-md:flex-col'>
        <p>Copyright @ 2023 JS Mastery Pro | All rights Reserved</p>
        <div className="flex gap-x-9">
            <Link href="terms-of-use">
                Terms & Conditions Apply
            </Link>
            <Link href="/privacy-policy">
                Terms & Policy
            </Link>
        </div>
    </footer>
  )
}

export default Footer