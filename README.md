Formedix Flickr Application By Andrew Tinsley

Description:

A simply app that takes a search term and searched the Flickr Portal using a non-commercial
API to return photos of the search criteria

This displays the maxiumum number of images per serach request ( currently 500) and returns them
on a new pages enabling you to scroll down to the end of the results.

Installation:

This app is built upon NodeJS/Express Framework and requires the following packages
to be installed through the NPM package management system, using the following 
commands:

npm install express --save
npm install ejs --save
npm install body-parser --save
npm install express-session --save
npm install axios --save
npm install session-memory-store --save
npm install flash --save


Also used within this application by means of importing <link> headers are the following frameworks:

Bootstrap V3.3.7
jQuery V3.2.1


These have been chosen to simpilfy the positioning of the thumbnails and other components

Initialisation:

Once the npm package dependencies have been installed, the application can be run using the following command:

Node app.js

Andrew Tinsley - 2018