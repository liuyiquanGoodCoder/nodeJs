var fs = require("fs");

//IO
//var data = fs.readFileSync('input.txt');
//console.log(data.toString());
//console.log("程序执行结束!");


//非IO

   fs.readFile('input.txt',function(err,data){
   	 	if(err) return console.log(err.stack);
   	 	console.log(data.toString());
   });
   console.log("程序执行结束!");
    
