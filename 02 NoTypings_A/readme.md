# Sample 02: No Typings A

In this sample we are going to learn how to import javascript libraries that
doesn't have a a typings file associated. We will take as starting point sample "00 Start"

** REMARK: We are going to assume and hypotetical case: let's think that JQuery
has no typings definition, and let's use it withouth the definitions. This is
not the real case, JQuery does have typings definitions, but we make this as an
excercise. We are using this approach for this sample because JQuery is a well
know library and all will feel familiar with it.**

Summary:

- Install Jquery package.
- Add some JQuery code, error.
- Install node require like?
- Now get no errors (altough no intellisense).
- Launch the project


# Steps to run the sample

The first time when you download the sample do not forget to install the dependencies,
open the command prompt or bash navigate to the project 00 Start folder and
execute:

````
npm install
````

We will start by installing the jquery package from node package manager (console command prompt):

```
npm install jquery --save
```

Let's try to add some JQuery code to our main

````javascript
$('body').css('background-color', 'blue');
````

We get a typescript error message:

In order to fix this, we can define a require function, and import the JQuery without dependencies

```javascript
declare function require(name:string);
var $ = require('jquery');

$('body').css('background-color', 'blue');
```


Now to run the sample, run the following command from the command prompt:

````
npm start
````
