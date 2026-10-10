
import heroImage from "../assets/hero_part.png"; 

export const Hero = () => {
  return (
    <section className="bg-[#F3F3F9] px-6 py-12 md:py-24">
      {/* Замінено max-w-[1200px] на max-w-[1440px] */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 md:grid-cols-2">
        
        {/* Ліва частина: Текст та кнопки */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium text-gray-400">
            Львів · пілот · відкриті дані
          </span>

          <h1 className="pt-[20px] text-6xl font-extrabold leading-[1.1] text-black md:text-[64px]">
            Знайдіть район, де <br />
            справді <span className="text-[#989898]">комфортно <br />жити.</span>
          </h1>

          {/* Текст "Про індекс" з точними стилями */}
          <p className="max-w-[576px] text-[18px] leading-[28px] tracking-[-0.01em] text-[#8E8E93]">
            Okil ділить місто на гексагони й рахує для кожного індекс комфорту від 0 до 100: 
            транспорт, аптеки, школи, укриття, тиша. До того, як ви підпишете договір.
          </p>

          {/* Блок з інпутом та кнопкою */}
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            
            {/* Поле пошуку */}
            <div className="flex h-[110px] w-full max-w-[370px] flex-col items-start gap-2 rounded-[22px] bg-white p-4 shadow-sm">
              <span className="text-xs font-medium text-gray-400">Знайти за вулицею</span>
              <div className="flex w-full items-center gap-2 rounded-xl bg-gray-100 px-3 py-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  defaultValue="вул. Личаківська 54" 
                  className="w-full bg-transparent text-sm font-medium text-black outline-none placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Синя кнопка */}
            <button className="group flex h-[110px] w-full flex-col justify-between items-start rounded-[22px] bg-[#007AFF] p-4 text-left text-white shadow-sm transition-colors hover:bg-blue-600 sm:w-[247px]">
              <span className="text-xs opacity-80">Просто цікаво</span>
              <span className=" text-base flex w-full items-center justify-between font-medium">
                Побавитись з гексагонами
                <svg className="transition-transform group-hover:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>

          </div>
        </div>

        {/* Права частина: Картинка */}
        <div className="flex items-center justify-center">
          <img 
            src={heroImage} 
            alt="Гексагони комфорту" 
            className="h-auto w-full max-w-[600px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};