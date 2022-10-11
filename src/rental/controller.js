const pool = require('../../database/db');
const queries = require('./queries');

//Returns all active rentals
const getRentals = (req, res) => {
    pool.query(queries.getRentals, (error, results) => {
        if (error) throw error
        if (!results.rows.length) { //if there are no rental send message 404
            res.status(404).send("No rental")
        } else {
            res.status(200).json(results.rows);
        }
    });
};

//Add a new Rental
const addRental = (req, res) => {
    const { users_id, isbn } = req.body; //the information for the rental be pass by a .JSON file on body
    pool.query(queries.getRentalById, [users_id], (error, results) => { //Check if the user already has a book on loan
        if (error) throw error
        if (results.rows.length != 0) { //If true send back a Forbiden message 
            res.status(403).send("The user already has a book on loan!")
        }
        else {  //Check if the book its available
            pool.query(queries.getRentalByISBN, [isbn], (error, results2) => {
                if (error) throw error
                if (results2.rows.length != 0) { //If not send back a Forbiden message
                    res.status(403).send("Book already on loan!")
                }
                else { //Add the new rental
                    pool.query(queries.addRental, [users_id, isbn], (error, results3) => {
                        if (error) { //If userId or isbn not exist on the library database it's not possible to add the new rental
                            res.status(400).send("User_Id or Book ISBN not exist!")
                        } else { //all works fine and the rental is add successfully
                            res.status(201).send("Rental success!!")
                        }
                    });
                }
            });
        }
    });
};

const removeRentedBook = (req, res) => {
    const { users_id, isbn } = req.body; //the information for the rental be pass by a .JSON file on body
    pool.query(queries.getRentalByIdAndISBN, [users_id, isbn], (error, results) => { //check that the rental exist
        const noRentalFound = !results.rows.length;
        if (noRentalFound) { //Rental not found, send back 404 message 
            res.status(404).send("The user or the book does not have a rental.");
        }
        else { //Delete the rental
            pool.query(queries.removeRental, [users_id, isbn], (error, results) => {
                if (error) throw error;
                else { //Rental Deleted Successfully
                    res.status(200).send("Rental Deleted Successfully! \n Rental finished, book available");
                }
            });
        }
    });
};

module.exports = {
    getRentals,
    addRental,
    removeRentedBook
};