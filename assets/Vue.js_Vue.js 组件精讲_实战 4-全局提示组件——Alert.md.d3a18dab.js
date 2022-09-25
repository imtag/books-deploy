import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const D=JSON.parse('{"title":"\u5B9E\u6218 4-\u5168\u5C40\u63D0\u793A\u7EC4\u4EF6\u2014\u2014$Alert","description":"","frontmatter":{},"headers":[{"level":2,"title":"1/3 \u5148\u628A\u7EC4\u4EF6\u5199\u597D","slug":"_1-3-\u5148\u628A\u7EC4\u4EF6\u5199\u597D","link":"#_1-3-\u5148\u628A\u7EC4\u4EF6\u5199\u597D","children":[]},{"level":2,"title":"2/3 \u5B9E\u4F8B\u5316\u5C01\u88C5","slug":"_2-3-\u5B9E\u4F8B\u5316\u5C01\u88C5","link":"#_2-3-\u5B9E\u4F8B\u5316\u5C01\u88C5","children":[]},{"level":2,"title":"3/3 \u5165\u53E3","slug":"_3-3-\u5165\u53E3","link":"#_3-3-\u5165\u53E3","children":[]},{"level":2,"title":"\u53CB\u60C5\u63D0\u793A","slug":"\u53CB\u60C5\u63D0\u793A","link":"#\u53CB\u60C5\u63D0\u793A","children":[]},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED","link":"#\u7ED3\u8BED","children":[]}],"relativePath":"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u5B9E\u6218 4-\u5168\u5C40\u63D0\u793A\u7EC4\u4EF6\u2014\u2014Alert.md"}'),p={name:"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u5B9E\u6218 4-\u5168\u5C40\u63D0\u793A\u7EC4\u4EF6\u2014\u2014Alert.md"},e=l(`<h1 id="\u5B9E\u6218-4-\u5168\u5C40\u63D0\u793A\u7EC4\u4EF6\u2014\u2014-alert" tabindex="-1">\u5B9E\u6218 4-\u5168\u5C40\u63D0\u793A\u7EC4\u4EF6\u2014\u2014$Alert <a class="header-anchor" href="#\u5B9E\u6218-4-\u5168\u5C40\u63D0\u793A\u7EC4\u4EF6\u2014\u2014-alert" aria-hidden="true">#</a></h1><hr><h1 id="\u5B9E\u6218-4\uFF1A\u5168\u5C40\u63D0\u793A\u7EC4\u4EF6\u2014\u2014-alert" tabindex="-1">\u5B9E\u6218 4\uFF1A\u5168\u5C40\u63D0\u793A\u7EC4\u4EF6\u2014\u2014$Alert <a class="header-anchor" href="#\u5B9E\u6218-4\uFF1A\u5168\u5C40\u63D0\u793A\u7EC4\u4EF6\u2014\u2014-alert" aria-hidden="true">#</a></h1><p>\u6709\u4E00\u79CD Vue.js \u7EC4\u4EF6\uFF0C\u5B83\u4E0D\u540C\u4E8E\u5E38\u89C4\u7684\u7EC4\u4EF6\uFF0C\u4F46\u7EC4\u4EF6\u7ED3\u6784\u672C\u8EAB\u5F88\u7B80\u5355\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u5168\u5C40\u63D0\u793A\u7EC4\u4EF6\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/10/166fcc05107e987c~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5B9E\u73B0\u8FD9\u6837\u4E00\u4E2A\u7EC4\u4EF6\u5E76\u4E0D\u96BE\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u7684\u51E0\u884C div \u548C css\uFF0C\u4F46\u4F7F\u7528\u8005\u53EF\u80FD\u8981\u8FD9\u6837\u6765\u663E\u793A\u7EC4\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Alert v-if=&quot;show&quot;&gt;\u8FD9\u662F\u4E00\u6761\u63D0\u793A\u4FE1\u606F&lt;/Alert&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;show = true&quot;&gt;\u663E\u793A&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import Alert from &#39;../component/alert.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { Alert },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        show: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u7684\u7528\u6CD5\uFF0C\u6709\u4EE5\u4E0B\u7F3A\u70B9\uFF1A</p><ul><li>\u6BCF\u4E2A\u4F7F\u7528\u7684\u5730\u65B9\uFF0C\u90FD\u5F97\u6CE8\u518C\u7EC4\u4EF6\uFF1B</li><li>\u9700\u8981\u9884\u5148\u5C06 <code>&lt;Alert&gt;</code> \u653E\u7F6E\u5728\u6A21\u677F\u4E2D\uFF1B</li><li>\u9700\u8981\u989D\u5916\u7684 data \u6765\u63A7\u5236 Alert \u7684\u663E\u793A\u72B6\u6001\uFF1B</li><li>Alert \u7684\u4F4D\u7F6E\uFF0C\u662F\u5728\u5F53\u524D\u7EC4\u4EF6\u4F4D\u7F6E\uFF0C\u5E76\u975E\u5728 body \u4E0B\uFF0C\u6709\u53EF\u80FD\u4F1A\u88AB\u5176\u5B83\u7EC4\u4EF6\u906E\u6321\u3002</li></ul><p>\u603B\u4E4B\u5BF9\u4F7F\u7528\u8005\u6765\u8BF4\u662F\u5F88\u4E0D\u53CB\u597D\u7684\uFF0C\u90A3\u600E\u6837\u624D\u80FD\u4F18\u96C5\u5730\u5B9E\u73B0\u8FD9\u6837\u4E00\u4E2A\u7EC4\u4EF6\u5462\uFF1F\u4E8B\u5B9E\u4E0A\uFF0C\u539F\u751F\u7684 JavaScript \u65E9\u5DF2\u7ED9\u51FA\u4E86\u7B54\u6848\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5168\u5C40\u63D0\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">window.alert(&#39;\u8FD9\u662F\u4E00\u6761\u63D0\u793A\u4FE1\u606F&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E8C\u6B21\u786E\u8BA4</span></span>
<span class="line"><span style="color:#A6ACCD;">const confirm = window.confirm(&#39;\u786E\u8BA4\u5220\u9664\u5417\uFF1F&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">if (confirm) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ok</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // cancel</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6240\u4EE5\uFF0C\u7ED3\u8BBA\u662F\uFF1A\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u80FD\u7528 JavaScript \u8C03\u7528\u7EC4\u4EF6\u7684 API\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528\u8FC7 iView \u4E4B\u7C7B\u7684\u7EC4\u4EF6\u5E93\uFF0C\u4E00\u5B9A\u5BF9\u5B83\u5185\u7F6E\u7684 $Message\u3001$Notice\u3001$Modal \u7B49\u7EC4\u4EF6\u5F88\u719F\u6089\uFF0C\u672C\u8282\u5C31\u6765\u5F00\u53D1\u4E00\u4E2A\u5168\u5C40\u901A\u77E5\u7EC4\u4EF6\u2014\u2014$Alert\u3002</p><h2 id="_1-3-\u5148\u628A\u7EC4\u4EF6\u5199\u597D" tabindex="-1">1/3 \u5148\u628A\u7EC4\u4EF6\u5199\u597D <a class="header-anchor" href="#_1-3-\u5148\u628A\u7EC4\u4EF6\u5199\u597D" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u671F\u671B\u6700\u7EC8\u7684 API \u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  handleShow () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$Alert({</span></span>
<span class="line"><span style="color:#A6ACCD;">      content: &#39;\u8FD9\u662F\u4E00\u6761\u63D0\u793A\u4FE1\u606F&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      duration: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>this.$Alert</code> \u53EF\u4EE5\u5728\u4EFB\u4F55\u4F4D\u7F6E\u8C03\u7528\uFF0C\u65E0\u9700\u5355\u72EC\u5F15\u5165\u3002\u8BE5\u65B9\u6CD5\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A</p><ul><li>content\uFF1A\u63D0\u793A\u5185\u5BB9\uFF1B</li><li>duration\uFF1A\u6301\u7EED\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\uFF0C\u9ED8\u8BA4 1.5 \u79D2\uFF0C\u5230\u65F6\u95F4\u81EA\u52A8\u6D88\u5931\u3002</li></ul><p>\u6700\u7EC8\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/10/166fcc09c43c2ad1~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6211\u4EEC\u4ECE\u6700\u7B80\u5355\u7684\u5165\u624B\uFF0C\u4E0D\u8003\u8651\u5176\u5B83\uFF0C\u5148\u5199\u4E00\u4E2A\u57FA\u672C\u7684 Alert \u7EC4\u4EF6\u3002</p><p>\u5728 <code>src/component</code> \u4E0B\u65B0\u5EFA <code>alert</code> \u76EE\u5F55\uFF0C\u5E76\u521B\u5EFA\u6587\u4EF6 <code>alert.vue</code>\uFF1A</p><p>\u901A\u77E5\u53EF\u4EE5\u662F\u591A\u4E2A\uFF0C\u6211\u4EEC\u7528\u4E00\u4E2A\u6570\u7EC4 <code>notices</code> \u6765\u7BA1\u7406\u6BCF\u6761\u901A\u77E5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- alert.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;alert&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;alert-main&quot; v-for=&quot;item in notices&quot; :key=&quot;item.name&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div class=&quot;alert-content&quot;&gt;{{ item.content }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        notices: []</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  .alert{</span></span>
<span class="line"><span style="color:#A6ACCD;">    position: fixed;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    top: 16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    left: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    text-align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    pointer-events: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  .alert-content{</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: inline-block;</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding: 8px 16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    background: #fff;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-radius: 3px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-bottom: 8px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Alert \u7EC4\u4EF6\u4E0D\u540C\u4E8E\u5E38\u89C4\u7684\u7EC4\u4EF6\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5B83\u6700\u7EC8\u662F\u901A\u8FC7 JS \u6765\u8C03\u7528\u7684\uFF0C\u56E0\u6B64\u7EC4\u4EF6\u4E0D\u7528\u9884\u7559 props \u548C events \u63A5\u53E3\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u53EA\u8981\u7ED9\u6570\u7EC4 <code>notices</code> \u589E\u52A0\u6570\u636E\uFF0C\u8FD9\u4E2A\u63D0\u793A\u7EC4\u4EF6\u5C31\u80FD\u663E\u793A\u5185\u5BB9\u4E86\uFF0C\u6211\u4EEC\u5148\u5047\u8BBE\uFF0C\u6700\u7EC8\u4F1A\u901A\u8FC7 JS \u8C03\u7528 Alert \u7684\u4E00\u4E2A\u65B9\u6CD5 <code>add</code>\uFF0C\u5E76\u5C06 <code>content</code> \u548C <code>duration</code> \u4F20\u5165\u8FDB\u6765\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- alert.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let seed = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function getUuid() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &#39;alert_&#39; + (seed++);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        notices: []</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      add (notice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const name = getUuid();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        let _notice = Object.assign({</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: name</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, notice);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.notices.push(_notice);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5B9A\u65F6\u79FB\u9664\uFF0C\u5355\u4F4D\uFF1A\u79D2</span></span>
<span class="line"><span style="color:#A6ACCD;">        const duration = notice.duration;</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.remove(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, duration * 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      remove (name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const notices = this.notices;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; notices.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (notices[i].name === name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.notices.splice(i, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            break;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 <code>add</code> \u65B9\u6CD5\u4E2D\uFF0C\u7ED9\u6BCF\u4E00\u6761\u4F20\u8FDB\u6765\u7684\u63D0\u793A\u6570\u636E\uFF0C\u52A0\u4E86\u4E00\u4E2A\u4E0D\u91CD\u590D\u7684 <code>name</code> \u5B57\u6BB5\u6765\u6807\u8BC6\uFF0C\u5E76\u901A\u8FC7 <code>setTimeout</code> \u521B\u5EFA\u4E86\u4E00\u4E2A\u8BA1\u65F6\u5668\uFF0C\u5F53\u5230\u8FBE\u6307\u5B9A\u7684 <code>duration</code> \u6301\u7EED\u65F6\u95F4\u540E\uFF0C\u8C03\u7528 <code>remove</code> \u65B9\u6CD5\uFF0C\u5C06\u5BF9\u5E94 <code>name</code> \u7684\u90A3\u6761\u63D0\u793A\u4FE1\u606F\u627E\u5230\uFF0C\u5E76\u4ECE\u6570\u7EC4\u4E2D\u79FB\u9664\u3002</p><p>\u7531\u8FD9\u4E2A\u601D\u8DEF\uFF0CAlert \u7EC4\u4EF6\u5C31\u53EF\u4EE5\u65E0\u9650\u6269\u5C55\uFF0C\u53EA\u8981\u5728 add \u65B9\u6CD5\u4E2D\u4F20\u9012\u66F4\u591A\u7684\u53C2\u6570\uFF0C\u5C31\u80FD\u652F\u6301\u66F4\u590D\u6742\u7684\u7EC4\u4EF6\uFF0C\u6BD4\u5982\u662F\u5426\u663E\u793A\u624B\u52A8\u5173\u95ED\u6309\u94AE\u3001\u786E\u5B9A / \u53D6\u6D88\u6309\u94AE\uFF0C\u751A\u81F3\u4F20\u5165\u4E00\u4E2A Render \u51FD\u6570\u90FD\u53EF\u4EE5\uFF0C\u5B8C\u6210\u672C\u4F8B\u540E\uFF0C\u8BFB\u8005\u53EF\u4EE5\u5C1D\u8BD5\u201D\u6539\u9020\u201C\u3002</p><h2 id="_2-3-\u5B9E\u4F8B\u5316\u5C01\u88C5" tabindex="-1">2/3 \u5B9E\u4F8B\u5316\u5C01\u88C5 <a class="header-anchor" href="#_2-3-\u5B9E\u4F8B\u5316\u5C01\u88C5" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u6B65\uFF0C\u6211\u4EEC\u5BF9 Alert \u7EC4\u4EF6\u8FDB\u4E00\u6B65\u5C01\u88C5\uFF0C\u8BA9\u5B83\u80FD\u591F\u5B9E\u4F8B\u5316\uFF0C\u800C\u4E0D\u662F\u5E38\u89C4\u7684\u7EC4\u4EF6\u4F7F\u7528\u65B9\u6CD5\u3002\u5B9E\u4F8B\u5316\u7EC4\u4EF6\u6211\u4EEC\u5728\u7B2C 8 \u8282\u4E2D\u4ECB\u7ECD\u8FC7\uFF0C\u53EF\u4EE5\u4F7F\u7528 Vue.extend \u6216 new Vue\uFF0C\u7136\u540E\u7528 $mount \u6302\u8F7D\u5230 body \u8282\u70B9\u4E0B\u3002</p><p>\u5728 <code>src/components/alert</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>notification.js</code> \u6587\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// notification.js</span></span>
<span class="line"><span style="color:#A6ACCD;">import Alert from &#39;./alert.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Alert.newInstance = properties =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const props = properties || {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const Instance = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: props,</span></span>
<span class="line"><span style="color:#A6ACCD;">    render (h) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return h(Alert, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        props: props</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const component = Instance.$mount();</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.body.appendChild(component.$el);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const alert = Instance.$children[0];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    add (noticeProps) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      alert.add(noticeProps);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    remove (name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      alert.remove(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default Alert;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>notification.js \u5E76\u4E0D\u662F\u6700\u7EC8\u7684\u6587\u4EF6\uFF0C\u5B83\u53EA\u662F\u5BF9 alert.vue \u6DFB\u52A0\u4E86\u4E00\u4E2A\u65B9\u6CD5 <code>newInstance</code>\u3002\u867D\u7136 alert.vue \u5305\u542B\u4E86 template\u3001script\u3001style \u4E09\u4E2A\u6807\u7B7E\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A JS \u5BF9\u8C61\uFF0C\u90A3\u600E\u4E48\u80FD\u591F\u7ED9\u5B83\u6269\u5C55\u4E00\u4E2A\u65B9\u6CD5 <code>newInstance</code> \u5462\uFF1F\u4E8B\u5B9E\u4E0A\uFF0Calert.vue \u4F1A\u88AB Webpack \u7684 vue-loader \u7F16\u8BD1\uFF0C\u628A template \u7F16\u8BD1\u4E3A Render \u51FD\u6570\uFF0C\u6700\u7EC8\u5C31\u4F1A\u6210\u4E3A\u4E00\u4E2A JS \u5BF9\u8C61\uFF0C\u81EA\u7136\u53EF\u4EE5\u5BF9\u5B83\u8FDB\u884C\u6269\u5C55\u3002</p><p>Alert \u7EC4\u4EF6\u6CA1\u6709\u4EFB\u4F55 props\uFF0C\u8FD9\u91CC\u5728 Render Alert \u7EC4\u4EF6\u65F6\uFF0C\u8FD8\u662F\u7ED9\u5B83\u52A0\u4E86 props\uFF0C\u5F53\u7136\uFF0C\u8FD9\u91CC\u7684 props \u662F\u7A7A\u5BF9\u8C61 {}\uFF0C\u800C\u4E14\u5373\u4F7F\u4F20\u4E86\u5185\u5BB9\uFF0C\u4E5F\u4E0D\u8D77\u4F5C\u7528\u3002\u8FD9\u6837\u505A\u7684\u76EE\u7684\u8FD8\u662F\u4E3A\u4E86\u6269\u5C55\u6027\uFF0C\u5982\u679C\u8981\u5728 Alert \u4E0A\u6DFB\u52A0 props \u6765\u652F\u6301\u66F4\u591A\u7279\u6027\uFF0C\u662F\u8981\u5728\u8FD9\u91CC\u4F20\u5165\u7684\u3002\u4E0D\u8FC7\u8BDD\u8BF4\u56DE\u6765\uFF0C\u56E0\u4E3A\u80FD\u62FF\u5230 Alert \u5B9E\u4F8B\uFF0C\u7528 data \u6216 props \u90FD\u662F\u53EF\u4EE5\u7684\u3002</p><p>\u5728\u7B2C 8 \u8282\u5DF2\u7ECF\u89E3\u91CA\u8FC7\uFF0C<code>const alert = Instance.$children[0];</code>\uFF0C\u8FD9\u91CC\u7684 alert \u5C31\u662F Render \u7684 Alert \u7EC4\u4EF6\u5B9E\u4F8B\u3002\u5728 <code>newInstance</code> \u91CC\uFF0C\u4F7F\u7528\u95ED\u5305\u66B4\u9732\u4E86\u4E24\u4E2A\u65B9\u6CD5 <code>add</code> \u548C <code>remove</code>\u3002\u8FD9\u91CC\u7684 add \u548C remove \u53EF\u4E0D\u662F alert.vue \u91CC\u7684 add \u548C remove\uFF0C\u5B83\u4EEC\u53EA\u662F\u540D\u5B57\u4E00\u6837\u3002</p><h2 id="_3-3-\u5165\u53E3" tabindex="-1">3/3 \u5165\u53E3 <a class="header-anchor" href="#_3-3-\u5165\u53E3" aria-hidden="true">#</a></h2><p>\u6700\u540E\u8981\u505A\u7684\uFF0C\u5C31\u662F\u8C03\u7528 notification.js \u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5E76\u901A\u8FC7 <code>add</code> \u628A\u6570\u636E\u4F20\u9012\u8FC7\u53BB\uFF0C\u8FD9\u662F\u7EC4\u4EF6\u5F00\u53D1\u7684\u6700\u540E\u4E00\u6B65\uFF0C\u4E5F\u662F\u6700\u7EC8\u7684\u5165\u53E3\u3002\u5728 <code>src/component/alert</code> \u4E0B\u521B\u5EFA\u6587\u4EF6 <code>alert.js</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// alert.js</span></span>
<span class="line"><span style="color:#A6ACCD;">import Notification from &#39;./notification.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let messageInstance;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function getMessageInstance () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  messageInstance = messageInstance || Notification.newInstance();</span></span>
<span class="line"><span style="color:#A6ACCD;">  return messageInstance;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function notice({ duration = 1.5, content = &#39;&#39; }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let instance = getMessageInstance();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  instance.add({</span></span>
<span class="line"><span style="color:#A6ACCD;">    content: content,</span></span>
<span class="line"><span style="color:#A6ACCD;">    duration: duration</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  info (options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return notice(options);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>getMessageInstance</code> \u51FD\u6570\u7528\u6765\u83B7\u53D6\u5B9E\u4F8B\uFF0C\u5B83\u4E0D\u4F1A\u91CD\u590D\u521B\u5EFA\uFF0C\u5982\u679C messageInstance \u5DF2\u7ECF\u5B58\u5728\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE\u4E86\uFF0C\u53EA\u5728\u7B2C\u4E00\u6B21\u8C03\u7528 Notification \u7684 <code>newInstance</code> \u65F6\u6765\u521B\u5EFA\u5B9E\u4F8B\u3002</p><p>alert.js \u5BF9\u5916\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u6CD5 <code>info</code>\uFF0C\u5982\u679C\u9700\u8981\u5404\u79CD\u663E\u793A\u6548\u679C\uFF0C\u6BD4\u5982\u6210\u529F\u7684\u3001\u5931\u8D25\u7684\u3001\u8B66\u544A\u7684\uFF0C\u53EF\u4EE5\u5728 info \u4E0B\u9762\u63D0\u4F9B\u66F4\u591A\u7684\u65B9\u6CD5\uFF0C\u6BD4\u5982 success\u3001fail\u3001warning \u7B49\uFF0C\u5E76\u4F20\u9012\u4E0D\u540C\u53C2\u6570\u8BA9 Alert.vue \u77E5\u9053\u663E\u793A\u54EA\u79CD\u72B6\u6001\u7684\u56FE\u6807\u3002\u672C\u4F8B\u56E0\u4E3A\u53EA\u6709\u4E00\u4E2A info\uFF0C\u4E8B\u5B9E\u4E0A\u4E5F\u53EF\u4EE5\u7701\u7565\u6389\uFF0C\u76F4\u63A5\u5BFC\u51FA\u4E00\u4E2A\u9ED8\u8BA4\u7684\u51FD\u6570\uFF0C\u8FD9\u6837\u5728\u8C03\u7528\u65F6\uFF0C\u5C31\u4E0D\u7528 <code>this.$Alert.info()</code> \u4E86\uFF0C\u76F4\u63A5 <code>this.$Alert()</code>\u3002</p><p>\u6765\u770B\u4E00\u4E0B\u663E\u793A\u4E00\u4E2A\u4FE1\u606F\u63D0\u793A\u7EC4\u4EF6\u7684\u6D41\u7A0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/10/166fcc0fe6df06d2~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6700\u540E\u628A alert.js \u4F5C\u4E3A\u63D2\u4EF6\u6CE8\u518C\u5230 Vue \u91CC\u5C31\u884C\uFF0C\u5728\u5165\u53E3\u6587\u4EF6 <code>src/main.js</code>\u4E2D\uFF0C\u901A\u8FC7 <code>prototype</code> \u7ED9 Vue \u6DFB\u52A0\u4E00\u4E2A\u5B9E\u4F8B\u65B9\u6CD5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// src/main.js</span></span>
<span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Alert from &#39;../src/components/alert/alert.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.config.productionTip = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.prototype.$Alert = Alert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  router,</span></span>
<span class="line"><span style="color:#A6ACCD;">  render: h =&gt; h(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">}).$mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u5728\u9879\u76EE\u4EFB\u4F55\u5730\u65B9\uFF0C\u90FD\u53EF\u4EE5\u901A\u8FC7 <code>this.$Alert</code> \u6765\u8C03\u7528 Alert \u7EC4\u4EF6\u4E86\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A alert \u7684\u8DEF\u7531\uFF0C\u5E76\u5728 <code>src/views</code> \u4E0B\u521B\u5EFA\u9875\u9762 <code>alert.vue</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- src/views/alert.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;handleOpen1&quot;&gt;\u6253\u5F00\u63D0\u793A 1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;handleOpen2&quot;&gt;\u6253\u5F00\u63D0\u793A 2&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      handleOpen1 () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$Alert.info({</span></span>
<span class="line"><span style="color:#A6ACCD;">          content: &#39;\u6211\u662F\u63D0\u793A\u4FE1\u606F 1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      handleOpen2 () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$Alert.info({</span></span>
<span class="line"><span style="color:#A6ACCD;">          content: &#39;\u6211\u662F\u63D0\u793A\u4FE1\u606F 2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          duration: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>duration</code> \u5982\u679C\u4E0D\u4F20\u5165\uFF0C\u9ED8\u8BA4\u662F 1.5 \u79D2\u3002</p><p>\u4EE5\u4E0A\u5C31\u662F\u5168\u5C40\u901A\u77E5\u7EC4\u4EF6\u7684\u5168\u90E8\u5185\u5BB9\u3002</p><h2 id="\u53CB\u60C5\u63D0\u793A" tabindex="-1">\u53CB\u60C5\u63D0\u793A <a class="header-anchor" href="#\u53CB\u60C5\u63D0\u793A" aria-hidden="true">#</a></h2><p>\u672C\u793A\u4F8B\u7B97\u662F\u4E00\u4E2A MVP\uFF08\u6700\u5C0F\u5316\u53EF\u884C\u65B9\u6848\uFF09\uFF0C\u8981\u5F00\u53D1\u4E00\u4E2A\u5B8C\u5584\u7684\u5168\u5C40\u901A\u77E5\u7EC4\u4EF6\uFF0C\u8FD8\u9700\u8981\u66F4\u591A\u53EF\u7EF4\u62A4\u6027\u548C\u529F\u80FD\u6027\u7684\u8BBE\u8BA1\uFF0C\u4F46\u79BB\u4E0D\u5F00\u672C\u4F8B\u7684\u8BBE\u8BA1\u601D\u8DEF\u3002\u4EE5\u4E0B\u51E0\u70B9\u662F\u540C\u7C7B\u7EC4\u4EF6\u4E2D\u503C\u5F97\u6CE8\u610F\u7684\uFF1A</p><ol><li>Alert.vue \u7684\u6700\u5916\u5C42\u662F\u6709\u4E00\u4E2A .alert \u8282\u70B9\u7684\uFF0C\u5B83\u4F1A\u5728\u7B2C\u4E00\u6B21\u8C03\u7528 <code>$Alert</code> \u65F6\uFF0C\u5728 body \u4E0B\u521B\u5EFA\uFF0C\u56E0\u4E3A\u4E0D\u5728 <code>&lt;router-view&gt;</code> \u5185\uFF0C\u5B83\u4E0D\u53D7\u8DEF\u7531\u7684\u5F71\u54CD\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E00\u7ECF\u521B\u5EFA\uFF0C\u9664\u975E\u5237\u65B0\u9875\u9762\uFF0C\u8FD9\u4E2A\u8282\u70B9\u662F\u4E0D\u4F1A\u6D88\u5931\u7684\uFF0C\u6240\u4EE5\u5728 alert.vue \u7684\u8BBE\u8BA1\u4E2D\uFF0C\u5E76\u6CA1\u6709\u4E3B\u52A8\u9500\u6BC1\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u800C\u662F\u7EF4\u62A4\u4E86\u4E00\u4E2A\u5B50\u8282\u70B9\u6570\u7EC4 <code>notices</code>\u3002</li><li>.alert \u8282\u70B9\u662F <code>position: fixed</code> \u56FA\u5B9A\u7684\uFF0C\u56E0\u6B64\u8981\u5408\u7406\u8BBE\u8BA1\u5B83\u7684 <code>z-index</code>\uFF0C\u5426\u5219\u53EF\u80FD\u88AB\u5176\u5B83\u8282\u70B9\u906E\u6321\u3002</li><li>notification.js \u548C alert.vue \u662F\u53EF\u4EE5\u590D\u7528\u7684\uFF0C\u5982\u679C\u8FD8\u8981\u5F00\u53D1\u5176\u5B83\u540C\u7C7B\u7684\u7EC4\u4EF6\uFF0C\u6BD4\u5982\u4E8C\u6B21\u786E\u8BA4\u7EC4\u4EF6 <code>$Confirm</code>, \u53EA\u9700\u8981\u518D\u5199\u4E00\u4E2A\u5165\u53E3 <code>confirm.js</code>\uFF0C\u5E76\u5C06 <code>alert.vue</code> \u8FDB\u4E00\u6B65\u5C01\u88C5\uFF0C\u5C06 <code>notices</code> \u6570\u7EC4\u7684\u5FAA\u73AF\u4F53\u5199\u4E3A\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u914D\u7F6E\u6765\u51B3\u5B9A\u662F\u6E32\u67D3 Alert \u8FD8\u662F Confirm\uFF0C\u8FD9\u5728\u53EF\u7EF4\u62A4\u6027\u4E0A\u662F\u53CB\u597D\u7684\u3002</li><li>\u5728 notification.js \u7684 new Vue \u65F6\uFF0C\u4F7F\u7528\u4E86 Render \u51FD\u6570\u6765\u6E32\u67D3 alert.vue\uFF0C\u8FD9\u662F\u56E0\u4E3A\u4F7F\u7528 template \u5728 runtime \u7684 Vue.js \u7248\u672C\u4E0B\u662F\u4F1A\u62A5\u9519\u7684\u3002</li><li>\u672C\u4F8B\u7684 content \u53EA\u80FD\u662F\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u8981\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9\uFF0C\u9664\u4E86\u7528 <code>v-html</code> \u6307\u4EE4\uFF0C\u4E5F\u80FD\u7528 Functional Render\uFF08\u4E4B\u540E\u7AE0\u8282\u4F1A\u4ECB\u7ECD\uFF09\u3002</li></ol><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>Vue.js \u7684\u7CBE\u9AD3\u662F\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u7684\u7CBE\u9AD3\u662F JavaScript\u3002\u5C06 JavaScript \u5F00\u53D1\u4E2D\u7684\u6280\u5DE7\u7ED3\u5408 Vue.js \u7EC4\u4EF6\uFF0C\u5C31\u80FD\u73A9\u51FA\u4E0D\u4E00\u6837\u7684\u4E1C\u897F\u3002</p><p>\u6CE8\uFF1A\u672C\u8282\u90E8\u5206\u4EE3\u7801\u53C2\u8003 <a href="https://github.com/iview/iview/tree/2.0/src/components/base/notification" target="_blank" rel="noreferrer">iView</a>\u3002</p>`,55),o=[e];function t(c,r,i,A,C,d){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{D as __pageData,u as default};
