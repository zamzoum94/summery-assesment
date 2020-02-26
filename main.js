// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

//=============================================================================
/*                              Q1                                           */
//=============================================================================
//write a function that takes a string as an input and returns an array
//containing the length of each word in that string.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
//wordLengths("hello its me") // [5,3,2]


// return array with same length ==> map
// we need to create the array from the string first
function wordLengths(str) {
    // TODO: your code here 
    str = str.split(" ");
    return map(str, function(value){
      console.log(value);
      return value.length;
    });
}

//=============================================================================
/*                                  Q2                                    */
//=============================================================================
//Write a function countOccurrences that accepts two parameters: a string, 
// and a character (e.g. "a"), and returns number of times that character occured.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
// countOccurrences("hello", "l"); // 2
// countOccurrences("hello, world!", "l"); // 3

// we need to use reduce function, we return only one resutl
// string and array have same way of looping for index same for object
function countOccurrences(string, character) {
    // your code is here
    var acc = 0;
    return reduce(string, function(acc, value){
      return acc + (value === character ? 1:0);
    }, acc);
}

//=============================================================================
/*                                  Q3                                    */
//=============================================================================
//write a function that takes a string as an input and returns an array
//with only the words of length that are longer than 3.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
// wordsLongerThanThree("Hello Mad World") //["Hello", "World"]

// we return array with some condition on it, we use filter
// we create our array first
function wordsLongerThanThree(str) {
    // TODO: your code here 
    str = str.split(" ");
    return filter(str, function(value){
      return value.length > 3;
    });
}

//=============================================================================
/*                                  Q4                                        */
//=============================================================================
//Using recursion, write a function called repeatString that takes two parameters: a string str, 
//which is the string to be repeated, and count, a number 
//representing how many times the string str should be repeated.
//repeatString('dog', 0); // => '' 
//repeatString('dog', 1); // => 'dog' 
//repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
//repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) { 
 // TODO: your code here 
  if(count === 0){
    return "";
  }
  return str + repeatString(str, count - 1);
} 
 

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
/*
 using closures create a function called makePizza that has the following properties and methods
 crust a property represented by a string. ex "thin","thick". 
 size a property represented by a string. ex "M","L".
 numberOfSlice a property that hold the number of slice, ex: 8
 ** the values of all properties will be provided as arguments in the function invocation. 
 addIngredients a function that add a new ingredient to the ingredients property.
 displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
 bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
 eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
 */
//Example:
// var pizza = makePizza("thin", "M", 2);
// pizza.addIngredients("tomato");
// pizza.addIngredients("meshroom");
// pizza.addIngredients("meat");
// console.log(pizza.displayIngredaints());
// pizza.bakePizza();
// pizza.eatSlice();
// pizza.eatSlice();
// pizza.eatSlice();

// Write your code here .....

function makePizza(crust, size, numberOfSlice){
  var crust = crust;
  var size = size;
  var numberOfSlice = numberOfSlice;
  var ingredients = [];
  console.log(this.crust);
  return{
    // this will return to this object not the pizza we are making, but the object that we are returning
    addIngredients : function(str){
      ingredients.push(str);
      return ingredients;
    },
    displayIngredients : function(){
      if(ingredients.length === 0) return "You have no ingredient";
      return "Your ingredients are " + ingredients.join(", ");
    },
    // the settime out function return a function after some time, here we will return after 2 seconds (2000)
    bakePizza : function(){
      // the function will be executed after couple of seconds, probably it need the arguments to be outputed later, I'm not sure how it's working (mystery xD)
      setTimeout(function(crust, size, numberOfSlice){
        console.log("Your " + crust + " " + size + " " + numberOfSlice) + " pizza is done";
      }, 2000);
    },
    eatSlice : function(){
      if(numberOfSlice > 0){
        numberOfSlice -= 1;
        return "You just ate a slice , you still have " + numberOfSlice + " slices";
      }
      return "Man chill, you just ate everything xD";
    }
  }
}

//=============================================================================
/*                                  Q6                                      */
//=============================================================================
/*
Create a ReadingList class by using OOP concept, where:
Your class should has:
"read" for the number of books that finish reading (number)
"unRead" for the number of books that still not read (array of books not read)
"toRead" array for the books names that want to read in the future (array of books that we want to read)
"currentRead" for the name of the book that is reading currently (string of one book that we are reading)
"readBooks" Array of the names of books that finish read (after we read a book we add it the array of the we read)

"AddBook" function that:
a- Accept the book name as parameter (it just take a book as param??)
b- Add the new book to "toRead" array (.push())
c- Increment the number of the unread books.

"finishCurrentBook" function that:
a- Add the "currentRead" to the "readBooks" array
b- Increment the "read" books
c- Change the "currentRead" to be the first book from "toRead" array
d- Decrement the number of "unread" books
*/


// Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
// Yez I am
// Write your code here .....

function ReadingList(){
  var read = 0, unRead = 0, toRead = [], currentBook, readBooks = [];
  return{
    read : read,
    unRead : unRead,
    toRead : toRead,
    currentBook : currentBook,
    readBooks : readBooks,
    addBook : addBook,
    finishCurrentBook : finishCurrentBook
  }
}

function addBook(book){
  this.toRead.push(book);
  this.unRead++;
}

function finishCurrentBook(){
  this.readBooks.push(currentBook);
  this.read++;
  if(this.toRead.length > 0){
    this.currentBook = this.toRead[0];
  }
  this.unRead--;
}

//=============================================================================
/*                                  Q7                                       */
//=============================================================================
//Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
//makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
//itemSize should be either "big", "medium" and "small"
//big sized items will hold 3 slots in the storage
//medium sized items will hold 2 slots in the storage
//small sized items  will hold 1 slot in the storage
//return "Can't fit" if you try to add an item that exceeds the storage size limit
//when the safe is full return a string representing all the items that are in the safe
//Example:
//  var safe = makeSafe(5)
//  safe('watch','small')
//  safe('gold-bar','big')
//  safe('silver-bar','big') => "Can't fit"
//  safe('money','small') => "watch gold-bar money"

// Write your code here .....

function makeSafe(storageSizeLimit){
  var itemsArr = [];
  var storageSizeLimit = storageSizeLimit;
  function addItem(item, itemSize){
    if(itemSize === "big"){
      if(storageSizeLimit < 3){
        return "cant fit in";
      } else{
        itemsArr.push(item);
        return itemsArr.join(" ");
      }
    } else if(itemSize === "medium"){
      if(storageSizeLimit < 2){
        return "cant fit in";
      } else{
        itemsArr.push(item);
        return itemsArr.join(" ");
      }
    } else{
      if(storageSizeLimit < 1){
        return "cant fit in";
      } else{
        itemsArr.push(item);
        return itemsArr.join(" ");
      }
    }
  }
  return addItem;
}

//=============================================================================
/*                                  Q8                                       */
//=============================================================================

//Create HTML, CSS & JS files and connect them together
//Add Two text input fields, one with a placeholder input, and another with color
//Add a button below them and an empty unordered list below the button
//Create 3 CSS classes (red, yellow, blue)
//Create a javascript function that adds an item list to the unordered list
//If the color value is red, yellow or blue
//Add the CSS class to the item accordingly
//Do not add a list item if the color value is non of the colors

//DO NOT USE JQUERY


//================================================================================
/*                              Q9                                            */
//================================================================================

//Create HTML, CSS & JS files
//Link jQuery
//Create an empty unordered list
//Create three input elements of type checkbox
//Create two buttons "create" & "remove"
//Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
//Using jQuery run a function that gets called using the button's id (#create)
//The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
//If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
//If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
//If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it

//Using jQuery call a function from the button's id (#delete)
//The function removes all the elements from the unordered list based on the checkboxes as the previous function
//Use jQuery as much as you can in selecting elements and other tasks

//================================================================================
/*                              Q10                                           */
//================================================================================
// Theoretical questions.
// 1- In your own words,Why do we use Closures ?
// We use closures to initate variables and make them unaccessible

// 2- In OOP, what does "this" refer to ?
// this always returns to the current object, mostly on out left side 

// 3- What is jQuery?
// Jquery is a library of javascript we use, for less complicated and long code

// 4- what is the diffrence between Closure's methods and The OOP's methods?
// OOP methodes takes less memory, it dosent inherit the function every time we make instance of object, it just make reference to the function that it's defined outside to the object





