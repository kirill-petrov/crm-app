const router = require('express').Router();
const createUser = require('../services/admin/createUser');
const editUser = require('../services/admin/editUser');
const allUsers = require('../services/admin/allUsers');


router.route('/').post(createUser);
router.route('/:id').put(editUser);
router.route('/').get(allUsers);

module.exports = router;
