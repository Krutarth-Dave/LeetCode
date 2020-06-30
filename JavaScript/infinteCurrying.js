function add() {
  let args = [...arguments];

  function addReturn() {
    let args1 = [...arguments];
    return add(...args, ...args1);
  }

  let total = args.reduce((total, val) => total + val);
  addReturn.value = total;

  return addReturn;
}

console.log(add(1, 2, 3).value);
console.log(add(1)(2)(3).value);
console.log(add(1, 2)(3)(1)(5, 6, 7, 8)(1, 2, 4, 4).value);
