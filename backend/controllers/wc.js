const router = require('express').Router();
const createWorkCenter = require('../services/admin/createWorkCenter');
const editWorkCenter = require('../services/admin/editWorkCenter');
const listingWorkCenters = require('../services/admin/listingWorkCenter');

router.route('/').get(listingWorkCenters);
router.route('/').post(createWorkCenter);
router.route('/').put(editWorkCenter);

module.exports = router;
