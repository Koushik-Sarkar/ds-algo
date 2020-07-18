const sum = (a, b, c) => console.log(a + b + c);

function curry(fn) {
  return function curried(...args) {
    console.log(fn.length);
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...arg2) {
        return curried.apply(this, args.concat(arg2));
      };
    }
  };
}

const curriedSum = curry(sum);
curriedSum(1)(2)(3);
