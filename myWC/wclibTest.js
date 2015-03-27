var assert = require('assert');
var lib = require('./wclib.js').lib;
var test = {};
exports.test = test;

test['wcfunc give true if the file is exist in wc folder'] = function(){
	assert.ok(lib.IsfileExist('one.txt'));
	assert.ok(lib.IsfileExist('two.txt'));
};

test['wcfunc give false if the file is exist in wc folder'] = function(){
	assert.ok(!lib.IsfileExist('three.txtx'));
};

test['wcfunc give number of lines of the file'] = function(){
	assert.equal(lib.countObject.countLines('one.txt'),2)
	assert.equal(lib.countObject.countLines('two.txt'),0)
};

test['wcfunc give number of words of the file'] = function(){
	assert.equal(lib.countObject.countWords('one.txt'),10)
	assert.equal(lib.countObject.countWords('two.txt'),0)
};

test['wcfunc give number of character of the file'] = function(){
	assert.equal(lib.countObject.countCharacter('one.txt'),48)
	assert.equal(lib.countObject.countCharacter('two.txt'),0)
};

test['wcfunc give number of character of the max line in the file'] = function(){
	assert.equal(lib.countObject.countMaxLineLength('one.txt'),26)
	assert.equal(lib.countObject.countMaxLineLength('two.txt'),0)
};

test['wcfunc gives the the error message the when the file is not exist in the folder'] = function(){
	assert.equal(lib.errorMessageForFiles('threem.txt'),'wc.js: threem.txt: No such file or directory')
};

test['wcfunc gives the filename'] = function(){
	assert.deepEqual(lib.contentFile(['one.txt','-l','-c']),['one.txt']);
	assert.deepEqual(lib.contentFile(['one.txt','-l','-c','-L','-w']),['one.txt']);
	assert.deepEqual(lib.contentFile(['one.txt','two.txt']),['one.txt','two.txt'])
};

test['flags elements should not be repeated'] = function(){
	assert.deepEqual(lib.stopRepeatetion(['-c','-c','-c','-c','-c']),['-c']);
	assert.deepEqual(lib.stopRepeatetion(['-w','-c','-l','-l','-w']),['-l','-w','-c']);
	//assert.deepEqual(lib.stopRepeatetion(['-L','-w']))
};

test['flags elements should be in a sequence'] = function(){
	assert.deepEqual(lib.arrangeFlags(['-c','-l','-L','-w']),['-l','-w','-c','-L'])
	assert.deepEqual(lib.arrangeFlags(['-c','-l','-L']),['-l','-c','-L'])
}

test['flags comes in single minus status'] = function(){
	assert.deepEqual(lib.convertArgumentsInFlags(['--lines', '--words','--chars']),['-l','-w','-c']);
	assert.deepEqual(lib.convertArgumentsInFlags(['-l','--wo','--words','--ma']),['-l','-w','-w','-L']);
	assert.deepEqual(lib.convertArgumentsInFlags(['-s','-L','--max-line','--cha','--lines']),["-s","-l","-c","-L","-L"]);
	assert.deepEqual(lib.convertArgumentsInFlags(['--byt','--max-line-length','-v','-s']),['-v','-s','-c','-L'])
	assert.deepEqual(lib.convertArgumentsInFlags(['--lin','--lined','--wor','--worlds']),['--lined','--worlds','-l','-w'])
	assert.deepEqual(lib.convertArgumentsInFlags(['--lier','--max-','--byte','--ch','--lin','-l','-w','-L','-c']),['--lier','-l','-l','-w','-c','-c','-c','-L','-L']);
}

test['wcfunc gives the wrong flag'] = function(){
	assert.deepEqual(lib.giveWrongFlags(['--lines', '--words','-chars']),["-c","-h","-a","-r","-s"]);
	assert.deepEqual(lib.giveWrongFlags(['--lin','--w','-w','-l']),[]);
	assert.deepEqual(lib.giveWrongFlags(['-s','-v','-a','-l','-w']),['-s','-v','-a']);
	assert.deepEqual(lib.giveWrongFlags(['-wck','--lines','-cha','-v']),['-w','-c','-k','-c','-h','-a','-v']);
	assert.deepEqual(lib.giveWrongFlags(['--lid','-wkc']),['--lid','-w','-k','-c']);
	assert.deepEqual(lib.giveWrongFlags(['-wkc','--lid']),['-w','-k','-c','--lid'])
	assert.deepEqual(lib.giveWrongFlags(['c-c.txt','one.txt']),[]);
}


