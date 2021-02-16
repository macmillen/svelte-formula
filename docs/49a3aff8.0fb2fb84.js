(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var i=n(3),l=n(7),a=(n(0),n(88)),u={id:"fields-input-text",title:"Input: Text",sidebar_label:"Input: Text"},r={unversionedId:"fields-input-text",id:"fields-input-text",isDocsHomePage:!1,title:"Input: Text",description:'- Element &lt;input type="text">',source:"@site/docs/fields-input-text.md",slug:"/fields-input-text",permalink:"/docs/fields-input-text",version:"current",sidebar_label:"Input: Text",sidebar:"someSidebar",previous:{title:"Formula Stores",permalink:"/docs/stores"},next:{title:"Input: Email",permalink:"/docs/fields-input-email"}},p=[{value:"Single Value",id:"single-value",children:[]},{value:"Multi Value",id:"multi-value",children:[]}],d={toc:p};function o(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Element ",Object(a.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text"},"<",'input type="text">'))),Object(a.b)("h2",{id:"single-value"},"Single Value"),Object(a.b)("h4",{id:"required-properties"},"Required Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"name")," - The name of the item should be set"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"type")," - Type should be ",Object(a.b)("inlineCode",{parentName:"li"},"email"))),Object(a.b)("h4",{id:"returned-type"},"Returned Type"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"String")),Object(a.b)("h4",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"<script>\n  import { formula } from 'svelte-formula';\n  const { form, touched, validity } = formula();\n<\/script>\n\n<form use:form>\n  <label for='text-input'>Text Input</label>\n  <input type='text' required id='text-input' name='textvalue'\n         class:error={$touched?.textvalue && $validity?.textvalue?.invalid} />\n  <span hidden={$validity?.textvalue?.valid}>{$validity?.textvalue?.message}</span>\n</form>\n")),Object(a.b)("h2",{id:"multi-value"},"Multi Value"),Object(a.b)("h4",{id:"required-properties-1"},"Required Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"name")," - The name of the item should be set"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"id")," - A unique ID for the value"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"type")," - Type should be ",Object(a.b)("inlineCode",{parentName:"li"},"email"))),Object(a.b)("h4",{id:"returned-type-1"},"Returned Type"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Array of Strings")),Object(a.b)("h4",{id:"example-1"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"<script>\n  import { formula } from 'svelte-formula';\n  const { form, touched, validity } = formula();\n<\/script>\n\n<form use:form>\n  <label for='text-input-1'>Text Input 1</label>\n  <input type='text' required id='text-input-1' name='textvalue'\n         class:error={$touched?.textvalue && $validity?.textvalue?.invalid} />\n\n  <label for='text-input-2'>Text Input 2</label>\n  <input type='text' required id='text-input-2' name='textvalue'\n         class:error={$touched?.textvalue && $validity?.textvalue?.invalid} />\n\n  <span hidden={$validity?.textvalue?.valid}>{$validity?.textvalue?.message}</span>\n</form>\n")))}o.isMDXComponent=!0}}]);