import{_ as s,c as a,o as n,d as p}from"./app.c4f45da1.js";const d=JSON.parse('{"title":"\u5B9E\u6218\u7BC7 2-\u63A5\u53E3\u5951\u7EA6\u4E0E\u5165\u53C2\u6821\u9A8C \u2014\u2014  \u4F7F\u7528 Swagger & Joi","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528 Swagger","slug":"\u4F7F\u7528-swagger","link":"#\u4F7F\u7528-swagger","children":[{"level":3,"title":"\u4F7F\u7528 Swagger \u63D2\u4EF6\u914D\u7F6E\u63A5\u53E3\u6587\u6863","slug":"\u4F7F\u7528-swagger-\u63D2\u4EF6\u914D\u7F6E\u63A5\u53E3\u6587\u6863","link":"#\u4F7F\u7528-swagger-\u63D2\u4EF6\u914D\u7F6E\u63A5\u53E3\u6587\u6863","children":[]}]},{"level":2,"title":"\u4F7F\u7528 Joi \u6821\u9A8C\u6570\u636E\u7ED3\u6784","slug":"\u4F7F\u7528-joi-\u6821\u9A8C\u6570\u636E\u7ED3\u6784","link":"#\u4F7F\u7528-joi-\u6821\u9A8C\u6570\u636E\u7ED3\u6784","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E hapi \u7684 Node.js \u5C0F\u7A0B\u5E8F\u540E\u7AEF\u5F00\u53D1\u5B9E\u8DF5\u6307\u5357/\u5B9E\u6218\u7BC7 2-\u63A5\u53E3\u5951\u7EA6\u4E0E\u5165\u53C2\u6821\u9A8C \u2014\u2014  \u4F7F\u7528 Swagger and Joi.md"}'),l={name:"Node.js/\u57FA\u4E8E hapi \u7684 Node.js \u5C0F\u7A0B\u5E8F\u540E\u7AEF\u5F00\u53D1\u5B9E\u8DF5\u6307\u5357/\u5B9E\u6218\u7BC7 2-\u63A5\u53E3\u5951\u7EA6\u4E0E\u5165\u53C2\u6821\u9A8C \u2014\u2014  \u4F7F\u7528 Swagger and Joi.md"},e=p(`<h1 id="\u5B9E\u6218\u7BC7-2-\u63A5\u53E3\u5951\u7EA6\u4E0E\u5165\u53C2\u6821\u9A8C-\u2014\u2014-\u4F7F\u7528-swagger-joi" tabindex="-1">\u5B9E\u6218\u7BC7 2-\u63A5\u53E3\u5951\u7EA6\u4E0E\u5165\u53C2\u6821\u9A8C \u2014\u2014 \u4F7F\u7528 Swagger &amp; Joi <a class="header-anchor" href="#\u5B9E\u6218\u7BC7-2-\u63A5\u53E3\u5951\u7EA6\u4E0E\u5165\u53C2\u6821\u9A8C-\u2014\u2014-\u4F7F\u7528-swagger-joi" aria-hidden="true">#</a></h1><hr><h1 id="\u5B9E\u6218\u7BC7-2\uFF1A\u63A5\u53E3\u5951\u7EA6\u4E0E\u5165\u53C2\u6821\u9A8C-\u2014\u2014-\u4F7F\u7528-swagger-joi" tabindex="-1">\u5B9E\u6218\u7BC7 2\uFF1A\u63A5\u53E3\u5951\u7EA6\u4E0E\u5165\u53C2\u6821\u9A8C \u2014\u2014 \u4F7F\u7528 Swagger &amp; Joi <a class="header-anchor" href="#\u5B9E\u6218\u7BC7-2\uFF1A\u63A5\u53E3\u5951\u7EA6\u4E0E\u5165\u53C2\u6821\u9A8C-\u2014\u2014-\u4F7F\u7528-swagger-joi" aria-hidden="true">#</a></h1><p>\u4E0A\u4E00\u8282\u6211\u4EEC\u5B8C\u6210\u4E86\u9879\u76EE\u5DE5\u7A0B\u7684\u57FA\u7840\u642D\u5EFA\u3002\u4F5C\u4E3A\u4E00\u4E2A\u670D\u52A1\u4E8E\u5C0F\u7A0B\u5E8F\u7684 API \u7CFB\u7EDF\uFF0C\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u54EA\u4E9B API \u670D\u52A1\uFF1F\u6BCF\u4E00\u4E2A API \u9700\u8981\u63D0\u4F9B\u4EC0\u4E48\u6837\u7684\u53C2\u6570\u6765\u8FDB\u884C\u8C03\u7528\uFF1F\u5F00\u53D1\u4EBA\u5458\u4E4B\u95F4\u53E3\u53E3\u76F8\u4F20\u3001\u4E0D\u6210\u4F53\u7CFB\u7684\u96F6\u6563\u4EA4\u4EE3\u5FC5\u7136\u662F\u4E0D\u9760\u8C31\u7684\u3002\u63A5\u53E3\u4F7F\u7528\u8BF4\u660E\u7684\u6587\u6863\u5316\u8F93\u51FA\uFF0C\u5E76\u5F62\u6210\u4E00\u79CD\u540E\u7AEF\u4E0E\u5C0F\u7A0B\u5E8F\u524D\u7AEF\u4E4B\u95F4\u7684\u63A5\u53E3\u5951\u7EA6\uFF0C\u662F\u73B0\u4EE3\u524D\u540E\u7AEF\u56E2\u961F\u5316\u534F\u4F5C\u7684\u6700\u4F73\u5B9E\u8DF5\u3002</p><p>\u90A3\u4E48\u5982\u4F55\u8F93\u51FA\u63A5\u53E3\u5951\u7EA6\u7684\u6587\u6863\u5462\uFF1F\u5927\u591A\u6570\u65F6\u5019\u7684\u76F4\u89C9\u884C\u4E3A\uFF0C\u662F\u6253\u5F00\u4E00\u4E2A\u6587\u6863\u7F16\u8F91\u5668\u5F00\u59CB\u6839\u636E\u63A5\u53E3\u5185\u5BB9\u5217\u5927\u7EB2\uFF0C\u7136\u540E\u7126\u5934\u70C2\u989D\u5730\u5728\u6587\u6863\u4E0E\u9879\u76EE\u5DE5\u7A0B\u4E4B\u95F4\u9891\u7E41\u5207\u6362\u4EE5\u786E\u8BA4\u9700\u8981\u8868\u8FBE\u7684\u5185\u5BB9\u3002\u5927\u91CF\u5730\u590D\u5236\u9ECF\u8D34\u4EE3\u7801\u4E2D\u7684\u53C2\u6570\u5B9A\u4E49\uFF0C\u8D39\u5C3D\u5343\u8F9B\uFF0C\u624D\u7EC8\u4E8E\u7EAF\u624B\u5DE5\u6253\u9020\u51FA\u4E00\u6B3E\u683C\u5F0F\u7C97\u7CD9\u3001\u9605\u8BFB\u4F53\u9A8C\u5DEE\u7684\u63A5\u53E3\u6587\u6863\u3002</p><p>\u7136\u800C\uFF0C\u5927\u591A\u6570\u65F6\u5019\uFF0C\u63A5\u53E3\u6587\u6863\u7684\u8F93\u51FA\u5E76\u975E\u662F\u4E00\u6B21\u6027\u7684\u7F16\u8F91\u884C\u4E3A\u3002\u63A5\u53E3\u5B9E\u73B0\u8FC7\u7A0B\u4E2D\u7684\u53C2\u6570\u8C03\u6574\u53D8\u5316\uFF0C\u4E1A\u52A1\u65B0\u589E\uFF0C\u90FD\u4F1A\u4F7F\u63A5\u53E3\u6587\u6863\u7684\u5185\u5BB9\u9700\u8981\u540C\u6B65\u66F4\u65B0\u6765\u4FDD\u6301\u4E0E\u7CFB\u7EDF\u4EE3\u7801\u4E00\u81F4\u6027\u3002\u79BB\u6563\u4E8E\u4E24\u5904\u7684\u5185\u5BB9\u7EF4\u62A4\uFF0C\u662F\u4E00\u4EF6\u8BA9\u4EBA\u8EAB\u5FC3\u75B2\u60EB\u7684\u5DE5\u4F5C\u3002\u6709\u6CA1\u6709\u66F4\u597D\u7684\u63A5\u53E3\u6587\u6863\u5316\u89E3\u51B3\u65B9\u6848\u5462\uFF1F\u4F7F\u7528 hapi-swagger &amp; Joi\u3002</p><h2 id="\u4F7F\u7528-swagger" tabindex="-1">\u4F7F\u7528 Swagger <a class="header-anchor" href="#\u4F7F\u7528-swagger" aria-hidden="true">#</a></h2><p>Swagger \u662F\u4E00\u79CD\u4E0E\u8BED\u8A00\u65E0\u5173\u7684\u63A5\u53E3\u63CF\u8FF0\uFF0C\u76EE\u6807\u662F\u4E3A REST APIs \u5B9A\u4E49\u4E00\u4E2A\u6807\u51C6\u7684\uFF0C\u5E2E\u52A9\u6211\u4EEC\u5728\u770B\u4E0D\u5230\u5177\u4F53\u6E90\u7801\u7684\u60C5\u51B5\u4E0B\u80FD\u53D1\u73B0\u548C\u7406\u89E3\u5404\u79CD\u670D\u52A1\u7684\u529F\u80FD\u3002\u5E76\u901A\u8FC7 swagger-ui \u7684\u7F51\u9875\u8F93\u51FA\uFF0C\u6765\u5F62\u6210\u4E00\u5957\u7F8E\u89C2\u7B80\u6D01\u7684\u53EF\u89C6\u5316\u6587\u6863\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/11/165c5ad5a6131ee8~tplv-t2oaga2asx-image.image" alt=""></p><p>Joi \u662F\u4E00\u79CD\u9A8C\u8BC1\u6A21\u5757\uFF0C\u4E0E hapi \u4E00\u6837\u51FA\u81EA\u6C83\u5C14\u739B\u5B9E\u9A8C\u5BA4\u56E2\u961F\u3002Joi \u7684 API \u56E0\u5176\u4E30\u5BCC\u7684\u529F\u80FD\uFF0C\u4F7F\u5F97\u9A8C\u8BC1\u6570\u636E\u7ED3\u6784\u4E0E\u6570\u503C\u7684\u5408\u89C4\uFF0C\u53D8\u5F97\u683C\u5916\u5BB9\u6613\u3002\u5B83\u6709\u5F88\u591A\u7075\u6D3B\u9177\u70AB\u7684\u7528\u6CD5\uFF0C\u4F46\u788D\u4E8E\u7BC7\u5E45\uFF0C\u6211\u4EEC\u5728\u672C\u5C0F\u8282\u4E2D\u7279\u522B\u805A\u7126\u4E8E\u8BF7\u6C42\u5165\u53C2\u7684\u6821\u9A8C\u3002</p><p>\u5728\u4EE5 hapi \u4F5C\u4E3A API \u670D\u52A1\u5668\u6846\u67B6\uFF0Chapi-swagger \u63D2\u4EF6\u7528\u4E8E\u751F\u6210\u63A5\u53E3\u6587\u6863\uFF0CJoi \u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7ED3\u6784\uFF0C\u662F\u4E00\u5BF9\u76F8\u5F53\u597D\u7528\u7684\u642D\u6863\u7EC4\u5408\uFF0C\u5E76\u4E14\u826F\u597D\u5730\u89E3\u51B3\u6211\u4EEC\u9700\u8981\u5728\u9879\u76EE\u5DE5\u7A0B\u4E0E\u6587\u6863\u4E4B\u95F4\u4E24\u5904\u7EF4\u62A4\u7684\u75DB\u70B9\u3002\u4EE3\u7801\u5373\u6587\u6863\u7684\u6574\u5408\u80FD\u529B\uFF0C\u662F\u6BCF\u4E00\u4E2A\u7A0B\u5E8F\u5F00\u53D1\u4EBA\u5458\u90FD\u559C\u6B22\u7684\u5F00\u53D1\u65B9\u5F0F\u3002</p><p>\u5C06 hapi-swagger \u4F5C\u4E3A\u63D2\u4EF6\u6CE8\u518C\u4E3A\u670D\u52A1\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u4EFB\u610F\u7684\u8DEF\u7531\u914D\u7F6E\u6807\u8BB0\u4E3A API \u6587\u6863\u7684\u4E00\u90E8\u5206\u3002\u800C\u4E14\uFF0Chapi-swagger \u4F1A\u667A\u80FD\u5730\u89E3\u6790 Joi \u7684\u6570\u636E\u7ED3\u6784\u6821\u9A8C\u914D\u7F6E\uFF0C\u5728\u63A5\u53E3\u6587\u6863\u4E2D\u5BF9\u5E94\u4E3A\u76F8\u5E94\u7684\u8F93\u5165\u8868\u5355\u3002</p><p>\u5F53\u7136\uFF0C\u4ED6\u4EEC\u4E24\u8005\u90FD\u53EF\u4EE5\u4FDD\u6301\u72EC\u7ACB\u5730\u826F\u597D\u8FD0\u4F5C\uFF0C\u53EA\u662F\u5F53\u6211\u4EEC\u5C06\u4ED6\u4EEC\u6574\u5408\u5230\u4E00\u8D77\u65F6\uFF0C\u4F1A\u5F97\u5230 1 + 1 &gt; 2 \u7684\u60CA\u559C\u3002</p><h3 id="\u4F7F\u7528-swagger-\u63D2\u4EF6\u914D\u7F6E\u63A5\u53E3\u6587\u6863" tabindex="-1">\u4F7F\u7528 Swagger \u63D2\u4EF6\u914D\u7F6E\u63A5\u53E3\u6587\u6863 <a class="header-anchor" href="#\u4F7F\u7528-swagger-\u63D2\u4EF6\u914D\u7F6E\u63A5\u53E3\u6587\u6863" aria-hidden="true">#</a></h3><p><strong>\u5B89\u88C5\u57FA\u7840\u4F9D\u8D56\u4E0E\u57FA\u7840\u63D2\u4EF6\u914D\u7F6E</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u5B89\u88C5\u9002\u914D hapi v16 \u7684 swagger \u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i hapi-swagger@7</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i inert@4</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i vision@4</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i package</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 plugins                       # hapi \u63D2\u4EF6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">|   \u251C\u2500\u2500 hapi-swagger.js           # swagger \u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// plugins/hapi-swagger.js</span></span>
<span class="line"><span style="color:#A6ACCD;">const inert = require(&#39;inert&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const vision = require(&#39;vision&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const package = require(&#39;package&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const hapiSwagger = require(&#39;hapi-swagger&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  inert,</span></span>
<span class="line"><span style="color:#A6ACCD;">  vision,</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    register: hapiSwagger,</span></span>
<span class="line"><span style="color:#A6ACCD;">    options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      info: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;\u63A5\u53E3\u6587\u6863&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        version: package.version,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5B9A\u4E49\u63A5\u53E3\u4EE5 tags \u5C5E\u6027\u5B9A\u4E49\u4E3A\u5206\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">      grouping: &#39;tags&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      tags: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;tests&#39;, description: &#39;\u6D4B\u8BD5\u76F8\u5173&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 app.js \u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7 <code>server.register</code> \u6302\u8F7D swagger \u63D2\u4EF6\u914D\u7F6E</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// app.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Hapi = require(&#39;hapi&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">require(&#39;env2&#39;)(&#39;./.env&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const config = require(&#39;./config&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const routesHelloHapi = require(&#39;./routes/hello-hapi&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F15\u5165\u81EA\u5B9A\u4E49\u7684 hapi-swagger \u63D2\u4EF6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">const pluginHapiSwagger = require(&#39;./plugins/hapi-swagger&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const server = new Hapi.Server();</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u914D\u7F6E\u670D\u52A1\u5668\u542F\u52A8host\u4E0E\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">server.connection({</span></span>
<span class="line"><span style="color:#A6ACCD;">  port: config.PORT,</span></span>
<span class="line"><span style="color:#A6ACCD;">  host: config.HOST,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const init = async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  await server.register([</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E3A\u7CFB\u7EDF\u4F7F\u7528 hapi-swagger</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...pluginHapiSwagger,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  server.route([</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684hello hapi\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...routesHelloHapi,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u542F\u52A8\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">  await server.start();</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(\`Server running at: \${server.info.uri}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">init();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3A REST \u63A5\u53E3\u6DFB\u52A0 Swagger \u6807\u8BB0\uFF0C\u5728\u8DEF\u7531\u914D\u7F6E\u4E2D\u7684 config \u5B57\u6BB5\u589E\u52A0 <code>tags:[&#39;api&#39;]</code> \u5373\u53EF\u5C06\u8DEF\u7531\u66B4\u9732\u4E3A Swagger \u6587\u6863\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u9009\u586B\uFF0C\u53EF\u4EE5\u5C06\u63A5\u53E3\u8FDB\u884C\u4E00\u5B9A\u7684 group \u5206\u7EC4\u7BA1\u7406\uFF0C\u63A5\u53E3\u5C06\u88AB\u6298\u53E0\u5982\u5BF9\u5E94\u7684 group \u5206\u7C7B\u3002config \u4E2D\u7684 description \u5B57\u6BB5\u5219\u7528\u4E8E Swagger \u63CF\u8FF0\u63A5\u53E3\u7684\u5185\u5BB9\uFF0C\u4EA6\u53EF\u4F5C\u4E3A\u4E00\u90E8\u5206\u4EE3\u7801\u7684\u529F\u80FD\u6CE8\u91CA\u6765\u7528\uFF0C\u4E00\u4E3E\u591A\u5F97\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// routes/hello-hapi.js</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    method: &#39;GET&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler: (request, reply) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reply(&#39;hello hapi&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    config: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      tags: [&#39;api&#39;, &#39;tests&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      description: &#39;\u6D4B\u8BD5hello-hapi&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BBF\u95EE <a href="http://127.0.0.1:3000/documentation" target="_blank" rel="noreferrer">http://127.0.0.1:3000/documentation</a> \uFF0C\u67E5\u770B\u66B4\u9732\u63A5\u53E3\u7684 Swagger \u6587\u6863\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/8/15/1653bfaa0a34f975~tplv-t2oaga2asx-image.image" alt=""></p><blockquote><p><strong>GitHub \u53C2\u8003\u4EE3\u7801</strong> <a href="https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter6/hapi-tutorial-1" target="_blank" rel="noreferrer">chapter6/hapi-tutorial-1</a></p></blockquote><p><strong>\u7ED3\u5408\u4E1A\u52A1\u5B9E\u73B0\u4E1A\u52A1\u63A5\u53E3\u96CF\u5F62</strong></p><p>\u7ED3\u5408\u6211\u4EEC\u5728\u7B2C\u4E09\u7AE0\u6587\u672B\u5904\u6240\u6574\u7406\u5173\u952E\u4E1A\u52A1\u63A5\u53E3\uFF0C\u6709\u5E97\u94FA\u76F8\u5173\u4E0E\u8BA2\u5355\u76F8\u5173\uFF0C\u8DEF\u7531\u7684\u5177\u4F53\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// routes/shops.js</span></span>
<span class="line"><span style="color:#A6ACCD;">const GROUP_NAME = &#39;shops&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    method: &#39;GET&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: \`/\${GROUP_NAME}\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler: async (request, reply) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reply();</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    config: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      tags: [&#39;api&#39;, GROUP_NAME],</span></span>
<span class="line"><span style="color:#A6ACCD;">      description: &#39;\u83B7\u53D6\u5E97\u94FA\u5217\u8868&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    method: &#39;GET&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: \`/\${GROUP_NAME}/{shopId}/goods\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler: async (request, reply) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reply();</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    config: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      tags: [&#39;api&#39;, GROUP_NAME],</span></span>
<span class="line"><span style="color:#A6ACCD;">      description: &#39;\u83B7\u53D6\u5E97\u94FA\u7684\u5546\u54C1\u5217\u8868&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const GROUP_NAME = &#39;orders&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    method: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: \`/\${GROUP_NAME}\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler: async (request, reply) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reply();</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    config: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      tags: [&#39;api&#39;, GROUP_NAME],</span></span>
<span class="line"><span style="color:#A6ACCD;">      description: &#39;\u521B\u5EFA\u8BA2\u5355&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    method: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: \`/\${GROUP_NAME}/{orderId}/pay\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler: async (request, reply) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reply();</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    config: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      tags: [&#39;api&#39;, GROUP_NAME],</span></span>
<span class="line"><span style="color:#A6ACCD;">      description: &#39;\u652F\u4ED8\u67D0\u6761\u8BA2\u5355&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u901A\u8FC7 <code>http://localhost:3000/documentation</code> \uFF08\u4F60\u81EA\u5DF1\u7684\u670D\u52A1\u5730\u5740 + /documentation\uFF09\u6765\u67E5\u770B Swagger \u6587\u6863\uFF0C\u521A\u624D\u5B9A\u4E49\u7684\u8DEF\u7531\u914D\u7F6E\uFF0C\u5DF2\u7ECF\u6709\u914D\u5957\u63A5\u53E3\u6587\u6863\u4E86\uFF0C\u540E\u9762\u7684\u7AE0\u8282\u6765\u5F00\u59CB\u5806\u4E1A\u52A1\u3002</p><blockquote><p><strong>GitHub \u53C2\u8003\u4EE3\u7801</strong> <a href="https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter6/hapi-tutorial-2" target="_blank" rel="noreferrer">chapter6/hapi-tutorial-2</a></p></blockquote><h2 id="\u4F7F\u7528-joi-\u6821\u9A8C\u6570\u636E\u7ED3\u6784" tabindex="-1">\u4F7F\u7528 Joi \u6821\u9A8C\u6570\u636E\u7ED3\u6784 <a class="header-anchor" href="#\u4F7F\u7528-joi-\u6821\u9A8C\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a></h2><p>\u5B89\u88C5 Joi \u4F9D\u8D56\u5E93\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u5B89\u88C5\u9002\u914D hapi v16 \u7684 joi \u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i joi@13</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>1. \u9002\u7528\u4E8E\u52A8\u6001\u8DEF\u7531\u7684 params \u9A8C\u8BC1</strong></p><p>\u6B63\u5982\u4E0A\u8FF0\u4EE3\u7801\u6240\u914D\u7F6E\u7684\uFF0C\u52A8\u6001\u8DEF\u7531\u6240\u4F9D\u8D56\u7684\u53D8\u91CF orderId \u4EE5 <code>params</code> \u5C5E\u6027\u7684\u5B57\u6BB5\u6765\u4F20\u9012\uFF0C<code>orderId: Joi.string().required()</code> \u7684\u63CF\u8FF0\uFF0C\u5B9A\u4E49\u4E86 orderId \u5FC5\u987B\u662F\u5B57\u7B26\u4E32\uFF0C\u4E14\u6B64\u53C2\u6570\u5FC5\u586B\u3002\u4E00\u65E6\u7528\u6237\u7AEF\u8C03\u7528\u8BE5\u63A5\u53E3\uFF0CorderId \u5E76\u6CA1\u6709\u4F20\u5165\uFF0C\u5219\u4F1A\u8FD4\u56DE\u5982\u4E0B\u7684\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    method: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: \`/\${GROUP_NAME}/{orderId}/pay\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    config: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      validate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        params: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          orderId: Joi.string().required(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;error&quot;: &quot;Bad Request&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;message&quot;: &quot;\u6B64\u5904\u4F1A\u6709\u660E\u786E\u7684\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF\u63CF\u8FF0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;statusCode&quot;: 400</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>2. \u9002\u7528\u4E8E POST \u63A5\u53E3\u7684 payload\uFF08request body\uFF09\u9A8C\u8BC1</strong></p><p>\u6BD4\u5982\u8BA2\u5355\u7684\u521B\u5EFA\u63A5\u53E3\uFF0CPOST \u578B\uFF0C\u53EF\u80FD\u4F9D\u8D56\u591A\u4EF6\u5546\u54C1\uFF0C\u4E14\u5404\u5546\u54C1\u6570\u91CF\u4E0D\u540C\u7684\u590D\u6742\u5165\u53C2\u3002\u6B64\u7C7B\u7684\u53C2\u6570\u6821\u9A8C\u53EF\u4EE5\u901A\u8FC7 validate.payload \u6765\u7EA6\u675F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53C2\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  { goods_id: 123, count: 1 },  // 1\u4EF6 id \u4E3A 123 \u7684\u5546\u54C1</span></span>
<span class="line"><span style="color:#A6ACCD;">  { goods_id: 124, count: 2 },  // 2\u4EF6 id \u4E3A 124 \u7684\u5546\u54C1</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5BF9\u5E94\u7684\u5D4C\u5957\u5165\u53C2\u6821\u9A8C</span></span>
<span class="line"><span style="color:#A6ACCD;">validate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  payload: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    goodsList: Joi.array().items(</span></span>
<span class="line"><span style="color:#A6ACCD;">      Joi.object().keys({</span></span>
<span class="line"><span style="color:#A6ACCD;">        goods_id: Joi.number().integer(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        count: Joi.number().integer(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>3. \u9002\u7528\u4E8E GET \u63A5\u53E3\u7684 query\uFF08URL \u8DEF\u5F84\u53C2\u6570\uFF09</strong></p><p>\u6BD4\u5982\u6211\u4EEC\u5E38\u89C1\u7684\u5E26\u6709\u5206\u9875\u7279\u6027\u7684\u62C9\u53D6\u5E97\u94FA\u5217\u8868\u6570\u636E\uFF0C\u5F80\u5F80\u6D89\u53CA\u9875\u7801 page \u548C\u6BCF\u4E2A\u5206\u9875\u7684\u6761\u76EE\u6570 limit\u3002\u63A5\u53E3\u7684\u4F53\u73B0\u5F62\u5F0F\u901A\u5E38\u662F <a href="http://localhost/shops?page=1&amp;limit=10" target="_blank" rel="noreferrer">http://localhost/shops?page=1&amp;limit=10</a> \u3002\u6B64\u7C7B\u7684\u53C2\u6570\u6821\u9A8C\u53EF\u4EE5\u901A\u8FC7 validate.query \u6765\u7EA6\u675F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">validate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  query: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    limit: Joi.number().integer().min(1).default(10)</span></span>
<span class="line"><span style="color:#A6ACCD;">      .description(&#39;\u6BCF\u9875\u7684\u6761\u76EE\u6570&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    page: Joi.number().integer().min(1).default(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">      .description(&#39;\u9875\u7801\u6570&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>4. \u9002\u7528\u4E8E header \u989D\u5916\u5B57\u6BB5\u7EA6\u675F\u7684 headers \u9A8C\u8BC1</strong></p><p>\u6BD4\u5982\u6211\u4EEC\u540E\u6587\u4F1A\u8BB2\u5230\u7684\u57FA\u4E8E JWT \u7684\u7528\u6237\u8EAB\u4EFD\u9A8C\u8BC1\uFF0C\u4F1A\u4F9D\u8D56 header \u4E2D\u7684 <code>authorization</code> \u5B57\u6BB5\u7684\u914D\u7F6E\uFF0C\u4F46\u7531\u4E8E header \u4E2D\u672C\u8EAB\u8FD8\u6DB5\u76D6\u4E86\u5176\u4ED6\u7684\u5B57\u6BB5\u5C5E\u6027\uFF0C\u6240\u4EE5\u9700\u8981\u7528 <code>unknown</code> \u6765\u505A\u4E00\u4E2A\u5197\u4F59\u5904\u7406\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">validate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  headers: Joi.object({</span></span>
<span class="line"><span style="color:#A6ACCD;">    authorization: Joi.string().required(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  }).unknown(),</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p><strong>GitHub \u53C2\u8003\u4EE3\u7801</strong> <a href="https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter6/hapi-tutorial-3" target="_blank" rel="noreferrer">chapter6/hapi-tutorial-3</a></p></blockquote><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u5173\u952E\u8BCD\uFF1ASwagger\uFF0CJoi\uFF0C\u5165\u53C2\u6821\u9A8C</p><p>\u672C\u5C0F\u8282\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E86\u4F7F\u7528 hapi-swagger \u63D2\u4EF6\u81EA\u52A8\u751F\u6210\u63A5\u53E3\u6587\u6863\u3002\u5E76\u4E14\u5229\u7528 Joi\uFF0C\u9488\u5BF9\u63A5\u53E3\u5165\u53C2 params\uFF0C payload\uFF0Cquery\uFF0Cheaders \u8FD9\u56DB\u79CD\u5F62\u6001\u8FDB\u884C\u58F0\u660E\u4E0E\u6821\u9A8C\uFF0C\u80FD\u591F\u8986\u76D6\u5927\u591A\u6570\u65E5\u5E38\u5F00\u53D1\u4F7F\u7528\u573A\u666F\u3002\u7F51\u9875\u7248\u7684 swagger \u6587\u6863\u4E5F\u53EF\u4EE5\u6210\u4E3A\u6211\u4EEC\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5FEB\u901F\u6D4B\u8BD5\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u7684\u654F\u6377\u5DE5\u5177\u3002</p><p><strong>\u672C\u5C0F\u8282\u53C2\u8003\u4EE3\u7801\u6C47\u603B</strong></p><p>\u4F7F\u7528 Swagger \u63D2\u4EF6\u914D\u7F6E\u63A5\u53E3\u6587\u6863 - \u5B89\u88C5\u57FA\u7840\u4F9D\u8D56\u4E0E\u57FA\u7840\u63D2\u4EF6\u914D\u7F6E\uFF1A<a href="https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter6/hapi-tutorial-1" target="_blank" rel="noreferrer">chapter6/hapi-tutorial-1</a></p><p>\u4F7F\u7528 Swagger \u63D2\u4EF6\u914D\u7F6E\u63A5\u53E3\u6587\u6863 - \u7ED3\u5408\u4E1A\u52A1\u5B9E\u73B0\u4E1A\u52A1\u63A5\u53E3\u96CF\u5F62\uFF1A<a href="https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter6/hapi-tutorial-2" target="_blank" rel="noreferrer">chapter6/hapi-tutorial-2</a></p><p>\u4F7F\u7528 Joi \u6821\u9A8C\u6570\u636E\u7ED3\u6784\uFF1A<a href="https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter6/hapi-tutorial-3" target="_blank" rel="noreferrer">chapter6/hapi-tutorial-3</a></p>`,55),o=[e];function c(r,t,i,A,C,g){return n(),a("div",null,o)}const D=s(l,[["render",c]]);export{d as __pageData,D as default};
