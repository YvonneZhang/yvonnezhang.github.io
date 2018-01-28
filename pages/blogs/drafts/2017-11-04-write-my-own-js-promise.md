---
title: Writing My Own Javascript Promise
date: "2017-11-05"
---

大概每一个软件工程师的愿望都是造一个属于自己的轮子，毕竟这是理解一个概念的最快路径：先模仿现有的轮子照搬一个，再造一个更好的轮子，虽然还是一个轮子 :D

为什么我要写一个属于自己的 Javascript Promise 呢？

因为她真的是一个令人着迷又困惑的存在。

自从 ES6 将她纳入到原生支持的对象之后，她似乎成了一切异步调用的基石，有了它，Javascript 的编程变得优雅而有效，而她的接口又是那么简单，不得不让我好奇这是怎么做到的呢？

## STEP 1: 从最简单的开始
Promise 从字面上理解就是一个承诺，一个承诺的结果无非就是做到了和没有做到，无论需要等待多久，最终都会是这两种结果。

让我们看看使用 Promise 的语法，不得不说英语为母语的人们对于编程语言和概念的理解应该会更加自然，从字面上理解可以说相当语义化了。

```js
new Promise( /* executor */ function(resolve, reject) { ... } );
```

创建一个承诺，参数是一个被称为 executor 的函数，这个函数的执行时机非常关键，它在构造 Promise 时就被调用了。`executor` 函数接受两个函数入参：第一个参数是 `resolve` 函数，当它被调用时，这个承诺得到了正常的响应；第二个参数是 `reject` 函数，当它被调用时，很遗憾这个承诺没有做到。两个函数的执行时机都是由我们写的代码决定的。


插句嘴，这个创建 Promise 的语法，充分体现了函数是 Javascript 的第一公民呐，真是把函数式编程玩的越来越溜了。


创建了我们的承诺之后，怎么知道结果呢？接下来就要引出这个重要的函数 `then`。这是一个 promise 实例的函数，接受两个事件回调函数：

```js
promise.then(onFulfilled[, onRejected]);
```

很显然，当承诺满足时 `onFulfilled` 被调用，当承诺被拒绝时 `onRejected` 被调用。

大家有没有隐隐觉得这个过程很像一个状态机的状态转换？没错，再抽象一下，Promise 其实就是一个有限状态机，她的状态也特别简单，只有三个：

- pending: 初始状态
- fulfilled: 已经有成功的返回结果
- rejected: 失败

之间的状态转换如下：

![](https://blog.codecentric.de/files/2015/03/promise-states.png)
*JS Promise state machine from https://blog.codecentric.de/en/2015/03/cancelable-async-operations-promises-javascript/*

OK, 先让我们到这里，根据上面提到的规则，写一个最最最简单的 Promise 对象。

<iframe height='265' scrolling='no' title='The Most Simple Promise' src='//codepen.io/YvonneZhang/embed/QONPmo/?height=265&theme-id=light&default-tab=js&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/YvonneZhang/pen/QONPmo/'>The Most Simple Promise</a> by Yvonne Zhang (<a href='https://codepen.io/YvonneZhang'>@YvonneZhang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

对象必须有
- then（毫无疑问）

## 追根溯源

大概说一下历史



## Reference
- [You're Missing the Point of Promises - Domenic Denicola](https://blog.domenic.me/youre-missing-the-point-of-promises/)
- [Promise - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Implementing - Forbes Lindesay](https://www.promisejs.org/implementing/)
