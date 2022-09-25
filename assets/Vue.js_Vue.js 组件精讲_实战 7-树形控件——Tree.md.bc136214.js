import{_ as s,c as n,o as a,d as e}from"./app.e5528619.js";const D=JSON.parse('{"title":"\u5B9E\u6218 7-\u6811\u5F62\u63A7\u4EF6\u2014\u2014Tree","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api","link":"#api","children":[]},{"level":2,"title":"\u5165\u53E3 tree.vue","slug":"\u5165\u53E3-tree-vue","link":"#\u5165\u53E3-tree-vue","children":[]},{"level":2,"title":"\u9012\u5F52\u7EC4\u4EF6 node.vue","slug":"\u9012\u5F52\u7EC4\u4EF6-node-vue","link":"#\u9012\u5F52\u7EC4\u4EF6-node-vue","children":[]},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED","link":"#\u7ED3\u8BED","children":[]},{"level":2,"title":"\u6269\u5C55\u9605\u8BFB","slug":"\u6269\u5C55\u9605\u8BFB","link":"#\u6269\u5C55\u9605\u8BFB","children":[]}],"relativePath":"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u5B9E\u6218 7-\u6811\u5F62\u63A7\u4EF6\u2014\u2014Tree.md"}'),l={name:"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u5B9E\u6218 7-\u6811\u5F62\u63A7\u4EF6\u2014\u2014Tree.md"},p=e(`<h1 id="\u5B9E\u6218-7-\u6811\u5F62\u63A7\u4EF6\u2014\u2014tree" tabindex="-1">\u5B9E\u6218 7-\u6811\u5F62\u63A7\u4EF6\u2014\u2014Tree <a class="header-anchor" href="#\u5B9E\u6218-7-\u6811\u5F62\u63A7\u4EF6\u2014\u2014tree" aria-hidden="true">#</a></h1><hr><h1 id="\u5B9E\u6218-7\uFF1A\u6811\u5F62\u63A7\u4EF6\u2014\u2014tree" tabindex="-1">\u5B9E\u6218 7\uFF1A\u6811\u5F62\u63A7\u4EF6\u2014\u2014Tree <a class="header-anchor" href="#\u5B9E\u6218-7\uFF1A\u6811\u5F62\u63A7\u4EF6\u2014\u2014tree" aria-hidden="true">#</a></h1><p>\u672C\u5C0F\u8282\u57FA\u4E8E Vue.js \u7684\u9012\u5F52\u7EC4\u4EF6\u77E5\u8BC6\uFF0C\u6765\u5F00\u53D1\u4E00\u4E2A\u5E38\u89C1\u7684\u6811\u5F62\u63A7\u4EF6\u2014Tree\u3002</p><p>Tree \u7EC4\u4EF6\u662F\u9012\u5F52\u7C7B\u7EC4\u4EF6\u7684\u5178\u578B\u4EE3\u8868\uFF0C\u5B83\u5E38\u7528\u4E8E\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528\u6811\u63A7\u4EF6\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00\u6536\u8D77\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002</p><p>\u672C\u8282\u8981\u5B9E\u73B0\u7684 Tree \u7EC4\u4EF6\u5177\u6709\u4EE5\u4E0B\u529F\u80FD\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/27/16753fd7a86231b6~tplv-t2oaga2asx-image.image" alt=""></p><ul><li>\u8282\u70B9\u53EF\u4EE5\u65E0\u9650\u5EF6\u4F38\uFF08\u9012\u5F52\uFF09\uFF1B</li><li>\u53EF\u4EE5\u5C55\u5F00 / \u6536\u8D77\u5B50\u8282\u70B9\uFF1B</li><li>\u8282\u70B9\u53EF\u4EE5\u9009\u4E2D\uFF0C\u9009\u4E2D\u7236\u8282\u70B9\uFF0C\u5B83\u7684\u6240\u6709\u5B50\u8282\u70B9\u4E5F\u5168\u90E8\u88AB\u9009\u4E2D\uFF0C\u540C\u6837\uFF0C\u53CD\u9009\u7236\u8282\u70B9\uFF0C\u5176\u6240\u6709\u5B50\u8282\u70B9\u4E5F\u53D6\u6D88\u9009\u62E9\uFF1B</li><li>\u540C\u4E00\u7EA7\u6240\u6709\u5B50\u8282\u70B9\u9009\u4E2D\u65F6\uFF0C\u5B83\u7684\u7236\u7EA7\u4E5F\u81EA\u52A8\u9009\u4E2D\uFF0C\u4E00\u76F4\u9012\u5F52\u5224\u65AD\u5230\u6839\u8282\u70B9\u3002</li></ul><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><p>Tree \u662F\u5178\u578B\u7684\u6570\u636E\u9A71\u52A8\u578B\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u8282\u70B9\u7684\u914D\u7F6E\u5C31\u662F\u4E00\u4E2A data\uFF0C\u91CC\u9762\u63CF\u8FF0\u4E86\u6240\u6709\u8282\u70B9\u7684\u4FE1\u606F\uFF0C\u6BD4\u5982\u56FE\u7247\u4E2D\u7684\u793A\u4F8B\u6570\u636E\u4E3A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">data: [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;parent 1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    expand: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;parent 1-1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        expand: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;leaf 1-1-1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;leaf 1-1-2&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;parent 1-2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;leaf 1-2-1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;leaf 1-2-1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6BCF\u4E2A\u8282\u70B9\u7684\u914D\u7F6E\uFF08props\uFF1Adata\uFF09\u63CF\u8FF0\u5982\u4E0B\uFF1A</p><ul><li><strong>title</strong>\uFF1A\u8282\u70B9\u6807\u9898\uFF08\u672C\u4F8B\u4E3A\u7EAF\u6587\u672C\u8F93\u51FA\uFF0C\u53EF\u53C2\u8003 Table \u7684 Render \u6216 slot-scope \u5C06\u5176\u6269\u5C55\uFF09\uFF1B</li><li><strong>expand</strong>\uFF1A\u662F\u5426\u5C55\u5F00\u76F4\u5B50\u8282\u70B9\u3002\u5F00\u542F\u540E\uFF0C\u5176\u76F4\u5C5E\u5B50\u8282\u70B9\u5C06\u5C55\u5F00\uFF1B</li><li><strong>checked</strong>\uFF1A\u662F\u5426\u9009\u4E2D\u8BE5\u8282\u70B9\u3002\u5F00\u542F\u540E\uFF0C\u8BE5\u8282\u70B9\u7684 Checkbox \u5C06\u9009\u4E2D\uFF1B</li><li><strong>children</strong>\uFF1A\u5B50\u8282\u70B9\u5C5E\u6027\u6570\u7EC4\u3002</li></ul><p>\u5982\u679C\u4E00\u4E2A\u8282\u70B9\u6CA1\u6709 children \u5B57\u6BB5\uFF0C\u90A3\u5B83\u5C31\u662F\u6700\u540E\u4E00\u4E2A\u8282\u70B9\uFF0C\u8FD9\u4E5F\u662F\u9012\u5F52\u7EC4\u4EF6\u7EC8\u7ED3\u7684\u5224\u65AD\u4F9D\u636E\u3002</p><p>\u540C\u65F6\u518D\u63D0\u4F9B\u4E00\u4E2A\u662F\u5426\u663E\u793A\u591A\u9009\u6846\u7684 props\uFF1AshowCheckbox\uFF0C\u4EE5\u53CA\u4E24\u4E2A events\uFF1A</p><ul><li><strong>on-toggle-expand</strong>\uFF1A\u5C55\u5F00\u548C\u6536\u8D77\u5B50\u5217\u8868\u65F6\u89E6\u53D1\uFF1B</li><li><strong>on-check-change</strong>\uFF1A\u70B9\u51FB\u590D\u9009\u6846\u65F6\u89E6\u53D1\u3002</li></ul><p>\u56E0\u4E3A\u662F\u6570\u636E\u9A71\u52A8\uFF0C\u7EC4\u4EF6\u7684 API \u90FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u8FD9\u4E00\u70B9\u8DDF Table \u7EC4\u4EF6\u662F\u4E00\u6837\u7684\uFF0C\u5B83\u4EEC\u590D\u6742\u7684\u903B\u8F91\u90FD\u5728\u7EC4\u4EF6\u672C\u8EAB\u3002</p><h2 id="\u5165\u53E3-tree-vue" tabindex="-1">\u5165\u53E3 tree.vue <a class="header-anchor" href="#\u5165\u53E3-tree-vue" aria-hidden="true">#</a></h2><p>\u5728 <code>src/components</code> \u4E2D\u65B0\u5EFA\u76EE\u5F55 <code>tree</code>\uFF0C\u5E76\u5728 tree \u4E0B\u521B\u5EFA\u4E24\u4E2A\u7EC4\u4EF6 <code>tree.vue</code> \u548C <code>node.vue</code>\u3002tree.vue \u662F\u7EC4\u4EF6\u7684\u5165\u53E3\uFF0C\u7528\u4E8E\u63A5\u6536\u548C\u5904\u7406\u6570\u636E\uFF0C\u5E76\u5C06\u6570\u636E\u4F20\u9012\u7ED9 node.vue\uFF1Bnode.vue \u5C31\u662F\u4E00\u4E2A\u9012\u5F52\u7EC4\u4EF6\uFF0C\u5B83\u6784\u6210\u4E86\u6BCF\u4E00\u4E2A<strong>\u8282\u70B9</strong>\uFF0C\u5373\u4E00\u4E2A\u53EF\u5C55\u5F00 / \u5173\u95ED\u7684\u6309\u94AE\uFF08+\u6216-\uFF09\u3001\u4E00\u4E2A\u591A\u9009\u6846\uFF08\u4F7F\u7528\u7B2C 7 \u8282\u7684 Checkbox \u7EC4\u4EF6\uFF09\u3001\u8282\u70B9\u6807\u9898\u4EE5\u53CA\u9012\u5F52\u7684\u4E0B\u4E00\u7EA7\u8282\u70B9\u3002\u53EF\u80FD\u73B0\u5728\u542C\u8D77\u6765\u6BD4\u8F83\u56F0\u60D1\uFF0C\u4E0D\u8981\u614C\uFF0C\u4E0B\u9762\u9010\u4E00\u5206\u89E3\u3002</p><p>tree.vue \u4E3B\u8981\u8D1F\u8D23\u4E24\u4EF6\u4E8B\uFF1A</p><ol><li>\u5B9A\u4E49\u4E86\u7EC4\u4EF6\u7684\u5165\u53E3\uFF0C\u5373\u7EC4\u4EF6\u7684 API\uFF1B</li><li>\u5BF9\u63A5\u6536\u7684\u6570\u636E props\uFF1Adata \u521D\u6B65\u5904\u7406\uFF0C\u4E3A\u4E86\u5728 tree.vue \u4E2D\u4E0D\u7834\u574F\u4F7F\u7528\u8005\u4F20\u9012\u7684\u6E90\u6570\u636E data\uFF0C\u6240\u4EE5\u4F1A\u514B\u9686\u4E00\u4EFD\u6570\u636E\uFF08cloneData\uFF09\u3002</li></ol><p>\u56E0\u4E3A\u4F20\u9012\u7684\u6570\u636E data \u662F\u4E00\u4E2A\u590D\u6742\u7684\u6570\u7EC4\u7ED3\u6784\uFF0C\u514B\u9686\u5B83\u8981\u4F7F\u7528\u6DF1\u62F7\u8D1D\uFF0C\u56E0\u4E3A\u6D45\u62F7\u8D1D\u6570\u636E\u4ECD\u7136\u662F\u5F15\u7528\u5173\u7CFB\uFF0C\u4F1A\u7834\u574F\u6E90\u6570\u636E\u3002\u6240\u4EE5\u5728\u5DE5\u5177\u96C6 <code>src/utils/assist.js</code> \u4E2D\u65B0\u52A0\u4E00\u4E2A\u6DF1\u62F7\u8D1D\u7684\u5DE5\u5177\u51FD\u6570 <code>deepCopy</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// assist.js\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">function typeOf(obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const toString = Object.prototype.toString;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const map = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;[object Boolean]&#39;  : &#39;boolean&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;[object Number]&#39;   : &#39;number&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;[object String]&#39;   : &#39;string&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;[object Function]&#39; : &#39;function&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;[object Array]&#39;    : &#39;array&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;[object Date]&#39;     : &#39;date&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;[object RegExp]&#39;   : &#39;regExp&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;[object Undefined]&#39;: &#39;undefined&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;[object Null]&#39;     : &#39;null&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;[object Object]&#39;   : &#39;object&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return map[toString.call(obj)];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// deepCopy</span></span>
<span class="line"><span style="color:#A6ACCD;">function deepCopy(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const t = typeOf(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">  let o;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (t === &#39;array&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    o = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else if ( t === &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    o = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return data;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (t === &#39;array&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      o.push(deepCopy(data[i]));</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else if ( t === &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i in data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      o[i] = deepCopy(data[i]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return o;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export {deepCopy};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>deepCopy \u51FD\u6570\u4F1A\u9012\u5F52\u5730\u5BF9\u6570\u7EC4\u6216\u5BF9\u8C61\u8FDB\u884C\u9010\u4E00\u5224\u65AD\uFF0C\u5982\u679C\u67D0\u9879\u662F\u6570\u7EC4\u6216\u5BF9\u8C61\uFF0C\u518D\u62C6\u5206\u7EE7\u7EED\u5224\u65AD\uFF0C\u800C\u5176\u5B83\u7C7B\u578B\u5C31\u76F4\u63A5\u8D4B\u503C\u4E86\uFF0C\u6240\u4EE5\u6DF1\u62F7\u8D1D\u7684\u6570\u636E\u4E0D\u4F1A\u7834\u574F\u539F\u6709\u7684\u6570\u636E\uFF08\u66F4\u591A\u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D\u7684\u5185\u5BB9\uFF0C\u53EF\u9605\u8BFB\u6269\u5C55\u9605\u8BFB 1\uFF09\u3002</p><p>\u5148\u6765\u770B tree.vue \u7684\u4EE3\u7801\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- src/components/tree/tree.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tree-node</span></span>
<span class="line"><span style="color:#A6ACCD;">      v-for=&quot;(item, index) in cloneData&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :data=&quot;item&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :show-checkbox=&quot;showCheckbox&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;&lt;/tree-node&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import TreeNode from &#39;./node.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import { deepCopy } from &#39;../../utils/assist.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Tree&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { TreeNode },</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      showCheckbox: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        cloneData: []</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    created () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.rebuildData();</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.rebuildData();</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      rebuildData () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.cloneData = deepCopy(this.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u7EC4\u4EF6 created \u65F6\uFF08\u4EE5\u53CA watch \u76D1\u542C data \u6539\u53D8\u65F6\uFF09\uFF0C\u8C03\u7528\u4E86 <code>rebuildData</code> \u65B9\u6CD5\u514B\u9686\u6E90\u6570\u636E\uFF0C\u5E76\u8D4B\u503C\u7ED9\u4E86 <code>cloneData</code>\u3002</p><p>\u5728 template \u4E2D\uFF0C\u5148\u662F\u6E32\u67D3\u4E86\u4E00\u4E2A node.vue \u7EC4\u4EF6\uFF08<code>&lt;tree-node&gt;</code>\uFF09\uFF0C\u8FD9\u4E00\u7EA7\u662F Tree \u7684\u6839\u8282\u70B9\uFF0C\u56E0\u4E3A cloneDate \u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u6839\u8282\u70B9\u4E0D\u4E00\u5B9A\u53EA\u6709\u4E00\u9879\uFF0C\u6709\u53EF\u80FD\u662F\u5E76\u5217\u7684\u591A\u9879\u3002\u4E0D\u8FC7\u8FD9\u91CC\u4F7F\u7528\u7684 node.vue \u8FD8\u6CA1\u6709\u7528\u5230 Vue.js \u7684\u9012\u5F52\u7EC4\u4EF6\uFF0C\u5B83\u53EA\u5904\u7406\u7B2C\u4E00\u7EA7\u6839\u8282\u70B9\u3002</p><p><code>&lt;tree-node&gt;</code> \u7EC4\u4EF6\uFF08node.vue\uFF09\u63A5\u6536\u4E24\u4E2A props\uFF1A</p><ol><li>showCheckbox\uFF1A\u4E0E tree.vue \u7684 showCheckbox \u76F8\u540C\uFF0C\u53EA\u662F\u8FDB\u884C\u4F20\u9012\uFF1B</li><li>data\uFF1Anode.vue \u63A5\u6536\u7684 data \u662F\u4E00\u4E2A Object \u800C\u975E Array\uFF0C\u56E0\u4E3A\u5B83\u53EA\u8D1F\u8D23\u6E32\u67D3\u5F53\u524D\u7684\u4E00\u4E2A\u8282\u70B9\uFF0C\u5E76\u9012\u5F52\u6E32\u67D3\u4E0B\u4E00\u4E2A\u5B50\u8282\u70B9\uFF08\u5373 children\uFF09\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5BF9 cloneData \u8FDB\u884C\u5FAA\u73AF\uFF0C\u5C06\u6BCF\u4E00\u9879\u8282\u70B9\u6570\u636E\u8D4B\u7ED9\u4E86 tree-node\u3002</li></ol><h2 id="\u9012\u5F52\u7EC4\u4EF6-node-vue" tabindex="-1">\u9012\u5F52\u7EC4\u4EF6 node.vue <a class="header-anchor" href="#\u9012\u5F52\u7EC4\u4EF6-node-vue" aria-hidden="true">#</a></h2><p>node.vue \u662F\u6811\u7EC4\u4EF6 Tree \u7684\u6838\u5FC3\uFF0C\u800C\u4E00\u4E2A tree-node \u8282\u70B9\u5305\u542B 4 \u4E2A\u90E8\u5206\uFF1A</p><ol><li>\u5C55\u5F00\u4E0E\u5173\u95ED\u7684\u6309\u94AE\uFF08+\u6216-\uFF09\uFF1B</li><li>\u591A\u9009\u6846\uFF1B</li><li>\u8282\u70B9\u6807\u9898\uFF1B</li><li>\u9012\u5F52\u5B50\u8282\u70B9\u3002</li></ol><p>\u5148\u6765\u770B node.vue \u7684\u57FA\u672C\u7ED3\u6784\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- src/components/tree/node.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ul class=&quot;tree-ul&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li class=&quot;tree-li&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span class=&quot;tree-expand&quot; @click=&quot;handleExpand&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;span v-if=&quot;data.children &amp;&amp; data.children.length &amp;&amp; !data.expand&quot;&gt;+&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;span v-if=&quot;data.children &amp;&amp; data.children.length &amp;&amp; data.expand&quot;&gt;-&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;i-checkbox</span></span>
<span class="line"><span style="color:#A6ACCD;">        v-if=&quot;showCheckbox&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :value=&quot;data.checked&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @input=&quot;handleCheck&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;&lt;/i-checkbox&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;{{ data.title }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;tree-node</span></span>
<span class="line"><span style="color:#A6ACCD;">        v-if=&quot;data.expand&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        v-for=&quot;(item, index) in data.children&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :data=&quot;item&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :show-checkbox=&quot;showCheckbox&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;&lt;/tree-node&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import iCheckbox from &#39;../checkbox/checkbox.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;TreeNode&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { iCheckbox },</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Object,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return {};</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      showCheckbox: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  .tree-ul, .tree-li{</span></span>
<span class="line"><span style="color:#A6ACCD;">    list-style: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding-left: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  .tree-expand{</span></span>
<span class="line"><span style="color:#A6ACCD;">    cursor: pointer;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>props\uFF1Adata</code> \u5305\u542B\u4E86\u5F53\u524D\u8282\u70B9\u7684\u6240\u6709\u4FE1\u606F\uFF0C\u6BD4\u5982\u662F\u5426\u5C55\u5F00\u5B50\u8282\u70B9\uFF08expand\uFF09\u3001\u662F\u5426\u9009\u4E2D\uFF08checked\uFF09\u3001\u5B50\u8282\u70B9\u6570\u636E\uFF08children\uFF09\u7B49\u3002</p><p>\u7B2C\u4E00\u90E8\u5206 expand\uFF0C\u5982\u679C\u5F53\u524D\u8282\u70B9\u4E0D\u542B\u6709\u5B50\u8282\u70B9\uFF0C\u4E5F\u5C31\u662F\u6CA1\u6709 children \u5B57\u6BB5\u6216 children \u7684\u957F\u5EA6\u662F 0\uFF0C\u90A3\u5C31\u8BF4\u660E\u5F53\u524D\u8282\u70B9\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u7EA7\u8282\u70B9\uFF0C\u6240\u4EE5\u4E0D\u542B\u6709\u5C55\u5F00 / \u6536\u8D77\u7684\u6309\u94AE\u3002</p><p>\u591A\u9009\u6846\u76F4\u63A5\u4F7F\u7528\u4E86\u7B2C 7 \u8282\u7684 Checkbox \u7EC4\u4EF6\uFF08\u5355\u7528\u6A21\u5F0F\uFF09\uFF0C\u8FD9\u91CC\u5C06 prop: value \u548C\u4E8B\u4EF6 @input \u5206\u5F00\u7ED1\u5B9A\uFF0C\u6CA1\u6709\u4F7F\u7528 <code>v-model</code> \u8BED\u6CD5\u7CD6\u3002value \u7ED1\u5B9A\u7684\u6570\u636E <code>data.checked</code> \u8868\u793A\u5F53\u524D\u8282\u70B9\u662F\u5426\u9009\u4E2D\uFF0C\u5728\u70B9\u51FB\u591A\u9009\u6846\u65F6\uFF0ChandleCheck \u65B9\u6CD5\u4F1A\u4FEE\u6539 data.checked \u6570\u636E\uFF0C\u4E0B\u6587\u4F1A\u5206\u6790\u3002\u8FD9\u91CC\u4E4B\u6240\u4EE5\u4E0D\u4F7F\u7528 <code>v-model</code> \u800C\u662F\u5206\u5F00\u7ED1\u5B9A\uFF0C\u662F\u56E0\u4E3A @input \u91CC\u8981\u989D\u5916\u505A\u4E00\u4E9B\u5904\u7406\uFF0C\u4E0D\u662F\u5355\u7EAF\u7684\u4FEE\u6539\u6570\u636E\u3002</p><p>\u4E0A\u4E00\u8282\u6211\u4EEC\u8BF4\u5230\uFF0C\u4E00\u4E2A Vue.js \u9012\u5F52\u7EC4\u4EF6\u6709\u4E24\u4E2A\u5FC5\u8981\u6761\u4EF6\uFF1Aname \u7279\u6027\u548C\u7EC8\u7ED3\u6761\u4EF6\u3002name \u5DF2\u7ECF\u6307\u5B9A\u4E3A <code>TreeNode</code>\uFF0C\u800C\u8FD9\u4E2A\u7EC8\u7ED3\u9012\u5F52\u7684\u6761\u4EF6\uFF0C\u5C31\u662F <code>v-for=&quot;(item, index) in data.children&quot;</code>\uFF0C\u5F53 <code>data.children</code> \u4E0D\u5B58\u5728\u6216\u4E3A\u7A7A\u6570\u7EC4\u65F6\uFF0C\u81EA\u7136\u5C31\u4E0D\u4F1A\u7EE7\u7EED\u6E32\u67D3\u5B50\u8282\u70B9\uFF0C\u9012\u5F52\u4E5F\u5C31\u505C\u6B62\u4E86\u3002</p><p>\u6CE8\u610F\uFF0C\u8FD9\u91CC\u7684 <code>v-if=&quot;data.expand&quot;</code> \u5E76\u4E0D\u662F\u9012\u5F52\u7EC4\u4EF6\u7684\u7EC8\u7ED3\u6761\u4EF6\uFF0C\u867D\u7136\u5B83\u770B\u8D77\u6765\u50CF\u662F\u4E00\u4E2A\u53EF\u4EE5\u4E3A <code>false</code> \u7684\u5224\u65AD\u8BED\u53E5\uFF0C\u4F46\u5B83\u7684\u7528\u5904\u662F\u5224\u65AD\u5F53\u524D\u8282\u70B9<strong>\u7684\u5B50\u8282\u70B9</strong>\u662F\u5426\u5C55\u5F00\uFF08\u6E32\u67D3\uFF09\uFF0C\u5982\u679C\u5F53\u524D\u8282\u70B9\u4E0D\u5C55\u5F00\uFF0C\u90A3\u5B83\u6240\u6709\u7684\u5B50\u8282\u70B9\u4E5F\u5C31\u4E0D\u4F1A\u5C55\u5F00\uFF08\u6E32\u67D3\uFF09\u3002</p><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4FDD\u7559\u4E86\u4E24\u4E2A\u65B9\u6CD5 <code>handleExpand</code> \u4E0E <code>handleCheck</code>\uFF0C\u5148\u6765\u770B\u524D\u8005\u3002</p><p>\u70B9\u51FB + \u53F7\u65F6\uFF0C\u4F1A\u5C55\u5F00\u76F4\u5C5E\u5B50\u8282\u70B9\uFF0C\u70B9\u51FB - \u53F7\u5173\u95ED\uFF0C\u8FD9\u4E00\u6B65\u53EA\u9700\u5728 <code>handleExpand</code> \u4E2D\u4FEE\u6539 data \u7684 expand \u6570\u636E\u5373\u53EF\uFF0C\u540C\u65F6\uFF0C\u6211\u4EEC\u901A\u8FC7 Tree \u7684\u6839\u7EC4\u4EF6\uFF08tree.vue\uFF09\u89E6\u53D1\u4E00\u4E2A\u81EA\u5B9A\u4E49\u4E8B\u4EF6 <code>@on-toggle-expand</code>\uFF08\u4E0A\u6587\u5DF2\u4ECB\u7ECD\uFF09\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// node.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">import { findComponentUpward } from &#39;../../utils/assist.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      tree: findComponentUpward(this, &#39;Tree&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleExpand () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$set(this.data, &#39;expand&#39;, !this.data.expand);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.tree) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.tree.emitEvent(&#39;on-toggle-expand&#39;, this.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// tree.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    emitEvent (eventName, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$emit(eventName, data, this.cloneData);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 node.vue \u4E2D\uFF0C\u901A\u8FC7 <code>findComponentUpward</code> \u5411\u4E0A\u627E\u5230\u4E86 Tree \u7684\u5B9E\u4F8B\uFF0C\u5E76\u8C03\u7528\u5B83\u7684 <code>emitEvent</code> \u65B9\u6CD5\u6765\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6 <code>@on-toggle-expand</code>\u3002\u4E4B\u6240\u4EE5\u4F7F\u7528 <code>findComponentUpward</code> \u5BFB\u627E\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u662F\u7528 <code>$parent</code>\uFF0C\u662F\u56E0\u4E3A\u5F53\u524D\u7684 node.vue\uFF0C\u5B83\u7684\u7236\u7EA7\u4E0D\u4E00\u5B9A\u5C31\u662F tree.vue\uFF0C\u56E0\u4E3A\u5B83\u662F\u9012\u5F52\u7EC4\u4EF6\uFF0C\u7236\u7EA7\u6709\u53EF\u80FD\u8FD8\u662F\u81EA\u5DF1\u3002</p><p>\u8FD9\u91CC\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\uFF0C\u4FEE\u6539 data.expand\uFF0C\u6211\u4EEC\u662F\u901A\u8FC7 Vue \u7684 <code>$set</code> \u65B9\u6CD5\u6765\u4FEE\u6539\uFF0C\u5E76\u6CA1\u6709\u50CF\u4E0B\u9762\u8FD9\u6837\u4FEE\u6539\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">this.data.expand = !this.data.expand;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F\u5982\u679C\u76F4\u63A5\u7528\u4E0A\u9762\u8FD9\u884C\u4EE3\u7801\u4FEE\u6539\uFF0C\u53D1\u73B0\u6570\u636E\u867D\u7136\u88AB\u4FEE\u6539\u4E86\uFF0C\u4F46\u662F\u89C6\u56FE\u5E76\u6CA1\u6709\u66F4\u65B0\uFF08\u539F\u6765\u662F + \u53F7\uFF0C\u70B9\u51FB\u540E\u8FD8\u662F + \u53F7\uFF09\u3002\u8981\u7406\u89E3\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5148\u770B\u4E0B\uFF0C\u5230\u5E95\u4FEE\u6539\u4E86\u4EC0\u4E48\u3002\u8FD9\u91CC\u7684 <code>this.data</code>\uFF0C\u662F\u4E00\u4E2A props\uFF0C\u5B83\u662F\u901A\u8FC7\u4E0A\u4E00\u7EA7\u4F20\u9012\u7684\uFF0C\u8FD9\u4E2A\u4E0A\u4E00\u7EA7\u6709\u4E24\u79CD\u53EF\u80FD\uFF0C\u4E00\u79CD\u662F\u9012\u5F52\u7684 node.vue\uFF0C\u4E00\u79CD\u662F\u6839\u7EC4\u4EF6 tree.vue\uFF0C\u4F46\u662F\u9012\u5F52\u7684 node.vue\uFF0C\u6700\u7EC8\u4E5F\u662F\u7531 tree.vue \u4F20\u9012\u7684\uFF0C\u8FFD\u6839\u6EAF\u6E90\uFF0C\u8981\u4FEE\u6539\u7684 <code>this.data</code> \u4E8B\u5B9E\u4E0A\u662F tree.vue \u7684 <code>cloneData</code>\u3002cloneData \u91CC\u7684\u8282\u70B9\u6570\u636E\uFF0C\u662F\u4E0D\u4E00\u5B9A\u542B\u6709 <code>expand</code> \u6216 <code>checked</code> \u5B57\u6BB5\u7684\uFF0C\u5982\u679C\u4E0D\u542B\u6709\uFF0C\u76F4\u63A5\u901A\u8FC7 <code>this.data.expand</code> \u4FEE\u6539\uFF0C\u8FD9\u4E2A expand \u5C31\u4E0D\u662F\u53EF\u54CD\u5E94\u7684\u6570\u636E\uFF0CVue.js \u662F\u65E0\u6CD5\u8FFD\u8E2A\u5230\u5B83\u7684\u53D8\u5316\uFF0C\u89C6\u56FE\u81EA\u7136\u4E0D\u4F1A\u66F4\u65B0\uFF0C\u800C <code>$set</code> \u7684\u7528\u6CD5\u5C31\u662F\u5BF9\u53EF\u54CD\u5E94\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5E76\u786E\u4FDD\u8FD9\u4E2A\u65B0\u5C5E\u6027\u540C\u6837\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u4E14\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0\u3002\u603B\u7ED3\u6765\u8BF4\uFF0C\u5982\u679C expand \u5B57\u6BB5\u4E00\u5F00\u59CB\u662F\u5B58\u5728\u7684\uFF08\u4E0D\u7BA1 true \u6216 false\uFF09\uFF0C\u4E0D\u7BA1\u7528\u54EA\u79CD\u65B9\u5F0F\u4FEE\u6539\u90FD\u662F\u53EF\u4EE5\u7684\uFF0C\u5426\u5219\u5FC5\u987B\u7528 <code>$set</code> \u4FEE\u6539\uFF0C\u7ED3\u5408\u8D77\u6765\uFF0C\u5E72\u8106\u76F4\u63A5\u7528 $set \u4E86\u3002\u540C\u7406\uFF0C\u540E\u6587\u7684 <code>checked</code> \u4E5F\u662F\u4E00\u6837\u3002</p><p>\u63A5\u4E0B\u6765\u662F\u6574\u4E2A Tree \u7EC4\u4EF6\u6700\u590D\u6742\u7684\u4E00\u90E8\u5206\uFF0C\u5C31\u662F\u5904\u7406\u8282\u70B9\u7684\u54CD\u5E94\u72B6\u6001\u3002\u4F60\u53EF\u80FD\u4F1A\u95EE\uFF0C\u4E0D\u5C31\u662F\u9009\u4E2D\u6216\u53D6\u6D88\u9009\u4E2D\u5417\uFF0C\u8DDF expand \u4E00\u6837\uFF0C\u4FEE\u6539\u6570\u636E\u5C31\u884C\u4E86\uFF1F\u5982\u679C\u53EA\u662F\u8003\u8651\u4E00\u4E2A\u8282\u70B9\uFF0C\u7684\u786E\u8FD9\u6837\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4F46\u6811\u7EC4\u4EF6\u662F\u6709\u4E0A\u4E0B\u7EA7\u5173\u7CFB\u7684\uFF0C\u5B83\u4EEC\u5206\u4E3A\u4E24\u79CD\u903B\u8F91\uFF0C\u5F53\u9009\u4E2D\uFF08\u6216\u53D6\u6D88\u9009\u4E2D\uFF09\u4E00\u4E2A\u8282\u70B9\u65F6\uFF1A</p><ol><li>\u5B83\u4E0B\u9762\u7684\u6240\u6709\u5B50\u8282\u70B9\u90FD\u4F1A\u88AB\u9009\u4E2D\uFF1B</li><li>\u5982\u679C\u540C\u4E00\u7EA7\u6240\u6709\u5B50\u8282\u70B9\u9009\u4E2D\u65F6\uFF0C\u5B83\u7684\u7236\u7EA7\u4E5F\u81EA\u52A8\u9009\u4E2D\uFF0C\u4E00\u76F4\u9012\u5F52\u5224\u65AD\u5230\u6839\u8282\u70B9\u3002</li></ol><p>\u7B2C 1 \u4E2A\u903B\u8F91\u76F8\u5BF9\u7B80\u5355\uFF0C\u5F53\u9009\u4E2D\u4E00\u4E2A\u8282\u70B9\u65F6\uFF0C\u53EA\u8981\u9012\u5F52\u5730\u904D\u5386\u5B83\u4E0B\u9762\u6240\u5C5E\u7684\u6240\u6709\u5B50\u8282\u70B9\u6570\u636E\uFF0C\u4FEE\u6539\u6240\u6709\u7684 <code>checked</code> \u5B57\u6BB5\u5373\u53EF\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// node.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleCheck (checked) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.updateTreeDown(this.data, checked);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.tree) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.tree.emitEvent(&#39;on-check-change&#39;, this.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    updateTreeDown (data, checked) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$set(data, &#39;checked&#39;, checked);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (data.children &amp;&amp; data.children.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        data.children.forEach(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.updateTreeDown(item, checked);</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>updateTreeDown \u53EA\u662F\u5411\u4E0B\u4FEE\u6539\u4E86\u6240\u6709\u7684\u6570\u636E\uFF0C\u56E0\u4E3A\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E\u91CC\uFF0C\u662F\u5305\u542B\u5176\u6240\u6709\u5B50\u8282\u70B9\u6570\u636E\u7684\uFF0C\u901A\u8FC7\u9012\u5F52\u904D\u5386\u53EF\u4EE5\u8F7B\u677E\u4FEE\u6539\uFF0C\u8FD9\u4E5F\u662F\u7B2C 1 \u79CD\u903B\u8F91\u7B80\u5355\u7684\u539F\u56E0\u3002</p><p>\u518D\u6765\u770B\u7B2C 2 \u4E2A\u903B\u8F91\uFF0C\u5B83\u7684\u96BE\u70B9\u5728\u4E8E\uFF0C\u65E0\u6CD5\u901A\u8FC7\u5F53\u524D\u8282\u70B9\u6570\u636E\uFF0C\u4FEE\u6539\u5230\u5B83\u7684\u7236\u8282\u70B9\uFF0C\u56E0\u4E3A\u62FF\u4E0D\u5230\u3002\u5199\u5230\u8FD9\u91CC\uFF0C\u6B63\u5E38\u7684\u601D\u8DEF\u5E94\u8BE5\u662F\u5728 <code>this.updateTreeDown(this.data, checked);</code> \u7684\u4E0B\u9762\u518D\u5199\u4E00\u4E2A <code>updateTreeUp</code> \u7684\u65B9\u6CD5\uFF0C\u5411\u4E0A\u904D\u5386\uFF0C\u95EE\u9898\u5C31\u662F\uFF0C\u600E\u6837\u5411\u4E0A\u904D\u5386\uFF0C\u4E00\u79CD\u5E38\u89C4\u7684\u601D\u8DEF\u662F\uFF0C\u628A <code>updateTreeUp</code> \u65B9\u6CD5\u5199\u5728 tree.vue \u91CC\uFF0C\u5E76\u4E14\u5728 node.vue \u7684 <code>handleCheck</code> \u65B9\u6CD5\u91CC\uFF0C\u901A\u8FC7 this.tree \u8C03\u7528\u6839\u7EC4\u4EF6\u7684 <code>updateTreeUp</code>\uFF0C\u5E76\u4E14\u4F20\u9012\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E\uFF0C\u5728 tree.vue \u91CC\uFF0C\u8981\u627E\u5230\u5F53\u524D\u8282\u70B9\u7684\u4F4D\u7F6E\uFF0C\u90A3\u8FD8\u9700\u8981\u4E00\u5F00\u59CB\u5728 cloneData \u91CC\u9884\u5148\u7ED9\u6BCF\u4E2A\u8282\u70B9\u8BBE\u7F6E\u4E00\u4E2A\u552F\u4E00\u7684 key\uFF0C\u540E\u9762\u7684\u903B\u8F91\u8BFB\u8005\u5E94\u8BE5\u80FD\u60F3\u5230\u4E86\uFF0C\u5C31\u662F\u901A\u8FC7 key \u627E\u5230\u8282\u70B9\u4F4D\u7F6E\uFF0C\u5E76\u5411\u4E0A\u9012\u5F52\u5224\u65AD\u2026\u2026\u4F46\u662F\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u60F3\u7740\u5C31\u9EBB\u70E6\u3002</p><p>\u6B63\u5E38\u7684\u601D\u8DEF\u4E0D\u592A\u597D\u89E3\u51B3\uFF0C\u6211\u4EEC\u5C31\u6362\u4E2A\u601D\u8DEF\u3002\u4E00\u4E2A\u8282\u70B9\uFF0C\u9664\u4E86\u624B\u52A8\u9009\u4E2D\uFF08\u6216\u53CD\u9009\uFF09\uFF0C\u8FD8\u6709\u5C31\u662F\u7B2C 2 \u79CD\u903B\u8F91\u7684\u88AB\u52A8\u9009\u4E2D\uFF08\u6216\u53CD\u9009\uFF09\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u8FD9\u4E2A\u8282\u70B9\u7684\u6240\u6709\u76F4\u5C5E\u5B50\u8282\u70B9\uFF08\u5C31\u662F\u5B83\u7684\u7B2C\u4E00\u7EA7\u5B50\u8282\u70B9\uFF09\u90FD\u9009\u4E2D\uFF08\u6216\u53CD\u9009\uFF09\u65F6\uFF0C\u8FD9\u4E2A\u8282\u70B9\u5C31\u81EA\u52A8\u88AB\u9009\u4E2D\uFF08\u6216\u53CD\u9009\uFF09\uFF0C\u9012\u5F52\u5730\uFF0C\u53EF\u4EE5\u4E00\u7EA7\u4E00\u7EA7\u54CD\u5E94\u4E0A\u53BB\u3002\u6709\u4E86\u8FD9\u4E2A\u601D\u8DEF\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7 <code>watch</code> \u6765\u76D1\u542C\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\u662F\u5426\u90FD\u9009\u4E2D\uFF0C\u8FDB\u800C\u4FEE\u6539\u5F53\u524D\u7684 <code>checked</code> \u5B57\u6BB5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// node.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;data.children&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      handler (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          const checkedAll = !data.some(item =&gt; !item.checked);</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.$set(this.data, &#39;checked&#39;, checkedAll);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      deep: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 watch \u4E2D\uFF0C\u76D1\u542C\u4E86 data.children \u7684\u6539\u53D8\uFF0C\u5E76\u4E14\u662F\u6DF1\u5EA6\u76D1\u542C\u7684\u3002\u8FD9\u6BB5\u4EE3\u7801\u7684\u610F\u601D\u662F\uFF0C\u5F53 <code>data.children</code> \u4E2D\u7684\u6570\u636E\u7684\u67D0\u4E2A\u5B57\u6BB5\u53D1\u751F\u53D8\u5316\u65F6\uFF08\u8FD9\u91CC\u5F53\u7136\u662F\u6307 checked \u5B57\u6BB5\uFF09,\u4E5F\u5C31\u662F\u8BF4\u5B83\u7684\u67D0\u4E2A\u5B50\u8282\u70B9\u88AB\u9009\u4E2D\uFF08\u6216\u53CD\u9009\uFF09\u4E86\uFF0C\u8FD9\u65F6\u6267\u884C\u7ED1\u5B9A\u7684\u53E5\u67C4 handler \u4E2D\u7684\u903B\u8F91\u3002<code>const checkedAll = !data.some(item =&gt; !item.checked);</code> \u4E5F\u662F\u4E00\u4E2A\u5DE7\u5999\u7684\u7F29\u5199\uFF0CcheckedAll \u6700\u7EC8\u8FD4\u56DE\u7ED3\u679C\u5C31\u662F\u5F53\u524D\u5B50\u8282\u70B9\u662F\u5426\u90FD\u88AB\u9009\u4E2D\u4E86\u3002</p><p>\u8FD9\u91CC\u975E\u5E38\u5DE7\u5999\u5730\u5229\u7528\u4E86\u9012\u5F52\u7684\u7279\u6027\uFF0C\u56E0\u4E3A node.vue \u662F\u4E00\u4E2A\u9012\u5F52\u7EC4\u4EF6\uFF0C\u90A3\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u91CC\u90FD\u4F1A\u6709 watch \u76D1\u542C <code>data.children</code>\uFF0C\u8981\u77E5\u9053\uFF0C\u5F53\u524D\u7684\u8282\u70B9\u6709\u4E24\u4E2A\u201D\u8EAB\u4EFD\u201C\uFF0C\u5B83\u65E2\u662F\u4E0B\u5C5E\u8282\u70B9\u7684\u7236\u8282\u70B9\uFF0C\u540C\u65F6\u4E5F\u662F\u4E0A\u7EA7\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u5B83\u4F5C\u4E3A\u4E0B\u5C5E\u8282\u70B9\u7684\u7236\u8282\u70B9\u88AB\u4FEE\u6539\u7684\u540C\u65F6\uFF0C\u4E5F\u4F1A\u89E6\u53D1\u4E0A\u7EA7\u8282\u70B9\u4E2D\u7684 watch \u76D1\u542C\u51FD\u6570\u3002<strong>\u8FD9\u5C31\u662F\u9012\u5F52</strong>\u3002</p><p>\u4EE5\u4E0A\u5C31\u662F Tree \u7EC4\u4EF6\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5B8C\u6574\u7684\u4EE3\u7801\u89C1\uFF1A <a href="https://github.com/icarusion/vue-component-book/tree/master/src/components/tree" target="_blank" rel="noreferrer">https://github.com/icarusion/vue-component-book/tree/master/src/components/tree</a></p><p>\u7528\u4F8B\uFF1A<a href="https://github.com/icarusion/vue-component-book/blob/master/src/views/tree.vue" target="_blank" rel="noreferrer">https://github.com/icarusion/vue-component-book/blob/master/src/views/tree.vue</a></p><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>\u9012\u5F52\u5C31\u50CF\u4EBA\u7C7B\u7E41\u884D\u4E00\u6837\uFF0C\u8574\u85CF\u4E86\u65E0\u9650\u53EF\u80FD\uFF0C\u5145\u6EE1\u7740\u795E\u5947\u4E0E\u667A\u6167\u3002</p><h2 id="\u6269\u5C55\u9605\u8BFB" tabindex="-1">\u6269\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844904197595332622" target="_blank" rel="noreferrer">\u6D45\u62F7\u8D1D\u4E0E\u6DF1\u62F7\u8D1D</a></li></ul><p>\u6CE8\uFF1A\u672C\u8282\u90E8\u5206\u4EE3\u7801\u53C2\u8003 <a href="https://github.com/iview/iview/blob/2.0/src/utils/assist.js#L114" target="_blank" rel="noreferrer">iView</a>\u3002</p>`,65),o=[p];function t(c,r,i,C,A,d){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{D as __pageData,u as default};
