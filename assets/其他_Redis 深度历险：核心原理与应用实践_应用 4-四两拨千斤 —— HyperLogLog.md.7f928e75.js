import{_ as s,c as n,o as a,d as p}from"./app.c4f45da1.js";const d=JSON.parse('{"title":"\u5E94\u7528 4-\u56DB\u4E24\u62E8\u5343\u65A4 \u2014\u2014 HyperLogLog","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u65B9\u6CD5","slug":"\u4F7F\u7528\u65B9\u6CD5","link":"#\u4F7F\u7528\u65B9\u6CD5","children":[]},{"level":2,"title":"pfadd \u8FD9\u4E2A pf \u662F\u4EC0\u4E48\u610F\u601D\uFF1F","slug":"pfadd-\u8FD9\u4E2A-pf-\u662F\u4EC0\u4E48\u610F\u601D\uFF1F","link":"#pfadd-\u8FD9\u4E2A-pf-\u662F\u4EC0\u4E48\u610F\u601D\uFF1F","children":[]},{"level":2,"title":"pfmerge \u9002\u5408\u4EC0\u4E48\u573A\u5408\u7528\uFF1F","slug":"pfmerge-\u9002\u5408\u4EC0\u4E48\u573A\u5408\u7528\uFF1F","link":"#pfmerge-\u9002\u5408\u4EC0\u4E48\u573A\u5408\u7528\uFF1F","children":[]},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879","link":"#\u6CE8\u610F\u4E8B\u9879","children":[]},{"level":2,"title":"HyperLogLog \u5B9E\u73B0\u539F\u7406","slug":"hyperloglog-\u5B9E\u73B0\u539F\u7406","link":"#hyperloglog-\u5B9E\u73B0\u539F\u7406","children":[]},{"level":2,"title":"pf \u7684\u5185\u5B58\u5360\u7528\u4E3A\u4EC0\u4E48\u662F 12k\uFF1F","slug":"pf-\u7684\u5185\u5B58\u5360\u7528\u4E3A\u4EC0\u4E48\u662F-12k\uFF1F","link":"#pf-\u7684\u5185\u5B58\u5360\u7528\u4E3A\u4EC0\u4E48\u662F-12k\uFF1F","children":[]},{"level":2,"title":"\u601D\u8003 & \u4F5C\u4E1A","slug":"\u601D\u8003-\u4F5C\u4E1A","link":"#\u601D\u8003-\u4F5C\u4E1A","children":[]},{"level":2,"title":"\u6269\u5C55\u9605\u8BFB","slug":"\u6269\u5C55\u9605\u8BFB","link":"#\u6269\u5C55\u9605\u8BFB","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u5E94\u7528 4-\u56DB\u4E24\u62E8\u5343\u65A4 \u2014\u2014 HyperLogLog.md"}'),l={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u5E94\u7528 4-\u56DB\u4E24\u62E8\u5343\u65A4 \u2014\u2014 HyperLogLog.md"},e=p(`<h1 id="\u5E94\u7528-4-\u56DB\u4E24\u62E8\u5343\u65A4-\u2014\u2014-hyperloglog" tabindex="-1">\u5E94\u7528 4-\u56DB\u4E24\u62E8\u5343\u65A4 \u2014\u2014 HyperLogLog <a class="header-anchor" href="#\u5E94\u7528-4-\u56DB\u4E24\u62E8\u5343\u65A4-\u2014\u2014-hyperloglog" aria-hidden="true">#</a></h1><hr><h1 id="\u5E94\u7528-4\uFF1A\u56DB\u4E24\u62E8\u5343\u65A4-\u2014\u2014-hyperloglog" tabindex="-1">\u5E94\u7528 4\uFF1A\u56DB\u4E24\u62E8\u5343\u65A4 \u2014\u2014 HyperLogLog <a class="header-anchor" href="#\u5E94\u7528-4\uFF1A\u56DB\u4E24\u62E8\u5343\u65A4-\u2014\u2014-hyperloglog" aria-hidden="true">#</a></h1><p>\u5728\u5F00\u59CB\u8FD9\u4E00\u8282\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u601D\u8003\u4E00\u4E2A\u5E38\u89C1\u7684\u4E1A\u52A1\u95EE\u9898\uFF1A\u5982\u679C\u4F60\u8D1F\u8D23\u5F00\u53D1\u7EF4\u62A4\u4E00\u4E2A\u5927\u578B\u7684\u7F51\u7AD9\uFF0C\u6709\u4E00\u5929\u8001\u677F\u627E\u4EA7\u54C1\u7ECF\u7406\u8981\u7F51\u7AD9\u6BCF\u4E2A\u7F51\u9875\u6BCF\u5929\u7684 UV \u6570\u636E\uFF0C\u7136\u540E\u8BA9\u4F60\u6765\u5F00\u53D1\u8FD9\u4E2A\u7EDF\u8BA1\u6A21\u5757\uFF0C\u4F60\u4F1A\u5982\u4F55\u5B9E\u73B0\uFF1F</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/12/1648f065e38200cb~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5982\u679C\u7EDF\u8BA1 PV \u90A3\u975E\u5E38\u597D\u529E\uFF0C\u7ED9\u6BCF\u4E2A\u7F51\u9875\u4E00\u4E2A\u72EC\u7ACB\u7684 Redis \u8BA1\u6570\u5668\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD9\u4E2A\u8BA1\u6570\u5668\u7684 key \u540E\u7F00\u52A0\u4E0A\u5F53\u5929\u7684\u65E5\u671F\u3002\u8FD9\u6837\u6765\u4E00\u4E2A\u8BF7\u6C42\uFF0Cincrby \u4E00\u6B21\uFF0C\u6700\u7EC8\u5C31\u53EF\u4EE5\u7EDF\u8BA1\u51FA\u6240\u6709\u7684 PV \u6570\u636E\u3002</p><p>\u4F46\u662F UV \u4E0D\u4E00\u6837\uFF0C\u5B83\u8981\u53BB\u91CD\uFF0C\u540C\u4E00\u4E2A\u7528\u6237\u4E00\u5929\u4E4B\u5185\u7684\u591A\u6B21\u8BBF\u95EE\u8BF7\u6C42\u53EA\u80FD\u8BA1\u6570\u4E00\u6B21\u3002\u8FD9\u5C31\u8981\u6C42\u6BCF\u4E00\u4E2A\u7F51\u9875\u8BF7\u6C42\u90FD\u9700\u8981\u5E26\u4E0A\u7528\u6237\u7684 ID\uFF0C\u65E0\u8BBA\u662F\u767B\u9646\u7528\u6237\u8FD8\u662F\u672A\u767B\u9646\u7528\u6237\u90FD\u9700\u8981\u4E00\u4E2A\u552F\u4E00 ID \u6765\u6807\u8BC6\u3002</p><p>\u4F60\u4E5F\u8BB8\u5DF2\u7ECF\u60F3\u5230\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u65B9\u6848\uFF0C\u90A3\u5C31\u662F\u4E3A\u6BCF\u4E00\u4E2A\u9875\u9762\u4E00\u4E2A\u72EC\u7ACB\u7684 set \u96C6\u5408\u6765\u5B58\u50A8\u6240\u6709\u5F53\u5929\u8BBF\u95EE\u8FC7\u6B64\u9875\u9762\u7684\u7528\u6237 ID\u3002\u5F53\u4E00\u4E2A\u8BF7\u6C42\u8FC7\u6765\u65F6\uFF0C\u6211\u4EEC\u4F7F\u7528 sadd \u5C06\u7528\u6237 ID \u585E\u8FDB\u53BB\u5C31\u53EF\u4EE5\u4E86\u3002\u901A\u8FC7 scard \u53EF\u4EE5\u53D6\u51FA\u8FD9\u4E2A\u96C6\u5408\u7684\u5927\u5C0F\uFF0C\u8FD9\u4E2A\u6570\u5B57\u5C31\u662F\u8FD9\u4E2A\u9875\u9762\u7684 UV \u6570\u636E\u3002\u6CA1\u9519\uFF0C\u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u65B9\u6848\u3002</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u4F60\u7684\u9875\u9762\u8BBF\u95EE\u91CF\u975E\u5E38\u5927\uFF0C\u6BD4\u5982\u4E00\u4E2A\u7206\u6B3E\u9875\u9762\u51E0\u5343\u4E07\u7684 UV\uFF0C\u4F60\u9700\u8981\u4E00\u4E2A\u5F88\u5927\u7684 set \u96C6\u5408\u6765\u7EDF\u8BA1\uFF0C\u8FD9\u5C31\u975E\u5E38\u6D6A\u8D39\u7A7A\u95F4\u3002\u5982\u679C\u8FD9\u6837\u7684\u9875\u9762\u5F88\u591A\uFF0C\u90A3\u6240\u9700\u8981\u7684\u5B58\u50A8\u7A7A\u95F4\u662F\u60CA\u4EBA\u7684\u3002\u4E3A\u8FD9\u6837\u4E00\u4E2A\u53BB\u91CD\u529F\u80FD\u5C31\u8017\u8D39\u8FD9\u6837\u591A\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u503C\u5F97\u4E48\uFF1F\u5176\u5B9E\u8001\u677F\u9700\u8981\u7684\u6570\u636E\u53C8\u4E0D\u9700\u8981\u592A\u7CBE\u786E\uFF0C105w \u548C 106w \u8FD9\u4E24\u4E2A\u6570\u5B57\u5BF9\u4E8E\u8001\u677F\u4EEC\u6765\u8BF4\u5E76\u6CA1\u6709\u591A\u5927\u533A\u522B\uFF0CSo\uFF0C\u6709\u6CA1\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6848\u5462\uFF1F</p><p>\u8FD9\u5C31\u662F\u672C\u8282\u8981\u5F15\u5165\u7684\u4E00\u4E2A\u89E3\u51B3\u65B9\u6848\uFF0CRedis \u63D0\u4F9B\u4E86 HyperLogLog \u6570\u636E\u7ED3\u6784\u5C31\u662F\u7528\u6765\u89E3\u51B3\u8FD9\u79CD\u7EDF\u8BA1\u95EE\u9898\u7684\u3002HyperLogLog \u63D0\u4F9B\u4E0D\u7CBE\u786E\u7684\u53BB\u91CD\u8BA1\u6570\u65B9\u6848\uFF0C\u867D\u7136\u4E0D\u7CBE\u786E\u4F46\u662F\u4E5F\u4E0D\u662F\u975E\u5E38\u4E0D\u7CBE\u786E\uFF0C\u6807\u51C6\u8BEF\u5DEE\u662F 0.81%\uFF0C\u8FD9\u6837\u7684\u7CBE\u786E\u5EA6\u5DF2\u7ECF\u53EF\u4EE5\u6EE1\u8DB3\u4E0A\u9762\u7684 UV \u7EDF\u8BA1\u9700\u6C42\u4E86\u3002</p><p>HyperLogLog \u6570\u636E\u7ED3\u6784\u662F Redis \u7684\u9AD8\u7EA7\u6570\u636E\u7ED3\u6784\uFF0C\u5B83\u975E\u5E38\u6709\u7528\uFF0C\u4F46\u662F\u4EE4\u4EBA\u611F\u5230\u610F\u5916\u7684\u662F\uFF0C\u4F7F\u7528\u8FC7\u5B83\u7684\u4EBA\u975E\u5E38\u5C11\u3002</p><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>HyperLogLog \u63D0\u4F9B\u4E86\u4E24\u4E2A\u6307\u4EE4 pfadd \u548C pfcount\uFF0C\u6839\u636E\u5B57\u9762\u610F\u4E49\u5F88\u597D\u7406\u89E3\uFF0C\u4E00\u4E2A\u662F\u589E\u52A0\u8BA1\u6570\uFF0C\u4E00\u4E2A\u662F\u83B7\u53D6\u8BA1\u6570\u3002pfadd \u7528\u6CD5\u548C set \u96C6\u5408\u7684 sadd \u662F\u4E00\u6837\u7684\uFF0C\u6765\u4E00\u4E2A\u7528\u6237 ID\uFF0C\u5C31\u5C06\u7528\u6237 ID \u585E\u8FDB\u53BB\u5C31\u662F\u3002pfcount \u548C scard \u7528\u6CD5\u662F\u4E00\u6837\u7684\uFF0C\u76F4\u63A5\u83B7\u53D6\u8BA1\u6570\u503C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfadd codehole user1</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfcount codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfadd codehole user2</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfcount codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 2</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfadd codehole user3</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfcount codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 3</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfadd codehole user4</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfcount codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 4</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfadd codehole user5</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfcount codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 5</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfadd codehole user6</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfcount codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 6</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfadd codehole user7 user8 user9 user10</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; pfcount codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7B80\u5355\u8BD5\u4E86\u4E00\u4E0B\uFF0C\u53D1\u73B0\u8FD8\u86EE\u7CBE\u786E\u7684\uFF0C\u4E00\u4E2A\u6CA1\u591A\u4E5F\u4E00\u4E2A\u6CA1\u5C11\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u4F7F\u7528\u811A\u672C\uFF0C\u5F80\u91CC\u9762\u704C\u66F4\u591A\u7684\u6570\u636E\uFF0C\u770B\u770B\u5B83\u662F\u5426\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u7CBE\u786E\u4E0B\u53BB\uFF0C\u5982\u679C\u4E0D\u80FD\u7CBE\u786E\uFF0C\u5DEE\u8DDD\u6709\u591A\u5927\u3002\u4EBA\u751F\u82E6\u77ED\uFF0C\u6211\u7528 Python\uFF01Python \u811A\u672C\u8D70\u8D77\u6765\uFF01\u{1F604}</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># coding: utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">client = redis.StrictRedis()</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in range(1000):</span></span>
<span class="line"><span style="color:#A6ACCD;">    client.pfadd(&quot;codehole&quot;, &quot;user%d&quot; % i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    total = client.pfcount(&quot;codehole&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if total != i+1:</span></span>
<span class="line"><span style="color:#A6ACCD;">        print total, i+1</span></span>
<span class="line"><span style="color:#A6ACCD;">        break</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u7136 Java \u4E5F\u4E0D\u9519\uFF0C\u5927\u540C\u5C0F\u5F02\uFF0C\u4E0B\u9762\u662F Java \u7248\u672C\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">public class PfTest {</span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Jedis jedis = new Jedis();</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (int i = 0; i &lt; 1000; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      jedis.pfadd(&quot;codehole&quot;, &quot;user&quot; + i);</span></span>
<span class="line"><span style="color:#A6ACCD;">      long total = jedis.pfcount(&quot;codehole&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (total != i + 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.printf(&quot;%d %d\\n&quot;, total, i + 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    jedis.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u6765\u770B\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; python pftest.py</span></span>
<span class="line"><span style="color:#A6ACCD;">99 100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u6211\u4EEC\u52A0\u5165\u7B2C 100 \u4E2A\u5143\u7D20\u65F6\uFF0C\u7ED3\u679C\u5F00\u59CB\u51FA\u73B0\u4E86\u4E0D\u4E00\u81F4\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u6570\u636E\u589E\u52A0\u5230 10w \u4E2A\uFF0C\u770B\u770B\u603B\u91CF\u5DEE\u8DDD\u6709\u591A\u5927\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># coding: utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">client = redis.StrictRedis()</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in range(100000):</span></span>
<span class="line"><span style="color:#A6ACCD;">    client.pfadd(&quot;codehole&quot;, &quot;user%d&quot; % i)</span></span>
<span class="line"><span style="color:#A6ACCD;">print 100000, client.pfcount(&quot;codehole&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Java \u7248\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">public class JedisTest {</span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Jedis jedis = new Jedis();</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (int i = 0; i &lt; 100000; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      jedis.pfadd(&quot;codehole&quot;, &quot;user&quot; + i);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    long total = jedis.pfcount(&quot;codehole&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.printf(&quot;%d %d\\n&quot;, 100000, total);</span></span>
<span class="line"><span style="color:#A6ACCD;">    jedis.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8DD1\u4E86\u7EA6\u534A\u5206\u949F\uFF0C\u6211\u4EEC\u770B\u8F93\u51FA\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; python pftest.py</span></span>
<span class="line"><span style="color:#A6ACCD;">100000 99723</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5DEE\u4E86 277 \u4E2A\uFF0C\u6309\u767E\u5206\u6BD4\u662F 0.277%\uFF0C\u5BF9\u4E8E\u4E0A\u9762\u7684 UV \u7EDF\u8BA1\u9700\u6C42\u6765\u8BF4\uFF0C\u8BEF\u5DEE\u7387\u4E5F\u4E0D\u7B97\u9AD8\u3002\u7136\u540E\u6211\u4EEC\u628A\u4E0A\u9762\u7684\u811A\u672C\u518D\u8DD1\u4E00\u8FB9\uFF0C\u4E5F\u5C31\u76F8\u5F53\u4E8E\u5C06\u6570\u636E\u91CD\u590D\u52A0\u5165\u4E00\u8FB9\uFF0C\u67E5\u770B\u8F93\u51FA\uFF0C\u53EF\u4EE5\u53D1\u73B0\uFF0Cpfcount \u7684\u7ED3\u679C\u6CA1\u6709\u4EFB\u4F55\u6539\u53D8\uFF0C\u8FD8\u662F 99723\uFF0C\u8BF4\u660E\u5B83\u786E\u5B9E\u5177\u5907\u53BB\u91CD\u529F\u80FD\u3002</p><h2 id="pfadd-\u8FD9\u4E2A-pf-\u662F\u4EC0\u4E48\u610F\u601D\uFF1F" tabindex="-1">pfadd \u8FD9\u4E2A pf \u662F\u4EC0\u4E48\u610F\u601D\uFF1F <a class="header-anchor" href="#pfadd-\u8FD9\u4E2A-pf-\u662F\u4EC0\u4E48\u610F\u601D\uFF1F" aria-hidden="true">#</a></h2><p>\u5B83\u662F HyperLogLog \u8FD9\u4E2A\u6570\u636E\u7ED3\u6784\u7684\u53D1\u660E\u4EBA Philippe Flajolet \u7684\u9996\u5B57\u6BCD\u7F29\u5199\uFF0C\u8001\u5E08\u89C9\u5F97\u4ED6\u53D1\u578B\u5F88\u9177\uFF0C\u770B\u8D77\u6765\u662F\u4E2A\u4F5B\u7CFB\u6559\u6388\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/12/1648f09fa1a77152~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="pfmerge-\u9002\u5408\u4EC0\u4E48\u573A\u5408\u7528\uFF1F" tabindex="-1">pfmerge \u9002\u5408\u4EC0\u4E48\u573A\u5408\u7528\uFF1F <a class="header-anchor" href="#pfmerge-\u9002\u5408\u4EC0\u4E48\u573A\u5408\u7528\uFF1F" aria-hidden="true">#</a></h2><p>HyperLogLog \u9664\u4E86\u4E0A\u9762\u7684 pfadd \u548C pfcount \u4E4B\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u7B2C\u4E09\u4E2A\u6307\u4EE4 pfmerge\uFF0C\u7528\u4E8E\u5C06\u591A\u4E2A pf \u8BA1\u6570\u503C\u7D2F\u52A0\u5728\u4E00\u8D77\u5F62\u6210\u4E00\u4E2A\u65B0\u7684 pf \u503C\u3002</p><p>\u6BD4\u5982\u5728\u7F51\u7AD9\u4E2D\u6211\u4EEC\u6709\u4E24\u4E2A\u5185\u5BB9\u5DEE\u4E0D\u591A\u7684\u9875\u9762\uFF0C\u8FD0\u8425\u8BF4\u9700\u8981\u8FD9\u4E24\u4E2A\u9875\u9762\u7684\u6570\u636E\u8FDB\u884C\u5408\u5E76\u3002\u5176\u4E2D\u9875\u9762\u7684 UV \u8BBF\u95EE\u91CF\u4E5F\u9700\u8981\u5408\u5E76\uFF0C\u90A3\u8FD9\u4E2A\u65F6\u5019 pfmerge \u5C31\u53EF\u4EE5\u6D3E\u4E0A\u7528\u573A\u4E86\u3002</p><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><p>HyperLogLog \u8FD9\u4E2A\u6570\u636E\u7ED3\u6784\u4E0D\u662F\u514D\u8D39\u7684\uFF0C\u4E0D\u662F\u8BF4\u4F7F\u7528\u8FD9\u4E2A\u6570\u636E\u7ED3\u6784\u8981\u82B1\u94B1\uFF0C\u5B83\u9700\u8981\u5360\u636E\u4E00\u5B9A 12k \u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u6240\u4EE5\u5B83\u4E0D\u9002\u5408\u7EDF\u8BA1\u5355\u4E2A\u7528\u6237\u76F8\u5173\u7684\u6570\u636E\u3002\u5982\u679C\u4F60\u7684\u7528\u6237\u4E0A\u4EBF\uFF0C\u53EF\u4EE5\u7B97\u7B97\uFF0C\u8FD9\u4E2A\u7A7A\u95F4\u6210\u672C\u662F\u975E\u5E38\u60CA\u4EBA\u7684\u3002\u4F46\u662F\u76F8\u6BD4 set \u5B58\u50A8\u65B9\u6848\uFF0CHyperLogLog \u6240\u4F7F\u7528\u7684\u7A7A\u95F4\u90A3\u771F\u662F\u53EF\u4EE5\u4F7F\u7528\u5343\u65A4\u5BF9\u6BD4\u56DB\u4E24\u6765\u5F62\u5BB9\u4E86\u3002</p><p>\u4E0D\u8FC7\u4F60\u4E5F\u4E0D\u5FC5\u8FC7\u4E8E\u62C5\u5FC3\uFF0C\u56E0\u4E3A Redis \u5BF9 HyperLogLog \u7684\u5B58\u50A8\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u5728\u8BA1\u6570\u6BD4\u8F83\u5C0F\u65F6\uFF0C\u5B83\u7684\u5B58\u50A8\u7A7A\u95F4\u91C7\u7528\u7A00\u758F\u77E9\u9635\u5B58\u50A8\uFF0C\u7A7A\u95F4\u5360\u7528\u5F88\u5C0F\uFF0C\u4EC5\u4EC5\u5728\u8BA1\u6570\u6162\u6162\u53D8\u5927\uFF0C\u7A00\u758F\u77E9\u9635\u5360\u7528\u7A7A\u95F4\u6E10\u6E10\u8D85\u8FC7\u4E86\u9608\u503C\u65F6\u624D\u4F1A\u4E00\u6B21\u6027\u8F6C\u53D8\u6210\u7A20\u5BC6\u77E9\u9635\uFF0C\u624D\u4F1A\u5360\u7528 12k \u7684\u7A7A\u95F4\u3002</p><h2 id="hyperloglog-\u5B9E\u73B0\u539F\u7406" tabindex="-1">HyperLogLog \u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#hyperloglog-\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h2><p>HyperLogLog \u7684\u4F7F\u7528\u975E\u5E38\u7B80\u5355\uFF0C\u4F46\u662F\u5B9E\u73B0\u539F\u7406\u6BD4\u8F83\u590D\u6742\uFF0C\u5982\u679C\u8BFB\u8005\u6CA1\u6709\u7279\u522B\u7684\u5174\u8DA3\uFF0C\u4E0B\u9762\u7684\u5185\u5BB9\u6682\u65F6\u53EF\u4EE5\u8DF3\u8FC7\u4E0D\u770B\u3002</p><p>\u4E3A\u4E86\u65B9\u4FBF\u7406\u89E3 HyperLogLog \u7684\u5185\u90E8\u5B9E\u73B0\u539F\u7406\uFF0C\u6211\u753B\u4E86\u4E0B\u9762\u8FD9\u5F20\u56FE</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/12/1648f0af2621881b~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8FD9\u5F20\u56FE\u7684\u610F\u601D\u662F\uFF0C\u7ED9\u5B9A\u4E00\u7CFB\u5217\u7684\u968F\u673A\u6574\u6570\uFF0C\u6211\u4EEC\u8BB0\u5F55\u4E0B\u4F4E\u4F4D\u8FDE\u7EED\u96F6\u4F4D\u7684\u6700\u5927\u957F\u5EA6 k\uFF0C\u901A\u8FC7\u8FD9\u4E2A k \u503C\u53EF\u4EE5\u4F30\u7B97\u51FA\u968F\u673A\u6570\u7684\u6570\u91CF\u3002 \u9996\u5148\u4E0D\u95EE\u4E3A\u4EC0\u4E48\uFF0C\u6211\u4EEC\u7F16\u5199\u4EE3\u7801\u505A\u4E00\u4E2A\u5B9E\u9A8C\uFF0C\u89C2\u5BDF\u4E00\u4E0B\u968F\u673A\u6574\u6570\u7684\u6570\u91CF\u548C k \u503C\u7684\u5173\u7CFB\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import math</span></span>
<span class="line"><span style="color:#A6ACCD;">import random</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u7B97\u4F4E\u4F4D\u96F6\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">def low_zeros(value):</span></span>
<span class="line"><span style="color:#A6ACCD;">    for i in xrange(1, 32):</span></span>
<span class="line"><span style="color:#A6ACCD;">        if value &gt;&gt; i &lt;&lt; i != value:</span></span>
<span class="line"><span style="color:#A6ACCD;">            break</span></span>
<span class="line"><span style="color:#A6ACCD;">    return i - 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u901A\u8FC7\u968F\u673A\u6570\u8BB0\u5F55\u6700\u5927\u7684\u4F4E\u4F4D\u96F6\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">class BitKeeper(object):</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.maxbits = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def random(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        value = random.randint(0, 2**32-1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        bits = low_zeros(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if bits &gt; self.maxbits:</span></span>
<span class="line"><span style="color:#A6ACCD;">            self.maxbits = bits</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Experiment(object):</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self, n):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.n = n</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.keeper = BitKeeper()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def do(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        for i in range(self.n):</span></span>
<span class="line"><span style="color:#A6ACCD;">            self.keeper.random()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def debug(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print self.n, &#39;%.2f&#39; % math.log(self.n, 2), self.keeper.maxbits</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for i in range(1000, 100000, 100):</span></span>
<span class="line"><span style="color:#A6ACCD;">    exp = Experiment(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    exp.do()</span></span>
<span class="line"><span style="color:#A6ACCD;">    exp.debug()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Java \u7248\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">public class PfTest {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  static class BitKeeper {</span></span>
<span class="line"><span style="color:#A6ACCD;">    private int maxbits;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public void random() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      long value = ThreadLocalRandom.current().nextLong(2L &lt;&lt; 32);</span></span>
<span class="line"><span style="color:#A6ACCD;">      int bits = lowZeros(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (bits &gt; this.maxbits) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.maxbits = bits;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    private int lowZeros(long value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      int i = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (; i &lt; 32; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (value &gt;&gt; i &lt;&lt; i != value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return i - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  static class Experiment {</span></span>
<span class="line"><span style="color:#A6ACCD;">    private int n;</span></span>
<span class="line"><span style="color:#A6ACCD;">    private BitKeeper keeper;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public Experiment(int n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.n = n;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.keeper = new BitKeeper();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public void work() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.keeper.random();</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public void debug() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      System.out.printf(&quot;%d %.2f %d\\n&quot;, this.n, Math.log(this.n) / Math.log(2), this.keeper.maxbits);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (int i = 1000; i &lt; 100000; i += 100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Experiment exp = new Experiment(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">      exp.work();</span></span>
<span class="line"><span style="color:#A6ACCD;">      exp.debug();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD0\u884C\u89C2\u5BDF\u8F93\u51FA\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">36400 15.15 13</span></span>
<span class="line"><span style="color:#A6ACCD;">36500 15.16 16</span></span>
<span class="line"><span style="color:#A6ACCD;">36600 15.16 13</span></span>
<span class="line"><span style="color:#A6ACCD;">36700 15.16 14</span></span>
<span class="line"><span style="color:#A6ACCD;">36800 15.17 15</span></span>
<span class="line"><span style="color:#A6ACCD;">36900 15.17 18</span></span>
<span class="line"><span style="color:#A6ACCD;">37000 15.18 16</span></span>
<span class="line"><span style="color:#A6ACCD;">37100 15.18 15</span></span>
<span class="line"><span style="color:#A6ACCD;">37200 15.18 13</span></span>
<span class="line"><span style="color:#A6ACCD;">37300 15.19 14</span></span>
<span class="line"><span style="color:#A6ACCD;">37400 15.19 16</span></span>
<span class="line"><span style="color:#A6ACCD;">37500 15.19 14</span></span>
<span class="line"><span style="color:#A6ACCD;">37600 15.20 15</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u901A\u8FC7\u8FD9\u5B9E\u9A8C\u53EF\u4EE5\u53D1\u73B0 K \u548C N \u7684\u5BF9\u6570\u4E4B\u95F4\u5B58\u5728\u663E\u8457\u7684\u7EBF\u6027\u76F8\u5173\u6027\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">N=2^K  # \u7EA6\u7B49\u4E8E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C N \u4ECB\u4E8E 2^K \u548C 2^(K+1) \u4E4B\u95F4\uFF0C\u7528\u8FD9\u79CD\u65B9\u5F0F\u4F30\u8BA1\u7684\u503C\u90FD\u7B49\u4E8E 2^K\uFF0C\u8FD9\u660E\u663E\u662F\u4E0D\u5408\u7406\u7684\u3002\u8FD9\u91CC\u53EF\u4EE5\u91C7\u7528\u591A\u4E2A BitKeeper\uFF0C\u7136\u540E\u8FDB\u884C\u52A0\u6743\u4F30\u8BA1\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u6BD4\u8F83\u51C6\u786E\u7684\u503C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import math</span></span>
<span class="line"><span style="color:#A6ACCD;">import random</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def low_zeros(value):</span></span>
<span class="line"><span style="color:#A6ACCD;">    for i in xrange(1, 32):</span></span>
<span class="line"><span style="color:#A6ACCD;">        if value &gt;&gt; i &lt;&lt; i != value:</span></span>
<span class="line"><span style="color:#A6ACCD;">            break</span></span>
<span class="line"><span style="color:#A6ACCD;">    return i - 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class BitKeeper(object):</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.maxbits = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def random(self, m):</span></span>
<span class="line"><span style="color:#A6ACCD;">        bits = low_zeros(m)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if bits &gt; self.maxbits:</span></span>
<span class="line"><span style="color:#A6ACCD;">            self.maxbits = bits</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Experiment(object):</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self, n, k=1024):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.n = n</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.k = k</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.keepers = [BitKeeper() for i in range(k)]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def do(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        for i in range(self.n):</span></span>
<span class="line"><span style="color:#A6ACCD;">            m = random.randint(0, 1&lt;&lt;32-1)</span></span>
<span class="line"><span style="color:#A6ACCD;">            # \u786E\u4FDD\u540C\u4E00\u4E2A\u6574\u6570\u88AB\u5206\u914D\u5230\u540C\u4E00\u4E2A\u6876\u91CC\u9762\uFF0C\u6458\u53D6\u9AD8\u4F4D\u540E\u53D6\u6A21</span></span>
<span class="line"><span style="color:#A6ACCD;">            keeper = self.keepers[((m &amp; 0xfff0000) &gt;&gt; 16) % len(self.keepers)]</span></span>
<span class="line"><span style="color:#A6ACCD;">            keeper.random(m)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def estimate(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        sumbits_inverse = 0  # \u96F6\u4F4D\u6570\u5012\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">        for keeper in self.keepers:</span></span>
<span class="line"><span style="color:#A6ACCD;">            sumbits_inverse += 1.0/float(keeper.maxbits)</span></span>
<span class="line"><span style="color:#A6ACCD;">        avgbits = float(self.k)/sumbits_inverse  # \u5E73\u5747\u96F6\u4F4D\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 2**avgbits * self.k  # \u6839\u636E\u6876\u7684\u6570\u91CF\u5BF9\u4F30\u8BA1\u503C\u8FDB\u884C\u653E\u5927</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for i in range(100000, 1000000, 100000):</span></span>
<span class="line"><span style="color:#A6ACCD;">    exp = Experiment(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    exp.do()</span></span>
<span class="line"><span style="color:#A6ACCD;">    est = exp.estimate()</span></span>
<span class="line"><span style="color:#A6ACCD;">    print i, &#39;%.2f&#39; % est, &#39;%.2f&#39; % (abs(est-i) / i)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0B\u9762\u662F Java \u7248\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">public class PfTest {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  static class BitKeeper {</span></span>
<span class="line"><span style="color:#A6ACCD;">    private int maxbits;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public void random(long value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      int bits = lowZeros(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (bits &gt; this.maxbits) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.maxbits = bits;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    private int lowZeros(long value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      int i = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (; i &lt; 32; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (value &gt;&gt; i &lt;&lt; i != value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return i - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  static class Experiment {</span></span>
<span class="line"><span style="color:#A6ACCD;">    private int n;</span></span>
<span class="line"><span style="color:#A6ACCD;">    private int k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    private BitKeeper[] keepers;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public Experiment(int n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this(n, 1024);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public Experiment(int n, int k) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.n = n;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.k = k;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.keepers = new BitKeeper[k];</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (int i = 0; i &lt; k; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.keepers[i] = new BitKeeper();</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public void work() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (int i = 0; i &lt; this.n; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        long m = ThreadLocalRandom.current().nextLong(1L &lt;&lt; 32);</span></span>
<span class="line"><span style="color:#A6ACCD;">        BitKeeper keeper = keepers[(int) (((m &amp; 0xfff0000) &gt;&gt; 16) % keepers.length)];</span></span>
<span class="line"><span style="color:#A6ACCD;">        keeper.random(m);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public double estimate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      double sumbitsInverse = 0.0;</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (BitKeeper keeper : keepers) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        sumbitsInverse += 1.0 / (float) keeper.maxbits;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      double avgBits = (float) keepers.length / sumbitsInverse;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Math.pow(2, avgBits) * this.k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (int i = 100000; i &lt; 1000000; i += 100000) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Experiment exp = new Experiment(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">      exp.work();</span></span>
<span class="line"><span style="color:#A6ACCD;">      double est = exp.estimate();</span></span>
<span class="line"><span style="color:#A6ACCD;">      System.out.printf(&quot;%d %.2f %.2f\\n&quot;, i, est, Math.abs(est - i) / i);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE3\u7801\u4E2D\u5206\u4E86 1024 \u4E2A\u6876\uFF0C\u8BA1\u7B97\u5E73\u5747\u6570\u4F7F\u7528\u4E86\u8C03\u548C\u5E73\u5747 (\u5012\u6570\u7684\u5E73\u5747)\u3002\u666E\u901A\u7684\u5E73\u5747\u6CD5\u53EF\u80FD\u56E0\u4E3A\u4E2A\u522B\u79BB\u7FA4\u503C\u5BF9\u5E73\u5747\u7ED3\u679C\u4EA7\u751F\u8F83\u5927\u7684\u5F71\u54CD\uFF0C\u8C03\u548C\u5E73\u5747\u53EF\u4EE5\u6709\u6548\u5E73\u6ED1\u79BB\u7FA4\u503C\u7684\u5F71\u54CD\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/12/1648f0fa8841ceb1~tplv-t2oaga2asx-image.image" alt=""></p><p>\u89C2\u5BDF\u811A\u672C\u7684\u8F93\u51FA\uFF0C\u8BEF\u5DEE\u7387\u63A7\u5236\u5728\u767E\u5206\u6BD4\u4E2A\u4F4D\u6570\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">100000 97287.38 0.03</span></span>
<span class="line"><span style="color:#A6ACCD;">200000 189369.02 0.05</span></span>
<span class="line"><span style="color:#A6ACCD;">300000 287770.04 0.04</span></span>
<span class="line"><span style="color:#A6ACCD;">400000 401233.52 0.00</span></span>
<span class="line"><span style="color:#A6ACCD;">500000 491704.97 0.02</span></span>
<span class="line"><span style="color:#A6ACCD;">600000 604233.92 0.01</span></span>
<span class="line"><span style="color:#A6ACCD;">700000 721127.67 0.03</span></span>
<span class="line"><span style="color:#A6ACCD;">800000 832308.12 0.04</span></span>
<span class="line"><span style="color:#A6ACCD;">900000 870954.86 0.03</span></span>
<span class="line"><span style="color:#A6ACCD;">1000000 1075497.64 0.08</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u771F\u5B9E\u7684 HyperLogLog \u8981\u6BD4\u4E0A\u9762\u7684\u793A\u4F8B\u4EE3\u7801\u66F4\u52A0\u590D\u6742\u4E00\u4E9B\uFF0C\u4E5F\u66F4\u52A0\u7CBE\u786E\u4E00\u4E9B\u3002\u4E0A\u9762\u7684\u8FD9\u4E2A\u7B97\u6CD5\u5728\u968F\u673A\u6B21\u6570\u5F88\u5C11\u7684\u60C5\u51B5\u4E0B\u4F1A\u51FA\u73B0\u9664\u96F6\u9519\u8BEF\uFF0C\u56E0\u4E3A maxbits=0 \u662F\u4E0D\u53EF\u4EE5\u6C42\u5012\u6570\u7684\u3002</p><h2 id="pf-\u7684\u5185\u5B58\u5360\u7528\u4E3A\u4EC0\u4E48\u662F-12k\uFF1F" tabindex="-1">pf \u7684\u5185\u5B58\u5360\u7528\u4E3A\u4EC0\u4E48\u662F 12k\uFF1F <a class="header-anchor" href="#pf-\u7684\u5185\u5B58\u5360\u7528\u4E3A\u4EC0\u4E48\u662F-12k\uFF1F" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u4E0A\u9762\u7684\u7B97\u6CD5\u4E2D\u4F7F\u7528\u4E86 1024 \u4E2A\u6876\u8FDB\u884C\u72EC\u7ACB\u8BA1\u6570\uFF0C\u4E0D\u8FC7\u5728 Redis \u7684 HyperLogLog \u5B9E\u73B0\u4E2D\u7528\u5230\u7684\u662F 16384 \u4E2A\u6876\uFF0C\u4E5F\u5C31\u662F 2^14\uFF0C\u6BCF\u4E2A\u6876\u7684 maxbits \u9700\u8981 6 \u4E2A bits \u6765\u5B58\u50A8\uFF0C\u6700\u5927\u53EF\u4EE5\u8868\u793A maxbits=63\uFF0C\u4E8E\u662F\u603B\u5171\u5360\u7528\u5185\u5B58\u5C31\u662F<code>2^14 * 6 / 8 = 12k</code>\u5B57\u8282\u3002</p><h2 id="\u601D\u8003-\u4F5C\u4E1A" tabindex="-1">\u601D\u8003 &amp; \u4F5C\u4E1A <a class="header-anchor" href="#\u601D\u8003-\u4F5C\u4E1A" aria-hidden="true">#</a></h2><p>\u5C1D\u8BD5\u5C06\u4E00\u5806\u6570\u636E\u8FDB\u884C\u5206\u7EC4\uFF0C\u5206\u522B\u8FDB\u884C\u8BA1\u6570\uFF0C\u518D\u4F7F\u7528 pfmerge \u5408\u5E76\u5230\u4E00\u8D77\uFF0C\u89C2\u5BDF pfcount \u8BA1\u6570\u503C\uFF0C\u4E0E\u4E0D\u5206\u7EC4\u7684\u60C5\u51B5\u4E0B\u7684\u7EDF\u8BA1\u7ED3\u679C\u8FDB\u884C\u6BD4\u8F83\uFF0C\u89C2\u5BDF\u6709\u6CA1\u6709\u5DEE\u5F02\u3002</p><h2 id="\u6269\u5C55\u9605\u8BFB" tabindex="-1">\u6269\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><ul><li>HyperLogLog \u590D\u6742\u7684\u516C\u5F0F\u63A8\u5BFC\u8BF7\u9605\u8BFB <a href="https://www.slideshare.net/KaiZhang130/countdistinct-problem-88329470" target="_blank" rel="noreferrer">Count-Distinct Problem</a>\uFF0C\u5982\u679C\u4F60\u7684\u6982\u7387\u8BBA\u57FA\u7840\u4E0D\u597D\uFF0C\u90A3\u5C31\u5EFA\u8BAE\u4E0D\u8981\u770B\u4E86\uFF08\u53E6\uFF0C\u8FD9\u4E2A PPT \u9700\u8981\u7FFB\u5899\u89C2\u770B\uFF09\u3002</li></ul>`,63),o=[e];function c(t,i,r,A,C,y){return a(),n("div",null,o)}const g=s(l,[["render",c]]);export{d as __pageData,g as default};
