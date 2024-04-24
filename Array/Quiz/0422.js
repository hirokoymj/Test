const array = [
  { name: "foo1", value: "val1" },
  { name: "foo1", value: ["val2", "val3"] },
  { name: "foo2", value: "val4" },
  { name: "foo2", value: "val5" },
  { name: "foo3", value: ["val6", "valu7"] },
];

// [
//     { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },
//     { name: 'foo2', value: [ 'val4', 'val5' ] },
//     { name: 'foo3', value: [ 'val6', 'valu7' ] }
//   ]

const result = array.reduce((acc, currentVal) => {
  const found = acc.find((d) => d.name === currentVal.name);
  if (found) {
    if (typeof currentVal.value === "string") {
      found.value.push(currentVal.value);
    } else {
      found.value = [...found.value, ...currentVal.value];
    }
  } else {
    const { name, value } = currentVal;
    const temp = {
      name,
      value: typeof value === "string" ? [value] : value,
    };
    acc.push(temp);
  }
  return acc;
}, []);

console.log(result);

const obj = { first: "Hiroko", last: "Yamaji" };
const updated = { ...obj, first: "Kayo" };
console.log(updated);
