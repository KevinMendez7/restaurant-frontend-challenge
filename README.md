# Restaurant-Frontend-Challenge

This is a Review Restaurants page for a challenge, Please be sure that you already have restaurant-challenge-tribal project(https://github.com/KevinMendez7/restaurant-challenge-tribal/tree/master) and its running, otherwise you will see the message No restaurants found

## How to run the app

- clone the repository in the master branch.
- run `npm install` to install dependencies.
- run `npm start` and you will see the Restaurant review page
- You can also run the tests by run `npm run test`

## Testing

The react app is fully tested with jest and enzyme, you can look for file.test.js files to look the implementation.
There is a bug with axios, cross-fetch and enzyme mount function that prompt the are an async task pending but every test is working correctly.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
