const router = require('express').Router();
const wc = require('../controllers/wc');
const user = require('../controllers/user');
const item = require('../controllers/item');
const order = require('../controllers/order');
const auth = require('../controllers/auth');

router.use('/auth', auth)
router.use('/wc', wc);
router.use('/user', user);
router.use('/item', item);
router.use('/order', order);

module.exports = router
