import{_ as s,c as n,o as a,d as p}from"./app.e5528619.js";const u=JSON.parse('{"title":"\u88C5\u9970\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7C7B\u88C5\u9970\u5668","slug":"\u7C7B\u88C5\u9970\u5668","link":"#\u7C7B\u88C5\u9970\u5668","children":[]},{"level":2,"title":"\u5C5E\u6027/\u65B9\u6CD5\u88C5\u9970\u5668","slug":"\u5C5E\u6027-\u65B9\u6CD5\u88C5\u9970\u5668","link":"#\u5C5E\u6027-\u65B9\u6CD5\u88C5\u9970\u5668","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u88C5\u9970\u5668.md"}'),e={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u88C5\u9970\u5668.md"},l=p(`<h1 id="\u88C5\u9970\u5668" tabindex="-1">\u88C5\u9970\u5668 <a class="header-anchor" href="#\u88C5\u9970\u5668" aria-hidden="true">#</a></h1><hr><h1 id="\u88C5\u9970\u5668-1" tabindex="-1">\u88C5\u9970\u5668 <a class="header-anchor" href="#\u88C5\u9970\u5668-1" aria-hidden="true">#</a></h1><p>\u88C5\u9970\u5668(decorator)\u6700\u65E9\u5728 Python \u4E2D\u88AB\u5F15\u5165,\u5B83\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u7ED9\u4E00\u4E2A\u5DF2\u6709\u7684\u65B9\u6CD5\u6216\u7C7B\u6269\u5C55\u4E00\u4E9B\u65B0\u7684\u884C\u4E3A\uFF0C\u800C\u4E0D\u662F\u53BB\u76F4\u63A5\u4FEE\u6539\u5B83\u672C\u8EAB.</p><p>\u5728 ES2015 \u8FDB\u5165 Class \u4E4B\u540E,\u5F53\u6211\u4EEC\u9700\u8981\u5728\u591A\u4E2A\u4E0D\u540C\u7684\u7C7B\u4E4B\u95F4\u5171\u4EAB\u6216\u8005\u6269\u5C55\u4E00\u4E9B\u65B9\u6CD5\u6216\u884C\u4E3A\u7684\u65F6\u5019\uFF0C\u4EE3\u7801\u4F1A\u53D8\u5F97\u9519\u7EFC\u590D\u6742\uFF0C\u6781\u5176\u4E0D\u4F18\u96C5\uFF0C\u8FD9\u4E5F\u5C31\u662F\u88C5\u9970\u5668\u88AB\u63D0\u51FA\u7684\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u539F\u56E0.</p><p>\u4F46\u662F\u63A8\u8FDB\u6BD4\u8F83\u7F13\u6162,\u5230\u76EE\u524D\u4E3A\u6B62\u4E5F\u4EC5\u4EC5\u5728 <code>stage 2</code> \u9636\u6BB5.</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb126ed5c70aa~tplv-t2oaga2asx-image.image" alt="2019-09-20-23-27-48"></p><p>\u6240\u4EE5\u5728 JavaScript \u4E2D\u6211\u4EEC\u9700\u8981 Babel \u63D2\u4EF6 <code>babel-plugin-transform-decorators-legacy</code> \u6765\u652F\u6301 decorator,\u800C\u5728 Typescript \u4E2D\u6211\u4EEC\u9700\u8981\u5728 <code>tsconfig.json</code> \u91CC\u9762\u5F00\u542F\u652F\u6301\u9009\u9879 <code>experimentalDecorators</code>.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;experimentalDecorators&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u5148\u660E\u786E\u4E24\u4E2A\u6982\u5FF5:</p><ol><li>\u76EE\u524D\u88C5\u9970\u5668\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570,<code>@expression</code> \u7684\u5F62\u5F0F\u5176\u5B9E\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6, expression \u6C42\u503C\u540E\u5FC5\u987B\u4E5F\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u4F1A\u5728\u8FD0\u884C\u65F6\u88AB\u8C03\u7528\uFF0C\u88AB\u88C5\u9970\u7684\u58F0\u660E\u4FE1\u606F\u505A\u4E3A\u53C2\u6570\u4F20\u5165.</li><li>JavaScript \u4E2D\u7684 Class \u5176\u5B9E\u4E5F\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6,</li></ol><p>\u6BD4\u5982\u5728 JavaScript \u4E2D\u6211\u4EEC\u58F0\u660E\u4E00\u4E2A Class:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Person{</span></span>
<span class="line"><span style="color:#A6ACCD;">    say() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;hello&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u8FD9\u4E2A Person \u7C7B\u5B9E\u9645\u4E0A\u76F8\u5F53\u4E8E:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function Person() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">Object.defineProperty(Person.prototype, &#39;say&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: function() { console.log(&#39;hello&#39;); },</span></span>
<span class="line"><span style="color:#A6ACCD;">    enumerable: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    configurable: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    writable: true</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7C7B\u88C5\u9970\u5668" tabindex="-1">\u7C7B\u88C5\u9970\u5668 <a class="header-anchor" href="#\u7C7B\u88C5\u9970\u5668" aria-hidden="true">#</a></h2><p>\u6BD4\u5982,\u6211\u4EEC\u58F0\u660E\u4E00\u4E2A\u51FD\u6570 <code>addAge</code> \u53BB\u7ED9 Class \u7684\u5C5E\u6027 <code>age</code> \u6DFB\u52A0\u5E74\u9F84.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function addAge(constructor: Function) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor.prototype.age = 18;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@addAge</span></span>
<span class="line"><span style="color:#A6ACCD;">class Person{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  age!: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = &#39;xiaomuzhu&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let person = new Person();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person.age); // 18</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6240\u4EE5\u8FD9\u6BB5\u4EE3\u7801\u5B9E\u9645\u4E0A\u57FA\u672C\u7B49\u540C\u4E8E\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Person = addAge(function Person() { ... });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u88C5\u9970\u5668\u4F5C\u4E3A\u4FEE\u9970\u7C7B\u7684\u65F6\u5019\uFF0C\u4F1A\u628A\u6784\u9020\u5668\u4F20\u9012\u8FDB\u53BB\u3002 <code>constructor.prototype.age</code> \u5C31\u662F\u5728\u6BCF\u4E00\u4E2A\u5B9E\u4F8B\u5316\u5BF9\u8C61\u4E0A\u9762\u6DFB\u52A0\u4E00\u4E2A <code>age</code> \u503C \u8FD9\u91CC\u6211\u4EEC\u7684 <code>addAge</code> \u5C31\u6DFB\u52A0\u4E86\u4E00\u4E2A <code>age</code> \u503C.</p><h2 id="\u5C5E\u6027-\u65B9\u6CD5\u88C5\u9970\u5668" tabindex="-1">\u5C5E\u6027/\u65B9\u6CD5\u88C5\u9970\u5668 <a class="header-anchor" href="#\u5C5E\u6027-\u65B9\u6CD5\u88C5\u9970\u5668" aria-hidden="true">#</a></h2><p>\u5B9E\u9645\u4E0A\u4E00\u4E2AClass\u7684\u5C5E\u6027/\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u88AB\u88C5\u9970,\u6211\u4EEC\u5206\u522B\u7ED9 <code>Person</code> \u7C7B\u52A0\u4E0A <code>say</code> \u548C <code>run</code> \u65B9\u6CD5.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u58F0\u660E\u88C5\u9970\u5668\u4FEE\u9970\u65B9\u6CD5/\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log(target);</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log(&quot;prop &quot; + propertyKey);</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log(&quot;desc &quot; + JSON.stringify(descriptor) + &quot;\\n\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">   descriptor.writable = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Person{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = &#39;xiaomuzhu&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @method</span></span>
<span class="line"><span style="color:#A6ACCD;">  say(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &#39;instance method&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @method</span></span>
<span class="line"><span style="color:#A6ACCD;">  static run(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &#39;static method&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const xmz = new Person();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4FEE\u6539\u5B9E\u4F8B\u65B9\u6CD5say</span></span>
<span class="line"><span style="color:#A6ACCD;">xmz.say = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &#39;edit&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6253\u5370\u7ED3\u679C,\u68C0\u67E5\u662F\u5426\u6210\u529F\u4FEE\u6539\u5B9E\u4F8B\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(xmz.say());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F97\u5230\u7684\u7ED3\u679C\u5982\u4E0B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Person { say: [Function] }</span></span>
<span class="line"><span style="color:#A6ACCD;">prop say</span></span>
<span class="line"><span style="color:#A6ACCD;">desc {&quot;writable&quot;:true,&quot;enumerable&quot;:true,&quot;configurable&quot;:true}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[Function: Person] { run: [Function] }</span></span>
<span class="line"><span style="color:#A6ACCD;">prop run</span></span>
<span class="line"><span style="color:#A6ACCD;">desc {&quot;writable&quot;:true,&quot;enumerable&quot;:true,&quot;configurable&quot;:true}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xmz.say = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">       ^</span></span>
<span class="line"><span style="color:#A6ACCD;">TypeError: Cannot assign to read only property &#39;say&#39; of object &#39;#&lt;Person&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u5C5E\u6027/\u65B9\u6CD5\u7684\u88C5\u9970\u5668\u5B9A\u4E49\u8FC7\u7A0B\u4E2D,\u4E0E class \u7684\u88C5\u9970\u5668\u4E0D\u540C,\u6211\u4EEC\u7684 <code>method</code> \u51FD\u6570\u4E2D\u7684\u53C2\u6570\u53D8\u4E3A\u4E86\u4E09\u4E2A <code>target</code>\u3001<code>propertyKey</code>\u3001<code>descriptor</code>.</p><p>\u5BF9,\u8FD9\u4E09\u4E2A\u53C2\u6570\u6B63\u662F\u6E90\u4E8E<code>Object.defineProperty</code>,\u4E5F\u5C31\u662F\u4E0A\u9762\u63D0\u5230\u7684 Class \u672C\u8D28\u662F\u8BED\u6CD5\u7CD6,\u5B9E\u9645\u4E0A\u5C5E\u6027/\u65B9\u6CD5\u88C5\u9970\u5668\u662F\u501F\u52A9<code>Object.defineProperty</code>\u4FEE\u6539\u7C7B\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\u7684.</p><p>\u4E0A\u9762\u7684\u65B9\u6CD5\u88C5\u9970\u5668\u4EE3\u7801\u76F8\u5F53\u4E8E\u4E0B\u9762:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let descriptor = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: function() { return &#39;instance method&#39;},</span></span>
<span class="line"><span style="color:#A6ACCD;">    enumerable: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    configurable: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    writable: true</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">descriptor = readonly(Cat.prototype, &quot;say&quot;, descriptor) || descriptor;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.defineProperty(Cat.prototype, &quot;say&quot;, descriptor);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u8BBF\u95EE\u5668\u5C5E\u6027getter\u6216\u8005setter\u540C\u6837\u53EF\u4EE5\u7528\u5C5E\u6027\u88C5\u9970\u5668\u4FEE\u9970</p></blockquote><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u867D\u7136\u88C5\u9970\u5668\u76EE\u524D\u4F9D\u7136\u5728 TC39 \u7684\u8349\u6848\u9636\u6BB5,\u4F46\u662F\u5176\u5B9E\u4ED6\u5DF2\u7ECF\u501F\u52A9 Babel \u6216\u8005 TypeScript \u5E7F\u6CDB\u8FD0\u7528\u4E8E\u5404\u79CD\u4E1A\u52A1\u5F00\u53D1\u6216\u8005\u57FA\u7840\u5E93\u4E2D,\u8FD9\u5C31\u5F97\u76CA\u4E8E\u5B83\u5F3A\u5927\u7684\u62BD\u8C61\u4E0E\u91CD\u7528\u7279\u6027,\u6BD4\u5982 Angular \u4E2D\u5C31\u5927\u91CF\u8FD0\u7528\u4E86\u88C5\u9970\u5668,\u4F46\u662F\u4EC5\u4EC5\u501F\u52A9\u88C5\u9970\u5668\u7684\u529B\u91CF\u662F\u4E0D\u591F\u7684,\u6211\u4EEC\u77E5\u9053\u5728 Java \u4E2D\u6709\u4E0E\u88C5\u9970\u5668\u975E\u5E38\u50CF\u7684\u4E00\u79CD\u8BED\u6CD5\u53EB\u6CE8\u89E3,\u8FD9\u5C31\u4E0D\u5F97\u4E0D\u63D0 Reflect Metadata\u4E86.</p>`,33),o=[l];function c(t,r,i,C,A,d){return a(),n("div",null,o)}const D=s(e,[["render",c]]);export{u as __pageData,D as default};
