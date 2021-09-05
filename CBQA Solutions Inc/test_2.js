const ipToStrong = (ip) => {
  console.log(ip);
  ip = ip.split(".");

  let myBinaryIp = "";
  let decimalIp = 0;
  ip.forEach((element) => {
    let number = Number.parseInt(element);
    let tempIp = "";
    while (number > 0) {
      tempIp += number % 2;
      number = Math.floor(Number.parseInt(number) / 2);
    }
    tempIp.length === 8 && (myBinaryIp += tempIp.split("").reverse().join(""));
    tempIp.length === 7 &&
      (myBinaryIp += "0" + tempIp.split("").reverse().join(""));
    tempIp.length === 6 &&
      (myBinaryIp += "00" + tempIp.split("").reverse().join(""));
  });
  console.log(myBinaryIp);
  myBinaryIp = myBinaryIp.split("").reverse();

  myBinaryIp.forEach((element, index) => {
    decimalIp += Number.parseInt(element) * 2 ** index;
  });

  return decimalIp;
};

console.log(ipToStrong("216.77.49.125"));