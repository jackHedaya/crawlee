"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1613],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),h=o,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=h;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=["components"],i={id:"upgrading-to-v1",title:"Upgrading to v1"},p=void 0,s={unversionedId:"upgrading/upgrading-to-v1",id:"version-3.2/upgrading/upgrading-to-v1",title:"Upgrading to v1",description:"Summary",source:"@site/versioned_docs/version-3.2/upgrading/upgrading_v1.md",sourceDirName:"upgrading",slug:"/upgrading/upgrading-to-v1",permalink:"/docs/upgrading/upgrading-to-v1",draft:!1,tags:[],version:"3.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1676059088,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"upgrading-to-v1",title:"Upgrading to v1"},sidebar:"docs",previous:{title:"Upgrading",permalink:"/docs/upgrading"},next:{title:"Upgrading to v2",permalink:"/docs/upgrading/upgrading-to-v2"}},u={},c=[{value:"Summary",id:"summary",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Installation",id:"installation",level:2},{value:"Running on Apify Platform",id:"running-on-apify-platform",level:2},{value:"Handler arguments are now Crawling Context",id:"handler-arguments-are-now-crawling-context",level:2},{value:"<code>Map</code> of crawling contexts and their IDs",id:"map-of-crawling-contexts-and-their-ids",level:3},{value:"<code>autoscaledPool</code> was moved under <code>crawlingContext.crawler</code>",id:"autoscaledpool-was-moved-under-crawlingcontextcrawler",level:3},{value:"Replacement of <code>PuppeteerPool</code> with <code>BrowserPool</code>",id:"replacement-of-puppeteerpool-with-browserpool",level:2},{value:"Access to running <code>BrowserPool</code>",id:"access-to-running-browserpool",level:3},{value:"Pages now have IDs",id:"pages-now-have-ids",level:3},{value:"Configuration and lifecycle hooks",id:"configuration-and-lifecycle-hooks",level:3},{value:"Introduction of <code>BrowserController</code>",id:"introduction-of-browsercontroller",level:3},{value:"<code>BrowserPool</code> methods vs <code>PuppeteerPool</code>",id:"browserpool-methods-vs-puppeteerpool",level:3},{value:"Updated <code>PuppeteerCrawlerOptions</code>",id:"updated-puppeteercrawleroptions",level:2},{value:"Removal of <code>gotoFunction</code>",id:"removal-of-gotofunction",level:3},{value:"<code>launchPuppeteerOptions</code> =&gt; <code>launchContext</code>",id:"launchpuppeteeroptions--launchcontext",level:3},{value:"Removal of <code>launchPuppeteerFunction</code>",id:"removal-of-launchpuppeteerfunction",level:3},{value:"Launch functions",id:"launch-functions",level:2},{value:"Updated arguments",id:"updated-arguments",level:3},{value:"Custom modules",id:"custom-modules",level:3}],d={toc:c},h="wrapper";function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)(h,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"After 3.5 years of rapid development and a lot of breaking changes and deprecations,\nhere comes the result - ",(0,r.kt)("strong",{parentName:"p"},"Apify SDK v1"),". There were two goals for this release. ",(0,r.kt)("strong",{parentName:"p"},"Stability"),"\nand ",(0,r.kt)("strong",{parentName:"p"},"adding support for more browsers")," - Firefox and Webkit (Safari)."),(0,r.kt)("p",null,"The SDK has grown quite popular over the years, powering thousands of web scraping\nand automation projects. We think our developers deserve a stable environment to work\nin and by releasing SDK v1, ",(0,r.kt)("strong",{parentName:"p"},"we commit to only make breaking changes once a year,\nwith a new major release"),"."),(0,r.kt)("p",null,"We added support for more browsers by replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"PuppeteerPool")," with\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"browser-pool")),". A new library that we created\nspecifically for this purpose. It builds on the ideas from ",(0,r.kt)("inlineCode",{parentName:"p"},"PuppeteerPool")," and extends\nthem to support ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright"),". Playwright is\na browser automation library similar to Puppeteer. It works with all well known browsers\nand uses almost the same interface as Puppeteer, while adding useful features and simplifying\ncommon tasks. Don't worry, you can still use Puppeteer with the new ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowserPool"),"."),(0,r.kt)("p",null,"A large breaking change is that neither ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," nor ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright")," are bundled with\nthe SDK v1. To make the choice of a library easier and installs faster, users will\nhave to install the selected modules and versions themselves. This allows us to add\nsupport for even more libraries in the future."),(0,r.kt)("p",null,"Thanks to the addition of Playwright we now have a ",(0,r.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),". It is very similar\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," and you can pick the one you prefer. It also means we needed to make\nsome interface changes. The ",(0,r.kt)("inlineCode",{parentName:"p"},"launchPuppeteerFunction")," option of ",(0,r.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," is gone\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"launchPuppeteerOptions")," were replaced by ",(0,r.kt)("inlineCode",{parentName:"p"},"launchContext"),". We also moved things around\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"handlePageFunction")," arguments. See the\n",(0,r.kt)("a",{parentName:"p",href:"#migration-guide",target:null,rel:null},"migration guide"),"\nfor more detailed explanation and migration examples."),(0,r.kt)("p",null,"What's in store for SDK v2? We want to split the SDK into smaller libraries,\nso that everyone can install only the things they need. We plan a TypeScript migration\nto make crawler development faster and safer. Finally, we will take a good look\nat the interface of the whole SDK and update it to improve the developer experience.\nBug fixes and scraping features will of course keep landing in versions 1.X as well."),(0,r.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,r.kt)("p",null,"There are a lot of breaking changes in the v1.0.0 release, but we're confident that\nupdating your code will be a matter of minutes. Below, you'll find examples how to do it\nand also short tutorials how to use many of the new features."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Many of the new features are made with power users in mind,\nso don't worry if something looks complicated. You don't need to use it.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Previous versions of the SDK bundled the ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," package, so you did not have to install\nit. SDK v1 supports also ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright")," and we don't want to force users to install both.\nTo install SDK v1 with Puppeteer (same as previous versions), run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install apify puppeteer\n")),(0,r.kt)("p",null,"To install SDK v1 with Playwright run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install apify playwright\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"While we tried to add the most important functionality in the initial release,\nyou may find that there are still some utilities or options that are only\nsupported by Puppeteer and not Playwright.")),(0,r.kt)("h2",{id:"running-on-apify-platform"},"Running on Apify Platform"),(0,r.kt)("p",null,"If you want to make use of Playwright on the Apify Platform, you need to use a Docker image\nthat supports Playwright. We've created them for you, so head over to the new\n",(0,r.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/guides/docker-images",target:"_blank",rel:"noopener"},"Docker image guide")," and pick the one\nthat best suits your needs."),(0,r.kt)("p",null,"Note that your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,r.kt)("strong",{parentName:"p"},"MUST")," include ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright")," as dependencies.\nIf you don't list them, the libraries will be uninstalled from your ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder\nwhen you build your actors."),(0,r.kt)("h2",{id:"handler-arguments-are-now-crawling-context"},"Handler arguments are now Crawling Context"),(0,r.kt)("p",null,"Previously, arguments of user provided handler functions were provided in separate\nobjects. This made it difficult to track values across function invocations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const handlePageFunction = async (args1) => {\n    args1.hasOwnProperty('proxyInfo') // true\n}\n\nconst handleFailedRequestFunction = async (args2) => {\n    args2.hasOwnProperty('proxyInfo') // false\n}\n\nargs1 === args2 // false\n")),(0,r.kt)("p",null,"This happened because a new arguments object was created for each function.\nWith SDK v1 we now have a single object called Crawling Context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const handlePageFunction = async (crawlingContext1) => {\n    crawlingContext1.hasOwnProperty('proxyInfo') // true\n}\n\nconst handleFailedRequestFunction = async (crawlingContext2) => {\n    crawlingContext2.hasOwnProperty('proxyInfo') // true\n}\n\n// All contexts are the same object.\ncrawlingContext1 === crawlingContext2 // true\n")),(0,r.kt)("h3",{id:"map-of-crawling-contexts-and-their-ids"},(0,r.kt)("inlineCode",{parentName:"h3"},"Map")," of crawling contexts and their IDs"),(0,r.kt)("p",null,"Now that all the objects are the same, we can keep track of all running crawling contexts.\nWe can do that by working with the new ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property of ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlingContext"),"\nThis is useful when you need cross-context access."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let masterContextId;\nconst handlePageFunction = async ({ id, page, request, crawler }) => {\n    if (request.userData.masterPage) {\n        masterContextId = id;\n        // Prepare the master page.\n    } else {\n        const masterContext = crawler.crawlingContexts.get(masterContextId);\n        const masterPage = masterContext.page;\n        const masterRequest = masterContext.request;\n        // Now we can manipulate the master data from another handlePageFunction.\n    }\n}\n")),(0,r.kt)("h3",{id:"autoscaledpool-was-moved-under-crawlingcontextcrawler"},(0,r.kt)("inlineCode",{parentName:"h3"},"autoscaledPool")," was moved under ",(0,r.kt)("inlineCode",{parentName:"h3"},"crawlingContext.crawler")),(0,r.kt)("p",null,"To prevent bloat and to make access to certain key objects easier, we exposed a ",(0,r.kt)("inlineCode",{parentName:"p"},"crawler"),"\nproperty on the handle page arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const handePageFunction = async ({ request, page, crawler }) => {\n    await crawler.requestQueue.addRequest({ url: 'https://example.com' });\n    await crawler.autoscaledPool.pause();\n}\n")),(0,r.kt)("p",null,"This also means that some shorthands like ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteerPool")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"autoscaledPool")," were\nno longer necessary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const handePageFunction = async (crawlingContext) => {\n    crawlingContext.autoscaledPool // does NOT exist anymore\n    crawlingContext.crawler.autoscaledPool // <= this is correct usage\n}\n")),(0,r.kt)("h2",{id:"replacement-of-puppeteerpool-with-browserpool"},"Replacement of ",(0,r.kt)("inlineCode",{parentName:"h2"},"PuppeteerPool")," with ",(0,r.kt)("inlineCode",{parentName:"h2"},"BrowserPool")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BrowserPool")," was created to extend ",(0,r.kt)("inlineCode",{parentName:"p"},"PuppeteerPool")," with the ability to manage other\nbrowser automation libraries. The API is similar, but not the same."),(0,r.kt)("h3",{id:"access-to-running-browserpool"},"Access to running ",(0,r.kt)("inlineCode",{parentName:"h3"},"BrowserPool")),(0,r.kt)("p",null,"Only ",(0,r.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")," use ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowserPool"),". You can access it\non the ",(0,r.kt)("inlineCode",{parentName:"p"},"crawler")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new Apify.PlaywrightCrawler({\n    handlePageFunction: async ({ page, crawler }) => {\n        crawler.browserPool // <-----\n    }\n});\n\ncrawler.browserPool // <-----\n")),(0,r.kt)("h3",{id:"pages-now-have-ids"},"Pages now have IDs"),(0,r.kt)("p",null,"And they're equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlingContext.id")," which gives you access to full ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlingContext"),"\nin hooks. See ",(0,r.kt)("a",{parentName:"p",href:"#configuration-and-lifecycle-hooks",target:null,rel:null},"Lifecycle hooks")," below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const pageId = browserPool.getPageId\n")),(0,r.kt)("h3",{id:"configuration-and-lifecycle-hooks"},"Configuration and lifecycle hooks"),(0,r.kt)("p",null,"The most important addition with ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowserPool")," are the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool#browserpool",target:"_blank",rel:"noopener"},"lifecycle hooks"),".\nYou can access them via ",(0,r.kt)("inlineCode",{parentName:"p"},"browserPoolOptions")," in both crawlers. A full list of ",(0,r.kt)("inlineCode",{parentName:"p"},"browserPoolOptions"),"\ncan be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool#new-browserpooloptions",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"browser-pool")," readme"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new Apify.PuppeteerCrawler({\n    browserPoolOptions: {\n        retireBrowserAfterPageCount: 10,\n        preLaunchHooks: [\n            async (pageId, launchContext) => {\n                const { request } = crawler.crawlingContexts.get(pageId);\n                if (request.userData.useHeadful === true) {\n                    launchContext.launchOptions.headless = false;\n                }\n            }\n        ]\n    }\n})\n")),(0,r.kt)("h3",{id:"introduction-of-browsercontroller"},"Introduction of ",(0,r.kt)("inlineCode",{parentName:"h3"},"BrowserController")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool#browsercontroller",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"BrowserController")),"\nis a class of ",(0,r.kt)("inlineCode",{parentName:"p"},"browser-pool")," that's responsible for browser management.\nIts purpose is to provide a single API for working with both Puppeteer and Playwright browsers.\nIt works automatically in the background, but if you ever wanted to close a browser properly,\nyou should use a ",(0,r.kt)("inlineCode",{parentName:"p"},"browserController")," to do it. You can find it in the handle page arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const handlePageFunction = async ({ page, browserController }) => {\n    // Wrong usage. Could backfire because it bypasses BrowserPool.\n    await page.browser().close();\n\n    // Correct usage. Allows graceful shutdown.\n    await browserController.close();\n\n    const cookies = [/* some cookie objects */];\n    // Wrong usage. Will only work in Puppeteer and not Playwright.\n    await page.setCookies(...cookies);\n\n    // Correct usage. Will work in both.\n    await browserController.setCookies(page, cookies);\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowserController")," also includes important information about the browser, such as\nthe context it was launched with. This was difficult to do before SDK v1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const handlePageFunction = async ({ browserController }) => {\n    // Information about the proxy used by the browser\n    browserController.launchContext.proxyInfo\n\n    // Session used by the browser\n    browserController.launchContext.session\n}\n")),(0,r.kt)("h3",{id:"browserpool-methods-vs-puppeteerpool"},(0,r.kt)("inlineCode",{parentName:"h3"},"BrowserPool")," methods vs ",(0,r.kt)("inlineCode",{parentName:"h3"},"PuppeteerPool")),(0,r.kt)("p",null,"Some functions were removed (in line with earlier deprecations), and some were changed a bit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// OLD\nawait puppeteerPool.recyclePage(page);\n\n// NEW\nawait page.close();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// OLD\nawait puppeteerPool.retire(page.browser());\n\n// NEW\nbrowserPool.retireBrowserByPage(page);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// OLD\nawait puppeteerPool.serveLiveViewSnapshot();\n\n// NEW\n// There's no LiveView in BrowserPool\n")),(0,r.kt)("h2",{id:"updated-puppeteercrawleroptions"},"Updated ",(0,r.kt)("inlineCode",{parentName:"h2"},"PuppeteerCrawlerOptions")),(0,r.kt)("p",null,"To keep ",(0,r.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")," consistent, we updated the options."),(0,r.kt)("h3",{id:"removal-of-gotofunction"},"Removal of ",(0,r.kt)("inlineCode",{parentName:"h3"},"gotoFunction")),(0,r.kt)("p",null,"The concept of a configurable ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoFunction")," is not ideal. Especially since we use a modified\n",(0,r.kt)("inlineCode",{parentName:"p"},"gotoExtended"),". Users have to know this when they override ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoFunction")," if they want to\nextend default behavior. We decided to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoFunction")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"preNavigationHooks")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"postNavigationHooks"),"."),(0,r.kt)("p",null,"The following example illustrates how ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoFunction")," makes things complicated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const gotoFunction = async ({ request, page }) => {\n    // pre-processing\n    await makePageStealthy(page);\n\n    // Have to remember how to do this:\n    const response = await gotoExtended(page, request, {/* have to remember the defaults */});\n\n    // post-processing\n    await page.evaluate(() => {\n        window.foo = 'bar';\n    });\n\n    // Must not forget!\n    return response;\n}\n\nconst crawler = new Apify.PuppeteerCrawler({\n    gotoFunction,\n    // ...\n})\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"preNavigationHooks")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"postNavigationHooks")," it's much easier. ",(0,r.kt)("inlineCode",{parentName:"p"},"preNavigationHooks"),"\nare called with two arguments: ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlingContext")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoOptions"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"postNavigationHooks"),"\nare called only with ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlingContext"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const preNavigationHooks = [\n    async ({ page }) => makePageStealthy(page)\n];\n\nconst postNavigationHooks = [\n    async ({ page }) => page.evaluate(() => {\n        window.foo = 'bar'\n    })\n]\n\nconst crawler = new Apify.PuppeteerCrawler({\n    preNavigationHooks,\n    postNavigationHooks,\n    // ...\n})\n")),(0,r.kt)("h3",{id:"launchpuppeteeroptions--launchcontext"},(0,r.kt)("inlineCode",{parentName:"h3"},"launchPuppeteerOptions")," => ",(0,r.kt)("inlineCode",{parentName:"h3"},"launchContext")),(0,r.kt)("p",null,"Those were always a point of confusion because they merged custom Apify options with\n",(0,r.kt)("inlineCode",{parentName:"p"},"launchOptions")," of Puppeteer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const launchPuppeteerOptions = {\n    useChrome: true, // Apify option\n    headless: false, // Puppeteer option\n}\n")),(0,r.kt)("p",null,"Use the new ",(0,r.kt)("inlineCode",{parentName:"p"},"launchContext")," object, which explicitly defines ",(0,r.kt)("inlineCode",{parentName:"p"},"launchOptions"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"launchPuppeteerOptions")," were removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new Apify.PuppeteerCrawler({\n    launchContext: {\n        useChrome: true, // Apify option\n        launchOptions: {\n            headless: false // Puppeteer option\n        }\n    }\n})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"LaunchContext is also a type of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"browser-pool"))," and\nthe structure is exactly the same there. SDK only adds extra options.")),(0,r.kt)("h3",{id:"removal-of-launchpuppeteerfunction"},"Removal of ",(0,r.kt)("inlineCode",{parentName:"h3"},"launchPuppeteerFunction")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"browser-pool")," introduces the idea of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool#browserpool",target:"_blank",rel:"noopener"},"lifecycle hooks"),",\nwhich are functions that are executed when a certain event in the browser lifecycle happens."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const launchPuppeteerFunction = async (launchPuppeteerOptions) => {\n    if (someVariable === 'chrome') {\n        launchPuppeteerOptions.useChrome = true;\n    }\n    return Apify.launchPuppeteer(launchPuppeteerOptions);\n}\n\nconst crawler = new Apify.PuppeteerCrawler({\n    launchPuppeteerFunction,\n    // ...\n})\n")),(0,r.kt)("p",null,"Now you can recreate the same functionality with a ",(0,r.kt)("inlineCode",{parentName:"p"},"preLaunchHook"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const maybeLaunchChrome = (pageId, launchContext) => {\n    if (someVariable === 'chrome') {\n        launchContext.useChrome = true;\n    }\n}\n\nconst crawler = new Apify.PuppeteerCrawler({\n    browserPoolOptions: {\n        preLaunchHooks: [maybeLaunchChrome]\n    },\n    // ...\n})\n")),(0,r.kt)("p",null,"This is better in multiple ways. It is consistent across both Puppeteer and Playwright.\nIt allows you to easily construct your browsers with pre-defined behavior:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const preLaunchHooks = [\n    maybeLaunchChrome,\n    useHeadfulIfNeeded,\n    injectNewFingerprint,\n]\n")),(0,r.kt)("p",null,"And thanks to the addition of ",(0,r.kt)("a",{parentName:"p",href:"#handler-arguments-are-now-crawling-context",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"crawler.crawlingContexts")),"\nthe functions also have access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlingContext")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," that triggered the launch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const preLaunchHooks = [\n    async function maybeLaunchChrome(pageId, launchContext) {\n        const { request } = crawler.crawlingContexts.get(pageId);\n        if (request.userData.useHeadful === true) {\n            launchContext.launchOptions.headless = false;\n        }\n    }\n]\n")),(0,r.kt)("h2",{id:"launch-functions"},"Launch functions"),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"Apify.launchPuppeteer()")," we now also have ",(0,r.kt)("inlineCode",{parentName:"p"},"Apify.launchPlaywright()"),"."),(0,r.kt)("h3",{id:"updated-arguments"},"Updated arguments"),(0,r.kt)("p",null,"We ",(0,r.kt)("a",{parentName:"p",href:"#launchpuppeteeroptions--launchcontext",target:null,rel:null},"updated the launch options object")," because\nit was a frequent source of confusion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// OLD\nawait Apify.launchPuppeteer({\n    useChrome: true,\n    headless: true,\n})\n\n// NEW\nawait Apify.launchPuppeteer({\n    useChrome: true,\n    launchOptions: {\n        headless: true,\n    }\n})\n")),(0,r.kt)("h3",{id:"custom-modules"},"Custom modules"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Apify.launchPuppeteer")," already supported the ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteerModule")," option. With Playwright,\nwe normalized the name to ",(0,r.kt)("inlineCode",{parentName:"p"},"launcher")," because the ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright")," module itself does not\nlaunch browsers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\nconst playwright = require('playwright');\n\nawait Apify.launchPuppeteer();\n// Is the same as:\nawait Apify.launchPuppeteer({\n    launcher: puppeteer\n})\n\nawait Apify.launchPlaywright();\n// Is the same as:\nawait Apify.launchPlaywright({\n    launcher: playwright.chromium\n})\n")))}m.isMDXComponent=!0}}]);