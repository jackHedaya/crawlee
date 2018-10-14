"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2456],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(a),m=n,h=s["".concat(p,".").concat(m)]||s[m]||f[m]||i;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8832:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>f,frontMatter:()=>o,toc:()=>c});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={},p=void 0,c=[{value:"3.2.2 (2023-02-08)",id:"322-2023-02-08",level:2},{value:"3.2.1 (2023-02-07)",id:"321-2023-02-07",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3},{value:"3.1.4 (2022-12-14)",id:"314-2022-12-14",level:2},{value:"3.1.3 (2022-12-07)",id:"313-2022-12-07",level:2},{value:"3.1.2 (2022-11-15)",id:"312-2022-11-15",level:2},{value:"3.1.1 (2022-11-07)",id:"311-2022-11-07",level:2},{value:"3.0.4 (2022-08-22)",id:"304-2022-08-22",level:2},{value:"Features",id:"features-1",level:3}],u={toc:c},s="wrapper";function f(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All notable changes to this project will be documented in this file.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://conventionalcommits.org"},"Conventional Commits")," for commit guidelines."),(0,i.kt)("h2",{id:"322-2023-02-08"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.2.1...v3.2.2"},"3.2.2")," (2023-02-08)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/playwright"),(0,i.kt)("h2",{id:"321-2023-02-07"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.2.0...v3.2.1"},"3.2.1")," (2023-02-07)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/playwright"),(0,i.kt)("h1",{id:"320-2023-02-07"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.1.4...v3.2.0"},"3.2.0")," (2023-02-07)"),(0,i.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"allow ",(0,i.kt)("inlineCode",{parentName:"li"},"userData")," option in ",(0,i.kt)("inlineCode",{parentName:"li"},"enqueueLinksByClickingElements")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1749"},"#1749"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/736f85d4a3b99a06d0f99f91e33e71976a9458a3"},"736f85d"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1617"},"#1617")),(0,i.kt)("li",{parentName:"ul"},"declare missing dependency on ",(0,i.kt)("inlineCode",{parentName:"li"},"tslib")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/27e96c80c26e7fc31809a4b518d699573cb8c662"},"27e96c8"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1747"},"#1747")),(0,i.kt)("li",{parentName:"ul"},"update playwright to 1.29.2 and make peer dep. less strict (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1735"},"#1735"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/c654fcdea06fb203b7952ed97650190cc0e74394"},"c654fcd"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1723"},"#1723"))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add ",(0,i.kt)("inlineCode",{parentName:"li"},"forefront")," option to all ",(0,i.kt)("inlineCode",{parentName:"li"},"enqueueLinks")," variants (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1760"},"#1760"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/a01459dffb51162e676354f0aa4811a1d36affa9"},"a01459d"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1483"},"#1483"))),(0,i.kt)("h2",{id:"314-2022-12-14"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.1.3...v3.1.4"},"3.1.4")," (2022-12-14)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/playwright"),(0,i.kt)("h2",{id:"313-2022-12-07"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.1.2...v3.1.3"},"3.1.3")," (2022-12-07)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/playwright"),(0,i.kt)("h2",{id:"312-2022-11-15"},"3.1.2 (2022-11-15)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/playwright"),(0,i.kt)("h2",{id:"311-2022-11-07"},"3.1.1 (2022-11-07)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/playwright"),(0,i.kt)("h1",{id:"310-2022-10-13"},"3.1.0 (2022-10-13)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/playwright"),(0,i.kt)("h2",{id:"304-2022-08-22"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.0.3...v3.0.4"},"3.0.4")," (2022-08-22)"),(0,i.kt)("h3",{id:"features-1"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"enable tab-as-a-container for Firefox (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1456"},"#1456"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/ae5ba4f15fd6d14f444486234753ce1781c74cc8"},"ae5ba4f"),")")))}f.isMDXComponent=!0}}]);