const pool = require('../../database/db');
const queries = require('./queries');

//Return all the books on the library
const getBooks = (req, res) => {
    pool.query(queries.getBooks, (error, results) => {
        if (error) throw error
        if (!results.rows.length) { //if there are no books send message 404
            res.status(404).send("There are no books!");
        } else {
            res.status(200).json(results.rows);
        }
    });
};


//Return all the books on rent, and the information about the user
const getRentedBooks = (req, res) => {
    pool.query(queries.getRentedBooks, (error, results) => {
        if (error) throw error
        if (!results.rows.length) { //if there are no books send message 404
            res.status(404).send("No rental books!");
        } else {
            res.status(200).json(results.rows);
        }
    });
};


//Return all the books that are available on the library
const getAvailableBooks = (req, res) => {
    pool.query(queries.getAvailableBooks, (error, results) => {
        if (error) throw error
        if (!results.rows.length) { //if there are no books send message 404
            res.status(404).send("No available books!");
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const getBookByISBN = (req, res) => {
    const isbn = parseInt(req.params.id);
    pool.query(queries.getBookByISBN, [isbn], (error, results) => {
        if (error) throw error
        else if (!results.rows.length) {
            res.status(404).send('Book not exist!');
        } else {
            res.status(200).json(results.rows);
        }
    });
}

//Add new Books
const addBooks = (req, res) => {
    const { isbn, title, author, year_publication } = req.body;
    pool.query(queries.addBooks, [isbn, title, author, year_publication], (error, results) => {
        if (error) { //If already exist send 403 message
            res.status(403).send('The books already exist!');
        } else {
            res.status(201).send('The book is available.');
        }
    });
};

const removeBook = (req, res) => {
    const { isbn } = req.body;

    pool.query(queries.getBookByISBN, [isbn], (error, results) => {
        if (error) throw error;
        else if (!results.rows.length) {
            res.status(404).send("The book doesn't exist");
        } else {
            pool.query(queries.removeBook, [isbn], (error, results) => {
                if (error) throw error
                else if (results.rows.length) {//If book on rent, no be deleted
                    res.status(403).send(`The books its on rent, can't be deleted!`)
                } else {
                    res.status(202).send('Deleted successfully!')
                }

            });
        }
    });
}

module.exports = {
    getBooks,
    getRentedBooks,
    getAvailableBooks,
    getBookByISBN,
    addBooks,
    removeBook
};