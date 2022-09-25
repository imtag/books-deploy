import{_ as s,c as n,o as a,d as p}from"./app.e0e4ea3a.js";const D=JSON.parse('{"title":"Vue \u5B9E\u6218-TypeScript \u4E0B\u7684 Vuex","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA todo \u4EFB\u52A1\u903B\u8F91","slug":"\u521B\u5EFA-todo-\u4EFB\u52A1\u903B\u8F91","link":"#\u521B\u5EFA-todo-\u4EFB\u52A1\u903B\u8F91","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49 todo \u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49-todo-\u5185\u5BB9","link":"#\u81EA\u5B9A\u4E49-todo-\u5185\u5BB9","children":[]},{"level":2,"title":"\u5220\u9664\u3001\u5B8C\u6210 todo \u4EFB\u52A1","slug":"\u5220\u9664\u3001\u5B8C\u6210-todo-\u4EFB\u52A1","link":"#\u5220\u9664\u3001\u5B8C\u6210-todo-\u4EFB\u52A1","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/Vue \u5B9E\u6218-TypeScript \u4E0B\u7684 Vuex.md"}'),l={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/Vue \u5B9E\u6218-TypeScript \u4E0B\u7684 Vuex.md"},e=p(`<h1 id="vue-\u5B9E\u6218-typescript-\u4E0B\u7684-vuex" tabindex="-1">Vue \u5B9E\u6218-TypeScript \u4E0B\u7684 Vuex <a class="header-anchor" href="#vue-\u5B9E\u6218-typescript-\u4E0B\u7684-vuex" aria-hidden="true">#</a></h1><hr><h1 id="vue-\u5B9E\u6218\uFF1Atypescript-\u4E0B\u7684-vuex" tabindex="-1">Vue \u5B9E\u6218\uFF1ATypeScript \u4E0B\u7684 Vuex <a class="header-anchor" href="#vue-\u5B9E\u6218\uFF1Atypescript-\u4E0B\u7684-vuex" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u5DF2\u7ECF\u57FA\u672C\u5B8C\u6210\u4E86 UI \u5C42\u9762\u7684\u7F16\u5199\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u5BF9\u903B\u8F91\u5C42\u8FDB\u884C\u5B9E\u73B0\u3002</p><p>\u6211\u4EEC\u9009\u62E9\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u5DE5\u5177 vuex\uFF0C\u4F46\u662F\u5728 TypeScript \u4E2D vuex \u5F80\u5F80\u8981\u4E0E vuex-class \u8FDB\u884C\u914D\u5408\uFF0C\u5B83\u540C\u6837\u63D0\u4F9B\u4E86\u591A\u4E2A\u88C5\u9970\u5668\u4F9B\u6211\u4EEC\u4F7F\u7528\u3002</p><p>\u9996\u5148\u5B89\u88C5 vuex-class\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -S vuex-class</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u672C\u8282\u5BF9\u5E94\u6E90\u4EE3\u7801\u5728<a href="https://github.com/xiaomuzhu/vue-ts-todo/tree/v1.2" target="_blank" rel="noreferrer">v1.2</a></p><h2 id="\u521B\u5EFA-todo-\u4EFB\u52A1\u903B\u8F91" tabindex="-1">\u521B\u5EFA todo \u4EFB\u52A1\u903B\u8F91 <a class="header-anchor" href="#\u521B\u5EFA-todo-\u4EFB\u52A1\u903B\u8F91" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5 <code>src/store/state.ts</code> \u4E2D\u5148\u5B9A\u4E49 State \u7684\u7C7B\u578B\u548C\u521D\u59CB\u503C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export enum Mode {</span></span>
<span class="line"><span style="color:#A6ACCD;">  edit, // \u5904\u4E8E\u7F16\u8F91\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">  finish // \u5904\u4E8E\u7F16\u8F91\u5B8C\u6210\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export interface ITodoItem {</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: string; // todo\u4EFB\u52A1\u7684id</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string; // todo \u4EFB\u52A1\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">  isDone: boolean; // \u4EFB\u52A1\u662F\u5426\u5B8C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconName: string; // \u4EFB\u52A1\u7684\u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: string; // \u4EFB\u52A1\u5E95\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: Mode; // \u7F16\u8F91\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export interface State {</span></span>
<span class="line"><span style="color:#A6ACCD;">  todoList: Array&lt;ITodoItem&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const state: State = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  todoList: []</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u5728 <code>src/store/mutations.ts</code> \u4E2D\u7F16\u5199\u521B\u5EFA todo \u7684\u903B\u8F91\uFF0C\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u6211\u4EEC\u63A5\u53D7\u4E00\u4E2A todo \u5BF9\u8C61\uFF0C\u628A\u5B83\u6DFB\u52A0\u5230 todoList \u6570\u7EC4\u4E2D\u5373\u53EF\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export const mutations: MutationTree&lt;State&gt; = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u521B\u5EFA todo</span></span>
<span class="line"><span style="color:#A6ACCD;">  createTodoItem(state: State, todoItem: ITodoItem) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.todoList.push(todoItem);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u90A3\u4E48\u5982\u4F55\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 <code>mutations</code> \u5462\uFF1F</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Component, Prop, Vue } from &quot;vue-property-decorator&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Icon } from &quot;vant&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Mutation, State } from &quot;vuex-class&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ITodoItem, Mode } from &quot;../store/state&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { _ } from &quot;../utils&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">@Component({</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Icon.name]: Icon</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class Header extends Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @State private todoItem!: ITodoItem[];</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Mutation private createTodoItem!: (todo: ITodoItem) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private createTodoItemHandle() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const newItem: ITodoItem = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      id: _.uuid(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &quot;\u65B0\u4EFB\u52A1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      isDone: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">      mode: Mode.edit,</span></span>
<span class="line"><span style="color:#A6ACCD;">      iconName: &quot;yingtao&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      color: &quot;#FFCC22&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.createTodoItem(newItem);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u770B\u5230 @Mutation \u5C31\u662F vuex-class \u63D0\u4F9B\u7684\u88C5\u9970\u5668\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u628A\u76F8\u5173\u7684 mutations \u4F5C\u4E3A\u7C7B\u6210\u5458\u6765\u4F7F\u7528\u3002</p><h2 id="\u81EA\u5B9A\u4E49-todo-\u5185\u5BB9" tabindex="-1">\u81EA\u5B9A\u4E49 todo \u5185\u5BB9 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-todo-\u5185\u5BB9" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5\u5148\u770B\u4E00\u4E0B\u52A8\u56FE\u7684\u6F14\u793A\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/13/16dc18881652b8ba~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6211\u4EEC\u70B9\u51FB\u4E86 + \u6309\u94AE\u4E4B\u540E\u521B\u5EFA\u4E86\u65B0\u7684 todo \u4EFB\u52A1\uFF0C\u7136\u540E\u8FDB\u5165\u4E86\u81EA\u5B9A\u4E49 todo \u4EFB\u52A1\u7684\u7F16\u8F91\u9875\u9762\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9\u80CC\u666F\u989C\u8272\u548C\u56FE\u6807\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4EFB\u52A1\u540D\u79F0\u3002</p><p>\u8FD9\u4E9B\u903B\u8F91\u6211\u4EEC\u7EDF\u4E00\u5728 mutations \u4E2D\u5B9E\u73B0\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export const mutations: MutationTree&lt;State&gt; = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u9009\u62E9\u56FE\u6807\u80CC\u666F</span></span>
<span class="line"><span style="color:#A6ACCD;">  selectColor(state: State, payload: { id: string; color: string }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list = state.todoList;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const todo = _.find(list, payload.id);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (todo) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      todo.color = payload.color;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u9009\u62E9\u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">  selectIcon(state: State, payload: { id: string; icon: string }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list = state.todoList;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const todo = _.find(list, payload.id);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (todo) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      todo.iconName = payload.icon;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7F16\u8F91\u4EFB\u52A1\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">  changeName(state: State, payload: { id: string; value: string }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list = state.todoList;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const todo = _.find(list, payload.id);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (todo) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      todo.name = payload.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u540E\u9762\u6211\u4EEC\u501F\u52A9 vuex-class \u628A\u5B83\u4EEC\u4F5C\u4E3A\u7C7B\u7684\u6210\u5458\u4F7F\u7528\uFF0C\u6211\u4EEC\u770B <code>src/views/Create.vue</code> \u7684\u90E8\u5206\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default class Create extends Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;">  private iconSetting: string[] = config.iconSetting;</span></span>
<span class="line"><span style="color:#A6ACCD;">  private colorSetting: string[] = config.colorSetting;</span></span>
<span class="line"><span style="color:#A6ACCD;">  private id!: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  private index!: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  private currentItem!: ITodoItem;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Mutation</span></span>
<span class="line"><span style="color:#A6ACCD;">  private selectColor!: (payload: { id: string; color: string }) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Mutation</span></span>
<span class="line"><span style="color:#A6ACCD;">  private selectIcon!: (payload: { id: string; icon: string }) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Mutation</span></span>
<span class="line"><span style="color:#A6ACCD;">  private changeName!: (payload: { id: string; value: string }) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Getter private getCurrentTodoList!: ITodoItem[];</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u83B7\u53D6\u5F53\u524D\u5C06\u8981\u521B\u5EFA\u7684todo\u7684id</span></span>
<span class="line"><span style="color:#A6ACCD;">  private mounted() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.getCurrentTodoList);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list = this.getCurrentTodoList;</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.index = list.length - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const currentItem = list[this.index];</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.id = currentItem.id;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8BA1\u7B97\u5F53\u524Dicon\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">  private get iconComputed() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const currentItem = _.find(this.getCurrentTodoList, this.id);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { iconName } = currentItem!;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return iconName;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8BA1\u7B97\u5F53\u524D\u80CC\u666F\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">  private get colorComputed() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const currentItem = _.find(this.getCurrentTodoList, this.id);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { color } = currentItem!;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return color;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  private changeColorHandle(color: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.selectColor({ id: this.id, color });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  private handleIconHandle(name: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.selectIcon({ id: this.id, icon: name });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  private get nameComputed() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const todo = _.find(this.getCurrentTodoList, this.id);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return todo!.name;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  private set nameComputed(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.changeName({ id: this.id, value: name });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F60\u53EF\u80FD\u4F1A\u597D\u5947 @Getter \u662F\u5E72\u4EC0\u4E48\u7684\uFF0C\u8FD9\u4E2A\u5176\u5B9E\u5C31\u662F\u5C06 Vuex \u4E2D\u7684 Getter \u6DFB\u52A0\u5230\u7C7B\u6210\u5458\u7684\u88C5\u9970\u5668\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u628A todoList \u8FD9\u4E2A\u6570\u7EC4\u4F5C\u5F15\u5165\u8FDB\u6765\uFF0C\u65B9\u4FBF\u64CD\u4F5C\u3002</p><h2 id="\u5220\u9664\u3001\u5B8C\u6210-todo-\u4EFB\u52A1" tabindex="-1">\u5220\u9664\u3001\u5B8C\u6210 todo \u4EFB\u52A1 <a class="header-anchor" href="#\u5220\u9664\u3001\u5B8C\u6210-todo-\u4EFB\u52A1" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u521B\u5EFA\u5B8C\u4EFB\u52A1\u4E4B\u540E\u56DE\u5230\u9996\u9875\uFF0C\u4F1A\u53D1\u73B0\u591A\u51FA\u4E86\u4E00\u4E2A todo \u4EFB\u52A1\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u9700\u8981\u4E24\u4E2A\u903B\u8F91\uFF1A</p><ul><li>\u4EFB\u52A1\u5B8C\u6210\u903B\u8F91</li><li>\u5220\u9664\u4EFB\u52A1\u903B\u8F91</li></ul><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/13/16dc188816b24d34~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6211\u4EEC\u5728 mutations \u4E2D\u7F16\u8F91\u76F8\u5173\u903B\u8F91\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  deleteTodoItem(state: State, id: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list: ITodoItem[] = state.todoList;</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.todoList = list.filter(item =&gt; item.id !== id);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5C06\u6B64\u4EFB\u52A1\u8BBE\u7F6E\u4E3A\u5B8C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">  doneTodoItem(state: State, id: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list: ITodoItem[] = state.todoList;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const todo = _.find(list, id);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (todo) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      todo.isDone = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u5728 <code>src/views/Home.vue</code> \u90E8\u5206\u5E94\u7528\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default class Home extends Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Mutation private deleteTodoItem!: (id: string) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Mutation private doneTodoItem!: (id: string) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Getter private getCurrentTodoList!: ITodoItem[];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private get TodoListComputed() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list = this.getCurrentTodoList.filter(</span></span>
<span class="line"><span style="color:#A6ACCD;">      item =&gt; item.mode !== Mode.edit</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return list;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private delHandle(id: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.deleteTodoItem(id);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  private doneHandle(id: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.doneTodoItem(id);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u903B\u8F91\u7F16\u5199\u90E8\u5206\u6CA1\u6709\u4EC0\u4E48\u6709\u592A\u5927\u96BE\u5EA6\u7684\u4E1C\u897F\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u4F60\u628A\u6E90\u4EE3\u7801\u62F7\u8D1D\u4E0B\u6765\uFF0C\u7ED3\u5408\u672C\u8282\u5185\u5BB9\u548C\u6CE8\u91CA\u8FDB\u884C\u5B66\u4E60\uFF0C\u56E0\u4E3A\u5176\u4E2D\u6D89\u53CA\u4E86\u4E00\u4E9B\u7EC6\u8282\u6211\u4EEC\u788D\u4E8E\u7BC7\u5E45\u6CA1\u529E\u6CD5\u90FD\u6D89\u53CA\u5230\u3002</p><p>\u8FD9\u5C31\u662F\u6211\u4EEC\u501F\u52A9 TypeScript + Vue \u5B8C\u6210\u7684\u4E00\u4E2A\u7B80\u5355\u7684 TODO \u5E94\u7528\uFF0C\u5176\u5B9E\u5982\u679C\u4F60\u641E\u6E05\u695A\u4E86\u8FD9\u4E2A\u5C0F\u5E94\u7528\uFF0C\u6574\u4E2A\u4F7F\u7528\u5C31\u4E0D\u4F1A\u6709\u592A\u5927\u95EE\u9898\u4E86\u3002</p><p>\u4F46\u662F\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u76EE\u524D vue2.6x \u867D\u7136\u5BF9 TypeScript \u7684\u652F\u6301\u5DF2\u7ECF\u6709\u4E86\u4E00\u5B9A\u8FDB\u6B65\uFF0C\u4F46\u662F\u6574\u4F53\u7684\u4EE3\u7801\u63D0\u793A\u8FD8\u662F\u4E0D\u5230\u4F4D\uFF0C\u8BED\u6CD5\u566A\u97F3\u4F9D\u7136\u975E\u5E38\u5927\uFF0Cvue 3.0 \u8981\u5230 2020\u5E74\u4E00\u5B63\u5EA6\u53D1\u5E03\uFF0C\u8FD9\u4E2A\u7248\u672C\u7684 Vue \u53EA\u662F\u4E2A\u8FC7\u6E21\uFF0C\u5728\u4E0B\u4E2A\u7528 TypeScript \u91CD\u5199\u540E\u7684 Vue 3.0 \u53D1\u5E03\u540E\u6211\u4EEC\u4F1A\u7EE7\u7EED\u8FDB\u884C\u5B9E\u6218\u3002</p>`,37),o=[e];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{D as __pageData,u as default};
