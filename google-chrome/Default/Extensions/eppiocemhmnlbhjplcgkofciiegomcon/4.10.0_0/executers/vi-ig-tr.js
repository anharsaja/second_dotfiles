(()=>{function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){l=!0,a=e},f:function(){try{u||null==r.return||r.return()}finally{if(l)throw a}}}}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var o,i,a=(o=sessionStorage.getItem("bis_data"),i={adOpt:!!document.querySelector("script[ad-opt-on]"),config:null},null!==o&&(i.config=JSON.parse(o)),i),u=a&&a.config?a.config.config.instagramConfig.TRAFFIC_LISTENER_CONFIG.PARSERS:[],l=a&&a.config?a.config.config.instagramConfig.TRAFFIC_LISTENER_CONFIG.PROPERTIES_FOR_VIDEO_DATA:[],s=a&&a.config?"".concat(a.config.id,"_i"):null,f=(!(!a||!a.adOpt)&&a.adOpt,0);var c,T=function(e,t){return function(){!function(e,t,n){try{var r={posdMessageId:"PANELOS_MESSAGE",posdHash:(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)).substring(0,22),type:n,from:e,to:e.substring(0,e.length-2),content:t};window.postMessage(r)}catch(e){}}(s,e,t)}},E=function(e,n){var r,o,i=null,a=t(l);try{for(a.s();!(o=a.n()).done;){var u=o.value,s=u.NAME,f=u.PATH_NAME,c=u.IS_NECESSARY,T=u.DEFAULT_VALUE;if(i||(i={}),"detectionTime"!==s){if(n[f]&&(i[s]=h(e,n[f],T),c&&!i[s]))return null}else i[s]=Date.now()/1e3|0}}catch(e){a.e(e)}finally{a.f()}return null!==(r=i.headlineText)&&void 0!==r&&r.length&&(i.fullText=i.headlineText+"\n"+i.fullText),delete i.headlineText,i},h=function(t,n,r){for(var o,i=t,a=function(){var t=e(l[u],2),o=t[0],a=t[1];if("*"===a&&i.length){var s=n.slice(+o+1),f=s.length-1;return{v:i.map((function(t){for(var n=t,r=0,o=Object.entries(s);r<o.length;r++){var i=e(o[r],2),a=i[0],u=i[1];if(n[u]&&(n=n[u]),f===+a&&"string"==typeof n)return n}}))}}if(i[a])i=i[a];else if(!i[a])return i=r,0},u=0,l=Object.entries(n);u<l.length&&0!==(o=a());u++)if(o)return o.v;return i},p=function(e,n){if(e&&e.length){var r,o=null,i=t(e);try{for(i.s();!(r=i.n()).done;){var a=r.value,u="";try{if(_(a,n.PATH_CHECK_PROPERTIES))u=(o=E(a,n.PATHS_GET_PROPERTIES)).videoSrc?"INSTAGRAM_VIDEO_DATA":"INSTAGRAM_CAROUSEL_SLIDES_SOURCES";else{if(!n.RULES_TO_GET_FULL_TEXT||!_(a,n.RULES_TO_GET_FULL_TEXT.PATH_CHECK_PROPERTIES))continue;o=E(a,n.RULES_TO_GET_FULL_TEXT.PATHS_GET_PROPERTIES),u="INSTAGRAM_FULL_TEXT_DATA"}o&&setTimeout(T(o,u),0)}catch(e){}}}catch(e){i.e(e)}finally{i.f()}}},_=function(n,r){var o,i=!1,a=t(r);try{for(a.s();!(o=a.n()).done;){for(var u=o.value,l=n,s=u.length-1,f=0,c=Object.entries(u);f<c.length;f++){var T=e(c[f],2),E=T[0],h=T[1];if(h in l&&l[h]){if(l=l[h],s===+E){i=!0;break}}else{if("*"===h&&l.length&&l.length>1&&!i&&s===+E){i=!0;break}i=!1}}if(i)break}}catch(e){a.e(e)}finally{a.f()}return i},d={XMLHttpRequest:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(n){var r=XMLHttpRequest.prototype.open,o=XMLHttpRequest.prototype.setRequestHeader;XMLHttpRequest.prototype.setRequestHeader=function(){var e=arguments[0].toLowerCase(),t=arguments[1];this.requestHeaders||(this.requestHeaders={}),this.requestHeaders[e]=t,o.apply(this,arguments)},XMLHttpRequest.prototype.open=function(){this.requestMethod=arguments[0],r.apply(this,arguments)};var i=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(){var r=this.onreadystatechange;return this.onreadystatechange=function(){var o=this,i=function(){for(var e=n.AD_TYPES_WAYS_TO_PROPERTIES,t=n.QUERY,r=0;r<e.length;r++){var o="QUERY_AD_TYPE_"+r,i=e[r];t=t.replace(o,i.QUERY_URL_PATH)}return new RegExp(t)}(),a=n.MATCH_HEADERS,u=this.requestHeaders?Object.keys(this.requestHeaders):null,l=!1;if(u&&(l=u.some((function(e){if(a[e]&&a[e].includes(o.requestHeaders[e]))return!0}))),4===this.readyState&&i.test(this.responseURL)){var s,f=t(n.AD_TYPES_WAYS_TO_PROPERTIES);try{var c=function(){var n=s.value,r=o.responseURL.includes(n.QUERY_URL_PATH);if(l||r){var i=function(t,n){for(var r=n,o=function(){var n=e(u[a],2),o=n[0],l=n[1];r&&r[l]&&(r=r[l]),"*"===l&&r.length&&(r=r.map((function(e){return i(t.slice(+o+1),e)})))},a=0,u=Object.entries(t);a<u.length;a++)o();return r},a=o.response.length?JSON.parse(o.response):o.response,u=i(n.PATH_TO_POSTS,a);"story"===n.AD_TYPE&&o.responseURL.includes(n.QUERY_URL_PATH)&&u.length?u.forEach((function(e){e&&function(e,n){if(e&&e.length){var r,o=[],i=t(e);try{for(i.s();!(r=i.n()).done;){var a=r.value;if(_(a,n.PATH_CHECK_PROPERTIES)){var u=E(a,n.PATHS_GET_PROPERTIES);u&&(null===u.videoVersions&&delete u.videoVersions,o.push(u))}}}catch(e){i.e(e)}finally{i.f()}o.length&&setTimeout(T(o,"INSTAGRAM_STORY_DATA"),0)}}(e,n)})):"feed"===n.AD_TYPE&&p(u,n)}};for(f.s();!(s=f.n()).done;)c()}catch(e){f.e(e)}finally{f.f()}}if(r)return r.apply(this,arguments)},i.apply(this,arguments)}})),script:function(t){function n(){var e=Array.from(document.querySelectorAll("script")),n=new RegExp(t.REGEXP_FILTER),r=e.filter((function(e){return e.innerHTML.search(n)>-1}));return r.length?r[0]:null}if(f++,"complete"!==document.readyState&&f<15){var r=null;r=setTimeout((function(){r&&clearTimeout(r),d.script(t)}),200)}else{var o,i=(o=n())?JSON.parse(o.innerHTML):null,a=function t(n,r){for(var o=r,i=function(){var r=e(u[a],2),i=r[0],l=r[1];o&&o[l]&&(o=o[l]),"*"===l&&o.length&&(o=o.map((function(e){return t(n.slice(+i+1),e)})))},a=0,u=Object.entries(n);a<u.length;a++)i();return o}(t.PATH_TO_POSTS,i);p(a,t)}}},S=t(u);try{for(S.s();!(c=S.n()).done;){var v=c.value;v.USE&&d[v.TYPE](v)}}catch(e){S.e(e)}finally{S.f()}})();