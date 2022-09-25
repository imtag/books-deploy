import{_ as s,c as n,o as a,d as l}from"./app.c4f45da1.js";const D=JSON.parse('{"title":"\u590D\u6742\u6570\u636E\u5904\u7406 \xB7 \u6811\u5F62","description":"","frontmatter":{},"headers":[{"level":2,"title":"7.1 \u521B\u5EFA\u8282\u70B9","slug":"_7-1-\u521B\u5EFA\u8282\u70B9","link":"#_7-1-\u521B\u5EFA\u8282\u70B9","children":[{"level":3,"title":"7.1.1 JavaScript \u4E2D\u7684\u7C7B\uFF08Class\uFF09","slug":"_7-1-1-javascript-\u4E2D\u7684\u7C7B\uFF08class\uFF09","link":"#_7-1-1-javascript-\u4E2D\u7684\u7C7B\uFF08class\uFF09","children":[]},{"level":3,"title":"7.1.2 \u5B9A\u4E49\u8282\u70B9\u7C7B\u578B","slug":"_7-1-2-\u5B9A\u4E49\u8282\u70B9\u7C7B\u578B","link":"#_7-1-2-\u5B9A\u4E49\u8282\u70B9\u7C7B\u578B","children":[]},{"level":3,"title":"7.1.3 \u6269\u5C55\u8282\u70B9\u7C7B\u578B","slug":"_7-1-3-\u6269\u5C55\u8282\u70B9\u7C7B\u578B","link":"#_7-1-3-\u6269\u5C55\u8282\u70B9\u7C7B\u578B","children":[]},{"level":3,"title":"7.1.4 \u6811\u5F62\u8282\u70B9\u4EE3\u7801\u6E05\u5355","slug":"_7-1-4-\u6811\u5F62\u8282\u70B9\u4EE3\u7801\u6E05\u5355","link":"#_7-1-4-\u6811\u5F62\u8282\u70B9\u4EE3\u7801\u6E05\u5355","children":[]}]},{"level":2,"title":"7.2 \u5B9A\u4E49\u6811\u5F62\u7ED3\u6784","slug":"_7-2-\u5B9A\u4E49\u6811\u5F62\u7ED3\u6784","link":"#_7-2-\u5B9A\u4E49\u6811\u5F62\u7ED3\u6784","children":[{"level":3,"title":"7.2.1 \u67E5\u8BE2\u8282\u70B9","slug":"_7-2-1-\u67E5\u8BE2\u8282\u70B9","link":"#_7-2-1-\u67E5\u8BE2\u8282\u70B9","children":[]},{"level":3,"title":"7.2.2 \u7EDF\u8BA1\u6811\u5F62\u5927\u5C0F","slug":"_7-2-2-\u7EDF\u8BA1\u6811\u5F62\u5927\u5C0F","link":"#_7-2-2-\u7EDF\u8BA1\u6811\u5F62\u5927\u5C0F","children":[]},{"level":3,"title":"7.2.3 \u6811\u5F62\u7ED3\u6784\u4EE3\u7801\u6E05\u5355","slug":"_7-2-3-\u6811\u5F62\u7ED3\u6784\u4EE3\u7801\u6E05\u5355","link":"#_7-2-3-\u6811\u5F62\u7ED3\u6784\u4EE3\u7801\u6E05\u5355","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[{"level":3,"title":"\u4E60\u9898","slug":"\u4E60\u9898","link":"#\u4E60\u9898","children":[]}]}],"relativePath":"JavaScript/\u57FA\u4E8E JavaScript \u5F00\u53D1\u7075\u6D3B\u7684\u6570\u636E\u5E94\u7528/\u590D\u6742\u6570\u636E\u5904\u7406 \xB7 \u6811\u5F62.md"}'),p={name:"JavaScript/\u57FA\u4E8E JavaScript \u5F00\u53D1\u7075\u6D3B\u7684\u6570\u636E\u5E94\u7528/\u590D\u6742\u6570\u636E\u5904\u7406 \xB7 \u6811\u5F62.md"},e=l(`<h1 id="\u590D\u6742\u6570\u636E\u5904\u7406-\xB7-\u6811\u5F62" tabindex="-1">\u590D\u6742\u6570\u636E\u5904\u7406 \xB7 \u6811\u5F62 <a class="header-anchor" href="#\u590D\u6742\u6570\u636E\u5904\u7406-\xB7-\u6811\u5F62" aria-hidden="true">#</a></h1><hr><h1 id="\u7B2C-7-\u8282-\u590D\u6742\u6570\u636E\u5904\u7406-\xB7-\u6811\u5F62" tabindex="-1">\u7B2C 7 \u8282 \u590D\u6742\u6570\u636E\u5904\u7406 \xB7 \u6811\u5F62 <a class="header-anchor" href="#\u7B2C-7-\u8282-\u590D\u6742\u6570\u636E\u5904\u7406-\xB7-\u6811\u5F62" aria-hidden="true">#</a></h1><p>\u4EC0\u4E48\u662F\u6811\u5F62\u7ED3\u6784\uFF1F\u6811\u5F62\u7ED3\u6784\u65E0\u8BBA\u662F\u5728\u8BA1\u7B97\u673A\u73AF\u5883\u4E2D\uFF0C\u8FD8\u662F\u5728\u6211\u4EEC\u7684\u65E5\u5E38\u751F\u6D3B\u4E2D\u90FD\u975E\u5E38\u7684\u5E38\u89C1\uFF0C\u6BD4\u5982\u6211\u4EEC\u7535\u8111\u4E2D\u7684\u6587\u4EF6\u5939\u7ED3\u6784\u3001\u6BD4\u5982\u516C\u53F8\u5185\u90E8\u7684\u4EBA\u5458\u7ED3\u6784\uFF0C\u90FD\u662F\u5448\u4E0A\u4E00\u7EA7\u5143\u7D20\u548C\u82E5\u5E72\u4E0B\u4E00\u7EA7\u5143\u7D20\u7EC4\u6210\u7684\u9AD8\u7EF4\u5EA6\u7ED3\u6784\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/19/16415e4ced2d5d14~tplv-t2oaga2asx-image.image" alt="company-tree"></p><p>\u4E3A\u4E86\u80FD\u591F\u5728\u8BA1\u7B97\u673A\u7A0B\u5E8F\u4E2D\u5B9E\u73B0\u5BF9\u6811\u5F62\u7ED3\u6784\u7684\u64CD\u4F5C\u5904\u7406\uFF0C\u5DE5\u7A0B\u5E08\u4EEC\u53D1\u660E\u4E86\u975E\u5E38\u591A\u4E0D\u540C\u79CD\u7C7B\u7684\u6811\u5F62\u7ED3\u6784\u4EE5\u53CA\u9002\u5408\u4E8E\u5B83\u4EEC\u7684\u5404\u79CD\u7B97\u6CD5\u3002\u4F46\u662F\u6211\u4EEC\u8FD9\u91CC\u4E0D\u9700\u8981\u592A\u6DF1\u5165\u5730\u4E86\u89E3\u8FD9\u4E9B\u5404\u5F0F\u5404\u6837\u7684\u7ED3\u6784\u548C\u7B97\u6CD5\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5B66\u4E60\u6700\u6734\u7D20\u7684\u7B80\u5355\u6811\u5F62\u5373\u53EF\u3002</p><p>\u5F53\u7136\u5982\u679C\u6709\u5174\u8DA3\u7684\u8BDD\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u300A\u7B97\u6CD5\u300B\u3001\u300A\u7B97\u6CD5\u5BFC\u8BBA\u300B\u3001\u300A\u7F16\u7A0B\u73E0\u7391\u300B\u7B49\u7B49\u7ECF\u5178\u7684\u7B97\u6CD5\u6559\u6750\u6765\u5B66\u4E60\u66F4\u591A\u6811\u5F62\u7ED3\u6784\u53CA\u5176\u76F8\u5173\u7B97\u6CD5\u3002</p><h2 id="_7-1-\u521B\u5EFA\u8282\u70B9" tabindex="-1">7.1 \u521B\u5EFA\u8282\u70B9 <a class="header-anchor" href="#_7-1-\u521B\u5EFA\u8282\u70B9" aria-hidden="true">#</a></h2><p>\u6811\u5F62\u7ED3\u6784\u662F\u7531\u591A\u4E2A\u5305\u542B\u5B50\u8282\u70B9\u5185\u5BB9\u7684\u8282\u70B9\uFF08Node\uFF09\u6240\u7EC4\u6210\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6811\u5F62\u7ED3\u6784\u7531\u6839\u8282\u70B9\u5F00\u59CB\u81F3\u6BCF\u4E00\u4E2A\u53F6\u8282\u70B9\u4E3A\u6B62\uFF0C\u90FD\u662F\u7531\u540C\u4E00\u79CD\u6570\u636E\u7ED3\u6784\u7EC4\u6210\u7684\u3002</p><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u666E\u901A\u6811\u5F62\u7ED3\u6784\u7684\u8282\u70B9\u7531\u4E00\u4E2A\u7528\u4E8E\u5B58\u50A8\u8282\u70B9\u5185\u5BB9\u7684\u7A7A\u95F4\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u7528\u4E8E\u5B58\u50A8\u5B50\u8282\u70B9\u7684\u5F15\u7528\uFF08\u5728\u5176\u4ED6\u8BED\u8A00\u4E2D\u4E5F\u53EF\u4EE5\u4E3A\u6307\u9488\uFF09\u7684\u6570\u7EC4\u6240\u7EC4\u6210\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/19/16415e4cea39fc04~tplv-t2oaga2asx-image.image" alt="Tree-Node"></p><h3 id="_7-1-1-javascript-\u4E2D\u7684\u7C7B\uFF08class\uFF09" tabindex="-1">7.1.1 JavaScript \u4E2D\u7684\u7C7B\uFF08Class\uFF09 <a class="header-anchor" href="#_7-1-1-javascript-\u4E2D\u7684\u7C7B\uFF08class\uFF09" aria-hidden="true">#</a></h3><p>\u5728\u5B66\u4E60\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u7684\u8282\u70B9\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u9996\u5148\u6765\u5B66\u4E60\u4E0B\u5982\u4F55\u4F7F\u7528 JavaScript \u4E2D\u7684\u7C7B\u8BED\u6CD5\uFF0C\u56E0\u4E3A\u63A5\u4E0B\u6765\u975E\u5E38\u591A\u7684\u6570\u636E\u5E94\u7528\u5F00\u53D1\u4E2D\u90FD\u79BB\u4E0D\u5F00\u5BF9\u7C7B\u7684\u4F7F\u7528\u3002</p><p>\u7C7B\uFF08Class\uFF09\u53EF\u4EE5\u6BD4\u55BB\u4E3A\u751F\u7269\u5B66\u4E2D\u7684\u7269\u79CD\uFF0C\u81EA\u7136\u754C\u4E2D\u751F\u7269\u79CD\u7C7B\u591A\u5F97\u6570\u4E0D\u6E05\uFF0C\u4F46\u662F\u751F\u7269\u5B66\u5BB6\u4EEC\u5374\u53EF\u4EE5\u5C06\u5B83\u4EEC\u9010\u4E00\u4F7F\u7528<a href="https://zh.wikipedia.org/wiki/%E7%94%9F%E7%89%A9%E5%88%86%E7%B1%BB%E5%AD%A6" target="_blank" rel="noreferrer">\u751F\u7269\u5206\u7C7B\u6CD5</a>\u8FDB\u884C\u5206\u7C7B\uFF0C\u5C31\u597D\u6BD4\u5A01\u731B\u51F6\u608D\u7684\u72EE\u5B50\u3001\u8001\u864E\u518D\u5230\u60F9\u4EBA\u559C\u7231\u7684\u82B1\u732B\u3001\u6A58\u732B\u65E0\u8BBA\u4ECE\u4F53\u578B\u3001\u6BDB\u8272\u4E0A\u90FD\u6709\u7740\u5929\u5DEE\u5730\u522B\uFF0C\u4F46\u90FD\u540C\u5C5E\u732B\u79D1\u52A8\u7269\u3002\u4E5F\u597D\u6BD4\u6211\u4EEC<strong>\u667A\u4EBA</strong>\u8FD9\u4E00\u79CD\u65CF\u4E5F\u6709\u975E\u5E38\u591A\u7684\u201C\u4EB2\u621A\u201D\uFF0C\u800C\u54EA\u6015\u662F\u6211\u4EEC\u667A\u4EBA\u672C\u8EAB\u4E5F\u6709\u9EC4\u79CD\u4EBA\u3001\u9ED1\u79CD\u4EBA\u3001\u767D\u79CD\u4EBA\uFF0C\u4EBA\u4E0E\u4EBA\u4E4B\u95F4\u4E5F\u6709\u7740\u5343\u5DEE\u4E07\u522B\u7684\u591A\u6837\u6027\u3002</p><p>\u800C\u5728\u8BA1\u7B97\u673A\u4E2D\u4E5F\u540C\u6837\u6709\u7740\u8FD9\u6837\u7684\u591A\u6837\u6027\uFF0C\u6709\u7740\u82E5\u5E72\u4E2A\u76F8\u540C\u6027\u8D28\u7684\u5BF9\u8C61\uFF0C\u4F46\u5404\u81EA\u5374\u6709\u7740\u4E0D\u540C\u7684\u7279\u6027\u3001\u5185\u5BB9\u3001\u53C2\u6570\u7B49\u7B49\u3002\u8FD9\u5C31\u9700\u8981\u7C7B\u6765\u8FDB\u884C\u8868\u793A\u548C\u5B9E\u73B0\u8FD9\u79CD\u7279\u6027\u3002</p><p>\u6211\u4EEC\u518D\u6B21\u5C06\u5177\u4F53\u4E8B\u7269\u62BD\u8C61\u5316\uFF0C\u6211\u4EEC\u6BCF\u4E00\u4E2A\u4EBA\u90FD\u6709\u5404\u81EA\u7684\u540D\u5B57\uFF0C\u6211\u4EEC\u90FD\u80FD\u8868\u8FBE\u81EA\u5DF1\u7684\u6B22\u8FCE\u4E4B\u8BCD\uFF0C\u90A3\u4E48\u5C31\u7528\u4E00\u4E2A <code>Person</code> \u7C7B\u6765\u8868\u8FBE\u6211\u4EEC\u5171\u540C\u7684\u7269\u79CD\u2014\u2014\u667A\u4EBA\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  hello() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &#39;Hello, my name is &#39; + this.name</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const me = new Person(&#39;Will&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(me.hello()) //=&gt; Hello, my name is Will</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>constructor</code> \u4E3A\u6784\u5EFA\u51FD\u6570\uFF0C\u5B9A\u4E49\u5305\u542B\u4E00\u4E2A <code>name</code> \u53C2\u6570\u4EE5\u5C06\u5176\u8D4B\u4E88\u8FD9\u4E2A<strong>\u4EBA</strong>\u5B9E\u4F8B\u672C\u8EAB\u4EE5\u4F5C\u4E3A\u5176\u540D\u5B57\uFF1B<code>hello</code> \u65B9\u6CD5\u7528\u4E8E\u8868\u8FBE\u4F5C\u4E3A\u667A\u4EBA\u7684\u53CB\u597D\u6B22\u8FCE\u4E4B\u8BCD\u3002</p><p>\u8131\u79BB\u52A8\u7269\u4E16\u754C\uFF0C\u56DE\u5230\u4EBA\u7C7B\u793E\u4F1A\u6587\u660E\u4E2D\u6765\uFF0C\u6211\u4EEC\u4E0D\u4EC5\u62E5\u6709\u540D\u5B57\uFF0C\u8FD8\u6709\u7740\u66F4\u4E3A\u590D\u6742\u7684\u5BB6\u65CF\u5173\u7CFB\uFF0C\u6211\u4EEC\u90FD\u6709\u4E00\u4E2A\u5BB6\u65CF\u540D\uFF08Family Name\uFF09\u4E5F\u5C31\u662F\u6211\u4EEC\u7684\u59D3\u6C0F\uFF0C\u4EE5\u7EC4\u6210\u6211\u4EEC\u5B8C\u6574\u7684<strong>\u59D3\u540D</strong>\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(givenName, familyName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.givenName = givenName</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.familyName = familyName</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  hello() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`Hello, my name is \${this.givenName} \${this.familyName}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const me = new Person(&#39;Will&#39;, &#39;Gunn&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(me.hello()) //=&gt; Hello, my name is Will Gunn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u8FD9\u4E2A <code>Person</code> \u7C7B\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86 <code>givenName</code> \u548C <code>familyName</code> \u4E24\u4E2A\u5C5E\u6027\uFF0C\u800C\u5728 JavaScript \u7684\u7C7B\u4E2D\u540C\u65F6\u8FD8\u5141\u8BB8\u5B9A\u4E49<strong>\u865A\u62DF\u5C5E\u6027</strong>\uFF0C\u4E5F\u5C31\u662F Getter\u3002\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u5C06\u59D3\u4E0E\u540D\u7ED3\u5408\u5728\u4E00\u8D77\u4EE5\u7EC4\u6210\u6211\u4EEC\u7684\u5168\u540D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(givenName, familyName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.givenName = givenName</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.familyName = familyName</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  get fullName() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`\${this.givenName} \${this.familyName}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  hello() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`Hello, my name is \${this.fullName}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const me = new Person(&#39;Will&#39;, &#39;Gunn&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(me.hello()) //=&gt; Hello, my name is Will Gunn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7C7B\u6240\u4EA7\u751F\u7684\u5B9E\u4F8B\u90FD\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u7B2C 3 \u8282\u4E2D\u65F6\u5C31\u5DF2\u7ECF\u8BF4\u660E\u4E86\uFF0C\u5BF9\u8C61\u662F\u4E00\u79CD\u53EF\u4EE5\u8868\u8FBE\u4E07\u7269\u7684\u6280\u672F\u3002\u975E\u5E38\u597D\uFF0C\u4F60\u5DF2\u7ECF\u5B66\u4F1A\u4E86\u5982\u4F55\u4F7F\u7528 JavaScript \u7684\u7C7B\u6765\u8868\u8FBE\u4E00\u79CD\u4E8B\u7269\u4E86\uFF0C\u90A3\u4E48\u5C31\u8BA9\u6211\u4EEC\u5F00\u59CB\u56DE\u5230\u6B63\u9898\u4E0A\uFF0C\u521B\u5EFA\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u4E2D\u7684\u8282\u70B9\u5427\u3002</p><h3 id="_7-1-2-\u5B9A\u4E49\u8282\u70B9\u7C7B\u578B" tabindex="-1">7.1.2 \u5B9A\u4E49\u8282\u70B9\u7C7B\u578B <a class="header-anchor" href="#_7-1-2-\u5B9A\u4E49\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u60C5\u51B5\u4E0B\u6BCF\u4E00\u4E2A\u8282\u70B9\u90FD\u5305\u542B\u4E00\u4E2A\u7528\u4E8E\u5B58\u50A8\u5185\u5BB9\u7684\u5BB9\u5668\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u7B80\u5355\u7684 <code>value</code> \u5C5E\u6027\u6765\u8868\u8FBE\uFF1B\u800C\u5BF9\u4E8E\u5B50\u8282\u70B9\u7684\u5F15\u7528\u5219\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u6570\u7EC4\u5C5E\u6027 <code>children</code> \u6765\u627F\u8F7D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Node {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.children = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const node = new Node(&#39;node value&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6709\u4E86\u8282\u70B9\u4EE5\u540E\uFF0C\u5C31\u9700\u8981\u5C06\u591A\u4E2A\u8282\u70B9\u7EC4\u5408\u8D77\u6765\u4E86\uFF0C\u6BD4\u5982\u5C06\u4E24\u4E2A\u8282\u70B9\u52A0\u5165\u5230\u53E6\u5916\u4E00\u4E2A\u8282\u70B9\u4E2D\u4EE5\u4F5C\u4E3A\u5176\u5B50\u8282\u70B9\u3002\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u5148\u4E3A\u8FD9\u4E2A <code>Node</code> \u7C7B\u6DFB\u52A0\u4E00\u4E2A <code>addChild</code> \u65B9\u6CD5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Node {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  addChild(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.children.push(node)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    return this</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F60\u53EF\u80FD\u4F1A\u95EE\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u4F7F\u7528 <code>node.children.push(childNode)</code>\uFF0C\u800C\u975E\u8981\u5728\u5916\u9762\u5305\u4E00\u5C42 <code>addChild</code> \u65B9\u6CD5\uFF1F\u522B\u7740\u6025\uFF0C\u4E8B\u60C5\u8FDC\u6CA1\u6709\u90A3\u4E48\u7B80\u5355\uFF0C\u6211\u4EEC\u540E\u9762\u4F1A\u6162\u6162\u8BB2\u89E3\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const root = new Node(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node1 = new Node(&#39;node 1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node2 = new Node(&#39;node 2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node3 = new Node(&#39;node 3&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">root.addChild(node1).addChild(node2)</span></span>
<span class="line"><span style="color:#A6ACCD;">node1.addChild(node3)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6BB5\u4EE3\u7801\u4E2D\u6211\u4EEC\u5B9A\u4E49\u4E86\u56DB\u4E2A\u8282\u70B9\uFF0C\u5176\u4E2D\u4E00\u4E2A\u5305\u542B\u5185\u5BB9 <code>root</code> \u7684\u8282\u70B9\u4F5C\u4E3A\u6839\u8282\u70B9\uFF0C\u800C\u8282\u70B9 <code>node 1</code> \u548C <code>node 2</code> \u4F5C\u4E3A\u6839\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u8282\u70B9 <code>node 3</code> \u4F5C\u4E3A\u8282\u70B9 <code>node 1</code> \u7684\u5B50\u8282\u70B9\u3002\u4ECE\u800C\u5F62\u6210\u4E86\u4E00\u68F5\u975E\u5E38\u7B80\u5355\u7684\u6811\u5F62\u7ED3\u6784\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/19/16415e4ce9e8a0ff~tplv-t2oaga2asx-image.image" alt="simple-tree"></p><p>\u975E\u5E38\u597D\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u6811\u5F62\u5DF2\u7ECF\u6784\u5EFA\u51FA\u6765\u4E86\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u6211\u4EEC\u5E94\u8BE5\u5982\u4F55\u4F7F\u7528\u8FD9\u68F5\u6811\u5462\uFF1F\u4E00\u822C\u6765\u8BF4\u6BCF\u4E00\u79CD\u6570\u636E\u7ED3\u6784\u88AB\u53D1\u660E\u51FA\u6765\u5C31\u80AF\u5B9A\u4F1A\u6709\u5176\u4F7F\u7528\u7684\u65B9\u6CD5\u548C\u7279\u5F81\uFF0C\u5C31\u5982\u6570\u7EC4\u7ED3\u6784\u6709\u5176\u957F\u5EA6\u7279\u5F81 <code>length</code>\uFF0C\u5305\u542B\u6570\u5B57\u7684\u6570\u7EC4\u5219\u6709\u5E73\u5747\u503C\u7B49\u7B49\u6570\u5B66\u7279\u5F81\u503C\u3002\u90A3\u4E48\u5BF9\u4E8E\u6811\u5F62\u7ED3\u6784\u53CA\u5176\u8282\u70B9\u6765\u8BF4\u53C8\u6709\u54EA\u4E9B\u7279\u5F81\u503C\u5462\uFF1F</p><table><thead><tr><th style="text-align:left;">\u7ED3\u6784</th><th style="text-align:left;">\u6811\uFF08Tree\uFF09</th><th></th></tr></thead><tbody><tr><td style="text-align:left;">\u540D\u79F0</td><td style="text-align:left;">\u7FFB\u8BD1</td><td>\u89E3\u6790</td></tr><tr><td style="text-align:left;">root</td><td style="text-align:left;">\u6839</td><td>\u4E00\u68F5\u6811\u7684\u6839\u8282\u70B9</td></tr><tr><td style="text-align:left;"><strong>\u7ED3\u6784</strong></td><td style="text-align:left;"><strong>\u8282\u70B9\uFF08Node\uFF09</strong></td><td></td></tr><tr><td style="text-align:left;">\u540D\u79F0</td><td style="text-align:left;">\u7FFB\u8BD1</td><td>\u89E3\u6790</td></tr><tr><td style="text-align:left;">parent</td><td style="text-align:left;">\u7236\u8282\u70B9</td><td>\u4E00\u4E2A\u8282\u70B9\u7684\u7236\u8282\u70B9</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">\u5B50\u8282\u70B9\uFF08\u590D\u6570\uFF09</td><td>\u4E00\u4E2A\u8282\u70B9\u7684\u5B50\u8282\u70B9\u96C6\u5408</td></tr><tr><td style="text-align:left;">siblings</td><td style="text-align:left;">\u5144\u5F1F\u8282\u70B9</td><td>\u4E0E\u67D0\u4E00\u4E2A\u8282\u70B9\u62E5\u6709\u76F8\u540C\u7236\u8282\u70B9\u7684\u5176\u4ED6\u8282\u70B9</td></tr><tr><td style="text-align:left;">degree</td><td style="text-align:left;">\u5EA6</td><td>\u4EE5\u67D0\u4E00\u8282\u70B9\u4E3A\u6839\u8282\u70B9\u7684\u5B50\u6811\u7684\u4E2A\u6570\uFF0C\u4E5F\u53EF\u4EE5\u7B80\u5355\u5730\u7406\u89E3\u4E3A\u5B50\u8282\u70B9\u6570\u76EE</td></tr><tr><td style="text-align:left;">depth</td><td style="text-align:left;">\u6DF1\u5EA6</td><td>\u4E00\u4E2A\u8282\u70B9\u7684\u6DF1\u5EA6\u88AB\u5B9A\u4E49\u4E3A\u8BE5\u8282\u70B9\u5230\u6839\u8282\u70B9\u4E4B\u95F4\u8FB9*\u6570</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">\u9AD8\u5EA6</td><td>\u4E00\u4E2A\u8282\u70B9\u5230\u8DDD\u79BB\u5B83\u6700\u8FDC\u7684\u53F6\u8282\u70B9**\u4E2D\u95F4\u7684\u8FB9\u6570</td></tr></tbody></table><blockquote><p>[ * ] \u8FB9\uFF1AEdge\uFF0C\u8282\u70B9\u4E0E\u8282\u70B9\u76F4\u63A5\u7684\u8FDE\u63A5\u88AB\u5B9A\u4E49\u4E3A\u8FB9<br> [ ** ] \u53F6\u8282\u70B9\uFF1A\u6CA1\u6709\u5B50\u8282\u70B9\u7684\u8282\u70B9</p></blockquote><p>\u5728\u8FD9\u4EFD\u8868\u683C\u4E2D\u4F60\u53D1\u73B0\u5176\u5B9E\u6BCF\u4E00\u4E2A\u8282\u70B9\u8FD8\u53EF\u4EE5\u5305\u542B\u5176\u7236\u8282\u70B9\u7684\u4FE1\u606F\uFF0C\u6240\u4EE5\u5728\u4E4B\u524D\u7684 <code>Node</code> \u7C7B\u4E2D\u6211\u4EEC\u53EF\u4EE5\u52A0\u5165\u4E00\u4E2A <code>parent</code> \u5C5E\u6027\uFF0C\u4EE5\u5B58\u50A8\u8BE5\u8282\u70B9\u7684\u7236\u8282\u70B9\u3002</p><p>\u800C\u5728\u524D\u9762\u5B9A\u4E49\u7684 <code>addChild</code> \u65B9\u6CD5\u4E2D\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5C06\u5B9A\u4E49\u7236\u8282\u70B9\u8FD9\u4E2A\u4EFB\u52A1\u653E\u5728\u8FD9\u91CC\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Node {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.parent = null // \u9ED8\u8BA4\u4E00\u4E2A\u8282\u70B9\u5728\u4EA7\u751F\u65F6\u4E3A\u4E00\u4E2A\u65E0\u7236\u8282\u70B9\u7684\u6839\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.children = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  addChild(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    node.parent = this</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.children.push(node)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    return this</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_7-1-3-\u6269\u5C55\u8282\u70B9\u7C7B\u578B" tabindex="-1">7.1.3 \u6269\u5C55\u8282\u70B9\u7C7B\u578B <a class="header-anchor" href="#_7-1-3-\u6269\u5C55\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a></h3><h4 id="siblings-\u5144\u5F1F\u8282\u70B9" tabindex="-1">Siblings \u5144\u5F1F\u8282\u70B9 <a class="header-anchor" href="#siblings-\u5144\u5F1F\u8282\u70B9" aria-hidden="true">#</a></h4><p>\u5F53\u6BCF\u4E00\u4E2A\u8282\u70B9\u6709\u4E86\u5176\u7236\u8282\u70B9\u7684\u4FE1\u606F\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u53BB\u5C1D\u8BD5\u8BBF\u95EE\u5B83\u7684\u5144\u5F1F\u8282\u70B9\u4E86\uFF0C\u901A\u8FC7\u67E5\u8BE2 <code>node.parent.children</code> \u4E2D\u7684\u8282\u70B9\u6392\u9664\u6389\u81EA\u5DF1\u540E\u4FBF\u662F\u5B83\u7684\u5144\u5F1F\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Node {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  siblings() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const self = this</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.parent.children.filter(function(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return node !== self</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return []</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const root = new Node(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node1 = new Node(&#39;node 1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node2 = new Node(&#39;node 2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node3 = new Node(&#39;node 3&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">root.addChild(node1).addChild(node2)</span></span>
<span class="line"><span style="color:#A6ACCD;">node1.addChild(node3)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(node1.siblings()) //=&gt; [Node{&#39;node 2&#39;}]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="degree-\u5EA6" tabindex="-1">Degree \u5EA6 <a class="header-anchor" href="#degree-\u5EA6" aria-hidden="true">#</a></h4><p>\u8FD9\u4E2A\u7279\u5F81\u503C\u7684\u5B9A\u4E49\u6BD4\u8F83\u7B80\u5355\uFF0C\u5728\u6811\u5F62\u7ED3\u6784\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u8282\u70B9\u7684 <code>degree</code> \u503C\u5C31\u7B49\u4E8E\u76F4\u63A5\u4E0E\u5B83\u76F8\u8FDE\u7684\u5B50\u8282\u70B9\u6570\u3002\u8FD9\u91CC\u6211\u4EEC\u5C31\u53EF\u4EE5\u7528\u5230\u524D\u9762\u5B66\u4E60\u5230\u7684\u201C\u865A\u62DF\u5C5E\u6027\u201D\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Node {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  get degree() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.children.length</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const root = new Node(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node1 = new Node(&#39;node 1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node2 = new Node(&#39;node 2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">root.addChild(node1)</span></span>
<span class="line"><span style="color:#A6ACCD;">root.addChild(node2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(root.degree) //=&gt; 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="depth-height-\u6DF1\u5EA6\u4E0E\u9AD8\u5EA6" tabindex="-1">Depth &amp; Height \u6DF1\u5EA6\u4E0E\u9AD8\u5EA6 <a class="header-anchor" href="#depth-height-\u6DF1\u5EA6\u4E0E\u9AD8\u5EA6" aria-hidden="true">#</a></h4><p>\u6DF1\u5EA6\uFF08Depth\uFF09\u548C\u9AD8\u5EA6\uFF08Height\uFF09\u53EF\u4EE5\u8BF4\u662F\u6811\u5F62\u7ED3\u6784\u4E2D\u6BD4\u8F83\u62BD\u8C61\u4E14\u5F88\u6709\u610F\u601D\u7684\u7279\u5F81\u503C\u4E86\u3002\u6DF1\u5EA6\u7684\u5B9A\u4E49\u4E3A\u4ECE\u67D0\u4E00\u4E2A\u8282\u70B9\u5230\u5176\u6240\u5728\u7684\u6811\u5F62\u7ED3\u6784\u4E2D\u7684\u6839\u8282\u70B9\u6240\u7ECF\u8FC7\u8FB9\u7684\u6570\u76EE\u3002</p><p>\u5C31\u597D\u6BD4\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u4ECE\u8282\u70B9 <code>node 3</code> \u5230\u8282\u70B9 <code>node 1</code> \u6700\u540E\u5230\u6839\u8282\u70B9 <code>root</code> \u4E2D\u95F4\u7ECF\u8FC7\u4E86\u4E24\u4E2A\u8FB9\uFF0C\u6240\u4EE5\u8282\u70B9 <code>node 3</code> \u7684\u6DF1\u5EA6\u5219\u4E3A 2\u3002\u8FD9\u4E2A\u5728 JavaScript \u4E2D\u4E5F\u662F\u975E\u5E38\u597D\u5B9E\u73B0\u7684\uFF0C\u53EA\u9700\u4E0D\u65AD\u68C0\u67E5\u7ECF\u8FC7\u7684\u6BCF\u4E00\u4E2A\u7236\u8282\u70B9\u662F\u5426\u5B58\u5728\u7EE7\u7EED\u5F80\u6839\u90E8\u8D70\u7684\u7236\u8282\u70B9\uFF0C\u5E76\u8BB0\u5F55\u5FAA\u73AF\u6B21\u6570\u5373\u53EF\u3002\u5F53\u627E\u5230\u4E86\u6CA1\u6709\u7236\u8282\u70B9\u7684\u8282\u70B9\u65F6\uFF0C\u5219\u8BE5\u8282\u70B9\u5C31\u662F\u8FD9\u68F5\u6811\u7684\u6839\u8282\u70B9\uFF0C\u800C\u5FAA\u73AF\u6B21\u6570\u4FBF\u662F\u76EE\u6807\u8282\u70B9\u7684\u6DF1\u5EA6\u503C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Node {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get depth() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let depth = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    let currNode = this</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (currNode.parent != null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      depth++</span></span>
<span class="line"><span style="color:#A6ACCD;">      currNode = currNode.parent</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return depth</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const root = new Node(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node1 = new Node(&#39;node 1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node3 = new Node(&#39;node 3&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">root.addChild(node1)</span></span>
<span class="line"><span style="color:#A6ACCD;">node1.addChild(node3)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(node3.depth) //=&gt; 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u800C\u9AD8\u5EA6\u7684\u5B9A\u4E49\u5219\u662F\u4EE5\u67D0\u4E00\u4E2A\u8282\u70B9\u4E3A\u6839\u6240\u5F62\u6210\u7684\u6811\u5F62\u7ED3\u6784\uFF08\u8BE5\u6811\u5F62\u7ED3\u6784\u53EF\u80FD\u662F\u4E00\u68F5\u66F4\u5927\u7684\u6811\u5F62\u7ED3\u6784\u4E2D\u7684\u4E00\u90E8\u5206\uFF0C\u5373\u5B50\u6811\uFF09\u4E2D\uFF0C\u8FD9\u4E2A\u8282\u70B9\u5230\u6700\u6DF1\u7684\u5B50\u8282\u70B9\u4E2D\u95F4\u7ECF\u8FC7\u7684\u8FB9\u7684\u6570\u76EE\u3002</p><p>\u800C\u6DF1\u5EA6\u548C\u9AD8\u5EA6\u7684\u5173\u7CFB\uFF0C\u53EF\u4EE5\u7528\u4E00\u5F20\u56FE\u975E\u5E38\u6E05\u6670\u7684\u89E3\u91CA\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/23/1687965199e9e04b~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u6BCF\u4E00\u4E2A\u8282\u70B9\u7684\u9AD8\u5EA6\u5176\u5B9E\u5C31\u662F\u7B49\u4E8E\u4EE5\u8BE5\u8282\u70B9\u4E3A\u6839\u7684\u7684\u5B50\u6811\u4E2D\uFF0C\u6700\u6DF1\u7684\u4E00\u4E2A\u5B50\u8282\u70B9\u7684\u6DF1\u5EA6\u3002\u4E5F\u5C31\u662F\u8BF4\u53EA\u8981\u627E\u5230\u6700\u6DF1\u7684\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u5E76\u8BA1\u7B97\u5F53\u524D\u5B50\u6811\u7684\u6DF1\u5EA6\u5373\u53EF\u3002</p><p>\u4F46\u662F\u6211\u4EEC\u524D\u9762\u5728\u8BA1\u7B97\u6DF1\u5EA6\u7684\u65F6\u5019\u662F\u76F4\u63A5\u8BA1\u7B97\u6574\u68F5\u6811\u7684\u6DF1\u5EA6\uFF0C\u90A3\u4E48\u4E3A\u4E86\u80FD\u591F\u8BA9\u6BCF\u4E00\u4E2A\u5B50\u8282\u70B9\u90FD\u80FD\u591F\u8BA1\u7B97\u6307\u5B9A\u5B50\u6811\u7684\u6DF1\u5EA6\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9\u524D\u9762\u7684\u4EE3\u7801\u8FDB\u884C\u4E00\u4E9B\u4FEE\u6539\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u9996\u5148\u5047\u8BBE\u6BCF\u4E00\u68F5\u6811\u7684\u6839\u76EE\u5F55\u90FD\u6709\u4E00\u4E2A\u865A\u62DF\u7684\u7236\u8282\u70B9 <code>null</code>\uFF0C\u90A3\u4E48\u5C31\u76F4\u63A5\u5728\u8BA1\u7B97\u6DF1\u5EA6\u65F6\u5019\uFF0C\u5C06 <code>currNode.parent != null</code> \u6539\u6210 <code>currNode.parent != root</code>\uFF0C\u5F53 <code>root</code> \u4E3A <code>null</code> \u7684\u65F6\u5019\u5C06\u6700\u540E\u7684\u7ED3\u679C\u52A0\u4E0A 1 \u4FBF\u662F\u8BE5\u8282\u70B9\u5230\u6574\u68F5\u6811\u6839\u8282\u70B9\u7684\u6DF1\u5EA6\u3002</p><p>\u800C\u4E3A\u4E86\u80FD\u591F\u5C06\u8BA1\u7B97\u6DF1\u5EA6\u7684\u7B97\u6CD5\u4F7F\u7528\u5728\u8BA1\u7B97\u9AD8\u5EA6\u4E0A\uFF0C\u6211\u4EEC\u540C\u65F6\u8FD8\u9700\u8981\u5C06\u539F\u672C\u8BA1\u7B97\u6DF1\u5EA6\u7684\u7B97\u6CD5\u63D0\u53D6\u51FA\u6765\uFF0C\u5355\u72EC\u4F5C\u4E3A\u4E00\u4E2A\u7528\u4E8E\u8BA1\u7B97\u5B50\u6811\u6DF1\u5EA6\u7684\u65B9\u6CD5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Node {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  getDepthByRoot(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let depth = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    let currNode = this</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (currNode.parent !== root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      depth++</span></span>
<span class="line"><span style="color:#A6ACCD;">      currNode = currNode.parent</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return depth + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get depth() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.getDepthByRoot(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C\u8BE5\u5982\u4F55\u627E\u5230\u4E00\u68F5\u5B50\u6811\u4E2D\u7684\u6700\u6DF1\u5B50\u8282\u70B9\u5462\uFF1F\u4E00\u822C\u6765\u8BF4\u6709\u4E24\u79CD\u65B9\u5F0F\uFF0C<a href="https://en.wikipedia.org/wiki/Breadth-first_search" target="_blank" rel="noreferrer">BFS\uFF08Breadth-first Search\uFF0C\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22\uFF09</a>\u548C <a href="https://en.wikipedia.org/wiki/Depth-first_search" target="_blank" rel="noreferrer">DFS\uFF08Depth-first Search\uFF0C\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22\uFF09</a>\uFF0C\u800C\u56E0\u4E3A DFS \u7684\u5B97\u65E8\u5C31\u662F\u201C\u4E0D\u649E\u5357\u5899\u4E0D\u56DE\u5934\u201D\uFF0C\u4E3A\u4E86\u7B97\u6CD5\u5B9E\u73B0\u7684\u7B80\u6613\u6027\uFF0C\u6211\u4EEC\u8FD9\u91CC\u9009\u62E9 BFS \u4F5C\u4E3A\u5B9E\u73B0\u7684\u65B9\u5F0F\u3002</p><p>\u5982\u4F55\u4F7F\u7528 BFS \u627E\u5230\u6700\u6DF1\u7684\u5B50\u8282\u70B9\uFF1F\u90A3\u4FBF\u662F\u9010\u5C42\u7ED9\u8282\u70B9\u7F16\u53F7\uFF0C\u76F4\u5230\u6700\u540E\u4E00\u4E2A\u5C31\u662F\u6700\u6DF1\u7684\u8282\u70B9\u3002\u5F53\u7136\u6211\u4EEC\u4E5F\u6CA1\u6709\u5FC5\u8981\u771F\u7684\u4E3A\u5B83\u4EEC\u7F16\u53F7\uFF0C\u53EA\u9700\u6309\u5C42\u7EA7\u987A\u5E8F\u627E\u5230\u6700\u6DF1\u7684\u4E00\u4E2A\u5373\u53EF\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/19/16415e4ceaaa3818~tplv-t2oaga2asx-image.image" alt="BFS"></p><p>\u5B9A\u4E49\u4E00\u4E2A FIFO\uFF08First In First Out\uFF0C\u5148\u8FDB\u7684\u5148\u51FA\uFF09\u7684\u961F\u5217\uFF0C\u5C06\u6BCF\u4E00\u4E2A\u5C42\u7684\u8282\u70B9\u4E0D\u65AD\u5730\u63A8\u5165\u5230\u8FD9\u4E2A\u961F\u5217\u4E2D\uFF0C\u5E76\u4E0D\u65AD\u53D6\u51FA\u524D\u9762\u88AB\u63A8\u5165\u7684\u8282\u70B9\uFF0C\u5E76\u68C0\u67E5\u662F\u5426\u6709\u5B50\u8282\u70B9\uFF0C\u76F4\u5230\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u4FBF\u662F\u6700\u6DF1\u5B50\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Node {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get height() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const queue = [ this ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    let deepestNode = this</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (queue.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const len = queue.length</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      for (let i = 0; i &lt; len; ++i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const currNode = queue.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        deepestNode = currNode</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (currNode.children.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          queue.push(...currNode.children)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return deepestNode.getDepthByRoot(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const root = new Node(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node1 = new Node(&#39;node 1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node2 = new Node(&#39;node 2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node3 = new Node(&#39;node 3&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node4 = new Node(&#39;node 4&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node5 = new Node(&#39;node 5&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node6 = new Node(&#39;node 6&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">root.addChild(node1)</span></span>
<span class="line"><span style="color:#A6ACCD;">root.addChild(node2)</span></span>
<span class="line"><span style="color:#A6ACCD;">node1.addChild(node3)</span></span>
<span class="line"><span style="color:#A6ACCD;">node1.addChild(node4)</span></span>
<span class="line"><span style="color:#A6ACCD;">node2.addChild(node5)</span></span>
<span class="line"><span style="color:#A6ACCD;">node5.addChild(node6)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(root.height)  //=&gt; 3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(node1.height) //=&gt; 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(node2.height) //=&gt; 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_7-1-4-\u6811\u5F62\u8282\u70B9\u4EE3\u7801\u6E05\u5355" tabindex="-1">7.1.4 \u6811\u5F62\u8282\u70B9\u4EE3\u7801\u6E05\u5355 <a class="header-anchor" href="#_7-1-4-\u6811\u5F62\u8282\u70B9\u4EE3\u7801\u6E05\u5355" aria-hidden="true">#</a></h3><p>\u6700\u540E\u6211\u4EEC\u4FBF\u5F97\u5230\u4E86\u4E00\u4E2A\u5B8C\u6574\u7684\u6811\u5F62\u7ED3\u6784\u8282\u70B9\u7C7B\uFF0C\u4EE5\u7528\u4E8E\u5B8C\u6210\u4E00\u4E9B\u6211\u4EEC\u9700\u8981\u7684\u9700\u6C42\u5B9E\u73B0\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Node {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.parent = null</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.children = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  addChild(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    node.parent = this</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.children.push(node)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return this</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  siblings() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const self = this</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.parent.children.filter(function(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return node !== self</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return []</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get degree() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.children.length</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  getDepthByRoot(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let depth = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    let currNode = this</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (currNode.parent !== root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      depth++</span></span>
<span class="line"><span style="color:#A6ACCD;">      currNode = currNode.parent</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return depth + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get depth() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.getDepthByRoot(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get height() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const queue = [ this ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    let deepestNode = this</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (queue.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const len = queue.length</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      for (let i = 0; i &lt; len; ++i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const currNode = queue.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        deepestNode = currNode</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (currNode.children.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          queue.push(...currNode.children)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return deepestNode.getDepthByRoot(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  toString(join = true) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let parts = [ this.name ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.children.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      parts = parts.concat(this.children</span></span>
<span class="line"><span style="color:#A6ACCD;">        .map(function(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return node.toString(false)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .reduce(function(left, right) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return left.concat(right)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .map(function(line) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return &#39;  &#39; + line</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (join) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return parts.join(&#39;\\n&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return parts</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_7-2-\u5B9A\u4E49\u6811\u5F62\u7ED3\u6784" tabindex="-1">7.2 \u5B9A\u4E49\u6811\u5F62\u7ED3\u6784 <a class="header-anchor" href="#_7-2-\u5B9A\u4E49\u6811\u5F62\u7ED3\u6784" aria-hidden="true">#</a></h2><p>\u5B8C\u6210\u4E86\u8282\u70B9\u7684\u5B9A\u4E49\u540E\uFF0C\u4E8B\u5B9E\u4E0A\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u5B9E\u73B0\u6811\u5F62\u7ED3\u6784\u7684\u5B9A\u4E49\uFF0C\u5E76\u5C06\u6570\u636E\u5B58\u50A8\u5728\u8282\u70B9\u4E0A\u4E86\u3002\u4F46\u5C31\u5982\u6570\u7EC4\u548C\u5E8F\u5217\u4E4B\u7C7B\u7684\u6570\u636E\u7ED3\u6784\u90A3\u6837\uFF0C\u9664\u4E86\u5BF9\u5355\u4E2A\u5143\u7D20\u7684\u64CD\u4F5C\u4EE5\u5916\uFF0C\u8FD8\u9700\u8981\u5BF9\u6574\u4E2A\u6570\u636E\u7ED3\u6784\u8FDB\u884C\u5904\u7406\u548C\u8BA1\u7B97\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u4E13\u7528\u7684\u6811\u5F62\u7C7B\uFF0C\u547D\u540D\u4E3A <code>Tree</code>\uFF0C\u4EE5\u5B8C\u6210\u4E00\u4E9B\u9700\u8981\u5BF9\u6574\u68F5\u6811\u8FDB\u884C\u7684\u8BA1\u7B97\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Tree {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.root = root</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  addNode(node, parent = this.root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent.addChild(node)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u521B\u5EFA\u4E00\u68F5\u6811\u65F6\u9996\u5148\u8981\u4F20\u5165\u4E00\u4E2A\u6839\u8282\u70B9\u5BF9\u8C61\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 <code>tree.addNode</code> \u4EE3\u66FF\u76F4\u63A5\u8C03\u7528 <code>node.addChild</code>\uFF0C\u5E76\u9ED8\u8BA4\u5C06\u4F20\u5165\u7684\u8282\u70B9\u4F5C\u4E3A\u6839\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u4EE5\u4FBF\u8FDB\u884C\u7BA1\u7406\u3002</p><h3 id="_7-2-1-\u67E5\u8BE2\u8282\u70B9" tabindex="-1">7.2.1 \u67E5\u8BE2\u8282\u70B9 <a class="header-anchor" href="#_7-2-1-\u67E5\u8BE2\u8282\u70B9" aria-hidden="true">#</a></h3><p>\u5F53\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u88AB\u5176\u4ED6\u7A0B\u5E8F\u521B\u5EFA\u597D\u4EE5\u540E\uFF0C\u901A\u8FC7\u5404\u79CD\u65B9\u5F0F\u4F20\u5165\u5230\u4F60\u7684\u7A0B\u5E8F\u4E2D\u3002\u800C\u4F60\u9700\u8981\u77E5\u9053\u8FD9\u68F5\u6811\u4E2D\u662F\u5426\u5305\u542B\u67D0\u4E00\u8282\u70B9\u65F6\uFF0C\u5C31\u9700\u8981\u4F7F\u7528\u4E00\u4E9B\u7B97\u6CD5\u6765\u5B9E\u73B0\u8FD9\u4E2A\u9700\u6C42\u4E86\u3002</p><p>\u6211\u4EEC\u524D\u9762\u5728\u5B9E\u73B0\u5BFB\u627E\u4E00\u68F5\u6811\u4E2D\u6700\u6DF1\u5B50\u8282\u70B9\u7684\u65F6\u5019\u7528\u5230\u4E86 BFS \u641C\u7D22\u7B97\u6CD5\u6765\u5B9E\u73B0\u4E3A\u6BCF\u4E00\u5C42\u7684\u5B50\u8282\u70B9\u8FDB\u884C\u7F16\u53F7\uFF0CBFS \u7684\u597D\u5904\u662F\u53EF\u4EE5\u641C\u7D22\u5230\u6811\u5F62\u7ED3\u6784\u4E2D\u7684\u5927\u90E8\u5206\u5206\u652F\u3002\u4F46\u5982\u679C\u8BF4\u8981\u627E\u5230\u6811\u5F62\u7ED3\u6784\u4E2D\u7684\u7279\u5B9A\u7684\u67D0\u4E00\u4E2A\u8282\u70B9\uFF0CBFS \u663E\u7136\u4E0D\u662F\u6700\u4F18\u7684\u65B9\u6848\u3002</p><p>\u90A3\u4E48\u4ECE\u62D3\u6251\u5B66\u7684\u89D2\u5EA6\u4E0A\u770B\u4E00\u68F5\u6811\u5F62\u7ED3\u6784\uFF0CBFS \u7684\u6982\u5FF5\u4FBF\u662F\u6A2A\u5411\u641C\u7D22\uFF0C\u800C DFS \u5219\u662F\u7EB5\u5411\u641C\u7D22\uFF0C\u201C\u4E0D\u649E\u5357\u5899\u4E0D\u56DE\u5934\u201D\u3002\u8FD9\u79CD\u641C\u7D22\u65B9\u5F0F\u7684\u597D\u5904\u662F\u5728\u4E00\u68F5\u5E7F\u5EA6\u975E\u5E38\u5927\u7684\u6811\u5F62\u7ED3\u6784\u4E2D\uFF0C\u4E00\u65E6\u80FD\u627E\u5230\u7B26\u5408\u7684\u8282\u70B9\uFF0C\u5C31\u80FD\u7ED3\u675F\u5BF9\u5176\u4ED6\u5206\u652F\u7684\u641C\u7D22\u3002</p><p>DFS \u5728\u5B9E\u73B0\u4E0A\u4E5F\u5E76\u4E0D\u56F0\u96BE\uFF0C\u4ECE\u6839\u8282\u70B9\u5F00\u59CB\uFF0C\u4E0D\u65AD\u5F80\u4E0B\u641C\u7D22\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\uFF08\u56E0\u4E3A\u5728\u672C\u5C0F\u518C\u4E2D\u6240\u4F7F\u7528\u7684\u6811\u5F62\u7ED3\u6784\u8282\u70B9\u90FD\u53EA\u4F1A\u4F7F\u7528\u6570\u7EC4\u6765\u5B58\u50A8\u5B50\u8282\u70B9\uFF0C\u6240\u4EE5\u81EA\u5E26\u987A\u5E8F\u7ED3\u6784\uFF09\u3002\u5982\u679C\u7B26\u5408\u8981\u6C42\u5219\u8FD4\u56DE\u8BE5\u8282\u70B9\uFF0C\u5982\u679C\u4E0D\u7B26\u5408\u5219\u5148\u68C0\u67E5\u662F\u5426\u5B58\u5728\u4E0B\u4E00\u5C42\u6216\u68C0\u67E5\u4E0B\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9\u3002\u8FD9\u91CC\u6211\u4EEC\u914D\u5408\u4F7F\u7528\u7B2C 4 \u8282\u4E2D\u6240\u5C01\u88C5\u7684 <code>arrayUtils</code> \u8FDB\u884C\u5B9E\u73B0\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/19/16415e4ce88409fc~tplv-t2oaga2asx-image.image" alt="DFS"></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Tree {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  search(validator) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const queue = [ this.root ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    const result = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (queue.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const currNode = queue.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (validator(currNode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        result.push(currNode)</span></span>
<span class="line"><span style="color:#A6ACCD;">        continue</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (currNode.children.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        arrayUtils.prepend(queue, ...currNode.children)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return result</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const root = new Node(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node1 = new Node(&#39;node 1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node2 = new Node(&#39;node 2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node3 = new Node(&#39;node 3&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node4 = new Node(&#39;node 4&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node5 = new Node(&#39;node 5&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node6 = new Node(&#39;node 6&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const tree = new Tree(root)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node1)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node2)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node3, node1)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node4, node1)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node5, node2)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node6, node5)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(tree.search(function(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return node.name == &#39;node 4&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})) //=&gt; [ Node{node 4} ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_7-2-2-\u7EDF\u8BA1\u6811\u5F62\u5927\u5C0F" tabindex="-1">7.2.2 \u7EDF\u8BA1\u6811\u5F62\u5927\u5C0F <a class="header-anchor" href="#_7-2-2-\u7EDF\u8BA1\u6811\u5F62\u5927\u5C0F" aria-hidden="true">#</a></h3><p>\u5F53\u6211\u4EEC\u4F7F\u7528\u5404\u79CD\u7A0B\u5E8F\u6765\u521B\u5EFA\u548C\u6269\u5C55\u4E00\u68F5\u6811\u5F62\u7ED3\u6784\u4E4B\u540E\uFF0C\u6211\u4EEC\u5E76\u4E0D\u4E00\u5B9A\u77E5\u9053\u8FD9\u68F5\u6811\u4E2D\u7A76\u7ADF\u6709\u591A\u5C11\u8282\u70B9\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u8282\u70B9\u5F88\u6709\u53EF\u80FD\u662F\u7531\u591A\u4E2A\u76F8\u4E92\u72EC\u7ACB\u7684\u7A0B\u5E8F\u6240\u521B\u5EFA\u548C\u63D2\u5165\u7684\u3002\u90A3\u4E48\u6211\u4EEC\u5C31\u9700\u8981\u6709\u4E00\u4E2A\u65B9\u6CD5\u6765\u7EDF\u8BA1\u4E00\u68F5\u6811\u5185\u7A76\u7ADF\u6709\u591A\u5C11\u8282\u70B9\uFF08\u5305\u62EC\u6839\u8282\u70B9\uFF09\u3002</p><p>\u65E2\u7136\u9700\u8981\u7EDF\u8BA1\u6240\u6709\u7684\u8282\u70B9\uFF0C\u90A3\u5FC5\u5B9A\u8981\u904D\u5386\u6574\u68F5\u6811\u4EE5\u8FDB\u884C\u8BA1\u6570\u3002\u800C\u6211\u4EEC\u5DF2\u7ECF\u5B66\u4F1A\u4E86\u4F7F\u7528 BFS \u548C DFS \u4E24\u79CD\u641C\u7D22\u65B9\u5F0F\u4E86\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5176\u4E2D\u7684\u4E00\u79CD\u6765\u8FDB\u884C\u904D\u5386\uFF0C\u5E76\u53BB\u6389\u5176\u4E2D\u7684\u5224\u65AD\u903B\u8F91\u4EE5\u904D\u5386\u6574\u68F5\u6811\u3002\u8FD9\u91CC\u6211\u4EEC\u5148\u7528\u6211\u4EEC\u521A\u521A\u5B66\u4F1A\u7684 DFS \u6765\u8FDB\u884C\u904D\u5386\u7EDF\u8BA1\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Tree {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get size() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let size = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    const bag = [ this.root ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (bag.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const currNode = bag.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      size++</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (currNode.children.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        arrayUtils.prepend(bag, ...currNode.children)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return size</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const root = new Node(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node1 = new Node(&#39;node 1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node2 = new Node(&#39;node 2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node3 = new Node(&#39;node 3&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node4 = new Node(&#39;node 4&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node5 = new Node(&#39;node 5&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const node6 = new Node(&#39;node 6&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const tree = new Tree(root)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node1)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node2)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node3, node1)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node4, node1)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node5, node2)</span></span>
<span class="line"><span style="color:#A6ACCD;">tree.addNode(node6, node5)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(tree.size) //=&gt; 7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_7-2-3-\u6811\u5F62\u7ED3\u6784\u4EE3\u7801\u6E05\u5355" tabindex="-1">7.2.3 \u6811\u5F62\u7ED3\u6784\u4EE3\u7801\u6E05\u5355 <a class="header-anchor" href="#_7-2-3-\u6811\u5F62\u7ED3\u6784\u4EE3\u7801\u6E05\u5355" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Tree {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.root = root</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  addNode(node, parent = this.root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent.addChild(node)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  search(validator) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const queue = [ this.root ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (queue.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const currNode = queue.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (validator(currNode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return currNode</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (currNode.children.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        arrayUtils.prepend(queue, ...currNode.children)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get size() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let size = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    const bag = [ this.root ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (bag.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const currNode = bag.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      size++</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (currNode.children.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        arrayUtils.prepend(bag, ...currNode.children)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return size</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get height() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.root.height</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  toString() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.root.toString()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5DF2\u7ECF\u5B66\u4F1A\u4E86\u521B\u5EFA\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u5E76\u4E14\u5982\u4F55\u5BF9\u5176\u8FDB\u884C\u64CD\u4F5C\u548C\u68C0\u7D22\uFF0C\u867D\u7136\u73B0\u5728\u770B\u6765\u4F60\u53EF\u80FD\u8FD8\u4F1A\u5BF9\u6811\u5F62\u7ED3\u6784\u7A76\u7ADF\u80FD\u5B8C\u6210\u4E9B\u4EC0\u4E48\u5B9E\u9645\u9700\u6C42\u611F\u5230\u7591\u60D1\u3002\u4F46\u662F\u522B\u7740\u6025\uFF0C\u6211\u4EEC\u63A5\u4E0B\u6765\u4F1A\u63A5\u89E6\u66F4\u591A\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6211\u4EEC\u9700\u8981\u901A\u8FC7\u63A5\u89E6\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u6765\u8FDB\u884C\u7EC4\u5408\u5B66\u4E60\uFF0C\u624D\u80FD\u66F4\u597D\u5730\u7406\u89E3\u6BCF\u4E00\u79CD\u6570\u636E\u7ED3\u6784\u7684\u7279\u70B9\u548C\u4F7F\u7528\u573A\u666F\u3002</p><h3 id="\u4E60\u9898" tabindex="-1">\u4E60\u9898 <a class="header-anchor" href="#\u4E60\u9898" aria-hidden="true">#</a></h3><p>\u8BF7\u4F7F\u7528 BFS \u65B9\u6CD5\u6765\u5B9E\u73B0\u7EDF\u8BA1\u6811\u5F62\u7ED3\u6784\u4E2D\u8282\u70B9\u7684\u6570\u91CF\u3002</p>`,87),o=[e];function c(t,r,C,i,A,d){return a(),n("div",null,o)}const h=s(p,[["render",c]]);export{D as __pageData,h as default};
