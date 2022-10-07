const getBooks = "SELECT * FROM books";

const getRentedBooks = `SELECT 
                            books.isbn, 
                            books.title,
                            books.author,
                            books.year_publication,
                            users.username,
                            users.first_name,
                            users.email,
                            rental.rental_date
                      FROM books 
                      JOIN rental ON books.isbn = rental.isbn
                      JOIN users ON rental.users_id = users.users_id `;

const getAvailableBooks = `SELECT 
                            books.isbn, 
                            books.title,
                            books.author,
                            books.year_publication
                           FROM books 
                           LEFT JOIN rental ON books.isbn = rental.isbn
                           WHERE NOT EXISTS ( SELECT rental.isbn FROM rental WHERE books.isbn = rental.isbn)`;

module.exports = {
    getBooks,
    getRentedBooks,
    getAvailableBooks,
};