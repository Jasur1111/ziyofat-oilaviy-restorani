import React from 'react'
import { Link } from 'react-router'
import ziyofat from '../assets/ziyofat1.png'
import Footer from '../companents/Footer'
const Home = () => {
  return (
    <div className='bg-[#173D30] text-white'>
      <div>
        <img className='h-[800px]' src={ziyofat} alt="" />
      </div>
      <div className='mt-30 bg-[#173D30]'>
        <div className="w-full  px-5 py-6 mt-4 bg-[#173D30]">
          <div className="flex w-full items-center gap-3 ">
            <div className="h-px flex-1 bg-orange-300"></div>

            <h2 className="whitespace-nowrap text-xl font-semibold text-black md:text-2xl">
              Yevropa Taomlari
            </h2>

            <div className="h-px flex-1 bg-orange-300"></div>
          </div>
        </div>
        <div className="px-5 py-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
              <img
                src="https://www.recipetineats.com/tachyon/2026/03/French-pork-schnitzel-1.jpg"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Туй оши 1кг
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSDgODGpqR6quMdFiIiEc03evyzAD8DE2jz9cE3EQpDYxB5baLeoSn88&s=10"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Туй оши 2 кг
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGE979CppZXR0eLgA1cfwMZ79CPklxrIgYUDW1wM2eM7LcmG866yAG0zr&s=10"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Туй ош порция
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoqetI_Ah0_dxGwA_SPvNNpLQLw41OMpnHsxPLY6H8dmVCoo16EXQkBfE&s=10"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Туй ош 0,7 порция
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>

            <Link to="/more" className="group mx-auto flex w-[160px] items-center justify-center rounded-2xl border border-[#D4A64A] bg-[#123C2F] px-5 py-3 text-2xl font-bold text-white shadow-lg shadow-[#123C2F]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#F1CD79] hover:bg-[#1B513F] hover:text-[#F1CD79] hover:shadow-xl active:translate-y-0" >   Yana </Link>
          </div>

        </div>
        <div className="w-full bg-[#173D30] px-5 py-6">
          <div className="flex w-full items-center gap-3">
            <div className="h-px flex-1 bg-orange-300"></div>

            <h2 className="whitespace-nowrap text-xl font-semibold text-black md:text-2xl">
              Milliy Taomlar
            </h2>

            <div className="h-px flex-1 bg-orange-300"></div>
          </div>
        </div>
        <div className="px-5 py-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 mt-8">

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
              <img
                src="https://xabar.uz/static/crop/1/5/736_736_95_1547113144.jpg"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              To'y Oshi
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
              <img
                src="https://fort.crimea.com/catering/uploads/fotos/e03a97e9-c34a-11e9-9c76-54a05051519a_1.jpg"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Manti
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
              <img
                src="https://avatars.mds.yandex.net/get-altay/16411237/2a0000019c4d3cc935640c3d589eadc3f8a1/L_height"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Beshbarmoq
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
              <img
                src="https://www.centralasia-travel.com/uploads/gallery/1226/naryn-01.jpg"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Norin
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
            <Link to="/nat" className="group mx-auto flex w-[160px] items-center justify-center rounded-2xl border border-[#D4A64A] bg-[#123C2F] px-5 py-3 text-2xl font-bold text-white shadow-lg shadow-[#123C2F]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#F1CD79] hover:bg-[#1B513F] hover:text-[#F1CD79] hover:shadow-xl active:translate-y-0" >   Yana </Link>
          </div>

        </div>
        <div className="w-full bg-[#173D30] px-5 py-6">
          <div className="flex w-full items-center gap-3">
            <div className="h-px flex-1 bg-orange-300"></div>

            <h2 className="whitespace-nowrap text-xl font-semibold text-black md:text-2xl">
              Shashliklar
            </h2>

            <div className="h-px flex-1 bg-orange-300"></div>
          </div>
        </div>
        <div className="px-5 py-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 mt-8">

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wZWVyBONOjDtltN5l9lwDF41C4Ibbp3Wk5Takd6mZ8lJaFJ-hSopS3ce&s=10"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Mol Go'shtidan Shashlik
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5iaoqMqUX8jOLepxeXJzUa4D91jnmkFCM8s16-NiYqvv8jBC9kiarJgc&s=10"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Qo'y Go'shtidan Shashlik
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
              <img
                src="https://i.ytimg.com/vi/tuaRgi6-CZg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJshl1gz1cySLgR5ilrkrVMnbJGA"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              To'vuq Qanotidan Shashlik
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0qbbCeunupN_H3MRgS1w_XF4to1Vz11RZmQfUO1uU5NiZx4qYjz5D0Y&s=10"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Qiyma Shashlik
            </p>
            <p className="mt-1 text-xl text-gray-400">xxx г</p>
            <Link to="/nat" className="group mx-auto flex w-[160px] items-center justify-center rounded-2xl border border-[#D4A64A] bg-[#123C2F] px-5 py-3 text-2xl font-bold text-white shadow-lg shadow-[#123C2F]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#F1CD79] hover:bg-[#1B513F] hover:text-[#F1CD79] hover:shadow-xl active:translate-y-0" >   Yana </Link>
          </div>

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
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
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
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
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
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
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
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
            <Link to="/salat" className="group mx-auto flex w-[160px] items-center justify-center rounded-2xl border border-[#D4A64A] bg-[#123C2F] px-5 py-3 text-2xl font-bold text-white shadow-lg shadow-[#123C2F]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#F1CD79] hover:bg-[#1B513F] hover:text-[#F1CD79] hover:shadow-xl active:translate-y-0" >   Yana </Link>
          </div>

        </div>
        <div className="w-full  px-5 py-6 bg-[#173D30] mt-4">
          <div className="flex w-full items-center gap-3 bg-[#173D30]">
            <div className="h-px flex-1 bg-orange-300 "></div>

            <h2 className="whitespace-nowrap text-xl font-semibold text-white md:text-2xl">
              Ichimliklar
            </h2>

            <div className="h-px flex-1 bg-orange-300"></div>
          </div>
        </div>
        <div className="px-5 py-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
              <img
                src="https://olcha.uz/image/675x900/products/2023-01-16/gazirovannyy-napitok-coca-cola-2-l-190705-0.jpg"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300  group-hover:text-orange-600">
              Coca-Cola
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
              <img
                src="https://images.uzum.uz/ce8a878v1htd23airm6g/t_product_540_high.jpg"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Fanta
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
              <img
                src="https://dostavo4ka.uz/upload-file/2021/05/05/5729/25d8aeea-6691-4d1f-bf36-1be59dd65459.jpg"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Sprite
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
              <img
                src="https://images.uzum.uz/dajuqd5kiblcbcb6hu10/t_product_540_high.jpg"
                alt=""
                className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
            <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
              Fusetea
            </p>
            <p className="mt-1 text-xl text-gray-400">xxxx г</p>
            <Link to="/suv" className="group mx-auto flex w-[160px] items-center justify-center rounded-2xl border border-[#D4A64A] bg-[#123C2F] px-5 py-3 text-2xl font-bold text-white shadow-lg shadow-[#123C2F]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#F1CD79] hover:bg-[#1B513F] hover:text-[#F1CD79] hover:shadow-xl active:translate-y-0" >   Yana </Link>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home