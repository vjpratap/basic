var lib = {};
exports.lib = lib;
var fs = require('fs')

lib.IsfileExist = function(filename){
	return fs.existsSync(filename);
} 

var isNotEmpty = function(ele){
	return ele!=='';
};

var fileContent = function(filename){
	return fs.readFileSync(filename, 'utf8')
}

var lineFlags = function(){
	return [ '-l', '--lines'];
}

var wordsFlag = function(){
	return ['-w', '--words']; 
}

var charArray = function(){
	return ['-c', '--chars', '--bytes'];
}

var MaxLineLengthFlag = function(){
	return ['-L', '--max-line-length'];
}

lib.combinationOfAllFlag = function(){
	return lineFlags().concat(wordsFlag()).concat(charArray()).concat(MaxLineLengthFlag());
}

var allFlagArrayInOneArray = function(){
	return [lineFlags(),wordsFlag(),charArray(),MaxLineLengthFlag()];
}

lib.countObject = {
	countLines:function(filename){
		return fileContent(filename).split('\r\n').length - 1;
	},
	countWords:function(filename){
		return fileContent(filename).split(/\s+/).filter(isNotEmpty).length;
	},
	countCharacter:function(filename){
		return fileContent(filename).length;
	},
	countMaxLineLength:function(filename){
		return fileContent(filename).split('\r\n').reduce(function(pv,cv){
			return pv.length > cv.length ? pv : cv;
		}).length;
	}
}

lib.errorMessageForFiles = function(filename){
	if(!lib.IsfileExist(filename))
		return 'wc.js: ' +filename+': No such file or directory'
}

lib.contentFile = function(process){
	var fileArray = process.filter(function(data){
		return data[0] != '-';
	})
	return fileArray;	
}

lib.stopRepeatetion = function(array){
	var flagsWithoutRepeatetion = [];
	lib.convertArgumentsInFlags(array).forEach(function(data){
		if(flagsWithoutRepeatetion.indexOf(data) == -1)
			flagsWithoutRepeatetion.push(data)
	})
	return flagsWithoutRepeatetion;
}

lib.arrangeFlags = function(array){
	var flagInSeqeunce = ['-l','-w','-c','-L'];
	var flagsInSequence = lib.stopRepeatetion(array).sort(function(pv,cv){
		return flagInSeqeunce.indexOf(pv) - flagInSeqeunce.indexOf(cv);
	})
	return flagsInSequence;
}

lib.convertArgumentsInFlags = function(arrayOfFlag){
	var contantSingleMinusflags = [];
	var realArray = arrayOfFlag;
	allFlagArrayInOneArray().forEach(function(countFlags){
		arrayOfFlag.forEach(function(flag){
			if(countFlags.indexOf(flag) != -1 || flag == countFlags[1].substr(0,flag.length) || countFlags.length == 3 && flag == countFlags[2].substr(0,flag.length))
				contantSingleMinusflags.push(countFlags[0])
		})
	})
	return lib.giveWrongFlags(arrayOfFlag).concat(contantSingleMinusflags);
};



var matchInvalidSubStringsForFlags = function(str){
	return lib.combinationOfAllFlag().filter(function(invalidFlagsubstr){
		return str == invalidFlagsubstr.substr(0,str.length);
	})
}

lib.giveWrongFlags = function(arrayOfFlag){
	var unexpectedFlag = [];
	arrayOfFlag.forEach(function(flag){
		if(lib.combinationOfAllFlag().indexOf(flag) == -1 && matchInvalidSubStringsForFlags(flag).length == 0)
			unexpectedFlag.push(flag);
	});
	var forDoubleMinus = unexpectedFlag.filter(function(invalidFlag){
		return invalidFlag[0] == '-' && invalidFlag[1] == '-';
	});
	var forSingleMinus = unexpectedFlag.filter(function(invalidFlag){
		return invalidFlag[0] == '-' && invalidFlag[1] != '-';
	})
	var addMinusAfterBreaking = forSingleMinus.map(function(breakFlag){
		return breakFlag.substr(1,breakFlag.length -1).split('').map(function(addMinus){
			return '-' + addMinus;
		})
	});
	var joinFlag = addMinusAfterBreaking.join().split(',');
	if(unexpectedFlag.indexOf(forSingleMinus[0]) < unexpectedFlag.indexOf(forDoubleMinus[0]))
		return joinFlag.concat(forDoubleMinus).filter(isNotEmpty);
	return  forDoubleMinus.concat(joinFlag).filter(isNotEmpty);
}


