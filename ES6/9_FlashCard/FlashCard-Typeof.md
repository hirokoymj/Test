# TypeOf

## Q1

```js
console.log(typeof []);
console.log(typeof {});
console.log(typeof null);
console.log(typeof NaN);
```

### Answer
```js
console.log(typeof []);     // object
console.log(typeof {});     // object
console.log(typeof null);   // object
console.log(typeof NaN);    // number
```

## Q2
- Since typeof [] returns object so how to check if the value is Array?


### Answer
- use Array.isArray()
```js
console.log(Array.isArray([]));
console.log(Array.isArray({}));
```

## Q3
```js
typeof(1);
typeof('a');
typeof(true);
typeof(undefined);
typeof(null); 
typeof({});
```

### Answer
```js
typeof(1);      // number
typeof('a');    // string
typeof(true);   // boolean
typeof(undefined); //undefined
typeof(null); // object <--- POINT
typeof({}); // object
```