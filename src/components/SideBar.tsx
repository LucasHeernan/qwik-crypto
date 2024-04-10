import { component$ } from "@builder.io/qwik";
import logo from "/moralis-logo.svg";
import text from "/moralis-text.svg";


export default component$(() => {

  return (
    <aside class="hidden md:flex flex-col h-full left-0 top-0 w-[17.5rem] z-20 overflow-visible sticky bg-[#0f253d]">

      {/* TOP */}
      <div class="flex flex-shrink-0 justify-center items-center h-[4.375rem]">
        <a href="/">
          <div class="p-4 block">
            <div class="flex justify-center items-center gap-3">
              <div>
                <img src={logo} alt="Moralis" width={38} height={30} />
              </div>
              <div class="block">
                <img src={text} alt="" width={153} height={22} />
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* MENU */}
      <div class="flex flex-col justify-between h-[calc(100%-4.375rem)]">

        {/* MAIN */}
        <div class="flex flex-col flex-grow max-h-[calc(100%-11.875rem)] overflow-visible">
          <nav class="flex flex-col relative items-start h-full overflow-x-visible overflow-y-auto py-0 px-[1rem]">
            <ul class="flex flex-col items-start gap-2 w-full list-none">

              <li class="w-full relative">
                <div>
                  <button class="relative flex items-center justify-start w-full h-[3.25rem] py-3 px-5 font-normal text-[1.125rem] leading-6 rounded-lg cursor-pointer select-none text-[#f0f8ff] fill-[#f0f8ff] bg-[#0d2035]">
                    <span class="flex flex-grow items-center gap-3">
                      <span class="flex items-center justify-center">
                        <span class="fa-solid fa-chart-simple"/>
                      </span>
                      <span>Market Overview</span>
                    </span>
                    <span class="fa-solid fa-chevron-down fa-2xs text-[#68738d]"></span>
                  </button>
                </div>
              </li>
              
              <li class="w-full relative">
                <div>
                  <button class="relative flex items-center justify-start w-full h-[3.25rem] py-3 px-5 font-normal text-[1.125rem] leading-6 rounded-lg cursor-pointer select-none text-[#f0f8ff] fill-[#f0f8ff] hover:bg-[#132a44]">
                    <span class="flex flex-grow items-center gap-3">
                      <span class="flex items-center justify-center">
                        <span class="fa-solid fa-book"/>
                      </span>
                      Research
                    </span>
                    <span class="fa-solid fa-chevron-down fa-2xs text-[#68738d]"></span>
                  </button>
                </div>
              </li>

              <li class="w-full relative">
                <div>
                <button class="relative flex items-center justify-start w-full h-[3.25rem] py-3 px-5 font-normal text-[1.125rem] leading-6 rounded-lg cursor-pointer select-none text-[#f0f8ff] fill-[#f0f8ff] hover:bg-[#132a44]">
                  <span class="flex flex-grow items-center gap-3">
                    <span class="flex items-center justify-center">
                      <span class="fa-regular fa-heart"/>
                    </span>
                    Saved
                  </span>
                </button>
                <div class="h-0 opacity-0 pl-6 invisible"/>
                </div>
              </li>

              <li class="w-full relative">
                <div>
                  <button class="relative flex items-center justify-start w-full h-[3.25rem] py-3 px-5 font-normal text-[1.125rem] leading-6 rounded-lg cursor-pointer select-none text-[#f0f8ff] fill-[#f0f8ff] hover:bg-[#132a44]">
                    <span class="flex flex-grow items-center gap-3">
                      <span class="flex items-center justify-center">
                        <span class="fa-solid fa-book-open-reader"/>
                      </span>
                      Learn
                    </span>
                    <span class="fa-solid fa-chevron-down fa-2xs text-[#68738d]"></span>
                  </button>
                </div>
              </li>

              <li class="w-full relative">
                <div>
                <button class="relative flex items-center justify-start w-full h-[3.25rem] py-3 px-5 font-normal text-[1.125rem] leading-6 rounded-lg cursor-pointer select-none text-[#f0f8ff] fill-[#f0f8ff] hover:bg-[#132a44]">
                  <span class="flex flex-grow items-center gap-3">
                    <span class="flex items-center justify-center">
                      <span class="fa-solid fa-coins" />
                    </span>
                    Portfolio
                  </span>
                </button>
                <div class="h-0 opacity-0 pl-6 invisible"/>
                </div>
              </li>

              <li class="w-full relative">
                <div>
                <button class="relative flex items-center justify-start w-full h-[3.25rem] py-3 px-5 font-normal text-[1.125rem] leading-6 rounded-lg cursor-pointer select-none text-[#f0f8ff] fill-[#f0f8ff] hover:bg-[#132a44]">
                  <span class="flex flex-grow items-center gap-3">
                    <span class="flex items-center justify-center">
                      <span class="fa-solid fa-gear" />
                    </span>
                    Settings
                  </span>
                </button>
                <div class="h-0 opacity-0 pl-6 invisible"/>
                </div>
              </li>

              <li class="w-full relative">
                <div>
                <button class="relative flex items-center justify-start w-full h-[3.25rem] py-3 px-5 font-normal text-[1.125rem] leading-6 rounded-lg cursor-pointer select-none text-[#f0f8ff] fill-[#f0f8ff] hover:bg-[#132a44]">
                  <span class="flex flex-grow items-center gap-3">
                    <span class="flex items-center justify-center">
                      <span class="fa-solid fa-code"/>
                    </span>
                    API For Devs
                  </span>
                </button>
                <div class="h-0 opacity-0 pl-6 invisible"/>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* DOWN */}
        <div>
          <div class="flex flex-col px-4 pb-4 gap-3">
            <div>
              <button class="w-full h-12 relative flex justify-center items-center text-center font-medium text-[1rem] leading-4 rounded-lg gap-2 px-4 cursor-pointer select-none text-[#85b3db] border-2 border-[#2e628e] hover:text-[#bbdbf7] hover:border-[#6286b7]">
                <span class="fa-solid fa-arrow-right" />
                Start Trial
              </button>
            </div>
          </div>
          <div class="w-full flex items-center justify-between py-3 px-4 border-t border-[#1a3656] bg-[#132a44]">
            <button class="relative w-fit flex flex-shrink-0 justify-center items-center ml-auto leading-4 gap-2 cursor-pointer select-none text-[#85b3db]">
              <div class="flex justify-normal items-center py-0.5 px-[6px] hover:text-[#bbdbf7]">
                <span class="fa-solid fa-chevron-left" />
              </div>
            </button>
          </div>
        </div>

      </div>

    </aside>
  )
})