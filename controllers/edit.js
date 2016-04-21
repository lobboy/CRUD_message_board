var Person = require('../models/person');

module.exports = function(req, res, next) {
	Person.findById(req.params.id, function(err, users) {
		if (err) throw err;
		res.render('edit', {userinfos: users});
	})
};
