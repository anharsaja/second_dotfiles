var __webpack_exports__={};const presence=new Presence({clientId:"632936001269923880"}),pages={"/elemental-by-medium":"Elemental by Medium","/one-zero":"One Zero by Medium","/gen":"Gen by Medium","/zora":"ZORA by Medium","/forge":"Forge by Medium","/human-parts":"Humand Parts by Medium","/marker":"Marker by Medium","/topic/self":"Self Topics","/topic/technology":"Technology Topics","/heated":"Heated by Medium x Mark Bittman","/modus":"Modus by Medium","/topics":"Topics","/me/stories/drafts":"My Stories","/me/stories":"My Stories","/me/series/drafts":"My Series","/me/series":"My Series","/me/stats":"My Stats","/creators":"Creators","/me/list/bookmarks":"Bookmarks","/me/publications":"Publications","/me/settings":"Settings"};presence.on("UpdateData",(async()=>{const e=document.location.pathname,t=document.querySelector("article div section div div div h1"),s=document.querySelector("div span div div a[href*=post_page---] p")||document.querySelector("span div span a[href*=post_page---]"),[,...a]=document.location.href.split("//"),i=a.join(""),n={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/M/Medium/assets/logo.png",startTimestamp:Math.floor(Date.now()/1e3)};e&&pages[e]||e&&pages[e.slice(0,-1)]?(n.details="Viewing a page:",n.state=pages[e]||pages[e.slice(0,-1)]):i.includes("medium.com/@")&&i.match("[^/]*$")[0].includes("@")&&i.match("[^/]*$")[0]===i.slice(-i.match("[^/]*$")[0].length)?(n.details="Viewing a profile:",n.state=document.querySelector("div div div div h2")?.textContent??"Unknown User"):t?.textContent&&s?.textContent||s?.textContent&&document.title.includes(`${s?.textContent}-`)?(n.details=t?.textContent||document.title.replace(`${s.textContent}-`,""),n.state=`by ${s.textContent}`,n.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",n.smallImageText="Reading a story..."):e.includes("/search")?(n.details="Searching for:",n.state=new URLSearchParams(location.search).get("q")??"Something...",n.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):(n.details="Viewing a page:",n.state="Home"),presence.setActivity(n)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsTUFBUSxDQUNSLHVCQUF3QixzQkFDeEIsWUFBYSxxQkFDYixPQUFRLGdCQUNSLFFBQVMsaUJBQ1QsU0FBVSxrQkFDVixlQUFnQix5QkFDaEIsVUFBVyxtQkFDWCxjQUFlLGNBQ2Ysb0JBQXFCLG9CQUNyQixVQUFXLGtDQUNYLFNBQVUsa0JBQ1YsVUFBVyxTQUNYLHFCQUFzQixhQUN0QixjQUFlLGFBQ2Ysb0JBQXFCLFlBQ3JCLGFBQWMsWUFDZCxZQUFhLFdBQ2IsWUFBYSxXQUNiLHFCQUFzQixZQUN0QixtQkFBb0IsZUFDcEIsZUFBZ0IsWUFFcEJILFNBQVNJLEdBQUcsY0FBY0MsVUFDdEIsTUFBTUMsRUFBT0MsU0FBU0MsU0FBU0MsU0FBVUMsRUFBUUgsU0FBU0ksY0FBYyxzQ0FBdUNDLEVBQVNMLFNBQVNJLGNBQWMsNkNBQzNJSixTQUFTSSxjQUFjLHdDQUF5QyxJQUFLRSxHQUFZTixTQUFTQyxTQUFTTSxLQUFLQyxNQUFNLE1BQU9ELEVBQU9ELEVBQVNHLEtBQUssSUFBS0MsRUFBZSxDQUM5SkMsY0FBZSw4REFDZkMsZUFBZ0JDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsTUFFdkNqQixHQUFRSCxNQUFNRyxJQUFXQSxHQUFRSCxNQUFNRyxFQUFLa0IsTUFBTSxHQUFJLEtBQ3ZEUCxFQUFhUSxRQUFVLGtCQUN2QlIsRUFBYVMsTUFBUXZCLE1BQU1HLElBQVNILE1BQU1HLEVBQUtrQixNQUFNLEdBQUksS0FFcERWLEVBQUthLFNBQVMsaUJBQ25CYixFQUFLYyxNQUFNLFVBQVUsR0FBR0QsU0FBUyxNQUNqQ2IsRUFBS2MsTUFBTSxVQUFVLEtBQU9kLEVBQUtVLE9BQU9WLEVBQUtjLE1BQU0sVUFBVSxHQUFHQyxTQUNoRVosRUFBYVEsUUFBVSxxQkFDdkJSLEVBQWFTLE1BQ1RuQixTQUFTSSxjQUFjLHVCQUF1Qm1CLGFBQzFDLGdCQUVGcEIsR0FBT29CLGFBQWVsQixHQUFRa0IsYUFDbkNsQixHQUFRa0IsYUFBZXZCLFNBQVNHLE1BQU1pQixTQUFTLEdBQUdmLEdBQVFrQixpQkFDM0RiLEVBQWFRLFFBQ1RmLEdBQU9vQixhQUNIdkIsU0FBU0csTUFBTXFCLFFBQVEsR0FBR25CLEVBQU9rQixlQUFnQixJQUN6RGIsRUFBYVMsTUFBUSxNQUFNZCxFQUFPa0IsY0FDbENiLEVBQWFlLGNBQWdCLGtEQUM3QmYsRUFBYWdCLGVBQWlCLHNCQUV6QjNCLEVBQUtxQixTQUFTLFlBQ25CVixFQUFhUSxRQUFVLGlCQUN2QlIsRUFBYVMsTUFDVCxJQUFJUSxnQkFBZ0IxQixTQUFTMkIsUUFBUUMsSUFBSSxNQUFRLGVBQ3JEbkIsRUFBYWUsY0FBZ0IsbURBRzdCZixFQUFhUSxRQUFVLGtCQUN2QlIsRUFBYVMsTUFBUSxRQUV6QjFCLFNBQVNxQyxZQUFZcEIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2MzI5MzYwMDEyNjk5MjM4ODBcIixcbn0pLCBwYWdlcyA9IHtcbiAgICBcIi9lbGVtZW50YWwtYnktbWVkaXVtXCI6IFwiRWxlbWVudGFsIGJ5IE1lZGl1bVwiLFxuICAgIFwiL29uZS16ZXJvXCI6IFwiT25lIFplcm8gYnkgTWVkaXVtXCIsXG4gICAgXCIvZ2VuXCI6IFwiR2VuIGJ5IE1lZGl1bVwiLFxuICAgIFwiL3pvcmFcIjogXCJaT1JBIGJ5IE1lZGl1bVwiLFxuICAgIFwiL2ZvcmdlXCI6IFwiRm9yZ2UgYnkgTWVkaXVtXCIsXG4gICAgXCIvaHVtYW4tcGFydHNcIjogXCJIdW1hbmQgUGFydHMgYnkgTWVkaXVtXCIsXG4gICAgXCIvbWFya2VyXCI6IFwiTWFya2VyIGJ5IE1lZGl1bVwiLFxuICAgIFwiL3RvcGljL3NlbGZcIjogXCJTZWxmIFRvcGljc1wiLFxuICAgIFwiL3RvcGljL3RlY2hub2xvZ3lcIjogXCJUZWNobm9sb2d5IFRvcGljc1wiLFxuICAgIFwiL2hlYXRlZFwiOiBcIkhlYXRlZCBieSBNZWRpdW0geCBNYXJrIEJpdHRtYW5cIixcbiAgICBcIi9tb2R1c1wiOiBcIk1vZHVzIGJ5IE1lZGl1bVwiLFxuICAgIFwiL3RvcGljc1wiOiBcIlRvcGljc1wiLFxuICAgIFwiL21lL3N0b3JpZXMvZHJhZnRzXCI6IFwiTXkgU3Rvcmllc1wiLFxuICAgIFwiL21lL3N0b3JpZXNcIjogXCJNeSBTdG9yaWVzXCIsXG4gICAgXCIvbWUvc2VyaWVzL2RyYWZ0c1wiOiBcIk15IFNlcmllc1wiLFxuICAgIFwiL21lL3Nlcmllc1wiOiBcIk15IFNlcmllc1wiLFxuICAgIFwiL21lL3N0YXRzXCI6IFwiTXkgU3RhdHNcIixcbiAgICBcIi9jcmVhdG9yc1wiOiBcIkNyZWF0b3JzXCIsXG4gICAgXCIvbWUvbGlzdC9ib29rbWFya3NcIjogXCJCb29rbWFya3NcIixcbiAgICBcIi9tZS9wdWJsaWNhdGlvbnNcIjogXCJQdWJsaWNhdGlvbnNcIixcbiAgICBcIi9tZS9zZXR0aW5nc1wiOiBcIlNldHRpbmdzXCIsXG59O1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUsIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGUgZGl2IHNlY3Rpb24gZGl2IGRpdiBkaXYgaDFcIiksIGF1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYgc3BhbiBkaXYgZGl2IGFbaHJlZio9cG9zdF9wYWdlLS0tXSBwXCIpIHx8XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuIGRpdiBzcGFuIGFbaHJlZio9cG9zdF9wYWdlLS0tXVwiKSwgWywgLi4uaHJlZlJlc3RdID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5zcGxpdChcIi8vXCIpLCBocmVmID0gaHJlZlJlc3Quam9pbihcIlwiKSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTS9NZWRpdW0vYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICB9O1xuICAgIGlmICgocGFnZSAmJiBwYWdlc1twYWdlXSkgfHwgKHBhZ2UgJiYgcGFnZXNbcGFnZS5zbGljZSgwLCAtMSldKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIHBhZ2U6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHBhZ2VzW3BhZ2VdIHx8IHBhZ2VzW3BhZ2Uuc2xpY2UoMCwgLTEpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaHJlZi5pbmNsdWRlcyhcIm1lZGl1bS5jb20vQFwiKSAmJlxuICAgICAgICBocmVmLm1hdGNoKFwiW14vXSokXCIpWzBdLmluY2x1ZGVzKFwiQFwiKSAmJlxuICAgICAgICBocmVmLm1hdGNoKFwiW14vXSokXCIpWzBdID09PSBocmVmLnNsaWNlKC1ocmVmLm1hdGNoKFwiW14vXSokXCIpWzBdLmxlbmd0aCkpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBwcm9maWxlOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiBkaXYgZGl2IGRpdiBoMlwiKT8udGV4dENvbnRlbnQgPz9cbiAgICAgICAgICAgICAgICBcIlVua25vd24gVXNlclwiO1xuICAgIH1cbiAgICBlbHNlIGlmICgodGl0bGU/LnRleHRDb250ZW50ICYmIGF1dGhvcj8udGV4dENvbnRlbnQpIHx8XG4gICAgICAgIChhdXRob3I/LnRleHRDb250ZW50ICYmIGRvY3VtZW50LnRpdGxlLmluY2x1ZGVzKGAke2F1dGhvcj8udGV4dENvbnRlbnR9LWApKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9XG4gICAgICAgICAgICB0aXRsZT8udGV4dENvbnRlbnQgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZS5yZXBsYWNlKGAke2F1dGhvci50ZXh0Q29udGVudH0tYCwgXCJcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBieSAke2F1dGhvci50ZXh0Q29udGVudH1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJSZWFkaW5nIGEgc3RvcnkuLi5cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFnZS5pbmNsdWRlcyhcIi9zZWFyY2hcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBmb3I6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkuZ2V0KFwicVwiKSA/PyBcIlNvbWV0aGluZy4uLlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBwYWdlOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkhvbWVcIjtcbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhMUVVGTExFZEJRVFJDTzBsQlEyaERMSE5DUVVGelFpeEZRVUZGTEhGQ1FVRnhRanRKUVVNM1F5eFhRVUZYTEVWQlFVVXNiMEpCUVc5Q08wbEJRMnBETEUxQlFVMHNSVUZCUlN4bFFVRmxPMGxCUTNaQ0xFOUJRVThzUlVGQlJTeG5Ra0ZCWjBJN1NVRkRla0lzVVVGQlVTeEZRVUZGTEdsQ1FVRnBRanRKUVVNelFpeGpRVUZqTEVWQlFVVXNkMEpCUVhkQ08wbEJRM2hETEZOQlFWTXNSVUZCUlN4clFrRkJhMEk3U1VGRE4wSXNZVUZCWVN4RlFVRkZMR0ZCUVdFN1NVRkROVUlzYlVKQlFXMUNMRVZCUVVVc2JVSkJRVzFDTzBsQlEzaERMRk5CUVZNc1JVRkJSU3hwUTBGQmFVTTdTVUZETlVNc1VVRkJVU3hGUVVGRkxHbENRVUZwUWp0SlFVTXpRaXhUUVVGVExFVkJRVVVzVVVGQlVUdEpRVU51UWl4dlFrRkJiMElzUlVGQlJTeFpRVUZaTzBsQlEyeERMR0ZCUVdFc1JVRkJSU3haUVVGWk8wbEJRek5DTEcxQ1FVRnRRaXhGUVVGRkxGZEJRVmM3U1VGRGFFTXNXVUZCV1N4RlFVRkZMRmRCUVZjN1NVRkRla0lzVjBGQlZ5eEZRVUZGTEZWQlFWVTdTVUZEZGtJc1YwRkJWeXhGUVVGRkxGVkJRVlU3U1VGRGRrSXNiMEpCUVc5Q0xFVkJRVVVzVjBGQlZ6dEpRVU5xUXl4clFrRkJhMElzUlVGQlJTeGpRVUZqTzBsQlEyeERMR05CUVdNc1JVRkJSU3hWUVVGVk8wTkJRekZDTEVOQlFVTTdRVUZGU0N4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkRkRU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2IwTkJRVzlETEVOQlFVTXNSVUZEY0VVc1RVRkJUU3hIUVVOTUxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNNRU5CUVRCRExFTkJRVU03VVVGRGJFVXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh4UTBGQmNVTXNRMEZCUXl4RlFVTTVSQ3hEUVVGRExFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUTNCRUxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVONFFpeFpRVUZaTEVkQlFXbENPMUZCUXpWQ0xHRkJRV0VzUlVGRFdpdzJSRUZCTmtRN1VVRkRPVVFzWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0TFFVTTNReXhEUVVGRE8wbEJSVWdzU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGRGFFVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0UlFVTjZReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlF6ZEVPMU5CUVUwc1NVRkRUaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEY2tNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkRkRVU3VVVGRFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzlDUVVGdlFpeERRVUZETzFGQlF6VkRMRmxCUVZrc1EwRkJReXhMUVVGTE8xbEJRMnBDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNSVUZCUlN4WFFVRlhPMmRDUVVONlJDeGpRVUZqTEVOQlFVTTdTMEZEYUVJN1UwRkJUU3hKUVVOT0xFTkJRVU1zUzBGQlN5eEZRVUZGTEZkQlFWY3NTVUZCU1N4TlFVRk5MRVZCUVVVc1YwRkJWeXhEUVVGRE8xRkJRek5ETEVOQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVZjc1NVRkJTU3hSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRTFCUVUwc1JVRkJSU3hYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlF6RkZPMUZCUTBRc1dVRkJXU3hEUVVGRExFOUJRVTg3V1VGRGJrSXNTMEZCU3l4RlFVRkZMRmRCUVZjN1owSkJRMnhDTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEZkQlFWY3NSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM1JFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZGYUVRc1dVRkJXU3hEUVVGRExHRkJRV0VzYjBSQlFXbENMRU5CUVVNN1VVRkROVU1zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dExRVU51UkR0VFFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0UlFVTndReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xRkJRM2hETEZsQlFWa3NRMEZCUXl4TFFVRkxPMWxCUTJwQ0xFbEJRVWtzWlVGQlpTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NZMEZCWXl4RFFVRkRPMUZCUldwRkxGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8wdEJRek5ETzFOQlFVMDdVVUZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMUZCUTNwRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMHRCUXpWQ08wbEJSVVFzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJwYWdlcyIsIm9uIiwiYXN5bmMiLCJwYWdlIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwiYXV0aG9yIiwiaHJlZlJlc3QiLCJocmVmIiwic3BsaXQiLCJqb2luIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNsaWNlIiwiZGV0YWlscyIsInN0YXRlIiwiaW5jbHVkZXMiLCJtYXRjaCIsImxlbmd0aCIsInRleHRDb250ZW50IiwicmVwbGFjZSIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImdldCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;