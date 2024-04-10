import { component$ } from "@builder.io/qwik";


export default component$(() => {

  return (
    <header class="hidden lg:flex items-center justify-between sticky top-0 w-full h-[4.375rem] p-2 z-20 border-b border-[#132a44] bg-[#09182a]">
      <div class="w-full max-w-[28.125rem] flex-grow">
        <button class="relative w-full py-[0.625rem] px-6 flex items-center justify-start leading-6 gap-[0.625rem] text-[0.875rem] text-[#2e628e] font-medium cursor-pointer overflow-hidden text-center rounded-full border border-[#224767] bg-[#06111d] hover:border-[#2e628e]">
          <i class="fa-solid fa-magnifying-glass" />
          <span class="flex items-center font-normal z-10 pointer-events-none">
            Search for any token or wallet
          </span>
        </button>
      </div>

      <div class="flex items-center justify-end gap-3">
        <button class="w-fit min-w-[8.75rem] h-10 flex items-center justify-center text-center text-[0.875rem] font-semibold leading-4 rounded-md gap-2 px-3 text-[#85b3db] cursor-pointer select-none border-2 border-[#2e628e] hover:text-[#bbdbf7] hover:border-[#6286b7]">
          <i class="fa-solid fa-arrow-right"></i>
          Login / Connect
        </button>
      </div>
    </header>
  )
})