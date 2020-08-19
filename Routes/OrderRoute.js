const express = require('express');
const { saveOrder, orderList,spOrder } = require('../Controllers/OrderController');

const router = express.Router();


router.post('/Create',saveOrder);
router.get('/OrderList',orderList);
router.get("/findOrder/:id",spOrder);


module.exports = router;
