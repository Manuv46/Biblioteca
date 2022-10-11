const pool = require('../../database/db');
const queries = require('./queries');

//Return all the books on the library
const getBooks = (req, res) => {
    pool.query(queries.getBooks, (error, results) => {
        if (error) throw error
        if (!results.rows.length) { //if there are no books send message 404
            res.status(404).send("There are no books!")
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
            res.status(404).send("No rental books!")
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
            res.status(404).send("No available books!")
        } else {
            res.status(200).json(results.rows)
        }
    })
}

module.exports = {
    getBooks,
    getRentedBooks,
    getAvailableBooks
};