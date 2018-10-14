"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>w});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,w=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(w,o(o({ref:t},c),{},{components:r})):a.createElement(w,o({ref:t},c))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4959:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(7294),n=r(9960),i=r(4477),o=r(2263),l=r(643).version.split("."),s=[l[0],l[1]].join(".");const p=function(e){var t=e.to,r=e.children,l=(0,i.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===s?a.createElement(n.default,{to:"/api/"+t},r):a.createElement(n.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},r)}},2005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=r(4959),l=["components"],s={id:"jsdom-crawler-guide",title:"JSDOMCrawler guide",sidebar_label:"JSDOMCrawler",description:"Your first steps into the world of scraping with Crawlee"},p=void 0,c={unversionedId:"guides/jsdom-crawler-guide",id:"version-3.2/guides/jsdom-crawler-guide",title:"JSDOMCrawler guide",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.2/guides/jsdom_crawler.mdx",sourceDirName:"guides",slug:"/guides/jsdom-crawler-guide",permalink:"/docs/guides/jsdom-crawler-guide",draft:!1,tags:[],version:"3.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1676059088,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"jsdom-crawler-guide",title:"JSDOMCrawler guide",sidebar_label:"JSDOMCrawler",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Avoid getting blocked",permalink:"/docs/guides/avoid-blocking"},next:{title:"Got Scraping",permalink:"/docs/guides/got-scraping"}},d={},u=[{value:"How the crawler works",id:"how-the-crawler-works",level:2},{value:"When to use <code>JSDOMCrawler</code>",id:"when-to-use-jsdomcrawler",level:2},{value:"Example use of Element API",id:"example-use-of-element-api",level:2},{value:"Find all links on a page",id:"find-all-links-on-a-page",level:3},{value:"Other examples",id:"other-examples",level:3}],m={toc:u},w="wrapper";function h(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(w,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u200b",(0,i.kt)(o.Z,{to:"jsdom-crawler/class/JSDOMCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler"))," is very useful for scraping with the Window API."),(0,i.kt)("h2",{id:"how-the-crawler-works"},"How the crawler works"),(0,i.kt)("p",null,"\u200b",(0,i.kt)(o.Z,{to:"jsdom-crawler/class/JSDOMCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler"))," crawls by making plain HTTP requests to the provided URLs using the specialized ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},"got-scraping")," HTTP client. The URLs are fed to the crawler using ",(0,i.kt)(o.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue")),". The HTTP responses it gets back are usually HTML pages. The same pages you would get in your browser when you first load a URL. But it can handle any content types with the help of the ",(0,i.kt)(o.Z,{to:"jsdom-crawler/interface/JSDOMCrawlerOptions#additionalMimeTypes",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"additionalMimeTypes"))," option."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Modern web pages often do not serve all of their content in the first HTML response, but rather the first HTML contains links to other resources such as CSS and JavaScript that get downloaded afterwards, and together they create the final page. To crawl those, see ",(0,i.kt)(o.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," and ",(0,i.kt)(o.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),".")),(0,i.kt)("p",null,"Once the page's HTML is retrieved, the crawler will pass it to ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsdom",target:"_blank",rel:"noopener"},"JSDOM")," for parsing. The result is a ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," property, which should be familiar to frontend developers. You can use the Window API to do all sorts of lookups and manipulation of the page's HTML, but in scraping, you will mostly use it to find specific HTML elements and extract their data."),(0,i.kt)("p",null,"Example use of browser JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Return the page title\ndocument.title; // browsers\nwindow.document.title; // JSDOM\n")),(0,i.kt)("h2",{id:"when-to-use-jsdomcrawler"},"When to use ",(0,i.kt)("inlineCode",{parentName:"h2"},"JSDOMCrawler")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler")," really shines when ",(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," is just not enough. There is an entire set of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API",target:"_blank",rel:"noopener"},"APIs")," available!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advantages:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy to set up"),(0,i.kt)("li",{parentName:"ul"},"Familiar for frontend developers"),(0,i.kt)("li",{parentName:"ul"},"Content can be manipulated"),(0,i.kt)("li",{parentName:"ul"},"Automatically avoids some anti-scraping bans")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Disadvantages:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Slower than ",(0,i.kt)("inlineCode",{parentName:"li"},"CheerioCrawler")),(0,i.kt)("li",{parentName:"ul"},"Does not work for websites that require JavaScript rendering"),(0,i.kt)("li",{parentName:"ul"},"May easily overload the target website with requests")),(0,i.kt)("h2",{id:"example-use-of-element-api"},"Example use of Element API"),(0,i.kt)("h3",{id:"find-all-links-on-a-page"},"Find all links on a page"),(0,i.kt)("p",null,"This snippet finds all ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," elements which have the ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute and extracts the hrefs into an array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Array.from(document.querySelectorAll('a[href]')).map((a) => a.href);\n")),(0,i.kt)("h3",{id:"other-examples"},"Other examples"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"../examples",target:null,rel:null},"Examples")," section to browse examples of ",(0,i.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler")," usage. Almost all examples show ",(0,i.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler")," code in their code tabs."))}h.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.2.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.2.2","@crawlee/browser":"^3.2.2","@crawlee/cheerio":"^3.2.2","@crawlee/cli":"^3.2.2","@crawlee/core":"^3.2.2","@crawlee/http":"^3.2.2","@crawlee/jsdom":"^3.2.2","@crawlee/playwright":"^3.2.2","@crawlee/puppeteer":"^3.2.2","@crawlee/utils":"^3.2.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);