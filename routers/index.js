var express = require('express'),
    hw6   = require('../controllers/hw6'),
    hw6_post   = require('../controllers/hw6_post'),
    del   = require('../controllers/del'),
    edit =  require('../controllers/edit'),
    edit_go =  require('../controllers/edit_go'),
    router  = express.Router();

router.route('/').get(hw6);
router.route('/r').post(hw6_post);
router.route('/del/:id').get(del);

router.route('/edit/:id').get(edit).post(edit_go);


module.exports = router;