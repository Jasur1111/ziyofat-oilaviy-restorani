
import React from 'react'

const Yevropa = () => {
  return (
    <div className="w-full bg-[#173D30] px-5 py-4 ">
      <div className="w-full  px-5 py-6 bg-[#173D30]">
      <div className="flex w-full items-center gap-3 bg-[#173D30]">
        <div className="h-px flex-1 bg-orange-300 "></div>

        <h2 className="whitespace-nowrap text-xl font-semibold text-white md:text-2xl">
          Yevropa Taomlari
        </h2>

        <div className="h-px flex-1 bg-orange-300"></div>
      </div>
    </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://www.recipetineats.com/tachyon/2026/03/French-pork-schnitzel-1.jpg"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-sm transition-colors duration-300 group-hover:text-orange-600">
            Туй оши 1кг
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
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
          <p className="mt-1 text-sm transition-colors duration-300 group-hover:text-orange-600">
            Туй оши 2 кг
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
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
          <p className="mt-1 text-sm transition-colors duration-300 group-hover:text-orange-600">
            Туй ош порция
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
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
          <p className="mt-1 text-sm transition-colors duration-300 group-hover:text-orange-600">
            Туй ош 0,7 порция
          </p>
          <p className="mt-1 text-xs text-gray-400">xxxx г</p>
        </div>

      </div>
      
    </div>
  )
}

export default Yevropa
