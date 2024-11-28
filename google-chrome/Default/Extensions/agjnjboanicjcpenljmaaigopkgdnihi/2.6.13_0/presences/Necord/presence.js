var __webpack_exports__={};const presence=new Presence({clientId:"1081479845940314114"}),browsingTimestamp=Math.floor(Date.now()/1e3),IDLE_TIMEOUT=6e5,settings=["search","docs-page","docs-page-content","docs-page-sidebar","idling"];let sidebar=null,lastActivity=Date.now();function getScrollPercentage(){const{scrollY:e,innerHeight:t}=window,{scrollHeight:s}=document.body,a=e/(s-t)*100;return 0===a?0:a||100}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/N/Necord/assets/0.png",startTimestamp:browsingTimestamp},{href:t,pathname:s,search:a}=document.location,n=document.title.split(" | ")[0],i=await presence.getSetting("privacy"),[r,c,l,o,g]=await Promise.all(i?Array(settings.length).fill(!1):settings.map((e=>presence.getSetting(e))));switch(!0){case lastActivity+6e5<Date.now()&&g:e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/N/Necord/assets/1.png",e.smallImageText="Idling",e.details="Idling at page: ",e.state=n,e.startTimestamp=Math.floor(lastActivity/1e3);break;case s.startsWith("/search"):e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="Searching",e.details="Searching for something",a&&r&&(e.details="Searching for:",e.state=[a.split("q=")[1],`(${document.querySelector("main")?.childElementCount??0} results)`].join(" "),e.buttons=[{label:"Show Results",url:t}]);break;case!!sidebar&&o:e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="Searching",e.details="Selecting a category:",e.state=sidebar;break;default:{const t=document.querySelector(".table-of-contents__link--active")??document.querySelector(".table-of-contents__link");e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText="Reading",e.details=`Reading ${c?n:"a"} page${l?":":""}`,e.state=l?`${t.textContent} (${getScrollPercentage().toFixed(2)}%)`:null,e.buttons=[{label:"Read Page",url:t.href}];break}}e.details?presence.setActivity(e):presence.setActivity()})),document.addEventListener("mouseover",(e=>{const t=e.target;t.classList.contains("menu__link")?sidebar=t.textContent:t.classList.contains("menu")||(sidebar=null),lastActivity=Date.now()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQU9DLGFBQWUsSUFBZ0JDLFNBQVcsQ0FDN0YsU0FDQSxZQUNBLG9CQUNBLG9CQUNBLFVBRUosSUFBSUMsUUFBVSxLQUFNQyxhQUFlTCxLQUFLQyxNQTJFeEMsU0FBU0ssc0JBQ0wsTUFBTSxRQUFFQyxFQUFPLFlBQUVDLEdBQWdCQyxRQUFRLGFBQUVDLEdBQWlCQyxTQUFTQyxLQUFNQyxFQUFjTixHQUFXRyxFQUFlRixHQUFnQixJQUNuSSxPQUFzQixJQUFmSyxFQUFtQixFQUFJQSxHQUFjLEdBQ2hELENBN0VBbkIsU0FBU29CLEdBQUcsY0FBY0MsVUFDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSwyREFDZkMsZUFBZ0JyQixvQkFDakIsS0FBRXNCLEVBQUksU0FBRUMsRUFBUSxPQUFFQyxHQUFXVixTQUFTVyxTQUFVQyxFQUFRWixTQUFTWSxNQUFNQyxNQUFNLE9BQU8sR0FBSUMsUUFBZ0IvQixTQUFTZ0MsV0FBVyxZQUFhQyxFQUFnQkMsRUFBcUJDLEVBQXdCQyxFQUFpQkMsU0FBeUJDLFFBQVFDLElBQUtSLEVBRTFQUyxNQUFNL0IsU0FBU2dDLFFBQVFDLE1BQUssR0FENUJqQyxTQUFTa0MsS0FBSUMsR0FBVzVDLFNBQVNnQyxXQUFXWSxNQUVsRCxRQUFRLEdBQ0osS0FBS2pDLGFBaEJ5RCxJQWdCM0JMLEtBQUtDLE9BQVM4QixFQUM3Q2YsRUFBYXVCLGNBQWdCLDJEQUM3QnZCLEVBQWF3QixlQUFpQixTQUM5QnhCLEVBQWF5QixRQUFVLG1CQUN2QnpCLEVBQWEwQixNQUFRbkIsRUFDckJQLEVBQWFFLGVBQWlCcEIsS0FBS0MsTUFBTU0sYUFBZSxLQUN4RCxNQUVKLEtBQUtlLEVBQVN1QixXQUFXLFdBQ3JCM0IsRUFBYXVCLGNBQWdCLGlEQUM3QnZCLEVBQWF3QixlQUFpQixZQUM5QnhCLEVBQWF5QixRQUFVLDBCQUNuQnBCLEdBQVVNLElBQ1ZYLEVBQWF5QixRQUFVLGlCQUN2QnpCLEVBQWEwQixNQUFRLENBQ2pCckIsRUFBT0csTUFBTSxNQUFNLEdBQ25CLElBQUliLFNBQVNpQyxjQUFjLFNBQVNDLG1CQUNoQyxjQUNOQyxLQUFLLEtBQ1A5QixFQUFhK0IsUUFBVSxDQUNuQixDQUNJQyxNQUFPLGVBQ1BDLElBQUs5QixLQUlqQixNQUVKLE1BQU9mLFNBQVcwQixFQUNkZCxFQUFhdUIsY0FBZ0IsaURBQzdCdkIsRUFBYXdCLGVBQWlCLFlBQzlCeEIsRUFBYXlCLFFBQVUsd0JBQ3ZCekIsRUFBYTBCLE1BQVF0QyxRQUNyQixNQUVKLFFBQVMsQ0FDTCxNQUFNOEMsRUFBY3ZDLFNBQVNpQyxjQUFjLHFDQUN2Q2pDLFNBQVNpQyxjQUFjLDRCQUMzQjVCLEVBQWF1QixjQUFnQixrREFDN0J2QixFQUFhd0IsZUFBaUIsVUFDOUJ4QixFQUFheUIsUUFBVSxXQUFXYixFQUFzQkwsRUFBUSxXQUFXTSxFQUF5QixJQUFNLEtBQzFHYixFQUFhMEIsTUFBUWIsRUFDZixHQUFHcUIsRUFBWUMsZ0JBQWdCN0Msc0JBQXNCOEMsUUFBUSxPQUM3RCxLQUNOcEMsRUFBYStCLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxZQUNQQyxJQUFLQyxFQUFZL0IsT0FHekIsS0FDSixFQUVBSCxFQUFheUIsUUFDYi9DLFNBQVMyRCxZQUFZckMsR0FFckJ0QixTQUFTMkQsYUFBYSxJQUU5QjFDLFNBQVMyQyxpQkFBaUIsYUFBYUMsSUFDbkMsTUFBTUMsRUFBU0QsRUFBRUMsT0FDYkEsRUFBT0MsVUFBVUMsU0FBUyxjQUMxQnRELFFBQVVvRCxFQUFPTCxZQUNYSyxFQUFPQyxVQUFVQyxTQUFTLFVBQ2hDdEQsUUFBVSxNQUNkQyxhQUFlTCxLQUFLQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjEwODE0Nzk4NDU5NDAzMTQxMTRcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLCBJRExFX1RJTUVPVVQgPSAxMCAqIDYwICogMTAwMCwgc2V0dGluZ3MgPSBbXG4gICAgXCJzZWFyY2hcIixcbiAgICBcImRvY3MtcGFnZVwiLFxuICAgIFwiZG9jcy1wYWdlLWNvbnRlbnRcIixcbiAgICBcImRvY3MtcGFnZS1zaWRlYmFyXCIsXG4gICAgXCJpZGxpbmdcIixcbl07XG5sZXQgc2lkZWJhciA9IG51bGwsIGxhc3RBY3Rpdml0eSA9IERhdGUubm93KCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL04vTmVjb3JkL2Fzc2V0cy8wLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBocmVmLCBwYXRobmFtZSwgc2VhcmNoIH0gPSBkb2N1bWVudC5sb2NhdGlvbiwgdGl0bGUgPSBkb2N1bWVudC50aXRsZS5zcGxpdChcIiB8IFwiKVswXSwgcHJpdmFjeSA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJwcml2YWN5XCIpLCBbaXNTZWFyY2hQdWJsaWMsIGlzQ3VycmVudFBhZ2VQdWJsaWMsIGlzQ3VycmVudENvbnRlbnRQdWJsaWMsIGlzU2lkZWJhclB1YmxpYywgaXNJZGxpbmdQdWJsaWMsXSA9IGF3YWl0IFByb21pc2UuYWxsKCFwcml2YWN5XG4gICAgICAgID8gc2V0dGluZ3MubWFwKHNldHRpbmcgPT4gcHJlc2VuY2UuZ2V0U2V0dGluZyhzZXR0aW5nKSlcbiAgICAgICAgOiBBcnJheShzZXR0aW5ncy5sZW5ndGgpLmZpbGwoZmFsc2UpKTtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBsYXN0QWN0aXZpdHkgKyBJRExFX1RJTUVPVVQgPCBEYXRlLm5vdygpICYmIGlzSWRsaW5nUHVibGljOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9OL05lY29yZC9hc3NldHMvMS5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiSWRsaW5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSWRsaW5nIGF0IHBhZ2U6IFwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGU7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBNYXRoLmZsb29yKGxhc3RBY3Rpdml0eSAvIDEwMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5zdGFydHNXaXRoKFwiL3NlYXJjaFwiKToge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiU2VhcmNoaW5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIGZvciBzb21ldGhpbmdcIjtcbiAgICAgICAgICAgIGlmIChzZWFyY2ggJiYgaXNTZWFyY2hQdWJsaWMpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIGZvcjpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBbXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaC5zcGxpdChcInE9XCIpWzFdLFxuICAgICAgICAgICAgICAgICAgICBgKCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik/LmNoaWxkRWxlbWVudENvdW50ID8/XG4gICAgICAgICAgICAgICAgICAgICAgICAwfSByZXN1bHRzKWAsXG4gICAgICAgICAgICAgICAgXS5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hvdyBSZXN1bHRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgISFzaWRlYmFyICYmIGlzU2lkZWJhclB1YmxpYzoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiU2VhcmNoaW5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VsZWN0aW5nIGEgY2F0ZWdvcnk6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzaWRlYmFyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgY29uc3QgdG9wbW9zdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlLW9mLWNvbnRlbnRzX19saW5rLS1hY3RpdmVcIikgPz9cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlLW9mLWNvbnRlbnRzX19saW5rXCIpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlJlYWRpbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFJlYWRpbmcgJHtpc0N1cnJlbnRQYWdlUHVibGljID8gdGl0bGUgOiBcImFcIn0gcGFnZSR7aXNDdXJyZW50Q29udGVudFB1YmxpYyA/IFwiOlwiIDogXCJcIn1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gaXNDdXJyZW50Q29udGVudFB1YmxpY1xuICAgICAgICAgICAgICAgID8gYCR7dG9wbW9zdEVsZW0udGV4dENvbnRlbnR9ICgke2dldFNjcm9sbFBlcmNlbnRhZ2UoKS50b0ZpeGVkKDIpfSUpYFxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUmVhZCBQYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogdG9wbW9zdEVsZW0uaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51X19saW5rXCIpKVxuICAgICAgICBzaWRlYmFyID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGVsc2UgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudVwiKSlcbiAgICAgICAgc2lkZWJhciA9IG51bGw7XG4gICAgbGFzdEFjdGl2aXR5ID0gRGF0ZS5ub3coKTtcbn0pO1xuZnVuY3Rpb24gZ2V0U2Nyb2xsUGVyY2VudGFnZSgpIHtcbiAgICBjb25zdCB7IHNjcm9sbFksIGlubmVySGVpZ2h0IH0gPSB3aW5kb3csIHsgc2Nyb2xsSGVpZ2h0IH0gPSBkb2N1bWVudC5ib2R5LCBwZXJjZW50YWdlID0gKHNjcm9sbFkgLyAoc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQpKSAqIDEwMDtcbiAgICByZXR1cm4gcGVyY2VudGFnZSA9PT0gMCA/IDAgOiBwZXJjZW50YWdlIHx8IDEwMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGTFFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNjVUpCUVhGQ08wTkJReTlDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZEYWtRc1dVRkJXU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RlFVTTNRaXhSUVVGUkxFZEJRVWM3U1VGRFZpeFJRVUZSTzBsQlExSXNWMEZCVnp0SlFVTllMRzFDUVVGdFFqdEpRVU51UWl4dFFrRkJiVUk3U1VGRGJrSXNVVUZCVVR0RFFVTlNMRU5CUVVNN1FVRkZTQ3hKUVVGSkxFOUJRVThzUjBGQlZ5eEpRVUZKTEVWQlEzcENMRmxCUVZrc1IwRkJWeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZGYmtNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJwRExHRkJRV0VzTkVSQlFXRTdVVUZETVVJc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0TFFVTnFReXhGUVVORUxFVkJRVVVzU1VGQlNTeEZRVUZGTEZGQlFWRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVU01UXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRM1JETEU5QlFVOHNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlF6bERMRU5CUTBNc1kwRkJZeXhGUVVOa0xHMUNRVUZ0UWl4RlFVTnVRaXh6UWtGQmMwSXNSVUZEZEVJc1pVRkJaU3hGUVVObUxHTkJRV01zUlVGRFpDeEhRVUZITEUxQlFVMHNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkRjRUlzUTBGQlF5eFBRVUZQTzFGQlExQXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlEzWkVMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGRGNrTXNRMEZCUXp0SlFVVklMRkZCUVZFc1NVRkJTU3hGUVVGRk8xRkJRMklzUzBGQlN5eFpRVUZaTEVkQlFVY3NXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeGpRVUZqTEVOQlFVTXNRMEZCUXp0WlFVTm9SU3haUVVGWkxFTkJRVU1zWVVGQllTdzJSRUZCWXl4RFFVRkRPMWxCUTNwRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NVVUZCVVN4RFFVRkRPMWxCUTNaRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03V1VGRE1VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03V1VGRE0wSXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVVNVJDeE5RVUZOTzFOQlEwNDdVVUZGUkN4TFFVRkxMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhaUVVGWkxFTkJRVU1zWVVGQllTeHRSRUZCWjBJc1EwRkJRenRaUVVNelF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRmRCUVZjc1EwRkJRenRaUVVNeFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGxDUVVGNVFpeERRVUZETzFsQlJXcEVMRWxCUVVrc1RVRkJUU3hKUVVGSkxHTkJRV01zUlVGQlJUdG5Ra0ZETjBJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRuUWtGRGVFTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSenR2UWtGRGNFSXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNKQ0xFbEJRME1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCYVVJc1RVRkJUU3hEUVVGRExFVkJRVVVzYVVKQlFXbENPM2RDUVVOcVJTeERRVU5FTEZkQlFWYzdhVUpCUTFnc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUlZvc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dHZRa0ZEZEVJN2QwSkJRME1zUzBGQlN5eEZRVUZGTEdOQlFXTTdkMEpCUTNKQ0xFZEJRVWNzUlVGQlJTeEpRVUZKTzNGQ1FVTlVPMmxDUVVORUxFTkJRVU03WVVGRFJqdFpRVVZFTEUxQlFVMDdVMEZEVGp0UlFVVkVMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzU1VGQlNTeGxRVUZsTEVOQlFVTXNRMEZCUXp0WlFVTnNReXhaUVVGWkxFTkJRVU1zWVVGQllTeHRSRUZCWjBJc1EwRkJRenRaUVVNelF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRmRCUVZjc1EwRkJRenRaUVVNeFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSFZDUVVGMVFpeERRVUZETzFsQlF5OURMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETzFsQlJUZENMRTFCUVUwN1UwRkRUanRSUVVWRUxFOUJRVThzUTBGQlF5eERRVUZETzFsQlExSXNUVUZCVFN4WFFVRlhMRWRCUTJoQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEzSkNMR3REUVVGclF5eERRVU5zUXp0blFrRkRSQ3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZyUWl3d1FrRkJNRUlzUTBGQlF5eERRVUZETzFsQlJYSkZMRmxCUVZrc1EwRkJReXhoUVVGaExHOUVRVUZwUWl4RFFVRkRPMWxCUXpWRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NVMEZCVXl4RFFVRkRPMWxCUTNoRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZEZEVJc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGREwwSXNVVUZCVVN4elFrRkJjMElzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dFpRVU0xUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExITkNRVUZ6UWp0blFrRkRNVU1zUTBGQlF5eERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRmRCUVZjc1MwRkJTeXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNUdG5Ra0ZEY2tVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU5TTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1owSkJRM1JDTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3hYUVVGWE8yOUNRVU5zUWl4SFFVRkhMRVZCUVVVc1YwRkJWeXhEUVVGRExFbEJRVWs3YVVKQlEzSkNPMkZCUTBRc1EwRkJRenRaUVVWR0xFMUJRVTA3VTBGRFRqdExRVU5FTzBsQlJVUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVVklMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVU3U1VGRE1VTXNUVUZCVFN4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRWEZDTEVOQlFVTTdTVUZGZGtNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNN1VVRkJSU3hQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTnlSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRVVVzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVVTFSQ3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUXpOQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJVZ3NVMEZCVXl4dFFrRkJiVUk3U1VGRE0wSXNUVUZCVFN4RlFVRkZMRTlCUVU4c1JVRkJSU3hYUVVGWExFVkJRVVVzUjBGQlJ5eE5RVUZOTEVWQlEzUkRMRVZCUVVVc1dVRkJXU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEVsQlFVa3NSVUZEYUVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNXVUZCV1N4SFFVRkhMRmRCUVZjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzBsQlJUZEVMRTlCUVU4c1ZVRkJWU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFbEJRVWtzUjBGQlJ5eERRVUZETzBGQlEycEVMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiSURMRV9USU1FT1VUIiwic2V0dGluZ3MiLCJzaWRlYmFyIiwibGFzdEFjdGl2aXR5IiwiZ2V0U2Nyb2xsUGVyY2VudGFnZSIsInNjcm9sbFkiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsInNjcm9sbEhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInBlcmNlbnRhZ2UiLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiaHJlZiIsInBhdGhuYW1lIiwic2VhcmNoIiwibG9jYXRpb24iLCJ0aXRsZSIsInNwbGl0IiwicHJpdmFjeSIsImdldFNldHRpbmciLCJpc1NlYXJjaFB1YmxpYyIsImlzQ3VycmVudFBhZ2VQdWJsaWMiLCJpc0N1cnJlbnRDb250ZW50UHVibGljIiwiaXNTaWRlYmFyUHVibGljIiwiaXNJZGxpbmdQdWJsaWMiLCJQcm9taXNlIiwiYWxsIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwibWFwIiwic2V0dGluZyIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsImRldGFpbHMiLCJzdGF0ZSIsInN0YXJ0c1dpdGgiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRFbGVtZW50Q291bnQiLCJqb2luIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwidG9wbW9zdEVsZW0iLCJ0ZXh0Q29udGVudCIsInRvRml4ZWQiLCJzZXRBY3Rpdml0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiXSwic291cmNlUm9vdCI6IiJ9
undefined;