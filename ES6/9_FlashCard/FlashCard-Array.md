# Array

- Source: https://github.com/hirokoymj/Algorithm-Array


## Example 1

- Create new array from myArray - `[ 'red', 'blue', 'green', 'yellow' ]`
```js
var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];
```

### Answer

- Syntax
```js
var new_array = arr.map(function (currentValue, index){ return something})
```

```js
var newArray = myArray.map(function (element) {
	return element.color;
});
console.log(newArray); //[ 'red', 'blue', 'green', 'yellow' ]
```

## Example 2

- What is the index for "color: blue" in myArray.
```js
var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];
```

### Answer
```js
var blueIndex = myArray
    .map(function (element) {return element.color;}) //[ 'red', 'blue', 'green', 'yellow' ]
    .indexOf('blue');
console.log(blueIndex) //1
```

## Example 3
- Flatten and convert names array to Object like <br />`{'Alice':2, 'Bob':1, 'Tiff':1, 'Bruce':1}`

```js
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
```

### Answer
```js
- Array.prototype.reduce(function(accumlator, currentValue), initialValue);
```

```js
var countName = names.reduce(function(obj, current){
//console.log("Existing: " + obj.hasOwnProperty(current));

	if(obj.hasOwnProperty(current)){
		obj[current]++;
	}else{
		obj[current] = 1;
	}
	return obj;
}, {});
```


## Example 4
- Create new function to merge two array without duplicate value.

```js
var a1 = [2,5,6,9];
var a2 = [1,2,3,29];
```

### Answer 1
```js
function mergeTwoArray(array1, array2){
	var output = array2;

	array1.forEach(function(value){
		if(output.indexOf(value) == -1 ){
			output.push(value);
		}
	});

	return output;
}
console.log(mergeTwoArray(a1, a2)); //[ 1, 2, 3, 29, 5, 6, 9 ]
```

### Answer 2
```js
var array3 = a1.concat(a2); //[2, 5, 6, 9, 1, 2, 3, 29 ]
var output = array3.reduce(function(accu, val){
	if(acc.indexOf(val) == -1 ){
		acc.push(val);
	}
	return acc;
}, []);

console.log(output.sort()); //[ 1, 2, 29, 3, 5, 6, 9 ]
```

## Example 5

-  Create allbooks array from friends array.
```js
allbooks = [
   'Alphabet', 'Bible','Harry Potter','War and peace','Romeo and Juliet','The Lord of the Rings','The Shining'
]
```

```js
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];
```

### Answer
```js
var bookList = friends.reduce(function(acc, value){
	return acc.concat(value.books);
}, []);
```

## Example 6
Return blue object in myArray - {{'color':'blue', 'name': 'blueName'}}
```js
var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];
```

#### Answer
```js
const newArray = myArray.filter(element => element.color == 'blue');
console.log(newArray);
//[{'color':'blue', 'name': 'blueName'}]
```

- The `find()` method returns **the value of the first element** in the array

- The `filter()` method creates **a new array** with all elements that pass the test implemented by the provided function.

