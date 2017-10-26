var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*')
	var temp=req.body.title;
  var temp2=req.body.cont;
  res.send({'name':temp,'name2':temp2})
//	fs.writeFile('zzl.txt',temp,function(err){
		//
//})
	
});



module.exports = router;
