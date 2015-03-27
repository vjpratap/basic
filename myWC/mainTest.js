var assert = require('assert');
var myWc = require('./main.js');
var test = {};
exports.test = test;

test['wc.js one.txt => 2	10	48 one.txt'] = function(){
	var fileWithoutFlag = ['one.txt']
	var output = '	2	10	48 one.txt'
	assert.equal(myWc.show(fileWithoutFlag),output);
};

test['wc.js one.txt -l -L=> 2	26 one.txt'] = function(){
	var fileWithFlag = ['one.txt','-l','-L'];
	var expected = '	2	26 one.txt'
	assert.deepEqual(myWc.show(fileWithFlag),expected);
};

test['wc.js onee.txt => wc.js: onee.txt: No such file or directory'] = function(){
	var invalidFiles = ['onee.txt'];
	var expectedError = 'wc.js: onee.txt: No such file or directory';
	assert.deepEqual(myWc.show(invalidFiles),expectedError);
}

test['wc.js onee.txt -l -L => wc.js: onee.txt: No such file or directory'] = function(){
	var invalidFileWithFlag = ['onee.txt','-l','-L'];
	var expectedError = 'wc.js: onee.txt: No such file or directory'
	assert.deepEqual(myWc.show(invalidFileWithFlag),expectedError)
}


test['wc.js -l -L -w one.txt =>	2	10	26	one.txt'] = function(){
	var flagComesFirst = ['-l','-L','-w','one.txt'];
	var expected = '\t2\t10\t26 one.txt'
	assert.deepEqual(myWc.show(flagComesFirst),expected)
}

test['wc.js -c -L one.txt -w=>	10	48	26 one.txt'] = function(){
	var fileComesInMiddle = ['-c','-L','one.txt','-w'];
	var expectedOutput = '\t10\t48\t26 one.txt'
	assert.deepEqual(myWc.show(fileComesInMiddle),expectedOutput)
}

test['wc.js one.txt -l -l -w -w -w -L -L =>	2\t10	26 one.txt'] = function(){
	var flagsRepeatation = ['one.txt', '-l', '-l', '-w', '-w', '-w', '-L', '-L'];
	var expectedOutput = '	2\t10\t26 one.txt';
	assert.deepEqual(myWc.show(flagsRepeatation),expectedOutput);
};

test['wc.js -l -l -w -c -w -w -L -L one.txt=>	2\t10	48	26 one.txt'] = function(){
	var repeatFlagComesFirst = [ '-l', '-l', '-w','-c' ,'-w', '-w', '-L', '-L','one.txt'];
	var expectedOutput = '	2\t10\t48\t26 one.txt'
	assert.deepEqual(myWc.show(repeatFlagComesFirst),expectedOutput);
};

test['wc.js -l -l one.txt -w -w -w -L -L -c -c=>	2\t10	48	26 one.txt'] = function(){
	var fileComesInMiddleInRepeatationFlag = [ '-l', '-l', '-w' ,'one.txt','-w', '-w', '-L', '-L','-c','-c'];
	var expectedOutput = '	2\t10\t48\t26 one.txt';
	assert.deepEqual(myWc.show(fileComesInMiddleInRepeatationFlag),expectedOutput);
};

test['wc.js --help => wc information'] = function(){
	var helpFlag = ['--help'];
	var helpDiscription = 'Usage: wc [OPTION]... [FILE]...' +'\n' +
			'Print line, word, and byte counts for each FILE, and a total' +'\n' +
			'more than one FILE is specified.  With no FILE, or when FILE' + '\n' +
			'read standard input.' + '\n' + 
  			'-c, --bytes, --chars   print the byte counts' + '\n' +
  			'-l, --lines            print the newline counts' + '\n' +
  			'-L, --max-line-length  print the length of the longest line' + '\n' + 
  			'-w, --words            print the word counts' + '\n' +
      		'--help             display this help and exit';
    assert.deepEqual(myWc.show(helpFlag),helpDiscription);
};

test['wc.js one.txt -s=> wc: invalid option -- s'] = function(){
	var invalidOption = ['one.txt','-s'];
	var expectedError = 'wc: invalid option -- s' + '\nTry `wc.js --help ' + 'for ' + 'more information.'
	assert.deepEqual(myWc.show(invalidOption),expectedError);
};

test['wc.js one.txt -l -v=> wc: invalid option -- v'] = function(){
	var invalidOption = ['one.txt','-v','-l'];
	var expectedError = 'wc: invalid option -- v' + '\nTry `wc.js --help ' + 'for ' + 'more information.'
	assert.deepEqual(myWc.show(invalidOption),expectedError);
};

test['wc.js one.txt -L -c -l=> 2 	48	26 one.txt'] = function(){
	var flagWithoutSeqeunce = ['one.txt','-L','-c','-l'];
	var expectedOutput = '\t2\t48\t26 one.txt';
	assert.deepEqual(myWc.show(flagWithoutSeqeunce),expectedOutput)
}

test['wc.js one.txt -wcl => 2	10	48 one.txt'] = function(){
	var flagInJoin = ['one.txt','-wcl'];
	var expectedOutput = '\t2\t10\t48 one.txt';
	assert.deepEqual(myWc.show(flagInJoin),expectedOutput)
}

test['wc.js -wLcl one.txt => 2\t10	48	26 one.txt'] = function(){
	var flagInJoinComesFirst = ['-wLcl','one.txt'];
	var expectedOutput = '	2\t10\t48\t26 one.txt';
	assert.deepEqual(myWc.show(flagInJoinComesFirst),expectedOutput)
}

test['wc.js -abcd one.txt => wc: invalid option -- a'] = function(){
	var invalinFlagInJoin = ['-abcd','one.txt'];
	var expectedError = 'wc: invalid option -- a' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalinFlagInJoin),expectedError);
}

test['wc.js one.txt -char => wc: invalid option -- h'] = function(){
	var invalinFlagInJoinComesInMiddle = ['one.txt','-char'];
	var expectedError = 'wc: invalid option -- h' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalinFlagInJoinComesInMiddle),expectedError);
}

test['wc.js one.txt --one -wcl'] = function(){
	var invalidDoubleMinusComesFirst = ['one.txt','--one','-wcl'];
	var expectedError = 'wc: unrecognized option `--one' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalidDoubleMinusComesFirst),expectedError);
}

test['wc.js one.js -wca --one => wc: invalid option -- a'] = function(){
	var invalidSingleMinusComesFirst = ['one.txt','-wca','--one'];
	var expectedError = 'wc: invalid option -- a' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalidSingleMinusComesFirst),expectedError);
}

test['wc.js one.txt -L -L -c -l -w => 2 	10	48	26 one.txt'] = function(){
	var flagWithoutSeqeunceWithRepeatation = ['one.txt','-L','-L','-c','-l','-w'];
	var expectedOutput = '\t2\t10\t48\t26 one.txt';
	assert.deepEqual(myWc.show(flagWithoutSeqeunceWithRepeatation),expectedOutput);
}

test['wc.js one.txt -L -L -c -l -w -w -c -c -l -L -c -w=> 2 	10	48	26 one.txt'] = function(){
	var flagWithoutSeqeunceWithRepeatation = ['one.txt','-L', '-L', '-c', '-l', '-w', '-w', '-c', '-c', '-l', '-L', '-c', '-w'];
	var expectedOutput = '\t2\t10\t48\t26 one.txt';
	assert.deepEqual(myWc.show(flagWithoutSeqeunceWithRepeatation),expectedOutput)
}

test['wc.js one.txt --lines => 2 one.txt'] = function(){
	var flagWithDoubleMinus = ['one.txt','--lines'];
	var expectedOutput = '\t2 one.txt';
	assert.deepEqual(myWc.show(flagWithDoubleMinus),'\t2 one.txt')
}

test['wc.js one.txt --lined => wc: unrecognized option `--lined'] = function(){
	var invalidFlagWithDoubleMinus = ['one.txt','--lined'];
	var expectedError = 'wc: unrecognized option `--lined' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalidFlagWithDoubleMinus),expectedError)
}

test['wc.js one.txt --worlds --lined => wc: unrecognized option `--worlds'] = function(){
	var invalidFlagWithDoubleMinus = ['one.txt','--worlds','--lined'];
	var expectedError = 'wc: unrecognized option `--worlds' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalidFlagWithDoubleMinus),expectedError);
}

test['wc.js one.txt -s --worlds -w => wc: invalid option -- s'] = function(){
	var invalidFlagWithSingleAndDoubleMinus = ['one.txt','-s','--worlds','-w'];
	var giveErrorAccordingToFlag = 'wc: invalid option -- s' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalidFlagWithSingleAndDoubleMinus),giveErrorAccordingToFlag)
}

test['wc.js one.txt --wo --max- =>	10	26 one.txt'] = function(){
	var flagsubStrWithDoubleMinus = ['one.txt','--wo','--max-'];
	var expectedOutput = '\t10\t26 one.txt';
	assert.deepEqual(myWc.show(flagsubStrWithDoubleMinus),expectedOutput)
}

test['wc.js one.txt --lin --wo --ma --by --ch --l --char --bytes'] = function(){
	var flagsubStrWithDoubleMinusRepeatation = ['one.txt','--lin','--wo','--ma','--by','--ch','--l','--bytes'];
	var expectedOutput = '\t2\t10\t48\t26 one.txt';
	assert.deepEqual(myWc.show(flagsubStrWithDoubleMinusRepeatation),expectedOutput)
}

test['wc.js one.txt two.txt -s => wc: invalid option -- s'] = function(){
	var wcOptions = ['one.txt','two.txt','-s']
	var output = "wc: invalid option -- s" + '\nTry `wc.js --help ' + 'for ' + 'more information.'
	assert.deepEqual(myWc.show(wcOptions),output)
}

test['wc.js one.txt two.txt -s -l -w =>wc: invalid option -- v'] = function(){
	var invalidFlagWithTwoFiles = ['one.txt','two.txt','-v','-l','-w'];
	var expectedError = 'wc: invalid option -- v' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalidFlagWithTwoFiles),expectedError)
}

test['wc.js one.txt two.txt -s --lines -w =>wc: invalid option -- a'] = function(){
	var invalidFlagWithTwoFiles = ['one.txt','two.txt','-a','--lines','-w'];
	var expectedError = 'wc: invalid option -- a' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalidFlagWithTwoFiles),expectedError)
}

test['wc.js one.txt two.txt -n --linesss =>wc: invalid option -- n'] = function(){
	var invalidFlagWithTwoFiles = ['one.txt','two.txt','-n','--liness'];
	var giveErrorAccordingToFlag = 'wc: invalid option -- n' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalidFlagWithTwoFiles),giveErrorAccordingToFlag)
}

test['wc.js one.txt two.txt --linesss -s =>wc: unrecognized option `--lined'] = function(){
	var invalidFlagWithTwoFiles = ['one.txt','two.txt','--linesss','-s'];
	var giveErrorAccordingToFlag = 'wc: unrecognized option `--linesss' + '\nTry `wc.js --help ' + 'for ' + 'more information.';
	assert.deepEqual(myWc.show(invalidFlagWithTwoFiles),giveErrorAccordingToFlag)
}

test['wc.js one.txt two.txt => file size and total'] = function(){
	var files = ['one.txt','two.txt'];
	var expected = '\t2\t10\t48 one.txt' +'\r\n' +
        			'\t0\t0\t0 two.txt' +'\n' +
        			'\t2\t10\t48 total'
    assert.deepEqual(myWc.show(files),expected);
}

test['wc.js one.txt two.txt -L -l -w => file information with total'] = function(){
	var filesWithFlags = ['one.txt','two.txt','-L','-l','-w'];
	var expected = '\t2\t10\t26 one.txt' +'\r\n' +
        			'\t0\t0\t0 two.txt' +'\n' +
        			'\t2\t10\t26 total'
}

test['wc.js one.txt two.txt three.txt -L => all files longest line with max in these'] = function(){
	var filesWithLflag = ['one.txt','two.txt','three.txt','-L'];
	var expected =  '\t26 one.txt' + '\r\n' +  
 					'\t0 two.txt'	+ '\r\n' +
					'\t64 three.txt' + '\n' +
 					'\t64 total';
 	assert.deepEqual(myWc.show(filesWithLflag),expected);
}

test['wc.js one.txt two.txt three.txt -llllwwwwwwwcccccccccLLLLL => files detail with total'] = function(){
	var filesWithJoinFlags = ['one.txt','two.txt','three.txt','-llllwwwwwwwcccccccccLLLLL'];
	var expected =  '\t2\t10\t48\t26 one.txt' + '\r\n' +  
 					'\t0\t0\t0\t0 two.txt' + '\r\n' +  
 					'\t3\t14\t111\t64 three.txt' + '\n' +  
 					'\t5\t24\t159\t64 total'
 	assert.deepEqual(myWc.show(filesWithJoinFlags),expected);
}

test['wc.js one.txt two.txt three.txt => file size and total'] = function(){
	var files = ['one.txt','two.txt','three.txt'];
	var expected = '\t2\t10\t48 one.txt' +'\r\n' +
        			'\t0\t0\t0 two.txt' +'\r\n' +
        			'\t3\t14\t111 three.txt' + '\n' +
        			'\t5\t24\t159 total'
    assert.deepEqual(myWc.show(files),expected);
}

test['wc.js one.txt the.txt three.txt => file size and total'] = function(){
	var files = ['one.txt','the.txt','three.txt'];
	var expected = '\t2\t10\t48 one.txt' +'\r\n' +
        			'wc.js: the.txt: No such file or directory' +'\r\n' +
        			'\t3\t14\t111 three.txt' + '\n' +
        			'\t5\t24\t159 total'
    assert.deepEqual(myWc.show(files),expected);
}