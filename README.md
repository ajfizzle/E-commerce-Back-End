# E-commerce-Back-End
Module 13 Challenge

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents:
- [Description](#Description)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Technologies](#Technologies)
- [Installation](#Installation)
- [Usage](#Usage)
- [Preview / Screenshot](#Preview-Screenshot)
- [Contact](#Contact)
- [References](#References)
- [License](#License)

## Description
This project is a back end for an e-commerce website built using Express.js and Sequelize, allowing managers at an internet retail company to manage their products, categories, and tags.


## Acceptance Criteria
1. Given a functional Express.js API, when I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file, then I am able to connect to a database using Sequelize.
2. When I enter schema and seed commands, then a development database is created and is seeded with test data.
3. When I enter the command to invoke the application, then my server is started and the Sequelize models are synced to the PostgreSQL database.
4. When I open API GET routes in Insomnia Core for categories, products, or tags, then the data for each of these routes is displayed in a formatted JSON.
5. When I test API POST, PUT, and DELETE routes in Insomnia Core, then I am able to successfully create, update, and delete data in my database.

## Technologies Used
- Express.js
- Sequelize
- PostgreSQL
- Dotenv

## Installation
To run this application locally, follow these steps:
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies:
    - `npm i` 
    - `npm init -y`
    - `npm i express`
    - `npm i sequelize`
    - `npm i pg`
    - `npm i dotenv`
       ## Note: Ensure "package.json" is configured with the accurate attributes.

3. Create a `.env` file in the root directory and add the following environment:
4. Run schema and seed commands:
    - `\i schema.sql`
    - `npm run seed`
5. Start the server by running: `npm start` or `node server.js`

## Usage
- Open Insomnia Core to test the API routes.
- Use GET, POST, PUT, and DELETE requests to interact with the categories, products, and tags routes.


## Preview / Screenshot

## Contact
For more projects and information about the developer, please visit:
 - https://ajfizzle.github.io/E-commerce-Back-End
 - https://github.com/ajfizzle/E-commerce-Back-End

## References:
- UT Austin Bootcamp - UTA-VIRT-FSF-PT-02-2024-U-LOLC
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- https://expressjs.com/en/starter/installing.html
- https://www.npmjs.com/package/inquirer/v/8.2.4
- https://docs.npmjs.com/cli/v10/commands/npm-init
- https://www.npmjs.com/package/dotenv#-install
- https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.