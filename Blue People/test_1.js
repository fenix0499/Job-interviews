const contiene = (arreglo, num1, num2) => {
  let i = 0;
  arreglo.forEach((element) => {
    element === num1 && i++;
  });
  return i >= num2;
};
const arreglo = [4, 5, 2, 4, 5, 9, 9, 4, 4];
console.log(contiene(arreglo, 4, 5)) // Regresa false;
console.log(contiene(arreglo, 4, 4)) // Regresa true;
console.log(contiene(arreglo, 4, 3)) // Regresa true;
console.log(contiene(arreglo, 9, 2)) // Regresa true;