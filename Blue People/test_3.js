const mismaDiferencia = (arr) => {
  if (arr.length < 3) return true;

  let num1 = arr[0];
  let num2 = arr[1];

  let diff = num1 - num2;

  diff = Number((Math.abs(diff) * 100).toPrecision(15));
  diff = Math.round(diff) / 100 * Math.sign(diff);

  if(diff < 0) diff *= -1;
  let validation = true;
  arr.forEach((item, index) => {
    if (index != 0 && index != 1) {
      num1 = num2 //< 0 ? num2 * -1 : num2;
      num2 = item;
      const diff2 = num1 - num2 < 0 ? (num1 - num2) * -1 : num1 - num2;
      if (diff != Number(diff2.toFixed(2))) validation = false;
    }
  });
  return validation;
};

console.log(mismaDiferencia([1, 3, 5])); // true
console.log(mismaDiferencia([194, 54, 23, 7, 3, 6, 8])); // false
console.log(mismaDiferencia([44, 37, 30, 23])); // true
console.log(mismaDiferencia([-2.3, -1.1, 0.1, 1.3, 2.5, 3.7])); // true
console.log(mismaDiferencia([1, 8])); // true
console.log(mismaDiferencia([3, 2, 1, 2, 3, 4, 3])); // true