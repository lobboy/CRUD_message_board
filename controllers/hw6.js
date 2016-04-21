/*
module.exports = function(req, res) {
	res.render('index');
};
*/
var Person = require('../models/person');

module.exports = function(req, res, next)
{
  Person.find({}, function (err, users) 
  {
      if(err) throw err;
      
      res.render('hw6',{userinfos: users});
  });
};