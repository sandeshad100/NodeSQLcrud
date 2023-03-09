const {addProduct, getProduct, updateProduct, getOneProduct, deleteProduct} = require("../controller/productController")
const router = require("express").Router();
router.get("/", getProduct);

router.post("/addproduct", addProduct);
router.put("/:id", updateProduct);

router.get("/:id", getOneProduct);
router.delete("/:id", deleteProduct);

module.exports =  router;