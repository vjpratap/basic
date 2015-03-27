var readline = require('readline');
var m = require('./fizzbuzz').m;
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt('Answer> ')
var fizz,buzz;
var askQuestion = function(){
	rl.question('please enter the value of fizz and buzz seprated by comma(,): ',function(fizzBuzzValue){
		//
		fizz = fizzBuzzValue[0];
		buzz = fizzBuzzValue[2]; 
		console.log(m.startText(fizz,buzz));		
		rl.prompt();
	});
	rl.prompt();
};

// console.log(fizz,buzz)
// var instruction = function(){
	
// }

var start = 1;
var limit = 12;
var checkAnswer=function(input){
	input = input.toLowerCase();
	
	if(start < limit && input == m.checkFizz_Buzz(start,fizz,buzz))
		console.log('\t\t\tThe number is:',start+1)	
	
	if(input != m.checkFizz_Buzz(start,fizz,buzz)){
		console.log('\n\t\tSorry You lost')
		return rl.close();
	};

	
	if(input == m.checkFizz_Buzz(start,fizz,buzz)){
		start++;
	}
	if(start > limit){
		console.log('\n\t\tYou won');
		rl.close();
	};
		if(start <= limit && input != m.checkFizz_Buzz(start)){
		rl.prompt();
	};

}

rl.on('line',checkAnswer)
askQuestion();

// console.log(fizz,buzz)	