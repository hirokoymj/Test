//Q12
const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];
// expected result =[1,2,3,5,6,9,29]

const a3 = [...a1, ...a2];
const output = [];
console.log(a3);
const result = a3.map((value) => {
  const found = output.find((d) => d === value);
  if (!found) output.push(value);
});

console.log(result);
console.log(output);
//[ 5, 6, 9 ]//Wrong
