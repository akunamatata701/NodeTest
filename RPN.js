const rpn = require('reverse-polish-notation');

/* eslint no-console: ["error", { allow: ["log"] }] */
console.log(`"5 2 + 3 *" => ${rpn('5 2 + 3 *')}`);
console.log(`"5 2 * 2 * 4 +" => ${rpn('5 2 * 2 * 4 +')}`);
console.log(`"5" => ${rpn('5')}`);
console.log(`"0 1 *" => ${rpn('0 1 *')}`);
