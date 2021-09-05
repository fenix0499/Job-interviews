function fizzBuzz(n) {
  // Write your code here
  let i = 0;
  while (i < n) {
    if (i + 1 > 0 && i < 2 * 10 ** 5) {
      (i + 1) % 3 === 0 && (i + 1) % 5 === 0 && console.log("FizzBuzz");
      (i + 1) % 3 === 0 && (i + 1) % 5 != 0 && console.log("Fizz");
      (i + 1) % 5 === 0 && (i + 1) % 3 != 0 && console.log("Buzz");
      (i + 1) % 5 != 0 && (i + 1) % 3 != 0 && console.log(i + 1);
    }
    i++;
  }
}

fizzBuzz(15);


