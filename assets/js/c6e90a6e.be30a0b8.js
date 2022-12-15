"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[1908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?a.createElement(m,s(s({ref:t},h),{},{components:r})):a.createElement(m,s({ref:t},h))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2270:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>i,toc:()=>c,default:()=>h});var a=r(7462),n=(r(7294),r(3905));const o={title:"synthetix searcher"},s=void 0,i={unversionedId:"flashbots-auction/searchers/example-searchers/synthetix-searcher",id:"flashbots-auction/searchers/example-searchers/synthetix-searcher",isDocsHomePage:!1,title:"synthetix searcher",description:"This repo by Bert Miller contains a searcher developed to take advantage of a 1 off MEV opportunity created by the Synthetix team deprecating their ETH collateral trial program. As a result of this there were many loans that would be liquidatable after the governance proposal was executed. Taking advantage of this required a bot that could backrun the governance proposal execution transaction from the mempool as well as monitoring and execution infrastructure - all of which is contained here.",source:"@site/docs/flashbots-auction/searchers/example-searchers/synthetix-searcher.md",sourceDirName:"flashbots-auction/searchers/example-searchers",slug:"/flashbots-auction/searchers/example-searchers/synthetix-searcher",permalink:"/flashbots-auction/searchers/example-searchers/synthetix-searcher",tags:[],version:"current",frontMatter:{title:"synthetix searcher"},sidebar:"docs",previous:{title:"searcher minter",permalink:"/flashbots-auction/searchers/example-searchers/searcher-minter"},next:{title:"golang provider",permalink:"/flashbots-auction/searchers/libraries/golang"}},c=[],l={toc:c};function h({components:e,...t}){return(0,n.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This repo by ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/bertcmiller"},"Bert Miller")," contains a searcher developed to take advantage of a 1 off MEV opportunity created by the Synthetix team deprecating their ETH collateral trial program. As a result of this there were many loans that would be liquidatable after the governance proposal was executed. Taking advantage of this required a bot that could backrun the governance proposal execution transaction from the mempool as well as monitoring and execution infrastructure - all of which is contained here."),(0,n.kt)("p",null,"An accompanying blog post talking through the process of writing this bot and its strategy can be found ",(0,n.kt)("a",{parentName:"p",href:"https://bertcmiller.com/2021/09/05/mev-synthetix.html"},"on Bert Miller's website"),". This is highly recommended to understand the thought process and design decisions behind this repo."),(0,n.kt)("p",null,"Access the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bertmiller/sMEV"},"synthetix searcher repository here"),"."))}h.isMDXComponent=!0}}]);