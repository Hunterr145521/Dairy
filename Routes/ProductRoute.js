const express = require('express');

const { saveOrder, orderList,spOrder } = require('../Controllers/OrderController');
const { saveProduct,saveProductRaw,listAllProduct, listAllProductRaw,findProduct,findProductRaw } = require('../Controllers/ProductController');

const router = express.Router();


router.post('/Create',saveProduct);
router.post('/CreateRaw',saveProductRaw)
router.get("/List",listAllProduct);
router.get("/ListRaw",listAllProductRaw);
router.get("/Info/:id",findProduct);
router.get("/InfoRaw/:id",findProductRaw);

router.post('/CreateOrder',saveOrder);
router.get('/OrderList',orderList);
router.get("/findOrder/:id",spOrder);

module.exports = router;
