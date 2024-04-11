import { component$ } from "@builder.io/qwik";


export default component$(() => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section class="flex flex-col items-center justify-between my-0 mx-auto max-w-[112.5rem] w-full z-20">
      <div class="bottom-0 flex justify-center pb-4 absolute w-full">
        <div class="my-0 mx-auto text-[#2e628e] text-[0.75rem] leading-5 flex items-center justify-center gap-0 sm:gap-2">
          <em class="w-8 h-8 flex items-center justify-center text-center select-none">
            <button class="w-full h-full flex items-center justify-center leading-5 rounded border-2 border-transparent box-border cursor-pointer select-none transform transition-all duration-150 ease-in-out fill-[#132a44] hover:border-[#132a44]">
              <svg xmlns:xlink="http://www.w3.org/2000/svg" height="0.75rem" viewBox="0 0 512 512">
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192zm384-192l-192 192c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 470.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
              </svg>
            </button>
          </em>
          <em class="w-8 h-8 flex items-center justify-center text-center select-none mr-[100px] sm:mr-0">
            <button class="w-full h-full flex items-center justify-center leading-5 text-[#132a44] rounded border-2 border-transparent box-border cursor-pointer select-none transform transition-all duration-150 ease-in-out hover:border-[#132a44]">
              <i class="fa-solid fa-chevron-left fa-sm" />
            </button>
          </em>

          <div class="hidden invisible sm:visible sm:flex items-center justify-center gap-2">
            {
              numbers.map((el, i) => (
                <div key={i} class="w-8 h-8 flex items-center justify-center text-center select-none">
                  <button style={{fontFamily: "IBM media"}} class={`w-full h-full flex items-center justify-center text-[1rem] capitalize leading-5 rounded border-2 box-border cursor-pointer select-none transform transition-all duration-150 ease-in-out hover:border-[#132a44] ${el == 1 ? "border-[#132a44]" : "border-transparent"}`}>
                    {el}
                  </button>
                </div>
              ))
            }
          </div>

          <em class="w-8 h-8 flex items-center justify-center text-center select-none">
            <button class="w-full h-full flex items-center justify-center leading-5 text-[#132a44] rounded border-2 border-transparent box-border cursor-pointer select-none transform transition-all duration-150 ease-in-out hover:border-[#132a44]">
              <i class="fa-solid fa-chevron-right fa-sm" />
            </button>
          </em>
          <em class="w-8 h-8 flex items-center justify-center text-center select-none">
            <button class="w-full h-full flex items-center justify-center leading-5 rounded border-2 border-transparent box-border cursor-pointer select-none transform transition-all duration-150 ease-in-out fill-[#132a44] hover:border-[#132a44]">
              <svg xmlns:xlink="http://www.w3.org/2000/svg" height="0.75rem" viewBox="0 0 512 512">
                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 233.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192zm-384 192l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 41.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
              </svg>
            </button>
          </em>
        </div>

        <div class="bottom-[1.625rem] block text-[0.875rem] text-[#132a44] absolute text-center select-none visible sm:invisible">
          1 - 50
        </div>
      </div>
    </section>
  )
})