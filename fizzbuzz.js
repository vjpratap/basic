var m ={};
exports.m = m;

m.startText =function(fizz,buzz){
		//console.log(fizz,buzz)
		return '\t\tThe value of fizz is multiple of: '+fizz+' buzz is multiple of: '+buzz+' and fizzbuzz is multiple of: '+fizz*buzz +'\n\t\tnumber started from 1:';
};
m.startRandomText = function(){
	return'\t\tThe value of fizz is multiple of 3, buzz is multiple of 4 and fizzbuzz is multiple of 12 ';
}();


m.checkFizz_Buzz = function(num,fizz,buzz){
	// var fizz = fizzs[0];
	// var buzz = fizzs[2];
	//console.log(fizz,buzz)
	if(num%(fizz*buzz) == 0)
		return 'fizzbuzz';
	if(num%fizz == 0)
		return 'fizz';
	if(num%buzz == 0)
		return 'buzz';
	return num;
};

m.start =function(){
	return Math.ceil(Math.random()*100);
}();




