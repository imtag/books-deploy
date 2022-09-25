import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const D=JSON.parse('{"title":"\u600E\u4E48\u5B9E\u73B0\u968F\u673A\u7C92\u5B50","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u968F\u673A\u7C92\u5B50\u7279\u6548\u5206\u6790","slug":"\u968F\u673A\u7C92\u5B50\u7279\u6548\u5206\u6790","link":"#\u968F\u673A\u7C92\u5B50\u7279\u6548\u5206\u6790","children":[]},{"level":2,"title":"\u5B9E\u73B0\u968F\u673A\u7C92\u5B50\u7279\u6548","slug":"\u5B9E\u73B0\u968F\u673A\u7C92\u5B50\u7279\u6548","link":"#\u5B9E\u73B0\u968F\u673A\u7C92\u5B50\u7279\u6548","children":[{"level":3,"title":"\u521B\u5EFA\u5168\u5C4F Canvas","slug":"\u521B\u5EFA\u5168\u5C4F-canvas","link":"#\u521B\u5EFA\u5168\u5C4F-canvas","children":[]},{"level":3,"title":"\u8BBE\u7F6E Round_item \u7C7B","slug":"\u8BBE\u7F6E-round-item-\u7C7B","link":"#\u8BBE\u7F6E-round-item-\u7C7B","children":[]},{"level":3,"title":"\u8BBE\u7F6E draw() \u65B9\u6CD5","slug":"\u8BBE\u7F6E-draw-\u65B9\u6CD5","link":"#\u8BBE\u7F6E-draw-\u65B9\u6CD5","children":[]},{"level":3,"title":"\u8BBE\u7F6E\u521D\u59CB\u5316 init() \u51FD\u6570","slug":"\u8BBE\u7F6E\u521D\u59CB\u5316-init-\u51FD\u6570","link":"#\u8BBE\u7F6E\u521D\u59CB\u5316-init-\u51FD\u6570","children":[]}]}],"relativePath":"\u5176\u4ED6/\u5982\u4F55\u4F7F\u7528 Canvas \u5236\u4F5C\u51FA\u70AB\u9177\u7684\u7F51\u9875\u80CC\u666F\u7279\u6548/\u600E\u4E48\u5B9E\u73B0\u968F\u673A\u7C92\u5B50.md"}'),p={name:"\u5176\u4ED6/\u5982\u4F55\u4F7F\u7528 Canvas \u5236\u4F5C\u51FA\u70AB\u9177\u7684\u7F51\u9875\u80CC\u666F\u7279\u6548/\u600E\u4E48\u5B9E\u73B0\u968F\u673A\u7C92\u5B50.md"},e=l(`<h1 id="\u600E\u4E48\u5B9E\u73B0\u968F\u673A\u7C92\u5B50" tabindex="-1">\u600E\u4E48\u5B9E\u73B0\u968F\u673A\u7C92\u5B50 <a class="header-anchor" href="#\u600E\u4E48\u5B9E\u73B0\u968F\u673A\u7C92\u5B50" aria-hidden="true">#</a></h1><hr><h1 id="\u600E\u4E48\u5B9E\u73B0\u968F\u673A\u7C92\u5B50-1" tabindex="-1">\u600E\u4E48\u5B9E\u73B0\u968F\u673A\u7C92\u5B50 <a class="header-anchor" href="#\u600E\u4E48\u5B9E\u73B0\u968F\u673A\u7C92\u5B50-1" aria-hidden="true">#</a></h1><p>\u5728\u7B2C 4 \u8282\u4E2D\uFF0C\u6211\u4EEC\u5206\u6790\u4E86\u70AB\u9177\u80CC\u666F\u7279\u6548\u7684\u901A\u6027\u90FD\u6709\u54EA\u4E9B\uFF0C\u7ECF\u8FC7\u8FD9\u4E9B\u5206\u6790\uFF0C\u4F60\u662F\u4E0D\u662F\u5DF2\u7ECF\u624B\u75D2\u75D2\uFF0C\u60F3\u8981\u81EA\u5DF1\u5B9E\u73B0\u4E00\u756A\u4F46\u53C8\u4E0D\u77E5\u4ECE\u4F55\u4E0B\u624B\u5462\uFF1F</p><p>\u672C\u8282\uFF0C\u6211\u5C06\u5E26\u5927\u5BB6\u5B9E\u73B0\u5728\u70AB\u9177\u7F51\u9875\u80CC\u666F\u7279\u6548\u4E2D\u7684\u4E00\u4E2A\u6700\u5E38\u89C1\u7684\u6548\u679C\uFF1A\u968F\u673A\u7C92\u5B50\u3002</p><h2 id="\u968F\u673A\u7C92\u5B50\u7279\u6548\u5206\u6790" tabindex="-1">\u968F\u673A\u7C92\u5B50\u7279\u6548\u5206\u6790 <a class="header-anchor" href="#\u968F\u673A\u7C92\u5B50\u7279\u6548\u5206\u6790" aria-hidden="true">#</a></h2><p>\u5982\u679C\u53EA\u662F\u4E00\u4E2A\u7EAF\u8272\u6216\u8005\u6E10\u53D8\u7684\u80CC\u666F\uFF0C\u80AF\u5B9A\u4F1A\u663E\u5F97\u6709\u70B9\u5355\u8C03\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5728\u6E10\u53D8\u7684\u57FA\u7840\u4E0A\u52A0\u4E00\u70B9 \u201C\u6599\u201D\uFF0C\u800C\u8FD9\u4E9B \u201C\u6599\u201D\u901A\u5E38\u90FD\u662F\u7C92\u5B50\u7279\u6548\u3002 \u90A3\u4E48\u201C\u7C92\u5B50\u7279\u6548\u201D \u90FD\u6709\u4EC0\u4E48\u7279\u70B9\u5462\uFF1F</p><ul><li>\u7C92\u5B50</li><li>\u89C4\u5219\u56FE\u5F62</li><li>\u968F\u673A</li><li>\u6570\u91CF\u591A</li></ul><p>\u7C92\u5B50\u7279\u6548\u8FD9\u4E9B\u5E74\u8FD8\u662F\u6BD4\u8F83\u6D41\u884C\u7684\uFF0C\u597D\u591A\u5730\u65B9\u90FD\u53EF\u4EE5\u770B\u51FA\u4F7F\u7528\u4E86\u7C92\u5B50\u7279\u6548\u3002\u90A3\u4E48\u7C92\u5B50\u7279\u6548\u662F\u4EC0\u4E48\u5462\uFF1F</p><p>\u767E\u5EA6\u767E\u79D1\u4E2D\u5BF9\u7C92\u5B50\u7279\u6548\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><blockquote><p>\u5C06\u65E0\u6570\u7684\u5355\u4E2A\u7C92\u5B50\u7EC4\u5408\u4F7F\u5176\u5448\u73B0\u51FA\u56FA\u5B9A\u5F62\u6001\uFF0C\u501F\u7531\u63A7\u5236\u5668\uFF0C\u811A\u672C\u6765\u63A7\u5236\u5176\u6574\u4F53\u6216\u5355\u4E2A\u7684\u8FD0\u52A8\uFF0C\u6A21\u62DF\u51FA\u73B0\u771F\u5B9E\u7684\u6548\u679C\u3002</p></blockquote><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/12/1/16010035cb3889bd~tplv-t2oaga2asx-image.image" alt="\u7C92\u5B50\u7279\u6548"></p><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u7C92\u5B50\u7279\u6548\uFF0C\u4F7F\u7528\u82E5\u5E72\u7C92\u5B50\u6784\u6210\u6587\u5B57 \u201CHello World\u201D\uFF0C\u5E76\u4E14\u6BCF\u4E00\u4E2A\u7C92\u5B50\u90FD\u5728\u8FD0\u52A8\uFF0C\u548C\u7269\u7406\u5B66\u7684 \u201C\u7C92\u5B50\u201D \u6982\u5FF5\u7C7B\u4F3C\u3002</p><p>\u7C92\u5B50\u7279\u6548\u7684\u9996\u8981\u7279\u70B9\u662F\u6570\u91CF\u591A\uFF0C\u5728\u7269\u7406\u5B66\u4E2D\uFF0C\u7C92\u5B50\u662F\u80FD\u591F\u4EE5\u81EA\u7531\u72B6\u6001\u5B58\u5728\u7684\u6700\u5C0F\u7269\u8D28\u7EC4\u6210\u90E8\u5206\uFF0C\u6240\u4EE5\u7C92\u5B50\u7684\u7B2C\u4E00\u4E2A\u7279\u70B9\u5C31\u662F\u6570\u91CF\u591A\u3002</p><p>\u7C92\u5B50\u7279\u6548\u7684\u7B2C\u4E8C\u4E2A\u7279\u70B9\u662F\u8FD0\u52A8\uFF0C\u6B63\u662F\u56E0\u4E3A\u7EC4\u6210\u7269\u4F53\u7684\u7C92\u5B50\u5728\u4E0D\u65AD\u8FD0\u52A8\uFF0C\u6211\u4EEC\u624D\u80FD\u770B\u5230\u7269\u4F53\u5728\u4E0D\u65AD\u8FD0\u52A8\u3002</p><p>\u7C92\u5B50\u7279\u6548\u7B2C\u4E09\u4E2A\u7279\u70B9\u662F\u968F\u673A\uFF0C\u6392\u5217\u6709\u6574\u9F50\u6392\u5217\u4E4B\u7F8E\uFF0C\u51CC\u4E71\u6709\u51CC\u4E71\u4E4B\u7F8E\uFF0C\u6574\u9F50\u6392\u5217\u7684\u53EF\u4EE5\u76F4\u63A5\u5E73\u94FA\u80CC\u666F\u5B9E\u73B0\uFF0C\u76F4\u63A5\u4F7F\u7528 img \u56FE\u7247\u5C31\u53EF\u4EE5\u3002</p><p>\u4F46\u662F\u8981\u60F3\u6709\u968F\u673A\u6548\u679C\u4F7F\u7528 img \u56FE\u7247\u5C31\u4E0D\u53EF\u4EE5\u4E86\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E3B\u8981\u4F7F\u7528 Canvas \u5B9E\u73B0\u968F\u673A\u7C92\u5B50\u6548\u679C\u3002\u5404\u9879\u53C2\u6570\u90FD\u662F\u968F\u673A\u751F\u6210\u7684\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/28/1600344ace8124af~tplv-t2oaga2asx-image.image" alt="\u80CC\u666F\u6E10\u53D8"></p><p>\u8FD9\u4E2A\u4F8B\u5B50\u5DF2\u7ECF\u5F15\u7528\u597D\u591A\u904D\u4E86\u2565\uFE4F\u2565...\u4F46\u662F\u5B83\u771F\u7684\u662F\u5F88\u6709\u7279\u70B9\u554A\uFF0C\u70AB\u9177\u7279\u6548\u7684\u901A\u6027\u5168\u90E8\u90FD\u5360\u6709 o(<em>////\u25BD////</em>)q</p><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u80CC\u666F\u4E0A\u7684\u5C0F \u201C\u661F\u661F\u201D \u770B\u6210\u7C92\u5B50\u3002\u7C92\u5B50\u7684\u6570\u91CF\u662F\u53EF\u4EE5\u81EA\u5DF1\u8BBE\u7F6E\u7684\uFF0C\u4F4D\u7F6E\u662F\u968F\u673A\u51FA\u73B0\u7684\uFF0C\u5927\u5C0F\u4E5F\u662F\u968F\u673A\u751F\u6210\u7684\uFF0C\u5305\u62EC\u900F\u660E\u5EA6\u4E5F\u662F\u968F\u673A\u7684\uFF0C\u8FD9\u6837\u57FA\u672C\u4E0A\u6BCF\u4E00\u4E2A\u7C92\u5B50\u90FD\u662F\u72EC\u4E00\u65E0\u4E8C\u7684\u3002</p><p>\u7136\u540E\u7ED9\u7C92\u5B50\u8BBE\u7F6E\u9634\u5F71\u4EE5\u8425\u9020\u53D1\u5149\u7684\u7279\u6548\uFF0C\u7C92\u5B50\u5728\u4E0D\u65AD\u5730\u201C\u52A8\u201D\uFF0C\u505A\u4E0A\u5347\u8FD0\u52A8\u3002</p><p>\u4E3A\u4EC0\u4E48\u8BBE\u7F6E\u968F\u673A\u7C92\u5B50\u7279\u6548\u4F1A\u53D7\u6B22\u8FCE\u5462\uFF1F\u6211\u4EEC\u6765\u5206\u6790\u4E00\u4E0B\u3002\u9996\u5148\u662F\u6211\u4EEC\u751F\u6210\u7684\u6BCF\u4E00\u4E2A\u7C92\u5B50\u90FD\u662F\u72EC\u4E00\u65E0\u4E8C\u7684\uFF0C\u5E76\u4E14\u6BCF\u4E00\u6B21\u5237\u65B0\u4F4D\u7F6E\u90FD\u662F\u968F\u673A\u7684\u3002\u8FD9\u79CD\u6548\u679C\u662F\u4F7F\u7528\u5176\u4ED6\u65B9\u5F0F\u7ED8\u5236\u56FE\u5F62\u90FD\u5B9E\u73B0\u4E0D\u4E86\u7684\uFF08\u4F7F\u7528 svg \u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u662F\u672C\u5C0F\u518C\u4E0D\u5BF9 svg \u7ED8\u56FE\u505A\u8FC7\u591A\u7684\u4ECB\u7ECD\uFF8D(;\xB4\u0414\uFF40\uFF8D)\uFF09\u3002</p><h2 id="\u5B9E\u73B0\u968F\u673A\u7C92\u5B50\u7279\u6548" tabindex="-1">\u5B9E\u73B0\u968F\u673A\u7C92\u5B50\u7279\u6548 <a class="header-anchor" href="#\u5B9E\u73B0\u968F\u673A\u7C92\u5B50\u7279\u6548" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u6211\u4EEC\u6765\u4E00\u8D77\u5B9E\u73B0\u4E00\u4E2A\u968F\u673A\u7C92\u5B50\u7279\u6548\u3002</p><p>\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/12/2/16017ec2c15ef624~tplv-t2oaga2asx-image.image" alt="\u968F\u673A\u7C92\u5B50\u7279\u6548"></p><h3 id="\u521B\u5EFA\u5168\u5C4F-canvas" tabindex="-1">\u521B\u5EFA\u5168\u5C4F Canvas <a class="header-anchor" href="#\u521B\u5EFA\u5168\u5C4F-canvas" aria-hidden="true">#</a></h3><p>\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u5168\u5C4F\u7684 Canvas \u753B\u5E03\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;Title&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        html,body {</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin:0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            overflow:hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height:100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            cursor:none;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background:black;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var ctx = document.getElementById(&#39;canvas&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        content = ctx.getContext(&#39;2d&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        WIDTH,</span></span>
<span class="line"><span style="color:#A6ACCD;">        HEIGHT;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    WIDTH = document.documentElement.clientWidth;</span></span>
<span class="line"><span style="color:#A6ACCD;">    HEIGHT = document.documentElement.clientHeight;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.width = WIDTH;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.height = HEIGHT;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u4F7F\u7528 <code>WIDTH</code>\u3001<code>HEIGHT</code> \u4E24\u4E2A\u5E38\u91CF\u50A8\u5B58\u5C4F\u5E55\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u4FE1\u606F\uFF0C\u6211\u4EEC\u4E60\u60EF\u4F7F\u7528\u5927\u5199\u6765\u8868\u793A\u6539\u53D8\u91CF\u4E3A\u5E38\u91CF\uFF0C\u4E0D\u53EF\u53D8\uFF0C\u5C06\u5C4F\u5E55\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u4FE1\u606F\u50A8\u5B58\u5728\u5E38\u91CF\u4E2D\u662F\u56E0\u4E3A\u6211\u4EEC\u5728\u7A0D\u540E\u8FD8\u4F1A\u7528\u5230\u3002</p><p>\u8FD9\u65F6\uFF0C\u4F60\u5E94\u8BE5\u5F97\u5230\u4E00\u4E2A\u5168\u5C4F\u7684\u5E76\u4E14\u4E3A\u9ED1\u8272\u7684 Canvas\u3002</p><h3 id="\u8BBE\u7F6E-round-item-\u7C7B" tabindex="-1">\u8BBE\u7F6E <code>Round_item</code> \u7C7B <a class="header-anchor" href="#\u8BBE\u7F6E-round-item-\u7C7B" aria-hidden="true">#</a></h3><p>\u5728\u521B\u5EFA\u4E86\u4E00\u4E2A\u5168\u5C4F\u7684 Canvas \u4E4B\u540E\uFF0C\u6211\u4EEC\u6765\u521B\u5EFA\u5355\u4E2A\u7684 <code>Round_item</code> \u7C7B\u3002</p><p>\u9996\u5148\u6211\u4EEC <code>Round_item</code> \u7C7B\u9700\u8981\u6709\u4EC0\u4E48\u53C2\u6570\u5462\uFF1F\u6211\u4EEC\u8981\u8BBE\u7F6E\u7684\u662F\u4F4D\u7F6E\u968F\u673A\u3001\u900F\u660E\u5EA6\u968F\u673A\u3001\u534A\u5F84\u968F\u673A\u7684\u5706\u3002\u4E3A\u4E86\u533A\u5206\u4E0D\u540C\u7684\u5706\uFF0C\u6211\u4EEC\u8FD8\u5E94\u8BE5\u8BBE\u7F6E\u4E00\u4E2A\u552F\u4E00\u7684 <code>index</code> \u53C2\u6570\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u7684\u53C2\u6570\u6709\uFF1A</p><ul><li>x \u5750\u6807</li><li>y \u5750\u6807</li><li>\u534A\u5F84</li><li>\u900F\u660E\u5EA6</li><li>index</li></ul><p>\u6839\u636E\u4E0A\u9762\u8FD9\u4E9B\u53EF\u4EE5\u5F97\u51FA\u6211\u4EEC\u7684 <code>Round_item</code> \u7C7B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    function Round_item(index,x,y) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.index = index;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.x = x;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.y = y;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.r = Math.random() * 2 + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.color = &quot;rgba(255,255,255,&quot; + alpha + &quot;)&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u4E86\u6784\u9020\u51FD\u6570\u7684\u65B9\u5F0F\u6765\u521B\u5EFA\u5355\u4E2A\u7684\u5706\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E2A\u53D8\u91CF <code>initRoundPopulation</code> \u6765\u8BBE\u7F6E round \u7684\u4E2A\u6570\uFF0C\u7136\u540E\u6211\u4EEC\u4FBF\u53EF\u4EE5\u901A\u8FC7 <code>for</code> \u5FAA\u73AF\u521B\u5EFA\u51FA <code>initRoundPopulation</code> \u4E2A\u5706\u3002</p><h3 id="\u8BBE\u7F6E-draw-\u65B9\u6CD5" tabindex="-1">\u8BBE\u7F6E <code>draw()</code> \u65B9\u6CD5 <a class="header-anchor" href="#\u8BBE\u7F6E-draw-\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u5728\u8BBE\u7F6E\u4E86\u5355\u4E2A\u7684 <code>Round_item</code> \u7C7B\u4E4B\u540E\uFF0C\u6211\u4EEC\u8FD8\u8981\u7ED9\u6BCF\u4E00\u4E2A round \u8BBE\u7F6E <code>draw()</code> \u65B9\u6CD5\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5C06 <code>draw()</code> \u65B9\u6CD5\u8BBE\u7F6E\u5728 <code>Round_item</code> \u7684\u539F\u578B\u4E2D\uFF0C\u8FD9\u6837\u6211\u4EEC\u521B\u5EFA\u51FA\u6765\u7684\u6BCF\u4E00\u4E2A <code>Round_item</code> \u5B9E\u4F8B\u5BF9\u8C61\u90FD\u62E5\u6709\u4E86 <code>draw()</code> \u65B9\u6CD5\u3002</p><p><code>draw()</code> \u65B9\u6CD5\u7684\u5185\u5BB9\u5C31\u662F\u6211\u4EEC\u7B2C 3 \u8282\u8BB2\u5230\u7684\u753B\u5706\u7684\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u4E5F\u5C31\u4E0D\u518D\u8FC7\u591A\u7684\u8BF4\u660E\u4E86\uFF0C\u5FD8\u8BB0\u7684\u5FEB\u53BB\u7B2C 3 \u8282\u8865\u4E60\u8865\u4E60\u30FD(\uFF1B\xB4\u0414\uFF40)\uFF89</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    Round_item.prototype.draw = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.fillStyle = this.color;</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.shadowBlur = this.r * 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.beginPath();</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.closePath();</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.fill();</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u8BBE\u7F6E\u521D\u59CB\u5316-init-\u51FD\u6570" tabindex="-1">\u8BBE\u7F6E\u521D\u59CB\u5316 <code>init()</code> \u51FD\u6570 <a class="header-anchor" href="#\u8BBE\u7F6E\u521D\u59CB\u5316-init-\u51FD\u6570" aria-hidden="true">#</a></h3><p>\u7136\u540E\u6211\u4EEC\u5C31\u9700\u8981\u8BBE\u7F6E\u521D\u59CB\u5316 <code>init()</code> \u51FD\u6570\u4E86\uFF0C\u5728 <code>init()</code> \u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u7684\u4E3B\u8981\u4EFB\u52A1\u662F\u521B\u5EFA\u5355\u4E2A\u7684 round\uFF0C\u7136\u540E\u4F7F\u7528\u5176 <code>draw()</code> \u65B9\u6CD5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    function init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for(var i = 0; i &lt; initRoundPopulation; i++ ){</span></span>
<span class="line"><span style="color:#A6ACCD;">            round[i] = new Round_item(i,Math.random() * WIDTH,Math.random() * HEIGHT);</span></span>
<span class="line"><span style="color:#A6ACCD;">            round[i].draw();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81F3\u6B64\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B8C\u6210\u4E86\u968F\u673A\u7C92\u5B50\u7684\u5B9E\u73B0\uFF0C\u5B8C\u6574\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;Title&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        html,body {</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin:0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            overflow:hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height:100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            cursor:none;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background:black;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var ctx = document.getElementById(&#39;canvas&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        content = ctx.getContext(&#39;2d&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        round = [],</span></span>
<span class="line"><span style="color:#A6ACCD;">        WIDTH,</span></span>
<span class="line"><span style="color:#A6ACCD;">        HEIGHT,</span></span>
<span class="line"><span style="color:#A6ACCD;">        initRoundPopulation = 80;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    WIDTH = document.documentElement.clientWidth;</span></span>
<span class="line"><span style="color:#A6ACCD;">    HEIGHT = document.documentElement.clientHeight;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.width = WIDTH;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.height = HEIGHT;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function Round_item(index,x,y) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.index = index;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.x = x;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.y = y;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.r = Math.random() * 2 + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.color = &quot;rgba(255,255,255,&quot; + alpha + &quot;)&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    Round_item.prototype.draw = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.fillStyle = this.color;</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.shadowBlur = this.r * 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.beginPath();</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.closePath();</span></span>
<span class="line"><span style="color:#A6ACCD;">        content.fill();</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for(var i = 0; i &lt; initRoundPopulation; i++ ){</span></span>
<span class="line"><span style="color:#A6ACCD;">            round[i] = new Round_item(i,Math.random() * WIDTH,Math.random() * HEIGHT);</span></span>
<span class="line"><span style="color:#A6ACCD;">            round[i].draw();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    init();</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u968F\u610F\u5199\u7684\u4EE3\u7801\uFF0C\u6B22\u8FCE\u5927\u5BB6 review~</p>`,49),o=[e];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
