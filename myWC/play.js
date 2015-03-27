// var a = {'v':'vijay','p':'pratap','s':'singh'}
// var b = ['v','s','c']
// var e = b.map(function(data){
// 	return a[data];
// })
// console.log(e);
// console.log(e.indexOf(undefined) != -1)

// var a = ['a','b','c','d','e'];
// var b = ['a','d','b','f'];
// var c = b.map(function(data){
// 	return a.indexOf(data)
// })
// console.log(b[c.indexOf(-1)])

// var v = ['v','vijay','guddu'];
// var p = ['p','pratap'];
// var s = ['s','singh'];
// var flag = ['v','vijay','s','guddu','pratap','ajay','vi','pra','vij','sin']

// var join = v.concat(p).concat(s);
// var fill = [];
// var anexpected = [];
// flag.forEach(function(data){
// 	if(join.indexOf(data) == -1)
// 		return anexpected.push(data)
// 	if(v.indexOf(data) != -1 || data == v[1].substr(0,data.length))
// 		return fill.push(v[0]);
// 	if(p.indexOf(data) != -1 || data == p[1].substr(0,data.length))
// 		return fill.push(p[0])
// 	if(s.indexOf(data) != -1 || data == s[1].substr(0,data.length))
// 		return fill.push(s[0]);
// })
// var fill = flag.filter(function(data){
// 	if(join.indexOf(data) != -1)
// 		return 
// })
// console.log(fill);
// console.log(anexpected);

// var b = [ '\t26 one.txt',
//   '\t0 two.txt',
//   '\t94 runTest.js',
//   '\t165 wc.todo',
//   'wc.js: kgjk: No such file or directory' ]

// var a = [ '\t2\t10\t48 one.txt',
//   '\t0\t0\t0 two.txt',
//   'wc.js: the.txt: No such file or directory',
//   '\t102\t362\t3623 runTest.js' ]

// var getarray = function(array){
// 	var sum = array.map(function(data){
// 		return data.split('\t')
// 	})
// 	var arr = sum.map(function(data){
// 		return data.join(' ').split(' ').slice(1,data.length);
// 	})
// 	var filter = arr.filter(function(data){
// 		return data.length != 0;
// 	})
// 	return filter;
// }


// var arrTotal = function(array){
// 	var arr = getarray(array);
// 	var total = arr.reduce(function(pv,cv){
// 		return add(pv,cv);
// 	})
// 	return total;
// }



// var add = function(arr1,arr2){
// 	return arr1.map(function(data,index){
// 		return +data + +arr2[index];
// 	})
// }


// console.log('\t' +arrTotal(b).join('\t') + ' total');
// var total = function(array){
// 	var arr = getarray(array)
// 	var total = arr.map(function(data,index){
// 		if(total[index] == undefined)
// 			return data;
// 		return data + total[index];
// 	})
// 	return arr;
// }

// add = total(a) +


//console.log(getarray(b));

// var func = function(){
// 	return 'Usage: wc [OPTION]... [FILE]...' +'\n' +
// 			'Print line, word, and byte counts for each FILE, and a total' +'\n' +
// 			'more than one FILE is specified.  With no FILE, or when FILE' + '\n' +
// 			'read standard input.' + '\n' + 
//   			'-c, --bytes, --chars   print the byte counts' + '\n' +
//   			'-l, --lines            print the newline counts' + '\n' +
//   			'-L, --max-line-length  print the length of the longest line' + '\n' + 
//   			'-w, --words            print the word counts' + '\n' +
//       		'--help             display this help and exit'

// }

// console.log(func())

var a = ['-l','--lines'];
var b = ['-l','--line','-w','--max','--l']
var c = []
b.forEach(function(data){
	if(a.indexOf(data) != -1 || data == a[1].substr(0,data.length))
		return c.push(a[0]);
})

console.log(c)






















