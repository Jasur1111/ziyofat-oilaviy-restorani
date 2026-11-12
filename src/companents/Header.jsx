import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className='w-full h-20 border-solid border-black border-1 bg-[#123C2F] text-white'>
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
          <p>+998-xx-xxx-xx-xx</p>
        </div>
      </div>

      <nav className='md:hidden flex flex-wrap justify-center gap-3 px-2 text-xs'>
        <Link to="/">Asosiy Sahifa</Link>
        <Link to="/about">Biz Haqimizda</Link>
        <Link to="/europa">Yevropa Taomlari</Link>
        <Link to="/national">Milliy Taomlar</Link>
        <Link to="/salads">Salatlar</Link>
        <Link to="/drinks">Ichimliklar</Link>
      </nav>
    </header>
  )
}

export default Header