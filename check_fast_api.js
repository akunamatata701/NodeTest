const nodeFetch = require('node-fetch');

const baseUrl = 'https://api.bitfinex.com/v1/trades/';
const endpoints = [
  'btcusd',
  'ethusd',
  'neousd',
];

/* eslint no-console: ["error", { allow: ["log"] }] */
Promise.race(endpoints.map(endpoint => nodeFetch(baseUrl + endpoint)))
  .then(res => res.url)
  .then(url => url.replace(baseUrl, ''))
  .then(endpoint => console.log(`Endpoint ${endpoint} is fastest.`));
