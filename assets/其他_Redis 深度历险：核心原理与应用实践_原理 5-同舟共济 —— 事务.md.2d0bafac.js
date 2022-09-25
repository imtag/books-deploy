import{_ as s,c as n,o as a,d as l}from"./app.e5528619.js";const D=JSON.parse('{"title":"\u539F\u7406 5-\u540C\u821F\u5171\u6D4E \u2014\u2014 \u4E8B\u52A1","description":"","frontmatter":{},"headers":[{"level":2,"title":"Redis \u4E8B\u52A1\u7684\u57FA\u672C\u4F7F\u7528","slug":"redis-\u4E8B\u52A1\u7684\u57FA\u672C\u4F7F\u7528","link":"#redis-\u4E8B\u52A1\u7684\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u539F\u5B50\u6027","slug":"\u539F\u5B50\u6027","link":"#\u539F\u5B50\u6027","children":[]},{"level":2,"title":"discard(\u4E22\u5F03)","slug":"discard-\u4E22\u5F03","link":"#discard-\u4E22\u5F03","children":[]},{"level":2,"title":"\u4F18\u5316","slug":"\u4F18\u5316","link":"#\u4F18\u5316","children":[]},{"level":2,"title":"Watch","slug":"watch","link":"#watch","children":[]},{"level":2,"title":"\u601D\u8003\u9898","slug":"\u601D\u8003\u9898","link":"#\u601D\u8003\u9898","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u539F\u7406 5-\u540C\u821F\u5171\u6D4E \u2014\u2014 \u4E8B\u52A1.md"}'),p={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u539F\u7406 5-\u540C\u821F\u5171\u6D4E \u2014\u2014 \u4E8B\u52A1.md"},e=l(`<h1 id="\u539F\u7406-5-\u540C\u821F\u5171\u6D4E-\u2014\u2014-\u4E8B\u52A1" tabindex="-1">\u539F\u7406 5-\u540C\u821F\u5171\u6D4E \u2014\u2014 \u4E8B\u52A1 <a class="header-anchor" href="#\u539F\u7406-5-\u540C\u821F\u5171\u6D4E-\u2014\u2014-\u4E8B\u52A1" aria-hidden="true">#</a></h1><hr><h1 id="\u539F\u7406-5\uFF1A\u540C\u821F\u5171\u6D4E-\u2014\u2014-\u4E8B\u52A1" tabindex="-1">\u539F\u7406 5\uFF1A\u540C\u821F\u5171\u6D4E \u2014\u2014 \u4E8B\u52A1 <a class="header-anchor" href="#\u539F\u7406-5\uFF1A\u540C\u821F\u5171\u6D4E-\u2014\u2014-\u4E8B\u52A1" aria-hidden="true">#</a></h1><p>\u4E3A\u4E86\u786E\u4FDD\u8FDE\u7EED\u591A\u4E2A\u64CD\u4F5C\u7684\u539F\u5B50\u6027\uFF0C\u4E00\u4E2A\u6210\u719F\u7684\u6570\u636E\u5E93\u901A\u5E38\u90FD\u4F1A\u6709\u4E8B\u52A1\u652F\u6301\uFF0CRedis \u4E5F\u4E0D\u4F8B\u5916\u3002Redis \u7684\u4E8B\u52A1\u4F7F\u7528\u975E\u5E38\u7B80\u5355\uFF0C\u4E0D\u540C\u4E8E\u5173\u7CFB\u6570\u636E\u5E93\uFF0C\u6211\u4EEC\u65E0\u987B\u7406\u89E3\u90A3\u4E48\u591A\u590D\u6742\u7684\u4E8B\u52A1\u6A21\u578B\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002\u4E0D\u8FC7\u4E5F\u6B63\u662F\u56E0\u4E3A\u8FD9\u79CD\u7B80\u5355\u6027\uFF0C\u5B83\u7684\u4E8B\u52A1\u6A21\u578B\u5F88\u4E0D\u4E25\u683C\uFF0C\u8FD9\u8981\u6C42\u6211\u4EEC\u4E0D\u80FD\u50CF\u4F7F\u7528\u5173\u7CFB\u6570\u636E\u5E93\u7684\u4E8B\u52A1\u4E00\u6837\u6765\u4F7F\u7528 Redis\u3002</p><h2 id="redis-\u4E8B\u52A1\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1">Redis \u4E8B\u52A1\u7684\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#redis-\u4E8B\u52A1\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u6BCF\u4E2A\u4E8B\u52A1\u7684\u64CD\u4F5C\u90FD\u6709 begin\u3001commit \u548C rollback\uFF0Cbegin \u6307\u793A\u4E8B\u52A1\u7684\u5F00\u59CB\uFF0Ccommit \u6307\u793A\u4E8B\u52A1\u7684\u63D0\u4EA4\uFF0Crollback \u6307\u793A\u4E8B\u52A1\u7684\u56DE\u6EDA\u3002\u5B83\u5927\u81F4\u7684\u5F62\u5F0F\u5982\u4E0B\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">begin();</span></span>
<span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    command1();</span></span>
<span class="line"><span style="color:#A6ACCD;">    command2();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ....</span></span>
<span class="line"><span style="color:#A6ACCD;">    commit();</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch(Exception e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    rollback();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Redis \u5728\u5F62\u5F0F\u4E0A\u770B\u8D77\u6765\u4E5F\u5DEE\u4E0D\u591A\uFF0C\u5206\u522B\u662F multi/exec/discard\u3002multi \u6307\u793A\u4E8B\u52A1\u7684\u5F00\u59CB\uFF0Cexec \u6307\u793A\u4E8B\u52A1\u7684\u6267\u884C\uFF0Cdiscard \u6307\u793A\u4E8B\u52A1\u7684\u4E22\u5F03\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; multi</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; incr books</span></span>
<span class="line"><span style="color:#A6ACCD;">QUEUED</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; incr books</span></span>
<span class="line"><span style="color:#A6ACCD;">QUEUED</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; exec</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u7684\u6307\u4EE4\u6F14\u793A\u4E86\u4E00\u4E2A\u5B8C\u6574\u7684\u4E8B\u52A1\u8FC7\u7A0B\uFF0C\u6240\u6709\u7684\u6307\u4EE4\u5728 exec \u4E4B\u524D\u4E0D\u6267\u884C\uFF0C\u800C\u662F\u7F13\u5B58\u5728\u670D\u52A1\u5668\u7684\u4E00\u4E2A\u4E8B\u52A1\u961F\u5217\u4E2D\uFF0C\u670D\u52A1\u5668\u4E00\u65E6\u6536\u5230 exec \u6307\u4EE4\uFF0C\u624D\u5F00\u6267\u884C\u6574\u4E2A\u4E8B\u52A1\u961F\u5217\uFF0C\u6267\u884C\u5B8C\u6BD5\u540E\u4E00\u6B21\u6027\u8FD4\u56DE\u6240\u6709\u6307\u4EE4\u7684\u8FD0\u884C\u7ED3\u679C\u3002\u56E0\u4E3A Redis \u7684\u5355\u7EBF\u7A0B\u7279\u6027\uFF0C\u5B83\u4E0D\u7528\u62C5\u5FC3\u81EA\u5DF1\u5728\u6267\u884C\u961F\u5217\u7684\u65F6\u5019\u88AB\u5176\u5B83\u6307\u4EE4\u6253\u6405\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u4ED6\u4EEC\u80FD\u5F97\u5230\u7684\u300C\u539F\u5B50\u6027\u300D\u6267\u884C\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/10/1648203d1d8ec347~tplv-t2oaga2asx-image.image" alt=""></p><p>\u4E0A\u56FE\u663E\u793A\u4E86\u4EE5\u4E0A\u4E8B\u52A1\u8FC7\u7A0B\u5B8C\u6574\u7684\u4EA4\u4E92\u6548\u679C\u3002QUEUED \u662F\u4E00\u4E2A\u7B80\u5355\u5B57\u7B26\u4E32\uFF0C\u540C OK \u662F\u4E00\u4E2A\u5F62\u5F0F\uFF0C\u5B83\u8868\u793A\u6307\u4EE4\u5DF2\u7ECF\u88AB\u670D\u52A1\u5668\u7F13\u5B58\u5230\u961F\u5217\u91CC\u4E86\u3002</p><h2 id="\u539F\u5B50\u6027" tabindex="-1">\u539F\u5B50\u6027 <a class="header-anchor" href="#\u539F\u5B50\u6027" aria-hidden="true">#</a></h2><p>\u4E8B\u52A1\u7684\u539F\u5B50\u6027\u662F\u6307\u8981\u4E48\u4E8B\u52A1\u5168\u90E8\u6210\u529F\uFF0C\u8981\u4E48\u5168\u90E8\u5931\u8D25\uFF0C\u90A3\u4E48 Redis \u4E8B\u52A1\u6267\u884C\u662F\u539F\u5B50\u6027\u7684\u4E48\uFF1F</p><p>\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u7279\u522B\u7684\u4F8B\u5B50\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; multi</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; set books iamastring</span></span>
<span class="line"><span style="color:#A6ACCD;">QUEUED</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; incr books</span></span>
<span class="line"><span style="color:#A6ACCD;">QUEUED</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; set poorman iamdesperate</span></span>
<span class="line"><span style="color:#A6ACCD;">QUEUED</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; exec</span></span>
<span class="line"><span style="color:#A6ACCD;">1) OK</span></span>
<span class="line"><span style="color:#A6ACCD;">2) (error) ERR value is not an integer or out of range</span></span>
<span class="line"><span style="color:#A6ACCD;">3) OK</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; get books</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;iamastring&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;  get poorman</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;iamdesperate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u662F\u4E8B\u52A1\u6267\u884C\u5230\u4E2D\u95F4\u9047\u5230\u5931\u8D25\u4E86\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4E0D\u80FD\u5BF9\u4E00\u4E2A\u5B57\u7B26\u4E32\u8FDB\u884C\u6570\u5B66\u8FD0\u7B97\uFF0C\u4E8B\u52A1\u5728\u9047\u5230\u6307\u4EE4\u6267\u884C\u5931\u8D25\u540E\uFF0C\u540E\u9762\u7684\u6307\u4EE4\u8FD8\u7EE7\u7EED\u6267\u884C\uFF0C\u6240\u4EE5 poorman \u7684\u503C\u80FD\u7EE7\u7EED\u5F97\u5230\u8BBE\u7F6E\u3002</p><p>\u5230\u8FD9\u91CC\uFF0C\u4F60\u5E94\u8BE5\u660E\u767D Redis \u7684\u4E8B\u52A1\u6839\u672C\u4E0D\u80FD\u7B97\u300C\u539F\u5B50\u6027\u300D\uFF0C\u800C\u4EC5\u4EC5\u662F\u6EE1\u8DB3\u4E86\u4E8B\u52A1\u7684\u300C\u9694\u79BB\u6027\u300D\uFF0C\u9694\u79BB\u6027\u4E2D\u7684\u4E32\u884C\u5316\u2014\u2014\u5F53\u524D\u6267\u884C\u7684\u4E8B\u52A1\u6709\u7740\u4E0D\u88AB\u5176\u5B83\u4E8B\u52A1\u6253\u65AD\u7684\u6743\u5229\u3002</p><h2 id="discard-\u4E22\u5F03" tabindex="-1">discard(\u4E22\u5F03) <a class="header-anchor" href="#discard-\u4E22\u5F03" aria-hidden="true">#</a></h2><p>Redis \u4E3A\u4E8B\u52A1\u63D0\u4F9B\u4E86\u4E00\u4E2A discard \u6307\u4EE4\uFF0C\u7528\u4E8E\u4E22\u5F03\u4E8B\u52A1\u7F13\u5B58\u961F\u5217\u4E2D\u7684\u6240\u6709\u6307\u4EE4\uFF0C\u5728 exec \u6267\u884C\u4E4B\u524D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; get books</span></span>
<span class="line"><span style="color:#A6ACCD;">(nil)</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; multi</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; incr books</span></span>
<span class="line"><span style="color:#A6ACCD;">QUEUED</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; incr books</span></span>
<span class="line"><span style="color:#A6ACCD;">QUEUED</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; discard</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; get books</span></span>
<span class="line"><span style="color:#A6ACCD;">(nil)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 discard \u4E4B\u540E\uFF0C\u961F\u5217\u4E2D\u7684\u6240\u6709\u6307\u4EE4\u90FD\u6CA1\u6267\u884C\uFF0C\u5C31\u597D\u50CF multi \u548C discard \u4E2D\u95F4\u7684\u6240\u6709\u6307\u4EE4\u4ECE\u672A\u53D1\u751F\u8FC7\u4E00\u6837\u3002</p><h2 id="\u4F18\u5316" tabindex="-1">\u4F18\u5316 <a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a></h2><p>\u4E0A\u9762\u7684 Redis \u4E8B\u52A1\u5728\u53D1\u9001\u6BCF\u4E2A\u6307\u4EE4\u5230\u4E8B\u52A1\u7F13\u5B58\u961F\u5217\u65F6\u90FD\u8981\u7ECF\u8FC7\u4E00\u6B21\u7F51\u7EDC\u8BFB\u5199\uFF0C\u5F53\u4E00\u4E2A\u4E8B\u52A1\u5185\u90E8\u7684\u6307\u4EE4\u8F83\u591A\u65F6\uFF0C\u9700\u8981\u7684\u7F51\u7EDC IO \u65F6\u95F4\u4E5F\u4F1A\u7EBF\u6027\u589E\u957F\u3002\u6240\u4EE5\u901A\u5E38 Redis \u7684\u5BA2\u6237\u7AEF\u5728\u6267\u884C\u4E8B\u52A1\u65F6\u90FD\u4F1A\u7ED3\u5408 pipeline \u4E00\u8D77\u4F7F\u7528\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5C06\u591A\u6B21 IO \u64CD\u4F5C\u538B\u7F29\u4E3A\u5355\u6B21 IO \u64CD\u4F5C\u3002\u6BD4\u5982\u6211\u4EEC\u5728\u4F7F\u7528 Python \u7684 Redis \u5BA2\u6237\u7AEF\u65F6\u6267\u884C\u4E8B\u52A1\u65F6\u662F\u8981\u5F3A\u5236\u4F7F\u7528 pipeline \u7684\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pipe = redis.pipeline(transaction=true)</span></span>
<span class="line"><span style="color:#A6ACCD;">pipe.multi()</span></span>
<span class="line"><span style="color:#A6ACCD;">pipe.incr(&quot;books&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">pipe.incr(&quot;books&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">values = pipe.execute()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="watch" tabindex="-1">Watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h2><p>\u8003\u8651\u5230\u4E00\u4E2A\u4E1A\u52A1\u573A\u666F\uFF0CRedis \u5B58\u50A8\u4E86\u6211\u4EEC\u7684\u8D26\u6237\u4F59\u989D\u6570\u636E\uFF0C\u5B83\u662F\u4E00\u4E2A\u6574\u6570\u3002\u73B0\u5728\u6709\u4E24\u4E2A\u5E76\u53D1\u7684\u5BA2\u6237\u7AEF\u8981\u5BF9\u8D26\u6237\u4F59\u989D\u8FDB\u884C\u4FEE\u6539\u64CD\u4F5C\uFF0C\u8FD9\u4E2A\u4FEE\u6539\u4E0D\u662F\u4E00\u4E2A\u7B80\u5355\u7684 incrby \u6307\u4EE4\uFF0C\u800C\u662F\u8981\u5BF9\u4F59\u989D\u4E58\u4EE5\u4E00\u4E2A\u500D\u6570\u3002Redis \u53EF\u6CA1\u6709\u63D0\u4F9B multiplyby \u8FD9\u6837\u7684\u6307\u4EE4\u3002\u6211\u4EEC\u9700\u8981\u5148\u53D6\u51FA\u4F59\u989D\u7136\u540E\u5728\u5185\u5B58\u91CC\u4E58\u4EE5\u500D\u6570\uFF0C\u518D\u5C06\u7ED3\u679C\u5199\u56DE Redis\u3002</p><p>\u8FD9\u5C31\u4F1A\u51FA\u73B0\u5E76\u53D1\u95EE\u9898\uFF0C\u56E0\u4E3A\u6709\u591A\u4E2A\u5BA2\u6237\u7AEF\u4F1A\u5E76\u53D1\u8FDB\u884C\u64CD\u4F5C\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 Redis \u7684\u5206\u5E03\u5F0F\u9501\u6765\u907F\u514D\u51B2\u7A81\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u89E3\u51B3\u65B9\u6848\u3002<strong>\u5206\u5E03\u5F0F\u9501\u662F\u4E00\u79CD\u60B2\u89C2\u9501\uFF0C\u90A3\u662F\u4E0D\u662F\u53EF\u4EE5\u4F7F\u7528\u4E50\u89C2\u9501\u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u51B2\u7A81\u5462\uFF1F</strong></p><p>Redis \u63D0\u4F9B\u4E86\u8FD9\u79CD watch \u7684\u673A\u5236\uFF0C\u5B83\u5C31\u662F\u4E00\u79CD\u4E50\u89C2\u9501\u3002\u6709\u4E86 watch \u6211\u4EEC\u53C8\u591A\u4E86\u4E00\u79CD\u53EF\u4EE5\u7528\u6765\u89E3\u51B3\u5E76\u53D1\u4FEE\u6539\u7684\u65B9\u6CD5\u3002 watch \u7684\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">    do_watch()</span></span>
<span class="line"><span style="color:#A6ACCD;">    commands()</span></span>
<span class="line"><span style="color:#A6ACCD;">    multi()</span></span>
<span class="line"><span style="color:#A6ACCD;">    send_commands()</span></span>
<span class="line"><span style="color:#A6ACCD;">    try:</span></span>
<span class="line"><span style="color:#A6ACCD;">        exec()</span></span>
<span class="line"><span style="color:#A6ACCD;">        break</span></span>
<span class="line"><span style="color:#A6ACCD;">    except WatchError:</span></span>
<span class="line"><span style="color:#A6ACCD;">        continue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>watch \u4F1A\u5728\u4E8B\u52A1\u5F00\u59CB\u4E4B\u524D\u76EF\u4F4F 1 \u4E2A\u6216\u591A\u4E2A\u5173\u952E\u53D8\u91CF\uFF0C\u5F53\u4E8B\u52A1\u6267\u884C\u65F6\uFF0C\u4E5F\u5C31\u662F\u670D\u52A1\u5668\u6536\u5230\u4E86 exec \u6307\u4EE4\u8981\u987A\u5E8F\u6267\u884C\u7F13\u5B58\u7684\u4E8B\u52A1\u961F\u5217\u65F6\uFF0CRedis \u4F1A\u68C0\u67E5\u5173\u952E\u53D8\u91CF\u81EA watch \u4E4B\u540E\uFF0C\u662F\u5426\u88AB\u4FEE\u6539\u4E86 (\u5305\u62EC\u5F53\u524D\u4E8B\u52A1\u6240\u5728\u7684\u5BA2\u6237\u7AEF)\u3002\u5982\u679C\u5173\u952E\u53D8\u91CF\u88AB\u4EBA\u52A8\u8FC7\u4E86\uFF0Cexec \u6307\u4EE4\u5C31\u4F1A\u8FD4\u56DE null \u56DE\u590D\u544A\u77E5\u5BA2\u6237\u7AEF\u4E8B\u52A1\u6267\u884C\u5931\u8D25\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5BA2\u6237\u7AEF\u4E00\u822C\u4F1A\u9009\u62E9\u91CD\u8BD5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; watch books</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; incr books  # \u88AB\u4FEE\u6539\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; multi</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; incr books</span></span>
<span class="line"><span style="color:#A6ACCD;">QUEUED</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; exec  # \u4E8B\u52A1\u6267\u884C\u5931\u8D25</span></span>
<span class="line"><span style="color:#A6ACCD;">(nil)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u670D\u52A1\u5668\u7ED9 exec \u6307\u4EE4\u8FD4\u56DE\u4E00\u4E2A null \u56DE\u590D\u65F6\uFF0C\u5BA2\u6237\u7AEF\u77E5\u9053\u4E86\u4E8B\u52A1\u6267\u884C\u662F\u5931\u8D25\u7684\uFF0C\u901A\u5E38\u5BA2\u6237\u7AEF (redis-py) \u90FD\u4F1A\u629B\u51FA\u4E00\u4E2A WatchError \u8FD9\u79CD\u9519\u8BEF\uFF0C\u4E0D\u8FC7\u4E5F\u6709\u4E9B\u8BED\u8A00 (jedis) \u4E0D\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u800C\u662F\u901A\u8FC7\u5728 exec \u65B9\u6CD5\u91CC\u8FD4\u56DE\u4E00\u4E2A null\uFF0C\u8FD9\u6837\u5BA2\u6237\u7AEF\u9700\u8981\u68C0\u67E5\u4E00\u4E0B\u8FD4\u56DE\u7ED3\u679C\u662F\u5426\u4E3A null \u6765\u786E\u5B9A\u4E8B\u52A1\u662F\u5426\u6267\u884C\u5931\u8D25\u3002</p><p><strong>\u6CE8\u610F\u4E8B\u9879</strong></p><p>Redis \u7981\u6B62\u5728 multi \u548C exec \u4E4B\u95F4\u6267\u884C watch \u6307\u4EE4\uFF0C\u800C\u5FC5\u987B\u5728 multi \u4E4B\u524D\u505A\u597D\u76EF\u4F4F\u5173\u952E\u53D8\u91CF\uFF0C\u5426\u5219\u4F1A\u51FA\u9519\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u4F7F\u7528 Python \u8BED\u8A00\u6765\u5B9E\u73B0\u5BF9\u4F59\u989D\u7684\u52A0\u500D\u64CD\u4F5C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># -*- coding: utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def key_for(user_id):</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &quot;account_{}&quot;.format(user_id)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def double_account(client, user_id):</span></span>
<span class="line"><span style="color:#A6ACCD;">    key = key_for(user_id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">        pipe = client.pipeline(transaction=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">        pipe.watch(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">        value = int(pipe.get(key))</span></span>
<span class="line"><span style="color:#A6ACCD;">        value *= 2  # \u52A0\u500D</span></span>
<span class="line"><span style="color:#A6ACCD;">        pipe.multi()</span></span>
<span class="line"><span style="color:#A6ACCD;">        pipe.set(key, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        try:</span></span>
<span class="line"><span style="color:#A6ACCD;">            pipe.execute()</span></span>
<span class="line"><span style="color:#A6ACCD;">            break  # \u603B\u7B97\u6210\u529F\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">        except redis.WatchError:</span></span>
<span class="line"><span style="color:#A6ACCD;">            continue  # \u4E8B\u52A1\u88AB\u6253\u65AD\u4E86\uFF0C\u91CD\u8BD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    return int(client.get(key))  # \u91CD\u65B0\u83B7\u53D6\u4F59\u989D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">client = redis.StrictRedis()</span></span>
<span class="line"><span style="color:#A6ACCD;">user_id = &quot;abc&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">client.setnx(key_for(user_id), 5)  # setnx \u505A\u521D\u59CB\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">print double_account(client, user_id)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0B\u9762\u6211\u4EEC\u518D\u4F7F\u7528 Java \u8BED\u8A00\u5B9E\u73B0\u4E00\u904D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import java.util.List;</span></span>
<span class="line"><span style="color:#A6ACCD;">import redis.clients.jedis.Jedis;</span></span>
<span class="line"><span style="color:#A6ACCD;">import redis.clients.jedis.Transaction;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public class TransactionDemo {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Jedis jedis = new Jedis();</span></span>
<span class="line"><span style="color:#A6ACCD;">    String userId = &quot;abc&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    String key = keyFor(userId);</span></span>
<span class="line"><span style="color:#A6ACCD;">    jedis.setnx(key, String.valueOf(5));  # setnx \u505A\u521D\u59CB\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(doubleAccount(jedis, userId));</span></span>
<span class="line"><span style="color:#A6ACCD;">    jedis.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static int doubleAccount(Jedis jedis, String userId) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    String key = keyFor(userId);</span></span>
<span class="line"><span style="color:#A6ACCD;">    while (true) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      jedis.watch(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">      int value = Integer.parseInt(jedis.get(key));</span></span>
<span class="line"><span style="color:#A6ACCD;">      value *= 2; // \u52A0\u500D</span></span>
<span class="line"><span style="color:#A6ACCD;">      Transaction tx = jedis.multi();</span></span>
<span class="line"><span style="color:#A6ACCD;">      tx.set(key, String.valueOf(value));</span></span>
<span class="line"><span style="color:#A6ACCD;">      List&lt;Object&gt; res = tx.exec();</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (res != null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        break; // \u6210\u529F\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Integer.parseInt(jedis.get(key)); // \u91CD\u65B0\u83B7\u53D6\u4F59\u989D</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static String keyFor(String userId) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return String.format(&quot;account_%s&quot;, userId);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u5E38\u5E38\u542C\u8BF4 Python \u7684\u4EE3\u7801\u8981\u6BD4 Java \u7B80\u77ED\u592A\u591A\uFF0C\u4F46\u662F\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u6211\u4EEC\u770B\u5230 Java \u7684\u4EE3\u7801\u6BD4 python \u7684\u4EE3\u7801\u4E5F\u591A\u4E0D\u4E86\u591A\u5C11\uFF0C\u5927\u7EA6\u53EA\u591A\u51FA 50%\u3002</p><h2 id="\u601D\u8003\u9898" tabindex="-1">\u601D\u8003\u9898 <a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a></h2><p>\u4E3A\u4EC0\u4E48 Redis \u7684\u4E8B\u52A1\u4E0D\u80FD\u652F\u6301\u56DE\u6EDA\uFF1F</p>`,42),c=[e];function o(t,i,r,A,C,d){return a(),n("div",null,c)}const u=s(p,[["render",o]]);export{D as __pageData,u as default};
