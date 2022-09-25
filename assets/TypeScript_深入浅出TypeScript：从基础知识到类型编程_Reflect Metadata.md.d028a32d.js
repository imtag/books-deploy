import{_ as s,c as a,o as n,d as e}from"./app.e0e4ea3a.js";const D=JSON.parse('{"title":"Reflect Metadata","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u6982\u5FF5","slug":"\u57FA\u7840\u6982\u5FF5","link":"#\u57FA\u7840\u6982\u5FF5","children":[]},{"level":2,"title":"\u5E38\u7528\u65B9\u6CD5","slug":"\u5E38\u7528\u65B9\u6CD5","link":"#\u5E38\u7528\u65B9\u6CD5","children":[{"level":3,"title":"\u8BBE\u7F6E/\u83B7\u53D6\u5143\u6570\u636E","slug":"\u8BBE\u7F6E-\u83B7\u53D6\u5143\u6570\u636E","link":"#\u8BBE\u7F6E-\u83B7\u53D6\u5143\u6570\u636E","children":[]},{"level":3,"title":"\u5185\u7F6E\u5143\u6570\u636E","slug":"\u5185\u7F6E\u5143\u6570\u636E","link":"#\u5185\u7F6E\u5143\u6570\u636E","children":[]}]},{"level":2,"title":"\u5B9E\u8DF5\u5DE5\u4F5C","slug":"\u5B9E\u8DF5\u5DE5\u4F5C","link":"#\u5B9E\u8DF5\u5DE5\u4F5C","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/Reflect Metadata.md"}'),l={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/Reflect Metadata.md"},p=e(`<h1 id="reflect-metadata" tabindex="-1">Reflect Metadata <a class="header-anchor" href="#reflect-metadata" aria-hidden="true">#</a></h1><hr><h1 id="reflect-metadata-1" tabindex="-1">Reflect Metadata <a class="header-anchor" href="#reflect-metadata-1" aria-hidden="true">#</a></h1><p>Reflect Metadata \u5C5E\u4E8E ES7 \u7684\u4E00\u4E2A\u63D0\u6848,\u5B83\u7684\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\u5728\u58F0\u660E\u7684\u65F6\u5019\u300C\u6DFB\u52A0\u548C\u8BFB\u53D6\u5143\u6570\u636E\u300D\uFF0C\u6211\u4EEC\u4E0A\u4E00\u8282\u7528\u624B\u52A8\u7684\u65B9\u6CD5\u5728\u5C5E\u6027\u4E0A\u6DFB\u52A0\u5143\u6570\u636E\uFF0C\u4E0D\u4EC5\u4E0D\u4F18\u96C5\u800C\u4E14\u5F71\u54CD\u5F00\u53D1\u6548\u7387\u3002</p><p>Reflect Metadata \u76EE\u524D\u9700\u8981\u5F15\u5165 npm \u5305\u624D\u80FD\u4F7F\u7528:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i reflect-metadata --save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u800C\u4E14\u9700\u8981\u5728 <code>tsconfig.json</code> \u4E2D\u914D\u7F6E <code>emitDecoratorMetadata</code>.</p><p>\u4E4B\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u7528\u88C5\u9970\u5668\u6765\u83B7\u53D6\u3001\u6DFB\u52A0\u5143\u6570\u636E\u4E86.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@Reflect.metadata(&#39;name&#39;, &#39;A&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">class A {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Reflect.metadata(&#39;hello&#39;, &#39;world&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  public hello(): string {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &#39;hello world&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Reflect.getMetadata(&#39;name&#39;, A) // &#39;A&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Reflect.getMetadata(&#39;hello&#39;, new A()) // &#39;world&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u603B\u4E4B:</p><ul><li>Relfect Metadata\uFF0C\u53EF\u4EE5\u901A\u8FC7\u88C5\u9970\u5668\u6765\u7ED9\u7C7B\u6DFB\u52A0\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u4FE1\u606F</li><li>\u7136\u540E\u901A\u8FC7\u53CD\u5C04\u5C06\u8FD9\u4E9B\u4FE1\u606F\u63D0\u53D6\u51FA\u6765</li><li>\u4E5F\u53EF\u4EE5\u901A\u8FC7\u53CD\u5C04\u6765\u6DFB\u52A0\u8FD9\u4E9B\u4FE1\u606F</li></ul><blockquote><p>\u53CD\u5C04, ES6+ \u52A0\u5165\u7684 Relfect \u5C31\u662F\u7528\u4E8E\u53CD\u5C04\u64CD\u4F5C\u7684,\u5B83\u5141\u8BB8\u8FD0\u884C\u4E2D\u7684 \u7A0B\u5E8F\u5BF9\u81EA\u8EAB\u8FDB\u884C\u68C0\u67E5\uFF0C\u6216\u8005\u8BF4\u201C\u81EA\u5BA1\u201D\uFF0C\u5E76\u80FD\u76F4\u63A5\u64CD\u4F5C\u7A0B\u5E8F\u7684\u5185\u90E8\u5C5E\u6027\u548C\u65B9\u6CD5,\u53CD\u5C04\u8FD9\u4E2A\u6982\u5FF5\u5176\u5B9E\u5728 Java/c# \u7B49\u4F17\u591A\u8BED\u8A00\u4E2D\u5DF2\u7ECF\u5E7F\u6CDB\u8FD0\u7528\u4E86.</p></blockquote><h2 id="\u57FA\u7840\u6982\u5FF5" tabindex="-1">\u57FA\u7840\u6982\u5FF5 <a class="header-anchor" href="#\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5\u5148\u7C97\u7565\u5F97\u626B\u4E00\u4E0B Relfect Metadata \u7684 API:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// define metadata on an object or property</span></span>
<span class="line"><span style="color:#A6ACCD;">Reflect.defineMetadata(metadataKey, metadataValue, target);</span></span>
<span class="line"><span style="color:#A6ACCD;">Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// check for presence of a metadata key on the prototype chain of an object or property</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.hasMetadata(metadataKey, target);</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.hasMetadata(metadataKey, target, propertyKey);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// check for presence of an own metadata key of an object or property</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.hasOwnMetadata(metadataKey, target);</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.hasOwnMetadata(metadataKey, target, propertyKey);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// get metadata value of a metadata key on the prototype chain of an object or property</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.getMetadata(metadataKey, target);</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.getMetadata(metadataKey, target, propertyKey);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// get metadata value of an own metadata key of an object or property</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.getOwnMetadata(metadataKey, target);</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.getOwnMetadata(metadataKey, target, propertyKey);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// get all metadata keys on the prototype chain of an object or property</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.getMetadataKeys(target);</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.getMetadataKeys(target, propertyKey);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// get all own metadata keys of an object or property</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.getOwnMetadataKeys(target);</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.getOwnMetadataKeys(target, propertyKey);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// delete metadata from an object or property</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.deleteMetadata(metadataKey, target);</span></span>
<span class="line"><span style="color:#A6ACCD;">let result = Reflect.deleteMetadata(metadataKey, target, propertyKey);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// apply metadata via a decorator to a constructor</span></span>
<span class="line"><span style="color:#A6ACCD;">@Reflect.metadata(metadataKey, metadataValue)</span></span>
<span class="line"><span style="color:#A6ACCD;">class C {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // apply metadata via a decorator to a method (property)</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Reflect.metadata(metadataKey, metadataValue)</span></span>
<span class="line"><span style="color:#A6ACCD;">  method() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u770B\u5B8C\u8FD9\u4E9BAPI\u7684\u547D\u540D\u5176\u5B9E\u6709\u7ECF\u9A8C\u7684\u5F00\u53D1\u8005\u5DF2\u7ECF\u53EF\u4EE5\u731C\u51FA\u6765\u8FD9\u4E9BAPI\u7684\u5927\u6982\u4F5C\u7528\u4E86\uFF0C\u6211\u4EEC\u540E\u9762\u4F1A\u63D0\u53CA\uFF0C\u800C\u4E14\u8FD9\u4E9BAPI\u63A5\u53D7\u7684\u53C2\u6570\u4E00\u5171\u5C31\u56DB\u79CD\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u8BF4\u660E\u4E00\u4E0B:</p><ul><li><code>Metadata Key</code>: \u5143\u6570\u636E\u7684Key\uFF0C\u672C\u8D28\u4E0A\u5185\u90E8\u5B9E\u73B0\u662F\u4E00\u4E2AMap\u5BF9\u8C61\uFF0C\u4EE5\u952E\u503C\u5BF9\u7684\u5F62\u5F0F\u50A8\u5B58\u5143\u6570\u636E</li><li><code>Metadata Value</code>: \u5143\u6570\u636E\u7684Value\uFF0C\u8FD9\u4E2A\u5BB9\u6613\u7406\u89E3</li><li><code>Target</code>: \u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8868\u793A\u5143\u6570\u636E\u88AB\u6DFB\u52A0\u5728\u7684\u5BF9\u8C61\u4E0A</li><li><code>Property</code>: \u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u5143\u6570\u636E\u4E0D\u4EC5\u4EC5\u53EF\u4EE5\u88AB\u6DFB\u52A0\u5728\u5BF9\u8C61\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u4F5C\u7528\u4E8E\u5C5E\u6027\uFF0C\u8FD9\u8DDF\u88C5\u9970\u5668\u7C7B\u4F3C</li></ul><h2 id="\u5E38\u7528\u65B9\u6CD5" tabindex="-1">\u5E38\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u8BBE\u7F6E-\u83B7\u53D6\u5143\u6570\u636E" tabindex="-1">\u8BBE\u7F6E/\u83B7\u53D6\u5143\u6570\u636E <a class="header-anchor" href="#\u8BBE\u7F6E-\u83B7\u53D6\u5143\u6570\u636E" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u9996\u5148\u4E86\u89E3\u4E00\u4E0B\u5982\u4F55\u6DFB\u52A0\u5143\u6570\u636E\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u7528\u5230 <code>metadata</code> API\uFF0C\u8FD9\u4E2A API \u662F\u5229\u7528\u88C5\u9970\u5668\u7ED9\u76EE\u6807\u6DFB\u52A0\u5143\u6570\u636E:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function metadata(</span></span>
<span class="line"><span style="color:#A6ACCD;">  metadataKey: any,</span></span>
<span class="line"><span style="color:#A6ACCD;">  metadataValue: any</span></span>
<span class="line"><span style="color:#A6ACCD;">): {</span></span>
<span class="line"><span style="color:#A6ACCD;">  (target: Function): void;</span></span>
<span class="line"><span style="color:#A6ACCD;">  (target: Object, propertyKey: string | symbol): void;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u7136,\u5982\u679C\u4F60\u4E0D\u60F3\u7528\u88C5\u9970\u5668\u8FD9\u4E2A\u9014\u5F84\u7684\u8BDD\uFF0C\u53EF\u4EE5\u7528 <code>defineMetadata</code> \u6765\u6DFB\u52A0\u5143\u6570\u636E.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// define metadata on an object or property</span></span>
<span class="line"><span style="color:#A6ACCD;">Reflect.defineMetadata(metadataKey, metadataValue, target);</span></span>
<span class="line"><span style="color:#A6ACCD;">Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u901A\u8FC7\u88C5\u9970\u5668\u5C31\u53EF\u4EE5\u5F88\u7B80\u5355\u5F97\u4F7F\u7528\u5B83:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import &#39;reflect-metadata&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Reflect.metadata(&#39;name&#39;, &#39;xiaomuzhu&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @Reflect.metadata(&#39;time&#39;, &#39;2019/10/10&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    public say(): string {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &#39;hello&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Reflect.getMetadata(&#39;name&#39;, Person)) // xiaomuzhu</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Reflect.getMetadata(&#39;time&#39;, new Person, &#39;say&#39;)) // 2019/10/10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u770B\u89C1\u6211\u4EEC\u5728\u7528 <code>metadata</code> \u8BBE\u7F6E\u4E86\u5143\u6570\u636E\u540E\uFF0C\u9700\u8981\u7528 <code>getMetadata</code> \u5C06\u5143\u6570\u636E\u53D6\u51FA\uFF0C\u4F46\u662F\u4E3A\u4EC0\u4E48\u5728\u53D6\u51FA\u65B9\u6CD5 <code>say</code> \u4E0A\u7684\u5143\u6570\u636E\u65F6\u9700\u8981\u5148\u628A Class \u5B9E\u4F8B\u5316(\u5373<code>new Person</code>)\u5462?</p><p>\u539F\u56E0\u5C31\u5728\u4E8E\u5143\u6570\u636E\u662F\u88AB\u6DFB\u52A0\u5728\u4E86\u5B9E\u4F8B\u65B9\u6CD5\u4E0A\uFF0C\u56E0\u6B64\u5FC5\u987B\u5B9E\u4F8B\u5316\u624D\u80FD\u53D6\u51FA\uFF0C\u8981\u60F3\u4E0D\u5B9E\u4F8B\u5316\uFF0C\u5219\u5FC5\u987B\u52A0\u5728\u9759\u6001\u65B9\u6CD5\u4E0A.</p><h3 id="\u5185\u7F6E\u5143\u6570\u636E" tabindex="-1">\u5185\u7F6E\u5143\u6570\u636E <a class="header-anchor" href="#\u5185\u7F6E\u5143\u6570\u636E" aria-hidden="true">#</a></h3><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u7684\u5143\u6570\u636E\u662F\u5F00\u53D1\u8005\u81EA\u5DF1\u8BBE\u7F6E\u7684\uFF0C\u5176\u5B9E\u6211\u4EEC\u4E5F\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E9B TypeScript \u672C\u8EAB\u5185\u7F6E\u7684\u4E00\u4E9B\u5143\u6570\u636E\u3002</p><p>\u6BD4\u5982\uFF0C\u6211\u4EEC\u901A\u8FC7 <code>design:type</code> \u4F5C\u4E3A key \u53EF\u4EE5\u83B7\u53D6\u76EE\u6807\u7684\u7C7B\u578B\uFF0C\u6BD4\u5982\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u83B7\u53D6 <code>say</code> \u65B9\u6CD5\u7684\u7C7B\u578B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u83B7\u53D6\u65B9\u6CD5\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">const type = Reflect.getMetadata(&quot;design:type&quot;, new Person, &#39;say&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[Function: Function]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u901A\u8FC7 <code>design:paramtypes</code> \u4F5C\u4E3A key \u53EF\u4EE5\u83B7\u53D6\u76EE\u6807\u53C2\u6570\u7684\u7C7B\u578B\uFF0C\u6BD4\u5982\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u83B7\u53D6 <code>say</code> \u65B9\u6CD5\u53C2\u6570\u7684\u7C7B\u578B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u83B7\u53D6\u53C2\u6570\u7684\u7C7B\u578B,\u8FD4\u56DE\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">const typeParam = Reflect.getMetadata(&quot;design:paramtypes&quot;, new Person, &#39;say&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// [Function: String]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528 <code>design:returntype</code> \u5143\u6570\u636E\u952E\u83B7\u53D6\u6709\u5173\u65B9\u6CD5\u8FD4\u56DE\u7C7B\u578B\u7684\u4FE1\u606F:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const typeReturn = Reflect.getMetadata(&quot;design:returntype&quot;, new Person, &#39;say&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">// [Function: String]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5B9E\u8DF5\u5DE5\u4F5C" tabindex="-1">\u5B9E\u8DF5\u5DE5\u4F5C <a class="header-anchor" href="#\u5B9E\u8DF5\u5DE5\u4F5C" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E0A\u9762\u7684\u5B66\u4E60\u6211\u4EEC\u57FA\u672C\u4E86\u89E3\u4E86 Reflect Metadata \u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u5176\u5B9E\u6211\u4EEC\u4F1A\u7ECF\u5E38\u7528\u5230\u8FD9\u4E2A\u7279\u6027\u3002</p><p>\u6BD4\u5982\u5728 Node.js \u4E2D\u6709\u4E00\u4E9B\u6846\u67B6\uFF0C\u6BD4\u5982 Nestjs \u4F1A\u6709\u5206\u6563\u5F0F\u7684\u88C5\u9970\u5668\u8DEF\u7531\uFF0C\u6BD4\u5982 <code>@Get</code> <code>@Post</code> \u7B49\uFF0C\u6B63\u662F\u501F\u52A9 Reflect Metadata \u5B9E\u73B0\u7684\u3002</p><p>\u6BD4\u5982\u4E00\u4E2A\u535A\u5BA2\u7CFB\u7EDF\u7684\u6587\u7AE0\u8DEF\u7531\uFF0C\u53EF\u80FD\u4F1A\u662F\u4E0B\u9762\u7684\u4EE3\u7801:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@Controller(&#39;/article&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">class Home {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @Get(&#39;/content&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    someGetMethod() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return &#39;hello world&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    @Post(&#39;/comment&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    somePostMethod() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u90A3\u4E48\u6211\u73B0\u5728\u4E00\u6B65\u6B65\u5B9E\u73B0\u4E00\u4E0B\u3002</p><p>\u6211\u4EEC\u5148\u5B9E\u73B0\u4E00\u4E2A\u751F\u4EA7\u63A7\u5236\u5668 <code>Controller</code> \u7684\u88C5\u9970\u5668\u5DE5\u5382\u51FD\u6570:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const METHOD_METADATA = &#39;method&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const PATH_METADATA = &#39;path&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u88C5\u9970\u5668\u5DE5\u5382\u51FD\u6570,\u63A5\u53D7\u8DEF\u7531\u7684\u8DEF\u5F84path\u8FD4\u56DE\u4E00\u4E2A\u88C5\u9970\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">const Controller = (path: string): ClassDecorator =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return target =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Reflect.defineMetadata(PATH_METADATA, path, target);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u7740\u9700\u8981\u5B9E\u73B0 <code>Get</code> <code>Post</code> \u7B49\u65B9\u6CD5\u88C5\u9970\u5668:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u88C5\u9970\u5668\u5DE5\u5382\u51FD\u6570,\u9996\u5148\u63A5\u53D7\u4E00\u4E2A\u65B9\u6CD5,\u6BD4\u5982get/post,\u5982\u4F55\u518D\u63A5\u53D7\u4E00\u4E2A\u8DEF\u7531\u8DEF\u5F84,\u8FD4\u56DE\u4E00\u4E2A\u643A\u5E26\u4E86\u4E0A\u8FF0\u4E24\u4E2A\u4FE1\u606F\u7684\u88C5\u9970\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">const createMappingDecorator = (method: string) =&gt; (path: string): MethodDecorator =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (target, key, descriptor) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Reflect.defineMetadata(PATH_METADATA, path, descriptor.value!);</span></span>
<span class="line"><span style="color:#A6ACCD;">    Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value!);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Get = createMappingDecorator(&#39;GET&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const Post = createMappingDecorator(&#39;POST&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u7684\u4EE3\u7801\u53EF\u80FD\u7406\u89E3\u4E0A\u6709\u70B9\u96BE\u5EA6,<code>createMappingDecorator</code> \u662F\u67EF\u91CC\u5316\u7684\uFF0C\u4F60\u5B9E\u9645\u4E0A\u53EF\u4EE5\u628A\u8FD9\u4E2A\u51FD\u6570\u770B\u6210\u505A\u4E86\u4E24\u4EF6\u4E8B,\u7B2C\u4E00\u4EF6\u4E8B\uFF0C\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\u786E\u5B9A http \u7684\u65B9\u6CD5\uFF0C\u6BD4\u5982\u662F get \u8FD8\u662F post\uFF0C\u7136\u540E\u7B2C\u4E8C\u4EF6\u4E8B\uFF0C\u786E\u5B9A\u8DEF\u7531\u7684\u8DEF\u5F84 path\u3002</p><blockquote><p>\u5728\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\uFF0C\u67EF\u91CC\u5316\uFF08\u82F1\u8BED\uFF1ACurrying\uFF09\uFF0C\u53C8\u8BD1\u4E3A\u5361\u745E\u5316\u6216\u52A0\u91CC\u5316\uFF0C\u662F\u628A\u63A5\u53D7\u591A\u4E2A\u53C2\u6570\u7684\u51FD\u6570\u53D8\u6362\u6210\u63A5\u53D7\u4E00\u4E2A\u5355\u4E00\u53C2\u6570\uFF08\u6700\u521D\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF09\u7684\u51FD\u6570\uFF0C\u5E76\u4E14\u8FD4\u56DE\u63A5\u53D7\u4F59\u4E0B\u7684\u53C2\u6570\u800C\u4E14\u8FD4\u56DE\u7ED3\u679C\u7684\u65B0\u51FD\u6570\u7684\u6280\u672F\u3002</p></blockquote><p>\u5230\u8FD9\u91CC\u4E3A\u6B62\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u5411Class\u4E2D\u6DFB\u52A0\u5404\u79CD\u5FC5\u8981\u7684\u5143\u6570\u636E\u4E86\uFF0C\u4F46\u662F\u6211\u4EEC\u8FD8\u5DEE\u4E00\u6B65\uFF0C\u5C31\u662F\u8BFB\u53D6\u5143\u6570\u636E\u3002</p><p>\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u51FD\u6570\u6765\u8BFB\u53D6\u6574\u4E2AClass\u4E2D\u7684\u5143\u6570\u636E:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u5DE5\u5177\u51FD\u6570 **/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function isConstructor(symbol: any): boolean {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return notUndefined(symbol) &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      symbol instanceof Function &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      symbol.constructor &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      symbol.constructor instanceof Function &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      notUndefined(new symbol) &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      Object.getPrototypeOf(symbol) !== Object.prototype &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      symbol.constructor !== Object &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      symbol.prototype.hasOwnProperty(&#39;constructor&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function notUndefined(item: any): boolean {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return item != undefined &amp;&amp; item != &#39;undefined&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function isFunction(value: any): value is Function {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return typeof value === &#39;function&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function mapRoute(instance: Object) {</span></span>
<span class="line"><span style="color:#A6ACCD;">const prototype = Object.getPrototypeOf(instance);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7B5B\u9009\u51FA\u7C7B\u7684 methodName</span></span>
<span class="line"><span style="color:#A6ACCD;">const methodsNames = Object.getOwnPropertyNames(prototype)</span></span>
<span class="line"><span style="color:#A6ACCD;">                            .filter(item =&gt; !isConstructor(item) &amp;&amp; isFunction(prototype[item]));</span></span>
<span class="line"><span style="color:#A6ACCD;">return methodsNames.map(methodName =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const fn = prototype[methodName];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u53D6\u51FA\u5B9A\u4E49\u7684 metadata</span></span>
<span class="line"><span style="color:#A6ACCD;">  const route = Reflect.getMetadata(PATH_METADATA, fn);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const method = Reflect.getMetadata(METHOD_METADATA, fn);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    route,</span></span>
<span class="line"><span style="color:#A6ACCD;">    method,</span></span>
<span class="line"><span style="color:#A6ACCD;">    fn,</span></span>
<span class="line"><span style="color:#A6ACCD;">    methodName</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Reflect.getMetadata(PATH_METADATA, Home);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const info = mapRoute(new Home());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(info);</span></span>
<span class="line"><span style="color:#A6ACCD;">// [</span></span>
<span class="line"><span style="color:#A6ACCD;">//   {</span></span>
<span class="line"><span style="color:#A6ACCD;">//     route: &#39;/home&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">//     method: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">//     fn: [Function: Home],</span></span>
<span class="line"><span style="color:#A6ACCD;">//     methodName: &#39;constructor&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">//   },</span></span>
<span class="line"><span style="color:#A6ACCD;">//   {</span></span>
<span class="line"><span style="color:#A6ACCD;">//     route: &#39;/article&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">//     method: &#39;GET&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">//     fn: [Function],</span></span>
<span class="line"><span style="color:#A6ACCD;">//     methodName: &#39;someGetMethod&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">//   },</span></span>
<span class="line"><span style="color:#A6ACCD;">//   {</span></span>
<span class="line"><span style="color:#A6ACCD;">//     route: &#39;/comment&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">//     method: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">//     fn: [Function],</span></span>
<span class="line"><span style="color:#A6ACCD;">//     methodName: &#39;somePostMethod&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">//   }</span></span>
<span class="line"><span style="color:#A6ACCD;">// ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u901A\u8FC7\u8FD9\u4E00\u8282\u7EC8\u4E8E\u4E86\u89E3\u4E86 Reflect Metadata \u7684\u57FA\u672C\u7528\u6CD5\u548C\u5B9E\u8DF5\uFF0C\u5B9E\u9645\u4E0A Reflect Metadata \u7684\u4F5C\u7528\u5C31\u662F\u9644\u52A0\u5143\u6570\u636E\uFF0C\u8FD9\u4E00\u70B9\u8DDF Java \u4E2D\u7684\u6CE8\u89E3\u975E\u5E38\u76F8\u4F3C\u3002</p><p>Angular \u6216\u8005 Nestjs \u8FD9\u6837\u7684\u6846\u67B6\u5C31\u662F\u901A\u8FC7 Decorator + Reflect.metadata \u7684\u7EC4\u5408\u6765\u6A21\u62DF\u6CE8\u89E3(Annotation)\u7684\u529F\u80FD\uFF0C\u4E0A\u9762\u7684\u8DEF\u7531\u5B9E\u8DF5\u73AF\u8282\u5C31\u662F\u5982\u6B64\u3002</p>`,53),t=[p];function o(c,r,A,C,i,y){return n(),a("div",null,t)}const u=s(l,[["render",o]]);export{D as __pageData,u as default};
