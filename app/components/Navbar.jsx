import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from './help-desk.png'

const Navbar = () => {
  return (
    <nav>
        <Image 
          src={logo}
          alt='logo'
          height={50}
          quality={100}
          placeholder='blur'
        />
        <h1>Help Desk</h1>
        <Link href='/'>Dashboard</Link>
        <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}

export default Navbar