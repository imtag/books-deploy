import{_ as s,c as a,o as n,d as l}from"./app.e5528619.js";const D=JSON.parse('{"title":"\u80A1\u7968\u6570\u636E\u5206\u6790-\u5206\u65F6\u660E\u7EC6\u6570\u636E\u5468\u671F\u91CD\u91C7\u6837\u3010\u52A0\u63A8\u7BC7\u3011","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"resample()\u5B9E\u73B0\u5468\u671F\u91CD\u91C7\u6837","slug":"resample-\u5B9E\u73B0\u5468\u671F\u91CD\u91C7\u6837","link":"#resample-\u5B9E\u73B0\u5468\u671F\u91CD\u91C7\u6837","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u5176\u4ED6/Python\u6570\u636E\u5206\u6790\u5B9E\u6218\uFF1A\u6784\u5EFA\u80A1\u7968\u91CF\u5316\u4EA4\u6613\u7CFB\u7EDF/\u80A1\u7968\u6570\u636E\u5206\u6790-\u5206\u65F6\u660E\u7EC6\u6570\u636E\u5468\u671F\u91CD\u91C7\u6837\u3010\u52A0\u63A8\u7BC7\u3011.md"}'),p={name:"\u5176\u4ED6/Python\u6570\u636E\u5206\u6790\u5B9E\u6218\uFF1A\u6784\u5EFA\u80A1\u7968\u91CF\u5316\u4EA4\u6613\u7CFB\u7EDF/\u80A1\u7968\u6570\u636E\u5206\u6790-\u5206\u65F6\u660E\u7EC6\u6570\u636E\u5468\u671F\u91CD\u91C7\u6837\u3010\u52A0\u63A8\u7BC7\u3011.md"},e=l(`<h1 id="\u80A1\u7968\u6570\u636E\u5206\u6790-\u5206\u65F6\u660E\u7EC6\u6570\u636E\u5468\u671F\u91CD\u91C7\u6837\u3010\u52A0\u63A8\u7BC7\u3011" tabindex="-1">\u80A1\u7968\u6570\u636E\u5206\u6790-\u5206\u65F6\u660E\u7EC6\u6570\u636E\u5468\u671F\u91CD\u91C7\u6837\u3010\u52A0\u63A8\u7BC7\u3011 <a class="header-anchor" href="#\u80A1\u7968\u6570\u636E\u5206\u6790-\u5206\u65F6\u660E\u7EC6\u6570\u636E\u5468\u671F\u91CD\u91C7\u6837\u3010\u52A0\u63A8\u7BC7\u3011" aria-hidden="true">#</a></h1><hr><h1 id="\u52A0\u63A8\u7BC7\uFF01\u5206\u65F6\u660E\u7EC6\u6570\u636E\u5468\u671F\u91CD\u91C7\u6837" tabindex="-1">\u52A0\u63A8\u7BC7\uFF01\u5206\u65F6\u660E\u7EC6\u6570\u636E\u5468\u671F\u91CD\u91C7\u6837 <a class="header-anchor" href="#\u52A0\u63A8\u7BC7\uFF01\u5206\u65F6\u660E\u7EC6\u6570\u636E\u5468\u671F\u91CD\u91C7\u6837" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u884C\u60C5\u8F6F\u4EF6\u7684\u5404\u79CD\u5468\u671F\u548C\u7EDF\u8BA1\u7684\u6570\u636E\u90FD\u662F\u901A\u8FC7\u660E\u7EC6\u6570\u636E\u8DE8\u5468\u671F\u8F6C\u6362\u800C\u5F62\u6210\u7684\uFF0C\u6BD4\u5982\u5206\u949FK\u7EBF\u3001\u5C0F\u65F6K\u7EBF\u3001\u5F53\u65E5\u6210\u4EA4\u91CF\u3001\u6210\u4EA4\u989D\u3001\u5916\u76D8\u3001\u5185\u76D8\u7B49\u5404\u79CD\u6307\u6807\u3002</p><p>\u672C\u8282\u6211\u4EEC\u5C31\u6765\u4ECB\u7ECD\u4E0B\u5982\u679C\u901A\u8FC7\u5468\u671F\u91CD\u91C7\u6837\u65B9\u5F0F\u5C06\u5206\u65F6\u660E\u7EC6\u6570\u636E\u8F6C\u6362\u4E3A\u5404\u79CD\u5468\u671F\u6570\u636E\u3002</p><h2 id="resample-\u5B9E\u73B0\u5468\u671F\u91CD\u91C7\u6837" tabindex="-1">resample()\u5B9E\u73B0\u5468\u671F\u91CD\u91C7\u6837 <a class="header-anchor" href="#resample-\u5B9E\u73B0\u5468\u671F\u91CD\u91C7\u6837" aria-hidden="true">#</a></h2><p>Pandas\u4E2D\u63D0\u4F9B\u4E86resample()\u65B9\u6CD5\u5BF9\u65F6\u95F4\u5E8F\u5217\u8FDB\u884C\u91CD\u91C7\u6837\uFF0C\u6B64\u5904\u5C06\u83B7\u53D6\u5230\u7684tick\u6570\u636E\u5408\u6210\u4E00\u5206\u949F\u6570\u636E\u3002\u5173\u952E\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">df_min_ohlc = df_tick.price.resample(&#39;1min&#39;, closed=&#39;left&#39;, label=&#39;left&#39;).ohlc()</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      open   high    low  close</span></span>
<span class="line"><span style="color:#A6ACCD;">time                                           </span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:25:00  12.78  12.78  12.78  12.78</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:26:00    NaN    NaN    NaN    NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:27:00    NaN    NaN    NaN    NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:28:00    NaN    NaN    NaN    NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:29:00    NaN    NaN    NaN    NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:30:00  12.76  12.76  12.61  12.66</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:31:00  12.66  12.66  12.64  12.64</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:32:00  12.64  12.64  12.59  12.59</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:33:00  12.63  12.68  12.61  12.67</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:34:00  12.68  12.70  12.68  12.69</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u800C\u540E\u6211\u4EEC\u5C06df_min_ohlc\u6570\u636E\u8FDB\u884C\u6E05\u6D17\uFF0C\u4E3B\u8981\u4E3A\u5904\u7406\u975E\u4EA4\u6613\u65F6\u95F4\u6BB5\u7684NaN\u6570\u636E\uFF0C\u5E76\u5C06\u6240\u6709\u5217\u90FD\u4E3ANaN\u7684\u884C\u5220\u9664\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">df_min_ohlc = df_min_ohlc.dropna(axis=0,how=&#39;all&#39;) # NAN\u503C\u5220\u9664 \u6240\u6709\u503C\u90FD\u4E3A\u7F3A\u5931\u503C\u65F6\u624D\u5220\u9664\u8BE5\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">print(df_min_ohlc.head())</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6700\u7EC8\u5F97\u5230\u7684\u6570\u636E\u5982\u4E0B\u6240\u793A\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      open   high    low  close</span></span>
<span class="line"><span style="color:#A6ACCD;">time                                           </span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:25:00  12.78  12.78  12.78  12.78</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:30:00  12.76  12.76  12.61  12.66</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:31:00  12.66  12.66  12.64  12.64</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:32:00  12.64  12.64  12.59  12.59</span></span>
<span class="line"><span style="color:#A6ACCD;">2020-02-01 09:33:00  12.63  12.68  12.61  12.67</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u7528\u5C0F\u518C\u5B50\u300A\u80A1\u7968\u6570\u636E\u53EF\u89C6\u5316\uFF1A\u81EA\u5B9A\u4E49Matplotlib\u7248\u80A1\u7968\u884C\u60C5\u754C\u9762\u300B\u7684\u4EE3\u7801\u7ED8\u52361min K\u7EBF\u56FE\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/2/17003f06386fb274~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    series_data = {&#39;Open&#39;: df_min_ohlc.open, &#39;Close&#39;: df_min_ohlc.close, &#39;High&#39;: df_min_ohlc.high,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   &#39;Low&#39;: df_min_ohlc.low}</span></span>
<span class="line"><span style="color:#A6ACCD;">    df_stockload = pd.DataFrame(series_data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    fig = plt.figure(figsize=(12, 6), dpi=100, facecolor=&quot;white&quot;)  # \u521B\u5EFAfig\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    gs = gridspec.GridSpec(3, 1, left=0.08, bottom=0.15, right=0.99, top=0.96, wspace=None, hspace=0,</span></span>
<span class="line"><span style="color:#A6ACCD;">                           height_ratios=[3.5, 1, 1])</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KAV = fig.add_subplot(gs[0, :])</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_MACD = fig.add_subplot(gs[1, :])</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KDJ = fig.add_subplot(gs[2, :])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u7ED8\u5236K\u7EBF\u56FE</span></span>
<span class="line"><span style="color:#A6ACCD;">    mpf.candlestick2_ochl(graph_KAV, df_stockload.Open, df_stockload.Close, df_stockload.High, df_stockload.Low,</span></span>
<span class="line"><span style="color:#A6ACCD;">                          width=0.5,</span></span>
<span class="line"><span style="color:#A6ACCD;">                          colorup=&#39;r&#39;, colordown=&#39;g&#39;)  # \u7ED8\u5236K\u7EBF\u8D70\u52BF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u7ED8\u5236\u79FB\u52A8\u5E73\u5747\u7EBF\u56FE</span></span>
<span class="line"><span style="color:#A6ACCD;">    df_stockload[&#39;Ma20&#39;] = df_stockload.Close.rolling(window=20).mean()  # pd.rolling_mean(df_stockload.Close,window=20)</span></span>
<span class="line"><span style="color:#A6ACCD;">    df_stockload[&#39;Ma30&#39;] = df_stockload.Close.rolling(window=30).mean()  # pd.rolling_mean(df_stockload.Close,window=30)</span></span>
<span class="line"><span style="color:#A6ACCD;">    df_stockload[&#39;Ma60&#39;] = df_stockload.Close.rolling(window=60).mean()  # pd.rolling_mean(df_stockload.Close,window=60)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KAV.plot(np.arange(0, len(df_stockload.index)), df_stockload[&#39;Ma20&#39;], &#39;black&#39;, label=&#39;M20&#39;, lw=1.0)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KAV.plot(np.arange(0, len(df_stockload.index)), df_stockload[&#39;Ma30&#39;], &#39;green&#39;, label=&#39;M30&#39;, lw=1.0)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KAV.plot(np.arange(0, len(df_stockload.index)), df_stockload[&#39;Ma60&#39;], &#39;blue&#39;, label=&#39;M60&#39;, lw=1.0)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KAV.legend(loc=&#39;best&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KAV.set_title(u&quot;002372 \u4F1F\u661F\u65B0\u6750-\u5206\u949FK\u7EBF&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KAV.set_ylabel(u&quot;\u4EF7\u683C&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KAV.set_xlim(0, len(df_stockload.index))  # \u8BBE\u7F6E\u4E00\u4E0Bx\u8F74\u7684\u8303\u56F4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u7ED8\u5236MACD</span></span>
<span class="line"><span style="color:#A6ACCD;">    macd_dif, macd_dea, macd_bar = talib.MACD(df_stockload[&#39;Close&#39;].values, fastperiod=12, slowperiod=26,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                              signalperiod=9)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_MACD.plot(np.arange(0, len(df_stockload.index)), macd_dif, &#39;red&#39;, label=&#39;macd dif&#39;)  # dif</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_MACD.plot(np.arange(0, len(df_stockload.index)), macd_dea, &#39;blue&#39;, label=&#39;macd dea&#39;)  # dea</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    bar_red = np.where(macd_bar &gt; 0, 2 * macd_bar, 0)  # \u7ED8\u5236BAR&gt;0 \u67F1\u72B6\u56FE</span></span>
<span class="line"><span style="color:#A6ACCD;">    bar_green = np.where(macd_bar &lt; 0, 2 * macd_bar, 0)  # \u7ED8\u5236BAR&lt;0 \u67F1\u72B6\u56FE</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_MACD.bar(np.arange(0, len(df_stockload.index)), bar_red, facecolor=&#39;red&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_MACD.bar(np.arange(0, len(df_stockload.index)), bar_green, facecolor=&#39;green&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_MACD.legend(loc=&#39;best&#39;, shadow=True, fontsize=&#39;10&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_MACD.set_ylabel(u&quot;MACD&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_MACD.set_xlim(0, len(df_stockload.index))  # \u8BBE\u7F6E\u4E00\u4E0Bx\u8F74\u7684\u8303\u56F4</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_MACD.set_xticks(range(0, len(df_stockload.index), 15))  # X\u8F74\u523B\u5EA6\u8BBE\u5B9A \u6BCF15\u5929\u6807\u4E00\u4E2A\u65E5\u671F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u7ED8\u5236KDJ</span></span>
<span class="line"><span style="color:#A6ACCD;">    df_stockload[&#39;K&#39;], df_stockload[&#39;D&#39;] = talib.STOCH(df_stockload.High.values, df_stockload.Low.values,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                                       df_stockload.Close.values, \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                                                       fastk_period=9, slowk_period=3, slowk_matype=0, slowd_period=3,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                                       slowd_matype=0)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    df_stockload[&#39;J&#39;] = 3 * df_stockload[&#39;K&#39;] - 2 * df_stockload[&#39;D&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KDJ.plot(np.arange(0, len(df_stockload.index)), df_stockload[&#39;K&#39;], &#39;blue&#39;, label=&#39;K&#39;)  # K</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KDJ.plot(np.arange(0, len(df_stockload.index)), df_stockload[&#39;D&#39;], &#39;g--&#39;, label=&#39;D&#39;)  # D</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KDJ.plot(np.arange(0, len(df_stockload.index)), df_stockload[&#39;J&#39;], &#39;r-&#39;, label=&#39;J&#39;)  # J</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KDJ.legend(loc=&#39;best&#39;, shadow=True, fontsize=&#39;10&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KDJ.set_ylabel(u&quot;KDJ&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KDJ.set_xlabel(&quot;\u65E5\u671F&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KDJ.set_xlim(0, len(df_stockload.index))  # \u8BBE\u7F6E\u4E00\u4E0Bx\u8F74\u7684\u8303\u56F4</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KDJ.set_xticks(range(0, len(df_stockload.index), 15))  # X\u8F74\u523B\u5EA6\u8BBE\u5B9A \u6BCF15\u5929\u6807\u4E00\u4E2A\u65E5\u671F</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph_KDJ.set_xticklabels(</span></span>
<span class="line"><span style="color:#A6ACCD;">        [df_stockload.index.strftime(&#39;%Y-%m-%d&#39;)[index] for index in graph_KDJ.get_xticks()])  # \u6807\u7B7E\u8BBE\u7F6E\u4E3A\u65E5\u671F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # X-\u8F74\u6BCF\u4E2Aticker\u6807\u7B7E\u90FD\u5411\u53F3\u503E\u659C45\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">    for label in graph_KAV.xaxis.get_ticklabels():</span></span>
<span class="line"><span style="color:#A6ACCD;">        label.set_visible(False)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for label in graph_MACD.xaxis.get_ticklabels():</span></span>
<span class="line"><span style="color:#A6ACCD;">        label.set_visible(False)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for label in graph_KDJ.xaxis.get_ticklabels():</span></span>
<span class="line"><span style="color:#A6ACCD;">        label.set_rotation(45)</span></span>
<span class="line"><span style="color:#A6ACCD;">        label.set_fontsize(10)  # \u8BBE\u7F6E\u6807\u7B7E\u5B57\u4F53</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    plt.show()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u5C0F\u8282\u6211\u4EEC\u5C06\u5206\u65F6\u660E\u7EC6\u6570\u636E\u8F6C\u6362\u4E3A\u5404\u4E2A\u4E0D\u540C\u5468\u671F\u4E0B\u7684\u6570\u636E\uFF0C\u8FD9\u6709\u52A9\u4E8E\u6211\u4EEC\u66F4\u7075\u6D3B\u5730\u53BB\u63D0\u53D6\u548C\u6316\u6398\u6211\u4EEC\u6240\u9700\u7684\u884C\u60C5\u4FE1\u606F\u3002</p>`,17),o=[e];function c(t,r,i,A,C,d){return n(),a("div",null,o)}const y=s(p,[["render",c]]);export{D as __pageData,y as default};
