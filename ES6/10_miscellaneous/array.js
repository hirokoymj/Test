var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];


function findBlue(array){
    var obj;
    array.forEach(function(element){
        if(element.color == 'blue'){
            obj = element;
        }
    });
    return obj;
}

console.log(findBlue(myArray));

// Return - {'color':'blue', 'name': 'blueName'}
const newArray = myArray.filter(element => element.color == 'blue');
console.log(newArray);//[{'color':'blue', 'name': 'blueName'}]


const output = myArray.find(element=>{
    element.color == 'blue'
});

console.log(output);