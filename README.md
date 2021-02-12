# Tap Room

## Fundamentals of React Independent Project for Epicodus, Weeks 16 & 17

### By Danielle Thompson

### Project began 2.12.21

## Get in Touch

danithompson74 at gmail.com | [LinkedIn](https://www.linkedin.com/in/danielle-thompson74/)

## Known Bugs

No known bugs at this time.

[Report bugs here.](https://github.com/dani-t-codes/tap-room/issues) | [Request features here.](https://github.com/dani-t-codes/tap-room/issues)

___

## Description

TODO

### Objectives

READ
view list of all kegs with (name, brand, price & alcoholContent)
onclick to toggle form

CREATE
onclick to create a new keg from form

READ - Details
onclick toggle details
view # of pints left in a keg (full keg ~ 124 pints)
have keg say "OOS" when pintsLeft === 0 {stretch}

UPDATE
update whole item {stretch}
onclick for decrementing quantity(inventory) - (kegs !<= 0)

DELETE
onclick to delete an item && reduce quantity of item (inventory) {stretch}

## Component Diagram

![Tap Room File Tree](https://i.postimg.cc/BnXjV00P/Tap-Room-File-Tree.png)

## User Stories

- A user should be able to Create, Read, Update and Delete items in the store. Items should have fields for name, brand, price, alcoholContent, and pintsLeft.
- Decrease kegQuantity remaining per keg when a pint is purchased. For instance, if a user clicks "Buy", the quantity will decrease by one.
- When the quantity of an item is reduced to 0, the item should say "Out of Stock". A user should not be able to reduce the quantity of an item below 0.

:-:

## Wireframe

![Tap Room Wireframe](https://i.postimg.cc/V6Jn98HR/Tap-Room-Wire-Frame.png)

:-:

## Stretch Goals

- Implement more CSS/CSS objects

## Technologies Used

- [VS Code](https://code.visualstudio.com/download)
- Git & GitHub
- JavaScript ES6
- JSX
- React Framework v17.0
- `create-react-app`
- `npm install --save-exact react-scripts@3.2.0`
- webpack v5.11.1
- Babel
- ESLint
- node.js v15.8.0
- Bootstrap v5.0.0

___

### Setup/Installation Requirements

#### Live Page

- To access the live page visit ... TODO

#### Running the application locally

TODO

##### Available Scripts

In the project directory, you can run:

###### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

###### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

___

#### Legal, or License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2021 *_Danielle Thompson_*
