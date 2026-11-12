import React from 'react'
import Footer from '../companents/Footer'

const Salads = () => {
  return (
    <div>
       <div className="w-full bg-[#173D30]  text-white">
      <div className='text-white w-full max-w-[1500px] mx-auto p-4 md:p-6'>

  <p>
    <h1 className='font-bold text-2xl md:text-3xl flex justify-center text-center'> Salatlar haqida umumiy ma'lumot</h1>
    <br />
    Salat — turli xil sabzavotlar, mevalar, ko‘katlar, go‘sht, baliq, tuxum, pishloq va boshqa mahsulotlardan tayyorlanadigan mazali taomlardan biridir. Salatlar qadim zamonlardan beri insonlar tomonidan iste'mol qilib kelinadi. Dastlab qadimgi yunonlar va rimliklar ko‘katlar, sabzavotlar hamda zaytun moyidan foydalanib salatlar tayyorlashgan. Vaqt o‘tishi bilan salatlar dunyoning turli mamlakatlariga tarqalib, har bir xalq o‘z milliy taomlariga mos ravishda yangi turlarini yaratgan.
    <br /><br />
    Bugungi kunda salatlarning juda ko‘p turlari mavjud. Ular orasida sabzavotli, mevali, go‘shtli, baliqli, pishloqli va aralash salatlar alohida o‘rin egallaydi. Sabzavotli salatlar pomidor, bodring, karam, sabzi va turli ko‘katlardan tayyorlanadi. Mevali salatlarda olma, banan, apelsin, kivi, uzum kabi mevalardan foydalaniladi. Go‘shtli salatlar esa tovuq yoki mol go‘shti, tuxum va boshqa mahsulotlar bilan tayyorlanadi.
    <br /><br />
    Dunyoda mashhur bo‘lgan salatlardan Olivye, Sezar, Grek va boshqa salatlarni misol qilish mumkin. Olivye salati kartoshka, sabzi, tuxum, no‘xat, kolbasa va mayonezdan tayyorlanadi. Sezar salati tovuq go‘shti, salat barglari, pishloq, suxarik va maxsus sous bilan tayyorlanadi. Grek salatiga pomidor, bodring, zaytun, pishloq va zaytun moyi qo‘shiladi. O‘zbek milliy oshxonasida esa achchiq-chuchuk salati juda mashhur bo‘lib, u pomidor, piyoz va ko‘katlardan tayyorlanadi.
    <br /><br />
    Xulosa qilib aytganda, salatlar kundalik ovqatlanishimizda, restoran menyularida va bayram dasturxonlarida muhim o‘rin egallaydi. Ularning turli xil ko‘rinishlari, mazasi va tayyorlanish usullari har bir insonning didiga mos keladi. Salatlar taomlanishni yanada rang-barang, mazali va foydali qiladi.
  </p>
</div>
      <div className="w-full  px-5 py-6 bg-[#173D30] mt-4">
        <div className="flex w-full items-center gap-3 bg-[#173D30]">
          <div className="h-px flex-1 bg-orange-300 "></div>

          <h2 className="whitespace-nowrap text-xl font-semibold text-white md:text-2xl">
            Salatlar
          </h2>

          <div className="h-px flex-1 bg-orange-300"></div>
        </div>
      </div>
      <div className="px-5 py-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogrLuoXczgOkfBy3EYDIBRAZTxH_z5cE2M2b7xEbd0SZNOuMD-Yma1Ds&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300  group-hover:text-orange-600">
            Цезарь
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://fissman.ru/upload/iblock/d50/03a3gc5r4j1181zw1ai0drbtugd18c68/grecheskij_salat.jpeg"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Греческий
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn37mX6hfaDAtXwoaCES1L2sYcwwwfYrqNmzXKHUUAeQ&s"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Капрезе
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoj925LOT6FT9le-ZeTrc5WFBj1ZsAtglVVJo3sLChfSOk1KrTLna0do8&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Нисуаз
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
        </div>

      </div>
      <div className="px-5 py-4 mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://buy.am/media/image/9a/c7/29/Tabule-Masoor.webp"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Табуле
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpmhCHazf-pLotntUbVz_GivB_zcEnTaHX0bF-z67nRja1iO5QslbWYUY&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Коул-Слоу
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_D4ZTWrn4_xyy_tiOX47g4wF6o_Kp78IJATV_BgSfKdnybBZQMdi03ww&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Мимоза
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAWKfPpccP4yS1oTOB9drsPU82zkjhTO9u-1SZPErfeeDgQga7gd-8io&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Фруктовый
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
        </div>

      </div>
     <div className='bg-[#173D30] p-0 '>
      <Footer/>
    </div>
    
    </div>  
   
    </div>

   
     
  )
}

export default Salads