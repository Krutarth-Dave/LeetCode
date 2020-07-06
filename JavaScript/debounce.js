function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function sayHello() {
  console.log('My name is', this.name);
}

let emy = {
  name: 'emy',
  speak: debounce(sayHello, 1000),
};

emy.speak();
