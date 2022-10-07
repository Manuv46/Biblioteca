const pool = require('../../db');
const queries = require('./queries');

//TODO: ERROR HANDLING
const getBooks = (req, res) => {
    pool.query(queries.getBooks, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


//TODO: ERROR HANDLING
const getRentedBooks = (req, res) => {
    pool.query(queries.getRentedBooks, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


//TODO: ERROR HANDLING
const getAvailableBooks = (req, res) => {
    pool.query(queries.getAvailableBooks, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getBooks,
    getRentedBooks,
    getAvailableBooks
};