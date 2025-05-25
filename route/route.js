const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
  restockProduct
} = require('../controllers/productcontroller');

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/low-stock', getLowStockProducts); 
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.put('/restock/:id', restockProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
