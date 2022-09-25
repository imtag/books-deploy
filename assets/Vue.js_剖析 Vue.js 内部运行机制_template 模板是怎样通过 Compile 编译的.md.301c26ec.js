import{_ as e,c as o,a as s,b as n,t as p,d as a,o as c}from"./app.e5528619.js";const w=JSON.parse('{"title":"template \u6A21\u677F\u662F\u600E\u6837\u901A\u8FC7 Compile \u7F16\u8BD1\u7684","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compile","slug":"compile","link":"#compile","children":[]},{"level":2,"title":"parse","slug":"parse","link":"#parse","children":[{"level":3,"title":"\u6B63\u5219","slug":"\u6B63\u5219","link":"#\u6B63\u5219","children":[]}]},{"level":2,"title":"advance","slug":"advance","link":"#advance","children":[{"level":3,"title":"parseHTML","slug":"parsehtml","link":"#parsehtml","children":[]},{"level":3,"title":"parseStartTag","slug":"parsestarttag","link":"#parsestarttag","children":[]}]},{"level":2,"title":"stack","slug":"stack","link":"#stack","children":[{"level":3,"title":"parseEndTag","slug":"parseendtag","link":"#parseendtag","children":[]},{"level":3,"title":"parseText","slug":"parsetext","link":"#parsetext","children":[]},{"level":3,"title":"processIf\u4E0EprocessFor","slug":"processif\u4E0Eprocessfor","link":"#processif\u4E0Eprocessfor","children":[]}]},{"level":2,"title":"optimize","slug":"optimize","link":"#optimize","children":[{"level":3,"title":"isStatic","slug":"isstatic","link":"#isstatic","children":[]},{"level":3,"title":"markStatic","slug":"markstatic","link":"#markstatic","children":[]},{"level":3,"title":"markStaticRoots","slug":"markstaticroots","link":"#markstaticroots","children":[]},{"level":3,"title":"optimize","slug":"optimize-1","link":"#optimize-1","children":[]}]},{"level":2,"title":"generate","slug":"generate","link":"#generate","children":[{"level":3,"title":"genIf","slug":"genif","link":"#genif","children":[]},{"level":3,"title":"genFor","slug":"genfor","link":"#genfor","children":[]},{"level":3,"title":"genText","slug":"gentext","link":"#gentext","children":[]},{"level":3,"title":"genElement","slug":"genelement","link":"#genelement","children":[]},{"level":3,"title":"generate","slug":"generate-1","link":"#generate-1","children":[]}]}],"relativePath":"Vue.js/\u5256\u6790 Vue.js \u5185\u90E8\u8FD0\u884C\u673A\u5236/template \u6A21\u677F\u662F\u600E\u6837\u901A\u8FC7 Compile \u7F16\u8BD1\u7684.md"}'),t={name:"Vue.js/\u5256\u6790 Vue.js \u5185\u90E8\u8FD0\u884C\u673A\u5236/template \u6A21\u677F\u662F\u600E\u6837\u901A\u8FC7 Compile \u7F16\u8BD1\u7684.md"},r=a(`<h1 id="template-\u6A21\u677F\u662F\u600E\u6837\u901A\u8FC7-compile-\u7F16\u8BD1\u7684" tabindex="-1">template \u6A21\u677F\u662F\u600E\u6837\u901A\u8FC7 Compile \u7F16\u8BD1\u7684 <a class="header-anchor" href="#template-\u6A21\u677F\u662F\u600E\u6837\u901A\u8FC7-compile-\u7F16\u8BD1\u7684" aria-hidden="true">#</a></h1><hr><h1 id="template-\u6A21\u677F\u662F\u600E\u6837\u901A\u8FC7-compile-\u7F16\u8BD1\u7684-1" tabindex="-1">template \u6A21\u677F\u662F\u600E\u6837\u901A\u8FC7 Compile \u7F16\u8BD1\u7684 <a class="header-anchor" href="#template-\u6A21\u677F\u662F\u600E\u6837\u901A\u8FC7-compile-\u7F16\u8BD1\u7684-1" aria-hidden="true">#</a></h1><h2 id="compile" tabindex="-1">Compile <a class="header-anchor" href="#compile" aria-hidden="true">#</a></h2><p><code>compile</code> \u7F16\u8BD1\u53EF\u4EE5\u5206\u6210 <code>parse</code>\u3001<code>optimize</code> \u4E0E <code>generate</code> \u4E09\u4E2A\u9636\u6BB5\uFF0C\u6700\u7EC8\u9700\u8981\u5F97\u5230 render function\u3002\u8FD9\u90E8\u5206\u5185\u5BB9\u4E0D\u7B97 Vue.js \u7684\u54CD\u5E94\u5F0F\u6838\u5FC3\uFF0C\u53EA\u662F\u7528\u6765\u7F16\u8BD1\u7684\uFF0C\u7B14\u8005\u8BA4\u4E3A\u5728\u7CBE\u529B\u6709\u9650\u7684\u60C5\u51B5\u4E0B\u4E0D\u9700\u8981\u8FFD\u7A76\u5176\u5168\u90E8\u7684\u5B9E\u73B0\u7EC6\u8282\uFF0C\u80FD\u591F\u628A\u63E1\u5982\u4F55\u89E3\u6790\u7684\u5927\u81F4\u6D41\u7A0B\u5373\u53EF\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/12/19/1606ec3d306ab28f~tplv-t2oaga2asx-image.image" alt=""></p><p>\u7531\u4E8E\u89E3\u6790\u8FC7\u7A0B\u6BD4\u8F83\u590D\u6742\uFF0C\u76F4\u63A5\u4E0A\u4EE3\u7801\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E0D\u4E86\u89E3\u8FD9\u90E8\u5206\u5185\u5BB9\u7684\u540C\u5B66\u4E00\u5934\u96FE\u6C34\u3002\u6240\u4EE5\u7B14\u8005\u51C6\u5907\u63D0\u4F9B\u4E00\u4E2A template \u7684\u793A\u4F8B\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u793A\u4F8B\u7684\u53D8\u5316\u6765\u770B\u89E3\u6790\u7684\u8FC7\u7A0B\u3002\u4F46\u662F\u89E3\u6790\u7684\u8FC7\u7A0B\u53CA\u7ED3\u679C\u90FD\u662F\u5C06\u6700\u91CD\u8981\u7684\u90E8\u5206\u62BD\u79BB\u51FA\u6765\u5C55\u793A\uFF0C\u5E0C\u671B\u80FD\u8BA9\u8BFB\u8005\u66F4\u597D\u5730\u4E86\u89E3\u5176\u6838\u5FC3\u90E8\u5206\u7684\u5B9E\u73B0\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div :class=&quot;c&quot; class=&quot;demo&quot; v-if=&quot;isShow&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span v-for=&quot;item in sz&quot;&gt;{{item}}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var html = &#39;&lt;div :class=&quot;c&quot; class=&quot;demo&quot; v-if=&quot;isShow&quot;&gt;&lt;span v-for=&quot;item in sz&quot;&gt;{{item}}&lt;/span&gt;&lt;/div&gt;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u4E0B\u6765\u7684\u8FC7\u7A0B\u90FD\u4F1A\u4F9D\u8D56\u8FD9\u4E2A\u793A\u4F8B\u6765\u8FDB\u884C\u3002</p><h2 id="parse" tabindex="-1">parse <a class="header-anchor" href="#parse" aria-hidden="true">#</a></h2><p>\u9996\u5148\u662F <code>parse</code>\uFF0C<code>parse</code> \u4F1A\u7528\u6B63\u5219\u7B49\u65B9\u5F0F\u5C06 template \u6A21\u677F\u4E2D\u8FDB\u884C\u5B57\u7B26\u4E32\u89E3\u6790\uFF0C\u5F97\u5230\u6307\u4EE4\u3001class\u3001style\u7B49\u6570\u636E\uFF0C\u5F62\u6210 AST\uFF08<a href="https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E8%AA%9E%E6%B3%95%E6%A8%B9" target="_blank" rel="noreferrer">\u5728\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\uFF0C\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08abstract syntax tree\u6216\u8005\u7F29\u5199\u4E3AAST\uFF09\uFF0C\u6216\u8005\u8BED\u6CD5\u6811\uFF08syntax tree\uFF09\uFF0C\u662F\u6E90\u4EE3\u7801\u7684\u62BD\u8C61\u8BED\u6CD5\u7ED3\u6784\u7684\u6811\u72B6\u8868\u73B0\u5F62\u5F0F\uFF0C\u8FD9\u91CC\u7279\u6307\u7F16\u7A0B\u8BED\u8A00\u7684\u6E90\u4EE3\u7801\u3002</a>\uFF09\u3002</p><p>\u8FD9\u4E2A\u8FC7\u7A0B\u6BD4\u8F83\u590D\u6742\uFF0C\u4F1A\u6D89\u53CA\u5230\u6BD4\u8F83\u591A\u7684\u6B63\u5219\u8FDB\u884C\u5B57\u7B26\u4E32\u89E3\u6790\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u5F97\u5230\u7684 AST \u7684\u6837\u5B50\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u6807\u7B7E\u5C5E\u6027\u7684map\uFF0C\u8BB0\u5F55\u4E86\u6807\u7B7E\u4E0A\u5C5E\u6027 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;attrsMap&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;:class&#39;: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;class&#39;: &#39;demo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;v-if&#39;: &#39;isShow&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u89E3\u6790\u5F97\u5230\u7684:class */</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;classBinding&#39;: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u6807\u7B7E\u5C5E\u6027v-if */</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;if&#39;: &#39;isShow&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* v-if\u7684\u6761\u4EF6 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;ifConditions&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;exp&#39;: &#39;isShow&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u6807\u7B7E\u5C5E\u6027class */</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;staticClass&#39;: &#39;demo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u6807\u7B7E\u7684tag */</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;tag&#39;: &#39;div&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u5B50\u6807\u7B7E\u6570\u7EC4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;children&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;attrsMap&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;v-for&#39;: &quot;item in sz&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* for\u5FAA\u73AF\u7684\u53C2\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;alias&#39;: &quot;item&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* for\u5FAA\u73AF\u7684\u5BF9\u8C61 */</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;for&#39;: &#39;sz&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* for\u5FAA\u73AF\u662F\u5426\u5DF2\u7ECF\u88AB\u5904\u7406\u7684\u6807\u8BB0\u4F4D */</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;forProcessed&#39;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;tag&#39;: &#39;span&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;children&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /* \u8868\u8FBE\u5F0F\uFF0C_s\u662F\u4E00\u4E2A\u8F6C\u5B57\u7B26\u4E32\u7684\u51FD\u6570 */</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;expression&#39;: &#39;_s(item)&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;text&#39;: &#39;{{item}}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u7EC8\u5F97\u5230\u7684 AST \u901A\u8FC7\u4E00\u4E9B\u7279\u5B9A\u7684\u5C5E\u6027\uFF0C\u80FD\u591F\u6BD4\u8F83\u6E05\u6670\u5730\u63CF\u8FF0\u51FA\u6807\u7B7E\u7684\u5C5E\u6027\u4EE5\u53CA\u4F9D\u8D56\u5173\u7CFB\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u7528\u4EE3\u7801\u6765\u8BB2\u89E3\u4E00\u4E0B\u5982\u4F55\u4F7F\u7528\u6B63\u5219\u6765\u628A template \u7F16\u8BD1\u6210\u6211\u4EEC\u9700\u8981\u7684 AST \u7684\u3002</p><h3 id="\u6B63\u5219" tabindex="-1">\u6B63\u5219 <a class="header-anchor" href="#\u6B63\u5219" aria-hidden="true">#</a></h3><p>\u9996\u5148\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E0B\u63A5\u4E0B\u6765\u6211\u4EEC\u4F1A\u7528\u5230\u7684\u6B63\u5219\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const ncname = &#39;[a-zA-Z_][\\\\w\\\\-\\\\.]*&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const singleAttrIdentifier = /([^\\s&quot;&#39;&lt;&gt;/=]+)/</span></span>
<span class="line"><span style="color:#A6ACCD;">const singleAttrAssign = /(?:=)/</span></span>
<span class="line"><span style="color:#A6ACCD;">const singleAttrValues = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  /&quot;([^&quot;]*)&quot;+/.source,</span></span>
<span class="line"><span style="color:#A6ACCD;">  /&#39;([^&#39;]*)&#39;+/.source,</span></span>
<span class="line"><span style="color:#A6ACCD;">  /([^\\s&quot;&#39;=&lt;&gt;\`]+)/.source</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">const attribute = new RegExp(</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;^\\\\s*&#39; + singleAttrIdentifier.source +</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;(?:\\\\s*(&#39; + singleAttrAssign.source + &#39;)&#39; +</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;\\\\s*(?:&#39; + singleAttrValues.join(&#39;|&#39;) + &#39;))?&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const qnameCapture = &#39;((?:&#39; + ncname + &#39;\\\\:)?&#39; + ncname + &#39;)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const startTagOpen = new RegExp(&#39;^&lt;&#39; + qnameCapture)</span></span>
<span class="line"><span style="color:#A6ACCD;">const startTagClose = /^\\s*(\\/?)&gt;/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const endTag = new RegExp(&#39;^&lt;\\\\/&#39; + qnameCapture + &#39;[^&gt;]*&gt;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const defaultTagRE = /\\{\\{((?:.|\\n)+?)\\}\\}/g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const forAliasRE = /(.*?)\\s+(?:in|of)\\s+(.*)/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="advance" tabindex="-1">advance <a class="header-anchor" href="#advance" aria-hidden="true">#</a></h2><p>\u56E0\u4E3A\u6211\u4EEC\u89E3\u6790 template \u91C7\u7528\u5FAA\u73AF\u8FDB\u884C\u5B57\u7B26\u4E32\u5339\u914D\u7684\u65B9\u5F0F\uFF0C\u6240\u4EE5\u6BCF\u5339\u914D\u89E3\u6790\u5B8C\u4E00\u6BB5\u6211\u4EEC\u9700\u8981\u5C06\u5DF2\u7ECF\u5339\u914D\u6389\u7684\u53BB\u6389\uFF0C\u5934\u90E8\u7684\u6307\u9488\u6307\u5411\u63A5\u4E0B\u6765\u9700\u8981\u5339\u914D\u7684\u90E8\u5206\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function advance (n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    index += n</span></span>
<span class="line"><span style="color:#A6ACCD;">    html = html.substring(n)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5F53\u6211\u4EEC\u628A\u7B2C\u4E00\u4E2A div \u7684\u5934\u6807\u7B7E\u5168\u90E8\u5339\u914D\u5B8C\u6BD5\u4EE5\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u8FD9\u90E8\u5206\u9664\u53BB\uFF0C\u4E5F\u5C31\u662F\u5411\u53F3\u79FB\u52A8 43 \u4E2A\u5B57\u7B26\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/7/160d00562f38ab39~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8C03\u7528 <code>advance</code> \u51FD\u6570</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">advance(43);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F97\u5230\u7ED3\u679C</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/7/160d0058331006a5~tplv-t2oaga2asx-image.image" alt=""></p><h3 id="parsehtml" tabindex="-1">parseHTML <a class="header-anchor" href="#parsehtml" aria-hidden="true">#</a></h3><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E2A <code>parseHTML</code> \u51FD\u6570\uFF0C\u5728\u91CC\u9762\u6211\u4EEC\u5FAA\u73AF\u89E3\u6790 template \u5B57\u7B26\u4E32\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function parseHTML () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    while(html) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let textEnd = html.indexOf(&#39;&lt;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (textEnd === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (html.match(endTag)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                //...process end tag</span></span>
<span class="line"><span style="color:#A6ACCD;">                continue;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (html.match(startTagOpen)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                //...process start tag</span></span>
<span class="line"><span style="color:#A6ACCD;">                continue;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            //...process text</span></span>
<span class="line"><span style="color:#A6ACCD;">            continue;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>parseHTML</code> \u4F1A\u7528 <code>while</code> \u6765\u5FAA\u73AF\u89E3\u6790 template \uFF0C\u7528\u6B63\u5219\u5728\u5339\u914D\u5230\u6807\u7B7E\u5934\u3001\u6807\u7B7E\u5C3E\u4EE5\u53CA\u6587\u672C\u7684\u65F6\u5019\u5206\u522B\u8FDB\u884C\u4E0D\u540C\u7684\u5904\u7406\u3002\u76F4\u5230\u6574\u4E2A template \u88AB\u89E3\u6790\u5B8C\u6BD5\u3002</p><h3 id="parsestarttag" tabindex="-1">parseStartTag <a class="header-anchor" href="#parsestarttag" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u6765\u5199\u4E00\u4E2A <code>parseStartTag</code> \u51FD\u6570\uFF0C\u7528\u6765\u89E3\u6790\u8D77\u59CB\u6807\u7B7E\uFF08&quot;&lt;div :class=&quot;c&quot; class=&quot;demo&quot; v-if=&quot;isShow&quot;&gt;&quot;\u90E8\u5206\u7684\u5185\u5BB9\uFF09\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function parseStartTag () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const start = html.match(startTagOpen);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (start) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const match = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            tagName: start[1],</span></span>
<span class="line"><span style="color:#A6ACCD;">            attrs: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">            start: index</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        advance(start[0].length);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        let end, attr</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (!(end = html.match(startTagClose)) &amp;&amp; (attr = html.match(attribute))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            advance(attr[0].length)</span></span>
<span class="line"><span style="color:#A6ACCD;">            match.attrs.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: attr[1],</span></span>
<span class="line"><span style="color:#A6ACCD;">                value: attr[3]</span></span>
<span class="line"><span style="color:#A6ACCD;">            });</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (end) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            match.unarySlash = end[1];</span></span>
<span class="line"><span style="color:#A6ACCD;">            advance(end[0].length);</span></span>
<span class="line"><span style="color:#A6ACCD;">            match.end = index;</span></span>
<span class="line"><span style="color:#A6ACCD;">            return match</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9996\u5148\u7528 <code>startTagOpen</code> \u6B63\u5219\u5F97\u5230\u6807\u7B7E\u7684\u5934\u90E8\uFF0C\u53EF\u4EE5\u5F97\u5230 <code>tagName</code>\uFF08\u6807\u7B7E\u540D\u79F0\uFF09\uFF0C\u540C\u65F6\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u6570\u7EC4 <code>attrs</code> \u7528\u6765\u5B58\u653E\u6807\u7B7E\u5185\u7684\u5C5E\u6027\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const start = html.match(startTagOpen);</span></span>
<span class="line"><span style="color:#A6ACCD;">const match = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    tagName: start[1],</span></span>
<span class="line"><span style="color:#A6ACCD;">    attrs: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">    start: index</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">advance(start[0].length);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u4E0B\u6765\u4F7F\u7528 <code>startTagClose</code> \u4E0E <code>attribute</code> \u4E24\u4E2A\u6B63\u5219\u5206\u522B\u7528\u6765\u89E3\u6790\u6807\u7B7E\u7ED3\u675F\u4EE5\u53CA\u6807\u7B7E\u5185\u7684\u5C5E\u6027\u3002\u8FD9\u6BB5\u4EE3\u7801\u7528 <code>while</code> \u5FAA\u73AF\u4E00\u76F4\u5230\u5339\u914D\u5230 <code>startTagClose</code> \u4E3A\u6B62\uFF0C\u89E3\u6790\u5185\u90E8\u6240\u6709\u7684\u5C5E\u6027\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let end, attr</span></span>
<span class="line"><span style="color:#A6ACCD;">while (!(end = html.match(startTagClose)) &amp;&amp; (attr = html.match(attribute))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    advance(attr[0].length)</span></span>
<span class="line"><span style="color:#A6ACCD;">    match.attrs.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: attr[1],</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: attr[3]</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">if (end) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    match.unarySlash = end[1];</span></span>
<span class="line"><span style="color:#A6ACCD;">    advance(end[0].length);</span></span>
<span class="line"><span style="color:#A6ACCD;">    match.end = index;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return match</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="stack" tabindex="-1">stack <a class="header-anchor" href="#stack" aria-hidden="true">#</a></h2><p>\u6B64\u5916\uFF0C\u6211\u4EEC\u9700\u8981\u7EF4\u62A4\u4E00\u4E2A <strong>stack</strong> \u6808\u6765\u4FDD\u5B58\u5DF2\u7ECF\u89E3\u6790\u597D\u7684\u6807\u7B7E\u5934\uFF0C\u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u5728\u89E3\u6790\u5C3E\u90E8\u6807\u7B7E\u7684\u65F6\u5019\u5F97\u5230\u6240\u5C5E\u7684\u5C42\u7EA7\u5173\u7CFB\u4EE5\u53CA\u7236\u6807\u7B7E\u3002\u540C\u65F6\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A <code>currentParent</code> \u53D8\u91CF\u7528\u6765\u5B58\u653E\u5F53\u524D\u6807\u7B7E\u7684\u7236\u6807\u7B7E\u8282\u70B9\u7684\u5F15\u7528\uFF0C <code>root</code> \u53D8\u91CF\u7528\u6765\u6307\u5411\u6839\u6807\u7B7E\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const stack = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">let currentParent, root;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/7/160d0f34a5642ce8~tplv-t2oaga2asx-image.image" alt=""></p><p>\u77E5\u9053\u8FD9\u4E2A\u4EE5\u540E\uFF0C\u6211\u4EEC\u4F18\u5316\u4E00\u4E0B <code>parseHTML</code> \uFF0C\u5728 <code>startTagOpen</code> \u7684 <code>if</code> \u903B\u8F91\u4E2D\u52A0\u4E0A\u65B0\u7684\u5904\u7406\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (html.match(startTagOpen)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const startTagMatch = parseStartTag();</span></span>
<span class="line"><span style="color:#A6ACCD;">    const element = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        tag: startTagMatch.tagName,</span></span>
<span class="line"><span style="color:#A6ACCD;">        lowerCasedTag: startTagMatch.tagName.toLowerCase(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        attrsList: startTagMatch.attrs,</span></span>
<span class="line"><span style="color:#A6ACCD;">        attrsMap: makeAttrsMap(startTagMatch.attrs),</span></span>
<span class="line"><span style="color:#A6ACCD;">        parent: currentParent,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!root){</span></span>
<span class="line"><span style="color:#A6ACCD;">        root = element</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if(currentParent){</span></span>
<span class="line"><span style="color:#A6ACCD;">        currentParent.children.push(element);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    stack.push(element);</span></span>
<span class="line"><span style="color:#A6ACCD;">    currentParent = element;</span></span>
<span class="line"><span style="color:#A6ACCD;">    continue;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u5C06 <code>startTagMatch</code> \u5F97\u5230\u7684\u7ED3\u679C\u9996\u5148\u5C01\u88C5\u6210 <code>element</code> \uFF0C\u8FD9\u4E2A\u5C31\u662F\u6700\u7EC8\u5F62\u6210\u7684 AST \u7684\u8282\u70B9\uFF0C\u6807\u7B7E\u8282\u70B9\u7684 type \u4E3A 1\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const startTagMatch = parseStartTag();</span></span>
<span class="line"><span style="color:#A6ACCD;">const element = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    tag: startTagMatch.tagName,</span></span>
<span class="line"><span style="color:#A6ACCD;">    attrsList: startTagMatch.attrs,</span></span>
<span class="line"><span style="color:#A6ACCD;">    attrsMap: makeAttrsMap(startTagMatch.attrs),</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent: currentParent,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u8BA9 <code>root</code> \u6307\u5411\u6839\u8282\u70B9\u7684\u5F15\u7528\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if(!root){</span></span>
<span class="line"><span style="color:#A6ACCD;">    root = element</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u7740\u6211\u4EEC\u5C06\u5F53\u524D\u8282\u70B9\u7684 <code>element</code> \u653E\u5165\u7236\u8282\u70B9 <code>currentParent</code> \u7684 <code>children</code> \u6570\u7EC4\u4E2D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if(currentParent){</span></span>
<span class="line"><span style="color:#A6ACCD;">    currentParent.children.push(element);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u5C06\u5F53\u524D\u8282\u70B9 <code>element</code> \u538B\u5165 stack \u6808\u4E2D\uFF0C\u5E76\u5C06 <code>currentParent</code> \u6307\u5411\u5F53\u524D\u8282\u70B9\uFF0C\u56E0\u4E3A\u63A5\u4E0B\u53BB\u4E0B\u4E00\u4E2A\u89E3\u6790\u5982\u679C\u8FD8\u662F\u5934\u6807\u7B7E\u6216\u8005\u662F\u6587\u672C\u7684\u8BDD\uFF0C\u4F1A\u6210\u4E3A\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u5982\u679C\u662F\u5C3E\u6807\u7B7E\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C06\u4F1A\u4ECE\u6808\u4E2D\u53D6\u51FA\u5F53\u524D\u8282\u70B9\uFF0C\u8FD9\u79CD\u60C5\u51B5\u6211\u4EEC\u63A5\u4E0B\u6765\u8981\u8BB2\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">stack.push(element);</span></span>
<span class="line"><span style="color:#A6ACCD;">currentParent = element;</span></span>
<span class="line"><span style="color:#A6ACCD;">continue;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u4E2D\u7684 <code>makeAttrsMap</code> \u662F\u5C06 attrs \u8F6C\u6362\u6210 map \u683C\u5F0F\u7684\u4E00\u4E2A\u65B9\u6CD5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function makeAttrsMap (attrs) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const map = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = 0, l = attrs.length; i &lt; l; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        map[attrs[i].name] = attrs[i].value;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return map</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="parseendtag" tabindex="-1">parseEndTag <a class="header-anchor" href="#parseendtag" aria-hidden="true">#</a></h3><p>\u540C\u6837\uFF0C\u6211\u4EEC\u5728 <code>parseHTML</code> \u4E2D\u52A0\u5165\u5BF9\u5C3E\u6807\u7B7E\u7684\u89E3\u6790\u51FD\u6570\uFF0C\u4E3A\u4E86\u5339\u914D\u5982\u201C&lt;/div&gt;\u201D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const endTagMatch = html.match(endTag)</span></span>
<span class="line"><span style="color:#A6ACCD;"> if (endTagMatch) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    advance(endTagMatch[0].length);</span></span>
<span class="line"><span style="color:#A6ACCD;">    parseEndTag(endTagMatch[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    continue;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7528 <code>parseEndTag</code> \u6765\u89E3\u6790\u5C3E\u6807\u7B7E\uFF0C\u5B83\u4F1A\u4ECE stack \u6808\u4E2D\u53D6\u51FA\u6700\u8FD1\u7684\u8DDF\u81EA\u5DF1\u6807\u7B7E\u540D\u4E00\u81F4\u7684\u90A3\u4E2A\u5143\u7D20\uFF0C\u5C06 <code>currentParent</code> \u6307\u5411\u90A3\u4E2A\u5143\u7D20\uFF0C\u5E76\u5C06\u8BE5\u5143\u7D20\u4E4B\u524D\u7684\u5143\u7D20\u90FD\u4ECE stack \u4E2D\u51FA\u6808\u3002</p><p>\u8FD9\u91CC\u53EF\u80FD\u6709\u540C\u5B66\u4F1A\u95EE\uFF0C\u96BE\u9053\u89E3\u6790\u7684\u5C3E\u5143\u7D20\u4E0D\u5E94\u8BE5\u5BF9\u5E94 stack \u6808\u7684\u6700\u4E0A\u9762\u7684\u4E00\u4E2A\u5143\u7D20\u624D\u5BF9\u5417\uFF1F</p><p>\u5176\u5B9E\u4E0D\u7136\uFF0C\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u5B58\u5728\u81EA\u95ED\u5408\u7684\u6807\u7B7E\uFF0C\u5982\u201C&lt;br /&gt;\u201D\uFF0C\u6216\u8005\u662F\u5199\u4E86\u201C&lt;span&gt;\u201D\u4F46\u662F\u6CA1\u6709\u52A0\u4E0A\u201C&lt; /span&gt;\u201D\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6\u5019\u5C31\u8981\u627E\u5230 stack \u4E2D\u7684\u7B2C\u4E8C\u4E2A\u4F4D\u7F6E\u624D\u80FD\u627E\u5230\u540C\u540D\u6807\u7B7E\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function parseEndTag (tagName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let pos;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (pos = stack.length - 1; pos &gt;= 0; pos--) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (stack[pos].lowerCasedTag === tagName.toLowerCase()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (pos &gt;= 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        stack.length = pos;</span></span>
<span class="line"><span style="color:#A6ACCD;">        currentParent = stack[pos]; </span></span>
<span class="line"><span style="color:#A6ACCD;">    }   </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="parsetext" tabindex="-1">parseText <a class="header-anchor" href="#parsetext" aria-hidden="true">#</a></h3>`,63),i=n("\u6700\u540E\u662F\u89E3\u6790\u6587\u672C\uFF0C\u8FD9\u4E2A\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5C06\u6587\u672C\u53D6\u51FA\uFF0C\u7136\u540E\u6709\u4E24\u79CD\u60C5\u51B5\uFF0C\u4E00\u79CD\u662F\u666E\u901A\u7684\u6587\u672C\uFF0C\u76F4\u63A5\u6784\u5EFA\u4E00\u4E2A\u8282\u70B9 push \u8FDB\u5F53\u524D "),A=s("code",null,"currentParent",-1),C=s("code",null,"parseText",-1),d=n(" \u6765\u5C06\u8868\u8FBE\u5F0F\u8F6C\u5316\u6210\u4EE3\u7801\u3002"),y=a(`<div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">text = html.substring(0, textEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">advance(textEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">let expression;</span></span>
<span class="line"><span style="color:#A6ACCD;">if (expression = parseText(text)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    currentParent.children.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">        text,</span></span>
<span class="line"><span style="color:#A6ACCD;">        expression</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    currentParent.children.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">        text,</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">continue;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u4F1A\u7528\u5230\u4E00\u4E2A <code>parseText</code> \u51FD\u6570\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function parseText (text) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!defaultTagRE.test(text)) return;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const tokens = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    let lastIndex = defaultTagRE.lastIndex = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    let match, index</span></span>
<span class="line"><span style="color:#A6ACCD;">    while ((match = defaultTagRE.exec(text))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        index = match.index</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        if (index &gt; lastIndex) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            tokens.push(JSON.stringify(text.slice(lastIndex, index)))</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        const exp = match[1].trim()</span></span>
<span class="line"><span style="color:#A6ACCD;">        tokens.push(\`_s(\${exp})\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">        lastIndex = index + match[0].length</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (lastIndex &lt; text.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        tokens.push(JSON.stringify(text.slice(lastIndex)))</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return tokens.join(&#39;+&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),D=n("\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A "),g=s("code",null,"tokens",-1),u=n(" \u6570\u7EC4\u6765\u5B58\u653E\u89E3\u6790\u7ED3\u679C\uFF0C\u901A\u8FC7 "),h=s("code",null,"defaultTagRE",-1),m=n(" \u6765\u5FAA\u73AF\u5339\u914D\u8BE5\u6587\u672C\uFF0C\u5982\u679C\u662F\u666E\u901A\u6587\u672C\u76F4\u63A5 "),f=s("code",null,"push",-1),v=n(" \u5230 "),b=s("code",null,"tokens",-1),x=a(`<p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u6211\u4EEC\u6709\u8FD9\u6837\u4E00\u4E2A\u6587\u672C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;hello,{{name}}.&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u7EC8\u5F97\u5230 <code>tokens</code>\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tokens = [&#39;hello,&#39;, _s(name), &#39;.&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u7EC8\u901A\u8FC7 <code>join</code> \u8FD4\u56DE\u8868\u8FBE\u5F0F\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&#39;hello&#39; + _s(name) + &#39;.&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="processif\u4E0Eprocessfor" tabindex="-1">processIf\u4E0EprocessFor <a class="header-anchor" href="#processif\u4E0Eprocessfor" aria-hidden="true">#</a></h3><p>\u6700\u540E\u4ECB\u7ECD\u4E00\u4E0B\u5982\u4F55\u5904\u7406\u201C<code>v-if</code>\u201D\u4EE5\u53CA\u201C<code>v-for</code>\u201D\u8FD9\u6837\u7684 Vue.js \u7684\u8868\u8FBE\u5F0F\u7684\uFF0C\u8FD9\u91CC\u6211\u4EEC\u53EA\u7B80\u5355\u4ECB\u7ECD\u4E24\u4E2A\u793A\u4F8B\u4E2D\u7528\u5230\u7684\u8868\u8FBE\u5F0F\u89E3\u6790\u3002</p><p>\u6211\u4EEC\u53EA\u9700\u8981\u5728\u89E3\u6790\u5934\u6807\u7B7E\u7684\u5185\u5BB9\u4E2D\u52A0\u5165\u8FD9\u4E24\u4E2A\u8868\u8FBE\u5F0F\u7684\u89E3\u6790\u51FD\u6570\u5373\u53EF\uFF0C\u5728\u8FD9\u65F6\u201C<code>v-for</code>\u201D\u4E4B\u7C7B\u6307\u4EE4\u5DF2\u7ECF\u5728\u5C5E\u6027\u89E3\u6790\u65F6\u5B58\u5165\u4E86 <code>attrsMap</code> \u4E2D\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (html.match(startTagOpen)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const startTagMatch = parseStartTag();</span></span>
<span class="line"><span style="color:#A6ACCD;">    const element = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        tag: startTagMatch.tagName,</span></span>
<span class="line"><span style="color:#A6ACCD;">        attrsList: startTagMatch.attrs,</span></span>
<span class="line"><span style="color:#A6ACCD;">        attrsMap: makeAttrsMap(startTagMatch.attrs),</span></span>
<span class="line"><span style="color:#A6ACCD;">        parent: currentParent,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    processIf(element);</span></span>
<span class="line"><span style="color:#A6ACCD;">    processFor(element);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!root){</span></span>
<span class="line"><span style="color:#A6ACCD;">        root = element</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if(currentParent){</span></span>
<span class="line"><span style="color:#A6ACCD;">        currentParent.children.push(element);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    stack.push(element);</span></span>
<span class="line"><span style="color:#A6ACCD;">    currentParent = element;</span></span>
<span class="line"><span style="color:#A6ACCD;">    continue;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A <code>getAndRemoveAttr</code> \u51FD\u6570\uFF0C\u7528\u6765\u4ECE <code>el</code> \u7684 <code>attrsMap</code> \u5C5E\u6027\u6216\u662F <code>attrsList</code> \u5C5E\u6027\u4E2D\u53D6\u51FA <code>name</code> \u5BF9\u5E94\u503C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function getAndRemoveAttr (el, name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let val</span></span>
<span class="line"><span style="color:#A6ACCD;">    if ((val = el.attrsMap[name]) != null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const list = el.attrsList</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0, l = list.length; i &lt; l; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (list[i].name === name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                list.splice(i, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">                break</span></span>
<span class="line"><span style="color:#A6ACCD;">            }   </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return val</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6BD4\u5982\u8BF4\u89E3\u6790\u793A\u4F8B\u7684 div \u6807\u7B7E\u5C5E\u6027\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">getAndRemoveAttr(el, &#39;v-for&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u6709\u5F97\u5230\u201Citem in sz\u201D\u3002</p><p>\u6709\u4E86\u8FD9\u4E2A\u51FD\u6570\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F00\u59CB\u5B9E\u73B0 <code>processFor</code> \u4E0E <code>processIf</code> \u4E86\u3002</p><p>\u201Cv-for\u201D\u4F1A\u5C06\u6307\u4EE4\u89E3\u6790\u6210 <code>for</code> \u5C5E\u6027\u4EE5\u53CA <code>alias</code> \u5C5E\u6027\uFF0C\u800C\u201Cv-if\u201D\u4F1A\u5C06\u6761\u4EF6\u90FD\u5B58\u5165 <code>ifConditions</code> \u6570\u7EC4\u4E2D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function processFor (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let exp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if ((exp = getAndRemoveAttr(el, &#39;v-for&#39;))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const inMatch = exp.match(forAliasRE);</span></span>
<span class="line"><span style="color:#A6ACCD;">        el.for = inMatch[2].trim();</span></span>
<span class="line"><span style="color:#A6ACCD;">        el.alias = inMatch[1].trim();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function processIf (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const exp = getAndRemoveAttr(el, &#39;v-if&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (exp) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        el.if = exp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!el.ifConditions) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            el.ifConditions = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        el.ifConditions.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">            exp: exp,</span></span>
<span class="line"><span style="color:#A6ACCD;">            block: el</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5230\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u628A <code>parse</code> \u7684\u8FC7\u7A0B\u4ECB\u7ECD\u5B8C\u4E86\uFF0C\u63A5\u4E0B\u6765\u770B\u4E00\u4E0B <code>optimize</code>\u3002</p><h2 id="optimize" tabindex="-1">optimize <a class="header-anchor" href="#optimize" aria-hidden="true">#</a></h2><p><code>optimize</code> \u4E3B\u8981\u4F5C\u7528\u5C31\u8DDF\u5B83\u7684\u540D\u5B57\u4E00\u6837\uFF0C\u7528\u4F5C\u300C\u4F18\u5316\u300D\u3002</p><p>\u8FD9\u4E2A\u6D89\u53CA\u5230\u540E\u9762\u8981\u8BB2 <code>patch</code> \u7684\u8FC7\u7A0B\uFF0C\u56E0\u4E3A <code>patch</code> \u7684\u8FC7\u7A0B\u5B9E\u9645\u4E0A\u662F\u5C06 VNode \u8282\u70B9\u8FDB\u884C\u4E00\u5C42\u4E00\u5C42\u7684\u6BD4\u5BF9\uFF0C\u7136\u540E\u5C06\u300C\u5DEE\u5F02\u300D\u66F4\u65B0\u5230\u89C6\u56FE\u4E0A\u3002\u90A3\u4E48\u4E00\u4E9B\u9759\u6001\u8282\u70B9\u662F\u4E0D\u4F1A\u6839\u636E\u6570\u636E\u53D8\u5316\u800C\u4EA7\u751F\u53D8\u5316\u7684\uFF0C\u8FD9\u4E9B\u8282\u70B9\u6211\u4EEC\u6CA1\u6709\u6BD4\u5BF9\u7684\u9700\u6C42\uFF0C\u662F\u4E0D\u662F\u53EF\u4EE5\u8DF3\u8FC7\u8FD9\u4E9B\u9759\u6001\u8282\u70B9\u7684\u6BD4\u5BF9\uFF0C\u4ECE\u800C\u8282\u7701\u4E00\u4E9B\u6027\u80FD\u5462\uFF1F</p><p>\u90A3\u4E48\u6211\u4EEC\u5C31\u9700\u8981\u4E3A\u9759\u6001\u7684\u8282\u70B9\u505A\u4E0A\u4E00\u4E9B\u300C\u6807\u8BB0\u300D\uFF0C\u5728 <code>patch</code> \u7684\u65F6\u5019\u6211\u4EEC\u5C31\u53EF\u4EE5\u76F4\u63A5\u8DF3\u8FC7\u8FD9\u4E9B\u88AB\u6807\u8BB0\u7684\u8282\u70B9\u7684\u6BD4\u5BF9\uFF0C\u4ECE\u800C\u8FBE\u5230\u300C\u4F18\u5316\u300D\u7684\u76EE\u7684\u3002</p><p>\u7ECF\u8FC7 <code>optimize</code> \u8FD9\u5C42\u7684\u5904\u7406\uFF0C\u6BCF\u4E2A\u8282\u70B9\u4F1A\u52A0\u4E0A <code>static</code> \u5C5E\u6027\uFF0C\u7528\u6765\u6807\u8BB0\u662F\u5426\u662F\u9759\u6001\u7684\u3002</p><p>\u5F97\u5230\u5982\u4E0B\u7ED3\u679C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;attrsMap&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;:class&#39;: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;class&#39;: &#39;demo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;v-if&#39;: &#39;isShow&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;classBinding&#39;: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;if&#39;: &#39;isShow&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;ifConditions&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;exp&#39;: &#39;isShow&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;staticClass&#39;: &#39;demo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;tag&#39;: &#39;div&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u9759\u6001\u6807\u5FD7 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;static&#39;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;children&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;attrsMap&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;v-for&#39;: &quot;item in sz&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;static&#39;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;alias&#39;: &quot;item&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;for&#39;: &#39;sz&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;forProcessed&#39;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;tag&#39;: &#39;span&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;children&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;expression&#39;: &#39;_s(item)&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;text&#39;: &#39;{{item}}&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;static&#39;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u7528\u4EE3\u7801\u5B9E\u73B0\u4E00\u4E0B <code>optimize</code> \u51FD\u6570\u3002</p><h3 id="isstatic" tabindex="-1">isStatic <a class="header-anchor" href="#isstatic" aria-hidden="true">#</a></h3><p>\u9996\u5148\u5B9E\u73B0\u4E00\u4E2A <code>isStatic</code> \u51FD\u6570\uFF0C\u4F20\u5165\u4E00\u4E2A node \u5224\u65AD\u8BE5 node \u662F\u5426\u662F\u9759\u6001\u8282\u70B9\u3002\u5224\u65AD\u7684\u6807\u51C6\u662F\u5F53 type \u4E3A 2\uFF08\u8868\u8FBE\u5F0F\u8282\u70B9\uFF09\u5219\u662F\u975E\u9759\u6001\u8282\u70B9\uFF0C\u5F53 type \u4E3A 3\uFF08\u6587\u672C\u8282\u70B9\uFF09\u7684\u65F6\u5019\u5219\u662F\u9759\u6001\u8282\u70B9\uFF0C\u5F53\u7136\uFF0C\u5982\u679C\u5B58\u5728 <code>if</code> \u6216\u8005 <code>for</code>\u8FD9\u6837\u7684\u6761\u4EF6\u7684\u65F6\u5019\uFF08\u8868\u8FBE\u5F0F\u8282\u70B9\uFF09\uFF0C\u4E5F\u662F\u975E\u9759\u6001\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function isStatic (node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (node.type === 2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (node.type === 3) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (!node.if &amp;&amp; !node.for);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="markstatic" tabindex="-1">markStatic <a class="header-anchor" href="#markstatic" aria-hidden="true">#</a></h3><p><code>markStatic</code> \u4E3A\u6240\u6709\u7684\u8282\u70B9\u6807\u8BB0\u4E0A <code>static</code>\uFF0C\u904D\u5386\u6240\u6709\u8282\u70B9\u901A\u8FC7 <code>isStatic</code> \u6765\u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u9759\u6001\u8282\u70B9\uFF0C\u6B64\u5916\uFF0C\u4F1A\u904D\u5386\u5F53\u524D\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\uFF0C\u5982\u679C\u5B50\u8282\u70B9\u662F\u975E\u9759\u6001\u8282\u70B9\uFF0C\u90A3\u4E48\u5F53\u524D\u8282\u70B9\u4E5F\u662F\u975E\u9759\u6001\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function markStatic (node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    node.static = isStatic(node);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (node.type === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0, l = node.children.length; i &lt; l; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            const child = node.children[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">            markStatic(child);</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!child.static) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                node.static = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="markstaticroots" tabindex="-1">markStaticRoots <a class="header-anchor" href="#markstaticroots" aria-hidden="true">#</a></h3><p>\u63A5\u4E0B\u6765\u662F <code>markStaticRoots</code> \u51FD\u6570\uFF0C\u7528\u6765\u6807\u8BB0 <code>staticRoot</code>\uFF08\u9759\u6001\u6839\uFF09\u3002\u8FD9\u4E2A\u51FD\u6570\u5B9E\u73B0\u6BD4\u8F83\u7B80\u5355\uFF0C\u7B80\u5355\u6765\u5C06\u5C31\u662F\u5982\u679C\u5F53\u524D\u8282\u70B9\u662F\u9759\u6001\u8282\u70B9\uFF0C\u540C\u65F6\u6EE1\u8DB3\u8BE5\u8282\u70B9\u5E76\u4E0D\u662F\u53EA\u6709\u4E00\u4E2A\u6587\u672C\u8282\u70B9\u5DE6\u53F3\u5B50\u8282\u70B9\uFF08\u4F5C\u8005\u8BA4\u4E3A\u8FD9\u79CD\u60C5\u51B5\u7684\u4F18\u5316\u6D88\u8017\u4F1A\u5927\u4E8E\u6536\u76CA\uFF09\u65F6\uFF0C\u6807\u8BB0 <code>staticRoot</code> \u4E3A true\uFF0C\u5426\u5219\u4E3A false\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function markStaticRoots (node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (node.type === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (node.static &amp;&amp; node.children.length &amp;&amp; !(</span></span>
<span class="line"><span style="color:#A6ACCD;">        node.children.length === 1 &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        node.children[0].type === 3</span></span>
<span class="line"><span style="color:#A6ACCD;">        )) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            node.staticRoot = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">            return;</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            node.staticRoot = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="optimize-1" tabindex="-1">optimize <a class="header-anchor" href="#optimize-1" aria-hidden="true">#</a></h3><p>\u6709\u4E86\u4EE5\u4E0A\u7684\u51FD\u6570\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0 <code>optimize</code> \u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function optimize (rootAst) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    markStatic(rootAst);</span></span>
<span class="line"><span style="color:#A6ACCD;">    markStaticRoots(rootAst);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="generate" tabindex="-1">generate <a class="header-anchor" href="#generate" aria-hidden="true">#</a></h2><p><code>generate</code> \u4F1A\u5C06 AST \u8F6C\u5316\u6210 render funtion \u5B57\u7B26\u4E32\uFF0C\u6700\u7EC8\u5F97\u5230 render \u7684\u5B57\u7B26\u4E32\u4EE5\u53CA staticRenderFns \u5B57\u7B26\u4E32\u3002</p><p>\u9996\u5148\u5E26\u5927\u5BB6\u611F\u53D7\u4E00\u4E0B\u771F\u5B9E\u7684 Vue.js \u7F16\u8BD1\u5F97\u5230\u7684\u7ED3\u679C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">with(this){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (isShow) ? </span></span>
<span class="line"><span style="color:#A6ACCD;">    _c(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;div&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            staticClass: &quot;demo&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            class: c</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        _l(</span></span>
<span class="line"><span style="color:#A6ACCD;">            (sz),</span></span>
<span class="line"><span style="color:#A6ACCD;">            function(item){</span></span>
<span class="line"><span style="color:#A6ACCD;">                return _c(&#39;span&#39;,[_v(_s(item))])</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    : _e()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u770B\u5230\u8FD9\u91CC\u53EF\u80FD\u4F1A\u7EB3\u95F7\u4E86\uFF0C\u8FD9\u4E9B <code>_c</code>\uFF0C<code>_l</code> \u5230\u5E95\u662F\u4EC0\u4E48\uFF1F\u5176\u5B9E\u4ED6\u4EEC\u662F Vue.js \u5BF9\u4E00\u4E9B\u51FD\u6570\u7684\u7B80\u5199\uFF0C\u6BD4\u5982\u8BF4 <code>_c</code> \u5BF9\u5E94\u7684\u662F <code>createElement</code> \u8FD9\u4E2A\u51FD\u6570\u3002\u6CA1\u5173\u7CFB\uFF0C\u6211\u4EEC\u628A\u5B83\u7528 VNode \u7684\u5F62\u5F0F\u5199\u51FA\u6765\u5C31\u4F1A\u660E\u767D\u4E86\uFF0C\u8FD9\u4E2A\u5BF9\u63A5\u4E0A\u4E00\u7AE0\u5199\u7684 VNode \u51FD\u6570\u3002</p><p>\u9996\u5148\u662F\u7B2C\u4E00\u5C42 div \u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return isShow ? (new VNode(&#39;div&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;staticClass&#39;: &#39;demo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;class&#39;: c</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, [ /*\u8FD9\u91CC\u8FD8\u6709\u5B50\u8282\u70B9*/ ])) : createEmptyVNode();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u5728 <code>children</code> \u4E2D\u52A0\u4E0A\u7B2C\u4E8C\u5C42 span \u53CA\u5176\u5B50\u6587\u672C\u8282\u70B9\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/* \u6E32\u67D3v-for\u5217\u8868 */</span></span>
<span class="line"><span style="color:#A6ACCD;">function renderList (val, render) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let ret = new Array(val.length);</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (i = 0, l = val.length; i &lt; l; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ret[i] = render(val[i], i);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return isShow ? (new VNode(&#39;div&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;staticClass&#39;: &#39;demo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;class&#39;: c</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, </span></span>
<span class="line"><span style="color:#A6ACCD;">        /* begin */</span></span>
<span class="line"><span style="color:#A6ACCD;">        renderList(sz, (item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return new VNode(&#39;span&#39;, {}, [</span></span>
<span class="line"><span style="color:#A6ACCD;">                createTextVNode(item);</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        /* end */</span></span>
<span class="line"><span style="color:#A6ACCD;">    )) : createEmptyVNode();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u90A3\u6211\u4EEC\u5982\u4F55\u6765\u5B9E\u73B0\u4E00\u4E2A <code>generate</code> \u5462\uFF1F</p><h3 id="genif" tabindex="-1">genIf <a class="header-anchor" href="#genif" aria-hidden="true">#</a></h3><p>\u9996\u5148\u5B9E\u73B0\u4E00\u4E2A\u5904\u7406 <code>if</code> \u6761\u4EF6\u7684 <code>genIf</code> \u51FD\u6570\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function genIf (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    el.ifProcessed = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!el.ifConditions.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &#39;_e()&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`(\${el.ifConditions[0].exp})?\${genElement(el.ifConditions[0].block)}: _e()\`</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="genfor" tabindex="-1">genFor <a class="header-anchor" href="#genfor" aria-hidden="true">#</a></h3><p>\u7136\u540E\u662F\u5904\u7406 <code>for</code> \u5FAA\u73AF\u7684\u51FD\u6570\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function genFor (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    el.forProcessed = true;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const exp = el.for;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const alias = el.alias;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const iterator1 = el.iterator1 ? \`,\${el.iterator1}\` : &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const iterator2 = el.iterator2 ? \`,\${el.iterator2}\` : &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`_l((\${exp}),\` +</span></span>
<span class="line"><span style="color:#A6ACCD;">        \`function(\${alias}\${iterator1}\${iterator2}){\` +</span></span>
<span class="line"><span style="color:#A6ACCD;">        \`return \${genElement(el)}\` +</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;})&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="gentext" tabindex="-1">genText <a class="header-anchor" href="#gentext" aria-hidden="true">#</a></h3><p>\u5904\u7406\u6587\u672C\u8282\u70B9\u7684\u51FD\u6570\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function genText (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`_v(\${el.expression})\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="genelement" tabindex="-1">genElement <a class="header-anchor" href="#genelement" aria-hidden="true">#</a></h3><p>\u63A5\u4E0B\u6765\u5B9E\u73B0\u4E00\u4E0B <code>genElement</code>\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5904\u7406\u8282\u70B9\u7684\u51FD\u6570\uFF0C\u56E0\u4E3A\u5B83\u4F9D\u8D56 <code>genChildren</code> \u4EE5\u53CAg <code>enNode</code> \uFF0C\u6240\u4EE5\u8FD9\u4E09\u4E2A\u51FD\u6570\u653E\u5728\u4E00\u8D77\u8BB2\u3002</p><p>genElement\u4F1A\u6839\u636E\u5F53\u524D\u8282\u70B9\u662F\u5426\u6709 <code>if</code> \u6216\u8005 <code>for</code> \u6807\u8BB0\u7136\u540E\u5224\u65AD\u662F\u5426\u8981\u7528 <code>genIf</code> \u6216\u8005 <code>genFor</code> \u5904\u7406\uFF0C\u5426\u5219\u901A\u8FC7 <code>genChildren</code> \u5904\u7406\u5B50\u8282\u70B9\uFF0C\u540C\u65F6\u5F97\u5230 <code>staticClass</code>\u3001<code>class</code> \u7B49\u5C5E\u6027\u3002</p><p><code>genChildren</code> \u6BD4\u8F83\u7B80\u5355\uFF0C\u904D\u5386\u6240\u6709\u5B50\u8282\u70B9\uFF0C\u901A\u8FC7 <code>genNode</code> \u5904\u7406\u540E\u7528\u201C\uFF0C\u201D\u9694\u5F00\u62FC\u63A5\u6210\u5B57\u7B26\u4E32\u3002</p><p><code>genNode</code> \u5219\u662F\u6839\u636E <code>type</code> \u6765\u5224\u65AD\u8BE5\u8282\u70B9\u662F\u7528\u6587\u672C\u8282\u70B9 <code>genText</code> \u8FD8\u662F\u6807\u7B7E\u8282\u70B9 <code>genElement</code> \u6765\u5904\u7406\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function genNode (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (el.type === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return genElement(el);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return genText(el);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function genChildren (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const children = el.children;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (children &amp;&amp; children.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return \`\${children.map(genNode).join(&#39;,&#39;)}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function genElement (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (el.if &amp;&amp; !el.ifProcessed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return genIf(el);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (el.for &amp;&amp; !el.forProcessed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return genFor(el);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const children = genChildren(el);</span></span>
<span class="line"><span style="color:#A6ACCD;">        let code;</span></span>
<span class="line"><span style="color:#A6ACCD;">        code = \`_c(&#39;\${el.tag},&#39;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            staticClass: \${el.attrsMap &amp;&amp; el.attrsMap[&#39;:class&#39;]},</span></span>
<span class="line"><span style="color:#A6ACCD;">            class: \${el.attrsMap &amp;&amp; el.attrsMap[&#39;class&#39;]},</span></span>
<span class="line"><span style="color:#A6ACCD;">        }\${</span></span>
<span class="line"><span style="color:#A6ACCD;">            children ? \`,\${children}\` : &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        })\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        return code;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="generate-1" tabindex="-1">generate <a class="header-anchor" href="#generate-1" aria-hidden="true">#</a></h3><p>\u6700\u540E\u6211\u4EEC\u4F7F\u7528\u4E0A\u9762\u7684\u51FD\u6570\u6765\u5B9E\u73B0 <code>generate</code>\uFF0C\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u6574\u4E2A AST \u4F20\u5165\u540E\u5224\u65AD\u662F\u5426\u4E3A\u7A7A\uFF0C\u4E3A\u7A7A\u5219\u8FD4\u56DE\u4E00\u4E2A div \u6807\u7B7E\uFF0C\u5426\u5219\u901A\u8FC7 <code>generate</code> \u6765\u5904\u7406\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function generate (rootAst) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const code = rootAst ? genElement(rootAst) : &#39;_c(&quot;div&quot;)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        render: \`with(this){return \${code}}\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7ECF\u5386\u8FC7\u8FD9\u4E9B\u8FC7\u7A0B\u4EE5\u540E\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u628A template \u987A\u5229\u8F6C\u6210\u4E86 render function \u4E86\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4ECB\u7ECD <code>patch</code> \u7684\u8FC7\u7A0B\uFF0C\u6765\u770B\u4E00\u4E0B\u5177\u4F53 VNode \u8282\u70B9\u5982\u4F55\u8FDB\u884C\u5DEE\u5F02\u7684\u6BD4\u5BF9\u3002</p><p>\u6CE8\uFF1A\u672C\u8282\u4EE3\u7801\u53C2\u8003<a href="https://github.com/answershuto/VueDemo/blob/master/%E3%80%8Atemplate%20%E6%A8%A1%E6%9D%BF%E6%98%AF%E6%80%8E%E6%A0%B7%E9%80%9A%E8%BF%87%20Compile%20%E7%BC%96%E8%AF%91%E7%9A%84%E3%80%8B.js" target="_blank" rel="noreferrer">\u300Atemplate \u6A21\u677F\u662F\u600E\u6837\u901A\u8FC7 Compile \u7F16\u8BD1\u7684\u300B</a>\u3002</p>`,69);function _(l,T,k,S,E,M){return c(),o("div",null,[r,s("p",null,[i,A,n(" \u7684 children \u4E2D\u5373\u53EF\u3002\u8FD8\u6709\u4E00\u79CD\u60C5\u51B5\u662F\u6587\u672C\u662F\u5982\u201C"+p(l.item)+"\u201D\u8FD9\u6837\u7684 Vue.js \u7684\u8868\u8FBE\u5F0F\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u9700\u8981\u7528 ",1),C,d]),y,s("p",null,[D,g,u,h,m,f,v,b,n(" \u6570\u7EC4\u4E2D\u53BB\uFF0C\u5982\u679C\u662F\u8868\u8FBE\u5F0F\uFF08"+p(l.item)+"\uFF09\uFF0C\u5219\u8F6C\u5316\u6210\u201C_s(${exp})\u201D\u7684\u5F62\u5F0F\u3002",1)]),x])}const P=e(t,[["render",_]]);export{w as __pageData,P as default};
