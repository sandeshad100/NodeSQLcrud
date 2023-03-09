const  { products } = require("../model/index");
const Product = products;

//add product
 exports.addProduct = async(req,res)=>{
let info = {
    title:req.body.title,
    price:req.body.price,
    description:req.body.description,
    published: req.body.published ?req.body.published:false, 
};
const product = await Product.create(info);
res.status(200).json({
    product,
    message:"product added successfully"
});
}

//getProduct
 exports.getProduct = async (req, res) => {
try {
    let products = await Product.findAll({});
  console.log(products);
  res.status(200).json({
    products,
  });
} catch (error) {
  res.status(400).json({
    status : 400,
    message : "Something went wrong"
  })
}
};

//getOneProduct
 exports.getOneProduct = async(req, res) =>{
    let id = req.params.id;
    let product = await Product.findOne({where: {id:id}});
    res.status(200).json({
        product,
    });
};

//updateProduct
 exports.updateProduct = async (req,res) =>{

    let id= req.params.id;//grap ID from request URL
    const product = await Product.update(req.body, {where: {id:id}});
    res.status(200).json({
    product,
  });

};

//delete product
 exports.deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).json({
    message: "Deleted sucessfully ",
  });
};

