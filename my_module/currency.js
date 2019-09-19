let canadianDollar = 0.91;

let roundTwoDecimals = function(amount){
    return Math.round(amount*100) / 100;
}

exports.canadianToUs = function (canadian) {
    return roundTwoDecimals(canadian * canadianDollar);
}

exports.UsToCanadian = function (us) {
    return roundTwoDecimals(us / canadianDollar);
}