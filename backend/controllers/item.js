const router = require('express').Router();
const createItem = require('../services/manager/createItem');
const editItem = require('../services/manager/editItem');
const allItems = require('../services/manager/allItems');

router.route('/').post(createItem);
router.route('/').get(allItems);
router.route('/:id').put(editItem);

module.exports =router;
