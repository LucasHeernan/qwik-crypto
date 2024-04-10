import { component$ } from "@builder.io/qwik";


export default component$(() => {
  return (
    <section class="flex w-full max-w-[112.5rem] flex-col items-center justify-between my-0 mx-auto overflow-hidden z-20">
      <div class="w-full flex items-center justify-center pt-4 px-0">
        <nav class="flex">
          <ul class="flex list-none rounded border border-[#132a44]">
            <li class="w-full flex items-stretch border-r border-[#132a44]">
              <button class="relative w-full h-7 px-2 flex items-center justify-center text-center whitespace-nowrap font-semibold gap-1 text-[0.75rem] leading-5 select-none cursor-pointer text-[#2e628e] bg-[#0d2035] transform transition-all ease-linear duration-150 hover:filter hover:brightness-110">
                <span class="block visible">1 Hour</span>
              </button>
            </li>
            <li class="w-full flex items-stretch border-r border-[#132a44]">
              <button class="relative w-full h-7 px-2 flex items-center justify-center text-center whitespace-nowrap font-semibold gap-1 text-[0.75rem] leading-5 select-none cursor-pointer text-[#bbdbf7] bg-[#132a44] transform transition-all ease-linear duration-150">
                <span class="block visible">24 Hours</span>
              </button>
            </li>
            <li class="w-full flex items-stretch border-r border-[#132a44]">
              <button class="relative w-full h-7 px-2 flex items-center justify-center text-center whitespace-nowrap font-semibold gap-1 text-[0.75rem] leading-5 select-none cursor-pointer text-[#2e628e] bg-[#0d2035] transform transition-all ease-linear duration-150 hover:filter hover:brightness-110">
                <span class="block visible">7 Days</span>
              </button>
            </li>
            <li class="w-full flex items-stretch border-r border-[#132a44]">
              <button class="relative w-full h-7 px-2 flex items-center justify-center text-center whitespace-nowrap font-semibold gap-1 text-[0.75rem] leading-5 select-none cursor-pointer text-[#2e628e] bg-[#0d2035] transform transition-all ease-linear duration-150 hover:filter hover:brightness-110">
                <span class="block visible">30 Days</span>
              </button>
            </li>
            <li class="w-full flex items-stretch border-r border-[#132a44]">
              <button class="relative w-full h-7 px-2 flex items-center justify-center text-center whitespace-nowrap font-semibold gap-1 text-[0.75rem] leading-5 select-none cursor-pointer text-[#2e628e] bg-[#0d2035] transform transition-all ease-linear duration-150 hover:filter hover:brightness-110">
                <span class="block visible">1 Year</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
})