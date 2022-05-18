"use strict";(self.webpackChunkinfopackages=self.webpackChunkinfopackages||[]).push([[658],{7678:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=t(7896),a=t(1461),s=(t(2784),t(876)),i=["components"],o={id:"classnames-api-reference",title:"API Reference",description:"Detailed overview of the provided functions.",sidebar_position:2},c="API Reference",l={unversionedId:"packages/classnames/classnames-api-reference",id:"packages/classnames/classnames-api-reference",title:"API Reference",description:"Detailed overview of the provided functions.",source:"@site/docs/packages/classnames/2-api-reference.md",sourceDirName:"packages/classnames",slug:"/packages/classnames/classnames-api-reference",permalink:"/docs/packages/classnames/classnames-api-reference",draft:!1,editUrl:"https://github.com/Infotition/infopackages/docs/packages/classnames/2-api-reference.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"classnames-api-reference",title:"API Reference",description:"Detailed overview of the provided functions.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/packages/classnames/classnames-getting-started"}},p={},u=[{value:"classNames",id:"classnames",level:2}],f={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"api-reference"},"API Reference"),(0,s.kt)("h2",{id:"classnames"},"classNames"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"\ud83c\udfc3\u200d\u2642\ufe0f ",(0,s.kt)("inlineCode",{parentName:"p"},"classNames(classes: (string | boolean)[]): string")),(0,s.kt)("hr",null),(0,s.kt)("p",null,'Gets any number of strings as input and returns the strings as a combined one. If a boolean was provided, it will just be skipped. This is useful for the conditionally && shortcut without cluttering the class name string with "false" values.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { classNames } from '@infotition/classnames';\nclassNames(6 > 5 && 'foo', 'bar', 5 > 6 && 'infotition'); // => 'foo bar'\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"classes: ",(0,s.kt)("inlineCode",{parentName:"li"},"(string | boolean)[]"),"\nA list of classes which should get combined. If a boolean is also provided, it will just be ignored.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns")," ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"\nThe provided classes combined to one string separated by empty spaces."))}m.isMDXComponent=!0},876:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||s;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);