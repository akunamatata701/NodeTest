const nodeFetch = require('node-fetch');
const fs = require('fs');

const baseUrl = 'https://api.bitfinex.com/v1/trades/';
const endpoints = [
  'btcusd',
  'ethusd',
  'neousd',
];

endpoints.forEach((endpoint) => {
  nodeFetch(baseUrl + endpoint)
    .then(res => res.json())
    .then(json => JSON.stringify(json))
    .then(string => fs.writeFile(`./data/${endpoint}.json`, string, (error) => {
      /* eslint no-console: ["error", { allow: ["log"] }] */
      if (error) console.log(error);
      else console.log(`Fetched ${endpoint} data`);
    }));
});
