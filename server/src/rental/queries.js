const getRentals = "SELECT * FROM rental";
const getRental = "SELECT * FROM rental WHERE users_id=$1 AND isbn=$2";
const removeRental = "DELETE FROM rental WHERE users_id=$1 AND isbn=$2";

module.exports = {
    getRentals,
    getRental,
    removeRental
}