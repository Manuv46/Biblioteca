const getBooks = "SELECT * FROM books";

const getBooksRent = `SELECT 
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

module.exports = {
    getBooks,
    getBooksRent,
};