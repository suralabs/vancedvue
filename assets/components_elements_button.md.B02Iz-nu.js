import{_ as d,C as p,o as i,c as u,H as t,w as a,k as o,a as e,Q as r}from"./chunks/framework.EjHcbFcd.js";const T=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"components/elements/button.md","filePath":"components/elements/button.md"}'),E={name:"components/elements/button.md"},y=o("h1",{id:"button",tabindex:"-1"},[e("Button "),o("a",{class:"header-anchor",href:"#button","aria-label":'Permalink to "Button"'},"​")],-1),h=o("blockquote",null,[o("p",null,"Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.")],-1),b=o("h2",{id:"examples",tabindex:"-1"},[e("Examples "),o("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1),f=o("p",null,"Use any of the available button types to quickly create a styled button.",-1),_=r(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variant</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;">&gt;Default&lt;/</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variant</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;alternative&quot;</span><span style="color:#E1E4E8;">&gt;alternative&lt;/</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variant</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dark&quot;</span><span style="color:#E1E4E8;">&gt;dark&lt;/</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variant</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;green&quot;</span><span style="color:#E1E4E8;">&gt;green&lt;/</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variant</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;red&quot;</span><span style="color:#E1E4E8;">&gt;red&lt;/</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variant</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;yellow&quot;</span><span style="color:#E1E4E8;">&gt;yellow&lt;/</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variant</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;purple&quot;</span><span style="color:#E1E4E8;">&gt;purple&lt;/</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variant</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pink&quot;</span><span style="color:#E1E4E8;">&gt;pink&lt;/</span><span style="color:#85E89D;">v-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variant</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;">&gt;Default&lt;/</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variant</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;alternative&quot;</span><span style="color:#24292E;">&gt;alternative&lt;/</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variant</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dark&quot;</span><span style="color:#24292E;">&gt;dark&lt;/</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variant</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;green&quot;</span><span style="color:#24292E;">&gt;green&lt;/</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variant</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">&gt;red&lt;/</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variant</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;yellow&quot;</span><span style="color:#24292E;">&gt;yellow&lt;/</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variant</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;purple&quot;</span><span style="color:#24292E;">&gt;purple&lt;/</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variant</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pink&quot;</span><span style="color:#24292E;">&gt;pink&lt;/</span><span style="color:#22863A;">v-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><h2 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-label="Permalink to &quot;Sizes&quot;">​</a></h2>`,3),m=o("h2",{id:"colors",tabindex:"-1"},[e("Colors "),o("a",{class:"header-anchor",href:"#colors","aria-label":'Permalink to "Colors"'},"​")],-1),v=o("h2",{id:"colors-1",tabindex:"-1"},[e("Colors "),o("a",{class:"header-anchor",href:"#colors-1","aria-label":'Permalink to "Colors"'},"​")],-1),k=o("h2",{id:"icon",tabindex:"-1"},[e("Icon "),o("a",{class:"header-anchor",href:"#icon","aria-label":'Permalink to "Icon"'},"​")],-1),g=o("h2",{id:"prefix-sufix-icon",tabindex:"-1"},[e("prefix-sufix icon "),o("a",{class:"header-anchor",href:"#prefix-sufix-icon","aria-label":'Permalink to "prefix-sufix icon"'},"​")],-1),q=r('<h2 id="active-state" tabindex="-1">Active state <a class="header-anchor" href="#active-state" aria-label="Permalink to &quot;Active state&quot;">​</a></h2><h2 id="disabled-state" tabindex="-1">Disabled state <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled state&quot;">​</a></h2><h2 id="checkbox-radio" tabindex="-1">Checkbox / Radio <a class="header-anchor" href="#checkbox-radio" aria-label="Permalink to &quot;Checkbox / Radio&quot;">​</a></h2><h3 id="checkbox-example" tabindex="-1">Checkbox example <a class="header-anchor" href="#checkbox-example" aria-label="Permalink to &quot;Checkbox example&quot;">​</a></h3><h3 id="radio-example" tabindex="-1">Radio example <a class="header-anchor" href="#radio-example" aria-label="Permalink to &quot;Radio example&quot;">​</a></h3><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="btn" tabindex="-1"><a href="https://github.com/suralabs/vancedvue/blob/1.x/src/components/button/v-button.js" target="_blank" rel="noreferrer">Btn</a> <a class="header-anchor" href="#btn" aria-label="Permalink to &quot;[Btn](https://github.com/suralabs/vancedvue/blob/1.x/src/components/button/v-button.js)&quot;">​</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h4><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td>String</td><td>default</td><td></td><td>Supported: <code>default</code>, <code>alternative</code>, <code>dark</code>, <code>light</code>, <code>green</code>, <code>red</code>, <code>link</code>.</td></tr><tr><td><code>type</code></td><td>String</td><td>button</td><td></td><td>Native button type. Supported: <code>button</code>, <code>submit</code>, <code>reset</code>.</td></tr><tr><td><code>class</code></td><td>String</td><td></td><td></td><td>Native button type. Supported: <code>button</code>, <code>submit</code>, <code>reset</code>.</td></tr><tr><td><code>label</code></td><td></td><td></td><td></td><td></td></tr><tr><td><code>disabled</code></td><td></td><td></td><td></td><td></td></tr></tbody></table><h4 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>The button body.</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h4><table><thead><tr><th>Name</th><th>Params</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td></td><td>Click event of button / link.</td></tr></tbody></table>',13);function x(D,C,F,P,A,B){const s=p("v-button"),n=p("DemoContainer2"),c=p("DemoContainer"),l=p("v-icon");return i(),u("div",null,[y,h,b,f,t(n,null,{default:a(()=>[t(s,{color:"default"},{default:a(()=>[e("Default")]),_:1}),t(s,{color:"alternative"},{default:a(()=>[e("Alternative")]),_:1}),t(s,{color:"dark"},{default:a(()=>[e("Dark")]),_:1}),t(s,{color:"green"},{default:a(()=>[e("Green")]),_:1}),t(s,{color:"red"},{default:a(()=>[e("Red")]),_:1}),t(s,{color:"yellow"},{default:a(()=>[e("Yellow")]),_:1}),t(s,{color:"purple"},{default:a(()=>[e("Purple")]),_:1}),t(s,{color:"pink"},{default:a(()=>[e("Pink")]),_:1})]),_:1}),_,t(c,null,{default:a(()=>[t(s,{size:"xs"},{default:a(()=>[e("Default")]),_:1}),t(s,{size:"sm"},{default:a(()=>[e("Default")]),_:1}),t(s,{size:"md"},{default:a(()=>[e("Default")]),_:1}),t(s,{size:"lg"},{default:a(()=>[e("Default")]),_:1}),t(s,{size:"xl"},{default:a(()=>[e("Default")]),_:1})]),_:1}),m,t(n,null,{default:a(()=>[t(s,{color:"default",pill:""},{default:a(()=>[e("Default")]),_:1}),t(s,{color:"alternative",pill:""},{default:a(()=>[e("Alternative")]),_:1}),t(s,{color:"dark",pill:""},{default:a(()=>[e("Dark")]),_:1}),t(s,{color:"green",pill:""},{default:a(()=>[e("Green")]),_:1}),t(s,{color:"red",pill:""},{default:a(()=>[e("Red")]),_:1}),t(s,{color:"yellow",pill:""},{default:a(()=>[e("Yellow")]),_:1}),t(s,{color:"purple",pill:""},{default:a(()=>[e("Purple")]),_:1}),t(s,{color:"pink",pill:""},{default:a(()=>[e("Pink")]),_:1})]),_:1}),v,t(n,null,{default:a(()=>[t(s,{color:"cyan-blue"},{default:a(()=>[e("cyan-blue")]),_:1}),t(s,{color:"green-blue"},{default:a(()=>[e("green-blue")]),_:1}),t(s,{color:"pink-orange"},{default:a(()=>[e("pink-orange")]),_:1}),t(s,{color:"purple-blue"},{default:a(()=>[e("purple-blue")]),_:1}),t(s,{color:"purple-pink"},{default:a(()=>[e("purple-pink")]),_:1}),t(s,{color:"red-yellow"},{default:a(()=>[e("red-yellow")]),_:1}),t(s,{color:"teal-lime"},{default:a(()=>[e("teal-lime")]),_:1})]),_:1}),k,t(n,null,{default:a(()=>[t(s,{color:"cyan-blue"},{default:a(()=>[t(l,{name:"video"})]),_:1}),t(s,{color:"green-blue"},{default:a(()=>[t(l,{name:"edit"})]),_:1}),t(s,{color:"pink-orange"},{default:a(()=>[t(l,{name:"verify"})]),_:1}),t(s,{color:"purple-blue"},{default:a(()=>[t(l,{name:"comment"})]),_:1}),t(s,{color:"purple-pink"},{default:a(()=>[t(l,{name:"send"})]),_:1}),t(s,{color:"red-yellow"},{default:a(()=>[t(l,{name:"friends"})]),_:1}),t(s,{color:"teal-lime"},{default:a(()=>[t(l,{name:"analytics"})]),_:1})]),_:1}),g,t(n,null,{default:a(()=>[t(s,{class:"flex",color:"cyan-blue"},{prefix:a(()=>[t(l,{name:"video"})]),default:a(()=>[e(" Video ")]),_:1}),t(s,{class:"flex",color:"purple-pink"},{suffix:a(()=>[t(l,{name:"comment"})]),default:a(()=>[e(" Comments ")]),_:1})]),_:1}),q])}const w=d(E,[["render",x]]);export{T as __pageData,w as default};
