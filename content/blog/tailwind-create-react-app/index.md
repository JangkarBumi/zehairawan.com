---
title: How to use tailwindcss with create-react-app
date: "2020-11-06"
description: "How to configure tailwindcss with react tutorial"
---

There is a lot of UI frameworks available to use for your react project. For example Material UI, React Bootstrap & Semantic UI. But most of them requiring you to make a lot of modification for design to be unique, otherwise your app will looks like many other that using the default design.

Tailwind comes to solve exactly that, even though it's not fair to compare component based and utility CSS framework. Component based framework has it place which is to allow you build your app quickly without worrying too much about styling and customizing it later on. It's great if you have a deadline, otherwise i would recommend to use tailwind.

### Install dependencies in dev

`npm i -D tailwindcss postcss-cli autoprefixer@9.8.5`

tailwindcss for
postcss-cli for
autoprefixer for . You need to specify the version for this package otherwise you will install the latest version that will cause an error. You can read more about that [here](https://stackoverflow.com/questions/64057023/error-postcss-plugin-autoprefixer-requires-postcss-8-update-postcss-or-downgra).

### Configure postcss

create postcss config
`touch postcss.config.js`

in that file write

`module.exports = { plugins:[ require('tailwindcss'), require('autoprefixer') ] } `

### Configure tailwind

Create tailwind config
`npx tailwind init`
It will generate a file called tailwind.config.js .You only need to edit this file if you want to customize tailwind later on.

create assets folder inside src folder
and

`src/assets/tailwind.css`

`src/assets/main.css`

in tailwind.css

`@import "tailwindcss/base";`

`@import "tailwindcss/components";`

`@import "tailwindcss/utilities";`

Edit index.js to include main.css

`import './assets/main.css'`

### Edit Script in package.json

` "scripts": { "start": "npm run watch:css && react-scripts start", "build": "npm run watch:css && react-scripts build", "test": "react-scripts test", "eject": "react-scripts eject", "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css" }`

You need to restart your CRA server after modifying package.json

### Test it out

Create h1 element and give it `text-blue-500`

`<h1 className="text-blue-500">Hello</h1>`

It should change the text to blue.

### Customize Tailwind

If you want to add your custom classes in tailwind, modify tailwinw.config.js.

For example i want to add custom height classes with vh.

`module.exports = { future: { // removeDeprecatedGapUtilities: true, // purgeLayersByDefault: true, }, purge: [], theme: { extend: { height: { "10v": "10vh", "20v": "20vh", "30v": "30vh", "40v": "40vh", "50v": "50vh", "60v": "60vh", "70v": "70vh", "80v": "80vh", "90v": "90vh", "100v": "100vh", }, }, }, variants: {}, plugins: [], }`

After making those changes i can use `h-10v` classes to make height of an element to 10vh.
