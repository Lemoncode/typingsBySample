# Sample 04: Start

In this sample we are going to simulate the following scenarios:

- Let's say there is a javascript library that we are planning to use heavily.
- This library does not have typings definitions available.
- We want to add strong typings support to that library.

What we will do is: create a manual typings defintions and register it.

We have chosen a library to validate SSN (U.S. Social Security number),
[npm link](https://www.npmjs.com/package/is-valid-ssn)

This library is fairly simple and a good entry point to start defining our
custom definition files, main js file:

```javascript
/**
 * Social Security number (SSN) is a nine-digit number issued to U.S. citizens, permanent residents,
 * and * temporary (working) residents under section 205(c)(2) of the Social Security Act, codified
 * as 42 U.S.C. 405(c)(2).
 *
 * See `http://www.irs.gov/Individuals/General-ITIN-Information` for more information.
 */

/**
 * Blacklist.
 */

const blacklist = ['078051120', '219099999', '457555462'];

/**
 * Expression.
 */

const expression = /^(?!666|000|9\d{2})\d{3}[- ]{0,1}(?!00)\d{2}[- ]{0,1}(?!0{4})\d{4}$/;

/**
 * Validate function.
 */

export function isValid(value) {
  if (!expression.test(value)) {
    return false;
  }

  return blacklist.indexOf(value.replace(/\D/g, '')) === -1;
}

/**
 * Mask the SSN with "X" placeholders to protect sensitive data,
 * while keeping some of the original digits for contextual recognition.
 *
 * E.g. "123456789" -> "XXXXX6789", "123-45-6789" -> "XXX-XX-6789".
 */

export function mask(value) {
  if (!isValid(value)) {
    throw new Error('Invalid Social Security Number');
  }

  return `${value.substr(0, value.length - 4).replace(/[\w]/g, 'X')}${value.substr(-4)}`;
}
```

# Steps to run the sample

First time when you download the sample do not forget to install the dependencies,
open the command prompt or bash navigate to the project 00 Start folder and
execute:

````
npm install
````

Let's continue by installing the SSN Library we want to use:

```
npm install ssn-validator --save-dev
```

Now if we search for a typings definition we will find that it just throw us
a "no results found".

```
typings search --name ssn-validator
```

Let's init our typings file

```
typings init
```

We have to create the typing our self:

We can open or browse in github the source code of this library (index.js is
the main entry point), by browsing index.js we can get an idea of the
functions we need to expose via typings

Now Let's create two subfolders called typingsManual/ssn-validator

And let's place inside that subfolder a file named _index.d.ts_ this
file will have the following content

```javascript
declare module "ssn-validator" {
    export function isValid(value : string) : boolean;
    export function mask(value : string) : string;
}
```

Now we can import that library and we can check that we get intellisense + strong typings

```javascript
import * as ssnValidator from "ssn-validator"

const result : boolean = ssnValidator.isValid('011-23-4567')
const message : string = ` - Validate 011-23-4567 success: ${result}`

document.write(message);
```

Let's run the sample

````
npm start
````
