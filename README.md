## Overview
This project is a comprehensive application developed using Express and MongoDB with Mongoose. It features an administration panel for managing courses and a user interface for course enrollment. Users can register, browse available courses, and purchase them, while administrators can create, update, and list courses. The application maintains a relational structure between users and their purchased courses using Mongoose schemas.

## Features
- User and Admin authentication
- Course creation and listing by admins
- User sign-up and course purchase
- Relational data management between users and courses


## Installation
### Clone the repository:
- git clone https://github.com/VarshaRani9/Course_Selling_App.git
- cd Course_Selling_App

### Install dependencies:
npm install

### Configuration:
- Create a config file in the root of your project.
  - Add your MongoDB URI to config.js as follows: 
  
   ` module.exports = {
    "mongoURI": "<your-mongodb-connection-string>"
    }`

- Ensure that your config directory is included in your .gitignore file to keep your MongoDB URI secure:
  
    /config

### Start the server:
node index.js

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
