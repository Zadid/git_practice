var number = [1,2,3,4,5,6];
/*add a comment*/
function sum(n){
	var summation = 0;
	summation = n.reduce (function (o,n){return o+n;})
	return summation;
}

console.log(sum(number));
