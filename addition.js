// var readline = require('readline');
// var rl = readline.createInterface({ input: process.stdin,
//   output: process.stdout});
// rl.setPrompt('answer-->');

// rl.prompt();
// rl.question('hello how are you:',function(ans){
// 	console.log('thanks , you are you',ans);
// 	rl.close();
// })
//completer('help .error')
lin = function(ans){
	var word= ans;
if (ans === "6") {
    	console.log('\t\t\tright answer: '+ans)
    	rl.close()
	}
  
    console.log('\t\t\t',ans+' is wrong input try again')
    rl.prompt();
}

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
console.log('2 + 4 is :')
rl.setPrompt('guess> ');
rl.prompt();
rl.on('line', lin).on('close',function(){
    process.exit(0);
});




