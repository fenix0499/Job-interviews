const mayorDiferencia = (arr) => Math.max(...arr) - Math.min(...arr);

console.log(mayorDiferencia([1, 1, 4])); // 3
console.log(mayorDiferencia([9, 8])); // 1
console.log(mayorDiferencia([6, 22, 16, 29, 23])); // 23
console.log(
  mayorDiferencia([28, 16, 28, 11, 14, 26, 23, 25, 17, 3, 22, 23, 23, 10])
); // 25