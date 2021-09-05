function MaxProfit(pricesAsString) {
  let string = pricesAsString.split(",");
  string = string.map((item) => Number.parseInt(item));
  console.log(string);
  let compra = 0;
  let compraIndex = 0;
  let venta = 0;
  let ventaIndex = 0;
  string.forEach((element, index) => {
    if (index === 0) {
      compra = element;
      compraIndex = index;
    } else if (compra > element + 1) {
      compra = element;
      compraIndex = index;
    }
  });
  console.log(compra, compraIndex + 1);

  string.forEach((element, index) => {
    if (index != compraIndex && index === compraIndex + 1) {
      venta = element;
      ventaIndex = index;
    } else if (index != compraIndex && venta < element) {
      venta = element;
      ventaIndex = index;
    }
  });
  console.log(venta, ventaIndex + 1);
  return ventaIndex > compraIndex && venta > compra ? ventaIndex + 1 : 0;
}

console.log(MaxProfit("7,1,5,3,6,4"));
console.log(MaxProfit("2,50,10,1,11"));
console.log(MaxProfit("7,6,4,3,1"));