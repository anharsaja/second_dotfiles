var __webpack_exports__={};const presence=new Presence({clientId:"702375041320484944"}),browsingTimestamp=Math.floor(Date.now()/1e3);let search,title,director,video,Name;function getSeconds(e,t){const a=e.split(":"),s=t.split(":");return presence.getTimestamps(Math.floor(60*+a[0]*60+60*+a[1]+ +a[2]),Math.floor(60*+s[0]*60+60*+s[1]+ +s[2]))}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/E/Einthusan/assets/logo.jpg",startTimestamp:browsingTimestamp};switch(document.location.pathname){case"/movie/browse/":e.details="Browsing Movies";break;case"/movie/results/":search=document.querySelector("#content > div.results-info > h5 > span").textContent,e.details=`Searching: ${search}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="searching",e.state="Movie";break;case"/movie-clip/results/music-video/":search=document.querySelector("#content > div.results-info > h5 > span").textContent,e.details=`Searching: ${search}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="searching",e.state="Music Video";break;case"/movie-clip/playlist/results/music-video/":search=document.querySelector("#content > div.results-info > h5 > span").textContent,e.details=`Searching: ${search}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="searching",e.state="Music Video Playlist";break;case"/movie-clip/results/clip/":search=document.querySelector("#content > div.results-info > h5 > span").textContent,e.details=`Searching: ${search}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="searching",e.state="Movie Clip";break;case"/movie-clip/playlist/results/clip/":search=document.querySelector("#content > div.results-info > h5 > span").textContent,e.details=`Searching: ${search}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="searching",e.state="Movie Clip Playlist";break;default:if(0===document.location.pathname.indexOf("/movie/watch/")){title=document.querySelector("#UIMovieSummary > ul > li > div.block2 > a > h3").textContent;const t=document.querySelector("div.professionals").querySelectorAll("div").length;director=document.querySelector(`div.professionals > div:nth-child(${t-t/3} ) > div.prof > p`).textContent,video=document.querySelector("#icons-and-text > div#play.show");const a=document.querySelector("#controlbar > div.durations > div.content-duration").textContent;Name=document.querySelector("#UIMovieSummary > ul > li > div.block2 > div.info > p:nth-child(1)").firstChild.nodeValue,video||"--:--:--"===a?video&&"--:--:--"!==a?(e.details=`${title} (${Name})`,e.state=director,delete e.startTimestamp,delete e.endTimestamp,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/pause.png",e.smallImageText="paused"):(e.details=`${title} (${Name})`,e.state=director,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="Browsing"):([e.startTimestamp,e.endTimestamp]=getSeconds(document.querySelector("#controlbar > div.durations > div.watched-duration").textContent,a),e.details=`${title} (${Name})`,e.state=director,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText="playing")}else switch(document.location.pathname){case"/privacy/":e.details="Viewing privacy";break;case"/terms/":e.details="Viewing terms of service";break;case"/adblocker/":e.details="Look at the adblock turn off page",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="Turning off Adblock";break;case"/intro/":e.details="Selecting Language";break;case"/launcher/":e.details="Viewing Menu";break;case"/login/":e.details="Logining In";break;case"/register/":e.details="Signing Up";break;case"/movie/speedtest/":e.details="Running A Speed Test";break;case"/e500/":e.details="Logging a Bug.",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="Logging a Bug";break;case"/movie-clip/playlist/browse/clip/":e.details="Viewing Movie Clips";break;default:document.location.pathname.includes("/feed")?"/feed/home/"===document.location.pathname?e.details="Viewing your feed.":e.details=`Viewing: ${document.querySelector("#UIFeedSidebar > div.quickinfo > h2").textContent}`:"/movie-clip/playlist/browse/music-video/"===document.location.pathname?e.details="Viewing music videos":"/account/"===document.location.pathname?e.details="Viewing account details":e.details="Unable to Read Page"}}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBR25CLFVBQVVHLFFBQ3BDVSxFQUFhVyxNQUFRdkIsU0FDckJZLEVBQWFTLGNBQWdCLCtDQUM3QlQsRUFBYVUsZUFBaUIsVUFnQnRDLE1BRUksT0FBUVAsU0FBU0MsU0FBU0MsVUFDdEIsSUFBSyxZQUNETCxFQUFhTSxRQUFVLGtCQUN2QixNQUVKLElBQUssVUFDRE4sRUFBYU0sUUFBVSwyQkFDdkIsTUFFSixJQUFLLGNBQ0ROLEVBQWFNLFFBQVUsb0NBQ3ZCTixFQUFhUyxjQUFnQixpREFDN0JULEVBQWFVLGVBQWlCLHNCQUM5QixNQUVKLElBQUssVUFDRFYsRUFBYU0sUUFBVSxxQkFDdkIsTUFFSixJQUFLLGFBQ0ROLEVBQWFNLFFBQVUsZUFDdkIsTUFFSixJQUFLLFVBQ0ROLEVBQWFNLFFBQVUsY0FDdkIsTUFFSixJQUFLLGFBQ0ROLEVBQWFNLFFBQVUsYUFDdkIsTUFFSixJQUFLLG9CQUNETixFQUFhTSxRQUFVLHVCQUN2QixNQUVKLElBQUssU0FDRE4sRUFBYU0sUUFBVSxpQkFDdkJOLEVBQWFTLGNBQWdCLGlEQUM3QlQsRUFBYVUsZUFBaUIsZ0JBQzlCLE1BRUosSUFBSyxvQ0FDRFYsRUFBYU0sUUFBVSxzQkFDdkIsTUFFSixRQUNRSCxTQUFTQyxTQUFTQyxTQUFTZSxTQUFTLFNBQ0QsZ0JBQS9CakIsU0FBU0MsU0FBU0MsU0FDbEJMLEVBQWFNLFFBQVUscUJBRXZCTixFQUFhTSxRQUFVLFlBQVlILFNBQVNJLGNBQWMsdUNBQ3JEQyxjQUlULDZDQURLTCxTQUFTQyxTQUFTQyxTQUV2QkwsRUFBYU0sUUFBVSx1QkFDYSxjQUEvQkgsU0FBU0MsU0FBU0MsU0FDdkJMLEVBQWFNLFFBQVUsMEJBRXZCTixFQUFhTSxRQUFVLHVCQUkzQ04sRUFBYU0sUUFDYjVCLFNBQVMyQyxZQUFZckIsR0FFckJ0QixTQUFTMkMsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI3MDIzNzUwNDEzMjA0ODQ5NDRcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xubGV0IHNlYXJjaCwgdGl0bGUsIGRpcmVjdG9yLCB2aWRlbywgTmFtZTtcbmZ1bmN0aW9uIGdldFNlY29uZHModmlkZW9UaW1lLCB2aWRlb0R1cmF0aW9uKSB7XG4gICAgY29uc3QgYSA9IHZpZGVvVGltZS5zcGxpdChcIjpcIiksIGIgPSB2aWRlb0R1cmF0aW9uLnNwbGl0KFwiOlwiKTtcbiAgICByZXR1cm4gcHJlc2VuY2UuZ2V0VGltZXN0YW1wcyhNYXRoLmZsb29yKCthWzBdICogNjAgKiA2MCArICthWzFdICogNjAgKyArYVsyXSksIE1hdGguZmxvb3IoK2JbMF0gKiA2MCAqIDYwICsgK2JbMV0gKiA2MCArICtiWzJdKSk7XG59XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0UvRWludGh1c2FuL2Fzc2V0cy9sb2dvLmpwZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfTtcbiAgICBzd2l0Y2ggKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgIGNhc2UgXCIvbW92aWUvYnJvd3NlL1wiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgTW92aWVzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiL21vdmllL3Jlc3VsdHMvXCI6IHtcbiAgICAgICAgICAgIHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IGRpdi5yZXN1bHRzLWluZm8gPiBoNSA+IHNwYW5cIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBTZWFyY2hpbmc6ICR7c2VhcmNofWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJzZWFyY2hpbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiTW92aWVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCIvbW92aWUtY2xpcC9yZXN1bHRzL211c2ljLXZpZGVvL1wiOiB7XG4gICAgICAgICAgICBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQgPiBkaXYucmVzdWx0cy1pbmZvID4gaDUgPiBzcGFuXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU2VhcmNoaW5nOiAke3NlYXJjaH1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwic2VhcmNoaW5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIk11c2ljIFZpZGVvXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiL21vdmllLWNsaXAvcGxheWxpc3QvcmVzdWx0cy9tdXNpYy12aWRlby9cIjoge1xuICAgICAgICAgICAgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50ID4gZGl2LnJlc3VsdHMtaW5mbyA+IGg1ID4gc3BhblwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFNlYXJjaGluZzogJHtzZWFyY2h9YDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcInNlYXJjaGluZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJNdXNpYyBWaWRlbyBQbGF5bGlzdFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIi9tb3ZpZS1jbGlwL3Jlc3VsdHMvY2xpcC9cIjoge1xuICAgICAgICAgICAgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50ID4gZGl2LnJlc3VsdHMtaW5mbyA+IGg1ID4gc3BhblwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFNlYXJjaGluZzogJHtzZWFyY2h9YDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcInNlYXJjaGluZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJNb3ZpZSBDbGlwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiL21vdmllLWNsaXAvcGxheWxpc3QvcmVzdWx0cy9jbGlwL1wiOiB7XG4gICAgICAgICAgICBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQgPiBkaXYucmVzdWx0cy1pbmZvID4gaDUgPiBzcGFuXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU2VhcmNoaW5nOiAke3NlYXJjaH1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwic2VhcmNoaW5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIk1vdmllIENsaXAgUGxheWxpc3RcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihcIi9tb3ZpZS93YXRjaC9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjVUlNb3ZpZVN1bW1hcnkgPiB1bCA+IGxpID4gZGl2LmJsb2NrMiA+IGEgPiBoM1wiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiZGl2LnByb2Zlc3Npb25hbHNcIilcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIikubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGRpcmVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2LnByb2Zlc3Npb25hbHMgPiBkaXY6bnRoLWNoaWxkKCR7Y291bnQgLSBjb3VudCAvIDN9ICkgPiBkaXYucHJvZiA+IHBgKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvbnMtYW5kLXRleHQgPiBkaXYjcGxheS5zaG93XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbGJhciA+IGRpdi5kdXJhdGlvbnMgPiBkaXYuY29udGVudC1kdXJhdGlvblwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNVSU1vdmllU3VtbWFyeSA+IHVsID4gbGkgPiBkaXYuYmxvY2syID4gZGl2LmluZm8gPiBwOm50aC1jaGlsZCgxKVwiKS5maXJzdENoaWxkLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXZpZGVvICYmIGVuZCAhPT0gXCItLTotLTotLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID0gZ2V0U2Vjb25kcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRyb2xiYXIgPiBkaXYuZHVyYXRpb25zID4gZGl2LndhdGNoZWQtZHVyYXRpb25cIikudGV4dENvbnRlbnQsIGVuZCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7dGl0bGV9ICgke05hbWV9KWA7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRpcmVjdG9yO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJwbGF5aW5nXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZpZGVvICYmIGVuZCAhPT0gXCItLTotLTotLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7dGl0bGV9ICgke05hbWV9KWA7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRpcmVjdG9yO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcInBhdXNlZFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgJHt0aXRsZX0gKCR7TmFtZX0pYDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZGlyZWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiQnJvd3NpbmdcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvcHJpdmFjeS9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgcHJpdmFjeVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi90ZXJtcy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGVybXMgb2Ygc2VydmljZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9hZGJsb2NrZXIvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb29rIGF0IHRoZSBhZGJsb2NrIHR1cm4gb2ZmIHBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlR1cm5pbmcgb2ZmIEFkYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvaW50cm8vXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWxlY3RpbmcgTGFuZ3VhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvbGF1bmNoZXIvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIE1lbnVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvbG9naW4vXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb2dpbmluZyBJblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9yZWdpc3Rlci9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNpZ25pbmcgVXBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvbW92aWUvc3BlZWR0ZXN0L1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUnVubmluZyBBIFNwZWVkIFRlc3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvZTUwMC9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvZ2dpbmcgYSBCdWcuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJMb2dnaW5nIGEgQnVnXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL21vdmllLWNsaXAvcGxheWxpc3QvYnJvd3NlL2NsaXAvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIE1vdmllIENsaXBzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2ZlZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2ZlZWQvaG9tZS9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgeW91ciBmZWVkLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nOiAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjVUlGZWVkU2lkZWJhciA+IGRpdi5xdWlja2luZm8gPiBoMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvbW92aWUtY2xpcC9wbGF5bGlzdC9icm93c2UvbXVzaWMtdmlkZW8vXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgbXVzaWMgdmlkZW9zXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYWNjb3VudC9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhY2NvdW50IGRldGFpbHNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVW5hYmxlIHRvIFJlYWQgUGFnZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeEpRVUZKTEUxQlFXTXNSVUZEYWtJc1MwRkJZU3hGUVVOaUxGRkJRV2RDTEVWQlEyaENMRXRCUVd0Q0xFVkJRMnhDTEVsQlFWa3NRMEZCUXp0QlFVVmtMRk5CUVZNc1ZVRkJWU3hEUVVGRExGTkJRV2xDTEVWQlFVVXNZVUZCY1VJN1NVRkRNMFFzVFVGQlRTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGRE4wSXNRMEZCUXl4SFFVRkhMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZET1VJc1QwRkJUeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU0xUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTJoRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGRGFFUXNRMEZCUXp0QlFVTklMRU5CUVVNN1FVRkZSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRiRU1zWVVGQllTeEZRVU5hTEdkRlFVRm5SVHRSUVVOcVJTeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVOQlFVTTdTVUZEUml4UlFVRlJMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFGQlEyNURMRXRCUVVzc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0WlFVTjBRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8xbEJRM3BETEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0WlFVVjJRaXhOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZET1VJc2VVTkJRWGxETEVOQlEzcERMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRMlFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4alFVRmpMRTFCUVUwc1JVRkJSU3hEUVVGRE8xbEJRemxETEZsQlFWa3NRMEZCUXl4aFFVRmhMRzFFUVVGblFpeERRVUZETzFsQlF6TkRMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVjBGQlZ5eERRVUZETzFsQlF6RkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETzFsQlJUZENMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzYTBOQlFXdERMRU5CUVVNc1EwRkJRenRaUVVONFF5eE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRPVUlzZVVOQlFYbERMRU5CUTNwRExFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlEyUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhqUVVGakxFMUJRVTBzUlVGQlJTeERRVUZETzFsQlF6bERMRmxCUVZrc1EwRkJReXhoUVVGaExHMUVRVUZuUWl4RFFVRkRPMWxCUXpORExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NWMEZCVnl4RFFVRkRPMWxCUXpGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NZVUZCWVN4RFFVRkRPMWxCUlc1RExFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NNa05CUVRKRExFTkJRVU1zUTBGQlF6dFpRVU5xUkN4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE9VSXNlVU5CUVhsRExFTkJRM3BETEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUTJRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGpRVUZqTEUxQlFVMHNSVUZCUlN4RFFVRkRPMWxCUXpsRExGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8xbEJRek5ETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1YwRkJWeXhEUVVGRE8xbEJRekZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdXVUZGTlVNc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5d3lRa0ZCTWtJc1EwRkJReXhEUVVGRE8xbEJRMnBETEUxQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNNVFpeDVRMEZCZVVNc1EwRkRla01zUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEWkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHTkJRV01zVFVGQlRTeEZRVUZGTEVOQlFVTTdXVUZET1VNc1dVRkJXU3hEUVVGRExHRkJRV0VzYlVSQlFXZENMRU5CUVVNN1dVRkRNME1zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4WFFVRlhMRU5CUVVNN1dVRkRNVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4WlFVRlpMRU5CUVVNN1dVRkZiRU1zVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4dlEwRkJiME1zUTBGQlF5eERRVUZETzFsQlF6RkRMRTFCUVUwc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU01UWl4NVEwRkJlVU1zUTBGRGVrTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRaQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdOQlFXTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1dVRkRPVU1zV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03V1VGRE0wTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhYUVVGWExFTkJRVU03V1VGRE1VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0WlFVVXpReXhOUVVGTk8xTkJRMDQ3VVVGRFJEdFpRVU5ETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGRk9VUXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRemRDTEdsRVFVRnBSQ3hEUVVOcVJDeERRVUZETEZkQlFWY3NRMEZCUXp0blFrRkRaQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eFJRVUZSTzNGQ1FVTndRaXhoUVVGaExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNN2NVSkJRMnhETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkRha01zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTJoRExIRkRRVU5ETEV0QlFVc3NSMEZCUnl4TFFVRkxMRWRCUVVjc1EwRkRha0lzYlVKQlFXMUNMRU5CUTI1Q0xFTkJRVU1zVjBGQlZ5eERRVUZETzJkQ1FVTmtMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdsRFFVRnBReXhEUVVGRExFTkJRVU03WjBKQlEyeEZMRTFCUVUwc1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEycERMRzlFUVVGdlJDeERRVU53UkN4RFFVRkRMRmRCUVZjc1EwRkJRenRuUWtGRFpDeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkROVUlzYjBWQlFXOUZMRU5CUTNCRkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXp0blFrRkRka0lzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4SFFVRkhMRXRCUVVzc1ZVRkJWU3hGUVVGRk8yOUNRVU5xUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhqUVVGakxFVkJRVVVzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkRjRVVzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc2IwUkJRVzlFTEVOQlEzQkVMRU5CUVVNc1YwRkJWeXhGUVVOaUxFZEJRVWNzUTBGRFNDeERRVUZETzI5Q1FVTkdMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUjBGQlJ5eExRVUZMTEV0QlFVc3NTVUZCU1N4SFFVRkhMRU5CUVVNN2IwSkJRelZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRE8yOUNRVU01UWl4WlFVRlpMRU5CUVVNc1lVRkJZU3hwUkVGQll5eERRVUZETzI5Q1FVTjZReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEZOQlFWTXNRMEZCUXp0cFFrRkRlRU03Y1VKQlFVMHNTVUZCU1N4TFFVRkxMRWxCUVVrc1IwRkJSeXhMUVVGTExGVkJRVlVzUlVGQlJUdHZRa0ZEZGtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eEhRVUZITEV0QlFVc3NTMEZCU3l4SlFVRkpMRWRCUVVjc1EwRkJRenR2UWtGRE5VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU03YjBKQlF6bENMRTlCUVU4c1dVRkJXU3hEUVVGRExHTkJRV01zUTBGQlF6dHZRa0ZEYmtNc1QwRkJUeXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETzI5Q1FVTnFReXhaUVVGWkxFTkJRVU1zWVVGQllTeHJSRUZCWlN4RFFVRkRPMjlDUVVNeFF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRkZCUVZFc1EwRkJRenRwUWtGRGRrTTdjVUpCUVUwN2IwSkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4SFFVRkhMRXRCUVVzc1MwRkJTeXhKUVVGSkxFZEJRVWNzUTBGQlF6dHZRa0ZGTlVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTTdiMEpCUXpsQ0xGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8yOUNRVU16UXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExGVkJRVlVzUTBGQlF6dHBRa0ZEZWtNN1lVRkRSRHRwUWtGQlRUdG5Ra0ZEVGl4UlFVRlJMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTzI5Q1FVTnVReXhMUVVGTExGZEJRVmNzUTBGQlF5eERRVUZETzNkQ1FVVnFRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8zZENRVVY2UXl4TlFVRk5PM0ZDUVVOT08yOUNRVU5FTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN2QwSkJRMllzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3d1FrRkJNRUlzUTBGQlF6dDNRa0ZEYkVRc1RVRkJUVHR4UWtGRFRqdHZRa0ZEUkN4TFFVRkxMR0ZCUVdFc1EwRkJReXhEUVVGRE8zZENRVU51UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMURRVUZ0UXl4RFFVRkRPM2RDUVVVelJDeFpRVUZaTEVOQlFVTXNZVUZCWVN4dFJFRkJaMElzUTBGQlF6dDNRa0ZETTBNc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenQzUWtGRmNFUXNUVUZCVFR0eFFrRkRUanR2UWtGRFJDeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRPM2RDUVVObUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03ZDBKQlF6VkRMRTFCUVUwN2NVSkJRMDQ3YjBKQlEwUXNTMEZCU3l4WlFVRlpMRU5CUVVNc1EwRkJRenQzUWtGRGJFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhqUVVGakxFTkJRVU03ZDBKQlEzUkRMRTFCUVUwN2NVSkJRMDQ3YjBKQlEwUXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJRenQzUWtGRFppeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR0ZCUVdFc1EwRkJRenQzUWtGRGNrTXNUVUZCVFR0eFFrRkRUanR2UWtGRFJDeExRVUZMTEZsQlFWa3NRMEZCUXl4RFFVRkRPM2RDUVVOc1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJRenQzUWtGRGNFTXNUVUZCVFR0eFFrRkRUanR2UWtGRFJDeExRVUZMTEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03ZDBKQlEzcENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN2QwSkJRemxETEUxQlFVMDdjVUpCUTA0N2IwSkJRMFFzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0M1FrRkRaQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8zZENRVVY0UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h0UkVGQlowSXNRMEZCUXp0M1FrRkRNME1zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4bFFVRmxMRU5CUVVNN2QwSkJSVGxETEUxQlFVMDdjVUpCUTA0N2IwSkJRMFFzUzBGQlN5eHRRMEZCYlVNc1EwRkJReXhEUVVGRE8zZENRVU42UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPM2RDUVVNM1F5eE5RVUZOTzNGQ1FVTk9PMjlDUVVORU8zZENRVU5ETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPelJDUVVOcVJDeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hMUVVGTExHRkJRV0U3WjBOQlF5OURMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN2FVTkJRM2hETzJkRFFVTktMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzV1VGRGRFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh4UTBGQmNVTXNRMEZCUXp0eFEwRkRNMFFzVjBGRFNDeEZRVUZGTEVOQlFVTTdOa0pCUTBnN2VVSkJRMFE3TmtKQlFVMHNTVUZEVGl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkU3TkVKQlF6RkNMREJEUVVFd1F6czBRa0ZGTVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHpRa0ZCYzBJc1EwRkJRenMyUWtGRE1VTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUzBGQlN5eFhRVUZYT3pSQ1FVTnNSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRE96czBRa0ZETjBNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenRwUWtGRGJrUTdZVUZEUkR0TFFVTkdPMGxCUlVRc1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR6dFJRVUZGTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03TzFGQlEzaEVMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEJRVU0zUWl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNlYXJjaCIsInRpdGxlIiwiZGlyZWN0b3IiLCJ2aWRlbyIsIk5hbWUiLCJnZXRTZWNvbmRzIiwidmlkZW9UaW1lIiwidmlkZW9EdXJhdGlvbiIsImEiLCJzcGxpdCIsImIiLCJnZXRUaW1lc3RhbXBzIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImRldGFpbHMiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJzdGF0ZSIsImluZGV4T2YiLCJjb3VudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJlbmQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwiZW5kVGltZXN0YW1wIiwiaW5jbHVkZXMiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;