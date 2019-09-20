let asyncFunction = function(callback){
    setTimeout(callback,200);
}

let color = 'blue';

(function(color){
    asyncFunction(function(){
        console.log('the color is '+ color);
    });
})(color)


color = 'green'