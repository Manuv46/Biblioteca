const pool = require('../../db');
const queries = require('./queries');

const getBooks = (req, res) => {
    pool.query(queries.getBooks, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getBooksRent = (req, res) => {
    pool.query(queries.getBooksRent, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getBooks,
    getBooksRent
};