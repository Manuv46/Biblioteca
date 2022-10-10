const { Router } = require('express');
const controller = require('./controller')

const router = Router()

router.get('/', controller.getRentals);
router.delete('/remove', controller.removeRentedBook)
module.exports = router;