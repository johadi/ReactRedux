const router=require('express').Router();
const userControllers=require('../controllers/user');

router.route('/profile')
    .get(userControllers.getProfile);
module.exports=router;
