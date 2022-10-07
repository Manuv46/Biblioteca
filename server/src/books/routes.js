const { Router } = require('express');
const controller = require('./controller')

const router = Router()

router.get('/', controller.getBooks);
router.get('/rental/', controller.getRentedBooks);
router.get('/available/', controller.getAvailableBooks);

module.exports = router;