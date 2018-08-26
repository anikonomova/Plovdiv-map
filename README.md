#Restaurants in Plovdiv

It's an application built using ReactJS. It helps to find restaurants in Plovdiv - The cultural capital of Europe (2019)! The top place to visit!
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), it uses Google Maps API to display a Map,andthe provided data is from [Foursquare API]("https://foursquare.com/").

##How it works?
This app uses Google Maps API to display a Map, and FourSquare API to get places info. It has also a Menu component that display a List of Places, and a Search Filter. Just Click on any place from the menu and it would trigger its Marker on the Map!

## How to run?
git clone https://github.com/anikonomova/Plovdiv-map
cd Plovdiv-map
npm install
npm start - starts a live preview at http://localhost:3000/

## Production Instructions
npm build
This will build the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
It also includes a service worker managing local cache on future visits. - Run npm run build, then change directory to '/build' and start a server.

##Contributing
Anna Ikonomova
This App is the final project of FEND - Front End Web Developer Nano Degree with Udacity.
