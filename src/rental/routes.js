const { Router } = require('express');
const controller = require('./controller')

const router = Router()

router.get('/', controller.getRentals);
router.post('/newrental', controller.addRental);
router.delete('/remove', controller.removeRentedBook);
module.exports = router;