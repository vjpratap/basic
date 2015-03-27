var wc = require('./wclib.js').lib;

exports.show = function(arguments){
	var flags = wc.arrangeFlags(arguments)						//wc.contentFlag(arguments);
	var files = wc.contentFile(arguments);
	if(flags.indexOf('--help') == -1 && !wc.IsfileExist(files[0]))
		return wc.errorMessageForFiles(files[0]);;
	if(files.length  < 2 || valueOfFlags(files[0],flags).length != flags.length) 
		return fileMap(files,flags).join('\r\n');
	if(files.length > 2 && flags.indexOf('-L') != -1)
		return maxLineLength(files,flags);
	else
		return fileMap(files,flags).join('\r\n') + totalOfFiles(fileMap(files,flags));
}

var maxLineLength = function(files,flags){
	var getTotal = totalOfFiles(fileMap(files,flags)).split('\t');
	getTotal.splice(getTotal.length - 1,1,findLongestLength(files) + ' total');
	return fileMap(files,flags).join('\r\n') + getTotal.join('\t')
}

var fileMap = function(files,flags){
	if(flags[0] == '--help')// || flags[0] == '--help'.substr(0,flags[0].length) && flags[0].length > 2)
		return helpDiscription().split();
	if(valueOfFlags(files[0],flags).length != flags.length)
		return errorMessageForFlags(flags);
	else{
		var mapOnFiles = files.map(function(file){
			if(wc.IsfileExist(file))
				return giveResult(file,flags)
			return wc.errorMessageForFiles(file);
		})
		return mapOnFiles;
	}
}

var findLongestLength = function(files){
	var onlyExistFiles = files.filter(function(file){
		return wc.IsfileExist(file);
	})
	var contentFileslongestLine = onlyExistFiles.map(function(file){
		return wc.countObject.countMaxLineLength(file);
	})	
	return Math.max.apply(null,contentFileslongestLine);
}

var getValueOfFiles = function(files){
	var splitFileValues = files.map(function(filename){
		return filename.split('\t')
	})
	var getValues = splitFileValues.map(function(filevalues){
		return filevalues.join(' ').split(' ').slice(1,filevalues.length);
	})
	var removeInvalidFileOption = getValues.filter(function(data){
		return data.length != 0;
	})
	return removeInvalidFileOption;;
}

var totalOfFiles = function(files){
	var filesTotal = getValueOfFiles(files);
	var total = filesTotal.reduce(function(pv,cv){
		return addTwoArrays(pv,cv);
	})
	return ('\n\t' + total.join('\t') + ' total');
}

var addTwoArrays = function(arr1,arr2){
	return arr1.map(function(value,index){
		return +value + +arr2[index];
	})
}


var flagFilling = function(filename,flags){
	if(flags.length == 0)
		return wcWithoutFlags(filename,flags)
	return valueOfFlags(filename,flags);
}

var valueOfFlags = function(filename,flags){
	var flagIdentifyObject = {'-l':wc.countObject.countLines,
							 '-w':wc.countObject.countWords,
							 '-c':wc.countObject.countCharacter,
							 '-L':wc.countObject.countMaxLineLength};

	var flagValueMap = flags.map(function(flag){
		if(Object.keys(flagIdentifyObject).indexOf(flag) != -1)
			return flagIdentifyObject[flag](filename);
	})
	var flagsValue = flagValueMap.filter(function(flagValue){
		return flagValue != undefined;
	})
	return flagsValue;
}


var giveResult = function(filename,flags){
		return ('\t' + flagFilling(filename,flags).join('\t') + ' ' + filename);
}	

var errorMessageForFlags = function(flags){
	if(flags[0].length == 2)
		return ('wc: invalid option -- ' + flags[0][1] + '\nTry `wc.js --help ' + 'for ' + 'more information.').split();
	return ('wc: unrecognized option `' + flags[0] + '\nTry `wc.js --help ' + 'for ' + 'more information.').split();
}

var wcWithoutFlags = function(filename,flags){
	return Object.keys(wc.countObject).map(function(countFunction){
		return wc.countObject[countFunction](filename)
	}).slice(0,Object.keys(wc.countObject).length - 1)
}

var helpDiscription = function(){
	return ('Usage: wc [OPTION]... [FILE]...' +'\n' +
			'Print line, word, and byte counts for each FILE, and a total' +'\n' +
			'more than one FILE is specified.  With no FILE, or when FILE' + '\n' +
			'read standard input.' + '\n' + 
  			'-c, --bytes, --chars   print the byte counts' + '\n' +
  			'-l, --lines            print the newline counts' + '\n' +
  			'-L, --max-line-length  print the length of the longest line' + '\n' + 
  			'-w, --words            print the word counts' + '\n' +
      		'--help             display this help and exit');

}