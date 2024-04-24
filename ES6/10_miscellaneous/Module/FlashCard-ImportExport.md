# ES6 - Import/Export

## Q1
- Change below functions to be able to import to another file.

```js
function square(x){
    return Math.pow(x, 2);
}
function cow(){
    console.log("Mooooo!!!!");
}
```

**Answer #1**
- use export {} object.

```js
function square(x){
    return Math.pow(x, 2);
}
function cow(){
    console.log("Mooooo!!!!");
}
export {square, cow};
```

**Answer #2**
- Added `export` keyword before function.

```js
export default function square(x){
    return Math.pow(x, 2);
}
export function cow(){
    console.log("Moo!!!!");
}
```

## Q2
- Import **square** function to another file.
```js
// utils.ts
export default function square(x){
    return Math.pow(x, 2);
}
```

**Answer**
- If there is **default** keyword in exported function, `{}` is NOT necessary to import.

```js
// script.ts
import square from "./utils";
```

##Q3
- Import cow function to another file.
```js
// utils.ts
export function cow(){
    console.log("Moo!!!!");
}
```

**Answer**
```js
import {cow} from "./utils";
```


