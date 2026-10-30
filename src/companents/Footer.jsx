import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black w-full p-14 mt-10'>
            <div className='flex justify-around items-center'>
                <div className='text-2xl'>
                    <h1 className='text-5xl text-[#D6AD60] font-extrabold pb-4'>Ziyofat</h1>
                    <p className='text-white'>Milliy va Yevropa taomlari</p>
                    <p className='text-white'>Bo'stonliq tumani</p>
                </div>
                <div className='text-2xl'>
                    <p className='text-white'>Biz bilan bog'laning</p>
                    <p className='text-white'>Telefon raqamimiz: 93-273-58-38</p>
                    <p className='text-white'>Instagram sahifamiz</p>
                    <p className='text-white'>Telegram kanalimiz</p>
                </div>
            </div>
           <div className='bg-[#D6AD60] h-[2px] mt-4'></div>
            <div className='flex justify-between mt-10 text-2xl'>
                <div>
                    <p className='text-white'>2026 ZIYOFAT</p>
                </div>
                <div>
                    <p className='text-[#D6AD60]'>Barcha Huquqlar Himoyalangan</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer