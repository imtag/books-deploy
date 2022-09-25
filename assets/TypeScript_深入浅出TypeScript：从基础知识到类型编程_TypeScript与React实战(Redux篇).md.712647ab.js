import{_ as s,c as n,o as a,d as p}from"./app.e0e4ea3a.js";const D=JSON.parse('{"title":"TypeScript\u4E0EReact\u5B9E\u6218(Redux\u7BC7)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\\b\\b\u5B9A\u4E49Models","slug":"\u5B9A\u4E49models","link":"#\u5B9A\u4E49models","children":[]},{"level":2,"title":"\\b\\bAction\u76F8\u5173","slug":"action\u76F8\u5173","link":"#action\u76F8\u5173","children":[]},{"level":2,"title":"Reducer\u76F8\u5173","slug":"reducer\u76F8\u5173","link":"#reducer\u76F8\u5173","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/TypeScript\u4E0EReact\u5B9E\u6218(Redux\u7BC7).md"}'),e={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/TypeScript\u4E0EReact\u5B9E\u6218(Redux\u7BC7).md"},l=p(`<h1 id="typescript\u4E0Ereact\u5B9E\u6218-redux\u7BC7" tabindex="-1">TypeScript\u4E0EReact\u5B9E\u6218(Redux\u7BC7) <a class="header-anchor" href="#typescript\u4E0Ereact\u5B9E\u6218-redux\u7BC7" aria-hidden="true">#</a></h1><hr><h1 id="typescript\u4E0Ereact\u5B9E\u6218-redux\u7BC7-1" tabindex="-1">TypeScript\u4E0EReact\u5B9E\u6218(Redux\u7BC7) <a class="header-anchor" href="#typescript\u4E0Ereact\u5B9E\u6218-redux\u7BC7-1" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u5728\u771F\u6B63\u7684\u9879\u76EE\u4E2D\u4E0D\u53EF\u80FD\u4EC5\u4EC5\u53EA\u7528\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u5B8C\u6210\u5F00\u53D1\u5DE5\u4F5C\uFF0C\u4E00\u5B9A\u4F1A\u6D89\u53CA\u5230\u72B6\u6001\u7BA1\u7406\u5DE5\u5177\uFF0C\u76EE\u524D\u6700\u4E3B\u6D41\u7684\u83AB\u8FC7\u4E8E redux\uFF0C\u6211\u4EEC\u4F1A\u7ED3\u5408 redux \u7EE7\u7EED\u5F00\u53D1\u6211\u4EEC\u7684 todo \u5E94\u7528\u3002</p><h2 id="\u5B9A\u4E49models" tabindex="-1">\b\b\u5B9A\u4E49Models <a class="header-anchor" href="#\u5B9A\u4E49models" aria-hidden="true">#</a></h2><p>\u5F88\u591A\u65F6\u5019\u524D\u7AEF\u6CA1\u6709\u5B9A\u4E49 Model \u7684\u4E60\u60EF\uFF0C\u4E0D\u8FC7\u5728\u524D\u7AEF\u8D8A\u6765\u8D8A\u91CD\u7684\u4ECA\u5929\uFF0C\u5C24\u5176\u662F TypeScript \u7684\u5B58\u5728\u4F7F\u5F97 model \u5B9A\u4E49\u66F4\u52A0\u53CB\u597D\u3002</p><p>\u6211\u4EEC\u56E0\u4E3A\u53EA\u662F\u4E2A demo\uFF0C\u6240\u4EE5\u6570\u636E\u6A21\u578B\u5F88\u7B80\u5355\uFF0C\u7528\u7B80\u5355\u7684\u63A5\u53E3\u5373\u53EF\u5B9A\u4E49:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// models/Todo.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">export interface Todo {</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: number</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">  done: boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="action\u76F8\u5173" tabindex="-1">\b\bAction\u76F8\u5173 <a class="header-anchor" href="#action\u76F8\u5173" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5F00\u59CB\u6B63\u5F0F\u7F16\u5199redux\u4EE3\u7801\uFF0C\u9996\u5148\u9700\u8981\u5B9A\u4E49 <code>constants</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// constants/todo.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">export enum ActionTodoConstants {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ADD_TODO = &#39;todo/add&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    TOGGLE_TODO = &#39;todo/toggle&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u5148\u5B9E\u73B0\u4E00\u4E2A <code>addTodo</code> \u51FD\u6570:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// actions/todo.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">let id = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const addTodo = (name: string) =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">    payload: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        todo: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            done: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            id: id++,</span></span>
<span class="line"><span style="color:#A6ACCD;">            name,</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: ActionTodoConstants.ADD_TODO,</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7531\u4E8E\u5728\u540E\u9762\u7684 reducer \u4E2D\u6211\u4EEC\u9700\u8981\u51FD\u6570\u8FD4\u56DE\u7684 Action \u7C7B\u578B\uFF0C\u6240\u4EE5\u6211\u4EEC\u5F97\u53D6\u5F97\u6BCF\u4E2A action \u51FD\u6570\u7684\u8FD4\u56DE\u7C7B\u578B\uFF0C\u5176\u5B9E\u8FD9\u91CC\u6709\u4E00\u4E2A\u6280\u5DE7\uFF0C\u5C31\u662F\u5229\u7528 TypeScript \u5F3A\u5927\u7684\u7C7B\u578B\u63A8\u5BFC\u6765\u53CD\u63A8\u51FA\u7C7B\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5148\u5B9A\u4E49\u51FD\u6570\uFF0C\u518D\u63A8\u5BFC\u51FA\u7C7B\u578B\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type AddTodoAction = ReturnType&lt;typeof addTodo&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb13cfda1c8da~tplv-t2oaga2asx-image.image" alt="2019-07-05-18-07-51"></p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6309\u7167\u540C\u6837\u7684\u65B9\u6CD5\u5B9E\u73B0 <code>toggleTodo</code> \u5373\u53EF</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export type AddTodoAction = ReturnType&lt;typeof addTodo&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export type ToggleTodoAction = ReturnType&lt;typeof toggleTodo&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type Action = AddTodoAction | ToggleTodoAction</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="reducer\u76F8\u5173" tabindex="-1">Reducer\u76F8\u5173 <a class="header-anchor" href="#reducer\u76F8\u5173" aria-hidden="true">#</a></h2><p>Reducer \u90E8\u5206\u76F8\u5BF9\u66F4\u7B80\u5355\u4E00\u4E9B\uFF0C\b\u6211\u4EEC\u53EA\u9700\u8981\u7ED9\u5BF9\u5E94\u7684\u53C2\u6570\u6216\u8005\u521D\u59CB state \u52A0\u4E0A\u7C7B\u578B\u5C31\u597D\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// reducers/todo.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B9A\u4E49State\u7684\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">export interface State {</span></span>
<span class="line"><span style="color:#A6ACCD;">    todos: Todo[]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const initialState: State = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    todos: []</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u628A\u4E4B\u524D\u5B9A\u4E49\u7684Action\u7ED9action\u53C2\u6570\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">export function reducer(state: State = initialState, action: Action) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch (action.type) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      case ActionTodoConstants.ADD_TODO: {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        const todo = action.payload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">          ...state,</span></span>
<span class="line"><span style="color:#A6ACCD;">          todos: [...state.todos, todo]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      case ActionTodoConstants.TOGGLE_TODO: {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        const { id } = action.payload</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">          ...state,</span></span>
<span class="line"><span style="color:#A6ACCD;">          todos: state.todos.map(todo =&gt; todo.id === id ? { ...todo, done: !todo.done } : todo)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      default:</span></span>
<span class="line"><span style="color:#A6ACCD;">        return state</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u770B\u8C8C\u4F3C\u6CA1\u95EE\u9898\uFF0C\u4F46\u662F\u6211\u4EEC\u4F1A\u53D1\u73B0\u9519\u8BEF\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb13cfdde82cd~tplv-t2oaga2asx-image.image" alt="2019-07-05-19-17-05"></p><p>\u6211\u4EEC\u770B\u5230 <code>action.payload</code> \u5176\u5B9E\u662F\u4E24\u4E2A\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B\u7684\u8054\u5408\u7C7B\u578B\uFF0C\u4F46\u662F\u6211\u4EEC\u5728 <code>TOGGLE_TODO</code> \u7684 <code>type</code> \u4E0B\u5C31\u4E0D\u5E94\u8BE5\u51FA\u73B0 <code>todo: {...}</code> \u7C7B\u578B\uFF0C\u4E3A\u4EC0\u4E48\u8FD9\u91CC\u4F9D\u7136\u4F1A\u51FA\u73B0\u5462\uFF1F</p><p>\u5176\u5B9E\u6B63\u662F\u56E0\u4E3A\u6211\u4EEC\u9519\u8BEF\u8FD0\u7528\u4E86\u7C7B\u578B\u63A8\u5BFC\u6240\u81F4\u7684\uFF0C\u6211\u4EEC\u4EE3\u7801\u548C\u903B\u8F91\u90FD\u6CA1\u6709\u95EE\u9898\uFF0C\u95EE\u9898\u5C31\u51FA\u73B0\u5728\u6211\u4EEC\u6CA1\u6709\u7406\u89E3\u597D\u7C7B\u578B\u63A8\u5BFC\u7684\u673A\u5236\u3002</p><p>\u7C7B\u578B\u63A8\u5BFC\u751F\u6210\u7684\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B\u662F\u8FD9\u6837\u7684:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type AddTodoAction = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    payload: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        todo: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            done: boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">            id: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: ActionTodoConstants;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u800C\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B\u662F\u8FD9\u6837\u7684:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type AddTodoAction = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: ActionTodoConstants.ADD_TODO;</span></span>
<span class="line"><span style="color:#A6ACCD;">    payload: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        todo: Todo;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u4E2D\u6700\u5927\u7684\u533A\u522B\u5C31\u662F <code>type</code> \u5C5E\u6027\u7684\u7C7B\u578B\uFF0C\u7C7B\u578B\u63A8\u5BFC\u53EA\u63A8\u5BFC\u5230\u4E86\u4E00\u4E2A\u679A\u4E3E\u7C7B\u578B <code>ActionTodoConstants</code> \uFF0C\u800C\u6211\u4EEC\u5B9A\u4E49\u7684\u7C7B\u578B\u662F\u5177\u4F53\u7684 <code>ActionTodoConstants.ADD_TODO</code> ,\u56E0\u6B64\u5F53\u6211\u4EEC\u5728reducer\u4E2D\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u53EF\u4EE5\u7CBE\u51C6\u5730\u63A8\u5BFC\u51FA\u7C7B\u578B\uFF0C\u800C\u5229\u7528\u7C7B\u578B\u63A8\u5BFC\u7684\u65B9\u6CD5\u5374\u4E0D\u884C\u3002</p><p>\u8FD9\u91CC\u4E0D\u5F97\u4E0D\u63D0\u4E00\u4E2A typescript \u4E0B\u9762\u7684\u4E00\u4E2A\u9AD8\u7EA7\u7C7B\u578B\uFF0C\u53EF\u8FA8\u8BC6\u8054\u5408\u7C7B\u578B\uFF08Discriminated Unions\uFF09\uFF0C\u8FD9\u4E2A\u9AD8\u7EA7\u7C7B\u578B\u6211\u4EEC\u4E4B\u524D\u5DF2\u7ECF\u63D0\u5230\u8FC7\uFF0C\u6211\u4EEC\u518D\u7B80\u5355\u56DE\u987E\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">interface Square {</span></span>
<span class="line"><span style="color:#A6ACCD;">    kind: &quot;square&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    size: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">interface Rectangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">    kind: &quot;rectangle&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Shape = Square | Rectangle;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function area(s: Shape) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch (s.kind) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5728\u6B64 case \u4E2D\uFF0C\u53D8\u91CF s \u7684\u7C7B\u578B\u4E3A Square</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &quot;square&quot;: return s.size * s.size;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5728\u6B64 case \u4E2D\uFF0C\u53D8\u91CF s \u7684\u7C7B\u578B\u4E3A Rectangle</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &quot;rectangle&quot;: return s.height * s.width;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E2A\u8054\u5408\u7C7B\u578B\u53EF\u4EE5\u901A\u8FC7 <code>case</code> \u8BC6\u522B\u4E0D\u540C\u7684 <code>s.kind</code> \u4ECE\u800C\u63A8\u5BFC\u51FA\u5BF9\u5E94\u7684\u7C7B\u578B\uFF0C\u8FD9\u4E2A\u300C\u53EF\u8FA8\u8BC6\u8054\u5408\u300D\u4E0E\u666E\u901A\u7684\u300C\u8054\u5408\u7C7B\u578B\u300D\u6700\u5927\u7684\u4E0D\u540C\u4E4B\u5904\u5C31\u5728\u4E8E\u5176\u5FC5\u987B\u6709\u4E00\u4E2A\u300C\u5355\u4F8B\u7C7B\u578B\u300D\u3002</p><p>\u300C\u5355\u4F8B\u7C7B\u578B\u300D\u591A\u6570\u662F\u6307\u679A\u4E3E\u6210\u5458\u7C7B\u578B\u548C\u6570\u5B57/\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u4E0A\u9762\u4F8B\u5B50\u4E2D\u7684 <code>Rectangle</code> \u63A5\u53E3\u4E2D\u7684 <code>kind: &quot;rectangle&quot;</code> \u5C31\u662F\u6240\u8C13\u7684\u5355\u4F8B\u7C7B\u578B\uFF0C\u4F60\u53EF\u80FD\u4F1A\u597D\u5947\uFF0C\u8FD9\u4E0D\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u5417\uFF1F\u4E3A\u4EC0\u4E48\u662F\u7C7B\u578B\uFF1F\u5176\u5B9E\u5728 TypeScript \u4E2D\u8FD9\u79CD\u7C7B\u578B\u5C31\u53EB\u505A\u300C\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\u300D\u3002</p><p>\u770B\u4E2A\u4F8B\u5B50:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type a = &#39;add&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const b: a = &#39;add&#39; // ok</span></span>
<span class="line"><span style="color:#A6ACCD;">export const c: a = &#39;delete&#39; // \u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb13cfdef2f6c~tplv-t2oaga2asx-image.image" alt="2019-07-09-13-16-13"></p><p>\u6211\u4EEC\u60F3\u63A8\u5BFC\u51FA\u6B63\u786E\u7684\u7C7B\u578B\u9760\u7684\u5C31\u662F\u8FD9\u4E2A\u5355\u4E00\u7684\u300C\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\u300D\uFF0C\u56E0\u6B64\u4E0A\u9762\u63D0\u5230\u7684\u5229\u7528\u51FD\u6570\u8FD4\u56DE\u503C\u7C7B\u578B\u63A8\u5BFC\u7684\u65B9\u5F0F\u5C31\u4E0D\u7B26\u5408\u8FD9\u4E2A\u8981\u6C42\uFF0C\u56E0\u6B64\u9020\u6210\u540E\u9762\u7684\u63A8\u5BFC\u9519\u8BEF\u662F\u610F\u6599\u4E4B\u4E2D\u7684\u4E8B\u60C5\u4E86\u3002</p><p>\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u4FEE\u6539\u4E4B\u524D\u7684 action \u4EE3\u7801</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// actions/todo.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">export interface AddTodoAction { type: ActionTodoConstants.ADD_TODO, payload: { todo: Todo } }</span></span>
<span class="line"><span style="color:#A6ACCD;">export interface ToggleTodoAction { type: ActionTodoConstants.TOGGLE_TODO, payload: { id: number } }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u65F6\u5019 reducer \u4E2D\u5C31\u53EF\u4EE5\u7CBE\u51C6\u63A8\u5BFC:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb13cfdf384d9~tplv-t2oaga2asx-image.image" alt="2019-07-07-09-14-46"></p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728 Redux \u76F8\u5173\u7684\u5B9E\u6218\u4E2D\u8FD0\u7528\u4E86\u4E4B\u524D\u7684\u5404\u79CD\u7C7B\u578B\uFF0C\u7B97\u662F\u4E00\u4E2A\u7EFC\u5408\u6027\u8D28\u7684\u5B9E\u6218\uFF0C\u5177\u4F53\u7684\u4EE3\u7801\u53EF\u4EE5\u9605\u8BFB<a href="https://github.com/xiaomuzhu/ts-start/tree/master/src/redux" target="_blank" rel="noreferrer">github\u4E0A\u7684\u793A\u4F8B\u4EE3\u7801</a>.</p><p>\u5230\u76EE\u524D\u4E3A\u6B62\u6211\u4EEC\u5728\u4F7F\u7528\u5C42\u9762\u4E0A\u6CA1\u6709\u592A\u5927\u7684\u95EE\u9898\u4E86\uFF0C\u4F46\u662F\u4F9D\u7136\u6709\u4E00\u4E9B\u9AD8\u7EA7\u7684\u7C7B\u578B\u6211\u4EEC\u8FD8\u6CA1\u6709\u63A5\u89E6\uFF0C\u800C\u60F3\u5728 TypeScript \u8FDB\u9636\u662F\u79BB\u4E0D\u5F00\u300C\u7C7B\u578B\u7F16\u7A0B\u300D\u8FD9\u9053\u574E\u7684\uFF0C\u5230\u5E95\u4EC0\u4E48\u662F\u7C7B\u578B\u7F16\u7A0B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5982\u4F55\u8BBE\u8BA1\u7C7B\u578B\u5DE5\u5177\uFF0C\u90A3\u6211\u4EEC\u8FDB\u5165\u4E0B\u4E00\u4E2A\u9636\u6BB5\u7684\u5B66\u4E60\u5427\u3002</p>`,45),o=[l];function t(c,r,i,d,A,C){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{D as __pageData,u as default};
