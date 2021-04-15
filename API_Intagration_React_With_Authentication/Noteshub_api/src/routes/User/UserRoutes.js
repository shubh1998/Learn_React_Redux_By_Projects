const promiseRouter = require('express-promise-router');
const router = promiseRouter();

//------Import Midlewares--------------
const checkUserStatus = require("../../middlewares/checkUserStatus");
//----------Using passport for authentication---------
const passport = require("passport");
require("../../middlewares/passport");

const UserManagement = require("../../controllers").Usermanagement;

/**
 *  =================================================================================================================================
 * @description:{ User Doesn't Need to do login to access these APIs}
 *  =================================================================================================================================
 */

 /*--------Register User Route---------*/
 router.post('/registeruser', UserManagement.registerUser);
 /*--------Login User Route---------*/
 router.post('/userlogin', UserManagement.UserLogin);


/**
 *  =================================================================================================================================
 * @description:{ User Need to do login to access these APIs}
 *  =================================================================================================================================
 */

 /*--------Get User Details Route---------*/
 router.get('/userprofile/:id', passport.authenticate('jwt', {session: false}), checkUserStatus.isActiveUser ,UserManagement.getUserDetailsById);
 /*--------Logout User Route---------*/
 router.get('/userlogout', passport.authenticate('jwt', {session: false}), checkUserStatus.isActiveUser ,UserManagement.logoutUser);
 /*--------Update Users Details by id Route---------*/
 router.patch('/updateuser', passport.authenticate('jwt', {session: false}), checkUserStatus.isActiveUser ,UserManagement.updateUserDetailsById);


/**
  * @description - {Export the router}
*/
module.exports = router;