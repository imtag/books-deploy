import{_ as s,c as n,o as a,d as p}from"./app.e0e4ea3a.js";const u=JSON.parse('{"title":"\u5E38\u89C1\u95EE\u9898\u7B54\u7591","description":"","frontmatter":{},"headers":[{"level":2,"title":"TypeScript\u7684\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF\u662F\u4EC0\u4E48\uFF1F","slug":"typescript\u7684\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF\u662F\u4EC0\u4E48\uFF1F","link":"#typescript\u7684\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF\u662F\u4EC0\u4E48\uFF1F","children":[]},{"level":2,"title":"\u5982\u4F55\u9632\u6B62\u4E24\u79CD\u7C7B\u578B\u5728\u7ED3\u6784\u4E0A\u517C\u5BB9\uFF1F","slug":"\u5982\u4F55\u9632\u6B62\u4E24\u79CD\u7C7B\u578B\u5728\u7ED3\u6784\u4E0A\u517C\u5BB9\uFF1F","link":"#\u5982\u4F55\u9632\u6B62\u4E24\u79CD\u7C7B\u578B\u5728\u7ED3\u6784\u4E0A\u517C\u5BB9\uFF1F","children":[]},{"level":2,"title":"TS\u7C7B\u578B\u7684substitutability?","slug":"ts\u7C7B\u578B\u7684substitutability","link":"#ts\u7C7B\u578B\u7684substitutability","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u5E38\u89C1\u95EE\u9898\u7B54\u7591.md"}'),l={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u5E38\u89C1\u95EE\u9898\u7B54\u7591.md"},e=p(`<h1 id="\u5E38\u89C1\u95EE\u9898\u7B54\u7591" tabindex="-1">\u5E38\u89C1\u95EE\u9898\u7B54\u7591 <a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898\u7B54\u7591" aria-hidden="true">#</a></h1><hr><h1 id="\u5E38\u89C1\u95EE\u9898\u7B54\u7591-1" tabindex="-1">\u5E38\u89C1\u95EE\u9898\u7B54\u7591 <a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898\u7B54\u7591-1" aria-hidden="true">#</a></h1><h2 id="typescript\u7684\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">TypeScript\u7684\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#typescript\u7684\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u90FD\u77E5\u9053 Anders Hejlsberg \u5148\u540E\u8BBE\u8BA1\u4E86 c# \u548C TypeScript ,\u4E24\u8005\u6709\u5F88\u591A\u76F8\u4F3C\u4E4B\u5904,\u4F46\u662F\u5176\u7C7B\u578B\u7CFB\u7EDF\u6709\u672C\u8D28\u533A\u522B:</p><ul><li>C# \u91C7\u7528\u7684\u662F Nominal Type System\uFF08\u6807\u660E\u7C7B\u578B\u7CFB\u7EDF\uFF09</li><li>TypeScript \u8003\u8651\u5230 JavaScript \u672C\u8EAB\u7684\u7075\u6D3B\u7279\u6027\uFF0C\u91C7\u7528\u7684\u662F\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF\uFF08Structural Type System\uFF09</li></ul><p>\u6211\u4EEC\u770B\u4E24\u4E2A\u4F8B\u5B50\u4F53\u9A8C\u4E00\u4E0B\u4E24\u8005\u7684\u4E0D\u540C:</p><p>c#\u4EE3\u7801:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public class Foo  </span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    public string Name { get; set; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    public int Id { get; set;}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public class Bar  </span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    public string Name { get; set; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    public int Id { get; set; }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Foo foo = new Foo(); // Okay.</span></span>
<span class="line"><span style="color:#A6ACCD;">Bar bar = new Foo(); // Error!!!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u867D\u7136 <code>Foo</code> \u548C <code>Bar</code> \u4E24\u4E2A\u7C7B\u7684\u5185\u90E8\u5B9A\u4E49\u5B8C\u5168\u4E00\u81F4\uFF0C\u4F46\u662F\u8D4B\u503C\u65F6\u4F1A\u62A5\u9519\uFF0C\u53EF\u89C1\u4E24\u8005\u7C7B\u578B\u672C\u8D28\u4E0A\u662F\u4E0D\u540C\u7684\u3002</p><p>TS \u4EE3\u7801:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Foo {</span></span>
<span class="line"><span style="color:#A6ACCD;">  method(input: string): number { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Bar {</span></span>
<span class="line"><span style="color:#A6ACCD;">  method(input: string): number { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const foo: Foo = new Foo(); // Okay.</span></span>
<span class="line"><span style="color:#A6ACCD;">const bar: Bar = new Foo(); // Okay.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8D4B\u503C\u6210\u529F\uFF0C\u53EF\u89C1\u4E24\u8005\u7C7B\u578B\u662F\u76F8\u540C\u7684\uFF0C\u8FD9\u5C31\u662Fc#\u4E0Ets\u6700\u5927\u7684\u4E0D\u540C\u4E4B\u5904\u3002</p><p>\u7A76\u5176\u539F\u56E0\uFF0CTypeScript \u6BD4\u8F83\u7684\u5E76\u4E0D\u662F\u7C7B\u578B\u5B9A\u4E49\u672C\u8EAB\uFF0C\u800C\u662F\u7C7B\u578B\u5B9A\u4E49\u7684\u5F62\u72B6\uFF08Shape\uFF09\uFF0C\u5373\u5404\u79CD\u7EA6\u675F\u6761\u4EF6\uFF1A</p><blockquote><p>TypeScript\u7684\u6838\u5FC3\u539F\u5219\u4E4B\u4E00\u662F\u5BF9\u503C\u6240\u5177\u6709\u7684\u7ED3\u6784\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u3002 \u5B83\u6709\u65F6\u88AB\u79F0\u505A\u201C\u9E2D\u5F0F\u8FA8\u578B\u6CD5\u201D\u6216\u201C\u7ED3\u6784\u6027\u5B50\u7C7B\u578B\u5316\u201D\u3002 \u5728TypeScript\u91CC\uFF0C\u63A5\u53E3\u7684\u4F5C\u7528\u5C31\u662F\u4E3A\u8FD9\u4E9B\u7C7B\u578B\u547D\u540D\u548C\u4E3A\u4F60\u7684\u4EE3\u7801\u6216\u7B2C\u4E09\u65B9\u4EE3\u7801\u5B9A\u4E49\u5951\u7EA6\u3002</p></blockquote><p>\u4E3A\u4EC0\u4E48\u91C7\u7528\u66F4\u7075\u6D3B\u7684<strong>\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF</strong>?\u90A3\u5C31\u662F\u56E0\u4E3A TS \u4E3A\u4E86\u517C\u5BB9 js \u90A3\u7075\u6D3B\u7684\u7279\u6027,\u8FD9\u79CD\u7C7B\u578B\u7CFB\u7EDF\u7528\u5728 js \u8FD9\u79CD\u8BED\u8A00\u4E0A\u6700\u5408\u9002\u4E0D\u8FC7\u4E86\u3002</p><h2 id="\u5982\u4F55\u9632\u6B62\u4E24\u79CD\u7C7B\u578B\u5728\u7ED3\u6784\u4E0A\u517C\u5BB9\uFF1F" tabindex="-1">\u5982\u4F55\u9632\u6B62\u4E24\u79CD\u7C7B\u578B\u5728\u7ED3\u6784\u4E0A\u517C\u5BB9\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u9632\u6B62\u4E24\u79CD\u7C7B\u578B\u5728\u7ED3\u6784\u4E0A\u517C\u5BB9\uFF1F" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u4E0A\u9762\u63D0\u5230\u4E86,TS\u91C7\u7528\u4E86\u7075\u6D3B\u7684\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF,\u90A3\u4E48\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u95EE\u9898,\u6BD4\u5982:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">interface ScreenCoordinate {</span></span>
<span class="line"><span style="color:#A6ACCD;">  x: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  y: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">interface PrintCoordinate {</span></span>
<span class="line"><span style="color:#A6ACCD;">  x: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  y: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function sendToPrinter(pt: PrintCoordinate) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function getCursorPos(): ScreenCoordinate {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return { x: 0, y: 0 };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sendToPrinter(getCursorPos());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7531\u4E8E <code>ScreenCoordinate</code> \u4E0E <code>PrintCoordinate</code> \u7684\u5F62\u72B6(Shape)\u76F8\u540C\uFF0C\u90A3\u4E48\u6839\u636E\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF\u7684\u7279\u6027\uFF0C\u4ED6\u4EEC\u7684\u7C7B\u578B\u662F\u517C\u5BB9\u7684\uFF0C\u4F46\u662F\u4F60\u5982\u679C\u4E0D\u60F3\u8BA9\u4ED6\u4EEC\u662F\u517C\u5BB9\u7684\u7C7B\u578B\u5E94\u8BE5\u600E\u4E48\u64CD\u4F5C?</p><p>\u8FD9\u65F6\u5019\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A \u300Cbrand\u300D \u6210\u5458:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">interface ScreenCoordinate {</span></span>
<span class="line"><span style="color:#A6ACCD;">  _screenCoordBrand: any;</span></span>
<span class="line"><span style="color:#A6ACCD;">  x: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  y: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">interface PrintCoordinate {</span></span>
<span class="line"><span style="color:#A6ACCD;">  _printCoordBrand: any;</span></span>
<span class="line"><span style="color:#A6ACCD;">  x: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  y: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">sendToPrinter(getCursorPos());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="ts\u7C7B\u578B\u7684substitutability" tabindex="-1">TS\u7C7B\u578B\u7684substitutability? <a class="header-anchor" href="#ts\u7C7B\u578B\u7684substitutability" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5148\u770B\u4EE5\u4E0B\u4F8B\u5B50\u4F1A\u4E0D\u4F1A\u62A5\u9519?</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function handler(arg: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ....</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function doSomething(callback: (arg1: string, arg2: number) =&gt; void) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  callback(&#39;hello&#39;, 42);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F88\u591A\u4EBA\u7684\u9884\u671F\u662F\u8FD9\u91CC\u4F1A\u62A5\u9519,\u56E0\u4E3AdoSomething\u8981\u6C42\u7684\u56DE\u8C03\u51FD\u6570\u662F\u6709\u4E24\u4E2A\u53C2\u6570\u7684,\u4F46\u662Fhandler\u53EA\u6709\u4E00\u4E2A\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">doSomething(handler);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3A\u4EC0\u4E48\u66F4\u5C11\u53C2\u6570\u7684\u51FD\u6570\u80FD\u591F\u8D4B\u503C\u7ED9\u5177\u6709\u66F4\u591A\u53C2\u6570\u7684\u51FD\u6570?</p><p>\u5E76\u6CA1\u6709\uFF0C\u7A76\u5176\u539F\u56E0\u662F\u56E0\u4E3A <code>handler</code> \u7684\u7C7B\u578B <code>(arg: string) =&gt; xx</code> \u662F\u53EF\u4EE5\u4F5C\u4E3A <code>(arg1: string, arg2: number) =&gt; void</code> \u7684\u66FF\u4EE3\u54C1\u5373 substitutability\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u662F\u4E0D\u4F1A\u62A5\u9519\u7684\u3002</p><p>\u7C7B\u4F3C\u7684\u60C5\u51B5\u8FD8\u6709\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function doSomething(): number {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return 42;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function callMeMaybe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  callback();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6709\u4EBA\u8BA4\u4E3A\u8FD9\u91CC\u4F1A\u62A5\u9519,\u539F\u56E0\u662FdoSomething\u8FD4\u56DE\u7684\u662Fnumber,\u800Ccallback\u8FD4\u56DE\u7684\u662Fvoid</span></span>
<span class="line"><span style="color:#A6ACCD;">callMeMaybe(doSomething);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3A\u4EC0\u4E48 TS \u4F1A\u6709 substitutability \u8FD9\u79CD\u8BBE\u8BA1\uFF0C\u539F\u56E0\u4E5F\u662F\u8981\u517C\u5BB9 JavaScript \u7075\u6D3B\u7684\u8BED\u6CD5\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>TypeScript \u662F JavaScript \u7684\u8D85\u96C6\uFF0C\u6BD5\u7ADF\u662F\u4E00\u95E8\u7CFB\u7EDF\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u6211\u4EEC\u7528 30+ \u8282\u7684\u5185\u5BB9\u60F3\u505A\u5230\u9762\u9762\u4FF1\u5230\u51E0\u4E4E\u4E0D\u53EF\u80FD\uFF0C\u56E0\u6B64\u5982\u679C\u4F60\u6709\u4EC0\u4E48\u7591\u95EE\u53EF\u4EE5\u5728\u4E0B\u65B9\u7559\u8A00\uFF0C\u6211\u4F1A\u5C3D\u53EF\u80FD\u89E3\u7B54\u3002</p>`,32),o=[e];function c(t,r,i,C,A,y){return a(),n("div",null,o)}const D=s(l,[["render",c]]);export{u as __pageData,D as default};
