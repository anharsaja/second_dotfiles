var __webpack_exports__={};const presence=new Presence({clientId:"691406198091677737"});function parseQueryString(e){e??=window.location.search.substring(1);const t={},n=e.split("&");for(const e in n){const n=e.split("=");t[decodeURIComponent(n[0])]=decodeURIComponent(n.length>1?n[1]:"")}return t}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/E/Electron/assets/logo.png"},t=document.location.pathname.split("/");if(e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText=`Language : ${document.querySelector("a.site-header-nav-item.bordered.lang-select-button").textContent}`,"/"===document.location.pathname)e.details="Home";else if(document.location.pathname.includes("/apps"))t[2]?(e.details="Watching app",e.state=document.querySelector("h1.f00-light.lh-condensed.mb-3").textContent):(e.details="Apps",e.state=parseQueryString(document.location.hash).q?`Searching ${parseQueryString(document.location.hash).q} ${parseQueryString(document.location.hash).category?`(${parseQueryString(document.location.hash).category})`:""}`:"Watching apps list "+(parseQueryString(document.location.hash).category?`(${parseQueryString(document.location.hash).category})`:""));else if(document.location.pathname.includes("/docs"))if(t[2])switch(t[2]){case"tutorial":t[3]?(e.details="Docs / Guides",e.state=document.querySelector("title").textContent.replace(" | Electron","")):e.details=document.querySelector("h4.f3-light.docs-breadcrumbs").textContent;break;case"api":t[3]?"structures"===t[3]?t[4]?(e.details="Docs / API Structures",e.state=document.querySelector("title").textContent.replace(" | Electron","")):e.details=document.querySelector("h4.f3-light.docs-breadcrumbs").textContent:(e.details="Docs / API",e.state=document.querySelector("title").textContent.replace(" | Electron","")):e.details=document.querySelector("h4.f3-light.docs-breadcrumbs").textContent;break;case"development":t[3]?(e.details="Docs / Development",e.state=document.querySelector("title").textContent.replace(" | Electron","")):e.details=document.querySelector("h4.f3-light.docs-breadcrumbs").textContent}else e.details=document.querySelector("span.f0-light.mr-3.mr-lg-4").textContent;else if(document.location.pathname.includes("/blog"))if(t[2]){const[t,n]=document.querySelector("title").textContent.split(" | ");e.details=t,e.state=n}else e.details=document.querySelector("h1.f00-light").textContent;else document.location.pathname.includes("/releases/")?(e.details=document.querySelector(".container-narrow h1").textContent,e.state=`${parseQueryString(document.location.hash).version?`Version : ${parseQueryString(document.location.hash).version}`:"Version : all"}${parseQueryString(document.location.hash).page?` | Page : ${parseQueryString(document.location.hash).page}`:" | Page : 1"}`):e.details=document.querySelector("h1.f00-light").textContent;e.details?(e.state??="Navigating...",presence.setActivity(e)):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQWFTLFFBQVVOLFNBQVNJLGNBQWMsd0JBQXdCQyxZQUN0RVIsRUFBYVcsTUFBUSxHQUFJMUIsaUJBQWlCa0IsU0FBU2YsU0FBU3dCLE1BQU1NLFFBRTVELGFBQWFqQyxpQkFBaUJrQixTQUFTZixTQUFTd0IsTUFBTU0sVUFEdEQsa0JBQ21FakMsaUJBQWlCa0IsU0FBU2YsU0FBU3dCLE1BQU1PLEtBRTVHLGFBQWFsQyxpQkFBaUJrQixTQUFTZixTQUFTd0IsTUFBTU8sT0FEdEQsaUJBSU5uQixFQUFhUyxRQUFVTixTQUFTSSxjQUFjLGdCQUFnQkMsWUFDN0RSLEVBQWFTLFNBR2RULEVBQWFXLFFBQVUsZ0JBQ3ZCN0IsU0FBU3NDLFlBQVlwQixJQUhyQmxCLFNBQVNzQyxhQUliIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjY5MTQwNjE5ODA5MTY3NzczN1wiLFxufSk7XG5mdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKHF1ZXJ5U3RyaW5nKSB7XG4gICAgcXVlcnlTdHJpbmcgPz89IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9LCBxdWVyaWVzID0gcXVlcnlTdHJpbmcuc3BsaXQoXCImXCIpO1xuICAgIGZvciAoY29uc3QgaW5kZXhRdWVyeSBpbiBxdWVyaWVzKSB7XG4gICAgICAgIGNvbnN0IGluZGV4UGFpciA9IGluZGV4UXVlcnkuc3BsaXQoXCI9XCIpO1xuICAgICAgICBwYXJhbXNbZGVjb2RlVVJJQ29tcG9uZW50KGluZGV4UGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KGluZGV4UGFpci5sZW5ndGggPiAxID8gaW5kZXhQYWlyWzFdIDogXCJcIik7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG59XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0UvRWxlY3Ryb24vYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfSwgcm91dGUgPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XG4gICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gYExhbmd1YWdlIDogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zaXRlLWhlYWRlci1uYXYtaXRlbS5ib3JkZXJlZC5sYW5nLXNlbGVjdC1idXR0b25cIilcbiAgICAgICAgLnRleHRDb250ZW50fWA7XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkhvbWVcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9hcHBzXCIpKSB7XG4gICAgICAgIGlmICghcm91dGVbMl0pIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJBcHBzXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSAhcGFyc2VRdWVyeVN0cmluZyhkb2N1bWVudC5sb2NhdGlvbi5oYXNoKS5xXG4gICAgICAgICAgICAgICAgPyBgV2F0Y2hpbmcgYXBwcyBsaXN0ICR7IXBhcnNlUXVlcnlTdHJpbmcoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkuY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgIDogYCgke3BhcnNlUXVlcnlTdHJpbmcoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkuY2F0ZWdvcnl9KWB9YFxuICAgICAgICAgICAgICAgIDogYFNlYXJjaGluZyAke3BhcnNlUXVlcnlTdHJpbmcoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkucX0gJHshcGFyc2VRdWVyeVN0cmluZyhkb2N1bWVudC5sb2NhdGlvbi5oYXNoKS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiBgKCR7cGFyc2VRdWVyeVN0cmluZyhkb2N1bWVudC5sb2NhdGlvbi5oYXNoKS5jYXRlZ29yeX0pYH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIldhdGNoaW5nIGFwcFwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxLmYwMC1saWdodC5saC1jb25kZW5zZWQubWItM1wiKS50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9kb2NzXCIpKSB7XG4gICAgICAgIGlmICghcm91dGVbMl0pIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4uZjAtbGlnaHQubXItMy5tci1sZy00XCIpLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChyb3V0ZVsyXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0dXRvcmlhbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcm91dGVbM10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImg0LmYzLWxpZ2h0LmRvY3MtYnJlYWRjcnVtYnNcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRG9jcyAvIEd1aWRlc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnJlcGxhY2UoXCIgfCBFbGVjdHJvblwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImFwaVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcm91dGVbM10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImg0LmYzLWxpZ2h0LmRvY3MtYnJlYWRjcnVtYnNcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocm91dGVbM10gPT09IFwic3RydWN0dXJlc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJvdXRlWzRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDQuZjMtbGlnaHQuZG9jcy1icmVhZGNydW1ic1wiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJEb2NzIC8gQVBJIFN0cnVjdHVyZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5yZXBsYWNlKFwiIHwgRWxlY3Ryb25cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRG9jcyAvIEFQSVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnJlcGxhY2UoXCIgfCBFbGVjdHJvblwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImRldmVsb3BtZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyb3V0ZVszXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDQuZjMtbGlnaHQuZG9jcy1icmVhZGNydW1ic1wiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJEb2NzIC8gRGV2ZWxvcG1lbnRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5yZXBsYWNlKFwiIHwgRWxlY3Ryb25cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2Jsb2dcIikpIHtcbiAgICAgICAgaWYgKCFyb3V0ZVsyXSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxLmYwMC1saWdodFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBbdGl0bGUsIFRpdGxlT25lXSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIiB8IFwiKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGU7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBUaXRsZU9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9yZWxlYXNlcy9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1uYXJyb3cgaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAkeyFwYXJzZVF1ZXJ5U3RyaW5nKGRvY3VtZW50LmxvY2F0aW9uLmhhc2gpLnZlcnNpb25cbiAgICAgICAgICAgID8gXCJWZXJzaW9uIDogYWxsXCJcbiAgICAgICAgICAgIDogYFZlcnNpb24gOiAke3BhcnNlUXVlcnlTdHJpbmcoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkudmVyc2lvbn1gfSR7IXBhcnNlUXVlcnlTdHJpbmcoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkucGFnZVxuICAgICAgICAgICAgPyBcIiB8IFBhZ2UgOiAxXCJcbiAgICAgICAgICAgIDogYCB8IFBhZ2UgOiAke3BhcnNlUXVlcnlTdHJpbmcoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkucGFnZX1gfWA7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEuZjAwLWxpZ2h0XCIpLnRleHRDb250ZW50O1xuICAgIGlmICghcHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA/Pz0gXCJOYXZpZ2F0aW5nLi4uXCI7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUTBGQlF6dEJRVVZJTEZOQlFWTXNaMEpCUVdkQ0xFTkJRVU1zVjBGQmIwSTdTVUZETjBNc1YwRkJWeXhMUVVGTExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVZ3UkN4TlFVRk5MRTFCUVUwc1IwRkJiVU1zUlVGQlJTeEZRVU5vUkN4UFFVRlBMRWRCUVVjc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTnNReXhMUVVGTExFMUJRVTBzVlVGQlZTeEpRVUZKTEU5QlFVOHNSVUZCUlR0UlFVTnFReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM2hETEUxQlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExHdENRVUZyUWl4RFFVTTFSQ3hUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUTNoRExFTkJRVU03UzBGRFJqdEpRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMEZCUTJZc1EwRkJRenRCUVVWRUxGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNXVUZCV1N4SFFVRnBRanRSUVVOcVF5eGhRVUZoTEVWQlExb3NLMFJCUVN0RU8wdEJRMmhGTEVWQlEwUXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVVdlF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4dlJFRkJhVUlzUTBGQlF6dEpRVU0xUXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHTkJRemRDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2IwUkJRVzlFTEVOQlFVTTdVMEZETVVVc1YwRkRTQ3hGUVVGRkxFTkJRVU03U1VGRlNDeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hMUVVGTExFZEJRVWM3VVVGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJRenRUUVVOcVJTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0UlFVTjBSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTJRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdXVUZET1VJc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGREwwUXNRMEZCUXl4RFFVRkRMSE5DUVVOQkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UlFVRlJPMjlDUVVOcVJDeERRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRTaXhEUVVGRExFTkJRVU1zU1VGQlNTeG5Ra0ZCWjBJc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZFc1IwRkRlRVFzUlVGQlJUdG5Ra0ZEU2l4RFFVRkRMRU5CUVVNc1lVRkJZU3huUWtGQlowSXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZEZGtRc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWRTdiMEpCUTJwRUxFTkJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVTktMRU5CUVVNc1EwRkJReXhKUVVGSkxHZENRVUZuUWl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNVVUZCVVN4SFFVTjRSQ3hGUVVGRkxFTkJRVU03VTBGRFRqdGhRVUZOTzFsQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhqUVVGakxFTkJRVU03V1VGRGRFTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU14UXl4blEwRkJaME1zUTBGRGFFTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkRaRHRMUVVORU8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdVVUZEZUVRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0WlFVTmtMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZETlVNc05FSkJRVFJDTEVOQlF6VkNMRU5CUVVNc1YwRkJWeXhEUVVGRE8xTkJRMlE3WVVGQlRUdFpRVU5PTEZGQlFWRXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yZENRVU5xUWl4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRE8yOUNRVU5vUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzNkQ1FVTmtMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZETlVNc09FSkJRVGhDTEVOQlF6bENMRU5CUVVNc1YwRkJWeXhEUVVGRE8zRkNRVU5rTzNsQ1FVRk5PM2RDUVVOT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaVUZCWlN4RFFVRkRPM2RDUVVOMlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFN05rSkJRek5DTEdGQlFXRXNRMEZCUXl4UFFVRlBMRU5CUVVNN05rSkJRM1JDTEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzNGQ1FVTjZRenR2UWtGRlJDeE5RVUZOTzJsQ1FVTk9PMmRDUVVORUxFdEJRVXNzUzBGQlN5eERRVUZETEVOQlFVTTdiMEpCUTFnc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0M1FrRkRaQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpWRExEaENRVUU0UWl4RFFVTTVRaXhEUVVGRExGZEJRVmNzUTBGQlF6dHhRa0ZEWkR0NVFrRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4WlFVRlpMRVZCUVVVN2QwSkJRM0pETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3TkVKQlEyUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU0xUXl3NFFrRkJPRUlzUTBGRE9VSXNRMEZCUXl4WFFVRlhMRU5CUVVNN2VVSkJRMlE3TmtKQlFVMDdORUpCUTA0c1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDFRa0ZCZFVJc1EwRkJRenMwUWtGREwwTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUk8ybERRVU16UWl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRE8ybERRVU4wUWl4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0NVFrRkRla003Y1VKQlEwUTdlVUpCUVUwN2QwSkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WlFVRlpMRU5CUVVNN2QwSkJRM0JETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVVHMyUWtGRE0wSXNZVUZCWVN4RFFVRkRMRTlCUVU4c1EwRkJRenMyUWtGRGRFSXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdjVUpCUTNwRE8yOUNRVVZFTEUxQlFVMDdhVUpCUTA0N1owSkJRMFFzUzBGQlN5eGhRVUZoTEVOQlFVTXNRMEZCUXp0dlFrRkRia0lzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHQzUWtGRFpDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRelZETERoQ1FVRTRRaXhEUVVNNVFpeERRVUZETEZkQlFWY3NRMEZCUXp0eFFrRkRaRHQ1UWtGQlRUdDNRa0ZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPM2RDUVVNMVF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFN05rSkJRek5DTEdGQlFXRXNRMEZCUXl4UFFVRlBMRU5CUVVNN05rSkJRM1JDTEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzNGQ1FVTjZRenR2UWtGRlJDeE5RVUZOTzJsQ1FVTk9PMkZCUlVRN1UwRkRSRHRMUVVORU8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdVVUZEZUVRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEV2l4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8yRkJRM1JGTzFsQlEwb3NUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUjBGQlJ5eFJRVUZSTzJsQ1FVTm9ReXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETzJsQ1FVTjBRaXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPMWxCUXpkQ0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRPMU5CUXpsQ08wdEJRMFE3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlR0UlFVTTNSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpWRExITkNRVUZ6UWl4RFFVTjBRaXhEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU5rTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkRjRUlzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4N1dVRkRhRVFzUTBGQlF5eERRVUZETEdWQlFXVTdXVUZEYWtJc1EwRkJReXhEUVVGRExHRkJRV0VzWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUTJwRkxFZEJRME1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrN1dVRkROME1zUTBGQlF5eERRVUZETEdGQlFXRTdXVUZEWml4RFFVRkRMRU5CUVVNc1lVRkJZU3huUWtGQlowSXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZET1VRc1JVRkJSU3hEUVVGRE8wdEJRMGc3TzFGQlEwRXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVVelJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4N1VVRkJSU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVMEZETjBNN1VVRkRTaXhaUVVGWkxFTkJRVU1zUzBGQlN5eExRVUZMTEdWQlFXVXNRMEZCUXp0UlFVTjJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMHRCUTI1RE8wRkJRMFlzUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInBhcnNlUXVlcnlTdHJpbmciLCJxdWVyeVN0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwicGFyYW1zIiwicXVlcmllcyIsInNwbGl0IiwiaW5kZXhRdWVyeSIsImluZGV4UGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsImxlbmd0aCIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwicm91dGUiLCJkb2N1bWVudCIsInBhdGhuYW1lIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiZGV0YWlscyIsImluY2x1ZGVzIiwic3RhdGUiLCJoYXNoIiwicSIsImNhdGVnb3J5IiwicmVwbGFjZSIsInRpdGxlIiwiVGl0bGVPbmUiLCJ2ZXJzaW9uIiwicGFnZSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;