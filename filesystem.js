// var fs = require('fs');
// var data = fs.readFileSync('./range.js', 'utf8');
// // wait for the result, then use it
// console.log(data);
// var fs = require('fs');
// fs.readFile('./range.js', 'utf8', function(err, data) {
//   // the data is passed to the callback in the second argument
//   console.log(data);
// });



var fs = require('fs');
var file = fs.readFileSync('./string.js','utf8');

console.log(file.split('\r\n').length - 1);
var split = file.split('\r\n').filter(function(x){
	return x.length == 0;
})
//console.log(file.split('\r\n').length + file.split(' ').length - split.length - 3)
console.log(file.length)
var data = file.split('\r\n').reduce(function(pv,cv){
	return pv.length > cv.length ? pv : cv
})
var count = 0;
file.split('\r\n').forEach(function(x){
	x.split(' ').forEach(function(y){
		if(y != '')
			count += 1;
	}) 
})
console.log(count);
//console.log(split.length)
console.log(data.length)
//var fs = require('fs');
// var data = fs.writeFileSync('./array.js','Vijay Pratap Singh',encoding = 'utf8')
// console.log(file);
// fs.readFile('./array.js', 'utf8', function(err, data) {
//   // the data is passed to the callback in the second argument
//   console.log(data);
// });
// fs.writeFile('./array.js', '(Parmatma Yadav);', function(err) {
//   if(err) throw err;
//   console.log('File write completed');
// });
// fs.rename('./str.js','./string.js', function(err){
// 	if(err) throw err;
// 	console.log('file rename is completed');
// });