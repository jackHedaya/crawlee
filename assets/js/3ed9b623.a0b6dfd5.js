"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"crawling",title:"Crawling the Store",sidebar_label:"Crawling",description:"Your first steps into the world of scraping with Crawlee"},s=void 0,u={unversionedId:"introduction/crawling",id:"version-3.0/introduction/crawling",title:"Crawling the Store",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.0/introduction/05-crawling.mdx",sourceDirName:"introduction",slug:"/introduction/crawling",permalink:"/docs/3.0/introduction/crawling",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1676059088,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:5,frontMatter:{id:"crawling",title:"Crawling the Store",sidebar_label:"Crawling",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Real-world project",permalink:"/docs/3.0/introduction/real-world-project"},next:{title:"Scraping",permalink:"/docs/3.0/introduction/scraping"}},c={},p=[{value:"Crawling the listing pages",id:"crawling-the-listing-pages",level:2},{value:"The <code>selector</code> parameter of <code>enqueueLinks()</code>",id:"the-selector-parameter-of-enqueuelinks",level:3},{value:"The <code>label</code> of <code>enqueueLinks()</code>",id:"the-label-of-enqueuelinks",level:3},{value:"Crawling the detail pages",id:"crawling-the-detail-pages",level:2},{value:"Next lesson",id:"next-lesson",level:2}],d={toc:p},h="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To crawl the whole ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," and find all the data, you first need to visit all the pages with actors - listing pages and also all the actor detail pages."),(0,o.kt)("h2",{id:"crawling-the-listing-pages"},"Crawling the listing pages"),(0,o.kt)("p",null,"In previous lessons, you used the ",(0,o.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," function like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await enqueueLinks();\n")),(0,o.kt)("p",null,"While useful in that scenario, you need something different now. Instead of finding all the ",(0,o.kt)("inlineCode",{parentName:"p"},'<a href="..">')," elements with links to the same hostname, you need to find only the specific ones that will take your crawler to the next page of results. Otherwise, the crawler will visit a lot of other pages that you're not interested in. Using the power of DevTools and yet another ",(0,o.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," parameter, this becomes fairly easy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        console.log(`Processing: ${request.url}`)\n        // Wait for the actor cards to render,\n        // otherwise enqueueLinks wouldn't enqueue anything.\n        await page.waitForSelector('.ActorStorePagination-pages a');\n\n        // Add links to the queue, but only from\n        // elements matching the provided selector.\n        await enqueueLinks({\n            selector: '.ActorStorePagination-pages > a',\n            label: 'LIST',\n        })\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n")),(0,o.kt)("p",null,"The code should look pretty familiar to you. It's a very simple ",(0,o.kt)("inlineCode",{parentName:"p"},"requestHandler")," where we log the currently processed URL to the console and enqueue more links. But there are also a few new, interesting additions. Let's break it down."),(0,o.kt)("h3",{id:"the-selector-parameter-of-enqueuelinks"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"selector")," parameter of ",(0,o.kt)("inlineCode",{parentName:"h3"},"enqueueLinks()")),(0,o.kt)("p",null,"When you previously used ",(0,o.kt)("inlineCode",{parentName:"p"},"enqueueLinks()"),", you were not providing any ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," parameter, and it was fine, because you wanted to use the default value, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," - finds all ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," elements. But now, you need to be more specific. There are multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," links on the Store results page, and you're only interested in those that will take your crawler to the next page of results. Using the DevTools, you'll find that you can select the links you need using the ",(0,o.kt)("inlineCode",{parentName:"p"},".ActorStorePagination-pages a")," selector, which selects all the ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," elements that are direct children of an element with ",(0,o.kt)("inlineCode",{parentName:"p"},"class=ActorStorePagination-pages"),"."),(0,o.kt)("h3",{id:"the-label-of-enqueuelinks"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"label")," of ",(0,o.kt)("inlineCode",{parentName:"h3"},"enqueueLinks()")),(0,o.kt)("p",null,"You will see ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," used often throughout Crawlee, as it's a convenient way of labelling a ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," instance for quick identification later. You can access it with ",(0,o.kt)("inlineCode",{parentName:"p"},"request.label")," and it's a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),". You can name your requests any way you want. Here, we used the label ",(0,o.kt)("inlineCode",{parentName:"p"},"LIST")," to note that we're enqueueing pages with lists of results. The ",(0,o.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," function will add this label to all requests before enqueueing them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestQueue"),". Why this is useful will become obvious in a minute."),(0,o.kt)("h2",{id:"crawling-the-detail-pages"},"Crawling the detail pages"),(0,o.kt)("p",null,"In a similar fashion, you need to collect all the URLs to the actor detail pages, because only from there you can scrape all the data you need. The following code only repeats the concepts you already know for another set of links."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        console.log(`Processing: ${request.url}`)\n        if (request.label === 'DETAIL') {\n            // We're not doing anything with the details yet.\n        } else {\n            // This means we're either on the start page, with no label,\n            // or on a list page, with LIST label.\n\n            await page.waitForSelector('.ActorStorePagination-pages a');\n            await enqueueLinks({\n                selector: '.ActorStorePagination-pages > a',\n                label: 'LIST',\n            })\n\n            // In addition to adding the listing URLs, we now also\n            // add the detail URLs from all the listing pages.\n            await page.waitForSelector('.ActorStoreItem');\n            await enqueueLinks({\n                selector: '.ActorStoreItem',\n                label: 'DETAIL', // <= note the different label\n            })\n        }\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n")),(0,o.kt)("p",null,"The crawling code is now complete. When you run the code, you'll see the crawler visit all the listing URLs and all the detail URLs."),(0,o.kt)("h2",{id:"next-lesson"},"Next lesson"),(0,o.kt)("p",null,"This concludes the Crawling lesson, because you have taught the crawler to visit all the pages it needs. Let's continue with scraping data."))}g.isMDXComponent=!0}}]);