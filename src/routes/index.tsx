import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Sidebar from "~/components/SideBar";
import NavBar from "~/components/NavBar";
import Filter from "~/components/Filter";
import Footer from "~/components/Footer";

export default component$(() => {
  return (
    <>
      <Sidebar />
      <main class="relative flex flex-col h-[calc(100%-61px)] w-full lg:w-[calc(100%-280px)] lg:h-screen overflow-auto bg-[#06111d]">
        <NavBar />
        <div class="w-full max-w-full flex flex-col my-0 mx-auto flex-grow">
          <Filter />
          <Footer />
        </div>
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
