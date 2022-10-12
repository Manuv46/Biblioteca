# Biblioteca
 Example test with Nodejs, Expressjs and PostgreSQL

## Installation
After downloading this repo, Create a Database using the `Librari.sql` file that you can find in database folder,
<br/> after creating the database execute the following commands: 
1. `npm install` to install all the project dependencies 
2. `npm start` to execute the script 

## API
The reference address it's `localhost:3000/api/` 

## API BOOKS

- `localhost:3000/api/books` to see info of all books
- `localhost:3000/api/books/rented` to see info of all rented books and the user that take the book
- `localhost:3000/api/books/available` to see info of all available books
- `localhost:3000/api/books/:id` to see info of a single book
- `localhost:3000/api/books/newbook` to add a new book, for that u have to add info in the request body as in the example:
   
   ``` 
   { 
      "isbn" : "9788893365926",  
      "title" : "Nuovo libro",    
      "author" : "Marcantonio",    
      "year_publication" : "2021-12-31 "
   }
   ```
- `localhost:3000/api/books/removebook ` to remove a book, add the isbn on the body :
  
  ``` 
   { 
      "isbn" : "9788893365926"
   }
   ```
   
   
## API RENTAL
- `localhost:3000/api/rental` to see info of all renatls

- `localhost:3000/api/newrental` to add a new rental add on the body add:
   ```
   {
       "users_id" : "3",
       "isbn"  : "9788893365926"
   }
   ```
-  `localhost:3000/api/remove` to delete a rental add on the body add:
   ```
    {
       "users_id" : "3",
       "isbn"  : "9788893365926"
    }
    ```

## API USER
- `localhost:3000/api/user` to see info of all users
- `localhost:3000/api/user/:id` to see if of a user
- `localhost:3000/api/newuser` to add a new user and on the body add: 
   
   ```
   {
      "first_name": "Paperino",
      "username": "Paperino",
      "email": "paperino@gmail.com"
   }
   ```




