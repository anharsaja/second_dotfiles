var __webpack_exports__={};const presence=new Presence({clientId:"1006563035957182545"}),browsingTimestamp=Math.floor(Date.now()/1e3);let video={current:0,duration:0,paused:!0};presence.on("iFrameData",(e=>{video=e})),presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/Animea/assets/logo.png",startTimestamp:browsingTimestamp},t=document.location.pathname.split("/"),[a,s,r]=await Promise.all([presence.getSetting("time"),presence.getSetting("cover"),presence.getSetting("buttons")]);switch(t[1]){case"":e.details="Parcours la page d'accueil";break;case"discovery":{e.details="Découvre de nouveaux animes";const t=document.querySelector("div.filter-value").textContent.trim();"Tout"!==t&&(e.state=`Type : ${t}`);break}case"series":case"movies":{e.details="Parcours les "+("series"===t[1]?"animés":"films animés");const a=document.querySelector("div.filter-value").textContent.trim();"Tout"!==a&&(e.state=`Catégorie : ${a}`);break}case"categories":e.details="Parcours les catégories";break;case"category":e.details="Parcours la catégorie",e.state=document.querySelector("div.text-24").textContent.trim();break;case"serie":if(t[2].includes("-episode")){e.details=`Regarde ${document.querySelector("a > h1").textContent.trim()}`;const t=document.querySelector(".mb-1").textContent.trim().split(".");e.state=`Saison ${t[0]}, Épisode ${t[1].split(" ")[1]}`,[e.startTimestamp,e.endTimestamp]=presence.getTimestamps(video.current,video.duration),e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText="Lecture en cours",video.paused&&(e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/pause.png",e.smallImageText="En pause",delete e.startTimestamp,delete e.endTimestamp),e.largeImageKey=document.querySelector('meta[property="og:image"]').getAttribute("content"),e.buttons=[{label:"Voir l'épisode",url:document.location.href},{label:"Voir l'animé",url:document.location.href.replace(/-\d*-season-\d*-episode/gm,"")}]}else e.details="Parcours la page de",e.state=document.querySelector("div.pl-md-4 > h1").textContent.trim(),e.largeImageKey=document.querySelector('meta[property="og:image"]').getAttribute("content"),e.buttons=[{label:"Voir l'animé",url:document.location.href}]}a||(delete e.startTimestamp,delete e.endTimestamp),s||(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/A/Animea/assets/logo.png"),r||delete e.buttons,e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2UoeyBjbGllbnRJZDogXCIxMDA2NTYzMDM1OTU3MTgyNTQ1XCIgfSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5sZXQgdmlkZW8gPSB7XG4gICAgY3VycmVudDogMCxcbiAgICBkdXJhdGlvbjogMCxcbiAgICBwYXVzZWQ6IHRydWUsXG59O1xucHJlc2VuY2Uub24oXCJpRnJhbWVEYXRhXCIsIChkYXRhKSA9PiB7XG4gICAgdmlkZW8gPSBkYXRhO1xufSk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0EvQW5pbWVhL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgcGF0aG5hbWVBcnJheSA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKSwgW3RpbWUsIHNob3dDb3Zlciwgc2hvd0J1dHRvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwidGltZVwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImNvdmVyXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKSxcbiAgICBdKTtcbiAgICBzd2l0Y2ggKHBhdGhuYW1lQXJyYXlbMV0pIHtcbiAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBhcmNvdXJzIGxhIHBhZ2UgZCdhY2N1ZWlsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRpc2NvdmVyeVwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRMOpY291dnJlIGRlIG5vdXZlYXV4IGFuaW1lc1wiO1xuICAgICAgICAgICAgY29uc3QgcXVlcnlUZXh0ID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImRpdi5maWx0ZXItdmFsdWVcIilcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHF1ZXJ5VGV4dCAhPT0gXCJUb3V0XCIpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFR5cGUgOiAke3F1ZXJ5VGV4dH1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInNlcmllc1wiOlxuICAgICAgICBjYXNlIFwibW92aWVzXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFBhcmNvdXJzIGxlcyAke3BhdGhuYW1lQXJyYXlbMV0gPT09IFwic2VyaWVzXCIgPyBcImFuaW3DqXNcIiA6IFwiZmlsbXMgYW5pbcOpc1wifWA7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVRleHQgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiZGl2LmZpbHRlci12YWx1ZVwiKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBpZiAocXVlcnlUZXh0ICE9PSBcIlRvdXRcIilcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgQ2F0w6lnb3JpZSA6ICR7cXVlcnlUZXh0fWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiY2F0ZWdvcmllc1wiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBhcmNvdXJzIGxlcyBjYXTDqWdvcmllc1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjYXRlZ29yeVwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBhcmNvdXJzIGxhIGNhdMOpZ29yaWVcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJkaXYudGV4dC0yNFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNlcmllXCI6IHtcbiAgICAgICAgICAgIGlmIChwYXRobmFtZUFycmF5WzJdLmluY2x1ZGVzKFwiLWVwaXNvZGVcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBSZWdhcmRlICR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJhID4gaDFcIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5VGV4dCA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1iLTFcIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBTYWlzb24gJHtxdWVyeVRleHRbMF19LCDDiXBpc29kZSAke3F1ZXJ5VGV4dFsxXS5zcGxpdChcIiBcIilbMV19YDtcbiAgICAgICAgICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHModmlkZW8uY3VycmVudCwgdmlkZW8uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiTGVjdHVyZSBlbiBjb3Vyc1wiO1xuICAgICAgICAgICAgICAgIGlmICh2aWRlby5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIkVuIHBhdXNlXCI7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKVxuICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogXCJWb2lyIGwnw6lwaXNvZGVcIiwgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZvaXIgbCdhbmltw6lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8tXFxkKi1zZWFzb24tXFxkKi1lcGlzb2RlL2dtLCBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBhcmNvdXJzIGxhIHBhZ2UgZGVcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImRpdi5wbC1tZC00ID4gaDFcIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKVxuICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogXCJWb2lyIGwnYW5pbcOpXCIsIHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZiB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRpbWUpIHtcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcDtcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgfVxuICAgIGlmICghc2hvd0NvdmVyKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9BL0FuaW1lYS9hc3NldHMvbG9nby5wbmdcIjtcbiAgICB9XG4gICAgaWYgKCFzaG93QnV0dG9ucylcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5idXR0b25zO1xuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeHhRa0ZCY1VJc1JVRkJSU3hEUVVGRExFVkJRMnBGTEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlJXNUVMRWxCUVVrc1MwRkJTeXhIUVVGSE8wbEJRMWdzVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZEVml4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOWUxFMUJRVTBzUlVGQlJTeEpRVUZKTzBOQlExb3NRMEZCUXp0QlFVVkdMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRMVlzV1VGQldTeEZRVU5hTEVOQlFVTXNTVUZCTkVRc1JVRkJSU3hGUVVGRk8wbEJRMmhGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRaQ3hEUVVGRExFTkJRMFFzUTBGQlF6dEJRVVZHTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5xUXl4aFFVRmhMRVZCUTFvc05rUkJRVFpFTzFGQlF6bEVMR05CUVdNc1JVRkJSU3hwUWtGQmFVSTdTMEZEYWtNc1JVRkRSQ3hoUVVGaExFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVU55UkN4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzVjBGQlZ5eERRVUZETEVkQlFVY3NUVUZCVFN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRMnhFTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1RVRkJUU3hEUVVGRE8xRkJRM0JETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1QwRkJUeXhEUVVGRE8xRkJRM0pETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1UwRkJVeXhEUVVGRE8wdEJRM1pETEVOQlFVTXNRMEZCUXp0SlFVVktMRkZCUVZFc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzFGQlEzcENMRXRCUVVzc1JVRkJSVHRaUVVOT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NORUpCUVRSQ0xFTkJRVU03V1VGRGNFUXNUVUZCVFR0UlFVTlFMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRGFrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcyUWtGQk5rSXNRMEZCUXp0WlFVTnlSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eFJRVUZSTzJsQ1FVTjRRaXhoUVVGaExFTkJRV2xDTEd0Q1FVRnJRaXhEUVVGRE8ybENRVU5xUkN4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRGNrSXNTVUZCU1N4VFFVRlRMRXRCUVVzc1RVRkJUVHRuUWtGQlJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1UwRkJVeXhGUVVGRkxFTkJRVU03V1VGRGNrVXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhSUVVGUkxFTkJRVU03VVVGRFpDeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUTJRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZEZEVJc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eGpRVU0xUXl4RlFVRkZMRU5CUVVNN1dVRkRTQ3hOUVVGTkxGTkJRVk1zUjBGQlZ5eFJRVUZSTzJsQ1FVTm9ReXhoUVVGaExFTkJRV2xDTEd0Q1FVRnJRaXhEUVVGRE8ybENRVU5xUkN4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRGNrSXNTVUZCU1N4VFFVRlRMRXRCUVVzc1RVRkJUVHRuUWtGQlJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR1ZCUVdVc1UwRkJVeXhGUVVGRkxFTkJRVU03V1VGRE1VVXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhaUVVGWk8xbEJRMmhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTTdXVUZEYWtRc1RVRkJUVHRSUVVOUUxFdEJRVXNzVlVGQlZUdFpRVU5rTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdXVUZETDBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTzJsQ1FVTXpRaXhoUVVGaExFTkJRV2xDTEdGQlFXRXNRMEZCUXp0cFFrRkROVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUTNKQ0xFMUJRVTA3VVVGRFVDeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTJJc1NVRkJTU3hoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8yZENRVU14UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRVmNzVVVGQlVUdHhRa0ZEZUVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF6dHhRa0ZEZGtJc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTTdaMEpCUTNaQ0xFMUJRVTBzVTBGQlV5eEhRVUZoTEZGQlFWRTdjVUpCUTJ4RExHRkJRV0VzUTBGQmNVSXNUMEZCVHl4RFFVRkRPM0ZDUVVNeFF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZPM0ZDUVVOc1FpeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMklzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4VlFVRlZMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGRE1VTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUXpGQ0xFVkJRVVVzUTBGQlF6dG5Ra0ZGU0N4RFFVRkRMRmxCUVZrc1EwRkJReXhqUVVGakxFVkJRVVVzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0dlFrRkRka1FzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkZka1FzV1VGQldTeERRVUZETEdGQlFXRXNhVVJCUVdNc1EwRkJRenRuUWtGRGVrTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0blFrRkZha1FzU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZPMjlDUVVOcVFpeFpRVUZaTEVOQlFVTXNZVUZCWVN4clJFRkJaU3hEUVVGRE8yOUNRVU14UXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExGVkJRVlVzUTBGQlF6dHZRa0ZEZWtNc1QwRkJUeXhaUVVGWkxFTkJRVU1zWTBGQll5eERRVUZETzI5Q1FVTnVReXhQUVVGUExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTTdhVUpCUTJwRE8yZENRVVZFTEZsQlFWa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1VVRkJVVHR4UWtGRGJrTXNZVUZCWVN4RFFVRnJRaXd5UWtGQk1rSXNRMEZCUXp0eFFrRkRNMFFzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMmRDUVVVeFFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFpeEZRVUZGTEV0QlFVc3NSVUZCUlN4blFrRkJaMElzUlVGQlJTeEhRVUZITEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVU3YjBKQlEzaEVPM2RDUVVORExFdEJRVXNzUlVGQlJTeGpRVUZqTzNkQ1FVTnlRaXhIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVOc1F5d3lRa0ZCTWtJc1JVRkRNMElzUlVGQlJTeERRVU5HTzNGQ1FVTkVPMmxDUVVORUxFTkJRVU03WVVGRFJqdHBRa0ZCVFR0blFrRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8yZENRVU0zUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkU3Y1VKQlF6TkNMR0ZCUVdFc1EwRkJjVUlzYTBKQlFXdENMRU5CUVVNN2NVSkJRM0pFTEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRuUWtGRmNrSXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhSUVVGUk8zRkNRVU51UXl4aFFVRmhMRU5CUVd0Q0xESkNRVUV5UWl4RFFVRkRPM0ZDUVVNelJDeFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1owSkJRekZDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN2IwSkJRM1JDTEVWQlFVVXNTMEZCU3l4RlFVRkZMR05CUVdNc1JVRkJSU3hIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVN2FVSkJRM1JFTEVOQlFVTTdZVUZEUmp0WlFVTkVMRTFCUVUwN1UwRkRUanRMUVVORU8wbEJSVVFzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlR0UlFVTldMRTlCUVU4c1dVRkJXU3hEUVVGRExHTkJRV01zUTBGQlF6dFJRVU51UXl4UFFVRlBMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU03UzBGRGFrTTdTVUZEUkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8xRkJRMllzV1VGQldTeERRVUZETEdGQlFXRTdXVUZEZWtJc05rUkJRVFpFTEVOQlFVTTdTMEZETDBRN1NVRkRSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ6dFJRVUZGTEU5QlFVOHNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVVNVF5eEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXpzN1VVRkRlRVFzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpkQ0xFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ2aWRlbyIsImN1cnJlbnQiLCJkdXJhdGlvbiIsInBhdXNlZCIsIm9uIiwiZGF0YSIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGF0aG5hbWVBcnJheSIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwidGltZSIsInNob3dDb3ZlciIsInNob3dCdXR0b25zIiwiUHJvbWlzZSIsImFsbCIsImdldFNldHRpbmciLCJkZXRhaWxzIiwicXVlcnlUZXh0IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwidHJpbSIsInN0YXRlIiwiaW5jbHVkZXMiLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiZ2V0QXR0cmlidXRlIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiaHJlZiIsInJlcGxhY2UiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;