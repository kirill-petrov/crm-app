const router = require('express').Router();
const createOrder = require('../services/manager/createOrder');
const genOrderNum = require('../services/manager/genOrderNum');
const closeOrder = require('../services/worker/closeOrder');
const executionOrder = require('../services/worker/executionOrder');
const executionProgres = require('../services/worker/executionProgres');
const getOrders = require('../services/worker/getOrders');
const getWorkerOrder = require('../services/worker/getWorkerOrder');
const showOrdersList = require('../services/manager/showOrdersList');
const editOrder = require('../services/manager/editOrder');

router.route('/').post(createOrder);
router.route('/progressive/').post(executionOrder);
router.route('/progressive/').put(executionProgres);
router.route('/close').put(closeOrder);
router.route('/:id').put(editOrder);
router.route('/').get(showOrdersList);
router.route('/get-random').get(genOrderNum);
router.route('/:wcCode/:wcId').get(getOrders);
router.route('/worker/:userId/:wcCode').get(getWorkerOrder);

module.exports = router;
