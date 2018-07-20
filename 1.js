function evaluate(string) {
  const arr = string.split(" ");
  let numberArr = [];

  for (let element of arr) {
    if (isNaN(element)) {
      const a = numberArr.shift();
      const b = numberArr.shift();
      switch (element) {
        case "+":
          numberArr.unshift(a + b);
          break;
        case "*":
          numberArr.unshift(a * b);
          break;
        default:
          break;
      }
    } else {
      numberArr.push(parseInt(element));
    }
  }

  return numberArr.shift();
}

console.log('"5 2 + 3 *" => ' + evaluate("5 2 + 3 *"));
console.log('"5 2 * 2 * 4 +" => ' + evaluate("5 2 * 2 * 4 +"));
console.log('"5" => ' + evaluate("5"));
console.log('"0 1 *" => ' + evaluate("0 1 *"));
