# PrimParity [![0 - dependencies](https://img.shields.io/static/v1?label=0&message=dependencies&style=plastic&color=blueviolet)](https://www.npmjs.com/package/primparity?activeTab=dependencies) [![100% - clean code](https://img.shields.io/static/v1?label=100%&message=clean+code&style=plastic&color=orange)](https://www.npmjs.com/package/primparity) [![npm](https://img.shields.io/static/v1?label=&message=npm&style=plastic&color=informational&logo=npm)](https://www.npmjs.com/package/primparity) [![javascript](https://img.shields.io/static/v1?label=&message=javascript&style=plastic&color=black&logo=javascript)](https://www.npmjs.com/package/primparity)
> Returns true or false depending on the number's parity (odd/even) and primality (prime/composite).
> Also checks if integer does not exceed the JavaScript MAXIMUM_SAFE_INTEGER.

## Install

Install with [npm](https://www.npmjs.com/package/primparity):

```sh
npm i primparity
```

## Usage

```js
const prp = require('primparity');

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
