Array.prototype.myReduce = function (reduceFn, accumulator) {
  for (let i = 0; i < this.length; i++) {
    accumulator = reduceFn(accumulator, this[i]);
  }
  return accumulator;
};

const array = [1, 2, 3, 4, 5];

let answer = array.myReduce((sum, n) => sum + n, 0);

console.log(answer);
