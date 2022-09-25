import{_ as s,c as n,o as a,d as p}from"./app.e0e4ea3a.js";const y=JSON.parse('{"title":"\u8FDB\u9636 4-\u7ED9 API \u589E\u52A0\u542F\u52A8\u811A\u672C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u672C\u8282\u6838\u5FC3\u5185\u5BB9","slug":"\u672C\u8282\u6838\u5FC3\u5185\u5BB9","link":"#\u672C\u8282\u6838\u5FC3\u5185\u5BB9","children":[]},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u6DFB\u52A0\u542F\u52A8\u811A\u672C","slug":"\u4E3A\u4EC0\u4E48\u8981\u6DFB\u52A0\u542F\u52A8\u811A\u672C","link":"#\u4E3A\u4EC0\u4E48\u8981\u6DFB\u52A0\u542F\u52A8\u811A\u672C","children":[]},{"level":2,"title":"\u6DFB\u52A0\u542F\u52A8\u811A\u672C","slug":"\u6DFB\u52A0\u542F\u52A8\u811A\u672C","link":"#\u6DFB\u52A0\u542F\u52A8\u811A\u672C","children":[]},{"level":2,"title":"\u7F16\u8BD1\u5E76\u6D4B\u8BD5","slug":"\u7F16\u8BD1\u5E76\u6D4B\u8BD5","link":"#\u7F16\u8BD1\u5E76\u6D4B\u8BD5","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u8FDB\u9636 4-\u7ED9 API \u589E\u52A0\u542F\u52A8\u811A\u672C.md"}'),l={name:"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u8FDB\u9636 4-\u7ED9 API \u589E\u52A0\u542F\u52A8\u811A\u672C.md"},e=p(`<h1 id="\u8FDB\u9636-4-\u7ED9-api-\u589E\u52A0\u542F\u52A8\u811A\u672C" tabindex="-1">\u8FDB\u9636 4-\u7ED9 API \u589E\u52A0\u542F\u52A8\u811A\u672C <a class="header-anchor" href="#\u8FDB\u9636-4-\u7ED9-api-\u589E\u52A0\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a></h1><hr><h1 id="\u7ED9-api-\u589E\u52A0\u542F\u52A8\u811A\u672C" tabindex="-1">\u7ED9 API \u589E\u52A0\u542F\u52A8\u811A\u672C <a class="header-anchor" href="#\u7ED9-api-\u589E\u52A0\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a></h1><h2 id="\u672C\u8282\u6838\u5FC3\u5185\u5BB9" tabindex="-1">\u672C\u8282\u6838\u5FC3\u5185\u5BB9 <a class="header-anchor" href="#\u672C\u8282\u6838\u5FC3\u5185\u5BB9" aria-hidden="true">#</a></h2><ul><li>\u5982\u4F55\u7BA1\u7406 apiserver \u542F\u52A8\u547D\u4EE4\uFF0C\u5305\u62EC\u542F\u52A8\u3001\u91CD\u542F\u3001\u505C\u6B62\u548C\u67E5\u770B\u8FD0\u884C\u72B6\u6001</li></ul><blockquote><p>\u672C\u5C0F\u8282\u6E90\u7801\u4E0B\u8F7D\u8DEF\u5F84\uFF1A<a href="https://github.com/lexkong/apiserver_demos/tree/master/demo13" target="_blank" rel="noreferrer">demo13</a></p><p>\u53EF\u5148\u4E0B\u8F7D\u6E90\u7801\u5230\u672C\u5730\uFF0C\u7ED3\u5408\u6E90\u7801\u7406\u89E3\u540E\u7EED\u5185\u5BB9\uFF0C\u8FB9\u5B66\u8FB9\u7EC3\u3002</p><p>\u672C\u5C0F\u8282\u7684\u4EE3\u7801\u662F\u57FA\u4E8E <a href="https://github.com/lexkong/apiserver_demos/tree/master/demo12" target="_blank" rel="noreferrer">demo12</a> \u6765\u5F00\u53D1\u7684\u3002</p></blockquote><h2 id="\u4E3A\u4EC0\u4E48\u8981\u6DFB\u52A0\u542F\u52A8\u811A\u672C" tabindex="-1">\u4E3A\u4EC0\u4E48\u8981\u6DFB\u52A0\u542F\u52A8\u811A\u672C <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u6DFB\u52A0\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u6DFB\u52A0\u670D\u52A1\u5668\u542F\u52A8\u811A\u672C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u542F\u52A8\u3001\u91CD\u542F\u3001\u505C\u6B62\u548C\u67E5\u770B\u670D\u52A1\u7684\u72B6\u6001\u3002\u4E00\u4E9B\u76D1\u63A7\u7CFB\u7EDF\u3001\u53D1\u5E03\u7CFB\u7EDF\u9700\u8981\u6709\u65B9\u6CD5\u544A\u8BC9\u5B83\u600E\u4E48\u542F\u505C\u548C\u67E5\u770B\u670D\u52A1\u72B6\u6001\uFF0C\u8FD9\u65F6\u5019\u5982\u679C\u6709\u4E2A\u670D\u52A1\u63A7\u5236\u811A\u672C\u5C31\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u6DFB\u52A0\uFF0C\u8981\u4E0D\u7136\u8F93\u5165\u4E00\u5806\u542F\u52A8\u53C2\u6570\u4E0D\u4EC5\u70E6\u7410\u8FD8\u5BB9\u6613\u51FA\u9519\u3002</p><h2 id="\u6DFB\u52A0\u542F\u52A8\u811A\u672C" tabindex="-1">\u6DFB\u52A0\u542F\u52A8\u811A\u672C <a class="header-anchor" href="#\u6DFB\u52A0\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a></h2><p>apiserver \u662F\u901A\u8FC7 <code>admin.sh</code> \u811A\u672C\u6765\u5B9E\u73B0\u670D\u52A1\u542F\u52A8\u3001\u91CD\u542F\u3001\u505C\u6B62\u548C\u67E5\u770B\u670D\u52A1\u72B6\u6001\u64CD\u4F5C\u7684\uFF08\u8BE6\u89C1 <a href="https://github.com/lexkong/apiserver_demos/blob/master/demo13/admin.sh" target="_blank" rel="noreferrer">demo13/admin.sh</a>\uFF09\uFF0C\u6E90\u7801\u4E3A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">SERVER=&quot;apiserver&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">BASE_DIR=$PWD</span></span>
<span class="line"><span style="color:#A6ACCD;">INTERVAL=2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u9700\u8981\u624B\u52A8\u6307\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">ARGS=&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function start()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	if [ &quot;\`pgrep $SERVER -u $UID\`&quot; != &quot;&quot; ];then</span></span>
<span class="line"><span style="color:#A6ACCD;">		echo &quot;$SERVER already running&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		exit 1</span></span>
<span class="line"><span style="color:#A6ACCD;">	fi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	nohup $BASE_DIR/$SERVER $ARGS  server &amp;&gt;/dev/null &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	echo &quot;sleeping...&quot; &amp;&amp;  sleep $INTERVAL</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	# check status</span></span>
<span class="line"><span style="color:#A6ACCD;">	if [ &quot;\`pgrep $SERVER -u $UID\`&quot; == &quot;&quot; ];then</span></span>
<span class="line"><span style="color:#A6ACCD;">		echo &quot;$SERVER start failed&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		exit 1</span></span>
<span class="line"><span style="color:#A6ACCD;">	fi</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function status() </span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	if [ &quot;\`pgrep $SERVER -u $UID\`&quot; != &quot;&quot; ];then</span></span>
<span class="line"><span style="color:#A6ACCD;">		echo $SERVER is running</span></span>
<span class="line"><span style="color:#A6ACCD;">	else</span></span>
<span class="line"><span style="color:#A6ACCD;">		echo $SERVER is not running</span></span>
<span class="line"><span style="color:#A6ACCD;">	fi</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function stop() </span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	if [ &quot;\`pgrep $SERVER -u $UID\`&quot; != &quot;&quot; ];then</span></span>
<span class="line"><span style="color:#A6ACCD;">		kill -9 \`pgrep $SERVER -u $UID\`</span></span>
<span class="line"><span style="color:#A6ACCD;">	fi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	echo &quot;sleeping...&quot; &amp;&amp;  sleep $INTERVAL</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	if [ &quot;\`pgrep $SERVER -u $UID\`&quot; != &quot;&quot; ];then</span></span>
<span class="line"><span style="color:#A6ACCD;">		echo &quot;$SERVER stop failed&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		exit 1</span></span>
<span class="line"><span style="color:#A6ACCD;">	fi</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">case &quot;$1&quot; in</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;start&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	start</span></span>
<span class="line"><span style="color:#A6ACCD;">	;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;stop&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	stop</span></span>
<span class="line"><span style="color:#A6ACCD;">	;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;status&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	status</span></span>
<span class="line"><span style="color:#A6ACCD;">	;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;restart&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	stop &amp;&amp; start</span></span>
<span class="line"><span style="color:#A6ACCD;">	;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">	*)  </span></span>
<span class="line"><span style="color:#A6ACCD;">	echo &quot;usage: $0 {start|stop|restart|status}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	exit 1</span></span>
<span class="line"><span style="color:#A6ACCD;">	;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">esac</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u770B shell \u6E90\u7801\u53D1\u73B0\u5728 start \u548C stop \u65F6\u4F1A sleep \u51E0\u79D2\uFF0C\u8FD9\u662F\u56E0\u4E3A API \u670D\u52A1\u5668\u7684\u542F\u52A8\u9700\u8981\u65F6\u95F4\u53BB\u505A\u51C6\u5907\u5DE5\u4F5C\uFF0C\u505C\u6B62\u4E5F\u9700\u8981\u65F6\u95F4\u53BB\u505A\u6E05\u7406\u5DE5\u4F5C\u3002</p></blockquote><h2 id="\u7F16\u8BD1\u5E76\u6D4B\u8BD5" tabindex="-1">\u7F16\u8BD1\u5E76\u6D4B\u8BD5 <a class="header-anchor" href="#\u7F16\u8BD1\u5E76\u6D4B\u8BD5" aria-hidden="true">#</a></h2><ol><li><pre><code>\u4E0B\u8F7D apiserver\\_demos \u6E90\u7801\u5305\uFF08\u5982\u524D\u9762\u5DF2\u7ECF\u4E0B\u8F7D\u8FC7\uFF0C\u8BF7\u5FFD\u7565\u6B64\u6B65\u9AA4\uFF09
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/lexkong/apiserver_demos</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li><pre><code>\u5C06 \`apiserver_demos/demo13\` \u590D\u5236\u4E3A \`$GOPATH/src/apiserver\`
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cp -a apiserver_demos/demo13/ $GOPATH/src/apiserver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li><pre><code>\u5728 apiserver \u76EE\u5F55\u4E0B\u7F16\u8BD1\u6E90\u7801
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cd $GOPATH/src/apiserver</span></span>
<span class="line"><span style="color:#A6ACCD;">$ make</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u67E5\u770B <code>admin.sh</code> \u7528\u6CD5</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ./admin.sh -h</span></span>
<span class="line"><span style="color:#A6ACCD;">usage: ./admin.sh {start|stop|restart|status}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u67E5\u770B <code>apiserver</code> \u8FD0\u884C\u72B6\u6001</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ./admin.sh status</span></span>
<span class="line"><span style="color:#A6ACCD;">apiserver is not running</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u542F\u52A8 <code>apiserver</code></strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ./admin.sh start</span></span>
<span class="line"><span style="color:#A6ACCD;">sleeping...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u67E5\u770B <code>apiserver</code> \u72B6\u6001</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ./admin.sh status</span></span>
<span class="line"><span style="color:#A6ACCD;">apiserver is running</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u91CD\u542F <code>apiserver</code></strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ./admin.sh restart</span></span>
<span class="line"><span style="color:#A6ACCD;">sleeping...</span></span>
<span class="line"><span style="color:#A6ACCD;">sleeping...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u505C\u6B62 <code>apiserver</code></strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ./admin.sh stop</span></span>
<span class="line"><span style="color:#A6ACCD;">sleeping...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u5C0F\u7ED3\u5C55\u793A\u4E86\u5982\u4F55\u7528 <code>admin.sh</code> \u53BB\u7BA1\u7406 API \u670D\u52A1\u5668\uFF1A\u542F\u52A8\u3001\u91CD\u542F\u3001\u505C\u6B62\u548C\u67E5\u770B\u72B6\u6001\u3002\u8BE5 <code>admin.sh</code> \u547D\u4EE4\u5728\u8FDB\u884C start\u3001stop\u3001restart \u548C status \u64CD\u4F5C\u65F6\u505A\u4E86\u5F88\u591A\u68C0\u67E5\u5DE5\u4F5C\uFF0C\u4EE5\u786E\u4FDD\u8FD0\u884C\u7ED3\u679C\u662F\u6B63\u786E\u7684\u3002</p>`,33),o=[e];function t(c,r,i,A,C,d){return a(),n("div",null,o)}const D=s(l,[["render",t]]);export{y as __pageData,D as default};
