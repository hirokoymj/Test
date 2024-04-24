# TypeScript Setup


## Q1
- Install typescript

**Answer**
```js
npm install -g typescript
```

## Q2
- Compile Compile .ts file

**Answer**
```js
tsc hello.ts
```

## Q3
- Run typescript with watch

**Answer**
```js
tsc -w hello.ts
```

## Q4
- Generating TypeScript configuration file

**Answer**
```js
tsc --init

// tsconfig.json has been created.
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