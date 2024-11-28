var __webpack_exports__={};const presence=new Presence({clientId:"844108776793178122"}),startTimestamp=Math.floor(Date.now()/1e3);async function getStrings(){return presence.getStrings({play:"general.playing",pause:"general.paused",browse:"general.browsing",live:"general.live",listening:"general.listeningMusic"})}let strings,oldLang=null;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/TuneIn/assets/logo.png",type:2,startTimestamp},[t,s,n,r]=await Promise.all([presence.getSetting("lang").catch((()=>"en")),presence.getSetting("timestamps"),presence.getSetting("cover"),presence.getSetting("privacy")]),a=document.querySelector("[data-icon='stop']"),i=document.querySelector("[data-testid='player-status-playing']");if(oldLang!==t&&(oldLang=t,strings=await getStrings()),a||i){if(r)e.details=strings.listening;else{const t=document.querySelector("#playerTitle").textContent,s=document.querySelector("#playerSubtitle").textContent,r=document.querySelector("#playerArtwork").getAttribute("src");t&&(e.details=t),s&&(e.state=s),r&&n&&(e.largeImageKey=r)}if(e.smallImageKey=a?"https://cdn.rcd.gg/PreMiD/resources/live.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=a?strings.live:strings.play,!r&&s&&!a&&i){const t=document.querySelector("#scrubberElapsed").textContent,s=document.querySelector("#scrubberDuration").textContent;"00:00"===t&&""===s||([e.startTimestamp,e.endTimestamp]=presence.getTimestamps(presence.timestampFromFormat(t),presence.timestampFromFormat(s)))}}else e.details=strings.browse;presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsZUFBaUJDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsS0FDN0NDLGVBQWVDLGFBQ1gsT0FBT1QsU0FBU1MsV0FBVyxDQUN2QkMsS0FBTSxrQkFDTkMsTUFBTyxpQkFDUEMsT0FBUSxtQkFDUkMsS0FBTSxlQUNOQyxVQUFXLDBCQUVuQixDQUNBLElBQUlDLFFBQVNDLFFBQVUsS0FDdkJoQixTQUFTaUIsR0FBRyxjQUFjVCxVQUN0QixNQUFNVSxFQUFlLENBQ2pCQyxjQUFlLDhEQUNmQyxLQUFNLEVBQ05qQixpQkFDQWtCLEVBQVNDLEVBQVlDLEVBQU9DLFNBQWlCQyxRQUFRQyxJQUFJLENBQ3pEMUIsU0FBUzJCLFdBQVcsUUFBUUMsT0FBTSxJQUFNLE9BQ3hDNUIsU0FBUzJCLFdBQVcsY0FDcEIzQixTQUFTMkIsV0FBVyxTQUNwQjNCLFNBQVMyQixXQUFXLGFBQ3BCRSxFQUFTQyxTQUFTQyxjQUFjLHNCQUF1QkMsRUFBWUYsU0FBU0MsY0FBYyx5Q0FLOUYsR0FKSWYsVUFBWUssSUFDWkwsUUFBVUssRUFDVk4sY0FBZ0JOLGNBRWhCb0IsR0FBVUcsRUFBVyxDQUNyQixHQUFJUixFQUNBTixFQUFhZSxRQUFVbEIsUUFBUUQsY0FDOUIsQ0FDRCxNQUFNb0IsRUFBUUosU0FBU0MsY0FBYyxnQkFBZ0JJLFlBQWFDLEVBQVNOLFNBQVNDLGNBQWMsbUJBQW1CSSxZQUFhRSxFQUFVUCxTQUFTQyxjQUFjLGtCQUFrQk8sYUFBYSxPQUM5TEosSUFDQWhCLEVBQWFlLFFBQVVDLEdBQ3ZCRSxJQUNBbEIsRUFBYXFCLE1BQVFILEdBQ3JCQyxHQUFXZCxJQUNYTCxFQUFhQyxjQUFnQmtCLEVBQ3JDLENBR0EsR0FGQW5CLEVBQWFzQixjQUFnQlgsRUFBUywrQ0FBaUQsK0NBQ3ZGWCxFQUFhdUIsZUFBaUJaLEVBQVNkLFFBQVFGLEtBQU9FLFFBQVFMLE1BQ3pEYyxHQUFXRixJQUFlTyxHQUFVRyxFQUFXLENBQ2hELE1BQU1VLEVBQVVaLFNBQVNDLGNBQWMsb0JBQW9CSSxZQUFhUSxFQUFXYixTQUFTQyxjQUFjLHFCQUFxQkksWUFDL0csVUFBWk8sR0FBb0MsS0FBYkMsS0FDdEJ6QixFQUFhZixlQUFnQmUsRUFBYTBCLGNBQ3ZDNUMsU0FBUzZDLGNBQWM3QyxTQUFTOEMsb0JBQW9CSixHQUFVMUMsU0FBUzhDLG9CQUFvQkgsSUFFdkcsQ0FDSixNQUVJekIsRUFBYWUsUUFBVWxCLFFBQVFILE9BQ25DWixTQUFTK0MsWUFBWTdCLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODQ0MTA4Nzc2NzkzMTc4MTIyXCIsXG59KSwgc3RhcnRUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmFzeW5jIGZ1bmN0aW9uIGdldFN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHByZXNlbmNlLmdldFN0cmluZ3Moe1xuICAgICAgICBwbGF5OiBcImdlbmVyYWwucGxheWluZ1wiLFxuICAgICAgICBwYXVzZTogXCJnZW5lcmFsLnBhdXNlZFwiLFxuICAgICAgICBicm93c2U6IFwiZ2VuZXJhbC5icm93c2luZ1wiLFxuICAgICAgICBsaXZlOiBcImdlbmVyYWwubGl2ZVwiLFxuICAgICAgICBsaXN0ZW5pbmc6IFwiZ2VuZXJhbC5saXN0ZW5pbmdNdXNpY1wiLFxuICAgIH0pO1xufVxubGV0IHN0cmluZ3MsIG9sZExhbmcgPSBudWxsO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9UL1R1bmVJbi9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgdHlwZTogMixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXAsXG4gICAgfSwgW25ld0xhbmcsIHRpbWVzdGFtcHMsIGNvdmVyLCBwcml2YWN5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInRpbWVzdGFtcHNcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJjb3ZlclwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgXSksIGlzTGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pY29uPSdzdG9wJ11cIiksIGlzUGxheWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZXN0aWQ9J3BsYXllci1zdGF0dXMtcGxheWluZyddXCIpO1xuICAgIGlmIChvbGRMYW5nICE9PSBuZXdMYW5nKSB7XG4gICAgICAgIG9sZExhbmcgPSBuZXdMYW5nO1xuICAgICAgICBzdHJpbmdzID0gYXdhaXQgZ2V0U3RyaW5ncygpO1xuICAgIH1cbiAgICBpZiAoaXNMaXZlIHx8IGlzUGxheWluZykge1xuICAgICAgICBpZiAocHJpdmFjeSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5saXN0ZW5pbmc7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllclRpdGxlXCIpLnRleHRDb250ZW50LCBhdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllclN1YnRpdGxlXCIpLnRleHRDb250ZW50LCBhcnR3b3JrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJBcnR3b3JrXCIpLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRpdGxlO1xuICAgICAgICAgICAgaWYgKGF1dGhvcilcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBhdXRob3I7XG4gICAgICAgICAgICBpZiAoYXJ0d29yayAmJiBjb3ZlcilcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGFydHdvcms7XG4gICAgICAgIH1cbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBpc0xpdmUgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL2xpdmUucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGlzTGl2ZSA/IHN0cmluZ3MubGl2ZSA6IHN0cmluZ3MucGxheTtcbiAgICAgICAgaWYgKCFwcml2YWN5ICYmIHRpbWVzdGFtcHMgJiYgIWlzTGl2ZSAmJiBpc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NjcnViYmVyRWxhcHNlZFwiKS50ZXh0Q29udGVudCwgZHVyYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NjcnViYmVyRHVyYXRpb25cIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoZWxhcHNlZCAhPT0gXCIwMDowMFwiIHx8IGR1cmF0aW9uICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKHByZXNlbmNlLnRpbWVzdGFtcEZyb21Gb3JtYXQoZWxhcHNlZCksIHByZXNlbmNlLnRpbWVzdGFtcEZyb21Gb3JtYXQoZHVyYXRpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5icm93c2U7XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZGYUVRc1MwRkJTeXhWUVVGVkxGVkJRVlU3U1VGRGVFSXNUMEZCVHl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NSVUZCUlN4cFFrRkJhVUk3VVVGRGRrSXNTMEZCU3l4RlFVRkZMR2RDUVVGblFqdFJRVU4yUWl4TlFVRk5MRVZCUVVVc2EwSkJRV3RDTzFGQlF6RkNMRWxCUVVrc1JVRkJSU3hqUVVGak8xRkJRM0JDTEZOQlFWTXNSVUZCUlN4M1FrRkJkMEk3UzBGRGJrTXNRMEZCUXl4RFFVRkRPMEZCUTBvc1EwRkJRenRCUVVWRUxFbEJRVWtzVDBGQkswTXNSVUZEYkVRc1QwRkJUeXhIUVVGWExFbEJRVWtzUTBGQlF6dEJRVVY0UWl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYWtNc1lVRkJZU3hGUVVOYUxEWkVRVUUyUkR0UlFVTTVSQ3hKUVVGSkxFZEJRWGRDTzFGQlF6VkNMR05CUVdNN1MwRkRaQ3hGUVVORUxFTkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzVFVGQlRTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUTNwRUxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTnlSQ3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEZsQlFWa3NRMEZCUXp0UlFVTXhReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEU5QlFVOHNRMEZCUXp0UlFVTnlReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEZOQlFWTXNRMEZCUXp0TFFVTjJReXhEUVVGRExFVkJRMFlzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNSVUZEY2tRc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNkVU5CUVhWRExFTkJRVU1zUTBGQlF6dEpRVVUzUlN4SlFVRkpMRTlCUVU4c1MwRkJTeXhQUVVGUExFVkJRVVU3VVVGRGVFSXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRenRSUVVOc1FpeFBRVUZQTEVkQlFVY3NUVUZCVFN4VlFVRlZMRVZCUVVVc1EwRkJRenRMUVVNM1FqdEpRVVZFTEVsQlFVa3NUVUZCVFN4SlFVRkpMRk5CUVZNc1JVRkJSVHRSUVVONFFpeEpRVUZKTEU5QlFVODdXVUZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTTdZVUZEYWtRN1dVRkRTaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGREwwUXNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRemxFTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlJYaEZMRWxCUVVrc1MwRkJTenRuUWtGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenRaUVVONFF5eEpRVUZKTEUxQlFVMDdaMEpCUVVVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdXVUZEZUVNc1NVRkJTU3hQUVVGUExFbEJRVWtzUzBGQlN6dG5Ra0ZCUlN4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExFOUJRVThzUTBGQlF6dFRRVU16UkR0UlFVVkVMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNaMFJCUVdFc1EwRkJReXdyUTBGQldTeERRVUZETzFGQlEyaEZMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUlc1RkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NWVUZCVlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxGTkJRVk1zUlVGQlJUdFpRVU51UkN4TlFVRk5MRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVU55UlN4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dFpRVVZ3UlN4SlFVRkpMRTlCUVU4c1MwRkJTeXhQUVVGUExFbEJRVWtzVVVGQlVTeExRVUZMTEVWQlFVVXNSVUZCUlR0blFrRkRNME1zUTBGQlF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RlFVRkZMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU03YjBKQlEzWkVMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM0pDTEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZEY2tNc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVOMFF5eERRVUZETzJGQlEwZzdVMEZEUkR0TFFVTkVPenRSUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVVM1F5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRM0JETEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInN0YXJ0VGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImFzeW5jIiwiZ2V0U3RyaW5ncyIsInBsYXkiLCJwYXVzZSIsImJyb3dzZSIsImxpdmUiLCJsaXN0ZW5pbmciLCJzdHJpbmdzIiwib2xkTGFuZyIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInR5cGUiLCJuZXdMYW5nIiwidGltZXN0YW1wcyIsImNvdmVyIiwicHJpdmFjeSIsIlByb21pc2UiLCJhbGwiLCJnZXRTZXR0aW5nIiwiY2F0Y2giLCJpc0xpdmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpc1BsYXlpbmciLCJkZXRhaWxzIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImF1dGhvciIsImFydHdvcmsiLCJnZXRBdHRyaWJ1dGUiLCJzdGF0ZSIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsImVsYXBzZWQiLCJkdXJhdGlvbiIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJ0aW1lc3RhbXBGcm9tRm9ybWF0Iiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;