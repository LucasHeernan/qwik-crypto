import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Sidebar from "~/components/SideBar";
import NavBar from "~/components/NavBar";
import Filter from "~/components/Filter";
import Main from "~/components/Main";
import Pagination from "~/components/Pagination";
import Footer from "~/components/Footer";

export default component$(() => {
  return (
    <>
      <Sidebar />
      <main class="relative flex flex-col h-[calc(100%-61px)] w-full lg:w-[calc(100%-280px)] lg:h-screen overflow-auto bg-[#06111d]">
        <NavBar />
        <div class="w-full max-w-full flex flex-col my-0 mx-auto flex-grow">
          <Filter />
          <div class="flex flex-col flex-grow flex-shrink pt-4 px-2 pb-16">
            <div class="overflow-hidden h-full flex-grow flex-shrink bg-sky-950">
              <div class="relative overflow-hidden w-full h-full text-left leading-normal z-0 select-none outline-none left-0 top-0 ml-auto mr-auto"> {/* TOUCH-ACTION = ANIMACIÓN */}
                <Main />
              </div>
            </div>
          </div>
          <Pagination />
          <Footer />
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Lucas Benitez | Frontend Dev",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
