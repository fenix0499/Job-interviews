let first;
let second;

const merge = (array1, array2) => {
  let final = [];
  if (array1.length > array2.length) {
    first = array1;
    second = array2;
  } else {
    first = array2;
    second = array1;
  }
  let j = 0;
  let k = 0;
  for (let i = 0; i < first.length + second.length; i++) {
    if (first[k] < second[j]) {
      final.push(first[k]);
      k++;
    } else {
      if (second[j] != null || second[j] != undefined) {
        final.push(second[j]);
        j++;
      } else {
        final.push(first[k]);
        k++;
      }
    }
  }
  return final;
};

console.log(merge([3, 4, 9, 9, 17, 20], [8, 9, 40, 41]));
console.log(merge([5, 6, 20], [2, 3, 4, 5]));
console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 8]));
console.log(merge([14, 17, 18, 21, 22, 26], [3, 15, 30, 31]));
console.log(merge([3, 4, 6, 9, 11, 16, 17], [8, 9, 9, 40]));
