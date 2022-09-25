import{_ as n,c as s,o as a,d as e}from"./app.c4f45da1.js";const D=JSON.parse('{"title":"\u6570\u636E\u72B6\u6001\u66F4\u65B0\u65F6\u7684\u5DEE\u5F02 diff \u53CA patch \u673A\u5236","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u636E\u66F4\u65B0\u89C6\u56FE","slug":"\u6570\u636E\u66F4\u65B0\u89C6\u56FE","link":"#\u6570\u636E\u66F4\u65B0\u89C6\u56FE","children":[]},{"level":2,"title":"\u8DE8\u5E73\u53F0","slug":"\u8DE8\u5E73\u53F0","link":"#\u8DE8\u5E73\u53F0","children":[]},{"level":2,"title":"\u4E00\u4E9BAPI","slug":"\u4E00\u4E9Bapi","link":"#\u4E00\u4E9Bapi","children":[]},{"level":2,"title":"patch","slug":"patch","link":"#patch","children":[]},{"level":2,"title":"sameVnode","slug":"samevnode","link":"#samevnode","children":[]},{"level":2,"title":"patchVnode","slug":"patchvnode","link":"#patchvnode","children":[]},{"level":2,"title":"updateChildren","slug":"updatechildren","link":"#updatechildren","children":[]}],"relativePath":"Vue.js/\u5256\u6790 Vue.js \u5185\u90E8\u8FD0\u884C\u673A\u5236/\u6570\u636E\u72B6\u6001\u66F4\u65B0\u65F6\u7684\u5DEE\u5F02 diff \u53CA patch \u673A\u5236.md"}'),l={name:"Vue.js/\u5256\u6790 Vue.js \u5185\u90E8\u8FD0\u884C\u673A\u5236/\u6570\u636E\u72B6\u6001\u66F4\u65B0\u65F6\u7684\u5DEE\u5F02 diff \u53CA patch \u673A\u5236.md"},p=e(`<h1 id="\u6570\u636E\u72B6\u6001\u66F4\u65B0\u65F6\u7684\u5DEE\u5F02-diff-\u53CA-patch-\u673A\u5236" tabindex="-1">\u6570\u636E\u72B6\u6001\u66F4\u65B0\u65F6\u7684\u5DEE\u5F02 diff \u53CA patch \u673A\u5236 <a class="header-anchor" href="#\u6570\u636E\u72B6\u6001\u66F4\u65B0\u65F6\u7684\u5DEE\u5F02-diff-\u53CA-patch-\u673A\u5236" aria-hidden="true">#</a></h1><hr><h1 id="\u6570\u636E\u72B6\u6001\u66F4\u65B0\u65F6\u7684\u5DEE\u5F02-diff-\u53CA-patch-\u673A\u5236-1" tabindex="-1">\u6570\u636E\u72B6\u6001\u66F4\u65B0\u65F6\u7684\u5DEE\u5F02 diff \u53CA patch \u673A\u5236 <a class="header-anchor" href="#\u6570\u636E\u72B6\u6001\u66F4\u65B0\u65F6\u7684\u5DEE\u5F02-diff-\u53CA-patch-\u673A\u5236-1" aria-hidden="true">#</a></h1><h2 id="\u6570\u636E\u66F4\u65B0\u89C6\u56FE" tabindex="-1">\u6570\u636E\u66F4\u65B0\u89C6\u56FE <a class="header-anchor" href="#\u6570\u636E\u66F4\u65B0\u89C6\u56FE" aria-hidden="true">#</a></h2><p>\u4E4B\u524D\u8BB2\u5230\uFF0C\u5728\u5BF9 <code>model</code> \u8FDB\u884C\u64CD\u4F5C\u5BF9\u65F6\u5019\uFF0C\u4F1A\u89E6\u53D1\u5BF9\u5E94 <code>Dep</code> \u4E2D\u7684 <code>Watcher</code> \u5BF9\u8C61\u3002<code>Watcher</code> \u5BF9\u8C61\u4F1A\u8C03\u7528\u5BF9\u5E94\u7684 <code>update</code> \u6765\u4FEE\u6539\u89C6\u56FE\u3002\u6700\u7EC8\u662F\u5C06\u65B0\u4EA7\u751F\u7684 VNode \u8282\u70B9\u4E0E\u8001 VNode \u8FDB\u884C\u4E00\u4E2A <code>patch</code> \u7684\u8FC7\u7A0B\uFF0C\u6BD4\u5BF9\u5F97\u51FA\u300C\u5DEE\u5F02\u300D\uFF0C\u6700\u7EC8\u5C06\u8FD9\u4E9B\u300C\u5DEE\u5F02\u300D\u66F4\u65B0\u5230\u89C6\u56FE\u4E0A\u3002</p><p>\u8FD9\u4E00\u7AE0\u5C31\u6765\u4ECB\u7ECD\u4E00\u4E0B\u8FD9\u4E2A <code>patch</code> \u7684\u8FC7\u7A0B\uFF0C\u56E0\u4E3A <code>patch</code> \u8FC7\u7A0B\u672C\u8EAB\u6BD4\u8F83\u590D\u6742\uFF0C\u8FD9\u4E00\u7AE0\u7684\u5185\u5BB9\u4F1A\u6BD4\u8F83\u591A\uFF0C\u4F46\u662F\u4E0D\u8981\u5BB3\u6015\uFF0C\u6211\u4EEC\u9010\u5757\u4EE3\u7801\u53BB\u770B\uFF0C\u4E00\u5B9A\u53EF\u4EE5\u7406\u89E3\u3002</p><h2 id="\u8DE8\u5E73\u53F0" tabindex="-1">\u8DE8\u5E73\u53F0 <a class="header-anchor" href="#\u8DE8\u5E73\u53F0" aria-hidden="true">#</a></h2><p>\u56E0\u4E3A\u4F7F\u7528\u4E86 Virtual DOM \u7684\u539F\u56E0\uFF0CVue.js\u5177\u6709\u4E86\u8DE8\u5E73\u53F0\u7684\u80FD\u529B\uFF0CVirtual DOM \u7EC8\u5F52\u53EA\u662F\u4E00\u4E9B JavaScript \u5BF9\u8C61\u7F62\u4E86\uFF0C\u90A3\u4E48\u6700\u7EC8\u662F\u5982\u4F55\u8C03\u7528\u4E0D\u540C\u5E73\u53F0\u7684 API \u7684\u5462\uFF1F</p><p>\u8FD9\u5C31\u9700\u8981\u4F9D\u8D56\u4E00\u5C42\u9002\u914D\u5C42\u4E86\uFF0C\u5C06\u4E0D\u540C\u5E73\u53F0\u7684 API \u5C01\u88C5\u5728\u5185\uFF0C\u4EE5\u540C\u6837\u7684\u63A5\u53E3\u5BF9\u5916\u63D0\u4F9B\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const nodeOps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTextContent (text) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (platform === &#39;weex&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            node.parentNode.setAttr(&#39;value&#39;, text);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (platform === &#39;web&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            node.textContent = text;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    parentNode () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //......</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeChild () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //......</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    nextSibling () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //......</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    insertBefore () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //......</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u73B0\u5728\u6211\u4EEC\u6709\u4E0A\u8FF0\u4E00\u4E2A <code>nodeOps</code> \u5BF9\u8C61\u505A\u9002\u914D\uFF0C\u6839\u636E platform \u533A\u5206\u4E0D\u540C\u5E73\u53F0\u6765\u6267\u884C\u5F53\u524D\u5E73\u53F0\u5BF9\u5E94\u7684API\uFF0C\u800C\u5BF9\u5916\u5219\u662F\u63D0\u4F9B\u4E86\u4E00\u81F4\u7684\u63A5\u53E3\uFF0C\u4F9B Virtual DOM \u6765\u8C03\u7528\u3002</p><h2 id="\u4E00\u4E9Bapi" tabindex="-1">\u4E00\u4E9BAPI <a class="header-anchor" href="#\u4E00\u4E9Bapi" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u4ECB\u7ECD\u5176\u4ED6\u7684\u4E00\u4E9B API\uFF0C\u8FD9\u4E9BAPI\u5728\u4E0B\u9762 <code>patch</code> \u7684\u8FC7\u7A0B\u4E2D\u4F1A\u88AB\u7528\u5230\uFF0C\u4ED6\u4EEC\u6700\u7EC8\u90FD\u4F1A\u8C03\u7528 <code>nodeOps</code> \u4E2D\u7684\u76F8\u5E94\u51FD\u6570\u6765\u64CD\u4F5C\u5E73\u53F0\u3002</p><p><code>insert</code> \u7528\u6765\u5728 <code>parent</code> \u8FD9\u4E2A\u7236\u8282\u70B9\u4E0B\u63D2\u5165\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u5982\u679C\u6307\u5B9A\u4E86 <code>ref</code> \u5219\u63D2\u5165\u5230 <code>ref</code> \u8FD9\u4E2A\u5B50\u8282\u70B9\u524D\u9762\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function insert (parent, elm, ref) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (ref) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (ref.parentNode === parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                nodeOps.insertBefore(parent, elm, ref);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            nodeOps.appendChild(parent, elm)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>createElm</code> \u7528\u6765\u65B0\u5EFA\u4E00\u4E2A\u8282\u70B9\uFF0C <code>tag</code> \u5B58\u5728\u521B\u5EFA\u4E00\u4E2A\u6807\u7B7E\u8282\u70B9\uFF0C\u5426\u5219\u521B\u5EFA\u4E00\u4E2A\u6587\u672C\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function createElm (vnode, parentElm, refElm) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (vnode.tag) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        insert(parentElm, nodeOps.createElement(vnode.tag), refElm);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        insert(parentElm, nodeOps.createTextNode(vnode.text), refElm);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>addVnodes</code> \u7528\u6765\u6279\u91CF\u8C03\u7528 <code>createElm</code> \u65B0\u5EFA\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (; startIdx &lt;= endIdx; ++startIdx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        createElm(vnodes[startIdx], parentElm, refElm);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>removeNode</code> \u7528\u6765\u79FB\u9664\u4E00\u4E2A\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function removeNode (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const parent = nodeOps.parentNode(el);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        nodeOps.removeChild(parent, el);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>removeVnodes</code> \u4F1A\u6279\u91CF\u8C03\u7528 <code>removeNode</code> \u79FB\u9664\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function removeVnodes (parentElm, vnodes, startIdx, endIdx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (; startIdx &lt;= endIdx; ++startIdx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const ch = vnodes[startIdx]</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (ch) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            removeNode(ch.elm);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="patch" tabindex="-1">patch <a class="header-anchor" href="#patch" aria-hidden="true">#</a></h2><p>\u9996\u5148\u8BF4\u4E00\u4E0B <code>patch</code> \u7684\u6838\u5FC3 diff \u7B97\u6CD5\uFF0C\u6211\u4EEC\u7528 diff \u7B97\u6CD5\u53EF\u4EE5\u6BD4\u5BF9\u51FA\u4E24\u9897\u6811\u7684\u300C\u5DEE\u5F02\u300D\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\uFF0C\u5047\u8BBE\u6211\u4EEC\u73B0\u5728\u6709\u5982\u4E0B\u4E24\u9897\u6811\uFF0C\u5B83\u4EEC\u5206\u522B\u662F\u65B0\u8001 VNode \u8282\u70B9\uFF0C\u8FD9\u65F6\u5019\u5230\u4E86 <code>patch</code> \u7684\u8FC7\u7A0B\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u4ED6\u4EEC\u8FDB\u884C\u6BD4\u5BF9\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/12/28/1609be691ed64525~tplv-t2oaga2asx-image.image" alt=""></p><p>diff \u7B97\u6CD5\u662F\u901A\u8FC7\u540C\u5C42\u7684\u6811\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83\u800C\u975E\u5BF9\u6811\u8FDB\u884C\u9010\u5C42\u641C\u7D22\u904D\u5386\u7684\u65B9\u5F0F\uFF0C\u6240\u4EE5\u65F6\u95F4\u590D\u6742\u5EA6\u53EA\u6709 O(n)\uFF0C\u662F\u4E00\u79CD\u76F8\u5F53\u9AD8\u6548\u7684\u7B97\u6CD5\uFF0C\u5982\u4E0B\u56FE\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/12/28/1609be700a80c98a~tplv-t2oaga2asx-image.image" alt=""></p><p>\u3002</p><p>\u8FD9\u5F20\u56FE\u4E2D\u7684\u76F8\u540C\u989C\u8272\u7684\u65B9\u5757\u4E2D\u7684\u8282\u70B9\u4F1A\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u6BD4\u5BF9\u5F97\u5230\u300C<strong>\u5DEE\u5F02</strong>\u300D\u540E\u5C06\u8FD9\u4E9B\u300C<strong>\u5DEE\u5F02</strong>\u300D\u66F4\u65B0\u5230\u89C6\u56FE\u4E0A\u3002\u56E0\u4E3A\u53EA\u8FDB\u884C\u540C\u5C42\u7EA7\u7684\u6BD4\u5BF9\uFF0C\u6240\u4EE5\u5341\u5206\u9AD8\u6548\u3002</p><p><code>patch</code> \u7684\u8FC7\u7A0B\u76F8\u5F53\u590D\u6742\uFF0C\u6211\u4EEC\u5148\u7528\u7B80\u5355\u7684\u4EE3\u7801\u6765\u770B\u4E00\u4E0B\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function patch (oldVnode, vnode, parentElm) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!oldVnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        addVnodes(parentElm, null, vnode, 0, vnode.length - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (!vnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (sameVnode(oldVNode, vnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            patchVnode(oldVNode, vnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            addVnodes(parentElm, null, vnode, 0, vnode.length - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u56E0\u4E3A <code>patch</code> \u7684\u4E3B\u8981\u529F\u80FD\u662F\u6BD4\u5BF9\u4E24\u4E2A VNode \u8282\u70B9\uFF0C\u5C06\u300C\u5DEE\u5F02\u300D\u66F4\u65B0\u5230\u89C6\u56FE\u4E0A\uFF0C\u6240\u4EE5\u5165\u53C2\u6709\u65B0\u8001\u4E24\u4E2A VNode \u4EE5\u53CA\u7236\u8282\u70B9\u7684 element \u3002\u6211\u4EEC\u6765\u9010\u6B65\u634B\u4E00\u4E0B\u903B\u8F91\uFF0C <code>addVnodes</code> \u3001 <code>removeVnodes</code> \u7B49\u51FD\u6570\u540E\u9762\u4F1A\u8BB2\u3002</p><p>\u9996\u5148\u5728 <code>oldVnode</code>\uFF08\u8001 VNode \u8282\u70B9\uFF09\u4E0D\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u76F8\u5F53\u4E8E\u65B0\u7684 VNode \u66FF\u4EE3\u539F\u672C\u6CA1\u6709\u7684\u8282\u70B9\uFF0C\u6240\u4EE5\u76F4\u63A5\u7528 <code>addVnodes</code> \u5C06\u8FD9\u4E9B\u8282\u70B9\u6279\u91CF\u6DFB\u52A0\u5230 <code>parentElm</code> \u4E0A\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (!oldVnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    addVnodes(parentElm, null, vnode, 0, vnode.length - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u540C\u7406\uFF0C\u5728 <code>vnode</code>\uFF08\u65B0 VNode \u8282\u70B9\uFF09\u4E0D\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u76F8\u5F53\u4E8E\u8981\u628A\u8001\u7684\u8282\u70B9\u5220\u9664\uFF0C\u6240\u4EE5\u76F4\u63A5\u4F7F\u7528 <code>removeVnodes</code> \u8FDB\u884C\u6279\u91CF\u7684\u8282\u70B9\u5220\u9664\u5373\u53EF\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">else if (!vnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u4E00\u79CD\u60C5\u51B5\uFF0C\u5F53 <code>oldVNode</code> \u4E0E <code>vnode</code> \u90FD\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5224\u65AD\u5B83\u4EEC\u662F\u5426\u5C5E\u4E8E <code>sameVnode</code>\uFF08\u76F8\u540C\u7684\u8282\u70B9\uFF09\u3002\u5982\u679C\u662F\u5219\u8FDB\u884CpatchVnode\uFF08\u6BD4\u5BF9 VNode \uFF09\u64CD\u4F5C\uFF0C\u5426\u5219\u5220\u9664\u8001\u8282\u70B9\uFF0C\u589E\u52A0\u65B0\u8282\u70B9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (sameVnode(oldVNode, vnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    patchVnode(oldVNode, vnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    addVnodes(parentElm, null, vnode, 0, vnode.length - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="samevnode" tabindex="-1">sameVnode <a class="header-anchor" href="#samevnode" aria-hidden="true">#</a></h2><p>\u4E0A\u9762\u8FD9\u4E9B\u6BD4\u8F83\u597D\u7406\u89E3\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u770B\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4E24\u4E2A VNode \u4F1A\u5C5E\u4E8E <code>sameVnode</code> \uFF08\u76F8\u540C\u7684\u8282\u70B9\uFF09\u5462\uFF1F</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function sameVnode () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        a.key === b.key &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        a.tag === b.tag &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        a.isComment === b.isComment &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        (!!a.data) === (!!b.data) &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        sameInputType(a, b)</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function sameInputType (a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (a.tag !== &#39;input&#39;) return true</span></span>
<span class="line"><span style="color:#A6ACCD;">    let i</span></span>
<span class="line"><span style="color:#A6ACCD;">    const typeA = (i = a.data) &amp;&amp; (i = i.attrs) &amp;&amp; i.type</span></span>
<span class="line"><span style="color:#A6ACCD;">    const typeB = (i = b.data) &amp;&amp; (i = i.attrs) &amp;&amp; i.type</span></span>
<span class="line"><span style="color:#A6ACCD;">    return typeA === typeB</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>sameVnode</code> \u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u53EA\u6709\u5F53 <code>key</code>\u3001 <code>tag</code>\u3001 <code>isComment</code>\uFF08\u662F\u5426\u4E3A\u6CE8\u91CA\u8282\u70B9\uFF09\u3001 <code>data</code>\u540C\u65F6\u5B9A\u4E49\uFF08\u6216\u4E0D\u5B9A\u4E49\uFF09\uFF0C\u540C\u65F6\u6EE1\u8DB3\u5F53\u6807\u7B7E\u7C7B\u578B\u4E3A input \u7684\u65F6\u5019 type \u76F8\u540C\uFF08\u67D0\u4E9B\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u52A8\u6001\u4FEE\u6539&lt;input&gt;\u7C7B\u578B\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u88AB\u89C6\u4E3A\u4E0D\u540C\u7C7B\u578B\uFF09\u5373\u53EF\u3002</p><h2 id="patchvnode" tabindex="-1">patchVnode <a class="header-anchor" href="#patchvnode" aria-hidden="true">#</a></h2><p>\u4E4B\u524Dpatch\u7684\u8FC7\u7A0B\u8FD8\u5269\u4E0B <code>patchVnode</code> \u8FD9\u4E2A\u51FD\u6570\u6CA1\u6709\u8BB2\uFF0C\u8FD9\u4E5F\u662F\u6700\u590D\u6742\u7684\u4E00\u4E2A\uFF0C\u6211\u4EEC\u73B0\u5728\u6765\u770B\u4E00\u4E0B\u3002\u56E0\u4E3A\u8FD9\u4E2A\u51FD\u6570\u662F\u5728\u7B26\u5408 <code>sameVnode</code> \u7684\u6761\u4EF6\u4E0B\u89E6\u53D1\u7684\uFF0C\u6240\u4EE5\u4F1A\u8FDB\u884C\u300C<strong>\u6BD4\u5BF9</strong>\u300D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function patchVnode (oldVnode, vnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (oldVnode === vnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (vnode.isStatic &amp;&amp; oldVnode.isStatic &amp;&amp; vnode.key === oldVnode.key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        vnode.elm = oldVnode.elm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        vnode.componentInstance = oldVnode.componentInstance;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const elm = vnode.elm = oldVnode.elm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const oldCh = oldVnode.children;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const ch = vnode.children;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (vnode.text) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        nodeOps.setTextContent(elm, vnode.text);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (oldCh &amp;&amp; ch &amp;&amp; (oldCh !== ch)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            updateChildren(elm, oldCh, ch);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (ch) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (oldVnode.text) nodeOps.setTextContent(elm, &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            addVnodes(elm, null, ch, 0, ch.length - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (oldCh) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            removeVnodes(elm, oldCh, 0, oldCh.length - 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (oldVnode.text) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            nodeOps.setTextContent(elm, &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9996\u5148\u5728\u65B0\u8001 VNode \u8282\u70B9\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C31\u4E0D\u9700\u8981\u505A\u4EFB\u4F55\u6539\u53D8\u4E86\uFF0C\u76F4\u63A5 return \u6389\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (oldVnode === vnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0B\u9762\u7684\u8FD9\u79CD\u60C5\u51B5\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u5728\u5F53\u65B0\u8001 VNode \u8282\u70B9\u90FD\u662F <code>isStatic</code>\uFF08\u9759\u6001\u7684\uFF09\uFF0C\u5E76\u4E14 <code>key</code> \u76F8\u540C\u65F6\uFF0C\u53EA\u8981\u5C06 <code>componentInstance</code> \u4E0E <code>elm</code> \u4ECE\u8001 VNode \u8282\u70B9\u201C\u62FF\u8FC7\u6765\u201D\u5373\u53EF\u3002\u8FD9\u91CC\u7684 <code>isStatic</code> \u4E5F\u5C31\u662F\u524D\u9762\u63D0\u5230\u8FC7\u7684\u300C\u7F16\u8BD1\u300D\u7684\u65F6\u5019\u4F1A\u5C06\u9759\u6001\u8282\u70B9\u6807\u8BB0\u51FA\u6765\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u8DF3\u8FC7\u6BD4\u5BF9\u7684\u8FC7\u7A0B\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (vnode.isStatic &amp;&amp; oldVnode.isStatic &amp;&amp; vnode.key === oldVnode.key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    vnode.elm = oldVnode.elm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    vnode.componentInstance = oldVnode.componentInstance;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u4E0B\u6765\uFF0C\u5F53\u65B0 VNode \u8282\u70B9\u662F\u6587\u672C\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u7528 <code>setTextContent</code> \u6765\u8BBE\u7F6E text\uFF0C\u8FD9\u91CC\u7684 <code>nodeOps</code> \u662F\u4E00\u4E2A\u9002\u914D\u5C42\uFF0C\u6839\u636E\u4E0D\u540C\u5E73\u53F0\u63D0\u4F9B\u4E0D\u540C\u7684\u64CD\u4F5C\u5E73\u53F0 DOM \u7684\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u8DE8\u5E73\u53F0\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (vnode.text) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    nodeOps.setTextContent(elm, vnode.text);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u65B0 VNode \u8282\u70B9\u662F\u975E\u6587\u672C\u8282\u70B9\u5F53\u65F6\u5019\uFF0C\u9700\u8981\u5206\u51E0\u79CD\u60C5\u51B5\u3002</p><ul><li><code>oldCh</code> \u4E0E <code>ch</code> \u90FD\u5B58\u5728\u4E14\u4E0D\u76F8\u540C\u65F6\uFF0C\u4F7F\u7528 <code>updateChildren</code> \u51FD\u6570\u6765\u66F4\u65B0\u5B50\u8282\u70B9\uFF0C\u8FD9\u4E2A\u540E\u9762\u91CD\u70B9\u8BB2\u3002</li><li>\u5982\u679C\u53EA\u6709 <code>ch</code> \u5B58\u5728\u7684\u65F6\u5019\uFF0C\u5982\u679C\u8001\u8282\u70B9\u662F\u6587\u672C\u8282\u70B9\u5219\u5148\u5C06\u8282\u70B9\u7684\u6587\u672C\u6E05\u9664\uFF0C\u7136\u540E\u5C06 <code>ch</code> \u6279\u91CF\u63D2\u5165\u63D2\u5165\u5230\u8282\u70B9elm\u4E0B\u3002</li><li>\u540C\u7406\u5F53\u53EA\u6709 <code>oldch</code> \u5B58\u5728\u65F6\uFF0C\u8BF4\u660E\u9700\u8981\u5C06\u8001\u8282\u70B9\u901A\u8FC7 <code>removeVnodes</code> \u5168\u90E8\u6E05\u9664\u3002</li><li>\u6700\u540E\u4E00\u79CD\u60C5\u51B5\u662F\u5F53\u53EA\u6709\u8001\u8282\u70B9\u662F\u6587\u672C\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u6E05\u9664\u5176\u8282\u70B9\u6587\u672C\u5185\u5BB9\u3002</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (oldCh &amp;&amp; ch &amp;&amp; (oldCh !== ch)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    updateChildren(elm, oldCh, ch);</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (ch) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (oldVnode.text) nodeOps.setTextContent(elm, &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    addVnodes(elm, null, ch, 0, ch.length - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (oldCh) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeVnodes(elm, oldCh, 0, oldCh.length - 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (oldVnode.text) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    nodeOps.setTextContent(elm, &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="updatechildren" tabindex="-1">updateChildren <a class="header-anchor" href="#updatechildren" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u5C31\u8981\u8BB2\u4E00\u4E0B <code>updateChildren</code> \u51FD\u6570\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function updateChildren (parentElm, oldCh, newCh) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let oldStartIdx = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let newStartIdx = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let oldEndIdx = oldCh.length - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let oldStartVnode = oldCh[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">    let oldEndVnode = oldCh[oldEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">    let newEndIdx = newCh.length - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let newStartVnode = newCh[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">    let newEndVnode = newCh[newEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">    let oldKeyToIdx, idxInOld, elmToMove, refElm;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (oldStartIdx &lt;= oldEndIdx &amp;&amp; newStartIdx &lt;= newEndIdx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!oldStartVnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            oldStartVnode = oldCh[++oldStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (!oldEndVnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            oldEndVnode = oldCh[--oldEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (sameVnode(oldStartVnode, newStartVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            patchVnode(oldStartVnode, newStartVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">            oldStartVnode = oldCh[++oldStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">            newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (sameVnode(oldEndVnode, newEndVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            patchVnode(oldEndVnode, newEndVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">            oldEndVnode = oldCh[--oldEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">            newEndVnode = newCh[--newEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (sameVnode(oldStartVnode, newEndVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            patchVnode(oldStartVnode, newEndVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">            nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));</span></span>
<span class="line"><span style="color:#A6ACCD;">            oldStartVnode = oldCh[++oldStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">            newEndVnode = newCh[--newEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (sameVnode(oldEndVnode, newStartVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            patchVnode(oldEndVnode, newStartVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">            nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);</span></span>
<span class="line"><span style="color:#A6ACCD;">            oldEndVnode = oldCh[--oldEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">            newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let elmToMove = oldCh[idxInOld];</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!oldKeyToIdx) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);</span></span>
<span class="line"><span style="color:#A6ACCD;">            idxInOld = newStartVnode.key ? oldKeyToIdx[newStartVnode.key] : null;</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!idxInOld) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                createElm(newStartVnode, parentElm);</span></span>
<span class="line"><span style="color:#A6ACCD;">                newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                elmToMove = oldCh[idxInOld];</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (sameVnode(elmToMove, newStartVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    patchVnode(elmToMove, newStartVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    oldCh[idxInOld] = undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    createElm(newStartVnode, parentElm);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (oldStartIdx &gt; oldEndIdx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        refElm = (newCh[newEndIdx + 1]) ? newCh[newEndIdx + 1].elm : null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (newStartIdx &gt; newEndIdx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u770B\u5230\u4EE3\u7801\u90A3\u4E48\u591A\u5148\u4E0D\u8981\u7740\u6025\uFF0C\u6211\u4EEC\u8FD8\u662F\u4E00\u70B9\u4E00\u70B9\u5730\u8BB2\u89E3\u3002</p><p>\u9996\u5148\u6211\u4EEC\u5B9A\u4E49 <code>oldStartIdx</code>\u3001<code>newStartIdx</code>\u3001<code>oldEndIdx</code> \u4EE5\u53CA <code>newEndIdx</code> \u5206\u522B\u662F\u65B0\u8001\u4E24\u4E2A VNode \u7684\u4E24\u8FB9\u7684\u7D22\u5F15\uFF0C\u540C\u65F6 <code>oldStartVnode</code>\u3001<code>newStartVnode</code>\u3001<code>oldEndVnode</code> \u4EE5\u53CA <code>newEndVnode</code> \u5206\u522B\u6307\u5411\u8FD9\u51E0\u4E2A\u7D22\u5F15\u5BF9\u5E94\u7684 VNode \u8282\u70B9\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/2/160b707df4902029~tplv-t2oaga2asx-image.image" alt=""></p><p>\u63A5\u4E0B\u6765\u662F\u4E00\u4E2A <code>while</code> \u5FAA\u73AF\uFF0C\u5728\u8FD9\u8FC7\u7A0B\u4E2D\uFF0C<code>oldStartIdx</code>\u3001<code>newStartIdx</code>\u3001<code>oldEndIdx</code> \u4EE5\u53CA <code>newEndIdx</code> \u4F1A\u9010\u6E10\u5411\u4E2D\u95F4\u9760\u62E2\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">while (oldStartIdx &lt;= oldEndIdx &amp;&amp; newStartIdx &lt;= newEndIdx) </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/2/160b70ecf5967f0a~tplv-t2oaga2asx-image.image" alt=""></p><p>\u9996\u5148\u5F53 <code>oldStartVnode</code> \u6216\u8005 <code>oldEndVnode</code> \u4E0D\u5B58\u5728\u7684\u65F6\u5019\uFF0C<code>oldStartIdx</code> \u4E0E <code>oldEndIdx</code> \u7EE7\u7EED\u5411\u4E2D\u95F4\u9760\u62E2\uFF0C\u5E76\u66F4\u65B0\u5BF9\u5E94\u7684 <code>oldStartVnode</code> \u4E0E <code>oldEndVnode</code> \u7684\u6307\u5411\uFF08\u6CE8\uFF1A\u4E0B\u9762\u8BB2\u5230\u7684 <code>oldStartIdx</code>\u3001<code>newStartIdx</code>\u3001<code>oldEndIdx</code> \u4EE5\u53CA <code>newEndIdx</code> \u79FB\u52A8\u90FD\u4F1A\u4F34\u968F\u7740 <code>oldStartVnode</code>\u3001<code>newStartVnode</code>\u3001<code>oldEndVnode</code> \u4EE5\u53CA <code>newEndVnode</code> \u7684\u6307\u5411\u7684\u53D8\u5316\uFF0C\u4E4B\u540E\u7684\u90E8\u5206\u53EA\u4F1A\u8BB2 <code>Idx</code> \u7684\u79FB\u52A8\uFF09\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (!oldStartVnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    oldStartVnode = oldCh[++oldStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (!oldEndVnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    oldEndVnode = oldCh[--oldEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u4E0B\u6765\u8FD9\u4E00\u5757\uFF0C\u662F\u5C06 <code>oldStartIdx</code>\u3001<code>newStartIdx</code>\u3001<code>oldEndIdx</code> \u4EE5\u53CA <code>newEndIdx</code> \u4E24\u4E24\u6BD4\u5BF9\u7684\u8FC7\u7A0B\uFF0C\u4E00\u5171\u4F1A\u51FA\u73B0 2*2=4 \u79CD\u60C5\u51B5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> else if (sameVnode(oldStartVnode, newStartVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    patchVnode(oldStartVnode, newStartVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">    oldStartVnode = oldCh[++oldStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">    newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (sameVnode(oldEndVnode, newEndVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    patchVnode(oldEndVnode, newEndVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">    oldEndVnode = oldCh[--oldEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">    newEndVnode = newCh[--newEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (sameVnode(oldStartVnode, newEndVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    patchVnode(oldStartVnode, newEndVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">    nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));</span></span>
<span class="line"><span style="color:#A6ACCD;">    oldStartVnode = oldCh[++oldStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">    newEndVnode = newCh[--newEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (sameVnode(oldEndVnode, newStartVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    patchVnode(oldEndVnode, newStartVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">    nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);</span></span>
<span class="line"><span style="color:#A6ACCD;">    oldEndVnode = oldCh[--oldEndIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">    newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9996\u5148\u662F <code>oldStartVnode</code> \u4E0E <code>newStartVnode</code> \u7B26\u5408 <code>sameVnode</code> \u65F6\uFF0C\u8BF4\u660E\u8001 VNode \u8282\u70B9\u7684\u5934\u90E8\u4E0E\u65B0 VNode \u8282\u70B9\u7684\u5934\u90E8\u662F\u76F8\u540C\u7684 VNode \u8282\u70B9\uFF0C\u76F4\u63A5\u8FDB\u884C <code>patchVnode</code>\uFF0C\u540C\u65F6 <code>oldStartIdx</code> \u4E0E <code>newStartIdx</code> \u5411\u540E\u79FB\u52A8\u4E00\u4F4D\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/2/160b71f5a48631f4~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5176\u6B21\u662F <code>oldEndVnode</code> \u4E0E <code>newEndVnode</code> \u7B26\u5408 <code>sameVnode</code>\uFF0C\u4E5F\u5C31\u662F\u4E24\u4E2A VNode \u7684\u7ED3\u5C3E\u662F\u76F8\u540C\u7684 VNode\uFF0C\u540C\u6837\u8FDB\u884C <code>patchVnode</code> \u64CD\u4F5C\u5E76\u5C06 <code>oldEndVnode</code> \u4E0E <code>newEndVnode</code> \u5411\u524D\u79FB\u52A8\u4E00\u4F4D\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/2/160b7228b9ecb23a~tplv-t2oaga2asx-image.image" alt=""></p><p>\u63A5\u4E0B\u6765\u662F\u4E24\u79CD\u4EA4\u53C9\u7684\u60C5\u51B5\u3002</p><p>\u5148\u662F <code>oldStartVnode</code> \u4E0E <code>newEndVnode</code> \u7B26\u5408 <code>sameVnode</code> \u7684\u65F6\u5019\uFF0C\u4E5F\u5C31\u662F\u8001 VNode \u8282\u70B9\u7684\u5934\u90E8\u4E0E\u65B0 VNode \u8282\u70B9\u7684\u5C3E\u90E8\u662F\u540C\u4E00\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u5C06 <code>oldStartVnode.elm</code> \u8FD9\u4E2A\u8282\u70B9\u76F4\u63A5\u79FB\u52A8\u5230 <code>oldEndVnode.elm</code> \u8FD9\u4E2A\u8282\u70B9\u7684\u540E\u9762\u5373\u53EF\u3002\u7136\u540E <code>oldStartIdx</code> \u5411\u540E\u79FB\u52A8\u4E00\u4F4D\uFF0C<code>newEndIdx</code> \u5411\u524D\u79FB\u52A8\u4E00\u4F4D\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/2/160b723af0fd706a~tplv-t2oaga2asx-image.image" alt=""></p><p>\u540C\u7406\uFF0C<code>oldEndVnode</code> \u4E0E <code>newStartVnode</code> \u7B26\u5408 <code>sameVnode</code> \u65F6\uFF0C\u4E5F\u5C31\u662F\u8001 VNode \u8282\u70B9\u7684\u5C3E\u90E8\u4E0E\u65B0 VNode \u8282\u70B9\u7684\u5934\u90E8\u662F\u540C\u4E00\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u5C06 <code>oldEndVnode.elm</code> \u63D2\u5165\u5230 <code>oldStartVnode.elm</code> \u524D\u9762\u3002\u540C\u6837\u7684\uFF0C<code>oldEndIdx</code> \u5411\u524D\u79FB\u52A8\u4E00\u4F4D\uFF0C<code>newStartIdx</code> \u5411\u540E\u79FB\u52A8\u4E00\u4F4D\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/2/160b72ae720954cd~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6700\u540E\u662F\u5F53\u4EE5\u4E0A\u60C5\u51B5\u90FD\u4E0D\u7B26\u5408\u7684\u65F6\u5019\uFF0C\u8FD9\u79CD\u60C5\u51B5\u600E\u4E48\u5904\u7406\u5462\uFF1F</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let elmToMove = oldCh[idxInOld];</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!oldKeyToIdx) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);</span></span>
<span class="line"><span style="color:#A6ACCD;">    idxInOld = newStartVnode.key ? oldKeyToIdx[newStartVnode.key] : null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!idxInOld) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        createElm(newStartVnode, parentElm);</span></span>
<span class="line"><span style="color:#A6ACCD;">        newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        elmToMove = oldCh[idxInOld];</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (sameVnode(elmToMove, newStartVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            patchVnode(elmToMove, newStartVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">            oldCh[idxInOld] = undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">            nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);</span></span>
<span class="line"><span style="color:#A6ACCD;">            newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            createElm(newStartVnode, parentElm);</span></span>
<span class="line"><span style="color:#A6ACCD;">            newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function createKeyToOldIdx (children, beginIdx, endIdx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let i, key</span></span>
<span class="line"><span style="color:#A6ACCD;">    const map = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (i = beginIdx; i &lt;= endIdx; ++i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        key = children[i].key</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (isDef(key)) map[key] = i</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return map</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>createKeyToOldIdx</code> \u7684\u4F5C\u7528\u662F\u4EA7\u751F <code>key</code> \u4E0E <code>index</code> \u7D22\u5F15\u5BF9\u5E94\u7684\u4E00\u4E2A map \u8868\u3002\u6BD4\u5982\u8BF4\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    {xx: xx, key: &#39;key0&#39;},</span></span>
<span class="line"><span style="color:#A6ACCD;">    {xx: xx, key: &#39;key1&#39;}, </span></span>
<span class="line"><span style="color:#A6ACCD;">    {xx: xx, key: &#39;key2&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u7ECF\u8FC7 <code>createKeyToOldIdx</code> \u8F6C\u5316\u4EE5\u540E\u4F1A\u53D8\u6210\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    key0: 0, </span></span>
<span class="line"><span style="color:#A6ACCD;">    key1: 1, </span></span>
<span class="line"><span style="color:#A6ACCD;">    key2: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u67D0\u4E00\u4E2A key \u7684\u503C\uFF0C\u5FEB\u901F\u5730\u4ECE <code>oldKeyToIdx</code>\uFF08<code>createKeyToOldIdx</code> \u7684\u8FD4\u56DE\u503C\uFF09\u4E2D\u83B7\u53D6\u76F8\u540C key \u7684\u8282\u70B9\u7684\u7D22\u5F15 <code>idxInOld</code>\uFF0C\u7136\u540E\u627E\u5230\u76F8\u540C\u7684\u8282\u70B9\u3002</p><p>\u5982\u679C\u6CA1\u6709\u627E\u5230\u76F8\u540C\u7684\u8282\u70B9\uFF0C\u5219\u901A\u8FC7 <code>createElm</code> \u521B\u5EFA\u4E00\u4E2A\u65B0\u8282\u70B9\uFF0C\u5E76\u5C06 <code>newStartIdx</code> \u5411\u540E\u79FB\u52A8\u4E00\u4F4D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (!idxInOld) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    createElm(newStartVnode, parentElm);</span></span>
<span class="line"><span style="color:#A6ACCD;">    newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5426\u5219\u5982\u679C\u627E\u5230\u4E86\u8282\u70B9\uFF0C\u540C\u65F6\u5B83\u7B26\u5408 <code>sameVnode</code>\uFF0C\u5219\u5C06\u8FD9\u4E24\u4E2A\u8282\u70B9\u8FDB\u884C <code>patchVnode</code>\uFF0C\u5C06\u8BE5\u4F4D\u7F6E\u7684\u8001\u8282\u70B9\u8D4B\u503C undefined\uFF08\u4E4B\u540E\u5982\u679C\u8FD8\u6709\u65B0\u8282\u70B9\u4E0E\u8BE5\u8282\u70B9key\u76F8\u540C\u53EF\u4EE5\u68C0\u6D4B\u51FA\u6765\u63D0\u793A\u5DF2\u6709\u91CD\u590D\u7684 key \uFF09\uFF0C\u540C\u65F6\u5C06 <code>newStartVnode.elm</code> \u63D2\u5165\u5230 <code>oldStartVnode.elm</code> \u7684\u524D\u9762\u3002\u540C\u7406\uFF0C<code>newStartIdx</code> \u5F80\u540E\u79FB\u52A8\u4E00\u4F4D\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/2/160b73aa8f758342~tplv-t2oaga2asx-image.image" alt=""></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    elmToMove = oldCh[idxInOld];</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (sameVnode(elmToMove, newStartVnode)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        patchVnode(elmToMove, newStartVnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">        oldCh[idxInOld] = undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">        nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);</span></span>
<span class="line"><span style="color:#A6ACCD;">        newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u4E0D\u7B26\u5408 <code>sameVnode</code>\uFF0C\u53EA\u80FD\u521B\u5EFA\u4E00\u4E2A\u65B0\u8282\u70B9\u63D2\u5165\u5230 <code>parentElm</code> \u7684\u5B50\u8282\u70B9\u4E2D\uFF0C<code>newStartIdx</code> \u5F80\u540E\u79FB\u52A8\u4E00\u4F4D\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/2/160b73f50ed43932~tplv-t2oaga2asx-image.image" alt=""></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    createElm(newStartVnode, parentElm);</span></span>
<span class="line"><span style="color:#A6ACCD;">    newStartVnode = newCh[++newStartIdx];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u4E00\u6B65\u5C31\u5F88\u5BB9\u6613\u5566\uFF0C\u5F53 <code>while</code> \u5FAA\u73AF\u7ED3\u675F\u4EE5\u540E\uFF0C\u5982\u679C <code>oldStartIdx &gt; oldEndIdx</code>\uFF0C\u8BF4\u660E\u8001\u8282\u70B9\u6BD4\u5BF9\u5B8C\u4E86\uFF0C\u4F46\u662F\u65B0\u8282\u70B9\u8FD8\u6709\u591A\u7684\uFF0C\u9700\u8981\u5C06\u65B0\u8282\u70B9\u63D2\u5165\u5230\u771F\u5B9E DOM \u4E2D\u53BB\uFF0C\u8C03\u7528 <code>addVnodes</code> \u5C06\u8FD9\u4E9B\u8282\u70B9\u63D2\u5165\u5373\u53EF\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/2/160b7457cae26687~tplv-t2oaga2asx-image.image" alt=""></p><p>\u540C\u7406\uFF0C\u5982\u679C\u6EE1\u8DB3 <code>newStartIdx &gt; newEndIdx</code> \u6761\u4EF6\uFF0C\u8BF4\u660E\u65B0\u8282\u70B9\u6BD4\u5BF9\u5B8C\u4E86\uFF0C\u8001\u8282\u70B9\u8FD8\u6709\u591A\uFF0C\u5C06\u8FD9\u4E9B\u65E0\u7528\u7684\u8001\u8282\u70B9\u901A\u8FC7 <code>removeVnodes</code> \u6279\u91CF\u5220\u9664\u5373\u53EF\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/2/160b744a2c07257d~tplv-t2oaga2asx-image.image" alt=""></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (oldStartIdx &gt; oldEndIdx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    refElm = (newCh[newEndIdx + 1]) ? newCh[newEndIdx + 1].elm : null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx);</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (newStartIdx &gt; newEndIdx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5230\u8FD9\u91CC\uFF0C\u6BD4\u5BF9\u7684\u6838\u5FC3\u5B9E\u73B0\u5DF2\u7ECF\u8BB2\u5B8C\u4E86\uFF0C\u8FD9\u90E8\u5206\u6BD4\u8F83\u590D\u6742\uFF0C\u4E0D\u8FC7\u4ED4\u7EC6\u5730\u68B3\u7406\u4E00\u4E0B\u6BD4\u5BF9\u7684\u8FC7\u7A0B\uFF0C\u76F8\u4FE1\u4E00\u5B9A\u80FD\u591F\u7406\u89E3\u5F97\u66F4\u52A0\u900F\u5F7B\u7684\u3002</p><p>\u6CE8\uFF1A\u672C\u8282\u4EE3\u7801\u53C2\u8003<a href="https://github.com/answershuto/VueDemo/blob/master/%E3%80%8A%E6%95%B0%E6%8D%AE%E7%8A%B6%E6%80%81%E6%9B%B4%E6%96%B0%E6%97%B6%E7%9A%84%E5%B7%AE%E5%BC%82%20diff%20%E5%8F%8A%20patch%20%E6%9C%BA%E5%88%B6%E3%80%8B.js" target="_blank" rel="noreferrer">\u300A\u6570\u636E\u72B6\u6001\u66F4\u65B0\u65F6\u7684\u5DEE\u5F02 diff \u53CA patch \u673A\u5236\u300B</a>\u3002</p>`,99),o=[p];function d(c,t,r,C,i,A){return a(),s("div",null,o)}const m=n(l,[["render",d]]);export{D as __pageData,m as default};
