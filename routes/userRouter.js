const { addUser,getUser,login } = require("../controller/user");

const router = require("express").Router();

router.post('/adduser',addUser);
router.get('/getuser',getUser);
router.post('/login',login);



module.exports = router;
