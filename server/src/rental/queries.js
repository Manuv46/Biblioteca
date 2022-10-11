const getRentals = "SELECT * FROM rental";
const getRentalByIdAndISBN = "SELECT * FROM rental WHERE users_id=$1 AND isbn=$2";
const getRentalById = "SELECT * FROM rental WHERE users_id = $1";
const getRentalByISBN = "SELECT * FROM rental WHERE isbn = $1";
const addRental = "INSERT INTO rental (users_id, isbn, rental_date) VALUES ($1, $2, CURRENT_TIMESTAMP)";
const removeRental = "DELETE FROM rental WHERE users_id=$1 AND isbn=$2";

module.exports = {
    getRentals,
    getRentalByIdAndISBN,
    getRentalById,
    getRentalByISBN,
    addRental,
    removeRental
}