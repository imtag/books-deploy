import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const D=JSON.parse('{"title":"\u9012\u5F52\u7EC4\u4EF6\u4E0E\u52A8\u6001\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9012\u5F52\u7EC4\u4EF6","slug":"\u9012\u5F52\u7EC4\u4EF6","link":"#\u9012\u5F52\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u52A8\u6001\u7EC4\u4EF6","slug":"\u52A8\u6001\u7EC4\u4EF6","link":"#\u52A8\u6001\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED","link":"#\u7ED3\u8BED","children":[]},{"level":2,"title":"\u6269\u5C55\u9605\u8BFB","slug":"\u6269\u5C55\u9605\u8BFB","link":"#\u6269\u5C55\u9605\u8BFB","children":[]}],"relativePath":"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u9012\u5F52\u7EC4\u4EF6\u4E0E\u52A8\u6001\u7EC4\u4EF6.md"}'),p={name:"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u9012\u5F52\u7EC4\u4EF6\u4E0E\u52A8\u6001\u7EC4\u4EF6.md"},e=l(`<h1 id="\u9012\u5F52\u7EC4\u4EF6\u4E0E\u52A8\u6001\u7EC4\u4EF6" tabindex="-1">\u9012\u5F52\u7EC4\u4EF6\u4E0E\u52A8\u6001\u7EC4\u4EF6 <a class="header-anchor" href="#\u9012\u5F52\u7EC4\u4EF6\u4E0E\u52A8\u6001\u7EC4\u4EF6" aria-hidden="true">#</a></h1><hr><h1 id="\u9012\u5F52\u7EC4\u4EF6\u4E0E\u52A8\u6001\u7EC4\u4EF6-1" tabindex="-1">\u9012\u5F52\u7EC4\u4EF6\u4E0E\u52A8\u6001\u7EC4\u4EF6 <a class="header-anchor" href="#\u9012\u5F52\u7EC4\u4EF6\u4E0E\u52A8\u6001\u7EC4\u4EF6-1" aria-hidden="true">#</a></h1><h2 id="\u9012\u5F52\u7EC4\u4EF6" tabindex="-1">\u9012\u5F52\u7EC4\u4EF6 <a class="header-anchor" href="#\u9012\u5F52\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u9012\u5F52\u7EC4\u4EF6\u5C31\u662F\u6307\u7EC4\u4EF6\u5728\u6A21\u677F\u4E2D\u8C03\u7528\u81EA\u5DF1\uFF0C\u5F00\u542F\u9012\u5F52\u7EC4\u4EF6\u7684\u5FC5\u8981\u6761\u4EF6\uFF0C\u5C31\u662F\u5728\u7EC4\u4EF6\u4E2D\u8BBE\u7F6E\u4E00\u4E2A <code>name</code> \u9009\u9879\u3002\u6BD4\u5982\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;my-component&gt;&lt;/my-component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;my-component&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 Webpack \u4E2D\u5BFC\u5165\u4E00\u4E2A Vue.js \u7EC4\u4EF6\uFF0C\u4E00\u822C\u662F\u901A\u8FC7 <code>import myComponent from &#39;xxx&#39;</code> \u8FD9\u6837\u7684\u8BED\u6CD5\uFF0C\u7136\u540E\u5728\u5F53\u524D\u7EC4\u4EF6\uFF08\u9875\u9762\uFF09\u7684 <code>components: { myComponent }</code> \u91CC\u6CE8\u518C\u7EC4\u4EF6\u3002\u8FD9\u79CD\u7EC4\u4EF6\u662F\u4E0D\u5F3A\u5236\u8BBE\u7F6E <code>name</code> \u5B57\u6BB5\u7684\uFF0C\u7EC4\u4EF6\u7684\u540D\u5B57\u90FD\u662F\u4F7F\u7528\u8005\u5728 import \u8FDB\u6765\u540E\u81EA\u5B9A\u4E49\u7684\uFF0C\u4F46\u9012\u5F52\u7EC4\u4EF6\u7684\u4F7F\u7528\u8005\u662F\u7EC4\u4EF6\u81EA\u8EAB\uFF0C\u5B83\u5F97\u77E5\u9053\u8FD9\u4E2A\u7EC4\u4EF6\u53EB\u4EC0\u4E48\uFF0C\u56E0\u4E3A\u6CA1\u6709\u7528 <code>components</code> \u6CE8\u518C\uFF0C\u6240\u4EE5 <code>name</code> \u5B57\u6BB5\u5C31\u662F\u5FC5\u987B\u7684\u4E86\u3002\u9664\u4E86\u9012\u5F52\u7EC4\u4EF6\u7528 <code>name</code>\uFF0C\u6211\u4EEC\u5728\u4E4B\u524D\u7684\u5C0F\u8282\u4E5F\u4ECB\u7ECD\u8FC7\uFF0C\u7528\u4E00\u4E9B\u7279\u6B8A\u7684\u65B9\u6CD5\uFF0C\u901A\u8FC7\u904D\u5386\u5339\u914D\u7EC4\u4EF6\u7684 name \u9009\u9879\u6765\u5BFB\u627E\u7EC4\u4EF6\u5B9E\u4F8B\u3002</p><p>\u4E0D\u8FC7\u5462\uFF0C\u4E0A\u9762\u7684\u793A\u4F8B\u662F\u6709\u95EE\u9898\u7684\uFF0C\u5982\u679C\u76F4\u63A5\u8FD0\u884C\uFF0C\u4F1A\u629B\u51FA <code>max stack size exceeded</code> \u7684\u9519\u8BEF\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u4F1A\u65E0\u9650\u9012\u5F52\u4E0B\u53BB\uFF0C\u6B7B\u5FAA\u73AF\u3002\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5C31\u8981\u7ED9\u9012\u5F52\u7EC4\u4EF6\u4E00\u4E2A\u9650\u5236\u6761\u4EF6\uFF0C\u4E00\u822C\u4F1A\u5728\u9012\u5F52\u7EC4\u4EF6\u4E0A\u7528 <code>v-if</code> \u5728\u67D0\u4E2A\u5730\u65B9\u8BBE\u7F6E\u4E3A <code>false</code> \u6765\u7EC8\u7ED3\u3002\u6BD4\u5982\u6211\u4EEC\u7ED9\u4E0A\u9762\u7684\u793A\u4F8B\u52A0\u4E00\u4E2A\u5C5E\u6027 count\uFF0C\u5F53\u5927\u4E8E 5 \u65F6\u5C31\u4E0D\u518D\u9012\u5F52\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;my-component :count=&quot;count + 1&quot; v-if=&quot;count &lt;= 5&quot;&gt;&lt;/my-component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;my-component&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      count: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Number,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6240\u4EE5\uFF0C\u603B\u7ED3\u4E0B\u6765\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u9012\u5F52\u7EC4\u4EF6\u7684\u5FC5\u8981\u6761\u4EF6\u662F\uFF1A</p><ul><li>\u8981\u7ED9\u7EC4\u4EF6\u8BBE\u7F6E <strong>name</strong>\uFF1B</li><li>\u8981\u6709\u4E00\u4E2A\u660E\u786E\u7684\u7ED3\u675F\u6761\u4EF6</li></ul><p>\u9012\u5F52\u7EC4\u4EF6\u5E38\u7528\u6765\u5F00\u53D1\u5177\u6709\u672A\u77E5\u5C42\u7EA7\u5173\u7CFB\u7684\u72EC\u7ACB\u7EC4\u4EF6\uFF0C\u5728\u4E1A\u52A1\u5F00\u53D1\u4E2D\u5F88\u5C11\u4F7F\u7528\u3002\u6BD4\u5982\u5E38\u89C1\u7684\u6709\u7EA7\u8054\u9009\u62E9\u5668\u548C\u6811\u5F62\u63A7\u4EF6\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/22/167398b8f5a828b1~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8FD9\u7C7B\u7EC4\u4EF6\u4E00\u822C\u90FD\u662F\u6570\u636E\u9A71\u52A8\u578B\u7684\uFF0C\u7236\u7EA7\u6709\u4E00\u4E2A\u5B57\u6BB5 children\uFF0C\u7136\u540E\u9012\u5F52\u3002\u4E0B\u4E00\u8282\u7684\u5B9E\u6218\uFF0C\u4F1A\u5F00\u53D1\u4E00\u4E2A\u6811\u5F62\u63A7\u4EF6 Tree\u3002</p><h2 id="\u52A8\u6001\u7EC4\u4EF6" tabindex="-1">\u52A8\u6001\u7EC4\u4EF6 <a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u6709\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u6839\u636E\u4E00\u4E9B\u6761\u4EF6\uFF0C\u52A8\u6001\u5730\u5207\u6362\u67D0\u4E2A\u7EC4\u4EF6\uFF0C\u6216\u52A8\u6001\u5730\u9009\u62E9\u6E32\u67D3\u67D0\u4E2A\u7EC4\u4EF6\u3002\u5728\u4E4B\u524D\u5C0F\u8282\u4ECB\u7ECD\u51FD\u6570\u5F0F\u7EC4\u4EF6 Functional Render \u65F6\uFF0C\u5DF2\u7ECF\u8BF4\u8FC7\uFF0C\u5B83\u662F\u4E00\u4E2A\u6CA1\u6709\u4E0A\u4E0B\u6587\u7684\u51FD\u6570\uFF0C\u5E38\u7528\u4E8E\u7A0B\u5E8F\u5316\u5730\u5728\u591A\u4E2A\u7EC4\u4EF6\u4E2D\u9009\u62E9\u4E00\u4E2A\u3002\u4F7F\u7528 Render \u6216 Functional Render \u53EF\u4EE5\u89E3\u51B3\u52A8\u6001\u5207\u6362\u7EC4\u4EF6\u7684\u9700\u6C42\uFF0C\u4E0D\u8FC7\u90A3\u662F\u57FA\u4E8E\u4E00\u4E2A JS \u5BF9\u8C61\uFF08Render \u51FD\u6570\uFF09\uFF0C\u800C Vue.js \u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u4E2A\u5185\u7F6E\u7684\u7EC4\u4EF6 <code>&lt;component&gt;</code> \u548C <code>is</code> \u7279\u6027\uFF0C\u53EF\u4EE5\u66F4\u597D\u5730\u5B9E\u73B0\u52A8\u6001\u7EC4\u4EF6\u3002</p><p>\u5148\u6765\u770B\u4E00\u4E2A <code>&lt;component&gt;</code> \u548C <code>is</code> \u7684\u57FA\u672C\u793A\u4F8B\uFF0C\u9996\u5148\u5B9A\u4E49\u4E09\u4E2A\u666E\u901A\u7EC4\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- a.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u7EC4\u4EF6 A</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- b.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u7EC4\u4EF6 B</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- c.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u7EC4\u4EF6 C</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u5728\u7236\u7EC4\u4EF6\u4E2D\u5BFC\u5165\u8FD9 3 \u4E2A\u7EC4\u4EF6\uFF0C\u5E76\u52A8\u6001\u5207\u6362\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;handleChange(&#39;A&#39;)&quot;&gt;\u663E\u793A A \u7EC4\u4EF6&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;handleChange(&#39;B&#39;)&quot;&gt;\u663E\u793A B \u7EC4\u4EF6&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;handleChange(&#39;C&#39;)&quot;&gt;\u663E\u793A C \u7EC4\u4EF6&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;component :is=&quot;component&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import componentA from &#39;../components/a.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import componentB from &#39;../components/b.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import componentC from &#39;../components/c.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        component: componentA</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      handleChange (component) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (component === &#39;A&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.component = componentA;</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (component === &#39;B&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.component = componentB;</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (component === &#39;C&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.component = componentC;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u7684 <code>is</code> \u52A8\u6001\u7ED1\u5B9A\u7684\u662F\u4E00\u4E2A\u7EC4\u4EF6\u5BF9\u8C61\uFF08Object\uFF09\uFF0C\u5B83\u76F4\u63A5\u6307\u5411 a / b / c \u4E09\u4E2A\u7EC4\u4EF6\u4E2D\u7684\u4E00\u4E2A\u3002\u9664\u4E86\u76F4\u63A5\u7ED1\u5B9A\u4E00\u4E2A Object\uFF0C\u8FD8\u53EF\u4EE5\u662F\u4E00\u4E2A String\uFF0C\u6BD4\u5982\u6807\u7B7E\u540D\u3001\u7EC4\u4EF6\u540D\u3002\u4E0B\u9762\u7684\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u5C06\u539F\u751F\u7684\u6309\u94AE button \u8FDB\u884C\u4E86\u5C01\u88C5\uFF0C\u5982\u679C\u4F20\u5165\u4E86 <code>prop: to</code>\uFF0C\u90A3\u5B83\u4F1A\u6E32\u67D3\u4E3A\u4E00\u4E2A <code>&lt;a&gt;</code> \u6807\u7B7E\uFF0C\u7528\u4E8E\u6253\u5F00\u8FD9\u4E2A\u94FE\u63A5\u5730\u5740\uFF0C\u5982\u679C\u6CA1\u6709\u4F20\u5165 <code>to</code>\uFF0C\u5C31\u5F53\u4F5C\u666E\u901A button \u4F7F\u7528\u3002\u6765\u770B\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- button.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;component :is=&quot;tagName&quot; v-bind=&quot;tagProps&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u94FE\u63A5\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">      to: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u94FE\u63A5\u6253\u5F00\u65B9\u5F0F\uFF0C\u5982 _blank</span></span>
<span class="line"><span style="color:#A6ACCD;">      target: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: &#39;_self&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u52A8\u6001\u6E32\u67D3\u4E0D\u540C\u7684\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">      tagName () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.to === &#39;&#39; ? &#39;button&#39; : &#39;a&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5982\u679C\u662F\u94FE\u63A5\uFF0C\u628A\u8FD9\u4E9B\u5C5E\u6027\u90FD\u7ED1\u5B9A\u5728 component \u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">      tagProps () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let props = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.to) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          props = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            target: this.target,</span></span>
<span class="line"><span style="color:#A6ACCD;">            href: this.to</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return props;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528\u7EC4\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-button&gt;\u666E\u901A\u6309\u94AE&lt;/i-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-button to=&quot;https://juejin.cn&quot;&gt;\u94FE\u63A5\u6309\u94AE&lt;/i-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-button to=&quot;https://juejin.cn&quot; target=&quot;_blank&quot;&gt;\u65B0\u7A97\u53E3\u6253\u5F00\u94FE\u63A5\u6309\u94AE&lt;/i-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import iButton from &#39;../components/a.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { iButton }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u7EC8\u4F1A\u6E32\u67D3\u51FA\u4E00\u4E2A\u539F\u751F\u7684 <code>&lt;button&gt;</code> \u6309\u94AE\u548C\u4E24\u4E2A\u539F\u751F\u7684\u94FE\u63A5 <code>&lt;a&gt;</code>\uFF0C\u4E14\u7B2C\u4E8C\u4E2A\u70B9\u51FB\u4F1A\u5728\u65B0\u7A97\u53E3\u4E2D\u6253\u5F00\u94FE\u63A5\uFF0C\u5982\u56FE\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/22/167398c004dc0c60~tplv-t2oaga2asx-image.image" alt=""></p><p>i-button \u7EC4\u4EF6\u4E2D\u7684 <code>&lt;component&gt;</code> <code>is</code> \u7ED1\u5B9A\u7684\u5C31\u662F\u4E00\u4E2A\u6807\u7B7E\u540D\u79F0 button / a\uFF0C\u5E76\u4E14\u901A\u8FC7 <code>v-bind</code> \u5C06\u4E00\u4E9B\u989D\u5916\u7684\u5C5E\u6027\u5168\u90E8\u7ED1\u5B9A\u5230\u4E86 <code>&lt;component&gt;</code> \u4E0A\u3002</p><p>\u518D\u56DE\u5230\u7B2C\u4E00\u4E2A a / b / c \u7EC4\u4EF6\u5207\u6362\u7684\u793A\u4F8B\uFF0C\u5982\u679C\u8FD9\u7C7B\u7684\u7EC4\u4EF6\uFF0C\u9891\u7E41\u5207\u6362\uFF0C\u4E8B\u5B9E\u4E0A\u7EC4\u4EF6\u662F\u4F1A\u91CD\u65B0\u6E32\u67D3\u7684\uFF0C\u6BD4\u5982\u6211\u4EEC\u5728\u7EC4\u4EF6 A \u91CC\u52A0\u4E24\u4E2A\u751F\u547D\u5468\u671F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- a.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u7EC4\u4EF6 A</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    mounted () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;\u7EC4\u4EF6\u521B\u5EFA\u4E86&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforeDestroy () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;\u7EC4\u4EF6\u9500\u6BC1\u4E86&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EA\u8981\u5207\u6362\u5230 A \u7EC4\u4EF6\uFF0C<code>mounted</code> \u5C31\u4F1A\u89E6\u53D1\u4E00\u6B21\uFF0C\u5207\u6362\u5230\u5176\u5B83\u7EC4\u4EF6\uFF0C<code>beforeDestroy</code> \u4E5F\u4F1A\u89E6\u53D1\u4E00\u6B21\uFF0C\u8BF4\u660E\u7EC4\u4EF6\u518D\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u6837\u6709\u53EF\u80FD\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\u3002\u4E3A\u4E86\u907F\u514D\u7EC4\u4EF6\u7684\u91CD\u590D\u6E32\u67D3\uFF0C\u53EF\u4EE5\u5728 <code>&lt;component&gt;</code> \u5916\u5C42\u5957\u4E00\u4E2A Vue.js \u5185\u7F6E\u7684 <code>&lt;keep-alive&gt;</code> \u7EC4\u4EF6\uFF0C\u8FD9\u6837\uFF0C\u7EC4\u4EF6\u5C31\u4F1A\u88AB\u7F13\u5B58\u8D77\u6765\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;component :is=&quot;component&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u65F6\uFF0C\u53EA\u6709 <code>mounted</code> \u89E6\u53D1\u4E86\uFF0C\u5982\u679C\u4E0D\u79BB\u5F00\u5F53\u524D\u9875\u9762\uFF0C\u5207\u6362\u5230\u5176\u5B83\u7EC4\u4EF6\uFF0C<code>beforeDestroy</code> \u4E0D\u4F1A\u88AB\u89E6\u53D1\uFF0C\u8BF4\u660E\u7EC4\u4EF6\u5DF2\u7ECF\u88AB\u7F13\u5B58\u4E86\u3002</p><p>keep-alive \u8FD8\u6709\u4E00\u4E9B\u989D\u5916\u7684 props \u53EF\u4EE5\u914D\u7F6E\uFF1A</p><ul><li><code>include</code>\uFF1A\u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u53EA\u6709\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u4F1A\u88AB\u7F13\u5B58\u3002</li><li><code>exclude</code>\uFF1A\u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u4EFB\u4F55\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u90FD\u4E0D\u4F1A\u88AB\u7F13\u5B58\u3002</li><li><code>max</code>\uFF1A\u6570\u5B57\u3002\u6700\u591A\u53EF\u4EE5\u7F13\u5B58\u591A\u5C11\u7EC4\u4EF6\u5B9E\u4F8B\u3002</li></ul><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>\u8FD8\u6709\u4E00\u7C7B\u662F\u5F02\u6B65\u7EC4\u4EF6\uFF0CVue.js \u6587\u6863\u5DF2\u7ECF\u4ECB\u7ECD\u7684\u5F88\u6E05\u695A\u4E86\uFF0C\u53EF\u4EE5\u9605\u8BFB\u6587\u672B\u7684\u6269\u5C55\u9605\u8BFB 1\u3002\u4E8B\u5B9E\u4E0A\u5F02\u6B65\u7EC4\u4EF6\u6211\u4EEC\u7528\u7684\u5F88\u591A\uFF0C\u6BD4\u5982 router \u7684\u914D\u7F6E\u5217\u8868\uFF0C\u4E00\u822C\u90FD\u662F\u7528\u7684\u5F02\u6B65\u7EC4\u4EF6\u5F62\u5F0F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  path: &#39;/form&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  component: () =&gt; import(&#39;./views/form.vue&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u6BCF\u4E2A\u9875\u9762\u624D\u4F1A\u5728\u8DEF\u7531\u5230\u65F6\u624D\u52A0\u8F7D\u5BF9\u5E94\u7684 JS \u6587\u4EF6\uFF0C\u5426\u5219\u5165\u53E3\u6587\u4EF6\u4F1A\u975E\u5E38\u5E9E\u5927\u3002</p><p>\u9012\u5F52\u7EC4\u4EF6\u3001\u52A8\u6001\u7EC4\u4EF6\u548C\u5F02\u6B65\u7EC4\u4EF6\u662F Vue.js \u4E2D\u76F8\u5BF9\u51B7\u95E8\u7684 3 \u79CD\u7EC4\u4EF6\u6A21\u5F0F\uFF0C\u4E0D\u8FC7\u5728\u5C01\u88C5\u590D\u6742\u7684\u72EC\u7ACB\u7EC4\u4EF6\u65F6\uFF0C\u524D\u4E24\u8005\u4F1A\u7ECF\u5E38\u4F7F\u7528\u3002</p><h2 id="\u6269\u5C55\u9605\u8BFB" tabindex="-1">\u6269\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><ul><li><a href="https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6" target="_blank" rel="noreferrer">\u5F02\u6B65\u7EC4\u4EF6</a></li></ul>`,43),t=[e];function o(c,A,C,i,r,y){return a(),n("div",null,t)}const g=s(p,[["render",o]]);export{D as __pageData,g as default};
