var bufferOne = new Buffer('我的博客');
var bufferTwo = new Buffer('www.liuyiquanco.com');
var bufferThree = Buffer.concat([bufferOne,bufferTwo]);
console.log(bufferThree.toString());
