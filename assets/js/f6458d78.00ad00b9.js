"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){var t,n,i=e.lazy,c=e.block,m=e.defaultValue,d=e.values,h=e.groupId,w=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.U)(),v=g.tabGroupChoices,x=g.setTabGroupChoices,C=(0,r.useState)(b),q=C[0],N=C[1],T=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=v[h];null!=j&&j!==q&&f.some((function(e){return e.value===j}))&&N(j)}var O=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==q&&(E(t),N(a),null!=h&&x(h,String(a)))},S=function(e){var t,n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var l,i=T.indexOf(e.currentTarget)-1;n=null!=(l=T[i])?l:T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},w)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return T.push(e)},onKeyDown:S,onClick:O},i,{className:(0,l.Z)("tabs__item",p.tabItem,null==i?void 0:i.className,{"tabs__item--active":q===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(y.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},4959:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),r=n(9960),l=n(4477),i=n(2263),o=n(643).version.split("."),s=[o[0],o[1]].join(".");const u=function(e){var t=e.to,n=e.children,o=(0,l.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===s?a.createElement(r.default,{to:"/api/"+t},n):a.createElement(r.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t},n)}},2962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>w,default:()=>v,frontMatter:()=>h,metadata:()=>y,toc:()=>k});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(5488),o=n(5162),s=n(1435),u=n(4959);const p="import { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'all' will enqueue all links found\n            // highlight-next-line\n            strategy: EnqueueStrategy.All,\n            // Alternatively, you can pass in the string 'all'\n            // strategy: 'all',\n        });\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",c="import { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'same-domain' will enqueue all links found that are on the\n            // same hostname as request.loadedUrl or request.url\n            // highlight-next-line\n            strategy: EnqueueStrategy.SameDomain,\n            // Alternatively, you can pass in the string 'same-domain'\n            // strategy: 'same-domain',\n        });\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",m="import { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'same-hostname' will enqueue all links found that are on the\n            // same hostname (including subdomain) as request.loadedUrl or request.url\n            // highlight-next-line\n            strategy: EnqueueStrategy.SameHostname,\n            // Alternatively, you can pass in the string 'same-hostname'\n            // strategy: 'same-hostname',\n        });\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n";var d=["components"],h={id:"crawl-relative-links",title:"Crawl a website with relative links"},w=void 0,y={unversionedId:"examples/crawl-relative-links",id:"examples/crawl-relative-links",title:"Crawl a website with relative links",description:"When crawling a website, you may encounter different types of links present that you may want to crawl.",source:"@site/../docs/examples/crawl_relative_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-relative-links",permalink:"/docs/next/examples/crawl-relative-links",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1676059088,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"crawl-relative-links",title:"Crawl a website with relative links"},sidebar:"docs",previous:{title:"Crawl multiple URLs",permalink:"/docs/next/examples/crawl-multiple-urls"},next:{title:"Crawl a single URL",permalink:"/docs/next/examples/crawl-single-url"}},f={},k=[],b={toc:k},g="wrapper";function v(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When crawling a website, you may encounter different types of links present that you may want to crawl.\nTo facilitate the easy crawling of such links, we provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," method on the crawler context, which will\nautomatically find links and add them to the crawler's ",(0,l.kt)(u.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"RequestQueue")),"."),(0,l.kt)("p",null,"We provide 3 different strategies for crawling relative links:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#All",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"All")," (or the string ",(0,l.kt)("inlineCode",null,'"all"'),")")," which will enqueue all links found, regardless of the domain they point to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#SameHostname",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"SameHostname")," (or the string ",(0,l.kt)("inlineCode",null,'"same-hostname"'),")")," which will enqueue all links found for the same hostname. This is the default strategy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#SameDomain",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"SameDomain")," (or the string ",(0,l.kt)("inlineCode",null,'"same-domain"'),")")," which will enqueue all links found that have the same domain name, including links from any possible subdomain.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For these examples, we are using the ",(0,l.kt)(u.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),", however\nthe same method is available for both the ",(0,l.kt)(u.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),"\nand ",(0,l.kt)(u.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),", and you use it\nthe exact same way.")),(0,l.kt)(i.Z,{groupId:"enqueue_strategy",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"all",label:"All Links",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Example domains",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Any urls found will be matched by this strategy, even if they go off of the site you are currently crawling.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},p)),(0,l.kt)(o.Z,{value:"same_hostname",label:"Same Hostname",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Example domains",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For a url of ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," will match relative urls and urls that point to the same\nhostname."),(0,l.kt)("blockquote",{parentName:"admonition"},(0,l.kt)("p",{parentName:"blockquote"},"This is the default strategy when calling ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()"),", so you don't have to specify it.")),(0,l.kt)("p",{parentName:"admonition"},"For instance, hyperlinks like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com/some/path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/absolute/example")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"./relative/example")," will all be matched by this strategy. But links to any subdomain like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com/some/path")," won't.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},m)),(0,l.kt)(o.Z,{value:"same-subdomain",label:"Same Subdomain",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Example domains",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For a url of ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," will match relative urls or urls that point to the same domain name, regardless of their subdomain."),(0,l.kt)("p",{parentName:"admonition"},"For instance, hyperlinks like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com/some/path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/absolute/example")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"./relative/example")," will all be matched by this strategy, as well as links to other subdomains or to the naked domain, like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://other-subdomain.example.com")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com")," will work too.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},c))))}v.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.2.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.2.2","@crawlee/browser":"^3.2.2","@crawlee/cheerio":"^3.2.2","@crawlee/cli":"^3.2.2","@crawlee/core":"^3.2.2","@crawlee/http":"^3.2.2","@crawlee/jsdom":"^3.2.2","@crawlee/playwright":"^3.2.2","@crawlee/puppeteer":"^3.2.2","@crawlee/utils":"^3.2.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);