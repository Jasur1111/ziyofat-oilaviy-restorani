import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    
  return (
    <header className='w-full h-20 border-solid border-black border-1 bg-[#123C2F] text-white'>
        <div className='flex items-center justify-between mt-4'>
            <div>
                <img src="" alt="" />
            </div>
            <nav className='flex gap-10 justify-center'>
                <Link to="/">Asosiy Sahifa</Link>
                <Link to="/about">Biz Haqimizda</Link>
                <Link to="/europa">Yevropa Taomlari</Link>
                <Link to="/national">Milliy Taomlar</Link>
                <Link to="/salads">Salatlar</Link>
                <Link to="/drinks">Ichimliklar</Link>
            </nav>
            <div className='mr-4 text-2xl font-bold'>
                <p>+998-xx-xxx-xx-xx</p>
            </div>
        </div>
    </header>
  )
}

export default Header