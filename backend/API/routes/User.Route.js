
const express=require('express')
const router = express.Router();
let {CreateUser,LoginUser,GetUser}=require('../controller/User.Controller')

let{CreateUserValidate,LoginValidate}=require('../Services/User.Validate')

/*USER Route*/
// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser',CreateUserValidate,CreateUser);
// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login',LoginValidate,LoginUser)
// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser',GetUser)




module.exports = router