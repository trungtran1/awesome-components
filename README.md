# Publish npm package

## Step 1: Create and isolate components to publish

In the boilerplate app, I went into the src folder and deleted everything besides App.js, app.css, and index.js.
I also added a folder called lib that will store everything I want to publish on npm. Inside lib , there is a folder called components to store the component elements and a file called index.js to export them.

These components are both in the components folder. Then, we’ll add them to the index.js file.

## Step 2: Install Babel and build the dist folder
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install -save @babel/polyfill
```

In the top-level folder of your project, add a file called babel.config.json and add the following presets:

```
{
 "presets": [
  [
   "@babel/env",
    {
     "targets": {
     "edge": "17",
     "firefox": "60",
     "chrome": "67",
     "safari": "11.1"
      },
   "useBuiltIns": "usage",
   "corejs": "3.6.5"
    }
],
   "@babel/preset-react"
]
}

```
 
 @babel/env tells the browser which versions it should target
 @babel/preset-react allows Babel to compile JSX.


In package.json , under scripts, replace the build script with the following:
```
"build": "rm -rf dist && NODE_ENV=production babel src/lib --out-dir dist --copy-files";
```

This will copy the src/lib to a new folder called dist . This folder is invisible but will be added to your root folder after build.

## Step 3: Alter the package.json for publishing
Update the package.json

```
{
  "name": "awesome-test-components-1",
  "description": "Awesome React components for test",
  "version": "1.0.0",
  "keywords": [
    "react",
    "components",
    "ui"
  ],
  "private": false,
  "author": "David",
  "main": "dist/index.js",
  "module": "dist/index.js",
  "files": [
    "dist",
    "README.md"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/trungtran1/awesome-components.git"
  },
  .....
}
```

## Step 4: Publish
Try login with npm in the terminal
```
npm login
```

Enter the credentials to login and get code verification by Authenticator app (if 2FA enabled)
Then publish the package
```
npm publish
```

DONE!