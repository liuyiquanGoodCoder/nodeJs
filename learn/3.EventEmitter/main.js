var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event',()=>{
	console.log('some_event 事件触发');
});

setTimeout(() => {
	eventEmitter.emit('some_event');
},1000);
