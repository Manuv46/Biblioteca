const { Router } = require('express');
const controller = require('./controller')

const router = Router()

router.get('/', controller.getBooks);
router.get('/rented', controller.getRentedBooks);
router.get('/available', controller.getAvailableBooks);
router.get('/:id', controller.getBookByISBN);
router.post('/newbook', controller.addBooks);
router.delete('/removebook', controller.removeBook);

module.exports = router;