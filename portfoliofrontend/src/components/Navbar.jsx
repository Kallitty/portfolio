import React from 'react'

import logo from '../assets/samLogo.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='w-20' src={logo} alt='logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href='https://www.linkedin.com/in/samueljoshuakallitty44'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-600 transition'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/Kallitty'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-800 transition'
        >
          <FaGithub />
        </a>
        <a
          href='https://github.com/Kallitty'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-pink-600 transition'
        >
          <FaInstagram />
        </a>
        <a
          href='https://twitter.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400 transition'
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
