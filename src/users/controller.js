const pool = require('../../database/db');
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        if (error) throw error;
        else if (!results.rows.length) { //IF not found send 404
            res.status(404).send('User not exist!')
        } else {
            res.status(200).json(results.rows);
        }
    })
}

const addUser = (req, res) => {
    const { first_name, username, email } = req.body;
    pool.query(queries.addUser, [first_name, username, email], (error, results) => {
        if (error) { //If already exist send 403 message
            console.log(error)
            res.status(403).send('This User already exist!');
        } else {
            res.status(201).send('The User is available.');
        }
    });
};

module.exports = {
    getUsers,
    getUsersById,
    addUser
}