# AutomationDemo
Gulp JS build automation with Node for SASS,TypeScript, WebPack and Browsersync

## What it is

The AutomationDemo demonstrates a build system that allows your changes to TypeScript and SASS files to be automatically transpiled, compressed, and put in a seperate directory away from your working files. TypeScript files are also bundled together with webpack for server efficiency and ease of devevlopment.

## How to use

You must first have installed npm, the Node JS package manager then you run

```js
>npm install
>gulp
```

And that's it. All changes will made to html/ts/scss files will be formatted for production and updated in the browser.

To build the distribution folder without starting Browsersync you can run

```js
>gulp build
```

And you can remove it with

```js
>gulp:remove
```
