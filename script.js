import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//
// es5
// functional prototype
function Rectangle(x, y){
  this.x = x;
  this.y = y;
}

Rectangle.prototype.perimeter = function(){
  return this.x.toString();
}
var rect = new Rectangle(2,5);
console.log(rect.perimeter());

// es6
// class prototype 
class Rectangle1{
 constructor(x,y){
   this.x = x;
   this.y = y;
 }
 perimeter1(){
   return this.x*this.y;
 }
}
var rect1 = new Rectangle1(5,6);
console.log(rect1.perimeter1());

// Factory function
// Functions which always returns an object called as Factory functions
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}
var circle = createCircle(1);
circle.draw();

// constructor function
// Everytime we create object using `new` keyword, its associated constructor key-value and method is created.Causes redundancy. 
// prototype will solve this problem
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
var circle = new Circle(1);
circle.draw();

console.log(circle);

// closure : generate unique userid by persisting the previous user id
function makeFunc() {
  var data = 1;
  function displayName() {
    var val =0;
    data++;
    val = data + val;
    return val;
  }
  return displayName;
}

var myFunc = makeFunc();
console.log(myFunc()); 
console.log(myFunc());
console.log(myFunc());

// curry function
function curry(x){
  var data = x + 1;
  return function(y){
    let val = y + data;  
    return val;
  } 
}
console.log(curry(10)(12));

function Watch(){
  let start,end,running,duration=0;
  this.start = function(){
    if(running){
      console.log("running already.Please stop to start watch!!")
    }else{
      running =1;
      start = new Date();
    }
  this.end = function(){
    if(running){
      running = 0;
      end = new Date();
      duration = (end.getTime() - start.getTime())/1000;
      console.log(duration);
      return duration;
    }else{
      console.log("please start the watch");
    }
  }
  } 
  this.duration = function(){
    if(running){
        console.log("not set");
    }else{
      duration = (end.getTime() - start.getTime())/1000;
      console.log(duration);
      return duration;
    }
  }
  this.reset = function(){
    start = 0;
    end = 0;
    running = 0;
    duration=0;
  }
}
const myWatch = new Watch();
myWatch.start();

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  var data = function displayName() { // displayName() is the inner function, a closure
     // use variable declared in the parent function
     name = name + Math.random(1,100); 
     console.log(name);  
    }
  return data;
}
var par = init();
par();
par();

for(let i=0;i<=5;i++){
  (function(i) {
  setTimeout(function(){
    console.log(i);
  },1000)
  })(i);
}

//event delegation, capturing and propagation
//useCapture is the second parameter to set capture else bubbling takes place
var parent = document.getElementById("parent");
parent.addEventListener(
  "click",
  function(e) {
    e.stopPropagation();
    console.log("parent clicked");
  },
  true
);

var child = document.getElementById("child");
child.addEventListener(
  "click",
  function(e) {
    e.stopPropagation();
    console.log("child clicked");
  },
  true
);



// async in for-loop and hoisting 
// replacing let with var prints the last iterated value
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 10000);
}

// promise with async and await
const preMovie = async () => {
  const promiseCall = new Promise((resolve, reject) => {
    setTimeout(function() {
      reject("passed");
    }, 1000);
  });
  let ticket = await promiseCall;
  return ticket;
};

preMovie()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

  // call, apply and bind
var person1 = { first: "karthik", last: "kumar" };
var person2 = { first: "kkk", last: "kumar" };
function greet(value) {
  console.log(value + this.first + " " + this.last);
}
greet.call(person1, "hello");
greet.apply(person1, ["hello"]);
var bound = greet.bind(person1, ["hello"]);
bound();


// -------------------------
// ________________
// inheritance
const Animal =  {
  eat : function() {
    console.log(this.name + "is eating");
  }
}

const Dog = Object.create(Animal, {
  name: { value: "husky" },
  color: { value: "white" }
});
Dog.bark = function() {
  console.log(this.name + " is barking bow bow");
};
Dog.bark();
console.log(Dog.eat());


// composition __________
const getEnergy = (state) => ({
  eat : () => {
    console.log(state.name + "is eating");
  }
})

const Animal1 = (name, color) => {
  let state = {
    name,
    color
  }
  return Object.assign(state,
    getEnergy(state)
    )
}
const Dog1 = Animal1("Husky", "brown");
Dog1.eat()

--------------------------------------------------


// -----------------------------------programming questions-----------------------------------------------
// pattern
//  *
// ***
function pyramid(n) {  //Input or number of rows
  for (var i = 1; i <= n; i++) {
      var s = "";
      for (var j = 1; j <= (2 * n - 1); j++) { 
          ////For every each counter there exist 2*n-1 value
          (j>= n + 1 - i && j<= n-1+i) ? s+="*" : s+=" "   //Check the work book image
      }
      console.log(s);
  }
}

  pyramid(4);


// -------------pattern 2-------------
// *
// **
function generatePyramid() {
    var totalNumberofRows = 5;
    var output="";
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output+=j + "     ";
        }
        console.log(output);
        output="";
    }
}  
generatePyramid(2);

// ------------------------------------------

// ways to check if the given object is array or not
var arr = [];

if( arr instanceof Array && arr.constructor === Array && Array.isArray(arr)){
    console.log("its array");
}

// ------------------------HOC--------------------------------------------------------
// curry function is also called as HOC
// foreach,map,filter,reduce are also HOC
// HOC is the function which takes one argument at a time and produces a function
// used to reuse the functionality
import React from "react";
import { render } from "react-dom";
const hoc = (WrappedComponent) => (props) => {
  return (
    <div>
      <WrappedComponent {...props}>
        {props.children.toUpperCase()}
      </WrappedComponent>
    </div>
  )
}
const Username = (props) => (
  <div>{props.children}</div>
)
const UpperCase = hoc(Username);
const App = () => 
  <div>
<UpperCase>karthik</UpperCase>
  </div>
render(<App />, document.getElementById("root"));    //KARTHIK

// ----------------------------------------------------------------------------------------

// example for callbacks
// Passing functions as a parameter to other function is the fundamental paradigm of functional programming
// A callback function is the function which is passed as a argument to another function, it executes when certain condition is met.

    // global variable
var allUserData = [];

// generic logStuff function that prints to console
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}

// A function that takes two parameters, the last one a callback function
function getInput (options, callback) {
    allUserData.push (options);
    
    callback (options);

}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
//  name: Rich
// speciality: JavaScript


// ------------------------------------Generators and yield functions--------------------------------------------------

// Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

// Generators in JavaScript -- especially when combined with Promises -- are a very powerful tool for asynchronous programming as they mitigate -- if not entirely eliminate -- the problems with callbacks, such as Callback Hell and Inversion of Control.

// Calling a generator function does not execute its body immediately; 
// an iterator object for the function is returned instead. 
// When the iterator's next() method is called, the generator function's body is executed until the first yield expression, 
// which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. 
// The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value, as a boolean. 
// Calling the next() method with an argument will resume the generator function execution, replacing the yield expression where execution was paused with the argument from next().

// A return statement in a generator, when executed, will make the generator finished 
// (i.e the done property of the object returned by it will be set to true). 
// If a value is returned, it will be set as the value property of the object returned by the generator.
// Much like a return statement, an error thrown inside the generator will make the generator finished 
// -- unless caught within the generator's body.
// When a generator is finished, subsequent next calls will not execute any of that generator's code, 
// they will just return an object of this form: {value: undefined, done: true}.

function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20

console.log(gen.next().value);
// expected  output : undefined
// As there is no action to resume or pause in the generator, the returned iterator is {value:undefined,done:true}.
// we can perform certain actions until the iterator key property returns {value:undefined,done:true}

// --------------------------------------------yield-----------------------------------------
// The yield keyword is used to pause and resume a generator function
function* foo(index) {
  while (index < 2) {
    yield index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// expected output: 0

console.log(iterator.next().value);
// expected output: 1

// ------------------------------------------redux saga----------------------------
// sagas >
//    |----index.js 

//-----1----- takeLatest : debounces the event meaning 
//----------- Return a function, that, as long as it continues to be invoked, will
// not be triggered. The function will be called after it stops being 
// called for `wait` milliseconds. If `immediate` is passed, trigger the 
// function on the leading edge, instead of the trailing.

// -----------debounce/takeLatest usecase-------------
// Remember, the `debounce` method is intended for use on events
// that rapidly fire, ie: a window resize or scroll. The *first* 
// time the event fires, the `timeout` variable has been declared, 
// but no value has been assigned to it - it is `undefined`. 
// Therefore, nothing is removed from JavaScript's execution queue 
// because nothing has been placed in the queue - there is nothing 
// to clear.


//-----2----- takeEvery :  Spawns a saga on each action dispatched to the Store that matches pattern
//----------- takeEvery to start a new fetchUser task on each dispatched USER_REQUESTED action:
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import { delay } from "redux-saga";

export function* incrementAsync() {
  yield call(delay, 1000);  //delays the 'INCREMENT' action by 1 second
  yield put({ type: "INCREMENT" }); //dipatches an action
}
export function* randomCHAR() {
  yield put({ type: "RANDOM" });  //dispatches an action
}

// sagaMiddleware syncs the changes occured in the rootSaga
// rootSaga is the generator function which always watches for an action to dispatch from the component
export default function* rootSaga() {
  yield takeLatest("INCREMENT_ASYNC", incrementAsync);
  yield takeEvery("RANDOM_CHAR", randomCHAR); 
}

// ----------------index.js with redux store--------------
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagaMonitor from "./sagaMonitor";

import Counter from "./components/Counter";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState().count}
      char={store.getState().char}
      rand={() => action("RANDOM_CHAR")}
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
      onIncrementIfOdd={() => action("INCREMENT_IF_ODD")}
      onIncrementAsync={() => action("INCREMENT_ASYNC")}
    />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
// -----------------------------------------------------------------------------------
// https://github.com/iamshaunjp/object-oriented-js



// -------------------------------------------------------------------------------------
// palindrome without using in-built functions
var a = "noon";
var palin;
let n = a.length - 1;
for (let x = 0; x <= a.length - 1; x++) {
  if (a[x] === a[n]) {
    palin = true;
  } else {
    palin = false;
  }
  n--;
}
console.log(palin, "palin");
// malayalam -- true
// english -- true
// ----------------------------------------------------------

// score board of two players
var a =[3,6,1];
var b = [9,2,4];
var winnerA = [];
var winnerB = [];
for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
        if(a[i] > b[i]){
            winnerA[i] = 1;
            winnerB[i] = 0;
        }else{
          winnerA[i] = 0;
          winnerB[i] = 1;
        }
    }
}
console.log(winnerA); // [0,1,0]
console.log(winnerB); // [1,0,1]

// ------------------------------------------------------------------------------------------
// question on closure + loop + scoping
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
//output 
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined

// The reason for this is because the setTimeout function creates a function (the closure) that has access to its outer scope, 
// which is the loop that contains the index i. 
// After 3 seconds go by, the function is executed and it prints out the value of i, 
// which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 
// and the loop finally stops at 4.arr[4] does not exist, which is why you get undefined.

// ----Approach 1-----
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }(i), 3000);  //using Immediately invoked function expression(IIFE), persisting the value of i in the callback function
}

// ----Approach 2-----
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
