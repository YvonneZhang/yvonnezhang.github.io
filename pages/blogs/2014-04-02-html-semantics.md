---
title: "HTML5 Note #1：Let's Talk about Semantics"
date: "2014-04-02"
---
## 为什么要语义化？

- 不仅人类需要明白HTML语义，机器（搜索引擎爬虫，辅助工具等）也需要能够读懂HTML语义
- 易于形成结构化的文档数据，搜索引擎神马的最喜欢了
- 从开发者的角度来说，增强了代码的可读性

## 简单好用的流程图

对于如何使用正确的 HTML 标签，可以对照此流程图判断使用。
当然，前提是最好能够理解每一个标签的用意及其使用的环境。
如果所有选择条件都不成立，那么就回过头来拥抱老朋友 div 吧。

![](https://ci5.googleusercontent.com/proxy/J3aymhFZyzG0a0nV2JEmHKz9t88A7rLnxNBtFoLHzfqKmn3yEiFS3prB67CqgOsFQMiB70jW5sDzT3FGoex80ozDuX-UDHQjJv4lc8G86JJ6nkhGM5wg=s0-d-e1-ft#http://html5doctor.com/downloads/h5d-sectioning-flowchart.sml.png)

*[先download下来，以后慢慢理解使用]*


## 有可能HTML标签会越来越多么？

**总的原则：**

1. 用精小的HTML标签集满足web上的所有需求。
2. 标签名不仅仅表达了字面上的意义，更多是一种实体类型的抽象

## 进一步语义化HTML

使用 Microdata 或者 Microformat

- - -
## 感想：

1. 引用原文的一个引用，就不翻译了：

	> 1. You are busy creating a website.
	> 2. You have a thought, “Oh, now I have to add an element.”
	> 3. Then another thought, “I feel so guilty adding a div. Div-itis is terrible, I hear.”
	> 4. Then, “I should use something else. The aside element might be appropriate.”
	> 5. Three searches and five articles later, you’re fairly confident that aside is not semantically correct.
	> 6. You decide on article, because at least it’s not a div.
	> 7. You’ve wasted 40 minutes, with no tangible benefit to show for it.
	> — Divya Manian

	虽然她举这个栗子的用意是用来反讽语义化无法带来什么直观好处，
	但是觉得这个简直就是自己修改第一个case中HTML标签的过程重现。
	以后还是得一个一个地将HTML5标签啃下来，才不会重现以上纠结的情形。

2. HTML5标签用法非一成不变，其用途也常引起争议

## 问题：

1. 有工具可以测试自己写的页面的语义化程度么？
2. 在什么情况下语义化是非常必要的？

- - -
> Refrence
>
> - [Let's Talk about Semantics](http://html5doctor.com/lets-talk-about-semantics/)
