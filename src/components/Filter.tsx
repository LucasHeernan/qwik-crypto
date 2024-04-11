import { component$ } from "@builder.io/qwik";


export default component$(() => {
  return (
    <section class="flex w-full flex-col items-center justify-between my-0 mx-auto overflow-hidden z-20">
      <div class="w-full flex items-center justify-center pt-4">
        <nav class="flex justify-center w-full max-w-[calc(100%-1.25rem)]">
          <ul style={{fontFamily: "IBM media"}} class="flex list-none rounded border border-[#132a44]">
            <li class="w-full flex items-stretch border-r border-[#132a44]">
              <button class="relative w-full h-7 px-2 flex items-center justify-center text-center whitespace-nowrap gap-1 text-[0.75rem] leading-5 select-none cursor-pointer text-[#2e628e] bg-[#0d2035] transform transition-all ease-linear duration-150 hover:filter hover:brightness-110">
                <span class="hidden invisible xs:block xs:visible">1 Hour</span>
                <span class="block visible xs:hidden xs:invisible">1H</span>
              </button>
            </li>
            <li class="w-full flex items-stretch border-r border-[#132a44]">
              <button class="relative w-full h-7 px-2 flex items-center justify-center text-center whitespace-nowrap gap-1 text-[0.75rem] leading-5 select-none cursor-pointer text-[#bbdbf7] bg-[#132a44] transform transition-all ease-linear duration-150">
                <span class="hidden invisible xs:block xs:visible">24 Hours</span>
                <span class="block visible xs:hidden xs:invisible">24H</span>
              </button>
            </li>
            <li class="w-full flex items-stretch border-r border-[#132a44]">
              <button class="relative w-full h-7 px-2 flex items-center justify-center text-center whitespace-nowrap gap-1 text-[0.75rem] leading-5 select-none cursor-pointer text-[#2e628e] bg-[#0d2035] transform transition-all ease-linear duration-150 hover:filter hover:brightness-110">
                <span class="hidden invisible xs:block xs:visible">7 Days</span>
                <span class="block visible xs:hidden xs:invisible">7D</span>
              </button>
            </li>
            <li class="w-full flex items-stretch border-r border-[#132a44]">
              <button class="relative w-full h-7 px-2 flex items-center justify-center text-center whitespace-nowrap gap-1 text-[0.75rem] leading-5 select-none cursor-pointer text-[#2e628e] bg-[#0d2035] transform transition-all ease-linear duration-150 hover:filter hover:brightness-110">
                <span class="hidden invisible xs:block xs:visible">30 Days</span>
                <span class="block visible xs:hidden xs:invisible">30D</span>
              </button>
            </li>
            <li class="w-full flex items-stretch border-r border-[#132a44]">
              <button class="relative w-full h-7 px-2 flex items-center justify-center text-center whitespace-nowrap gap-1 text-[0.75rem] leading-5 select-none cursor-pointer text-[#2e628e] bg-[#0d2035] transform transition-all ease-linear duration-150 hover:filter hover:brightness-110">
                <span class="hidden invisible xs:block xs:visible">1 Year</span>
                <span class="block visible xs:hidden xs:invisible">1Y</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
})