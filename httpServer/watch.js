let fs = require('fs'),    
    events = require('events'),
    util = require('util')
    watchDir = './watch',
    processDir = './processDir' = './done';

let Watcher = function (watchDir,processedDir) {
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}

util.inherits(Watcher,events.EventEmitter);

Watcher.prototype.watch = function () {
    let watcher = this;
    fs.readdir(this.watchDir,function(){
        if(err){
            throw err;
        }else{
            for (let index in files) {
               watcher.emit('process',files[index]);
            }
        }
    })
}

Watcher.prototype.start = function(){
    let watcher = this;
    fs.watchFile(watchDir,function(){
        watcher.watch();
    });
}

let watcher = new Watcher(watchDir,processDir);

