import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const g=JSON.parse('{"title":"\u9AD8\u7EA7\u88C5\u9970\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u6570\u88C5\u9970\u5668","slug":"\u53C2\u6570\u88C5\u9970\u5668","link":"#\u53C2\u6570\u88C5\u9970\u5668","children":[]},{"level":2,"title":"\u88C5\u9970\u5668\u5DE5\u5382","slug":"\u88C5\u9970\u5668\u5DE5\u5382","link":"#\u88C5\u9970\u5668\u5DE5\u5382","children":[]},{"level":2,"title":"\u88C5\u9970\u5668\u987A\u5E8F","slug":"\u88C5\u9970\u5668\u987A\u5E8F","link":"#\u88C5\u9970\u5668\u987A\u5E8F","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u9AD8\u7EA7\u88C5\u9970\u5668.md"}'),p={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u9AD8\u7EA7\u88C5\u9970\u5668.md"},e=l(`<h1 id="\u9AD8\u7EA7\u88C5\u9970\u5668" tabindex="-1">\u9AD8\u7EA7\u88C5\u9970\u5668 <a class="header-anchor" href="#\u9AD8\u7EA7\u88C5\u9970\u5668" aria-hidden="true">#</a></h1><hr><h1 id="\u9AD8\u7EA7\u88C5\u9970\u5668-1" tabindex="-1">\u9AD8\u7EA7\u88C5\u9970\u5668 <a class="header-anchor" href="#\u9AD8\u7EA7\u88C5\u9970\u5668-1" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u4E0A\u4E00\u8282\u4E86\u89E3\u5230\u4E86\u6700\u5E38\u7528\u7684\u56DB\u79CD\u88C5\u9970\u5668: \u7C7B\u88C5\u9970\u5668\u3001\u5C5E\u6027\u88C5\u9970\u5668\u3001\u65B9\u6CD5\u88C5\u9970\u5668\u3001\u8BBF\u95EE\u7B26\u88C5\u9970\u5668\uFF0C\u8FD9\u5DF2\u7ECF\u53EF\u4EE5\u6EE1\u8DB3\u6211\u4EEC\u65E5\u5E38\u5F00\u53D1\u7684\u9700\u6C42\u4E86\u3002</p><p>\u4F46\u662F\u4F9D\u7136\u6709\u4E00\u4E9B\u6BD4\u8F83\u9AD8\u7EA7\u7684\u7528\u6CD5\uFF0C\u8FD9\u4E9B\u7528\u6CD5\u867D\u7136\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u5E76\u4E0D\u591A\u89C1\uFF0C\u4F46\u662F\u88AB\u5927\u91CF\u8FD0\u7528\u5728\u4E86\u57FA\u7840\u5E93\u5C42\u9762\uFF0C\u8981\u60F3\u6210\u4E3A\u4E00\u4E2A\u540D\u9AD8\u9636\u7684 TypeScript \u5F00\u53D1\u8005\u8FD8\u662F\u9700\u8981\u66F4\u8FDB\u4E00\u6B65\u5B66\u4E60\u3002</p><h2 id="\u53C2\u6570\u88C5\u9970\u5668" tabindex="-1">\u53C2\u6570\u88C5\u9970\u5668 <a class="header-anchor" href="#\u53C2\u6570\u88C5\u9970\u5668" aria-hidden="true">#</a></h2><p>\u53C2\u6570\u88C5\u9970\u5668\uFF0C\u987E\u540D\u601D\u4E49\u662F\u7528\u4E8E\u4FEE\u9970\u53C2\u6570\u7684\u88C5\u9970\u5668\uFF0C\u5728 Angular \u6216\u8005 Nestjs \u4E2D\u90FD\u6709\u8FD0\u7528\uFF0C\u5F53\u7136\u5F88\u591A\u57FA\u7840\u5E93\u4E5F\u7528\u5230\u4E86\u53C2\u6570\u88C5\u9970\u5668\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function logParameter(target: Object, propertyKey: string, index: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(target, propertyKey, index);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">    greet(@logParameter message: string,@logParameter name: string): string {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return \`\${message} \${name}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const p = new Person();</span></span>
<span class="line"><span style="color:#A6ACCD;">p.greet(&#39;hello&#39;, &#39;xiaomuzhu&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Person { greet: [Function] } greet 1</span></span>
<span class="line"><span style="color:#A6ACCD;">// Person { greet: [Function] } greet 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u770B\u5230\u53C2\u6570\u88C5\u9970\u5668\u9700\u8981\u4E09\u4E2A\u53C2\u6570 <code>target</code>\u3001<code>propertyKey</code>\u3001<code>index</code>\uFF1A</p><ul><li>target \u2014\u2014 \u5F53\u524D\u5BF9\u8C61\u7684\u539F\u578B\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5047\u8BBE <code>Person</code> \u662F\u5F53\u524D\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5F53\u524D\u5BF9\u8C61 <code>target</code> \u7684\u539F\u578B\u5C31\u662F <code>Person.prototype</code></li><li>propertyKey \u2014\u2014 \u53C2\u6570\u7684\u540D\u79F0\uFF0C\u4E0A\u4F8B\u4E2D\u6307\u7684\u5C31\u662F greet</li><li>index \u2014\u2014 \u53C2\u6570\u6570\u7EC4\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u6BD4\u5982\u4E0A\u4F8B\u4E2D\u53C2\u6570 name \u7684\u4F4D\u7F6E\u662F 1, message \u7684\u4F4D\u7F6E\u4E3A 0</li></ul><p>\u53C2\u6570\u88C5\u9970\u5668\u5176\u5B9E\u6709\u4ED6\u7684\u7279\u6B8A\u4E4B\u5904\uFF0C\u6211\u4EEC\u4E4B\u524D\u5B66\u5230\u7684\u88C5\u9970\u5668\u662F\u53EF\u4EE5\u4FEE\u6539\u88AB\u4FEE\u9970\u8005\u7684\u884C\u4E3A\u7684\uFF0C\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u628A\u4E00\u4E2A\u65B9\u6CD5\u7684\u300C\u53EF\u5199\u6027\u300D\u7981\u7528\u4E86\uFF0C\u8FD9\u5C31\u5B9E\u73B0\u4E86\u7C7B\u65B9\u6CD5\u7684\u300C\u53EA\u8BFB\u300D\u6548\u679C\uFF0C\u4F46\u662F\u53C2\u6570\u88C5\u9970\u5668\u4E0D\u53EF\u4EE5\uFF0C\u4ED6\u6CA1\u6709<code>descriptor</code>\u53C2\u6570\uFF0C\u56E0\u6B64\u6CA1\u6709\u76F8\u5173\u7684 API \u4F9B\u5B83\u4FEE\u6539\u88AB\u4FEE\u9970\u8005\u7684\u884C\u4E3A\u3002</p><p>\u90A3\u4E48\uFF0C\u8FD9\u4E2A\u53C2\u6570\u88C5\u9970\u5668\u8FD8\u6709\u5565\u7528\uFF1F</p><p>\u53C2\u6570\u88C5\u9970\u5668\u53EF\u4EE5\u63D0\u4F9B\u4FE1\u606F\uFF0C\u7ED9\u6BD4\u5982\u7ED9\u7C7B\u539F\u578B\u6DFB\u52A0\u4E86\u4E00\u4E2A\u65B0\u7684\u5C5E\u6027\uFF0C\u5C5E\u6027\u4E2D\u5305\u542B\u4E00\u7CFB\u5217\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u5C31\u88AB\u6210\u4E3A\u300C\u5143\u6570\u636E\u300D\uFF0C\u7136\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u53E6\u5916\u4E00\u4E2A\u88C5\u9970\u5668\u6765\u8BFB\u53D6\u300C\u5143\u6570\u636E\u300D\u3002</p><p>\u662F\u7684\uFF0C\u8FD9\u50CF\u6781\u4E86Java\u4E2D\u7684\u6CE8\u89E3\u3002</p><p>\u5F53\u7136\u6211\u4EEC\u90A3\u79CD\u76F4\u63A5\u4FEE\u6539\u7C7B\u539F\u578B\u5C5E\u6027\u7684\u65B9\u6CD5\u5E76\u4E0D\u4F18\u96C5\uFF0C\u540E\u9762\u6211\u4EEC\u4F1A\u4ECB\u7ECD\u6709\u4E00\u79CD\u66F4\u901A\u7528\u66F4\u4F18\u96C5\u7684\u65B9\u5F0F--\u5143\u6570\u636E\u53CD\u5C04\u3002</p><h2 id="\u88C5\u9970\u5668\u5DE5\u5382" tabindex="-1">\u88C5\u9970\u5668\u5DE5\u5382 <a class="header-anchor" href="#\u88C5\u9970\u5668\u5DE5\u5382" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5148\u5047\u8BBE\u8FD9\u6837\u4E00\u4E2A\u573A\u666F\uFF0C\u6BD4\u5982\u6211\u4EEC\u9700\u8981\u51E0\u4E2A\u88C5\u9970\u5668\uFF0C\u5206\u522B\u628A\u4E00\u4E2A\u7C7B\u4E2D\u7684\u90E8\u5206\u5C5E\u6027\u3001\u7C7B\u672C\u8EAB\u3001\u65B9\u6CD5\u3001\u53C2\u6570\u7684\u540D\u79F0\u6253\u5370\u51FA\u6765\uFF0C\u6211\u4EEC\u5E94\u8BE5\u600E\u4E48\u505A?</p><p>\u5927\u5BB6\u53EF\u80FD\u4F1A\u5199\u51FA\u56DB\u4E2A\u4E0D\u540C\u7684\u88C5\u9970\u5668\u6765\u5206\u522B\u88C5\u9970\u5230\u4E0D\u540C\u6210\u5458\u4E0A:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@logClass</span></span>
<span class="line"><span style="color:#A6ACCD;">class Person { </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @logProperty</span></span>
<span class="line"><span style="color:#A6ACCD;">  public name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name : string) { </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @logMethod</span></span>
<span class="line"><span style="color:#A6ACCD;">  public greet(@logParameter message : string) : string { </span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`\${this.name} say: \${message}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6253\u5370\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">function logClass(target: typeof Person) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(target)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6253\u5370\u5C5E\u6027\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">function logProperty(target: any, propertyKey: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(propertyKey);   </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6253\u5370\u65B9\u6CD5\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(propertyKey);   </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6253\u5370\u53C2\u6570\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">function logParameter(target: Object, propertyKey: string, index: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(index);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// name</span></span>
<span class="line"><span style="color:#A6ACCD;">// 0</span></span>
<span class="line"><span style="color:#A6ACCD;">// greet</span></span>
<span class="line"><span style="color:#A6ACCD;">// [Function: Person]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u786E\u5B9E\u6211\u4EEC\u8FBE\u5230\u6548\u679C\u4E86\uFF0C\u4F46\u662F\u88C5\u9970\u5668\u901A\u5E38\u662F\u7528\u4E8E\u62BD\u8C61\u548C\u91CD\u7528\uFF0C\u5982\u679C\u4E00\u4E2A\u9879\u76EE\u6216\u8005\u5E93\u6709\u8FC7\u91CF\u88C5\u9970\u5668\u4E0D\u4EC5\u4E0D\u80FD\u8FBE\u5230\u4E0A\u8FF0\u6548\u679C\uFF0C\u7136\u800C\u4F1A\u8BA9\u9879\u76EE\u96BE\u4EE5\u7EF4\u62A4.</p><p>\u800C\u4E14\u4E0A\u8FF0\u88C5\u9970\u5668\u5176\u5B9E\u662F\u6709\u5171\u540C\u70B9\u7684\uFF0C\u4ED6\u4EEC\u90FD\u662F\u6253\u5370\u4E00\u4E9B\u5173\u952E\u4FE1\u606F\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u7528\u4E00\u4E2A<strong>\u88C5\u9970\u5668\u5DE5\u5382</strong>\u6765\u8FDB\u4E00\u6B65\u62BD\u8C61\u4E0A\u8FF0\u4EE3\u7801\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function log(...args : any[]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch(args.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case 1:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return logClass.apply(this, args);</span></span>
<span class="line"><span style="color:#A6ACCD;">    case 2:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return logProperty.apply(this, args);</span></span>
<span class="line"><span style="color:#A6ACCD;">    case 3:</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(typeof args[2] === &quot;number&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return logParameter.apply(this, args);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return logMethod.apply(this, args);</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new Error(&quot;Decorators are not valid here!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u4E4B\u540E\u76F4\u63A5\u7528 <code>log</code> \u4EE3\u66FF <code>logClass</code>\u3001<code>logProperty</code>\u3001<code>logMethod</code>\u3001<code>logParameter</code> \u5373\u53EF.</p><blockquote><p>\u88C5\u9970\u5668\u5DE5\u5382\u5C31\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u51FD\u6570\uFF0C\u5B83\u8FD4\u56DE\u4E00\u79CD\u7C7B\u578B\u7684\u88C5\u9970\u5668\u3002</p></blockquote><h2 id="\u88C5\u9970\u5668\u987A\u5E8F" tabindex="-1">\u88C5\u9970\u5668\u987A\u5E8F <a class="header-anchor" href="#\u88C5\u9970\u5668\u987A\u5E8F" aria-hidden="true">#</a></h2><p>\u591A\u4E2A\u88C5\u9970\u5668\u53EF\u4EE5\u540C\u65F6\u5E94\u7528\u5230\u4E00\u4E2A\u58F0\u660E\u4E0A\uFF0C\u5C31\u50CF\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A</p><ul><li>\u4E66\u5199\u5728\u540C\u4E00\u884C\u4E0A\uFF1A</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@f @g x</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u4E66\u5199\u5728\u591A\u884C\u4E0A\uFF1A</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@f</span></span>
<span class="line"><span style="color:#A6ACCD;">@g</span></span>
<span class="line"><span style="color:#A6ACCD;">x</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 TypeScript \u91CC\uFF0C\u5F53\u591A\u4E2A\u88C5\u9970\u5668\u5E94\u7528\u5728\u4E00\u4E2A\u58F0\u660E\u4E0A\u65F6\u4F1A\u8FDB\u884C\u5982\u4E0B\u6B65\u9AA4\u7684\u64CD\u4F5C\uFF1A</p><ol><li>\u7531\u4E0A\u81F3\u4E0B\u4F9D\u6B21\u5BF9\u88C5\u9970\u5668\u8868\u8FBE\u5F0F\u6C42\u503C\u3002</li><li>\u6C42\u503C\u7684\u7ED3\u679C\u4F1A\u88AB\u5F53\u4F5C\u51FD\u6570\uFF0C\u7531\u4E0B\u81F3\u4E0A\u4F9D\u6B21\u8C03\u7528\u3002</li></ol><p>\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u88C5\u9970\u5668\u5DE5\u5382\u7684\u8BDD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u4F8B\u5B50\u6765\u89C2\u5BDF\u5B83\u4EEC\u6C42\u503C\u7684\u987A\u5E8F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function f() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;f(): evaluated&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;f(): called&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function g() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;g(): evaluated&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;g(): called&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class C {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @f()</span></span>
<span class="line"><span style="color:#A6ACCD;">    @g()</span></span>
<span class="line"><span style="color:#A6ACCD;">    method() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u63A7\u5236\u53F0\u91CC\u4F1A\u6253\u5370\u51FA\u5982\u4E0B\u7ED3\u679C\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">f(): evaluated</span></span>
<span class="line"><span style="color:#A6ACCD;">g(): evaluated</span></span>
<span class="line"><span style="color:#A6ACCD;">g(): called</span></span>
<span class="line"><span style="color:#A6ACCD;">f(): called</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7C7B\u4E2D\u4E0D\u540C\u58F0\u660E\u4E0A\u7684\u88C5\u9970\u5668\u5C06\u6309\u4EE5\u4E0B\u89C4\u5B9A\u7684\u987A\u5E8F\u5E94\u7528\uFF1A</p><ul><li>\u53C2\u6570\u88C5\u9970\u5668\uFF0C\u7136\u540E\u4F9D\u6B21\u662F\u65B9\u6CD5\u88C5\u9970\u5668\uFF0C\u8BBF\u95EE\u7B26\u88C5\u9970\u5668\uFF0C\u6216\u5C5E\u6027\u88C5\u9970\u5668\u5E94\u7528\u5230\u6BCF\u4E2A\u5B9E\u4F8B\u6210\u5458\u3002</li><li>\u53C2\u6570\u88C5\u9970\u5668\uFF0C\u7136\u540E\u4F9D\u6B21\u662F\u65B9\u6CD5\u88C5\u9970\u5668\uFF0C\u8BBF\u95EE\u7B26\u88C5\u9970\u5668\uFF0C\u6216\u5C5E\u6027\u88C5\u9970\u5668\u5E94\u7528\u5230\u6BCF\u4E2A\u9759\u6001\u6210\u5458\u3002</li><li>\u53C2\u6570\u88C5\u9970\u5668\u5E94\u7528\u5230\u6784\u9020\u51FD\u6570\u3002</li><li>\u7C7B\u88C5\u9970\u5668\u5E94\u7528\u5230\u7C7B\u3002</li></ul><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u867D\u7136\u88C5\u9970\u5668\u76EE\u524D\u4F9D\u7136\u5728 TC39 \u7684\u8349\u6848\u9636\u6BB5\uFF0C\u4F46\u662F\u5176\u5B9E\u4ED6\u5DF2\u7ECF\u501F\u52A9 Babel \u6216\u8005 TypeScript \u5E7F\u6CDB\u8FD0\u7528\u4E8E\u5404\u79CD\u4E1A\u52A1\u5F00\u53D1\u6216\u8005\u57FA\u7840\u5E93\u4E2D\uFF0C\u8FD9\u5C31\u5F97\u76CA\u4E8E\u5B83\u5F3A\u5927\u7684\u62BD\u8C61\u4E0E\u91CD\u7528\u7279\u6027\uFF0C\u6BD4\u5982 Angular \u4E2D\u5C31\u5927\u91CF\u8FD0\u7528\u4E86\u88C5\u9970\u5668\uFF0C\u4F46\u662F\u4EC5\u4EC5\u501F\u52A9\u88C5\u9970\u5668\u7684\u529B\u91CF\u662F\u4E0D\u591F\u7684\uFF0C\u6211\u4EEC\u77E5\u9053\u5728Java\u4E2D\u6709\u4E0E\u88C5\u9970\u5668\u975E\u5E38\u50CF\u7684\u4E00\u79CD\u8BED\u6CD5\u53EB\u6CE8\u89E3\uFF0C\u8FD9\u5C31\u4E0D\u5F97\u4E0D\u63D0Reflect Metadata\u4E86\u3002</p>`,40),o=[e];function c(t,r,i,C,A,y){return a(),n("div",null,o)}const D=s(p,[["render",c]]);export{g as __pageData,D as default};
