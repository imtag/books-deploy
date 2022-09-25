import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const d=JSON.parse('{"title":"\u4F7F\u4F60\u7684\u9F20\u6807\u548C\u5C4F\u5E55\u4E92\u52A8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA Canvas \u5143\u7D20","slug":"\u521B\u5EFA-canvas-\u5143\u7D20","link":"#\u521B\u5EFA-canvas-\u5143\u7D20","children":[]},{"level":2,"title":"onmousemove \u4E8B\u4EF6","slug":"onmousemove-\u4E8B\u4EF6","link":"#onmousemove-\u4E8B\u4EF6","children":[]},{"level":2,"title":"\u8BBE\u7F6E color","slug":"\u8BBE\u7F6E-color","link":"#\u8BBE\u7F6E-color","children":[]},{"level":2,"title":"animate() \u51FD\u6570","slug":"animate-\u51FD\u6570","link":"#animate-\u51FD\u6570","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"\u5176\u4ED6/\u5982\u4F55\u4F7F\u7528 Canvas \u5236\u4F5C\u51FA\u70AB\u9177\u7684\u7F51\u9875\u80CC\u666F\u7279\u6548/\u4F7F\u4F60\u7684\u9F20\u6807\u548C\u5C4F\u5E55\u4E92\u52A8.md"}'),p={name:"\u5176\u4ED6/\u5982\u4F55\u4F7F\u7528 Canvas \u5236\u4F5C\u51FA\u70AB\u9177\u7684\u7F51\u9875\u80CC\u666F\u7279\u6548/\u4F7F\u4F60\u7684\u9F20\u6807\u548C\u5C4F\u5E55\u4E92\u52A8.md"},e=l(`<h1 id="\u4F7F\u4F60\u7684\u9F20\u6807\u548C\u5C4F\u5E55\u4E92\u52A8" tabindex="-1">\u4F7F\u4F60\u7684\u9F20\u6807\u548C\u5C4F\u5E55\u4E92\u52A8 <a class="header-anchor" href="#\u4F7F\u4F60\u7684\u9F20\u6807\u548C\u5C4F\u5E55\u4E92\u52A8" aria-hidden="true">#</a></h1><hr><h1 id="\u4F7F\u4F60\u7684\u9F20\u6807\u548C\u5C4F\u5E55\u4E92\u52A8-1" tabindex="-1">\u4F7F\u4F60\u7684\u9F20\u6807\u548C\u5C4F\u5E55\u4E92\u52A8 <a class="header-anchor" href="#\u4F7F\u4F60\u7684\u9F20\u6807\u548C\u5C4F\u5E55\u4E92\u52A8-1" aria-hidden="true">#</a></h1><p>\u5728\u7B2C 5 \u8282\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u968F\u673A\u7C92\u5B50\uFF1B\u7B2C 6 \u8282\uFF0C\u6211\u4EEC\u8BA9\u968F\u673A\u7C92\u5B50\u52A8\u4E86\u8D77\u6765\uFF0C\u5E76\u4E14\u7B80\u5355\u4ECB\u7ECD\u4E86 Canvas \u5236\u4F5C\u52A8\u753B\u7684\u539F\u7406\u3002</p><p>\u672C\u8282\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u4E00\u4E0B Canvas \u662F\u600E\u4E48\u548C\u6211\u4EEC\u7684\u9F20\u6807\u4E92\u52A8\u7684\u3002</p><p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E0B\u8FD9\u4E2A\u6548\u679C\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/12/10/1604102fd7c9ea23~tplv-t2oaga2asx-image.image" alt="\u9F20\u6807\u4E92\u52A8\u6548\u679C"></p><p>\u7136\u540E\u6211\u4EEC\u5206\u6790\u4E00\u4E0B\u8FD9\u4E2A\u6548\u679C\uFF1A\u9F20\u6807\u79FB\u52A8\uFF0C\u4F1A\u5728\u7ECF\u8FC7\u7684\u5730\u65B9\u521B\u5EFA\u4E00\u4E2A\u5706\uFF0C\u5706\u7684\u534A\u5F84\u7531\u5C0F\u53D8\u5927\uFF0C\u8FBE\u5230\u67D0\u4E2A\u56FA\u5B9A\u5927\u5C0F\u65F6\u8BE5\u5706\u6D88\u5931\u3002\u5706\u7684\u989C\u8272\u4E5F\u662F\u5728\u968F\u673A\u53D8\u5316\u7684\uFF08gif \u56FE\u7247\u65F6\u95F4\u8F83\u77ED\uFF0C\u6548\u679C\u4E0D\u660E\u663E\uFF09\u3002</p><h2 id="\u521B\u5EFA-canvas-\u5143\u7D20" tabindex="-1">\u521B\u5EFA Canvas \u5143\u7D20 <a class="header-anchor" href="#\u521B\u5EFA-canvas-\u5143\u7D20" aria-hidden="true">#</a></h2><p>\u9996\u5148\u6211\u4EEC\u8FD8\u662F\u8981\u521B\u5EFA\u5E76\u83B7\u53D6 Canvas \u5143\u7D20\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5BF9\u6B64\u6B65\u9AA4\u5E94\u8BE5\u5F88\u719F\u6089\u4E86\u5427\u3002</p><p>\u8FD9\u91CC\u4E5F\u987A\u5E26\u5C06\u9700\u8981\u7684\u53C2\u6570\u76F4\u63A5\u5199\u597D\u4E86\uFF0C\u6211\u4EEC\u5C06\u4E00\u4E9B\u53EF\u4EE5\u63A7\u5236\u7684\u53D8\u91CF\u76F4\u63A5\u5199\u5728\u53C2\u6570\u4E2D\uFF0C\u8FD9\u6837\u5728\u540E\u9762\u5C31\u53EF\u4EE5\u83B7\u53D6\u53C2\u6570\u76F4\u63A5\u4F7F\u7528\u3002\u8BBE\u7F6E\u53C2\u6570\u4E3B\u8981\u662F\u4E3A\u4E86\u66F4\u6539\u65B9\u4FBF\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;Title&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        * {</span></span>
<span class="line"><span style="color:#A6ACCD;">            padding: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        #canvas {</span></span>
<span class="line"><span style="color:#A6ACCD;">            background: #000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var canvas = document.getElementById(&#39;canvas&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">            ctx = canvas.getContext(&#39;2d&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">            WIDTH = canvas.width = document.documentElement.clientWidth,</span></span>
<span class="line"><span style="color:#A6ACCD;">            HEIGHT = canvas.height = document.documentElement.clientHeight,</span></span>
<span class="line"><span style="color:#A6ACCD;">            para = {</span></span>
<span class="line"><span style="color:#A6ACCD;">                num: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">                color: false,    //  \u989C\u8272  \u5982\u679C\u662Ffalse \u5219\u662F\u968F\u673A\u6E10\u53D8\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">                r: 0.9,          //   \u5706\u6BCF\u6B21\u589E\u52A0\u7684\u534A\u5F84 </span></span>
<span class="line"><span style="color:#A6ACCD;">                o: 0.09,         //      \u5224\u65AD\u5706\u6D88\u5931\u7684\u6761\u4EF6\uFF0C\u6570\u503C\u8D8A\u5927\uFF0C\u6D88\u5931\u7684\u8D8A\u5FEB</span></span>
<span class="line"><span style="color:#A6ACCD;">                a: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            color,</span></span>
<span class="line"><span style="color:#A6ACCD;">            color2,</span></span>
<span class="line"><span style="color:#A6ACCD;">            round_arr = [];     // \u5B58\u653E\u5706\u7684\u6570\u7EC4 </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u5C31\u521B\u5EFA\u4E00\u4E2A\u9ED1\u8272\u7684\u5168\u5C4F Canvas \u5143\u7D20\u3002</p><h2 id="onmousemove-\u4E8B\u4EF6" tabindex="-1"><code>onmousemove</code> \u4E8B\u4EF6 <a class="header-anchor" href="#onmousemove-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p>\u5728\u521B\u5EFA\u5B8C\u4E86 Canvas \u5143\u7D20\u4E4B\u540E\uFF0C\u6211\u4EEC\u8981\u5199\u9F20\u6807\u79FB\u52A8\u7684\u4E8B\u4EF6\u4E86\uFF0C\u6211\u4EEC\u8981\u8003\u8651\u4E00\u4E0B\u9F20\u6807\u4E8B\u4EF6\u600E\u4E48\u5199\u3002</p><p>\u89C2\u5BDF\u4E00\u4E0B\u521A\u521A\u7684 gif \u56FE\u7247\uFF0C\u53EF\u4EE5\u770B\u51FA\uFF0C\u5728\u9F20\u6807\u79FB\u52A8\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u65AD\u5730\u5728\u9F20\u6807\u6ED1\u8FC7\u7684\u4F4D\u7F6E\u4EA7\u751F\u4E00\u4E2A\u9010\u6E10\u53D8\u5927\u7684\u5706\u3002</p><p>\u90A3\u4E48\u600E\u4E48\u8BA9\u6548\u679C\u52A8\u8D77\u6765\u5462\uFF1F\u8FD9\u5C31\u7528\u5230\u7B2C 6 \u8282\u8BB2\u5230\u7684\u77E5\u8BC6\u4E86\uFF0C\u6211\u4EEC\u5728 Canvas \u4E2D\u521B\u5EFA\u52A8\u753B\u7684\u65B9\u5F0F\u5C31\u662F\u4E0D\u65AD\u5730\u6E05\u9664\u5C4F\u5E55\u5185\u5BB9\u7136\u540E\u91CD\u7ED8\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u79FB\u52A8\u7684\u8F68\u8FF9\u662F\u7531\u4E00\u4E2A\u4E00\u4E2A\u7684\u5706\u6784\u6210\u7684\uFF0C\u5982\u679C\u79FB\u52A8\u7684\u901F\u5EA6\u8FC7\u5FEB\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u660E\u663E\u770B\u51FA\u4E00\u4E2A\u4E00\u4E2A\u7684\u5706\u3002</p><p>\u65E2\u7136\u8F68\u8FF9\u662F\u7531\u5F88\u591A\u5706\u6784\u6210\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u5E94\u8BE5\u4F7F\u7528\u6570\u7EC4\u50A8\u5B58\u5706\u7684\u4FE1\u606F\uFF08\u5750\u6807\u3001\u534A\u5F84\uFF09\uFF0C\u7136\u540E\u5728\u9F20\u6807\u79FB\u52A8\u7684\u65F6\u5019\u5C06\u9F20\u6807\u7684\u4F4D\u7F6E\u4FE1\u606F\u50A8\u5B58\u5728\u6570\u7EC4\u4E2D\u3002</p><p>\u6240\u4EE5\u5728\u9F20\u6807\u79FB\u52A8\u7684\u8FC7\u7A0B\u6211\u4EEC\u9996\u5148\u8981\u83B7\u5F97\u9F20\u6807\u7684\u5750\u6807\uFF0C\u7136\u540E\u5C06\u9F20\u6807\u7684\u5750\u6807\u4EE5\u53CA\u5176\u4ED6\u4FE1\u606F push \u5230\u6570\u7EC4\u4E2D\u53BB\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">    window.onmousemove = function (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        mouseX = event.clientX;</span></span>
<span class="line"><span style="color:#A6ACCD;">        mouseY = event.clientY;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        round_arr.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">            mouseX: mouseX,</span></span>
<span class="line"><span style="color:#A6ACCD;">            mouseY: mouseY,</span></span>
<span class="line"><span style="color:#A6ACCD;">            r: para.r,  // \u8BBE\u7F6E\u534A\u5F84\u6BCF\u6B21\u589E\u5927\u7684\u6570\u503C        </span></span>
<span class="line"><span style="color:#A6ACCD;">            o: 1,    //  \u5224\u65AD\u5706\u6D88\u5931\u7684\u6761\u4EF6\uFF0C\u6570\u503C\u8D8A\u5927\uFF0C\u6D88\u5931\u5F97\u8D8A\u5FEB</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u8BBE\u7F6E-color" tabindex="-1">\u8BBE\u7F6E <code>color</code> <a class="header-anchor" href="#\u8BBE\u7F6E-color" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5706\u7684\u76F8\u5173\u4FE1\u606F\u50A8\u5B58\u5728 <code>round_arr</code> \u6570\u7EC4\u4E2D\u4E86\uFF0C\u73B0\u5728\u8981\u5728 <code>animate()</code> \u51FD\u6570\u4E2D\u5C06\u5706\u663E\u793A\u51FA\u6765\u3002<code>animate()</code> \u51FD\u6570\u6211\u4EEC\u7A0D\u540E\u518D\u4ECB\u7ECD\u3002</p><p>\u521B\u5EFA\u5706\u9700\u8981\u7684\u5750\u6807\u4FE1\u606F\u4EE5\u53CA\u534A\u5F84\uFF0C\u6211\u4EEC\u5728\u9F20\u6807\u79FB\u52A8\u7684\u4E8B\u4EF6\u4E2D\u90FD\u5DF2\u7ECF\u5C06\u5176 push \u5230 <code>round_arr</code> \u6570\u7EC4\u4E2D\u4E86\uFF0C\u8FD8\u6709\u4E00\u4E2A\u6761\u4EF6\u662F\u9700\u8981\u8BBE\u7F6E\u7684\uFF0C\u90A3\u5C31\u662F\u989C\u8272\u3002</p><p>\u600E\u4E48\u5BF9\u989C\u8272\u8FDB\u884C\u5904\u7406\u5462\uFF1F\u5728 <code>para</code> \u53C2\u6570\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0C\u5176\u4E2D\u6709\u8BBE\u7F6E <code>color</code> \u503C\u3002\u5982\u679C <code>color</code> \u503C\u4E0D\u4E3A <code>false</code>\uFF0C\u90A3\u4E48\u8BBE\u7F6E\u7684\u5706\u7684\u989C\u8272\u5C31\u662F\u8BBE\u7F6E\u7684 <code>color</code> \u503C\uFF1B\u5982\u679C\u8BBE\u7F6E\u7684 <code>color</code> \u503C\u4E3A <code>false</code>\uFF0C\u90A3\u4E48\u5706\u7684\u989C\u8272\u5C31\u662F\u968F\u673A\u7684\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if (para.color) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    color2 = para.color;</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    color = Math.random() * 360;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u90A3\u4E48\u600E\u4E48\u8BBE\u7F6E\u989C\u8272\u7684\u6E10\u53D8\u5462\uFF1F\u6211\u4EEC\u5C06 <code>color</code> \u7684\u989C\u8272\u503C\u4F9D\u6B21\u589E\u52A0\u4E00\u4E2A\u589E\u91CF\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if (!para.color) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    color += .1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    color2 = &#39;hsl(&#39; + color + &#39;,100%,80%)&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8981\u8BA9\u989C\u8272\u4E00\u76F4\u6539\u53D8\uFF0C\u6211\u4EEC\u8981\u5C06\u4E0A\u9762\u989C\u8272\u6539\u53D8\u7684\u4EE3\u7801\u653E\u5728\u4E00\u4E2A\u4E00\u76F4\u6267\u884C\u7684\u51FD\u6570\u3002\u6211\u4EEC\u5C06\u4E0A\u9762\u6539\u53D8\u989C\u8272\u7684\u4EE3\u7801\u653E\u5728\u4E0B\u9762\u6211\u4EEC\u8981\u4ECB\u7ECD\u7684 <code>animate()</code> \u51FD\u6570\u4E2D\u3002</p><h2 id="animate-\u51FD\u6570" tabindex="-1"><code>animate()</code> \u51FD\u6570 <a class="header-anchor" href="#animate-\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u4E00\u76F4\u5728\u6267\u884C\u7684\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u4E3B\u8981\u8D1F\u8D23\u52A8\u753B\u7684 <code>animate()</code> \u51FD\u6570\u3002\u4ECE\u51FD\u6570\u540D\u5C31\u53EF\u4EE5\u770B\u51FA\u8FD9\u4E2A\u51FD\u6570\u7684\u4F5C\u7528\uFF0C\u7684\u786E\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u8BE5\u51FD\u6570\u4E2D\u5199\u52A8\u753B\u3002</p><p>\u7B2C 6 \u8282\u5199\u52A8\u753B\u7684\u4E3B\u8981\u601D\u60F3\u662F \u2014\u2014 \u6E05\u9664\u5C4F\u5E55\u518D\u91CD\u65B0\u7ED8\u5236\uFF0C\u8FD9\u91CC\u7684 <code>animate()</code> \u51FD\u6570\u4E5F\u662F\u8FD9\u6837\u7684\u3002</p><p>\u6211\u4EEC\u5148\u6765\u6E05\u9664\u5C4F\u5E55\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ctx.clearRect(0, 0, WIDTH, HEIGHT);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u7740\u4F7F\u7528 <code>round_arr</code> \u6570\u7EC4\u4E2D\u7684\u6570\u636E\u5C06\u4E00\u4E2A\u4E00\u4E2A\u7684\u5706\u7ED8\u5236\u51FA\u6765\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">for (var i = 0; i &lt; round_arr.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.fillStyle = color2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.beginPath();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.arc( round_arr[i].mouseX ,round_arr[i].mouseY,round_arr[i].r,0, Math.PI * 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.closePath();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.fill();</span></span>
<span class="line"><span style="color:#A6ACCD;">    round_arr[i].r += para.r;</span></span>
<span class="line"><span style="color:#A6ACCD;">    round_arr[i].o -= para.o;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if( round_arr[i].o &lt;= 0){</span></span>
<span class="line"><span style="color:#A6ACCD;">        round_arr.splice(i,1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        i--;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u76F4\u6267\u884C\u8FD9\u4E2A\u51FD\u6570\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window.requestAnimationFrame(animate);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u6765\u770B\u4E0B\u5B8C\u6574\u7684 <code>animate()</code> \u51FD\u6570\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function animate() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!para.color) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        color += .1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        color2 = &#39;hsl(&#39; + color + &#39;,100%,80%)&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.clearRect(0, 0, WIDTH, HEIGHT);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for (var i = 0; i &lt; round_arr.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.fillStyle = color2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.beginPath();</span></span>
<span class="line"><span style="color:#A6ACCD;">         ctx.arc( round_arr[i].mouseX ,round_arr[i].mouseY,round_arr[i].r,0, Math.PI * 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.closePath();</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.fill();</span></span>
<span class="line"><span style="color:#A6ACCD;">        round_arr[i].r += para.r;</span></span>
<span class="line"><span style="color:#A6ACCD;">        round_arr[i].o -= para.o;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if( round_arr[i].o &lt;= 0){</span></span>
<span class="line"><span style="color:#A6ACCD;">            round_arr.splice(i,1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            i--;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    window.requestAnimationFrame(animate);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0A\uFF0C\u6211\u4EEC\u5C31\u5199\u5B8C\u4E86\u4E00\u4E2A\u5B8C\u6574\u7684\u9F20\u6807\u8DDF\u968F\u6548\u679C\u7684\u4F8B\u5B50\uFF0C\u8BA9\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u4E3B\u8981\u7684\u6709\u54EA\u4E9B\u6B65\u9AA4\uFF1A</p><ol><li>\u521B\u5EFA Canvas \u5143\u7D20\uFF0C\u8BBE\u7F6E\u53C2\u6570</li><li>\u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6\uFF0C\u5C06\u5750\u6807\u4FE1\u606F push \u5230\u6570\u7EC4</li><li>\u8BBE\u7F6E\u989C\u8272</li><li>\u8BBE\u7F6E\u52A8\u753B <code>animate()</code> \u51FD\u6570</li></ol><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u8FD9\u4E2A\u4F8B\u5B50\u7684\u5B8C\u6574\u4EE3\u7801\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;Title&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        * {</span></span>
<span class="line"><span style="color:#A6ACCD;">            padding: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        #canvas {</span></span>
<span class="line"><span style="color:#A6ACCD;">            background: #000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        var canvas = document.getElementById(&#39;canvas&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">            ctx = canvas.getContext(&#39;2d&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">            WIDTH = canvas.width = document.documentElement.clientWidth,</span></span>
<span class="line"><span style="color:#A6ACCD;">            HEIGHT = canvas.height = document.documentElement.clientHeight,</span></span>
<span class="line"><span style="color:#A6ACCD;">            para = {</span></span>
<span class="line"><span style="color:#A6ACCD;">                num: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">                color: false,    //  \u989C\u8272  \u5982\u679C\u662Ffalse \u5219\u662F\u968F\u673A\u6E10\u53D8\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">                r: 0.9,</span></span>
<span class="line"><span style="color:#A6ACCD;">                o: 0.09,         //  \u5224\u65AD\u5706\u6D88\u5931\u7684\u6761\u4EF6\uFF0C\u6570\u503C\u8D8A\u5927\uFF0C\u6D88\u5931\u7684\u8D8A\u5FEB</span></span>
<span class="line"><span style="color:#A6ACCD;">                a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            color,</span></span>
<span class="line"><span style="color:#A6ACCD;">            color2,</span></span>
<span class="line"><span style="color:#A6ACCD;">            round_arr = [];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        window.onmousemove = function (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            mouseX = event.clientX;</span></span>
<span class="line"><span style="color:#A6ACCD;">            mouseY = event.clientY;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            round_arr.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">                mouseX: mouseX,</span></span>
<span class="line"><span style="color:#A6ACCD;">                mouseY: mouseY,</span></span>
<span class="line"><span style="color:#A6ACCD;">                r: para.r,</span></span>
<span class="line"><span style="color:#A6ACCD;">                o: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5224\u65AD\u53C2\u6570\u4E2D\u662F\u5426\u8BBE\u7F6E\u4E86 color\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86 color\uFF0C\u5C31\u4F7F\u7528\u8BE5\u503C\u3001</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5982\u679C\u53C2\u6570\u4E2D\u7684 color \u4E3A false\uFF0C\u90A3\u4E48\u5C31\u4F7F\u7528\u968F\u673A\u7684\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (para.color) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            color2 = para.color;</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            color = Math.random() * 360;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        function animate() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!para.color) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                color += .1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                color2 = &#39;hsl(&#39; + color + &#39;,100%,80%)&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            ctx.clearRect(0, 0, WIDTH, HEIGHT);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            for (var i = 0; i &lt; round_arr.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                ctx.fillStyle = color2;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ctx.beginPath();</span></span>
<span class="line"><span style="color:#A6ACCD;">                ctx.arc( round_arr[i].mouseX ,round_arr[i].mouseY,round_arr[i].r,0, Math.PI * 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">                ctx.closePath();</span></span>
<span class="line"><span style="color:#A6ACCD;">                ctx.fill();</span></span>
<span class="line"><span style="color:#A6ACCD;">                round_arr[i].r += para.r;</span></span>
<span class="line"><span style="color:#A6ACCD;">                round_arr[i].o -= para.o;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if( round_arr[i].o &lt;= 0){</span></span>
<span class="line"><span style="color:#A6ACCD;">                    round_arr.splice(i,1);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    i--;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            window.requestAnimationFrame(animate);</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        animate();</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,45),o=[e];function c(t,r,C,A,i,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
