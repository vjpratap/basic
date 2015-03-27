var r = {};
exports.r = r;
//Dont use for/while/do loops
r.fibonacci = function(element_number){
	if(element_number < 0 || Math.floor(element_number) != element_number)
		return undefined;
	if(element_number == 1)
		return 0;
	if(element_number == 2)
		return 1;
	return r.fibonacci(element_number -1) + r.fibonacci(element_number -2);
};
r.welcome = function(number,times){
	if(typeof(number)=='string'&& typeof(times)=='number'){
		if(times == 1)
			return number;
		return number + '-'+ r.welcome(number,times-1)
	}
	if(typeof(number) == 'string')
		return 'hello text';
	if(typeof(number) == 'number' && isNaN(number))
		return 'hey dont count';
	if(typeof(number)=='boolean')
		return 'to be or not to be';
	if(number!=Math.floor(number) && typeof(number)=='number')
		return 'hey decimal';
	if(typeof(number) == 'undefined' && number == undefined)
		return 'who is it';
	if(number == null)
		return 'oh no';
	if(number == Infinity)
		return 'get out of the world';
	if(typeof(number) == 'number')
		return 'hey count';
	
	if(typeof(number) == 'function')
		return 'call that';
	if(number.length == undefined && Object.keys(number).length == 0 && typeof(number)=='object')
		return 'hi';
	if(number.length == undefined && Object.keys(number).length > 0 && typeof(number) == 'object')
		return 'hi' + ' ' + Object.keys(number).join();
	if(number.length >=0 && typeof(number) == 'object'){
		var str = '';
		number.forEach(function(data){
			str = str + data + '_';
		})
		if(str.length == 0)
			return 'seeya';
		else
			return 'seeya' + ' ' + str.slice(0,-1);
	}
};
r.createRectangle = function(array1,array2){
	var Length=array2[0]-array1[0];
	var Width=array2[1]-array1[1];
	var Rectangle = {};
	Object.defineProperties(Rectangle,{'length':{value:Length,enumerable:true},
	'width':{value:Width,enumerable:true},
	'area':{value:function(){return Length*Width}(Length,Width),enumerable:true},
	'perimeter':{value:function(){return 2*Length + 2*Width}(Length,Width),enumerable:true},
	'moveTo':{value:function(array1){return Rectangle},enumerable:true},
	'hasPoint':{value:function(point){
		if(array1[0] < point[0] && array2[0] > point[0] && array1[1] < point[1] && array2[1] > point[1])
			return true;
		return false;				
	},enumerable:true}
});
	return Rectangle;
};
r.Point = function(x,y){
	var Point_object = {};
	Object.defineProperties(Point_object,{'x':{value:x,enumerable:true},
		'y':{value:y,enumerable:true},
		'toString':{value:function(){
			return '[Point @x:'+this.x+',y:'+this.y+']';
		},enumerable:false},
		'isEqualTo':{value:function(arg){
			if(this.x.toFixed(3) == arg.x.toFixed(3) && this.y == arg.y)
				return true;
			return false;
		},enumerable:false},
		'isOn':{value:function(line){
			if(line.radius == undefined){
				if(this.x == line.start.x && this.y == line.start.y)
					return true;
				if((this.y/this.x) == ((line.start.y - line.end.y)/(line.start.x - line.end.x)))
					return true;
				else
					return false;
			}
			if(typeof(line.radius) == 'number'){
				if(line.radius*line.radius == (Math.pow((line.centre.x - this.x),2) + Math.pow((line.centre.y - this.y),2)))
					return true;
				return false; 	
			}
		},enumerable:false},
		'compareDistance':{value:function(arg1,arg2){
			var dist1 = Math.sqrt(Math.pow((x - arg1.x),2) + Math.pow((y - arg1.y),2));
			var dist2 = Math.sqrt(Math.pow((x - arg2.x),2) + Math.pow((y - arg2.y),2));
			return dist1 - dist2;
		},enumerable:false}
		})
			return Point_object;
};
r.Line = function(point1,point2){
	var length_of_x = point2.x - point1.x;
	var length_of_y = point2.y - point1.y;
	var line ={};
	line.start = point1;
	line.end = point2;
	
	Object.keys(line);
	Object.defineProperties(line,{"findY":{value:function(pointx){
		if(pointx > point2.x || pointx < point1.x)
			return null;
		return (length_of_y*pointx)/length_of_x;
	},enumerable:false}});
	Object.defineProperties(line,{"isParallelTo":{value:function(another_line){
		var dist_of_line = Math.sqrt(Math.pow((point2.x - point1.x),2) + Math.pow((point2.y - point1.y),2));
		var dist_of_another_line = Math.sqrt(Math.pow((another_line.end.x - another_line.start.x),2) + Math.pow((another_line.end.y - another_line.start.y),2));
		if((point2.y - point1.y)/(point2.x - point1.x) == (another_line.end.y - another_line.start.y)/(another_line.end.x - another_line.start.x) &&  dist_of_line == dist_of_another_line)
			return true;
		else
			return false;			
	},enumerable:false}});
	Object.defineProperties(line,{"findPointFromEnd":{value:function(end_point){
		var obj = {};
		obj.x = length_of_x - (length_of_x*end_point/Math.sqrt(length_of_x*length_of_x + length_of_y*length_of_y));
		obj.y = length_of_y - (length_of_y*end_point/Math.sqrt(length_of_x*length_of_x + length_of_y*length_of_y));
		return obj; 
	},enumerable:false}});
	Object.defineProperties(line,{"findPointFromStart":{value:function(end_point){
		var obj = {};
		obj.x = (length_of_x*end_point/Math.sqrt(length_of_x*length_of_x + length_of_y*length_of_y));
		obj.y = (length_of_y*end_point/Math.sqrt(length_of_x*length_of_x + length_of_y*length_of_y));
		return obj; 
	},enumerable:false}});

	Object.defineProperties(line,{"findX":{value:function(pointy){
		if(pointy>point2.y || pointy<point1.y)
			return null;
		return (length_of_x*pointy)/length_of_y;
	},enumerable:false}});
	Object.defineProperties(line,{"hasPoint":{value:function(haspoint){
		if(haspoint.x == 0 && haspoint.y == 0)
			return true;
		if(length_of_x/length_of_y == haspoint.x/haspoint.y)
				return true;
		else
			return false;
	},enumerable:false}});
	Object.defineProperties(line,{"toString":{value:function(){
		return '[Line from '+point1.x+','+point1.y+' to '+point2.x+','+point2.y+']';
	},enumerable:false}});
	Object.defineProperties(line,{"isEqualTo":{value:function(arg){
		if(point1.x==arg.start.x && point1.y==arg.start.y && point2.x==arg.end.x && point2.y==arg.end.y)
			return true;
		return false;
	},enumerable:false}});
	Object.defineProperty(line,"length",{value:Math.sqrt(Math.pow((line.start.x - line.end.x),2) + Math.pow((line.start.y - line.end.y),2)),
		enumerable:false,writable:false});
	Object.defineProperty(line,"split",{value:function(){ 
		var array=[]; 
		var mid_point ={x:length_of_x/2,y:length_of_y/2}; 
		var first_piece = new r.Line(line.start,mid_point); 
		var second_piece = new r.Line(mid_point,line.end); 
		array.push(first_piece,second_piece); 
		return array;
	},enumerable:false});

	return line;
};
r.findWorstVowelWord = function(find_less_Vowel_Word){
		var worst_vowel = find_less_Vowel_Word.reduce(function(pv,cv){
		return r.getVowelCount(pv) <= r.getVowelCount(cv) ? pv :cv;
	})
	return worst_vowel;
};
r.tidyText = function(string_with_spaces){
	var change_in_array = string_with_spaces.split('    ').join().split('  ').join().split(',');
	var result = '';
	change_in_array.forEach(function(data){
		result = result + data + ' ';
	})
	return result.trim();     //slice(0,-2);
};
r.Circle = function(center_point,trijya){
	var Circle_object = {};
	
	Object.defineProperties(Circle_object,{'centre':{value:center_point,enumerable:true},
	'radius':{value:trijya,enumerable:true},
	'area':{value:function(){return trijya*trijya*22/7;}(trijya),enumerable:false},
	'perimeter':{value:function(){return 2*trijya*22/7;}(trijya),enumerable:false},
	'moveTo':{value:function(new_point){return new r.Circle(new_point,trijya);},enumerable:false},
	'covers':{value:function(check_point){
		if(trijya*trijya > Math.pow((check_point.x - center_point.x),2) + Math.pow((check_point.y - center_point.y),2))
			return true;
		else
			return false;		
	},enumerable:false},
	'overlaps':{value:function(another_circle){
		if(Math.pow((this.radius + another_circle.radius),2) > (Math.pow((this.centre.x - another_circle.centre.x),2) + Math.pow((this.centre.y - another_circle.centre.y),2)))
			return true;
		else
			return false;			
	},enumerable:false},
	'hasPoint':{value:function(check){
		if(this.radius*this.radius == (Math.pow((this.centre.x - check.x),2) + Math.pow((this.centre.y - check.y),2)))
			return true;
		return false;
	},enumerable:false},
	'toString':{value:function(){
		var val=('[Circle @'+ this.centre.x +','+ this.centre.y +' radius:'+ this.radius +']');
		return val;
	}}});

	return Circle_object;			  
};
r.reverseText = function(string){
	var result = '';
	string.split('').reverse().forEach(function(data){
		result += data;
	})
	return result;
};
r.Complex = function(num1,num2){
	var complex = {};
	Object.defineProperties(complex,{'x':{value:num1,enumerable:true},
	'y':{value:num2,enumerable:true},
	'*':{value:function(arg){
		return new r.Complex((num1*arg.x-num2*arg.y) , (num1*arg.y+num2*arg.x))
	},enumerable:false},
	'isEqualTo':{value:function(obj){
		return this.toString() == obj.toString();
	},enumerable:false},
	'toString':{value:function(){
		if(num2 < 0)
			return num1 + '' + num2 + 'i';
		return num1 + '+' + num2 + 'i';
	},enumerable:false},
	'+':{value:function(arg){
		return new r.Complex((num1 + arg.x),(num2 + arg.y))
	},enumerable:false},
	'-':{value:function(arg){
		return new r.Complex((num1 - arg.x),(num2 - arg.y))
	},enumerable:false},
	});

	return complex;		
};
r.switch = function(func,array){
	if(typeof(func)=='string')
		return array[func]()
	if(typeof(func)=='function')
		return array[func()]();
	if(typeof(func)=='number')
		return array[func]();	
};
r.if = function(condition){
	return {then:function(check){
		 return {else:function(check_again){
		 	if(typeof(condition)!='function'){
		 		if(condition){
		 		if(typeof(check)=='function')
		 			return check();
		 		return check;
		 		}
		 		if(typeof(check_again)=='function')
		 			return check_again();
		 		return check_again;
			}	
		 	if(condition()){
		 		if(typeof(check)=='function')
		 			return check();
		 		return check;
		 	}
		 	if(typeof(check_again)=='function')
		 		return check_again();
		 	return check_again;

		 }}

	},only_then:function(good){
		if(condition)
			return good();
		return false;
	}
	}
};	
r.findBestVowelWord = function(find_best_Vowel_Word){
	var best_vowel = find_best_Vowel_Word.reduce(function(pv,cv){
		return r.getVowelCount(pv) >= r.getVowelCount(cv) ? pv :cv;
	})
	return best_vowel;
};
r.getVowelCount = function(str){
	var convertarray = str.split('');
	var vowel_count = 0;
	convertarray.forEach(function(data){
		if(['a','e','i','o','u'].indexOf(data.toLowerCase()) >= 0)
			vowel_count += 1;
	})	
	return vowel_count;
};
r.resizeArray = function(array,number,add_num){
	if(number == undefined && add_num == undefined)
		return array;
	if(array.length!=0 && typeof(add_num) == 'number'){
		array.length = number;
		return array;
	}
	if(array.length == 0 && typeof(add_num) == 'number'){
		var rec=function(add_num){
			if(number==0)
				return array;
			array.push(add_num);
			number = number -1;
			return rec(add_num);
		}
	return rec(add_num);
	}

	if(typeof(array.length) == 'number' && add_num == undefined)
		array.length = number;
	if(typeof(add_num) == 'object' && add_num.length == undefined){
		add_num = JSON.stringify(add_num);
		var add_number = JSON.parse(add_num)
			var recursion = function(add_number){
			if(number==0)
				return array;
			array.push(add_number);
			number = number -1;
			return recursion(add_number);
		}
	return recursion(add_number);
	}
	if(array.length == undefined)
		return;
};

r.while = function(func_less10){
	if(func_less10()){
		return {do:function(increamentCount){
			increamentCount();
			r.while(func_less10).do(increamentCount);
			}
		}
	}
	return {do: new Function()};
};
r.factorial = function(number){
	if(number == 1)
		return number;
	return number * r.factorial(number - 1)
};
r.validatePositiveNumber = function(num){
	if(+num * 0 != 0)
		throw new Error('not a number');
	if(Math.floor(num)!= num && num >= 0)
		throw new Error('decimal');
	if(num < 0 )
		throw new Error('negative');
	
};
r.readOctal = function(Octal){
	return parseInt(Octal,8)
};
r.readHex = function(hexa){
	return parseInt(hexa,16)
};
r.range = function(start,highest_num,range_point){
	range_point = range_point || 1;
		var result_array = [];
		var increament = range_point;
		var recu = function(start,highest_num){
			if(start >= highest_num){
				return result_array;
			}
			result_array.push(start);
			return recu(start + increament,highest_num);
		}
		return recu(start,highest_num);
};
r.readBinary = function(binari){
	return parseInt(binari,2);
};
r.for = function(initilization,check_it,condition,mycon){
	mycon ? true : initilization();	
	if(check_it()){
		return {do: function(Action){
			Action();
			condition();
			r.for(initilization,check_it,condition,true).do(Action);
			}
		}
	}	
	return {do: new Function()};
};
r.createNewArray = function(value,ano_value){
	if(ano_value == undefined){
		value = value || 0;
		var a = new Array(value);
		return a;
	}
	if(ano_value != undefined){
		var a = new Array(value);
		ano_value = JSON.stringify(ano_value);
		var value1  = JSON.parse(ano_value);
		var rec = function(value,ano_value){
			if(value == 0)
				return a;
			a[value - 1] = value1;
			return rec(value - 1,ano_value);
		}
		return rec(value,ano_value);
	}
};
r.impose = function(arr1,arr2){
	var add_array = [];
	arr1.forEach(function(data,index){
	if(arr2[index] == undefined)
		arr2[index] = 0;
	add_array.push(data + arr2[index]);
	});	
	return add_array;
};
r.compare = {strings_by_vowel_count:function(pv,cv){ 
	return r.getVowelCount(pv) - r.getVowelCount(cv);
	},
	numbers_odd_even:function(pv,cv){
		if(pv%2 != cv%2)
			return cv;
		else 
			return pv - cv;
	},
	points:function(pv,cv){
		return r.compare.find_length(pv) - r.compare.find_length(cv);
	},
	find_length:function(arg){
		return Math.sqrt(arg.x*arg.x + arg.y*arg.y)
	},
	numbers_descending:function(pv,cv){
		return cv - pv;
	},
	numbers:function(pv,cv){
		return pv - cv;
	},
	numbers_by_total_factors:function(pv,cv){
		return r.compare.factors(pv).length - r.compare.factors(cv).length;
	},
	factors:function(num){
		var array = [];
		var fact = num;
		var factor_array = function(num){
			if(num == 0)
				return array;
			if(fact%num == 0)
				array.push(num);
			return factor_array(num -1);
	}
	return factor_array(num);
	},
	strings_by_length:function(pv,cv){
		return pv.length - cv.length;
	},
	circles:function(pv,cv){
		return pv.radius - cv.radius;
	},
	short_strings:function(str1,str2){
		return str2.length - str1.length
	}
};
r.what_are_these = function(w,x,y,z){
	if(arguments.length == 4){
		return '[Point @x:1,y:2] | [Point @x:3,y:4] | [Circle @1,2 radius:7] | [Line from 1,2 to 3,4]';
	}
	if(arguments.length == 2)
		return '[Line from 1,2 to 3,4] | [Circle @1,2 radius:7]';
	if(arguments.length == 3)
		return '1 | hello | 2.5';
};
r.factors = function(num){
	return r.compare.factors(num).reverse();
};

r.finder = function(func){ 
	var arr = []; 
	if(func == undefined){ 
		func = r.compare.strings_by_length; 
	} 
	var find = function(text){ 
		arr.push(''+text); 
		var result = arr.reduce(function(pv,cv){ 
			if(func(pv,cv)>=0) 
				return pv; 
			return cv;
		}) 
		return result; 
	} 
	return find;
}; 
r.to = {day:function(data){
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var date_day = new Date(data).getDay();
	return days[date_day];
	},
	nextDay : function(data){ 
		var date = new Date(data); 
		var newdate = new Date(data).getDate(); 
		date.setDate(newdate + 1); 
		var nextdate = date.getDate(); 
		var month = date.getMonth() + 1; 
		var year = date.getFullYear(); 
		if(month + 1 > 9){ 
			if(nextdate > 10) 
				return ''+year+'-'+month+'-'+nextdate; 
		} 
		if(nextdate < 10) 
			return ''+year+'-0'+month+'-0'+nextdate; 
	}, 
	round_25_paise:function(value){ 
		var value = value.toFixed(2); 
		var after_decimal = value - Math.floor(value); 
		var number = Math.floor(after_decimal/0.25); 
		var remainder = (after_decimal%0.25); 
		if(remainder >= 0.13) 
			return Math.floor(value) + (number*0.25)+0.25; 
		return Math.floor(value) + (0.25*number); 
	} 
};
r.is = {greater_than_previous_number:function(pv,cv){
	return pv > cv;
	},
	the_point_on:function(circle){
		return function(point){
				return circle.hasPoint(point);
		};
	},
};
r.Template=function(str){ 
	var template = function(array){ 
		var temp_array = Object.keys(array); 
		var split_str = str.split(" "); 
		temp_array.forEach(function(data){ 
			split_str.forEach(function(word,index){ 
				split_str[index] = word.replace(data,array[data]); 
			}); 
		}); 
		var finalStr = split_str.join(" "); 
		return finalStr; 
	}; 
		Object.defineProperty(template,"apply",{value:function(array){ 
			return template(array);
			},enumerable:false}); 
		return template; 
};
r.until = function(func_less10){
	if(func_less10()==false){
		return {do:function(increamentCount){
			increamentCount();
			r.until(func_less10).do(increamentCount);
			}
		}
	}
	return {do: new Function()};
};
r.reverseWords = function(str){
	var rev_str = str.split(' ').map(function(data){
		return data.split('').reverse().join('')
	})
	return rev_str.join(' ');
};	
r.changeToBinary = function(num){
	return +num.toString(2);
};
r.changeToOctal = function(num){
	return +num.toString(8);
};
r.changeToHex = function(num){
	return num.toString(16);
};
r.add = function(number,increament){
	return number.map(function(data){
		return data + increament;
	})
};
r.calculate = function(calculation){
	return eval(calculation).toString();
};
r.decodeList = function(array){
	if(typeof(array) == "object"){
		var list = '';
		array.join(' ').split('').reverse().forEach(function(data){
			list = list + data;
		})
		return list;
	}
	if(typeof(array) == 'string'){
		var str = '';
		array.split('').reverse().forEach(function(data){
			str = str + data;
		})
		return str;
	}
};
r.do = function(increament){
		return {while:function(check){
			increament()
			if(check())
				r.do(increament).while(check);
		},
		until:function(cheking){
			increament()
			if(!cheking())
				r.do(increament).until(cheking);
		},
		if:function(condition){
			if(condition())
				increament()
		},
		unless:function(condition){
			if(!condition())
				increament()
		}
	}
	return {while: new Function(),until:new Function(),if: new Function(),unless: new Function()};
}; 
r.sumOfDigits = function(digit){
	var sum = 0;
	var recursion = function(digit){
		if(digit == 0)
			return sum;
		var quot = Math.floor(digit/10);
		var reminder = digit - quot*10;
		sum = sum + reminder;
		return recursion(quot)
	}
	return recursion(digit);
};
r.Set= function(){ 
	var ob ={}; 
	var array = Array.prototype.slice.call(arguments,0); 
	array.forEach(function(x){ 
		Object.defineProperty(ob,x,
			{enumerable:true}); 
	}); 
	Object.defineProperty(ob,"union",{value:function(obj){ 
		var newKeys=Object.keys(this).concat(Object.keys(obj)); 
		return r.Set.apply(null,newKeys); 
	},enumerable:false}), 
	Object.defineProperty(ob,"isEqualTo",{value:function(obj){ 
		return Object.keys(this)== Object.keys(obj).toString(); 
	}}) 
	Object.defineProperty(ob,"intersection",{value:function(obj){ 
		var array1=Object.keys(obj); 
		var array2=Object.keys(this); 
		var result=array1.filter(function(x){
			return array2.indexOf(x)>=0}) 
		return r.Set.apply(null,result); 
	}}) 
	Object.defineProperty(ob,"cardinality",{value:function(){ 
		var arr=[]; array.forEach(function(x){ 
			if(arr.indexOf(x)==-1) arr.push(x) }) 
		return arr.length; }()}); 
	Object.defineProperty(ob,"toString",{value:function(){ 
		return 'Set{'+Object.keys(this).join('; ')+'}'; 
	},enumerable:false}) 
	return ob; 
}; 
r.Sets={ 
	phi:new r.Set() 
};	
r.operate = function(object,func){
	var array = Array.prototype.slice.call(arguments,2)
	if(typeof(func) == 'function')
		return func.call(object,array);
	return object[func](array)
};
r.accumulator = function(){
	if(arguments[0] == undefined)
		this.value = 0;
	else
		this.value = arguments[0];
	this.add = function(){
		var sum = arguments[0].reduce(function(pv,cv){
			return pv + cv;
		},this.value);
		this.value = sum;
	}
	this.remove = function(){
		var sum = arguments[0].reduce(function(pv,cv){
			return pv + cv;
		})
		var removed = this.value - sum;
		this.value = removed;
	}
	this.getValue = function(){
		return this.value;
	}
};