import{_ as s,c as n,o as a,d as l}from"./app.c4f45da1.js";const y=JSON.parse('{"title":"Vue \u5B9E\u6218-\u7EC4\u4EF6 UI \u7F16\u5199","description":"","frontmatter":{},"headers":[{"level":2,"title":"Header \u7EC4\u4EF6\u7F16\u5199","slug":"header-\u7EC4\u4EF6\u7F16\u5199","link":"#header-\u7EC4\u4EF6\u7F16\u5199","children":[]},{"level":2,"title":"\u56FE\u6807\u7EC4\u4EF6\u7F16\u5199","slug":"\u56FE\u6807\u7EC4\u4EF6\u7F16\u5199","link":"#\u56FE\u6807\u7EC4\u4EF6\u7F16\u5199","children":[]},{"level":2,"title":"\u7F16\u5199 Create \u9875\u9762","slug":"\u7F16\u5199-create-\u9875\u9762","link":"#\u7F16\u5199-create-\u9875\u9762","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/Vue \u5B9E\u6218-\u7EC4\u4EF6 UI \u7F16\u5199.md"}'),p={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/Vue \u5B9E\u6218-\u7EC4\u4EF6 UI \u7F16\u5199.md"},e=l(`<h1 id="vue-\u5B9E\u6218-\u7EC4\u4EF6-ui-\u7F16\u5199" tabindex="-1">Vue \u5B9E\u6218-\u7EC4\u4EF6 UI \u7F16\u5199 <a class="header-anchor" href="#vue-\u5B9E\u6218-\u7EC4\u4EF6-ui-\u7F16\u5199" aria-hidden="true">#</a></h1><hr><h1 id="vue-\u5B9E\u6218\uFF1A\u7EC4\u4EF6-ui-\u7F16\u5199" tabindex="-1">Vue \u5B9E\u6218\uFF1A\u7EC4\u4EF6 UI \u7F16\u5199 <a class="header-anchor" href="#vue-\u5B9E\u6218\uFF1A\u7EC4\u4EF6-ui-\u7F16\u5199" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u672C\u8282\u5F00\u59CB\u6B63\u5F0F\u7F16\u5199\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u5C3D\u91CF\u5728\u7EC4\u4EF6\u7684\u7F16\u5199\u8FC7\u7A0B\u4E2D\u4E32\u8054\u4E0A\u6211\u4EEC\u7684\u77E5\u8BC6\u70B9\uFF0C\u56E0\u6B64\uFF0C\u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u7684\u7528\u6CD5\u5E76\u4E0D\u662F\u6700\u4F18\u89E3\uFF0C\u800C\u662F\u4E3A\u4E86\u8981\u628A\u4E00\u4E9B\u91CD\u8981\u7684 API \u7528\u6CD5\u5E26\u5230\u5B9E\u6218\u9879\u76EE\u4E2D\u53BB\u3002</p><p>\u6CE8\u610F\uFF0C\u6211\u4EEC\u7684<a href="https://github.com/xiaomuzhu/vue-ts-todo" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a>\u5DF2\u7ECF\u5728 github \u4E0A\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u7ED3\u5408\u6E90\u4EE3\u7801\u9605\u8BFB\u3002</p><p>\u6211\u5DF2\u7ECF\u628A\u5BF9\u5E94\u7684\u90E8\u5206\u6253\u4E0A\u6807\u7B7E\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/13/16dc18798dfe0296~tplv-t2oaga2asx-image.image" alt="2019-10-13-03-34-01"></p><ul><li>Header \u7EC4\u4EF6\u7F16\u5199\u5BF9\u5E94 Tag v1.0</li><li>Create \u9875\u9762\u7F16\u5199\u5BF9\u5E94 Tag v1.1</li><li>\u5269\u4F59\u903B\u8F91\u7F16\u5199\u5BF9\u5E94 Tag v1.2</li></ul><p>\u8FD9\u4E2A\u5E94\u7528\u7684\u6574\u4F53\u903B\u8F91\u6548\u679C\u6F14\u793A\u5982\u4E0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/13/16dc18798e637cf0~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="header-\u7EC4\u4EF6\u7F16\u5199" tabindex="-1">Header \u7EC4\u4EF6\u7F16\u5199 <a class="header-anchor" href="#header-\u7EC4\u4EF6\u7F16\u5199" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728 <code>src/components/</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>Header.vue</code> \u5355\u6587\u4EF6\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u7F16\u5199\u4E00\u4E2A <code>Header</code> \u7EC4\u4EF6\u3002</p><blockquote><p>\u975E\u5E38\u5EFA\u8BAE\u4F60\u8FDB\u5165 github \u7684\u4EE3\u7801<a href="https://github.com/xiaomuzhu/vue-ts-todo/blob/v1.0/src/components/Header.vue" target="_blank" rel="noreferrer">\u4ED3\u5E93</a>\u7ED3\u5408\u672C\u8282\u5B66\u4E60</p></blockquote><p>\u6211\u4EEC\u7684 <code>Header</code> \u7EC4\u4EF6\u5176\u5B9E\u662F\u4E00\u4E2A\u5934\u90E8\u7EC4\u4EF6\uFF0C\u4F1A\u663E\u793A\u5F53\u524D\u9875\u9762\u7684\u6807\u9898\u548C\u5BFC\u822A\u3001\u64CD\u4F5C\u6309\u94AE\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/13/16dc18798e932822~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8FD9\u91CC\u6211\u4EEC\u60F3\u5C55\u793A\u4E24\u4E2A\u77E5\u8BC6\u70B9\uFF1A</p><ul><li>\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528</li><li>\u65B9\u6CD5\u7684\u4F7F\u7528</li></ul><p>\u6211\u4EEC\u8BA1\u5212\u53EA\u7528\u4E24\u4E2A\u8DEF\u7531\uFF0C\u4E00\u4E2A home \u8DEF\u7531\u5B58\u653E\u6211\u4EEC\u7684\u5404\u79CD todo \u5217\u8868\uFF0C\u53E6\u4E00\u4E2A create \u8DEF\u7531\u7528\u4E8E\u65B0\u5EFA todo \u9879\u76EE\u3002</p><p>\u800C\u8FD9\u4E24\u4E2A\u9875\u9762 Header \u7EC4\u4EF6\u7684 Icon \u6309\u94AE\u4E0D\u4EC5\u6837\u5F0F\u4E0D\u540C\uFF0C\u4F4D\u7F6E\u4E0D\u540C\uFF0C\u4E8B\u4EF6\u4E5F\u4E0D\u540C\uFF0C\u800C\u9875\u9762\u6807\u9898\u4E5F\u4E0D\u4E00\u6837\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u6839\u636E\u4E0D\u540C\u7684\u8DEF\u7531\u6765\u751F\u6210\u4E0D\u540C\u7684 Header\u3002</p><p>\u6240\u4EE5\u5E94\u8BE5\u5982\u4F55\u8BA1\u7B97\u51FA\u4E0D\u540C\u7684\u60C5\u51B5\uFF0C\u8FD9\u4E2A\u65F6\u5019\u7528\u8BA1\u7B97\u5C5E\u6027\u6BD4\u8F83\u9002\u5408\u3002</p><p>TypeScript \u4E2D\u7684\u8BA1\u7B97\u5C5E\u6027\u662F\u7528\u7C7B\u7684\u5B58\u53D6\u5668\u6765\u5B9E\u73B0\u7684\uFF0C\u6BD4\u5982\u6211\u4EEC\u7684\u65B9\u6CD5\u4E3A <code>pageInfoComputed</code>\uFF0C\u9700\u8981\u5728\u5176\u524D\u9762\u52A0\u4E0A <code>get</code>\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@Component({</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Icon.name]: Icon</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class Header extends Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private get pageInfoComputed() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const currentRouteName = this.$route.name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch (currentRouteName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      case &quot;home&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">          icon: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &quot;plus&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            arrow: &quot;right&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          title: &quot;\u6211\u7684\u5F85\u529E&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">      case &quot;create&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">          icon: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &quot;arrow-left&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            arrow: &quot;left&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          title: &quot;\u65B0\u5EFA\u4EFB\u52A1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      default:</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u4F55\u6211\u4EEC\u60F3\u8981\u58F0\u660E\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u5206\u522B\u5BF9\u5E94\u4E24\u4E2A\u4E0D\u540C\u7684 Icon \u5BF9\u5E94\u7684\u884C\u4E3A\uFF0C\u4E00\u4E2A\u662F\u8DF3\u8F6C\u5230 create \u8DEF\u7531\uFF0C\u4E00\u4E2A\u662F\u8DEF\u7531\u540E\u9000\u3002</p><p>\u5728 TypeScript \u6211\u4EEC\u76F4\u63A5\u4F7F\u7528\u7C7B\u65B9\u6CD5\u5373\u53EF\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u52A0\u4E0A\u8BBF\u95EE\u4FEE\u9970\u7B26\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  private leftHandle() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$router.back();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private rightHandle() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$router.push({ path: &quot;/create&quot; });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u968F\u540E\u6211\u4EEC\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  &lt;header&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;van-icon</span></span>
<span class="line"><span style="color:#A6ACCD;">        v-if=&quot;pageInfoComputed.icon.arrow === &#39;left&#39;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :name=&quot;pageInfoComputed.icon.name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        size=&quot;1.5rem&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @click=&quot;leftHandle&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h3&gt;{{ pageInfoComputed.title }}&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;van-icon</span></span>
<span class="line"><span style="color:#A6ACCD;">        v-if=&quot;pageInfoComputed.icon.arrow === &#39;right&#39;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :name=&quot;pageInfoComputed.icon.name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        size=&quot;1.5rem&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @click=&quot;rightHandle&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/header&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u7684\u6548\u679C\u5C31\u662F\u4E0A\u4E2A gif \u7684\u6837\u5B50\u3002</p><h2 id="\u56FE\u6807\u7EC4\u4EF6\u7F16\u5199" tabindex="-1">\u56FE\u6807\u7EC4\u4EF6\u7F16\u5199 <a class="header-anchor" href="#\u56FE\u6807\u7EC4\u4EF6\u7F16\u5199" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5E0C\u671B\u7ED9\u6BCF\u4E00\u4E2A todo \u4EFB\u52A1\u90FD\u914D\u4E0A\u4E00\u4E2A\u56FE\u6807\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/13/16dc18798eb0e804~tplv-t2oaga2asx-image.image" alt="2019-10-12-18-40-41"></p><p>\u8FD9\u4E2A\u7EC4\u4EF6\u5176\u5B9E\u6709\u4E24\u4E2A\u4E3B\u8981\u90E8\u5206\u7EC4\u6210\u7684\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li>\u5706\u5708\uFF1A\u5305\u62EC\u5916\u56F4\u7684 border \u548C\u80CC\u666F\u8272</li><li>icon\uFF1A\u4E2D\u95F4\u7684\u56FE\u6848</li></ul><p>\u6211\u4EEC\u5148\u7F16\u5199\u5706\u5708\u90E8\u5206\u3002</p><blockquote><p>\u5EFA\u8BAE\u79FB\u6B65\u672C\u7EC4\u4EF6<a href="https://github.com/xiaomuzhu/vue-ts-todo/blob/v1.1/src/components/Circle.vue" target="_blank" rel="noreferrer">\u4ED3\u5E93\u5730\u5740</a></p></blockquote><p>\u6211\u4EEC\u5728 <code>src/components/</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>Circle.vue</code> \u5355\u6587\u4EF6\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u7F16\u5199\u4E00\u4E2A <code>Circle</code> \u7EC4\u4EF6\u3002</p><p>\u7531\u4E8E\u6211\u4EEC\u4E4B\u540E\u8FD8\u6709\u4E00\u4E2A\u9700\u6C42\uFF0C\u5C31\u662F\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u80CC\u666F\u989C\u8272\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u65B9\u6CD5\u6765\u6839\u636E\u5916\u90E8\u5C5E\u6027\u7684\u53D8\u5316\u6765\u66F4\u6539\u81EA\u5DF1\u7684\u80CC\u666F\u989C\u8272\u3002</p><p>\u6211\u4EEC\u8FD9\u91CC\u7528\u4E86 @Watch \u4FA6\u542C\u5668\u88C5\u9970\u5668\uFF0C\u5176\u5B9E\u8FD9\u91CC\u7528\u5176\u4ED6\u65B9\u6CD5\u4E5F\u53EF\u4EE5\uFF0C\u4F46\u662F\u6211\u4EEC\u4E3A\u4E86\u5C3D\u91CF\u628A\u4E4B\u524D\u7684 API \u90FD\u5229\u7528\u4E0A\uFF0C\u5728\u8FD9\u91CC\u662F\u6559\u5B66\u76EE\u7684\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Component, Vue, Prop, Watch } from &quot;vue-property-decorator&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Component({})</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class Circles extends Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Prop() private radius!: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Prop() private activeColor!: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  private styleObj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background: this.activeColor || &quot;#ffe78d&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: this.radius || &quot;3rem&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: this.radius || &quot;3rem&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u76D1\u542C\u80CC\u666F\u989C\u8272\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Watch(&quot;activeColor&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  private changeColor(val: string, old: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.styleObj.background = val;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u6A21\u677F\u91CC\u6211\u4EEC\u7559\u4E86\u4E00\u4E2A\u63D2\u69FD\uFF0C\u8FD9\u4E2A\u63D2\u69FD\u5C31\u662F\u7559\u7ED9\u4E4B\u540E\u7684 Icon \u4F7F\u7528\u7684\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;circle&quot; :style=&quot;styleObj&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot name=&quot;icon&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u63A5\u7740\u7F16\u5199 Icon \u90E8\u5206\u3002</p><p>\u56FE\u6807\u6211\u4EEC\u53EF\u4EE5\u53BB<a href="https://www.iconfont.cn/" target="_blank" rel="noreferrer">\u963F\u91CC\u5DF4\u5DF4\u77E2\u91CF\u56FE\u6807\u5E93</a>\u5BFB\u627E\u3002</p><p>\u6211\u5DF2\u7ECF\u628A\u641C\u96C6\u597D\u7684\u56FE\u6807\u6253\u5305\u653E\u5728\u4E86<code>src/assets/iconfont.js</code>\u4E2D\uFF0C\u53EF\u4EE5\u79FB\u6B65<a href="https://github.com/xiaomuzhu/vue-ts-todo/blob/v1.1/src/assets/iconfont.js" target="_blank" rel="noreferrer">\u4ED3\u5E93</a>\u3002</p><p>\u7136\u540E\u5C06\u8FD9\u4E9B\u7EC4\u4EF6\u5728 <code>src/main.ts</code> \u4E0B\u5F15\u5165:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;@/assets/iconfont.js&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F46\u662F\u8FD9\u4E9B\u56FE\u6807\u8981\u60F3\u4F7F\u7528\u4F9D\u7136\u9700\u8981\u6211\u4EEC\u989D\u5916\u7F16\u5199\u4E00\u4E9B\u4EE3\u7801\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7528\u73B0\u6210\u7684\u5E93\u6765\u65B9\u4FBF\u6211\u4EEC\u7684\u4F7F\u7528\u3002</p><p>\u9996\u5148\u4E0B\u8F7D\u5E2E\u52A9\u6211\u4EEC\u4F7F\u7528\u56FE\u6807\u7684\u5E93\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -S vue-icon-font-pro</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7531\u4E8E\u6B64\u5E93\u6CA1\u6709\u76F8\u5173\u7684 <code>d.ts</code> \u6587\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 <code>src/shims-vue.d.ts</code> \u4E2D\u58F0\u660E\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">declare module &quot;vue-icon-font-pro&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u4F55\u5728 <code>src/main.ts</code> \u4E0B\u5F15\u5165\u6B64\u5E93\uFF0C\u7136\u540E\u6CE8\u518C\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import VueIconFont from &quot;vue-icon-font-pro&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.use(VueIconFont);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u56FE\u6807\u4E86\uFF0C\u7A76\u7ADF\u5E94\u8BE5\u5982\u4F55\u7ED3\u5408\u4E24\u90E8\u5206\uFF1F\u6211\u4EEC\u5F80\u4E0B\u770B\u3002</p><h2 id="\u7F16\u5199-create-\u9875\u9762" tabindex="-1">\u7F16\u5199 Create \u9875\u9762 <a class="header-anchor" href="#\u7F16\u5199-create-\u9875\u9762" aria-hidden="true">#</a></h2><p>\u6211\u4EEC Create \u9875\u9762\u7684\u5B9E\u73B0\u6548\u679C\u662F\u8FD9\u6837\u7684\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/13/16dc18798ef1be8c~tplv-t2oaga2asx-image.image" alt="2019-10-12-19-09-10"></p><p>\u6211\u4EEC\u53EF\u4EE5\u81EA\u7531\u5730\u9009\u62E9\u4E0B\u9762\u7684\u80CC\u666F\u989C\u8272\u548C\u56FE\u6807\u6765\u7EC4\u6210\u4E00\u4E2A todo \u56FE\u6807\uFF0C\u7136\u540E\u8FD8\u53EF\u4EE5\u7ED9\u8FD9\u4E2A todo \u8D77\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0\u3002</p><p>\u6B64\u9875\u9762\u76F8\u5173\u4EE3\u7801\u8BF7\u79FB\u6B65<a href="https://github.com/xiaomuzhu/vue-ts-todo/blob/v1.1/src/views/Create.vue" target="_blank" rel="noreferrer">Create.vue</a>\u3002</p><p>\u8FD9\u4E48\u591A\u7684\u56FE\u6807\u548C\u989C\u8272\u6211\u4EEC\u5206\u522B\u628A\u5B83\u653E\u5728\u4E86\u4E24\u4E2A\u6570\u7EC4\u91CC\uFF0C\u6211\u4EEC\u65B0\u5EFA <code>src/config.ts</code>\uFF0C\u7136\u540E\u5C06\u6570\u7EC4\u653E\u5728<a href="https://github.com/xiaomuzhu/vue-ts-todo/blob/v1.1/src/config.ts" target="_blank" rel="noreferrer">\u5176\u4E2D</a>\u3002</p><p>\u518D\u56DE\u5230 <code>src/views/Create.vue</code> \u4E0B\u9762\uFF0C\u6211\u4EEC\u7684\u9875\u9762\u5206\u4E3A\u56DB\u90E8\u5206\uFF1A</p><ul><li>todo\u56FE\u6807\uFF1A\u8FD9\u4E2A\u56FE\u6807\u4F1A\u968F\u7740\u6211\u4EEC\u9009\u62E9\u4E0B\u65B9\u7684\u80CC\u666F\u989C\u8272\u548C\u56FE\u6807\u800C\u53D8\u5316</li><li>\u4EFB\u52A1\u540D\u79F0\uFF1A\u8FD9\u662F\u4E2A\u8F93\u5165\u680F\uFF0C\u7528\u4E8E\u521B\u5EFA\u4EFB\u52A1\u540D\u79F0</li><li>\u56FE\u6807\u96C6\u5408</li><li>\u989C\u8272\u96C6\u5408</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Component, Vue } from &quot;vue-property-decorator&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { SwipeCell, Cell, CellGroup, Field } from &quot;vant&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Circles from &quot;../components/Circle.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { config } from &quot;../config&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Component({</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [SwipeCell.name]: SwipeCell,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Cell.name]: Cell,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [CellGroup.name]: CellGroup,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Field.name]: Field,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Circles</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class Create extends Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;">  private iconSetting: string[] = config.iconSetting;</span></span>
<span class="line"><span style="color:#A6ACCD;">  private colorSetting: string[] = config.colorSetting;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7ED3\u5408\u6A21\u677F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;iconSetting&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- \u5F53\u524D\u56FE\u8868 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;section class=&quot;icon&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Circles class=&quot;cir&quot; radius=&quot;3.5rem&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;icon name=&quot;kite&quot; slot=&quot;icon&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Circles&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- \u4EFB\u52A1\u540D\u79F0 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;van-cell-group&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;van-field input-align=&quot;center&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/van-cell-group&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- \u5907\u9009\u56FE\u6807 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;section class=&quot;alternative&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">        class=&quot;alternativeIcon&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        v-for=&quot;(item, index) in iconSetting&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;icon :name=&quot;item&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- \u56FE\u6807\u80CC\u666F --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;section class=&quot;colorSetting&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">        class=&quot;background&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        v-for=&quot;(item, index) in colorSetting&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div v-bind:style=&quot;{ backgroundColor: item }&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u76EE\u524D\u6211\u4EEC\u7684\u6548\u679C\u5DF2\u7ECF\u8DDF\u56FE\u4E2D\u7684\u76F8\u5DEE\u65E0\u51E0\u4E86\uFF0C\u5C31\u662F\u6709\u4E00\u70B9\uFF0C\u5B83\u6CA1\u6709\u903B\u8F91\uFF0C\u53EA\u6709UI\uFF0C\u6211\u4EEC\u5148\u6682\u4E14\u653E\u4E00\u653E\u903B\u8F91\u8FD9\u90E8\u5206\uFF0C\u4E0B\u4E00\u7AE0\u8282\u6211\u4EEC\u4F1A\u5177\u4F53\u5B9E\u73B0\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5DF2\u7ECF\u57FA\u672C\u5B9E\u73B0\u4E86\u8FD9\u4E2A todo \u5E94\u7528\u7684 UI \u90E8\u5206\uFF0C\u4E5F\u57FA\u672C\u4E0A\u628A @Component\u3001@Watch\u3001@Prop \u7B49\u88C5\u9970\u5668\u8BED\u6CD5\u4E32\u8054\u4E86\u4E00\u904D\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u7F16\u5199\u903B\u8F91\u90E8\u5206\uFF0C\u8FD9\u5C31\u9700\u8981\u7528\u5230 Vuex \u4E86\u3002</p>`,68),o=[e];function t(c,r,i,C,A,u){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{y as __pageData,g as default};
