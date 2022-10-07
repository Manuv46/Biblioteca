const { Router } = require('express');
const controller = require('./controller')

const router = Router()

router.get('/', controller.getBooks);
router.get('/rent/', controller.getBooksRent);

module.exports = router;