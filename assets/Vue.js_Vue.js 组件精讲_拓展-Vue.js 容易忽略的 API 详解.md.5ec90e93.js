import{_ as e,c as p,a as s,t as a,d as l,b as n,o as t}from"./app.c4f45da1.js";const b=JSON.parse('{"title":"\u62D3\u5C55-Vue.js \u5BB9\u6613\u5FFD\u7565\u7684 API \u8BE6\u89E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"nextTick","slug":"nexttick","link":"#nexttick","children":[]},{"level":2,"title":"v-model \u8BED\u6CD5\u7CD6","slug":"v-model-\u8BED\u6CD5\u7CD6","link":"#v-model-\u8BED\u6CD5\u7CD6","children":[]},{"level":2,"title":".sync \u4FEE\u9970\u7B26","slug":"sync-\u4FEE\u9970\u7B26","link":"#sync-\u4FEE\u9970\u7B26","children":[]},{"level":2,"title":"$set","slug":"set","link":"#set","children":[]},{"level":2,"title":"\u8BA1\u7B97\u5C5E\u6027\u7684 set","slug":"\u8BA1\u7B97\u5C5E\u6027\u7684-set","link":"#\u8BA1\u7B97\u5C5E\u6027\u7684-set","children":[]},{"level":2,"title":"\u5269\u4F59\u503C\u5F97\u6CE8\u610F\u7684 API","slug":"\u5269\u4F59\u503C\u5F97\u6CE8\u610F\u7684-api","link":"#\u5269\u4F59\u503C\u5F97\u6CE8\u610F\u7684-api","children":[{"level":3,"title":"delimiters","slug":"delimiters","link":"#delimiters","children":[]},{"level":3,"title":"v-once","slug":"v-once","link":"#v-once","children":[]},{"level":3,"title":"vm.$isServer","slug":"vm-isserver","link":"#vm-isserver","children":[]},{"level":3,"title":"inheritAttrs","slug":"inheritattrs","link":"#inheritattrs","children":[]},{"level":3,"title":"errorHandler","slug":"errorhandler","link":"#errorhandler","children":[]},{"level":3,"title":"watch","slug":"watch","link":"#watch","children":[]},{"level":3,"title":"comments","slug":"comments","link":"#comments","children":[]},{"level":3,"title":"transition","slug":"transition","link":"#transition","children":[]}]},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED","link":"#\u7ED3\u8BED","children":[]}],"relativePath":"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u62D3\u5C55-Vue.js \u5BB9\u6613\u5FFD\u7565\u7684 API \u8BE6\u89E3.md"}'),o={name:"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u62D3\u5C55-Vue.js \u5BB9\u6613\u5FFD\u7565\u7684 API \u8BE6\u89E3.md"},c=l(`<h1 id="\u62D3\u5C55-vue-js-\u5BB9\u6613\u5FFD\u7565\u7684-api-\u8BE6\u89E3" tabindex="-1">\u62D3\u5C55-Vue.js \u5BB9\u6613\u5FFD\u7565\u7684 API \u8BE6\u89E3 <a class="header-anchor" href="#\u62D3\u5C55-vue-js-\u5BB9\u6613\u5FFD\u7565\u7684-api-\u8BE6\u89E3" aria-hidden="true">#</a></h1><hr><h1 id="\u62D3\u5C55\uFF1Avue-js-\u5BB9\u6613\u5FFD\u7565\u7684-api-\u8BE6\u89E3" tabindex="-1">\u62D3\u5C55\uFF1AVue.js \u5BB9\u6613\u5FFD\u7565\u7684 API \u8BE6\u89E3 <a class="header-anchor" href="#\u62D3\u5C55\uFF1Avue-js-\u5BB9\u6613\u5FFD\u7565\u7684-api-\u8BE6\u89E3" aria-hidden="true">#</a></h1><p>\u524D\u9762\u7684 15 \u5C0F\u8282\u5DF2\u7ECF\u8986\u76D6\u4E86 Vue.js \u7EC4\u4EF6\u7684\u7EDD\u5927\u90E8\u5206\u5185\u5BB9\uFF0C\u4F46\u8FD8\u662F\u6709\u4E00\u4E9B API \u5BB9\u6613\u5FFD\u7565\u3002\u672C\u8282\u5219\u5BF9 Vue.js \u7684\u4E00\u4E9B\u91CD\u8981\u4E14\u6613\u5FFD\u7565\u7684 API \u8FDB\u884C\u8BE6\u7EC6\u4ECB\u7ECD\u3002</p><h2 id="nexttick" tabindex="-1">nextTick <a class="header-anchor" href="#nexttick" aria-hidden="true">#</a></h2><p>nextTick \u662F Vue.js \u63D0\u4F9B\u7684\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u975E\u6D4F\u89C8\u5668\u5185\u7F6E\u3002nextTick \u51FD\u6570\u63A5\u6536\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570 <code>cb</code>\uFF0C\u5728\u4E0B\u4E00\u4E2A DOM \u66F4\u65B0\u5FAA\u73AF\u4E4B\u540E\u6267\u884C\u3002\u6BD4\u5982\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p v-if=&quot;show&quot; ref=&quot;node&quot;&gt;\u5185\u5BB9&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;handleShow&quot;&gt;\u663E\u793A&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        show: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      handleShow () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.show = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.$refs.node);  // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(this.$refs.node);  // &lt;p&gt;\u5185\u5BB9&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53 <code>show</code> \u88AB\u7F6E\u4E3A true \u65F6\uFF0C\u8FD9\u65F6 p \u8282\u70B9\u8FD8\u672A\u88AB\u6E32\u67D3\uFF0C\u56E0\u6B64\u6253\u5370\u51FA\u7684\u662F undefined\uFF0C\u800C\u5728 nextTick \u7684\u56DE\u8C03\u91CC\uFF0Cp \u5DF2\u7ECF\u6E32\u67D3\u597D\u4E86\uFF0C\u8FD9\u65F6\u80FD\u6B63\u786E\u6253\u5370\u51FA\u8282\u70B9\u3002</p><p>nextTick \u7684\u6E90\u7801\u5728 <a href="https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js" target="_blank" rel="noreferrer">https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js</a>\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0CVue.js \u4F7F\u7528\u4E86 <code>Promise</code>\u3001<code>setTimeout</code> \u548C <code>setImmediate</code> \u4E09\u79CD\u65B9\u6CD5\u6765\u5B9E\u73B0 nextTick\uFF0C\u5728\u4E0D\u540C\u73AF\u5883\u4F1A\u4F7F\u7528\u4E0D\u540C\u7684\u65B9\u6CD5\u3002</p><h2 id="v-model-\u8BED\u6CD5\u7CD6" tabindex="-1">v-model \u8BED\u6CD5\u7CD6 <a class="header-anchor" href="#v-model-\u8BED\u6CD5\u7CD6" aria-hidden="true">#</a></h2><p><code>v-model</code> \u5E38\u7528\u4E8E\u8868\u5355\u5143\u7D20\u4E0A\u8FDB\u884C\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A\uFF0C\u6BD4\u5982 <code>&lt;input&gt;</code>\u3002\u9664\u4E86\u539F\u751F\u7684\u5143\u7D20\uFF0C\u5B83\u8FD8\u80FD\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u3002</p><p>v-model \u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u53EF\u4EE5\u62C6\u89E3\u4E3A props: value \u548C events: input\u3002\u5C31\u662F\u8BF4\u7EC4\u4EF6\u5FC5\u987B\u63D0\u4F9B\u4E00\u4E2A\u540D\u4E3A value \u7684 prop\uFF0C\u4EE5\u53CA\u540D\u4E3A input \u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u6EE1\u8DB3\u8FD9\u4E24\u4E2A\u6761\u4EF6\uFF0C\u4F7F\u7528\u8005\u5C31\u80FD\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0A\u4F7F\u7528 <code>v-model</code>\u3002\u6BD4\u5982\u4E0B\u9762\u7684\u793A\u4F8B\uFF0C\u5B9E\u73B0\u4E86\u4E00\u4E2A\u6570\u5B57\u9009\u62E9\u5668\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;increase(-1)&quot;&gt;\u51CF 1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span style=&quot;color: red;padding: 6px&quot;&gt;{{ currentValue }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;increase(1)&quot;&gt;\u52A0 1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;InputNumber&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Number</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        currentValue: this.value</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentValue = val;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      increase (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentValue += val;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;input&#39;, this.currentValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>props \u4E00\u822C\u4E0D\u80FD\u5728\u7EC4\u4EF6\u5185\u4FEE\u6539\uFF0C\u5B83\u662F\u901A\u8FC7\u7236\u7EA7\u4FEE\u6539\u7684\uFF0C\u56E0\u6B64\u5B9E\u73B0 v-model \u4E00\u822C\u90FD\u4F1A\u6709\u4E00\u4E2A <code>currentValue</code> \u7684\u5185\u90E8 data\uFF0C\u521D\u59CB\u65F6\u4ECE value \u83B7\u53D6\u4E00\u6B21\u503C\uFF0C\u5F53 value \u4FEE\u6539\u65F6\uFF0C\u4E5F\u901A\u8FC7 watch \u76D1\u542C\u5230\u53CA\u65F6\u66F4\u65B0\uFF1B\u7EC4\u4EF6\u4E0D\u4F1A\u4FEE\u6539 value \u7684\u503C\uFF0C\u800C\u662F\u4FEE\u6539 currentValue\uFF0C\u540C\u65F6\u5C06\u4FEE\u6539\u7684\u503C\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6 <code>input</code> \u6D3E\u53D1\u7ED9\u7236\u7EC4\u4EF6\uFF0C\u7236\u7EC4\u4EF6\u63A5\u6536\u5230\u540E\uFF0C\u7531\u7236\u7EC4\u4EF6\u4FEE\u6539 value\u3002\u6240\u4EE5\uFF0C\u4E0A\u9762\u7684\u6570\u5B57\u9009\u62E9\u5668\u7EC4\u4EF6\u53EF\u4EE5\u6709\u4E0B\u9762\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;InputNumber v-model=&quot;value&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import InputNumber from &#39;../components/input-number/input-number.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { InputNumber },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6216\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;InputNumber :value=&quot;value&quot; @input=&quot;handleChange&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import InputNumber from &#39;../components/input-number/input-number.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { InputNumber },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      handleChange (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.value = val;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u4F60\u4E0D\u60F3\u7528 <code>value</code> \u548C <code>input</code> \u8FD9\u4E24\u4E2A\u540D\u5B57\uFF0C\u4ECE Vue.js 2.2.0 \u7248\u672C\u5F00\u59CB\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A <code>model</code> \u7684\u9009\u9879\uFF0C\u53EF\u4EE5\u6307\u5B9A\u5B83\u4EEC\u7684\u540D\u5B57\uFF0C\u6240\u4EE5\u6570\u5B57\u9009\u62E9\u5668\u7EC4\u4EF6\u4E5F\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;increase(-1)&quot;&gt;\u51CF 1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span style=&quot;color: red;padding: 6px&quot;&gt;{{ currentValue }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;increase(1)&quot;&gt;\u52A0 1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;InputNumber&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      number: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Number</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    model: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      prop: &#39;number&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      event: &#39;change&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        currentValue: this.number</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentValue = val;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      increase (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentValue += val;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;number&#39;, this.currentValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 model \u9009\u9879\u91CC\uFF0C\u5C31\u53EF\u4EE5\u6307\u5B9A prop \u548C event \u7684\u540D\u5B57\u4E86\uFF0C\u800C\u4E0D\u4E00\u5B9A\u975E\u8981\u7528 value \u548C input\uFF0C\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u540D\u5B57\u5728\u4E00\u4E9B\u539F\u751F\u8868\u5355\u5143\u7D20\u91CC\uFF0C\u6709\u5176\u5B83\u7528\u5904\u3002</p><h2 id="sync-\u4FEE\u9970\u7B26" tabindex="-1">.sync \u4FEE\u9970\u7B26 <a class="header-anchor" href="#sync-\u4FEE\u9970\u7B26" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u4F7F\u7528\u8FC7 Vue.js 1.x\uFF0C\u4E00\u5B9A\u5BF9 <code>.sync</code> \u4E0D\u964C\u751F\u3002\u5728 1.x \u91CC\uFF0C\u53EF\u4EE5\u4F7F\u7528 .sync \u53CC\u5411\u7ED1\u5B9A\u6570\u636E\uFF0C\u4E5F\u5C31\u662F\u7236\u7EC4\u4EF6\u6216\u5B50\u7EC4\u4EF6\u90FD\u80FD\u4FEE\u6539\u8FD9\u4E2A\u6570\u636E\uFF0C\u662F\u53CC\u5411\u54CD\u5E94\u7684\u3002\u5728 Vue.js 2.x \u91CC\u5E9F\u5F03\u4E86\u8FD9\u79CD\u7528\u6CD5\uFF0C\u76EE\u7684\u662F\u5C3D\u53EF\u80FD\u5C06\u7236\u5B50\u7EC4\u4EF6\u89E3\u8026\uFF0C\u907F\u514D\u5B50\u7EC4\u4EF6\u65E0\u610F\u4E2D\u4FEE\u6539\u4E86\u7236\u7EC4\u4EF6\u7684\u72B6\u6001\u3002</p><p>\u4E0D\u8FC7\u5728 Vue.js 2.3.0 \u7248\u672C\uFF0C\u53C8\u589E\u52A0\u4E86 <code>.sync</code> \u4FEE\u9970\u7B26\uFF0C\u4F46\u5B83\u7684\u7528\u6CD5\u4E0E 1.x \u7684\u4E0D\u5B8C\u5168\u76F8\u540C\u30022.x \u7684 .sync \u4E0D\u662F\u771F\u6B63\u7684\u53CC\u5411\u7ED1\u5B9A\uFF0C\u800C\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u4FEE\u6539\u6570\u636E\u8FD8\u662F\u5728\u7236\u7EC4\u4EF6\u5B8C\u6210\u7684\uFF0C\u5E76\u975E\u5728\u5B50\u7EC4\u4EF6\u3002</p><p>\u4ECD\u7136\u662F\u6570\u5B57\u9009\u62E9\u5668\u7684\u793A\u4F8B\uFF0C\u8FD9\u6B21\u4E0D\u7528 v-model\uFF0C\u800C\u662F\u7528 .sync\uFF0C\u53EF\u4EE5\u8FD9\u6837\u6539\u5199\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;increase(-1)&quot;&gt;\u51CF 1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span style=&quot;color: red;padding: 6px&quot;&gt;{{ value }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;increase(1)&quot;&gt;\u52A0 1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;InputNumber&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Number</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      increase (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;update:value&#39;, this.value + val);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7528\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;InputNumber :value.sync=&quot;value&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import InputNumber from &#39;../components/input-number/input-number.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { InputNumber },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u770B\u8D77\u6765\u8981\u6BD4 v-model \u7684\u5B9E\u73B0\u7B80\u5355\u591A\uFF0C\u5B9E\u73B0\u7684\u6548\u679C\u662F\u4E00\u6837\u7684\u3002v-model \u5728\u4E00\u4E2A\u7EC4\u4EF6\u4E2D\u53EA\u80FD\u6709\u4E00\u4E2A\uFF0C\u4F46 .sync \u53EF\u4EE5\u8BBE\u7F6E\u5F88\u591A\u4E2A\u3002.sync \u867D\u597D\uFF0C\u4F46\u4E5F\u6709\u9650\u5236\uFF0C\u6BD4\u5982\uFF1A</p><ul><li><strong>\u4E0D\u80FD</strong>\u548C\u8868\u8FBE\u5F0F\u4E00\u8D77\u4F7F\u7528\uFF08\u5982 <code>v-bind:title.sync=&quot;doc.title + &#39;!&#39;&quot;</code> \u662F\u65E0\u6548\u7684\uFF09\uFF1B</li><li><strong>\u4E0D\u80FD</strong>\u7528\u5728\u5B57\u9762\u91CF\u5BF9\u8C61\u4E0A\uFF08\u5982 <code>v-bind.sync=&quot;{ title: doc.title }&quot;</code> \u662F\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u7684\uFF09\u3002</li></ul><h2 id="set" tabindex="-1">$set <a class="header-anchor" href="#set" aria-hidden="true">#</a></h2><p>\u5728\u4E0A\u4E00\u8282\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7 <code>$set</code>\uFF0C\u6709\u4E24\u79CD\u60C5\u51B5\u4F1A\u7528\u5230\u5B83\uFF1A</p><ol><li><p>\u7531\u4E8E JavaScript \u7684\u9650\u5236\uFF0CVue \u4E0D\u80FD\u68C0\u6D4B\u4EE5\u4E0B\u53D8\u52A8\u7684\u6570\u7EC4\uFF1A</p><ol><li>\u5F53\u5229\u7528\u7D22\u5F15\u76F4\u63A5\u8BBE\u7F6E\u4E00\u4E2A\u9879\u65F6\uFF0C\u4F8B\u5982\uFF1A<code>this.items[index] = value</code>;</li><li>\u5F53\u4FEE\u6539\u6570\u7EC4\u7684\u957F\u5EA6\u65F6\uFF0C\u4F8B\u5982\uFF1A<code>vm.items.length = newLength</code>\u3002</li></ol></li><li><p>\u7531\u4E8E JavaScript \u7684\u9650\u5236\uFF0C<strong>Vue \u4E0D\u80FD\u68C0\u6D4B\u5BF9\u8C61\u5C5E\u6027\u7684\u6DFB\u52A0\u6216\u5220\u9664</strong>\u3002</p></li></ol><p>\u4E3E\u4F8B\u6765\u770B\uFF0C\u5C31\u662F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      items: [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.items[1] = &#39;x&#39;;  // \u4E0D\u662F\u54CD\u5E94\u6027\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528 <code>$set</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      items: [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$set(this.items, 1, &#39;x&#39;);  // \u662F\u54CD\u5E94\u6027\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u5BF9\u8C61\u4E3A\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      item: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        a: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.item.b = 2;  // \u4E0D\u662F\u54CD\u5E94\u6027\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528 <code>$set</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      item: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        a: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$set(this.item, &#39;b&#39;, 2);  // \u662F\u54CD\u5E94\u6027\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53E6\u5916\uFF0C\u6570\u7EC4\u7684\u4EE5\u4E0B\u65B9\u6CD5\uFF0C\u90FD\u662F<strong>\u53EF\u4EE5</strong>\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0\u7684\uFF0C\u4E5F\u5C31\u662F\u54CD\u5E94\u6027\u7684\uFF1A</p><p><code>push()</code>\u3001<code>pop()</code>\u3001<code>shift()</code>\u3001<code>unshift()</code>\u3001<code>splice()</code>\u3001<code>sort()</code>\u3001<code>reverse()</code>\u3002</p><p>\u8FD8\u6709\u4E00\u79CD\u5C0F\u6280\u5DE7\uFF0C\u5C31\u662F\u5148 copy \u4E00\u4E2A\u6570\u7EC4\uFF0C\u7136\u540E\u901A\u8FC7 index \u4FEE\u6539\u540E\uFF0C\u518D\u628A\u539F\u6570\u7EC4\u6574\u4E2A\u66FF\u6362\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">handler () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const data = [...this.items];</span></span>
<span class="line"><span style="color:#A6ACCD;">  data[1] = &#39;x&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.items = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u8BA1\u7B97\u5C5E\u6027\u7684-set" tabindex="-1">\u8BA1\u7B97\u5C5E\u6027\u7684 set <a class="header-anchor" href="#\u8BA1\u7B97\u5C5E\u6027\u7684-set" aria-hidden="true">#</a></h2><p>\u8BA1\u7B97\u5C5E\u6027\uFF08computed\uFF09\u5F88\u7B80\u5355\uFF0C\u800C\u4E14\u4E5F\u4F1A\u5927\u91CF\u4F7F\u7528\uFF0C\u4F46\u5927\u591A\u6570\u65F6\u5019\uFF0C\u6211\u4EEC\u53EA\u662F\u7528\u5B83\u9ED8\u8BA4\u7684 get \u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u5E73\u65F6\u7684\u5E38\u89C4\u5199\u6CD5\uFF0C\u901A\u8FC7 computed \u83B7\u53D6\u4E00\u4E2A\u4F9D\u8D56\u5176\u5B83\u72B6\u6001\u7684\u6570\u636E\u3002\u6BD4\u5982\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  fullName () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`\${this.firstName} \${this.lastName}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u7684 fullName \u4E8B\u5B9E\u4E0A\u53EF\u4EE5\u5199\u4E3A\u4E00\u4E2A Object\uFF0C\u800C\u975E Function\uFF0C\u53EA\u662F Function \u5F62\u5F0F\u662F\u6211\u4EEC\u9ED8\u8BA4\u4F7F\u7528\u5B83\u7684 get \u65B9\u6CD5\uFF0C\u5F53\u5199\u4E3A Object \u65F6\uFF0C\u8FD8\u80FD\u4F7F\u7528\u5B83\u7684 set \u65B9\u6CD5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  fullName: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    get () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return \`\${this.firstName} \${this.lastName}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    set (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const names = val.split(&#39; &#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.firstName = names[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.lastName = names[names.length - 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BA1\u7B97\u5C5E\u6027\u5927\u591A\u65F6\u5019\u53EA\u662F\u8BFB\u53D6\u7528\uFF0C\u4F7F\u7528\u4E86 set \u540E\uFF0C\u5C31\u53EF\u4EE5\u5199\u5165\u4E86\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684\u793A\u4F8B\uFF0C\u5982\u679C\u6267\u884C <code>this.fullName = &#39;Aresn Liang&#39;</code>\uFF0Ccomputed \u7684 set \u5C31\u4F1A\u8C03\u7528\uFF0CfirstName \u548C lastName \u4F1A\u88AB\u8D4B\u503C\u4E3A Aresn \u548C Liang\u3002</p><h2 id="\u5269\u4F59\u503C\u5F97\u6CE8\u610F\u7684-api" tabindex="-1">\u5269\u4F59\u503C\u5F97\u6CE8\u610F\u7684 API <a class="header-anchor" href="#\u5269\u4F59\u503C\u5F97\u6CE8\u610F\u7684-api" aria-hidden="true">#</a></h2><p>\u8FD8\u6709\u4E00\u4E9B API\uFF0C\u53EF\u80FD\u4E0D\u5E38\u7528\uFF0C\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9700\u77E5\u9053\u5C31\u597D\uFF0C\u672C\u518C\u4E0D\u8BE6\u7EC6\u5C55\u5F00\u4ECB\u7ECD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6307\u5F15\u5230 Vue.js \u6587\u6863\u67E5\u770B\u3002</p><h3 id="delimiters" tabindex="-1"><a href="https://cn.vuejs.org/v2/api/#delimiters" target="_blank" rel="noreferrer">delimiters</a> <a class="header-anchor" href="#delimiters" aria-hidden="true">#</a></h3>`,53),r=n("\u6539\u53D8\u7EAF\u6587\u672C\u63D2\u5165\u5206\u9694\u7B26\uFF0CVue.js \u9ED8\u8BA4\u7684\u662F "),i=n("\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u5176\u5B83\u4E00\u4E9B\u540E\u7AEF\u6A21\u677F\uFF0C\u6BD4\u5982 Python \u7684 Tornado \u6846\u67B6\uFF0C\u90A3 Vue.js \u548C Tornado \u7684 "),A=n(" \u5C31\u51B2\u7A81\u4E86\uFF0C\u8FD9\u65F6\u7528\u5B83\u53EF\u4EE5\u4FEE\u6539\u4E3A\u6307\u5B9A\u7684\u5206\u9694\u7B26\u3002"),C=l('<h3 id="v-once" tabindex="-1"><a href="https://cn.vuejs.org/v2/api/#v-once" target="_blank" rel="noreferrer">v-once</a> <a class="header-anchor" href="#v-once" aria-hidden="true">#</a></h3><p>\u53EA\u6E32\u67D3\u5143\u7D20\u548C\u7EC4\u4EF6<strong>\u4E00\u6B21</strong>\u3002\u968F\u540E\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C\u5143\u7D20/\u7EC4\u4EF6\u53CA\u5176\u6240\u6709\u7684\u5B50\u8282\u70B9\u5C06\u88AB\u89C6\u4E3A\u9759\u6001\u5185\u5BB9\u5E76\u8DF3\u8FC7\u3002\u8FD9\u53EF\u4EE5\u7528\u4E8E\u4F18\u5316\u66F4\u65B0\u6027\u80FD\u3002</p><h3 id="vm-isserver" tabindex="-1"><a href="https://cn.vuejs.org/v2/api/#vm-isServer" target="_blank" rel="noreferrer">vm.$isServer</a> <a class="header-anchor" href="#vm-isserver" aria-hidden="true">#</a></h3><p>\u5F53\u524D Vue \u5B9E\u4F8B\u662F\u5426\u8FD0\u884C\u4E8E\u670D\u52A1\u5668\uFF0C\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u8981\u517C\u5BB9 SSR\uFF0C\u5B83\u4F1A\u5F88\u6709\u7528\u3002</p><h3 id="inheritattrs" tabindex="-1"><a href="https://cn.vuejs.org/v2/api/#inheritAttrs" target="_blank" rel="noreferrer">inheritAttrs</a> <a class="header-anchor" href="#inheritattrs" aria-hidden="true">#</a></h3><p>\u4E00\u4E9B\u539F\u751F\u7684 html \u7279\u6027\uFF0C\u6BD4\u5982 <code>id</code>\uFF0C\u5373\u4F7F\u6CA1\u6709\u5B9A\u4E49 props\uFF0C\u4E5F\u4F1A\u88AB\u96C6\u6210\u5230\u7EC4\u4EF6\u6839\u8282\u70B9\u4E0A\uFF0C\u8BBE\u7F6E inheritAttrs \u4E3A false \u53EF\u4EE5\u5173\u95ED\u6B64\u7279\u6027\u3002</p><h3 id="errorhandler" tabindex="-1"><a href="https://cn.vuejs.org/v2/api/#errorHandler" target="_blank" rel="noreferrer">errorHandler</a> <a class="header-anchor" href="#errorhandler" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 <code>errorHandler</code> \u53EF\u4EE5\u8FDB\u884C\u5F02\u5E38\u4FE1\u606F\u7684\u83B7\u53D6\u3002</p><h3 id="watch" tabindex="-1"><a href="https://cn.vuejs.org/v2/api/#watch" target="_blank" rel="noreferrer">watch</a> <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h3><p>\u76D1\u542C\u72B6\u6001\u7684\u53D8\u5316\uFF0C\u7528\u7684\u4E5F\u5F88\u591A\u4E86\uFF0C\u4F46\u5B83\u548C computed \u4E00\u6837\uFF0C\u4E5F\u6709 Object \u7684\u5199\u6CD5\uFF0C\u8FD9\u6837\u80FD\u914D\u7F6E\u66F4\u591A\u7684\u9009\u9879\uFF0C\u6BD4\u5982\uFF1A</p><ul><li>handler \u6267\u884C\u7684\u51FD\u6570</li><li>deep \u662F\u5426\u6DF1\u5EA6</li><li>immediate \u662F\u5426\u7ACB\u5373\u6267\u884C</li></ul><p>\u5B8C\u6574\u7684\u914D\u7F6E\u53EF\u4EE5\u9605\u8BFB\u6587\u6863\u3002</p><h3 id="comments" tabindex="-1"><a href="https://cn.vuejs.org/v2/api/#comments" target="_blank" rel="noreferrer">comments</a> <a class="header-anchor" href="#comments" aria-hidden="true">#</a></h3><p>\u5F00\u542F\u4F1A\u4FDD\u7559 html \u6CE8\u91CA\u3002</p><h3 id="transition" tabindex="-1"><a href="https://cn.vuejs.org/v2/api/#transition" target="_blank" rel="noreferrer">transition</a> <a class="header-anchor" href="#transition" aria-hidden="true">#</a></h3><p>\u5185\u7F6E\u7684\u7EC4\u4EF6\uFF0C\u53EF\u505A\u8FC7\u6E21\u6548\u679C\uFF0C\u6BD4\u5982 CSS \u7684\u9AD8\u5EA6\u4ECE 0 \u5230 auto\uFF08\u4F7F\u7528\u7EAF CSS \u662F\u65E0\u6CD5\u5B9E\u73B0\u52A8\u753B\u7684\uFF09\u3002</p><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>\u5F7B\u5E95\u638C\u63E1\u4E00\u95E8\u8BED\u8A00\uFF08\u6846\u67B6\uFF09\uFF0C\u4E0D\u9700\u8981\u9605\u8BFB\u5B83\u6240\u6709\u7684\u6E90\u7801\uFF0C\u4F46\u81F3\u5C11\u8981\u9605\u8BFB\u5B83\u6240\u6709\u7684 <a href="https://cn.vuejs.org/v2/api/" target="_blank" rel="noreferrer">API</a>\u3002</p>',18);function d(u,y,D,h,g,v){return t(),p("div",null,[c,s("p",null,[r,s("code",null,a(),1),i,s("code",null,a(),1),A]),C])}const f=e(o,[["render",d]]);export{b as __pageData,f as default};
