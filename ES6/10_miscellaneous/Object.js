var list = {
    "you": 100,
    "me": 75,
    "foo": 116,
    "bar": 15
};

/*
list = {
    "bar": 15,
    "me": 75,
    "you": 100,
    "foo": 116
};
*/

var result = Object.keys(list).sort(function(a, b){
    return list[a]-list[b];
});
console.log(result); //[ 'bar', 'me', 'you', 'foo' ]

var sortedList = result.reduce(function(acc, currentValue){
    acc[currentValue] = list[currentValue];
    return acc;
}, {});

console.log(sortedList); //{ bar: 15, me: 75, you: 100, foo: 116 }




var array = ["red", "yellow", "red", "blue", "blue", "red"];
//Sort larger count item.
// red: 3 times, blue: 2 times, yellow: 1 time
// [ 'red', 'blue', 'yellow' ]
var newArray = array.reduce(function(acc, currentValue){
    var existing = acc.hasOwnProperty(currentValue);
    if(existing){
        acc[currentValue]++;
    }else{
        acc[currentValue] = 1;
    }
    return acc;
}, {});

console.log(newArray); //{ red: 3, yellow: 1, blue: 2 }

var sortedKey = Object.keys(newArray).sort(function(a,b){
    return newArray[b]-newArray[a];
});

console.log(sortedKey); //[ 'red', 'blue', 'yellow' ]



