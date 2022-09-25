import{_ as s,c as n,o as a,d as p}from"./app.e5528619.js";const u=JSON.parse('{"title":"Vue \u5B9E\u6218-vue-property-decorator","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3B\u8981\u529F\u80FD","slug":"\u4E3B\u8981\u529F\u80FD","link":"#\u4E3B\u8981\u529F\u80FD","children":[]},{"level":2,"title":"vue-class-component \u4E3B\u8981\u529F\u80FD","slug":"vue-class-component-\u4E3B\u8981\u529F\u80FD","link":"#vue-class-component-\u4E3B\u8981\u529F\u80FD","children":[{"level":3,"title":"@Component","slug":"component","link":"#component","children":[]},{"level":3,"title":"Computed\u3001Data\u3001Methods\u8BED\u6CD5","slug":"computed\u3001data\u3001methods\u8BED\u6CD5","link":"#computed\u3001data\u3001methods\u8BED\u6CD5","children":[]}]},{"level":2,"title":"vue-property-decorator \u4E3B\u8981 API \u89E3\u8BFB","slug":"vue-property-decorator-\u4E3B\u8981-api-\u89E3\u8BFB","link":"#vue-property-decorator-\u4E3B\u8981-api-\u89E3\u8BFB","children":[{"level":3,"title":"@Prop","slug":"prop","link":"#prop","children":[]}]},{"level":2,"title":"@Watch","slug":"watch","link":"#watch","children":[]},{"level":2,"title":"@Emit","slug":"emit","link":"#emit","children":[]},{"level":2,"title":"@Model","slug":"model","link":"#model","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/Vue \u5B9E\u6218-vue-property-decorator.md"}'),l={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/Vue \u5B9E\u6218-vue-property-decorator.md"},e=p(`<h1 id="vue-\u5B9E\u6218-vue-property-decorator" tabindex="-1">Vue \u5B9E\u6218-vue-property-decorator <a class="header-anchor" href="#vue-\u5B9E\u6218-vue-property-decorator" aria-hidden="true">#</a></h1><hr><h1 id="vue-\u5B9E\u6218\uFF1Avue-property-decorator" tabindex="-1">Vue \u5B9E\u6218\uFF1Avue-property-decorator <a class="header-anchor" href="#vue-\u5B9E\u6218\uFF1Avue-property-decorator" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u6253\u5F00\u9879\u76EE\uFF0C\u53D1\u73B0\u6700\u5927\u7684\u4E0D\u540C\u662F\u989D\u5916\u5F15\u5165\u4E86\u4E00\u4E2A\u5E93 <code>vue-property-decorator</code>\u3002</p><p>\u7531\u4E8E\u5B83\u7684\u5B58\u5728\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u57FA\u4E8E\u7C7B\u7684\u6CE8\u89E3\u88C5\u9970\u5668\u8FDB\u884C\u5F00\u53D1\uFF0C\u8FD9\u4E2A\u8BED\u6CD5\u5C31\u6709\u70B9\u50CF Angular \u4E86\u3002</p><p>\u4F60\u53EF\u80FD\u542C\u8BF4\u8FC7\u53E6\u5916\u4E00\u4E2A\u5E93 -- <code>vue-class-component</code>\uFF0C\u5B83\u662F Vue \u5B98\u65B9\u63A8\u51FA\u7684\u4E00\u4E2A\u652F\u6301\u4F7F\u7528 class \u65B9\u5F0F\u6765\u5F00\u53D1 vue \u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u5E93\u3002</p><p>\u800C <code>vue-property-decorator</code> \u6B63\u662F\u57FA\u4E8E\u6B64\u800C\u6765\uFF0C\u5B83\u5728\u6B64\u57FA\u7840\u4E0A\u589E\u52A0\u4E86\u88C5\u9970\u5668\u76F8\u5173\u7684\u529F\u80FD\uFF0C\u56E0\u6B64\u5B83\u4E5F\u540C\u65F6\u62E5\u6709 <code>vue-class-component</code> \u7684\u529F\u80FD\u3002</p><h2 id="\u4E3B\u8981\u529F\u80FD" tabindex="-1">\u4E3B\u8981\u529F\u80FD <a class="header-anchor" href="#\u4E3B\u8981\u529F\u80FD" aria-hidden="true">#</a></h2><p>vue-class-component \u529F\u80FD\u5982\u4E0B\uFF1A</p><ul><li>methods \u53EF\u4EE5\u76F4\u63A5\u58F0\u660E\u4E3A\u7C7B\u7684\u6210\u5458\u65B9\u6CD5</li><li>\u8BA1\u7B97\u5C5E\u6027\u53EF\u4EE5\u88AB\u58F0\u660E\u4E3A\u7C7B\u7684\u5C5E\u6027\u8BBF\u95EE\u5668</li><li>\u521D\u59CB\u5316\u7684 data \u53EF\u4EE5\u88AB\u58F0\u660E\u4E3A\u7C7B\u5C5E\u6027</li><li>data\u3001render \u4EE5\u53CA\u6240\u6709\u7684 Vue \u751F\u547D\u5468\u671F\u94A9\u5B50\u53EF\u4EE5\u76F4\u63A5\u4F5C\u4E3A\u7C7B\u7684\u6210\u5458\u65B9\u6CD5</li><li>\u6240\u6709\u5176\u4ED6\u5C5E\u6027\uFF0C\u9700\u8981\u653E\u5728\u88C5\u9970\u5668\u4E2D</li></ul><p>vue-property-decorator \u4E3B\u8981\u63D0\u4F9B\u4E86\u591A\u4E2A\u88C5\u9970\u5668\u548C\u4E00\u4E2A\u51FD\u6570:</p><ul><li>@Prop</li><li>@PropSync</li><li>@Model</li><li>@Watch</li><li>@Provide</li><li>@Inject</li><li>@ProvideReactive</li><li>@InjectReactive</li><li>@Emit</li><li>@Ref</li><li>@Component (\u7531 vue-class-component \u63D0\u4F9B)</li><li>Mixins (\u7531 vue-class-component \u63D0\u4F9B)</li></ul><h2 id="vue-class-component-\u4E3B\u8981\u529F\u80FD" tabindex="-1">vue-class-component \u4E3B\u8981\u529F\u80FD <a class="header-anchor" href="#vue-class-component-\u4E3B\u8981\u529F\u80FD" aria-hidden="true">#</a></h2><h3 id="component" tabindex="-1">@Component <a class="header-anchor" href="#component" aria-hidden="true">#</a></h3><p>Component\u88C5\u9970\u5668\u5B83\u6CE8\u660E\u4E86\u6B64\u7C7B\u4E3A\u4E00\u4E2AVue\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u5373\u4F7F\u6CA1\u6709\u8BBE\u7F6E\u9009\u9879\u4E5F\u4E0D\u80FD\u7701\u7565\u3002\u5982\u679C\u9700\u8981\u5B9A\u4E49\u6BD4\u5982 name\u3001components\u3001filters\u3001directives\u4EE5\u53CA\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u5728Component\u88C5\u9970\u5668\u4E2D\u5B9A\u4E49\u3002</p><p>JavaScript \u4E2D\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import {componentA,componentB} from &#39;@/components&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default{</span></span>
<span class="line"><span style="color:#A6ACCD;">    components:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        componentA,</span></span>
<span class="line"><span style="color:#A6ACCD;">        componentB,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    directives: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        focus: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u6307\u4EE4\u7684\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">            inserted: function (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                el.focus()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 TypeScript\u4E2D\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import {Component,Vue} from &#39;vue-property-decorator&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {componentA,componentB} from &#39;@/components&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> @Component({</span></span>
<span class="line"><span style="color:#A6ACCD;">    components:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        componentA,</span></span>
<span class="line"><span style="color:#A6ACCD;">        componentB,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    directives: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        focus: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u6307\u4EE4\u7684\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">            inserted: function (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                el.focus()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class YourCompoent extends Vue{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="computed\u3001data\u3001methods\u8BED\u6CD5" tabindex="-1">Computed\u3001Data\u3001Methods\u8BED\u6CD5 <a class="header-anchor" href="#computed\u3001data\u3001methods\u8BED\u6CD5" aria-hidden="true">#</a></h3><p>\u8FD9\u91CC\u53D6\u6D88\u4E86\u7EC4\u4EF6\u7684data\u548Cmethods\u5C5E\u6027\uFF0C\u4EE5\u5F80data\u8FD4\u56DE\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u3001methods\u4E2D\u7684\u65B9\u6CD5\u9700\u8981\u76F4\u63A5\u5B9A\u4E49\u5728Class\u4E2D\uFF0C\u5F53\u505A\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@Component</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class HelloDecorator extends Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;">    count: number = 123 // \u7C7B\u5C5E\u6027\u76F8\u5F53\u4E8E\u4EE5\u524D\u7684 data</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    add(): number { // \u7C7B\u65B9\u6CD5\u5C31\u662F\u4EE5\u524D\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.count + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u83B7\u53D6\u8BA1\u7B97\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    get total(): number {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.count + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BBE\u7F6E\u8BA1\u7B97\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    set total(param:number): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.count = param</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="vue-property-decorator-\u4E3B\u8981-api-\u89E3\u8BFB" tabindex="-1">vue-property-decorator \u4E3B\u8981 API \u89E3\u8BFB <a class="header-anchor" href="#vue-property-decorator-\u4E3B\u8981-api-\u89E3\u8BFB" aria-hidden="true">#</a></h2><h3 id="prop" tabindex="-1">@Prop <a class="header-anchor" href="#prop" aria-hidden="true">#</a></h3><p>\u8FD9\u4E2A\u88C5\u9970\u5668\u662F\u5C5E\u6027\u76F8\u5173\u7684\u88C5\u9970\u5668, <code>@Prop(options: (PropOptions | Constructor[] | Constructor) = {})</code>\u3002</p><p>\u5728\u4F7F\u7528Prop\u88C5\u9970\u5668\u5B9A\u4E49\u5C5E\u6027\u65F6\uFF0C\u5982\u679C\u6211\u4EEC\u6253\u5F00\u4E86 tsconfig.js \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 strictpropertyinitialize \u9009\u9879\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u901A\u8FC7\u9644\u52A0\u4E00\u4E2A <code>!</code> \u7ED9\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u8FD8\u8BB0\u5F97\u8FD9\u4E2A\u8BED\u6CD5\u5417\uFF1F\u663E\u5F0F\u590D\u5236\u65AD\u8A00\u3002</p><p>\u6211\u4EEC\u770B\u4E00\u4E0B JavaScript \u7248\u7684\u4E00\u4E2A Vue \u4EE3\u7801\u7247\u6BB5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default{</span></span>
<span class="line"><span style="color:#A6ACCD;">    props:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        propA:String,</span></span>
<span class="line"><span style="color:#A6ACCD;">        propB:[String,Number],</span></span>
<span class="line"><span style="color:#A6ACCD;">        propC:{</span></span>
<span class="line"><span style="color:#A6ACCD;">            type:Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default:()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">                return [&#39;a&#39;,&#39;b&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            required: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            validator:(value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return [</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;a&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;b&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 ].indexOf(value) !== -1</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u7684\u662F TypeScript\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import {Component,Vue,Prop} from vue-property-decorator;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Component</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class YourComponent extends Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @Prop(String)</span></span>
<span class="line"><span style="color:#A6ACCD;">    propA:string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    @Prop([String,Number])</span></span>
<span class="line"><span style="color:#A6ACCD;">    propB:string|number;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    @Prop({</span></span>
<span class="line"><span style="color:#A6ACCD;">     type: String, // type: [String , Number]</span></span>
<span class="line"><span style="color:#A6ACCD;">     default: &#39;default value&#39;, // \u4E00\u822C\u4E3AString\u6216Number</span></span>
<span class="line"><span style="color:#A6ACCD;">      //\u5982\u679C\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\u7684\u8BDD\u3002\u9ED8\u8BA4\u503C\u4ECE\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\u4E2D\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">      // defatult: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //     return [&#39;a&#39;,&#39;b&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      // }</span></span>
<span class="line"><span style="color:#A6ACCD;">     required: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">     validator: (value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return [</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;InProcess&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;Settled&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ].indexOf(value) !== -1</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    propC:string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="watch" tabindex="-1">@Watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u88C5\u9970\u5668\u5176\u5B9E\u5C31\u662F Vue \u4E2D\u7684\u4FA6\u542C\u5668\u3002</p><blockquote><p><code>@Watch(path: string, options: WatchOptions = {})</code></p></blockquote><p>JavaScript \u7248 vue \u4E2D\u5199\u6CD5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    child: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        handler: &#39;onChildChanged&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        immediate: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        deep: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    person: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        handler: &#39;onPersonChanged1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        immediate: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        deep: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        handler: &#39;onPersonChanged2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        immediate: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        deep: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onChildChanged(val, oldVal) {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    onPersonChanged1(val, oldVal) {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    onPersonChanged2(val, oldVal) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 TypeScript \u4E2D\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Vue, Component, Watch } from &#39;vue-property-decorator&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Component</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class YourComponent extends Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Watch(&#39;child&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  onChildChanged(val: string, oldVal: string) {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @Watch(&#39;person&#39;, { immediate: true, deep: true })</span></span>
<span class="line"><span style="color:#A6ACCD;">  onPersonChanged1(val: Person, oldVal: Person) {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @Watch(&#39;person&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  onPersonChanged2(val: Person, oldVal: Person) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528\u4E86\u88C5\u9970\u5668\u540E\u660E\u663E\u4EE3\u7801\u7B80\u6D01\u4E86\u4E0D\u5C11\u3002</p><h2 id="emit" tabindex="-1">@Emit <a class="header-anchor" href="#emit" aria-hidden="true">#</a></h2><p>\u5173\u4E8E Vue \u4E2D\u7684\u4E8B\u4EF6\u7684\u76D1\u542C\u4E0E\u89E6\u53D1,Vue \u63D0\u4F9B\u4E86\u4E24\u4E2A\u51FD\u6570 <code>$emit</code> \u548C <code>$on</code>\u3002\u90A3\u4E48\u5728 <code>vue-property-decorator</code> \u4E2D\u5982\u4F55\u4F7F\u7528\u5462?</p><p>\u8FD9\u5C31\u9700\u8981\u7528\u5230 <code>vue-property-decorator</code> \u63D0\u4F9B\u7684 @Emit \u88C5\u9970\u5668\u3002</p><p>\u5728 JavaScript \u4E2D\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">        mounted(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.$on(&#39;emit-todo&#39;, function(n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(n)</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.emitTodo(&#39;world&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            emitTodo(n){</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(&#39;hello&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.$emit(&#39;emit-todo&#39;, n);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 TypeScript \u4E2D\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">   import {Vue, Component, Emit} from &#39;vue-property-decorator&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @Component({})</span></span>
<span class="line"><span style="color:#A6ACCD;">    export default class Some extends Vue{</span></span>
<span class="line"><span style="color:#A6ACCD;">        mounted(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.$on(&#39;emit-todo&#39;, function(n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(n)</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.emitTodo(&#39;world&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">            @Emit()</span></span>
<span class="line"><span style="color:#A6ACCD;">        emitTodo(n: string){</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;hello&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 <code>@Emit</code> \u88C5\u9970\u5668\u7684\u51FD\u6570\u4F1A\u5728\u8FD0\u884C\u4E4B\u540E\u89E6\u53D1\u7B49\u540C\u4E8E\u5176\u51FD\u6570\u540D(\u9A7C\u5CF0\u5F0F\u4F1A\u8F6C\u4E3A\u6A2A\u6760\u5F0F\u5199\u6CD5)\u7684\u4E8B\u4EF6, \u5E76\u5C06\u5176\u51FD\u6570\u4F20\u9012\u7ED9 <code>$emit</code>. \u5982\u679C\u6211\u4EEC\u60F3\u89E6\u53D1\u7279\u5B9A\u7684\u4E8B\u4EF6\u5462,\u6BD4\u5982\u5728 emitTodo \u4E0B\u89E6\u53D1 reset\u4E8B\u4EF6:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> import {Vue, Component, Emit} from &#39;vue-property-decorator&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @Component({})</span></span>
<span class="line"><span style="color:#A6ACCD;">    export default class &quot;\u7EC4\u4EF6\u540D&quot; extends Vue{</span></span>
<span class="line"><span style="color:#A6ACCD;">        @Emit(&#39;reset&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        emitTodo(n: string){</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u53EA\u9700\u8981\u7ED9\u88C5\u9970\u5668 @Emit \u4F20\u9012\u4E00\u4E2A\u4E8B\u4EF6\u540D\u53C2\u6570 reset,\u8FD9\u6837\u51FD\u6570 emitTodo \u8FD0\u884C\u4E4B\u540E\u5C31\u4F1A\u89E6\u53D1 reset \u4E8B\u4EF6.</p><p>\u5728 Vue \u4E2D\u6211\u4EEC\u662F\u4F7F\u7528 <code>$emit</code> \u89E6\u53D1\u4E8B\u4EF6,\u4F7F\u7528 <code>vue-property-decorator</code> \u65F6,\u53EF\u4EE5\u501F\u52A9 @Emit \u88C5\u9970\u5668\u6765\u5B9E\u73B0\u3002</p><p>@Emit \u4FEE\u9970\u7684\u51FD\u6570\u6240\u63A5\u53D7\u7684\u53C2\u6570\u4F1A\u5728\u8FD0\u884C\u4E4B\u540E\u89E6\u53D1\u4E8B\u4EF6\u7684\u65F6\u5019\u4F20\u9012\u8FC7\u53BB\u3002</p><p>@Emit\u89E6\u53D1\u4E8B\u4EF6\u6709\u4E24\u79CD\u5199\u6CD5:</p><ul><li><code>@Emit()</code> \u4E0D\u4F20\u53C2\u6570,\u90A3\u4E48\u5B83\u89E6\u53D1\u7684\u4E8B\u4EF6\u540D\u5C31\u662F\u5B83\u6240\u4FEE\u9970\u7684\u51FD\u6570\u540D</li><li><code>@Emit(name: string)</code> \u91CC\u9762\u4F20\u9012\u4E00\u4E2A\u5B57\u7B26\u4E32,\u8BE5\u5B57\u7B26\u4E32\u4E3A\u8981\u89E6\u53D1\u7684\u4E8B\u4EF6\u540D</li></ul><h2 id="model" tabindex="-1">@Model <a class="header-anchor" href="#model" aria-hidden="true">#</a></h2><p>Vue \u7EC4\u4EF6\u63D0\u4F9B <code>model: {prop?: string, event?: string}</code> \u8BA9\u6211\u4EEC\u53EF\u4EE5\u5B9A\u5236 prop \u548C event\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A\u7EC4\u4EF6\u4E0A\u7684 v-model \u4F1A\u628A value \u7528\u4F5C prop\u4E14\u628A input\u7528\u4F5C event\uFF0C\u4F46\u662F\u4E00\u4E9B\u8F93\u5165\u7C7B\u578B\u6BD4\u5982\u5355\u9009\u6846\u548C\u590D\u9009\u6846\u6309\u94AE\u53EF\u80FD\u60F3\u4F7F\u7528 value prop\u6765\u8FBE\u5230\u4E0D\u540C\u7684\u76EE\u7684\uFF0C\u4F7F\u7528model\u9009\u9879\u53EF\u4EE5\u56DE\u907F\u8FD9\u4E9B\u60C5\u51B5\u4EA7\u751F\u7684\u51B2\u7A81\u3002</p><p>\u6BD4\u5982\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Vue.component(&#39;my-checkbox&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  model: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    prop: &#39;checked&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    event: &#39;change&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // this allows using the \`value\` prop for a different purpose</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // use \`checked\` as the prop which take the place of \`value\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    checked: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: Number,</span></span>
<span class="line"><span style="color:#A6ACCD;">      default: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;my-checkbox v-model=&quot;foo&quot; value=&quot;some value&quot;&gt;&lt;/my-checkbox&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u6A21\u677F\u76F8\u5F53\u4E8E\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;my-checkbox</span></span>
<span class="line"><span style="color:#A6ACCD;">  :checked=&quot;foo&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @change=&quot;val =&gt; { foo = val }&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  value=&quot;some value&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/my-checkbox&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528 vue-property-decorator \u63D0\u4F9B\u7684 @Model \u6539\u9020\u4E0A\u9762\u7684\u4F8B\u5B50:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Vue, Component, Model} from &#39;vue-property-decorator&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">@Component</span></span>
<span class="line"><span style="color:#A6ACCD;">export class myCheck extends Vue{</span></span>
<span class="line"><span style="color:#A6ACCD;">   @Model (&#39;change&#39;, {type: Boolean})  checked!: boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>@Model()</code> \u63A5\u6536\u4E24\u4E2A\u53C2\u6570, \u7B2C\u4E00\u4E2A\u662F event \u503C, \u7B2C\u4E8C\u4E2A\u662Fprop \u7684\u7C7B\u578B\u8BF4\u660E\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u901A\u8FC7\u672C\u8282\u5B66\u4E60\u4E86 TypeScript \u7248\u7684 Vue Class \u5316\u7684\u8BED\u6CD5\uFF0C\u8981\u591A\u5904\u7528\u5230\u88C5\u9970\u5668\u548C Class\uFF0C\u8FD9\u8DDF Vue \u539F\u672C\u7684\u8BED\u6CD5\u60F3\u53BB\u5F88\u8FDC\uFF0C\u4F46\u662F\u5176\u672C\u8D28\u662F\u4E00\u6837\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FDB\u5165\u5B9E\u6218\u6765\u5FEB\u901F\u719F\u6089\u8FD9\u4E9B\u8BED\u6CD5\u3002</p>`,66),o=[e];function c(t,r,i,C,A,d){return a(),n("div",null,o)}const D=s(l,[["render",c]]);export{u as __pageData,D as default};
