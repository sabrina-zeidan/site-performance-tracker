!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"measureWebVitals",(function(){return C})),n.d(t,"measureReport",(function(){return D})),n.d(t,"initAnalytics",(function(){return F}));var i,r,o,a,c=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},u=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},s=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},d=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},f="function"==typeof WeakSet?new WeakSet:new Set,m=function(e,t,n){var i;return function(){t.value>=0&&(n||f.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},l=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},v=function(){s((function(e){var t=e.timeStamp;l=t}),!0)},g=function(){return l<0&&(l=p(),v(),d((function(){setTimeout((function(){l=p(),v()}),0)}))),{get timeStamp(){return l}}},h={passive:!0,capture:!0},b=new Date,y=function(e,t){i||(i=t,r=e,o=new Date,_(removeEventListener),w())},w=function(){if(r>=0&&r<o-b){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};a.forEach((function(t){t(e)})),a=[]}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){y(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,h),removeEventListener("pointercancel",i,h)};addEventListener("pointerup",n,h),addEventListener("pointercancel",i,h)}(t,e):y(t,e)}},_=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,S,h)}))};const L={CLS:[.1,.25],FCP:[1800,3e3],FID:[100,300],LCP:[2500,4e3]};function E(e,t){return e>t[1]?"poor":e>t[0]?"ni":"good"}function P(e){try{let t=e.nodeName.toLowerCase();return"body"===t?"html>body":e.id?`${t}#${e.id}`:(e.className&&e.className.length&&(t+="."+[...e.classList.values()].join(".")),`${P(e.parentElement)}>${t}`)}catch(e){return"(error)"}}function k(e,t=[]){const n=t[0],i=t[t.length-1];switch(e){case"LCP":if(i)return P(i.element);break;case"FID":if(n){const{name:e}=n;return n.target.closest("#google-signin2")?e+"(#google-signin2)":`${e}(${P(n.target)})`}break;case"CLS":if(t.length){const e=t.reduce((e,t)=>e&&e.value>t.value?e:t);if(e&&e.sources){const t=e.sources.reduce((e,t)=>e.node&&e.previousRect.width*e.previousRect.height>t.previousRect.width*t.previousRect.height?e:t);if(t)return P(t.node)}}break;default:return"(not set)"}}function T({name:e,value:t,delta:n,id:i,entries:r}){gtag("event",e,{value:Math.round("CLS"===e?1e3*n:n),event_category:"Web Vitals",event_label:i,event_meta:E(t,L[e]),event_debug:k(e,r),non_interaction:!0})}function C(){!function(e,t){var n,i=c("CLS",0),r=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n())},o=u("layout-shift",r);o&&(n=m(e,i,t),s((function(){o.takeRecords().map(r),n()})),d((function(){i=c("CLS",0),n=m(e,i,t)})))}(T),function(e,t){var n,i=g(),r=c("FCP"),o=u("paint",(function(e){"first-contentful-paint"===e.name&&(o&&o.disconnect(),e.startTime<i.timeStamp&&(r.value=e.startTime,r.entries.push(e),f.add(r),n()))}));o&&(n=m(e,r,t),d((function(i){r=c("FCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,f.add(r),n()}))}))})))}(T),function(e,t){var n,o=g(),l=c("FID"),p=function(e){e.startTime<o.timeStamp&&(l.value=e.processingStart-e.startTime,l.entries.push(e),f.add(l),n())},v=u("first-input",p);n=m(e,l,t),v&&s((function(){v.takeRecords().map(p),v.disconnect()}),!0),v&&d((function(){var o;l=c("FID"),n=m(e,l,t),a=[],r=-1,i=null,_(addEventListener),o=p,a.push(o),w()}))}(T),function(e,t){var n,i=g(),r=c("LCP"),o=function(e){var t=e.startTime;t<i.timeStamp&&(r.value=t,r.entries.push(e)),n()},a=u("largest-contentful-paint",o);if(a){n=m(e,r,t);var l=function(){f.has(r)||(a.takeRecords().map(o),a.disconnect(),f.add(r),n())};["keydown","click"].forEach((function(e){addEventListener(e,l,{once:!0,capture:!0})})),s(l,!0),d((function(i){r=c("LCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,f.add(r),n()}))}))}))}}(T)}function j(e){const t=e["opts:"+e.viewId];return t&&t.active?["id="+t.metricIdDim,"name="+t.metricNameDim,"metrics="+[t.lcpName,t.fidName,t.clsName].join(","),"filters="+t.filters].join("|"):"(not set)"}function D({state:e,duration:t,report:n,error:i}){gtag("event","report_"+(i?"error":"success"),{value:t,report_size:n?n.rows.length:0,segments:[e.segmentA,e.segmentB].sort().join(", "),config:j(e),event_category:"Usage",event_label:i?i.code||i.message:"(not set)",event_meta:n?n.meta.source:"(not set)"})}function F(){void 0===window.gtag&&(window.gtag=console.log),"undefined"!=typeof sitePerformanceTrackerAnalytics&&sitePerformanceTrackerAnalytics.gtag_id&&(gtag("js",new Date),gtag(...(e=>{const t={measurement_version:"4",page_path:location.pathname};return e.startsWith("UA-")&&Object.assign(t,{transport_type:"beacon",custom_map:{dimension1:"measurement_version",dimension2:"client_id",dimension3:"segments",dimension4:"config",dimension5:"event_meta",dimension6:"event_debug",metric1:"report_size"}}),e.startsWith("G-")&&"web-vitals-report.web.app"!==location.hostname&&(t.debug_mode=!0),["config",e,t]})(sitePerformanceTrackerAnalytics.gtag_id))),C()}"requestIdleCallback"in window?requestIdleCallback(F):"complete"===document.readyState?setTimeout(F,5e3):window.addEventListener("load",()=>{setTimeout(F,5e3)})}]);