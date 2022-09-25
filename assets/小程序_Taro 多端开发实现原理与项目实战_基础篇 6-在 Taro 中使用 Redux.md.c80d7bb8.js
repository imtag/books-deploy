import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const y=JSON.parse('{"title":"\u57FA\u7840\u7BC7 6-\u5728 Taro \u4E2D\u4F7F\u7528 Redux","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"\u4F9D\u8D56","slug":"\u4F9D\u8D56","link":"#\u4F9D\u8D56","children":[]},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[{"level":3,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784","link":"#\u76EE\u5F55\u7ED3\u6784","children":[]},{"level":3,"title":"\u7F16\u5199 Todos","slug":"\u7F16\u5199-todos","link":"#\u7F16\u5199-todos","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"\u5C0F\u7A0B\u5E8F/Taro \u591A\u7AEF\u5F00\u53D1\u5B9E\u73B0\u539F\u7406\u4E0E\u9879\u76EE\u5B9E\u6218/\u57FA\u7840\u7BC7 6-\u5728 Taro \u4E2D\u4F7F\u7528 Redux.md"}'),p={name:"\u5C0F\u7A0B\u5E8F/Taro \u591A\u7AEF\u5F00\u53D1\u5B9E\u73B0\u539F\u7406\u4E0E\u9879\u76EE\u5B9E\u6218/\u57FA\u7840\u7BC7 6-\u5728 Taro \u4E2D\u4F7F\u7528 Redux.md"},e=l(`<h1 id="\u57FA\u7840\u7BC7-6-\u5728-taro-\u4E2D\u4F7F\u7528-redux" tabindex="-1">\u57FA\u7840\u7BC7 6-\u5728 Taro \u4E2D\u4F7F\u7528 Redux <a class="header-anchor" href="#\u57FA\u7840\u7BC7-6-\u5728-taro-\u4E2D\u4F7F\u7528-redux" aria-hidden="true">#</a></h1><hr><h1 id="\u5728-taro-\u4E2D\u4F7F\u7528-redux" tabindex="-1">\u5728 Taro \u4E2D\u4F7F\u7528 Redux <a class="header-anchor" href="#\u5728-taro-\u4E2D\u4F7F\u7528-redux" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u8BFB\u4E86\u4E0A\u7BC7\u6587\u7AE0\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5DF2\u7ECF\u638C\u63E1\u4E86\u521D\u6B65\u7684 Taro \u5F00\u53D1\u6280\u80FD\u4E86\uFF0C\u672C\u6587\u5C06\u5E26\u9886\u5927\u5BB6\u7ED3\u5408 Redux \u5B8C\u5584\u4E00\u4E2A Todolist\u3002 \u9996\u5148\uFF0C\u6211\u4EEC\u5F97\u5BF9 Redux \u6709\u4E2A\u521D\u6B65\u7684\u4E86\u89E3\u3002Redux \u662F JavaScript \u72B6\u6001\u5BB9\u5668\uFF0C\u63D0\u4F9B\u53EF\u9884\u6D4B\u7684\u72B6\u6001\u7BA1\u7406\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u89C4\u6A21\u6BD4\u8F83\u5927\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u5176\u9875\u9762\u72B6\u6001\u548C\u6570\u636E\u7F13\u5B58\u7B49\u90FD\u9700\u8981\u7BA1\u7406\u5F88\u591A\u7684\u4E1C\u897F\uFF0C\u8FD9\u65F6\u5019\u5F15\u5165 Redux \u53EF\u4EE5\u65B9\u4FBF\u7684\u7BA1\u7406\u8FD9\u4E9B\u72B6\u6001\uFF0C<strong>\u540C\u4E00\u6570\u636E\uFF0C\u4E00\u6B21\u8BF7\u6C42\uFF0C\u5E94\u7528\u5168\u5C40\u5171\u4EAB</strong>\u3002</p><p>\u800C Taro \u4E5F\u975E\u5E38\u53CB\u597D\u5730\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u53EF\u79FB\u690D\u7684 Redux \u3002</p><h2 id="\u4F9D\u8D56" tabindex="-1">\u4F9D\u8D56 <a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u66F4\u65B9\u4FBF\u5730\u4F7F\u7528 <code>Redux</code>\uFF0CTaro \u63D0\u4F9B\u4E86\u4E0E <code>react-redux</code> API \u51E0\u4E4E\u4E00\u81F4\u7684\u5305 <code>@tarojs/redux</code> \u6765\u8BA9\u5F00\u53D1\u4EBA\u5458\u83B7\u5F97\u66F4\u52A0\u826F\u597D\u7684\u5F00\u53D1\u4F53\u9A8C\u3002</p><p>\u5F00\u53D1\u524D\u9700\u8981\u5B89\u88C5 <code>redux</code> \u548C <code>@tarojs/redux</code> \uFF0C\u5F00\u53D1\u8005\u53EF\u81EA\u884C\u9009\u62E9\u5B89\u88C5 Redux \u4E2D\u95F4\u4EF6\uFF0C\u672C\u6587\u4EE5\u5982\u4E0B\u4E2D\u95F4\u4EF6\u4E3A\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ yarn add redux @tarojs/redux redux-logger</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6216\u8005\u4F7F\u7528 npm</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm install --save redux @tarojs/redux redux-logger</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u901A\u8FC7\u4E30\u5BCC\u4E0A\u4E00\u7BC7\u6587\u7AE0\u7684 Todolist \u5FEB\u901F\u4E0A\u624B Redux \u3002</p><h3 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h3><p>\u9996\u5148\u901A\u8FC7\u76EE\u5F55\u5212\u5206\u6211\u4EEC\u7684<code>store</code>/<code>reducers</code>/<code>actions</code>\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/8/16651819b8e74eef~tplv-t2oaga2asx-image.image" alt="2018-06-12-15-37-12"></p><p>\u5206\u522B\u5728\u4E09\u4E2A\u6587\u4EF6\u5939\u91CC\u521B\u5EFA<code>index.js</code>\uFF0C\u4F5C\u4E3A\u4E09\u4E2A\u6A21\u5757\u7684\u5165\u53E3\u6587\u4EF6\u3002\u9996\u5148\u6765\u770B\u770B<code>store/index.js</code>\u91CC\u9762\u7684\u5185\u5BB9\u3002<code>reducers</code>\u548C<code>actions</code>\u91CC\u9762\u7684\u5185\u5BB9\u6211\u4EEC\u9700\u8981\u89C4\u5212\u597D\u529F\u80FD\u4E4B\u540E\u518D\u6765\u5904\u7406\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// store/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { createStore, applyMiddleware } from &#39;redux&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F15\u5165\u9700\u8981\u7684\u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">import thunkMiddleware from &#39;redux-thunk&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createLogger } from &#39;redux-logger&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F15\u5165\u6839reducers</span></span>
<span class="line"><span style="color:#A6ACCD;">import rootReducer from &#39;../reducers&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const middlewares = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  thunkMiddleware,</span></span>
<span class="line"><span style="color:#A6ACCD;">  createLogger()</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u521B\u5EFA store</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function configStore () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const store = createStore(rootReducer, applyMiddleware(...middlewares))</span></span>
<span class="line"><span style="color:#A6ACCD;">  return store</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u7F16\u5199-todos" tabindex="-1">\u7F16\u5199 Todos <a class="header-anchor" href="#\u7F16\u5199-todos" aria-hidden="true">#</a></h3><p>\u9996\u5148\uFF0C\u5B9A\u4E49\u597D<code>store</code>\uFF0C\u7136\u540E\u5728<code>app.js</code>\u4E2D\u5F15\u5165\u3002\u4F7F\u7528<code>@tarojs/redux</code>\u4E2D\u63D0\u4F9B\u7684<code>Provider</code>\u7EC4\u4EF6\u5C06\u524D\u9762\u5199\u597D\u7684<code>store</code>\u63A5\u5165\u5E94\u7528\u4E2D\uFF0C\u8FD9\u6837\u4E00\u6765\uFF0C\u88AB<code>Provider</code>\u5305\u88F9\u7684\u9875\u9762\u90FD\u80FD\u8BBF\u95EE\u5230\u5E94\u7528\u7684<code>store</code>\u3002</p><blockquote><p>Provider \u7EC4\u4EF6\u4F7F\u7EC4\u4EF6\u5C42\u7EA7\u4E2D\u7684 connect() \u65B9\u6CD5\u90FD\u80FD\u591F\u83B7\u5F97 Redux store\u3002</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import Taro, { Component } from &#39;@tarojs/taro&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Provider } from &#39;@tarojs/redux&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import configStore from &#39;./store&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Index from &#39;./pages/index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./app.scss&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const store = configStore()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Provider store={store}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Index /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Provider&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6B63\u5F0F\u5F00\u59CB\u89C4\u5212 Todos \u5E94\u7528\u7684\u4E3B\u8981\u529F\u80FD\u3002</p><p>\u9996\u5148\u6211\u4EEC\u53EF\u4EE5\u65B0\u5EFA<code>constants</code>\u6587\u4EF6\u5939\u6765\u5B9A\u4E49\u4E00\u7CFB\u5217\u6240\u9700\u7684<code>action type</code>\u5E38\u91CF\u3002\u4F8B\u5982 Todos \u6211\u4EEC\u53EF\u4EE5\u5148\u589E\u52A0<code>ADD</code>\u548C<code>DELETE</code>\u4E24\u4E2A<code>action type</code>\u6765\u533A\u5206\u65B0\u589E\u548C\u5220\u9664 Todo \u6307\u4EE4\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// src/constants/todos.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const ADD = &#39;ADD&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export const DELETE = &#39;DELETE&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u5F00\u59CB\u521B\u5EFA\u5904\u7406\u8FD9\u4E24\u4E2A\u6307\u4EE4\u7684<code>reducer</code>\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// src/reducers/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { combineReducers } from &#39;redux&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ADD, DELETE } from &#39;../constants/todos&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B9A\u4E49\u521D\u59CB\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">const INITIAL_STATE = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  todos: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {id: 0, text: &#39;\u7B2C\u4E00\u6761todo&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function todos (state = INITIAL_STATE, action) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u83B7\u53D6\u5F53\u524Dtodos\u6761\u6570\uFF0C\u7528\u4EE5id\u81EA\u589E</span></span>
<span class="line"><span style="color:#A6ACCD;">  const todoNum = state.todos.length</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (action.type) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6839\u636E\u6307\u4EE4\u5904\u7406todos</span></span>
<span class="line"><span style="color:#A6ACCD;">    case ADD:      </span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        todos: state.todos.concat({</span></span>
<span class="line"><span style="color:#A6ACCD;">          id: todoNum,</span></span>
<span class="line"><span style="color:#A6ACCD;">          text: action.data</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    case DELETE:</span></span>
<span class="line"><span style="color:#A6ACCD;">      let newTodos = state.todos.filter(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return item.id !== action.id</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        todos: newTodos</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return state</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default combineReducers({</span></span>
<span class="line"><span style="color:#A6ACCD;">  todos</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u7740\u5728<code>action</code>\u4E2D\u5B9A\u4E49\u51FD\u6570\u5BF9\u5E94\u7684\u6307\u4EE4\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// src/actions/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { ADD, DELETE } from &#39;../constants/todos&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const add = (data) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data,</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: ADD</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const del = (id) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id,</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: DELETE</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B8C\u6210\u4E0A\u8FF0\u4E09\u6B65\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 Todos \u5E94\u7528\u7684\u4E3B\u9875\u4F7F\u7528\u76F8\u5E94<code>action</code>\u4FEE\u6539\u5E76\u53D6\u5F97\u65B0\u7684<code>store</code>\u6570\u636E\u4E86\u3002\u6765\u770B\u4E00\u773C Todos \u7684<code>index.js</code>\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// src/pages/index/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import Taro, { Component } from &#39;@tarojs/taro&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { View, Input, Text } from &#39;@tarojs/components&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { connect } from &#39;@tarojs/redux&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./index.scss&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { add, del } from &#39;../../actions/index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Index extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  config = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    navigationBarTitleText: &#39;\u9996\u9875&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    super ()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      newTodo: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  saveNewTodo (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { newTodo } = this.state</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!e.detail.value || e.detail.value === newTodo) return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">      newTodo: e.detail.value</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  addTodo () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { newTodo } = this.state</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { add } = this.props</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!newTodo) return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    add(newTodo)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">      newTodo: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  delTodo (id) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { del } = this.props</span></span>
<span class="line"><span style="color:#A6ACCD;">    del(id)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u83B7\u53D6\u672A\u7ECF\u5904\u7406\u7684todos\u5E76\u5C55\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { newTodo } = this.state</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { todos, add, del } = this.props  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const todosJsx = todos.map(todo =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;View className=&#39;todos_item&#39;&gt;&lt;Text&gt;{todo.text}&lt;/Text&gt;&lt;View className=&#39;del&#39; onClick={this.delTodo.bind(this, todo.id)}&gt;-&lt;/View&gt;&lt;/View&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;View className=&#39;index todos&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;View className=&#39;add_wrap&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;Input placeholder=&quot;\u586B\u5199\u65B0\u7684todo&quot; onBlur={this.saveNewTodo.bind(this)} value={newTodo} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;View className=&#39;add&#39; onClick={this.addTodo.bind(this)}&gt;+&lt;/View&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/View&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;View&gt;{ todosJsx }&lt;/View&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/View&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default connect (({ todos }) =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">  todos: todos.todos</span></span>
<span class="line"><span style="color:#A6ACCD;">}), (dispatch) =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">  add (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatch(add(data))</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  del (id) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatch(del(id))</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}))(Index)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u6765\u770B\u4E00\u773C\u5B9E\u73B0\u7684\u6548\u679C\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/8/16651819b8f1255c~tplv-t2oaga2asx-image.image" alt="todos"></p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u7AE0\u6211\u4EEC\u7ED3\u5408 Redux \u4E30\u5BCC\u4E86\u4E00\u4E2A Todolist\uFF0C\u901A\u8FC7\u68B3\u7406\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\uFF0C\u89C4\u5212 Todolist \u529F\u80FD\uFF0C\u518D\u7EC6\u5316\u5230\u6BCF\u4E00\u4E2A\u6587\u4EF6\u7684\u5177\u4F53\u4EE3\u7801\uFF0C\u8BA9\u8BFB\u8005\u4EEC\u6DF1\u5165\u6D45\u51FA\u5730\u4E86\u89E3\u5230\u5982\u4F55\u5728 Taro \u5185\u7ED3\u5408 Redux \u5F00\u53D1\u5E94\u7528\u3002</p><p>\u8BDA\u7136\uFF0C\u8BE5\u6587\u53EA\u662F\u63D0\u4F9B\u4E00\u79CD\u9009\u578B\u5EFA\u8BAE\uFF0C\u662F\u5426\u9700\u8981\u5728\u5E94\u7528\u4E2D\u4F7F\u7528\u72B6\u6001\u7BA1\u7406\u6846\u67B6\uFF0C\u662F\u5426\u9009\u7528 Redux \u4F5C\u4E3A\u5E94\u7528\u7684\u72B6\u6001\u7BA1\u7406\u6846\u67B6\uFF0C\u8FD8\u9700\u8981\u5177\u4F53\u95EE\u9898\u5177\u4F53\u5206\u6790\u3002\u5982\u679C\u4F60\u662F\u5728\u642D\u5EFA\u7C7B\u4F3C\u5546\u57CE\u8FD9\u6837\u7684\u5927\u578B\u5E94\u7528\uFF0C\u6211\u4EEC\u975E\u5E38\u5EFA\u8BAE\u4F60\u91C7\u7528 Redux \u7BA1\u7406\u6570\u636E\u72B6\u6001\uFF0C\u800C\u8B6C\u5982\u5F00\u53D1\u5355\u9875\u5E94\u7528\u8FD9\u7C7B\u5C0F\u578B\u7684\u7AD9\u70B9\uFF0C\u4F7F\u7528 Redux \u5219\u6709\u53EF\u80FD\u4F1A\u589E\u52A0\u4F60\u7684\u5DE5\u4F5C\u91CF\u54E6\u3002</p>`,35),o=[e];function c(t,r,A,i,C,d){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{y as __pageData,u as default};
