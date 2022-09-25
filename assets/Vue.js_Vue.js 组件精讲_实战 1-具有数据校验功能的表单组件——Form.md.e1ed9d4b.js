import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const m=JSON.parse('{"title":"\u5B9E\u6218 1-\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014Form","description":"","frontmatter":{},"headers":[{"level":2,"title":"Form \u7EC4\u4EF6\u6982\u89C8","slug":"form-\u7EC4\u4EF6\u6982\u89C8","link":"#form-\u7EC4\u4EF6\u6982\u89C8","children":[]},{"level":2,"title":"\u63A5\u53E3\u8BBE\u8BA1","slug":"\u63A5\u53E3\u8BBE\u8BA1","link":"#\u63A5\u53E3\u8BBE\u8BA1","children":[]},{"level":2,"title":"\u5728 Form \u4E2D\u7F13\u5B58 FormItem \u5B9E\u4F8B","slug":"\u5728-form-\u4E2D\u7F13\u5B58-formitem-\u5B9E\u4F8B","link":"#\u5728-form-\u4E2D\u7F13\u5B58-formitem-\u5B9E\u4F8B","children":[]},{"level":2,"title":"\u89E6\u53D1\u6821\u9A8C","slug":"\u89E6\u53D1\u6821\u9A8C","link":"#\u89E6\u53D1\u6821\u9A8C","children":[]},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED","link":"#\u7ED3\u8BED","children":[]},{"level":2,"title":"\u6269\u5C55\u9605\u8BFB","slug":"\u6269\u5C55\u9605\u8BFB","link":"#\u6269\u5C55\u9605\u8BFB","children":[]}],"relativePath":"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u5B9E\u6218 1-\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014Form.md"}'),p={name:"Vue.js/Vue.js \u7EC4\u4EF6\u7CBE\u8BB2/\u5B9E\u6218 1-\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014Form.md"},e=l(`<h1 id="\u5B9E\u6218-1-\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014form" tabindex="-1">\u5B9E\u6218 1-\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014Form <a class="header-anchor" href="#\u5B9E\u6218-1-\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014form" aria-hidden="true">#</a></h1><hr><h1 id="\u5B9E\u6218-1\uFF1A\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014form" tabindex="-1">\u5B9E\u6218 1\uFF1A\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014Form <a class="header-anchor" href="#\u5B9E\u6218-1\uFF1A\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014form" aria-hidden="true">#</a></h1><p>\u5728\u7B2C 3 \u8282\u548C\u7B2C 4 \u8282\u4E2D\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u4E86\u7EC4\u4EF6\u95F4\u7684\u4E24\u79CD\u901A\u4FE1\u65B9\u6CD5\uFF1Aprovide / inject \u548C dispatch / broadcast\uFF0C\u524D\u8005\u662F Vue.js \u5185\u7F6E\u7684\uFF0C\u4E3B\u8981\u7528\u4E8E\u5B50\u7EC4\u4EF6\u83B7\u53D6\u7236\u7EC4\u4EF6\uFF08\u5305\u62EC\u8DE8\u7EA7\uFF09\u7684\u72B6\u6001\uFF1B\u540E\u8005\u662F\u81EA\u884C\u5B9E\u73B0\u7684\u4E00\u79CD\u6DF7\u5408\uFF0C\u7528\u4E8E\u7236\u5B50\u7EC4\u4EF6\uFF08\u5305\u62EC\u8DE8\u7EA7\uFF09\u95F4\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u901A\u4FE1\u3002\u672C\u5C0F\u8282\u5219\u57FA\u4E8E\u8FD9\u4E24\u79CD\u901A\u4FE1\u65B9\u6CD5\uFF0C\u6765\u5B9E\u73B0\u4E00\u4E2A\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014Form\u3002</p><h2 id="form-\u7EC4\u4EF6\u6982\u89C8" tabindex="-1">Form \u7EC4\u4EF6\u6982\u89C8 <a class="header-anchor" href="#form-\u7EC4\u4EF6\u6982\u89C8" aria-hidden="true">#</a></h2><p>\u8868\u5355\u7C7B\u7EC4\u4EF6\u5728\u9879\u76EE\u4E2D\u4F1A\u5927\u91CF\u4F7F\u7528\uFF0C\u6BD4\u5982\u8F93\u5165\u6846\uFF08Input\uFF09\u3001\u5355\u9009\uFF08Radio\uFF09\u3001\u591A\u9009\uFF08Checkbox\uFF09\u3001\u4E0B\u62C9\u9009\u62E9\u5668\uFF08Select\uFF09\u7B49\u3002\u5728\u4F7F\u7528\u8868\u5355\u7C7B\u7EC4\u4EF6\u65F6\uFF0C\u4E5F\u4F1A\u7ECF\u5E38\u7528\u5230\u6570\u636E\u6821\u9A8C\uFF0C\u5982\u679C\u6BCF\u6B21\u90FD\u5199\u6821\u9A8C\u7A0B\u5E8F\u6765\u5BF9\u6BCF\u4E00\u4E2A\u8868\u5355\u63A7\u4EF6\u6821\u9A8C\uFF0C\u4F1A\u5F88\u4F4E\u6548\uFF0C\u56E0\u6B64\u9700\u8981\u4E00\u4E2A\u80FD\u591F\u6821\u9A8C\u57FA\u7840\u8868\u5355\u63A7\u4EF6\u7684\u7EC4\u4EF6\uFF0C\u4E5F\u5C31\u662F\u672C\u8282\u8981\u5B8C\u6210\u7684 Form \u7EC4\u4EF6\u3002\u4E00\u822C\u7684\u7EC4\u4EF6\u5E93\u90FD\u63D0\u4F9B\u4E86\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u6BD4\u5982 iView\uFF0C\u5B83\u80FD\u591F\u6821\u9A8C\u5185\u7F6E\u7684 15 \u79CD\u63A7\u4EF6\uFF0C\u4E14\u652F\u6301\u6821\u9A8C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p>\uFF08\u4E5F\u53EF\u4EE5\u5728\u7EBF\u8BBF\u95EE\u672C\u793A\u4F8B\u4F53\u9A8C\uFF1A<a href="https://run.iviewui.com/jwrqnFss" target="_blank" rel="noreferrer">https://run.iviewui.com/jwrqnFss</a>\uFF09</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/30/166c3b75c37ef9a8~tplv-t2oaga2asx-image.image" alt=""></p><p>Form \u7EC4\u4EF6\u5206\u4E3A\u4E24\u4E2A\u90E8\u5206\uFF0C\u4E00\u4E2A\u662F\u5916\u5C42\u7684 <code>Form</code> \u8868\u5355\u57DF\u7EC4\u4EF6\uFF0C\u4E00\u7EC4\u8868\u5355\u63A7\u4EF6\u53EA\u6709\u4E00\u4E2A Form\uFF0C\u800C\u5185\u90E8\u5305\u542B\u4E86\u591A\u4E2A <code>FormItem</code> \u7EC4\u4EF6\uFF0C\u6BCF\u4E00\u4E2A\u8868\u5355\u63A7\u4EF6\u90FD\u88AB\u4E00\u4E2A FormItem \u5305\u88F9\u3002\u57FA\u672C\u7684\u7ED3\u6784\u770B\u8D77\u6765\u50CF\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;i-form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;i-form-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-input v-model=&quot;form.name&quot;&gt;&lt;/i-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/i-form-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;i-form-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-input v-model=&quot;form.mail&quot;&gt;&lt;/i-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/i-form-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/i-form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Form \u8981\u7528\u5230\u6570\u636E\u6821\u9A8C\uFF0C\u5E76\u5728\u5BF9\u5E94\u7684 FormItem \u4E2D\u7ED9\u51FA\u6821\u9A8C\u5931\u8D25\u7684\u63D0\u793A\uFF0C\u6821\u9A8C\u6211\u4EEC\u4F1A\u7528\u5230\u4E00\u4E2A\u5F00\u6E90\u5E93\uFF1A<a href="https://github.com/yiminghe/async-validator" target="_blank" rel="noreferrer">async-validator</a>\uFF0C\u57FA\u672C\u4E3B\u6D41\u7684\u7EC4\u4EF6\u5E93\u90FD\u662F\u57FA\u4E8E\u5B83\u505A\u7684\u6821\u9A8C\u3002\u4F7F\u7528\u5B83\u5F88\u7B80\u5355\uFF0C\u53EA\u9700\u6309\u8981\u6C42\u5199\u597D\u4E00\u4E2A\u6821\u9A8C\u89C4\u5219\u5C31\u597D\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  { required: true, message: &#39;\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A&#39;, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">  { type: &#39;email&#39;, message: &#39;\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E&#39;, trigger: &#39;blur&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u4EE3\u8868\u8981\u6821\u9A8C\u7684\u6570\u636E\u5148\u5224\u65AD\u662F\u5426\u4E3A\u7A7A\uFF08required: true\uFF09\uFF0C\u5982\u679C\u4E3A\u7A7A\uFF0C\u5219\u63D0\u793A\u201C\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A\u201D\uFF0C\u89E6\u53D1\u6821\u9A8C\u7684\u4E8B\u4EF6\u4E3A\u5931\u7126\uFF08trigger: &#39;blur&#39;\uFF09\uFF0C\u5982\u679C\u7B2C\u4E00\u6761\u6EE1\u8DB3\u8981\u6C42\uFF0C\u518D\u8FDB\u884C\u7B2C\u4E8C\u6761\u7684\u9A8C\u8BC1\uFF0C\u5224\u65AD\u662F\u5426\u4E3A\u90AE\u7BB1\u683C\u5F0F\uFF08type: &#39;email&#39;\uFF09\u7B49\u7B49\uFF0C\u8FD8\u652F\u6301\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002\u66F4\u8BE6\u7EC6\u7684\u7528\u6CD5\u53EF\u4EE5\u53C2\u770B\u5B83\u7684\u6587\u6863\u3002</p><h2 id="\u63A5\u53E3\u8BBE\u8BA1" tabindex="-1">\u63A5\u53E3\u8BBE\u8BA1 <a class="header-anchor" href="#\u63A5\u53E3\u8BBE\u8BA1" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5148\u4F7F\u7528\u6700\u65B0\u7684 Vue CLI 3 \u521B\u5EFA\u4E00\u4E2A\u7A7A\u767D\u7684\u9879\u76EE\uFF08\u5982\u679C\u4F60\u8FD8\u4E0D\u6E05\u695A Vue CLI 3 \u7684\u7528\u6CD5\uFF0C\u9700\u8981\u5148\u8865\u4E60\u4E00\u4E0B\u4E86\uFF0C\u53EF\u4EE5\u9605\u8BFB\u6587\u672B\u7684\u6269\u5C55\u9605\u8BFB 1\uFF09\uFF0C\u5E76\u4F7F\u7528 <code>vue-router</code> \u63D2\u4EF6\uFF0C\u540C\u65F6\u5B89\u88C5\u597D <code>async-validator</code> \u5E93\u3002</p><p>\u5728 <code>src/components</code> \u4E0B\u65B0\u5EFA\u4E00\u4E2A <code>form</code> \u6587\u4EF6\u5939\uFF0C\u5E76\u521D\u59CB\u5316\u4E24\u4E2A\u7EC4\u4EF6 <code>form.vue</code> \u548C <code>form-item.vue</code>\uFF0C\u7136\u540E\u521D\u59CB\u5316\u9879\u76EE\uFF0C\u914D\u7F6E\u8DEF\u7531\uFF0C\u521B\u5EFA\u4E00\u4E2A\u9875\u9762\u80FD\u591F\u88AB\u8BBF\u95EE\u5230\u3002</p><blockquote><p>\u672C\u8282\u6240\u6709\u4EE3\u7801\u53EF\u4EE5\u5728 <a href="https://github.com/icarusion/vue-component-book" target="_blank" rel="noreferrer">https://github.com/icarusion/vue-component-book</a> \u4E2D\u67E5\u770B\uFF0C\u4F60\u53EF\u4EE5\u4E00\u8FB9\u770B\u6E90\u7801\uFF0C\u4E00\u8FB9\u9605\u8BFB\u672C\u8282\uFF1B\u4E5F\u53EF\u4EE5\u8FB9\u9605\u8BFB\uFF0C\u8FB9\u52A8\u624B\u5B9E\u73B0\u4E00\u904D\uFF0C\u9047\u5230\u95EE\u9898\u518D\u53C2\u8003\u5B8C\u6574\u7684\u6E90\u7801\u3002</p></blockquote><p>\u7B2C 2 \u8282\u6211\u4EEC\u4ECB\u7ECD\u5230\uFF0C\u7F16\u5199\u4E00\u4E2A Vue.js \u7EC4\u4EF6\uFF0C\u6700\u91CD\u8981\u7684\u662F\u8BBE\u8BA1\u597D\u5B83\u7684\u63A5\u53E3\uFF0C\u4E00\u4E2A Vue.js \u7EC4\u4EF6\u7684\u63A5\u53E3\u6765\u81EA\u4E09\u4E2A\u90E8\u5206\uFF1Aprops\u3001slots\u3001events\u3002\u800C Form \u548C FormItem \u4E24\u4E2A\u7EC4\u4EF6\u4E3B\u8981\u505A\u6570\u636E\u6821\u9A8C\uFF0C\u7528\u4E0D\u5230 events\u3002Form \u7684 slot \u5C31\u662F\u4E00\u7CFB\u5217\u7684 FormItem\uFF0CFormItem \u7684 slot \u5C31\u662F\u5177\u4F53\u7684\u8868\u5355\u63A7\u4EF6\uFF0C\u6BD4\u5982\u8F93\u5165\u6846 <code>&lt;i-input&gt;</code> \u3002\u90A3\u4E3B\u8981\u8BBE\u8BA1\u7684\u5C31\u662F props \u4E86\u3002</p><p>\u5728 <code>Form</code> \u7EC4\u4EF6\u4E2D\uFF0C\u5B9A\u4E49\u4E24\u4E2A props\uFF1A</p><ul><li>model\uFF1A\u8868\u5355\u63A7\u4EF6\u7ED1\u5B9A\u7684\u6570\u636E\u5BF9\u8C61\uFF0C\u5728\u6821\u9A8C\u6216\u91CD\u7F6E\u65F6\u4F1A\u8BBF\u95EE\u8BE5\u6570\u636E\u5BF9\u8C61\u4E0B\u5BF9\u5E94\u7684\u8868\u5355\u6570\u636E\uFF0C\u7C7B\u578B\u4E3A Object\u3002</li><li>rules\uFF1A\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5373\u4E0A\u9762\u4ECB\u7ECD\u7684 async-validator \u6240\u4F7F\u7528\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u7C7B\u578B\u4E3A Object\u3002</li></ul><p>\u5728 <code>FormItem</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4E5F\u5B9A\u4E49\u4E24\u4E2A props\uFF1A</p><ul><li>label\uFF1A\u5355\u4E2A\u8868\u5355\u7EC4\u4EF6\u7684\u6807\u7B7E\u6587\u672C\uFF0C\u7C7B\u4F3C\u539F\u751F\u7684 <code>&lt;label&gt;</code> \u5143\u7D20\uFF0C\u7C7B\u578B\u4E3A String\u3002</li><li>prop\uFF1A\u5BF9\u5E94\u8868\u5355\u57DF Form \u7EC4\u4EF6 model \u91CC\u7684\u5B57\u6BB5\uFF0C\u7528\u4E8E\u5728\u6821\u9A8C\u6216\u91CD\u7F6E\u65F6\u8BBF\u95EE\u8868\u5355\u7EC4\u4EF6\u7ED1\u5B9A\u7684\u6570\u636E\uFF0C\u7C7B\u578B\u4E3A String\u3002</li></ul><p>\u5B9A\u4E49\u597D props\uFF0C\u5C31\u53EF\u4EE5\u5199\u51FA\u5927\u6982\u7684\u7528\u4F8B\u4E86\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-form :model=&quot;formValidate&quot; :rules=&quot;ruleValidate&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;i-form-item label=&quot;\u7528\u6237\u540D&quot; prop=&quot;name&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;i-input v-model=&quot;formValidate.name&quot;&gt;&lt;/i-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/i-form-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;i-form-item label=&quot;\u90AE\u7BB1&quot; prop=&quot;mail&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;i-input v-model=&quot;formValidate.mail&quot;&gt;&lt;/i-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/i-form-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/i-form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import iForm from &#39;../components/form/form.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import iFormItem from &#39;../components/form/form-item.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import iInput from &#39;../components/input/input.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { iForm, iFormItem, iInput },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        formValidate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          mail: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ruleValidate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            { required: true, message: &#39;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&#39;, trigger: &#39;blur&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">          ],</span></span>
<span class="line"><span style="color:#A6ACCD;">          mail: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            { required: true, message: &#39;\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A&#39;, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">            { type: &#39;email&#39;, message: &#39;\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E&#39;, trigger: &#39;blur&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">          ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6709\u4E24\u70B9\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A</p><ol><li>\u8FD9\u91CC\u7684 <code>&lt;i-input&gt;</code> \u5E76\u4E0D\u662F\u539F\u751F\u7684 <code>&lt;input&gt;</code> \u8F93\u5165\u6846\uFF0C\u800C\u662F\u4E00\u4E2A\u7279\u5236\u7684\u8F93\u5165\u6846\u7EC4\u4EF6\uFF0C\u4E4B\u540E\u4F1A\u4ECB\u8BB2\u89E3\u7684\u529F\u80FD\u548C\u4EE3\u7801\uFF1B</li><li><code>&lt;i-form-item&gt;</code> \u7684\u5C5E\u6027 <code>prop</code> \u662F\u5B57\u7B26\u4E32\uFF0C\u6240\u4EE5\u5B83\u524D\u9762\u6CA1\u6709\u5192\u53F7\uFF08\u5373\u4E0D\u662F <code>:prop=&quot;name&quot;</code>\uFF09\u3002</li></ol><p>\u5F53\u524D\u7684\u4E24\u4E2A\u7EC4\u4EF6\u53EA\u662F\u4E2A\u6846\u6846\uFF0C\u8FD8\u6CA1\u6709\u5B9E\u73B0\u4EFB\u4F55\u529F\u80FD\uFF0C\u4E0D\u8FC7\u4E07\u4E8B\u5F00\u5934\u96BE\uFF0C\u5B9A\u4E49\u597D\u63A5\u53E3\uFF0C\u5269\u4E0B\u7684\u5C31\u662F\u8865\u5168\u7EC4\u4EF6\u7684\u903B\u8F91\uFF0C\u800C\u5BF9\u4E8E\u4F7F\u7528\u8005\uFF0C\u77E5\u9053\u4E86 props\u3001events\u3001slots\uFF0C\u5C31\u5DF2\u7ECF\u80FD\u5199\u51FA\u4E0A\u4F8B\u7684\u4F7F\u7528\u4EE3\u7801\u4E86\u3002</p><p>\u5230\u6B64\uFF0CForm \u548C FormItem \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- form.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;iForm&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      model: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Object</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      rules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Object</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- form-item.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;label v-if=&quot;label&quot;&gt;{{ label }}&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;iFormItem&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      label: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      prop: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: String</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5728-form-\u4E2D\u7F13\u5B58-formitem-\u5B9E\u4F8B" tabindex="-1">\u5728 Form \u4E2D\u7F13\u5B58 FormItem \u5B9E\u4F8B <a class="header-anchor" href="#\u5728-form-\u4E2D\u7F13\u5B58-formitem-\u5B9E\u4F8B" aria-hidden="true">#</a></h2><p><code>Form</code> \u7EC4\u4EF6\u7684\u6838\u5FC3\u529F\u80FD\u662F\u6570\u636E\u6821\u9A8C\uFF0C\u4E00\u4E2A Form \u4E2D\u5305\u542B\u4E86\u591A\u4E2A FormItem\uFF0C\u5F53\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u65F6\uFF0C\u8981\u9010\u4E00\u5BF9\u6BCF\u4E2A FormItem \u5185\u7684\u8868\u5355\u7EC4\u4EF6\u6821\u9A8C\uFF0C\u800C\u6821\u9A8C\u662F\u7531\u4F7F\u7528\u8005\u53D1\u8D77\uFF0C\u5E76\u901A\u8FC7 <code>Form</code> \u6765\u8C03\u7528\u6BCF\u4E00\u4E2A <code>FormItem</code> \u7684\u9A8C\u8BC1\u65B9\u6CD5\uFF0C\u518D\u5C06\u6821\u9A8C\u7ED3\u679C\u6C47\u603B\u540E\uFF0C\u901A\u8FC7 <code>Form</code> \u8FD4\u56DE\u51FA\u53BB\u3002\u5927\u81F4\u7684\u6D41\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/30/166c3b7f124cb84a~tplv-t2oaga2asx-image.image" alt=""></p><p>\u56E0\u4E3A\u8981\u5728 Form \u4E2D\u9010\u4E00\u8C03\u7528 FormItem \u7684\u9A8C\u8BC1\u65B9\u6CD5\uFF0C\u800C Form \u548C FormItem \u662F\u72EC\u7ACB\u7684\uFF0C\u9700\u8981\u9884\u5148\u5C06 FormItem \u7684\u6BCF\u4E2A\u5B9E\u4F8B\u7F13\u5B58\u5728 Form \u4E2D\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u5C31\u9700\u8981\u7528\u5230\u7B2C 4 \u8282\u7684\u7EC4\u4EF6\u901A\u4FE1\u65B9\u6CD5\u3002\u5F53\u6BCF\u4E2A FormItem \u6E32\u67D3\u65F6\uFF0C\u5C06\u5176\u81EA\u8EAB\uFF08this\uFF09\u4F5C\u4E3A\u53C2\u6570\u901A\u8FC7 <code>dispatch</code> \u6D3E\u53D1\u5230 Form \u7EC4\u4EF6\u4E2D\uFF0C\u7136\u540E\u901A\u8FC7\u4E00\u4E2A\u6570\u7EC4\u7F13\u5B58\u8D77\u6765\uFF1B\u540C\u7406\u5F53 FormItem \u9500\u6BC1\u65F6\uFF0C\u5C06\u5176\u4ECE Form \u7F13\u5B58\u7684\u6570\u7EC4\u4E2D\u79FB\u9664\u3002\u76F8\u5173\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// form-item.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import Emitter from &#39;../../mixins/emitter.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;iFormItem&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  mixins: [ Emitter ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7EC4\u4EF6\u6E32\u67D3\u65F6\uFF0C\u5C06\u5B9E\u4F8B\u7F13\u5B58\u5728 Form \u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">  mounted () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5982\u679C\u6CA1\u6709\u4F20\u5165 prop\uFF0C\u5219\u65E0\u9700\u6821\u9A8C\uFF0C\u4E5F\u5C31\u65E0\u9700\u7F13\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.prop) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.dispatch(&#39;iForm&#39;, &#39;on-form-item-add&#39;, this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7EC4\u4EF6\u9500\u6BC1\u524D\uFF0C\u5C06\u5B9E\u4F8B\u4ECE Form \u7684\u7F13\u5B58\u4E2D\u79FB\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeDestroy () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.dispatch(&#39;iForm&#39;, &#39;on-form-item-remove&#39;, this);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\uFF0CVue.js \u7684\u7EC4\u4EF6\u6E32\u67D3\u987A\u5E8F\u662F\u7531\u5185\u800C\u5916\u7684\uFF0C\u6240\u4EE5 FormItem \u8981\u5148\u4E8E Form \u6E32\u67D3\uFF0C\u5728 FormItem \u7684 mounted \u89E6\u53D1\u65F6\uFF0C\u6211\u4EEC\u5411 Form \u6D3E\u53D1\u4E86\u4E8B\u4EF6 <code>on-form-item-add</code>\uFF0C\u5E76\u5C06\u5F53\u524D FormItem \u7684\u5B9E\u4F8B\uFF08this\uFF09\u4F20\u9012\u7ED9\u4E86 Form\uFF0C\u800C\u6B64\u65F6\uFF0CForm \u7684 mounted \u5C1A\u672A\u89E6\u53D1\uFF0C\u56E0\u4E3A Form \u5728\u6700\u5916\u5C42\uFF0C\u5982\u679C\u5728 Form \u7684 mounted \u91CC\u76D1\u542C\u4E8B\u4EF6\uFF0C\u662F\u4E0D\u53EF\u4EE5\u7684\uFF0C\u6240\u4EE5\u8981\u5728\u5176 created \u5185\u76D1\u542C\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0CForm \u7684 created \u8981\u5148\u4E8E FormItem \u7684 mounted\u3002\u6240\u4EE5 Form \u7684\u76F8\u5173\u4EE3\u7801\u4E3A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// form.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;iForm&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      fields: []</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  created () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$on(&#39;on-form-item-add&#39;, (field) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (field) this.fields.push(field);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$on(&#39;on-form-item-remove&#39;, (field) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B9A\u4E49\u7684\u6570\u636E <code>fields</code> \u5C31\u662F\u7528\u6765\u7F13\u5B58\u6240\u6709 FormItem \u5B9E\u4F8B\u7684\u3002</p><h2 id="\u89E6\u53D1\u6821\u9A8C" tabindex="-1">\u89E6\u53D1\u6821\u9A8C <a class="header-anchor" href="#\u89E6\u53D1\u6821\u9A8C" aria-hidden="true">#</a></h2><p>Form \u652F\u6301\u4E24\u79CD\u4E8B\u4EF6\u6765\u89E6\u53D1\u6821\u9A8C\uFF1A</p><ul><li><strong>blur</strong>\uFF1A\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\uFF0C\u5E38\u89C1\u7684\u6709\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u6821\u9A8C\uFF1B</li><li><strong>change</strong>\uFF1A\u5B9E\u65F6\u8F93\u5165\u65F6\u89E6\u53D1\u6216\u9009\u62E9\u65F6\u89E6\u53D1\uFF0C\u5E38\u89C1\u7684\u6709\u8F93\u5165\u6846\u5B9E\u65F6\u8F93\u5165\u65F6\u89E6\u53D1\u6821\u9A8C\u3001\u4E0B\u62C9\u9009\u62E9\u5668\u9009\u62E9\u9879\u76EE\u65F6\u89E6\u53D1\u6821\u9A8C\u7B49\u3002</li></ul><p>\u4EE5\u4E0A\u4E24\u4E2A\u4E8B\u4EF6\uFF0C\u90FD\u662F\u6709\u5177\u4F53\u7684\u8868\u5355\u7EC4\u4EF6\u6765\u89E6\u53D1\u7684\uFF0C\u6211\u4EEC\u5148\u6765\u7F16\u5199\u4E00\u4E2A\u7B80\u5355\u7684\u8F93\u5165\u6846\u7EC4\u4EF6 <code>i-input</code>\u3002\u5728 <code>components</code> \u4E0B\u65B0\u5EFA\u76EE\u5F55 <code>input</code>\uFF0C\u5E76\u521B\u5EFA\u6587\u4EF6 <code>input.vue</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- input.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">         type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">         :value=&quot;currentValue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">         @input=&quot;handleInput&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">         @blur=&quot;handleBlur&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">         /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import Emitter from &#39;../../mixins/emitter.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;iInput&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    mixins: [ Emitter ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
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
<span class="line"><span style="color:#A6ACCD;">      handleInput (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const value = event.target.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentValue = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$emit(&#39;input&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.dispatch(&#39;iFormItem&#39;, &#39;on-form-change&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      handleBlur () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.dispatch(&#39;iFormItem&#39;, &#39;on-form-blur&#39;, this.currentValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Input \u7EC4\u4EF6\u4E2D\uFF0C\u7ED1\u5B9A\u5728 <code>&lt;input&gt;</code> \u5143\u7D20\u4E0A\u7684\u539F\u751F\u4E8B\u4EF6 <code>@input</code>\uFF0C\u6BCF\u5F53\u8F93\u5165\u4E00\u4E2A\u5B57\u7B26\uFF0C\u90FD\u4F1A\u8C03\u7528\u53E5\u67C4 <code>handleInput</code>\uFF0C\u5E76\u901A\u8FC7 <code>dispatch</code> \u65B9\u6CD5\u5411\u4E0A\u7EA7\u7684 FormItem \u7EC4\u4EF6\u6D3E\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6 <code>on-form-change</code>\uFF1B\u540C\u7406\uFF0C\u7ED1\u5B9A\u7684\u539F\u751F\u4E8B\u4EF6 <code>@blur</code> \u4F1A\u5728 input \u5931\u7126\u65F6\u89E6\u53D1\uFF0C\u5E76\u4F20\u9012\u4E8B\u4EF6 <code>on-form-blur</code>\u3002</p><p>\u57FA\u7840\u7EC4\u4EF6\u6709\u4E86\uFF0C\u63A5\u4E0B\u6765\u8981\u505A\u7684\uFF0C\u662F\u5728 FormItem \u4E2D\u76D1\u542C\u6765\u81EA Input \u7EC4\u4EF6\u6D3E\u53D1\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u3002\u8FD9\u91CC\u53EF\u4EE5\u5728 mounted \u4E2D\u76D1\u542C\uFF0C\u56E0\u4E3A\u4F60\u7684\u624B\u901F\u8FDC\u8D76\u4E0D\u4E0A\u7EC4\u4EF6\u6E32\u67D3\u7684\u901F\u5EA6\uFF0C\u4E0D\u8FC7\u5728 created \u4E2D\u76D1\u542C\u4E5F\u662F\u6CA1\u4EFB\u4F55\u95EE\u9898\u7684\u3002\u76F8\u5173\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// form-item.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setRules () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$on(&#39;on-form-blur&#39;, this.onFieldBlur);</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$on(&#39;on-form-change&#39;, this.onFieldChange);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mounted () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.prop) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.dispatch(&#39;iForm&#39;, &#39;on-form-item-add&#39;, this);</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.setRules();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u901A\u8FC7\u8C03\u7528 <code>setRules</code> \u65B9\u6CD5\uFF0C\u76D1\u542C\u8868\u5355\u7EC4\u4EF6\u7684\u4E24\u4E2A\u4E8B\u4EF6\uFF0C\u5E76\u7ED1\u5B9A\u4E86\u53E5\u67C4\u51FD\u6570 <code>onFieldBlur</code> \u548C <code>onFieldChange</code>\uFF0C\u5206\u522B\u5BF9\u5E94 blur \u548C change \u4E24\u79CD\u4E8B\u4EF6\u7C7B\u578B\u3002\u5F53 onFieldBlur \u6216 onFieldChange \u51FD\u6570\u89E6\u53D1\u65F6\uFF0C\u5C31\u610F\u5473\u7740 FormItem \u8981\u5BF9<strong>\u5F53\u524D\u7684\u6570\u636E</strong>\u8FDB\u884C\u4E00\u6B21\u6821\u9A8C\u3002\u5F53\u524D\u7684\u6570\u636E\uFF0C\u6307\u7684\u5C31\u662F\u901A\u8FC7\u8868\u5355\u57DF Form \u4E2D\u5B9A\u4E49\u7684 props\uFF1Amodel\uFF0C\u7ED3\u5408\u5F53\u524D FormItem \u5B9A\u4E49\u7684 props\uFF1Aprop \u6765\u786E\u5B9A\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u56DE\u987E\u4E0A\u6587\u5199\u8FC7\u7684\u7528\u4F8B\u3002</p><p>\u56E0\u4E3A FormItem \u4E2D\u53EA\u5B9A\u4E49\u4E86\u6570\u636E\u6E90\u7684\u67D0\u4E2A key \u540D\u79F0\uFF08\u5373\u5C5E\u6027 prop\uFF09\uFF0C\u8981\u62FF\u5230 Form \u4E2D model \u91CC\u7684\u6570\u636E\uFF0C\u9700\u8981\u7528\u5230\u7B2C 3 \u8282\u7684\u901A\u4FE1\u65B9\u6CD5 provide / inject\u3002\u6240\u4EE5\u5728 Form \u4E2D\uFF0C\u628A\u6574\u4E2A\u5B9E\u4F8B\uFF08this\uFF09\u5411\u4E0B\u63D0\u4F9B\uFF0C\u5E76\u5728 FormItem \u4E2D\u6CE8\u5165\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// form.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  provide() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      form : this</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// form-item.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  inject: [&#39;form&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u51C6\u5907\u597D\u8FD9\u4E9B\uFF0C\u63A5\u7740\u5C31\u662F\u6700\u6838\u5FC3\u7684\u6821\u9A8C\u529F\u80FD\u4E86\u3002blur \u548C change \u4E8B\u4EF6\u90FD\u4F1A\u89E6\u53D1\u6821\u9A8C\uFF0C\u5B83\u4EEC\u8C03\u7528\u540C\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u53EA\u662F\u53C2\u6570\u4E0D\u540C\u3002\u76F8\u5173\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// form-item.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">import AsyncValidator from &#39;async-validator&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  inject: [&#39;form&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    prop: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: String</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      validateState: &#39;&#39;,  // \u6821\u9A8C\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">      validateMessage: &#39;&#39;,  // \u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u7684\u63D0\u793A\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4ECE Form \u7684 model \u4E2D\u52A8\u6001\u5F97\u5230\u5F53\u524D\u8868\u5355\u7EC4\u4EF6\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">    fieldValue () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.form.model[this.prop];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4ECE Form \u7684 rules \u5C5E\u6027\u4E2D\uFF0C\u83B7\u53D6\u5F53\u524D FormItem \u7684\u6821\u9A8C\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">    getRules () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let formRules = this.form.rules;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      formRules = formRules ? formRules[this.prop] : [];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      return [].concat(formRules || []);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53EA\u652F\u6301 blur \u548C change\uFF0C\u6240\u4EE5\u8FC7\u6EE4\u51FA\u7B26\u5408\u8981\u6C42\u7684 rule \u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">    getFilteredRule (trigger) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const rules = this.getRules();</span></span>
<span class="line"><span style="color:#A6ACCD;">      return rules.filter(rule =&gt; !rule.trigger || rule.trigger.indexOf(trigger) !== -1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * \u6821\u9A8C\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param trigger \u6821\u9A8C\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param callback \u56DE\u8C03\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    validate(trigger, callback = function () {}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let rules = this.getFilteredRule(trigger);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (!rules || rules.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8BBE\u7F6E\u72B6\u6001\u4E3A\u6821\u9A8C\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.validateState = &#39;validating&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u4EE5\u4E0B\u4E3A async-validator \u5E93\u7684\u8C03\u7528\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">      let descriptor = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">      descriptor[this.prop] = rules;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      const validator = new AsyncValidator(descriptor);</span></span>
<span class="line"><span style="color:#A6ACCD;">      let model = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      model[this.prop] = this.fieldValue;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      validator.validate(model, { firstFields: true }, errors =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.validateState = !errors ? &#39;success&#39; : &#39;error&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.validateMessage = errors ? errors[0].message : &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        callback(this.validateMessage);</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    onFieldBlur() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.validate(&#39;blur&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    onFieldChange() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.validate(&#39;change&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 FormItem \u7684 <code>validate()</code> \u65B9\u6CD5\u4E2D\uFF0C\u6700\u7EC8\u505A\u4E86\u4E24\u4EF6\u4E8B\uFF1A</p><ol><li>\u8BBE\u7F6E\u4E86\u5F53\u524D\u7684\u6821\u9A8C\u72B6\u6001 <code>validateState</code> \u548C\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A\u4FE1\u606F <code>validateMessage</code>\uFF08\u901A\u8FC7\u503C\u4E3A\u7A7A\uFF09\uFF1B</li><li>\u5C06 validateMessage \u901A\u8FC7\u56DE\u8C03 callback \u4F20\u9012\u7ED9\u8C03\u7528\u8005\uFF0C\u8FD9\u91CC\u7684\u8C03\u7528\u8005\u662F onFieldBlur \u548C onFieldChange\uFF0C\u5B83\u4EEC\u53EA\u4F20\u5165\u4E86\u7B2C\u4E00\u4E2A\u53C2\u6570 <code>trigger</code>\uFF0Ccallback \u5E76\u672A\u4F20\u5165\uFF0C\u56E0\u6B64\u4E5F\u4E0D\u4F1A\u89E6\u53D1\u56DE\u8C03\uFF0C\u800C\u8FD9\u4E2A\u56DE\u8C03\u4E3B\u8981\u662F\u7ED9 Form \u7528\u7684\uFF0C\u56E0\u4E3A Form \u4E2D\u53EF\u4EE5\u901A\u8FC7\u63D0\u4EA4\u6309\u94AE\u4E00\u6B21\u6027\u6821\u9A8C\u6240\u6709\u7684 FormItem\uFF08\u540E\u6587\u4F1A\u4ECB\u7ECD\uFF09\u8FD9\u91CC\u53EA\u662F\u8868\u5355\u7EC4\u4EF6\u89E6\u53D1\u4E8B\u4EF6\u65F6\uFF0C\u5BF9\u5F53\u524D FormItem \u505A\u6821\u9A8C\u3002</li></ol><p>\u9664\u4E86\u6821\u9A8C\uFF0C\u8FD8\u53EF\u4EE5\u5BF9\u5F53\u524D\u6570\u636E\u8FDB\u884C\u91CD\u7F6E\u3002\u91CD\u7F6E\u662F\u6307\u5C06\u8868\u5355\u7EC4\u4EF6\u7684\u6570\u636E\u8FD8\u539F\u5230\u6700\u521D\u7ED1\u5B9A\u7684\u503C\uFF0C\u800C\u4E0D\u662F\u6E05\u7A7A\uFF0C\u56E0\u6B64\u9700\u8981\u9884\u5148\u7F13\u5B58\u4E00\u4EFD\u521D\u59CB\u503C\u3002\u540C\u65F6\u6211\u4EEC\u5C06\u6821\u9A8C\u4FE1\u606F\u4E5F\u663E\u793A\u5728\u6A21\u677F\u4E2D\uFF0C\u5E76\u52A0\u4E00\u4E9B\u6837\u5F0F\u3002\u76F8\u5173\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- form-item.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;label v-if=&quot;label&quot; :class=&quot;{ &#39;i-form-item-label-required&#39;: isRequired }&quot;&gt;{{ label }}&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div v-if=&quot;validateState === &#39;error&#39;&quot; class=&quot;i-form-item-message&quot;&gt;{{ validateMessage }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      label: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">        default: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      prop: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: String</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        isRequired: false,  // \u662F\u5426\u4E3A\u5FC5\u586B</span></span>
<span class="line"><span style="color:#A6ACCD;">        validateState: &#39;&#39;,  // \u6821\u9A8C\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">        validateMessage: &#39;&#39;,  // \u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u7684\u63D0\u793A\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    mounted () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5982\u679C\u6CA1\u6709\u4F20\u5165 prop\uFF0C\u5219\u65E0\u9700\u6821\u9A8C\uFF0C\u4E5F\u5C31\u65E0\u9700\u7F13\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.prop) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.dispatch(&#39;iForm&#39;, &#39;on-form-item-add&#39;, this);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u8BBE\u7F6E\u521D\u59CB\u503C\uFF0C\u4EE5\u4FBF\u5728\u91CD\u7F6E\u65F6\u6062\u590D\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.initialValue = this.fieldValue;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setRules();</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setRules () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let rules = this.getRules();</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (rules.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          rules.every((rule) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u5982\u679C\u5F53\u524D\u6821\u9A8C\u89C4\u5219\u4E2D\u6709\u5FC5\u586B\u9879\uFF0C\u5219\u6807\u8BB0\u51FA\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.isRequired = rule.required;</span></span>
<span class="line"><span style="color:#A6ACCD;">          });</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$on(&#39;on-form-blur&#39;, this.onFieldBlur);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$on(&#39;on-form-change&#39;, this.onFieldChange);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u4ECE Form \u7684 rules \u5C5E\u6027\u4E2D\uFF0C\u83B7\u53D6\u5F53\u524D FormItem \u7684\u6821\u9A8C\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">      getRules () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let formRules = this.form.rules;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        formRules = formRules ? formRules[this.prop] : [];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return [].concat(formRules || []);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u91CD\u7F6E\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">      resetField () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.validateState = &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.validateMessage = &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.form.model[this.prop] = this.initialValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  .i-form-item-label-required:before {</span></span>
<span class="line"><span style="color:#A6ACCD;">    content: &#39;*&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  .i-form-item-message {</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81F3\u6B64\uFF0CFormItem \u4EE3\u7801\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u4E0D\u8FC7\u5B83\u53EA\u5177\u6709\u5355\u72EC\u6821\u9A8C\u7684\u529F\u80FD\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u80FD\u5BF9\u81EA\u5DF1\u7684\u4E00\u4E2A\u8868\u5355\u7EC4\u4EF6\u9A8C\u8BC1\uFF0C\u4E0D\u80FD\u5BF9\u4E00\u4E2A\u8868\u5355\u57DF\u91CC\u7684\u6240\u6709\u7EC4\u4EF6\u4E00\u6B21\u6027\u5168\u90E8\u6821\u9A8C\u3002\u800C\u5B9E\u73B0\u5168\u90E8\u6821\u9A8C\u548C\u5168\u90E8\u91CD\u7F6E\u7684\u529F\u80FD\uFF0C\u8981\u5728 Form \u4E2D\u5B8C\u6210\u3002</p><p>\u4E0A\u6587\u5DF2\u7ECF\u4ECB\u7ECD\u5230\uFF0C\u5728 <code>Form</code> \u7EC4\u4EF6\u4E2D\uFF0C\u9884\u5148\u7F13\u5B58\u4E86\u5168\u90E8\u7684 FormItem \u5B9E\u4F8B\uFF0C\u81EA\u7136\u4E5F\u80FD\u5728 Form \u4E2D\u8C03\u7528\u5B83\u4EEC\u3002\u901A\u8FC7\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u5168\u90E8\u6821\u9A8C\uFF0C\u6216\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u5168\u90E8\u91CD\u7F6E\u6570\u636E\uFF0C\u53EA\u9700\u8981\u5728 Form \u4E2D\uFF0C\u9010\u4E00\u8C03\u7528\u7F13\u5B58\u7684 FormItem \u5B9E\u4F8B\u4E2D\u7684 <code>validate</code> \u6216 <code>resetField</code> \u65B9\u6CD5\u3002\u76F8\u5173\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// form.vue\uFF0C\u90E8\u5206\u4EE3\u7801\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      fields: []</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u516C\u5F00\u65B9\u6CD5\uFF1A\u5168\u90E8\u91CD\u7F6E\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">    resetFields() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.fields.forEach(field =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        field.resetField();</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u516C\u5F00\u65B9\u6CD5\uFF1A\u5168\u90E8\u6821\u9A8C\u6570\u636E\uFF0C\u652F\u6301 Promise</span></span>
<span class="line"><span style="color:#A6ACCD;">    validate(callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new Promise(resolve =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let valid = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let count = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.fields.forEach(field =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          field.validate(&#39;&#39;, errors =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (errors) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              valid = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (++count === this.fields.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              // \u5168\u90E8\u5B8C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">              resolve(valid);</span></span>
<span class="line"><span style="color:#A6ACCD;">              if (typeof callback === &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                callback(valid);</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          });</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u867D\u7136\u8BF4 Vue.js \u7684 API \u53EA\u6765\u81EA prop\u3001event\u3001slot \u8FD9\u4E09\u4E2A\u90E8\u5206\uFF0C\u4F46\u4E00\u4E9B\u573A\u666F\u4E0B\uFF0C\u9700\u8981\u901A\u8FC7 <code>ref</code> \u6765\u8BBF\u95EE\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u8C03\u7528\u5B83\u7684\u4E00\u4E9B\u5185\u7F6E\u65B9\u6CD5\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684 <code>validate</code> \u548C <code>resetFields</code> \u65B9\u6CD5\uFF0C\u5C31\u9700\u8981\u4F7F\u7528\u8005\u6765\u4E3B\u52A8\u8C03\u7528\u3002</p><p>resetFields \u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u901A\u8FC7\u5FAA\u73AF\u9010\u4E00\u8C03\u7528 FormItem \u7684 resetField \u65B9\u6CD5\u6765\u91CD\u7F6E\u6570\u636E\u3002validate \u7A0D\u663E\u590D\u6742\uFF0C\u5B83\u652F\u6301\u4E24\u79CD\u4F7F\u7528\u65B9\u6CD5\uFF0C\u4E00\u79CD\u662F\u666E\u901A\u7684\u56DE\u8C03\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-form ref=&quot;form&quot;&gt;&lt;/i-form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;handleSubmit&quot;&gt;\u63D0\u4EA4&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      handleSubmit () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$refs.form.validate((valid) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (valid) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            window.alert(&#39;\u63D0\u4EA4\u6210\u529F&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            window.alert(&#39;\u8868\u5355\u6821\u9A8C\u5931\u8D25&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u540C\u65F6\u4E5F\u652F\u6301 Promise\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">handleSubmit () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const validate = this.$refs.form.validate();</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  validate.then((valid) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (valid) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      window.alert(&#39;\u63D0\u4EA4\u6210\u529F&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      window.alert(&#39;\u8868\u5355\u6821\u9A8C\u5931\u8D25&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 Form \u7EC4\u4EF6\u5B9A\u4E49\u7684 Promise \u4E2D\uFF0C\u53EA\u8C03\u7528\u4E86 resolve(valid)\uFF0C\u6CA1\u6709\u8C03\u7528 reject()\uFF0C\u56E0\u6B64\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528 <code>.catch()</code> \uFF0C\u4E0D\u8FC7\u806A\u660E\u7684\u4F60\u7A0D\u4F5C\u4FEE\u6539\uFF0C\u80AF\u5B9A\u80FD\u591F\u652F\u6301\u5230\uFF01</p><p>\u5B8C\u6574\u7684\u7528\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h3&gt;\u5177\u6709\u6570\u636E\u6821\u9A8C\u529F\u80FD\u7684\u8868\u5355\u7EC4\u4EF6\u2014\u2014Form&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;i-form ref=&quot;form&quot; :model=&quot;formValidate&quot; :rules=&quot;ruleValidate&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;i-form-item label=&quot;\u7528\u6237\u540D&quot; prop=&quot;name&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;i-input v-model=&quot;formValidate.name&quot;&gt;&lt;/i-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/i-form-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;i-form-item label=&quot;\u90AE\u7BB1&quot; prop=&quot;mail&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;i-input v-model=&quot;formValidate.mail&quot;&gt;&lt;/i-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/i-form-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/i-form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;handleSubmit&quot;&gt;\u63D0\u4EA4&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;handleReset&quot;&gt;\u91CD\u7F6E&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import iForm from &#39;../components/form/form.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import iFormItem from &#39;../components/form/form-item.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import iInput from &#39;../components/input/input.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { iForm, iFormItem, iInput },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        formValidate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          mail: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ruleValidate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            { required: true, message: &#39;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&#39;, trigger: &#39;blur&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">          ],</span></span>
<span class="line"><span style="color:#A6ACCD;">          mail: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            { required: true, message: &#39;\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A&#39;, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">            { type: &#39;email&#39;, message: &#39;\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E&#39;, trigger: &#39;blur&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">          ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      handleSubmit () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$refs.form.validate((valid) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (valid) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            window.alert(&#39;\u63D0\u4EA4\u6210\u529F&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            window.alert(&#39;\u8868\u5355\u6821\u9A8C\u5931\u8D25&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      handleReset () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$refs.form.resetFields();</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD0\u884C\u6548\u679C\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/30/166c3b8a77e382ec~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5B8C\u6574\u7684\u793A\u4F8B\u6E90\u7801\u53EF\u901A\u8FC7 GitHub \u67E5\u770B\uFF1A</p><p><a href="https://github.com/icarusion/vue-component-book" target="_blank" rel="noreferrer">https://github.com/icarusion/vue-component-book</a></p><blockquote><p>\u9879\u76EE\u57FA\u4E8E Vue CLI 3 \u6784\u5EFA\uFF0C\u4E0B\u8F7D\u5B89\u88C5\u4F9D\u8D56\u540E\uFF0C\u901A\u8FC7 npm run serve \u53EF\u8BBF\u95EE\u3002</p></blockquote><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u6700\u7EC8\u7684\u6548\u679C\u770B\u8D77\u6765\u6709\u70B9 \u201Clow\u201D\uFF0C\u4F46\u5B83\u5B9E\u73B0\u7684\u529F\u80FD\u5374\u4E0D\u7B80\u5355\u3002\u901A\u8FC7\u8FD9\u4E2A\u5B9E\u6218\uFF0C\u4F60\u6216\u8BB8\u5DF2\u7ECF\u611F\u53D7\u5230\u672C\u5C0F\u518C\u4E00\u5F00\u59CB\u8BF4\u7684\uFF0C\u7EC4\u4EF6\u5199\u5230\u6700\u540E\uFF0C\u90FD\u662F\u5728\u62FC JavaScript \u529F\u5E95\u3002\u7684\u786E\uFF0CVue.js \u7EC4\u4EF6\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u79CD\u65B0\u7684\u4EE3\u7801\u7EC4\u7EC7\u5F62\u5F0F\uFF0C\u4F46\u5F52\u6839\u5230\u5E95\uFF0C\u662F\u79BB\u4E0D\u5F00 JS \u7684\u3002</p><p>\u8FD9\u4E2A\u5B9E\u6218\uFF0C\u4F60\u5E94\u8BE5\u5BF9\u72EC\u7ACB\u7EC4\u4EF6\u95F4\u7684\u901A\u4FE1\u7528\u6CD5\u6709\u8FDB\u4E00\u6B65\u7684\u8BA4\u77E5\u4E86\u5427\uFF0C\u4E0D\u8FC7\uFF0C\u8FD9\u8FD8\u4E0D\u662F\u7EC4\u4EF6\u901A\u4FE1\u7684\u7EC8\u6781\u65B9\u6848\uFF0C\u4E0B\u4E00\u8282\uFF0C\u6211\u4EEC\u5C31\u6765\u770B\u770B\u9002\u7528\u4E8E\u4EFB\u4F55\u573A\u666F\u7684\u7EC4\u4EF6\u901A\u4FE1\u65B9\u6848\u3002</p><p>\u6CE8\uFF1A\u672C\u8282\u90E8\u5206\u4EE3\u7801\u53C2\u8003 <a href="https://github.com/iview/iview/tree/2.0/src/components/form" target="_blank" rel="noreferrer">iView</a>\u3002</p><h2 id="\u6269\u5C55\u9605\u8BFB" tabindex="-1">\u6269\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844903714017247246" target="_blank" rel="noreferrer">\u4E00\u4EFD\u8D85\u7EA7\u8BE6\u7EC6\u7684Vue-cli3.0\u4F7F\u7528\u6559\u7A0B</a></li></ul>`,78),o=[e];function t(c,r,i,C,A,y){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{m as __pageData,d as default};
