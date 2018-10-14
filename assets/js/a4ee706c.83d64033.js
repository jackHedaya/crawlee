"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3731],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return t?o.createElement(f,a(a({ref:n},c),{},{components:t})):o.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(7294),r=t(6010);const s={tabItem:"tabItem_Ymn6"};function a(e){var n=e.children,t=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(7462),r=t(7294),s=t(6010),a=t(2389),i=t(7392),l=t(7094),u=t(2466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){var n,t,a=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,y=e.className,w=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:w.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.l)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=w.find((function(e){return e.props.default})))?void 0:t.props.value)?n:w[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.U)(),v=b.tabGroupChoices,C=b.setTabGroupChoices,x=(0,r.useState)(k),P=x[0],S=x[1],T=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=v[f];null!=j&&j!==P&&h.some((function(e){return e.value===j}))&&S(j)}var N=function(e){var n=e.currentTarget,t=T.indexOf(n),o=h[t].value;o!==P&&(O(n),S(o),null!=f&&C(f,String(o)))},I=function(e){var n,t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":var o,r=T.indexOf(e.currentTarget)+1;t=null!=(o=T[r])?o:T[0];break;case"ArrowLeft":var s,a=T.indexOf(e.currentTarget)-1;t=null!=(s=T[a])?s:T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},y)},h.map((function(e){var n=e.value,t=e.label,a=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:function(e){return T.push(e)},onKeyDown:I,onClick:N},a,{className:(0,s.Z)("tabs__item",c.tabItem,null==a?void 0:a.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),a?(0,r.cloneElement)(w.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function d(e){var n=(0,a.Z)();return r.createElement(p,(0,o.Z)({key:String(n)},e))}},4959:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(7294),r=t(9960),s=t(4477),a=t(2263),i=t(643).version.split("."),l=[i[0],i[1]].join(".");const u=function(e){var n=e.to,t=e.children,i=(0,s.E)();return(0,a.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?o.createElement(r.default,{to:"/api/"+n},t):o.createElement(r.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+n},t)}},5083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>k,default:()=>S,frontMatter:()=>g,metadata:()=>b,toc:()=>C});var o=t(7462),r=t(3366),s=(t(7294),t(3905)),a=t(4959),i=t(5488),l=t(5162),u=t(1435);const c="import { BasicCrawler, ProxyConfiguration } from 'crawlee';\nimport { gotScraping } from 'got-scraping';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new BasicCrawler({\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    async requestHandler({ request, session }) {\n        const { url } = request;\n        const requestOptions = {\n            url,\n            // We use session id in order to have the same proxyUrl\n            // for all the requests using the same session.\n            proxyUrl: await proxyConfiguration.newUrl(session.id),\n            throwHttpErrors: false,\n            headers: {\n                // If you want to use the cookieJar.\n                // This way you get the Cookie headers string from session.\n                Cookie: session.getCookieString(url),\n            },\n        };\n        let response;\n\n        try {\n            response = await gotScraping(requestOptions);\n        } catch (e) {\n            if (e === 'SomeNetworkError') {\n                // If a network error happens, such as timeout, socket hangup, etc.\n                // There is usually a chance that it was just bad luck\n                // and the proxy works. No need to throw it away.\n                session.markBad();\n            }\n            throw e;\n        }\n\n        // Automatically retires the session based on response HTTP status code.\n        session.retireOnBlockedStatusCodes(response.statusCode);\n\n        if (response.body.blocked) {\n            // You are sure it is blocked.\n            // This will throw away the session.\n            session.retire();\n        }\n\n        // Everything is ok, you can get the data.\n        // No need to call session.markGood -> BasicCrawler calls it for you.\n\n        // If you want to use the CookieJar in session you need.\n        session.setCookiesFromResponse(response);\n    },\n});\n",p="import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new HttpCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, body }) {\n        const title = body.match(/<title(?:.*?)>(.*?)<\\/title>/)?.[1];\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n",d="import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new CheerioCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, $ }) {\n        const title = $('title').text();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n",m="import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new JSDOMCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, window }) {\n        const title = window.document.title;\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n",f="import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PlaywrightCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookies to page before navigation automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ page, session }) {\n        const title = await page.title();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in PlaywrightCrawler.\n        }\n    },\n});\n",y="import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PuppeteerCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookies to page before navigation automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ page, session }) {\n        const title = await page.title();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in PuppeteerCrawler.\n        }\n    },\n});\n",w="import { SessionPool } from 'crawlee';\n\n// Override the default Session pool configuration.\nconst sessionPoolOptions = {\n    maxPoolSize: 100,\n};\n\n// Open Session Pool.\nconst sessionPool = await SessionPool.open(sessionPoolOptions);\n\n// Get session.\nconst session = await sessionPool.getSession();\n\n// Increase the errorScore.\nsession.markBad();\n\n// Throw away the session.\nsession.retire();\n\n// Lower the errorScore and mark the session good.\nsession.markGood();\n";var h=["components"],g={id:"session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more"},k=void 0,b={unversionedId:"guides/session-management",id:"version-3.2/guides/session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more",source:"@site/versioned_docs/version-3.2/guides/session_management.mdx",sourceDirName:"guides",slug:"/guides/session-management",permalink:"/docs/guides/session-management",draft:!1,tags:[],version:"3.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1676059088,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more"},sidebar:"docs",previous:{title:"Proxy Management",permalink:"/docs/guides/proxy-management"},next:{title:"Scaling our crawlers",permalink:"/docs/guides/scaling-crawlers"}},v={},C=[],x={toc:C},P="wrapper";function S(e){var n=e.components,t=(0,r.Z)(e,h);return(0,s.kt)(P,(0,o.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u200b",(0,s.kt)(a.Z,{to:"core/class/SessionPool",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"SessionPool"))," is a class that allows us to handle the rotation of proxy IP addresses along with cookies and other custom settings in Crawlee."),(0,s.kt)("p",null,"The main benefit of using Session pool is that we can filter out blocked or non-working proxies,\nso our actor does not retry requests over known blocked/non-working proxies.\nAnother benefit of using SessionPool is that we can store information tied tightly to an IP address,\nsuch as cookies, auth tokens, and particular headers. Having our cookies and other identifiers used only with a specific IP will reduce the chance of being blocked.\nThe last but not least benefit is the even rotation of IP addresses - SessionPool  picks the session randomly,\nwhich should prevent burning out a small pool of available IPs."),(0,s.kt)("p",null,"Now let's take a look at the examples of how to use Session pool:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"basic-crawler/class/BasicCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"BasicCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"http-crawler/class/HttpCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"HttpCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"CheerioCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"jsdom-crawler/class/JSDOMCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"JSDOMCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"PlaywrightCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"PuppeteerCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"without a crawler (standalone usage to manage sessions manually).")),(0,s.kt)(i.Z,{groupId:"session_pool",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"basic",label:"BasicCrawler",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},c)),(0,s.kt)(l.Z,{value:"http",label:"HttpCrawler",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},p)),(0,s.kt)(l.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},d)),(0,s.kt)(l.Z,{value:"jsdom",label:"JSDOMCrawler",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},m)),(0,s.kt)(l.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},f)),(0,s.kt)(l.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},y)),(0,s.kt)(l.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},w))),(0,s.kt)("p",null,"These are the basics of configuring SessionPool.\nPlease, bear in mind that a Session pool needs time to find working IPs and build up the pool,\nso we will probably see a lot of errors until it becomes stabilized."))}S.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.2.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.2.2","@crawlee/browser":"^3.2.2","@crawlee/cheerio":"^3.2.2","@crawlee/cli":"^3.2.2","@crawlee/core":"^3.2.2","@crawlee/http":"^3.2.2","@crawlee/jsdom":"^3.2.2","@crawlee/playwright":"^3.2.2","@crawlee/puppeteer":"^3.2.2","@crawlee/utils":"^3.2.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);