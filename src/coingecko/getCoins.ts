import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets',
  params: {vs_currency: 'usd', per_page: '50', page: '1'},
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-5Ki2KJ8yh1ZfAcR9oKqBDDfn'}
};

export default async function getCoins() {
  const data = axios(options).then(e => e.data);
  return data;
}