#### 1) What is the difference between var, let, and const?

Ans of 1: var, let, and const are three ways to create variables in JavaScript.
var is the old way. You can change its value, but it does not follow block rules, so it can behave in confusing ways.

let is the newer and safer way. You can change its value, and it follows block rules, which makes it easier to control.

const is also new, but once you set a value, you cannot change it. It also follows block rules like let.
In short to say, var is old and less safe, let is modern and changeable, and const is modern and unchangeable.

#### 2) What is the difference between map(), forEach(), and filter()?

Ans of 2: map(), forEach(), and filter() are three methods used on arrays in JavaScript, but they do different jobs.
forEach() goes through every item in the array and lets you do something with each item, but it does not return a new array.

map() also goes through every item, but it returns a new array with the changed values.

filter() checks every item and keeps only the items that pass a condition, then returns a new array with those items.

In short to say, forEach() is for doing something, map() is for creating a new changed array, and filter() is for selecting certain items.

#### 3) What are arrow functions in ES6?

Ans of 3: Arrow functions are a shorter and cleaner way to write functions in ES6. They use the “=>” symbol instead of the word function. They make your code look simpler, and they automatically handle this, so you don’t have to worry about it changing. They work just like normal functions but are written in a quicker way.
Example: **const add = (a, b) => a + b**. It does the same job as a normal function but with less writing.

#### 4) How does destructuring assignment work in ES6?

Ans of 4: Destructuring assignment is a simple way to take values from arrays or objects and store them into separate variables. Instead of pulling out each value one by one, you can unpack them in a single line. For arrays, you can write something like const [a, b] = myArray, and a and b will get the first two values of the array. For objects, you can write const {name, age} = person, and those variables will get the matching properties from the object. It basically helps you write cleaner, shorter code when you want specific values.

#### 5) Explain template literals in ES6. How are they different from string concatenation?

Ans of 5: Template literals are a way to write strings in ES6 using backticks (` `) instead of quotes. They let you easily include variables or expressions inside a string by using `${}`.
For example,
instead of writing "Hello " + name + "!",
you can write`Hello ${name}!`.

The difference from regular string concatenation is that template literals are cleaner and easier to read, especially when combining multiple variables or writing multi-line strings. They avoid the + signs and make the code simpler.
