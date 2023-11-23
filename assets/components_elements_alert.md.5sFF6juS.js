import{_ as i,C as o,o as u,c as d,H as s,w as a,k as t,a as n,Q as _}from"./chunks/framework.EjHcbFcd.js";const f={data(){return{icon:!0,closable:!0}}},V=JSON.parse('{"title":"Alert","description":"","frontmatter":{},"headers":[],"relativePath":"components/elements/alert.md","filePath":"components/elements/alert.md"}'),g=t("h1",{id:"alert",tabindex:"-1"},[n("Alert "),t("a",{class:"header-anchor",href:"#alert","aria-label":'Permalink to "Alert"'},"​")],-1),m=t("blockquote",null,[t("p",null,"Display an alert element to draw attention.")],-1),v=t("h2",{id:"examples",tabindex:"-1"},[n("Examples "),t("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1),h=t("p",null,"Use any of the available button types to quickly create a styled button.",-1),D=t("span",{class:"sr-only"},"Info",-1),b=_(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;">&gt;Default&lt;/</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;">&gt;Default&lt;/</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dark&quot;</span><span style="color:#E1E4E8;">&gt;Default&lt;/</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;">&gt;Default&lt;/</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;">&gt;Default&lt;/</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;warning&quot;</span><span style="color:#E1E4E8;">&gt;Default&lt;/</span><span style="color:#85E89D;">v-alert</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;">&gt;Default&lt;/</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;">&gt;Default&lt;/</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dark&quot;</span><span style="color:#24292E;">&gt;Default&lt;/</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;">&gt;Default&lt;/</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;">&gt;Default&lt;/</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;warning&quot;</span><span style="color:#24292E;">&gt;Default&lt;/</span><span style="color:#22863A;">v-alert</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,1),F=t("span",{class:"sr-only"},"Info",-1),q=t("h3",{class:"text-lg font-medium"}," This is a info alert ",-1),C=t("div",{class:"mt-2 mb-4 text-sm"}," More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. ",-1),A={class:"flex"};function k(w,x,B,I,T,N){const e=o("v-icon"),l=o("v-alert"),c=o("DemoContainer"),p=o("v-button"),r=o("DemoContainer2"),E=o("Democontainer2");return u(),d("div",null,[g,m,v,h,s(c,null,{default:a(()=>[s(l,{title:"Information",type:"info"},{icon:a(()=>[s(e,{name:"info",size:"24"}),D]),default:a(()=>[n(" Your account was created 👌 ")]),_:1}),s(l,{icon:"",type:"info",closable:""},{default:a(()=>[n("Info")]),_:1}),s(l,{icon:"",type:"danger",closable:""},{default:a(()=>[n("Danger")]),_:1}),s(l,{icon:"",type:"dark",closable:""},{default:a(()=>[n("Dark")]),_:1}),s(l,{icon:"",type:"success",closable:""},{default:a(()=>[n("Success")]),_:1}),s(l,{icon:"",closable:""},{default:a(()=>[n("Default")]),_:1}),s(l,{icon:"",type:"warning",closable:""},{default:a(()=>[n("Warning")]),_:1})]),_:1}),b,s(r,null,{default:a(()=>[s(l,{type:"danger"},{default:a(()=>[n("New")]),_:1}),s(l,{closable:"",icon:"",type:"info"},{default:a(()=>[n(" Info ")]),_:1}),s(l,{type:"info"},{icon:a(()=>[s(e,{name:"info",size:"24"}),F]),title:a(()=>[q]),default:a(({onCloseClick:y})=>[C,t("div",A,[s(p,null,{default:a(()=>[s(e,{name:"view"}),n("View more")]),_:1}),s(p,{onClick:y},{default:a(()=>[n("Dismiss")]),_:2},1032,["onClick"])])]),_:1}),s(l,{border:"",closable:"",type:"info"},{default:a(()=>[n(" Info alert! Change a few things up and try submitting again. ")]),_:1})]),_:1}),s(E,null,{default:a(()=>[s(l,{type:"succes",closable:"",title:"Succes",icon:""},{default:a(()=>[n(" Info ")]),_:1}),s(l,{type:"info",closable:""},{default:a(()=>[n("Your account was created 👌")]),_:1})]),_:1})])}const P=i(f,[["render",k]]);export{V as __pageData,P as default};
