
import React from 'react'
import Footer from '../companents/Footer'

const Yevropa = () => {
  return (
    <div className="w-full bg-[#173D30]  text-white">
      <div className='text-white w-[1500px] ml-40 p-4'>


        <p>
          <h1 className='font-bold text-3xl flex justify-center'> Yevropa taomlari haqida umumiy ma'lumot</h1>
          <br />
          Yevropa taomlari — Yevropa mamlakatlarining milliy madaniyati, urf-odatlari va tarixini aks ettiruvchi turli xil mazali taomlar majmuasidir. Yevropa oshxonasi dunyodagi eng mashhur oshxonalardan biri hisoblanadi. Uning taomlari o‘zining betakror ta'mi, chiroyli ko‘rinishi, tayyorlanish usullari va mahsulotlar xilma-xilligi bilan ajralib turadi. Yevropa oshxonasi asosan go‘sht, baliq, sabzavot, kartoshka, pishloq, un mahsulotlari va turli ziravorlardan foydalanishga asoslangan.          <br />
          <br />
          Yevropa mamlakatlarining har biri o‘ziga xos milliy taomlarga ega. Masalan, Italiya oshxonasi pitsa, pasta va lazanya kabi taomlari bilan mashhur. Fransiya oshxonasi kruassan, piyozli sho‘rva, turli pishloqlar va nafis desertlari bilan tanilgan. Germaniya oshxonasida kolbasa, kartoshkali taomlar va go‘shtli mahsulotlar keng tarqalgan. Ispaniya oshxonasida esa paelya, gazpacho va turli dengiz mahsulotlaridan tayyorlangan taomlar mashhur. Angliya oshxonasida fish and chips, turli piroglar va go‘shtli taomlar alohida o‘rin egallaydi.
          <br />
          <br />
          Yevropa taomlarini tayyorlashda turli xil mahsulotlardan foydalaniladi. Go‘sht, baliq, sabzavot, guruch, makaron, kartoshka, tuxum, sut va pishloq eng ko‘p ishlatiladigan mahsulotlar hisoblanadi. Taomlarga o‘ziga xos ta'm berish uchun zaytun moyi, sariyog‘, sarimsoq, ko‘katlar va turli ziravorlar qo‘shiladi. Yevropa oshxonasida taomlarning nafaqat mazasi, balki tashqi ko‘rinishi va dasturxonga tortilishiga ham katta e'tibor beriladi.          <br />
          <br />
          Xulosa qilib aytganda, Yevropa taomlari o‘zining boy tarixi, turli xil retseptlari, mazali ta'mi va chiroyli bezatilishi bilan butun dunyoda mashhurdir. Ular zamonaviy restoranlar menyusida muhim o‘rin egallaydi va turli mamlakatlarning oshxona madaniyatini yaqindan tanish imkonini beradi.        </p>
      </div>
      <div className="w-full  px-5 py-6 bg-[#173D30]">
        <div className="flex w-full items-center gap-3 bg-[#173D30]">
          <div className="h-px flex-1 bg-orange-300 "></div>

          <h2 className="whitespace-nowrap text-xl font-semibold text-white md:text-2xl">
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
        </div>

      </div>
      <div className="px-5 py-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDT5zx0Jv7u078Kw8Dy3X2DE6wJLxSmneNWDtufYJzA8GBy5nPiPiaIk4h&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Yasmiqli shoʻrva
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnK5ql3Q0tA9RdU6KeJNcMf7GxgHU-niZFfCP5ulbJX1vLweo1Q1ESBll&s=10https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSDgODGpqR6quMdFiIiEc03evyzAD8DE2jz9cE3EQpDYxB5baLeoSn88&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Medalyon
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aEduX_-magjT5MEEWu-q5_ALl4B2vN9PTTLzDe_BjzmOunb_c-HmU50&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Goʻsht fransuzcha
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMf4S6cBsTVANkfI6-WXs_5DWuZCYnF6tIWRg9ogbyad_dr0VvLay9NIp&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Ribay steyk
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

      </div>
      <div className="px-5 py-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://www.leopoldaueralm.at/wp-content/uploads/2024/04/gebackener-Spargel.jpg"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Kordon Blyu
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://eda.yandex.ru/images/2761069/e72f75616dfd43f383dd064323a79595-216x188.jpeg"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Bifshteks
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5iDRLg-LnGWezToMhn_WB_blDRW28_aXeWSJcqUEB54StBGX4uQEr1fq&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Tovuqli kievcha kotlet
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQbPBUVEyj59r7Cuizs4h_tAL1r_kLkFOkv12vMSZpTZnZGihkm1QKao&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Julyen
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

      </div>
      <div className="px-5 py-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VpMWWXUD8LukPYyh-oya_qLBj8aqV8MZU_6PBg20UmA68Qgbs68lgg5w&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Tomahavk va Ti-Bon steyklar
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfn8o4QwV5bOMPKsG1kkeuJLhnaVkF9f8ijkNillUPjPtflT4uexvqcaA&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Tovuqli Parmijana
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://cdn.zoomda.uz/products/2026/08/20/1787206826045226566.jpg"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Minestrone
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://1000guides.com/wp-content/uploads/2026/05/vengerskiy-guljasch-XS.jpg"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Vengrcha Gulyash
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

      </div>
      <div className="px-5 py-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://thesageapron.com/wp-content/uploads/2023/04/Spinach-Ricotta-Ravioli-45.jpg"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Ravioli
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ftqtFgBNdaetNPL32ppf5OCTbnGf8E10Oxk6ysG_cg6252RhlaELEcE&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Fettuchini dengiz mahsulotlari bilan
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://gocdn.daryo.uz/large/2021/03/ss.webp"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
            Pishloqli xachapuri
          </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kAAIFeRmDLLus1sLS_9qQIluDLzyYKTklPXR-sb-58M6R99zE6QShyc&s=10"
              alt=""
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">xxxx</h3>
          <p className="mt-1 text-xl transition-colors duration-300 group-hover:text-orange-600">
Risotto         
 </p>
          <p className="mt-1 text-xl text-gray-400">xxxx г</p>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Yevropa
