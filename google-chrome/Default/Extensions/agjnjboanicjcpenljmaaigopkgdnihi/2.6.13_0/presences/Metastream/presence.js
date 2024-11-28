var __webpack_exports__={};const presence=new Presence({clientId:"630462023003799583"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused",live:"general.live"});function getTime(e){let t=0;for(let n=e.length-1;n>=0;n--)t+=parseInt(e[n])*60**n;return t}function getTimestamps(e,t){const n=Date.now();return[Math.floor(n/1e3),Math.floor(n/1e3)-getTime(e.split(":").reverse())+getTime(t.split(":").reverse())]}let elapsed,oldUrl;presence.on("UpdateData",(async()=>{window.location.href!==oldUrl&&(oldUrl=window.location.href,elapsed=Math.floor(Date.now()/1e3));let e,t,n,s,o,r=elapsed,c=!0;const i=window.location.pathname;try{if(window.location.hostname.match("app.getmetastream.com")){if("/"===i){e="Home";const n=document.querySelector(".MenuTabs__tabItem__2ny6A.MenuTabs__selected__c65wY");n&&(t=`Viewing ${n.textContent}`)}if(i.match("/settings")){e="Settings";const n=document.querySelector(".SettingsMenu__tabItem__3ypki.SettingsMenu__selectedTab__OMITL");n&&(t=`Viewing ${n.textContent}`)}if(i.match("/join")){const i=document.querySelector(".Disconnect__info__3Uejx > span");if(document.querySelector(".Connect__info__3Vwlv"))e="Connecting...";else if(document.querySelector(".Disconnect__info__3Uejx"))e="Disconnected",i&&(t=i.textContent);else if(document.querySelector(".MenuHeader__header__1SYq0"))e="Setting up...";else{n="https://cdn.rcd.gg/PreMiD/resources/live.png",s=(await strings).live;const i=document.querySelector(".ListOverlay__list__1epFe")||document.createElement("HTMLDivElement");e=1===i.childElementCount||null!==document.querySelector(".UserItem__menuBtn__1ST9k")?`Hosting (${i.childElementCount} Users)`:`Watching (${i.childElementCount} Users)`;const a=document.querySelector(".TitleBar__title__3VPpW");if(a&&"Metastream"!==a.textContent){t=a.textContent;const e=document.querySelector(".Timeline__time__gcvG5:nth-child(1)"),i=document.querySelector(".Timeline__time__gcvG5:nth-child(3)");e&&i&&([r,o]=getTimestamps(e.textContent,i.textContent));const l=document.querySelector(".PlaybackControls__button__Q0pbe > svg > use");l&&(l.href.baseVal.endsWith("pause")?(n="https://cdn.rcd.gg/PreMiD/resources/play.png",s=(await strings).play,c=!0):(n="https://cdn.rcd.gg/PreMiD/resources/pause.png",s=(await strings).pause,c=!1))}}}}}catch(e){presence.error(e)}presence.setActivity({details:e,state:t,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/M/Metastream/assets/logo.png",smallImageKey:n,smallImageText:s,startTimestamp:r,endTimestamp:o},c)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FELGdCQUNERSxFQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYzMDQ2MjAyMzAwMzc5OTU4M1wiLFxufSksIHN0cmluZ3MgPSBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICBwbGF5OiBcImdlbmVyYWwucGxheWluZ1wiLFxuICAgIHBhdXNlOiBcImdlbmVyYWwucGF1c2VkXCIsXG4gICAgbGl2ZTogXCJnZW5lcmFsLmxpdmVcIixcbn0pO1xuZnVuY3Rpb24gZ2V0VGltZShsaXN0KSB7XG4gICAgbGV0IHJldCA9IDA7XG4gICAgZm9yIChsZXQgaW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pXG4gICAgICAgIHJldCArPSBwYXJzZUludChsaXN0W2luZGV4XSkgKiA2MCAqKiBpbmRleDtcbiAgICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gZ2V0VGltZXN0YW1wcyhhdWRpb1RpbWUsIGF1ZGlvRHVyYXRpb24pIHtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBbXG4gICAgICAgIE1hdGguZmxvb3Ioc3RhcnRUaW1lIC8gMTAwMCksXG4gICAgICAgIE1hdGguZmxvb3Ioc3RhcnRUaW1lIC8gMTAwMCkgLVxuICAgICAgICAgICAgZ2V0VGltZShhdWRpb1RpbWUuc3BsaXQoXCI6XCIpLnJldmVyc2UoKSkgK1xuICAgICAgICAgICAgZ2V0VGltZShhdWRpb0R1cmF0aW9uLnNwbGl0KFwiOlwiKS5yZXZlcnNlKCkpLFxuICAgIF07XG59XG5sZXQgZWxhcHNlZCwgb2xkVXJsO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYgIT09IG9sZFVybCkge1xuICAgICAgICBvbGRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgIH1cbiAgICBsZXQgZGV0YWlscywgc3RhdGUsIHNtYWxsSW1hZ2VLZXksIHNtYWxsSW1hZ2VUZXh0LCBzdGFydFRpbWVzdGFtcCA9IGVsYXBzZWQsIGVuZFRpbWVzdGFtcCwgcGxheWluZyA9IHRydWU7XG4gICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICB0cnkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKFwiYXBwLmdldG1ldGFzdHJlYW0uY29tXCIpKSB7XG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzID0gXCJIb21lXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk1lbnVUYWJzX190YWJJdGVtX18ybnk2QS5NZW51VGFic19fc2VsZWN0ZWRfX2M2NXdZXCIpO1xuICAgICAgICAgICAgICAgIGlmIChtZW51SXRlbSlcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBgVmlld2luZyAke21lbnVJdGVtLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aC5tYXRjaChcIi9zZXR0aW5nc1wiKSkge1xuICAgICAgICAgICAgICAgIGRldGFpbHMgPSBcIlNldHRpbmdzXCI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlNldHRpbmdzTWVudV9fdGFiSXRlbV9fM3lwa2kuU2V0dGluZ3NNZW51X19zZWxlY3RlZFRhYl9fT01JVExcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdJdGVtKVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IGBWaWV3aW5nICR7c2V0dGluZ0l0ZW0udGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoLm1hdGNoKFwiL2pvaW5cIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNjb25uZWNjdGlvbkxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5EaXNjb25uZWN0X19pbmZvX18zVWVqeCA+IHNwYW5cIik7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQ29ubmVjdF9faW5mb19fM1Z3bHZcIikpXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMgPSBcIkNvbm5lY3RpbmcuLi5cIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkRpc2Nvbm5lY3RfX2luZm9fXzNVZWp4XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMgPSBcIkRpc2Nvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzY29ubmVjY3Rpb25MYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gZGlzY29ubmVjY3Rpb25MYWJlbC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5NZW51SGVhZGVyX19oZWFkZXJfXzFTWXEwXCIpKVxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzID0gXCJTZXR0aW5nIHVwLi4uXCI7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL2xpdmUucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0ID0gKGF3YWl0IHN0cmluZ3MpLmxpdmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5MaXN0T3ZlcmxheV9fbGlzdF9fMWVwRmVcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIVE1MRGl2RWxlbWVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJzLmNoaWxkRWxlbWVudENvdW50ID09PSAxIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlVzZXJJdGVtX19tZW51QnRuX18xU1Q5a1wiKSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHMgPSBgSG9zdGluZyAoJHt1c2Vycy5jaGlsZEVsZW1lbnRDb3VudH0gVXNlcnMpYDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscyA9IGBXYXRjaGluZyAoJHt1c2Vycy5jaGlsZEVsZW1lbnRDb3VudH0gVXNlcnMpYDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlRpdGxlQmFyX190aXRsZV9fM1ZQcFdcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aXRsZSAmJiB0aXRsZS50ZXh0Q29udGVudCAhPT0gXCJNZXRhc3RyZWFtXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5UaW1lbGluZV9fdGltZV9fZ2N2RzU6bnRoLWNoaWxkKDEpXCIpLCBkdXJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuVGltZWxpbmVfX3RpbWVfX2djdkc1Om50aC1jaGlsZCgzKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ICYmIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0YXJ0VGltZXN0YW1wLCBlbmRUaW1lc3RhbXBdID0gZ2V0VGltZXN0YW1wcyhjdXJyZW50LnRleHRDb250ZW50LCBkdXJhdGlvbi50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5QbGF5YmFja0NvbnRyb2xzX19idXR0b25fX1EwcGJlID4gc3ZnID4gdXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheS5ocmVmLmJhc2VWYWwuZW5kc1dpdGgoXCJwYXVzZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEltYWdlVGV4dCA9IChhd2FpdCBzdHJpbmdzKS5wbGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEltYWdlVGV4dCA9IChhd2FpdCBzdHJpbmdzKS5wYXVzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHByZXNlbmNlLmVycm9yKGVycik7XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHtcbiAgICAgICAgZGV0YWlscyxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9NL01ldGFzdHJlYW0vYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHNtYWxsSW1hZ2VLZXksXG4gICAgICAgIHNtYWxsSW1hZ2VUZXh0LFxuICAgICAgICBzdGFydFRpbWVzdGFtcCxcbiAgICAgICAgZW5kVGltZXN0YW1wLFxuICAgIH0sIHBsYXlpbmcpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNM1FpeEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08wbEJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3U1VGRGRrSXNTVUZCU1N4RlFVRkZMR05CUVdNN1EwRkRjRUlzUTBGQlF5eERRVUZETzBGQlJVb3NVMEZCVXl4UFFVRlBMRU5CUVVNc1NVRkJZenRKUVVNNVFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRXaXhMUVVGTExFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzU1VGQlNTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZPMUZCUTNCRUxFZEJRVWNzU1VGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEV0QlFVc3NRMEZCUXp0SlFVVTFReXhQUVVGUExFZEJRVWNzUTBGQlF6dEJRVU5hTEVOQlFVTTdRVUZGUkN4VFFVRlRMR0ZCUVdFc1EwRkJReXhUUVVGcFFpeEZRVUZGTEdGQlFYRkNPMGxCUXpsRUxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVNM1FpeFBRVUZQTzFGQlEwNHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlF6VkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTXpRaXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFpRVU4yUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRMUVVNMVF5eERRVUZETzBGQlEwZ3NRMEZCUXp0QlFVVkVMRWxCUVVrc1QwRkJaU3hGUVVGRkxFMUJRV01zUTBGQlF6dEJRVVZ3UXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4TFFVRkxMRTFCUVUwc1JVRkJSVHRSUVVOd1F5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRE9VSXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRM2hETzBsQlJVUXNTVUZCU1N4UFFVRlBMRVZCUTFZc1MwRkJTeXhGUVVOTUxHRkJRV0VzUlVGRFlpeGpRVUZqTEVWQlEyUXNZMEZCWXl4SFFVRkhMRTlCUVU4c1JVRkRlRUlzV1VGQldTeEZRVU5hTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1NVRkZhRUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRmRFTXNTVUZCU1R0UlFVTklMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMSFZDUVVGMVFpeERRVUZETEVWQlFVVTdXVUZETlVRc1NVRkJTU3hKUVVGSkxFdEJRVXNzUjBGQlJ5eEZRVUZGTzJkQ1FVTnFRaXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETzJkQ1FVVnFRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTjBReXh4UkVGQmNVUXNRMEZEY2tRc1EwRkJRenRuUWtGRFJpeEpRVUZKTEZGQlFWRTdiMEpCUVVVc1MwRkJTeXhIUVVGSExGZEJRVmNzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMkZCUTNoRU8xbEJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8yZENRVU0xUWl4UFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRE8yZENRVVZ5UWl4TlFVRk5MRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU42UXl4blJVRkJaMFVzUTBGRGFFVXNRMEZCUXp0blFrRkRSaXhKUVVGSkxGZEJRVmM3YjBKQlFVVXNTMEZCU3l4SFFVRkhMRmRCUVZjc1YwRkJWeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzJGQlF6bEVPMWxCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPMmRDUVVONFFpeE5RVUZOTEcxQ1FVRnRRaXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEycEVMR2xEUVVGcFF5eERRVU5xUXl4RFFVRkRPMmRDUVVWR0xFbEJRVWtzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4MVFrRkJkVUlzUTBGQlF6dHZRa0ZEYkVRc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF6dHhRa0ZEZEVJc1NVRkJTU3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETERCQ1FVRXdRaXhEUVVGRExFVkJRVVU3YjBKQlF6VkVMRTlCUVU4c1IwRkJSeXhqUVVGakxFTkJRVU03YjBKQlJYcENMRWxCUVVrc2JVSkJRVzFDTzNkQ1FVRkZMRXRCUVVzc1IwRkJSeXh0UWtGQmJVSXNRMEZCUXl4WFFVRlhMRU5CUVVNN2FVSkJRMnBGTzNGQ1FVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5dzBRa0ZCTkVJc1EwRkJRenR2UWtGRE9VUXNUMEZCVHl4SFFVRkhMR1ZCUVdVc1EwRkJRenR4UWtGRGRFSTdiMEpCUTBvc1lVRkJZU3hwUkVGQll5eERRVUZETzI5Q1FVTTFRaXhqUVVGakxFZEJRVWNzUTBGQlF5eE5RVUZOTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenR2UWtGRmRFTXNUVUZCVFN4TFFVRkxMRWRCUTFZc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5d3lRa0ZCTWtJc1EwRkJRenQzUWtGRGJrUXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMjlDUVVVeFF5eEpRVU5ETEV0QlFVc3NRMEZCUXl4cFFrRkJhVUlzUzBGQlN5eERRVUZETzNkQ1FVTTNRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETERKQ1FVRXlRaXhEUVVGRExFdEJRVXNzU1VGQlNUdDNRa0ZGTlVRc1QwRkJUeXhIUVVGSExGbEJRVmtzUzBGQlN5eERRVUZETEdsQ1FVRnBRaXhUUVVGVExFTkJRVU03TzNkQ1FVTnVSQ3hQUVVGUExFZEJRVWNzWVVGQllTeExRVUZMTEVOQlFVTXNhVUpCUVdsQ0xGTkJRVk1zUTBGQlF6dHZRa0ZGTjBRc1RVRkJUU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzI5Q1FVTm9SU3hKUVVGSkxFdEJRVXNzU1VGQlNTeExRVUZMTEVOQlFVTXNWMEZCVnl4TFFVRkxMRmxCUVZrc1JVRkJSVHQzUWtGRGFFUXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU03ZDBKQlJURkNMRTFCUVUwc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEzQkRMSEZEUVVGeFF5eERRVU55UXl4RlFVTkVMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU5vUXl4eFEwRkJjVU1zUTBGRGNrTXNRMEZCUXp0M1FrRkRTQ3hKUVVGSkxFOUJRVThzU1VGQlNTeFJRVUZSTEVWQlFVVTdORUpCUTNoQ0xFTkJRVU1zWTBGQll5eEZRVUZGTEZsQlFWa3NRMEZCUXl4SFFVRkhMR0ZCUVdFc1EwRkROME1zVDBGQlR5eERRVUZETEZkQlFWY3NSVUZEYmtJc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGRGNFSXNRMEZCUXp0NVFrRkRSanQzUWtGRlJDeE5RVUZOTEVsQlFVa3NSMEZCYTBJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGFrUXNPRU5CUVRoRExFTkJRemxETEVOQlFVTTdkMEpCUTBZc1NVRkJTU3hKUVVGSkxFVkJRVVU3TkVKQlExUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1owTkJRM2hETEdGQlFXRXNhVVJCUVdNc1EwRkJRenRuUTBGRE5VSXNZMEZCWXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdaME5CUTNSRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdOa0pCUTJZN2FVTkJRVTA3WjBOQlEwNHNZVUZCWVN4clJFRkJaU3hEUVVGRE8yZERRVU0zUWl4alFVRmpMRWRCUVVjc1EwRkJReXhOUVVGTkxFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0blEwRkRka01zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXpzMlFrRkRhRUk3ZVVKQlEwUTdjVUpCUTBRN2FVSkJRMFE3WVVGRFJEdFRRVU5FTzB0QlEwUTdTVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRSUVVOaUxGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkRjRUk3U1VGRlJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVTnVRanRSUVVORExFOUJRVTg3VVVGRFVDeExRVUZMTzFGQlEwd3NZVUZCWVN4RlFVTmFMR2xGUVVGcFJUdFJRVU5zUlN4aFFVRmhPMUZCUTJJc1kwRkJZenRSUVVOa0xHTkJRV003VVVGRFpDeFpRVUZaTzB0QlExb3NSVUZEUkN4UFFVRlBMRU5CUTFBc1EwRkJRenRCUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJzdHJpbmdzIiwiZ2V0U3RyaW5ncyIsInBsYXkiLCJwYXVzZSIsImxpdmUiLCJnZXRUaW1lIiwibGlzdCIsInJldCIsImluZGV4IiwibGVuZ3RoIiwicGFyc2VJbnQiLCJnZXRUaW1lc3RhbXBzIiwiYXVkaW9UaW1lIiwiYXVkaW9EdXJhdGlvbiIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJzcGxpdCIsInJldmVyc2UiLCJlbGFwc2VkIiwib2xkVXJsIiwib24iLCJhc3luYyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRldGFpbHMiLCJzdGF0ZSIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsImVuZFRpbWVzdGFtcCIsInN0YXJ0VGltZXN0YW1wIiwicGxheWluZyIsInBhdGgiLCJwYXRobmFtZSIsImhvc3RuYW1lIiwibWF0Y2giLCJtZW51SXRlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic2V0dGluZ0l0ZW0iLCJkaXNjb25uZWNjdGlvbkxhYmVsIiwidXNlcnMiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJ0aXRsZSIsImN1cnJlbnQiLCJkdXJhdGlvbiIsImJhc2VWYWwiLCJlbmRzV2l0aCIsImVyciIsImVycm9yIiwic2V0QWN0aXZpdHkiLCJsYXJnZUltYWdlS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;