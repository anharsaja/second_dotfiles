var __webpack_exports__={};const presence=new Presence({clientId:"1056816638466457613"}),browsingTimestamp=Math.floor(Date.now()/1e3),shortenedURLs={};async function getShortURL(e){if(!e||e.length<256)return e;if(shortenedURLs[e])return shortenedURLs[e];try{const t=await(await fetch(`https://pd.premid.app/create/${e}`)).text();return shortenedURLs[e]=t,t}catch(t){return presence.error(t),e}}async function getStrings(){return presence.getStrings({viewHome:"general.viewHome",viewAnime:"general.viewAnime",browse:"general.browsing",play:"general.playing",pause:"general.paused",buttonViewEpisode:"general.buttonViewEpisode",buttonViewSeries:"general.buttonViewSeries",buttonWatchMovie:"general.buttonWatchMovie",watchingMovie:"general.watchingMovie",buttonViewPage:"general.buttonViewPage",viewing:"general.viewing",searchFor:"general.searchFor"},await presence.getSetting("lang").catch((()=>"en")))}let strings,video={duration:0,currentTime:0,paused:!0},oldLang=null;presence.on("iFrameData",(e=>{video=e})),presence.on("UpdateData",(async()=>{let e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/Y/Yugen%20Anime/assets/logo.png",details:"Unsupported page",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/reading.png"};const{href:t,pathname:n,search:s}=document.location,[i,r,a,o,l]=await Promise.all([presence.getSetting("timestamp"),presence.getSetting("buttons"),presence.getSetting("lang").catch((()=>"en")),presence.getSetting("privacy"),presence.getSetting("covers")]),g=document.querySelector("nav.pagination > ul.pagination > li > div.btn-default"),c=document.querySelector("nav.pagination > ul.pagination > li > a.btn-default")??g;if(oldLang===a&&strings||(oldLang=a,strings=await getStrings()),e.smallImageText=strings.browse,o)return e.details=strings.browse,void presence.setActivity(e);const u={"/settings":{details:"Viewing settings"},"/schedule":{details:"Viewing schedule",buttons:[{label:strings.buttonViewPage,url:t}]},"/trending":{details:"Viewing trending anime",buttons:[{label:strings.buttonViewPage,url:t}]},"/history":{details:"Viewing watch history",buttons:[{label:strings.buttonViewPage,url:t}]}};for(const[t,s]of Object.entries(u))n.includes(t)&&(e={...e,...s});if("/"===n)e.details=strings.viewHome;else if(c&&!n.includes("/watch"))e.details=g?"Discovering anime":`${strings.viewing} ${n.replaceAll("/","")} anime`,e.state=`Page ${c.textContent}`,e.buttons=[{label:strings.buttonViewPage,url:t}];else if(n.includes("/anime"))e.details=strings.viewAnime,e.state=document.querySelector("div.content > h1.p-10-t")?.textContent.trim(),e.largeImageKey=await getShortURL(document.querySelector("div.page-cover-inner > div > img")?.getAttribute("src")),e.buttons=[{label:strings.buttonViewSeries,url:t}];else if(n.includes("/watch")&&!n.endsWith("/watch/")){const[s,r]=presence.getTimestamps(Math.floor(video.currentTime),Math.floor(video.duration)),a=JSON.parse(document.querySelector('script[id="syncData"]')?.innerHTML),o=n.includes("movie");e.details=o?strings.watchingMovie:a?.name,e.state=document.querySelector("div.box.m-10-b > h1.m-5-b")?.textContent.trim()??document.querySelector('[class="ep-title"]')?.textContent??`Episode ${a.episode}`,e.largeImageKey=await getShortURL(document.querySelector("div.img-icon > img")?.getAttribute("src")??"https://cdn.rcd.gg/PreMiD/websites/Y/Yugen%20Anime/assets/logo.png"),e.smallImageKey=video.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=video.paused?strings.pause:strings.play,e.buttons=[{label:o?strings.buttonWatchMovie:strings.buttonViewEpisode,url:t}],o||e.buttons.push({label:strings.buttonViewSeries,url:`https://yugen.to${document.querySelector("div.col.justify-center.m-15-l > a")?.getAttribute("href")}`}),i&&([e.startTimestamp,e.endTimestamp]=[s,r]),video.paused&&delete e.endTimestamp}else if(n.includes("/mylist"))e.details="Viewing my list",e.state=`Tab: ${s.split("?status=")[1]?.replace("1","Currently Watching")?.replace("3","Completed")?.replace("4","On Hold")?.replace("5","Dropped")?.replace("2","Plan to Watch")}`,e.buttons=[{label:strings.buttonViewPage,url:t}];else if(n.includes("/search")){const t=document.querySelector("h2.ya-title")?.textContent.split("for");e.details=strings.searchFor,e.state=t?.[1],e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText=t?.[0]}else n.includes("/review")&&(e.details="Viewing a review",e.state=`on ${document.querySelector("a.text")?.textContent}`,e.largeImageKey=await getShortURL(document.querySelector("div.banner")?.getAttribute("style").split("url(")[1].split(")")[0]?.replaceAll("'","")),e.smallImageText=`By ${document.querySelector("a.author")?.textContent.replace("a review by","")}`,e.buttons=[{label:strings.buttonViewPage,url:t}]);!r&&e.buttons&&delete e.buttons,(i&&!e.startTimestamp||!e.endTimestamp)&&(e.startTimestamp=browsingTimestamp),!l&&e.largeImageKey&&(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/Y/Yugen%20Anime/assets/logo.png"),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUJELEVBQWFDLGNBQWdCLHNFQUM3QkQsRUFBYUUsUUFDYjNDLFNBQVM2RCxZQUFZcEIsR0FFckJ6QyxTQUFTNkQsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCIxMDU2ODE2NjM4NDY2NDU3NjEzXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSwgc2hvcnRlbmVkVVJMcyA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0U2hvcnRVUkwodXJsKSB7XG4gICAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA8IDI1NilcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICBpZiAoc2hvcnRlbmVkVVJMc1t1cmxdKVxuICAgICAgICByZXR1cm4gc2hvcnRlbmVkVVJMc1t1cmxdO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBkVVJMID0gYXdhaXQgKGF3YWl0IGZldGNoKGBodHRwczovL3BkLnByZW1pZC5hcHAvY3JlYXRlLyR7dXJsfWApKS50ZXh0KCk7XG4gICAgICAgIHNob3J0ZW5lZFVSTHNbdXJsXSA9IHBkVVJMO1xuICAgICAgICByZXR1cm4gcGRVUkw7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcHJlc2VuY2UuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiBnZXRTdHJpbmdzKCkge1xuICAgIHJldHVybiBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICAgICAgdmlld0hvbWU6IFwiZ2VuZXJhbC52aWV3SG9tZVwiLFxuICAgICAgICB2aWV3QW5pbWU6IFwiZ2VuZXJhbC52aWV3QW5pbWVcIixcbiAgICAgICAgYnJvd3NlOiBcImdlbmVyYWwuYnJvd3NpbmdcIixcbiAgICAgICAgcGxheTogXCJnZW5lcmFsLnBsYXlpbmdcIixcbiAgICAgICAgcGF1c2U6IFwiZ2VuZXJhbC5wYXVzZWRcIixcbiAgICAgICAgYnV0dG9uVmlld0VwaXNvZGU6IFwiZ2VuZXJhbC5idXR0b25WaWV3RXBpc29kZVwiLFxuICAgICAgICBidXR0b25WaWV3U2VyaWVzOiBcImdlbmVyYWwuYnV0dG9uVmlld1Nlcmllc1wiLFxuICAgICAgICBidXR0b25XYXRjaE1vdmllOiBcImdlbmVyYWwuYnV0dG9uV2F0Y2hNb3ZpZVwiLFxuICAgICAgICB3YXRjaGluZ01vdmllOiBcImdlbmVyYWwud2F0Y2hpbmdNb3ZpZVwiLFxuICAgICAgICBidXR0b25WaWV3UGFnZTogXCJnZW5lcmFsLmJ1dHRvblZpZXdQYWdlXCIsXG4gICAgICAgIHZpZXdpbmc6IFwiZ2VuZXJhbC52aWV3aW5nXCIsXG4gICAgICAgIHNlYXJjaEZvcjogXCJnZW5lcmFsLnNlYXJjaEZvclwiLFxuICAgIH0sIGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJsYW5nXCIpLmNhdGNoKCgpID0+IFwiZW5cIikpO1xufVxubGV0IHZpZGVvID0ge1xuICAgIGR1cmF0aW9uOiAwLFxuICAgIGN1cnJlbnRUaW1lOiAwLFxuICAgIHBhdXNlZDogdHJ1ZSxcbn0sIHN0cmluZ3MsIG9sZExhbmcgPSBudWxsO1xucHJlc2VuY2Uub24oXCJpRnJhbWVEYXRhXCIsIChkYXRhKSA9PiB7XG4gICAgdmlkZW8gPSBkYXRhO1xufSk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9ZL1l1Z2VuJTIwQW5pbWUvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIGRldGFpbHM6IFwiVW5zdXBwb3J0ZWQgcGFnZVwiLFxuICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCIsXG4gICAgfTtcbiAgICBjb25zdCB7IGhyZWYsIHBhdGhuYW1lLCBzZWFyY2ggfSA9IGRvY3VtZW50LmxvY2F0aW9uLCBbc2hvd1RpbWVzdGFtcCwgc2hvd0J1dHRvbnMsIG5ld0xhbmcsIHByaXZhY3ksIHNob3dDb3ZlcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwidGltZXN0YW1wXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJjb3ZlcnNcIiksXG4gICAgXSksIGRpc2NvdmVyUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYucGFnaW5hdGlvbiA+IHVsLnBhZ2luYXRpb24gPiBsaSA+IGRpdi5idG4tZGVmYXVsdFwiKSwgcGFnZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYucGFnaW5hdGlvbiA+IHVsLnBhZ2luYXRpb24gPiBsaSA+IGEuYnRuLWRlZmF1bHRcIikgPz8gZGlzY292ZXJQYWdlO1xuICAgIGlmIChvbGRMYW5nICE9PSBuZXdMYW5nIHx8ICFzdHJpbmdzKSB7XG4gICAgICAgIG9sZExhbmcgPSBuZXdMYW5nO1xuICAgICAgICBzdHJpbmdzID0gYXdhaXQgZ2V0U3RyaW5ncygpO1xuICAgIH1cbiAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBzdHJpbmdzLmJyb3dzZTtcbiAgICBpZiAocHJpdmFjeSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MuYnJvd3NlO1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VzID0ge1xuICAgICAgICBcIi9zZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIlZpZXdpbmcgc2V0dGluZ3NcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCIvc2NoZWR1bGVcIjoge1xuICAgICAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIHNjaGVkdWxlXCIsXG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5ncy5idXR0b25WaWV3UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBcIi90cmVuZGluZ1wiOiB7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIlZpZXdpbmcgdHJlbmRpbmcgYW5pbWVcIixcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmdzLmJ1dHRvblZpZXdQYWdlLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIFwiL2hpc3RvcnlcIjoge1xuICAgICAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIHdhdGNoIGhpc3RvcnlcIixcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmdzLmJ1dHRvblZpZXdQYWdlLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IFtwYXRoLCBkYXRhXSBvZiBPYmplY3QuZW50cmllcyhwYWdlcykpXG4gICAgICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhwYXRoKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YSA9IHsgLi4ucHJlc2VuY2VEYXRhLCAuLi5kYXRhIH07XG4gICAgaWYgKHBhdGhuYW1lID09PSBcIi9cIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLnZpZXdIb21lO1xuICAgIGVsc2UgaWYgKHBhZ2VOYXYgJiYgIXBhdGhuYW1lLmluY2x1ZGVzKFwiL3dhdGNoXCIgPz8gXCIvYW5pbWVcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkaXNjb3ZlclBhZ2VcbiAgICAgICAgICAgID8gXCJEaXNjb3ZlcmluZyBhbmltZVwiXG4gICAgICAgICAgICA6IGAke3N0cmluZ3Mudmlld2luZ30gJHtwYXRobmFtZS5yZXBsYWNlQWxsKFwiL1wiLCBcIlwiKX0gYW5pbWVgO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgUGFnZSAke3BhZ2VOYXYudGV4dENvbnRlbnR9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZ3MuYnV0dG9uVmlld1BhZ2UsXG4gICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvYW5pbWVcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLnZpZXdBbmltZTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNvbnRlbnQgPiBoMS5wLTEwLXRcIilcbiAgICAgICAgICAgID8udGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGF3YWl0IGdldFNob3J0VVJMKGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImRpdi5wYWdlLWNvdmVyLWlubmVyID4gZGl2ID4gaW1nXCIpXG4gICAgICAgICAgICA/LmdldEF0dHJpYnV0ZShcInNyY1wiKSk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmdzLmJ1dHRvblZpZXdTZXJpZXMsXG4gICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvd2F0Y2hcIikgJiYgIXBhdGhuYW1lLmVuZHNXaXRoKFwiL3dhdGNoL1wiKSkge1xuICAgICAgICBjb25zdCBbc3RhcnRUaW1lc3RhbXAsIGVuZFRpbWVzdGFtcF0gPSBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKE1hdGguZmxvb3IodmlkZW8uY3VycmVudFRpbWUpLCBNYXRoLmZsb29yKHZpZGVvLmR1cmF0aW9uKSksIGpzb25JdCA9IEpTT04ucGFyc2UoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2lkPVwic3luY0RhdGFcIl0nKT8uaW5uZXJIVE1MKSwgaXNNb3ZpZSA9IHBhdGhuYW1lLmluY2x1ZGVzKFwibW92aWVcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gaXNNb3ZpZSA/IHN0cmluZ3Mud2F0Y2hpbmdNb3ZpZSA6IGpzb25JdD8ubmFtZTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuYm94Lm0tMTAtYiA+IGgxLm0tNS1iXCIpPy50ZXh0Q29udGVudC50cmltKCkgPz9cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJlcC10aXRsZVwiXScpPy50ZXh0Q29udGVudCA/P1xuICAgICAgICAgICAgICAgIGBFcGlzb2RlICR7anNvbkl0LmVwaXNvZGV9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBhd2FpdCBnZXRTaG9ydFVSTChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmltZy1pY29uID4gaW1nXCIpPy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPz9cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9ZL1l1Z2VuJTIwQW5pbWUvYXNzZXRzL2xvZ28ucG5nXCIpO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHZpZGVvLnBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHZpZGVvLnBhdXNlZCA/IHN0cmluZ3MucGF1c2UgOiBzdHJpbmdzLnBsYXk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBpc01vdmllID8gc3RyaW5ncy5idXR0b25XYXRjaE1vdmllIDogc3RyaW5ncy5idXR0b25WaWV3RXBpc29kZSxcbiAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICBpZiAoIWlzTW92aWUpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmdzLmJ1dHRvblZpZXdTZXJpZXMsXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly95dWdlbi50byR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY29sLmp1c3RpZnktY2VudGVyLm0tMTUtbCA+IGFcIilcbiAgICAgICAgICAgICAgICAgICAgPy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd1RpbWVzdGFtcCkge1xuICAgICAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPSBbXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgZW5kVGltZXN0YW1wLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKVxuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL215bGlzdFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBteSBsaXN0XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBUYWI6ICR7c2VhcmNoXG4gICAgICAgICAgICAuc3BsaXQoXCI/c3RhdHVzPVwiKVsxXVxuICAgICAgICAgICAgPy5yZXBsYWNlKFwiMVwiLCBcIkN1cnJlbnRseSBXYXRjaGluZ1wiKVxuICAgICAgICAgICAgPy5yZXBsYWNlKFwiM1wiLCBcIkNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgPy5yZXBsYWNlKFwiNFwiLCBcIk9uIEhvbGRcIilcbiAgICAgICAgICAgID8ucmVwbGFjZShcIjVcIiwgXCJEcm9wcGVkXCIpXG4gICAgICAgICAgICA/LnJlcGxhY2UoXCIyXCIsIFwiUGxhbiB0byBXYXRjaFwiKX1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5ncy5idXR0b25WaWV3UGFnZSxcbiAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9zZWFyY2hcIikpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoQ29udGVudCA9IGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImgyLnlhLXRpdGxlXCIpXG4gICAgICAgICAgICA/LnRleHRDb250ZW50LnNwbGl0KFwiZm9yXCIpO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3Muc2VhcmNoRm9yO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzZWFyY2hDb250ZW50Py5bMV07XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHNlYXJjaENvbnRlbnQ/LlswXTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvcmV2aWV3XCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcmV2aWV3XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBvbiAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnRleHRcIik/LnRleHRDb250ZW50fWA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gYXdhaXQgZ2V0U2hvcnRVUkwoZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiZGl2LmJhbm5lclwiKVxuICAgICAgICAgICAgPy5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKVxuICAgICAgICAgICAgLnNwbGl0KFwidXJsKFwiKVsxXVxuICAgICAgICAgICAgLnNwbGl0KFwiKVwiKVswXVxuICAgICAgICAgICAgPy5yZXBsYWNlQWxsKFwiJ1wiLCBcIlwiKSk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGBCeSAke2RvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImEuYXV0aG9yXCIpXG4gICAgICAgICAgICA/LnRleHRDb250ZW50LnJlcGxhY2UoXCJhIHJldmlldyBieVwiLCBcIlwiKX1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5ncy5idXR0b25WaWV3UGFnZSxcbiAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBpZiAoIXNob3dCdXR0b25zICYmIHByZXNlbmNlRGF0YS5idXR0b25zKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgaWYgKChzaG93VGltZXN0YW1wICYmICFwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXApIHx8XG4gICAgICAgICFwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wKVxuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICBpZiAoIXNob3dDb3ZlcnMgJiYgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkpXG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1kvWXVnZW4lMjBBbmltZS9hc3NldHMvbG9nby5wbmdcIjtcbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNPME5CUXk5Q0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGRGFrUXNZVUZCWVN4SFFVRXlRaXhGUVVGRkxFTkJRVU03UVVGRk5VTXNTMEZCU3l4VlFVRlZMRmRCUVZjc1EwRkJReXhIUVVGWE8wbEJRM0pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITzFGQlFVVXNUMEZCVHl4SFFVRkhMRU5CUVVNN1NVRkRla01zU1VGQlNTeGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUVVVc1QwRkJUeXhoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEYkVRc1NVRkJTVHRSUVVOSUxFMUJRVTBzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZEYmtJc1RVRkJUU3hMUVVGTExFTkJRVU1zWjBOQlFXZERMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRMnhFTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRWQ3hoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUXpOQ0xFOUJRVThzUzBGQlN5eERRVUZETzB0QlEySTdTVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRSUVVOaUxGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRjRUlzVDBGQlR5eEhRVUZITEVOQlFVTTdTMEZEV0R0QlFVTkdMRU5CUVVNN1FVRkZSQ3hMUVVGTExGVkJRVlVzVlVGQlZUdEpRVU40UWl4UFFVRlBMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRM3BDTzFGQlEwTXNVVUZCVVN4RlFVRkZMR3RDUVVGclFqdFJRVU0xUWl4VFFVRlRMRVZCUVVVc2JVSkJRVzFDTzFGQlF6bENMRTFCUVUwc1JVRkJSU3hyUWtGQmEwSTdVVUZETVVJc1NVRkJTU3hGUVVGRkxHbENRVUZwUWp0UlFVTjJRaXhMUVVGTExFVkJRVVVzWjBKQlFXZENPMUZCUTNaQ0xHbENRVUZwUWl4RlFVRkZMREpDUVVFeVFqdFJRVU01UXl4blFrRkJaMElzUlVGQlJTd3dRa0ZCTUVJN1VVRkROVU1zWjBKQlFXZENMRVZCUVVVc01FSkJRVEJDTzFGQlF6VkRMR0ZCUVdFc1JVRkJSU3gxUWtGQmRVSTdVVUZEZEVNc1kwRkJZeXhGUVVGRkxIZENRVUYzUWp0UlFVTjRReXhQUVVGUExFVkJRVVVzYVVKQlFXbENPMUZCUXpGQ0xGTkJRVk1zUlVGQlJTeHRRa0ZCYlVJN1MwRkRPVUlzUlVGRFJDeE5RVUZOTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZNc1RVRkJUU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVNelJDeERRVUZETzBGQlEwZ3NRMEZCUXp0QlFVVkVMRWxCUVVrc1MwRkJTeXhIUVVGSE8wbEJRMVlzVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZEV0N4WFFVRlhMRVZCUVVVc1EwRkJRenRKUVVOa0xFMUJRVTBzUlVGQlJTeEpRVUZKTzBOQlExb3NSVUZEUkN4UFFVRXJReXhGUVVNdlF5eFBRVUZQTEVkQlFWY3NTVUZCU1N4RFFVRkRPMEZCVFhoQ0xGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlExWXNXVUZCV1N4RlFVTmFMRU5CUVVNc1NVRkJaMFVzUlVGQlJTeEZRVUZGTzBsQlEzQkZMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRFpDeERRVUZETEVOQlEwUXNRMEZCUXp0QlFVVkdMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUTNCRExFbEJRVWtzV1VGQldTeEhRVUZwUWp0UlFVTm9ReXhoUVVGaExITkZRVUZoTzFGQlF6RkNMRTlCUVU4c1JVRkJSU3hyUWtGQmEwSTdVVUZETTBJc1lVRkJZU3h0UkVGQlowSTdTMEZETjBJc1EwRkJRenRKUVVOR0xFMUJRVTBzUlVGQlJTeEpRVUZKTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlEyNUVMRU5CUVVNc1lVRkJZU3hGUVVGRkxGZEJRVmNzUlVGQlJTeFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRlZCUVZVc1EwRkJReXhIUVVONlJDeE5RVUZOTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRha0lzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4WFFVRlhMRU5CUVVNN1VVRkRla01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4VFFVRlRMRU5CUVVNN1VVRkRka01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVXl4TlFVRk5MRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUTNKRUxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNVMEZCVXl4RFFVRkRPMUZCUTNaRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNVVUZCVVN4RFFVRkRPMHRCUTNSRExFTkJRVU1zUlVGRFNDeFpRVUZaTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRjRU1zZFVSQlFYVkVMRU5CUTNaRUxFVkJRMFFzVDBGQlR5eEhRVU5PTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNKQ0xIRkVRVUZ4UkN4RFFVTnlSQ3hKUVVGSkxGbEJRVmtzUTBGQlF6dEpRVVZ3UWl4SlFVRkpMRTlCUVU4c1MwRkJTeXhQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdVVUZEY0VNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF6dFJRVU5zUWl4UFFVRlBMRWRCUVVjc1RVRkJUU3hWUVVGVkxFVkJRVVVzUTBGQlF6dExRVU0zUWp0SlFVVkVMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0SlFVVTNReXhKUVVGSkxFOUJRVThzUlVGQlJUdFJRVU5hTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU4wUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzFGQlEyNURMRTlCUVU4N1MwRkRVRHRKUVVORUxFMUJRVTBzUzBGQlN5eEhRVUZwUXp0UlFVTXpReXhYUVVGWExFVkJRVVU3V1VGRFdpeFBRVUZQTEVWQlFVVXNhMEpCUVd0Q08xTkJRek5DTzFGQlEwUXNWMEZCVnl4RlFVRkZPMWxCUTFvc1QwRkJUeXhGUVVGRkxHdENRVUZyUWp0WlFVTXpRaXhQUVVGUExFVkJRVVU3WjBKQlExSTdiMEpCUTBNc1MwRkJTeXhGUVVGRkxFOUJRVThzUTBGQlF5eGpRVUZqTzI5Q1FVTTNRaXhIUVVGSExFVkJRVVVzU1VGQlNUdHBRa0ZEVkR0aFFVTkVPMU5CUTBRN1VVRkRSQ3hYUVVGWExFVkJRVVU3V1VGRFdpeFBRVUZQTEVWQlFVVXNkMEpCUVhkQ08xbEJRMnBETEU5QlFVOHNSVUZCUlR0blFrRkRVanR2UWtGRFF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMR05CUVdNN2IwSkJRemRDTEVkQlFVY3NSVUZCUlN4SlFVRkpPMmxDUVVOVU8yRkJRMFE3VTBGRFJEdFJRVU5FTEZWQlFWVXNSVUZCUlR0WlFVTllMRTlCUVU4c1JVRkJSU3gxUWtGQmRVSTdXVUZEYUVNc1QwRkJUeXhGUVVGRk8yZENRVU5TTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zWTBGQll6dHZRa0ZETjBJc1IwRkJSeXhGUVVGRkxFbEJRVWs3YVVKQlExUTdZVUZEUkR0VFFVTkVPMHRCUTBRc1EwRkJRenRKUVVWR0xFdEJRVXNzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTXZReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUVVVc1dVRkJXU3hIUVVGSExFVkJRVVVzUjBGQlJ5eFpRVUZaTEVWQlFVVXNSMEZCUnl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVVeFJTeEpRVUZKTEZGQlFWRXNTMEZCU3l4SFFVRkhPMUZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRPMU5CUTNwRUxFbEJRVWtzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFbEJRVWtzVVVGQlVTeERRVUZETEVWQlFVVTdVVUZETjBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFpRVUZaTzFsQlEyeERMRU5CUVVNc1EwRkJReXh0UWtGQmJVSTdXVUZEY2tJc1EwRkJReXhEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVOHNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUXpsRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGJrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenRaUVVOMFFqdG5Ra0ZEUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExHTkJRV003WjBKQlF6ZENMRWRCUVVjc1JVRkJSU3hKUVVGSk8yRkJRMVE3VTBGRFJDeERRVUZETzB0QlEwWTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdVVUZEZGtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTNwRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVR0aFFVTXpRaXhoUVVGaExFTkJRVU1zZVVKQlFYbENMRU5CUVVNN1dVRkRla01zUlVGQlJTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRkRUlzV1VGQldTeERRVUZETEdGQlFXRXNSMEZCUnl4TlFVRk5MRmRCUVZjc1EwRkROME1zVVVGQlVUdGhRVU5PTEdGQlFXRXNRMEZCUXl4clEwRkJhME1zUTBGQlF6dFpRVU5zUkN4RlFVRkZMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGRGRFSXNRMEZCUXp0UlFVTkdMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3V1VGRGRFSTdaMEpCUTBNc1MwRkJTeXhGUVVGRkxFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJN1owSkJReTlDTEVkQlFVY3NSVUZCUlN4SlFVRkpPMkZCUTFRN1UwRkRSQ3hEUVVGRE8wdEJRMFk3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8xRkJRM2hGTEUxQlFVMHNRMEZCUXl4alFVRmpMRVZCUVVVc1dVRkJXU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZETTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUXpkQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVNeFFpeEZRVU5FTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVOc1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMSFZDUVVGMVFpeERRVUZETEVWQlFVVXNVMEZCVXl4RFFVTXhSQ3hGUVVORUxFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRM1JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETzFGQlEzUkZMRmxCUVZrc1EwRkJReXhMUVVGTE8xbEJRMnBDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc01rSkJRVEpDTEVOQlFVTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRk8yZENRVU4yUlN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRVZCUVVVc1YwRkJWenRuUWtGRGVrUXNWMEZCVnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRE4wSXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhOUVVGTkxGZEJRVmNzUTBGRE4wTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU03WjBaQlEzSkVMRU5CUTFvc1EwRkJRenRSUVVOR0xGbEJRVmtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExHbEVRVUZqTEVOQlFVTXNLME5CUVZrc1EwRkJRenRSUVVOMlJTeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZETVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dFpRVU4wUWp0blFrRkRReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhwUWtGQmFVSTdaMEpCUTNKRkxFZEJRVWNzUlVGQlJTeEpRVUZKTzJGQlExUTdVMEZEUkN4RFFVRkRPMUZCUlVZc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5pTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVU42UWl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExHZENRVUZuUWp0blFrRkRMMElzUjBGQlJ5eEZRVUZGTEcxQ1FVRnRRaXhSUVVGUk8zRkNRVU01UWl4aFFVRmhMRU5CUVVNc2JVTkJRVzFETEVOQlFVTTdiMEpCUTI1RUxFVkJRVVVzV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMkZCUTNwQ0xFTkJRVU1zUTBGQlF6dFRRVU5JTzFGQlJVUXNTVUZCU1N4aFFVRmhMRVZCUVVVN1dVRkRiRUlzUTBGQlF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RlFVRkZMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ6dG5Ra0ZETVVRc1kwRkJZenRuUWtGRFpDeFpRVUZaTzJGQlExb3NRMEZCUXp0VFFVTkdPMUZCUlVRc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRUdFpRVUZGTEU5QlFVOHNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJRenRMUVVOdVJEdFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdFJRVU40UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMUZCUTNwRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4TlFVRk5PMkZCUTJwRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRja0lzUlVGQlJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRzlDUVVGdlFpeERRVUZETzFsQlEzQkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeFhRVUZYTEVOQlFVTTdXVUZETTBJc1JVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEZOQlFWTXNRMEZCUXp0WlFVTjZRaXhGUVVGRkxFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNVMEZCVXl4RFFVRkRPMWxCUTNwQ0xFVkJRVVVzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4bFFVRmxMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRMjVETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1dVRkRkRUk3WjBKQlEwTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1EwRkJReXhqUVVGak8yZENRVU0zUWl4SFFVRkhMRVZCUVVVc1NVRkJTVHRoUVVOVU8xTkJRMFFzUTBGQlF6dExRVU5HTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzFGQlEzaERMRTFCUVUwc1lVRkJZU3hIUVVGSExGRkJRVkU3WVVGRE5VSXNZVUZCWVN4RFFVRkRMR0ZCUVdFc1EwRkJRenRaUVVNM1FpeEZRVUZGTEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE5VSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlEzcERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzWVVGQllTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRU1zV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03VVVGRE0wTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhoUVVGaExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTnFSRHRUUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRSUVVONFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETzFGQlF6RkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxGZEJRVmNzUlVGQlJTeERRVUZETzFGQlF6TkZMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzVFVGQlRTeFhRVUZYTEVOQlF6ZERMRkZCUVZFN1lVRkRUaXhoUVVGaExFTkJRVU1zV1VGQldTeERRVUZETzFsQlF6VkNMRVZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF6dGhRVU4wUWl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyaENMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWkN4RlFVRkZMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlEzUkNMRU5CUVVNN1VVRkRSaXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEUxQlFVMHNVVUZCVVR0aFFVTXhReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETzFsQlF6RkNMRVZCUVVVc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVNMVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMWxCUTNSQ08yZENRVU5ETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1kwRkJZenRuUWtGRE4wSXNSMEZCUnl4RlFVRkZMRWxCUVVrN1lVRkRWRHRUUVVORUxFTkJRVU03UzBGRFJqdEpRVVZFTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWxCUVVrc1dVRkJXU3hEUVVGRExFOUJRVTg3VVVGQlJTeFBRVUZQTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRkRVVzU1VGRFF5eERRVUZETEdGQlFXRXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhqUVVGakxFTkJRVU03VVVGREwwTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1dVRkJXVHRSUVVVeFFpeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzBsQlJXcEVMRWxCUVVrc1EwRkJReXhWUVVGVkxFbEJRVWtzV1VGQldTeERRVUZETEdGQlFXRTdVVUZETlVNc1dVRkJXU3hEUVVGRExHRkJRV0VzZFVWQlFXTXNRMEZCUXp0SlFVVXhReXhKUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZQTzFGQlFVVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6czdVVUZEZUVRc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6ZENMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwic2hvcnRlbmVkVVJMcyIsImFzeW5jIiwiZ2V0U2hvcnRVUkwiLCJ1cmwiLCJsZW5ndGgiLCJwZFVSTCIsImZldGNoIiwidGV4dCIsImVyciIsImVycm9yIiwiZ2V0U3RyaW5ncyIsInZpZXdIb21lIiwidmlld0FuaW1lIiwiYnJvd3NlIiwicGxheSIsInBhdXNlIiwiYnV0dG9uVmlld0VwaXNvZGUiLCJidXR0b25WaWV3U2VyaWVzIiwiYnV0dG9uV2F0Y2hNb3ZpZSIsIndhdGNoaW5nTW92aWUiLCJidXR0b25WaWV3UGFnZSIsInZpZXdpbmciLCJzZWFyY2hGb3IiLCJnZXRTZXR0aW5nIiwiY2F0Y2giLCJzdHJpbmdzIiwidmlkZW8iLCJkdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwicGF1c2VkIiwib2xkTGFuZyIsIm9uIiwiZGF0YSIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJkZXRhaWxzIiwic21hbGxJbWFnZUtleSIsImhyZWYiLCJwYXRobmFtZSIsInNlYXJjaCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJzaG93VGltZXN0YW1wIiwic2hvd0J1dHRvbnMiLCJuZXdMYW5nIiwicHJpdmFjeSIsInNob3dDb3ZlcnMiLCJQcm9taXNlIiwiYWxsIiwiZGlzY292ZXJQYWdlIiwicXVlcnlTZWxlY3RvciIsInBhZ2VOYXYiLCJzbWFsbEltYWdlVGV4dCIsInNldEFjdGl2aXR5IiwicGFnZXMiLCJidXR0b25zIiwibGFiZWwiLCJwYXRoIiwiT2JqZWN0IiwiZW50cmllcyIsImluY2x1ZGVzIiwicmVwbGFjZUFsbCIsInN0YXRlIiwidGV4dENvbnRlbnQiLCJ0cmltIiwiZ2V0QXR0cmlidXRlIiwiZW5kc1dpdGgiLCJzdGFydFRpbWVzdGFtcCIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJqc29uSXQiLCJKU09OIiwicGFyc2UiLCJpbm5lckhUTUwiLCJpc01vdmllIiwibmFtZSIsImVwaXNvZGUiLCJwdXNoIiwic3BsaXQiLCJyZXBsYWNlIiwic2VhcmNoQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=
undefined;