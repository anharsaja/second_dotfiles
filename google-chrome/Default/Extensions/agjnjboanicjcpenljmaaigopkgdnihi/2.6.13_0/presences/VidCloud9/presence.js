var __webpack_exports__={};const presence=new Presence({clientId:"697552926876368917"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused"});let iFrameVideo,currentTime,duration,paused,video,playback,title,browsingTimestamp;presence.on("iFrameData",(e=>{video=e,playback=!!e.iframeVideo.duration,playback&&(({iFrameVideo,paused}=e.iframeVideo),currentTime=e.iframeVideo.currTime,duration=e.iframeVideo.dur)})),presence.on("UpdateData",(async()=>{const e=await presence.getSetting("sSI"),t=await presence.getSetting("sTE"),a=await presence.getSetting("sVT");t?(browsingTimestamp=Math.floor(Date.now()/1e3),presence.info("Elapsed is on")):(browsingTimestamp=null,presence.info("Elapsed Off"));const s={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/V/VidCloud9/assets/logo.png"};if(a?(presence.info("Video Time is On"),playback&&(browsingTimestamp=Math.floor(Date.now()/1e3))):presence.info("Video time is off"),e)switch(presence.info("Info is On."),document.location.pathname){case"/":s.startTimestamp=browsingTimestamp,s.details="Viewing home page";break;case"/movies":s.startTimestamp=browsingTimestamp,s.details="Viewing the recently added movies";break;case"/series":s.startTimestamp=browsingTimestamp,s.details="Viewing the recently added series";break;case"/cinema-movies":s.startTimestamp=browsingTimestamp,s.details="Viewing the recently added cinema movies.";break;case"/recommended-series":s.startTimestamp=browsingTimestamp,s.details="Viewing recommened series";break;default:document.location.pathname.includes("/videos/")?(title=document.querySelector("#main_bg > div:nth-child(5) > div > div.video-info-left > h1"),title?(s.state=title.textContent,iFrameVideo&&!isNaN(duration)&&title&&video?paused?paused&&(delete s.startTimestamp,delete s.endTimestamp,s.details="Paused:",s.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/pause.png",s.smallImageText=(await strings).pause):(s.details="Watching:",s.smallImageKey=paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",a&&(s.smallImageText=paused?(await strings).pause:(await strings).play,[s.startTimestamp,s.endTimestamp]=presence.getTimestamps(Math.floor(currentTime),Math.floor(duration)))):!iFrameVideo&&isNaN(duration)&&title?(s.details="Viewing:",s.state=title.textContent,s.startTimestamp=browsingTimestamp):(s.details="Error 03: Watching unknown show/movie.",s.state="Can't tell if playing or not.",s.startTimestamp=browsingTimestamp,s.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",s.smallImageText="Error 3",presence.error("Can't tell what you are watching. Fix a variable or line of code."))):(s.startTimestamp=browsingTimestamp,s.details="Error 02: Watching unknown show/movie.",s.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",presence.error("Can't read page."))):" Result search"===document.querySelector("#main_bg > div:nth-child(5) > div > div.section-header > h3").textContent?(presence.info("Searching"),s.details="Searching:",s.state=document.location.href.replace("https://vidcloud9.com/search.html?keyword=",""),s.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",s.smallImageText="Searching"):(s.startTimestamp=browsingTimestamp,s.details="Error 01: Can't Read Page",s.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",presence.error("Can't read page. Set up a conditional."))}else s.details=null,presence.info("Info is off.");s.details?presence.setActivity(s):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWFTLE1BQVFQLFNBQVNDLFNBQVNjLEtBQUtDLFFBQVEsNkNBQThDLElBQ2xHbEIsRUFBYWEsY0FBZ0IsaURBQzdCYixFQUFhYyxlQUFpQixjQUc5QmQsRUFBYUssZUFBaUJwQixrQkFDOUJlLEVBQWFNLFFBQVUsNEJBQ3ZCTixFQUFhYSxjQUFnQixpREFDN0IxQyxTQUFTNkMsTUFBTSxnREFLM0JoQixFQUFhTSxRQUFVLEtBQ3ZCbkMsU0FBU3FCLEtBQUssZ0JBRWJRLEVBQWFNLFFBSWRuQyxTQUFTZ0QsWUFBWW5CLEdBSHJCN0IsU0FBU2dELGFBSWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjk3NTUyOTI2ODc2MzY4OTE3XCIsXG59KSwgc3RyaW5ncyA9IHByZXNlbmNlLmdldFN0cmluZ3Moe1xuICAgIHBsYXk6IFwiZ2VuZXJhbC5wbGF5aW5nXCIsXG4gICAgcGF1c2U6IFwiZ2VuZXJhbC5wYXVzZWRcIixcbn0pO1xubGV0IGlGcmFtZVZpZGVvLCBjdXJyZW50VGltZSwgZHVyYXRpb24sIHBhdXNlZCwgdmlkZW8sIHBsYXliYWNrLCB0aXRsZSwgYnJvd3NpbmdUaW1lc3RhbXA7XG5wcmVzZW5jZS5vbihcImlGcmFtZURhdGFcIiwgKGRhdGEpID0+IHtcbiAgICB2aWRlbyA9IGRhdGE7XG4gICAgcGxheWJhY2sgPSAhIWRhdGEuaWZyYW1lVmlkZW8uZHVyYXRpb247XG4gICAgaWYgKHBsYXliYWNrKSB7XG4gICAgICAgICh7IGlGcmFtZVZpZGVvLCBwYXVzZWQgfSA9IGRhdGEuaWZyYW1lVmlkZW8pO1xuICAgICAgICBjdXJyZW50VGltZSA9IGRhdGEuaWZyYW1lVmlkZW8uY3VyclRpbWU7XG4gICAgICAgIGR1cmF0aW9uID0gZGF0YS5pZnJhbWVWaWRlby5kdXI7XG4gICAgfVxufSk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGluZm8gPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwic1NJXCIpLCBlbGFwc2VkID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInNURVwiKSwgdmlkZW9UaW1lID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInNWVFwiKTtcbiAgICBpZiAoZWxhcHNlZCkge1xuICAgICAgICBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBwcmVzZW5jZS5pbmZvKFwiRWxhcHNlZCBpcyBvblwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJyb3dzaW5nVGltZXN0YW1wID0gbnVsbDtcbiAgICAgICAgcHJlc2VuY2UuaW5mbyhcIkVsYXBzZWQgT2ZmXCIpO1xuICAgIH1cbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9WL1ZpZENsb3VkOS9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9O1xuICAgIGlmICh2aWRlb1RpbWUpIHtcbiAgICAgICAgcHJlc2VuY2UuaW5mbyhcIlZpZGVvIFRpbWUgaXMgT25cIik7XG4gICAgICAgIGlmIChwbGF5YmFjaykge1xuICAgICAgICAgICAgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLmluZm8oXCJWaWRlbyB0aW1lIGlzIG9mZlwiKTtcbiAgICBpZiAoaW5mbykge1xuICAgICAgICBwcmVzZW5jZS5pbmZvKFwiSW5mbyBpcyBPbi5cIik7XG4gICAgICAgIHN3aXRjaCAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCIvXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBob21lIHBhZ2VcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvbW92aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgcmVjZW50bHkgYWRkZWQgbW92aWVzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL3Nlcmllc1wiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIHJlY2VudGx5IGFkZGVkIHNlcmllc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9jaW5lbWEtbW92aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgcmVjZW50bHkgYWRkZWQgY2luZW1hIG1vdmllcy5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvcmVjb21tZW5kZWQtc2VyaWVzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyByZWNvbW1lbmVkIHNlcmllc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdmlkZW9zL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbl9iZyA+IGRpdjpudGgtY2hpbGQoNSkgPiBkaXYgPiBkaXYudmlkZW8taW5mby1sZWZ0ID4gaDFcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaUZyYW1lVmlkZW8gJiYgIWlzTmFOKGR1cmF0aW9uKSAmJiB0aXRsZSAmJiB2aWRlbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJXYXRjaGluZzpcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBwYXVzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2aWRlb1RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHBhdXNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGF3YWl0IHN0cmluZ3MpLnBhdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoYXdhaXQgc3RyaW5ncykucGxheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKE1hdGguZmxvb3IoY3VycmVudFRpbWUpLCBNYXRoLmZsb29yKGR1cmF0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUGF1c2VkOlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IChhd2FpdCBzdHJpbmdzKS5wYXVzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaUZyYW1lVmlkZW8gJiYgaXNOYU4oZHVyYXRpb24pICYmIHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmc6XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRXJyb3IgMDM6IFdhdGNoaW5nIHVua25vd24gc2hvdy9tb3ZpZS5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkNhbid0IHRlbGwgaWYgcGxheWluZyBvciBub3QuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIkVycm9yIDNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5lcnJvcihcIkNhbid0IHRlbGwgd2hhdCB5b3UgYXJlIHdhdGNoaW5nLiBGaXggYSB2YXJpYWJsZSBvciBsaW5lIG9mIGNvZGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRXJyb3IgMDI6IFdhdGNoaW5nIHVua25vd24gc2hvdy9tb3ZpZS5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5lcnJvcihcIkNhbid0IHJlYWQgcGFnZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluX2JnID4gZGl2Om50aC1jaGlsZCg1KSA+IGRpdiA+IGRpdi5zZWN0aW9uLWhlYWRlciA+IGgzXCIpLnRleHRDb250ZW50ID09PSBcIiBSZXN1bHQgc2VhcmNoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2UuaW5mbyhcIlNlYXJjaGluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZzpcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiaHR0cHM6Ly92aWRjbG91ZDkuY29tL3NlYXJjaC5odG1sP2tleXdvcmQ9XCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlNlYXJjaGluZ1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFcnJvciAwMTogQ2FuJ3QgUmVhZCBQYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmVycm9yKFwiQ2FuJ3QgcmVhZCBwYWdlLiBTZXQgdXAgYSBjb25kaXRpb25hbC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IG51bGw7XG4gICAgICAgIHByZXNlbmNlLmluZm8oXCJJbmZvIGlzIG9mZi5cIik7XG4gICAgfVxuICAgIGlmICghcHJlc2VuY2VEYXRhLmRldGFpbHMpIHtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNM1FpeEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08wbEJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3UTBGRGRrSXNRMEZCUXl4RFFVRkRPMEZCUlVvc1NVRkJTU3hYUVVGdlFpeEZRVU4yUWl4WFFVRnRRaXhGUVVOdVFpeFJRVUZuUWl4RlFVTm9RaXhOUVVGbExFVkJRMllzUzBGUlF5eEZRVU5FTEZGQlFXbENMRVZCUTJwQ0xFdEJRVEJDTEVWQlF6RkNMR2xDUVVGNVFpeERRVUZETzBGQlJUTkNMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRMVlzV1VGQldTeEZRVU5hTEVOQlFVTXNTVUZSUVN4RlFVRkZMRVZCUVVVN1NVRkRTaXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzBsQlEySXNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTjJReXhKUVVGSkxGRkJRVkVzUlVGQlJUdFJRVU5pTEVOQlFVTXNSVUZCUlN4WFFVRlhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUXpkRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVONFF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU03UzBGRGFFTTdRVUZEUml4RFFVRkRMRU5CUTBRc1EwRkJRenRCUVVWR0xGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeExRVUZMTEVOQlFVTXNSVUZEY2tRc1QwRkJUeXhIUVVGSExFMUJRVTBzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4TFFVRkxMRU5CUVVNc1JVRkRia1FzVTBGQlV5eEhRVUZITEUxQlFVMHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVVYyUkN4SlFVRkpMRTlCUVU4c1JVRkJSVHRSUVVOYUxHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMnhFTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03UzBGREwwSTdVMEZCVFR0UlFVTk9MR2xDUVVGcFFpeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjZRaXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMHRCUXpkQ08wbEJRMFFzVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJ4RExHRkJRV0VzUlVGRFdpeG5SVUZCWjBVN1MwRkRha1VzUTBGQlF6dEpRVU5HTEVsQlFVa3NVMEZCVXl4RlFVRkZPMUZCUTJRc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xRkJRMnhETEVsQlFVa3NVVUZCVVN4RlFVRkZPMWxCUldJc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRiRVE3UzBGRFJEczdVVUZCVFN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN1NVRkZNVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdVVUZEVkN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlF6ZENMRkZCUVZFc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVTdXVUZEYmtNc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEVkN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMmRDUVVOb1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzJkQ1FVVXpReXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRPMmRDUVVObUxGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03WjBKQlEyaEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYlVOQlFXMURMRU5CUVVNN1owSkJSVE5FTEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU03WjBKQlEyWXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0blFrRkRhRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dFEwRkJiVU1zUTBGQlF6dG5Ra0ZGTTBRc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8yZENRVU4wUWl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMmRDUVVOb1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMREpEUVVFeVF5eERRVUZETzJkQ1FVVnVSU3hOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEhGQ1FVRnhRaXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1owSkJRMmhFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01rSkJRVEpDTEVOQlFVTTdaMEpCUjI1RUxFMUJRVTA3WVVGRFRqdFpRVU5FTzJkQ1FVTkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8yOUNRVU53UkN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE4wSXNPRVJCUVRoRUxFTkJRemxFTEVOQlFVTTdiMEpCUTBZc1NVRkJTU3hMUVVGTExFVkJRVVU3ZDBKQlExWXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETzNkQ1FVTjJReXhKUVVGSkxGZEJRVmNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hMUVVGTExFbEJRVWtzUzBGQlN5eEZRVUZGT3pSQ1FVTjBSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzJkRFFVTmFMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVjBGQlZ5eERRVUZETzJkRFFVTnVReXhaUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZITEUxQlFVMDdiME5CUTJ4RExFTkJRVU03YjBOQlEwUXNRMEZCUXl3clEwRkJXU3hEUVVGRE8yZERRVU5tTEVsQlFVa3NVMEZCVXl4RlFVRkZPMjlEUVVOa0xGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NUVUZCVFR0M1EwRkRia01zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTE8zZERRVU4yUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0dlEwRkRlRUlzUTBGQlF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RlFVRkZMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU03ZDBOQlEzWkVMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM0pDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRM1pDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRM0JDTEVOQlFVTTdhVU5CUTBnN05rSkJRMFE3YVVOQlFVMHNTVUZCU1N4TlFVRk5MRVZCUVVVN1owTkJRMnhDTEU5QlFVOHNXVUZCV1N4RFFVRkRMR05CUVdNc1EwRkJRenRuUTBGRGJrTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRE8yZERRVU5xUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGTkJRVk1zUTBGQlF6dG5RMEZEYWtNc1dVRkJXU3hEUVVGRExHRkJRV0VzYTBSQlFXVXNRMEZCUXp0blEwRkRNVU1zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZET3paQ1FVTndSRHQ1UWtGRFJEczJRa0ZCVFN4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4TFFVRkxMRVZCUVVVN05FSkJRM0JFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRE96UkNRVU5zUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTTdORUpCUTNaRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03ZVVKQlEyaEVPelpDUVVGTk96UkNRVU5PTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwTkJRWGRETEVOQlFVTTdORUpCUTJoRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NLMEpCUVN0Q0xFTkJRVU03TkVKQlEzSkVMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzYVVKQlFXbENMRU5CUVVNN05FSkJRMmhFTEZsQlFWa3NRMEZCUXl4aFFVRmhMRzFFUVVGblFpeERRVUZET3pSQ1FVTXpReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEZOQlFWTXNRMEZCUXpzMFFrRkRlRU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZEWWl4dFJVRkJiVVVzUTBGRGJrVXNRMEZCUXp0NVFrRkRSanR4UWtGRFJEdDVRa0ZCVFR0M1FrRkZUaXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8zZENRVU5vUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIZERRVUYzUXl4RFFVRkRPM2RDUVVOb1JTeFpRVUZaTEVOQlFVTXNZVUZCWVN4dFJFRkJaMElzUTBGQlF6dDNRa0ZETTBNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8zRkNRVU51UXp0cFFrRkRSRHR4UWtGQlRTeEpRVU5PTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNKQ0xEWkVRVUUyUkN4RFFVTTNSQ3hEUVVGRExGZEJRVmNzUzBGQlN5eG5Ra0ZCWjBJc1JVRkRha003YjBKQlEwUXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dHZRa0ZETTBJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFpRVUZaTEVOQlFVTTdiMEpCUTNCRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVU5zUkN3MFEwRkJORU1zUlVGRE5VTXNSVUZCUlN4RFFVTkdMRU5CUVVNN2IwSkJRMFlzV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03YjBKQlF6TkRMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVjBGQlZ5eERRVUZETzJsQ1FVTXhRenR4UWtGQlRUdHZRa0ZGVGl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMjlDUVVOb1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMREpDUVVFeVFpeERRVUZETzI5Q1FVTnVSQ3haUVVGWkxFTkJRVU1zWVVGQllTeHRSRUZCWjBJc1EwRkJRenR2UWtGRE0wTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXgzUTBGQmQwTXNRMEZCUXl4RFFVRkRPMmxDUVVONlJEdFRRVU5HTzB0QlEwUTdVMEZCVFR0UlFVTk9MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlF6VkNMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdTMEZET1VJN1NVRkZSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNSVUZCUlR0UlFVY3hRaXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdTMEZEZGtJN1UwRkJUVHRSUVVWT0xGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1MwRkRia003UVVGRFJpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJzdHJpbmdzIiwiZ2V0U3RyaW5ncyIsInBsYXkiLCJwYXVzZSIsImlGcmFtZVZpZGVvIiwiY3VycmVudFRpbWUiLCJkdXJhdGlvbiIsInBhdXNlZCIsInZpZGVvIiwicGxheWJhY2siLCJ0aXRsZSIsImJyb3dzaW5nVGltZXN0YW1wIiwib24iLCJkYXRhIiwiaWZyYW1lVmlkZW8iLCJjdXJyVGltZSIsImR1ciIsImFzeW5jIiwiaW5mbyIsImdldFNldHRpbmciLCJlbGFwc2VkIiwidmlkZW9UaW1lIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdGFydFRpbWVzdGFtcCIsImRldGFpbHMiLCJpbmNsdWRlcyIsInF1ZXJ5U2VsZWN0b3IiLCJzdGF0ZSIsInRleHRDb250ZW50IiwiaXNOYU4iLCJlbmRUaW1lc3RhbXAiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJnZXRUaW1lc3RhbXBzIiwiZXJyb3IiLCJocmVmIiwicmVwbGFjZSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;