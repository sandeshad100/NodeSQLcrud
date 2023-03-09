const { users } = require("../model");


exports.addUser = async(req, res) =>{
    await users.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    res.json({
        status:200,
        message:"added success"
    })

};

//getUser
 exports.getUser = async (req, res) => {
try {
    let usersData = await users.findAll({});
  console.log(usersData);
  res.status(200).json({
    usersData,
  });
} catch (error) {
  res.status(400).json({
    status : 400,
    message : "Something went wrong"+error
  })
}
};

 exports.login = async (req, res) => {
try {
   const email = req.body.email;
   const password = req.body.password;

   const userExist = await users.findAll({
    where: {email:email, password:password}
   })
   if(userExist.length>0){
    console.log(userExist)
    res.json({
        message:"login success"
    })
   }else{
      res.json({
        message:"login unsuccess"
    })
   }


  
} catch (error) {
  res.status(400).json({
    status : 400,
    message : "Something went wrong"+error
  })
}
};

