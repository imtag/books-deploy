import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const y=JSON.parse('{"title":"\u5B9E\u73B0 Virtual DOM \u4E0B\u7684\u4E00\u4E2A VNode \u8282\u70B9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662FVNode","slug":"\u4EC0\u4E48\u662Fvnode","link":"#\u4EC0\u4E48\u662Fvnode","children":[]},{"level":2,"title":"\u5B9E\u73B0\u4E00\u4E2AVNode","slug":"\u5B9E\u73B0\u4E00\u4E2Avnode","link":"#\u5B9E\u73B0\u4E00\u4E2Avnode","children":[]}],"relativePath":"Vue.js/\u5256\u6790 Vue.js \u5185\u90E8\u8FD0\u884C\u673A\u5236/\u5B9E\u73B0 Virtual DOM \u4E0B\u7684\u4E00\u4E2A VNode \u8282\u70B9.md"}'),p={name:"Vue.js/\u5256\u6790 Vue.js \u5185\u90E8\u8FD0\u884C\u673A\u5236/\u5B9E\u73B0 Virtual DOM \u4E0B\u7684\u4E00\u4E2A VNode \u8282\u70B9.md"},e=l(`<h1 id="\u5B9E\u73B0-virtual-dom-\u4E0B\u7684\u4E00\u4E2A-vnode-\u8282\u70B9" tabindex="-1">\u5B9E\u73B0 Virtual DOM \u4E0B\u7684\u4E00\u4E2A VNode \u8282\u70B9 <a class="header-anchor" href="#\u5B9E\u73B0-virtual-dom-\u4E0B\u7684\u4E00\u4E2A-vnode-\u8282\u70B9" aria-hidden="true">#</a></h1><hr><h1 id="\u5B9E\u73B0-virtual-dom-\u4E0B\u7684\u4E00\u4E2A-vnode-\u8282\u70B9-1" tabindex="-1">\u5B9E\u73B0 Virtual DOM \u4E0B\u7684\u4E00\u4E2A VNode \u8282\u70B9 <a class="header-anchor" href="#\u5B9E\u73B0-virtual-dom-\u4E0B\u7684\u4E00\u4E2A-vnode-\u8282\u70B9-1" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662Fvnode" tabindex="-1">\u4EC0\u4E48\u662FVNode <a class="header-anchor" href="#\u4EC0\u4E48\u662Fvnode" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u77E5\u9053\uFF0Crender function \u4F1A\u88AB\u8F6C\u5316\u6210 VNode \u8282\u70B9\u3002Virtual DOM \u5176\u5B9E\u5C31\u662F\u4E00\u68F5\u4EE5 JavaScript \u5BF9\u8C61\uFF08VNode \u8282\u70B9\uFF09\u4F5C\u4E3A\u57FA\u7840\u7684\u6811\uFF0C\u7528\u5BF9\u8C61\u5C5E\u6027\u6765\u63CF\u8FF0\u8282\u70B9\uFF0C\u5B9E\u9645\u4E0A\u5B83\u53EA\u662F\u4E00\u5C42\u5BF9\u771F\u5B9E DOM \u7684\u62BD\u8C61\u3002\u6700\u7EC8\u53EF\u4EE5\u901A\u8FC7\u4E00\u7CFB\u5217\u64CD\u4F5C\u4F7F\u8FD9\u68F5\u6811\u6620\u5C04\u5230\u771F\u5B9E\u73AF\u5883\u4E0A\u3002\u7531\u4E8E Virtual DOM \u662F\u4EE5 JavaScript \u5BF9\u8C61\u4E3A\u57FA\u7840\u800C\u4E0D\u4F9D\u8D56\u771F\u5B9E\u5E73\u53F0\u73AF\u5883\uFF0C\u6240\u4EE5\u4F7F\u5B83\u5177\u6709\u4E86\u8DE8\u5E73\u53F0\u7684\u80FD\u529B\uFF0C\u6BD4\u5982\u8BF4\u6D4F\u89C8\u5668\u5E73\u53F0\u3001Weex\u3001Node \u7B49\u3002</p><h2 id="\u5B9E\u73B0\u4E00\u4E2Avnode" tabindex="-1">\u5B9E\u73B0\u4E00\u4E2AVNode <a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2Avnode" aria-hidden="true">#</a></h2><p>VNode \u5F52\u6839\u7ED3\u5E95\u5C31\u662F\u4E00\u4E2A JavaScript \u5BF9\u8C61\uFF0C\u53EA\u8981\u8FD9\u4E2A\u7C7B\u7684\u4E00\u4E9B\u5C5E\u6027\u53EF\u4EE5\u6B63\u786E\u76F4\u89C2\u5730\u63CF\u8FF0\u6E05\u695A\u5F53\u524D\u8282\u70B9\u7684\u4FE1\u606F\u5373\u53EF\u3002\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 <code>VNode</code> \u7C7B\uFF0C\u52A0\u5165\u4E00\u4E9B\u57FA\u672C\u5C5E\u6027\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u7406\u89E3\uFF0C\u6211\u4EEC\u5148\u4E0D\u8003\u8651\u590D\u6742\u7684\u60C5\u51B5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class VNode {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor (tag, data, children, text, elm) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        /*\u5F53\u524D\u8282\u70B9\u7684\u6807\u7B7E\u540D*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.tag = tag;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /*\u5F53\u524D\u8282\u70B9\u7684\u4E00\u4E9B\u6570\u636E\u4FE1\u606F\uFF0C\u6BD4\u5982props\u3001attrs\u7B49\u6570\u636E*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.data = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /*\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.children = children;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /*\u5F53\u524D\u8282\u70B9\u7684\u6587\u672C*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.text = text;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /*\u5F53\u524D\u865A\u62DF\u8282\u70B9\u5BF9\u5E94\u7684\u771F\u5B9Edom\u8282\u70B9*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.elm = elm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6BD4\u5982\u6211\u76EE\u524D\u6709\u8FD9\u4E48\u4E00\u4E2A Vue \u7EC4\u4EF6\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;span class=&quot;demo&quot; v-show=&quot;isShow&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    This is a span.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7528 JavaScript \u4EE3\u7801\u5F62\u5F0F\u5C31\u662F\u8FD9\u6837\u7684\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new VNode(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;span&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* \u6307\u4EE4\u96C6\u5408\u6570\u7EC4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">            directives: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /* v-show\u6307\u4EE4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">                    rawName: &#39;v-show&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    expression: &#39;isShow&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    name: &#39;show&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    value: true</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ],</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* \u9759\u6001class */</span></span>
<span class="line"><span style="color:#A6ACCD;">            staticClass: &#39;demo&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        [ new VNode(undefined, undefined, undefined, &#39;This is a span.&#39;) ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u770B\u770B\u8F6C\u6362\u6210 VNode \u4EE5\u540E\u7684\u60C5\u51B5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    tag: &#39;span&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        /* \u6307\u4EE4\u96C6\u5408\u6570\u7EC4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        directives: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                /* v-show\u6307\u4EE4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">                rawName: &#39;v-show&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                expression: &#39;isShow&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: &#39;show&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                value: true</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        /* \u9759\u6001class */</span></span>
<span class="line"><span style="color:#A6ACCD;">        staticClass: &#39;demo&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        /* \u5B50\u8282\u70B9\u662F\u4E00\u4E2A\u6587\u672CVNode\u8282\u70B9 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            tag: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">            data: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &#39;This is a span.&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            children: undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u53EF\u4EE5\u5C06 VNode \u8FDB\u4E00\u6B65\u5C01\u88C5\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E9B\u4EA7\u751F\u5E38\u7528 VNode \u7684\u65B9\u6CD5\u3002</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u7A7A\u8282\u70B9</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function createEmptyVNode () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const node = new VNode();</span></span>
<span class="line"><span style="color:#A6ACCD;">    node.text = &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return node;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u521B\u5EFA\u4E00\u4E2A\u6587\u672C\u8282\u70B9</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function createTextVNode (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new VNode(undefined, undefined, undefined, String(val));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u514B\u9686\u4E00\u4E2A VNode \u8282\u70B9</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function cloneVNode (node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const cloneVnode = new VNode(</span></span>
<span class="line"><span style="color:#A6ACCD;">        node.tag,</span></span>
<span class="line"><span style="color:#A6ACCD;">        node.data,</span></span>
<span class="line"><span style="color:#A6ACCD;">        node.children,</span></span>
<span class="line"><span style="color:#A6ACCD;">        node.text,</span></span>
<span class="line"><span style="color:#A6ACCD;">        node.elm</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">    return cloneVnode;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u603B\u7684\u6765\u8BF4\uFF0CVNode \u5C31\u662F\u4E00\u4E2A JavaScript \u5BF9\u8C61\uFF0C\u7528 JavaScript \u5BF9\u8C61\u7684\u5C5E\u6027\u6765\u63CF\u8FF0\u5F53\u524D\u8282\u70B9\u7684\u4E00\u4E9B\u72B6\u6001\uFF0C\u7528 VNode \u8282\u70B9\u7684\u5F62\u5F0F\u6765\u6A21\u62DF\u4E00\u68F5 Virtual DOM \u6811\u3002</p><p>\u6CE8\uFF1A\u672C\u8282\u4EE3\u7801\u53C2\u8003<a href="https://github.com/answershuto/VueDemo/blob/master/%E3%80%8A%E5%AE%9E%E7%8E%B0%20Virtual%20DOM%20%E4%B8%8B%E7%9A%84%E4%B8%80%E4%B8%AA%20VNode%20%E8%8A%82%E7%82%B9%E3%80%8B.js" target="_blank" rel="noreferrer">\u300A\u5B9E\u73B0 Virtual DOM \u4E0B\u7684\u4E00\u4E2A VNode \u8282\u70B9\u300B</a>\u3002</p>`,23),o=[e];function c(t,i,r,A,C,d){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{y as __pageData,u as default};
