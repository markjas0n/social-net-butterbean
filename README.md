# Socialz - Social Network API

## Description

Socialz is a backend API for a social networking application, built using Node.js, Express.js, MongoDB, and Mongoose. This API allows users to share their thoughts, react to friends' thoughts, and manage a friend list. It is designed to handle large amounts of unstructured data efficiently using a NoSQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [User Routes](#user-routes)
- [Thought Routes](#thought-routes)
- [Seed Data](#seed-data)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Questions and Contacts](#questions-and-contacts)

## Installation

1. Clone the repository to your local machine:

    ```bash 
    git clone https://github.com/markjas0n/social-net-butterbean.git 

2. Navigate to the project directory:
    ```bash
    cd socialz
3. Install the necessary dependencies
    ```bash
    npm install
4. Ensure that your MongoDB server is running. If not, start it using:
    ```bash
    mongod
5. (optional) If you want to seed the database with initial data, run:
    ```bash 
    npm run seed

## Usage
1. Start the server:
    ```bash
    npm start
2. The API will be served at `http:localhost:3001`.
3. Use a tool like `Insomnia` or `Postman` to interact with the API

## API Routes
### User Routes
- `GET` `/api/users`: *Gets* all users
- `GET` `/api/users/:userId`: *Get* a single user by ID
- `POST` `/api/users`: Create a new user
    - #### Request Body:
        ```json
        { 
            "username": "example_user"
            "email": "user@example.com"
        }
- `PUT` `/api/users/:userId`: Update a user by ID
- `DELETE` `/api/users/:userId`: Delete a user by ID (and associated thoughts)
- `POST` `/api/users/:userId/friends/:friendId`: Add a friend to a user's friend list
- `DELETE` `/api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list

## Thought Routes
- `GET` `/api/thoughts`: Get all thoughts
- `GET` `/api/thoughts/:thoughtId`: Get a single thought by ID
- `POST` `/api/thoughts`: Create a new thought
    - #### Request Body
        ```json
        {
         "reactionBody": "This is a reaction",
         "username": "another_user"
         }
- `DELETE` `/api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought

## Seed Data 
If you want to populate the database with some initial data for testing:
1. Run the following commands:
    ```bash
    npm run seed
2. This will create a set of users and thoughts in your database. 

## Technologies Used
- Node.js: JavaScript runtime environment
- Express.js: Web framework for Node.js
- MongoDB: NoSQL database
- Mongoose: ODM for MongoDB
- Moment.js: Library for parsing, validating, manipulating, and formatting dates

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/markjas0n/social-net-butterbean/blob/main/license) file for details.

## Questions and Contacts
For any questions about this project, feel free to contact:
- **Name**: Mark Jason
- **Email**: markjas0n@icloud.com
- **Github**: markjas0n