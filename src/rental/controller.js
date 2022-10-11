const pool = require('../../database/db');
const queries = require('./queries');

const getRentals = (req, res) => {
    pool.query(queries.getRentals, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addRental = (req, res) => {
    const { users_id, isbn } = req.body;
    pool.query(queries.getRentalById, [users_id], (error, results) => {
        if (results.rows.length != 0) {
            res.status(403).send("The user already has a book on loan!")
        }
        else {
            pool.query(queries.getRentalByISBN, [isbn], (error, results2) => {
                if (results2.rows.length != 0) {
                    res.status(403).send("Book already on loan!")
                }
                else {
                    pool.query(queries.addRental, [users_id, isbn], (error, results3) => {
                        if (error) {
                            res.status(400).send("User_Id or Book ISBN not exist!")
                        } else {
                            res.status(201).send("Rental success!!")
                        }
                    });
                }
            });
        }
    });
};

const removeRentedBook = (req, res) => {
    const { users_id, isbn } = req.body;
    pool.query(queries.getRentalByIdAndISBN, [users_id, isbn], (error, results) => {
        const noRentalFound = !results.rows.length;
        if (noRentalFound) {
            res.status(404).send("The user or the book does not have a rental.");
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
    addRental,
    removeRentedBook
};