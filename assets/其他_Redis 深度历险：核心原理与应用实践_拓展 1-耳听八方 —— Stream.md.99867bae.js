import{_ as s,c as n,o as a,d as l}from"./app.e5528619.js";const D=JSON.parse('{"title":"\u62D3\u5C55 1-\u8033\u542C\u516B\u65B9 \u2014\u2014 Stream","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6D88\u606F ID","slug":"\u6D88\u606F-id","link":"#\u6D88\u606F-id","children":[]},{"level":2,"title":"\u6D88\u606F\u5185\u5BB9","slug":"\u6D88\u606F\u5185\u5BB9","link":"#\u6D88\u606F\u5185\u5BB9","children":[]},{"level":2,"title":"\u589E\u5220\u6539\u67E5","slug":"\u589E\u5220\u6539\u67E5","link":"#\u589E\u5220\u6539\u67E5","children":[]},{"level":2,"title":"\u72EC\u7ACB\u6D88\u8D39","slug":"\u72EC\u7ACB\u6D88\u8D39","link":"#\u72EC\u7ACB\u6D88\u8D39","children":[]},{"level":2,"title":"\u521B\u5EFA\u6D88\u8D39\u7EC4","slug":"\u521B\u5EFA\u6D88\u8D39\u7EC4","link":"#\u521B\u5EFA\u6D88\u8D39\u7EC4","children":[]},{"level":2,"title":"\u6D88\u8D39","slug":"\u6D88\u8D39","link":"#\u6D88\u8D39","children":[]},{"level":2,"title":"Stream \u6D88\u606F\u592A\u591A\u600E\u4E48\u529E?","slug":"stream-\u6D88\u606F\u592A\u591A\u600E\u4E48\u529E","link":"#stream-\u6D88\u606F\u592A\u591A\u600E\u4E48\u529E","children":[]},{"level":2,"title":"\u6D88\u606F\u5982\u679C\u5FD8\u8BB0 ACK \u4F1A\u600E\u6837?","slug":"\u6D88\u606F\u5982\u679C\u5FD8\u8BB0-ack-\u4F1A\u600E\u6837","link":"#\u6D88\u606F\u5982\u679C\u5FD8\u8BB0-ack-\u4F1A\u600E\u6837","children":[]},{"level":2,"title":"PEL \u5982\u4F55\u907F\u514D\u6D88\u606F\u4E22\u5931?","slug":"pel-\u5982\u4F55\u907F\u514D\u6D88\u606F\u4E22\u5931","link":"#pel-\u5982\u4F55\u907F\u514D\u6D88\u606F\u4E22\u5931","children":[]},{"level":2,"title":"Stream \u7684\u9AD8\u53EF\u7528","slug":"stream-\u7684\u9AD8\u53EF\u7528","link":"#stream-\u7684\u9AD8\u53EF\u7528","children":[]},{"level":2,"title":"\u5206\u533A Partition","slug":"\u5206\u533A-partition","link":"#\u5206\u533A-partition","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u62D3\u5C55 1-\u8033\u542C\u516B\u65B9 \u2014\u2014 Stream.md"}'),e={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u62D3\u5C55 1-\u8033\u542C\u516B\u65B9 \u2014\u2014 Stream.md"},p=l(`<h1 id="\u62D3\u5C55-1-\u8033\u542C\u516B\u65B9-\u2014\u2014-stream" tabindex="-1">\u62D3\u5C55 1-\u8033\u542C\u516B\u65B9 \u2014\u2014 Stream <a class="header-anchor" href="#\u62D3\u5C55-1-\u8033\u542C\u516B\u65B9-\u2014\u2014-stream" aria-hidden="true">#</a></h1><hr><h1 id="\u62D3\u5C55-1\uFF1A\u8033\u542C\u516B\u65B9-\u2014\u2014-stream" tabindex="-1">\u62D3\u5C55 1\uFF1A\u8033\u542C\u516B\u65B9 \u2014\u2014 Stream <a class="header-anchor" href="#\u62D3\u5C55-1\uFF1A\u8033\u542C\u516B\u65B9-\u2014\u2014-stream" aria-hidden="true">#</a></h1><blockquote><p>\u8FD9\u7BC7\u6587\u7AE0\u7684\u4E3B\u8981\u90E8\u5206\u662F\u6211\u5728 2018 \u5E74 6 \u6708 1 \u65E5 \u53D1\u8868\u7684\u5185\u5BB9\uFF0C\u5F53\u65F6 Redis5.0 \u521A\u521A\u88AB Antirez \u653E\u51FA\u6765\uFF0C\u8001\u94B1\u62A2\u5148\u5206\u6790\u4E86 Redis5.0 \u6700\u91CD\u8981\u7684\u7279\u6027 Stream\uFF0C\u4E5F\u88AB\u6280\u672F\u5708\u5927\u53F7\u300C\u9AD8\u53EF\u7528\u67B6\u6784\u300D\u6536\u5F55\u8F6C\u8F7D\uFF0C\u53D7\u5230\u4E86\u5E7F\u6CDB\u5173\u6CE8\u3002\u4E8B\u540E\u6211\u53C8\u5BF9\u6587\u7AE0\u7684\u5185\u5BB9\u505A\u4E86\u8FDB\u4E00\u6B65\u4F18\u5316\uFF0C\u5E76\u6574\u5408\u4E86\u4E00\u4E9B\u8BFB\u8005\u7684\u7591\u96BE\u95EE\u9898\u89E3\u7B54\u3002</p></blockquote><p>Redis5.0 \u88AB\u4F5C\u8005 Antirez \u7A81\u7136\u653E\u4E86\u51FA\u6765\uFF0C\u589E\u52A0\u4E86\u5F88\u591A\u65B0\u7684\u7279\u8272\u529F\u80FD\u3002\u800C Redis5.0 \u6700\u5927\u7684\u65B0\u7279\u6027\u5C31\u662F\u591A\u51FA\u4E86\u4E00\u4E2A\u6570\u636E\u7ED3\u6784 <strong>Stream</strong>\uFF0C\u5B83\u662F\u4E00\u4E2A\u65B0\u7684\u5F3A\u5927\u7684\u652F\u6301\u591A\u64AD\u7684\u53EF\u6301\u4E45\u5316\u7684\u6D88\u606F\u961F\u5217\uFF0C\u4F5C\u8005\u5766\u8A00 Redis Stream \u72E0\u72E0\u5730\u501F\u9274\u4E86 Kafka \u7684\u8BBE\u8BA1\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/1/163bae206a809d56~tplv-t2oaga2asx-image.image" alt=""></p><p>Redis Stream \u7684\u7ED3\u6784\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u5B83\u6709\u4E00\u4E2A\u6D88\u606F\u94FE\u8868\uFF0C\u5C06\u6240\u6709\u52A0\u5165\u7684\u6D88\u606F\u90FD\u4E32\u8D77\u6765\uFF0C\u6BCF\u4E2A\u6D88\u606F\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684 ID \u548C\u5BF9\u5E94\u7684\u5185\u5BB9\u3002\u6D88\u606F\u662F\u6301\u4E45\u5316\u7684\uFF0CRedis \u91CD\u542F\u540E\uFF0C\u5185\u5BB9\u8FD8\u5728\u3002</p><p>\u6BCF\u4E2A Stream \u90FD\u6709\u552F\u4E00\u7684\u540D\u79F0\uFF0C\u5B83\u5C31\u662F Redis \u7684 key\uFF0C\u5728\u6211\u4EEC\u9996\u6B21\u4F7F\u7528<code>xadd</code>\u6307\u4EE4\u8FFD\u52A0\u6D88\u606F\u65F6\u81EA\u52A8\u521B\u5EFA\u3002</p><p>\u6BCF\u4E2A Stream \u90FD\u53EF\u4EE5\u6302\u591A\u4E2A\u6D88\u8D39\u7EC4\uFF0C\u6BCF\u4E2A\u6D88\u8D39\u7EC4\u4F1A\u6709\u4E2A\u6E38\u6807<code>last_delivered_id</code>\u5728 Stream \u6570\u7EC4\u4E4B\u4E0A\u5F80\u524D\u79FB\u52A8\uFF0C\u8868\u793A\u5F53\u524D\u6D88\u8D39\u7EC4\u5DF2\u7ECF\u6D88\u8D39\u5230\u54EA\u6761\u6D88\u606F\u4E86\u3002\u6BCF\u4E2A\u6D88\u8D39\u7EC4\u90FD\u6709\u4E00\u4E2A Stream \u5185\u552F\u4E00\u7684\u540D\u79F0\uFF0C\u6D88\u8D39\u7EC4\u4E0D\u4F1A\u81EA\u52A8\u521B\u5EFA\uFF0C\u5B83\u9700\u8981\u5355\u72EC\u7684\u6307\u4EE4<code>xgroup create</code>\u8FDB\u884C\u521B\u5EFA\uFF0C\u9700\u8981\u6307\u5B9A\u4ECE Stream \u7684\u67D0\u4E2A\u6D88\u606F ID \u5F00\u59CB\u6D88\u8D39\uFF0C\u8FD9\u4E2A ID \u7528\u6765\u521D\u59CB\u5316<code>last_delivered_id</code>\u53D8\u91CF\u3002</p><p>\u6BCF\u4E2A\u6D88\u8D39\u7EC4 (Consumer Group) \u7684\u72B6\u6001\u90FD\u662F\u72EC\u7ACB\u7684\uFF0C\u76F8\u4E92\u4E0D\u53D7\u5F71\u54CD\u3002\u4E5F\u5C31\u662F\u8BF4\u540C\u4E00\u4EFD Stream \u5185\u90E8\u7684\u6D88\u606F\u4F1A\u88AB\u6BCF\u4E2A\u6D88\u8D39\u7EC4\u90FD\u6D88\u8D39\u5230\u3002</p><p>\u540C\u4E00\u4E2A\u6D88\u8D39\u7EC4 (Consumer Group) \u53EF\u4EE5\u6302\u63A5\u591A\u4E2A\u6D88\u8D39\u8005 (Consumer)\uFF0C\u8FD9\u4E9B\u6D88\u8D39\u8005\u4E4B\u95F4\u662F\u7ADE\u4E89\u5173\u7CFB\uFF0C\u4EFB\u610F\u4E00\u4E2A\u6D88\u8D39\u8005\u8BFB\u53D6\u4E86\u6D88\u606F\u90FD\u4F1A\u4F7F\u6E38\u6807<code>last_delivered_id</code>\u5F80\u524D\u79FB\u52A8\u3002\u6BCF\u4E2A\u6D88\u8D39\u8005\u6709\u4E00\u4E2A\u7EC4\u5185\u552F\u4E00\u540D\u79F0\u3002</p><p>\u6D88\u8D39\u8005 (Consumer) \u5185\u90E8\u4F1A\u6709\u4E2A\u72B6\u6001\u53D8\u91CF<code>pending_ids</code>\uFF0C\u5B83\u8BB0\u5F55\u4E86\u5F53\u524D\u5DF2\u7ECF\u88AB\u5BA2\u6237\u7AEF\u8BFB\u53D6\u7684\u6D88\u606F\uFF0C\u4F46\u662F\u8FD8\u6CA1\u6709 ack\u3002\u5982\u679C\u5BA2\u6237\u7AEF\u6CA1\u6709 ack\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u91CC\u9762\u7684\u6D88\u606F ID \u4F1A\u8D8A\u6765\u8D8A\u591A\uFF0C\u4E00\u65E6\u67D0\u4E2A\u6D88\u606F\u88AB ack\uFF0C\u5B83\u5C31\u5F00\u59CB\u51CF\u5C11\u3002\u8FD9\u4E2A pending_ids \u53D8\u91CF\u5728 Redis \u5B98\u65B9\u88AB\u79F0\u4E4B\u4E3A<code>PEL</code>\uFF0C\u4E5F\u5C31\u662F<code>Pending Entries List</code>\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F88\u6838\u5FC3\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5B83\u7528\u6765\u786E\u4FDD\u5BA2\u6237\u7AEF\u81F3\u5C11\u6D88\u8D39\u4E86\u6D88\u606F\u4E00\u6B21\uFF0C\u800C\u4E0D\u4F1A\u5728\u7F51\u7EDC\u4F20\u8F93\u7684\u4E2D\u9014\u4E22\u5931\u4E86\u6CA1\u5904\u7406\u3002</p><h2 id="\u6D88\u606F-id" tabindex="-1"><strong>\u6D88\u606F ID</strong> <a class="header-anchor" href="#\u6D88\u606F-id" aria-hidden="true">#</a></h2><p>\u6D88\u606F ID \u7684\u5F62\u5F0F\u662F<code>timestampInMillis-sequence</code>\uFF0C\u4F8B\u5982<code>1527846880572-5</code>\uFF0C\u5B83\u8868\u793A\u5F53\u524D\u7684\u6D88\u606F\u5728\u6BEB\u7C73\u65F6\u95F4\u6233<code>1527846880572</code>\u65F6\u4EA7\u751F\uFF0C\u5E76\u4E14\u662F\u8BE5\u6BEB\u79D2\u5185\u4EA7\u751F\u7684\u7B2C 5 \u6761\u6D88\u606F\u3002\u6D88\u606F ID \u53EF\u4EE5\u7531\u670D\u52A1\u5668\u81EA\u52A8\u751F\u6210\uFF0C\u4E5F\u53EF\u4EE5\u7531\u5BA2\u6237\u7AEF\u81EA\u5DF1\u6307\u5B9A\uFF0C\u4F46\u662F\u5F62\u5F0F\u5FC5\u987B\u662F<code>\u6574\u6570-\u6574\u6570</code>\uFF0C\u800C\u4E14\u5FC5\u987B\u662F\u540E\u9762\u52A0\u5165\u7684\u6D88\u606F\u7684 ID \u8981\u5927\u4E8E\u524D\u9762\u7684\u6D88\u606F ID\u3002</p><h2 id="\u6D88\u606F\u5185\u5BB9" tabindex="-1"><strong>\u6D88\u606F\u5185\u5BB9</strong> <a class="header-anchor" href="#\u6D88\u606F\u5185\u5BB9" aria-hidden="true">#</a></h2><p>\u6D88\u606F\u5185\u5BB9\u5C31\u662F\u952E\u503C\u5BF9\uFF0C\u5F62\u5982 hash \u7ED3\u6784\u7684\u952E\u503C\u5BF9\uFF0C\u8FD9\u6CA1\u4EC0\u4E48\u7279\u522B\u4E4B\u5904\u3002</p><h2 id="\u589E\u5220\u6539\u67E5" tabindex="-1"><strong>\u589E\u5220\u6539\u67E5</strong> <a class="header-anchor" href="#\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a></h2><ol><li><pre><code>\`xadd\` \u8FFD\u52A0\u6D88\u606F
</code></pre></li><li><pre><code>\`xdel\` \u5220\u9664\u6D88\u606F\uFF0C\u8FD9\u91CC\u7684\u5220\u9664\u4EC5\u4EC5\u662F\u8BBE\u7F6E\u4E86\u6807\u5FD7\u4F4D\uFF0C\u4E0D\u5F71\u54CD\u6D88\u606F\u603B\u957F\u5EA6
</code></pre></li><li><pre><code>\`xrange\` \u83B7\u53D6\u6D88\u606F\u5217\u8868\uFF0C\u4F1A\u81EA\u52A8\u8FC7\u6EE4\u5DF2\u7ECF\u5220\u9664\u7684\u6D88\u606F
</code></pre></li><li><pre><code>\`xlen\` \u6D88\u606F\u957F\u5EA6
</code></pre></li><li><pre><code>\`del\` \u5220\u9664 Stream
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># * \u53F7\u8868\u793A\u670D\u52A1\u5668\u81EA\u52A8\u751F\u6210 ID\uFF0C\u540E\u9762\u987A\u5E8F\u8DDF\u7740\u4E00\u5806 key/value</span></span>
<span class="line"><span style="color:#A6ACCD;">#  \u540D\u5B57\u53EB laoqian\uFF0C\u5E74\u9F84 30 \u5C81</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xadd codehole * name laoqian age 30  </span></span>
<span class="line"><span style="color:#A6ACCD;">1527849609889-0  # \u751F\u6210\u7684\u6D88\u606F ID</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xadd codehole * name xiaoyu age 29</span></span>
<span class="line"><span style="color:#A6ACCD;">1527849629172-0</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xadd codehole * name xiaoqian age 1</span></span>
<span class="line"><span style="color:#A6ACCD;">1527849637634-0</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xlen codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 3</span></span>
<span class="line"><span style="color:#A6ACCD;"># -\u8868\u793A\u6700\u5C0F\u503C , + \u8868\u793A\u6700\u5927\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xrange codehole - +</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xrange codehole - +</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) 1527849609889-0</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) &quot;laoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      4) &quot;30&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) 1) 1527849629172-0</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) &quot;xiaoyu&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      4) &quot;29&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">3) 1) 1527849637634-0</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) &quot;xiaoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      4) &quot;1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6307\u5B9A\u6700\u5C0F\u6D88\u606F ID \u7684\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xrange codehole 1527849629172-0 +  </span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) 1527849629172-0</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) &quot;xiaoyu&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      4) &quot;29&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) 1) 1527849637634-0</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) &quot;xiaoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      4) &quot;1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6307\u5B9A\u6700\u5927\u6D88\u606F ID \u7684\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xrange codehole - 1527849629172-0</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) 1527849609889-0</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) &quot;laoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      4) &quot;30&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) 1) 1527849629172-0</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) &quot;xiaoyu&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      4) &quot;29&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xdel codehole 1527849609889-0</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u957F\u5EA6\u4E0D\u53D7\u5F71\u54CD</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xlen codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 3</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u88AB\u5220\u9664\u7684\u6D88\u606F\u6CA1\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xrange codehole - +</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) 1527849629172-0</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) &quot;xiaoyu&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      4) &quot;29&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) 1) 1527849637634-0</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) &quot;xiaoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      4) &quot;1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5220\u9664\u6574\u4E2A Stream</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; del codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u72EC\u7ACB\u6D88\u8D39" tabindex="-1"><strong>\u72EC\u7ACB\u6D88\u8D39</strong> <a class="header-anchor" href="#\u72EC\u7ACB\u6D88\u8D39" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u4E0D\u5B9A\u4E49\u6D88\u8D39\u7EC4\u7684\u60C5\u51B5\u4E0B\u8FDB\u884C Stream \u6D88\u606F\u7684\u72EC\u7ACB\u6D88\u8D39\uFF0C\u5F53 Stream \u6CA1\u6709\u65B0\u6D88\u606F\u65F6\uFF0C\u751A\u81F3\u53EF\u4EE5\u963B\u585E\u7B49\u5F85\u3002Redis \u8BBE\u8BA1\u4E86\u4E00\u4E2A\u5355\u72EC\u7684\u6D88\u8D39\u6307\u4EE4<code>xread</code>\uFF0C\u53EF\u4EE5\u5C06 Stream \u5F53\u6210\u666E\u901A\u7684\u6D88\u606F\u961F\u5217 (list) \u6765\u4F7F\u7528\u3002\u4F7F\u7528 <code>xread</code> \u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u5FFD\u7565\u6D88\u8D39\u7EC4 (Consumer Group) \u7684\u5B58\u5728\uFF0C\u5C31\u597D\u6BD4 Stream \u5C31\u662F\u4E00\u4E2A\u666E\u901A\u7684\u5217\u8868 (list)\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u4ECE Stream \u5934\u90E8\u8BFB\u53D6\u4E24\u6761\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xread count 2 streams codehole 0-0</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) &quot;codehole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) 1) 1527851486781-0</span></span>
<span class="line"><span style="color:#A6ACCD;">         2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            2) &quot;laoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            4) &quot;30&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) 1) 1527851493405-0</span></span>
<span class="line"><span style="color:#A6ACCD;">         2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            2) &quot;yurui&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            4) &quot;29&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u4ECE Stream \u5C3E\u90E8\u8BFB\u53D6\u4E00\u6761\u6D88\u606F\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u91CC\u4E0D\u4F1A\u8FD4\u56DE\u4EFB\u4F55\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xread count 1 streams codehole $</span></span>
<span class="line"><span style="color:#A6ACCD;">(nil)</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u4ECE\u5C3E\u90E8\u963B\u585E\u7B49\u5F85\u65B0\u6D88\u606F\u5230\u6765\uFF0C\u4E0B\u9762\u7684\u6307\u4EE4\u4F1A\u5835\u4F4F\uFF0C\u76F4\u5230\u65B0\u6D88\u606F\u5230\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xread block 0 count 1 streams codehole $</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6211\u4EEC\u4ECE\u65B0\u6253\u5F00\u4E00\u4E2A\u7A97\u53E3\uFF0C\u5728\u8FD9\u4E2A\u7A97\u53E3\u5F80 Stream \u91CC\u585E\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xadd codehole * name youming age 60</span></span>
<span class="line"><span style="color:#A6ACCD;">1527852774092-0</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u518D\u5207\u6362\u5230\u524D\u9762\u7684\u7A97\u53E3\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u963B\u585E\u89E3\u9664\u4E86\uFF0C\u8FD4\u56DE\u4E86\u65B0\u7684\u6D88\u606F\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u800C\u4E14\u8FD8\u663E\u793A\u4E86\u4E00\u4E2A\u7B49\u5F85\u65F6\u95F4\uFF0C\u8FD9\u91CC\u6211\u4EEC\u7B49\u5F85\u4E86 93s</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xread block 0 count 1 streams codehole $</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) &quot;codehole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) 1) 1527852774092-0</span></span>
<span class="line"><span style="color:#A6ACCD;">         2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            2) &quot;youming&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            4) &quot;60&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">(93.11s)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BA2\u6237\u7AEF\u5982\u679C\u60F3\u8981\u4F7F\u7528 <code>xread</code> \u8FDB\u884C\u987A\u5E8F\u6D88\u8D39\uFF0C\u4E00\u5B9A\u8981\u8BB0\u4F4F\u5F53\u524D\u6D88\u8D39\u5230\u54EA\u91CC\u4E86\uFF0C\u4E5F\u5C31\u662F\u8FD4\u56DE\u7684\u6D88\u606F ID\u3002\u4E0B\u6B21\u7EE7\u7EED\u8C03\u7528 <code>xread</code> \u65F6\uFF0C\u5C06\u4E0A\u6B21\u8FD4\u56DE\u7684\u6700\u540E\u4E00\u4E2A\u6D88\u606F ID \u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u8FDB\u53BB\uFF0C\u5C31\u53EF\u4EE5\u7EE7\u7EED\u6D88\u8D39\u540E\u7EED\u7684\u6D88\u606F\u3002</p><p>block 0 \u8868\u793A\u6C38\u8FDC\u963B\u585E\uFF0C\u76F4\u5230\u6D88\u606F\u5230\u6765\uFF0Cblock 1000 \u8868\u793A\u963B\u585E 1s\uFF0C\u5982\u679C 1s \u5185\u6CA1\u6709\u4EFB\u4F55\u6D88\u606F\u5230\u6765\uFF0C\u5C31\u8FD4\u56DE <code>nil</code>\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xread block 1000 count 1 streams codehole $</span></span>
<span class="line"><span style="color:#A6ACCD;">(nil)</span></span>
<span class="line"><span style="color:#A6ACCD;">(1.07s)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u521B\u5EFA\u6D88\u8D39\u7EC4" tabindex="-1"><strong>\u521B\u5EFA\u6D88\u8D39\u7EC4</strong> <a class="header-anchor" href="#\u521B\u5EFA\u6D88\u8D39\u7EC4" aria-hidden="true">#</a></h2><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/1/163bbe4d6f601f8e~tplv-t2oaga2asx-image.image" alt=""></p><p>Stream \u901A\u8FC7<code>xgroup create</code>\u6307\u4EE4\u521B\u5EFA\u6D88\u8D39\u7EC4 (Consumer Group)\uFF0C\u9700\u8981\u4F20\u9012\u8D77\u59CB\u6D88\u606F ID \u53C2\u6570\u7528\u6765\u521D\u59CB\u5316<code>last_delivered_id</code>\u53D8\u91CF\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#  \u8868\u793A\u4ECE\u5934\u5F00\u59CB\u6D88\u8D39</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xgroup create codehole cg1 0-0</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;"># $ \u8868\u793A\u4ECE\u5C3E\u90E8\u5F00\u59CB\u6D88\u8D39\uFF0C\u53EA\u63A5\u53D7\u65B0\u6D88\u606F\uFF0C\u5F53\u524D Stream \u6D88\u606F\u4F1A\u5168\u90E8\u5FFD\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xgroup create codehole cg2 $</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u83B7\u53D6 Stream \u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xinfo stream codehole</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1) length</span></span>
<span class="line"><span style="color:#A6ACCD;"> 2) (integer) 3  # \u5171 3 \u4E2A\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"> 3) radix-tree-keys</span></span>
<span class="line"><span style="color:#A6ACCD;"> 4) (integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;"> 5) radix-tree-nodes</span></span>
<span class="line"><span style="color:#A6ACCD;"> 6) (integer) 2</span></span>
<span class="line"><span style="color:#A6ACCD;"> 7) groups</span></span>
<span class="line"><span style="color:#A6ACCD;"> 8) (integer) 2  # \u4E24\u4E2A\u6D88\u8D39\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;"> 9) first-entry  # \u7B2C\u4E00\u4E2A\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">10) 1) 1527851486781-0</span></span>
<span class="line"><span style="color:#A6ACCD;">    2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       2) &quot;laoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       4) &quot;30&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">11) last-entry  # \u6700\u540E\u4E00\u4E2A\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">12) 1) 1527851498956-0</span></span>
<span class="line"><span style="color:#A6ACCD;">    2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       2) &quot;xiaoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       4) &quot;1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u83B7\u53D6 Stream \u7684\u6D88\u8D39\u7EC4\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xinfo groups codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) name</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) &quot;cg1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   3) consumers</span></span>
<span class="line"><span style="color:#A6ACCD;">   4) (integer) 0  # \u8BE5\u6D88\u8D39\u7EC4\u8FD8\u6CA1\u6709\u6D88\u8D39\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">   5) pending</span></span>
<span class="line"><span style="color:#A6ACCD;">   6) (integer) 0  # \u8BE5\u6D88\u8D39\u7EC4\u6CA1\u6709\u6B63\u5728\u5904\u7406\u7684\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">2) 1) name</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) &quot;cg2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   3) consumers  # \u8BE5\u6D88\u8D39\u7EC4\u8FD8\u6CA1\u6709\u6D88\u8D39\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">   4) (integer) 0</span></span>
<span class="line"><span style="color:#A6ACCD;">   5) pending</span></span>
<span class="line"><span style="color:#A6ACCD;">   6) (integer) 0  # \u8BE5\u6D88\u8D39\u7EC4\u6CA1\u6709\u6B63\u5728\u5904\u7406\u7684\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6D88\u8D39" tabindex="-1"><strong>\u6D88\u8D39</strong> <a class="header-anchor" href="#\u6D88\u8D39" aria-hidden="true">#</a></h2><p>Stream \u63D0\u4F9B\u4E86 <code>xreadgroup</code> \u6307\u4EE4\u53EF\u4EE5\u8FDB\u884C\u6D88\u8D39\u7EC4\u7684\u7EC4\u5185\u6D88\u8D39\uFF0C\u9700\u8981\u63D0\u4F9B\u6D88\u8D39\u7EC4\u540D\u79F0\u3001\u6D88\u8D39\u8005\u540D\u79F0\u548C\u8D77\u59CB\u6D88\u606F ID\u3002\u5B83\u540C <code>xread</code> \u4E00\u6837\uFF0C\u4E5F\u53EF\u4EE5\u963B\u585E\u7B49\u5F85\u65B0\u6D88\u606F\u3002\u8BFB\u5230\u65B0\u6D88\u606F\u540E\uFF0C\u5BF9\u5E94\u7684\u6D88\u606F ID \u5C31\u4F1A\u8FDB\u5165\u6D88\u8D39\u8005\u7684 PEL(\u6B63\u5728\u5904\u7406\u7684\u6D88\u606F) \u7ED3\u6784\u91CC\uFF0C\u5BA2\u6237\u7AEF\u5904\u7406\u5B8C\u6BD5\u540E\u4F7F\u7528 <code>xack</code> \u6307\u4EE4\u901A\u77E5\u670D\u52A1\u5668\uFF0C\u672C\u6761\u6D88\u606F\u5DF2\u7ECF\u5904\u7406\u5B8C\u6BD5\uFF0C\u8BE5\u6D88\u606F ID \u5C31\u4F1A\u4ECE PEL \u4E2D\u79FB\u9664\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># &gt; \u53F7\u8868\u793A\u4ECE\u5F53\u524D\u6D88\u8D39\u7EC4\u7684 last_delivered_id \u540E\u9762\u5F00\u59CB\u8BFB</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6BCF\u5F53\u6D88\u8D39\u8005\u8BFB\u53D6\u4E00\u6761\u6D88\u606F\uFF0Clast_delivered_id \u53D8\u91CF\u5C31\u4F1A\u524D\u8FDB</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xreadgroup GROUP cg1 c1 count 1 streams codehole &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) &quot;codehole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) 1) 1527851486781-0</span></span>
<span class="line"><span style="color:#A6ACCD;">         2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            2) &quot;laoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            4) &quot;30&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xreadgroup GROUP cg1 c1 count 1 streams codehole &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) &quot;codehole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) 1) 1527851493405-0</span></span>
<span class="line"><span style="color:#A6ACCD;">         2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            2) &quot;yurui&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            4) &quot;29&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xreadgroup GROUP cg1 c1 count 2 streams codehole &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) &quot;codehole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) 1) 1527851498956-0</span></span>
<span class="line"><span style="color:#A6ACCD;">         2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            2) &quot;xiaoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            4) &quot;1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      2) 1) 1527852774092-0</span></span>
<span class="line"><span style="color:#A6ACCD;">         2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            2) &quot;youming&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            4) &quot;60&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u518D\u7EE7\u7EED\u8BFB\u53D6\uFF0C\u5C31\u6CA1\u6709\u65B0\u6D88\u606F\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xreadgroup GROUP cg1 c1 count 1 streams codehole &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">(nil)</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u90A3\u5C31\u963B\u585E\u7B49\u5F85\u5427</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xreadgroup GROUP cg1 c1 block 0 count 1 streams codehole &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5F00\u542F\u53E6\u4E00\u4E2A\u7A97\u53E3\uFF0C\u5F80\u91CC\u585E\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xadd codehole * name lanying age 61</span></span>
<span class="line"><span style="color:#A6ACCD;">1527854062442-0</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u56DE\u5230\u524D\u4E00\u4E2A\u7A97\u53E3\uFF0C\u53D1\u73B0\u963B\u585E\u89E3\u9664\uFF0C\u6536\u5230\u65B0\u6D88\u606F\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xreadgroup GROUP cg1 c1 block 0 count 1 streams codehole &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) &quot;codehole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) 1) 1) 1527854062442-0</span></span>
<span class="line"><span style="color:#A6ACCD;">         2) 1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            2) &quot;lanying&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            4) &quot;61&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">(36.54s)</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u89C2\u5BDF\u6D88\u8D39\u7EC4\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xinfo groups codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) name</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) &quot;cg1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   3) consumers</span></span>
<span class="line"><span style="color:#A6ACCD;">   4) (integer) 1  # \u4E00\u4E2A\u6D88\u8D39\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">   5) pending</span></span>
<span class="line"><span style="color:#A6ACCD;">   6) (integer) 5  # \u5171 5 \u6761\u6B63\u5728\u5904\u7406\u7684\u4FE1\u606F\u8FD8\u6709\u6CA1\u6709 ack</span></span>
<span class="line"><span style="color:#A6ACCD;">2) 1) name</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) &quot;cg2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   3) consumers</span></span>
<span class="line"><span style="color:#A6ACCD;">   4) (integer) 0  # \u6D88\u8D39\u7EC4 cg2 \u6CA1\u6709\u4EFB\u4F55\u53D8\u5316\uFF0C\u56E0\u4E3A\u524D\u9762\u6211\u4EEC\u4E00\u76F4\u5728\u64CD\u7EB5 cg1</span></span>
<span class="line"><span style="color:#A6ACCD;">   5) pending</span></span>
<span class="line"><span style="color:#A6ACCD;">   6) (integer) 0</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5982\u679C\u540C\u4E00\u4E2A\u6D88\u8D39\u7EC4\u6709\u591A\u4E2A\u6D88\u8D39\u8005\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 xinfo consumers \u6307\u4EE4\u89C2\u5BDF\u6BCF\u4E2A\u6D88\u8D39\u8005\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xinfo consumers codehole cg1  # \u76EE\u524D\u8FD8\u6709 1 \u4E2A\u6D88\u8D39\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) name</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) &quot;c1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   3) pending</span></span>
<span class="line"><span style="color:#A6ACCD;">   4) (integer) 5  # \u5171 5 \u6761\u5F85\u5904\u7406\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">   5) idle</span></span>
<span class="line"><span style="color:#A6ACCD;">   6) (integer) 418715  # \u7A7A\u95F2\u4E86\u591A\u957F\u65F6\u95F4 ms \u6CA1\u6709\u8BFB\u53D6\u6D88\u606F\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u63A5\u4E0B\u6765\u6211\u4EEC ack \u4E00\u6761\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xack codehole cg1 1527851486781-0</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xinfo consumers codehole cg1</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) name</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) &quot;c1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   3) pending</span></span>
<span class="line"><span style="color:#A6ACCD;">   4) (integer) 4  # \u53D8\u6210\u4E86 5 \u6761</span></span>
<span class="line"><span style="color:#A6ACCD;">   5) idle</span></span>
<span class="line"><span style="color:#A6ACCD;">   6) (integer) 668504</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u4E0B\u9762 ack \u6240\u6709\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xack codehole cg1 1527851493405-0 1527851498956-0 1527852774092-0 1527854062442-0</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 4</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xinfo consumers codehole cg1</span></span>
<span class="line"><span style="color:#A6ACCD;">1) 1) name</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) &quot;c1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   3) pending</span></span>
<span class="line"><span style="color:#A6ACCD;">   4) (integer) 0  # pel \u7A7A\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">   5) idle</span></span>
<span class="line"><span style="color:#A6ACCD;">   6) (integer) 745505</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="stream-\u6D88\u606F\u592A\u591A\u600E\u4E48\u529E" tabindex="-1"><strong>Stream \u6D88\u606F\u592A\u591A\u600E\u4E48\u529E?</strong> <a class="header-anchor" href="#stream-\u6D88\u606F\u592A\u591A\u600E\u4E48\u529E" aria-hidden="true">#</a></h2><p>\u8BFB\u8005\u5F88\u5BB9\u6613\u60F3\u5230\uFF0C\u8981\u662F\u6D88\u606F\u79EF\u7D2F\u592A\u591A\uFF0CStream \u7684\u94FE\u8868\u5C82\u4E0D\u662F\u5F88\u957F\uFF0C\u5185\u5BB9\u4F1A\u4E0D\u4F1A\u7206\u6389?<code>xdel</code> \u6307\u4EE4\u53C8\u4E0D\u4F1A\u5220\u9664\u6D88\u606F\uFF0C\u5B83\u53EA\u662F\u7ED9\u6D88\u606F\u505A\u4E86\u4E2A\u6807\u5FD7\u4F4D\u3002</p><p>Redis \u81EA\u7136\u8003\u8651\u5230\u4E86\u8FD9\u4E00\u70B9\uFF0C\u6240\u4EE5\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5B9A\u957F Stream \u529F\u80FD\u3002\u5728 <code>xadd</code> \u7684\u6307\u4EE4\u63D0\u4F9B\u4E00\u4E2A\u5B9A\u957F\u957F\u5EA6 <code>maxlen</code>\uFF0C\u5C31\u53EF\u4EE5\u5C06\u8001\u7684\u6D88\u606F\u5E72\u6389\uFF0C\u786E\u4FDD\u6700\u591A\u4E0D\u8D85\u8FC7\u6307\u5B9A\u957F\u5EA6\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xlen codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 5</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xadd codehole maxlen 3 * name xiaorui age 1</span></span>
<span class="line"><span style="color:#A6ACCD;">1527855160273-0</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; xlen codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u770B\u5230 Stream \u7684\u957F\u5EA6\u88AB\u780D\u6389\u4E86\u3002\u5982\u679C Stream \u5728\u672A\u6765\u53EF\u4EE5\u63D0\u4F9B\u6309\u65F6\u95F4\u6233\u6E05\u7406\u6D88\u606F\u7684\u89C4\u5219\u90A3\u5C31\u66F4\u52A0\u5B8C\u7F8E\u4E86\uFF0C\u4F46\u662F\u76EE\u524D\u8FD8\u6CA1\u6709\u3002</p><h2 id="\u6D88\u606F\u5982\u679C\u5FD8\u8BB0-ack-\u4F1A\u600E\u6837" tabindex="-1"><strong>\u6D88\u606F\u5982\u679C\u5FD8\u8BB0 ACK \u4F1A\u600E\u6837?</strong> <a class="header-anchor" href="#\u6D88\u606F\u5982\u679C\u5FD8\u8BB0-ack-\u4F1A\u600E\u6837" aria-hidden="true">#</a></h2><p>Stream \u5728\u6BCF\u4E2A\u6D88\u8D39\u8005\u7ED3\u6784\u4E2D\u4FDD\u5B58\u4E86\u6B63\u5728\u5904\u7406\u4E2D\u7684\u6D88\u606F ID \u5217\u8868 PEL\uFF0C\u5982\u679C\u6D88\u8D39\u8005\u6536\u5230\u4E86\u6D88\u606F\u5904\u7406\u5B8C\u4E86\u4F46\u662F\u6CA1\u6709\u56DE\u590D ack\uFF0C\u5C31\u4F1A\u5BFC\u81F4 PEL \u5217\u8868\u4E0D\u65AD\u589E\u957F\uFF0C\u5982\u679C\u6709\u5F88\u591A\u6D88\u8D39\u7EC4\u7684\u8BDD\uFF0C\u90A3\u4E48\u8FD9\u4E2A PEL \u5360\u7528\u7684\u5185\u5B58\u5C31\u4F1A\u653E\u5927\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/16/164a2a4cd39eb25e~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="pel-\u5982\u4F55\u907F\u514D\u6D88\u606F\u4E22\u5931" tabindex="-1"><strong>PEL \u5982\u4F55\u907F\u514D\u6D88\u606F\u4E22\u5931?</strong> <a class="header-anchor" href="#pel-\u5982\u4F55\u907F\u514D\u6D88\u606F\u4E22\u5931" aria-hidden="true">#</a></h2><p>\u5728\u5BA2\u6237\u7AEF\u6D88\u8D39\u8005\u8BFB\u53D6 Stream \u6D88\u606F\u65F6\uFF0CRedis \u670D\u52A1\u5668\u5C06\u6D88\u606F\u56DE\u590D\u7ED9\u5BA2\u6237\u7AEF\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5BA2\u6237\u7AEF\u7A81\u7136\u65AD\u5F00\u4E86\u8FDE\u63A5\uFF0C\u6D88\u606F\u5C31\u4E22\u5931\u4E86\u3002\u4F46\u662F PEL \u91CC\u5DF2\u7ECF\u4FDD\u5B58\u4E86\u53D1\u51FA\u53BB\u7684\u6D88\u606F ID\u3002\u5F85\u5BA2\u6237\u7AEF\u91CD\u65B0\u8FDE\u4E0A\u4E4B\u540E\uFF0C\u53EF\u4EE5\u518D\u6B21\u6536\u5230 PEL \u4E2D\u7684\u6D88\u606F ID \u5217\u8868\u3002\u4E0D\u8FC7\u6B64\u65F6 <code>xreadgroup</code> \u7684\u8D77\u59CB\u6D88\u606F ID \u4E0D\u80FD\u4E3A\u53C2\u6570&gt;\uFF0C\u800C\u5FC5\u987B\u662F\u4EFB\u610F\u6709\u6548\u7684\u6D88\u606F ID\uFF0C\u4E00\u822C\u5C06\u53C2\u6570\u8BBE\u4E3A 0-0\uFF0C\u8868\u793A\u8BFB\u53D6\u6240\u6709\u7684 PEL \u6D88\u606F\u4EE5\u53CA\u81EA<code>last_delivered_id</code>\u4E4B\u540E\u7684\u65B0\u6D88\u606F\u3002</p><h2 id="stream-\u7684\u9AD8\u53EF\u7528" tabindex="-1"><strong>Stream \u7684\u9AD8\u53EF\u7528</strong> <a class="header-anchor" href="#stream-\u7684\u9AD8\u53EF\u7528" aria-hidden="true">#</a></h2><p>Stream \u7684\u9AD8\u53EF\u7528\u662F\u5EFA\u7ACB\u4E3B\u4ECE\u590D\u5236\u57FA\u7840\u4E0A\u7684\uFF0C\u5B83\u548C\u5176\u5B83\u6570\u636E\u7ED3\u6784\u7684\u590D\u5236\u673A\u5236\u6CA1\u6709\u533A\u522B\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5728 Sentinel \u548C Cluster \u96C6\u7FA4\u73AF\u5883\u4E0B Stream \u662F\u53EF\u4EE5\u652F\u6301\u9AD8\u53EF\u7528\u7684\u3002\u4E0D\u8FC7\u9274\u4E8E Redis \u7684\u6307\u4EE4\u590D\u5236\u662F\u5F02\u6B65\u7684\uFF0C\u5728 <code>failover</code> \u53D1\u751F\u65F6\uFF0CRedis \u53EF\u80FD\u4F1A\u4E22\u5931\u6781\u5C0F\u90E8\u5206\u6570\u636E\uFF0C\u8FD9\u70B9 Redis \u7684\u5176\u5B83\u6570\u636E\u7ED3\u6784\u4E5F\u662F\u4E00\u6837\u7684\u3002</p><h2 id="\u5206\u533A-partition" tabindex="-1"><strong>\u5206\u533A Partition</strong> <a class="header-anchor" href="#\u5206\u533A-partition" aria-hidden="true">#</a></h2><p>Redis \u7684\u670D\u52A1\u5668\u6CA1\u6709\u539F\u751F\u652F\u6301\u5206\u533A\u80FD\u529B\uFF0C\u5982\u679C\u60F3\u8981\u4F7F\u7528\u5206\u533A\uFF0C\u90A3\u5C31\u9700\u8981\u5206\u914D\u591A\u4E2A Stream\uFF0C\u7136\u540E\u5728\u5BA2\u6237\u7AEF\u4F7F\u7528\u4E00\u5B9A\u7684\u7B56\u7565\u6765\u751F\u4EA7\u6D88\u606F\u5230\u4E0D\u540C\u7684 Stream\u3002\u4F60\u4E5F\u8BB8\u4F1A\u8BA4\u4E3A Kafka \u8981\u5148\u8FDB\u5F88\u591A\uFF0C\u5B83\u662F\u539F\u751F\u652F\u6301 Partition \u7684\u3002\u5173\u4E8E\u8FD9\u4E00\u70B9\uFF0C\u6211\u5E76\u4E0D\u8BA4\u540C\u3002\u8BB0\u5F97 Kafka \u7684\u5BA2\u6237\u7AEF\u4E5F\u5B58\u5728 HashStrategy \u4E48\uFF0C\u56E0\u4E3A\u5B83\u4E5F\u662F\u901A\u8FC7\u5BA2\u6237\u7AEF\u7684 hash \u7B97\u6CD5\u6765\u5C06\u4E0D\u540C\u7684\u6D88\u606F\u585E\u5165\u4E0D\u540C\u5206\u533A\u7684\u3002</p><p>\u53E6\u5916,Kafka \u8FD8\u652F\u6301\u52A8\u6001\u589E\u52A0\u5206\u533A\u6570\u91CF\u7684\u80FD\u529B\uFF0C\u4F46\u662F\u8FD9\u79CD\u8C03\u6574\u80FD\u529B\u4E5F\u662F\u5F88\u8E69\u811A\u7684\uFF0C\u5B83\u4E0D\u4F1A\u628A\u4E4B\u524D\u5DF2\u7ECF\u5B58\u5728\u7684\u5185\u5BB9\u8FDB\u884C rehash\uFF0C\u4E0D\u4F1A\u91CD\u65B0\u5206\u533A\u5386\u53F2\u6570\u636E\u3002\u8FD9\u79CD\u7B80\u5355\u7684\u52A8\u6001\u8C03\u6574\u7684\u80FD\u529B Redis Stream \u901A\u8FC7\u589E\u52A0\u65B0\u7684 Stream \u5C31\u53EF\u4EE5\u505A\u5230\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>Stream \u7684\u6D88\u8D39\u6A21\u578B\u501F\u9274\u4E86 Kafka \u7684\u6D88\u8D39\u5206\u7EC4\u7684\u6982\u5FF5\uFF0C\u5B83\u5F25\u8865\u4E86 Redis Pub/Sub \u4E0D\u80FD\u6301\u4E45\u5316\u6D88\u606F\u7684\u7F3A\u9677\u3002\u4F46\u662F\u5B83\u53C8\u4E0D\u540C\u4E8E kafka\uFF0CKafka \u7684\u6D88\u606F\u53EF\u4EE5\u5206 partition\uFF0C\u800C Stream \u4E0D\u884C\u3002\u5982\u679C\u975E\u8981\u5206 parition \u7684\u8BDD\uFF0C\u5F97\u5728\u5BA2\u6237\u7AEF\u505A\uFF0C\u63D0\u4F9B\u4E0D\u540C\u7684 Stream \u540D\u79F0\uFF0C\u5BF9\u6D88\u606F\u8FDB\u884C hash \u53D6\u6A21\u6765\u9009\u62E9\u5F80\u54EA\u4E2A Stream \u91CC\u585E\u3002</p><p>\u5982\u679C\u8BFB\u8005\u7A0D\u5FAE\u7814\u7A76\u8FC7 Redis \u4F5C\u8005\u7684\u53E6\u4E00\u4E2A\u5F00\u6E90\u9879\u76EE Disque \u7684\u8BDD\uFF0C\u8FD9\u6781\u53EF\u80FD\u662F\u4F5C\u8005\u610F\u8BC6\u5230 Disque \u9879\u76EE\u7684\u6D3B\u8DC3\u7A0B\u5EA6\u4E0D\u591F\uFF0C\u6240\u4EE5\u5C06 Disque \u7684\u5185\u5BB9\u79FB\u690D\u5230\u4E86 Redis \u91CC\u9762\u3002\u8FD9\u53EA\u662F\u672C\u4EBA\u7684\u731C\u6D4B\uFF0C\u672A\u5FC5\u662F\u4F5C\u8005\u7684\u521D\u8877\u3002\u5982\u679C\u8BFB\u8005\u6709\u4EC0\u4E48\u4E0D\u540C\u7684\u60F3\u6CD5\uFF0C\u53EF\u4EE5\u5728\u8BC4\u8BBA\u533A\u4E00\u8D77\u53C2\u4E0E\u8BA8\u8BBA\u3002</p>`,50),o=[p];function t(c,r,i,C,A,d){return a(),n("div",null,o)}const y=s(e,[["render",t]]);export{D as __pageData,y as default};
