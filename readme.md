# AutomationDemo
Gulp JS build automation with Node for SASS,TypeScript, WebPack and Browsersync

## What is this?

The AutomationDemo demonstrates a build system that allows you to see your changes live with HTML, TypeScript and SASS files.
These are automatically transpiled, compressed, and put in a seperate directory away from your working files for you so you can worry just about development.
TypeScript files are also bundled together with webpack for server efficiency and ease of devevlopment.

This build setup is easily extensible and was originally meant for use with Angular 2

## How do I use this?

You must first have installed npm, the Node JS package manager. Then you can run:

```js
>npm install
>gulp
```

And that's it. Any changes made to html/ts/scss files will be formatted for production and autoatically updated in the browser.

To build the distribution folder without starting Browsersync you can run:

```js
>gulp build
```

And it can be removed with:

```js
>gulp:remove
```
