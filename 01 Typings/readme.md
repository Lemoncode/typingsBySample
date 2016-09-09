# Sample 01: Typings

In this sample we will use JQuery library installing the typings definitions

Summary:

- Install Jquery package.
- Install typings globally.
- Add typings dependency to the locale package.json list.
- Initialize typings file.
- Search for JQuery typings.
- Install JQuery typings.
- Add some JQuery code.
- Launch the project.
- Add a postInstall step to package json.


# Guide to reproduce this sample

Start by copying a fresh cut from "Sample 00: Start"

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

Now we will install [typings](https://github.com/typings/typings) (typescript
definition manager) globally:

```
npm install typings --g
```

By installing this globally we have access to typings from the command prompt.

Next step let's install it locally (this will allow us later on to add plumbing
  in the package json to automatically download typings definitins from a clean machine).

```
npm install typings --save-dev
```

Let's initialize our project typings file:

````
typings init
````

It's time to search for jquery type definitions, first we are going to search for them:

````
typings search --name jquery
````

The results throw a couple of entries we take the ones from the dt repository, let's
install them

````
typings install dt~jquery --global --save
````

Now that we have the typings installed, we can add some JQuery code in our main.ts
jus to change the body background color, we can check we get no errors and intellisense
support

````javascript
import * as $ from "jquery";

$('body').css('background-color', 'blue');
````

Now we can run our sample and check the we got our blue background page

````
npm start
````

So far so good, but what happens know when a developer downloads the repo for the
first time, he will have to remember executing _npm install_ then _typings install
to avoid this hassle, we can just add a post install step to our _package.json_
and it will automatically download the typings after an _npm install_ has been executed.

In Package json add this:

````json
"scripts": {
   "postinstall": "typings install",
   "start": "webpack-dev-server",
 },
````

_Note: if you are using libraries like bootstrap, it's a good idea to define JQuery and a global name in your wepack.config.js, you can find more
info about this in the following sample: [webpack jquery sample](https://github.com/Lemoncode/webpack-1.x-by-sample/tree/master/00%20Intro/04%20Jquery_)

````javascript
plugins:[
  new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
  }),
//...
]
````
