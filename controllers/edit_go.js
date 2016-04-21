var Person = require('../models/person');

module.exports = function(req, res, next) {
	Person.findByIdAndUpdate(req.params.id, {username:req.body.data_who,content: req.body.data_content},
    function(err, users) {
		if (err) throw err;
		res.redirect('/');
	})
};
