# Sample 05: Typings in Typescript 2.0

In this sample we will use JQuery library installing the typings definitions in Typescript 2.0

Summary:
- Install dependencies
- Install typescript 2.0 package.
- Install jquery typings
- Install jquery.
- Add some JQuery code.
- Launch the project.


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
