# Sample 03: No Typings_B

In this sample we are going to learn how to import javascript libraries that
doesn't have a a typings file associated. We will take as starting point sample "02 NoTypings A"

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

Let's import node.d.ts definition

Let's search for the node.d.ts definition

````
typings search --name node
````

Le't install node.d.ts definition

```
typings install dt~node --save --global
```


Now we can go back to our main.ts and remove the _declare require_

````javascript
var $ = require('jquery');

$('body').css('background-color', 'blue');
document.write(" - Hello from Javascript");
````

This time we dont' get typescript error messages.

Now to run the sample, run the following command from the command prompt:

````
npm start
````
