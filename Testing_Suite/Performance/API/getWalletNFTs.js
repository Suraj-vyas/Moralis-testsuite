import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
// import dotenv from 'dotenv';
// dotenv.config();

// Load JSON data using the open and JSON.parse method
const Testdata = JSON.parse(open('../../../data/API/Web3Data/eth_getWalletNFTs.json'));

export const options = {
  vus: 1,
  duration: '1s',
};

export default function () {
  const parameters = {
    headers: { 'x-api-key': `${__ENV.MORALIS_API_KEY}` }
  };

  const res = http.get(`https://deep-index.moralis.io/api/v2.2/${Testdata.eth_getWalletNFTs.Validaddress}/nft?chain=${Testdata.eth_getWalletNFTs.Validchain}&format=${Testdata.eth_getWalletNFTs.Validformat}&exclude_spam=${Testdata.eth_getWalletNFTs.Validexclude_spam}`, parameters);
  console.log(res.url);
  console.log(res.status);
  console.log(res.body);
  console.log(`${__ENV.MORALIS_API_KEY}` );

  sleep(1);
  console.log(res.status);

  check(res, {
    "is the Status code 200": (r) => r.status === 200
  });
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
