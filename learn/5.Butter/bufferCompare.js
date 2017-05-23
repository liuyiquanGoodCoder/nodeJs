//Node Buffer compare
//返回值:返回一个数字，表示 buf 在 otherBuffer 之前(1)，之后(-1)或相同(0)。
var bufferOne = new Buffer('ABC');
var bufferTwo = new Buffer('ABD');
var result = bufferOne.compare(bufferTwo);

console.log(result);
