import{_ as s,c as n,o as a,d as l}from"./app.e5528619.js";const u=JSON.parse('{"title":"\u5E94\u7528 7-\u4E00\u6BDB\u4E0D\u62D4 \u2014\u2014 \u6F0F\u6597\u9650\u6D41","description":"","frontmatter":{},"headers":[{"level":2,"title":"Redis-Cell","slug":"redis-cell","link":"#redis-cell","children":[]},{"level":2,"title":"\u601D\u8003","slug":"\u601D\u8003","link":"#\u601D\u8003","children":[]},{"level":2,"title":"\u62D3\u5C55\u9605\u8BFB","slug":"\u62D3\u5C55\u9605\u8BFB","link":"#\u62D3\u5C55\u9605\u8BFB","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u5E94\u7528 7-\u4E00\u6BDB\u4E0D\u62D4 \u2014\u2014 \u6F0F\u6597\u9650\u6D41.md"}'),p={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u5E94\u7528 7-\u4E00\u6BDB\u4E0D\u62D4 \u2014\u2014 \u6F0F\u6597\u9650\u6D41.md"},e=l(`<h1 id="\u5E94\u7528-7-\u4E00\u6BDB\u4E0D\u62D4-\u2014\u2014-\u6F0F\u6597\u9650\u6D41" tabindex="-1">\u5E94\u7528 7-\u4E00\u6BDB\u4E0D\u62D4 \u2014\u2014 \u6F0F\u6597\u9650\u6D41 <a class="header-anchor" href="#\u5E94\u7528-7-\u4E00\u6BDB\u4E0D\u62D4-\u2014\u2014-\u6F0F\u6597\u9650\u6D41" aria-hidden="true">#</a></h1><hr><h1 id="\u5E94\u7528-7\uFF1A\u4E00\u6BDB\u4E0D\u62D4-\u2014\u2014-\u6F0F\u6597\u9650\u6D41" tabindex="-1">\u5E94\u7528 7\uFF1A\u4E00\u6BDB\u4E0D\u62D4 \u2014\u2014 \u6F0F\u6597\u9650\u6D41 <a class="header-anchor" href="#\u5E94\u7528-7\uFF1A\u4E00\u6BDB\u4E0D\u62D4-\u2014\u2014-\u6F0F\u6597\u9650\u6D41" aria-hidden="true">#</a></h1><p>\u6F0F\u6597\u9650\u6D41\u662F\u6700\u5E38\u7528\u7684\u9650\u6D41\u65B9\u6CD5\u4E4B\u4E00\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u8FD9\u4E2A\u7B97\u6CD5\u7684\u7075\u611F\u6E90\u4E8E\u6F0F\u6597\uFF08funnel\uFF09\u7684\u7ED3\u6784\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/10/164847a37cfcea2e~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6F0F\u6597\u7684\u5BB9\u91CF\u662F\u6709\u9650\u7684\uFF0C\u5982\u679C\u5C06\u6F0F\u5634\u5835\u4F4F\uFF0C\u7136\u540E\u4E00\u76F4\u5F80\u91CC\u9762\u704C\u6C34\uFF0C\u5B83\u5C31\u4F1A\u53D8\u6EE1\uFF0C\u76F4\u81F3\u518D\u4E5F\u88C5\u4E0D\u8FDB\u53BB\u3002\u5982\u679C\u5C06\u6F0F\u5634\u653E\u5F00\uFF0C\u6C34\u5C31\u4F1A\u5F80\u4E0B\u6D41\uFF0C\u6D41\u8D70\u4E00\u90E8\u5206\u4E4B\u540E\uFF0C\u5C31\u53C8\u53EF\u4EE5\u7EE7\u7EED\u5F80\u91CC\u9762\u704C\u6C34\u3002\u5982\u679C\u6F0F\u5634\u6D41\u6C34\u7684\u901F\u7387\u5927\u4E8E\u704C\u6C34\u7684\u901F\u7387\uFF0C\u90A3\u4E48\u6F0F\u6597\u6C38\u8FDC\u90FD\u88C5\u4E0D\u6EE1\u3002\u5982\u679C\u6F0F\u5634\u6D41\u6C34\u901F\u7387\u5C0F\u4E8E\u704C\u6C34\u7684\u901F\u7387\uFF0C\u90A3\u4E48\u4E00\u65E6\u6F0F\u6597\u6EE1\u4E86\uFF0C\u704C\u6C34\u5C31\u9700\u8981\u6682\u505C\u5E76\u7B49\u5F85\u6F0F\u6597\u817E\u7A7A\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/11/16487813367a459d~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6240\u4EE5\uFF0C\u6F0F\u6597\u7684\u5269\u4F59\u7A7A\u95F4\u5C31\u4EE3\u8868\u7740\u5F53\u524D\u884C\u4E3A\u53EF\u4EE5\u6301\u7EED\u8FDB\u884C\u7684\u6570\u91CF\uFF0C\u6F0F\u5634\u7684\u6D41\u6C34\u901F\u7387\u4EE3\u8868\u7740\u7CFB\u7EDF\u5141\u8BB8\u8BE5\u884C\u4E3A\u7684\u6700\u5927\u9891\u7387\u3002\u4E0B\u9762\u6211\u4EEC\u4F7F\u7528\u4EE3\u7801\u6765\u63CF\u8FF0\u5355\u673A\u6F0F\u6597\u7B97\u6CD5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># coding: utf8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import time</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Funnel(object):</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self, capacity, leaking_rate):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.capacity = capacity  # \u6F0F\u6597\u5BB9\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.leaking_rate = leaking_rate  # \u6F0F\u5634\u6D41\u6C34\u901F\u7387</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.left_quota = capacity  # \u6F0F\u6597\u5269\u4F59\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.leaking_ts = time.time()  # \u4E0A\u4E00\u6B21\u6F0F\u6C34\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def make_space(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        now_ts = time.time()</span></span>
<span class="line"><span style="color:#A6ACCD;">        delta_ts = now_ts - self.leaking_ts  # \u8DDD\u79BB\u4E0A\u4E00\u6B21\u6F0F\u6C34\u8FC7\u53BB\u4E86\u591A\u4E45</span></span>
<span class="line"><span style="color:#A6ACCD;">        delta_quota = delta_ts * self.leaking_rate  # \u53C8\u53EF\u4EE5\u817E\u51FA\u4E0D\u5C11\u7A7A\u95F4\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">        if delta_quota &lt; 1:  # \u817E\u7684\u7A7A\u95F4\u592A\u5C11\uFF0C\u90A3\u5C31\u7B49\u4E0B\u6B21\u5427</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.left_quota += delta_quota  # \u589E\u52A0\u5269\u4F59\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.leaking_ts = now_ts  # \u8BB0\u5F55\u6F0F\u6C34\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">        if self.left_quota &gt; self.capacity:  # \u5269\u4F59\u7A7A\u95F4\u4E0D\u5F97\u9AD8\u4E8E\u5BB9\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">            self.left_quota = self.capacity</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def watering(self, quota):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.make_space()</span></span>
<span class="line"><span style="color:#A6ACCD;">        if self.left_quota &gt;= quota:  # \u5224\u65AD\u5269\u4F59\u7A7A\u95F4\u662F\u5426\u8DB3\u591F</span></span>
<span class="line"><span style="color:#A6ACCD;">            self.left_quota -= quota</span></span>
<span class="line"><span style="color:#A6ACCD;">            return True</span></span>
<span class="line"><span style="color:#A6ACCD;">        return False</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">funnels = {}  # \u6240\u6709\u7684\u6F0F\u6597</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># capacity  \u6F0F\u6597\u5BB9\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;"># leaking_rate \u6F0F\u5634\u6D41\u6C34\u901F\u7387 quota/s</span></span>
<span class="line"><span style="color:#A6ACCD;">def is_action_allowed(</span></span>
<span class="line"><span style="color:#A6ACCD;">        user_id, action_key, capacity, leaking_rate):</span></span>
<span class="line"><span style="color:#A6ACCD;">    key = &#39;%s:%s&#39; % (user_id, action_key)</span></span>
<span class="line"><span style="color:#A6ACCD;">    funnel = funnels.get(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if not funnel:</span></span>
<span class="line"><span style="color:#A6ACCD;">        funnel = Funnel(capacity, leaking_rate)</span></span>
<span class="line"><span style="color:#A6ACCD;">        funnels[key] = funnel</span></span>
<span class="line"><span style="color:#A6ACCD;">    return funnel.watering(1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for i in range(20):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print is_action_allowed(&#39;laoqian&#39;, &#39;reply&#39;, 15, 0.5)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u518D\u63D0\u4F9B\u4E00\u4E2A Java \u7248\u672C\u7684\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">public class FunnelRateLimiter {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  static class Funnel {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int capacity;</span></span>
<span class="line"><span style="color:#A6ACCD;">    float leakingRate;</span></span>
<span class="line"><span style="color:#A6ACCD;">    int leftQuota;</span></span>
<span class="line"><span style="color:#A6ACCD;">    long leakingTs;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public Funnel(int capacity, float leakingRate) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.capacity = capacity;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.leakingRate = leakingRate;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.leftQuota = capacity;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.leakingTs = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    void makeSpace() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      long nowTs = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#A6ACCD;">      long deltaTs = nowTs - leakingTs;</span></span>
<span class="line"><span style="color:#A6ACCD;">      int deltaQuota = (int) (deltaTs * leakingRate);</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (deltaQuota &lt; 0) { // \u95F4\u9694\u65F6\u95F4\u592A\u957F\uFF0C\u6574\u6570\u6570\u5B57\u8FC7\u5927\u6EA2\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.leftQuota = capacity;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.leakingTs = nowTs;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (deltaQuota &lt; 1) { // \u817E\u51FA\u7A7A\u95F4\u592A\u5C0F\uFF0C\u6700\u5C0F\u5355\u4F4D\u662F1</span></span>
<span class="line"><span style="color:#A6ACCD;">        return;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.leftQuota += deltaQuota;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.leakingTs = nowTs;</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.leftQuota &gt; this.capacity) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.leftQuota = this.capacity;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    boolean watering(int quota) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      makeSpace();</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.leftQuota &gt;= quota) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.leftQuota -= quota;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private Map&lt;String, Funnel&gt; funnels = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public boolean isActionAllowed(String userId, String actionKey, int capacity, float leakingRate) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    String key = String.format(&quot;%s:%s&quot;, userId, actionKey);</span></span>
<span class="line"><span style="color:#A6ACCD;">    Funnel funnel = funnels.get(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (funnel == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      funnel = new Funnel(capacity, leakingRate);</span></span>
<span class="line"><span style="color:#A6ACCD;">      funnels.put(key, funnel);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return funnel.watering(1); // \u9700\u89811\u4E2Aquota</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Funnel \u5BF9\u8C61\u7684 make_space \u65B9\u6CD5\u662F\u6F0F\u6597\u7B97\u6CD5\u7684\u6838\u5FC3\uFF0C\u5176\u5728\u6BCF\u6B21\u704C\u6C34\u524D\u90FD\u4F1A\u88AB\u8C03\u7528\u4EE5\u89E6\u53D1\u6F0F\u6C34\uFF0C\u7ED9\u6F0F\u6597\u817E\u51FA\u7A7A\u95F4\u6765\u3002\u80FD\u817E\u51FA\u591A\u5C11\u7A7A\u95F4\u53D6\u51B3\u4E8E\u8FC7\u53BB\u4E86\u591A\u4E45\u4EE5\u53CA\u6D41\u6C34\u7684\u901F\u7387\u3002Funnel \u5BF9\u8C61\u5360\u636E\u7684\u7A7A\u95F4\u5927\u5C0F\u4E0D\u518D\u548C\u884C\u4E3A\u7684\u9891\u7387\u6210\u6B63\u6BD4\uFF0C\u5B83\u7684\u7A7A\u95F4\u5360\u7528\u662F\u4E00\u4E2A\u5E38\u91CF\u3002</p><p>\u95EE\u9898\u6765\u4E86\uFF0C\u5206\u5E03\u5F0F\u7684\u6F0F\u6597\u7B97\u6CD5\u8BE5\u5982\u4F55\u5B9E\u73B0\uFF1F\u80FD\u4E0D\u80FD\u4F7F\u7528 Redis \u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784\u6765\u641E\u5B9A\uFF1F</p><p>\u6211\u4EEC\u89C2\u5BDF Funnel \u5BF9\u8C61\u7684\u51E0\u4E2A\u5B57\u6BB5\uFF0C\u6211\u4EEC\u53D1\u73B0\u53EF\u4EE5\u5C06 Funnel \u5BF9\u8C61\u7684\u5185\u5BB9\u6309\u5B57\u6BB5\u5B58\u50A8\u5230\u4E00\u4E2A hash \u7ED3\u6784\u4E2D\uFF0C\u704C\u6C34\u7684\u65F6\u5019\u5C06 hash \u7ED3\u6784\u7684\u5B57\u6BB5\u53D6\u51FA\u6765\u8FDB\u884C\u903B\u8F91\u8FD0\u7B97\u540E\uFF0C\u518D\u5C06\u65B0\u503C\u56DE\u586B\u5230 hash \u7ED3\u6784\u4E2D\u5C31\u5B8C\u6210\u4E86\u4E00\u6B21\u884C\u4E3A\u9891\u5EA6\u7684\u68C0\u6D4B\u3002</p><p>\u4F46\u662F\u6709\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u65E0\u6CD5\u4FDD\u8BC1\u6574\u4E2A\u8FC7\u7A0B\u7684\u539F\u5B50\u6027\u3002\u4ECE hash \u7ED3\u6784\u4E2D\u53D6\u503C\uFF0C\u7136\u540E\u5728\u5185\u5B58\u91CC\u8FD0\u7B97\uFF0C\u518D\u56DE\u586B\u5230 hash \u7ED3\u6784\uFF0C\u8FD9\u4E09\u4E2A\u8FC7\u7A0B\u65E0\u6CD5\u539F\u5B50\u5316\uFF0C\u610F\u5473\u7740\u9700\u8981\u8FDB\u884C\u9002\u5F53\u7684\u52A0\u9501\u63A7\u5236\u3002\u800C\u4E00\u65E6\u52A0\u9501\uFF0C\u5C31\u610F\u5473\u7740\u4F1A\u6709\u52A0\u9501\u5931\u8D25\uFF0C\u52A0\u9501\u5931\u8D25\u5C31\u9700\u8981\u9009\u62E9\u91CD\u8BD5\u6216\u8005\u653E\u5F03\u3002</p><p>\u5982\u679C\u91CD\u8BD5\u7684\u8BDD\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\u3002\u5982\u679C\u653E\u5F03\u7684\u8BDD\uFF0C\u5C31\u4F1A\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u3002\u540C\u65F6\uFF0C\u4EE3\u7801\u7684\u590D\u6742\u5EA6\u4E5F\u8DDF\u7740\u5347\u9AD8\u5F88\u591A\u3002\u8FD9\u771F\u662F\u4E2A\u8270\u96BE\u7684\u9009\u62E9\uFF0C\u6211\u4EEC\u8BE5\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1FRedis-Cell \u6551\u661F\u6765\u4E86\uFF01</p><h2 id="redis-cell" tabindex="-1">Redis-Cell <a class="header-anchor" href="#redis-cell" aria-hidden="true">#</a></h2><p>Redis 4.0 \u63D0\u4F9B\u4E86\u4E00\u4E2A\u9650\u6D41 Redis \u6A21\u5757\uFF0C\u5B83\u53EB redis-cell\u3002\u8BE5\u6A21\u5757\u4E5F\u4F7F\u7528\u4E86\u6F0F\u6597\u7B97\u6CD5\uFF0C\u5E76\u63D0\u4F9B\u4E86\u539F\u5B50\u7684\u9650\u6D41\u6307\u4EE4\u3002\u6709\u4E86\u8FD9\u4E2A\u6A21\u5757\uFF0C\u9650\u6D41\u95EE\u9898\u5C31\u975E\u5E38\u7B80\u5355\u4E86\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/11/1648780927d6f4ec~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8BE5\u6A21\u5757\u53EA\u67091\u6761\u6307\u4EE4<code>cl.throttle</code>\uFF0C\u5B83\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u90FD\u7565\u663E\u590D\u6742\uFF0C\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u8FD9\u4E2A\u6307\u4EE4\u5177\u4F53\u8BE5\u5982\u4F55\u4F7F\u7528\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; cl.throttle laoqian:reply 15 30 60 1</span></span>
<span class="line"><span style="color:#A6ACCD;">                      \u25B2     \u25B2  \u25B2  \u25B2  \u25B2</span></span>
<span class="line"><span style="color:#A6ACCD;">                      |     |  |  |  \u2514\u2500\u2500\u2500\u2500\u2500 need 1 quota (\u53EF\u9009\u53C2\u6570\uFF0C\u9ED8\u8BA4\u503C\u4E5F\u662F1)</span></span>
<span class="line"><span style="color:#A6ACCD;">                      |     |  \u2514\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500 30 operations / 60 seconds \u8FD9\u662F\u6F0F\u6C34\u901F\u7387</span></span>
<span class="line"><span style="color:#A6ACCD;">                      |     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 15 capacity \u8FD9\u662F\u6F0F\u6597\u5BB9\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">                      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 key laoqian</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u8FD9\u4E2A\u6307\u4EE4\u7684\u610F\u601D\u662F\u5141\u8BB8\u300C\u7528\u6237\u8001\u94B1\u56DE\u590D\u884C\u4E3A\u300D\u7684\u9891\u7387\u4E3A\u6BCF 60s \u6700\u591A 30 \u6B21(\u6F0F\u6C34\u901F\u7387)\uFF0C\u6F0F\u6597\u7684\u521D\u59CB\u5BB9\u91CF\u4E3A 15\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E00\u5F00\u59CB\u53EF\u4EE5\u8FDE\u7EED\u56DE\u590D 15 \u4E2A\u5E16\u5B50\uFF0C\u7136\u540E\u624D\u5F00\u59CB\u53D7\u6F0F\u6C34\u901F\u7387\u7684\u5F71\u54CD\u3002\u6211\u4EEC\u770B\u5230\u8FD9\u4E2A\u6307\u4EE4\u4E2D\u6F0F\u6C34\u901F\u7387\u53D8\u6210\u4E86 2 \u4E2A\u53C2\u6570\uFF0C\u66FF\u4EE3\u4E86\u4E4B\u524D\u7684\u5355\u4E2A\u6D6E\u70B9\u6570\u3002\u7528\u4E24\u4E2A\u53C2\u6570\u76F8\u9664\u7684\u7ED3\u679C\u6765\u8868\u8FBE\u6F0F\u6C34\u901F\u7387\u76F8\u5BF9\u5355\u4E2A\u6D6E\u70B9\u6570\u8981\u66F4\u52A0\u76F4\u89C2\u4E00\u4E9B\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; cl.throttle laoqian:reply 15 30 60</span></span>
<span class="line"><span style="color:#A6ACCD;">1) (integer) 0   # 0 \u8868\u793A\u5141\u8BB8\uFF0C1\u8868\u793A\u62D2\u7EDD</span></span>
<span class="line"><span style="color:#A6ACCD;">2) (integer) 15  # \u6F0F\u6597\u5BB9\u91CFcapacity</span></span>
<span class="line"><span style="color:#A6ACCD;">3) (integer) 14  # \u6F0F\u6597\u5269\u4F59\u7A7A\u95F4left_quota</span></span>
<span class="line"><span style="color:#A6ACCD;">4) (integer) -1  # \u5982\u679C\u62D2\u7EDD\u4E86\uFF0C\u9700\u8981\u591A\u957F\u65F6\u95F4\u540E\u518D\u8BD5(\u6F0F\u6597\u6709\u7A7A\u95F4\u4E86\uFF0C\u5355\u4F4D\u79D2)</span></span>
<span class="line"><span style="color:#A6ACCD;">5) (integer) 2   # \u591A\u957F\u65F6\u95F4\u540E\uFF0C\u6F0F\u6597\u5B8C\u5168\u7A7A\u51FA\u6765(left_quota==capacity\uFF0C\u5355\u4F4D\u79D2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u6267\u884C\u9650\u6D41\u6307\u4EE4\u65F6\uFF0C\u5982\u679C\u88AB\u62D2\u7EDD\u4E86\uFF0C\u5C31\u9700\u8981\u4E22\u5F03\u6216\u91CD\u8BD5\u3002cl.throttle \u6307\u4EE4\u8003\u8651\u7684\u975E\u5E38\u5468\u5230\uFF0C\u8FDE\u91CD\u8BD5\u65F6\u95F4\u90FD\u5E2E\u4F60\u7B97\u597D\u4E86\uFF0C\u76F4\u63A5\u53D6\u8FD4\u56DE\u7ED3\u679C\u6570\u7EC4\u7684\u7B2C\u56DB\u4E2A\u503C\u8FDB\u884C sleep \u5373\u53EF\uFF0C\u5982\u679C\u4E0D\u60F3\u963B\u585E\u7EBF\u7A0B\uFF0C\u4E5F\u53EF\u4EE5\u5F02\u6B65\u5B9A\u65F6\u4EFB\u52A1\u6765\u91CD\u8BD5\u3002</p><h2 id="\u601D\u8003" tabindex="-1">\u601D\u8003 <a class="header-anchor" href="#\u601D\u8003" aria-hidden="true">#</a></h2><p>\u6F0F\u6597\u9650\u6D41\u6A21\u5757\u9664\u4E86\u5E94\u7528\u4E8E UGC\uFF0C\u8FD8\u80FD\u5E94\u7528\u4E8E\u54EA\u4E9B\u5730\u65B9\uFF1F</p><h2 id="\u62D3\u5C55\u9605\u8BFB" tabindex="-1">\u62D3\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u62D3\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><p><strong>1. \u300ARedis-Cell \u4F5C\u8005 Itamar Haber \u5176\u4EBA\u8DA3\u4E8B\u300B</strong></p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/11/164872dc531f1a48~tplv-t2oaga2asx-image.image" alt=""></p><p>Redis-Cell \u4F5C\u8005 Itamar Haber \u7684\u4ECB\u7ECD\u5F88\u6709\u610F\u601D\u2014\u2014\u4E00\u4E2A\u300C\u81EA\u5C01\u300D\u7684 Redis \u6781\u5BA2\u3002\u8FD8\u6709\uFF0CCell \u8FD9\u4E2A\u6A21\u5757\u5C45\u7136\u662F\u7528 Rust \u7F16\u5199\u7684\u3002\u2014\u2014 \u539F\u6765 Redis \u6A21\u5757\u53EF\u4EE5\u4F7F\u7528 Rust \u7F16\u5199\uFF1F\uFF01</p><p>\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u4E0D\u7528\u53BB\u641E\u53E4\u8001\u7684 C \u8BED\u8A00\u4E86\u3002\u8001\u94B1\u8868\u793A\u8981\u91CD\u65B0\u62FE\u8D77\u653E\u5F03\u5F88\u4E45\u7684 Rust \u8BED\u8A00\u3002\u54CE\uFF0C\u5E72\u7A0B\u5E8F\u5458\u8FD9\u4E00\u884C\uFF0C\u771F\u662F\u8981\u6D3B\u5230\u8001\uFF0C\u5B66\u5230\u6B7B\u554A\uFF01\u{1F622}</p>`,31),t=[e];function c(o,i,r,C,A,y){return a(),n("div",null,t)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
