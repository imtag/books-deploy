import{_ as s,c as n,o as a,d as l}from"./app.e5528619.js";const u=JSON.parse('{"title":"\u52A8\u6001\u6570\u636E\u5E94\u7528 \xB7 \u4F7F\u7528 Vue.js \u4E3A\u6570\u636E\u6D41\u6DFB\u52A0\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"19.1 \u57FA\u4E8E\u6570\u636E\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668","slug":"_19-1-\u57FA\u4E8E\u6570\u636E\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668","link":"#_19-1-\u57FA\u4E8E\u6570\u636E\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668","children":[]},{"level":2,"title":"19.2 \u66F4\u590D\u6742\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668","slug":"_19-2-\u66F4\u590D\u6742\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668","link":"#_19-2-\u66F4\u590D\u6742\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668","children":[{"level":3,"title":"19.2.1 \u5C06\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u5C55\u793A\u5728\u9875\u9762\u4E0A","slug":"_19-2-1-\u5C06\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u5C55\u793A\u5728\u9875\u9762\u4E0A","link":"#_19-2-1-\u5C06\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u5C55\u793A\u5728\u9875\u9762\u4E0A","children":[]},{"level":3,"title":"19.2.2 \u4E3A\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u6DFB\u52A0\u52A8\u6001\u8FC7\u6EE4\u5668","slug":"_19-2-2-\u4E3A\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u6DFB\u52A0\u52A8\u6001\u8FC7\u6EE4\u5668","link":"#_19-2-2-\u4E3A\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u6DFB\u52A0\u52A8\u6001\u8FC7\u6EE4\u5668","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[{"level":3,"title":"\u4E60\u9898","slug":"\u4E60\u9898","link":"#\u4E60\u9898","children":[]}]}],"relativePath":"JavaScript/\u57FA\u4E8E JavaScript \u5F00\u53D1\u7075\u6D3B\u7684\u6570\u636E\u5E94\u7528/\u52A8\u6001\u6570\u636E\u5E94\u7528 \xB7 \u4F7F\u7528 Vue.js \u4E3A\u6570\u636E\u6D41\u6DFB\u52A0\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668.md"}'),p={name:"JavaScript/\u57FA\u4E8E JavaScript \u5F00\u53D1\u7075\u6D3B\u7684\u6570\u636E\u5E94\u7528/\u52A8\u6001\u6570\u636E\u5E94\u7528 \xB7 \u4F7F\u7528 Vue.js \u4E3A\u6570\u636E\u6D41\u6DFB\u52A0\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668.md"},e=l(`<h1 id="\u52A8\u6001\u6570\u636E\u5E94\u7528-\xB7-\u4F7F\u7528-vue-js-\u4E3A\u6570\u636E\u6D41\u6DFB\u52A0\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668" tabindex="-1">\u52A8\u6001\u6570\u636E\u5E94\u7528 \xB7 \u4F7F\u7528 Vue.js \u4E3A\u6570\u636E\u6D41\u6DFB\u52A0\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668 <a class="header-anchor" href="#\u52A8\u6001\u6570\u636E\u5E94\u7528-\xB7-\u4F7F\u7528-vue-js-\u4E3A\u6570\u636E\u6D41\u6DFB\u52A0\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668" aria-hidden="true">#</a></h1><hr><h1 id="\u7B2C-19-\u8282-\u52A8\u6001\u6570\u636E\u5E94\u7528-\xB7-\u4F7F\u7528-vue-js-\u4E3A\u6570\u636E\u6D41\u6DFB\u52A0\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668" tabindex="-1">\u7B2C 19 \u8282 \u52A8\u6001\u6570\u636E\u5E94\u7528 \xB7 \u4F7F\u7528 Vue.js \u4E3A\u6570\u636E\u6D41\u6DFB\u52A0\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668 <a class="header-anchor" href="#\u7B2C-19-\u8282-\u52A8\u6001\u6570\u636E\u5E94\u7528-\xB7-\u4F7F\u7528-vue-js-\u4E3A\u6570\u636E\u6D41\u6DFB\u52A0\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668" aria-hidden="true">#</a></h1><p>\u5728\u4E0A\u4E00\u8282\u4E2D\u6211\u4EEC\u5B66\u4E60\u4E86\u5982\u4F55\u5229\u7528 Vue.js \u914D\u5408\u6211\u4EEC\u4E4B\u524D\u6240\u5B66\u4E60\u8FC7\u7684\u6570\u636E\u5904\u7406\u65B9\u6CD5\u6765\u5904\u7406\u6D41\u5F0F\u6570\u636E\u3002\u5728\u8FD9\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u7EE7\u7EED\u5B66\u4E60\u5982\u4F55\u5229\u7528 Vue.js \u6765\u5E94\u5BF9\u7ED3\u6784\u4E0D\u786E\u5B9A\u7684\u6570\u636E\u6D41\u3002</p><h2 id="_19-1-\u57FA\u4E8E\u6570\u636E\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668" tabindex="-1">19.1 \u57FA\u4E8E\u6570\u636E\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668 <a class="header-anchor" href="#_19-1-\u57FA\u4E8E\u6570\u636E\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668" aria-hidden="true">#</a></h2><p>\u5728\u4E0A\u4E00\u8282\u4E2D\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u65E2\u5B9A\u7684 <code>typeSet</code> \u6765\u6A21\u62DF\u4E00\u4E2A\u4E0D\u65AD\u4EA7\u751F\u6570\u636E\u7684\u6D41\u5F0F\u6570\u636E\u96C6\uFF0C\u800C\u5728\u6211\u4EEC\u4F7F\u7528 Vue.js \u8FDB\u884C\u6784\u5EFA\u7684\u6570\u636E\u5E94\u7528\u4E2D\uFF0C\u4E5F\u662F\u6839\u636E\u8FD9\u4E2A <code>typeSet</code> \u6765<strong>\u63D0\u524D</strong>\u751F\u6210\u4E86\u4E00\u4E2A\u7528\u4E8E\u8FC7\u6EE4\u6570\u636E\u7684\u8FC7\u6EE4\u5668\u3002</p><p>\u4F46\u6709\u7684\u65F6\u5019\u524D\u7AEF\u7684\u6570\u636E\u5E94\u7528\u5E76\u4E0D\u77E5\u9053\u6765\u81EA\u5176\u4ED6\u6570\u636E\u670D\u52A1\u7684\u6570\u636E\u5185\u5BB9\u7A76\u7ADF\u6709\u54EA\u4E9B\u8FC7\u6EE4\u9879\uFF0C\u90A3\u4E48\u6211\u4EEC\u4FBF\u9700\u8981\u6839\u636E\u6570\u636E\u5E94\u7528\u6240\u5F97\u5230\u7684\u5B9E\u9645\u6570\u636E\u6765\u751F\u6210\u8FC7\u6EE4\u5668\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function mockDataSource(typesSet) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const dataset = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const timer = setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const randomType = typesSet[Math.round(Math.random() * (typesSet.length - 1))]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    dataset.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: randomType,</span></span>
<span class="line"><span style="color:#A6ACCD;">      timestamp: Date.now(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: Math.random().toString(32).substr(2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 1e3)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dataset,</span></span>
<span class="line"><span style="color:#A6ACCD;">    stop() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      clearInterval(timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const dataSource = mockDataSource(Array(10).fill(1).map((_, i) =&gt; \`type\${i + 1}\`))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6BB5\u4EE3\u7801\u4E2D\u6211\u4EEC\u6A21\u62DF\u4E86\u4E00\u4E2A\u5305\u542B\u591A\u79CD\u53EF\u8FC7\u6EE4\u6570\u636E <code>type</code> \u7684\u6D41\u5F0F\u6570\u636E\u96C6\uFF0C\u4E14\u8BE5\u6570\u636E\u96C6\u8FC7\u6EE4\u5B57\u6BB5\u5185\u5BB9\u662F\u201C\u4E0D\u53EF\u9884\u77E5\u201D\u7684\u3002\u90A3\u4E48\u6211\u5148\u628A\u5B83\u5229\u7528 Vue.js \u5C55\u793A\u5230\u9875\u9762\u4E0A\u770B\u4E00\u4E0B\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/16873ea78a8e44ef~tplv-t2oaga2asx-image.image" alt=""></p><p>DEMO \u5728\u7EBF\u5730\u5740\uFF1A<a href="https://codepen.io/iwillwen/pen/oJKMaK?editors=1010" target="_blank" rel="noreferrer">https://codepen.io/iwillwen/pen/oJKMaK?editors=1010</a></p><p>\u5F88\u597D\uFF0C\u73B0\u5728\u6211\u4EEC\u518D\u628A\u4E0A\u4E00\u8282\u4E2D\u5C42\u95F4\u5B9E\u73B0\u8FC7\u7684\u7C7B\u578B\u8FC7\u6EE4\u5668\u5E94\u7528\u5230\u8FD9\u91CC\u6765\u3002\u4F46\u4E0D\u4E00\u6837\u7684\u662F\u8FD9\u4E00\u6B21\u8FD9\u4E2A\u6D41\u5F0F\u6570\u636E\u96C6\u4E2D\u6240\u5305\u542B\u7684\u7C7B\u578B\u90FD\u662F\u4E0D\u53EF\u77E5\u7684\uFF0C\u90A3\u4E48\u6309\u7167\u6211\u4EEC\u4E0A\u4E00\u8282\u4E2D\u6240\u5B66\u4E60\u5230\u7684\u65B9\u6CD5\uFF0C\u6211\u4EEC\u5219\u53EF\u4EE5\u5C06\u6D41\u5F0F\u6570\u636E\u96C6\u4E2D\u7684\u7C7B\u578B\u96C6\u901A\u8FC7\u6D41\u5931\u5904\u7406\u7684\u65B9\u5F0F\u4E5F\u5904\u7406\u6210\u4E00\u4E2A\u6570\u636E\u6D41\uFF0C\u5E94\u7528\u5230\u8FC7\u6EE4\u5668\u9009\u9879\u4E2D\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 Lodash \u4E2D\u7684 <code>groupBy</code> \u65B9\u6CD5\u5148\u5C06\u6D41\u5F0F\u6570\u636E\u96C6\u6309\u7167 <code>type</code> \u5B57\u6BB5\u8FDB\u884C\u805A\u5408\uFF0C\u7136\u540E\u518D\u901A\u8FC7 <code>keys</code> \u65B9\u6CD5\u5F97\u5230\u805A\u5408\u540E\u7684\u805A\u5408\u952E\u96C6\uFF0C\u4ECE\u800C\u5F97\u5230\u52A8\u6001\u7684\u8FC7\u6EE4\u9009\u9879\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;label for=&quot;type&quot;&gt;Type Filter: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;select name=&quot;type&quot; id=&quot;type&quot; v-model=&quot;typeFilter&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;option value=&quot;none&quot;&gt;None&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;option&gt;----------&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;option v-for=&quot;type in typesSet&quot; :value=&quot;type&quot; :key=&quot;type&quot;&gt;{{type}}&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;th&gt;Type&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;th&gt;Timestamp&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;th&gt;Value&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr v-for=&quot;item in filteredDataset&quot; :key=&quot;item.timestamp&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;{{item.type}}&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;{{item.timestamp}}&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;{{item.value}}&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function mockDataSource(typesSet) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const dataset = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const timer = setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const randomType = typesSet[Math.round(Math.random() * (typesSet.length - 1))]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    dataset.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: randomType,</span></span>
<span class="line"><span style="color:#A6ACCD;">      timestamp: Date.now(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: Math.random().toString(32).substr(2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 1e3)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dataset,</span></span>
<span class="line"><span style="color:#A6ACCD;">    stop() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      clearInterval(timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const dataSource = mockDataSource(Array(10).fill(1).map((_, i) =&gt; \`type\${i + 1}\`))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    typeFilter: &#39;none&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    dataset: dataSource.dataset</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    typesSet() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return _.keys(_.groupBy(this.dataset, &#39;type&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    filteredDataset() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.typeFilter === &#39;none&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.dataset</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.dataset.filter(item =&gt; item.type === this.typeFilter)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>DEMO \u5728\u7EBF\u5730\u5740\uFF1A<a href="https://codepen.io/iwillwen/pen/PXMBvb?editors=1010" target="_blank" rel="noreferrer">https://codepen.io/iwillwen/pen/PXMBvb?editors=1010</a></p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/16873eab27e72097~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="_19-2-\u66F4\u590D\u6742\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668" tabindex="-1">19.2 \u66F4\u590D\u6742\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668 <a class="header-anchor" href="#_19-2-\u66F4\u590D\u6742\u7684\u52A8\u6001\u8F6C\u6362\u8FC7\u6EE4\u5668" aria-hidden="true">#</a></h2><p>\u7B14\u8005\u5728\u5DE5\u4F5C\u4E2D\u7ECF\u5E38\u4F1A\u9047\u5230\u4E00\u4E9B\u975E\u5E38\u590D\u6742\u7684\u52A8\u6001\u6570\u636E\u5F00\u53D1\u9700\u6C42\uFF0C\u5176\u4E2D\u4E0D\u4E4F\u5982 BI\uFF08Business Intelligence\uFF09\u4E4B\u7C7B\u7684\u9879\u76EE\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003\u5982 Superset\u3001Metabase \u7B49\u7B49\u4F18\u79C0\u7684\u5F00\u6E90\u9879\u76EE\u3002\u5728\u8FD9\u4E9B\u9879\u76EE\u4E2D\uFF0C\u6570\u636E\u4E0E\u6570\u636E\u5E94\u7528\u4E4B\u95F4\u662F\u76F8\u9694\u79BB\u7684\uFF08\u7279\u522B\u662F\u901A\u7528\u7684\u5F00\u6E90\u9879\u76EE\uFF09\uFF0C\u4E5F\u5C31\u662F\u6570\u636E\u5E94\u7528\u9664\u4E86\u77E5\u9053\u6570\u636E\u6E90\u4EE5\u4E00\u4E2A\u4E8C\u7EF4\u8868\u7684\u5F62\u5F0F\u5B58\u5728\u4EE5\u5916\uFF0C\u5BF9\u8FD9\u4E2A\u6570\u636E\u96C6\u7684\u5185\u5BB9\u548C\u7ED3\u6784\u5B8C\u5168\u4E0D\u6E05\u695A\u3002</p><p>\u4E00\u822C\u8FD9\u79CD\u60C5\u51B5\u4F1A\u51FA\u73B0\u4E00\u4E2A\u53EF\u914D\u7F6E\u7684\u65B9\u6848\uFF0C\u4E5F\u5C31\u662F\u6570\u636E\u5E94\u7528\u672C\u8EAB\u662F\u4E00\u4E2A\u53EF\u914D\u7F6E\u7684\u901A\u7528\u8F6C\u6362\u3001\u8FC7\u6EE4\u3001\u5C55\u793A\u5DE5\u5177\uFF0C\u800C\u6570\u636E\u6E90\u548C\u8868\u7ED3\u6784\u5219\u4EE5\u914D\u7F6E\u7684\u65B9\u5F0F\u4F20\u9012\u7ED9\u6570\u636E\u5E94\u7528\u3002\u4E3A\u4E86\u8868\u8FBE\u8FD9\u79CD\u60C5\u51B5\u7684\u6781\u7AEF\u6027\uFF0C\u6211\u4EEC\u5148\u4ECE\u6A21\u62DF\u4E00\u4E2A\u8F83\u4E3A\u590D\u6742\u7684\u6570\u636E\u96C6\u5F00\u59CB\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function genTypes(columnName, count = 10) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return Array(count).fill(1).map((_, i) =&gt; \`\${columnName}-type\${i + 1}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function genColumns(count = 10) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return Array(count).fill(1).map((_, i) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const columnName = \`column\${i + 1}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    const types = genTypes(columnName)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: columnName, types</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function mockDataSource(columnsCount = 10) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const dataset = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const columns = genColumns(columnsCount)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const timer = setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const timestamp = Date.now()</span></span>
<span class="line"><span style="color:#A6ACCD;">    const value = Math.random().toString(32).substr(2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    const item = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      timestamp, value</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    columns.forEach(({ name, types }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const randomType = types[Math.round(Math.random() * (types.length - 1))]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      item[name] = randomType</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    dataset.push(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 1e3)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dataset,</span></span>
<span class="line"><span style="color:#A6ACCD;">    stop() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      clearInterval(timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const dataSource = mockDataSource(4)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(dataSource.dataset[dataSource.dataset.length - 1]) // The last inserted one</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 1e3)</span></span>
<span class="line"><span style="color:#A6ACCD;">//=&gt; { timestamp: 1547970415609, value: &#39;4ta9d9chh9o&#39;, column1: &#39;column1-type1&#39;, column2: &#39;column2-type7&#39;, column3: &#39;column3-type2&#39;, column4: &#39;column4-type6&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">//=&gt; { timestamp: 1547970416612, value: &#39;cobh86f288&#39;, column1: &#39;column1-type7&#39;, column2: &#39;column2-type6&#39;, column3: &#39;column3-type9&#39;, column4: &#39;column4-type1&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">//=&gt; ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_19-2-1-\u5C06\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u5C55\u793A\u5728\u9875\u9762\u4E0A" tabindex="-1">19.2.1 \u5C06\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u5C55\u793A\u5728\u9875\u9762\u4E0A <a class="header-anchor" href="#_19-2-1-\u5C06\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u5C55\u793A\u5728\u9875\u9762\u4E0A" aria-hidden="true">#</a></h3><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u6211\u4EEC\u6A21\u62DF\u4E86\u4E00\u4E2A\u62E5\u6709\u591A\u4E2A\u4E0D\u540C\u5B57\u6BB5\u7684\u6570\u636E\u96C6\uFF0C\u800C\u4E14\u5176\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u90FD\u6709\u591A\u79CD\u4E0D\u786E\u5B9A\u7684\u53EF\u8FC7\u6EE4\u503C\u3002\u73B0\u5728\u6211\u4EEC\u9700\u8981\u5C06\u8FD9\u4E2A\u6570\u636E\u96C6\u5C55\u793A\u5230\u9875\u9762\u4E0A\uFF0C\u7531\u4E8E\u6570\u636E\u5E94\u7528\u5728\u5F00\u53D1\u7684\u65F6\u5019\u662F\u4E0D\u6E05\u695A\u6570\u636E\u96C6\u7684\u7ED3\u6784\u7684\uFF0C\u6240\u4EE5\u5728\u5C55\u793A\u4E4B\u524D\u9996\u5148\u9700\u8981\u5BF9\u6570\u636E\u96C6\u8FDB\u884C\u8F6C\u6362\u4EE5\u5F97\u5230\u8BE5\u6570\u636E\u96C6\u7684\u5B57\u6BB5\u5217\u8868\u3002</p><p>\u56E0\u4E3A\u6570\u636E\u7ED3\u6784\u5728\u6570\u636E\u5230\u8FBE\u4E4B\u524D\u662F\u4E0D\u53EF\u77E5\u7684\uFF0C\u800C\u4E14\u4E00\u822C\u60C5\u51B5\u4E0B\u6211\u4EEC\u9700\u8981\u7EA6\u5B9A\u6570\u636E\u96C6\u4E2D\u7684\u6BCF\u4E00\u4E2A\u4E2A\u4F53\u6570\u636E\u90FD\u4E25\u683C\u7B26\u5408\u6574\u4F53\u7ED3\u6784\u3002\u8FD9\u6837\u7684\u60C5\u51B5\u4E0B\uFF0C\u4FBF\u53EF\u4EE5\u901A\u8FC7\u53D6\u5F97\u6570\u636E\u96C6\u4E2D\u7684\u7B2C\u4E00\u4E2A\u8BB0\u5F55\u6765\u53D6\u5F97\u8BE5\u6570\u636E\u96C6\u7684\u6574\u4F53\u7ED3\u6784\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;th v-for=&quot;column in columnNames&quot; :key=&quot;column&quot;&gt;{{column}}&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr v-for=&quot;(item, i) in dataset&quot; :key=&quot;i&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td v-for=&quot;column in columnNames&quot; :key=&quot;column&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {{item[column]}}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dataset: dataSource.dataset</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    columnNames() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.dataset &amp;&amp; this.dataset.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return _.keys(this.dataset[0])</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      return []</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>DEMO \u5728\u7EBF\u5730\u5740\uFF1A<a href="https://codepen.io/iwillwen/pen/NeQmRX?editors=1010" target="_blank" rel="noreferrer">https://codepen.io/iwillwen/pen/NeQmRX?editors=1010</a></p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/16873eae36e84a83~tplv-t2oaga2asx-image.image" alt=""></p><h3 id="_19-2-2-\u4E3A\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u6DFB\u52A0\u52A8\u6001\u8FC7\u6EE4\u5668" tabindex="-1">19.2.2 \u4E3A\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u6DFB\u52A0\u52A8\u6001\u8FC7\u6EE4\u5668 <a class="header-anchor" href="#_19-2-2-\u4E3A\u672A\u77E5\u7ED3\u6784\u7684\u6570\u636E\u96C6\u6DFB\u52A0\u52A8\u6001\u8FC7\u6EE4\u5668" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u5DF2\u7ECF\u5C06\u8FD9\u4E2A\u590D\u6742\u7684\u6570\u636E\u96C6\u901A\u8FC7\u52A8\u6001\u5730\u611F\u77E5\u5230\u5176\u7ED3\u6784\u4EE5\u540E\u5C55\u793A\u5728\u4E86\u9875\u9762\u4E0A\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u4FBF\u9700\u8981\u5BF9\u8FD9\u4E2A\u6570\u636E\u96C6\u8FDB\u884C\u8F6C\u6362\u8FC7\u6EE4\u4E86\uFF0C\u56E0\u4E3A\u5BF9\u5404\u79CD\u4E0D\u786E\u5B9A\u7684\u6570\u636E\u96C6\u8FDB\u884C\u5404\u79CD\u64CD\u4F5C\u6B63\u6B63\u5C31\u662F BI \u9879\u76EE\u7684\u57FA\u672C\u9700\u6C42\u3002</p><p>\u800C\u4E14\u5BF9\u4E8E\u8FD9\u79CD\u62E5\u6709\u591A\u4E2A\u4E0D\u540C\u5B57\u6BB5\u7684\u6570\u636E\u96C6\uFF0C\u6570\u636E\u5E94\u7528\u62E5\u6709\u9AD8\u5EA6\u53EF\u914D\u7F6E\u7684\u8FC7\u6EE4\u673A\u5236\u5F80\u5F80\u662F\u6700\u8D77\u7801\u7684\u8981\u6C42\u3002\u6570\u636E\u8868\u683C\u5C55\u793A\u4F5C\u4E3A\u6700\u57FA\u672C\u7684\u6570\u636E\u5C55\u793A\u65B9\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u56DE\u60F3\u4E00\u4E0B\u6570\u636E\u5E94\u7528\u9886\u57DF\u4E2D\u7684\u201C\u8001\u5927\u54E5\u201D\u2014\u2014Microsoft Excel\u3002\u5BF9\u4E8E Excel \u672C\u8EAB\u6765\u8BF4\uFF0C\u6BCF\u4E00\u4E2A\u5904\u7406\u7684\u8868\u683C\u6587\u4EF6\u90FD\u662F\u4E00\u4E2A\u4E0D\u786E\u5B9A\u7684\u6570\u636E\u96C6\uFF0C\u800C\u4F5C\u4E3A\u7528\u6237\u7684\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5176\u4E2D\u7684\u201C\u7B5B\u9009\u8FC7\u6EE4\u201D\u529F\u80FD\u5BF9\u6570\u636E\u96C6\u4E2D\u7684\u5404\u79CD\u5B57\u6BB5\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u800C\u4E14\u8FD9\u4E2A\u673A\u5236\u662F\u53EF\u4EE5\u591A\u5B57\u6BB5\u53E0\u52A0\u7684\u3002\u90A3\u4E48\u5728\u6211\u4EEC\u5F00\u53D1\u7684\u6570\u636E\u5E94\u7528\u4E2D\u8BE5\u5982\u4F55\u8FDB\u884C\u5F00\u53D1\u5462\uFF1F</p><p>\u9996\u5148\u9700\u8981\u8BBE\u8BA1\u597D\u7684\u662F\uFF0C\u56E0\u4E3A\u5728\u8FD9\u4E2A\u9700\u6C42\u4E2D\u6211\u4EEC\u8981\u63A7\u5236\u4E24\u4E2A\u5BF9\u8C61\uFF0C\u4E00\u4E2A\u662F\u6570\u636E\u96C6\u672C\u8EAB\uFF0C\u53E6\u5916\u4E00\u4E2A\u5219\u662F\u63A7\u5236\u8FC7\u6EE4\u5668\u672C\u8EAB\u7684\u914D\u7F6E\u96C6\u3002\u6211\u4EEC\u5C06\u8FD9\u4E2A\u8FC7\u6EE4\u5668\u7684\u914D\u7F6E\u96C6\u5355\u72EC\u5904\u7406\uFF0C\u6BCF\u4E2A\u8FC7\u6EE4\u5668\u5305\u542B\u4E24\u4E2A\u503C\uFF1A\u5B57\u6BB5\u540D\u548C\u8FC7\u6EE4\u76EE\u6807\u503C\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6BCF\u4E00\u4E2A\u8FC7\u6EE4\u5668\u90FD\u662F\u4E3A\u4E86\u5C06\u6570\u636E\u96C6\u4E2D\u7684\u5236\u5B9A\u5B57\u6BB5\u7684\u6307\u5B9A\u503C\u8BB0\u5F55\u8FC7\u6EE4\u51FA\u6765\uFF0C\u5F53\u7136\u5728\u5B9E\u9645\u5E94\u7528\u5F00\u53D1\u4E2D\u5F88\u6709\u53EF\u80FD\u8FD8\u6709\u6709\u66F4\u591A\u7684\u9009\u9879\uFF0C\u6BD4\u5982\u5927\u4E8E\u5C0F\u4E8E\u4E4B\u7C7B\u7684\u8FC7\u6EE4\u65B9\u5F0F\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const filters = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    column: &#39;&lt;column&gt;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: &#39;&lt;value&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u6211\u4EEC\u53EA\u6709\u4E00\u4E2A\u8FC7\u6EE4\u5668\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5224\u65AD\u6570\u636E\u96C6\u4E2D\u7684\u6BCF\u4E00\u4E2A\u8BB0\u5F55\u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\u662F\u5426\u4E3A\u6307\u5B9A\u8FC7\u6EE4\u503C\u3002\u90A3\u4E48\u5F53\u6709\u591A\u4E2A\u8FC7\u6EE4\u5668\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 JavaScript \u4E2D\u7684\u4E00\u4E2A\u539F\u751F API <code>Array.prototype.every</code> \u6765\u5B8C\u6210\u8FD9\u4E00\u64CD\u4F5C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const row = { /* ... */ }</span></span>
<span class="line"><span style="color:#A6ACCD;">const filters = [ /* ... */ ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const isPassed = filters.every(filter =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (filter.column === &#39;none&#39; || filter.value === &#39;none&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  return row[filter.column] === filter.value</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u901A\u8FC7 Vue.js \u7684\u4E00\u4E9B\u6BD4\u8F83\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u5BF9\u8FC7\u6EE4\u5668\u7684\u914D\u7F6E\u96C6\u8FDB\u884C\u7BA1\u7406\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    filters: []</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    addFilter() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.filters.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">        column: &#39;none&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: &#39;none&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeFilter(index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.filters.splice(index, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F46\u662F\u8981\u8BA9\u7528\u6237\u80FD\u591F\u901A\u8FC7\u6570\u636E\u5E94\u7528\u6240\u63D0\u4F9B\u7684\u529F\u80FD\uFF0C\u6765\u4E3A\u6570\u636E\u96C6\u6DFB\u52A0\u52A8\u6001\u8FC7\u6EE4\u5668\uFF0C\u90A3\u4E48\u9996\u5148\u5C31\u5F97\u8BA9\u7528\u6237\u77E5\u9053\u5F53\u524D\u6709\u54EA\u4E9B\u53EF\u9009\u503C\u3002\u6240\u4EE5\u8DDF\u9700\u8981\u77E5\u9053\u6570\u636E\u96C6\u7ED3\u6784\u4E2D\u6709\u54EA\u4E9B\u5B57\u6BB5\u4E00\u6837\uFF0C\u8FC7\u6EE4\u5668\u7684\u53EF\u9009\u503C\u8FD8\u5305\u542B\u4E86\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u4E2D\u6709\u54EA\u4E9B\u73B0\u6709\u503C\u53EF\u4EE5\u4F5C\u4E3A\u8FC7\u6EE4\u7684\u76EE\u6807\u503C\u3002\u90A3\u4E48\u8FD8\u8BB0\u5F97\u6211\u4EEC\u5728\u7B2C 10 \u8282\u4E2D\u66FE\u7ECF\u5B66\u4E60\u8FC7\u7684\u884C\u5F0F\u6570\u636E\u96C6\u548C\u5217\u5F0F\u6570\u636E\u96C6\u7684\u8F6C\u6362\u65B9\u6CD5\u5417\uFF1F\u5728\u9ED8\u8BA4\u7684\u884C\u5F0F\u6570\u636E\u96C6\u4E2D\uFF0C\u6211\u4EEC\u5F88\u96BE\u901A\u8FC7\u67D0\u4E00\u4E2A\u5B57\u6BB5\u540D\u53D6\u5F97\u8BE5\u5B57\u6BB5\u7684\u6240\u6709\u53EF\u9009\u503C\u3002\u4F46\u662F\u4F7F\u7528\u5217\u5F0F\u6570\u636E\u96C6\u5728\u5904\u7406\u8FD9\u4E2A\u9700\u6C42\u65F6\uFF0C\u5219\u53D8\u5F97\u6709\u7740\u975E\u5E38\u597D\u7684\u5929\u7136\u4F18\u52BF\u3002\u914D\u5408\u7740 Lodash \u7684 <code>_.uniq</code> \u53D6\u5F97\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u4E2D\u7684\u6240\u6709\u552F\u4E00\u503C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    dataset: dataSource.dataset</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    colOrientedDataset() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return rowOriented2ColOriented(this.dataset)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    columnNames() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.dataset &amp;&amp; this.dataset.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return _.keys(this.dataset[0])</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      return []</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    optionsOfColumns() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return _.fromPairs(</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.columnNames.map(columnName =&gt; [ columnName, _.uniq(this.colOrientedDataset[columnName]) ])</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53D6\u5F97\u8FD9\u4E9B\u4FE1\u606F\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5728\u9875\u9762\u4E0A\u5F00\u53D1\u8FC7\u6EE4\u5668\u7684\u63A7\u5236\u7EC4\u4EF6\u4E86\u3002\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u5217\u8868\u6765\u8868\u793A\u8FD9\u4E2A\u8FC7\u6EE4\u5668\u7684\u914D\u7F6E\u96C6\uFF0C\u800C\u5217\u8868\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u5305\u542B\u4E24\u4E2A <code>&lt;select&gt;</code> \u7EC4\u4EF6\u5206\u522B\u5BF9\u5E94\u7740\u8FC7\u6EE4\u5668\u7684\u5BF9\u5E94\u5B57\u6BB5\u548C\u8FC7\u6EE4\u76EE\u6807\u503C\u3002<code>&lt;select&gt;</code> \u7EC4\u4EF6\u4E2D\u5219\u5206\u522B\u4F7F\u7528\u524D\u9762\u51C6\u5907\u597D\u7684 <code>columnNames</code> \u548C <code>optionsOfColumns</code> \u6765\u751F\u6210 <code>&lt;option&gt;</code> \u53EF\u9009\u9879\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;button @click=&quot;addFilter&quot;&gt;Add Filter&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ul id=&quot;filters&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li v-for=&quot;filter, i in filters&quot; :key=&quot;i&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;select v-model=&quot;filter.column&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;none&quot;&gt;None&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option</span></span>
<span class="line"><span style="color:#A6ACCD;">          v-for=&quot;columnName in columnNames&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          :value=&quot;columnName&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          :key=&quot;columnName&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {{columnName}}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      =</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;select v-model=&quot;filter.value&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;none&quot;&gt;None&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option</span></span>
<span class="line"><span style="color:#A6ACCD;">          v-for=&quot;option in (optionsOfColumns[filter.column] || [])&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          :value=&quot;option&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          :key=&quot;option&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {{option}}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button @click=&quot;removeFilter(i)&quot;&gt;x&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u6211\u4EEC\u5C06\u8FD9\u4E9B\u5143\u7D20\u90FD\u6574\u5408\u8D77\u6765\u4FBF\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u76F8\u5F53\u4E0D\u9519\u7684\u6548\u679C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;button @click=&quot;addFilter&quot;&gt;Add Filter&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ul id=&quot;filters&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li v-for=&quot;filter, i in filters&quot; :key=&quot;i&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;select v-model=&quot;filter.column&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;none&quot;&gt;None&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option</span></span>
<span class="line"><span style="color:#A6ACCD;">          v-for=&quot;columnName in columnNames&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          :value=&quot;columnName&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          :key=&quot;columnName&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {{columnName}}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      =</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;select v-model=&quot;filter.value&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;none&quot;&gt;None&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option</span></span>
<span class="line"><span style="color:#A6ACCD;">          v-for=&quot;option in (optionsOfColumns[filter.column] || [])&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          :value=&quot;option&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          :key=&quot;option&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {{option}}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button @click=&quot;removeFilter(i)&quot;&gt;x&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;th v-for=&quot;column in columnNames&quot; :key=&quot;column&quot;&gt;{{column}}&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr v-for=&quot;(item, i) in filteredDataset&quot; :key=&quot;i&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td v-for=&quot;column in columnNames&quot; :key=&quot;column&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {{item[column]}}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const dataSource = mockDataSource(4)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function applyColumn(colDataset, columnName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!_.has(colDataset, columnName)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    colDataset[columnName] = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return colDataset</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function rowOriented2ColOriented(rowDataset) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let colDataset = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  rowDataset.forEach(function(row, i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const columnNames = _.keys(row)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    columnNames.forEach(function(columnName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      colDataset = applyColumn(colDataset, columnName)</span></span>
<span class="line"><span style="color:#A6ACCD;">      colDataset[columnName][i] = row[columnName]</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return colDataset</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    filters: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">    dataset: dataSource.dataset</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    colOrientedDataset() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return rowOriented2ColOriented(this.dataset)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    columnNames() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.dataset &amp;&amp; this.dataset.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return _.keys(this.dataset[0])</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      return []</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    optionsOfColumns() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return _.fromPairs(</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.columnNames.map(columnName =&gt; [ columnName, _.uniq(this.colOrientedDataset[columnName]) ])</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    filteredDataset() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.dataset.filter(row =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.filters.every(({ column, value }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (column === &#39;none&#39; || value === &#39;none&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return true</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          return row[column] === value</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    addFilter() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.filters.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">        column: &#39;none&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: &#39;none&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeFilter(index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.filters.splice(index, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>DEMO \u5728\u7EBF\u5730\u5740\uFF1A<a href="https://codepen.io/iwillwen/pen/Rvbeox?editors=1010" target="_blank" rel="noreferrer">https://codepen.io/iwillwen/pen/Rvbeox?editors=1010</a></p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/22/16873eb14d43bd23~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u5728\u672C\u5C0F\u8282\u4E2D\u6211\u4EEC\u4ECE\u8F83\u4E3A\u7B80\u5355\u7684\u6D41\u5F0F\u6570\u636E\u96C6\u89E6\u53D1\uFF0C\u4E00\u6B65\u4E00\u6B65\u5730\u5C1D\u8BD5\u6DFB\u52A0\u52A8\u6001\u8FC7\u6EE4\u5668\uFF0C\u5E76\u4E14\u4E5F\u4ECE\u7B80\u5355\u7684\u3001\u786E\u5B9A\u7684\u6570\u636E\u96C6\u5411\u66F4\u5E38\u89C1\u7684\u590D\u6742\u4E14\u4E0D\u786E\u5B9A\u7ED3\u6784\u7684\u6570\u636E\u96C6\u5B66\u4E60\uFF0C\u6700\u540E\u5728\u8FD9\u79CD\u6570\u636E\u96C6\u4E0A\u7ED3\u5408\u8F6F\u4EF6\u5DE5\u7A0B\u4E2D\u7684\u201C\u5206\u6CBB\u201D\u624B\u6BB5\u5C06\u590D\u6742\u7684\u95EE\u9898\u5207\u5206\u4E3A\u4E09\u4E2A\u90E8\u5206\uFF1A\u52A8\u6001\u6570\u636E\u6E90\u3001\u52A8\u6001\u6570\u636E\u6E90\u7684\u8F6C\u6362\u8FC7\u6EE4\u5C55\u793A\u4EE5\u53CA\u8FC7\u6EE4\u673A\u5236\u7684\u63A7\u5236\u7BA1\u7406\u3002\u76F8\u4FE1\u4ECE\u7B2C\u4E00\u8282\u5F00\u59CB\u5B66\u4E60\u5230\u73B0\u5728\u7684\u4F60\u5DF2\u7ECF\u638C\u63E1\u4E86\u975E\u5E38\u591A\u7684\u5404\u79CD\u6570\u636E\u7ED3\u6784\u548C\u5BF9\u4ED6\u4EEC\u8FDB\u884C\u903B\u8F91\u5904\u7406\u7684\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5728\u6700\u540E\u4E00\u8282\u4E2D\u6211\u4EEC\u5C06\u7740\u624B\u5F00\u53D1\u4E00\u4E2A\u5B9E\u9645\u7684\u9879\u76EE\uFF0C\u628A\u6211\u4EEC\u66FE\u7ECF\u5B66\u4E60\u8FC7\u7684\u4E1C\u897F\u5E94\u7528\u8D77\u6765\u3002</p><h3 id="\u4E60\u9898" tabindex="-1">\u4E60\u9898 <a class="header-anchor" href="#\u4E60\u9898" aria-hidden="true">#</a></h3><p>\u5C1D\u8BD5\u5728\u8FC7\u6EE4\u5668\u673A\u5236\u4E2D\u4E3A\u6BCF\u4E00\u4E2A\u8FC7\u6EE4\u5668\u6DFB\u52A0\u8FC7\u6EE4\u65B9\u6CD5\uFF0C\u5373\u4ECE\u539F\u672C\u7684\u7B49\u4E8E\u6DFB\u52A0\u5982\u5927\u4E8E\u3001\u5C0F\u4E8E\u3001\u4E0D\u7B49\u4E8E\u3001\u5305\u542B\u3001\u4E0D\u5305\u542B\u7B49\u7B49\uFF0C\u5B8C\u6210\u540E\u5728\u8BC4\u8BBA\u533A\u63D0\u4EA4\u4F60\u7684 CodePen \u5730\u5740\u3002</p>`,50),t=[e];function o(c,C,A,i,r,y){return a(),n("div",null,t)}const d=s(p,[["render",o]]);export{u as __pageData,d as default};
