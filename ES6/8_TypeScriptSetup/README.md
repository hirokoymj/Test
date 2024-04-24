# TypeScript Setup

- JavaScript file: **.js**
- Typescript file: **.ts**

#### Installing typescript

```js
npm install -g typescript
```

```js
tsc -v
//Version 2.6.2
```

#### Compile .ts file
```js
tsc hello.ts
```

```text
// created hello.js
```

#### Execute .js file
```js
node hello.js
```

### Run typescript with watch
```js
tsc -w hello.ts
```

```text
21:27:35 - Compilation complete. Watching for file changes.
21:28:05 - File change detected. Starting incremental compilation...
21:28:05 - Compilation complete. Watching for file changes.
```

### Compile .ts file to ES6
```js
tsc -t ES6 -w hello.ts
```

### Generating TypeScript configuration file
```js
tsc --init
```

```text
// tsconfig.json has been created.
```

**tsconfig.json**
```js
{
  "compilerOptions": {
    "target": "es5",       /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
    "module": "commonjs",  /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
     "sourceMap": false,   /* Generates corresponding '.map' file. */
    "strict": true,        /* Enable all strict type-checking options. */
    "noImplicitAny": false /* Raise error on expressions and declarations with an implied 'any' type. */
  }
}
```
