import React from 'react';

const About = () => {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 font-sans  bg-[#173D30] text-white">
      <div className="max-w-5xl mx-auto">
        
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">
            Biz haqimizda
          </h2>
          <p className="mt-2 text-3xl font-extrabold  text-white sm:text-4xl">
            Sizning unutilmas kunlaringizni mukammal qilamiz
          </p>
          <p className="mt-4 text-lg  text-white">
            <strong>"Ziyofat Premium"</strong> restorani ko'p yillardan buyon G'azalkent shahrida to'ylar, yubileylar va korporativ tadbirlarni eng yuqori saviyada tashkillashtirib kelmoqda. Biz faqat bayram o'tkazmaymiz, biz unutilmas xotiralar yaratamiz.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          
         
          <div className="space-y-6">
            <h3 className="text-2xl font-bold  text-white border-l-4 border-amber-600 pl-4">
              Bizning Falsafamiz
            </h3>
            <p className="text-white leading-relaxed">
              Biz uchun har bir ziyofat — bu san'at asari. Zal dizaynidan tortib, dasturxonga tortiladigan eng oxirgi taomgacha bo'lgan har bir detal professional jamoamiz nazoratida bo'ladi. Mehmonlaringiz quvonchi va sizning xotirjamligingiz bizning oliy maqsadimizdir.
            </p>
            
           
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-2xl font-extrabold text-amber-600">200+</p>
                <p className="text-xs  text-white font-medium uppercase mt-1">O'tkazilgan to'ylar</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-amber-600">150</p>
                <p className="text-xs  text-white font-medium uppercase mt-1">Zal sig'imi</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-amber-600">100%</p>
                <p className="text-xs  text-white font-medium uppercase mt-1">Halol va Sarxil</p>
              </div>
            </div>
          </div>

         
          <div className=" bg-amber-900  p-8 rounded-2xl text-white shadow-xl h-64 flex flex-col justify-between">
            <div>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold text-amber-100">
                Ish vaqti
              </span>
              <h4 className="text-xl font-bold mt-4">Har kuni: 10:00 – 23:00</h4>
              <p className="text-amber-100/80 text-sm mt-2">
                Oldindan bron qilish va menyuni kelishish uchun istalgan vaqtda tashrif buyurishingiz mumkin.
              </p>
            </div>
            <div className="text-xs text-amber-200 border-t border-white/20 pt-4">
               Aloqa: +998 (xx) XXX-XX-XX
            </div>
          </div>

        </div>

       
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          
          <div className="bg-gray-50 p-6 rounded-xl hover:bg-amber-50/50 transition-colors duration-200 border border-gray-100">
            <div className="text-3xl mb-4">👑</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Premium Xizmat</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Har bir mijozga individual yondashuv va yuqori darajadagi professional ofitsiantlar xizmati.
            </p>
          </div>

          
          <div className="bg-gray-50 p-6 rounded-xl hover:bg-amber-50/50 transition-colors duration-200 border border-gray-100">
            <div className="text-3xl mb-4">🍽️</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Sarxil Taomlar</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tajribali shef-pazandalarimizdan milliy va yevropa taomlarining eng sara namunalari.
            </p>
          </div>

         
          <div className="bg-gray-50 p-6 rounded-xl hover:bg-amber-50/50 transition-colors duration-200 border border-gray-100">
            <div className="text-3xl mb-4">✨</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Xushruh Atmosfera</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Zamonaviy yoritish tizimi, keng va muhtasham zal hamda unutilmas jonli musiqa.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
