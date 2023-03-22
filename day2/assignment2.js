//1- create custom module  
//- contain function constructor 
//- inheriting from emitter  
//- this function has on and emit  
//- I can send data from emit and log in on function 
//******** ********************

// var Emitters = require('events')
// var utils = require('util')
// var Func = function(){
//   console.log("Function by inherits")
// }
// utils.inherits(Func,Emitters)
// Func.prototype.greet = function(data){
//   this.emit('Fire', data)
// }
// var NewFunc = new Func();
// NewFunc.on('Fire', function(data){
//   console.log('Greetings To ' + data)
// });
// NewFunc.greet('ITI');
//------------------------------------------

// 2- 10. How to read a file line by line using node.js?
//HINT: Readline Module in Node.js allows the reading of input stream line by line. The given node.js code opens the file 'gr	eet.txt' and returns the content line by line.
//******** ********************

// var readline = require('readline');
// var fs = require('fs');

// var readLineByLine = readline.createInterface({
//   input: fs.createReadStream('data.json')
// });

// readLineByLine.on('line', (line) => {
//   console.log(line);
// });

//----------------------------------------------
// Create test file with dummy data
//3- Rename file from test.txt to info.txt From node docs
//******** ********************

// var fs = require('fs');
// fs.rename('test.txt', 'info.txt', (err) => {
// });

//-----------------------------------------------
//4- Remove file info.txt
//******** ********************

// var fs = require('fs');
// fs.unlink('info.txt', (err) => {
// });
//------------------------------------------------

//5- Read data from data.json file.
//-       as sync  
//******** ********************

// var fs = require('fs');
// var datafromfile = fs.readFileSync('data.json');
// var jsonData = JSON.parse(datafromfile);
// console.log(jsonData);
// console.log("Done");

//-----------------------------
//-       as async
// *******************************

// async function readData() {
//   var fs = require('fs');
//   var datafromfile = await fs.promises.readFile('data.json', 'utf8');
//   var jsonData = JSON.parse(datafromfile);
//   console.log(jsonData);
// }
// readData();
// console.log("Done");
//----------------------------------------
//6- write inside file info.txt “hello iti”
// *******************************

// var fs = require('fs');
// fs.writeFile('info.txt', 'hello iti', (err) => {
// });
//-------------------------------