var express = require('express');
const hats_controlers= require('../controllers/hats');
var router = express.Router();
/* GET hatss */
router.get('/', hats_controlers.hats_view_all_Page );
/* GET detail hats page */
router.get('/detail', hats_controlers.hats_view_one_Page);
/* GET create hats page */
router.get('/create', hats_controlers.hats_create_Page);
/* GET create update page */
router.get('/update', hats_controlers.hats_update_Page);
/* GET delete hats page */
router.get('/delete', hats_controlers.hats_delete_Page);

module.exports = router;