# Import/Export

**Example 1 - Import functions tht was defined in an another file**


```js
// utils.ts
function square(x){
    return Math.pow(x, 2);
}
function cow(){
    console.log("Mooooo!!!!");
}
export {square, cow};
```

```js
// script.ts
import {square, cow} from "./utils";
console.log(square(2));
cow();
```
- Compiling .ts files and execute script.js
```js
tsc utils.ts script.ts
node script.js 
4
Mooooo!!!!
```

**Example 2 - Use arias name from an imported function**

```js
// script.ts
import {square as sqr, cow} from "./utils";

console.log(sqr(5));
cow();
```

**Example 3 - Import all functions using `*`**

```js
// script.ts
import * as utils from "./utils";

console.log(utils.square(3));
utils.cow();
```

**Examle 4 - Export functions using `export` and `export default`**
- Export all functions

```js
// utils.ts
export default function square(x){
    return Math.pow(x, 2);
}
export function cow(){
    console.log("Moo!!!!");
}
```

```js
// script.ts
import square, {cow} from "./utils";

console.log(square(2));
cow();
```