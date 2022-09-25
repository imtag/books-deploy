import{_ as s,c as n,o as a,d as e}from"./app.e0e4ea3a.js";const D=JSON.parse('{"title":"\u5B9E\u6218\u7BC7 4-\u57FA\u4E8E Socket.IO \u7684\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Socket.IO \u7B80\u4ECB","slug":"_1-socket-io-\u7B80\u4ECB","link":"#_1-socket-io-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. \u5BF9\u6218\u670D\u52A1\u8BE6\u89E3","slug":"_2-\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3","link":"#_2-\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3","children":[{"level":3,"title":"login\uFF08\u767B\u5F55\uFF09","slug":"login\uFF08\u767B\u5F55\uFF09","link":"#login\uFF08\u767B\u5F55\uFF09","children":[]},{"level":3,"title":"create room\uFF08\u521B\u5EFA\u623F\u95F4\uFF09","slug":"create-room\uFF08\u521B\u5EFA\u623F\u95F4\uFF09","link":"#create-room\uFF08\u521B\u5EFA\u623F\u95F4\uFF09","children":[]},{"level":3,"title":"join room\uFF08\u52A0\u5165\u623F\u95F4\uFF09","slug":"join-room\uFF08\u52A0\u5165\u623F\u95F4\uFF09","link":"#join-room\uFF08\u52A0\u5165\u623F\u95F4\uFF09","children":[]},{"level":3,"title":"ready\uFF08\u51C6\u5907\uFF09","slug":"ready\uFF08\u51C6\u5907\uFF09","link":"#ready\uFF08\u51C6\u5907\uFF09","children":[]},{"level":3,"title":"place piece\uFF08\u843D\u5B50\uFF09","slug":"place-piece\uFF08\u843D\u5B50\uFF09","link":"#place-piece\uFF08\u843D\u5B50\uFF09","children":[]},{"level":3,"title":"leave room\uFF08\u79BB\u5F00\u623F\u95F4\uFF09","slug":"leave-room\uFF08\u79BB\u5F00\u623F\u95F4\uFF09","link":"#leave-room\uFF08\u79BB\u5F00\u623F\u95F4\uFF09","children":[]},{"level":3,"title":"\u6E38\u620F\u751F\u547D\u5468\u671F","slug":"\u6E38\u620F\u751F\u547D\u5468\u671F","link":"#\u6E38\u620F\u751F\u547D\u5468\u671F","children":[]}]},{"level":2,"title":"3. \u5FAE\u4FE1\u63A5\u53E3\u4F7F\u7528","slug":"_3-\u5FAE\u4FE1\u63A5\u53E3\u4F7F\u7528","link":"#_3-\u5FAE\u4FE1\u63A5\u53E3\u4F7F\u7528","children":[{"level":3,"title":"code2accessToken","slug":"code2accesstoken","link":"#code2accesstoken","children":[]},{"level":3,"title":"setUserStorage, accessToken","slug":"setuserstorage-accesstoken","link":"#setuserstorage-accesstoken","children":[]}]},{"level":2,"title":"4. \u5C0F\u7ED3","slug":"_4-\u5C0F\u7ED3","link":"#_4-\u5C0F\u7ED3","children":[]}],"relativePath":"\u5C0F\u7A0B\u5E8F/\u5FAE\u4FE1\u5C0F\u6E38\u620F\u5F00\u53D1\u5165\u95E8\uFF1A\u4ECE 0 \u5230 1 \u5B9E\u73B0\u4E95\u5B57\u68CB\u6E38\u620F/\u5B9E\u6218\u7BC7 4-\u57FA\u4E8E Socket.IO \u7684\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3.md"}'),l={name:"\u5C0F\u7A0B\u5E8F/\u5FAE\u4FE1\u5C0F\u6E38\u620F\u5F00\u53D1\u5165\u95E8\uFF1A\u4ECE 0 \u5230 1 \u5B9E\u73B0\u4E95\u5B57\u68CB\u6E38\u620F/\u5B9E\u6218\u7BC7 4-\u57FA\u4E8E Socket.IO \u7684\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3.md"},p=e(`<h1 id="\u5B9E\u6218\u7BC7-4-\u57FA\u4E8E-socket-io-\u7684\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3" tabindex="-1">\u5B9E\u6218\u7BC7 4-\u57FA\u4E8E <a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u7684\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3 <a class="header-anchor" href="#\u5B9E\u6218\u7BC7-4-\u57FA\u4E8E-socket-io-\u7684\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3" aria-hidden="true">#</a></h1><hr><h1 id="\u5B9E\u6218\u7BC7-4\uFF1A\u57FA\u4E8Esocket-io\u7684\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3" tabindex="-1">\u5B9E\u6218\u7BC7 4\uFF1A\u57FA\u4E8ESocket.IO\u7684\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3 <a class="header-anchor" href="#\u5B9E\u6218\u7BC7-4\uFF1A\u57FA\u4E8Esocket-io\u7684\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3" aria-hidden="true">#</a></h1><p>\u5728\u672C\u8282\u4E2D\u6211\u4EEC\u4F1A\u8BB2\u89E3\u670D\u52A1\u5668\u7AEF\u7684\u91CD\u8981\u90E8\u5206\uFF0C\u4EE5\u53CA\u5FAE\u4FE1\u5C0F\u6E38\u620F\u5E73\u53F0\u63D0\u4F9B\u7ED9\u670D\u52A1\u5668\u7AEF\u7684\u90E8\u5206 API \u3002\u6240\u6709\u5C55\u793A\u7684\u4EE3\u7801\u90FD\u4EE5\u65B9\u4FBF\u8BB2\u89E3\u4E3A\u76EE\u7684\uFF0C\u8FDB\u884C\u4E86\u4E00\u5B9A\u5220\u6539\uFF0C\u4E0E\u9879\u76EE\u6E90\u7801\u53EF\u80FD\u65E0\u6CD5\u5B8C\u5168\u5339\u914D\uFF0C\u671B\u8BFB\u8005\u77E5\u6089\u3002</p><blockquote><p>\u670D\u52A1\u5668\u7AEF\u7F16\u7A0B\u5B8C\u5168\u662F\u53E6\u4E00\u4E2A\u9886\u57DF\uFF0C\u8981\u60F3\u719F\u7EC3\u638C\u63E1\uFF0C\u5FC5\u987B\u53E6\u5916\u6DF1\u5165\u5B66\u4E60\uFF0C\u4F46\u6211\u4EEC\u4ECD\u5E0C\u671B\u5C3D\u53EF\u80FD\u4E3A\u8BFB\u8005\u8BB2\u89E3\u672C\u9879\u76EE\u7684\u91CD\u8981\u90E8\u5206\u3002\u6CE8\u610F\u9879\u76EE\u4E2D\u8BB8\u591A\u5185\u5BB9\u5E76\u975E\u751F\u4EA7\u73AF\u5883\u6700\u4F73\u5B9E\u8DF5\uFF0C\u4E3A\u4E86\u964D\u4F4E\u95E8\u69DB\uFF0C\u670D\u52A1\u5668\u7684\u8BED\u8A00\u987A\u7406\u6210\u7AE0\u9009\u62E9\u4E86 Node.js \uFF0C\u670D\u52A1\u5668\u4E5F\u4F7F\u7528\u4E86 Node.js \u81EA\u5E26\u7684 https \u5E93\u800C\u975E nginx\u3001apache \u7B49\u3002\u6709\u5174\u8DA3\u7684\u8BFB\u8005\u53EF\u4EE5\u901A\u8FC7\u66F4\u52A0\u4E13\u95E8\u7684\u6E20\u9053\u5B66\u4E60\u670D\u52A1\u5668\u7AEF\u5F00\u53D1\u7684\u77E5\u8BC6\u3002</p></blockquote><h2 id="_1-socket-io-\u7B80\u4ECB" tabindex="-1">1. <a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u7B80\u4ECB <a class="header-anchor" href="#_1-socket-io-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u7684\u540E\u53F0\u901A\u8FC7 <a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u4E0E\u5C0F\u6E38\u620F\u7AEF\u901A\u8BAF\uFF0C<a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u662F\u4E00\u4E2A\u96C6\u901F\u5EA6\u4E0E\u53EF\u9760\u6027\u4E8E\u4E00\u4F53\u7684\u5B9E\u65F6\u53CC\u5411\u901A\u8BAF\u5E93\u3002</p><p>\u6709\u4E00\u79CD\u5E38\u89C1\u7684\u8BEF\u89E3\uFF0C\u8BA4\u4E3A\u5B83\u662F\u4E00\u4E2A WebSocket \u7684\u5DE5\u5177\u5E93\uFF0C\u5B9E\u9645\u4E0A <a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u662F\u72EC\u7ACB\u4E8E WebSocket \u7684\u53E6\u4E00\u79CD\u534F\u8BAE\uFF0C\u5B83\u53EF\u4EE5\u57FA\u4E8E\u5176\u4ED6\u591A\u79CD\u534F\u8BAE\u5982 HTTP \u6216 WebSocket \u8FDB\u884C\u6570\u636E\u4F20\u8F93\uFF0C\u5B83\u548C WebSocket \u4E4B\u95F4\u7684\u5173\u7CFB\u5C31\u50CF\u662F HTTP \u4E0E TCP \u4E00\u6837\u3002\u56E0\u6B64\u8BFB\u8005\u4E0D\u9700\u8981\u4E86\u89E3 WebSocket \uFF0C\u5C31\u53EF\u4EE5\u5F00\u59CB\u5B66\u4E60 <a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \uFF0C\u800C\u540E\u8005\u4E0A\u624B\u8D77\u6765\u8981\u7B80\u5355\u5F88\u591A\u3002</p><p>\u8981\u521B\u5EFA\u4E00\u4E2A <a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u670D\u52A1\u5668\u975E\u5E38\u7B80\u5355\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//=============</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u670D\u52A1\u5668\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">//=============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4F7F\u7528 node.js \u81EA\u5E26\u7684 https \u5E93\u521B\u5EFA\u4E00\u4E2A https \u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = require(&#39;https&#39;).createServer({</span></span>
<span class="line"><span style="color:#A6ACCD;">  key: fs.readFileSync(&#39;./xxxx.key&#39;),    // \u4E4B\u524D\u4E0B\u8F7D\u7684 ssl \u79C1\u94A5\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  cert: fs.readFileSync(&#39;./xxxx.crt&#39;),   // \u4E4B\u524D\u4E0B\u8F7D\u7684 ssl \u8BC1\u4E66\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u521B\u5EFA socket.io \u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">const io = require(&#39;socket.io&#39;)(app)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u76D1\u542C https \u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(443)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6709\u5BA2\u6237\u7AEF\u8FDE\u63A5\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">io.on(&#39;connection&#39;, function (socket) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;\u6709\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8FDE\u63A5\u4E86\u670D\u52A1\u5668\uFF1A&#39;, socket)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // socket \u4EE3\u8868\u8BE5\u5BA2\u6237\u7AEF\u7684 socket.io \u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u670D\u52A1\u5668\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u8FD8\u9700\u8981\u5C0F\u6E38\u620F\u7AEF\u8FDE\u63A5\u4E0A\u6765\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//=============</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5C0F\u6E38\u620F\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">//=============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FDE\u63A5\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">const io = require(&#39;./libs/socket.io.slim&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const socket = io(&#39;https://xxxx.xxx&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  transports: [&#39;websocket&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u670D\u52A1\u5668\u4F1A\u6253\u5370 <code>\u6709\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8FDE\u63A5\u4E86\u670D\u52A1\u5668\uFF1A...</code> \uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F00\u59CB\u901A\u8BAF\u4E86\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//=============</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5C0F\u6E38\u620F\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">//=============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">socket.on(&#39;bar&#39;, function (payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 4. \u670D\u52A1\u5668\u6536\u5230 bar \u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(payload)  // \u6253\u5370 &#39;world&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 1. \u5411\u670D\u52A1\u5668\u53D1\u9001 foo \u6D88\u606F\uFF0C\u5E76\u4E14\u989D\u5916\u5E26\u4E0A\u4E24\u4E2A\u53C2\u6570 &#39;hello&#39; \u548C\u4E00\u4E2A\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">socket.emit(&#39;foo&#39;, &#39;hello&#39;, function (foo) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // **** 2 ****</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(foo)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//=============</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u670D\u52A1\u5668\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">//=============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">io.on(&#39;connection&#39;, function (socket) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6BCF\u4E2A socket \u5BF9\u8C61\u4EE3\u8868\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  socket.on(&#39;foo&#39;, function (payload, callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2. \u670D\u52A1\u5668\u6536\u5230 foo \u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(payload)  // \u6253\u5370 &#39;hello&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    callback(&#39;done&#39;)      // \u6B64\u65F6 **** 2 **** \u5904\u7684\u4EE3\u7801\u4F1A\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 3. \u5411\u5C0F\u6E38\u620F\u53D1\u9001 bar \u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">    socket.emit(&#39;bar&#39;, &#39;world&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u53EA\u662F <a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u6700\u57FA\u672C\u7684\u7528\u6CD5\uFF0C\u611F\u5174\u8DA3\u7684\u8BFB\u8005\u53EF\u4EE5\u8BBF\u95EE\u5176<a href="https://socket.io/" target="_blank" rel="noreferrer">\u5B98\u7F51</a>\u8FDB\u4E00\u6B65\u4E86\u89E3\u3002</p><h2 id="_2-\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3" tabindex="-1">2. \u5BF9\u6218\u670D\u52A1\u8BE6\u89E3 <a class="header-anchor" href="#_2-\u5BF9\u6218\u670D\u52A1\u8BE6\u89E3" aria-hidden="true">#</a></h2><p>\u5728\u5165\u53E3\u6587\u4EF6 <code>index.js</code> \u4E2D\uFF0C\u6211\u4EEC\u9996\u5148\u548C\u4E0A\u9762\u8BB2\u89E3\u7684\u4E00\u6837\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2A <a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u670D\u52A1\u5668\u3002\u7136\u540E\u76D1\u542C\u4E86\u4E00\u7CFB\u5217\u5C0F\u6E38\u620F\u7AEF\u53EF\u80FD\u5411\u670D\u52A1\u5668\u53D1\u9001\u7684\u6D88\u606F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">socket</span></span>
<span class="line"><span style="color:#A6ACCD;">  .on(&#39;login&#39;, /* ... */)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .on(&#39;create room&#39;, /* ... */)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .on(&#39;join room&#39;, /* ... */)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .on(&#39;ready&#39;, /* ... */)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .on(&#39;place piece&#39;, /* ... */)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .on(&#39;leave room&#39;, /* ... */)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u800C\u7C7B\u4F3C\u7684\uFF0C\u670D\u52A1\u5668\u7AEF\u4E5F\u4F1A\u5411\u5C0F\u6E38\u620F\u53D1\u9001\u4E00\u7CFB\u5217\u6D88\u606F\uFF0C\u4E0B\u56FE\u5C55\u793A\u4E86\u4E00\u6B21\u5BF9\u6218\u6D41\u7A0B\u4E2D\u7684\u6D88\u606F\u901A\u8BAF\u8FC7\u7A0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/12/165ccfdabfcf3742~tplv-t2oaga2asx-image.image" alt="\u591A\u4EBA\u6D88\u606F"></p><h3 id="login\uFF08\u767B\u5F55\uFF09" tabindex="-1">login\uFF08\u767B\u5F55\uFF09 <a class="header-anchor" href="#login\uFF08\u767B\u5F55\uFF09" aria-hidden="true">#</a></h3><p>\u5728\u5C0F\u6E38\u620F\u7AEF\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u540E\uFF0C\u5FC5\u987B\u8981\u9996\u5148\u53D1\u9001 <code>login</code> \u6D88\u606F\u544A\u77E5\u670D\u52A1\u5668\u81EA\u5DF1\u7684\u8EAB\u4EFD\u3002</p><p>\u5982\u679C\u6B64\u524D\u6CA1\u6709\u767B\u9646\u8FC7\uFF0C\u6216\u767B\u5F55\u8FC7\u671F\u4E86\u3002\u5C0F\u6E38\u620F\u5C31\u9700\u8981\u8C03\u7528 <a href="https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html" target="_blank" rel="noreferrer"><code>wx.login</code></a> \u62FF\u5230 code \u4E0E\u73A9\u5BB6\u4FE1\u606F\uFF08<a href="https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserInfo.html" target="_blank" rel="noreferrer"><code>wx.getUserInfo</code></a>\uFF09\u4E00\u5E76\u53D1\u9001\u5230\u670D\u52A1\u5668\u3002\u5982\u679C\u5DF2\u7ECF\u767B\u9646\u8FC7\u4E14\u672A\u8FC7\u671F\uFF0C\u5219\u9700\u8981\u5C06\u767B\u9646\u6001\u53D1\u9001\u5230\u670D\u52A1\u5668\u3002</p><blockquote><p><code>wx.login</code> \u767B\u9646\u6D41\u7A0B\u5728\u672C\u8282\u201C\u5FAE\u4FE1\u63A5\u53E3\u201D\u90E8\u5206\u6709\u8BE6\u7EC6\u4ECB\u7ECD\u3002</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.on(&#39;login&#39;, async (payload, cb) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const player = await Players.login(payload)   // \u8C03\u7528\u5176\u4ED6 players.js \u4E2D\u7684\u51FD\u6570\u5F97\u5230\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  socket.playerId = player._id                  // \u5C06\u73A9\u5BB6 ID \u7ED1\u5B9A\u5230 socket \u5B9E\u4F8B\u4E0A\uFF0C\u5176\u4ED6\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">                                                // \u5C31\u4F1A\u77E5\u9053\u6BCF\u4E2A socket \u5BF9\u5E94\u54EA\u4E2A\u73A9\u5BB6</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8EAB\u4EFD\u786E\u8BA4\u540E\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4E3A\u8BE5\u73A9\u5BB6\u6062\u590D\u6B64\u524D\u52A0\u5165\u7684\u623F\u95F4\u548C\u672A\u5B8C\u6210\u7684\u6E38\u620F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.on(&#39;login&#39;, async (payload, cb) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const player = await Players.login(payload)</span></span>
<span class="line"><span style="color:#A6ACCD;">  socket.playerId = player._id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let resumeData = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6062\u590D\u623F\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (player.roomId) {                               // \u5982\u679C\u73A9\u5BB6\u6B64\u524D\u6709\u52A0\u5165\u7684\u623F\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">    const join = promisify(socket.join).bind(socket) // \u5C06 socket.join \u63A5\u53E3\u8F6C\u4E3A async await \u5F62\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    await join(player.roomId)                        // \u91CD\u65B0\u52A0\u5165\u8BE5\u623F\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">    const opponent = await Players.getOpponent(socket.playerId)            // \u83B7\u5F97\u73A9\u5BB6\u7684\u516C\u5F00\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">    const opponentInfo = opponent &amp;&amp; await Players.getPlayerInfo(opponent) // \u83B7\u5F97\u5BF9\u624B\u7684\u516C\u5F00\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">    resumeData.room = {                              // \u62FC\u88C5\u6062\u590D\u623F\u95F4\u6240\u9700\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">      roomId: player.roomId,</span></span>
<span class="line"><span style="color:#A6ACCD;">      roomOwner: player.roomOwner,</span></span>
<span class="line"><span style="color:#A6ACCD;">      opponent: opponentInfo,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6062\u590D\u6E38\u620F</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (player.playing) {                                         // \u5982\u679C\u6709\u672A\u5B8C\u6210\u7684\u6E38\u620F</span></span>
<span class="line"><span style="color:#A6ACCD;">    const game = TicTacToe.getGame(player.roomId)               // \u83B7\u5F97\u8BE5\u6E38\u620F\u7684\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">    resumeData.game = game &amp;&amp; game.getInfoForPlayer(player._id) // \u6574\u7406\u4E3A\u53D1\u9001\u7ED9\u5C0F\u6E38\u620F\u7684\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  cb &amp;&amp; cb(&#39;&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    session: player.session, // \u5411\u5C0F\u6E38\u620F\u7AEF\u8FD4\u56DE\u81EA\u5B9A\u4E49\u767B\u9646\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">    resumeData,              // \u6062\u590D\u623F\u95F4\u3001\u6E38\u620F\u7528\u7684\u6570\u636E\uFF08\u82E5\u6CA1\u6709\u9700\u8981\u6062\u590D\u7684\u5185\u5BB9\uFF0C\u5219\u4E3A {} \uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="create-room\uFF08\u521B\u5EFA\u623F\u95F4\uFF09" tabindex="-1">create room\uFF08\u521B\u5EFA\u623F\u95F4\uFF09 <a class="header-anchor" href="#create-room\uFF08\u521B\u5EFA\u623F\u95F4\uFF09" aria-hidden="true">#</a></h3><p><a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u672C\u8EAB\u6709\u623F\u95F4\u7684\u6982\u5FF5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u591A\u4E2A socket \u90FD\u52A0\u5165\u540C\u4E00\u4E2A\u623F\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">socket1.join(&#39;room 1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">socket2.join(&#39;room 1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">socket3.join(&#39;room 1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u82E5\u670D\u52A1\u5668\u5411\u623F\u95F4 emit \u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">io.to(&#39;room 1&#39;).emit(&#39;hello&#39;, &#39;world&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// socket1 \u5C0F\u6E38\u620F\u7AEF\u4F1A\u6536\u5230\u8FD9\u4E00\u6761\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">socket.on(&#39;hello&#39;, function (msg) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(msg)   // &#39;world&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">// socket2\u3001socket3 \u4E5F\u4E00\u6837</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7279\u522B\u7684\uFF0C\u5982\u679C\u670D\u52A1\u5668\u7AEF\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u53D1\u9001\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">socket1.to(&#39;room 1&#39;).emit(&#39;hello&#39;, &#39;world&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5219\u623F\u95F4\u5185\u5176\u4ED6 socket \u4F1A\u6536\u5230\u6D88\u606F\uFF0Csocket1 \u672C\u8EAB\u4E0D\u4F1A\u6536\u5230</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BF9\u4E8E\u6211\u4EEC\u53EA\u6709\u4E24\u4E2A\u4EBA\u7684\u7B80\u5355\u623F\u95F4\uFF0C\u5DF2\u7ECF\u591F\u7528\u4E86\u3002\u4F46\u662F\u8FD8\u5B58\u5728\u4E00\u4E2A\u95EE\u9898\uFF1A<a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u6BCF\u6B21\u91CD\u8FDE\u90FD\u4F1A\u9000\u51FA\u623F\u95F4\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5728\u521B\u5EFA\u623F\u95F4\u540E\u5C06\u623F\u95F4 ID \u53E6\u5916\u5B58\u8D77\u6765\uFF0C\u4EE5\u4F9B <a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u91CD\u8FDE\u65F6\u6062\u590D\u623F\u95F4\u3002\u8FD9\u91CC\u6211\u4EEC\u968F\u673A\u4EA7\u751F\u623F\u95F4 ID \u5E76\u4FDD\u5B58\u5230\u6BCF\u4E2A\u7528\u6237\u81EA\u5DF1\u7684\u6570\u636E\u5E93\u6761\u76EE\u91CC\u3002</p><blockquote><p>\u6570\u636E\u5E93\u76F8\u5173\u7684\u64CD\u4F5C\u90FD\u5728 <code>players.js</code> \u4E2D\uFF0C\u4F7F\u7528 <code>nedb</code> \u5E93\u3002</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">socket.on(&#39;create room&#39;, async cb =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let player = await Players.createRoom(socket.playerId)  // \u521B\u5EFA\u968F\u673A\u623F\u95F4 ID \u5199\u5165\u6570\u636E\u5E93\uFF0C\u5F53\u524D\u73A9\u5BB6\u4E3A\u623F\u4E3B</span></span>
<span class="line"><span style="color:#A6ACCD;">  const join = promisify(socket.join).bind(socket)        // \u5C06\u56DE\u8C03\u5F62\u5F0F\u7684\u63A5\u53E3\u8F6C\u4E3A async await \u5F62\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  await join(player.roomId)                               // \u8C03\u7528 socket.join \u52A0\u5165 Socket.IO \u623F\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">  cb &amp;&amp; cb(player.roomId)                                 // \u5C06\u623F\u95F4 ID \u8FD4\u56DE\u5C0F\u6E38\u620F\uFF0C\u7528\u4E8E\u9080\u8BF7\u597D\u53CB\u52A0\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="join-room\uFF08\u52A0\u5165\u623F\u95F4\uFF09" tabindex="-1">join room\uFF08\u52A0\u5165\u623F\u95F4\uFF09 <a class="header-anchor" href="#join-room\uFF08\u52A0\u5165\u623F\u95F4\uFF09" aria-hidden="true">#</a></h3><p>\u52A0\u5165\u623F\u95F4\u548C\u521B\u5EFA\u623F\u95F4\u4E00\u6837\uFF0C\u4E5F\u9700\u8981\u5C06\u73A9\u5BB6\u7684\u623F\u95F4\u4FE1\u606F\u5199\u5165\u6570\u636E\u5E93\u3002\u800C\u4E14\u548C\u968F\u673A\u5339\u914D\u4E00\u6837\uFF0C\u4E5F\u9700\u8981\u5411\u4E24\u540D\u73A9\u5BB6\u5206\u522B\u53D1\u9001\u5BF9\u624B\u4FE1\u606F\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">socket.on(&#39;join room&#39;, async (roomId, cb) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  await joinRoom(socket, roomId)                              // \u5C06\u623F\u95F4\u4FE1\u606F\u5199\u5165\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">  const player = await Players.getPlayer(socket.playerId)     // \u83B7\u5F97\u73A9\u5BB6\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">  const opponent = await Players.getOpponent(socket.playerId) // \u83B7\u5F97\u5BF9\u624B\u7684\u73A9\u5BB6\u793A\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">  const opponentInfo = opponent &amp;&amp; await Players.getPlayerInfo(opponent) // \u83B7\u5F97\u5BF9\u624B\u7684\u516C\u5F00\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  cb &amp;&amp; cb(&#39;&#39;, { roomId: roomId })                            // \u544A\u77E5\u8C03\u7528\u65B9\u52A0\u5165\u623F\u95F4\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">  socket.emit(&#39;opponent joined&#39;, opponentInfo)                // \u5411\u53CC\u65B9\u53D1\u9001\u5BF9\u624B\u516C\u5F00\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  socket.to(roomId).emit(&#39;opponent joined&#39;, await Players.getPlayerInfo(player))</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="ready\uFF08\u51C6\u5907\uFF09" tabindex="-1">ready\uFF08\u51C6\u5907\uFF09 <a class="header-anchor" href="#ready\uFF08\u51C6\u5907\uFF09" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u7EA6\u5B9A\uFF0C\u5F53\u4E00\u4E2A\u623F\u95F4\u5185\u7684\u4E24\u540D\u73A9\u5BB6\u90FD\u53D1\u9001\u4E86\u51C6\u5907\u6D88\u606F\u4E4B\u540E\uFF0C\u6E38\u620F\u7ACB\u5373\u5F00\u59CB\u3002\u51C6\u5907\u60C5\u51B5\u540C\u5C5E\u623F\u95F4\u4FE1\u606F\uFF0C\u4E5F\u8981\u5199\u5165\u6570\u636E\u5E93\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">socket.on(&#39;ready&#39;, async (cb) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let player = await Players.getPlayer(socket.playerId)   // \u83B7\u5F97\u73A9\u5BB6\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">  player = await Players.roomReady(socket.playerId)       // \u5C06\u51C6\u5907\u60C5\u51B5\u5199\u5165\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">  const opponent = await Players.getOpponent(socket.playerId) // \u83B7\u5F97\u5BF9\u624B\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  socket.to(player.roomId).emit(&#39;opponent ready&#39;)         // \u5411\u5BF9\u624B\u53D1\u9001&quot;\u5BF9\u624B\u5DF2\u51C6\u5907&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (player.roomReady &amp;&amp; opponent &amp;&amp; opponent.roomReady) { // \u5982\u679C\u53CC\u65B9\u90FD\u51C6\u5907\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">    const game = TicTacToe.createGame(player.roomId, [ player._id, opponent._id ])</span></span>
<span class="line"><span style="color:#A6ACCD;">                                                          // \u521B\u5EFA\u6E38\u620F</span></span>
<span class="line"><span style="color:#A6ACCD;">    Players.gameStart(player._id)                         // \u8BBE\u7F6E\u73A9\u5BB6\u6E38\u620F\u72B6\u6001\u4E3A\u5F00\u59CB</span></span>
<span class="line"><span style="color:#A6ACCD;">    Players.gameStart(opponent._id)                       // \u8BBE\u7F6E\u5BF9\u624B\u6E38\u620F\u72B6\u6001\u4E3A\u5F00\u59CB</span></span>
<span class="line"><span style="color:#A6ACCD;">    game.start()                                          // \u5F00\u59CB\u6E38\u620F\uFF0C\u5F00\u59CB\u8BA1\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="place-piece\uFF08\u843D\u5B50\uFF09" tabindex="-1">place piece\uFF08\u843D\u5B50\uFF09 <a class="header-anchor" href="#place-piece\uFF08\u843D\u5B50\uFF09" aria-hidden="true">#</a></h3><p>\u5F53\u5C0F\u6E38\u620F\u7AEF\u6536\u5230\u56DE\u5408\u5F00\u59CB\u7684\u65F6\u5019\uFF0C\u5E94\u8BE5\u53D1\u9001 <code>place piece</code> \u6D88\u606F\u843D\u5B50\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">socket.on(&#39;place piece&#39;, async (col, row) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let player = await Players.getPlayer(socket.playerId) // \u83B7\u5F97\u73A9\u5BB6\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">  const game = TicTacToe.getGame(player.roomId)         // \u83B7\u5F97\u6240\u5728\u6E38\u620F</span></span>
<span class="line"><span style="color:#A6ACCD;">  game.placePiece(col, row)                             // \u5728\u6307\u5B9A\u4F4D\u7F6E\u843D\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="leave-room\uFF08\u79BB\u5F00\u623F\u95F4\uFF09" tabindex="-1">leave room\uFF08\u79BB\u5F00\u623F\u95F4\uFF09 <a class="header-anchor" href="#leave-room\uFF08\u79BB\u5F00\u623F\u95F4\uFF09" aria-hidden="true">#</a></h3><p>\u5E38\u89C1\u7684\u9000\u51FA\u623F\u95F4\u9700\u8981\u5904\u7406\u9000\u51FA\u3001\u89E3\u6563\uFF08\u623F\u4E3B\u9000\u51FA\uFF09\u3001\u9003\u8DD1\u7B49\u8BB8\u591A\u60C5\u51B5\u3002\u6211\u4EEC\u5236\u5B9A\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u7248\u672C\uFF0C\u4E0D\u5141\u8BB8\u9003\u8DD1\u7684\u60C5\u51B5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.on(&#39;leave room&#39;, async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u62FF\u5230\u73A9\u5BB6\u548C\u5BF9\u624B\u7684\u6570\u636E\u4E0E\u5BF9\u5E94\u7684 Socket \u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">  const player = await Players.getPlayer(socket.playerId)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const opponent = await Players.getOpponent(socket.playerId)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const sockets = await getSocketsInRoom(player.roomId)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const socketPlayer = sockets.find(socket =&gt; socket.playerId === player._id)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const socketOpponent = opponent &amp;&amp; sockets.find(socket =&gt; socket.playerId === opponent._id)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6E38\u620F\u4E2D\u5219\u9500\u6BC1\u6E38\u620F</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (player.roomId &amp;&amp; !player.playing) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (player.roomOwner) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u623F\u4E3B\u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">      socketPlayer.leave(player.roomId)</span></span>
<span class="line"><span style="color:#A6ACCD;">      Players.leaveRoom(player._id)</span></span>
<span class="line"><span style="color:#A6ACCD;">      opponent &amp;&amp; Players.leaveRoom(opponent._id)</span></span>
<span class="line"><span style="color:#A6ACCD;">      socketOpponent &amp;&amp; socketOpponent.emit(&#39;room dismissed&#39;).leave(player.roomId)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u53C2\u4E0E\u8005\u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">      socket.to(player.roomId).emit(&#39;opponent leaved&#39;).leave(player.roomId)  </span></span>
<span class="line"><span style="color:#A6ACCD;">      Players.leaveRoom(player._id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    cb &amp;&amp; cb()</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6E38\u620F\u751F\u547D\u5468\u671F" tabindex="-1">\u6E38\u620F\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u6E38\u620F\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h3><p>\u524D\u9762\u4ECB\u7ECD\u7684\u6D88\u606F\u5168\u90FD\u662F\u670D\u52A1\u5668\u76D1\u542C\uFF0C\u5C0F\u6E38\u620F\u7AEF\u53D1\u9001\uFF0C\u90A3\u670D\u52A1\u5668\u600E\u4E48\u80FD\u5728\u5408\u9002\u7684\u65F6\u673A\u53D1\u9001\u6D88\u606F\u7ED9\u5C0F\u6E38\u620F\u7AEF\u5462\uFF08\u6BD4\u5982\u67D0\u4E2A\u73A9\u5BB6\u8D85\u65F6\u8F93\u4E86\uFF0C\u8FD9\u4E2A\u4E8B\u4EF6\u4E0D\u662F\u7531\u7528\u6237\u89E6\u53D1\u7684\uFF09\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u7ED9\u6E38\u620F\u52A0\u5165\u4E86\u4E00\u7EC4\u751F\u547D\u5468\u671F\u56DE\u8C03\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u6E38\u620F\u5F00\u59CB\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">TicTacToe.onGameStart = async game =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u544A\u77E5\u53CC\u65B9\u6E38\u620F\u5F00\u59CB</span></span>
<span class="line"><span style="color:#A6ACCD;">  //...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6E38\u620F\u8FDB\u5165\u4E0B\u4E00\u8F6E\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">TicTacToe.onNextRound = async (game, lastAction) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u544A\u77E5\u8F6E\u5230\u54EA\u4E2A\u73A9\u5BB6\u843D\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">  //...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6E38\u620F\u7ED3\u675F\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">TicTacToe.onGameOver = async (game, winner, lastAction) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u53D1\u9001\u80DC\u8D1F\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  //...</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E0A\u62A5\u6218\u7EE9\uFF08\u540E\u6587\u201C\u5FAE\u4FE1\u63A5\u53E3\u201D\u8BB2\u89E3\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u6BCF\u4E2A\u6E38\u620F\u5B9E\u4F8B\u4E2D\uFF0C\u6709\u4E00\u4E2A <code>update</code> \u65B9\u6CD5\uFF0C\u7528\u4E8E\u66F4\u65B0\u672C\u6E38\u620F\u7684\u5012\u8BA1\u65F6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">update (delta) {               // delta \u662F\u8DDD\u79BB\u4E0A\u4E00\u6B21\u8C03\u7528\u8FC7\u53BB\u7684\u6BEB\u79D2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!this.playing) return    // \u672C\u6E38\u620F\u6CA1\u5F00\u59CB\u7684\u8BDD\u4E0D\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.countdowns[ this.currentPlayer ] -= delta    // \u4ECE\u5F53\u524D\u73A9\u5BB6\u7684\u5012\u8BA1\u65F6\u4E2D\u6263\u9664\u8FC7\u53BB\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.countdowns[ this.currentPlayer ] &lt;= 0) { // \u8D85\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">    this._gameover(1 - this.currentPlayer)          // \u5BF9\u65B9\u83B7\u80DC\uFF08\u4F1A\u89E6\u53D1 TicTacToe.onGameOver \u4E8B\u4EF6\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u518D\u4F7F\u7528\u4E00\u4E2A <code>setInterval</code> \u5B9A\u65F6\u66F4\u65B0\u8C03\u7528\u6240\u6709\u6E38\u620F\u7684 <code>update</code> \u65B9\u6CD5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u4F7F\u7528\u4E00\u4E2A\u5B9A\u65F6\u5668\u66F4\u65B0\u6240\u6709\u6E38\u620F\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">const gameMap = new Map()      // \u521B\u5EFA\u6E38\u620F\u5B9E\u4F8B\u65F6\u4F1A\u5C06\u65B0\u6E38\u620F\u52A0\u5165 gameMap</span></span>
<span class="line"><span style="color:#A6ACCD;">let lastTimestamp = Date.now() // \u5B58\u50A8\u4E0A\u6B21\u8C03\u7528\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const now = Date.now()                      // \u8BA1\u7B97 delta</span></span>
<span class="line"><span style="color:#A6ACCD;">  const delta = now - lastTimestamp</span></span>
<span class="line"><span style="color:#A6ACCD;">  lastTimestamp = now</span></span>
<span class="line"><span style="color:#A6ACCD;">  gameMap.forEach(game =&gt; game.update(delta)) // \u4F7F\u7528 delta \u66F4\u65B0\u6240\u6709\u6E38\u620F\u7684\u5012\u8BA1\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 200)                                       // \u4E0D\u65AD\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u4E00\u6765\uFF0C\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u5728\u73A9\u5BB6\u8D85\u65F6\u7684\u65F6\u5019\u4E3B\u52A8\u7ED3\u675F\u6E38\u620F\uFF0C\u5E76\u53D1\u9001\u6D88\u606F\u7ED9\u5BF9\u6218\u53CC\u65B9\u4E86\u3002\u540C\u65F6\uFF0C\u6E38\u620F\u751F\u547D\u5468\u671F\u4E8B\u4EF6\u4E5F\u65B9\u4FBF\u4E86\u6211\u4EEC\u7EC4\u7EC7\u4E0E\u6E38\u620F\u903B\u8F91\u76F8\u5173\u7684\u4EE3\u7801\u3002</p><h2 id="_3-\u5FAE\u4FE1\u63A5\u53E3\u4F7F\u7528" tabindex="-1">3. \u5FAE\u4FE1\u63A5\u53E3\u4F7F\u7528 <a class="header-anchor" href="#_3-\u5FAE\u4FE1\u63A5\u53E3\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u8981\u60F3\u5145\u5206\u5229\u7528\u5C0F\u6E38\u620F\u7684\u751F\u6001\uFF0C\u6BD4\u5982\u597D\u53CB\u6392\u884C\u699C\u3001\u7FA4\u6392\u884C\u699C\u3001\u6E38\u620F\u5708\u7B49\u529F\u80FD\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u7528\u5230\u5FAE\u4FE1\u63D0\u4F9B\u7684\u5404\u79CD API \u3002\u6211\u4EEC\u5C06\u670D\u52A1\u5668\u7AEF\u7528\u5230\u7684\u6240\u6709 API \u90FD\u653E\u5728\u4E86 <code>weapi.js</code> \u4E2D\u3002</p><h3 id="code2accesstoken" tabindex="-1">code2accessToken <a class="header-anchor" href="#code2accesstoken" aria-hidden="true">#</a></h3><p>\u670D\u52A1\u5668\u7AEF\u4E3A\u4E86\u8BC6\u522B\u7528\u6237\u8EAB\u4EFD\uFF0C\u9700\u8981\u5F97\u5230\u7528\u6237\u7684 <code>openid</code> \uFF0C\u5B83\u662F\u5FAE\u4FE1\u7528\u6237\u5728\u672C\u5C0F\u6E38\u620F\u5185\u552F\u4E00\u7684\u8EAB\u4EFD\u6807\u8BC6\u3002\u6211\u4EEC\u53EF\u4EE5\u7528 <a href="https://developers.weixin.qq.com/minigame/dev/document/open-api/login/code2accessToken.html" target="_blank" rel="noreferrer">code2accessToken</a> \u63A5\u53E3\u6765\u5411\u5FAE\u4FE1\u83B7\u53D6\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * wx.login \u767B\u9646\u6D41\u7A0B\uFF0C\u4F7F\u7528 code \u6362\u53D6 session_key \u4E0E openid</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param code</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return {Promise&lt;void&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">async function code2session (code) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const session = await request({</span></span>
<span class="line"><span style="color:#A6ACCD;">    uri: \`https://api.weixin.qq.com/sns/jscode2session?appid=\${config.appid}&amp;secret=\${config.secret}&amp;js_code=\${code}&amp;grant_type=authorization_code\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    json: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  return session</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BE5\u63A5\u53E3\u4E0E\u5C0F\u7A0B\u5E8F\u7684\u767B\u5F55\u5176\u5B9E\u57FA\u672C\u4E00\u81F4\uFF0C\u800C\u5C0F\u7A0B\u5E8F\u7684\u6587\u6863\u4E2D\u5BF9\u6B64\u6709<a href="https://developers.weixin.qq.com/miniprogram/dev/api/api-login.html" target="_blank" rel="noreferrer">\u66F4\u52A0\u8BE6\u7EC6\u7684\u89E3\u91CA</a>\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/12/165ccfdabfd4a5b1~tplv-t2oaga2asx-image.image" alt="wx.login \u6D41\u7A0B\u56FE"></p><p>\u4E0A\u56FE\u662F\u5FAE\u4FE1\u6587\u6863\u4E2D\u7684\u65F6\u5E8F\u56FE\uFF0C\u80FD\u591F\u5F88\u6E05\u6670\u7684\u8BF4\u660E\u767B\u5F55\u6D41\u7A0B:</p><ol><li>\u5C0F\u7A0B\u5E8F\u7AEF\u8C03\u7528 <code>wx.login()</code> \u4ECE\u5FAE\u4FE1\u5904\u83B7\u5F97\u4E34\u65F6 code</li><li>\u5C06 code \u901A\u8FC7\u5404\u79CD\u65B9\u5F0F\uFF08\u5E76\u975E\u5FC5\u987B <a href="https://developers.weixin.qq.com/minigame/dev/api/network/request/wx.request.html" target="_blank" rel="noreferrer"><code>wx.request()</code></a> \uFF09\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u7AEF</li><li>\u670D\u52A1\u5668\u7AEF\u8C03\u7528 <code>code2accessToken</code> \u63A5\u53E3\u4F7F\u7528 code \u6362\u53D6\u7528\u6237\u7684 <code>openid</code> \u4E0E <code>session_key</code></li><li><code>openid</code> \u4E0E <code>session_key</code> \u5C5E\u4E8E\u654F\u611F\u6570\u636E\uFF0C\u4E0D\u5E94\u900F\u9732\u7ED9\u5C0F\u6E38\u620F\u7AEF\uFF0C\u56E0\u6B64\u670D\u52A1\u5668\u751F\u6210\u81EA\u5B9A\u4E49\u767B\u5F55\u6001\uFF0C\u5E76\u8FD4\u56DE\u7ED9\u5C0F\u6E38\u620F\u7AEF</li><li>\u5C0F\u6E38\u620F\u7AEF\u4FDD\u5B58\u81EA\u5B9A\u4E49\u767B\u5F55\u6001\u3002</li></ol><p>\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u767B\u5F55\u6001\u53EA\u662F\u4E00\u4E2A\u5168\u5C40\u552F\u4E00\u7684\u968F\u673A id \uFF0C\u4E0D\u81EA\u5B9A\u4E49\u5931\u6548\u65F6\u95F4\uFF0C\u800C\u662F\u8DDF\u968F\u5FAE\u4FE1\u767B\u5F55\u6001\u3002\u56E0\u6B64\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u8C03\u7528 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/signature.html#wxchecksessionobject" target="_blank" rel="noreferrer"><code>wx.checkSession</code></a> \u68C0\u67E5\u5FAE\u4FE1\u767B\u5F55\u6001\u4E0E\u81EA\u5B9A\u4E49\u767B\u5F55\u6001\u662F\u5426\u8FC7\u671F\uFF0C\u5982\u679C\u8FC7\u671F\u5219\u91CD\u65B0\u6267\u884C <code>wx.login</code> \u8FD9\u4E00\u5957\u6D41\u7A0B\uFF0C\u91CD\u65B0\u751F\u6210\u81EA\u5B9A\u4E49\u767B\u5F55\u6001\u3002</p><blockquote><p><code>wx.checkSession</code> \u53EA\u9700\u8981\u5728\u6253\u5F00\u5C0F\u6E38\u620F\u65F6\u68C0\u67E5\u4E00\u6B21\u5373\u53EF\uFF0C\u53EA\u8981\u4E00\u5F00\u59CB\u767B\u5F55\u6001\u6709\u6548\uFF0C\u5219\u5728\u672C\u6B21\u751F\u547D\u5468\u671F\u5185\u5C06\u4E00\u76F4\u4FDD\u6301\u6709\u6548\u3002</p></blockquote><h3 id="setuserstorage-accesstoken" tabindex="-1">setUserStorage, accessToken <a class="header-anchor" href="#setuserstorage-accesstoken" aria-hidden="true">#</a></h3><p>\u6BCF\u6B21\u6E38\u620F\u7ED3\u675F\u540E\uFF0C\u670D\u52A1\u5668\u7AEF\u9700\u8981\u5224\u65AD\u80DC\u8D1F\u5E76\u4E0A\u62A5\u6210\u7EE9\uFF0C\u9700\u8981\u4F7F\u7528 <a href="https://developers.weixin.qq.com/minigame/dev/document/open-api/data/setUserStorage.html" target="_blank" rel="noreferrer">setUserStorage</a> \u63A5\u53E3\u3002\u800C\u8C03\u7528 <code>setUserStorage</code> \u9700\u8981\u7528\u5230\u4E0A\u6587\u7684 <code>session_key</code> \u4E0E <a href="https://developers.weixin.qq.com/miniprogram/dev/api/token.html#%E8%8E%B7%E5%8F%96-access_token" target="_blank" rel="noreferrer"><code>access_token</code></a> \u3002</p><p><code>access_token</code> \u662F\u670D\u52A1\u5668\u7AEF\u8C03\u7528\u5FAE\u4FE1 API \u7684\u51ED\u8BC1\uFF0C\u83B7\u53D6\u5B83\u7684\u63A5\u53E3\u6709\u6BCF\u65E5\u8C03\u7528\u6B21\u6570\u9650\u5236\uFF0C\u4E14\u6BCF\u6B21\u8C03\u7528\u90FD\u4F1A\u4F7F\u4E0A\u6B21\u83B7\u5F97\u7684 token \u5931\u6548\u3002\u56E0\u6B64\u9700\u8981\u5728\u4E00\u4E2A\u4F4D\u7F6E\u7EF4\u62A4\u5B83\uFF0C\u5E76\u5B9A\u671F\u66F4\u65B0\uFF0C\u907F\u514D\u65E0\u8282\u5236\u7684\u8C03\u7528\u3002\u76EE\u524D <code>access_token</code> \u7684\u8FC7\u671F\u65F6\u95F4\u662F 7200 \u79D2\u4E5F\u5373\u4E24\u5C0F\u65F6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let tokenRefreshTimeout</span></span>
<span class="line"><span style="color:#A6ACCD;">let token</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u8C03\u7528\u4EE5\u4E3B\u52A8\u5237\u65B0 access token</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">async function accessToken () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    clearTimeout(tokenRefreshTimeout)</span></span>
<span class="line"><span style="color:#A6ACCD;">    const res = await request({</span></span>
<span class="line"><span style="color:#A6ACCD;">      uri: \`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&amp;appid=\${config.appid}&amp;secret=\${config.secret}\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">      json: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (res.errcode) throw res</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u63D0\u524D 200 \u79D2\u5B9A\u65F6\u5237\u65B0 access_token</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 200 \u79D2\u5E76\u6CA1\u6709\u7279\u6B8A\u610F\u4E49\uFF0C\u53EF\u4EE5\u914C\u60C5\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">    tokenRefreshTimeout = setTimeout(accessToken, (res.expires_in - 200) * 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    token = res.access_token</span></span>
<span class="line"><span style="color:#A6ACCD;">  } catch (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.error(&#39;access token \u83B7\u53D6\u5931\u8D25\uFF1A &#39;, e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    tokenRefreshTimeout = setTimeout(accessToken, 60 * 1000)    // 1\u5206\u949F\u540E\u91CD\u8BD5</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">accessToken()   // \u521D\u59CB\u5316\u65F6\u8BF7\u6C42\u4E00\u6B21\uFF0C\u5176\u4ED6\u4F4D\u7F6E\u4E5F\u53EF\u4EE5\u4E3B\u52A8\u8C03\u7528\u4EE5\u7ACB\u5373\u5237\u65B0 token</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9996\u6B21\u8C03\u7528 <code>accessToken()</code> \u540E\uFF0C<code>setTimeout</code> \u4F1A\u4FDD\u6301\u4E00\u4E2A\u9891\u7387\u7EE7\u7EED\u5237\u65B0 <code>access_token</code> \u3002\u7A0B\u5E8F\u7684\u5176\u4ED6\u90E8\u5206\u4E5F\u53EF\u4EE5\u4E3B\u52A8\u8C03\u7528 <code>accessToken()</code> \u4EE5\u4F7F\u4E0B\u4E00\u6B21\u5237\u65B0\u63D0\u524D\u8FDB\u884C\u3002</p><p><code>setUserStorage</code> \u63A5\u53E3\u8981\u6C42\u5BF9\u4E0A\u62A5\u7684\u6570\u636E\u8FDB\u884C\u7B7E\u540D\u624D\u80FD\u8C03\u7528\uFF0C\u62FF\u5230 <code>access_token</code> \u540E\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u51C6\u5907 <code>hmac_sha256</code> \u7B7E\u540D\u7B97\u6CD5\uFF0C node.js \u5185\u7F6E\u7684 <code>crypto</code> \u5E93\u63D0\u4F9B\u4E86\u8FD9\u90E8\u5206\u529F\u80FD\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const crypto = require(&#39;crypto&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const hmac_sha256 = (sessionKey, data) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return crypto</span></span>
<span class="line"><span style="color:#A6ACCD;">    .createHmac(&#39;sha256&#39;, sessionKey)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .update(data || &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .digest(&#39;hex&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>setUserStorage</code> \u9700\u8981\u4F20\u5165 <code>kv_list</code> \u53C2\u6570\u6307\u5B9A\u4E0A\u4F20\u6570\u636E\uFF0C\u6587\u6863\u5BF9\u8FD9\u4E2A\u53C2\u6570\u7684\u7ED3\u6784\u6CA1\u6709\u63CF\u8FF0\u6E05\u695A\uFF0C\u4F46\u5728\u793A\u4F8B\u4EE3\u7801\u4E2D\u6709\u6B63\u786E\u7684\u5F62\u5F0F\u53EF\u4EE5\u53C2\u8003\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">curl - d &#39;{ &quot;kv_list&quot;:[{&quot;key&quot;:&quot;score&quot;,&quot;value&quot;:&quot;100&quot;},{&quot;key&quot;:&quot;gold&quot;,&quot;value&quot;:&quot;3000&quot;}] }&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;https://api.weixin.qq.com/wxa/set_user_storage?access_token=ACCESS_TOKEN&amp;signature=SIGNATURE&amp;openid=OPENID&amp;sig_method=SIG_METHOD&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F62\u5F0F\u6709\u4E9B\u7E41\u7410\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7F16\u5199\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\u6765\u5E2E\u52A9\u8F6C\u6362\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/*</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    key1: &#39;value1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    key2: &#39;value2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  \u8F6C\u6362\u4E3A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    kv_list: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        key: &#39;key1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: &#39;value1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        key: &#39;key2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: &#39;value2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const object2KVDataList = (o) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let result = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  Object.keys(o).forEach( key =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    result.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">      key: key,</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: JSON.stringify(o[key])</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    kv_list: result</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81F3\u6B64\u6211\u4EEC\u5C31\u62E5\u6709\u4E86\u8C03\u7528 <code>setUserStorage</code> \u63A5\u53E3\u7684\u6240\u6709\u6761\u4EF6\uFF0C\u8C03\u7528\u672C\u8EAB\u5219\u662F\u4E00\u6B21\u7B80\u5355\u7684 http \u8BF7\u6C42\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u4E0A\u62A5\u7528\u6237\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param player</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param kv</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return {Promise&lt;void&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">async function setUserStorage (player, kv) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const kvList = object2KVDataList(kv)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const postData = JSON.stringify(kvList)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const res = await request({</span></span>
<span class="line"><span style="color:#A6ACCD;">    uri: \`https://api.weixin.qq.com/wxa/set_user_storage?access_token=\${token}&amp;signature=\${hmac_sha256(player.sessionKey, postData)}&amp;openid=\${player.openId}&amp;sig_method=hmac_sha256\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    method: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    body: kvList,</span></span>
<span class="line"><span style="color:#A6ACCD;">    json: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  return res</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_4-\u5C0F\u7ED3" tabindex="-1">4. \u5C0F\u7ED3 <a class="header-anchor" href="#_4-\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u8282\u8BB2\u89E3\u4E86\u4E95\u5B57\u5927\u4F5C\u6218\u670D\u52A1\u5668\u7AEF\u7684\u90E8\u5206\u5185\u5BB9\uFF0C\u5305\u62EC <a href="http://Socket.IO" target="_blank" rel="noreferrer">Socket.IO</a> \u7684\u57FA\u672C\u7528\u6CD5\u3001\u670D\u52A1\u5668\u4E0E\u5C0F\u6E38\u620F\u7AEF\u7684\u534F\u8BAE\u4EE5\u53CA\u4E00\u4E9B\u5FAE\u4FE1\u63A5\u53E3\u7684\u4F7F\u7528\u3002</p><p>\u901A\u8FC7\u9605\u8BFB\u672C\u8282\uFF0C\u8BFB\u8005\u5E94\u8BE5\u80FD\u591F\u5C06\u670D\u52A1\u5668\u7AEF\u9879\u76EE\u5728\u817E\u8BAF\u4E91\u670D\u52A1\u5668\u4E0A\u8FD0\u884C\u8D77\u6765\uFF0C\u5E76\u4E14\u5BF9\u5404\u4E2A\u7EC4\u6210\u90E8\u5206\u6709\u4E86\u4E00\u4E9B\u521D\u6B65\u7684\u4E86\u89E3\uFF0C\u4F46\u8981\u719F\u6089\u670D\u52A1\u5668\u5F00\u53D1\u4ECD\u9700\u66F4\u52A0\u6DF1\u5165\u7684\u5B66\u4E60\u3002\u6709\u5174\u8DA3\u7684\u8BFB\u8005\u53EF\u4EE5\u601D\u8003\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ol><li>\u4E3A\u4EC0\u4E48 <a href="https://www.nginx.com/" target="_blank" rel="noreferrer">Nginx</a>\u3001<a href="https://httpd.apache.org/" target="_blank" rel="noreferrer">Apache</a> \u7B49\u670D\u52A1\u5668\u6BD4 Node.js \u81EA\u5E26 https \u5E93\u66F4\u9002\u5408\u751F\u4EA7\u73AF\u5883\uFF1F</li><li>\u4F7F\u7528 WebSocket \u76F8\u5BF9 HTTPS API \u6709\u4EC0\u4E48\u597D\u5904\uFF0C\u53C8\u6709\u4EC0\u4E48\u4E0D\u8DB3\uFF1F</li><li>\u54EA\u4E9B\u56E0\u7D20\u53EF\u80FD\u9650\u5236\u4E86\u6211\u4EEC\u7684\u540C\u65F6\u5728\u7EBF\u7528\u6237\u6570\u91CF\uFF1F\u8D85\u51FA\u9884\u671F\u7528\u6237\u91CF\u4E86\u600E\u6837\u63D0\u5347\uFF1F</li></ol><p>\u5BF9\u4E8E\u4E2A\u4EBA\u5F00\u53D1\u8005\uFF0C\u540C\u65F6\u7CBE\u901A\u9879\u76EE\u7684\u6BCF\u4E00\u4E2A\u90E8\u5206\u901A\u5E38\u4E0D\u592A\u73B0\u5B9E\u3002\u56E0\u6B64\u8FD8\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u5404\u7C7B\u9488\u5BF9\u5C0F\u6E38\u620F\u7684\u670D\u52A1\u7B80\u5316\u670D\u52A1\u5668\u5F00\u53D1\u3002\u5FAE\u4FE1\u56E2\u961F\u4E0E\u817E\u8BAF\u4E91\u5171\u540C\u7814\u53D1\u7684<a href="https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html" target="_blank" rel="noreferrer">\u5C0F\u7A0B\u5E8F\u4E91</a>\u670D\u52A1\uFF0C\u53EF\u4EE5\u8BA9\u5F00\u53D1\u8005\u4F7F\u7528\u4E91\u5F00\u53D1\u5F00\u53D1\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001\u5C0F\u6E38\u620F\uFF0C\u65E0\u9700\u642D\u5EFA\u670D\u52A1\u5668\uFF0C\u5373\u53EF\u4F7F\u7528\u4E91\u7AEF\u80FD\u529B\u3002\u76EE\u524D\u6B63\u5728\u516C\u6D4B\u9636\u6BB5\uFF0C\u611F\u5174\u8DA3\u7684\u8BFB\u8005\u53EF\u4EE5\u4F53\u9A8C\u5E76\u5173\u6CE8\u540E\u7EED\u52A8\u5411\u3002</p>`,83),o=[p];function c(t,r,i,A,C,y){return a(),n("div",null,o)}const g=s(l,[["render",c]]);export{D as __pageData,g as default};
