import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Sidebar from "~/components/SideBar";

export default component$(() => {
  return (
    <>
      <Sidebar />
      <main class="relative flex flex-col h-[calc(100%-61px)] w-full md:w-[calc(100%-280px)] md:h-screen overflow-auto bg-[#06111d]">
        
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Lucas Benitez",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
