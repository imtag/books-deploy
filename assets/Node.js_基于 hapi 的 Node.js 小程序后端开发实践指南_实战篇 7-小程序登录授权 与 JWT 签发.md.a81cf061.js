import{_ as s,c as n,o as a,d as e}from"./app.c4f45da1.js";const D=JSON.parse('{"title":"\u5B9E\u6218\u7BC7 7-\u5C0F\u7A0B\u5E8F\u767B\u5F55\u6388\u6743 \u4E0E JWT \u7B7E\u53D1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C0F\u7A0B\u5E8F\u7AEF\u4E3B\u8981\u5B9E\u73B0\u7EC6\u8282","slug":"\u5C0F\u7A0B\u5E8F\u7AEF\u4E3B\u8981\u5B9E\u73B0\u7EC6\u8282","link":"#\u5C0F\u7A0B\u5E8F\u7AEF\u4E3B\u8981\u5B9E\u73B0\u7EC6\u8282","children":[{"level":3,"title":"1. getUserInfo \u83B7\u53D6\u7528\u6237\u4FE1\u606F","slug":"_1-getuserinfo-\u83B7\u53D6\u7528\u6237\u4FE1\u606F","link":"#_1-getuserinfo-\u83B7\u53D6\u7528\u6237\u4FE1\u606F","children":[]},{"level":3,"title":"2. \u83B7\u53D6\u4E34\u65F6\u767B\u5F55\u7684 code","slug":"_2-\u83B7\u53D6\u4E34\u65F6\u767B\u5F55\u7684-code","link":"#_2-\u83B7\u53D6\u4E34\u65F6\u767B\u5F55\u7684-code","children":[]},{"level":3,"title":"3. \u6362\u53D6\u767B\u5F55 JWT","slug":"_3-\u6362\u53D6\u767B\u5F55-jwt","link":"#_3-\u6362\u53D6\u767B\u5F55-jwt","children":[]}]},{"level":2,"title":"hapi \u670D\u52A1\u7AEF\u5B9E\u73B0\u7EC6\u8282","slug":"hapi-\u670D\u52A1\u7AEF\u5B9E\u73B0\u7EC6\u8282","link":"#hapi-\u670D\u52A1\u7AEF\u5B9E\u73B0\u7EC6\u8282","children":[{"level":3,"title":"1. users \u8868\u7ED3\u6784\u5B9A\u4E49\u4E0E\u8FC1\u79FB","slug":"_1-users-\u8868\u7ED3\u6784\u5B9A\u4E49\u4E0E\u8FC1\u79FB","link":"#_1-users-\u8868\u7ED3\u6784\u5B9A\u4E49\u4E0E\u8FC1\u79FB","children":[]},{"level":3,"title":"2. \u521B\u5EFA users \u7684\u8DEF\u7531\uFF0C\u652F\u6301 wxLogin","slug":"_2-\u521B\u5EFA-users-\u7684\u8DEF\u7531\uFF0C\u652F\u6301-wxlogin","link":"#_2-\u521B\u5EFA-users-\u7684\u8DEF\u7531\uFF0C\u652F\u6301-wxlogin","children":[]},{"level":3,"title":"3. \u6362\u53D6 openid \u548C session_key","slug":"_3-\u6362\u53D6-openid-\u548C-session-key","link":"#_3-\u6362\u53D6-openid-\u548C-session-key","children":[]},{"level":3,"title":"4. \u901A\u8FC7 openid \u6362\u53D6\u672C\u5730\u6570\u636E\u5E93\u7684 user_id\uFF0C\u7B7E\u53D1 JWT","slug":"_4-\u901A\u8FC7-openid-\u6362\u53D6\u672C\u5730\u6570\u636E\u5E93\u7684-user-id\uFF0C\u7B7E\u53D1-jwt","link":"#_4-\u901A\u8FC7-openid-\u6362\u53D6\u672C\u5730\u6570\u636E\u5E93\u7684-user-id\uFF0C\u7B7E\u53D1-jwt","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E hapi \u7684 Node.js \u5C0F\u7A0B\u5E8F\u540E\u7AEF\u5F00\u53D1\u5B9E\u8DF5\u6307\u5357/\u5B9E\u6218\u7BC7 7-\u5C0F\u7A0B\u5E8F\u767B\u5F55\u6388\u6743 \u4E0E JWT \u7B7E\u53D1.md"}'),p={name:"Node.js/\u57FA\u4E8E hapi \u7684 Node.js \u5C0F\u7A0B\u5E8F\u540E\u7AEF\u5F00\u53D1\u5B9E\u8DF5\u6307\u5357/\u5B9E\u6218\u7BC7 7-\u5C0F\u7A0B\u5E8F\u767B\u5F55\u6388\u6743 \u4E0E JWT \u7B7E\u53D1.md"},l=e(`<h1 id="\u5B9E\u6218\u7BC7-7-\u5C0F\u7A0B\u5E8F\u767B\u5F55\u6388\u6743-\u4E0E-jwt-\u7B7E\u53D1" tabindex="-1">\u5B9E\u6218\u7BC7 7-\u5C0F\u7A0B\u5E8F\u767B\u5F55\u6388\u6743 \u4E0E JWT \u7B7E\u53D1 <a class="header-anchor" href="#\u5B9E\u6218\u7BC7-7-\u5C0F\u7A0B\u5E8F\u767B\u5F55\u6388\u6743-\u4E0E-jwt-\u7B7E\u53D1" aria-hidden="true">#</a></h1><hr><h1 id="\u5B9E\u6218\u7BC7-7\uFF1A\u5C0F\u7A0B\u5E8F\u767B\u5F55\u6388\u6743\u4E0E-jwt-\u7B7E\u53D1" tabindex="-1">\u5B9E\u6218\u7BC7 7\uFF1A\u5C0F\u7A0B\u5E8F\u767B\u5F55\u6388\u6743\u4E0E JWT \u7B7E\u53D1 <a class="header-anchor" href="#\u5B9E\u6218\u7BC7-7\uFF1A\u5C0F\u7A0B\u5E8F\u767B\u5F55\u6388\u6743\u4E0E-jwt-\u7B7E\u53D1" aria-hidden="true">#</a></h1><p>\u501F\u52A9\u4E8E\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u81EA\u8EAB\u7684\u7B2C\u4E09\u65B9\u767B\u5F55\u80FD\u529B\uFF0C\u80FD\u591F\u8BA9\u7528\u6237\u83B7\u5F97\u66F4\u597D\u7684\u5E94\u7528\u4F7F\u7528\u4F53\u9A8C\uFF0C\u907F\u5F00\u4E86\u7E41\u7410\u7684\u6CE8\u518C\u4FE1\u606F\u7684\u63D0\u4EA4\uFF0C\u5E26\u6765\u66F4\u597D\u7684\u7528\u6237\u4EA4\u4E92\u4F53\u9A8C\u3002\u672C\u5C0F\u8282\u5C06\u4ECB\u7ECD\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6388\u6743\u767B\u5F55\u7684\u5F00\u53D1\u6D41\u7A0B\uFF0C\u6700\u7EC8\u5C06\u5C0F\u7A0B\u5E8F\u7684\u6709\u6548\u767B\u5F55\uFF0C\u521B\u5EFA\u83B7\u53D6\u5BF9\u5E94\u7684\u76F8\u5173\u7528\u6237\uFF0C\u7B7E\u53D1 JWT\u3002</p><p>\u5728\u5C0F\u8282\u7684\u6838\u5FC3\u8BDD\u9898\u4E4B\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5B66\u4E60\u4F53\u4F1A\u968F\u7740\u9879\u76EE\u5DE5\u7A0B\u7684\u9700\u6C42\u589E\u52A0\uFF0C\u6570\u636E\u5E93\u589E\u91CF\u8FC1\u79FB migrate \u7684\u8FC7\u7A0B\u3002</p><p>\u4E0B\u9762\u662F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u767B\u5F55\u7684\u5B98\u65B9\u6D41\u7A0B\u793A\u610F\u56FE\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/8/27/1657752198db3025~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6211\u4EEC\u4EE5\u73B0\u6709\u7684 hapi \u540E\u7AEF\u670D\u52A1\u5E94\u7528\u4E3A\u4F8B\uFF1A</p><p>1\uFF09 \u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u81EA\u5C01\u88C5\u7684 <code>wx.login()</code> \u65B9\u6CD5\uFF0C\u5E2E\u52A9\u524D\u7AEF\u5F00\u53D1\u8005\u83B7\u53D6 \u4E34\u65F6\u767B\u5F55\u51ED\u8BC1 code \u503C\u3002</p><p>2\uFF09 hapi \u540E\u7AEF\u670D\u52A1\u63D0\u4F9B\u4E00\u4E2A\u7C7B\u4F3C wxLogin \u7684\u63A5\u53E3\uFF0C\u63A5\u6536\u5C0F\u7A0B\u5E8F\u4F20\u6765\u7684 code \u503C\uFF0C\u7ED3\u5408\u5C0F\u7A0B\u5E8F\u7533\u8BF7\u65F6\u7684 appid \u4E0E appsecret\uFF0C\u4E00\u5E76\u5411\u5FAE\u4FE1\u63A5\u53E3\u670D\u52A1\u5668\u4EA4\u6362\u56DE session_key \u4E0E openid \u7B49\u3002\u4E34\u65F6\u767B\u5F55\u51ED\u8BC1 code \u53EA\u80FD\u4F7F\u7528\u4E00\u6B21\u3002\u4F1A\u8BDD\u5BC6\u94A5 session_key \u662F\u5BF9\u7528\u6237\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\u7B7E\u540D\u7684\u5BC6\u94A5\u3002\u4E3A\u4E86\u5E94\u7528\u81EA\u8EAB\u7684\u6570\u636E\u5B89\u5168\uFF0C\u5F00\u53D1\u8005\u670D\u52A1\u5668\u4E0D\u5E94\u8BE5\u628A\u4F1A\u8BDD\u5BC6\u94A5\u4E0B\u53D1\u5230\u5C0F\u7A0B\u5E8F\uFF0C\u4E5F\u4E0D\u5E94\u8BE5\u5BF9\u5916\u63D0\u4F9B\u8FD9\u4E2A\u5BC6\u94A5\u3002</p><p>3\uFF09 hapi \u540E\u7AEF\u670D\u52A1\u901A\u8FC7 openid \u5411\u6570\u636E\u5E93\u67E5\u8BE2\u662F\u5426\u5DF2\u6709\u8BE5 openid \u7684\u7528\u6237\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5219\u4F5C\u4E3A\u65B0\u7528\u6237\uFF0C\u521B\u5EFA\u4E00\u6761\u8BE5 openid \u7684 \u65B0\u7528\u6237\u8BB0\u5F55\u3002\u6700\u7EC8\u83B7\u53D6\u8BE5 openid \u6240\u5BF9\u5E94\u7684 user_id\uFF0C\u5E76\u5411\u5C0F\u7A0B\u5E8F\u7B7E\u53D1\u5305\u6DB5 user_id \u7684 JWT\u3002</p><p>4\uFF09 \u5C0F\u7A0B\u5E8F\u83B7\u53D6\u5230 JWT \u4FE1\u606F\u540E\uFF0C\u4FDD\u5B58\u5728\u672C\u5730\uFF0C\u5E76\u5728\u540E\u7EED\u7684\u8BF7\u6C42\u4E2D\u901A\u8FC7 header Authorization=(jwt \u503C) \u7684\u65B9\u5F0F\u4E0E hapi \u540E\u7AEF\u670D\u52A1\u5668\u901A\u4FE1\uFF0C\u8BBF\u95EE\u9700\u8981\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u670D\u52A1\u63A5\u53E3\u3002</p><h2 id="\u5C0F\u7A0B\u5E8F\u7AEF\u4E3B\u8981\u5B9E\u73B0\u7EC6\u8282" tabindex="-1">\u5C0F\u7A0B\u5E8F\u7AEF\u4E3B\u8981\u5B9E\u73B0\u7EC6\u8282 <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u7AEF\u4E3B\u8981\u5B9E\u73B0\u7EC6\u8282" aria-hidden="true">#</a></h2><h3 id="_1-getuserinfo-\u83B7\u53D6\u7528\u6237\u4FE1\u606F" tabindex="-1">1. getUserInfo \u83B7\u53D6\u7528\u6237\u4FE1\u606F <a class="header-anchor" href="#_1-getuserinfo-\u83B7\u53D6\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a></h3><p>\u5C0F\u7A0B\u5E8F\u4E3A button \u6309\u94AE\u63D0\u4F9B open-type=&quot;getUserInfo&quot; \u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u7684\u5F00\u653E\u80FD\u529B\uFF0C\u5E76\u901A\u8FC7 <code>bindgetuserinfo=&quot;onGotUserInfo&quot;</code> \u7684\u56DE\u8C03\u51FD\u6570\u5B9A\u4E49\uFF0C\u6765\u54CD\u5E94\u8FD4\u56DE\u7684\u7528\u6237\u4FE1\u606F\u3002 \u6309\u94AE\u88AB\u70B9\u51FB\u540E\uFF0C\u5C0F\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u4ECE\u5FAE\u4FE1\u670D\u52A1\u5668\u83B7\u53D6\u5305\u542B encryptedData\uFF0Civ\uFF0CrawData, signature, userInfo \u7B49\u7528\u6237\u4FE1\u606F\u7684\u6570\u636E\u5B58\u653E\u5728 <code>detail</code> \u7684\u5B57\u6BB5\u4E2D\uFF0C\u5E76\u8FD4\u56DE\u5230 <code>onGotUserInfo</code> \u7684\u56DE\u8C03\u51FD\u6570\u3002\u5177\u4F53\u53C2\u8003\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;view class=&quot;page&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;button open-type=&quot;getUserInfo&quot; bindgetuserinfo=&quot;onGotUserInfo&quot;&gt;\u5FAE\u4FE1\u767B\u5F55&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Page({</span></span>
<span class="line"><span style="color:#A6ACCD;">  onGotUserInfo (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // e.detail \u8DDF wx.getUserInfo()\u83B7\u53D6\u7684\u7528\u6237\u4FE1\u606F\u662F\u4E00\u6837\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { encryptedData, iv, rawData, signature, userInfo } = e.detail;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u4E2D\u7684\u5B57\u6BB5\u8BF4\u660E:</p><ul><li><code>encryptedData</code>: \u52A0\u5BC6\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u5305\u542B openid \u548C unionid\u3002</li><li><code>iv</code>: \u5BF9 encryptedData \u52A0\u5BC6\u7B97\u6CD5\u7684\u521D\u59CB\u5411\u91CF\uFF0C\u89E3\u5BC6 encrytedData \u65F6\u8981\u7528\u5230\u3002</li><li><code>rawData</code>: userInfo \u7684 json \u5B57\u7B26\u4E32\uFF0C\u4E0D\u5305\u542B openid \u548C unionid\u3002</li><li><code>signature</code>: \u4F7F\u7528 sha1 \u5BF9 rawData + session_key \u7B7E\u540D\u5F97\u5230\u7684\u5B57\u7B26\u4E32\u3002</li><li><code>userInfo</code>: \u7528\u6237\u4FE1\u606F\u7684\u5BF9\u8C61\uFF0C\u4E0D\u5305\u542B openid \u548C unionid\uFF0C\u4F9B\u524D\u7AEF\u4F7F\u7528\u3002</li></ul><p>\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u5E94\u7528\u7684\u670D\u52A1\u7AEF\u65E0\u6CD5\u83B7\u53D6\u5230\u5FAE\u4FE1\u7528\u6237\u7684\u4FE1\u606F\uFF0C\u5F53\u670D\u52A1\u7AEF\u9700\u8981\u7528\u6237\u7684\u4FE1\u606F\u65F6\uFF0C\u53EA\u80FD\u524D\u7AEF\u628A\u7528\u6237\u4FE1\u606F\u4F20\u7ED9\u670D\u52A1\u7AEF\uFF0C\u4E3A\u4E86\u786E\u4FDD\u7528\u6237\u4FE1\u606F\u6570\u636E\u7684\u5B8C\u6574\u3001\u4E0D\u88AB\u7BE1\u6539\uFF0C\u5FAE\u4FE1\u5BF9\u7528\u6237\u4FE1\u606F\u6570\u636E\u505A\u4E86\u7B7E\u540D\u548C\u52A0\u5BC6\u5904\u7406\u3002encryptedData \u662F\u52A0\u5BC6\u7684\u7528\u6237\u4FE1\u606F\uFF0Csignature \u662F\u7B7E\u540D\u7684\u5B57\u7B26\u4E32\uFF0C\u6839\u636E\u81EA\u5DF1\u540E\u53F0\u7684\u9700\u6C42\u9009\u62E9\u4F7F\u7528 encryptedData \u8FD8\u662F signature\u3002 \u672C\u6587\u4E2D\u4F7F\u7528 encryptedData\uFF0C\u56E0\u4E3A\u6821\u9A8C signature \u6BD4\u8F83\u7B80\u5355\uFF0C\u5728\u670D\u52A1\u7AEF\u7528 sha1 \u5BF9 rawData + session_key \u7B7E\u540D\uFF0C\u7136\u540E\u5224\u65AD\u8DDF signature \u662F\u4E0D\u662F\u76F8\u7B49\u5C31\u53EF\u4EE5\u4E86\uFF0C\u6240\u4EE5\u672C\u6587\u4E2D\u4E0D\u4F5C\u8BB2\u89E3\u3002</p><p>\u6570\u636E\u7B7E\u540D\u7684\u5B98\u65B9\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/8/27/1657752595e923a4~tplv-t2oaga2asx-image.image" alt=""></p><h3 id="_2-\u83B7\u53D6\u4E34\u65F6\u767B\u5F55\u7684-code" tabindex="-1">2. \u83B7\u53D6\u4E34\u65F6\u767B\u5F55\u7684 code <a class="header-anchor" href="#_2-\u83B7\u53D6\u4E34\u65F6\u767B\u5F55\u7684-code" aria-hidden="true">#</a></h3><p>\u540E\u7AEF\u9700\u8981\u80FD\u591F\u6821\u9A8C encryptedData, \u4F9D\u8D56\u4E8E session_key\u3002session_key \u7684\u83B7\u53D6\uFF0C\u53C8\u4F9D\u8D56\u4E8E appid + secret + code\u3002\u4E34\u65F6\u767B\u5F55\u51ED\u8BC1 code \u6765\u81EA\u4E8E\u5C0F\u7A0B\u5E8F\u7684 <code>wx.login()</code> \u65B9\u6CD5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Page({</span></span>
<span class="line"><span style="color:#A6ACCD;">  onGotUserInfo (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { encryptedData, iv } = e.detail;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const data = { encryptedData, iv };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.login({</span></span>
<span class="line"><span style="color:#A6ACCD;">      timeout: 3000, // timeout \u662F\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F ms</span></span>
<span class="line"><span style="color:#A6ACCD;">      success: res =&gt; { // wx.login \u63A5\u53E3\u8C03\u6210\u529F\u540E\u4F1A\u6267\u884C success \u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">        // res.code \u5C31\u662F\u767B\u5F55\u7684\u51ED\u8BC1, \u9700\u8981\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">        const code = res.code;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-\u6362\u53D6\u767B\u5F55-jwt" tabindex="-1">3. \u6362\u53D6\u767B\u5F55 JWT <a class="header-anchor" href="#_3-\u6362\u53D6\u767B\u5F55-jwt" aria-hidden="true">#</a></h3><p>\u628A code\u3001encryptedData\u3001iv \u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\uFF0C\u6362\u53D6 JWT\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Page({</span></span>
<span class="line"><span style="color:#A6ACCD;">  onGotUserInfo (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { encryptedData, iv } = e.detail;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.login({</span></span>
<span class="line"><span style="color:#A6ACCD;">      timeout: 3000,</span></span>
<span class="line"><span style="color:#A6ACCD;">      success: res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const code = res.code;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        wx.request({</span></span>
<span class="line"><span style="color:#A6ACCD;">          url: \`http://your-api-server/users/wxLogin\`, // \u6211\u4EEC\u7684\u670D\u52A1\u7AEF\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">          method: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            code, encryptedData, iv</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          success: res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // res.data \u4E3A\u670D\u52A1\u7AEF\u6B63\u786E\u767B\u5F55\u540E\u7B7E\u53D1\u7684 JWT</span></span>
<span class="line"><span style="color:#A6ACCD;">            wx.setStorageSync(&#39;auth&#39;, res.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u524D\u7AEF\u7684\u767B\u5F55\u4EE3\u7801\u5B9E\u73B0\u7EC6\u8282\u57FA\u672C\u5C31\u8FD9\u4E9B\u3002\u63A5\u4E0B\u6765\u5F00\u59CB\u5B9E\u73B0\u670D\u52A1\u7AEF\u7684\u63A5\u53E3\u548C\u903B\u8F91\u3002</p><h2 id="hapi-\u670D\u52A1\u7AEF\u5B9E\u73B0\u7EC6\u8282" tabindex="-1">hapi \u670D\u52A1\u7AEF\u5B9E\u73B0\u7EC6\u8282 <a class="header-anchor" href="#hapi-\u670D\u52A1\u7AEF\u5B9E\u73B0\u7EC6\u8282" aria-hidden="true">#</a></h2><p>\u5173\u952E\u6B65\u9AA4\uFF1A</p><ol><li>\u4F7F\u7528 migrate \u589E\u52A0\u4E00\u5F20\u7528\u6237\u8868\uFF0C\u5E76\u4E14\u5728 model \u4E2D\u5BF9\u5E94\u521B\u5EFA users \u8868\u7ED3\u6784\u5B9A\u4E49\u3002</li><li>\u589E\u52A0\u4E00\u4E2A\u7528\u6237\u767B\u5F55\u7B7E\u53D1 JWT \u7684 API \u63A5\u53E3\u8DEF\u7531 POST /users/wxLogin</li><li>\u901A\u8FC7 <a href="https://api.weixin.qq.com/sns/jscode2session" target="_blank" rel="noreferrer">https://api.weixin.qq.com/sns/jscode2session</a> \u6362\u53D6 openid \u548C session_key\u3002</li><li>\u901A\u8FC7 openid \u51B3\u5B9A\u662F\u5426\u521B\u5EFA\u65B0\u7528\u6237\uFF0C\u5E76\u83B7\u53D6\u6570\u636E\u5E93\u8868\u4E2D\u5BF9\u5E94\u7684 uesrId\u3002</li><li>\u7B7E\u53D1\u5305\u542B uesrId \u7684 JWT\u3002</li></ol><h3 id="_1-users-\u8868\u7ED3\u6784\u5B9A\u4E49\u4E0E\u8FC1\u79FB" tabindex="-1">1. users \u8868\u7ED3\u6784\u5B9A\u4E49\u4E0E\u8FC1\u79FB <a class="header-anchor" href="#_1-users-\u8868\u7ED3\u6784\u5B9A\u4E49\u4E0E\u8FC1\u79FB" aria-hidden="true">#</a></h3><p>users \u8868\u7ED3\u6784\u5B9A\u4E49</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u5B57\u6BB5\u7C7B\u578B</th><th>\u5B57\u6BB5\u8BF4\u660E</th></tr></thead><tbody><tr><td>id</td><td>integer</td><td>\u7528\u6237\u7684 ID\uFF0C\u81EA\u589E</td></tr><tr><td>nick_name</td><td>varchar(255)</td><td>\u7528\u6237\u7684\u6635\u79F0</td></tr><tr><td>avatar_url</td><td>varchar(255)</td><td>\u7528\u6237\u5934\u50CF</td></tr><tr><td>gender</td><td>integer</td><td>\u7528\u6237\u7684\u6027\u522B</td></tr><tr><td>open_id</td><td>varchar(255)</td><td>\u7528\u6237 open_id</td></tr><tr><td>session_key</td><td>varchar(255)</td><td>\u7528\u6237 session_key</td></tr><tr><td>created_at</td><td>datetime</td><td>\u8BB0\u5F55\u7684\u521B\u5EFA\u65F6\u95F4</td></tr><tr><td>updated_at</td><td>datetime</td><td>\u8BB0\u5F55\u7684\u66F4\u65B0\u65F6\u95F4</td></tr></tbody></table><p>\u521B\u5EFA users \u8868\u7684\u8FC1\u79FB\u6587\u4EF6 create-users-table\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ node_modules/.bin/sequelize migration:create --name create-users-table</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// migrations/create-users-table.js</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  up: (queryInterface, Sequelize) =&gt; queryInterface.createTable(</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;users&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      id: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: Sequelize.INTEGER,</span></span>
<span class="line"><span style="color:#A6ACCD;">        autoIncrement: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        primaryKey: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      nick_name: Sequelize.STRING,</span></span>
<span class="line"><span style="color:#A6ACCD;">      avatar_url: Sequelize.STRING,</span></span>
<span class="line"><span style="color:#A6ACCD;">      gender: Sequelize.INTEGER,</span></span>
<span class="line"><span style="color:#A6ACCD;">      open_id: Sequelize.STRING,</span></span>
<span class="line"><span style="color:#A6ACCD;">      session_key: Sequelize.STRING,</span></span>
<span class="line"><span style="color:#A6ACCD;">      created_at: Sequelize.DATE,</span></span>
<span class="line"><span style="color:#A6ACCD;">      updated_at: Sequelize.DATE,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  down: queryInterface =&gt; queryInterface.dropTable(&#39;users&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 models \u4E2D\u5B9A\u4E49 users \u8868\u7ED3\u6784:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// models/users.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = (sequelize, DataTypes) =&gt; sequelize.define(</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;users&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: DataTypes.INTEGER,</span></span>
<span class="line"><span style="color:#A6ACCD;">      primaryKey: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      autoIncrement: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      allowNull: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    nick_name: DataTypes.STRING,</span></span>
<span class="line"><span style="color:#A6ACCD;">    avatar_url: DataTypes.STRING,</span></span>
<span class="line"><span style="color:#A6ACCD;">    gender: DataTypes.INTEGER,</span></span>
<span class="line"><span style="color:#A6ACCD;">    open_id: DataTypes.STRING,</span></span>
<span class="line"><span style="color:#A6ACCD;">    session_key: DataTypes.STRING,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    tableName: &#39;users&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5411\u6570\u636E\u5E93\u8FC1\u79FB users \u8868:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ node_modules/.bin/sequelize db:migrate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-\u521B\u5EFA-users-\u7684\u8DEF\u7531\uFF0C\u652F\u6301-wxlogin" tabindex="-1">2. \u521B\u5EFA users \u7684\u8DEF\u7531\uFF0C\u652F\u6301 wxLogin <a class="header-anchor" href="#_2-\u521B\u5EFA-users-\u7684\u8DEF\u7531\uFF0C\u652F\u6301-wxlogin" aria-hidden="true">#</a></h3><ul><li><p>\u521B\u5EFA\u63A5\u53E3 POST /users/wxLogin</p></li><li><p>\u63A5\u6536 payload \u53C2\u6570 code, encryptedData, iv</p><ul><li>\u8BBE\u7F6E\u6B64\u63A5\u53E3\u4E0D\u9700\u8981\u901A\u8FC7\u7528\u6237\u9A8C\u8BC1 config.auth = false</li></ul></li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// routes/users</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const GROUP_NAME = &#39;users&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    method: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: \`/\${GROUP_NAME}/wxLogin\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler: async (req, reply) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reply();</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    config: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      auth: false, // \u4E0D\u9700\u8981\u7528\u6237\u9A8C\u8BC1</span></span>
<span class="line"><span style="color:#A6ACCD;">      tags: [&#39;api&#39;, GROUP_NAME], // \u6CE8\u518C swagger \u6587\u6863</span></span>
<span class="line"><span style="color:#A6ACCD;">      validate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        payload: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          code: Joi.string().required().description(&#39;\u5FAE\u4FE1\u7528\u6237\u767B\u5F55\u7684\u4E34\u65F6code&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">          encryptedData: Joi.string().required().description(&#39;\u5FAE\u4FE1\u7528\u6237\u4FE1\u606FencryptedData&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">          iv: Joi.string().required().description(&#39;\u5FAE\u4FE1\u7528\u6237\u4FE1\u606Fiv&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-\u6362\u53D6-openid-\u548C-session-key" tabindex="-1">3. \u6362\u53D6 openid \u548C session_key <a class="header-anchor" href="#_3-\u6362\u53D6-openid-\u548C-session-key" aria-hidden="true">#</a></h3><p>\u5229\u7528\u5FAE\u4FE1\u5F00\u653E\u63A5\u53E3 <a href="https://api.weixin.qq.com/sns/jscode2session" target="_blank" rel="noreferrer">https://api.weixin.qq.com/sns/jscode2session</a> \u83B7\u53D6 openid \u4E0E session_key\u3002\u5728 Node.js \u670D\u52A1\u7AEF\u4F7F\u7528 axios \u63D2\u4EF6\u53D1\u9001 HTTP \u8BF7\u6C42\u3002\u5E76\u9700\u8981\u81EA\u884C\u7533\u8BF7\u5C0F\u7A0B\u5E8F\u7684 AppID \u4E0E AppSecret\u3002\u53EF\u4EE5\u7528\u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u5728\u8BBE\u7F6E -&gt; \u5F00\u53D1\u8BBE\u7F6E -&gt; \u5F00\u53D1\u8005 ID \u4E2D\u53EF\u4EE5\u627E\u5230 AppID \u548C AppSecret\u3002</p><p>\u6CE8\u610F: <em>AppID \u4E0E AppSecret \u7684\u914D\u7F6E\u654F\u611F\u4FE1\u606F\uFF0C\u4F9D\u65E7\u901A\u8FC7 .evn \u6765\u914D\u7F6E\u7BA1\u7406\uFF0Cconfig/index.js \u6765\u4E2D\u95F4\u52FE\u53D6\u4E3A\u5B9C\u3002</em></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i axios</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>handler \u4E2D\u7684\u5FAE\u4FE1 session \u63A5\u53E3\u8C03\u7528\u7EC6\u8282:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// routes/users</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// ... \u7701\u7565\u4E0A\u6587</span></span>
<span class="line"><span style="color:#A6ACCD;">const axios = require(&#39;axios&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">handler: async (req, reply) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const appid = config.wxAppid; // \u4F60\u7684\u5C0F\u7A0B\u5E8F appid</span></span>
<span class="line"><span style="color:#A6ACCD;">  const secret = config.wxSecret; // \u4F60\u7684\u5C0F\u7A0B\u5E8F appsecret</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { code, encryptedData, iv } = req.payload;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const response = await axios({</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: &#39;https://api.weixin.qq.com/sns/jscode2session&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    method: &#39;GET&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    params: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      appid,</span></span>
<span class="line"><span style="color:#A6ACCD;">      secret,</span></span>
<span class="line"><span style="color:#A6ACCD;">      js_code: code,</span></span>
<span class="line"><span style="color:#A6ACCD;">      grant_type: &#39;authorization_code&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  // response \u4E2D\u8FD4\u56DE openid \u4E0E session_key</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { openid, session_key } = response.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">  reply();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// ... \u7701\u7565\u4E0B\u6587</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_4-\u901A\u8FC7-openid-\u6362\u53D6\u672C\u5730\u6570\u636E\u5E93\u7684-user-id\uFF0C\u7B7E\u53D1-jwt" tabindex="-1">4. \u901A\u8FC7 openid \u6362\u53D6\u672C\u5730\u6570\u636E\u5E93\u7684 user_id\uFF0C\u7B7E\u53D1 JWT <a class="header-anchor" href="#_4-\u901A\u8FC7-openid-\u6362\u53D6\u672C\u5730\u6570\u636E\u5E93\u7684-user-id\uFF0C\u7B7E\u53D1-jwt" aria-hidden="true">#</a></h3><p>1\uFF09 \u901A\u8FC7 openid \u67E5\u627E users \u8868\u4E2D\u662F\u5426\u5DF2\u6709\u7528\u6237\uFF0C\u6CA1\u6709\u5219\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u3002</p><p>2\uFF09 \u5C01\u88C5\u4E00\u4E2A decryptData \u65B9\u6CD5\uFF0C\u5C06 encryptedData \u7684\u4FE1\u606F\uFF0C\u5229\u7528 iv\uFF0Csession_key\uFF0Cappid \u8FDB\u884C\u6821\u9A8C\u4E0E\u89E3\u7801\uFF0C\u6700\u7EC8\u83B7\u5F97\u5408\u6CD5\u7684\u7528\u6237\u4FE1\u606F\u3002</p><p>decryptData \u7684\u52A0\u89E3\u5BC6\u6570\u636E\u7B97\u6CD5\u5B98\u65B9\u6587\u6863\uFF0C\u63D0\u4F9B\u591A\u8BED\u8A00\u793A\u4F8B\u4E0B\u8F7D\uFF0C<a href="https://developers.weixin.qq.com/miniprogram/dev/api/signature.html#wxchecksessionobject" target="_blank" rel="noreferrer">\u70B9\u51FB\u6B64\u5904\u94FE\u63A5</a>\u3002</p><p>3\uFF09 \u5C06 decryptData \u540E\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u66F4\u65B0\u56DE users \u8868\u3002</p><p>4\uFF09 \u7B7E\u53D1\u5305\u542B userId \u7684 JWT\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// utils/decrypted-data.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5C01\u88C5\u7684 decryptData\uFF0C\u7528\u4E8E\u89E3\u7801\u5C0F\u7A0B\u5E8F\u7684 encryptData</span></span>
<span class="line"><span style="color:#A6ACCD;">const crypto = require(&#39;crypto&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const decryptData = (encryptedData, iv, sessionKey, appid) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // base64 decode</span></span>
<span class="line"><span style="color:#A6ACCD;">  const encryptedDataNew = Buffer.from(encryptedData, &#39;base64&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const sessionKeyNew = Buffer.from(sessionKey, &#39;base64&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const ivNew = Buffer.from(iv, &#39;base64&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let decoded = &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u89E3\u5BC6\uFF0C\u4F7F\u7528\u7684\u7B97\u6CD5\u662F aes-128-cbc</span></span>
<span class="line"><span style="color:#A6ACCD;">    const decipher = crypto.createDecipheriv(&#39;aes-128-cbc&#39;, sessionKeyNew, ivNew);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BBE\u7F6E\u81EA\u52A8 padding \u4E3A true\uFF0C\u5220\u9664\u586B\u5145\u8865\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">    decipher.setAutoPadding(true);</span></span>
<span class="line"><span style="color:#A6ACCD;">    decoded = decipher.update(encryptedDataNew, &#39;binary&#39;, &#39;utf8&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    decoded += decipher.final(&#39;utf8&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    decoded = JSON.parse(decoded);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // decoded \u662F\u89E3\u5BC6\u540E\u7684\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  } catch (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(&#39;Illegal Buffer&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u89E3\u5BC6\u540E\u7684\u7528\u6237\u6570\u636E\u4E2D\u4F1A\u6709\u4E00\u4E2A watermark \u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4E2D\u5305\u542B\u8FD9\u4E2A\u5C0F\u7A0B\u5E8F\u7684 appid \u548C\u65F6\u95F4\u6233\uFF0C\u4E0B\u9762\u662F\u6821\u9A8C appid</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (decoded.watermark.appid !== appid) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(&#39;Illegal Buffer&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8FD4\u56DE\u89E3\u5BC6\u540E\u7684\u7528\u6237\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">  return decoded;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = decryptData;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// routes/users</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// ... \u5FFD\u7565\u4E0A\u6587</span></span>
<span class="line"><span style="color:#A6ACCD;">const models = require(&quot;../models&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const GROUP_NAME = &#39;user&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const JWT = require(&#39;jsonwebtoken&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const decryptData = require(&#39;../utils/decrypt-data&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">handler: async (req, reply) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ... \u5FFD\u7565\u901A\u8FC7\u5FAE\u4FE1\u63A5\u53E3\u83B7\u53D6 openid \u4E0E session_key \u7684\u4E0A\u6587</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { openid, session_key: sessionKey } = response.data;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u57FA\u4E8E openid \u67E5\u627E\u6216\u521B\u5EFA\u4E00\u4E2A\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">  const user = await models.users.findOrCreate({</span></span>
<span class="line"><span style="color:#A6ACCD;">    where: { open_id: openid },</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // decrypt \u89E3\u7801\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  const userInfo = decryptData(encryptedData, iv, sessionKey, appid);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u66F4\u65B0 user \u8868\u4E2D\u7684\u7528\u6237\u7684\u8D44\u6599\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  await models.users.update({</span></span>
<span class="line"><span style="color:#A6ACCD;">    nick_name: userInfo.nickName,</span></span>
<span class="line"><span style="color:#A6ACCD;">    gender: userInfo.gender,</span></span>
<span class="line"><span style="color:#A6ACCD;">    avatar_url: userInfo.avatarUrl,</span></span>
<span class="line"><span style="color:#A6ACCD;">    open_id: openid,</span></span>
<span class="line"><span style="color:#A6ACCD;">    session_key: sessionKey,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    where: { open_id: openid },</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7B7E\u53D1 jwt</span></span>
<span class="line"><span style="color:#A6ACCD;">  const generateJWT = (jwtInfo) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const payload = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      userId: jwtInfo.userId,</span></span>
<span class="line"><span style="color:#A6ACCD;">      exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    return JWT.sign(payload, config.jwtSecret);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  reply(generateJWT({</span></span>
<span class="line"><span style="color:#A6ACCD;">    userId: user[0].id,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// ... \u5FFD\u7565\u4E0B\u6587</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81F3\u6B64\uFF0C\u7528\u4E8E\u5C0F\u7A0B\u5E8F\u7684\u7528\u6237\u767B\u5F55\u9A8C\u8BC1\u7684 JWT \u7B7E\u53D1\u903B\u8F91\u5DF2\u5B8C\u6210\u3002</p><blockquote><p><strong>GitHub \u53C2\u8003\u4EE3\u7801</strong> <a href="https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter11/hapi-tutorial-1" target="_blank" rel="noreferrer">chapter11/hapi-tutorial-1</a></p></blockquote><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u5173\u952E\u8BCD\uFF1A\u5C0F\u7A0B\u5E8F\u767B\u5F55\uFF0C\u6570\u636E\u5E93\u589E\u91CF\u8FC1\u79FB</p><p>\u901A\u8FC7\u672C\u5C0F\u8282\u7684\u5B9E\u6218\u5B66\u4E60\uFF0C\u76F8\u4FE1\u540C\u5B66\u4EEC\u5BF9\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684\u7528\u6237\u6388\u6743\u767B\u5F55\u4E0E\u7528\u6237\u8868\u5982\u4F55\u65E0\u7F1D\u521B\u5EFA\u65B0\u7528\u6237\u6709\u4E86\u4E00\u4E2A\u5177\u4F53\u7684\u8BA4\u8BC6\u3002</p><p>\u800C\u4E0E\u7B2C\u4E09\u65B9\u7684\u7CFB\u7EDF\u505A\u63A5\u5165\u6574\u5408\uFF0C\u4E5F\u5E38\u5E38\u4F34\u968F\u7740\u5927\u91CF\u7684\u5BF9\u63A5\u89C4\u8303\u8981\u5C0F\u5FC3\u7FFC\u7FFC\u5730\u9075\u5FAA\uFF0C\u6BD4\u5982\u5C0F\u7A0B\u5E8F\u7684\u767B\u5F55\u63A5\u5165\u3002\u8FD9\u65B9\u9762\u7684\u9996\u6B21\u63A5\u89E6\u6CA1\u6709\u6377\u5F84\uFF0C\u53EF\u4EE5\u8003\u8651\u81EA\u884C\u62BD\u8C61\u5C01\u88C5\u4E00\u4E2A\u5C0F\u7A0B\u5E8F\u6388\u6743\u767B\u5F55\u7684\u7EC4\u4EF6\uFF0C\u6765\u964D\u4F4E\u65E5\u540E\u65B0\u7CFB\u7EDF\u63A5\u5165\u65F6\u7684\u590D\u6742\u5EA6\u3002</p><p>\u601D\u8003\uFF1A\u5982\u679C\u7CFB\u7EDF\u8BD5\u56FE\u52A0\u5165 QQ \u7B2C\u4E09\u65B9\u6388\u6743\u767B\u5F55\uFF0C\u8981\u600E\u6837\u6765\u5B9E\u73B0\uFF1F\u4E0E\u5C0F\u7A0B\u5E8F\u6388\u6743\u767B\u5F55\u662F\u5426\u76F8\u4F3C\uFF1F</p><p><strong>\u672C\u5C0F\u8282\u53C2\u8003\u4EE3\u7801\u6C47\u603B</strong></p><p><a href="https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter11/hapi-tutorial-1" target="_blank" rel="noreferrer">chapter11/hapi-tutorial-1</a></p>`,68),o=[l];function t(c,r,i,A,C,d){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{D as __pageData,u as default};
