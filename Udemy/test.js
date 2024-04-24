/* Section 18 */
/* Exampl 1 */
"use strict";
function Person(first_name, last_name){
    this.first_name = first_name; // Error - because in strict mode, the default value of this is undefined.
    this.last_name = last_name;
}

var student1 = Person("Hiroko", "Yamaji");


/* Example 2 */

function Person(first_name, last_name){
    this.first_name = first_name; // Error - because in strict mode, the default value of this is undefined.
    this.last_name = last_name;
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude);

// The "new" keyword performs below activity.
var dudu = {};
Person.call(dude, "Hiroko", "Yamaji");
console.log(dude);


/* Example 3 - how to add a function in class - #1*/
function Person(first_name, last_name){
    this.first_name = first_name; // Error - because in strict mode, the default value of this is undefined.
    this.last_name = last_name;
    this.full_name = function(){
        return this.first_name + " " + this.last_name;
    }
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude.full_name());


/* Example 3 - how to add a function in class -  #2 */
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function(){
        return this.first_name + " " + this.last_name;
    }
}
Person.prototype.get_first_name = function () {
    return this.first_name;
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude.full_name());
console.log(dude.get_first_name());
we're repeating it over each and every instance that we create.





/* Example 4 - we never want to change first name.*/
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function(){
        return first_name + " " + last_name;
    }
}
Person.prototype.get_first_name = function () {
    return this.first_name;
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude.full_name());
console.log(dude.get_first_name());



dude.first_name = "Kayo";
console.log(dude.full_name());


/* Encapsulation and Inheritance */
/* How to implement inheritance in a class */
"use strict";
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
Person.prototype.full_name = function () {
    return this.first_name + " " + this.last_name;
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude.full_name());
console.log(dude.get_first_name());



dude.first_name = "Kayo";
console.log(dude.full_name());