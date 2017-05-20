const router=require('express').Router();
const userControllers=require('../controllers/user');

router.route('/api/profile')
    .get(userControllers.getProfile);
module.exports=router;
