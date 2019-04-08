import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// calculate wages
// factory function
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
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
var circle = new Circle(1);
circle.draw();

console.log(circle);

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
