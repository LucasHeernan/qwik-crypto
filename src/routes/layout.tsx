import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  
  return (
    <div class="flex m-0 w-full h-screen bg-[#09182a]">
      <Slot />
    </div>
  );
});
