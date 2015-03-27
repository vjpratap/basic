var assert = require('assert');
var m = require('./fizzbuzz').m;
var test = {};
exports.test = test;

//console.log(m)
// test['\t\tThe value of fizz is multiple of 3, buzz is multiple of 4 and fizzbuzz is multiple of 12 \n\t\tnumber started from 1:'] = function(){
// 	assert.deepEqual('\t\tThe value of fizz is multiple of 3, buzz is multiple of 4 and fizzbuzz is multiple of 12 \n\t\tnumber started from 1:',m.startText)
// };

test['answer to 1 is 1'] = function(){
	assert.ok(m.checkFizz_Buzz(1)==1)
};

test['answer to 2 is not 1'] = function(){
	assert.ok(m.checkFizz_Buzz(2) != 1)
};


test['answer to 6 is  fizz'] = function(){
	assert.ok(m.checkFizz_Buzz(6) =='fizz');
};

test['answer to 8 is  buzz'] = function(){
	assert.ok(m.checkFizz_Buzz(8) =='buzz');
};

test['answer to 24 is  buzz'] = function(){
	assert.ok(m.checkFizz_Buzz(24) =='fizzbuzz');
};

console.log(m.start);