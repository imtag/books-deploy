import{_ as s,c as n,o as a,d as p}from"./app.e0e4ea3a.js";const D=JSON.parse('{"title":"TypeScript \u4E0E React \u5B9E\u6218(\u7EC4\u4EF6\u7BC7\u4E0B)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5229\u7528\u9AD8\u7EA7\u7C7B\u578B\u89E3\u51B3\u9ED8\u8BA4\u5C5E\u6027\u62A5\u9519","slug":"\u5229\u7528\u9AD8\u7EA7\u7C7B\u578B\u89E3\u51B3\u9ED8\u8BA4\u5C5E\u6027\u62A5\u9519","link":"#\u5229\u7528\u9AD8\u7EA7\u7C7B\u578B\u89E3\u51B3\u9ED8\u8BA4\u5C5E\u6027\u62A5\u9519","children":[]},{"level":2,"title":"\u9AD8\u9636\u7EC4\u4EF6","slug":"\u9AD8\u9636\u7EC4\u4EF6","link":"#\u9AD8\u9636\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/TypeScript \u4E0E React \u5B9E\u6218(\u7EC4\u4EF6\u7BC7\u4E0B).md"}'),l={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/TypeScript \u4E0E React \u5B9E\u6218(\u7EC4\u4EF6\u7BC7\u4E0B).md"},e=p(`<h1 id="typescript-\u4E0E-react-\u5B9E\u6218-\u7EC4\u4EF6\u7BC7\u4E0B" tabindex="-1">TypeScript \u4E0E React \u5B9E\u6218(\u7EC4\u4EF6\u7BC7\u4E0B) <a class="header-anchor" href="#typescript-\u4E0E-react-\u5B9E\u6218-\u7EC4\u4EF6\u7BC7\u4E0B" aria-hidden="true">#</a></h1><hr><h1 id="typescript-\u4E0E-react-\u5B9E\u6218-\u7EC4\u4EF6\u7BC7\u4E0B-1" tabindex="-1">TypeScript \u4E0E React \u5B9E\u6218(\u7EC4\u4EF6\u7BC7\u4E0B) <a class="header-anchor" href="#typescript-\u4E0E-react-\u5B9E\u6218-\u7EC4\u4EF6\u7BC7\u4E0B-1" aria-hidden="true">#</a></h1><p>\u4E0A\u4E00\u8282\u6211\u4EEC\u8BB2\u5230\u7528 class \u4E00\u5904\u7F16\u5199\u80FD\u4E24\u5904\u590D\u7528\u7684\u65B9\u5F0F\u867D\u7136\u975E\u5E38\u5B9E\u7528\uFF0C\u4F46\u662F\u6211\u4EEC\u4E0D\u5F97\u4E0D\u7528\u4E00\u4E9B Hack \u624B\u6BB5\u6765\u907F\u514D\u540E\u7EED\u7684\u62A5\u9519\uFF0C\u6709\u6CA1\u6709\u66F4\u4F18\u96C5\u3001\u66F4\u4E25\u8C28\u7684\u89E3\u51B3\u65B9\u6848\uFF1F</p><blockquote><p>\u867D\u7136 class \u7684\u5199\u6CD5\u9700\u8981\u4E00\u4E9B Hack \u624B\u6BB5\uFF0C\u4F46\u662F\u7B14\u8005\u5F88\u591A\u65F6\u5019\u8FD8\u662F\u7528\u4E86 class\uFF0C\u56E0\u4E3A\u786E\u5B9E\u5F88\u731B\u7CD9\u5FEB\u3002</p></blockquote><blockquote><p>\u672C\u8282\u4F1A\u6D89\u53CA\u4E00\u4E9B\u8D85\u7EB2\u7684\u5DE5\u5177\u7C7B\u578B\u8FD0\u7528\uFF0C\u6BD4\u5982Pick\u3001Omit\uFF0C\u53EF\u4EE5\u7ED3\u5408\u7B2C25\u8282\u9605\u8BFB\u3002</p></blockquote><h2 id="\u5229\u7528\u9AD8\u7EA7\u7C7B\u578B\u89E3\u51B3\u9ED8\u8BA4\u5C5E\u6027\u62A5\u9519" tabindex="-1">\u5229\u7528\u9AD8\u7EA7\u7C7B\u578B\u89E3\u51B3\u9ED8\u8BA4\u5C5E\u6027\u62A5\u9519 <a class="header-anchor" href="#\u5229\u7528\u9AD8\u7EA7\u7C7B\u578B\u89E3\u51B3\u9ED8\u8BA4\u5C5E\u6027\u62A5\u9519" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u73B0\u5728\u9700\u8981\u5148\u58F0\u660E<code>defaultProps</code>\u7684\u503C:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const todoInputDefaultProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    inputSetting: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        maxlength: 20,</span></span>
<span class="line"><span style="color:#A6ACCD;">        placeholder: &#39;\u8BF7\u8F93\u5165todo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u7740\u5B9A\u4E49\u7EC4\u4EF6\u7684<code>props</code>\u7C7B\u578B</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type Props = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleSubmit: (value: string) =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: React.ReactNode</span></span>
<span class="line"><span style="color:#A6ACCD;">} &amp; Partial&lt;typeof todoInputDefaultProps&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>Partial</code>\u7684\u4F5C\u7528\u5C31\u662F\u5C06\u7C7B\u578B\u7684\u5C5E\u6027\u5168\u90E8\u53D8\u6210\u53EF\u9009\u7684,\u4E5F\u5C31\u662F\u4E0B\u9762\u8FD9\u79CD\u60C5\u51B5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    inputSetting?: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        maxlength: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">        placeholder: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } | undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u90A3\u4E48\u73B0\u5728\u6211\u4EEC\u4F7F\u7528Props\u662F\u4E0D\u662F\u5C31\u6CA1\u6709\u95EE\u9898\u4E86\uFF1F</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export class TodoInput extends React.Component&lt;Props, State&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public static defaultProps = todoInputDefaultProps</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const { itemText } = this.state</span></span>
<span class="line"><span style="color:#A6ACCD;">        const { updateValue, handleSubmit } = this</span></span>
<span class="line"><span style="color:#A6ACCD;">        const { inputSetting } = this.props</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;form onSubmit={handleSubmit} &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;input maxLength={inputSetting.maxlength} type=&#39;text&#39; value={itemText} onChange={updateValue} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button type=&#39;submit&#39; &gt;\u6DFB\u52A0todo&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u770B\u5230\u4F9D\u65E7\u4F1A\u62A5\u9519\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb13b3680b13a~tplv-t2oaga2asx-image.image" alt="2019-07-05-11-56-45"></p><p>\u5176\u5B9E\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C06 <code>defaultProps</code> \u4E2D\u5DF2\u7ECF\u58F0\u660E\u503C\u7684\u5C5E\u6027\u4ECE\u300E\u53EF\u9009\u7C7B\u578B\u300F\u8F6C\u5316\u4E3A\u300E\u975E\u53EF\u9009\u7C7B\u578B\u300F\u3002</p><p>\u6211\u4EEC\u5148\u770B\u8FD9\u4E48\u4E00\u4E2A\u51FD\u6570:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const createPropsGetter = &lt;DP extends object&gt;(defaultProps: DP) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;P extends Partial&lt;DP&gt;&gt;(props: P) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type PropsExcludingDefaults = Omit&lt;P, keyof DP&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        type RecomposedProps = DP &amp; PropsExcludingDefaults</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return (props as any) as RecomposedProps</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A <code>defaultProps</code> \u5BF9\u8C61\uFF0C<code>&lt;DP extends object&gt;</code> \u8FD9\u91CC\u662F\u6CDB\u578B\u7EA6\u675F\uFF0C\u4EE3\u8868 <code>DP</code> \u8FD9\u4E2A\u6CDB\u578B\u662F\u4E2A\u5BF9\u8C61\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u533F\u540D\u51FD\u6570\u3002</p><p>\u518D\u770B\u8FD9\u4E2A\u533F\u540D\u51FD\u6570\uFF0C\u6B64\u51FD\u6570\u4E5F\u6709\u4E00\u4E2A\u6CDB\u578B <code>P</code>,\u8FD9\u4E2A\u6CDB\u578B <code>P</code> \u4E5F\u88AB\u7EA6\u675F\u8FC7,\u5373 <code>&lt;P extends Partial&lt;DP&gt;&gt;</code>\uFF0C\u610F\u601D\u5C31\u662F\u8FD9\u4E2A\u6CDB\u578B\u5FC5\u987B\u5305\u542B\u53EF\u9009\u7684 <code>DP</code> \u7C7B\u578B\uFF08\u5B9E\u9645\u4E0A\u8FD9\u4E2A\u6CDB\u578BP\u5C31\u662F\u7EC4\u4EF6\u4F20\u5165\u7684 Props \u7C7B\u578B\uFF09\u3002</p><p>\u63A5\u7740\u6211\u4EEC\u770B\u7C7B\u578B\u522B\u540D <code>PropsExcludingDefaults</code>\uFF0C\u770B\u8FD9\u4E2A\u540D\u5B57\u4F60\u4E5F\u80FD\u731C\u51FA\u6765\uFF0C\u5B83\u7684\u4F5C\u7528\u5176\u5B9E\u662F\u5254\u9664 <code>Props</code> \u7C7B\u578B\u4E2D\u5173\u4E8E <code>defaultProps</code> \u7684\u90E8\u5206\uFF0C\u5F88\u591A\u4EBA\u53EF\u80FD\u4E0D\u6E05\u695A <code>Omit</code> \u8FD9\u4E2A\u9AD8\u7EA7\u7C7B\u578B\u7684\u7528\u6CD5\uFF0C\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type Omit&lt;P, keyof DP&gt; = Pick&lt;P, Exclude&lt;keyof P, keyof DP&gt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u800C\u7C7B\u578B\u522B\u540D <code>RecomposedProps</code> \u5219\u662F\u5C06\u9ED8\u8BA4\u5C5E\u6027\u7684\u7C7B\u578B <code>DP</code> \u4E0E\u5254\u9664\u4E86\u9ED8\u8BA4\u5C5E\u6027\u7684 <code>Props</code> \u7C7B\u578B\u7ED3\u5408\u5728\u4E00\u8D77\u3002</p><p>\u5176\u5B9E\u8FD9\u4E2A\u51FD\u6570\u53EA\u505A\u4E86\u4E00\u4EF6\u4E8B\uFF0C\u628A\u53EF\u9009\u7684 <code>defaultProps</code> \u7684\u7C7B\u578B\u5254\u9664\u540E\uFF0C\u52A0\u5165\u5FC5\u9009\u7684 <code>defaultProps</code> \u7684\u7C7B\u578B\uFF0C\u4ECE\u800C\u5F62\u6210\u4E00\u4E2A\u65B0\u7684 <code>Props</code> \u7C7B\u578B\uFF0C\u8FD9\u4E2A <code>Props</code> \u7C7B\u578B\u4E2D\u7684 <code>defaultProps</code> \u76F8\u5173\u5C5E\u6027\u5C31\u53D8\u6210\u4E86\u5FC5\u9009\u7684\u3002</p><blockquote><p>\u8FD9\u4E2A\u51FD\u6570\u53EF\u80FD\u5BF9\u4E8E\u521D\u5B66\u8005\u7406\u89E3\u4E0A\u6709\u4E00\u5B9A\u96BE\u5EA6\uFF0C\u4F46\u662F\u8FD9\u4E9B\u5185\u5BB9\u7684\u786E\u6211\u4EEC\u5DF2\u7ECF\u5728\u9AD8\u7EA7\u7C7B\u578B\u90A3\u4E00\u4E2A\u7AE0\u8282\u90FD\u89C1\u8FC7\u4E86\uFF0C\u8FD9\u7B97\u662F\u4E00\u6B21\u7EFC\u5408\u5E94\u7528\u3002</p></blockquote><p>\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import * as React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface State {</span></span>
<span class="line"><span style="color:#A6ACCD;">    itemText: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Props = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleSubmit: (value: string) =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: React.ReactNode</span></span>
<span class="line"><span style="color:#A6ACCD;">} &amp; Partial&lt;typeof todoInputDefaultProps&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const todoInputDefaultProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    inputSetting: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        maxlength: 20,</span></span>
<span class="line"><span style="color:#A6ACCD;">        placeholder: &#39;\u8BF7\u8F93\u5165todo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const createPropsGetter = &lt;DP extends object&gt;(defaultProps: DP) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;P extends Partial&lt;DP&gt;&gt;(props: P) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type PropsExcludingDefaults = Omit&lt;P, keyof DP&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        type RecomposedProps = DP &amp; PropsExcludingDefaults</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return (props as any) as RecomposedProps</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const getProps = createPropsGetter(todoInputDefaultProps)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export class TodoInput extends React.Component&lt;Props, State&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public static defaultProps = todoInputDefaultProps</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props: Props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            itemText: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const { itemText } = this.state</span></span>
<span class="line"><span style="color:#A6ACCD;">        const { updateValue, handleSubmit } = this</span></span>
<span class="line"><span style="color:#A6ACCD;">        const { inputSetting } = getProps(this.props)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;form onSubmit={handleSubmit} &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;input maxLength={inputSetting.maxlength} type=&#39;text&#39; value={itemText} onChange={updateValue} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button type=&#39;submit&#39; &gt;\u6DFB\u52A0todo&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    private updateValue(e: React.ChangeEvent&lt;HTMLInputElement&gt;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({ itemText: e.target.value })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    private handleSubmit(e: React.FormEvent&lt;HTMLFormElement&gt;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        e.preventDefault()</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!this.state.itemText.trim()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.props.handleSubmit(this.state.itemText)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({itemText: &#39;&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u9AD8\u9636\u7EC4\u4EF6" tabindex="-1">\u9AD8\u9636\u7EC4\u4EF6 <a class="header-anchor" href="#\u9AD8\u9636\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u5173\u4E8E\u5728 TypeScript \u5982\u4F55\u4F7F\u7528 HOC \u4E00\u76F4\u662F\u4E00\u4E2A\u96BE\u70B9\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u5C31\u4ECB\u7ECD\u4E00\u79CD\u6BD4\u8F83\u5E38\u89C4\u7684\u65B9\u6CD5\u3002</p><p>\u6211\u4EEC\u7EE7\u7EED\u6765\u770B <code>TodoInput</code> \u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u5176\u4E2D\u6211\u4EEC\u4E00\u76F4\u5728\u7528 <code>inputSetting</code> \u6765\u81EA\u5B9A\u4E49 <code>input</code> \u7684\u5C5E\u6027\uFF0C\u73B0\u5728\u6211\u4EEC\u9700\u8981\u7528\u4E00\u4E2A HOC \u6765\u5305\u88C5 <code>TodoInput</code> \uFF0C\u5176\u4F5C\u7528\u5C31\u662F\u7528\u9AD8\u9636\u7EC4\u4EF6\u5411 <code>TodoInput</code> \u6CE8\u5165 props\u3002</p><p>\u6211\u4EEC\u7684\u9AD8\u9636\u51FD\u6570\u5982\u4E0B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import * as hoistNonReactStatics from &#39;hoist-non-react-statics&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import * as React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type InjectedProps = Partial&lt;typeof hocProps&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const hocProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    inputSetting: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        maxlength: 30,</span></span>
<span class="line"><span style="color:#A6ACCD;">        placeholder: &#39;\u8BF7\u8F93\u5165\u5F85\u529E\u4E8B\u9879&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const withTodoInput = &lt;P extends InjectedProps&gt;(</span></span>
<span class="line"><span style="color:#A6ACCD;">  UnwrappedComponent: React.ComponentType&lt;P&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type Props = Omit&lt;P, keyof InjectedProps&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  class WithToggleable extends React.Component&lt;Props&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public static readonly UnwrappedComponent = UnwrappedComponent</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public render() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;UnwrappedComponent</span></span>
<span class="line"><span style="color:#A6ACCD;">        inputSetting={hocProps}</span></span>
<span class="line"><span style="color:#A6ACCD;">        {...this.props as P}</span></span>
<span class="line"><span style="color:#A6ACCD;">        /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return hoistNonReactStatics(WithToggleable, UnwrappedComponent)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u4F60\u641E\u61C2\u4E86\u4E0A\u4E00\u5C0F\u8282\u7684\u5185\u5BB9\uFF0C\u8FD9\u91CC\u5E94\u8BE5\u6CA1\u6709\u4EC0\u4E48\u96BE\u5EA6\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u7684 P \u8868\u793A\u4F20\u9012\u5230 HOC \u7684\u7EC4\u4EF6\u7684 props\uFF0C<code>React.ComponentType&lt;P&gt;</code> \u662F <code>React.FunctionComponent&lt;P&gt; | React.ClassComponent&lt;P&gt;</code> \u7684\u522B\u540D\uFF0C\u8868\u793A\u4F20\u9012\u5230HOC\u7684\u7EC4\u4EF6\u53EF\u4EE5\u662F\u7C7B\u7EC4\u4EF6\u6216\u8005\u662F\u51FD\u6570\u7EC4\u4EF6\u3002</p><p>\u5176\u4F59\u7684\u5730\u65B9 <code>Omit</code> <code>as P</code> \u7B49\u90FD\u662F\u8BB2\u8FC7\u7684\u5185\u5BB9\uFF0C\u8BFB\u8005\u53EF\u4EE5\u81EA\u884C\u7406\u89E3\uFF0C\u6211\u4EEC\u4E0D\u518D\u50CF\u4E0A\u4E00\u5C0F\u8282\u90A3\u6837\u4E00\u884C\u884C\u89E3\u91CA\u4E86\u3002</p><p>\u53EA\u9700\u8981\u8FD9\u6837\u4F7F\u7528\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const HOC = withTodoInput&lt;Props&gt;(TodoInput)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u901A\u8FC7\u4E24\u4E2A\u7AE0\u8282\u5B66\u4E60\u4E86 React \u4E0E\u7EC4\u4EF6\u76F8\u5173\u7684\u7528\u6CD5\uFF0C\u867D\u7136\u8FD9\u4E24\u8282\u4FE1\u606F\u91CF\u5F88\u5927\uFF0C\u4F46\u662F\u5982\u679C\u4F60\u7406\u89E3\u4E86\uFF0C\u4EE5\u540E\u7684\u5B66\u4E60\u5C31\u4F1A\u5F88\u7B80\u5355\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u7684\u786E\u7528\u4E86\u4E00\u90E8\u5206\u9AD8\u7EA7\u7C7B\u578B\uFF0C\u9AD8\u7EA7\u7C7B\u578B\u7684\u8FD0\u7528\u4E0E\u7406\u89E3\u7B97\u662F TypeScript \u5B66\u4E60\u7684\u7B2C\u4E00\u9053\u574E\u3002</p>`,41),t=[e];function o(c,r,i,C,A,d){return a(),n("div",null,t)}const u=s(l,[["render",o]]);export{D as __pageData,u as default};
