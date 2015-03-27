var returnfunc = function(){
	var func = function(x){
		return x*x;
	}
	return func;
}
console.log(returnfunc());