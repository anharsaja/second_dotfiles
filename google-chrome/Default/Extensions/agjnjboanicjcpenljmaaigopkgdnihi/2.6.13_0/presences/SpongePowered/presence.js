var __webpack_exports__={};const presence=new Presence({clientId:"626496186496450570"}),browsingTimestamp=Math.floor(Date.now()/1e3);let user,search,title;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/SpongePowered/assets/logo.png"};switch(e.startTimestamp=browsingTimestamp,document.location.hostname){case"forums.spongepowered.org":document.location.pathname.includes("/t/")?(title=document.querySelector("#topic-title > div > div > h1 > a.fancy-title"),null===title&&(title=document.querySelector("#ember6 > header > div > div > div.extra-info-wrapper > div > div > h1 > a > span")),e.details="Forums, viewing thread:",title.textContent.length>128?e.state=`${title.textContent.substring(0,125)}...`:e.state=title.textContent,delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/c/")?(title=document.querySelector("head > title"),e.details="Forums, viewing category:",[,e.state]=title.textContent.split("topics")[0].split("Latest"),delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/search")?(search=document.querySelector("#ember14 > div.search-advanced > div.search-info > div.result-count > span.term"),search?(e.details="Forums, Searching for:",e.state=search.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",presence.setActivity(e)):(e.details="Forums, Going to search",e.state="something up",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",presence.setActivity(e))):document.location.pathname.includes("/u/")?(user=document.querySelector("#main-outlet > div:nth-child(3) > section > section > div.details > div.primary > div.primary-textual > h1"),e.details="Forums, viewing user:",e.state=user.textContent,delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/accounts/")?(e.details="Forums, account settings",delete e.state,delete e.smallImageKey,presence.setActivity(e)):(e.details="Forums, Browsing...",delete e.state,delete e.smallImageKey,presence.setActivity(e));break;case"docs.spongepowered.org":title=document.querySelector("body > div.wy-grid-for-nav > section > div > div > div.document > div > div > h1"),title?(e.details="Docs, reading:",e.state=title.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",presence.setActivity(e)):(e.details="Docs, Browsing...",delete e.state,delete e.smallImageKey,presence.setActivity(e));break;case"jd.spongepowered.org":{title=document.querySelector("head > title");const[t]=title.textContent.split(" (");e.details="Java Docs, viewing:",t.length>128?e.state=`${t.substring(0,125)}...`:e.state=t,delete e.smallImageKey,presence.setActivity(e);break}case"www.spongepowered.org":document.location.pathname.includes("/downloads/")?(e.details="Viewing downloads",delete e.state,delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/chat")?(e.details="Viewing chat",delete e.state,delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/sponsors")?(e.details="Viewing sponsors",delete e.state,delete e.smallImageKey,presence.setActivity(e)):presence.setActivity();break;case"ore.spongepowered.org":document.URL.includes("?categories=")?(title=document.querySelector("body > div > div > div.row.project-content > div.col-md-3 > div:nth-child(3) > table > tbody > tr.selected > td:nth-child(2) > strong"),e.details="Ore, viewing category:",e.state=title.textContent,delete e.smallImageKey,presence.setActivity(e)):document.querySelector("body > div > div > div.project-header-container")?(title=document.querySelector("body > div > div > div.project-header-container > div:nth-child(1) > div > div > h1 > strong > a"),e.details="Ore, Viewing resource:",title.textContent.length>128?e.state=`${title.textContent.substring(0,125)}...`:e.state=title.textContent,delete e.smallImageKey,presence.setActivity(e)):document.querySelector("body > div > div > div.row.user-header > div > span > span > h1")?(user=document.querySelector("body > div > div > div.row.user-header > div > span > span > h1"),e.details="Ore, Viewing author:",e.state=user.textContent,delete e.smallImageKey,presence.setActivity(e)):document.URL.includes("?q=")?(search=document.querySelector("body > div > div > div.row.project-content > div.col-md-9 > li > span.pull-left > i"),e.details="Ore, searching for:",e.state=search.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",presence.setActivity(e)):(e.details="Ore, Browsing...",delete e.state,delete e.smallImageKey,presence.setActivity(e));break;default:presence.setActivity()}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM0QixZQUFZZixJQUVoQkcsU0FBU0MsU0FBU0UsU0FBU0MsU0FBUyxjQUN6Q1AsRUFBYVMsUUFBVSwwQkFDaEJULEVBQWFZLGFBQ2JaLEVBQWFjLGNBQ3BCM0IsU0FBUzRCLFlBQVlmLElBR3JCYixTQUFTNEIsY0FDYixNQUVKLElBQUssd0JBQ0daLFNBQVNlLElBQUlYLFNBQVMsaUJBQ3RCVixNQUFRTSxTQUFTSyxjQUFjLHlJQUMvQlIsRUFBYVMsUUFBVSx5QkFDdkJULEVBQWFZLE1BQVFmLE1BQU1hLG1CQUNwQlYsRUFBYWMsY0FDcEIzQixTQUFTNEIsWUFBWWYsSUFFaEJHLFNBQVNLLGNBQWMsb0RBQzVCWCxNQUFRTSxTQUFTSyxjQUFjLG9HQUMvQlIsRUFBYVMsUUFBVSx5QkFDbkJaLE1BQU1hLFlBQVlDLE9BQVMsSUFDM0JYLEVBQWFZLE1BQVEsR0FBR2YsTUFBTWEsWUFBWUcsVUFBVSxFQUFHLFVBRXZEYixFQUFhWSxNQUFRZixNQUFNYSxtQkFDeEJWLEVBQWFjLGNBQ3BCM0IsU0FBUzRCLFlBQVlmLElBRWhCRyxTQUFTSyxjQUFjLG9FQUM1QmIsS0FBT1EsU0FBU0ssY0FBYyxtRUFDOUJSLEVBQWFTLFFBQVUsdUJBQ3ZCVCxFQUFhWSxNQUFRakIsS0FBS2UsbUJBQ25CVixFQUFhYyxjQUNwQjNCLFNBQVM0QixZQUFZZixJQUVoQkcsU0FBU2UsSUFBSVgsU0FBUyxRQUMzQlgsT0FBU08sU0FBU0ssY0FBYyx1RkFDaENSLEVBQWFTLFFBQVUsc0JBQ3ZCVCxFQUFhWSxNQUFRaEIsT0FBT2MsWUFDNUJWLEVBQWFjLGNBQWdCLGlEQUM3QjNCLFNBQVM0QixZQUFZZixLQUdyQkEsRUFBYVMsUUFBVSwwQkFDaEJULEVBQWFZLGFBQ2JaLEVBQWFjLGNBQ3BCM0IsU0FBUzRCLFlBQVlmLElBRXpCLE1BRUosUUFDSWIsU0FBUzRCLGNBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYyNjQ5NjE4NjQ5NjQ1MDU3MFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5sZXQgdXNlciwgc2VhcmNoLCB0aXRsZTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TcG9uZ2VQb3dlcmVkL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgIH07XG4gICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgc3dpdGNoIChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSkge1xuICAgICAgICBjYXNlIFwiZm9ydW1zLnNwb25nZXBvd2VyZWQub3JnXCI6IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi90L1wiKSkge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3BpYy10aXRsZSA+IGRpdiA+IGRpdiA+IGgxID4gYS5mYW5jeS10aXRsZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYmVyNiA+IGhlYWRlciA+IGRpdiA+IGRpdiA+IGRpdi5leHRyYS1pbmZvLXdyYXBwZXIgPiBkaXYgPiBkaXYgPiBoMSA+IGEgPiBzcGFuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIHRocmVhZDpcIjtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUudGV4dENvbnRlbnQubGVuZ3RoID4gMTI4KVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHt0aXRsZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgMTI1KX0uLi5gO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jL1wiKSkge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWQgPiB0aXRsZVwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIGNhdGVnb3J5OlwiO1xuICAgICAgICAgICAgICAgIFssIHByZXNlbmNlRGF0YS5zdGF0ZV0gPSB0aXRsZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCJ0b3BpY3NcIilbMF1cbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiTGF0ZXN0XCIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvc2VhcmNoXCIpKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWJlcjE0ID4gZGl2LnNlYXJjaC1hZHZhbmNlZCA+IGRpdi5zZWFyY2gtaW5mbyA+IGRpdi5yZXN1bHQtY291bnQgPiBzcGFuLnRlcm1cIik7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCBTZWFyY2hpbmcgZm9yOlwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzZWFyY2gudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCBHb2luZyB0byBzZWFyY2hcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJzb21ldGhpbmcgdXBcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi91L1wiKSkge1xuICAgICAgICAgICAgICAgIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tb3V0bGV0ID4gZGl2Om50aC1jaGlsZCgzKSA+IHNlY3Rpb24gPiBzZWN0aW9uID4gZGl2LmRldGFpbHMgPiBkaXYucHJpbWFyeSA+IGRpdi5wcmltYXJ5LXRleHR1YWwgPiBoMVwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIHVzZXI6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdXNlci50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FjY291bnRzL1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJGb3J1bXMsIGFjY291bnQgc2V0dGluZ3NcIjtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXRlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZvcnVtcywgQnJvd3NpbmcuLi5cIjtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXRlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImRvY3Muc3BvbmdlcG93ZXJlZC5vcmdcIjoge1xuICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdi53eS1ncmlkLWZvci1uYXYgPiBzZWN0aW9uID4gZGl2ID4gZGl2ID4gZGl2LmRvY3VtZW50ID4gZGl2ID4gZGl2ID4gaDFcIik7XG4gICAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRG9jcywgcmVhZGluZzpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkRvY3MsIEJyb3dzaW5nLi4uXCI7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJqZC5zcG9uZ2Vwb3dlcmVkLm9yZ1wiOiB7XG4gICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkID4gdGl0bGVcIik7XG4gICAgICAgICAgICBjb25zdCBbdGl0bGUyXSA9IHRpdGxlLnRleHRDb250ZW50LnNwbGl0KFwiIChcIik7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSmF2YSBEb2NzLCB2aWV3aW5nOlwiO1xuICAgICAgICAgICAgaWYgKHRpdGxlMi5sZW5ndGggPiAxMjgpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7dGl0bGUyLnN1YnN0cmluZygwLCAxMjUpfS4uLmA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUyO1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJ3d3cuc3BvbmdlcG93ZXJlZC5vcmdcIjoge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2Rvd25sb2Fkcy9cIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBkb3dubG9hZHNcIjtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXRlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvY2hhdFwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGNoYXRcIjtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXRlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvc3BvbnNvcnNcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBzcG9uc29yc1wiO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhdGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJvcmUuc3BvbmdlcG93ZXJlZC5vcmdcIjoge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LlVSTC5pbmNsdWRlcyhcIj9jYXRlZ29yaWVzPVwiKSkge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYgPiBkaXYucm93LnByb2plY3QtY29udGVudCA+IGRpdi5jb2wtbWQtMyA+IGRpdjpudGgtY2hpbGQoMykgPiB0YWJsZSA+IHRib2R5ID4gdHIuc2VsZWN0ZWQgPiB0ZDpudGgtY2hpbGQoMikgPiBzdHJvbmdcIik7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIk9yZSwgdmlld2luZyBjYXRlZ29yeTpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2ID4gZGl2LnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKSkge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYgPiBkaXYucHJvamVjdC1oZWFkZXItY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGRpdiA+IGgxID4gc3Ryb25nID4gYVwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiT3JlLCBWaWV3aW5nIHJlc291cmNlOlwiO1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZS50ZXh0Q29udGVudC5sZW5ndGggPiAxMjgpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3RpdGxlLnRleHRDb250ZW50LnN1YnN0cmluZygwLCAxMjUpfS4uLmA7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2ID4gZGl2LnJvdy51c2VyLWhlYWRlciA+IGRpdiA+IHNwYW4gPiBzcGFuID4gaDFcIikpIHtcbiAgICAgICAgICAgICAgICB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYgPiBkaXYucm93LnVzZXItaGVhZGVyID4gZGl2ID4gc3BhbiA+IHNwYW4gPiBoMVwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiT3JlLCBWaWV3aW5nIGF1dGhvcjpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB1c2VyLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwiP3E9XCIpKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYgPiBkaXYucm93LnByb2plY3QtY29udGVudCA+IGRpdi5jb2wtbWQtOSA+IGxpID4gc3Bhbi5wdWxsLWxlZnQgPiBpXCIpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJPcmUsIHNlYXJjaGluZyBmb3I6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc2VhcmNoLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJPcmUsIEJyb3dzaW5nLi4uXCI7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeEpRVUZKTEVsQlFYRkNMRVZCUVVVc1RVRkJkVUlzUlVGQlJTeExRVUZyUWl4RFFVRkRPMEZCUlhaRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNXVUZCV1N4SFFVRnBRanRSUVVOc1F5eGhRVUZoTEVWQlExb3NiMFZCUVc5Rk8wdEJRM0pGTEVOQlFVTTdTVUZGUml4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMGxCUTJoRUxGRkJRVkVzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRia01zUzBGQlN5d3dRa0ZCTUVJc1EwRkJReXhEUVVGRE8xbEJRMmhETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVNdlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkROMElzSzBOQlFTdERMRU5CUXk5RExFTkJRVU03WjBKQlEwWXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTU3hGUVVGRk8yOUNRVU51UWl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE4wSXNiVVpCUVcxR0xFTkJRMjVHTEVOQlFVTTdhVUpCUTBZN1owSkJSVVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4NVFrRkJlVUlzUTBGQlF6dG5Ra0ZEYWtRc1NVRkJTU3hMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhPMjlDUVVOcVF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU03TzI5Q1FVTTNSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNN1owSkJSVFZETEU5QlFVOHNXVUZCV1N4RFFVRkRMR0ZCUVdFc1EwRkJRenRuUWtGRGJFTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dGhRVU51UXp0cFFrRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdG5Ra0ZEZEVRc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1owSkJReTlETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01rSkJRVEpDTEVOQlFVTTdaMEpCUTI1RUxFTkJRVU1zUlVGQlJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmM3Y1VKQlEzaERMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdjVUpCUTJ4Q0xFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkZiRUlzVDBGQlR5eFpRVUZaTEVOQlFVTXNZVUZCWVN4RFFVRkRPMmRDUVVWc1F5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8yRkJRMjVETzJsQ1FVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8yZENRVU14UkN4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE9VSXNhVVpCUVdsR0xFTkJRMnBHTEVOQlFVTTdaMEpCUTBZc1NVRkJTU3hOUVVGTkxFVkJRVVU3YjBKQlExZ3NXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0dlFrRkRhRVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRE8yOUNRVVY0UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h0UkVGQlowSXNRMEZCUXp0dlFrRkZNME1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRwUWtGRGJrTTdjVUpCUVUwN2IwSkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4NVFrRkJlVUlzUTBGQlF6dHZRa0ZEYWtRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGpRVUZqTEVOQlFVTTdiMEpCUlhCRExGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8yOUNRVVV6UXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJsQ1FVTnVRenRoUVVORU8ybENRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOMFJDeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkROVUlzTkVkQlFUUkhMRU5CUXpWSExFTkJRVU03WjBKQlEwWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0blFrRkRMME1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8yZENRVVYwUXl4UFFVRlBMRmxCUVZrc1EwRkJReXhoUVVGaExFTkJRVU03WjBKQlJXeERMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdZVUZEYmtNN2FVSkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVTdaMEpCUXpkRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU03WjBKQlEyeEVMRTlCUVU4c1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF6dG5Ra0ZGTVVJc1QwRkJUeXhaUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETzJkQ1FVVnNReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMkZCUTI1RE8ybENRVUZOTzJkQ1FVTk9MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN1owSkJRemRETEU5QlFVOHNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJRenRuUWtGRk1VSXNUMEZCVHl4WlFVRlpMRU5CUVVNc1lVRkJZU3hEUVVGRE8yZENRVVZzUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJGQlEyNURPMWxCUlVRc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eDNRa0ZCZDBJc1EwRkJReXhEUVVGRE8xbEJRemxDTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNM1FpeHJSa0ZCYTBZc1EwRkRiRVlzUTBGQlF6dFpRVU5HTEVsQlFVa3NTMEZCU3l4RlFVRkZPMmRDUVVOV0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03WjBKQlEzaERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXp0blFrRkZka01zV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03WjBKQlJUVkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdZVUZEYmtNN2FVSkJRVTA3WjBKQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0blFrRkRNME1zVDBGQlR5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRPMmRDUVVVeFFpeFBRVUZQTEZsQlFWa3NRMEZCUXl4aFFVRmhMRU5CUVVNN1owSkJSV3hETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03WVVGRGJrTTdXVUZGUkN4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExITkNRVUZ6UWl4RFFVRkRMRU5CUVVNN1dVRkROVUlzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03V1VGREwwTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJReTlETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTTdXVUZETjBNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVYzdaMEpCUTNSQ0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRPenRuUWtGRGJFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU03V1VGRmFrTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1lVRkJZU3hEUVVGRE8xbEJSV3hETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03V1VGRmJrTXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXgxUWtGQmRVSXNRMEZCUXl4RFFVRkRPMWxCUXpkQ0xFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eEZRVUZGTzJkQ1FVTjJSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8yZENRVU16UXl4UFFVRlBMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU03WjBKQlJURkNMRTlCUVU4c1dVRkJXU3hEUVVGRExHRkJRV0VzUTBGQlF6dG5Ra0ZGYkVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0aFFVTnVRenRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0blFrRkRlRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4alFVRmpMRU5CUVVNN1owSkJRM1JETEU5QlFVOHNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJRenRuUWtGRk1VSXNUMEZCVHl4WlFVRlpMRU5CUVVNc1lVRkJZU3hEUVVGRE8yZENRVVZzUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJGQlEyNURPMmxDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTzJkQ1FVTTFSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8yZENRVU14UXl4UFFVRlBMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU03WjBKQlJURkNMRTlCUVU4c1dVRkJXU3hEUVVGRExHRkJRV0VzUTBGQlF6dG5Ra0ZGYkVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0aFFVTnVRenM3WjBKQlFVMHNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xbEJSVGxDTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc2RVSkJRWFZDTEVOQlFVTXNRMEZCUXp0WlFVTTNRaXhKUVVGSkxGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8yZENRVU14UXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE4wSXNkVWxCUVhWSkxFTkJRM1pKTEVOQlFVTTdaMEpCUTBZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJRenRuUWtGRGFFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETzJkQ1FVVjJReXhQUVVGUExGbEJRVmtzUTBGQlF5eGhRVUZoTEVOQlFVTTdaMEpCUld4RExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1lVRkRia003YVVKQlFVMHNTVUZEVGl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVFpeHBSRUZCYVVRc1EwRkRha1FzUlVGRFFUdG5Ra0ZEUkN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE4wSXNhMGRCUVd0SExFTkJRMnhITEVOQlFVTTdaMEpCUTBZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJRenRuUWtGRGFFUXNTVUZCU1N4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITzI5Q1FVTnFReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNN08yOUNRVU0zUkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTTdaMEpCUlRWRExFOUJRVThzV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXp0blFrRkZiRU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRoUVVOdVF6dHBRa0ZCVFN4SlFVTk9MRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM0pDTEdsRlFVRnBSU3hEUVVOcVJTeEZRVU5CTzJkQ1FVTkVMRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU0xUWl4cFJVRkJhVVVzUTBGRGFrVXNRMEZCUXp0blFrRkRSaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8yZENRVU01UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdaMEpCUlhSRExFOUJRVThzV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXp0blFrRkZiRU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRoUVVOdVF6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVONFF5eE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRPVUlzY1VaQlFYRkdMRU5CUTNKR0xFTkJRVU03WjBKQlEwWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0blFrRkROME1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRE8yZENRVVY0UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h0UkVGQlowSXNRMEZCUXp0blFrRkZNME1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRoUVVOdVF6dHBRa0ZCVFR0blFrRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8yZENRVU14UXl4UFFVRlBMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU03WjBKQlJURkNMRTlCUVU4c1dVRkJXU3hEUVVGRExHRkJRV0VzUTBGQlF6dG5Ra0ZGYkVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0aFFVTnVRenRaUVVWRUxFMUJRVTA3VTBGRFRqdFJRVU5FTzFsQlEwTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wdEJRM2hDTzBGQlEwWXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwidXNlciIsInNlYXJjaCIsInRpdGxlIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJxdWVyeVNlbGVjdG9yIiwiZGV0YWlscyIsInRleHRDb250ZW50IiwibGVuZ3RoIiwic3RhdGUiLCJzdWJzdHJpbmciLCJzbWFsbEltYWdlS2V5Iiwic2V0QWN0aXZpdHkiLCJzcGxpdCIsInRpdGxlMiIsIlVSTCJdLCJzb3VyY2VSb290IjoiIn0=
undefined;