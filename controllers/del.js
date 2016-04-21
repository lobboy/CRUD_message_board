var Person = require('../models/person');

module.exports = function(req, res, next) {
  Person.findByIdAndRemove(req.params.id,function(err,users){
      if(err) throw err;
	  console.log('person deleted!');
      res.redirect('/');
  });
};
