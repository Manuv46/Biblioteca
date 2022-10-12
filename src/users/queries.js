const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE users_id = $1";
const addUser = "INSERT INTO users (first_name,username,email,registration_date) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)";
const removeUser = "DELETE FROM users WHERE users_id = $1";

module.exports = {
    getUsers,
    getUsersById,
    addUser,
    removeUser
}