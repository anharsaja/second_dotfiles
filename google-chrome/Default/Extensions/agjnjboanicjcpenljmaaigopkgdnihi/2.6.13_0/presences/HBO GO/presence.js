var __webpack_exports__={};const presence=new Presence({clientId:"605437254776651786"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused"});presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/HBO%20GO/assets/logo.png"},t=document.querySelector("#hbo-sdk--controller-container #hbo-sdk--controller-osd #hbo-sdk--vid #hbo-sdk--vid_Clpp_html5_mse_smooth_api");if(null===document.querySelector("#hbo-sdk--controller-container #hbo-sdk--controller-osd #hbo-sdk--vid #hbo-sdk--vid_Clpp_html5_mse_smooth_api")&&null===document.querySelector("#hbo-sdk--player-title > div.content-title")||!t)return e.details="Browsing...",e.startTimestamp=Math.floor(Date.now()/1e3),presence.setActivity(e);if(isNaN(t.duration))presence.setActivity();else{const s=document.querySelector("#hbo-sdk--player-title > div.content-title");e.details="Watching:",e.state=s.textContent,e.smallImageKey=t.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=t.paused?(await strings).pause:(await strings).play,[e.startTimestamp,e.endTimestamp]=presence.getTimestamps(Math.floor(t.currentTime),Math.floor(t.duration)),t.paused&&(delete e.startTimestamp,delete e.endTimestamp),s.textContent&&presence.setActivity(e,!t.paused)}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsS0FBTSxrQkFDTkMsTUFBTyxtQkFFWE4sU0FBU08sR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLGlFQUNoQkMsRUFBUUMsU0FBU0MsY0FBYyxpSEFDbEMsR0FBaUosT0FBNUlELFNBQVNDLGNBQWMsa0hBRXBCLE9BREpELFNBQVNDLGNBQWMsZ0RBRXRCRixFQUdELE9BRkFGLEVBQWFLLFFBQVUsY0FDdkJMLEVBQWFNLGVBQWlCQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQy9DbkIsU0FBU29CLFlBQVlYLEdBRWhDLEdBQUtZLE1BQU1WLEVBQU1XLFVBa0JidEIsU0FBU29CLGtCQWxCZSxDQUN4QixNQUFNRyxFQUFRWCxTQUFTQyxjQUFjLDhDQUNyQ0osRUFBYUssUUFBVSxZQUN2QkwsRUFBYWUsTUFBUUQsRUFBTUUsWUFDM0JoQixFQUFhaUIsY0FBZ0JmLEVBQU1nQixPQUFTLGdEQUFrRCwrQ0FDOUZsQixFQUFhbUIsZUFBaUJqQixFQUFNZ0IsY0FDdkJ4QixTQUFTRyxhQUNUSCxTQUFTRSxNQUNyQkksRUFBYU0sZUFBZ0JOLEVBQWFvQixjQUN2QzdCLFNBQVM4QixjQUFjZCxLQUFLQyxNQUFNTixFQUFNb0IsYUFBY2YsS0FBS0MsTUFBTU4sRUFBTVcsV0FDdkVYLEVBQU1nQixnQkFDQ2xCLEVBQWFNLHNCQUNiTixFQUFhb0IsY0FFcEJOLEVBQU1FLGFBQ056QixTQUFTb0IsWUFBWVgsR0FBZUUsRUFBTWdCLE9BQ2xELENBRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYwNTQzNzI1NDc3NjY1MTc4NlwiLFxufSksIHN0cmluZ3MgPSBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICBwbGF5OiBcImdlbmVyYWwucGxheWluZ1wiLFxuICAgIHBhdXNlOiBcImdlbmVyYWwucGF1c2VkXCIsXG59KTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvSC9IQk8lMjBHTy9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9LCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGJvLXNkay0tY29udHJvbGxlci1jb250YWluZXIgI2hiby1zZGstLWNvbnRyb2xsZXItb3NkICNoYm8tc2RrLS12aWQgI2hiby1zZGstLXZpZF9DbHBwX2h0bWw1X21zZV9zbW9vdGhfYXBpXCIpO1xuICAgIGlmICgoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYm8tc2RrLS1jb250cm9sbGVyLWNvbnRhaW5lciAjaGJvLXNkay0tY29udHJvbGxlci1vc2QgI2hiby1zZGstLXZpZCAjaGJvLXNkay0tdmlkX0NscHBfaHRtbDVfbXNlX3Ntb290aF9hcGlcIikgPT09IG51bGwgJiZcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYm8tc2RrLS1wbGF5ZXItdGl0bGUgPiBkaXYuY29udGVudC10aXRsZVwiKSA9PT1cbiAgICAgICAgICAgIG51bGwpIHx8XG4gICAgICAgICF2aWRlbykge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcuLi5cIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIH1cbiAgICBpZiAoIWlzTmFOKHZpZGVvLmR1cmF0aW9uKSkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGJvLXNkay0tcGxheWVyLXRpdGxlID4gZGl2LmNvbnRlbnQtdGl0bGVcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJXYXRjaGluZzpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gdmlkZW8ucGF1c2VkID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIiA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gdmlkZW8ucGF1c2VkXG4gICAgICAgICAgICA/IChhd2FpdCBzdHJpbmdzKS5wYXVzZVxuICAgICAgICAgICAgOiAoYXdhaXQgc3RyaW5ncykucGxheTtcbiAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgcHJlc2VuY2UuZ2V0VGltZXN0YW1wcyhNYXRoLmZsb29yKHZpZGVvLmN1cnJlbnRUaW1lKSwgTWF0aC5mbG9vcih2aWRlby5kdXJhdGlvbikpO1xuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpdGxlLnRleHRDb250ZW50KVxuICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhLCAhdmlkZW8ucGF1c2VkKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNM1FpeEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08wbEJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3UTBGRGRrSXNRMEZCUXl4RFFVRkRPMEZCUlVvc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJwRExHRkJRV0VzUlVGRFdpd3JSRUZCSzBRN1MwRkRhRVVzUlVGRFJDeExRVUZMTEVkQlFYRkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJReTlETEN0SFFVRXJSeXhEUVVNdlJ5eERRVUZETzBsQlEwZ3NTVUZEUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM1JDTEN0SFFVRXJSeXhEUVVNdlJ5eExRVUZMTEVsQlFVazdVVUZEVkN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExEUkRRVUUwUXl4RFFVRkRPMWxCUTI1RkxFbEJRVWtzUTBGQlF6dFJRVU5RTEVOQlFVTXNTMEZCU3l4RlFVTk1PMUZCUTBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGhRVUZoTEVOQlFVTTdVVUZEY2tNc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVTFSQ3hQUVVGUExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1MwRkRNVU03U1VGRlJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdFJRVVV6UWl4TlFVRk5MRXRCUVVzc1IwRkJaMElzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEYUVRc05FTkJRVFJETEVOQlF6VkRMRU5CUVVNN1VVRkRSaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXp0UlFVTnVReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRka01zV1VGQldTeERRVUZETEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zYVVSQlFXTXNRMEZCUXl3clEwRkJXU3hEUVVGRE8xRkJRM1pGTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTA3V1VGRGVrTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hQUVVGUExFTkJRVU1zUTBGQlF5eExRVUZMTzFsQlEzWkNMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUTNoQ0xFTkJRVU1zV1VGQldTeERRVUZETEdOQlFXTXNSVUZCUlN4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRE8xbEJRM1pFTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNKQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVNM1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGRE1VSXNRMEZCUXp0UlFVZElMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU5xUWl4UFFVRlBMRmxCUVZrc1EwRkJReXhqUVVGakxFTkJRVU03V1VGRGJrTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRE8xTkJRMnBETzFGQlIwUXNTVUZCU1N4TFFVRkxMRU5CUVVNc1YwRkJWenRaUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzB0QlEzcEZPenRSUVVGTkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTXZRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwic3RyaW5ncyIsImdldFN0cmluZ3MiLCJwbGF5IiwicGF1c2UiLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInZpZGVvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGV0YWlscyIsInN0YXJ0VGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNldEFjdGl2aXR5IiwiaXNOYU4iLCJkdXJhdGlvbiIsInRpdGxlIiwic3RhdGUiLCJ0ZXh0Q29udGVudCIsInNtYWxsSW1hZ2VLZXkiLCJwYXVzZWQiLCJzbWFsbEltYWdlVGV4dCIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJjdXJyZW50VGltZSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;