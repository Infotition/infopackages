"use strict";(self.webpackChunkinfopackages=self.webpackChunkinfopackages||[]).push([[658],{7678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7896),s=n(1461),r=(n(2784),n(876)),i=["components"],l={id:"classnames-api-reference",title:"API Reference",description:"Detailed overview of the provided functions.",sidebar_position:2},o="API Reference",c={unversionedId:"packages/classnames/classnames-api-reference",id:"packages/classnames/classnames-api-reference",title:"API Reference",description:"Detailed overview of the provided functions.",source:"@site/docs/packages/classnames/2-api-reference.md",sourceDirName:"packages/classnames",slug:"/packages/classnames/classnames-api-reference",permalink:"/infopackages/packages/classnames/classnames-api-reference",draft:!1,editUrl:"https://github.com/Infotition/infopackages/docs/packages/classnames/2-api-reference.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"classnames-api-reference",title:"API Reference",description:"Detailed overview of the provided functions.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/infopackages/packages/classnames/classnames-getting-started"},next:{title:"Components",permalink:"/infopackages/category/components"}},p={},u=[{value:"Functions",id:"functions",level:2},{value:"\ud83c\udfc3\u200d\u2642\ufe0f classNames",id:"\ufe0f-classnames",level:3},{value:"Types",id:"types",level:2},{value:"\ud83d\udccb ClassElement",id:"-classelement",level:3},{value:"\ud83d\udccb ClassObject",id:"-classobject",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-reference"},"API Reference"),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"\ufe0f-classnames"},"\ud83c\udfc3\u200d\u2642\ufe0f classNames"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"classNames(classes: ClassElement[]): string")),(0,r.kt)("hr",null),(0,r.kt)("p",null,'Gets any number of strings as input and returns the strings as a combined one. If a boolean was provided, it will just be skipped. This is useful for the conditionally && shortcut without cluttering the class name string with "false" values.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { classNames } from '@infotition/classnames';\nclassNames(6 > 5 && 'foo', 'bar', 5 > 6 && 'infotition'); // => 'foo bar'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"classes: ",(0,r.kt)("inlineCode",{parentName:"li"},"ClassElement[]"),"\nA list of classes which should get combined. If a boolean is also provided, it will just be ignored.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\nThe provided classes combined to one string separated by empty spaces."),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("h3",{id:"-classelement"},"\ud83d\udccb ClassElement"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClassElement = string | boolean | undefined | ClassObject")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Represents the type a class element can be. These types force different combining behavior:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),": The value gets added to the resulting class list."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),": The value just gets ignored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClassObject"),": The names of the keys gets added to the class list, if the corresponding value is truly.")),(0,r.kt)("h3",{id:"-classobject"},"\ud83d\udccb ClassObject"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClassObject = { [key: string]: boolean }")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassObject")," is a map containing string keys with booleans as values. The keys represent the classnames which should\nget added to the resulting class list, if the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."))}f.isMDXComponent=!0},876:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(2784);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=s,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);