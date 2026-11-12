import React, { useState } from 'react'
import { Link } from 'react-router'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='relative w-full h-20 border-solid border-black border-1 bg-[#123C2F] text-white'>
      <div className='flex items-center justify-between mt-4 px-4'>
        <div>
          <img src="" alt="" />
        </div>

        <nav className='hidden md:flex gap-4 lg:gap-10 justify-center text-sm lg:text-base'>
          <Link to="/">Asosiy Sahifa</Link>
          <Link to="/about">Biz Haqimizda</Link>
          <Link to="/europa">Yevropa Taomlari</Link>
          <Link to="/national">Milliy Taomlar</Link>
          <Link to="/salads">Salatlar</Link>
          <Link to="/drinks">Ichimliklar</Link>
        </nav>

        <div className='hidden lg:block mr-4 text-xl font-bold'>
          <p>test</p>
        </div>

        <button
          className='md:hidden text-3xl leading-none'
          onClick={() => setOpen(!open)}
          aria-label='Menyu'
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className='md:hidden absolute top-full left-0 w-full z-50 flex flex-col gap-4 px-6 py-5 bg-[#123C2F] text-base'>
          <Link to="/" onClick={() => setOpen(false)}>Asosiy Sahifa</Link>
          <Link to="/about" onClick={() => setOpen(false)}>Biz Haqimizda</Link>
          <Link to="/europa" onClick={() => setOpen(false)}>Yevropa Taomlari</Link>
          <Link to="/national" onClick={() => setOpen(false)}>Milliy Taomlar</Link>
          <Link to="/salads" onClick={() => setOpen(false)}>Salatlar</Link>
          <Link to="/drinks" onClick={() => setOpen(false)}>Ichimliklar</Link>
        </nav>
      )}
    </header>
  )
}

export default Header