import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const D=JSON.parse('{"title":"\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u5B88\u536B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7C7B\u578B\u65AD\u8A00","slug":"\u7C7B\u578B\u65AD\u8A00","link":"#\u7C7B\u578B\u65AD\u8A00","children":[]},{"level":2,"title":"\u53CC\u91CD\u65AD\u8A00","slug":"\u53CC\u91CD\u65AD\u8A00","link":"#\u53CC\u91CD\u65AD\u8A00","children":[]},{"level":2,"title":"\u7C7B\u578B\u5B88\u536B","slug":"\u7C7B\u578B\u5B88\u536B","link":"#\u7C7B\u578B\u5B88\u536B","children":[{"level":3,"title":"instanceof","slug":"instanceof","link":"#instanceof","children":[]},{"level":3,"title":"in","slug":"in","link":"#in","children":[]},{"level":3,"title":"\u5B57\u9762\u91CF\u7C7B\u578B\u5B88\u536B","slug":"\u5B57\u9762\u91CF\u7C7B\u578B\u5B88\u536B","link":"#\u5B57\u9762\u91CF\u7C7B\u578B\u5B88\u536B","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u5B88\u536B.md"}'),p={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u5B88\u536B.md"},e=l(`<h1 id="\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u5B88\u536B" tabindex="-1">\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u5B88\u536B <a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u5B88\u536B" aria-hidden="true">#</a></h1><hr><h1 id="\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u5B88\u536B-1" tabindex="-1">\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u5B88\u536B <a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u5B88\u536B-1" aria-hidden="true">#</a></h1><h2 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1">\u7C7B\u578B\u65AD\u8A00 <a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a></h2><p>\u6709\u4E9B\u60C5\u51B5\u4E0B TS \u5E76\u4E0D\u80FD\u6B63\u786E\u6216\u8005\u51C6\u786E\u5F97\u63A8\u65AD\u7C7B\u578B,\u8FD9\u4E2A\u65F6\u5019\u53EF\u80FD\u4EA7\u751F\u4E0D\u5FC5\u8981\u7684\u8B66\u544A\u6216\u8005\u62A5\u9519\u3002</p><p>\u6BD4\u5982\u521D\u5B66\u8005\u7ECF\u5E38\u4F1A\u9047\u5230\u7684\u4E00\u7C7B\u95EE\u9898:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const person = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">person.name = &#39;xiaomuzhu&#39;; // Error: &#39;name&#39; \u5C5E\u6027\u4E0D\u5B58\u5728\u4E8E \u2018{}\u2019</span></span>
<span class="line"><span style="color:#A6ACCD;">person.age = 20; // Error: &#39;age&#39; \u5C5E\u6027\u4E0D\u5B58\u5728\u4E8E \u2018{}\u2019</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u65F6\u5019\u8BE5\u600E\u4E48\u529E\uFF1F\u7531\u4E8E\u7C7B\u578B\u63A8\u65AD\uFF0C\u8FD9\u4E2A\u65F6\u5019 <code>person</code> \u7684\u7C7B\u578B\u5C31\u662F <code>{}</code>\uFF0C\u6839\u672C\u4E0D\u5B58\u5728\u540E\u6DFB\u52A0\u7684\u90A3\u4E9B\u5C5E\u6027\uFF0C\u867D\u7136\u8FD9\u4E2A\u5199\u6CD5\u5728js\u4E2D\u5B8C\u5168\u6CA1\u95EE\u9898\uFF0C\u4F46\u662F\u5F00\u53D1\u8005\u77E5\u9053\u8FD9\u4E2A <code>person</code> \u5B9E\u9645\u662F\u6709\u5C5E\u6027\u7684\uFF0C\u53EA\u662F\u4E00\u5F00\u59CB\u6CA1\u6709\u58F0\u660E\u800C\u5DF2\uFF0C\u4F46\u662F typescript \u4E0D\u77E5\u9053\u554A\uFF0C\u6240\u4EE5\u5C31\u9700\u8981\u7C7B\u578B\u65AD\u8A00\u4E86:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">interface Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const person = {} as Person;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">person.name = &#39;xiaomuzhu&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">person.age = 20;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F46\u662F\u7C7B\u578B\u65AD\u8A00\u4E0D\u8981\u6EE5\u7528,\u5728\u4E07\u4E0D\u5F97\u5DF2\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u8981\u8C28\u614E,\u56E0\u4E3A\u4F60\u5F3A\u5236\u628A\u67D0\u7C7B\u578B\u65AD\u8A00\u4F1A\u9020\u6210 TypeScript \u4E27\u5931\u4EE3\u7801\u63D0\u793A\u7684\u80FD\u529B\u3002</p><h2 id="\u53CC\u91CD\u65AD\u8A00" tabindex="-1">\u53CC\u91CD\u65AD\u8A00 <a class="header-anchor" href="#\u53CC\u91CD\u65AD\u8A00" aria-hidden="true">#</a></h2><p>\u867D\u7136\u7C7B\u578B\u65AD\u8A00\u662F\u6709\u5F3A\u5236\u6027\u7684,\u4F46\u5E76\u4E0D\u662F\u4E07\u80FD\u7684,\u56E0\u4E3A\u4E00\u4E9B\u60C5\u51B5\u4E0B\u4E5F\u4F1A\u5931\u6548:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">interface Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">	name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">	age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const person = &#39;xiaomuzhu&#39; as Person; // Error</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u65F6\u5019\u4F1A\u62A5\u9519,\u5F88\u663E\u7136\u4E0D\u80FD\u628A <code>string</code> \u5F3A\u5236\u65AD\u8A00\u4E3A\u4E00\u4E2A\u63A5\u53E3 <code>Person</code> ,\u4F46\u662F\u5E76\u975E\u6CA1\u6709\u529E\u6CD5,\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528\u53CC\u91CD\u65AD\u8A00:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">interface Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">	name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">	age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const person = &#39;xiaomuzhu&#39; as any as Person; // ok</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5148\u628A\u7C7B\u578B\u65AD\u8A00\u4E3A <code>any</code> \u518D\u63A5\u7740\u65AD\u8A00\u4E3A\u4F60\u60F3\u65AD\u8A00\u7684\u7C7B\u578B\u5C31\u80FD\u5B9E\u73B0\u53CC\u91CD\u65AD\u8A00\uFF0C\u5F53\u7136\u4E0A\u9762\u7684\u4F8B\u5B50\u80AF\u5B9A\u8BF4\u4E0D\u901A\u7684\uFF0C\u53CC\u91CD\u65AD\u8A00\u6211\u4EEC\u4E5F\u66F4\u4E0D\u5EFA\u8BAE\u6EE5\u7528\uFF0C\u4F46\u662F\u5728\u4E00\u4E9B\u5C11\u89C1\u7684\u573A\u666F\u4E0B\u4E5F\u6709\u7528\u6B66\u4E4B\u5730\uFF0C\u5F53\u4F60\u9047\u5230\u4E8B\u8BB0\u5F97\u6709\u53CC\u91CD\u65AD\u8A00\u8FD9\u4E2A\u64CD\u4F5C\u5373\u53EF\u3002</p><h2 id="\u7C7B\u578B\u5B88\u536B" tabindex="-1">\u7C7B\u578B\u5B88\u536B <a class="header-anchor" href="#\u7C7B\u578B\u5B88\u536B" aria-hidden="true">#</a></h2><p>\u7C7B\u578B\u5B88\u536B\u8BF4\u767D\u4E86\u5C31\u662F\u7F29\u5C0F\u7C7B\u578B\u7684\u8303\u56F4\uFF0C\u6211\u4EEC\u770B\u51E0\u4E2A\u4F8B\u5B50\u5C31\u5BB9\u6613\u7406\u89E3\u4E86\u3002</p><h3 id="instanceof" tabindex="-1">instanceof <a class="header-anchor" href="#instanceof" aria-hidden="true">#</a></h3><p>instanceof \u7C7B\u578B\u4FDD\u62A4\u662F\u901A\u8FC7\u6784\u9020\u51FD\u6570\u6765\u7EC6\u5316\u7C7B\u578B\u7684\u4E00\u79CD\u65B9\u5F0F.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name = &#39;xiaomuzhu&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    age = 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Animal {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name = &#39;petty&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    color = &#39;pink&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function getSometing(arg: Person | Animal) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7C7B\u578B\u7EC6\u5316\u4E3A Person</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (arg instanceof Person) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(arg.color); // Error\uFF0C\u56E0\u4E3Aarg\u88AB\u7EC6\u5316\u4E3APerson\uFF0C\u800CPerson\u4E0A\u4E0D\u5B58\u5728 color\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(arg.age); // ok</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7C7B\u578B\u7EC6\u5316\u4E3A Person</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (arg instanceof Animal) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(arg.age); // Error\uFF0C\u56E0\u4E3Aarg\u88AB\u7EC6\u5316\u4E3AAnimal\uFF0C\u800CAnimal\u4E0A\u4E0D\u5B58\u5728 age \u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(arg.color); // ok</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="in" tabindex="-1">in <a class="header-anchor" href="#in" aria-hidden="true">#</a></h3><p>\u8DDF\u4E0A\u9762\u7684\u4F8B\u5B50\u7C7B\u4F3C\uFF0C<code>x in y</code> \u8868\u793A x \u5C5E\u6027\u5728 y \u4E2D\u5B58\u5728\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">	name = &#39;xiaomuzhu&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	age = 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Animal {</span></span>
<span class="line"><span style="color:#A6ACCD;">	name = &#39;petty&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	color = &#39;pink&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function getSometing(arg: Person | Animal) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	if (&#39;age&#39; in arg) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(arg.color); // Error</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(arg.age); // ok</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	if (&#39;color&#39; in arg) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(arg.age); // Error</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(arg.color); // ok</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5B57\u9762\u91CF\u7C7B\u578B\u5B88\u536B" tabindex="-1">\u5B57\u9762\u91CF\u7C7B\u578B\u5B88\u536B <a class="header-anchor" href="#\u5B57\u9762\u91CF\u7C7B\u578B\u5B88\u536B" aria-hidden="true">#</a></h3><p>\u8FD9\u4E2A\u529F\u80FD\u5F88\u91CD\u8981\uFF0C\u5728\u540E\u9762\u7684\u8054\u5408\u8FA8\u6790\u7C7B\u578B\u4E2D\u4F1A\u7528\u5230\u6B64\u7279\u6027\uFF0C\u5F53\u4F60\u5728\u8054\u5408\u7C7B\u578B\u91CC\u4F7F\u7528\u5B57\u9762\u91CF\u7C7B\u578B\u65F6\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u68C0\u67E5\u5B83\u4EEC\u662F\u5426\u6709\u533A\u522B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type Foo = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  kind: &#39;foo&#39;; // \u5B57\u9762\u91CF\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">  foo: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Bar = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  kind: &#39;bar&#39;; // \u5B57\u9762\u91CF\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">  bar: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function doStuff(arg: Foo | Bar) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (arg.kind === &#39;foo&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(arg.foo); // ok</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(arg.bar); // Error</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(arg.foo); // Error</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(arg.bar); // ok</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u8282\u7684\u5185\u5BB9\u4E0D\u591A\uFF0C\u57FA\u672C\u5C5E\u4E8E\u5C0F\u6280\u5DE7\u7C7B\uFF0C\u8FD9\u4E9B\u5C0F\u6280\u5DE7\u80FD\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u89E3\u51B3\u4E00\u4E0B\u68D8\u624B\u7684\u95EE\u9898\uFF0C\u4E5F\u80FD\u5E2E\u52A9\u6211\u4EEC\u7F16\u5199\u4E00\u4E9B\u9AD8\u6548\u7684\u4EE3\u7801\u3002</p>`,29),o=[e];function c(r,t,i,A,C,y){return a(),n("div",null,o)}const g=s(p,[["render",c]]);export{D as __pageData,g as default};
