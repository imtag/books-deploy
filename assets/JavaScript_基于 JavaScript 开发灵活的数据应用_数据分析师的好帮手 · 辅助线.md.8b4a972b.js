import{_ as n,c as l,o as p,d as a,a as s}from"./app.c4f45da1.js";const u=JSON.parse('{"title":"\u6570\u636E\u5206\u6790\u5E08\u7684\u597D\u5E2E\u624B \xB7 \u8F85\u52A9\u7EBF","description":"","frontmatter":{},"headers":[{"level":2,"title":"16.1 \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u8F85\u52A9\u7EBF","slug":"_16-1-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u8F85\u52A9\u7EBF","link":"#_16-1-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u8F85\u52A9\u7EBF","children":[]},{"level":2,"title":"16.2 \u8F85\u52A9\u7EBF\u57FA\u672C\u64CD\u4F5C","slug":"_16-2-\u8F85\u52A9\u7EBF\u57FA\u672C\u64CD\u4F5C","link":"#_16-2-\u8F85\u52A9\u7EBF\u57FA\u672C\u64CD\u4F5C","children":[{"level":3,"title":"16.2.1 ECharts \u7684\u81EA\u5E26\u8F85\u52A9\u7EBF","slug":"_16-2-1-echarts-\u7684\u81EA\u5E26\u8F85\u52A9\u7EBF","link":"#_16-2-1-echarts-\u7684\u81EA\u5E26\u8F85\u52A9\u7EBF","children":[]}]},{"level":2,"title":"16.3 \u8F85\u52A9\u7EBF\u9AD8\u7EA7\u7528\u6CD5","slug":"_16-3-\u8F85\u52A9\u7EBF\u9AD8\u7EA7\u7528\u6CD5","link":"#_16-3-\u8F85\u52A9\u7EBF\u9AD8\u7EA7\u7528\u6CD5","children":[{"level":3,"title":"16.3.1 SPC \u63A7\u5236\u56FE","slug":"_16-3-1-spc-\u63A7\u5236\u56FE","link":"#_16-3-1-spc-\u63A7\u5236\u56FE","children":[]},{"level":3,"title":"16.3.2 \u5EFA\u7ACB\u6570\u636E\u96C6","slug":"_16-3-2-\u5EFA\u7ACB\u6570\u636E\u96C6","link":"#_16-3-2-\u5EFA\u7ACB\u6570\u636E\u96C6","children":[]},{"level":3,"title":"16.3.3 \u8BA1\u7B97 SPC \u63A7\u5236\u56FE\u7684\u5FC5\u8981\u6570\u503C","slug":"_16-3-3-\u8BA1\u7B97-spc-\u63A7\u5236\u56FE\u7684\u5FC5\u8981\u6570\u503C","link":"#_16-3-3-\u8BA1\u7B97-spc-\u63A7\u5236\u56FE\u7684\u5FC5\u8981\u6570\u503C","children":[]},{"level":3,"title":"16.3.4 \u7ED8\u5236 SPC \u63A7\u5236\u56FE","slug":"_16-3-4-\u7ED8\u5236-spc-\u63A7\u5236\u56FE","link":"#_16-3-4-\u7ED8\u5236-spc-\u63A7\u5236\u56FE","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"JavaScript/\u57FA\u4E8E JavaScript \u5F00\u53D1\u7075\u6D3B\u7684\u6570\u636E\u5E94\u7528/\u6570\u636E\u5206\u6790\u5E08\u7684\u597D\u5E2E\u624B \xB7 \u8F85\u52A9\u7EBF.md"}'),e={name:"JavaScript/\u57FA\u4E8E JavaScript \u5F00\u53D1\u7075\u6D3B\u7684\u6570\u636E\u5E94\u7528/\u6570\u636E\u5206\u6790\u5E08\u7684\u597D\u5E2E\u624B \xB7 \u8F85\u52A9\u7EBF.md"},c=a(`<h1 id="\u6570\u636E\u5206\u6790\u5E08\u7684\u597D\u5E2E\u624B-\xB7-\u8F85\u52A9\u7EBF" tabindex="-1">\u6570\u636E\u5206\u6790\u5E08\u7684\u597D\u5E2E\u624B \xB7 \u8F85\u52A9\u7EBF <a class="header-anchor" href="#\u6570\u636E\u5206\u6790\u5E08\u7684\u597D\u5E2E\u624B-\xB7-\u8F85\u52A9\u7EBF" aria-hidden="true">#</a></h1><hr><h1 id="\u7B2C-16-\u8282-\u6570\u636E\u5206\u6790\u5E08\u7684\u597D\u5E2E\u624B-\xB7-\u8F85\u52A9\u7EBF" tabindex="-1">\u7B2C 16 \u8282 \u6570\u636E\u5206\u6790\u5E08\u7684\u597D\u5E2E\u624B \xB7 \u8F85\u52A9\u7EBF <a class="header-anchor" href="#\u7B2C-16-\u8282-\u6570\u636E\u5206\u6790\u5E08\u7684\u597D\u5E2E\u624B-\xB7-\u8F85\u52A9\u7EBF" aria-hidden="true">#</a></h1><p>\u7ECF\u8FC7\u4E86\u4E00\u7CFB\u5217\u7684\u5B66\u4E60\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u638C\u63E1\u4E86\u591A\u79CD\u65E5\u5E38\u5F00\u53D1\u4E2D\u6700\u5E38\u7528\u7684\u6570\u636E\u56FE\u8868\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5BF9\u5404\u79CD\u7ED3\u6784\u7684\u6570\u636E\u96C6\u8FDB\u884C\u9884\u5904\u7406\u3002\u4F46\u662F\u5728\u6211\u4EEC\u8FDB\u884C\u53EF\u89C6\u5316\u56FE\u8868\u5F00\u53D1\u7684\u65F6\u5019\u7ECF\u5E38\u4F1A\u53D1\u73B0\u5982\u679C\u4EC5\u4EC5\u5C06\u6570\u636E\u4F7F\u7528\u6570\u636E\u7CFB\u5217\u5C55\u793A\u5728\u56FE\u8868\u4E0A\u7684\u8BDD\uFF0C\u662F\u6CA1\u529E\u6CD5\u975E\u5E38\u76F4\u89C2\u5730\u5C55\u793A\u6240\u6709\u6570\u636E\u4FE1\u606F\u7684\u3002</p><p>\u800C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u8F85\u52A9\u7EBF\u4FBF\u6210\u4E86\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u548C\u5206\u6790\u4EBA\u5458\u66F4\u597D\u5730\u5229\u7528\u53EF\u89C6\u5316\u56FE\u8868\u7684\u5F3A\u6709\u529B\u5DE5\u5177\u3002</p><h2 id="_16-1-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u8F85\u52A9\u7EBF" tabindex="-1">16.1 \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u8F85\u52A9\u7EBF <a class="header-anchor" href="#_16-1-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u8F85\u52A9\u7EBF" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u7B2C 5 \u8282\u4E2D\u5B66\u4E60\u4E86\u5982\u4F55\u5229\u7528 JavaScript \u5BF9\u6570\u636E\u4E2D\u7684\u4E00\u4E9B\u6570\u5B66\u7279\u5F81\u503C\u8FDB\u884C\u8BA1\u7B97\uFF0C\u800C\u8FD9\u4E9B\u6570\u5B66\u7279\u5F81\u503C\u5F80\u5F80\u53EF\u4EE5\u66F4\u597D\u3001\u66F4\u76F4\u89C2\u5730\u5C06\u6570\u636E\u7684\u57FA\u672C\u72B6\u51B5\u8868\u8FBE\u51FA\u6765\u3002</p><p>\u4F46\u662F\u8FD9\u4E9B\u6570\u5B66\u7279\u5F81\u503C\u5F80\u5F80\u53EA\u662F\u901A\u8FC7\u5BF9\u4E00\u7EC4\u6570\u503C\u8FDB\u884C\u8BA1\u7B97\u8FC7\u540E\u5F97\u5230\u7684\u53E6\u4E00\u7EC4\u6570\u503C\uFF0C\u90A3\u4E48\u8F85\u52A9\u7EBF\u4FBF\u662F\u5E2E\u52A9\u5F00\u53D1\u8005\u548C\u6570\u636E\u5206\u6790\u4EBA\u5458\u66F4\u597D\u5730\u4F7F\u7528\u8FD9\u4E9B\u6570\u5B66\u7279\u5F81\u503C\u7684\u6700\u597D\u5DE5\u5177\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/26/166ae5b6d639c844~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="_16-2-\u8F85\u52A9\u7EBF\u57FA\u672C\u64CD\u4F5C" tabindex="-1">16.2 \u8F85\u52A9\u7EBF\u57FA\u672C\u64CD\u4F5C <a class="header-anchor" href="#_16-2-\u8F85\u52A9\u7EBF\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a></h2><p>\u5728 ECharts \u4E2D\u8F85\u52A9\u7EBF\u5E76\u4E0D\u662F\u4E00\u79CD\u72EC\u7ACB\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5B83\u9700\u8981\u4F9D\u9644\u5728\u67D0\u4E00\u4E2A\u6570\u636E\u7CFB\u5217\u4E0A\u4EE5\u8868\u793A\u5176\u4E0E\u8BE5\u6570\u636E\u7CFB\u5217\u7684\u5173\u7CFB\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u6709\u4EE5\u4E0B\u6570\u636E\u96C6\uFF0C\u5E76\u5C06\u5176\u7ED8\u5236\u6210\u4E00\u4E2A\u7B80\u5355\u7684\u67F1\u72B6\u56FE\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const chartEl = document.querySelector(&#39;#chart&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const myChart = echarts.init(chartEl)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const data = [ 50, 61, 56, 46, 72, 53 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const option = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  dataset: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    source: data.map((y, i) =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">      x: i + 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      y</span></span>
<span class="line"><span style="color:#A6ACCD;">    }))</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  xAxis: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;category&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  yAxis: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;value&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  series: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;bar&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    encode: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      x: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      y: &#39;y&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/26/166ae5cdef22deb9~tplv-t2oaga2asx-image.image" alt=""></p><p>\u7136\u540E\u63A5\u4E0B\u6765\u6211\u4EEC\u901A\u8FC7\u975E\u5E38\u7B80\u5355\u7684\u8BA1\u7B97\uFF0C\u5F97\u51FA\u8FD9\u4E00\u7EC4\u6570\u636E\u7684\u5E73\u5747\u6570\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const mean = data.reduce((left, right) =&gt; left + right) / data.length</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(mean) //=&gt; 56.333333333333336</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5047\u5982\u8BF4\u9700\u8981\u5C06\u8FD9\u4E2A\u8BA1\u7B97\u7ED3\u679C\u5C55\u793A\u5728\u56FE\u8868\u4E0A\uFF0C\u90A3\u4E48\u6839\u636E\u76EE\u524D\u6240\u8BBE\u5B9A\u7684\u5750\u6807\u7CFB\u53EF\u77E5\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u4E00\u6761\u6A2A\u5411\u7684\u6C34\u5E73\u7EBF\uFF0C\u800C\u8FD9\u6761\u6C34\u5E73\u7EBF\u7684\u7EB5\u5411\u4F4D\u7F6E\u5E94\u8BE5\u4E3A <img src="https://juejin.cn/equation?tex=y" alt="y"> \u5750\u6807\u8F74\u4E0A\u8BE5\u6570\u503C\u6240\u5BF9\u5E94\u7684\u4F4D\u7F6E\u3002</p><p>\u90A3\u4E48\u5728 ECharts \u4E2D\u4FBF\u9700\u8981\u5728\u5BF9\u5E94\u7684\u6570\u636E\u7CFB\u5217\u4E0A\u6DFB\u52A0\u4E00\u4E2A <code>markLine</code> \u914D\u7F6E\uFF0C\u5E76\u5728 <code>markLine.data</code> \u4E2D\u6DFB\u52A0\u4E00\u4E2A <code>yAxis</code> \u503C\u4E3A\u5BF9\u5E94\u5E73\u5747\u503C\u7684\u914D\u7F6E\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const option = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  series: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    markLine: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: &#39;\u5E73\u5747\u7EBF&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          yAxis: mean</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/26/166ae5d4b84c7618~tplv-t2oaga2asx-image.image" alt=""></p><h3 id="_16-2-1-echarts-\u7684\u81EA\u5E26\u8F85\u52A9\u7EBF" tabindex="-1">16.2.1 ECharts \u7684\u81EA\u5E26\u8F85\u52A9\u7EBF <a class="header-anchor" href="#_16-2-1-echarts-\u7684\u81EA\u5E26\u8F85\u52A9\u7EBF" aria-hidden="true">#</a></h3><p>\u9664\u4E86\u6211\u4EEC\u53EF\u4EE5\u81EA\u884C\u8BA1\u7B97\u76EE\u6807\u8F85\u52A9\u7EBF\u7684\u6570\u503C\u4EE5\u5916\uFF0CECharts \u81EA\u8EAB\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u6BD4\u8F83\u5E38\u7528\u7684\u8F85\u52A9\u7EBF\uFF0C\u9664\u4E86\u524D\u9762\u6211\u4EEC\u81EA\u884C\u8BA1\u7B97\u7684\u5E73\u5747\u503C\u5916\uFF0C\u8FD8\u6709\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const option = {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  series: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    markLine: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;\u5E73\u5747\u503C&#39;, type: &#39;average&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;\u6700\u5927\u503C&#39;, type: &#39;max&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;\u6700\u5C0F\u503C&#39;, type: &#39;min&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/26/166ae5eaf624325f~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="_16-3-\u8F85\u52A9\u7EBF\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1">16.3 \u8F85\u52A9\u7EBF\u9AD8\u7EA7\u7528\u6CD5 <a class="header-anchor" href="#_16-3-\u8F85\u52A9\u7EBF\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u662F\u5426\u89C9\u5F97\u524D\u9762\u7684\u8F85\u52A9\u7EBF\u90FD\u592A\u7B80\u5355\u800C\u6CA1\u6709\u6311\u6218\u6027\u4E86\uFF1F\u606D\u559C\u4F60\u5DF2\u7ECF\u62E5\u6709\u4E86\u6210\u4E3A\u5927\u725B\u7684\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u4F18\u79C0\u7279\u70B9\uFF0C\u90A3\u4E48\u6211\u4EEC\u63A5\u4E0B\u6765\u4FBF\u9700\u8981\u5411\u66F4\u590D\u6742\u3001\u66F4\u5177\u6709\u529F\u80FD\u6027\u7684\u8F85\u52A9\u7EBF\u5E94\u7528\u8FDB\u53D1\u5427\u3002</p><h3 id="_16-3-1-spc-\u63A7\u5236\u56FE" tabindex="-1">16.3.1 SPC \u63A7\u5236\u56FE <a class="header-anchor" href="#_16-3-1-spc-\u63A7\u5236\u56FE" aria-hidden="true">#</a></h3><p>\u5728\u4F20\u7EDF\u7684\u7EDF\u8BA1\u5B66\u9886\u57DF\u4E2D\uFF0C\u6709\u4E00\u79CD\u5E7F\u6CDB\u7528\u4E8E\u5DE5\u4E1A\u751F\u4EA7\u7684\u7EDF\u8BA1\u65B9\u6CD5\u2014\u2014\u8D28\u91CF\u7BA1\u7406\u3002\u5728\u5DE5\u4E1A\u751F\u4EA7\u9886\u57DF\u4E2D\uFF0C\u4F01\u4E1A\u4E3A\u4E86\u80FD\u591F\u7A33\u5B9A\u4E14\u957F\u671F\u5730\u53D1\u5C55\u4EA7\u54C1\u7684\u8D28\u91CF\u548C\u9500\u91CF\uFF0C\u5FC5\u987B\u8981\u5BF9\u4EA7\u54C1\u751F\u4EA7\u8FC7\u7A0B\u4E2D\u7684\u5404\u79CD\u6570\u636E\u8FDB\u884C\u76D1\u63A7\u548C\u5206\u6790\uFF0C\u6BD4\u5982\u751F\u4EA7\u539F\u6599\u3001\u6210\u672C\u3001\u4EA7\u54C1\u7279\u6027\u3001\u8D28\u91CF\u6307\u6807\u3001\u9500\u91CF\u7B49\u7B49\u3002</p><p>\u800C\u5176\u4E2D\u6210\u672C\u548C\u8D28\u91CF\u6307\u6807\u76F4\u63A5\u5173\u7CFB\u5230\u4E86\u4F01\u4E1A\u7684\u957F\u671F\u751F\u5B58\u6761\u4EF6\uFF0C\u6240\u4EE5\u5BF9\u8FD9\u4E9B\u6570\u636E\u7684\u76D1\u63A7\u548C\u5206\u6790\u5219\u663E\u5F97\u5C24\u4E3A\u91CD\u8981\u3002\u5176\u4E2D\u6709\u4E00\u79CD\u540D\u4E3A SPC \u63A7\u5236\u56FE\u7684\u6570\u636E\u53EF\u89C6\u5316\u56FE\u8868\u7684\u5E94\u7528\u975E\u5E38\u5E7F\u6CDB\uFF0C\u5B83\u901A\u8FC7\u5BF9\u6570\u636E\u8FDB\u884C\u8BA1\u7B97\u5E76\u5C06\u8BA1\u7B97\u7ED3\u679C\u4F5C\u4E3A\u8F85\u52A9\u7EBF\u7ED8\u5236\u5728\u56FE\u8868\u4E0A\u3002\u8FD9\u4E9B\u8F85\u52A9\u7EBF\u53EF\u4EE5\u5E2E\u52A9\u6570\u636E\u5206\u6790\u4EBA\u5458\u975E\u5E38\u76F4\u89C2\u5730\u770B\u5230\u6570\u636E\u4E2D\u7684\u603B\u4F53\u72B6\u51B5\u548C\u7A81\u53D1\u7684\u5F02\u5E38\u60C5\u51B5\u7B49\u3002</p><p>SPC \u63A7\u5236\u56FE\u4E8B\u5B9E\u4E0A\u662F\u591A\u79CD\u63A7\u5236\u56FE\u8868\u7684\u603B\u79F0\uFF0C\u4F46\u5176\u6838\u5FC3\u90FD\u662F\u76F8\u4F3C\u7684\u3002SPC \u63A7\u5236\u56FE\u4E3B\u8981\u901A\u8FC7\u8BA1\u7B97\u4E09\u4E2A\u63A7\u5236\u7EBF\uFF1AUCL\uFF08\u63A7\u5236\u4E0A\u9650\uFF09\u3001CL\uFF08\u4E2D\u5FC3\u7EBF\uFF09\u548C LCL\uFF08\u63A7\u5236\u4E0B\u9650\uFF09\u3002\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\u8FD8\u53EF\u4EE5\u5C06\u63A7\u5236\u56FE\u7684\u4E0A\u4E0B\u9650\u7684\u4E2D\u95F4\u533A\u57DF\u5206\u4E3A 6 \u7B49\u4EFD\uFF0C\u5E76\u5206\u522B\u6807\u8BB0\u4E3A\u63A7\u5236 A \u533A\u3001B \u533A\u4EE5\u53CA C \u533A\uFF0C\u5E76\u901A\u8FC7\u8BB0\u5F55\u6570\u636E\u70B9\u843D\u5728\u8FD9\u4E09\u4E2A\u63A7\u5236\u533A\u57DF\u7684\u6570\u91CF\u6765\u5BF9\u6570\u636E\u7684\u7A33\u5B9A\u6027\u8FDB\u884C\u76F4\u89C2\u7684\u5224\u5B9A\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/26/166ae6040e8e262f~tplv-t2oaga2asx-image.image" alt=""></p><blockquote><p>\u6CE8\uFF1A\u56FE\u7247\u6765\u6E90 Wikipedia \u2014\u2014 <a href="https://en.wikipedia.org/wiki/Western_Electric_rules" target="_blank" rel="noreferrer">Western Electric rules</a></p></blockquote><h3 id="_16-3-2-\u5EFA\u7ACB\u6570\u636E\u96C6" tabindex="-1">16.3.2 \u5EFA\u7ACB\u6570\u636E\u96C6 <a class="header-anchor" href="#_16-3-2-\u5EFA\u7ACB\u6570\u636E\u96C6" aria-hidden="true">#</a></h3><p>\u5047\u8BBE\u6211\u4EEC\u901A\u8FC7\u968F\u673A\u65B9\u6CD5\u751F\u6210\u4E00\u7EC4\u6570\u503C\u6570\u636E\uFF08\u53C2\u8003\u7B2C 11 \u8282\uFF09\uFF0C\u5E76\u5C06\u5176\u7ED8\u5236\u5230\u6298\u7EBF\u56FE\u4E0A\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const X = [ 100 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">const n = 50 - 1</span></span>
<span class="line"><span style="color:#A6ACCD;">const r = 0.1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function randomCoefficient(r) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const rand = Math.random()</span></span>
<span class="line"><span style="color:#A6ACCD;">  const coefficient = (rand - 0.5) * 2 * r</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return coefficient</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i = 0; i &lt; n; ++i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const coefficient = randomCoefficient(r)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const newValue = X[i] * (1 + coefficient)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  X.push(newValue)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(X) //=&gt; [ 100, 95.23, ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const data = X.map(function(x, i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return { time: i + 1, value: x }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const option = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  dataset: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    source: data</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  xAxis: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;value&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;i&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    nameLocation: &#39;middle&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    nameGap: 25</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  yAxis: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;value&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    scale: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    nameLocation: &#39;end&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  series: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;line&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    encode: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      x: &#39;time&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      y: &#39;value&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/26/166ae5fa40ead45b~tplv-t2oaga2asx-image.image" alt=""></p><h3 id="_16-3-3-\u8BA1\u7B97-spc-\u63A7\u5236\u56FE\u7684\u5FC5\u8981\u6570\u503C" tabindex="-1">16.3.3 \u8BA1\u7B97 SPC \u63A7\u5236\u56FE\u7684\u5FC5\u8981\u6570\u503C <a class="header-anchor" href="#_16-3-3-\u8BA1\u7B97-spc-\u63A7\u5236\u56FE\u7684\u5FC5\u8981\u6570\u503C" aria-hidden="true">#</a></h3><p>SPC \u63A7\u5236\u56FE\u6240\u4F7F\u7528\u7684\u6570\u636E\u4E3B\u8981\u9700\u8981\u8BA1\u7B97\u6570\u636E\u7684\u5E73\u5747\u503C\u548C\u6807\u51C6\u5DEE\uFF08Standard deviation\uFF0C\u5E76\u975E\u6807\u51C6\u8BEF Standard error\uFF09\u3002\u5E73\u5747\u503C\u7684\u8BA1\u7B97\u6211\u4EEC\u4F7F\u7528 Lodash \u4E2D\u7684 <code>_.mean</code> \u5373\u53EF\uFF0C\u4F46 Lodash \u5E76\u6CA1\u6709\u63D0\u4F9B\u6807\u51C6\u5DEE <img src="https://juejin.cn/equation?tex=%5Csigma" alt="igma"> \u7684\u8BA1\u7B97\u65B9\u6CD5\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD9\u91CC\u4E5F\u9700\u8981\u81EA\u884C\u5B9E\u73B0\u4E00\u4E0B\u6807\u51C6\u5DEE\u7684\u8BA1\u7B97\u65B9\u6CD5\u3002<img src="https://juejin.cn/equation?tex=N" alt="N"> \u4E3A\u6570\u7EC4 <img src="https://juejin.cn/equation?tex=x" alt="x"> \u7684\u957F\u5EA6\uFF0C<img src="https://juejin.cn/equation?tex=%5Coverline%7Bx%7D" alt="verline{x}"> \u4E3A\u6570\u7EC4 <img src="https://juejin.cn/equation?tex=x" alt="x"> \u7684\u5E73\u5747\u503C\u3002</p>`,38),o=s("p",{"align*":""},[s("img",{src:"https://juejin.cn/equation?tex=%5Cbegin%7Balign*%7D%0A%5Coverline%7Bx%7D%20%26%3D%20%5Cfrac%7B%5Csum%5E%7BN%7D_%7Bi%3D1%7D%20x_i%7D%7BN%7D%20%5C%5C%0A%5Csigma%20%26%3D%20%5Csqrt%7B%5Cfrac%7B%5Csum%5E%7BN%7D_%7Bi%3D1%7D(x_i%20-%20%5Coverline%7Bx%7D)%5E2%7D%7BN%20-%201%7D%7D%0A%5Cend%7Balign*%7D",alt:`egin{align*}
verline{x} &= rac{um^{N}{i=1} x_i}{N} 
igma &= qrt{rac{um^{N}{i=1}(x_i - verline{x})^2}{N - 1}}
nd{align*}`})],-1),t=a(`<div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function sd(array) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const mean = _.mean(array)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  const top = array</span></span>
<span class="line"><span style="color:#A6ACCD;">    .map(function(x) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Math.pow(x - mean, 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    .reduce(function(left, right) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return left + right</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  const bottom = array.length - 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  return Math.sqrt(top / bottom)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BA1\u7B97\u6240\u5F97\u6570\u636E\u7684\u5E73\u5747\u503C\u548C\u6807\u51C6\u5DEE\u540E\uFF0C\u4FBF\u53EF\u4EE5\u8BA1\u7B97 SPC \u63A7\u5236\u56FE\u4E2D\u7684 UCL \u548C LCL \u63A7\u5236\u503C\u4E86\u3002UCL \u548C LCL \u7684\u503C\u5206\u522B\u4E3A\u4EE5\u4E0B\uFF1A</p><p><img src="https://juejin.cn/equation?tex=UCL%20%3D%20%5Coverline%7Bx%7D%20%2B%203%20%5Ctimes%20%5Csigma%20%5C%5C%0ALCL%20%3D%20%5Coverline%7Bx%7D%20-%203%20%5Ctimes%20%5Csigma" alt="UCL = verline{x} + 3 imes igma 
LCL = verline{x} - 3 imes igma"></p><p>\u5176\u4E2D\u4ECE\u4E0A\u9762\u7684\u56FE\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0CSPC \u63A7\u5236\u56FE\u53EF\u4EE5\u5C06\u4ECE LCL \u5230 UCL \u4E2D\u95F4\u7684\u533A\u57DF\u7B49\u5206\u4E3A 6 \u4EFD\uFF0C\u663E\u7136\u53EF\u4EE5\u5F97\u51FA\u63A7\u5236\u533A\u57DF\u7684\u533A\u95F4\u4E3A\u4EE5\u4E0B\uFF1A</p>`,4),i=s("p",{"align*":""},[s("img",{src:"https://juejin.cn/equation?tex=%5Cbegin%7Balign*%7D%0A%26%20A%20%3D%20%5Cleft%5C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5Cbegin%7Barray%7D%7Blr%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%5Coverline%7Bx%7D%20%2B%202%20*%20%5Csigma%2C%20%5Coverline%7Bx%7D%20%2B%203%20*%20%5Csigma%5D%2C%20%26%20%20%5C%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%5Coverline%7Bx%7D%20-%203%20*%20%5Csigma%2C%20%5Coverline%7Bx%7D%20-%202%20*%20%5Csigma%5D%20%26%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5Cend%7Barray%7D%0A%5Cright.%20%5C%5C%0A%26%20B%20%3D%20%5Cleft%5C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5Cbegin%7Barray%7D%7Blr%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%5Coverline%7Bx%7D%20%2B%20%5Csigma%2C%20%5Coverline%7Bx%7D%20%2B%202%20*%20%5Csigma%5D%2C%20%26%20%20%5C%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%5Coverline%7Bx%7D%20-%202%20*%20%5Csigma%2C%20%5Coverline%7Bx%7D%20-%20%5Csigma%5D%20%26%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5Cend%7Barray%7D%0A%5Cright.%20%5C%5C%0A%26%20C%20%3D%20%5B%5Coverline%7Bx%7D%20-%20%5Csigma%2C%20%5Coverline%7Bx%7D%20%2B%20%5Csigma%5D%0A%5Cend%7Balign*%7D",alt:`egin{align*}
& A = eft
egin{array}{lr}
[verline{x} + 2 * igma, verline{x} + 3 * igma], &  
[verline{x} - 3 * igma, verline{x} - 2 * igma] &nd{array}
ight. 
& B = eft
egin{array}{lr}
[verline{x} + igma, verline{x} + 2 * igma], &  
[verline{x} - 2 * igma, verline{x} - igma] &nd{array}
ight. 
& C = [verline{x} - igma, verline{x} + igma]
nd{align*}`})],-1),C=a(`<p>\u5728 EChart \u4E2D\uFF0C\u9664\u4E86\u8F85\u52A9\u7EBF\u4EE5\u5916\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u5DE5\u5177 \u2014\u2014 <code>visualMap</code>\u3002\u5B83\u53EF\u4EE5\u5C06\u56FE\u8868\u4E2D\u67D0\u4E00\u4E2A\u533A\u57DF\u5185\u7684\u5143\u7D20\u7EDF\u4E00\u4E3A\u4E00\u79CD\u989C\u8272\uFF0C\u8FD9\u6B63\u597D\u53EF\u4EE5\u5E94\u7528\u5230 SPC \u63A7\u5236\u56FE\u7684\u4E09\u4E2A\u63A7\u5236\u533A\u57DF\u4E0A\u3002</p><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u8BA1\u7B97\u6240\u9700\u8981\u7684\u6570\u636E\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const mean_X = _.mean(X)</span></span>
<span class="line"><span style="color:#A6ACCD;">const sd_X = sd(X)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const ucl = mean_X + 3 * sd_X</span></span>
<span class="line"><span style="color:#A6ACCD;">const lcl = mean_X - 3 * sd_X</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const areaA = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ mean_X + 2 * sd_X, mean_X + 3 * sd_X ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ mean_X - 3 * sd_X, mean_X - 2 * sd_X ]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">const areaB = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ mean_X + sd_X, mean_X + 2 * sd_X ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ mean_X - 2 * sd_X, mean_X - sd_X ]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">const areaC = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ mean_X - sd_X, mean_X + sd_X ]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_16-3-4-\u7ED8\u5236-spc-\u63A7\u5236\u56FE" tabindex="-1">16.3.4 \u7ED8\u5236 SPC \u63A7\u5236\u56FE <a class="header-anchor" href="#_16-3-4-\u7ED8\u5236-spc-\u63A7\u5236\u56FE" aria-hidden="true">#</a></h3><p>\u9996\u5148\u6211\u4EEC\u5C06\u63A7\u5236\u7EBF\u901A\u8FC7 <code>markLine</code> \u7EC4\u4EF6\u7ED8\u5236\u5728\u56FE\u8868\u4E0A\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const option = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  yAxis: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;value&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    nameLocation: &#39;end&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    max: Math.max(ucl + 5, Math.max(...X)),</span></span>
<span class="line"><span style="color:#A6ACCD;">    min: Math.min(lcl - 5, Math.min(...X))</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  series: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    markLine: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;UCL&#39;, yAxis: ucl },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;Area B&#39;, yAxis: areaB[0][1] },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;Area C&#39;, yAxis: areaC[0][1] },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;Mean&#39;, yAxis: mean_X },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;Area C&#39;, yAxis: areaC[0][0] },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;Area B&#39;, yAxis: areaB[1][0] },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;LCL&#39;, yAxis: lcl }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/26/166ae602a9bf03e7~tplv-t2oaga2asx-image.image" alt=""></p><p>\u7136\u540E\u7ED3\u5408 <code>visualMap</code> \u6211\u4EEC\u4FBF\u53EF\u4EE5\u5C06\u5B8C\u6574\u7684 SPC \u63A7\u5236\u56FE\u7ED8\u5236\u51FA\u6765\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const option = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  visualMap: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    top: 10, right: 10, // visualMap \u56FE\u4F8B\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    pieces: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      /* Area A */ { gt: areaA[0][0], lte: areaA[0][1], color: &#39;#cc0033&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      /* Area B */ { gt: areaB[0][0], lte: areaB[0][1], color: &#39;#ffde33&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      /* Area C */ { gt: areaC[0][0], lte: areaC[0][1], color: &#39;#096&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      /* Area B */ { gt: areaB[1][0], lte: areaB[1][1], color: &#39;#ffde33&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      /* Area A */ { gt: areaA[1][0], lte: areaA[1][1], color: &#39;#cc0033&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/26/166ae608250a756d~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u5728\u6211\u4EEC\u8FDB\u884C\u6570\u636E\u5206\u6790\u7684\u65F6\u5019\uFF0C\u5982\u679C\u53EA\u6709\u72EC\u7ACB\u7684\u6570\u636E\u56FE\u8868\u800C\u6CA1\u6709\u52A0\u4EE5\u8F85\u52A9\u7684\u5DE5\u5177\uFF0C\u6570\u636E\u5206\u6790\u5DE5\u4F5C\u7684\u6548\u7387\u5C31\u4F1A\u5927\u5927\u964D\u4F4E\u3002\u6240\u4EE5\u5229\u7528\u6570\u5B66\u8BA1\u7B97\u914D\u5408\u56FE\u5F62\u5C55\u793A\u7684\u65B9\u5F0F\u4E3A\u6570\u636E\u56FE\u8868\u6DFB\u52A0\u8F85\u52A9\u7EBF\u4EE5\u53CA\u5176\u4ED6\u8F85\u52A9\u5DE5\u5177\uFF08\u5982\u6807\u6CE8\u533A\u57DF\u7B49\uFF09\uFF0C\u53EF\u4EE5\u4E3A\u6570\u636E\u56FE\u8868\u7684\u4F7F\u7528\u8005\u5E26\u6765\u6781\u5927\u7684\u4FBF\u5229\u6027\u3002</p>`,12),r=[c,o,t,i,C];function A(y,D,d,g,m,_){return p(),l("div",null,r)}const x=n(e,[["render",A]]);export{u as __pageData,x as default};
