function mostCommonWord(parrafo, palabrasNoPermitidas) {
  // Write your code here
  if (parrafo.length < 1 || parrafo.length > 1000) return;
  if (palabrasNoPermitidas.length < 0 || palabrasNoPermitidas.length > 100)
    return;

  let string = parrafo
    .replace(/[\.\,\!]/gi, " ")
    .toLowerCase()
    .split(/\s+/);
  let count = 0;
  let word = "";
  let finalCount = 0;
  let validation = true;

  for (let i = 0; i < string.length; i++) {
    palabrasNoPermitidas.forEach((element) => {
      element === string[i] && (validation = false);
    });
    if (validation) {
      for (let j = 0; j < string.length; j++) {
        string[i] === string[j] && count++;
      }

      count > finalCount && (finalCount = count) && (word = string[i]);
      count = 0;
    }
    validation = true;
  }

  console.log(string);
  console.log(word, finalCount);
}

mostCommonWord("Bob! hit a ball, the hit BALL flew long after it was hit.", ["hit"]);
mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]);