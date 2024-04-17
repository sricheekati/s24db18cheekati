var express = require('express');
const hats_controlers= require('../controllers/hats');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET hatss */
router.get('/', hats_controlers.hats_view_all_Page );
/* GET detail hats page */
router.get('/detail', hats_controlers.hats_view_one_Page);
/* GET create hats page */
router.get('/create',secured, hats_controlers.hats_create_Page);
/* GET create update page */
router.get('/update', secured,hats_controlers.hats_update_Page);
/* GET delete hats page */
router.get('/delete',secured, hats_controlers.hats_delete_Page);

module.exports = router;