'use client'

import React from 'react'
import "@styles/navbar.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className='navbar-container'>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
                <p className='home'>Home</p>
            </Link>
            <p className='home'>|</p>
            
            <Link href='/diary'>
                <p className='fetch'>Fetch</p>
            </Link>
        </div>
    )
}

export default Navbar