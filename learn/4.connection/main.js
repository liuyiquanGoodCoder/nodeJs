var events = require('events');

var eventEmitter = new events.EventEmitter();

//listener1
var listener1 = () => {
	console.log('监听器 listener1 执行');
}

//listener2
var listener2 = () => {
	console.log('监听器 listener2 执行');
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '个监听器监听连接事件');

eventEmitter.emit('connection');
//移除listener1
eventEmitter.removeListener('connection',listener1);
console.log('listener1 不在受监听。');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '个监听器监听连接事件');

console.log("程序执行完毕。");


