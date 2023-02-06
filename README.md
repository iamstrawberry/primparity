# PrimParity
> Returns true or false depending on the number's parity (odd/even) and primality (prime/composite).
> Also checks if integer does not exceed the JavaScript MAXIMUM_SAFE_INTEGER.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save primparity
```

## Usage

```js
const prp = require('./index.js');

//Check Parity (odd/even)

//odd
prp.checkParity.odd(1); //true
prp.checkParity.odd(2); //false
//even
prp.checkParity.even(1); //false
prp.checkParity.even(2); //true

//Check Primality (prime/composite)

//prime
prp.checkPrimality.prime(2); //true
prp.checkPrimality.prime(4); //false
//composite
prp.checkPrimality.composite(2); //false
prp.checkPrimality.composite(4); //true
```


## About

<details>
<summary><strong>Author</strong></summary>
<b>wQ (iamstrawberry)</b>
</details>
<details>
<summary><strong>Contributing</strong></summary>
Pull requests and stars are always welcome.
</details>

### License

Copyright © 2023, [wQ](https://github.com/iamstrawberry).
Released under the [MIT License](LICENSE).
