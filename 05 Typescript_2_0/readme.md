# Sample 05: Typings in Typescript 2.0

In this sample we will use JQuery library installing the typings definitions in Typescript 2.0

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


- The first time when you download the sample do not forget to install the dependencies, open the command prompt or bash navigate to the project folder and execute:
```
npm install
```
- Now, install typescript from node package manager (console command prompt):
```
npm install typescript@2.0 --save-dev
```

- Getting and using declaration files in 2.0 is much easier. To get declarations for a library like jquery, in command prompt:
```
npm install --save @types/jquery
```

- And we need to install jquery library too:
```
npm install jquery --save
```

- Now that we have the typings and jquery installed, we can add some JQuery code in our main.ts just to change the body background color, we can check we get no errors and intellisense support:
```javascript
import * as $ from "jquery";
$('body').css('background-color', 'lightblue');
```

- Now we can run our sample and check the we got our lightblue background page:
```
npm start
```

- _Note: if you are using libraries like bootstrap, it's a good idea to define JQuery and a global name in your wepack.config.js (You can uncomment), you can find more info about this in the following sample: [webpack jquery sample](https://github.com/Lemoncode/webpack-1.x-by-sample/tree/master/00%20Intro/04%20Jquery_):
```javascript
plugins:[
  new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
  }),
//...
]
```
