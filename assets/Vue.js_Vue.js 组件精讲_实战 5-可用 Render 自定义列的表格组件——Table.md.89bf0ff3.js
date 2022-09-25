import{_ as s,c as n,o as a,d as l}from"./app.c4f45da1.js";const D=JSON.parse('{"title":"\u5B9E\u6218 5-\u53EF\u7528 Render \u81EA\u5B9A\u4E49\u5217\u7684\u8868\u683C\u7EC4\u4EF6\u2014\u2014Table","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5206\u6790","slug":"\u5206\u6790","link":"#\u5206\u6790","children":[]},{"level":2,"title":"\u5B8C\u6210\u57FA\u7840\u8868\u683C","slug":"\u5B8C\u6210\u57FA\u7840\u8868\u683C","link":"#\u5B8C\u6210\u57FA\u7840\u8868\u683C","children":[]},{"level":2,"title":"\u4F7F\u7528 Render \u81EA\u5B9A\u4E49\u5217\u6A21\u677F","slug":"\u4F7F\u7528-render-\u81EA\u5B9A\u4E49\u5217\u6A21\u677F","link":"#\u4F7F\u7528-render-\u81EA\u5B9A\u4E49\u5217\u6A21\u677F","children":[]},{"level":2,"title":"\u4FEE\u6539\u5F53\u524D\u884C","slug":"\u4FEE\u6539\u5F53\u524D\u884C","link":"#\u4FEE\u6539\u5F53\u524D\u884C","children":[]},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED","link":"#\u7ED3\u8BED","children":[]},{"level":2,"title":"\u6269\u5C55\u9605\u8BFB","slug":"\u6269\u5C55\u9605\u8BFB","link":"#\u6269\u5C55\u9605\u8BFB","children":[]}],"relativePath":"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u5B9E\u6218 5-\u53EF\u7528 Render \u81EA\u5B9A\u4E49\u5217\u7684\u8868\u683C\u7EC4\u4EF6\u2014\u2014Table.md"}'),p={name:"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u5B9E\u6218 5-\u53EF\u7528 Render \u81EA\u5B9A\u4E49\u5217\u7684\u8868\u683C\u7EC4\u4EF6\u2014\u2014Table.md"},e=l(`<h1 id="\u5B9E\u6218-5-\u53EF\u7528-render-\u81EA\u5B9A\u4E49\u5217\u7684\u8868\u683C\u7EC4\u4EF6\u2014\u2014table" tabindex="-1">\u5B9E\u6218 5-\u53EF\u7528 Render \u81EA\u5B9A\u4E49\u5217\u7684\u8868\u683C\u7EC4\u4EF6\u2014\u2014Table <a class="header-anchor" href="#\u5B9E\u6218-5-\u53EF\u7528-render-\u81EA\u5B9A\u4E49\u5217\u7684\u8868\u683C\u7EC4\u4EF6\u2014\u2014table" aria-hidden="true">#</a></h1><hr><h1 id="\u5B9E\u6218-5\uFF1A\u53EF\u7528-render-\u81EA\u5B9A\u4E49\u5217\u7684\u8868\u683C\u7EC4\u4EF6\u2014\u2014table" tabindex="-1">\u5B9E\u6218 5\uFF1A\u53EF\u7528 Render \u81EA\u5B9A\u4E49\u5217\u7684\u8868\u683C\u7EC4\u4EF6\u2014\u2014Table <a class="header-anchor" href="#\u5B9E\u6218-5\uFF1A\u53EF\u7528-render-\u81EA\u5B9A\u4E49\u5217\u7684\u8868\u683C\u7EC4\u4EF6\u2014\u2014table" aria-hidden="true">#</a></h1><p>\u8868\u683C\u7EC4\u4EF6 Table \u662F\u4E2D\u540E\u53F0\u4EA7\u54C1\u4E2D\u6700\u5E38\u7528\u7684\u7EC4\u4EF6\u4E4B\u4E00\uFF0C\u7528\u4E8E\u5C55\u793A\u5927\u91CF\u7ED3\u6784\u5316\u7684\u6570\u636E\u3002\u5927\u591A\u6570\u7EC4\u4EF6\u5E93\u90FD\u63D0\u4F9B\u4E86\u8868\u683C\u7EC4\u4EF6\uFF0C\u6BD4\u5982 <a href="https://www.iviewui.com/components/table" target="_blank" rel="noreferrer">iView</a>\uFF0C\u529F\u80FD\u4E5F\u662F\u975E\u5E38\u5F3A\u5927\u3002\u6B63\u89C4\u7684\u8868\u683C\uFF0C\u662F\u7531 <code>&lt;table&gt;</code>\u3001<code>&lt;thead&gt;</code>\u3001<code>&lt;tbody&gt;</code>\u3001<code>&lt;tr&gt;</code>\u3001<code>&lt;th&gt;</code>\u3001<code>&lt;td&gt;</code> \u8FD9\u4E9B\u6807\u7B7E\u7EC4\u6210\uFF0C\u4E00\u822C\u5206\u4E3A\u8868\u5934 <strong>columns</strong> \u548C\u6570\u636E <strong>data</strong>\u3002\u672C\u5C0F\u8282\u5C31\u6765\u5F00\u53D1\u4E00\u4E2A\u6700\u57FA\u672C\u7684\u8868\u683C\u7EC4\u4EF6 Table\uFF0C\u5B83\u652F\u6301\u4F7F\u7528 Render \u51FD\u6570\u6765\u81EA\u5B9A\u4E49\u67D0\u4E00\u5217\u3002</p><h2 id="\u5206\u6790" tabindex="-1">\u5206\u6790 <a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a></h2><p>\u5982\u679C\u8868\u683C\u53EA\u662F\u5448\u73B0\u6570\u636E\uFF0C\u662F\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u6BD4\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/15/16716c44a664e7f1~tplv-t2oaga2asx-image.image" alt=""></p><p>\u56E0\u4E3A\u7ED3\u6784\u7B80\u5355\uFF0C\u6211\u4EEC\u751A\u81F3\u4E0D\u9700\u8981\u7EC4\u4EF6\uFF0C\u76F4\u63A5\u4F7F\u7528\u6807\u51C6\u7684 table \u7CFB\u5217\u6807\u7B7E\u5C31\u53EF\u4EE5\u3002\u4F46\u6709\u7684\u65F6\u5019\uFF0C\u9664\u4E86\u5448\u73B0\u6570\u636E\uFF0C\u4E5F\u4F1A\u5E26\u6709\u4E00\u4E9B\u4EA4\u4E92\uFF0C\u6BD4\u5982\u6709\u4E00\u5217\u64CD\u4F5C\u680F\uFF0C\u53EF\u4EE5\u7F16\u8F91\u6574\u884C\u7684\u6570\u636E\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/15/16716c54fc74a1a5~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5199\u4E00\u4E2A\u4E2A\u7684 table \u7CFB\u5217\u6807\u7B7E\u662F\u5F88\u9EBB\u70E6\u5E76\u4E14\u91CD\u590D\u7684\uFF0C\u800C\u7EC4\u4EF6\u7684\u597D\u5904\u5C31\u662F\u7701\u53BB\u8FD9\u4E9B\u57FA\u7840\u7684\u5DE5\u4F5C\uFF0C\u6211\u4EEC\u76F4\u63A5\u7ED9 Table \u7EC4\u4EF6\u4F20\u9012\u5217\u7684\u914D\u7F6E <strong>columns</strong> \u548C\u884C\u6570\u636E <strong>data</strong>\uFF0C\u5176\u4F59\u7684\u90FD\u4EA4\u7ED9 Table \u7EC4\u4EF6\u505A\u4E86\u3002</p><p>\u5F00\u53D1 Table \u7EC4\u4EF6\u524D\uFF0C\u6709\u5FC5\u8981\u5148\u4E86\u89E3\u4E0A\u6587\u8BF4\u5230\u7684\u4E00\u7CFB\u5217 table \u6807\u7B7E\u3002\u4E00\u822C\u7684 table \u7ED3\u6784\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;thead&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;th&gt;\u59D3\u540D&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;th&gt;\u5E74\u9F84&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/thead&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;tbody&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;\u738B\u5C0F\u660E&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;18&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;\u5F20\u5C0F\u521A&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;25&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/tbody&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>table\uFF1A\u5B9A\u4E49 HTML \u8868\u683C\uFF1B</li><li>thead\uFF1A\u5B9A\u4E49\u8868\u5934\uFF1B</li><li>tbody\uFF1A\u5B9A\u4E49\u8868\u683C\u4E3B\u4F53\uFF1B</li><li>tr\uFF1A\u5B9A\u4E49\u8868\u683C\u884C\uFF1B</li><li>th\uFF1A\u5B9A\u4E49\u8868\u5934\u5355\u5143\u683C\uFF1B</li><li>td\uFF1A\u5B9A\u4E49\u8868\u683C\u5355\u5143\u3002</li></ul><p>\u6807\u51C6\u7684\u8868\u683C\u7CFB\u5217\u6807\u7B7E\uFF0C\u8DDF div+css \u5B9E\u73B0\u662F\u6709\u5F88\u5927\u533A\u522B\u7684\uFF0C\u6BD4\u5982\u8868\u683C\u5728\u505A\u5355\u5143\u683C\u5408\u5E76\u65F6\uFF0C\u6709\u63D0\u4F9B\u539F\u751F\u5C5E\u6027\uFF0C\u7528 div \u5C31\u5F88\u9EBB\u70E6\u4E86\uFF1B\u518D\u6BD4\u5982\u6E32\u67D3\u539F\u7406\u4E0A\u4E5F\u6709\u4E00\u5B9A\u7684\u533A\u522B\uFF0Ctable \u4F1A\u5728\u5185\u5BB9\u5168\u90E8\u4E0B\u8F7D\u5B8C\u540E\u52A0\u8F7D\u3002\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u53EF\u4EE5\u9605\u8BFB\u6587\u672B\u7684\u6269\u5C55\u9605\u8BFB 1\u3002</p><p>\u77E5\u9053\u4E86\u8868\u683C\u7684\u7ED3\u6784\uFF0C\u518D\u6765\u5206\u6790\u5982\u4F55\u5B9A\u5236 API\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u8868\u683C\u5206\u4E3A\u4E86\u4E24\u90E8\u5206\uFF0C\u8868\u5934 thead \u548C\u6570\u636E tbody\uFF0C\u90A3 props \u4E5F\u5B9A\u4E49\u4E24\u4E2A\uFF1A</p><ul><li><p>columns\uFF1A\u5217\u914D\u7F6E\uFF0C\u683C\u5F0F\u4E3A\u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E00\u5217 column \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u6765\u63CF\u8FF0\u8FD9\u4E00\u5217\u7684\u4FE1\u606F\uFF0C\u5B83\u7684\u5177\u4F53\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li>title\uFF1A\u5217\u5934\u663E\u793A\u6587\u5B57\uFF1B</li><li>key\uFF1A\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D\uFF1B</li><li>render\uFF1A\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\uFF0C\u4F7F\u7528 Vue \u7684 Render \u51FD\u6570\uFF0C\u4E0D\u5B9A\u4E49\u5219\u76F4\u63A5\u663E\u793A\u4E3A\u6587\u672C\u3002</li></ul><p>\u6BD4\u5982\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &#39;\u59D3\u540D&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  key: &#39;name&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &#39;\u5E74\u9F84&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  key: &#39;age&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>data\uFF1A\u663E\u793A\u7684\u7ED3\u6784\u5316\u6570\u636E\uFF0C\u683C\u5F0F\u4E3A\u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u662F\u4E00\u884C\u7684\u6570\u636E\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;\u738B\u5C0F\u660E&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: 18</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;\u5F20\u5C0F\u521A&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: 25</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><p>column \u5B9A\u4E49\u7684 <code>key</code> \u503C\uFF0C\u4E0E data \u662F\u4E00\u4E00\u5BF9\u5E94\u7684\uFF0C\u8FD9\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u6570\u636E\u63A5\u53E3\u5B9A\u4E49\u89C4\u5219\uFF0C\u4E5F\u662F Vue.js \u7EC4\u4EF6\u4E2D\uFF0C\u7528\u6570\u636E\u9A71\u52A8\u800C\u4E0D\u662F slot \u9A71\u52A8\u7684\u7ECF\u5178\u6848\u4F8B\u3002</p><p>\u4E3A\u4EC0\u4E48 Table \u7EC4\u4EF6\u8981\u7528\u6570\u636E\u9A71\u52A8\uFF0C\u800C\u4E0D\u662F slot \u9A71\u52A8\u5462\uFF1Fslot \u5728\u5F88\u591A\u7EC4\u4EF6\u4E2D\u7684\u786E\u5F88\u597D\u7528\uFF0C\u4E0D\u8FC7 Table \u7EC4\u4EF6\u5305\u542B\u4E86\u5927\u91CF\u7684\u57FA\u7840\u8868\u683C\u6807\u7B7E\uFF0C\u5982\u679C\u90FD\u4EA4\u7ED9\u4F7F\u7528\u8005\u7531 slot \u627F\u8F7D\u7684\u8BDD\uFF0C\u5F00\u53D1\u6210\u672C\u4E0D\u4E9A\u4E8E\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A table \u4E86\uFF0C\u800C\u6570\u636E\u9A71\u52A8\u5C31\u7B80\u5355\u7684\u591A\uFF0C\u6570\u636E\u4E00\u822C\u4ECE\u670D\u52A1\u7AEF\u83B7\u53D6\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF08\u6216\u7B80\u5355\u5904\u7406\uFF09\uFF0C\u4F7F\u7528\u8005\u4E3B\u8981\u6765\u5B9A\u4E49\u6BCF\u5217\u7684\u914D\u7F6E <strong>columns</strong> \u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u56E0\u4E3A\u4E0D\u786E\u5B9A\u4F7F\u7528\u8005\u8981\u5BF9\u67D0\u4E00\u5217\u505A\u4EC0\u4E48\u4EA4\u4E92\uFF0C\u6240\u4EE5\u4E0D\u80FD\u5728 Table \u5185\u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5217\u3002\u4F7F\u7528 Render \u51FD\u6570\u53EF\u4EE5\u5C06\u590D\u6742\u7684\u81EA\u5B9A\u4E49\u5217\u6A21\u677F\u7684\u5DE5\u4F5C\u4EA4\u7ED9\u4F7F\u7528\u8005\u6765\u914D\u7F6E\uFF0CTable \u5185\u53EA\u7528\u4E00\u4E2A Functional Render \u505A\u4E2D\u8F6C\u3002</p><h2 id="\u5B8C\u6210\u57FA\u7840\u8868\u683C" tabindex="-1">\u5B8C\u6210\u57FA\u7840\u8868\u683C <a class="header-anchor" href="#\u5B8C\u6210\u57FA\u7840\u8868\u683C" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5148\u6765\u5B8C\u6210\u4E00\u4E2A\u57FA\u7840\u7684\u8868\u683C\u7EC4\u4EF6\uFF0C\u4E4B\u540E\u518D\u63A5\u5165 Render \u6765\u914D\u7F6E\u81EA\u5B9A\u4E49\u5217\u3002</p><p>\u5728 <code>src/components</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>table-render</code> \u76EE\u5F55\uFF0C\u5E76\u521B\u5EFA <code>table.vue</code> \u6587\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- src/components/table-render/table.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;thead&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;th v-for=&quot;col in columns&quot;&gt;{{ col.title }}&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/thead&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tbody&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;tr v-for=&quot;row in data&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;td v-for=&quot;col in columns&quot;&gt;{{ row[col.key] }}&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tbody&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      columns: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  table{</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-collapse: collapse;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-spacing: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    empty-cells: show;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border: 1px solid #e9e9e9;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  table th{</span></span>
<span class="line"><span style="color:#A6ACCD;">    background: #f7f7f7;</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: #5c6b77;</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-weight: 600;</span></span>
<span class="line"><span style="color:#A6ACCD;">    white-space: nowrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  table td, table th{</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding: 8px 16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border: 1px solid #e9e9e9;</span></span>
<span class="line"><span style="color:#A6ACCD;">    text-align: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>props \u4E2D\u7684 columns \u548C data \u7684\u683C\u5F0F\u90FD\u662F\u6570\u7EC4\uFF0C\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C props \u7684\u7C7B\u578B\u662F<strong>\u5BF9\u8C61</strong>\u6216<strong>\u6570\u7EC4</strong>\uFF0C\u5B83\u7684\u9ED8\u8BA4\u503C\u5FC5\u987B\u4ECE\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\u83B7\u53D6\u3002</p></blockquote><p>tbody \u5185\u5D4C\u5957\u4F7F\u7528\u4E86\u4E24\u6B21 <code>v-for</code>\uFF0C\u5916\u5C42\u5FAA\u73AF\u6570\u636E data\uFF0C\u5185\u5C42\u5FAA\u73AF\u5217 columns\uFF0C\u8FD9\u6837\u5C31\u586B\u5145\u4E86\u6BCF\u4E2A\u5355\u5143\u683C\u3002</p><p>\u65B0\u5EFA\u8DEF\u7531 <code>table-render</code>\uFF0C\u5E76\u5728 <code>src/views/</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA\u9875\u9762 <code>table-render.vue</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- src/views/table-render.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;table-render :columns=&quot;columns&quot; :data=&quot;data&quot;&gt;&lt;/table-render&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import TableRender from &#39;../components/table-render/table.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { TableRender },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        columns: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;\u59D3\u540D&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            key: &#39;name&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;\u5E74\u9F84&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            key: &#39;age&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;\u51FA\u751F\u65E5\u671F&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            key: &#39;birthday&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;\u5730\u5740&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            key: &#39;address&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;\u64CD\u4F5C&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;\u738B\u5C0F\u660E&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            age: 18,</span></span>
<span class="line"><span style="color:#A6ACCD;">            birthday: &#39;919526400000&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            address: &#39;\u5317\u4EAC\u5E02\u671D\u9633\u533A\u828D\u836F\u5C45&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;\u5F20\u5C0F\u521A&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            age: 25,</span></span>
<span class="line"><span style="color:#A6ACCD;">            birthday: &#39;696096000000&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            address: &#39;\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u897F\u4E8C\u65D7&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;\u674E\u5C0F\u7EA2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            age: 30,</span></span>
<span class="line"><span style="color:#A6ACCD;">            birthday: &#39;563472000000&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            address: &#39;\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A\u4E16\u7EAA\u5927\u9053&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;\u5468\u5C0F\u4F1F&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            age: 26,</span></span>
<span class="line"><span style="color:#A6ACCD;">            birthday: &#39;687024000000&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            address: &#39;\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u6DF1\u5357\u5927\u9053&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD0\u884C\u540E\u7684\u6548\u679C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/15/16716c5b99ef76ac~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8868\u683C\u5DF2\u7ECF\u80FD\u6E32\u67D3\u51FA\u6765\u4E86\uFF0C\u4F46\u73B0\u5728\u7684\u5355\u5143\u683C\u53EA\u662F\u5C06 data \u5F53\u4F5C\u7EAF\u6587\u672C\u6765\u663E\u793A\uFF0C\u6240\u4EE5\u51FA\u751F\u65E5\u671F\u5217\u663E\u793A\u4E3A\u65F6\u95F4\u6233\uFF0C\u56E0\u4E3A\u670D\u52A1\u7AEF\u5BF9\u65E5\u671F\u6709\u65F6\u4F1A\u4FDD\u5B58\u4E3A\u65F6\u95F4\u6233\u683C\u5F0F\u3002\u5982\u679C\u8981\u663E\u793A\u6B63\u5E38\u7684\u65E5\u671F\uFF08\u59821991-5-14\uFF09\uFF0C\u76EE\u524D\u53EF\u4EE5\u53E6\u5199\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF08computed\uFF09\uFF0C\u624B\u52A8\u5C06\u65F6\u95F4\u6233\u6362\u7B97\u4E3A\u6807\u51C6\u65E5\u671F\u683C\u5F0F\u540E\uFF0C\u6765\u52A8\u6001\u4FEE\u6539 data \u91CC\u7684 <code>birthday</code> \u5B57\u6BB5\u3002\u8FD9\u6837\u505A\u5BF9\u4E8E\u51FA\u751F\u65E5\u671F\u8FD9\u6837\u7684\u6570\u636E\u8FD8\u597D\uFF0C\u4F46\u5BF9\u4E8E<strong>\u64CD\u4F5C</strong>\u8FD9\u4E00\u5217\u5C31\u4E0D\u53EF\u53D6\u4E86\uFF0C\u56E0\u4E3A\u5B83\u5E26\u6709\u4E1A\u52A1\u903B\u8F91\uFF0C\u70B9\u51FB<strong>\u7F16\u8F91</strong>\u6309\u94AE\uFF0C\u662F\u53EF\u4EE5\u5BF9\u5F53\u524D\u884C\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u7684\u3002\u8FD9\u65F6\u5C31\u8981\u7528\u5230 Render \u51FD\u6570\u3002</p><h2 id="\u4F7F\u7528-render-\u81EA\u5B9A\u4E49\u5217\u6A21\u677F" tabindex="-1">\u4F7F\u7528 Render \u81EA\u5B9A\u4E49\u5217\u6A21\u677F <a class="header-anchor" href="#\u4F7F\u7528-render-\u81EA\u5B9A\u4E49\u5217\u6A21\u677F" aria-hidden="true">#</a></h2><p>\u4E0A\u4E00\u8282\u6211\u4EEC\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\u51FD\u6570\u5F0F\u7EC4\u4EF6 Functional Render \u7684\u7528\u6CD5\uFF0C\u5B83\u6CA1\u6709\u72B6\u6001\u548C\u4E0A\u4E0B\u6587\uFF0C\u4E3B\u8981\u7528\u4E8E\u4E2D\u8F6C\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u7528\u5728\u672C\u8282\u7684 Table \u7EC4\u4EF6\u975E\u5E38\u5408\u9002\u3002</p><p>\u5148\u5728 <code>src/components/table-render</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>render.js</code> \u6587\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// src/components/table-render/render.js</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  functional: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    row: Object,</span></span>
<span class="line"><span style="color:#A6ACCD;">    column: Object,</span></span>
<span class="line"><span style="color:#A6ACCD;">    index: Number,</span></span>
<span class="line"><span style="color:#A6ACCD;">    render: Function</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  render: (h, ctx) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const params = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      row: ctx.props.row,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column: ctx.props.column,</span></span>
<span class="line"><span style="color:#A6ACCD;">      index: ctx.props.index</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return ctx.props.render(h, params);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>render.js \u5B9A\u4E49\u4E86 4 \u4E2A props\uFF1A</p><ul><li><strong>row</strong>\uFF1A\u5F53\u524D\u884C\u7684\u6570\u636E\uFF1B</li><li><strong>column</strong>\uFF1A\u5F53\u524D\u5217\u7684\u6570\u636E\uFF1B</li><li><strong>index</strong>\uFF1A\u5F53\u524D\u662F\u7B2C\u51E0\u884C\uFF1B</li><li><strong>render</strong>\uFF1A\u5177\u4F53\u7684 render \u51FD\u6570\u5185\u5BB9\u3002</li></ul><p>\u8FD9\u91CC\u7684 <code>render</code> \u9009\u9879\u5E76\u6CA1\u6709\u6E32\u67D3\u4EFB\u4F55\u8282\u70B9\uFF0C\u800C\u662F\u76F4\u63A5\u8FD4\u56DE props \u4E2D\u5B9A\u4E49\u7684 render\uFF0C\u5E76\u5C06 h \u548C\u5F53\u524D\u7684\u884C\u3001\u5217\u3001\u5E8F\u53F7\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u51FA\u53BB\u3002\u7136\u540E\u5728 table.vue \u91CC\u5C31\u53EF\u4EE5\u4F7F\u7528 render.js \u7EC4\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- table.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;thead&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;th v-for=&quot;col in columns&quot;&gt;{{ col.title }}&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/thead&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tbody&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;tr v-for=&quot;(row, rowIndex) in data&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;td v-for=&quot;col in columns&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;template v-if=&quot;&#39;render&#39; in col&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Render :row=&quot;row&quot; :column=&quot;col&quot; :index=&quot;rowIndex&quot; :render=&quot;col.render&quot;&gt;&lt;/Render&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;template v-else&gt;{{ row[col.key] }}&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tbody&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import Render from &#39;./render.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { Render },</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      columns: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C columns \u4E2D\u7684\u67D0\u4E00\u5217\u914D\u7F6E\u4E86 render \u5B57\u6BB5\uFF0C\u90A3\u5C31\u901A\u8FC7 render.js \u5B8C\u6210\u81EA\u5B9A\u4E49\u6A21\u677F\uFF0C\u5426\u5219\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u6E32\u67D3\u3002\u6BD4\u5982\u5BF9\u51FA\u751F\u65E5\u671F\u8FD9\u5217\u663E\u793A\u4E3A\u6807\u51C6\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49 column\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// src/views/table-render.vie\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      columns: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          title: &#39;\u51FA\u751F\u65E5\u671F&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          render: (h, { row, column, index }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            const date = new Date(parseInt(row.birthday));</span></span>
<span class="line"><span style="color:#A6ACCD;">            const year = date.getFullYear();</span></span>
<span class="line"><span style="color:#A6ACCD;">            const month = date.getMonth() + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            const day = date.getDate();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#A6ACCD;">            const birthday = \`\${year}-\${month}-\${day}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#A6ACCD;">            return h(&#39;span&#39;, birthday);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6548\u679C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/15/16716c604e151fa0~tplv-t2oaga2asx-image.image" alt=""></p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Ccolumns \u91CC\u5B9A\u4E49\u7684 render\uFF0C\u662F\u6709\u4E24\u4E2A\u53C2\u6570\u7684\uFF0C\u7B2C\u4E00\u4E2A\u662F createElement\uFF08\u5373 h\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u4ECE render.js \u4F20\u8FC7\u6765\u7684\u5BF9\u8C61\uFF0C\u5B83\u5305\u542B\u4E86\u5F53\u524D\u884C\u6570\u636E\uFF08<code>row</code>\uFF09\u3001\u5F53\u524D\u5217\u914D\u7F6E\uFF08<code>column</code>\uFF09\u3001\u5F53\u524D\u662F\u7B2C\u51E0\u884C\uFF08<code>index</code>\uFF09\uFF0C\u4F7F\u7528\u8005\u53EF\u4EE5\u57FA\u4E8E\u8FD9 3 \u4E2A\u53C2\u6570\u5F97\u5230\u4EFB\u610F\u60F3\u8981\u7684\u7ED3\u679C\u3002\u7531\u4E8E\u662F\u81EA\u5B9A\u4E49\u5217\u4E86\uFF0C\u663E\u793A\u4EC0\u4E48\u90FD\u662F\u4F7F\u7528\u8005\u51B3\u5B9A\u7684\uFF0C\u56E0\u6B64\u5728\u4F7F\u7528\u4E86 render \u7684 column \u91CC\u53EF\u4EE5\u4E0D\u7528\u5199\u5B57\u6BB5 <code>key</code> \u3002</p><p>\u5982\u679C\u4F60\u771F\u6B63\u7406\u89E3\u4E86\uFF0C\u5E94\u8BE5\u77E5\u9053 columns \u91CC\u5B9A\u4E49\u7684 render \u5B57\u6BB5\uFF0C\u5B83\u4EC5\u4EC5\u662F\u540D\u5B57\u53EB render \u7684\u4E00\u4E2A\u666E\u901A\u51FD\u6570\uFF0C\u5E76\u975E Vue.js \u5B9E\u4F8B\u7684 <em>render</em> \u9009\u9879\uFF0C\u53EA\u662F\u6211\u4EEC\u6070\u5DE7\u628A\u5B83\u53EB\u505A render \u800C\u5DF2\uFF0C\u5982\u679C\u613F\u610F\uFF0C\u4E5F\u53EF\u4EE5\u6539\u4E3A\u5176\u5B83\u540D\u5B57\uFF0C\u6BD4\u5982 renderRow\u3002\u771F\u6B63\u7684 Render \u51FD\u6570\u53EA\u6709\u4E00\u4E2A\u5730\u65B9\uFF0C\u90A3\u5C31\u662F render.js \u4E2D\u7684 render \u9009\u9879\uFF0C\u53EA\u662F\u5B83\u4EE3\u7406\u4E86 column \u4E2D\u7684 render\u3002\u8FD9\u91CC\u6709\u70B9\u7ED5\uFF0C\u7406\u6E05\u8FD9\u4E2A\u5173\u7CFB\uFF0C\u5C31\u5BF9 Functional Render \u5F7B\u5E95\u7406\u89E3\u4E86\u3002</p><h2 id="\u4FEE\u6539\u5F53\u524D\u884C" tabindex="-1">\u4FEE\u6539\u5F53\u524D\u884C <a class="header-anchor" href="#\u4FEE\u6539\u5F53\u524D\u884C" aria-hidden="true">#</a></h2><p>\u6709\u4E86 render\uFF0CTable \u7EC4\u4EF6\u5C31\u5DF2\u7ECF\u5B8C\u6210\u4E86\uFF0C\u5269\u4F59\u5DE5\u4F5C\u90FD\u662F\u4F7F\u7528\u8005\u6765\u914D\u7F6E columns \u5B8C\u6210\u5404\u79CD\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u3002\u672C\u4F8B\u6765\u4ECB\u7ECD\u6700\u5E38\u89C1\u7684\u8868\u683C\u4E2D\u5BF9\u6574\u884C\u6570\u636E\u7F16\u8F91\u7684\u529F\u80FD\u3002</p><p><strong>\u64CD\u4F5C</strong>\u8FD9\u4E00\u5217\uFF0C\u9ED8\u8BA4\u662F\u4E00\u4E2A<strong>\u4FEE\u6539</strong>\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\uFF0C\u53D8\u4E3A<strong>\u4FDD\u5B58</strong>\u548C<strong>\u53D6\u6D88</strong>\u4E24\u4E2A\u6309\u94AE\uFF0C\u540C\u65F6\u672C\u884C\u5176\u5B83\u5404\u5217\u90FD\u53D8\u4E3A\u4E86\u8F93\u5165\u6846\uFF0C\u5E76\u4E14\u521D\u59CB\u503C\u5C31\u662F\u521A\u624D\u5355\u5143\u683C\u7684\u6570\u636E\u3002\u53D8\u4E3A\u8F93\u5165\u6846\u540E\uFF0C\u53EF\u4EE5\u4EFB\u610F\u4FEE\u6539\u5355\u5143\u683C\u6570\u636E\uFF0C\u70B9\u51FB\u4FDD\u5B58\u6309\u94AE\u4FDD\u5B58\u6574\u884C\u6570\u636E\uFF0C\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\uFF0C\u8FD8\u539F\u81F3\u4FEE\u6539\u524D\u7684\u6570\u636E\u3002</p><p>\u5F53\u8FDB\u5165\u7F16\u8F91\u72B6\u6001\u65F6\uFF0C\u6BCF\u4E00\u5217\u7684\u8F93\u5165\u6846\u90FD\u8981\u6709\u4E00\u4E2A\u4E34\u65F6\u7684\u6570\u636E\u4F7F\u7528 <code>v-model</code> \u53CC\u5411\u7ED1\u5B9A\u6765\u54CD\u5E94\u4FEE\u6539\uFF0C\u6240\u4EE5\u5728 data \u91CC\u518D\u58F0\u660E\u56DB\u4E2A\u6570\u636E\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// table-render.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      editName: &#39;&#39;,  // \u7B2C\u4E00\u5217\u8F93\u5165\u6846</span></span>
<span class="line"><span style="color:#A6ACCD;">      editAge: &#39;&#39;,  // \u7B2C\u4E8C\u5217\u8F93\u5165\u6846</span></span>
<span class="line"><span style="color:#A6ACCD;">      editBirthday: &#39;&#39;,  // \u7B2C\u4E09\u5217\u8F93\u5165\u6846</span></span>
<span class="line"><span style="color:#A6ACCD;">      editAddress: &#39;&#39;,  // \u7B2C\u56DB\u5217\u8F93\u5165\u6846</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u540C\u65F6\u8FD8\u8981\u77E5\u9053\u662F\u5728\u4FEE\u6539\u7B2C\u51E0\u884C\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u518D\u52A0\u4E00\u4E2A\u6570\u636E\u6807\u8BC6\u5F53\u524D\u6B63\u5728\u4FEE\u6539\u7684\u884C\u5E8F\u53F7\uFF08\u4ECE 0 \u5F00\u59CB\uFF09\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// table-render.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      editIndex: -1,  // \u5F53\u524D\u805A\u7126\u7684\u8F93\u5165\u6846\u7684\u884C\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>editIndex</code> \u9ED8\u8BA4\u7ED9\u4E86 -1\uFF0C\u4E5F\u5C31\u662F\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u884C\u53F7\uFF0C\u5F53\u70B9\u51FB\u4FEE\u6539\u6309\u94AE\u65F6\uFF0C\u518D\u5C06\u5B83\u7F6E\u4E3A\u6B63\u786E\u7684\u884C\u53F7\u3002\u6211\u4EEC\u5148\u5B9A\u4E49\u64CD\u4F5C\u5217\u7684 render\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// table-render.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    columns: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;\u64CD\u4F5C&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        render: (h, { row, index }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u5982\u679C\u5F53\u524D\u884C\u662F\u7F16\u8F91\u72B6\u6001\uFF0C\u5219\u6E32\u67D3\u4E24\u4E2A\u6309\u94AE</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (this.editIndex === index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return [</span></span>
<span class="line"><span style="color:#A6ACCD;">              h(&#39;button&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">                on: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  click: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.data[index].name = this.editName;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.data[index].age = this.editAge;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.data[index].birthday = this.editBirthday;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.data[index].address = this.editAddress;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.editIndex = -1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">              }, &#39;\u4FDD\u5B58&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">              h(&#39;button&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">                style: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  marginLeft: &#39;6px&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                },</span></span>
<span class="line"><span style="color:#A6ACCD;">                on: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  click: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.editIndex = -1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">              }, &#39;\u53D6\u6D88&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            ];</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {  // \u5F53\u524D\u884C\u662F\u9ED8\u8BA4\u72B6\u6001\uFF0C\u6E32\u67D3\u4E3A\u4E00\u4E2A\u6309\u94AE</span></span>
<span class="line"><span style="color:#A6ACCD;">            return h(&#39;button&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">              on: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                click: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  this.editName = row.name;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  this.editAge = row.age;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  this.editAddress = row.address;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  this.editBirthday = row.birthday;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  this.editIndex = index;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, &#39;\u4FEE\u6539&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>render \u91CC\u7684 <code>if / else</code> \u53EF\u4EE5\u5148\u770B else\uFF0C\u56E0\u4E3A\u9ED8\u8BA4\u662F\u975E\u7F16\u8F91\u72B6\u6001\uFF0C\u4E5F\u5C31\u662F\u8BF4 <code>editIndex</code> \u8FD8\u662F -1\u3002\u5F53\u70B9\u51FB<strong>\u4FEE\u6539</strong>\u6309\u94AE\u65F6\uFF0C\u628A render \u4E2D\u7B2C\u4E8C\u4E2A\u53C2\u6570 <code>{ row }</code> \u4E2D\u7684\u5404\u5217\u6570\u636E\u8D4B\u503C\u7ED9\u4E86\u4E4B\u524D\u5728 data \u4E2D\u58F0\u660E\u7684 4 \u4E2A\u6570\u636E\uFF0C\u8FD9\u6837\u505A\u662F\u56E0\u4E3A\u4E4B\u540E\u70B9\u51FB<strong>\u53D6\u6D88</strong>\u6309\u94AE\u65F6\uFF0CeditName \u7B49\u503C\u5DF2\u7ECF\u4FEE\u6539\u4E86\uFF0C\u8FD8\u6CA1\u6709\u8FD8\u539F\uFF0C\u6240\u4EE5\u5728\u5F00\u542F\u7F16\u8F91\u72B6\u6001\u7684\u540C\u65F6\uFF0C\u521D\u59CB\u5316\u5404\u8F93\u5165\u6846\u7684\u503C\uFF08\u5F53\u7136\u4E5F\u53EF\u4EE5\u5728\u53D6\u6D88\u65F6\u91CD\u7F6E\uFF09\u3002\u6700\u540E\u518D\u628A <code>editIndex</code> \u7F6E\u4E3A\u4E86\u5BF9\u5E94\u7684\u884C\u5E8F\u53F7 <code>{ index }</code>\uFF0C\u6B64\u65F6 render \u7684 <code>if</code> \u6761\u4EF6 <code>this.editIndex === index</code> \u4E3A\u771F\uFF0C\u7F16\u8F91\u5217\u53D8\u6210\u4E86\u4E24\u4E2A\u6309\u94AE\uFF1A\u4FDD\u5B58\u548C\u53D6\u6D88\u3002\u70B9\u51FB\u4FDD\u5B58\uFF0C\u76F4\u63A5\u4FEE\u6539\u8868\u683C\u6E90\u6570\u636E data \u4E2D\u5BF9\u5E94\u7684\u5404\u5B57\u6BB5\u503C\uFF0C\u5E76\u5C06 editIndex \u7F6E\u4E3A -1\uFF0C\u9000\u51FA\u7F16\u8F91\u72B6\u6001\uFF1B\u70B9\u51FB\u53D6\u6D88\uFF0C\u4E0D\u4FDD\u5B58\u6E90\u6570\u636E\uFF0C\u76F4\u63A5\u9000\u51FA\u7F16\u8F91\u72B6\u6001\u3002</p><p>\u9664\u7F16\u8F91\u5217\uFF0C\u5176\u5B83\u5404\u6570\u636E\u5217\u90FD\u6709\u4E24\u79CD\u72B6\u6001\uFF1A</p><ol><li>\u5F53 editIndex \u7B49\u4E8E\u5F53\u524D\u884C\u53F7 index \u65F6\uFF0C\u5448\u73B0\u8F93\u5165\u6846\u72B6\u6001\uFF1B</li><li>\u5F53 editIndex \u4E0D\u7B49\u4E8E\u5F53\u524D\u884C\u53F7 index \u65F6\uFF0C\u5448\u73B0\u9ED8\u8BA4\u6570\u636E\u3002</li></ol><p>\u4EE5\u59D3\u540D\u4E3A\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// table-render.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    columns: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;\u59D3\u540D&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        key: &#39;name&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        render: (h, { row, index }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let edit;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u5F53\u524D\u884C\u4E3A\u805A\u7126\u884C\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (this.editIndex === index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            edit = [h(&#39;input&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">              domProps: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                value: row.name</span></span>
<span class="line"><span style="color:#A6ACCD;">              },</span></span>
<span class="line"><span style="color:#A6ACCD;">              on: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                input: (event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  this.editName = event.target.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">            })];</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            edit = row.name;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          return h(&#39;div&#39;, [</span></span>
<span class="line"><span style="color:#A6ACCD;">            edit</span></span>
<span class="line"><span style="color:#A6ACCD;">          ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53D8\u91CF <code>edit</code> \u6839\u636E editIndex \u5448\u73B0\u4E0D\u540C\u7684\u8282\u70B9\uFF0C\u8FD8\u662F\u5148\u770B else\uFF0C\u76F4\u63A5\u663E\u793A\u4E86\u5BF9\u5E94\u5B57\u6BB5\u7684\u6570\u636E\u3002\u5728\u805A\u7126\u65F6\uFF08this.editIndex === index\uFF09\uFF0C\u6E32\u67D3\u4E00\u4E2A <code>input</code> \u8F93\u5165\u6846\uFF0C\u521D\u59CB\u503C <code>value</code> \u901A\u8FC7 render \u7684 <code>domProps</code> \u7ED1\u5B9A\u4E86 <code>row.name</code>\uFF08\u8FD9\u91CC\u4E5F\u53EF\u7ED1\u5B9A editName\uFF09\uFF0C\u5E76\u76D1\u542C\u4E86 input \u4E8B\u4EF6\uFF0C\u5C06\u8F93\u5165\u7684\u5185\u5BB9\uFF0C\u5B9E\u65F6\u7F13\u5B58\u5728\u6570\u636E <code>editName</code> \u4E2D\uFF0C\u4F9B\u4FDD\u5B58\u65F6\u4F7F\u7528\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u8FD9\u91CC\u7ED1\u5B9A\u7684 value \u548C\u4E8B\u4EF6 input \u5C31\u662F\u8BED\u6CD5\u7CD6 <code>v-model</code> \u5728 Render \u51FD\u6570\u4E2D\u7684\u5199\u6CD5\uFF0C\u5728 template \u4E2D\uFF0C\u7ECF\u5E38\u5199\u4F5C <code>&lt;input v-model=&quot;editName&quot;&gt;</code>\u3002</p><p>\u5176\u5B83\u5217\u4E0E\u59D3\u540D\u7C7B\u4F3C\uFF0C\u53EA\u662F\u5BF9\u4E8E\u7684\u5B57\u6BB5\u4E0D\u540C\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// table-render.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      columns: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          title: &#39;\u5E74\u9F84&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          key: &#39;age&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          render: (h, { row, index }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let edit;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u5F53\u524D\u884C\u4E3A\u805A\u7126\u884C\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (this.editIndex === index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              edit = [h(&#39;input&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">                domProps: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  value: row.age</span></span>
<span class="line"><span style="color:#A6ACCD;">                },</span></span>
<span class="line"><span style="color:#A6ACCD;">                on: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  input: (event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.editAge = event.target.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">              })];</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">              edit = row.age;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            return h(&#39;div&#39;, [</span></span>
<span class="line"><span style="color:#A6ACCD;">              edit</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          title: &#39;\u51FA\u751F\u65E5\u671F&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          render: (h, { row, index }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let edit;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u5F53\u524D\u884C\u4E3A\u805A\u7126\u884C\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (this.editIndex === index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              edit = [h(&#39;input&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">                domProps: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  value: row.birthday</span></span>
<span class="line"><span style="color:#A6ACCD;">                },</span></span>
<span class="line"><span style="color:#A6ACCD;">                on: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  input: (event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.editBirthday = event.target.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">              })];</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">              const date = new Date(parseInt(row.birthday));</span></span>
<span class="line"><span style="color:#A6ACCD;">              const year = date.getFullYear();</span></span>
<span class="line"><span style="color:#A6ACCD;">              const month = date.getMonth() + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">              const day = date.getDate();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              edit = \`\${year}-\${month}-\${day}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            return h(&#39;div&#39;, [</span></span>
<span class="line"><span style="color:#A6ACCD;">              edit</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          title: &#39;\u5730\u5740&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          key: &#39;address&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          render: (h, { row, index }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let edit;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u5F53\u524D\u884C\u4E3A\u805A\u7126\u884C\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (this.editIndex === index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              edit = [h(&#39;input&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">                domProps: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  value: row.address</span></span>
<span class="line"><span style="color:#A6ACCD;">                },</span></span>
<span class="line"><span style="color:#A6ACCD;">                on: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  input: (event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.editAddress = event.target.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">              })];</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">              edit = row.address;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            return h(&#39;div&#39;, [</span></span>
<span class="line"><span style="color:#A6ACCD;">              edit</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u5B8C\u6574\u7684\u4EE3\u7801\u89C1\uFF1A<a href="https://github.com/icarusion/vue-component-book/blob/master/src/views/table-render.vue" target="_blank" rel="noreferrer">https://github.com/icarusion/vue-component-book/blob/master/src/views/table-render.vue</a></p></blockquote><p>\u8FD9\u6837\uFF0C\u53EF\u7F16\u8F91\u884C\u7684\u8868\u683C\u793A\u4F8B\u5C31\u5B8C\u6210\u4E86\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/15/16716c54fc74a1a5~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>\u672C\u793A\u4F8B\u7684 Table \u7EC4\u4EF6\uFF0C\u53EA\u5C55\u73B0\u4E86\u8868\u683C\u6700\u6838\u5FC3\u7684\u529F\u80FD\u2014\u2014\u81EA\u5B9A\u4E49\u5217\u6A21\u677F\uFF0C\u4E00\u4E2A\u5B8C\u6574\u7684 Table \u7EC4\u4EF6\u529F\u80FD\u8981\u590D\u6742\u7684\u591A\uFF0C\u6BD4\u5982\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5217\u56FA\u5B9A\u3001\u8868\u5934\u56FA\u5B9A\u3001\u8868\u5934\u5D4C\u5957\u7B49\u3002\u4E07\u4E8B\u5F00\u5934\u96BE\uFF0C\u6253\u597D\u4E86 Table \u7684\u5730\u57FA\uFF0C\u540E\u9762\u7684\u529F\u80FD\u53EF\u4EE5\u6301\u7EED\u5F00\u53D1\u3002</p><p>\u4E8B\u5B9E\u4E0A\uFF0C\u5F88\u591A Vue.js \u7684\u5F00\u53D1\u96BE\u9898\uFF0C\u90FD\u53EF\u4EE5\u7528 Render \u51FD\u6570\u6765\u89E3\u51B3\uFF0C\u5B83\u6BD4 template \u6A21\u677F\u66F4\u7075\u6D3B\uFF0C\u53EF\u4EE5\u5B8C\u5168\u53D1\u6325 JavaScript \u7684\u7F16\u7A0B\u80FD\u529B\uFF0C\u56E0\u6B64\u5F88\u591A JS \u7684\u5F00\u53D1\u601D\u60F3\u90FD\u53EF\u4EE5\u501F\u9274\u3002\u5982\u679C\u4F60\u4E60\u60EF JSX\uFF0C\u90A3\u5B8C\u5168\u53EF\u4EE5\u629B\u5F03\u4F20\u7EDF\u7684 template \u5199\u6CD5\u3002</p><p>Render \u51FD\u6570\u867D\u597D\uFF0C\u4F46\u4E5F\u662F\u6709\u5F0A\u7AEF\u7684\uFF0C\u901A\u8FC7\u4E0A\u9762\u7684\u793A\u4F8B\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5199\u51FA\u6765\u7684 VNode \u5BF9\u8C61\u662F\u5F88\u96BE\u8BFB\u7684\uFF0C\u7EF4\u62A4\u6027\u4E5F\u6BD4 template \u5DEE\u3002\u4E0B\u4E00\u8282\uFF0C\u6211\u4EEC\u5C06\u6539\u5199 Table \u7EC4\u4EF6\uFF0C\u7528\u53E6\u4E00\u79CD\u601D\u60F3\u6765\u5B9E\u73B0\u540C\u6837\u7684\u529F\u80FD\u3002</p><h2 id="\u6269\u5C55\u9605\u8BFB" tabindex="-1">\u6269\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/lovebear/archive/2012/04/18/2456081.html" target="_blank" rel="noreferrer">Div \u548C Table \u7684\u533A\u522B</a></li></ul>`,70),o=[e];function t(c,r,A,C,i,d){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{D as __pageData,g as default};
