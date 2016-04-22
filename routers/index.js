var express = require('express'),
    main   = require('../controllers/main'),
    create   = require('../controllers/create'),
    del   = require('../controllers/del'),
    edit =  require('../controllers/edit'),
    edit_go =  require('../controllers/edit_go'),
    router  = express.Router();

router.route('/').get(main);
router.route('/r').post(create);
router.route('/del/:id').get(del);

router.route('/edit/:id').get(edit).post(edit_go);


module.exports = router;