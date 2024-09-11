const _ = require('lodash');
const numbers = [11,23,34,55,33,67,87];
_.each(numbers, function(number,i){
    console.log(number);
})