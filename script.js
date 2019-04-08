import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// calculate wages

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
