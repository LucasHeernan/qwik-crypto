import { component$ } from "@builder.io/qwik";
import getCoins from "~/coingecko/getCoins";


export default component$(() => {

  const coins = getCoins();
  console.log(coins);
  return (
    <>
      <h1>TODAS LAS MONEDAS</h1>
      {
        coins
        // coins.map((el, index) => (
        //   <div key={index} class="flex items-center justify-center">
        //     <img src={el.image} alt="image" width={50} height={50} />
        //   </div>
        // ))
      }
    </>
  )
})