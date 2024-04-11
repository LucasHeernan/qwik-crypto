import { component$ } from "@builder.io/qwik";


export default component$(() => {

  return (
    <aside class="flex lg:hidden w-full bottom-0 fixed items-end py-1 z-20 border-t border-[#132a44] bg-[#0d2035]">
      <nav class="h-[3.25rem] flex items-center justify-center flex-grow">
        <ul class="flex items-center justify-center my-0 mx-auto max-w-[23.75rem] w-full list-none">
          <li class="w-1/5 flex items-center justify-center list-none">
            <div class="w-full h-full relative flex flex-col items-center justify-center py-2 gap-[0.375rem] text-left text-[#fffffe] select-none transform transition-all duration-200 ease-out">
              <i class="fa-solid fa-ellipsis"/>
              <span class="hidden xs:block relative text-[0.625rem] text-center capitalize text-[#fffffe]">Extra</span>
            </div>
          </li>
          <li class="w-1/5 flex items-center justify-center list-none">
            <div class="w-full h-full relative flex flex-col items-center justify-center py-2 gap-[0.375rem] text-left text-[#fffffe] select-none transform transition-all duration-200 ease-out
            after:bg-[#005ac2] after:block after:w-[calc(100%-0.5rem)] after:absolute after:-bottom-[0.375rem] after:h-1"
            >
              <i class="fa-solid fa-chart-column"/>
              <span class="hidden xs:block relative text-[0.625rem] text-center capitalize text-[#fffffe]">Market</span>
            </div>
          </li>
          <li class="w-1/5 flex items-center justify-center list-none">
            <div class="w-full h-full relative flex flex-col items-center justify-center py-2 gap-[0.375rem] text-left text-[#fffffe] select-none transform transition-all duration-200 ease-out">
              <i class="fa-solid fa-book"/>
              <span class="hidden xs:block relative text-[0.625rem] text-center capitalize text-[#fffffe]">Research</span>
            </div>
          </li>
          <li class="w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center flex-shrink-0 mx-2 list-none rounded-full bg-[#1970d4] transform transition-all ease-in-out duration-150">
            <div class="w-full h-full relative flex flex-col items-center justify-center py-2 gap-[0.375rem] text-left text-[#fffffe] select-none transform transition-all duration-200 ease-out">
            <i class="fa-solid fa-magnifying-glass" />
            </div>
          </li>
          <li class="w-1/5 flex items-center justify-center list-none">
            <div class="w-full h-full relative flex flex-col items-center justify-center py-2 gap-[0.375rem] text-left text-[#fffffe] select-none transform transition-all duration-200 ease-out">
              <i class="fa-regular fa-heart"/>
              <span class="hidden xs:block relative text-[0.625rem] text-center capitalize text-[#fffffe]">Saved</span>
            </div>
          </li>
          <li class="w-1/5 flex items-center justify-center list-none">
            <div class="w-full h-full relative flex flex-col items-center justify-center py-2 gap-[0.375rem] text-left text-[#fffffe] select-none transform transition-all duration-200 ease-out">
              <i class="fa-solid fa-right-left"/>
              <span class="hidden xs:block relative text-[0.625rem] text-center capitalize text-[#fffffe]">Trade</span>
            </div>
          </li>
          <li class="w-7 h-7 xs:w-9 xs:h-9 flex items-center justify-center flex-shrink-0 mx-2 list-none rounded-full border border-[rgb(56,119,173)] transform transition-all ease-in-out duration-200">
            <div class="w-full h-full relative flex flex-col items-center justify-center select-none cursor-pointer">
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  )
})