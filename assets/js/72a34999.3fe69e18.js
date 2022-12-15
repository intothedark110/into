"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8338:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>i,toc:()=>l,default:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"private transaction status API"},s=void 0,i={unversionedId:"flashbots-protect/rpc/status-api",id:"flashbots-protect/rpc/status-api",isDocsHomePage:!1,title:"private transaction status API",description:"Transactions that you submit to Flashbots Protect won't be observable in the public mempool. However, you can use our status API to check the status of your transactions. The URL for doing so is//protect.flashbots.net/tx/YOURTXHASH_HERE, and you can also use Etherscan as you normally would for transactions. They will show the status of your transaction from the status API as well.",source:"@site/docs/flashbots-protect/rpc/status-api.md",sourceDirName:"flashbots-protect/rpc",slug:"/flashbots-protect/rpc/status-api",permalink:"/flashbots-protect/rpc/status-api",tags:[],version:"current",frontMatter:{title:"private transaction status API"},sidebar:"docs",previous:{title:"uncle bandit risk",permalink:"/flashbots-protect/rpc/uncle-bandits"},next:{title:"bundle cache API",permalink:"/flashbots-protect/rpc/bundle-cache"}},l=[{value:"Potential statuses",id:"potential-statuses",children:[]},{value:"Privacy",id:"privacy",children:[]}],c={toc:l};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Transactions that you submit to Flashbots Protect won't be observable in the public mempool. However, you can use our status API to check the status of your transactions. The URL for doing so is: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://protect.flashbots.net/tx/YOUR_TX_HASH_HERE"),", and you can also use Etherscan as you normally would for transactions. They will show the status of your transaction from the status API as well."),(0,a.kt)("p",null,"In turn you will receive a JSON response that looks like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "PENDING",\n    "hash": "YOUR_TX_HASH",\n    "maxBlockNumber": 13543898,\n    "transaction": {\n        "from": "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8",\n        "to": "0xac03bb73b6a9e108530aff4df5077c2b3d481e5a",\n        "gasLimit": "21000",\n        "maxFeePerGas": "300",\n        "maxPriorityFeePerGas": "10",\n        "nonce": "41",\n        "value": "10000000000"\n    },\n  "fastMode": true, // for backwards compatibility; may be removed in a future version\n  "seenInMempool": false,\n  "simError": "MaxFeePerGasTooLow"\n}\n')),(0,a.kt)("h2",{id:"potential-statuses"},"Potential statuses"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PENDING")," - The transaction was received and is currently being processed by the block builder"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INCLUDED")," - The transaction was included on-chain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FAILED")," - The transaction was submitted for 25 blocks and failed to be included on-chain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CANCELLED")," - The transaction was cancelled by the user and not included on-chain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UNKNOWN")," - The transaction was not received")),(0,a.kt)("h2",{id:"privacy"},"Privacy"),(0,a.kt)("p",null,"In order to receive a response from the status API you must know and provide a transaction hash to look up. As a result, you are only able to look up transactions which you know about."))}u.isMDXComponent=!0}}]);