const pool = require('../../db');
const queries = require('./queries');

const getRentals = (req, res) => {
    pool.query(queries.getRentals, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const removeRentedBook = (req, res) => {
    const { users_id, isbn } = req.body;
    pool.query(queries.getRental, [users_id, isbn], (error, results) => {
        const noRentalFound = !results.rows.length;
        if (noRentalFound) {
            res.send("The user or the book does not have a rental");
        }
        else {
            pool.query(queries.removeRental, [users_id, isbn], (error, results) => {
                if (error) throw error;
                res.status(200).send("Rental Deleted Successfully! \n Rental finished, book available");
            });
        }
    });
};

module.exports = {
    getRentals,
    removeRentedBook
};