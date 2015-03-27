var Range = function(from,to) {
	this.from = from;
	this.to = to;
};

Range.prototype = {
	vikas:"Mumbai local",
	includes:function(number) {
		console.log("in Range's prototype");
		return this.from<=number && number<=this.to;
	}
}

var x = new Range(5,10);
console.log(x.vikas);

var InfiniteRange = function(from) {
	this.from = from;
	this.to = Infinity;
}

InfiniteRange.prototype = new Range();
InfiniteRange.prototype.__proto__.forEach = function(fnRef) {
	for (var i=this.from;i<this.to;i++) {
		fnRef(i);
	}
}
x.forEach(function(s){console.log(s)});
// vijay
// pratap 
// singh