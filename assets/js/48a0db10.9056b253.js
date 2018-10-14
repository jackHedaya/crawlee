"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},w=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),w=n,m=d["".concat(l,".").concat(w)]||d[w]||u[w]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=w;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}w.displayName="MDXCreateElement"},4959:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7294),n=r(9960),i=r(4477),o=r(2263),s=r(643).version.split("."),l=[s[0],s[1]].join(".");const c=function(e){var t=e.to,r=e.children,s=(0,i.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===l?a.createElement(n.default,{to:"/api/"+t},r):a.createElement(n.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},r)}},173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=r(1435),s=r(4959);const l="import { BasicCrawler, Dataset } from 'crawlee';\n\n// Create a BasicCrawler - the simplest crawler that enables\n// users to implement the crawling logic themselves.\nconst crawler = new BasicCrawler({\n    // This function will be called for each URL to crawl.\n    async requestHandler({ request, sendRequest, log }) {\n        const { url } = request;\n        log.info(`Processing ${url}...`);\n\n        // Fetch the page HTML via the crawlee sendRequest utility method\n        // By default, the method will use the current request that is being handled, so you don't have to\n        // provide it yourself. You can also provide a custom request if you want.\n        const { body } = await sendRequest();\n\n        // Store the HTML and URL to the default dataset.\n        await Dataset.pushData({\n            url,\n            html: body,\n        });\n    },\n});\n\n// The initial list of URLs to crawl. Here we use just a few hard-coded URLs.\nawait crawler.addRequests([\n    'https://www.google.com',\n    'https://www.example.com',\n    'https://www.bing.com',\n    'https://www.wikipedia.com',\n]);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n";var c=["components"],p={id:"basic-crawler",title:"Basic crawler"},d=void 0,u={unversionedId:"examples/basic-crawler",id:"version-3.1/examples/basic-crawler",title:"Basic crawler",description:"This is the most bare-bones example of using Crawlee, which demonstrates some of its building blocks such as the BasicCrawler. You probably don't need to go this deep though, and it would be better to start with one of the full-featured crawlers",source:"@site/versioned_docs/version-3.1/examples/basic_crawler.mdx",sourceDirName:"examples",slug:"/examples/basic-crawler",permalink:"/docs/3.1/examples/basic-crawler",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1676059088,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"basic-crawler",title:"Basic crawler"},sidebar:"docs",previous:{title:"Add data to dataset",permalink:"/docs/3.1/examples/add-data-to-dataset"},next:{title:"Cheerio crawler",permalink:"/docs/3.1/examples/cheerio-crawler"}},w={},m=[],h={toc:m},f="wrapper";function b(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)(f,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the most bare-bones example of using Crawlee, which demonstrates some of its building blocks such as the ",(0,i.kt)(s.Z,{to:"basic-crawler/class/BasicCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"BasicCrawler")),". You probably don't need to go this deep though, and it would be better to start with one of the full-featured crawlers\nlike ",(0,i.kt)(s.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," or ",(0,i.kt)(s.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),"."),(0,i.kt)("p",null,"The script simply downloads several web pages with plain HTTP requests using the ",(0,i.kt)(s.Z,{to:"basic-crawler/interface/BasicCrawlingContext#sendRequest",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"sendRequest"))," utility function (which uses the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"got-scraping")),"\nnpm module internally) and stores their raw HTML and URL in the default dataset. In local configuration, the data will be stored as JSON files in\n",(0,i.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default"),"."),(0,i.kt)(o.Z,{className:"language-js",mdxType:"CodeBlock"},l))}b.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.2.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.2.2","@crawlee/browser":"^3.2.2","@crawlee/cheerio":"^3.2.2","@crawlee/cli":"^3.2.2","@crawlee/core":"^3.2.2","@crawlee/http":"^3.2.2","@crawlee/jsdom":"^3.2.2","@crawlee/playwright":"^3.2.2","@crawlee/puppeteer":"^3.2.2","@crawlee/utils":"^3.2.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);