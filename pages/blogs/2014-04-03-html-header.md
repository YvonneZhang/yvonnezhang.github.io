---
title: "HTML5 Note #2 : The header element"
date: "2014-04-03"
path: "html-header"
---
## HTML5 之前

在 HTML5 之前，常用
```html
<div id="header">
```
但是在第一篇 Note 中了解了语义化之后，已经能够理解使用 `<header>` 可以传达更多的语义。

## `<header>` 代表着什么？

header 标签一般用于显示介绍性的内容，典型的用法是包含一个 h1-h6 元素，或者一个 hgroup 元素。但是也可以包含其他的内容，比如搜索栏、导航 nav 或者任何需要的 logo。

为了有直观的理解和感受，我找了几个网站的 header 。

1. Mobile Twitter

![](http://7xl4xb.com1.z0.glb.clouddn.com/mobile_twitter_header.jpg)

	```html
	<header class="">
		<brandbar class="brandbar ">
			……
		</brandbar>
		<navbar class="navbar ">
			……
		</navbar>
	</header>
	```
2. Mobile Github

![](http://7xl4xb.com1.z0.glb.clouddn.com/mobile_github_header.jpg)

	```html
	<header class="nav-bar clearfix">
		<div class="nav-bar-inner">
			……
		</div>

		<nav class="nav-bar-tabs ">
			……
		</nav>
	</header>
	```

之所以选用的都是手机版网页，是因为 header 的浏览器兼容问题。事实上，这两个及绝大部分网站的网页版都是用 div 实现的。关于兼容性的问题待会儿在**拓展**中细谈。

## 何时需要用到 `<header>`?

根据上面的栗子们，很容易看出 header 可用在页面的顶部。而且在一个页面中可以多次使用 header，但是需要注意 `<header>` 元素不能作为 `<address>`, `<footer>` 或其他 `<header>` 元素的子元素（参见 https://developer.mozilla.org/zh-CN/docs/HTML/Element/header ）。比如，可以像下面这么用：

```html
<header>
	<h1>The most important heading on this page</h1>
	<p>With some supplementary information</p>
</header>

<article>
	<header>
		<h1>Title of this article</h1>
		<p>By Richard Clark</p>
	</header>
		<p>...Lorem Ipsum dolor set amet...</p>
</article>
```

*！注意：* 在一个页面中使用多个 h1 标签在 HTML5 和 HTML4 中是**完全合法**的。但是不建议这么用，因为会产生歧义。

## header 样式
作者认为为了让主流浏览器将 header 作为块级元素进行渲染，必须明确写上

```css
header { display: block; }
```

- - -
## 拓展

1. 浏览器兼容性

（ 参见 https://developer.mozilla.org/zh-CN/docs/HTML/Element/header ）

由于移动设备更新很快，所以老旧的浏览器很容易被淘汰，在移动端网页中使用 HTML5 标签远远比桌面端网页更为适合。
- - -
## 感想

1. 在搜索关于 header 的详细信息时，发现 [Mozilla Developer Network - HTML - 元素](https://developer.mozilla.org/zh-CN/docs/HTML/Element) 十分好用~

2. 回到看这篇文章的 reason，还是认为自己的第一个 case 中，在 header 标签中直接插入类似 banner 的图片不太合适。

## 问题

Q: 对于 header 样式的问题：这篇文章写作时间是09年6月份，现在的浏览器难道不是默认渲染为块级元素么？

A: *自问自答一个:*
因为较老的浏览器（比如 IE6 - 8）不能够识别新的 HTML5 标签，默认情况下，所有的浏览器都会将未知元素的 display 值计算为 inline。
（ 参见 http://www.impressivewebs.com/default-css-display-values-html-elements/ ）

- - -
> Refrence
>
> [The header element](http://html5doctor.com/the-header-element/)
