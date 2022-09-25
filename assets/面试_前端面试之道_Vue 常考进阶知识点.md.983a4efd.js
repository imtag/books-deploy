import{_ as p,c as e,a as s,t as o,d as n,b as a,o as c}from"./app.e0e4ea3a.js";const v=JSON.parse('{"title":"Vue \u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u54CD\u5E94\u5F0F\u539F\u7406","slug":"\u54CD\u5E94\u5F0F\u539F\u7406","link":"#\u54CD\u5E94\u5F0F\u539F\u7406","children":[{"level":3,"title":"Object.defineProperty \u7684\u7F3A\u9677","slug":"object-defineproperty-\u7684\u7F3A\u9677","link":"#object-defineproperty-\u7684\u7F3A\u9677","children":[]}]},{"level":2,"title":"\u7F16\u8BD1\u8FC7\u7A0B","slug":"\u7F16\u8BD1\u8FC7\u7A0B","link":"#\u7F16\u8BD1\u8FC7\u7A0B","children":[]},{"level":2,"title":"NextTick \u539F\u7406\u5206\u6790","slug":"nexttick-\u539F\u7406\u5206\u6790","link":"#nexttick-\u539F\u7406\u5206\u6790","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"\u9762\u8BD5/\u524D\u7AEF\u9762\u8BD5\u4E4B\u9053/Vue \u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9.md"}'),t={name:"\u9762\u8BD5/\u524D\u7AEF\u9762\u8BD5\u4E4B\u9053/Vue \u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9.md"},r=n(`<h1 id="vue-\u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9" tabindex="-1">Vue \u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9 <a class="header-anchor" href="#vue-\u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9" aria-hidden="true">#</a></h1><hr><h1 id="vue-\u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9-1" tabindex="-1">Vue \u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9 <a class="header-anchor" href="#vue-\u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9-1" aria-hidden="true">#</a></h1><p>\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u5C06\u6765\u5B66\u4E60 Vue \u7684\u4E00\u4E9B\u7ECF\u5E38\u8003\u5230\u7684\u8FDB\u9636\u77E5\u8BC6\u70B9\u3002\u8FD9\u4E9B\u77E5\u8BC6\u70B9\u76F8\u5BF9\u800C\u8A00\u7406\u89E3\u8D77\u6765\u4F1A\u5F88\u6709\u96BE\u5EA6\uFF0C\u53EF\u80FD\u9700\u8981\u591A\u6B21\u9605\u8BFB\u624D\u80FD\u7406\u89E3\u3002</p><h2 id="\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1">\u54CD\u5E94\u5F0F\u539F\u7406 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a></h2><p>Vue \u5185\u90E8\u4F7F\u7528\u4E86 <code>Object.defineProperty()</code> \u6765\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u76D1\u542C\u5230 <code>set</code> \u548C <code>get</code> \u7684\u4E8B\u4EF6\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var data = { name: &#39;yck&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">observe(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">let name = data.name // -&gt; get value</span></span>
<span class="line"><span style="color:#A6ACCD;">data.name = &#39;yyy&#39; // -&gt; change value</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function observe(obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5224\u65AD\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!obj || typeof obj !== &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  Object.keys(obj).forEach(key =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    defineReactive(obj, key, obj[key])</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function defineReactive(obj, key, val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u9012\u5F52\u5B50\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">  observe(val)</span></span>
<span class="line"><span style="color:#A6ACCD;">  Object.defineProperty(obj, key, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53EF\u679A\u4E3E</span></span>
<span class="line"><span style="color:#A6ACCD;">    enumerable: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53EF\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    configurable: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u81EA\u5B9A\u4E49\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    get: function reactiveGetter() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;get value&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      return val</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    set: function reactiveSetter(newVal) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;change value&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      val = newVal</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u7B80\u5355\u7684\u5B9E\u73B0\u4E86\u5982\u4F55\u76D1\u542C\u6570\u636E\u7684 <code>set</code> \u548C <code>get</code> \u7684\u4E8B\u4EF6\uFF0C\u4F46\u662F\u4EC5\u4EC5\u5982\u6B64\u662F\u4E0D\u591F\u7684\uFF0C\u56E0\u4E3A\u81EA\u5B9A\u4E49\u7684\u51FD\u6570\u4E00\u5F00\u59CB\u662F\u4E0D\u4F1A\u6267\u884C\u7684\u3002\u53EA\u6709\u5148\u6267\u884C\u4E86\u4F9D\u8D56\u6536\u96C6\uFF0C\u624D\u80FD\u5728\u5C5E\u6027\u66F4\u65B0\u7684\u65F6\u5019\u6D3E\u53D1\u66F4\u65B0\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u5148\u89E6\u53D1\u4F9D\u8D56\u6536\u96C6\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{name}}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),A=a("\u5728\u89E3\u6790\u5982\u4E0A\u6A21\u677F\u4EE3\u7801\u65F6\uFF0C\u9047\u5230 "),C=a(" \u5C31\u4F1A\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\u3002"),i=n(`<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5148\u6765\u5B9E\u73B0\u4E00\u4E2A <code>Dep</code> \u7C7B\uFF0C\u7528\u4E8E\u89E3\u8026\u5C5E\u6027\u7684\u4F9D\u8D56\u6536\u96C6\u548C\u6D3E\u53D1\u66F4\u65B0\u64CD\u4F5C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u901A\u8FC7 Dep \u89E3\u8026\u5C5E\u6027\u7684\u4F9D\u8D56\u548C\u66F4\u65B0\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">class Dep {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.subs = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6DFB\u52A0\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">  addSub(sub) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.subs.push(sub)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">  notify() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.subs.forEach(sub =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      sub.update()</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5168\u5C40\u5C5E\u6027\uFF0C\u901A\u8FC7\u8BE5\u5C5E\u6027\u914D\u7F6E Watcher</span></span>
<span class="line"><span style="color:#A6ACCD;">Dep.target = null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u7684\u4EE3\u7801\u5B9E\u73B0\u5F88\u7B80\u5355\uFF0C\u5F53\u9700\u8981\u4F9D\u8D56\u6536\u96C6\u7684\u65F6\u5019\u8C03\u7528 <code>addSub</code>\uFF0C\u5F53\u9700\u8981\u6D3E\u53D1\u66F4\u65B0\u7684\u65F6\u5019\u8C03\u7528 <code>notify</code>\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5148\u6765\u7B80\u5355\u7684\u4E86\u89E3\u4E0B Vue \u7EC4\u4EF6\u6302\u8F7D\u65F6\u6DFB\u52A0\u54CD\u5E94\u5F0F\u7684\u8FC7\u7A0B\u3002\u5728\u7EC4\u4EF6\u6302\u8F7D\u65F6\uFF0C\u4F1A\u5148\u5BF9\u6240\u6709\u9700\u8981\u7684\u5C5E\u6027\u8C03\u7528 <code>Object.defineProperty()</code>\uFF0C\u7136\u540E\u5B9E\u4F8B\u5316 <code>Watcher</code>\uFF0C\u4F20\u5165\u7EC4\u4EF6\u66F4\u65B0\u7684\u56DE\u8C03\u3002\u5728\u5B9E\u4F8B\u5316\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5BF9\u6A21\u677F\u4E2D\u7684\u5C5E\u6027\u8FDB\u884C\u6C42\u503C\uFF0C\u89E6\u53D1\u4F9D\u8D56\u6536\u96C6\u3002</p><p>\u56E0\u4E3A\u8FD9\u4E00\u5C0F\u8282\u4E3B\u8981\u76EE\u7684\u662F\u5B66\u4E60\u54CD\u5E94\u5F0F\u539F\u7406\u7684\u7EC6\u8282\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u7684\u4EE3\u7801\u4F1A\u7B80\u7565\u7684\u8868\u8FBE\u89E6\u53D1\u4F9D\u8D56\u6536\u96C6\u65F6\u7684\u64CD\u4F5C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Watcher {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(obj, key, cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5C06 Dep.target \u6307\u5411\u81EA\u5DF1</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7136\u540E\u89E6\u53D1\u5C5E\u6027\u7684 getter \u6DFB\u52A0\u76D1\u542C</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6700\u540E\u5C06 Dep.target \u7F6E\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">    Dep.target = this</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.cb = cb</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.obj = obj</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.key = key</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.value = obj[key]</span></span>
<span class="line"><span style="color:#A6ACCD;">    Dep.target = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  update() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u83B7\u5F97\u65B0\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.value = this.obj[this.key]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8C03\u7528 update \u65B9\u6CD5\u66F4\u65B0 Dom</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.cb(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u5C31\u662F <code>Watcher</code> \u7684\u7B80\u5355\u5B9E\u73B0\uFF0C\u5728\u6267\u884C\u6784\u9020\u51FD\u6570\u7684\u65F6\u5019\u5C06 <code>Dep.target</code> \u6307\u5411\u81EA\u8EAB\uFF0C\u4ECE\u800C\u4F7F\u5F97\u6536\u96C6\u5230\u4E86\u5BF9\u5E94\u7684 <code>Watcher</code>\uFF0C\u5728\u6D3E\u53D1\u66F4\u65B0\u7684\u65F6\u5019\u53D6\u51FA\u5BF9\u5E94\u7684 <code>Watcher</code> \u7136\u540E\u6267\u884C <code>update</code> \u51FD\u6570\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u9700\u8981\u5BF9 <code>defineReactive</code> \u51FD\u6570\u8FDB\u884C\u6539\u9020\uFF0C\u5728\u81EA\u5B9A\u4E49\u51FD\u6570\u4E2D\u6DFB\u52A0\u4F9D\u8D56\u6536\u96C6\u548C\u6D3E\u53D1\u66F4\u65B0\u76F8\u5173\u7684\u4EE3\u7801\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function defineReactive(obj, key, val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u9012\u5F52\u5B50\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">  observe(val)</span></span>
<span class="line"><span style="color:#A6ACCD;">  let dp = new Dep()</span></span>
<span class="line"><span style="color:#A6ACCD;">  Object.defineProperty(obj, key, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    enumerable: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    configurable: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    get: function reactiveGetter() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;get value&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5C06 Watcher \u6DFB\u52A0\u5230\u8BA2\u9605</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (Dep.target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        dp.addSub(Dep.target)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return val</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    set: function reactiveSetter(newVal) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;change value&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      val = newVal</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u6267\u884C watcher \u7684 update \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">      dp.notify()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u6240\u6709\u4EE3\u7801\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u6613\u7684\u6570\u636E\u54CD\u5E94\u5F0F\uFF0C\u6838\u5FC3\u601D\u8DEF\u5C31\u662F\u624B\u52A8\u89E6\u53D1\u4E00\u6B21\u5C5E\u6027\u7684 getter \u6765\u5B9E\u73B0\u4F9D\u8D56\u6536\u96C6\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u5C31\u6765\u6D4B\u8BD5\u4E0B\u4EE3\u7801\u7684\u6548\u679C\uFF0C\u53EA\u9700\u8981\u628A\u6240\u6709\u7684\u4EE3\u7801\u590D\u5236\u5230\u6D4F\u89C8\u5668\u4E2D\u6267\u884C\uFF0C\u5C31\u4F1A\u53D1\u73B0\u9875\u9762\u7684\u5185\u5BB9\u5168\u90E8\u88AB\u66FF\u6362\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var data = { name: &#39;yck&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">observe(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">function update(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.querySelector(&#39;div&#39;).innerText = value</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6A21\u62DF\u89E3\u6790\u5230 \`{{name}}\` \u89E6\u53D1\u7684\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">new Watcher(data, &#39;name&#39;, update)</span></span>
<span class="line"><span style="color:#A6ACCD;">// update Dom innerText</span></span>
<span class="line"><span style="color:#A6ACCD;">data.name = &#39;yyy&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="object-defineproperty-\u7684\u7F3A\u9677" tabindex="-1">Object.defineProperty \u7684\u7F3A\u9677 <a class="header-anchor" href="#object-defineproperty-\u7684\u7F3A\u9677" aria-hidden="true">#</a></h3><p>\u4EE5\u4E0A\u5DF2\u7ECF\u5206\u6790\u5B8C\u4E86 Vue \u7684\u54CD\u5E94\u5F0F\u539F\u7406\uFF0C\u63A5\u4E0B\u6765\u8BF4\u4E00\u70B9 <code>Object.defineProperty</code> \u4E2D\u7684\u7F3A\u9677\u3002</p><p>\u5982\u679C\u901A\u8FC7\u4E0B\u6807\u65B9\u5F0F\u4FEE\u6539\u6570\u7EC4\u6570\u636E\u6216\u8005\u7ED9\u5BF9\u8C61\u65B0\u589E\u5C5E\u6027\u5E76\u4E0D\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A <code>Object.defineProperty</code> \u4E0D\u80FD\u62E6\u622A\u5230\u8FD9\u4E9B\u64CD\u4F5C\uFF0C\u66F4\u7CBE\u786E\u7684\u6765\u8BF4\uFF0C\u5BF9\u4E8E\u6570\u7EC4\u800C\u8A00\uFF0C\u5927\u90E8\u5206\u64CD\u4F5C\u90FD\u662F\u62E6\u622A\u4E0D\u5230\u7684\uFF0C\u53EA\u662F Vue \u5185\u90E8\u901A\u8FC7\u91CD\u5199\u51FD\u6570\u7684\u65B9\u5F0F\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>\u5BF9\u4E8E\u7B2C\u4E00\u4E2A\u95EE\u9898\uFF0CVue \u63D0\u4F9B\u4E86\u4E00\u4E2A API \u89E3\u51B3</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export function set (target: Array&lt;any&gt; | Object, key: any, val: any): any {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5224\u65AD\u662F\u5426\u4E3A\u6570\u7EC4\u4E14\u4E0B\u6807\u662F\u5426\u6709\u6548</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (Array.isArray(target) &amp;&amp; isValidArrayIndex(key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8C03\u7528 splice \u51FD\u6570\u89E6\u53D1\u6D3E\u53D1\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BE5\u51FD\u6570\u5DF2\u88AB\u91CD\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">    target.length = Math.max(target.length, key)</span></span>
<span class="line"><span style="color:#A6ACCD;">    target.splice(key, 1, val)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return val</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5224\u65AD key \u662F\u5426\u5DF2\u7ECF\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (key in target &amp;&amp; !(key in Object.prototype)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    target[key] = val</span></span>
<span class="line"><span style="color:#A6ACCD;">    return val</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  const ob = (target: any).__ob__</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u5BF9\u8C61\u4E0D\u662F\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u5C31\u8D4B\u503C\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!ob) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    target[key] = val</span></span>
<span class="line"><span style="color:#A6ACCD;">    return val</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">  defineReactive(ob.value, key, val)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u624B\u52A8\u6D3E\u53D1\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">  ob.dep.notify()</span></span>
<span class="line"><span style="color:#A6ACCD;">  return val</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BF9\u4E8E\u6570\u7EC4\u800C\u8A00\uFF0CVue \u5185\u90E8\u91CD\u5199\u4E86\u4EE5\u4E0B\u51FD\u6570\u5B9E\u73B0\u6D3E\u53D1\u66F4\u65B0</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u83B7\u5F97\u6570\u7EC4\u539F\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">const arrayProto = Array.prototype</span></span>
<span class="line"><span style="color:#A6ACCD;">export const arrayMethods = Object.create(arrayProto)</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u91CD\u5199\u4EE5\u4E0B\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">const methodsToPatch = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;push&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;pop&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;shift&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;unshift&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;splice&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;sort&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;reverse&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">methodsToPatch.forEach(function (method) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7F13\u5B58\u539F\u751F\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  const original = arrayProto[method]</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u91CD\u5199\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  def(arrayMethods, method, function mutator (...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5148\u8C03\u7528\u539F\u751F\u51FD\u6570\u83B7\u5F97\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">    const result = original.apply(this, args)</span></span>
<span class="line"><span style="color:#A6ACCD;">    const ob = this.__ob__</span></span>
<span class="line"><span style="color:#A6ACCD;">    let inserted</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8C03\u7528\u4EE5\u4E0B\u51E0\u4E2A\u51FD\u6570\u65F6\uFF0C\u76D1\u542C\u65B0\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch (method) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      case &#39;push&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      case &#39;unshift&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">        inserted = args</span></span>
<span class="line"><span style="color:#A6ACCD;">        break</span></span>
<span class="line"><span style="color:#A6ACCD;">      case &#39;splice&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">        inserted = args.slice(2)</span></span>
<span class="line"><span style="color:#A6ACCD;">        break</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (inserted) ob.observeArray(inserted)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u624B\u52A8\u6D3E\u53D1\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">    ob.dep.notify()</span></span>
<span class="line"><span style="color:#A6ACCD;">    return result</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7F16\u8BD1\u8FC7\u7A0B" tabindex="-1">\u7F16\u8BD1\u8FC7\u7A0B <a class="header-anchor" href="#\u7F16\u8BD1\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p>\u60F3\u5FC5\u5927\u5BB6\u5728\u4F7F\u7528 Vue \u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u57FA\u672C\u90FD\u662F\u4F7F\u7528\u6A21\u677F\u7684\u65B9\u5F0F\u3002\u90A3\u4E48\u4F60\u6709\u8FC7\u300C\u6A21\u677F\u662F\u600E\u4E48\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\u300D\u8FD9\u79CD\u7591\u8651\u561B\uFF1F</p><p>\u9996\u5148\u76F4\u63A5\u628A\u6A21\u677F\u4E22\u5230\u6D4F\u89C8\u5668\u4E2D\u80AF\u5B9A\u662F\u4E0D\u80FD\u8FD0\u884C\u7684\uFF0C\u6A21\u677F\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u5F00\u53D1\u8005\u8FDB\u884C\u5F00\u53D1\u3002Vue \u4F1A\u901A\u8FC7\u7F16\u8BD1\u5668\u5C06\u6A21\u677F\u901A\u8FC7\u51E0\u4E2A\u9636\u6BB5\u6700\u7EC8\u7F16\u8BD1\u4E3A <code>render</code> \u51FD\u6570\uFF0C\u7136\u540E\u901A\u8FC7\u6267\u884C <code>render</code> \u51FD\u6570\u751F\u6210 Virtual DOM \u6700\u7EC8\u6620\u5C04\u4E3A\u771F\u5B9E DOM\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u6765\u5B66\u4E60\u8FD9\u4E2A\u7F16\u8BD1\u7684\u8FC7\u7A0B\uFF0C\u4E86\u89E3\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u5927\u6982\u53D1\u751F\u4E86\u4EC0\u4E48\u4E8B\u60C5\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u5176\u4E2D\u53C8\u5206\u4E3A\u4E09\u4E2A\u9636\u6BB5\uFF0C\u5206\u522B\u4E3A\uFF1A</p><ol><li>\u5C06\u6A21\u677F\u89E3\u6790\u4E3A AST</li><li>\u4F18\u5316 AST</li><li>\u5C06 AST \u8F6C\u6362\u4E3A <code>render</code> \u51FD\u6570</li></ol><p>\u5728\u7B2C\u4E00\u4E2A\u9636\u6BB5\u4E2D\uFF0C\u6700\u4E3B\u8981\u7684\u4E8B\u60C5\u8FD8\u662F\u901A\u8FC7\u5404\u79CD\u5404\u6837\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u53BB\u5339\u914D\u6A21\u677F\u4E2D\u7684\u5185\u5BB9\uFF0C\u7136\u540E\u5C06\u5185\u5BB9\u63D0\u53D6\u51FA\u6765\u505A\u5404\u79CD\u903B\u8F91\u64CD\u4F5C\uFF0C\u63A5\u4E0B\u6765\u4F1A\u751F\u6210\u4E00\u4E2A\u6700\u57FA\u672C\u7684 AST \u5BF9\u8C61</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">    tag,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5C5E\u6027\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">    attrsList: attrs,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5C5E\u6027\u6620\u5C04</span></span>
<span class="line"><span style="color:#A6ACCD;">    attrsMap: makeAttrsMap(attrs),</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7236\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5B50\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u4F1A\u6839\u636E\u8FD9\u4E2A\u6700\u57FA\u672C\u7684 AST \u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\uFF0C\u8FDB\u4E00\u6B65\u6269\u5C55 AST\u3002</p><p>\u5F53\u7136\u5728\u8FD9\u4E00\u9636\u6BB5\u4E2D\uFF0C\u8FD8\u4F1A\u8FDB\u884C\u5176\u4ED6\u7684\u4E00\u4E9B\u5224\u65AD\u903B\u8F91\u3002\u6BD4\u5982\u8BF4\u5BF9\u6BD4\u524D\u540E\u5F00\u95ED\u6807\u7B7E\u662F\u5426\u4E00\u81F4\uFF0C\u5224\u65AD\u6839\u7EC4\u4EF6\u662F\u5426\u53EA\u5B58\u5728\u4E00\u4E2A\uFF0C\u5224\u65AD\u662F\u5426\u7B26\u5408 HTML5 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories" target="_blank" rel="noreferrer">Content Model</a> \u89C4\u8303\u7B49\u7B49\u95EE\u9898\u3002</p><p>\u63A5\u4E0B\u6765\u5C31\u662F\u4F18\u5316 AST \u7684\u9636\u6BB5\u3002\u5728\u5F53\u524D\u7248\u672C\u4E0B\uFF0CVue \u8FDB\u884C\u7684\u4F18\u5316\u5185\u5BB9\u5176\u5B9E\u8FD8\u662F\u4E0D\u591A\u7684\u3002\u53EA\u662F\u5BF9\u8282\u70B9\u8FDB\u884C\u4E86\u9759\u6001\u5185\u5BB9\u63D0\u53D6\uFF0C\u4E5F\u5C31\u662F\u5C06\u6C38\u8FDC\u4E0D\u4F1A\u53D8\u52A8\u7684\u8282\u70B9\u63D0\u53D6\u4E86\u51FA\u6765\uFF0C\u5B9E\u73B0\u590D\u7528 Virtual DOM\uFF0C\u8DF3\u8FC7\u5BF9\u6BD4\u7B97\u6CD5\u7684\u529F\u80FD\u3002\u5728\u4E0B\u4E00\u4E2A\u5927\u7248\u672C\u4E2D\uFF0CVue \u4F1A\u5728\u4F18\u5316 AST \u7684\u9636\u6BB5\u7EE7\u7EED\u53D1\u529B\uFF0C\u5B9E\u73B0\u66F4\u591A\u7684\u4F18\u5316\u529F\u80FD\uFF0C\u5C3D\u53EF\u80FD\u7684\u5728\u7F16\u8BD1\u9636\u6BB5\u538B\u69A8\u66F4\u591A\u7684\u6027\u80FD\uFF0C\u6BD4\u5982\u8BF4\u63D0\u53D6\u9759\u6001\u7684\u5C5E\u6027\u7B49\u7B49\u4F18\u5316\u884C\u4E3A\u3002</p><p>\u6700\u540E\u4E00\u4E2A\u9636\u6BB5\u5C31\u662F\u901A\u8FC7 AST \u751F\u6210 <code>render</code> \u51FD\u6570\u4E86\u3002\u5176\u5B9E\u8FD9\u4E00\u9636\u6BB5\u867D\u7136\u5206\u652F\u6709\u5F88\u591A\uFF0C\u4F46\u662F\u6700\u4E3B\u8981\u7684\u76EE\u7684\u5C31\u662F\u904D\u5386\u6574\u4E2A AST\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u6761\u4EF6\u751F\u6210\u4E0D\u540C\u7684\u4EE3\u7801\u7F62\u4E86\u3002</p><h2 id="nexttick-\u539F\u7406\u5206\u6790" tabindex="-1">NextTick \u539F\u7406\u5206\u6790 <a class="header-anchor" href="#nexttick-\u539F\u7406\u5206\u6790" aria-hidden="true">#</a></h2><p><code>nextTick</code> \u53EF\u4EE5\u8BA9\u6211\u4EEC\u5728\u4E0B\u6B21 DOM \u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\u4E4B\u540E\u6267\u884C\u5EF6\u8FDF\u56DE\u8C03\uFF0C\u7528\u4E8E\u83B7\u5F97\u66F4\u65B0\u540E\u7684 DOM\u3002</p><p>\u5728 Vue 2.4 \u4E4B\u524D\u90FD\u662F\u4F7F\u7528\u7684 microtasks\uFF0C\u4F46\u662F microtasks \u7684\u4F18\u5148\u7EA7\u8FC7\u9AD8\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u51FA\u73B0\u6BD4\u4E8B\u4EF6\u5192\u6CE1\u66F4\u5FEB\u7684\u60C5\u51B5\uFF0C\u4F46\u5982\u679C\u90FD\u4F7F\u7528 macrotasks \u53C8\u53EF\u80FD\u4F1A\u51FA\u73B0\u6E32\u67D3\u7684\u6027\u80FD\u95EE\u9898\u3002\u6240\u4EE5\u5728\u65B0\u7248\u672C\u4E2D\uFF0C\u4F1A\u9ED8\u8BA4\u4F7F\u7528 microtasks\uFF0C\u4F46\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u7528 macrotasks\uFF0C\u6BD4\u5982 v-on\u3002</p><p>\u5BF9\u4E8E\u5B9E\u73B0 macrotasks \uFF0C\u4F1A\u5148\u5224\u65AD\u662F\u5426\u80FD\u4F7F\u7528 <code>setImmediate</code> \uFF0C\u4E0D\u80FD\u7684\u8BDD\u964D\u7EA7\u4E3A <code>MessageChannel</code> \uFF0C\u4EE5\u4E0A\u90FD\u4E0D\u884C\u7684\u8BDD\u5C31\u4F7F\u7528 <code>setTimeout</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (typeof setImmediate !== &#39;undefined&#39; &amp;&amp; isNative(setImmediate)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  macroTimerFunc = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setImmediate(flushCallbacks)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (</span></span>
<span class="line"><span style="color:#A6ACCD;">  typeof MessageChannel !== &#39;undefined&#39; &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">  (isNative(MessageChannel) ||</span></span>
<span class="line"><span style="color:#A6ACCD;">    // PhantomJS</span></span>
<span class="line"><span style="color:#A6ACCD;">    MessageChannel.toString() === &#39;[object MessageChannelConstructor]&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const channel = new MessageChannel()</span></span>
<span class="line"><span style="color:#A6ACCD;">  const port = channel.port2</span></span>
<span class="line"><span style="color:#A6ACCD;">  channel.port1.onmessage = flushCallbacks</span></span>
<span class="line"><span style="color:#A6ACCD;">  macroTimerFunc = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    port.postMessage(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">  macroTimerFunc = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(flushCallbacks, 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5224\u65AD\u80FD\u4E0D\u80FD\u4F7F\u7528\u76F8\u5E94\u7684 API\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0A\u5C31\u662F Vue \u7684\u51E0\u4E2A\u9AD8\u9891\u6838\u5FC3\u95EE\u9898\u4E86\uFF0C\u5982\u679C\u4F60\u8FD8\u60F3\u4E86\u89E3\u66F4\u591A\u7684\u6E90\u7801\u76F8\u5173\u7684\u7EC6\u8282\uFF0C\u5F3A\u70C8\u63A8\u8350\u9EC4\u8001\u5E08\u7684 <a href="https://ustbhuangyi.github.io/vue-analysis/" target="_blank" rel="noreferrer">Vue \u6280\u672F\u63ED\u79D8</a>\u3002</p>`,38);function y(l,D,d,u,h,g){return c(),e("div",null,[r,s("p",null,[A,s("code",null,o(l.name),1),C]),i])}const f=p(t,[["render",y]]);export{v as __pageData,f as default};
