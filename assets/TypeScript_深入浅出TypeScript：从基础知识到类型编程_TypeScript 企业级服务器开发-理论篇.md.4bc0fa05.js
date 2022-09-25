import{_ as s,c as n,o as a,d as e}from"./app.e5528619.js";const D=JSON.parse('{"title":"TypeScript \u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u7406\u8BBA\u7BC7","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F9D\u8D56\u6CE8\u5165","slug":"\u4F9D\u8D56\u6CE8\u5165","link":"#\u4F9D\u8D56\u6CE8\u5165","children":[]},{"level":2,"title":"DTO","slug":"dto","link":"#dto","children":[]},{"level":2,"title":"ORM","slug":"orm","link":"#orm","children":[]},{"level":2,"title":"\u9762\u5411\u5207\u9762\u7F16\u7A0B","slug":"\u9762\u5411\u5207\u9762\u7F16\u7A0B","link":"#\u9762\u5411\u5207\u9762\u7F16\u7A0B","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/TypeScript \u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u7406\u8BBA\u7BC7.md"}'),p={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/TypeScript \u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u7406\u8BBA\u7BC7.md"},l=e(`<h1 id="typescript-\u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u7406\u8BBA\u7BC7" tabindex="-1">TypeScript \u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u7406\u8BBA\u7BC7 <a class="header-anchor" href="#typescript-\u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u7406\u8BBA\u7BC7" aria-hidden="true">#</a></h1><hr><h1 id="typescript-\u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1\uFF1A\u7406\u8BBA\u7BC7" tabindex="-1">typescript \u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1\uFF1A\u7406\u8BBA\u7BC7 <a class="header-anchor" href="#typescript-\u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1\uFF1A\u7406\u8BBA\u7BC7" aria-hidden="true">#</a></h1><p>\u901A\u5E38\u5C0F\u6253\u5C0F\u95F9\u7684 Node.js \u670D\u52A1\u5668\u5F00\u53D1\u57FA\u672C\u7528\u9762\u6761\u4EE3\u7801\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4F46\u662F\u4E00\u822C\u7528 typescript \u5F00\u53D1 Node.js \u540E\u7AEF\u9879\u76EE\uFF0C\u8FD9\u4E2A\u8981\u6C42\u901A\u5E38\u662F\u4F01\u4E1A\u7EA7\u7684\uFF0C\u9762\u6761\u4EE3\u7801\u663E\u7136\u662F\u4E0D\u80FD\u5199\u4E86\uFF0C\u8981\u6709\u57FA\u672C\u7684\u5206\u5C42\u3001\u903B\u8F91\u4E0E\u914D\u7F6E\u5206\u79BB\u7B49\u7B49\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6700\u597D\u7684\u65B9\u6CD5\u662F\u9009\u62E9\u4E00\u4E2A\u4F01\u4E1A\u7EA7\u6846\u67B6\uFF0C\u6BD4\u5982 Nest.js\uFF0C\u6216\u8005\u5728 egg.js\u3001koa \u8FD9\u79CD\u4F4E\u7EA7\u522B\u6846\u67B6\u3001\u5E93\u57FA\u7840\u4E0A\u5C01\u88C5\u4E00\u4E2A\u4F01\u4E1A\u7EA7\u6846\u67B6\u3002</p><p>\u6211\u4EEC\u5728 koa \u7684\u57FA\u7840\u4E0A\u5C01\u88C5\u4E00\u4E2A\u6846\u67B6\u7684\u5185\u5BB9\u4E4B\u591A\u663E\u7136\u53EF\u4EE5\u5199\u4E00\u672C\u4E66\u4E86\uFF0C\u800C\u4E14\u9664\u975E\u6709\u7279\u6B8A\u9700\u6C42\uFF0C\u6700\u597D\u7684\u65B9\u5F0F\u8FD8\u662F\u9009\u62E9\u793E\u533A\u5185\u5DF2\u7ECF\u6BD4\u8F83\u6210\u719F\u7684\u6846\u67B6\u8FDB\u884C\u5F00\u53D1\uFF0C\u6211\u4EEC\u5C31\u5B66\u4E60\u4E00\u4E0B Node.js \u751F\u6001\u4E2D\u4E3A\u6570\u4E0D\u591A\u7684\u4F01\u4E1A\u7EA7\u5F00\u53D1\u6846\u67B6 Nest.js\u3002</p><p>Nest.js \u662F Node \u6E10\u8FDB\u5F0F\u6846\u67B6\uFF0C\u5E95\u5C42\u9ED8\u8BA4\u4F7F\u7528 express\uFF08\u53EF\u4EE5\u901A\u8FC7 Adapter \u8F6C\u6362\u5230 fastify\uFF09\uFF0C\u53EF\u4EE5\u4F7F\u7528 express \u6216\u8005 fastify \u6240\u6709\u4E2D\u95F4\u4EF6\uFF0C\u5B8C\u7F8E\u652F\u6301 TypeScript\uFF0C\u5B83\u5927\u91CF\u501F\u9274\u4E86 Spring \u548C Angular \u4E2D\u7684\u8BBE\u8BA1\u601D\u60F3\u3002</p><p>\u6211\u4EEC\u5148\u5B66\u4E60\u4E00\u4E0B Nest.js \u4E2D\u51E0\u4E2A\u91CD\u8981\u7684\u6982\u5FF5\u3002</p><h2 id="\u4F9D\u8D56\u6CE8\u5165" tabindex="-1">\u4F9D\u8D56\u6CE8\u5165 <a class="header-anchor" href="#\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u7528\u8FC7 Spring \u6216\u8005 Angular\uFF0C\u8FD9\u4E2A\u6982\u5FF5\u5176\u5B9E\u5DF2\u7ECF\u542C\u8FC7\u65E0\u6570\u6B21\u4E86\u3002</p><p>\u4F9D\u8D56\u6CE8\u5165\uFF08Dependency Injection\uFF0C\u7B80\u79F0DI\uFF09\u662F\u9762\u5411\u5BF9\u8C61\u4E2D\u63A7\u5236\u53CD\u8F6C\uFF08Inversion of Control\uFF0C\u7B80\u79F0 IoC\uFF09\u6700\u5E38\u89C1\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u4E3B\u8981\u7528\u6765\u964D\u4F4E\u4EE3\u7801\u7684\u8026\u5408\u5EA6\u3002</p><p>\u5047\u8BBE\u4F60\u8981\u9020\u4E00\u8F86\u8F66\uFF0C\u4F60\u9700\u8981\u5F15\u64CE\u548C\u8F6E\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Engine } from &#39;./engine&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Tire } from &#39;./tire&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Car {</span></span>
<span class="line"><span style="color:#A6ACCD;">  private engine;</span></span>
<span class="line"><span style="color:#A6ACCD;">  private wheel;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.engine = new Engine();</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.tire = new Tire();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u65F6\u5019 <code>Car</code> \u8FD9\u4E2A\u7C7B\u4F9D\u8D56\u4E8E <code>Engine</code> \u548C <code>Tire</code>\uFF0C\u6784\u9020\u5668\u4E0D\u4EC5\u9700\u8981\u628A\u4F9D\u8D56\u8D4B\u503C\u5230\u5F53\u524D\u7C7B\u5185\u90E8\u5C5E\u6027\u4E0A\u8FD8\u9700\u8981\u628A\u4F9D\u8D56\u5B9E\u4F8B\u5316\u3002\u5047\u8BBE\uFF0C\u6709\u5F88\u591A\u79CD\u7C7B\u7684 <code>Car</code> \u90FD\u7528\u4E86 <code>Engine</code>\uFF0C\u8FD9\u65F6\u5019\u9700\u8981\u628A <code>Engine</code> \u66FF\u6362\u4E3A <code>ElectricEngine</code>\u3002</p><p>\u4EE5\u4E0A\u8FD9\u79CD\u7275\u4E00\u53D1\u800C\u52A8\u5168\u8EAB\u7684\u540E\u679C\uFF0C\u5C31\u662F\u4EE3\u7801\u8026\u5408\u5EA6\u8FC7\u9AD8\u9020\u6210\u7684\uFF0C\u56E0\u6B64\u6211\u4EEC\u5F97\u60F3\u529E\u6CD5\u964D\u4F4E\u8026\u5408\u5EA6\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u9700\u8981\u7528\u5230 IoC\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Engine } from &#39;./engine&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Tire } from &#39;./tire&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Container {</span></span>
<span class="line"><span style="color:#A6ACCD;">  private constructorPool;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.constructorPool = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  register(name, constructor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.constructorPool.set(name, constructor);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const target = this.constructorPool.get(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new target();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const container = new Container();</span></span>
<span class="line"><span style="color:#A6ACCD;">container.bind(&#39;engine&#39;, Engine);</span></span>
<span class="line"><span style="color:#A6ACCD;">container.bind(&#39;tire&#39;, Tire);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Car {</span></span>
<span class="line"><span style="color:#A6ACCD;">  private engine;</span></span>
<span class="line"><span style="color:#A6ACCD;">  private tire;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.engine = container.get(&#39;engine&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.tire = container.get(&#39;tire&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\uFF0C<code>container</code>\u76F8\u5F53\u4E8E<code>Car</code>\u548C<code>Engine</code>\u3001<code>Tire</code>\u4E4B\u95F4\u7684\u4E2D\u8F6C\u7AD9\uFF0C<code>Car</code>\u4E0D\u9700\u8981\u81EA\u5DF1\u53BB\u5B9E\u4F8B\u5316\u4E00\u4E2A<code>Engine</code>\u6216\u8005<code>Tire</code>\uFF0C<code>Car</code>\u548C<code>Engine</code>\u3001<code>Tire</code>\u4E4B\u95F4\u4E5F\u5C31\u6CA1\u6709\u4E86\u5F3A\u8026\u5408\u7684\u5173\u7CFB\u3002</p><p>\u4ECE\u4E0A\u9762\u4F8B\u5B50\u770B\u51FA\uFF0C\u5728\u4F7F\u7528 IoC \u4E4B\u524D\uFF0C<code>Car</code>\u9700\u8981<code>Engine</code>\u6216\u8005<code>Tire</code>\u65F6\u9700\u8981\u81EA\u5DF1\u4E3B\u52A8\u53BB\u521B\u5EFA<code>Engine</code>\u6216\u8005<code>Tire</code>\uFF0C\u6B64\u65F6\u5BF9<code>Engine</code>\u6216\u8005<code>Tire</code>\u7684\u521B\u5EFA\u548C\u4F7F\u7528\u7684\u63A7\u5236\u6743\u90FD\u5728<code>Car</code>\u624B\u4E0A\u3002</p><p>\u5728\u4F7F\u7528 IoC \u4E4B\u540E\uFF0C<code>Car</code>\u548C<code>Engine</code>\u6216\u8005<code>Tire</code>\u4E4B\u95F4\u7684\u8054\u7CFB\u5C31\u5207\u65AD\u4E86\uFF0C\u5F53<code>Car</code>\u9700\u8981<code>Engine</code>\u6216\u8005<code>Tire</code>\u65F6\uFF0C<code>IoC Container</code>\u4F1A\u4E3B\u52A8\u521B\u5EFA\u8FD9\u4E2A\u5BF9\u8C61\u7ED9<code>Car</code>\u4F7F\u7528\uFF0C\u6B64\u65F6<code>Car</code>\u83B7\u53D6<code>Engine</code>\u6216\u8005<code>Tire</code>\u7684\u884C\u4E3A\u7531\u4E3B\u52A8\u83B7\u53D6\u53D8\u6210\u4E86\u88AB\u52A8\u83B7\u53D6\uFF0C\u63A7\u5236\u6743\u5C31\u98A0\u5012\u8FC7\u6765\u3002\u5F53<code>Engine</code>\u6216\u8005<code>Tire</code>\u6709\u4EFB\u4F55\u53D8\u52A8\uFF0C<code>Car</code>\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u5C31\u5B8C\u6210\u4E86\u89E3\u8026\u3002</p><p>\u5F53\u6211\u4EEC\u9700\u8981\u6D4B\u8BD5<code>Car</code>\u65F6\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u628A<code>Engine</code>\u6216\u8005<code>Tire</code>\u5168\u90E8<code>new</code>\u4E00\u904D\u6765\u6784\u9020<code>Car</code>\uFF0C\u53EA\u9700\u8981\u628A mock \u7684<code>Engine</code>\u6216\u8005<code>Tire</code>\uFF0C \u6CE8\u5165\u5230 IoC \u5BB9\u5668\u4E2D\u5C31\u884C\u3002</p><p>\u5728 Nestjs \u4E2D\uFF0C\u901A\u8FC7<code>@Injectable</code>\u88C5\u9970\u5668\u5411 IoC \u5BB9\u5668\u6CE8\u518C\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Injectable } from &#39;@nestjs/common&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Cat } from &#39;./interfaces/cat.interface&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Injectable()</span></span>
<span class="line"><span style="color:#A6ACCD;">export class CatsService {</span></span>
<span class="line"><span style="color:#A6ACCD;">  private readonly cats: Cat[] = [];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  create(cat: Cat) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.cats.push(cat);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  findAll(): Cat[] {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.cats;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u6784\u9020\u51FD\u6570\u4E2D\u6CE8\u5165<code>CatsService</code>\u7684\u5B9E\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Controller, Get, Post, Body } from &#39;@nestjs/common&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { CreateCatDto } from &#39;./dto/create-cat.dto&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { CatsService } from &#39;./cats.service&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Cat } from &#39;./interfaces/cat.interface&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Controller(&#39;cats&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">export class CatsController {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(private readonly catsService: CatsService) {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @Post()</span></span>
<span class="line"><span style="color:#A6ACCD;">  async create(@Body() createCatDto: CreateCatDto) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.catsService.create(createCatDto);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @Get()</span></span>
<span class="line"><span style="color:#A6ACCD;">  async findAll(): Promise&lt;Cat[]&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.catsService.findAll();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>CatsService</code>\u4F5C\u4E3A\u4E00\u4E2A<code>privider</code>\uFF0C\u9700\u8981\u5728<code>module</code>\u4E2D\u6CE8\u518C\uFF0C\u8FD9\u6837\u5728\u8BE5<code>module</code>\u542F\u52A8\u65F6\uFF0C\u4F1A\u89E3\u6790<code>module</code>\u4E2D\u6240\u6709\u7684\u4F9D\u8D56\uFF0C\u5F53<code>module</code>\u9500\u6BC1\u65F6\uFF0C<code>provider</code>\u4E5F\u4F1A\u4E00\u8D77\u9500\u6BC1\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Module } from &#39;@nestjs/common&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { CatsController } from &#39;./cats/cats.controller&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { CatsService } from &#39;./cats/cats.service&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Module({</span></span>
<span class="line"><span style="color:#A6ACCD;">  controllers: [CatsController],</span></span>
<span class="line"><span style="color:#A6ACCD;">  providers: [CatsService],</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export class ApplicationModule {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="dto" tabindex="-1">DTO <a class="header-anchor" href="#dto" aria-hidden="true">#</a></h2><p>\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u7B80\u79F0DTO\uFF08Data Transfer Object\uFF09\uFF0C \u662F\u4E00\u7EC4\u9700\u8981\u8DE8\u8FDB\u7A0B\u6216\u7F51\u7EDC\u8FB9\u754C\u4F20\u8F93\u7684\u805A\u5408\u6570\u636E\u7684\u7B80\u5355\u5BB9\u5668\u3002\u5B83\u4E0D\u5E94\u8BE5\u5305\u542B\u4E1A\u52A1\u903B\u8F91\uFF0C\u5E76\u5C06\u5176\u884C\u4E3A\u9650\u5236\u4E3A\u8BF8\u5982\u5185\u90E8\u4E00\u81F4\u6027\u68C0\u67E5\u548C\u57FA\u672C\u9A8C\u8BC1\u4E4B\u7C7B\u7684\u6D3B\u52A8\u3002</p><p>\u5728 Nestjs \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 TypeScript \u63A5\u53E3\u6216\u7B80\u5355\u7684\u7C7B\u6765\u5B8C\u6210\u3002\u914D\u5408\xA0<code>class-validator</code>\u548C<code>class-transformer</code>\xA0\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u9A8C\u8BC1\u524D\u7AEF\u4F20\u8FC7\u6765\u7684\u53C2\u6570\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { IsString, IsInt, MinLength, MaxLength } from &quot;class-validator&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ApiModelProperty } from &#39;@nestjs/swagger&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export class CreateCatDto {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @ApiModelProperty()</span></span>
<span class="line"><span style="color:#A6ACCD;">  @IsString()</span></span>
<span class="line"><span style="color:#A6ACCD;">  @MinLength(10, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    message: &quot;Name is too short&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  @MaxLength(50, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    message: &quot;Name is too long&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  @ApiModelProperty()</span></span>
<span class="line"><span style="color:#A6ACCD;">  @IsInt()</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  @ApiModelProperty()</span></span>
<span class="line"><span style="color:#A6ACCD;">  @IsString()</span></span>
<span class="line"><span style="color:#A6ACCD;">  readonly breed: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="orm" tabindex="-1">ORM <a class="header-anchor" href="#orm" aria-hidden="true">#</a></h2><p>ORM \u662F\u201D\u5BF9\u8C61-\u5173\u7CFB\u6620\u5C04\u201D\uFF08Object/Relational Mapping\uFF09 \u7684\u7F29\u5199\uFF0C\u901A\u8FC7\u5B9E\u4F8B\u5BF9\u8C61\u7684\u8BED\u6CD5\uFF0C\u5B8C\u6210\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u64CD\u4F5C\u3002\u901A\u8FC7 ORM \u5C31\u53EF\u4EE5\u7528\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u65B9\u5F0F\u53BB\u64CD\u4F5C\u5173\u7CFB\u578B\u6570\u636E\u5E93\u3002</p><p>\u5728 Java \u4E2D\uFF0C\u901A\u5E38\u4F1A\u6709 DAO\uFF08Data Access Object\uFF0C \u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\uFF09\u5C42\uFF0CDAO \u4E2D\u5305\u542B\u4E86\u5404\u79CD\u6570\u636E\u5E93\u7684\u64CD\u4F5C\u65B9\u6CD5\u3002\u901A\u8FC7\u5B83\u7684\u65B9\u6CD5\uFF0C\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u76F8\u5173\u7684\u64CD\u4F5C\u3002DAO \u4E3B\u8981\u4F5C\u7528\u662F\u5206\u79BB\u4E1A\u52A1\u5C42\u4E0E\u6570\u636E\u5C42\uFF0C\u907F\u514D\u4E1A\u52A1\u5C42\u4E0E\u6570\u636E\u5C42\u8026\u5408\u3002</p><p>\u5728 Nestjs \u4E2D\uFF0C\u53EF\u4EE5\u7528 TypeORM \u4F5C\u4E3A\u4F60\u7684 DAO \u5C42\uFF0C\u5B83\u652F\u6301 MySQL / MariaDB / Postgres / CockroachDB / SQLite / Microsoft SQL Server / Oracle / MongoDB / NoSQL\u3002</p><p>\u5728 typeORM \u4E2D\u6570\u636E\u5E93\u7684\u8868\u5BF9\u5E94\u7684\u5C31\u662F\u4E00\u4E2A\u7C7B\uFF0C\u901A\u8FC7\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u6765\u521B\u5EFA\u5B9E\u4F53\u3002\u5B9E\u4F53\uFF08Entity\uFF09\u662F\u4E00\u4E2A\u6620\u5C04\u5230\u6570\u636E\u5E93\u8868\uFF08\u6216\u4F7F\u7528 MongoDB \u65F6\u7684\u96C6\u5408\uFF09\u7684\u7C7B\uFF0C\u901A\u8FC7<code>@Entity()</code>\u6765\u6807\u8BB0\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import {Entity, PrimaryGeneratedColumn, Column} from &quot;typeorm&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Entity()</span></span>
<span class="line"><span style="color:#A6ACCD;">export class User {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @PrimaryGeneratedColumn()</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: number;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @Column()</span></span>
<span class="line"><span style="color:#A6ACCD;">    firstName: string;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @Column()</span></span>
<span class="line"><span style="color:#A6ACCD;">    lastName: string;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @Column()</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u5C06\u521B\u5EFA\u4EE5\u4E0B\u6570\u636E\u5E93\u8868\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">+-------------+--------------+----------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">|                          user                           |</span></span>
<span class="line"><span style="color:#A6ACCD;">+-------------+--------------+----------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |</span></span>
<span class="line"><span style="color:#A6ACCD;">| firstName   | varchar(255) |                            |</span></span>
<span class="line"><span style="color:#A6ACCD;">| lastName    | varchar(255) |                            |</span></span>
<span class="line"><span style="color:#A6ACCD;">| isActive    | boolean      |                            |</span></span>
<span class="line"><span style="color:#A6ACCD;">+-------------+--------------+----------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528 <code>@InjectRepository()</code> \u4FEE\u9970\u5668\u6CE8\u5165 \u5BF9\u5E94\u7684<code>Repository</code>\uFF0C\u5C31\u53EF\u4EE5\u5728\u8FD9\u4E2A <code>Repository</code> \u5BF9\u8C61\u4E0A\u8FDB\u884C\u6570\u636E\u5E93\u7684\u4E00\u4E9B\u64CD\u4F5C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Injectable } from &#39;@nestjs/common&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { InjectRepository } from &#39;@nestjs/typeorm&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Repository } from &#39;typeorm&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { User } from &#39;./user.entity&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Injectable()</span></span>
<span class="line"><span style="color:#A6ACCD;">export class UserService {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(</span></span>
<span class="line"><span style="color:#A6ACCD;">    @InjectRepository(User)</span></span>
<span class="line"><span style="color:#A6ACCD;">    private readonly userRepository: Repository&lt;User&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  async findAll(): Promise&lt;User[]&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return await this.userRepository.find();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u9762\u5411\u5207\u9762\u7F16\u7A0B" tabindex="-1">\u9762\u5411\u5207\u9762\u7F16\u7A0B <a class="header-anchor" href="#\u9762\u5411\u5207\u9762\u7F16\u7A0B" aria-hidden="true">#</a></h2><p>\u9762\u5411\u5207\u9762\u7F16\u7A0B\uFF08Aspect Oriented Programming\uFF0C\u7B80\u79F0AOP\uFF09\u4E3B\u8981\u662F\u9488\u5BF9\u4E1A\u52A1\u5904\u7406\u8FC7\u7A0B\u4E2D\u7684\u5207\u9762\u8FDB\u884C\u63D0\u53D6\uFF0C\u5728\u67D0\u4E2A\u6B65\u9AA4\u548C\u9636\u6BB5\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u4ECE\u800C\u8FBE\u5230 DRY\uFF08Don\u2019t Repeat Yourself\uFF09 \u7684\u76EE\u7684\u3002AOP \u5BF9 OOP \u6765\u8BF4\uFF0C\u662F\u4E00\u79CD\u8865\u5145\uFF0C\u6BD4\u5982\u53EF\u4EE5\u5728\u67D0\u4E00\u5207\u9762\u4E2D\u5BF9\u5168\u5C40\u7684 Log\u3001\u9519\u8BEF\u8FDB\u884C\u5904\u7406\uFF0C\u8FD9\u79CD\u4E00\u5200\u5207\u7684\u65B9\u5F0F\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\uFF0CAOP \u7684\u5904\u7406\u65B9\u5F0F\u76F8\u5BF9\u6BD4\u8F83\u7C97\u7C92\u5EA6\u3002</p><p>\u5728 Nestjs \u4E2D\uFF0CAOP \u5206\u4E3A\u4E0B\u9762\u51E0\u4E2A\u90E8\u5206\uFF08\u6309\u987A\u5E8F\u6392\u5217\uFF09\uFF1A</p><ul><li>Middlewares</li><li>Guards</li><li>Interceptors (\u5728\u6D41\u88AB\u64CD\u7EB5\u4E4B\u524D)</li><li>Pipes</li><li>Interceptors (\u5728\u6D41\u88AB\u64CD\u7EB5\u4E4B\u540E)</li><li>Exception filters (\u5982\u679C\u53D1\u73B0\u4EFB\u4F55\u5F02\u5E38)</li></ul><p>\u5728 Nest.js \u4E2D\u5206\u5C42\u5904\u7406\u7684\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded06ce1ba3219~tplv-t2oaga2asx-image.image" alt="2019-10-21-00-53-00"></p><ul><li>Pipes \u4E00\u822C\u7528\u6237\u9A8C\u8BC1\u8BF7\u6C42\u4E2D\u53C2\u6570\u662F\u5426\u7B26\u5408\u8981\u6C42\uFF0C\u8D77\u5230\u4E00\u4E2A\u6821\u9A8C\u53C2\u6570\u7684\u529F\u80FD</li><li>middleware \u4E2D\u95F4\u4EF6\u5C31\u662F express \u7684\u4E2D\u95F4\u4EF6\uFF0C\u6211\u4EEC\u751A\u81F3\u53EF\u4EE5\u590D\u7528 express \u4E2D\u7684\u4E2D\u95F4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u4E2D\u95F4\u4EF6\u4E2D\u63A5\u53D7 response \u548C request \u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4FEE\u6539\u8BF7\u6C42\u5BF9\u8C61 request \u548C\u7ED3\u679C\u8FD4\u56DE\u5BF9\u8C61 response</li><li>Guards \u5B88\u536B\uFF1A\u4F5C\u7528\u5C31\u662F\u51B3\u5B9A\u4E00\u4E2A\u8BF7\u6C42\u662F\u5426\u5E94\u8BE5\u88AB\u5904\u7406\u51FD\u6570\u63A5\u53D7\u5E76\u5904\u7406\uFF0C\u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728 middleware \u4E2D\u95F4\u4EF6\u4E2D\u6765\u505A\u8BF7\u6C42\u7684\u63A5\u53D7\u4E0E\u5426\u7684\u5904\u7406\uFF0C\u4E0E middleware \u76F8\u6BD4\uFF0CGuards \u53EF\u4EE5\u83B7\u5F97\u66F4\u52A0\u8BE6\u7EC6\u7684\u5173\u4E8E\u8BF7\u6C42\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u4FE1\u606F</li><li>interceptors\u62E6\u622A\u5668\uFF1Ainterceptors \u62E6\u622A\u5668\u5728\u51FD\u6570\u6267\u884C\u524D\u6216\u8005\u6267\u884C\u540E\u53EF\u4EE5\u8FD0\u884C\uFF0C\u5982\u679C\u5728\u6267\u884C\u540E\u8FD0\u884C\uFF0C\u53EF\u4EE5\u62E6\u622A\u51FD\u6570\u6267\u884C\u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u4FEE\u6539\u53C2\u6570\u7B49\uFF0C\u6BD4\u5982\u8D85\u65F6\u5904\u7406\u5668\u5C31\u53EF\u4EE5\u7528 interceptors \u62E6\u622A\u5668\u5B9E\u73B0\u3002</li><li>Exception filters\u5F02\u5E38\u8FC7\u6EE4\u5668\uFF1AException filters\u5F02\u5E38\u8FC7\u6EE4\u5668\u53EF\u4EE5\u6355\u83B7\u5728\u540E\u7AEF\u63A5\u53D7\u5904\u7406\u4EFB\u4F55\u9636\u6BB5\u6240\u8DD1\u51FA\u7684\u5F02\u5E38\uFF0C\u6355\u83B7\u5230\u5F02\u5E38\u540E\uFF0C\u7136\u540E\u8FD4\u56DE\u5904\u7406\u8FC7\u7684\u5F02\u5E38\u7ED3\u679C\u7ED9\u5BA2\u6237\u7AEF\uFF08\u6BD4\u5982\u8FD4\u56DE\u9519\u8BEF\u7801\uFF0C\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u7B49\u7B49\uFF09</li></ul><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5B66\u4E60\u4E86 Nest.js \u7684\u51E0\u4E2A\u91CD\u8981\u6982\u5FF5\uFF0C\u5BF9\u4E8E\u6CA1\u6709 Spring \u3001 Angular \u7ECF\u9A8C\u7684\u4EBA\u7406\u89E3\u8D77\u6765\u53EF\u80FD\u6709\u4E00\u4E9B\u5403\u4E86\uFF0C\u6211\u4EEC\u63A5\u4E0B\u6765\u4F1A\u8FDB\u884C\u4E00\u4E2A\u5C0F\u5B9E\u6218\u6765\u5E2E\u52A9\u6211\u4EEC\u7406\u89E3\u3002</p><hr><p>\u53C2\u8003\uFF1A</p><ul><li><a href="https://github.com/forthealllight/blog/issues/35" target="_blank" rel="noreferrer">\u4ECEExpress\u5230Nestjs\uFF0C\u8C08\u8C08Nestjs\u7684\u8BBE\u8BA1\u601D\u60F3\u548C\u4F7F\u7528\u65B9\u6CD5</a></li><li><a href="https://zhuanlan.zhihu.com/p/60995312" target="_blank" rel="noreferrer">\u6D45\u6790\u63A7\u5236\u53CD\u8F6C</a></li></ul>`,51),o=[l];function c(t,r,i,C,A,d){return a(),n("div",null,o)}const g=s(p,[["render",c]]);export{D as __pageData,g as default};
