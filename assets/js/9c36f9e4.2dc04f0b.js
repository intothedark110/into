"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[3497],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,toc:()=>l,default:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={title:"codebase - design"},o=void 0,s={unversionedId:"flashbots-data/deprecated/mev-inspect-rs/inspect-codebase-design",id:"flashbots-data/deprecated/mev-inspect-rs/inspect-codebase-design",isDocsHomePage:!1,title:"codebase - design",description:"mev-inspect aims to quantify a lower bound of MEV extracted on Ethereum from txs such as arbitrage and liquidations. The profits are denominated in Ether and for cases where the reward is extracted in a non-ETH token, we query the historical price (via uniswap) and convert it accordingly. Additionally, we also count as MEV txs transactions with failed arb attempts and liquidation checks (where they might decide to check if the position is still liquidatable and halt accordingly) as they still end up paying the miner a gas fee.",source:"@site/docs/flashbots-data/deprecated/mev-inspect-rs/inspect-codebase-design.md",sourceDirName:"flashbots-data/deprecated/mev-inspect-rs",slug:"/flashbots-data/deprecated/mev-inspect-rs/inspect-codebase-design",permalink:"/flashbots-data/deprecated/mev-inspect-rs/inspect-codebase-design",tags:[],version:"current",frontMatter:{title:"codebase - design"}},l=[{value:"tracing:",id:"tracing",children:[]}],c={toc:l};function d({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"mev-inspect aims to quantify a lower bound of MEV extracted on Ethereum from txs such as arbitrage and liquidations. The profits are denominated in Ether and for cases where the reward is extracted in a non-ETH token, we query the historical price (via uniswap) and convert it accordingly. Additionally, we also count as MEV txs transactions with failed arb attempts and liquidation checks (where they might decide to check if the position is still liquidatable and halt accordingly) as they still end up paying the miner a gas fee."),(0,r.kt)("p",null,"Components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inspectors",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Examines transactions to see if they belong to a relevant protocol we\'re interested in\nare "parsers" that know how a given contract is set up, and are able to extract necessary fields'))),(0,r.kt)("li",{parentName:"ul"},"Reducers and Processor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Goes through the relavent fields to check for MEV, quantify/identify them, and store it into the ",(0,r.kt)("inlineCode",{parentName:"li"},"mev-inspections")," table of the database")))),(0,r.kt)("p",null,"Protocols supported (as defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/inspectors"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uniswap (+ forks with shared ABI)"),(0,r.kt)("li",{parentName:"ul"},"Balancer"),(0,r.kt)("li",{parentName:"ul"},"Curve"),(0,r.kt)("li",{parentName:"ul"},"0x"),(0,r.kt)("li",{parentName:"ul"},"Aave"),(0,r.kt)("li",{parentName:"ul"},"Compound"),(0,r.kt)("li",{parentName:"ul"},"DyDx")),(0,r.kt)("p",null,"Action types stored (as defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/reducers"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arbitrage"),(0,r.kt)("li",{parentName:"ul"},"Liquidations",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Including LiquidationCheck"))),(0,r.kt)("li",{parentName:"ul"},"Trades",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We store trades even if they're not a complete arb in order to identify arb captured across multiple transactions in subsequent blocks"))),(0,r.kt)("li",{parentName:"ul"},"AddLiquidity"),(0,r.kt)("li",{parentName:"ul"},"WETH deposits/withdrawals"),(0,r.kt)("li",{parentName:"ul"},"Token Transfers")),(0,r.kt)("h3",{id:"tracing"},"tracing:"),(0,r.kt)("p",null,"Direct ETH/token transfers, trades routed through an aggregator or a router are trivial to parse/filter (by looking at the tx input data + receipts) but contract interactions (which bots often employ) can be complex to identify. Transaction tracing allows us to dig deeper into the tx execution cycle to look through the state changes, internal calls and additional proxy contracts the tx interacts with. mev-inspect uses OpenEthereum archive node traces with the following types (by action_type):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Call"),", which happens when a method on the same contract or a different one is executed. We can identify the input parameters in each instance by looking at this trace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Self-destruct"),", when a arbitrage contract destroys the code at its address and transfers the ETH held in the contract to an EOA. Common pattern among searchers given gas refunds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Create"),", when a contract deploys another contract (and potentially transfers assets to it)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Reward"),", pertaining to the block reward and uncle reward.")),(0,r.kt)("p",null,"On proxy implementation:"),(0,r.kt)("p",null,"Aside from the eoa that initiates the transaction and the recepient (which can be another eoa or a contract), we are also interested in identifying any proxy implementations used during MEV extraction. We do that by iterating over the traces to find delegate calls originating from the contract to any other proxy implementations."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/7cde2d066ebfa7c38adc324dc955e42278fa114d253d3804f3f85d20f7ace39a/68747470733a2f2f692e696d6775722e636f6d2f30564a694562762e706e67",alt:"delegate_call_illustration"})),(0,r.kt)("p",null,"More on delegate calls ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/coinmonks/delegatecall-calling-another-contract-function-in-solidity-b579f804178c"},"here")),(0,r.kt)("p",null,"Deeper dive into the rust implementation specifics ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/worldveil/mev-inspect-rs/blob/master/NOTES.md"},"here")))}d.isMDXComponent=!0}}]);