import{_ as s,c as n,o as a,d as l}from"./app.e5528619.js";const D=JSON.parse('{"title":"\u62D3\u5C55 7-\u5999\u624B\u4EC1\u5FC3 \u2014\u2014 \u4F18\u96C5\u5730\u4F7F\u7528 Jedis","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u91CD\u8BD5","slug":"\u91CD\u8BD5","link":"#\u91CD\u8BD5","children":[]},{"level":2,"title":"\u4F5C\u4E1A","slug":"\u4F5C\u4E1A","link":"#\u4F5C\u4E1A","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u62D3\u5C55 7-\u5999\u624B\u4EC1\u5FC3 \u2014\u2014 \u4F18\u96C5\u5730\u4F7F\u7528 Jedis.md"}'),p={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u62D3\u5C55 7-\u5999\u624B\u4EC1\u5FC3 \u2014\u2014 \u4F18\u96C5\u5730\u4F7F\u7528 Jedis.md"},e=l(`<h1 id="\u62D3\u5C55-7-\u5999\u624B\u4EC1\u5FC3-\u2014\u2014-\u4F18\u96C5\u5730\u4F7F\u7528-jedis" tabindex="-1">\u62D3\u5C55 7-\u5999\u624B\u4EC1\u5FC3 \u2014\u2014 \u4F18\u96C5\u5730\u4F7F\u7528 Jedis <a class="header-anchor" href="#\u62D3\u5C55-7-\u5999\u624B\u4EC1\u5FC3-\u2014\u2014-\u4F18\u96C5\u5730\u4F7F\u7528-jedis" aria-hidden="true">#</a></h1><hr><h1 id="\u62D3\u5C55-7\uFF1A\u5999\u624B\u4EC1\u5FC3-\u2014\u2014-\u4F18\u96C5\u5730\u4F7F\u7528-jedis" tabindex="-1">\u62D3\u5C55 7\uFF1A\u5999\u624B\u4EC1\u5FC3 \u2014\u2014 \u4F18\u96C5\u5730\u4F7F\u7528 Jedis <a class="header-anchor" href="#\u62D3\u5C55-7\uFF1A\u5999\u624B\u4EC1\u5FC3-\u2014\u2014-\u4F18\u96C5\u5730\u4F7F\u7528-jedis" aria-hidden="true">#</a></h1><p>\u672C\u8282\u9762\u5411 Java \u7528\u6237\uFF0C\u4E3B\u9898\u662F\u5982\u4F55\u4F18\u96C5\u5730\u4F7F\u7528 Jedis \u7F16\u5199\u5E94\u7528\u7A0B\u5E8F\uFF0C\u65E2\u53EF\u4EE5\u8BA9\u4EE3\u7801\u770B\u8D77\u6765\u8D4F\u5FC3\u60A6\u76EE\uFF0C\u53C8\u53EF\u4EE5\u907F\u514D\u4F7F\u7528\u8005\u72AF\u9519\u3002</p><p>Jedis \u662F Java \u7528\u6237\u6700\u5E38\u7528\u7684 Redis \u5F00\u6E90\u5BA2\u6237\u7AEF\u3002\u5B83\u975E\u5E38\u5C0F\u5DE7\uFF0C\u5B9E\u73B0\u539F\u7406\u4E5F\u5F88\u7B80\u5355\uFF0C\u6700\u91CD\u8981\u7684\u662F\u5F88\u7A33\u5B9A\uFF0C\u800C\u4E14\u4F7F\u7528\u7684\u65B9\u6CD5\u53C2\u6570\u540D\u79F0\u548C\u5B98\u65B9\u7684\u6587\u6863\u975E\u5E38 match\uFF0C\u5982\u679C\u6709\u4EC0\u4E48\u65B9\u6CD5\u4E0D\u4F1A\u7528\uFF0C\u76F4\u63A5\u53C2\u8003\u5B98\u65B9\u7684\u6307\u4EE4\u6587\u6863\u9605\u8BFB\u4E00\u4E0B\u5C31\u4F1A\u4E86\uFF0C\u7701\u53BB\u4E86\u975E\u5FC5\u8981\u7684\u91CD\u590D\u5B66\u4E60\u6210\u672C\u3002\u4E0D\u50CF\u6709\u4E9B\u5BA2\u6237\u7AEF\u628A\u65B9\u6CD5\u540D\u79F0\u90FD\u6362\u4E86\uFF0C\u867D\u7136\u8868\u9762\u4E0A\u7ED9\u8BFB\u8005\u5E26\u6765\u4E86\u4FBF\u6377\uFF0C\u4F46\u662F\u9700\u8981\u6328\u4E2A\u91CD\u65B0\u5B66\u4E60\u8FD9\u4E9B API\uFF0C\u63D0\u9AD8\u4E86\u5B66\u4E60\u6210\u672C\u3002</p><p>Java \u7A0B\u5E8F\u4E00\u822C\u90FD\u662F\u591A\u7EBF\u7A0B\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u610F\u5473\u7740\u6211\u4EEC\u5F88\u5C11\u76F4\u63A5\u4F7F\u7528 Jedis\uFF0C\u800C\u662F\u8981\u7528\u5230 Jedis \u7684\u8FDE\u63A5\u6C60 \u2014\u2014 JedisPool\u3002\u540C\u65F6\u56E0\u4E3A Jedis \u5BF9\u8C61\u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u5F53\u6211\u4EEC\u8981\u4F7F\u7528 Jedis \u5BF9\u8C61\u65F6\uFF0C\u9700\u8981\u4ECE\u8FDE\u63A5\u6C60\u4E2D\u62FF\u51FA\u4E00\u4E2A Jedis \u5BF9\u8C61\u72EC\u5360\uFF0C\u4F7F\u7528\u5B8C\u6BD5\u540E\u518D\u5C06\u8FD9\u4E2A\u5BF9\u8C61\u8FD8\u7ED9\u8FDE\u63A5\u6C60\u3002</p><p>\u7528\u4EE3\u7801\u8868\u793A\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import redis.clients.jedis.Jedis;</span></span>
<span class="line"><span style="color:#A6ACCD;">import redis.clients.jedis.JedisPool;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public class JedisTest {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    JedisPool pool = new JedisPool();</span></span>
<span class="line"><span style="color:#A6ACCD;">    Jedis jedis = pool.getResource(); // \u62FF\u51FA Jedis \u94FE\u63A5\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    doSomething(jedis);</span></span>
<span class="line"><span style="color:#A6ACCD;">    jedis.close(); // \u5F52\u8FD8\u94FE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private static void doSomething(Jedis jedis) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // code it here</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u6709\u4E2A\u95EE\u9898\uFF0C\u5982\u679C <code>doSomething</code> \u65B9\u6CD5\u629B\u51FA\u4E86\u5F02\u5E38\u7684\u8BDD\uFF0C\u4ECE\u8FDE\u63A5\u6C60\u4E2D\u62FF\u51FA\u6765\u7684 Jedis \u5BF9\u8C61\u5C06\u65E0\u6CD5\u5F52\u8FD8\u7ED9\u8FDE\u63A5\u6C60\u3002\u5982\u679C\u8FD9\u6837\u7684\u5F02\u5E38\u53D1\u751F\u4E86\u597D\u51E0\u6B21\uFF0C\u8FDE\u63A5\u6C60\u4E2D\u7684\u6240\u6709\u94FE\u63A5\u90FD\u88AB\u6301\u4E45\u5360\u7528\u4E86\uFF0C\u65B0\u7684\u8BF7\u6C42\u8FC7\u6765\u65F6\u5C31\u4F1A\u963B\u585E\u7B49\u5F85\u7A7A\u95F2\u7684\u94FE\u63A5\uFF0C\u8FD9\u6837\u7684\u963B\u585E\u4E00\u822C\u4F1A\u76F4\u63A5\u5BFC\u81F4\u5E94\u7528\u7A0B\u5E8F\u5361\u6B7B\u3002</p><p>\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u7A0B\u5E8F\u5458\u9700\u8981\u5728\u4F7F\u7528 JedisPool \u91CC\u9762\u7684 Jedis \u94FE\u63A5\u65F6\uFF0C\u5E94\u8BE5\u4F7F\u7528 <code>try-with-resource</code> \u8BED\u53E5\u6765\u4FDD\u62A4 Jedis \u5BF9\u8C61\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import redis.clients.jedis.Jedis;</span></span>
<span class="line"><span style="color:#A6ACCD;">import redis.clients.jedis.JedisPool;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public class JedisTest {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    JedisPool pool = new JedisPool();</span></span>
<span class="line"><span style="color:#A6ACCD;">    try (Jedis jedis = pool.getResource()) { // \u7528\u5B8C\u81EA\u52A8 close</span></span>
<span class="line"><span style="color:#A6ACCD;">      doSomething(jedis);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private static void doSomething(Jedis jedis) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // code it here</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837 Jedis \u5BF9\u8C61\u80AF\u5B9A\u4F1A\u5F52\u8FD8\u7ED9\u8FDE\u63A5\u6C60 (\u6B7B\u5FAA\u73AF\u9664\u5916)\uFF0C\u907F\u514D\u5E94\u7528\u7A0B\u5E8F\u5361\u6B7B\u7684\u60E8\u5267\u53D1\u751F\u3002</p><p>\u4F46\u662F\u5F53\u4E00\u4E2A\u56E2\u961F\u591F\u5927\u7684\u65F6\u5019\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u7684\u7A0B\u5E8F\u5458\u90FD\u4F1A\u975E\u5E38\u6709\u7ECF\u9A8C\uFF0C\u4ED6\u4EEC\u53EF\u80FD\u56E0\u4E3A\u5404\u79CD\u539F\u56E0\u5FD8\u8BB0\u4E86\u4F7F\u7528 <code>try-with-resource</code> \u8BED\u53E5\uFF0C\u60E8\u5267\u5C31\u4F1A\u7A81\u7136\u5192\u51FA\u6765\u8BA9\u8FD0\u7EF4\u4EBA\u5458\u63AA\u624B\u4E0D\u53CA\u3002\u6211\u4EEC\u9700\u8981\u5728\u4EE3\u7801\u4E0A\u52A0\u4E0A\u4E00\u5C42\u786C\u7EA6\u675F\uFF0C\u901A\u8FC7\u8FD9\u5C42\u7EA6\u675F\uFF0C\u5F53\u7A0B\u5E8F\u5458\u60F3\u8981\u8BBF\u95EE Jedis \u5BF9\u8C61\u65F6\uFF0C\u4E0D\u4F1A\u518D\u51FA\u73B0\u4F7F\u7528\u4E86 Jedis \u5BF9\u8C61\u800C\u4E0D\u5F52\u8FD8\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import redis.clients.jedis.Jedis;</span></span>
<span class="line"><span style="color:#A6ACCD;">import redis.clients.jedis.JedisPool;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface CallWithJedis {</span></span>
<span class="line"><span style="color:#A6ACCD;">  public void call(Jedis jedis);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class RedisPool {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private JedisPool pool;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public RedisPool() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.pool = new JedisPool();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public void execute(CallWithJedis caller) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try (Jedis jedis = pool.getResource()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      caller.call(jedis);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public class JedisTest {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    RedisPool redis = new RedisPool();</span></span>
<span class="line"><span style="color:#A6ACCD;">    redis.execute(new CallWithJedis() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      @Override</span></span>
<span class="line"><span style="color:#A6ACCD;">      public void call(Jedis jedis) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // do something with jedis</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u7279\u6B8A\u7684\u81EA\u5B9A\u4E49\u7684 RedisPool \u5BF9\u8C61\u5C06 JedisPool \u5BF9\u8C61\u9690\u85CF\u8D77\u6765\uFF0C\u907F\u514D\u7A0B\u5E8F\u5458\u76F4\u63A5\u4F7F\u7528\u5B83\u7684 <code>getResource</code> \u65B9\u6CD5\u800C\u5FD8\u8BB0\u4E86\u5F52\u8FD8\u3002\u7A0B\u5E8F\u5458\u4F7F\u7528 RedisPool \u5BF9\u8C61\u65F6\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A\u56DE\u8C03\u7C7B\u6765\u624D\u80FD\u4F7F\u7528 Jedis \u5BF9\u8C61\u3002</p><p>\u4F46\u662F\u6BCF\u6B21\u8BBF\u95EE Redis \u90FD\u9700\u8981\u5199\u4E00\u4E2A\u56DE\u8C03\u7C7B\uFF0C\u771F\u662F\u7279\u522B\u7E41\u7410\uFF0C\u4EE3\u7801\u4E5F\u663E\u5F97\u975E\u5E38\u81C3\u80BF\u3002\u5E78\u597D Java8 \u5E26\u6765\u4E86 Lambda \u8868\u8FBE\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 Lambda \u8868\u8FBE\u5F0F\u7B80\u5316\u4E0A\u9762\u7684\u4EE3\u7801\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">public class JedisTest {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Redis redis = new Redis();</span></span>
<span class="line"><span style="color:#A6ACCD;">    redis.execute(jedis -&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // do something with jedis</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u770B\u8D77\u6765\u5C31\u7B80\u6D01\u4F18\u96C5\u591A\u4E86\u3002\u4F46\u662F\u8FD8\u6709\u4E2A\u95EE\u9898\uFF0CJava \u4E0D\u5141\u8BB8\u5728\u95ED\u5305\u91CC\u4FEE\u6539\u95ED\u5305\u5916\u9762\u7684\u53D8\u91CF\u3002\u6BD4\u5982\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u6211\u4EEC\u60F3\u4ECE Redis \u91CC\u9762\u62FF\u5230\u67D0\u4E2A zset \u5BF9\u8C61\u7684\u957F\u5EA6\uFF0C\u7F16\u8BD1\u5668\u4F1A\u76F4\u63A5\u62A5\u9519\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">public class JedisTest {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Redis redis = new Redis();</span></span>
<span class="line"><span style="color:#A6ACCD;">    long count = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    redis.execute(jedis -&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      count = jedis.zcard(&quot;codehole&quot;);  // \u6B64\u5904\u5E94\u8BE5\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(count);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7F16\u8BD1\u5668\u66B4\u9732\u51FA\u6765\u7684\u9519\u8BEF\u65F6\uFF1A<code>Local variable count defined in an enclosing scope must be final or effectively final</code>\uFF0C\u544A\u8BC9\u6211\u4EEC count \u53D8\u91CF\u5FC5\u987B\u8BBE\u7F6E\u6210 final \u7C7B\u578B\u624D\u53EF\u4EE5\u8BA9\u95ED\u5305\u6765\u8BBF\u95EE\u3002</p><p>\u5982\u679C\u8FD9\u65F6\u6211\u4EEC\u5C06 count \u8BBE\u7F6E\u6210 final \u7C7B\u578B\uFF0C\u7ED3\u679C\u7F16\u8F91\u5668\u53C8\u62A5\u9519\u4E86\uFF1A<code>The final local variable count cannot be assigned. It must be blank and not using a compound assignment</code>\uFF0C\u544A\u8BC9\u6211\u4EEC final \u7C7B\u578B\u7684\u53D8\u91CF\u5728\u95ED\u5305\u91CC\u9762\u4E0D\u80FD\u88AB\u4FEE\u6539\u3002</p><p>\u90A3\u8BE5\u600E\u4E48\u529E\u5462\uFF1F</p><p>\u8FD9\u91CC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A Holder \u7C7B\u578B\uFF0C\u5C06\u9700\u8981\u4FEE\u6539\u7684\u53D8\u91CF\u5305\u88C5\u8D77\u6765\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Holder&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  private T value;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public Holder() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public Holder(T value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.value = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public void value(T value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.value = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public T value() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return value;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public class JedisTest {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Redis redis = new Redis();</span></span>
<span class="line"><span style="color:#A6ACCD;">    Holder&lt;Long&gt; countHolder = new Holder&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">    redis.execute(jedis -&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      long count = jedis.zcard(&quot;codehole&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      countHolder.value(count);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(countHolder.value());</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6709\u4E86\u4E0A\u9762\u5B9A\u4E49\u7684 Holder \u5305\u88C5\u7C7B\uFF0C\u5C31\u53EF\u4EE5\u7ED5\u8FC7\u95ED\u5305\u5BF9\u53D8\u91CF\u4FEE\u6539\u7684\u9650\u5236\u3002\u53EA\u4E0D\u8FC7\u4EE3\u7801\u4E0A\u8981\u591A\u4E00\u5C42\u7565\u663E\u7E41\u7410\u7684\u53D8\u91CF\u5305\u88C5\u8FC7\u7A0B\u3002\u8FD9\u4E9B\u90FD\u662F\u5BF9\u7A0B\u5E8F\u5458\u7684\u786C\u7EA6\u675F\uFF0C\u4ED6\u4EEC\u5FC5\u987B\u8FD9\u4E48\u505A\u624D\u53EF\u4EE5\u5F97\u5230\u81EA\u5DF1\u60F3\u8981\u7684\u6570\u636E\u3002</p><h2 id="\u91CD\u8BD5" tabindex="-1">\u91CD\u8BD5 <a class="header-anchor" href="#\u91CD\u8BD5" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u77E5\u9053 Jedis \u9ED8\u8BA4\u6CA1\u6709\u63D0\u4F9B\u91CD\u8BD5\u673A\u5236\uFF0C\u610F\u5473\u7740\u5982\u679C\u7F51\u7EDC\u51FA\u73B0\u4E86\u6296\u52A8\uFF0C\u5C31\u4F1A\u5927\u8303\u56F4\u62A5\u9519\uFF0C\u6216\u8005\u4E00\u4E2A\u540E\u53F0\u5E94\u7528\u56E0\u4E3A\u94FE\u63A5\u8FC7\u4E8E\u7A7A\u95F2\u88AB\u670D\u52A1\u7AEF\u5F3A\u5236\u5173\u95ED\u4E86\u94FE\u63A5\uFF0C\u5F53\u91CD\u65B0\u53D1\u8D77\u65B0\u8BF7\u6C42\u65F6\u5C31\u7B2C\u4E00\u4E2A\u6307\u4EE4\u4F1A\u51FA\u9519\u3002\u800C Redis \u7684 Python \u5BA2\u6237\u7AEF redis-py \u63D0\u4F9B\u4E86\u8FD9\u79CD\u91CD\u8BD5\u673A\u5236\uFF0Credis-py \u5728\u9047\u5230\u94FE\u63A5\u9519\u8BEF\u65F6\u4F1A\u5C1D\u8BD5\u8FDB\u884C\u91CD\u8FDE\uFF0C\u7136\u540E\u518D\u91CD\u53D1\u6307\u4EE4\u3002</p><p>\u90A3\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u5728 Jedis \u4E0A\u9762\u589E\u52A0\u91CD\u8BD5\u673A\u5236\uFF0C\u8BE5\u5982\u4F55\u505A\u5462\uFF1F\u6709\u4E86\u4E0A\u9762\u7684 RedisPool \u5BF9\u8C61\uFF0C\u91CD\u8BD5\u5C31\u975E\u5E38\u5BB9\u6613\u8FDB\u884C\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Redis {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private JedisPool pool;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public Redis() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.pool = new JedisPool();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  public void execute(CallWithJedis caller) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Jedis jedis = pool.getResource();</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      caller.call(jedis);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch (JedisConnectionException e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      caller.call(jedis);  // \u91CD\u8BD5\u4E00\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">    } finally {</span></span>
<span class="line"><span style="color:#A6ACCD;">      jedis.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u6211\u4EEC\u53EA\u91CD\u8BD5\u4E86\u4E00\u6B21\uFF0C\u5982\u6709\u9700\u8981\u4E5F\u53EF\u4EE5\u91CD\u8BD5\u591A\u6B21\uFF0C\u4F46\u662F\u4E5F\u4E0D\u80FD\u65E0\u9650\u91CD\u8BD5\uFF0C\u5C31\u597D\u6BD4\u4EBA\u901D\u4E0D\u53EF\u590D\u751F\uFF0C\u8981\u8282\u54C0\u987A\u53D8\u3002</p><h2 id="\u4F5C\u4E1A" tabindex="-1">\u4F5C\u4E1A <a class="header-anchor" href="#\u4F5C\u4E1A" aria-hidden="true">#</a></h2><p>\u56FF\u4E8E\u7CBE\u529B\uFF0C\u4EE5\u4E0A\u4EE3\u7801\u5E76\u6CA1\u6709\u505A\u5230\u975E\u5E38\u7EC6\u81F4\uFF0C\u6BD4\u5982 Redis \u7684\u94FE\u63A5\u53C2\u6570\u90FD\u6CA1\u6709\u63D0\u53CA\uFF0C\u8FDE\u63A5\u6C60\u7684\u5927\u5C0F\u4EE5\u53CA\u8D85\u65F6\u53C2\u6570\u7B49\u4E5F\u6CA1\u6709\u914D\u7F6E\uFF0C\u8FD9\u4E9B\u7EC6\u8282\u5DE5\u4F5C\u5C31\u7559\u7ED9\u8BFB\u8005\u4EEC\u4F5C\u4E3A\u672C\u8282\u7684\u4F5C\u4E1A\uFF0C\u81EA\u5DF1\u52A8\u624B\u5B8C\u6210\u4E00\u4E2A\u5B8C\u5584\u7684\u5C01\u88C5\u5427\u3002</p>`,32),o=[e];function c(i,t,C,A,r,d){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
