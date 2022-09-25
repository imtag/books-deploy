import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const D=JSON.parse('{"title":"\u5229\u7528 Pandas \u5BF9\u722C\u53D6\u6570\u636E\u8FDB\u884C\u5206\u6790","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4EC0\u4E48\u662FPandas","slug":"\u4EC0\u4E48\u662Fpandas","link":"#\u4EC0\u4E48\u662Fpandas","children":[]},{"level":3,"title":"Series","slug":"series","link":"#series","children":[]},{"level":3,"title":"DataFrame","slug":"dataframe","link":"#dataframe","children":[]},{"level":3,"title":"head()","slug":"head","link":"#head","children":[]},{"level":3,"title":"tail()","slug":"tail","link":"#tail","children":[]},{"level":3,"title":"\u6309\u7D22\u5F15\u6392\u5E8F","slug":"\u6309\u7D22\u5F15\u6392\u5E8F","link":"#\u6309\u7D22\u5F15\u6392\u5E8F","children":[]},{"level":3,"title":"\u6309\u503C\u6392\u5E8F","slug":"\u6309\u503C\u6392\u5E8F","link":"#\u6309\u503C\u6392\u5E8F","children":[]},{"level":3,"title":"\u9009\u62E9\u6570\u636E","slug":"\u9009\u62E9\u6570\u636E","link":"#\u9009\u62E9\u6570\u636E","children":[]},{"level":3,"title":"\u5207\u7247\u64CD\u4F5C","slug":"\u5207\u7247\u64CD\u4F5C","link":"#\u5207\u7247\u64CD\u4F5C","children":[]},{"level":3,"title":"\u901A\u8FC7loc\u3001.iloc \u9AD8\u6548\u83B7\u53D6\u6570\u636E","slug":"\u901A\u8FC7loc\u3001-iloc-\u9AD8\u6548\u83B7\u53D6\u6570\u636E","link":"#\u901A\u8FC7loc\u3001-iloc-\u9AD8\u6548\u83B7\u53D6\u6570\u636E","children":[]},{"level":3,"title":"\u901A\u8FC7\u6761\u4EF6\u8FC7\u6EE4\u6570\u636E","slug":"\u901A\u8FC7\u6761\u4EF6\u8FC7\u6EE4\u6570\u636E","link":"#\u901A\u8FC7\u6761\u4EF6\u8FC7\u6EE4\u6570\u636E","children":[]},{"level":3,"title":"\u6C42\u548C","slug":"\u6C42\u548C","link":"#\u6C42\u548C","children":[]},{"level":3,"title":"\u6C42\u5E73\u5747\u503C","slug":"\u6C42\u5E73\u5747\u503C","link":"#\u6C42\u5E73\u5747\u503C","children":[]},{"level":3,"title":"\u6C42\u6700\u5927/\u5C0F\u503C","slug":"\u6C42\u6700\u5927-\u5C0F\u503C","link":"#\u6C42\u6700\u5927-\u5C0F\u503C","children":[]},{"level":3,"title":"\u5206\u7EC4 groupby","slug":"\u5206\u7EC4-groupby","link":"#\u5206\u7EC4-groupby","children":[]}],"relativePath":"\u5176\u4ED6/\u57FA\u4E8E Python \u5B9E\u73B0\u5FAE\u4FE1\u516C\u4F17\u53F7\u722C\u866B/\u5229\u7528 Pandas \u5BF9\u722C\u53D6\u6570\u636E\u8FDB\u884C\u5206\u6790.md"}'),p={name:"\u5176\u4ED6/\u57FA\u4E8E Python \u5B9E\u73B0\u5FAE\u4FE1\u516C\u4F17\u53F7\u722C\u866B/\u5229\u7528 Pandas \u5BF9\u722C\u53D6\u6570\u636E\u8FDB\u884C\u5206\u6790.md"},e=l(`<h1 id="\u5229\u7528-pandas-\u5BF9\u722C\u53D6\u6570\u636E\u8FDB\u884C\u5206\u6790" tabindex="-1">\u5229\u7528 Pandas \u5BF9\u722C\u53D6\u6570\u636E\u8FDB\u884C\u5206\u6790 <a class="header-anchor" href="#\u5229\u7528-pandas-\u5BF9\u722C\u53D6\u6570\u636E\u8FDB\u884C\u5206\u6790" aria-hidden="true">#</a></h1><hr><h1 id="\u6570\u636E\u5206\u6790\u5DE5\u5177-pandas-\u4ECB\u7ECD" tabindex="-1">\u6570\u636E\u5206\u6790\u5DE5\u5177 Pandas \u4ECB\u7ECD <a class="header-anchor" href="#\u6570\u636E\u5206\u6790\u5DE5\u5177-pandas-\u4ECB\u7ECD" aria-hidden="true">#</a></h1><h3 id="\u4EC0\u4E48\u662Fpandas" tabindex="-1">\u4EC0\u4E48\u662FPandas <a class="header-anchor" href="#\u4EC0\u4E48\u662Fpandas" aria-hidden="true">#</a></h3><p>Pandas \u662F\u505A\u6570\u636E\u5206\u6790\u7684\u57FA\u7840\u5305\uFF0C\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u6570\u636E\u7ED3\u6784\u548C\u5176\u5B83\u65B9\u4FBF\u8FDB\u884C\u5411\u91CF\u5316\u8BA1\u7B97\u7684\u5DE5\u5177\u548C\u51FD\u6570, \u4F7F\u5F97 Python \u4E5F\u80FD\u591F\u50CF R \u8BED\u8A00\u4E00\u6837\u65B9\u4FBF\u5730\u7528\u4E8E\u6570\u636E\u5206\u6790\u548C\u5904\u7406\u3002\u5728 Pandas \u4E2D\u6709\u4E24\u79CD\u5E38\u89C1\u6570\u636E\u7ED3\u6784\uFF0C\u5206\u522B\u662F Series \u548C DataFrame\u3002</p><p>Series \u662F\u4E00\u79CD\u589E\u5F3A\u578B\u7684\u4E00\u7EF4\u6570\u7EC4\uFF0C\u4E0E Python \u4E2D\u7684\u5217\u8868\u76F8\u4F3C\uFF0C\u7531 index\uFF08\u7D22\u5F15\uFF09\u548C values\uFF08\u503C\uFF09\u7EC4\u6210\uFF0C Series \u4E2D\u7684\u503C\u662F\u76F8\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/14/160f4bfd5f87c0d3~tplv-t2oaga2asx-image.image" alt=""></p><p>\u800C DataFrame \u662F\u589E\u5F3A\u578B\u7684\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u5C31\u50CF Excel \u4E2D\u7684\u8868\u683C\uFF0C\u6709\u884C\u6807\u7B7E\u548C\u5217\u8868\u7D22\u5F15\uFF0C\u8FD9\u79CD\u6570\u636E\u7ED3\u6784\u5728Pandas \u4E2D\u6700\u4E3A\u5E38\u7528\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/15/160f6ed775ea137d~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5728\u505A\u6570\u636E\u5206\u6790\u524D\uFF0C\u6211\u4EEC\u4F1A\u7EA6\u5B9A\u4FD7\u6210\u5730\u5F15\u5165 Numpy \u3001Pandas\u3001Matplotlib \u4E09\u4E2A\u5DE5\u5177\u5305\uFF0C\u5E76\u4F7F\u7528\u5176\u7B80\u79F0 np\uFF0Cpd\uFF0Cplt\u3002numpy \u662F\u79D1\u5B66\u8BA1\u7B97\u57FA\u7840\u5305\uFF0Cpandas \u4F9D\u8D56\u4E8E numpy\uFF0C\u800C matplitlib \u662F\u7ED8\u56FE\u5DE5\u5177\u3002(\u4EE5\u4E0B\u4EE3\u7801\u5747\u5728 IPython \u4E2D\u5B8C\u6210\uFF0C\u5982\u679C\u4F60\u5DF2\u7ECF\u6210\u529F\u5B89\u88C5\u4E86 Anoconda\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C <code>ipython</code> \u547D\u4EE4\u8FDB\u5165)</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import pandas as pd</span></span>
<span class="line"><span style="color:#A6ACCD;">import numpy as np</span></span>
<span class="line"><span style="color:#A6ACCD;">import matplotlib.pyplot as plt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="series" tabindex="-1">Series <a class="header-anchor" href="#series" aria-hidden="true">#</a></h3><p>\u7528\u5217\u8868\u53EF\u521B\u5EFASeries\u5BF9\u8C61</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [30]: s = pd.Series([&#39;a&#39;,&#39;b&#39;,&#39;c&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [31]: s</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[31]:</span></span>
<span class="line"><span style="color:#A6ACCD;">0    a</span></span>
<span class="line"><span style="color:#A6ACCD;">1    b</span></span>
<span class="line"><span style="color:#A6ACCD;">2    c</span></span>
<span class="line"><span style="color:#A6ACCD;">dtype: object</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Series \u548C\u5217\u8868\u4E00\u6837\u6BCF\u4E2A\u5143\u7D20\u6709\u5BF9\u5E94\u7684\u7D22\u5F15\uFF0C\u9ED8\u8BA4\u662F0\u5230n\uFF08n\u662F\u5217\u8868\u7684\u957F\u5EA6\uFF09\uFF0C\u4E5F\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u540D\u5B57</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [42]: s = pd.Series([&#39;a&#39;,&#39;b&#39;,&#39;c&#39;], index=[&#39;x&#39;,&#39;y&#39;,&#39;z&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [43]: s</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[43]:</span></span>
<span class="line"><span style="color:#A6ACCD;">x    a</span></span>
<span class="line"><span style="color:#A6ACCD;">y    b</span></span>
<span class="line"><span style="color:#A6ACCD;">z    c</span></span>
<span class="line"><span style="color:#A6ACCD;">dtype: object</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u5143\u7D20</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [50]: s[&#39;x&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[50]: &#39;a&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u50CF\u5217\u8868\u4E00\u6837\uFF0C\u652F\u6301\u5207\u7247</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [51]: s[:2]</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[51]:</span></span>
<span class="line"><span style="color:#A6ACCD;">x    a</span></span>
<span class="line"><span style="color:#A6ACCD;">y    b</span></span>
<span class="line"><span style="color:#A6ACCD;">dtype: object</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u4F7F\u7528\u5B57\u5178\u521B\u5EFASeries\uFF08Series\u4E5F\u53EF\u4EE5\u770B\u505A\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u5B57\u5178\u5BF9\u8C61\uFF0C\u90FD\u662F\u7D22\u5F15\u5230\u503C\u7684\u6620\u5C04\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [272]: s2 = pd.Series({1:&quot;a&quot;,2:&quot;b&quot;,3:&quot;c&quot;})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [273]: s2</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[273]:</span></span>
<span class="line"><span style="color:#A6ACCD;">1    a</span></span>
<span class="line"><span style="color:#A6ACCD;">2    b</span></span>
<span class="line"><span style="color:#A6ACCD;">3    c</span></span>
<span class="line"><span style="color:#A6ACCD;">dtype: object</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="dataframe" tabindex="-1">DataFrame <a class="header-anchor" href="#dataframe" aria-hidden="true">#</a></h3><p>\u6709\u5F88\u591A\u65B9\u6CD5\u53EF\u4EE5\u521B\u5EFA DataFrame \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7528\u76F8\u7B49\u957F\u5EA6\u7684\u5217\u8868\u7EC4\u6210\u7684\u5B57\u5178\u5BF9\u8C61\u6765\u6784\u5EFA DataFrame</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [52]: data = {&#39;state&#39;: [&#39;Ohio&#39;, &#39;Ohio&#39;, &#39;Ohio&#39;, &#39;Nevada&#39;, &#39;Nevada&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...:         &#39;year&#39;: [2000, 2001, 2002, 2001, 2002],</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...:         &#39;pop&#39;: [1.5, 1.7, 3.6, 2.4, 2.9]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [54]: df = pd.DataFrame(data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [55]: df</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[55]:</span></span>
<span class="line"><span style="color:#A6ACCD;">   pop   state  year</span></span>
<span class="line"><span style="color:#A6ACCD;">0  1.5    Ohio  2000</span></span>
<span class="line"><span style="color:#A6ACCD;">1  1.7    Ohio  2001</span></span>
<span class="line"><span style="color:#A6ACCD;">2  3.6    Ohio  2002</span></span>
<span class="line"><span style="color:#A6ACCD;">3  2.4  Nevada  2001</span></span>
<span class="line"><span style="color:#A6ACCD;">4  2.9  Nevada  2002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7 Numpy \u7684\u4E8C\u7EF4\u6570\u7EC4\u6765\u6784\u5EFA DataFrame</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u968F\u673A\u751F\u62106\u884C4\u5217\u7684\u4E8C\u7EF4\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">In [58]:  df = pd.DataFrame(np.random.randn(6,4))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [59]: df</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[59]:</span></span>
<span class="line"><span style="color:#A6ACCD;">          0         1         2         3</span></span>
<span class="line"><span style="color:#A6ACCD;">0  0.447964 -0.486327 -1.593023 -0.314114</span></span>
<span class="line"><span style="color:#A6ACCD;">1  1.004132 -0.058186  0.076479  0.076231</span></span>
<span class="line"><span style="color:#A6ACCD;">2  0.445284  0.592718  0.214101 -0.322876</span></span>
<span class="line"><span style="color:#A6ACCD;">3 -0.006924 -0.738673  0.277461  0.448946</span></span>
<span class="line"><span style="color:#A6ACCD;">4  0.100352  1.416282  0.353527  0.640276</span></span>
<span class="line"><span style="color:#A6ACCD;">5  0.804352 -0.374634  0.734836  0.247061</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD8\u53EF\u4EE5\u4ECE csv \u6587\u4EF6\u3001\u6570\u636E\u5E93\u4E2D\u83B7\u53D6\uFF0C\u73B0\u5728\u5148\u6765\u719F\u6089 DataFrame \u4E2D\u5E38\u7528\u5C5E\u6027\u548C\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u4EE5\u4FBF\u540E\u7EED\u80FD\u591F\u7075\u6D3B\u8FD0\u7528 Pandas\u3002</p><p>DataFrame \u65E2\u6709\u884C\u7D22\u5F15\uFF08index\uFF09\u4E5F\u6709\u5217\u7D22\u5F15\uFF08columns\uFF09\uFF0C\u6784\u5EFA DataFrame \u65F6\u53EF\u4EE5\u6307\u5B9A\u6BCF\u884C\u7684\u540D\u5B57\u548C\u6BCF\u5217\u7684\u540D\u5B57\uFF0C\u4F8B\u5982\u4E0B\u9762\u7684 DataFrame \u7528\u65F6\u95F4\u4F5C\u4E3A\u884C\u7D22\u5F15\uFF0C\u5B57\u6BCD A\u3001B\u3001C\u3001D \u4F5C\u4E3A\u5217\u7D22\u5F15\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [61]: dates = pd.date_range(&#39;20130101&#39;,periods=6)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [62]: dates</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[62]:</span></span>
<span class="line"><span style="color:#A6ACCD;">DatetimeIndex([&#39;2013-01-01&#39;, &#39;2013-01-02&#39;, &#39;2013-01-03&#39;, &#39;2013-01-04&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;2013-01-05&#39;, &#39;2013-01-06&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">              dtype=&#39;datetime64[ns]&#39;, freq=&#39;D&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [63]: df = pd.DataFrame(np.random.randn(6,4),index=dates,columns=list(&#39;ABCD&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [64]: df</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[64]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B         C         D</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01  0.513286 -1.475824  1.939876 -0.163942</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 -0.518291  1.345230  0.510746  1.284767</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.434865 -0.464227  1.830259 -0.719290</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04  0.654418 -0.994241  0.162705  2.816623</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-05  1.540274 -0.227124  1.843401 -2.977880</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-06  0.888156  1.932291  0.998568  0.143846</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>DataFrame \u5176\u5B9E\u5C31\u662F\u75313\u90E8\u5206\u7EC4\u6210\u7684\uFF0C\u5206\u522B\u662F index\u3001columns\u3001values</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [79]: df.columns</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[79]: Index([&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;], dtype=&#39;object&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [80]: df.index</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[80]:</span></span>
<span class="line"><span style="color:#A6ACCD;">DatetimeIndex([&#39;2013-01-01&#39;, &#39;2013-01-02&#39;, &#39;2013-01-03&#39;, &#39;2013-01-04&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;2013-01-05&#39;, &#39;2013-01-06&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">              dtype=&#39;datetime64[ns]&#39;, freq=&#39;D&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [81]: df.values</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[81]:</span></span>
<span class="line"><span style="color:#A6ACCD;">array([[ 0.51328621, -1.475824  ,  1.93987575, -0.16394233],</span></span>
<span class="line"><span style="color:#A6ACCD;">       [-0.51829132,  1.34522999,  0.51074601,  1.2847668 ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       [-0.43486491, -0.46422712,  1.83025914, -0.71928957],</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ 0.65441841, -0.99424111,  0.16270488,  2.81662335],</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ 1.54027403, -0.22712424,  1.84340078, -2.97787999],</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ 0.88815632,  1.93229088,  0.99856774,  0.14384553]])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="head" tabindex="-1">head() <a class="header-anchor" href="#head" aria-hidden="true">#</a></h3><p>head() \u8FD4\u56DE DataFrame \u7684\u5934\u90E8\u6570\u636E\uFF08\u9ED8\u8BA4\u8FD4\u56DE\u8868\u683C\u4E2D\u7684\u524D5\u884C\u6570\u636E\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8FD4\u56DE\u7684\u884C\u6570</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [70]: df.head(3)</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[70]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B         C         D</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01  0.513286 -1.475824  1.939876 -0.163942</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 -0.518291  1.345230  0.510746  1.284767</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.434865 -0.464227  1.830259 -0.719290</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="tail" tabindex="-1">tail() <a class="header-anchor" href="#tail" aria-hidden="true">#</a></h3><p>tail() \u8FD4\u56DE DataFrame \u7684\u5C3E\u90E8\u6570\u636E\uFF08\u9ED8\u8BA4\u8FD4\u56DE\u8868\u683C\u4E2D\u7684\u6700\u540E5\u884C\u6570\u636E\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [72]: df.tail()</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[72]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B         C         D</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 -0.518291  1.345230  0.510746  1.284767</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.434865 -0.464227  1.830259 -0.719290</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04  0.654418 -0.994241  0.162705  2.816623</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-05  1.540274 -0.227124  1.843401 -2.977880</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-06  0.888156  1.932291  0.998568  0.143846</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6309\u7D22\u5F15\u6392\u5E8F" tabindex="-1">\u6309\u7D22\u5F15\u6392\u5E8F <a class="header-anchor" href="#\u6309\u7D22\u5F15\u6392\u5E8F" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u6309\u7167\u5217\u7D22\u5F15\u7684\u964D\u5E8F\u6392\u5217\uFF1AD-&gt;C-&gt;B-&gt;A </span></span>
<span class="line"><span style="color:#A6ACCD;">In [96]: df.sort_index(axis=1, ascending=False)</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[96]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   D         C         B         A</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01 -0.163942  1.939876 -1.475824  0.513286</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02  1.284767  0.510746  1.345230 -0.518291</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.719290  1.830259 -0.464227 -0.434865</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04  2.816623  0.162705 -0.994241  0.654418</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-05 -2.977880  1.843401 -0.227124  1.540274</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-06  0.143846  0.998568  1.932291  0.888156</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6309\u7167\u884C\u7D22\u5F15\u7684\u964D\u5E8F\u6392\u5217\uFF1A2012-01-06-&gt;...-&gt;2013-01-01</span></span>
<span class="line"><span style="color:#A6ACCD;">In [97]: df.sort_index(axis=0, ascending=False)</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[97]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B         C         D</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-06  0.888156  1.932291  0.998568  0.143846</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-05  1.540274 -0.227124  1.843401 -2.977880</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04  0.654418 -0.994241  0.162705  2.816623</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.434865 -0.464227  1.830259 -0.719290</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 -0.518291  1.345230  0.510746  1.284767</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01  0.513286 -1.475824  1.939876 -0.163942</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6309\u503C\u6392\u5E8F" tabindex="-1">\u6309\u503C\u6392\u5E8F <a class="header-anchor" href="#\u6309\u503C\u6392\u5E8F" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u6839\u636EB\u5217\u7684\u503C\u7684\u5347\u5E8F\u6392\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">In [99]: df.sort_values(by=&#39;B&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[99]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B         C         D</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01  0.513286 -1.475824  1.939876 -0.163942</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04  0.654418 -0.994241  0.162705  2.816623</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.434865 -0.464227  1.830259 -0.719290</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-05  1.540274 -0.227124  1.843401 -2.977880</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 -0.518291  1.345230  0.510746  1.284767</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-06  0.888156  1.932291  0.998568  0.143846</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5148\u6309A\u7684\u5347\u5E8F\u6392\uFF0C\u518D\u6309B\u7684\u964D\u5E8F\u6392</span></span>
<span class="line"><span style="color:#A6ACCD;">In [161]: df.sort_values(by=[&#39;A&#39;,&#39;B&#39;], ascending=[True, False])</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[161]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B         C         D</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 -0.518291  1.345230  0.510746  1.284767</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.434865 -0.464227  1.830259 -0.719290</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01  0.513286 -1.475824  1.939876 -0.163942</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04  0.654418 -0.994241  0.162705  2.816623</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-06  0.888156  1.932291  0.998568  0.143846</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-05  1.540274 -0.227124  1.843401 -2.977880</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u9009\u62E9\u6570\u636E" tabindex="-1">\u9009\u62E9\u6570\u636E <a class="header-anchor" href="#\u9009\u62E9\u6570\u636E" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u9009\u62E9\u4E00\u5217\uFF0C\u8FD4\u56DE Series \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">In [100]: df[&#39;A&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[100]:</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01    0.513286</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02   -0.518291</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03   -0.434865</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04    0.654418</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-05    1.540274</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-06    0.888156</span></span>
<span class="line"><span style="color:#A6ACCD;">Freq: D, Name: A, dtype: float64</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u9009\u62E9\u591A\u5217\uFF0C\u8FD4\u56DE DataFrame \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">In [102]: df[[&#39;A&#39;,&#39;B&#39;]]</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[102]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01  0.513286 -1.475824</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 -0.518291  1.345230</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.434865 -0.464227</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04  0.654418 -0.994241</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-05  1.540274 -0.227124</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-06  0.888156  1.932291</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5207\u7247\u64CD\u4F5C" tabindex="-1">\u5207\u7247\u64CD\u4F5C <a class="header-anchor" href="#\u5207\u7247\u64CD\u4F5C" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [101]: df[0:3]</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[101]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B         C         D</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01  0.513286 -1.475824  1.939876 -0.163942</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 -0.518291  1.345230  0.510746  1.284767</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.434865 -0.464227  1.830259 -0.719290</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u901A\u8FC7loc\u3001-iloc-\u9AD8\u6548\u83B7\u53D6\u6570\u636E" tabindex="-1">\u901A\u8FC7loc\u3001.iloc \u9AD8\u6548\u83B7\u53D6\u6570\u636E <a class="header-anchor" href="#\u901A\u8FC7loc\u3001-iloc-\u9AD8\u6548\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u901A\u8FC7\u884C\u7D22\u5F15\u5207\u7247\u83B7\u53D6\u6307\u5B9A\u5217\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">In [145]: df.loc[&quot;2013-01-01&quot;:&quot;2013-01-03&quot;, [&#39;A&#39;,&#39;B&#39;]]</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[145]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01  0.513286 -1.475824</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 -0.518291  1.345230</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.434865 -0.464227</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u901A\u8FC7\u884C\u53F7\u5207\u7247\u83B7\u53D6\uFF081\u52304\u884C\uFF0C0\u52302\u5217\uFF09\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">In [149]: df.iloc[1:4, 0:2]</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[149]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 -0.518291  1.345230</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 -0.434865 -0.464227</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04  0.654418 -0.994241</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u901A\u8FC7\u6761\u4EF6\u8FC7\u6EE4\u6570\u636E" tabindex="-1">\u901A\u8FC7\u6761\u4EF6\u8FC7\u6EE4\u6570\u636E <a class="header-anchor" href="#\u901A\u8FC7\u6761\u4EF6\u8FC7\u6EE4\u6570\u636E" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [104]: df[df.A&gt;0]</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[104]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                   A         B         C         D</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01  0.513286 -1.475824  1.939876 -0.163942</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04  0.654418 -0.994241  0.162705  2.816623</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-05  1.540274 -0.227124  1.843401 -2.977880</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-06  0.888156  1.932291  0.998568  0.143846</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6C42\u548C" tabindex="-1">\u6C42\u548C <a class="header-anchor" href="#\u6C42\u548C" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [115]: df.sum()</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[115]:</span></span>
<span class="line"><span style="color:#A6ACCD;">A    2.642979</span></span>
<span class="line"><span style="color:#A6ACCD;">B    0.116104</span></span>
<span class="line"><span style="color:#A6ACCD;">C    7.285554</span></span>
<span class="line"><span style="color:#A6ACCD;">D    0.384124</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6C42\u5E73\u5747\u503C" tabindex="-1">\u6C42\u5E73\u5747\u503C <a class="header-anchor" href="#\u6C42\u5E73\u5747\u503C" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [121]: df.mean()</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[121]:</span></span>
<span class="line"><span style="color:#A6ACCD;">A    0.440496</span></span>
<span class="line"><span style="color:#A6ACCD;">B    0.019351</span></span>
<span class="line"><span style="color:#A6ACCD;">C    1.214259</span></span>
<span class="line"><span style="color:#A6ACCD;">D    0.064021</span></span>
<span class="line"><span style="color:#A6ACCD;">dtype: float64</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6C42\u6700\u5927-\u5C0F\u503C" tabindex="-1">\u6C42\u6700\u5927/\u5C0F\u503C <a class="header-anchor" href="#\u6C42\u6700\u5927-\u5C0F\u503C" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [157]: df.max()</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[157]:</span></span>
<span class="line"><span style="color:#A6ACCD;">A    1.540274</span></span>
<span class="line"><span style="color:#A6ACCD;">B    1.932291</span></span>
<span class="line"><span style="color:#A6ACCD;">C    1.939876</span></span>
<span class="line"><span style="color:#A6ACCD;">D    2.816623</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [159]: df.min()</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[159]:</span></span>
<span class="line"><span style="color:#A6ACCD;">A   -0.518291</span></span>
<span class="line"><span style="color:#A6ACCD;">B   -1.475824</span></span>
<span class="line"><span style="color:#A6ACCD;">C    0.162705</span></span>
<span class="line"><span style="color:#A6ACCD;">D   -2.977880</span></span>
<span class="line"><span style="color:#A6ACCD;">dtype: float64</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5206\u7EC4-groupby" tabindex="-1">\u5206\u7EC4 groupby <a class="header-anchor" href="#\u5206\u7EC4-groupby" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">In [252]: df.groupby(&#39;A&#39;).size()</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[252]:</span></span>
<span class="line"><span style="color:#A6ACCD;">A</span></span>
<span class="line"><span style="color:#A6ACCD;">-0.518291    1</span></span>
<span class="line"><span style="color:#A6ACCD;">-0.434865    1</span></span>
<span class="line"><span style="color:#A6ACCD;"> 0.513286    1</span></span>
<span class="line"><span style="color:#A6ACCD;"> 0.654418    1</span></span>
<span class="line"><span style="color:#A6ACCD;"> 0.888156    1</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1.000000    1</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1.540274    1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>groupby \u7684\u53C2\u6570\u8FD8\u53EF\u4EE5\u662F\u51FD\u6570</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u6DFB\u52A0E\u4E3A\u65F6\u95F4\u5217\uFF0C\u6839\u636E\u65F6\u95F4\u7684\u5E74\u8FDB\u884C\u5206\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">In [255]: df[&#39;E&#39;] = df.index</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [256]: df</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[256]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                            A         B         C         D          E</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-01 00:00:00  0.513286 -1.475824  1.939876 -0.163942 2013-01-01</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-02 00:00:00 -0.518291  1.345230  0.510746  1.284767 2013-01-02</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-03 00:00:00 -0.434865 -0.464227  1.830259 -0.719290 2013-01-03</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-04 00:00:00  0.654418 -0.994241  0.162705  2.816623 2013-01-04</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-05 00:00:00  1.540274 -0.227124  1.843401 -2.977880 2013-01-05</span></span>
<span class="line"><span style="color:#A6ACCD;">2013-01-06 00:00:00  0.888156  1.932291  0.998568  0.143846 2013-01-06</span></span>
<span class="line"><span style="color:#A6ACCD;">2014-01-06 00:00:00  1.000000  1.000000  1.000000  1.000000 2014-01-06</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In [257]: df.groupby(lambda x : df.E[x].year).size()</span></span>
<span class="line"><span style="color:#A6ACCD;">Out[257]:</span></span>
<span class="line"><span style="color:#A6ACCD;">2013    6</span></span>
<span class="line"><span style="color:#A6ACCD;">2014    1</span></span>
<span class="line"><span style="color:#A6ACCD;">dtype: int64</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5173\u4E8EPandas\u66F4\u591A\u8BE6\u7EC6\u7684\u7528\u6CD5\u53EF\u4EE5\u53C2\u8003Pandas\u5B98\u65B9\u6587\u6863<a href="https://pandas.pydata.org" target="_blank" rel="noreferrer">https://pandas.pydata.org</a>\uFF0C\u4E0B\u4E00\u8282\u6211\u4EEC\u5C06\u6B63\u5F0F\u8FDB\u5165\u6570\u636E\u5206\u6790\u73AF\u8282\u3002</p>`,61),c=[e];function o(t,A,C,i,r,y){return a(),n("div",null,c)}const u=s(p,[["render",o]]);export{D as __pageData,u as default};
