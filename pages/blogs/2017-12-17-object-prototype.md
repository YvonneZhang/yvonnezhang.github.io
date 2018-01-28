---
title: "Object Prototype - Javascript Concepts You Should Know"
date: "2017-12-17"
---

```js
/**
 * 1. __proto__ and prototype
 */

const obj = {}

/**
 * [X] Deprecated and discouraged, also not in spec
 */
obj.__proto__

/**
 * [√] Recommended, replace `__proto__`, returns the prototype of the given object instance
 */
Object.getPrototypeOf(obj) === Object.prototype
// true

/**
 * `prototype` is an object, a property of a constuctor function,
    and basically a bucket where inherited members defined.
 */
obj.prototype
// undefined

/**
 * 2. constructor function and the `new` keyword
 */

/**
 * A constructor is any function which is used as a constructor.
 * A function can be written to be used as a constructor or to be called as a normal function,
   or to be used either way.
 */
const Foo = function (number) {
  this.number = number;
}

const fooResult = Foo();
fooResult;
// undefined

Object.getPrototypeOf(Foo) === Function.prototype;
// true

/**
 * When a function called with the `new` keyword, it makes a difference.
 */
const foo = new Foo();
foo;
// {}

/**
 * When `new Foo()` executed, JavaScript does the following things:
 *   1. It creates a new object which inherits from `Foo.prototype`
 */
Object.getPrototypeOf(foo) === Foo.prototype;
// true
Foo.prototype.number = 1;
foo.number
// 1

/**
 *   2. It sets the constructor property of the object to Foo
 */
foo.constructor === Foo;
// true
foo instanceof Foo;
// true

/**
 *   3. The newly created object returned whith `this` bound to it.
 */
new Foo(2).number
// 2


/**
 * Let's put it all together.
 */
const Bar = function(num) {
  this.num = num;
  this.getNumber = function() {
    return this.number;
  }
  this.getNum = function() {
    return this.num;
  }
};
Bar.prototype = Foo.prototype;

Bar.prototype.constructor === Bar;
// false
Bar.prototype.constructor === Foo;
// true

const bar = new Bar(3);
bar.number
// 1
bar.num
// 3
bar.getNumber()
// 1
bar.getNum()
// 3

Object.getPrototypeOf(bar) === Foo.prototype
// true
Object.getPrototypeOf(bar) === Bar.prototype
// true

/**
 * Remember that it's not always safe to rely on the constructor property of an object.
 */
bar.constructor === Bar
// false
bar.constructor === Foo
// true
bar.constructor = Bar
bar.constructor === Bar
// true
```
