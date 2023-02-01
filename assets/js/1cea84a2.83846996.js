"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[4698],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return p}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(o),y=n,p=c["".concat(l,".").concat(y)]||c[y]||h[y]||i;return o?r.createElement(p,a(a({ref:t},u),{},{components:o})):r.createElement(p,a({ref:t},u))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},5445:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=o(3117),n=(o(7294),o(3905));const i={id:"ratio",title:"How do I get high ratio?",sidebar_label:"High Ratio"},a=void 0,s={unversionedId:"shared-storage/troubleshooting/ratio",id:"shared-storage/troubleshooting/ratio",title:"How do I get high ratio?",description:"So, you just got your new shiny seedbox and you are hoping to take full advantage of it, however you feel its lacking a bit.",source:"@site/docs/shared-storage/troubleshooting/ratio.mdx",sourceDirName:"shared-storage/troubleshooting",slug:"/shared-storage/troubleshooting/ratio",permalink:"/shared-storage/troubleshooting/ratio",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/shared-storage/troubleshooting/ratio.mdx",tags:[],version:"current",frontMatter:{id:"ratio",title:"How do I get high ratio?",sidebar_label:"High Ratio"},sidebar:"docs",previous:{title:"Speed drop",permalink:"/shared-storage/troubleshooting/multiple-torrents"},next:{title:"Reroute data (NFOrce)",permalink:"/shared-storage/troubleshooting/reroute"}},l={},d=[{value:"Why when the torrent is completed, my seeding speed drops drastically?",id:"why-when-the-torrent-is-completed-my-seeding-speed-drops-drastically",level:3},{value:"Basic seeding techniques",id:"basic-seeding-techniques",level:3},{value:"Download everything on your seedbox",id:"download-everything-on-your-seedbox",level:4},{value:"Download only selected torrents on your seedbox",id:"download-only-selected-torrents-on-your-seedbox",level:4}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"So, you just got your new shiny seedbox and you are hoping to take full advantage of it, however you feel its lacking a bit.\nHere's a few pointers in the right direction."),(0,n.kt)("h3",{id:"why-when-the-torrent-is-completed-my-seeding-speed-drops-drastically"},"Why when the torrent is completed, my seeding speed drops drastically?"),(0,n.kt)("p",null,'This is how the Bittorrent Protocol works. Torrent clients always prefer to give data to other client that get data from. It is like "Give me something to give you back". So leechers always prefer exchanging data with other leechers, and connect to seeders, only when needed. This is why when you complete a torrent, and essentially you become a seeder, the seeding speed drops, because you are not selected from leechers in priority. Many people prefer to limit their download speed, just to be in the downloading state for longer times, in order to seed back in higher speed that the download speed.'),(0,n.kt)("h3",{id:"basic-seeding-techniques"},"Basic seeding techniques"),(0,n.kt)("p",null,"There are basically 2 ways that you should use your seedbox for:"),(0,n.kt)("h4",{id:"download-everything-on-your-seedbox"},"Download everything on your seedbox"),(0,n.kt)("p",null,"and keep everything seeding for a long time. You can then download to your home pc anything you need from your seedbox via ftp, and your seedbox will keep seeding indefinitely. This is the easiest way to use a seedbox, however the real benefits of it will be shown to you after a period of time. That period of time depends, but it may be up to 1 month. This happens because some torrents (especially the very popular ones that have many seeders and only a few leechers) need time to start seeding. However once they do, they will constantly seed, and give you the necessary buffer for you to download newer torrents."),(0,n.kt)("h4",{id:"download-only-selected-torrents-on-your-seedbox"},"Download only selected torrents on your seedbox"),(0,n.kt)("p",null,"These torrents are carefully selected that will seed A LOT, taking advantage of your seedbox's high upload speed in only short time. This method needs experience in order for you to understand which torrent you have to select."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"So basically, you need to determine how you wish to use the seedbox, do you wish to max out the allocated upload speed, we advice you to run 1-3 very popular torrents that you grap almost instantly, but if you are looking for a more longterm seeding plan, simply fill it up with all the torrents that can fit into your storage allocation and let it be.\nDo note that doing it on a longer term basis will take more time to take effect as mentioned above and you will almost never see your uplink go full.\nRemember, if you have any other questions or questions to this article, we are available via our ticketing system.")))}c.isMDXComponent=!0}}]);