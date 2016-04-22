/*
module.exports = function(req, res) {
	res.render('index');
};
*/
var Person = require('../models/person');

module.exports = function(req, res, next)
{
    var person = new Person({
		username: req.body.username,
		content: req.body.content
	});
	person.save(function(err){
		if (err) throw err;
		console.log('person saved!');
	});
    
    res.redirect('/');
 // Person.find({}, function (err, users) 
 // {
 //     if(err) throw err;
      
      //res.render('hw6',{userinfos: users});
  //});
};