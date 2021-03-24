# Smart To-Do App

This Smart To-Do App is a single page application that sorts the users input into 4 different catagories - Products, Books, Restaurants, and Movies. Our app utilizes external apis (such as yelp, google books, rainforest) to find the exact match that the user is looking for, and saves them in a database built using PostgreSQL.

## Screenshots

!['Homepage'](https://github.com/Sirrom84/BREW/blob/master/public/homePage.png?raw=true)
!['SearchItem'](https://github.com/Sirrom84/BREW/blob/master/public/addToList.png?raw=true)
!['AddItem'](https://github.com/Sirrom84/BREW/blob/master/public/afterAdd.png?raw=true)

## Getting Started

1. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/1`


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Axios
- Body-parser
- Chalk 2.x or above
- Dotenv
- Ejs
- Express
- Knex
- Morgan
- Node-sass-middleware
- pg

