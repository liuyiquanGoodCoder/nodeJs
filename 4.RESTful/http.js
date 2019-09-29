let http = require('http');
let url = require('url');
let items = [];

let server = http.createServer(function(req,res) {   
    let path = url.parse(req.url).pathname;
    let i = parseInt(path.slice(1),10);
    switch(req.method){
        case 'POST':
            let item = '';
            req.setEncoding('utf8');
            req.on('data',function(chunk) {
                item += chunk;
            });
            req.on('end',function(chunk) {
                items.push(item);
                res.end('OK\n');
            });
            break;
        
        case 'GET':
            items.forEach(function(item,i) {
                res.write(i + ':' + item + '\n');
            });
            res.end();
            break;
        
        case 'DELETE':
            if(isNaN(i)){
                res.statusCode = 400;
                res.end('Invalid item id');
            }else if(!items[i]){
                res.statusCode = 404;
                res.end('item not found');
            }else{
                items.splice(i,1);
                res.end('OK\n');
            }
            break;
        case 'PUT':
            req.setEncoding('utf8');
            req.on('data',function(chunk) {
                if(isNaN(i)){
                    res.statusCode = 400;
                    res.end('Invalid item id');
                }else if(!items[i]){
                    res.statusCode = 404;
                    res.end('item not found');
                }else{
                    items[i] = chunk;
                    res.end('OK\n');
                }
            });
            break;
    }
})

server.listen(3000);