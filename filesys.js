var fs = require('fs');
// fs.exists('function.js', function (exists) {
//   if(exists)
//   	console.log('file hai')
//   else
//   	console.log('kuch ni hai');
// });
var isExist = function(filename){
	return fs.existsSync(filename)
}
// console.log(isExist('copyy.js'))

// var f2 = './wcTODO.todo';
// var f1 = './wc.todo';
// var fd = fs.renameSync(f2,f1);
// con
