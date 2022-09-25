import{_ as s,c as n,o as a,d as l}from"./app.e5528619.js";const h=JSON.parse('{"title":"\u5B9E\u6218 2-\u7EC4\u5408\u591A\u9009\u6846\u7EC4\u4EF6\u2014\u2014CheckboxGroup & Checkbox","description":"","frontmatter":{},"headers":[{"level":2,"title":"Checkbox \u7EC4\u4EF6\u6982\u89C8","slug":"checkbox-\u7EC4\u4EF6\u6982\u89C8","link":"#checkbox-\u7EC4\u4EF6\u6982\u89C8","children":[]},{"level":2,"title":"\u5355\u72EC\u4F7F\u7528\u7684 Checkbox","slug":"\u5355\u72EC\u4F7F\u7528\u7684-checkbox","link":"#\u5355\u72EC\u4F7F\u7528\u7684-checkbox","children":[{"level":3,"title":"\u7EC4\u5408\u4F7F\u7528\u7684 CheckboxGroup","slug":"\u7EC4\u5408\u4F7F\u7528\u7684-checkboxgroup","link":"#\u7EC4\u5408\u4F7F\u7528\u7684-checkboxgroup","children":[]}]},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED","link":"#\u7ED3\u8BED","children":[]},{"level":2,"title":"\u6269\u5C55\u9605\u8BFB","slug":"\u6269\u5C55\u9605\u8BFB","link":"#\u6269\u5C55\u9605\u8BFB","children":[]}],"relativePath":"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u5B9E\u6218 2-\u7EC4\u5408\u591A\u9009\u6846\u7EC4\u4EF6\u2014\u2014CheckboxGroup and Checkbox.md"}'),p={name:"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u5B9E\u6218 2-\u7EC4\u5408\u591A\u9009\u6846\u7EC4\u4EF6\u2014\u2014CheckboxGroup and Checkbox.md"},e=l(`<h1 id="\u5B9E\u6218-2-\u7EC4\u5408\u591A\u9009\u6846\u7EC4\u4EF6\u2014\u2014checkboxgroup-checkbox" tabindex="-1">\u5B9E\u6218 2-\u7EC4\u5408\u591A\u9009\u6846\u7EC4\u4EF6\u2014\u2014CheckboxGroup &amp; Checkbox <a class="header-anchor" href="#\u5B9E\u6218-2-\u7EC4\u5408\u591A\u9009\u6846\u7EC4\u4EF6\u2014\u2014checkboxgroup-checkbox" aria-hidden="true">#</a></h1><hr><h1 id="\u5B9E\u6218-2\uFF1A\u7EC4\u5408\u591A\u9009\u6846\u7EC4\u4EF6\u2014\u2014checkboxgroup-checkbox" tabindex="-1">\u5B9E\u6218 2\uFF1A\u7EC4\u5408\u591A\u9009\u6846\u7EC4\u4EF6\u2014\u2014CheckboxGroup &amp; Checkbox <a class="header-anchor" href="#\u5B9E\u6218-2\uFF1A\u7EC4\u5408\u591A\u9009\u6846\u7EC4\u4EF6\u2014\u2014checkboxgroup-checkbox" aria-hidden="true">#</a></h1><p>\u5728\u7B2C 5 \u8282\uFF0C\u6211\u4EEC\u5B8C\u6210\u4E86\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u7EC4\u4EF6 Form\uFF0C\u672C\u5C0F\u8282\u7EE7\u7EED\u5F00\u53D1\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\u2014\u2014\u7EC4\u5408\u591A\u9009\u6846 Checkbox\u3002\u5B83\u4F5C\u4E3A\u57FA\u7840\u7EC4\u4EF6\uFF0C\u4E5F\u80FD\u96C6\u6210\u5728 Form \u5185\u5E76\u5E94\u7528\u5176\u9A8C\u8BC1\u89C4\u5219\u3002</p><h2 id="checkbox-\u7EC4\u4EF6\u6982\u89C8" tabindex="-1">Checkbox \u7EC4\u4EF6\u6982\u89C8 <a class="header-anchor" href="#checkbox-\u7EC4\u4EF6\u6982\u89C8" aria-hidden="true">#</a></h2><p>\u591A\u9009\u6846\u7EC4\u4EF6\u4E5F\u662F\u7531\u4E24\u4E2A\u7EC4\u4EF6\u7EC4\u6210\uFF1ACheckboxGroup \u548C Checkbox\u3002\u5355\u72EC\u4F7F\u7528\u65F6\uFF0C\u53EA\u9700\u8981\u4E00\u4E2A Checkbox\uFF0C\u7EC4\u5408\u4F7F\u7528\u65F6\uFF0C\u4E24\u8005\u90FD\u8981\u7528\u5230\u3002\u6548\u679C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/2/166d39853b7facd8~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5355\u72EC\u4F7F\u7528\uFF0C\u5E38\u89C1\u7684\u573A\u666F\u6709\u6CE8\u518C\u65F6\u52FE\u9009\u4EE5\u540C\u610F\u6CE8\u518C\u6761\u6B3E\uFF0C\u5B83\u53EA\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684 Checkbox \u7EC4\u4EF6\uFF0C\u5E76\u4E14\u7ED1\u5B9A\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;i-checkbox v-model=&quot;single&quot;&gt;\u5355\u72EC\u9009\u9879&lt;/i-checkbox&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        single: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u800C\u7EC4\u5408\u4F7F\u7528\u7684\u573A\u666F\u5C31\u5F88\u591A\u4E86\uFF0C\u586B\u5199\u8868\u5355\u65F6\u4F1A\u7ECF\u5E38\u7528\u5230\uFF0C\u5B83\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;i-checkbox-group v-model=&quot;multiple&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-checkbox label=&quot;option1&quot;&gt;\u9009\u9879 1&lt;/i-checkbox&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-checkbox label=&quot;option2&quot;&gt;\u9009\u9879 2&lt;/i-checkbox&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-checkbox label=&quot;option3&quot;&gt;\u9009\u9879 3&lt;/i-checkbox&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-checkbox label=&quot;option4&quot;&gt;\u9009\u9879 4&lt;/i-checkbox&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/i-checkbox-group&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        multiple: [&#39;option1&#39;, &#39;option3&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>v-model</code> \u7528\u5728\u4E86 CheckboxGroup \u4E0A\uFF0C\u7ED1\u5B9A\u7684\u503C\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u503C\u5C31\u662F\u5185\u90E8 Checkbox \u7ED1\u5B9A\u7684 label\u3002</p><p>\u7528\u6CD5\u770B\u8D77\u6765\u6BD4 Form \u8981\u7B80\u5355\u591A\uFF0C\u4E0D\u8FC7\u4E5F\u6709\u4E24\u4E2A\u4E2A\u6280\u672F\u96BE\u70B9\uFF1A</p><ul><li>Checkbox \u8981\u540C\u65F6\u652F\u6301\u5355\u72EC\u4F7F\u7528\u548C\u7EC4\u5408\u4F7F\u7528\u7684\u573A\u666F\uFF1B</li><li>CheckboxGroup \u548C Checkbox \u5185\u53EF\u80FD\u5D4C\u5957\u5176\u5B83\u7684\u5E03\u5C40\u7EC4\u4EF6\u3002</li></ul><p>\u5BF9\u4E8E\u7B2C\u4E00\u70B9\uFF0C\u8981\u5728 Checkbox \u521D\u59CB\u5316\u65F6\u5224\u65AD\u662F\u5426\u7236\u7EA7\u6709 CheckboxGroup\uFF0C\u5982\u679C\u6709\u5C31\u662F\u7EC4\u5408\u4F7F\u7528\u7684\uFF0C\u5426\u5219\u5C31\u662F\u5355\u72EC\u4F7F\u7528\u3002\u800C\u7B2C\u4E8C\u70B9\uFF0C\u6B63\u597D\u53EF\u4EE5\u7528\u4E0A\u4E00\u8282\u7684\u901A\u4FE1\u65B9\u6CD5\uFF0C\u5F88\u5BB9\u6613\u5C31\u80FD\u89E3\u51B3\u3002</p><p>\u4E24\u4E2A\u7EC4\u4EF6\u5E76\u884C\u5F00\u53D1\uFF0C\u4F1A\u5BB9\u6613\u7406\u4E0D\u6E05\u903B\u8F91\uFF0C\u4E0D\u59A8\u6211\u4EEC\u5148\u5F00\u53D1\u72EC\u7ACB\u7684 Checkbox \u7EC4\u4EF6\u3002</p><h2 id="\u5355\u72EC\u4F7F\u7528\u7684-checkbox" tabindex="-1">\u5355\u72EC\u4F7F\u7528\u7684 Checkbox <a class="header-anchor" href="#\u5355\u72EC\u4F7F\u7528\u7684-checkbox" aria-hidden="true">#</a></h2><p>\u8BBE\u8BA1\u4E00\u4E2A\u7EC4\u4EF6\u65F6\uFF0C\u8FD8\u662F\u8981\u4ECE\u5B83\u7684 3 \u4E2A API \u5165\u624B\uFF1Aprop\u3001event\u3001slot\u3002</p><p>\u56E0\u4E3A\u8981\u5728 Checkbox \u7EC4\u4EF6\u4E0A\u76F4\u63A5\u4F7F\u7528 <code>v-model</code> \u6765\u53CC\u5411\u7ED1\u5B9A\u6570\u636E\uFF0C\u90A3\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E00\u4E2A prop \u5C31\u662F <code>value</code>\uFF0C\u8FD8\u6709 event <code>input</code>\uFF0C\u56E0\u4E3A v-model \u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF08\u5982\u679C\u4F60\u8FD8\u4E0D\u6E05\u695A\u8FD9\u79CD\u7528\u6CD5\uFF0C\u53EF\u4EE5\u9605\u8BFB\u6700\u540E\u7684\u6269\u5C55\u9605\u8BFB 1\uFF09\u3002</p><p>\u7406\u8BBA\u4E0A\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7ED9 <code>value</code> \u8BBE\u7F6E\u4E3A\u5E03\u5C14\u503C\u5373\u53EF\uFF0C\u4E5F\u5C31\u662F true / false\uFF0C\u4E0D\u8FC7\u4E3A\u4E86\u6269\u5C55\u6027\uFF0C\u6211\u4EEC\u518D\u5B9A\u4E49\u4E24\u4E2A props\uFF1A<code>trueValue</code> \u548C <code>falseValue</code>\uFF0C\u5B83\u4EEC\u5141\u8BB8\u7528\u6237\u6307\u5B9A <code>value</code> \u7528\u4EC0\u4E48\u503C\u6765\u5224\u65AD\u662F\u5426\u9009\u4E2D\u3002\u56E0\u4E3A\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6570\u636E\u5E93\u4E2D\u5E76\u4E0D\u76F4\u63A5\u4FDD\u5B58 true / false\uFF0C\u800C\u662F 1 / 0 \u6216\u5176\u5B83\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u5F3A\u5236\u4F7F\u7528 Boolean\uFF0C\u4F7F\u7528\u8005\u5C31\u8981\u518D\u989D\u5916\u8F6C\u6362\u4E00\u6B21\uFF0C\u8FD9\u6837\u7684 API \u8BBE\u8BA1\u4E0D\u592A\u53CB\u597D\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u9700\u8981\u4E00\u4E2A <code>disabled</code> \u5C5E\u6027\u6765\u8868\u793A\u662F\u5426\u7981\u7528\u3002</p><p>\u81EA\u5B9A\u4E49\u4E8B\u4EF6 events \u4E0A\u6587\u5DF2\u7ECF\u8BF4\u4E86\u4E00\u4E2A <code>input</code>\uFF0C\u7528\u4E8E\u5B9E\u73B0 v-model \u8BED\u6CD5\u7CD6\uFF1B\u53E6\u4E00\u4E2A\u5C31\u662F <code>on-change</code>\uFF0C\u5F53\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1\uFF0C\u7528\u4E8E\u901A\u77E5\u7236\u7EA7\u72B6\u6001\u53D1\u751F\u4E86\u53D8\u5316\u3002</p><p>slot \u4F7F\u7528\u9ED8\u8BA4\u7684\u5C31\u597D\uFF0C\u663E\u793A\u8F85\u52A9\u6587\u672C\u3002</p><p>\u7406\u6E05\u695A\u4E86 API\uFF0C\u5148\u6765\u5199\u4E00\u4E2A\u57FA\u7840\u7684 <code>v-model</code> \u529F\u80FD\uFF0C\u8FD9\u5728\u5927\u90E8\u5206\u7EC4\u4EF6\u4E2D\u90FD\u7C7B\u4F3C\u3002</p><p>\u5728 <code>src/components</code> \u4E0B\u65B0\u5EFA\u76EE\u5F55 <code>checkbox</code>\uFF0C\u5E76\u65B0\u5EFA\u4E24\u4E2A\u6587\u4EF6 <code>checkbox.vue</code> \u548C <code>checkbox-group.vue</code>\u3002\u6211\u4EEC\u5148\u6765\u770B Checkbox\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- checkbox.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">             type=&quot;checkbox&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             :disabled=&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             :checked=&quot;currentValue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             @change=&quot;change&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;iCheckbox&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      disabled: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: [String, Number, Boolean],</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      trueValue: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: [String, Number, Boolean],</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      falseValue: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: [String, Number, Boolean],</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        currentValue: this.value</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      change (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.disabled) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        const checked = event.target.checked;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentValue = checked;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        const value = checked ? this.trueValue : this.falseValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;input&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;on-change&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u56E0\u4E3A <code>value</code> \u88AB\u5B9A\u4E49\u4E3A prop\uFF0C\u5B83\u53EA\u80FD\u7531\u7236\u7EA7\u4FEE\u6539\uFF0C\u672C\u8EAB\u662F\u4E0D\u80FD\u4FEE\u6539\u7684\uFF0C\u5728 <code>&lt;input&gt;</code> \u89E6\u53D1 change \u4E8B\u4EF6\uFF0C\u4E5F\u5C31\u662F\u70B9\u51FB\u9009\u62E9\u65F6\uFF0C\u4E0D\u80FD\u7531 Checkbox \u6765\u4FEE\u6539\u8FD9\u4E2A value\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728 data \u91CC\u5B9A\u4E49\u4E86\u4E00\u4E2A <code>currentValue</code>\uFF0C\u5E76\u628A\u5B83\u7ED1\u5B9A\u5728 <code>&lt;input :checked=&quot;currentValue&quot;&gt;</code>\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728 Checkbox \u5185\u4FEE\u6539 <code>currentValue</code>\u3002\u8FD9\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528 <code>v-model</code> \u7684\u201C\u60EF\u7528\u4F0E\u4FE9\u201D\u3002</p><p>\u4EE3\u7801\u770B\u8D77\u6765\u90FD\u5F88\u7B80\u5355\uFF0C\u4F46\u6709\u4E09\u4E2A\u7EC6\u8282\u9700\u8981\u989D\u5916\u8BF4\u660E\uFF1A</p><ol><li>\u9009\u4E2D\u7684\u63A7\u4EF6\uFF0C\u76F4\u63A5\u4F7F\u7528\u4E86 <code>&lt;input type=&quot;checkbox&quot;&gt;</code>\uFF0C\u800C\u6CA1\u6709\u7528 div + css \u6765\u81EA\u5DF1\u5B9E\u73B0\u9009\u62E9\u7684\u903B\u8F91\u548C\u6837\u5F0F\uFF0C\u8FD9\u6837\u7684\u597D\u5904\u662F\uFF0C\u4F7F\u7528 input \u5143\u7D20\uFF0C\u4F60\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4ECD\u7136\u4E3A html \u5185\u7F6E\u7684\u57FA\u7840\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668\u9ED8\u8BA4\u7684\u884C\u4E3A\u548C\u5FEB\u6377\u952E\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6D4F\u89C8\u5668\u77E5\u9053\u8FD9\u662F\u4E00\u4E2A\u9009\u62E9\u6846\uFF0C\u800C\u6362\u6210 div + css\uFF0C\u6D4F\u89C8\u5668\u53EF\u4E0D\u77E5\u9053\u8FD9\u662F\u4E2A\u4EC0\u4E48\u9B3C\u3002\u5982\u679C\u4F60\u89C9\u5F97\u539F\u751F\u7684 input \u4E11\uFF0C\u6CA1\u5173\u7CFB\uFF0C\u662F\u53EF\u4EE5\u7528 css \u7F8E\u5316\u7684\uFF0C\u4E0D\u8FC7\u8FD9\u4E0D\u662F\u672C\u5C0F\u518C\u7684\u91CD\u70B9\uFF0C\u5728\u6B64\u5C31\u4E0D\u4ECB\u7ECD\u4E86\u3002</li><li><code>&lt;input&gt;</code>\u3001<code>&lt;slot&gt;</code> \u90FD\u662F\u5305\u88F9\u5728\u4E00\u4E2A <code>&lt;label&gt;</code> \u5143\u7D20\u5185\u7684\uFF0C\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\uFF0C\u5F53\u70B9\u51FB <code>&lt;slot&gt;</code> \u91CC\u7684\u6587\u5B57\u65F6\uFF0C<code>&lt;input&gt;</code> \u9009\u6846\u4E5F\u4F1A\u88AB\u89E6\u53D1\uFF0C\u5426\u5219\u53EA\u6709\u70B9\u51FB\u90A3\u4E2A\u5C0F\u6846\u624D\u4F1A\u89E6\u53D1\uFF0C\u90A3\u6837\u4E0D\u592A\u5BB9\u6613\u9009\u4E2D\uFF0C\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u3002</li><li><code>currentValue</code> \u4ECD\u7136\u662F\u5E03\u5C14\u503C\uFF08true / false\uFF09\uFF0C\u56E0\u4E3A\u5B83\u662F\u7EC4\u4EF6 Checkbox \u81EA\u5DF1\u4F7F\u7528\u7684\uFF0C\u5BF9\u4E8E\u4F7F\u7528\u8005\u65E0\u9700\u5173\u5FC3\uFF0C\u800C value \u53EF\u4EE5\u662F String\u3001Number \u6216 Boolean\uFF0C\u8FD9\u53D6\u51B3\u4E8E <code>trueValue</code> \u548C <code>falseValue</code> \u7684\u5B9A\u4E49\u3002</li></ol><p>\u73B0\u5728\u5B9E\u73B0\u7684 <code>v-model</code>\uFF0C\u53EA\u662F\u7531\u5185\u800C\u5916\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u901A\u8FC7\u70B9\u51FB <code>&lt;input&gt;</code>\u9009\u62E9\uFF0C\u4F1A\u901A\u77E5\u5230\u4F7F\u7528\u8005\uFF0C\u800C\u4F7F\u7528\u8005\u624B\u52A8\u4FEE\u6539\u4E86 prop <code>value</code> \uFF0CCheckbox \u662F\u6CA1\u6709\u505A\u54CD\u5E94\u7684\uFF0C\u90A3\u7EE7\u7EED\u8865\u5145\u4EE3\u7801\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- checkbox.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (val === this.trueValue || val === this.falseValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.updateModel();</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          throw &#39;Value should be trueValue or falseValue.&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      updateModel () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentValue = this.value === this.trueValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u5BF9 prop <code>value</code> \u4F7F\u7528 watch \u8FDB\u884C\u4E86\u76D1\u542C\uFF0C\u5F53\u7236\u7EA7\u4FEE\u6539\u5B83\u65F6\uFF0C\u4F1A\u8C03\u7528 <code>updateModel</code> \u65B9\u6CD5\uFF0C\u540C\u6B65\u4FEE\u6539\u5185\u90E8\u7684 <code>currentValue</code> \u3002\u4E0D\u8FC7\uFF0C\u4E0D\u662F\u6240\u6709\u7684\u503C\u7236\u7EA7\u90FD\u80FD\u4FEE\u6539\u7684\uFF0C\u6240\u4EE5\u7528 if \u6761\u4EF6\u5224\u65AD\u4E86\u7236\u7EA7\u4FEE\u6539\u7684\u503C\u662F\u5426\u7B26\u5408 trueValue / falseValue \u6240\u8BBE\u7F6E\u7684\uFF0C\u5426\u5219\u4F1A\u629B\u9519\u3002</p><p>Checkbox \u4E5F\u662F\u4E00\u4E2A\u57FA\u7840\u7684\u8868\u5355\u7C7B\u7EC4\u4EF6\uFF0C\u5B83\u5B8C\u5168\u53EF\u4EE5\u96C6\u6210\u5230 Form \u91CC\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u4F7F\u7528 Emitter \u5728 change \u4E8B\u4EF6\u89E6\u53D1\u65F6\uFF0C\u5411 Form \u6D3E\u53D1\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u7528\u7B2C 5 \u8282\u7684 Form \u7EC4\u4EF6\u6765\u505A\u6570\u636E\u6821\u9A8C\u4E86\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- checkbox.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import Emitter from &#39;../../mixins/emitter.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    mixins: [ Emitter ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      change (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ... </span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;input&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;on-change&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.dispatch(&#39;iFormItem&#39;, &#39;on-form-change&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81F3\u6B64\uFF0CCheckbox \u5DF2\u7ECF\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\u4E86\uFF0C\u5E76\u652F\u6301 Form \u7684\u6570\u636E\u6821\u9A8C\u3002\u4E0B\u9762\u6765\u770B\u7EC4\u5408\u4F7F\u7528\u3002</p><h3 id="\u7EC4\u5408\u4F7F\u7528\u7684-checkboxgroup" tabindex="-1">\u7EC4\u5408\u4F7F\u7528\u7684 CheckboxGroup <a class="header-anchor" href="#\u7EC4\u5408\u4F7F\u7528\u7684-checkboxgroup" aria-hidden="true">#</a></h3><blockquote><p>\u53CB\u60C5\u63D0\u793A\uFF1A\u8BF7\u5148\u9605\u8BFB Vue.js \u6587\u6863\u7684 <a href="https://cn.vuejs.org/v2/guide/forms.html#%E5%A4%8D%E9%80%89%E6%A1%86" target="_blank" rel="noreferrer">https://cn.vuejs.org/v2/guide/forms.html#\u590D\u9009\u6846</a> \u5185\u5BB9\u3002</p></blockquote><p>CheckboxGroup \u7684 API \u5F88\u7B80\u5355\uFF1A</p><ul><li>props\uFF1A<code>value</code>\uFF0C\u4E0E Checkbox \u7684\u7C7B\u4F3C\uFF0C\u7528\u4E8E v-model \u53CC\u5411\u7ED1\u5B9A\u6570\u636E\uFF0C\u683C\u5F0F\u4E3A\u6570\u7EC4\uFF1B</li><li>events\uFF1A<code>on-change</code>\uFF0C\u540C Checkbox\uFF1B</li><li>slots\uFF1A\u9ED8\u8BA4\uFF0C\u7528\u4E8E\u653E\u7F6E Checkbox\u3002</li></ul><p>\u5982\u679C\u5199\u4E86 CheckboxGroup\uFF0C\u90A3\u5C31\u4EE3\u8868\u4F60\u8981\u7EC4\u5408\u4F7F\u7528\u591A\u9009\u6846\uFF0C\u800C\u975E\u5355\u72EC\u4F7F\u7528\uFF0C\u4E24\u79CD\u6A21\u5F0F\uFF0C\u53EA\u80FD\u7528\u5176\u4E00\uFF0C\u800C\u5224\u65AD\u7684\u4F9D\u636E\uFF0C\u5C31\u662F\u662F\u5426\u7528\u4E86 CheckboxGroup \u7EC4\u4EF6\u3002\u6240\u4EE5\u5728 Checkbox \u7EC4\u4EF6\u5185\uFF0C\u6211\u4EEC\u7528\u4E0A\u4E00\u8282\u7684 <code>findComponentUpward</code> \u65B9\u6CD5\u5224\u65AD\u7236\u7EC4\u4EF6\u662F\u5426\u6709 <code>CheckboxGroup</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- checkbox.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">             v-if=&quot;group&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             type=&quot;checkbox&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             :disabled=&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             :value=&quot;label&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             v-model=&quot;model&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             @change=&quot;change&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">             v-else</span></span>
<span class="line"><span style="color:#A6ACCD;">             type=&quot;checkbox&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             :disabled=&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             :checked=&quot;currentValue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             @change=&quot;change&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import { findComponentUpward } from &#39;../../utils/assist.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;iCheckbox&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      label: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: [String, Number, Boolean]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        model: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">        group: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        parent: null</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    mounted () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.parent = findComponentUpward(this, &#39;iCheckboxGroup&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.group = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.group) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.parent.updateModel(true);</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.updateModel();</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 mounted \u65F6\uFF0C\u901A\u8FC7 findComponentUpward \u65B9\u6CD5\uFF0C\u6765\u5224\u65AD\u7236\u7EA7\u662F\u5426\u6709 CheckboxGroup \u7EC4\u4EF6\uFF0C\u5982\u679C\u6709\uFF0C\u5C31\u5C06 <code>group</code> \u7F6E\u4E3A true\uFF0C\u5E76\u89E6\u53D1 CheckboxGroup \u7684 <code>updateModel</code> \u65B9\u6CD5\uFF0C\u4E0B\u6587\u4F1A\u4ECB\u7ECD\u5B83\u7684\u4F5C\u7528\u3002</p><p>\u5728 template \u91CC\uFF0C\u6211\u4EEC\u53C8\u5199\u4E86\u4E00\u4E2A <code>&lt;input&gt;</code> \u6765\u533A\u5206\u662F\u5426\u662F group \u6A21\u5F0F\u3002Checkbox \u7684 data \u91CC\u65B0\u589E\u52A0\u7684 <code>model</code> \u6570\u636E\uFF0C\u5176\u5B9E\u5C31\u662F\u7236\u7EA7 CheckboxGroup \u7684 <code>value</code>\uFF0C\u4F1A\u5728\u4E0B\u6587\u7684 <code>updateModel</code> \u65B9\u6CD5\u91CC\u7ED9 Checkbox \u8D4B\u503C\u3002</p><p>Checkbox \u65B0\u589E\u7684 prop\uFF1A <code>label</code> \u53EA\u4F1A\u5728\u7EC4\u5408\u4F7F\u7528\u65F6\u6709\u6548\uFF0C\u7ED3\u5408 <code>model</code> \u6765\u4F7F\u7528\uFF0C\u7528\u6CD5\u5DF2\u5728 Vue.js \u6587\u6863\u4E2D\u4ECB\u7ECD\u4E86 <a href="https://cn.vuejs.org/v2/guide/forms.html#%E5%A4%8D%E9%80%89%E6%A1%86" target="_blank" rel="noreferrer">https://cn.vuejs.org/v2/guide/forms.html#\u590D\u9009\u6846</a>\u3002</p><p>\u5728\u7EC4\u5408\u6A21\u5F0F\u4E0B\uFF0CCheckbox \u9009\u4E2D\uFF0C\u5C31\u4E0D\u7528\u5BF9 Form \u6D3E\u53D1\u4E8B\u4EF6\u4E86\uFF0C\u5E94\u8BE5\u5728 CheckboxGroup \u4E2D\u6D3E\u53D1\uFF0C\u6240\u4EE5\u5BF9 Checkbox \u505A\u6700\u540E\u7684\u4FEE\u6539\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- checkbox.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      change (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.disabled) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        const checked = event.target.checked;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentValue = checked;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        const value = checked ? this.trueValue : this.falseValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;input&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.group) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.parent.change(this.model);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.$emit(&#39;on-change&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.dispatch(&#39;iFormItem&#39;, &#39;on-form-change&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      updateModel () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentValue = this.value === this.trueValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5269\u4F59\u7684\u5DE5\u4F5C\uFF0C\u5C31\u662F\u5B8C\u6210 checkbox-gourp.vue \u6587\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- checkbox-group.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import { findComponentsDownward } from &#39;../../utils/assist.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import Emitter from &#39;../../mixins/emitter.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;iCheckboxGroup&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    mixins: [ Emitter ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        currentValue: this.value,</span></span>
<span class="line"><span style="color:#A6ACCD;">        childrens: []</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      updateModel (update) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.childrens = findComponentsDownward(this, &#39;iCheckbox&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.childrens) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          const { value } = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.childrens.forEach(child =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            child.model = value;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if (update) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              child.currentValue = value.indexOf(child.label) &gt;= 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">              child.group = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          });</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      change (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentValue = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;input&#39;, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;on-change&#39;, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.dispatch(&#39;iFormItem&#39;, &#39;on-form-change&#39;, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    mounted () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.updateModel(true);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.updateModel(true);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE3\u7801\u5F88\u5BB9\u6613\u7406\u89E3\uFF0C\u9700\u8981\u4ECB\u7ECD\u7684\u5C31\u662F <code>updateModel</code> \u65B9\u6CD5\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u4E00\u5171\u6709 3 \u4E2A\u5730\u65B9\u8C03\u7528\u4E86 <code>updateModel</code>\uFF0C\u5176\u4E2D\u4E24\u4E2A\u662F CheckboxGroup \u7684 mounted \u521D\u59CB\u5316\u548C watch \u76D1\u542C\u7684 value \u53D8\u5316\u65F6\u8C03\u7528\uFF1B\u53E6\u4E00\u4E2A\u662F\u5728 Checkbox \u91CC\u7684 mounted \u521D\u59CB\u5316\u65F6\u8C03\u7528\u3002\u8FD9\u4E2A\u65B9\u6CD5\u7684\u4F5C\u7528\u5C31\u662F\u5728 CheckboxGroup \u91CC\u901A\u8FC7 <code>findComponentsDownward</code> \u65B9\u6CD5\u627E\u5230\u6240\u6709\u7684 Checkbox\uFF0C\u7136\u540E\u628A CheckboxGroup \u7684 <code>value</code>\uFF0C\u8D4B\u503C\u7ED9 Checkbox \u7684 <code>model</code>\uFF0C\u5E76\u6839\u636E Checkbox \u7684 <code>label</code>\uFF0C\u8BBE\u7F6E\u4E00\u6B21\u5F53\u524D Checkbox \u7684\u9009\u4E2D\u72B6\u6001\u3002\u8FD9\u6837\u65E0\u8BBA\u662F\u7531\u5185\u800C\u5916\u9009\u62E9\uFF0C\u6216\u7531\u5916\u5411\u5185\u4FEE\u6539\u6570\u636E\uFF0C\u90FD\u662F\u53CC\u5411\u7ED1\u5B9A\u7684\uFF0C\u800C\u4E14\u652F\u6301\u52A8\u6001\u589E\u52A0 Checkbox \u7684\u6570\u91CF\u3002</p><p>\u4EE5\u4E0A\u5C31\u662F\u7EC4\u5408\u591A\u9009\u7EC4\u4EF6\u2014\u2014CheckboxGroup &amp; Checkbox \u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u4E0D\u77E5\u9053\u4F60\u662F\u5426 get \u5230\u4E86\u5462\uFF01</p><p>\u7559\u4E24\u4E2A\u5C0F\u4F5C\u4E1A\uFF1A</p><ol><li>\u5C06 CheckboxGroup \u548C Checkbox \u7EC4\u4EF6\u96C6\u6210\u5728 Form \u91CC\u5B8C\u6210\u4E00\u4E2A\u6570\u636E\u6821\u9A8C\u7684\u793A\u4F8B\uFF1B</li><li>\u53C2\u8003\u672C\u8282\u7684\u4EE3\u7801\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u5355\u9009\u7EC4\u4EF6 Radio \u548C RadioGroup\u3002</li></ol><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>\u4F60\u770B\u5230\u7684\u7B80\u5355\u7EC4\u4EF6\uFF0C\u5176\u5B9E\u90FD\u4E0D\u7B80\u5355\u3002</p><h2 id="\u6269\u5C55\u9605\u8BFB" tabindex="-1">\u6269\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844903490653782029" target="_blank" rel="noreferrer">v-model \u6307\u4EE4\u5728\u7EC4\u4EF6\u4E2D\u600E\u4E48\u73A9</a></li></ul><p>\u6CE8\uFF1A\u672C\u8282\u90E8\u5206\u4EE3\u7801\u53C2\u8003 <a href="https://github.com/iview/iview/tree/2.0/src/components/checkbox" target="_blank" rel="noreferrer">iView</a>\u3002</p>`,57),o=[e];function c(t,C,r,i,A,d){return a(),n("div",null,o)}const y=s(p,[["render",c]]);export{h as __pageData,y as default};
