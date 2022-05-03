# NYT Cooking Clone

Explore and learn to recreate recipes you've always wanted to try from your favorite animated films and TV shows. With the NYT Cooking Clone, you can now browse a _limited_ selection of recipes from Disney, Pixar, and more!

This site was created for the final project in the Javascript course of The Odin Project's full-stack Javascript curriculum. The project details can be found [here](https://www.theodinproject.com/lessons/node-path-javascript-javascript-final-project).

[Live Demo](https://nyt-cooking-clone.web.app/)
| DESKTOP | MOBILE |
:-------------------:|:----------------------:
![NYT Cooking Site - Web Demo](https://media.giphy.com/media/yMsYaBlJPvN8GLqN1W/giphy.gif) | ![NYT Cooking Site - Mobile Demo](https://media.giphy.com/media/iNGUdq6EbdzagKdxap/giphy.gif)

### Built With

- [ReactJS](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [`styled-components`](https://styled-components.com/) 💅🏾

## Features

- Search & save recipes, marked them as cooked, or add their ingredients to your grocery list
- Leave a public cooking note to share your experiences with other readers or add a private one to keep your secret ingredient additions hidden from prying eyes
- Log in using Google or Facebook

## Getting Started

### 1) Installation

- Fork and clone the repository on your local machine
- Install project dependencies
  - `npm install`

### 2) Firebase Setup and Deploy

- Create a Firebase account if you don't already have one and set up a Firebase project to host your site
- At the top level of your src folder, create a configuration file called `firebase-config.js`
  - Copy [this code](https://github.com/firebase/codelab-friendlychat-web/blob/main/web/src/firebase-config.js) into your file
  - Replace the comment with your own Firebase configuration object
- Initialize a Firebase project in your project directory
  - `firebase init`
- Log in to your Firebase account
  - `firebase login`

### 3) Initialize Firestore Database - Upload Data

- Start the application on a local server
  - `npm start`
- In `App.js`, uncomment lines 85 - 87 in the first useEffect hook. Save the file, and check to see that the recipes data was successfully uploaded to your Firestore database.
- \*\*Re-comment lines 85-87 to avoid recipes duplication in the database.

### 4) Deploy App

- Build your application
  - `npm run build`
- Deploy the application!
  - `firebase deploy`

## Credits

### Recipes

- ["Cartoon Foods You Can Make in Real Life" by Crystal Brackett](https://www.ranker.com/list/cartoon-food-you-can-make-in-real-life/crystal-brackett)
- [Disney Meals](https://disneymeals.me/)
- [14 Anime Foods Every Anime Fan Needs to Try by Zuleika](https://www.fandom.com/articles/13-anime-foods-every-anime-fan-needs-try)

### Icons

- [MUI](https://mui.com/material-ui/icons/)
- [Flaticon](https://www.flaticon.com/)

### Logos

- [The New York Times](https://www.nytimes.com/) / [NYT Cooking](http://nytcooking.com/)

### Images

- [Unsplash](https://unsplash.com/)
- [NYT Cooking](http://nytcooking.com/)
