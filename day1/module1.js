
function sum(x,y) {
	return x+y;
}
function sub(x,y){
	return x+y;

}
function multi(x,y){
    return x+y;

}
function birthday(name,bd)
{
    var bdyear=new Date(bd).getFullYear();
    var curyear=new Date().getFullYear();
    var age;
    if(curyear<bdyear)
    {
        throw new Error("Invalid Input");
    }
    else
    {
        age=curyear-bdyear;
    }
    
    return "Hello "+name+ " your age now is "+age;
}
module.exports= {
	ss: sum,
    sb:sub,
    mt:multi,
    welcome:birthday
	}

// module.exports.Add = function(x,y) {
// 	console.log(x+y);
// }

// module.exports.sub = function(x,y) {
// 	console.log(x-y);
// }
// module.exports.multi = function(x,y) {
// 	console.log(x*y);
// }
