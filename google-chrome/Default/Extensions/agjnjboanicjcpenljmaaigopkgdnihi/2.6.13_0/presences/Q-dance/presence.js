var __webpack_exports__={};const presence=new Presence({clientId:"844107169205190686"}),elapsed=Math.floor(Date.now()/1e3);async function getStrings(){return presence.getStrings({browse:"general.browsing",live:"general.live"},await presence.getSetting("lang").catch((()=>"en")))}let strings,oldLang=null;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/Q/Q-dance/assets/logo.png"},[t,n,s,a]=await Promise.all([presence.getSetting("lang").catch((()=>"en")),presence.getSetting("privacy"),presence.getSetting("buttons"),presence.getSetting("covers")]),{href:r}=document.location;oldLang===t&&strings||(oldLang=t,strings=await getStrings()),n?e.details="Browsing":document.querySelector("svg.audioplayer-controls__icon--play")?(e.buttons=[{label:"Browse",url:r}],e.details=`${strings.browse} ${document.querySelector('[class="nav-item__link router-link-exact-active router-link-active active"]')?.textContent??""}`):(e.details=document.querySelector(".audioplayer-nowplaying__track").textContent,e.state=document.querySelector(".audioplayer-nowplaying__artist").textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/live.png",e.smallImageText=strings.live,e.largeImageKey=document.querySelector("div.audioplayer-nowplaying__image > img")?.src??"https://cdn.rcd.gg/PreMiD/websites/Q/Q-dance/assets/logo.png",e.startTimestamp=elapsed,e.buttons=[{label:"Tune In Live",url:r}]),s||delete e.buttons,a||(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/Q/Q-dance/assets/logo.png"),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUN0Q0MsZUFBZUMsYUFDWCxPQUFPVCxTQUFTUyxXQUFXLENBQ3ZCQyxPQUFRLG1CQUNSQyxLQUFNLHNCQUNEWCxTQUFTWSxXQUFXLFFBQVFDLE9BQU0sSUFBTSxPQUNyRCxDQUNBLElBQUlDLFFBQVNDLFFBQVUsS0FDdkJmLFNBQVNnQixHQUFHLGNBQWNSLFVBQ3RCLE1BQU1TLEVBQWUsQ0FDakJDLGNBQWUsaUVBQ2ZDLEVBQVNDLEVBQVNDLEVBQVNDLFNBQWdCQyxRQUFRQyxJQUFJLENBQ3ZEeEIsU0FBU1ksV0FBVyxRQUFRQyxPQUFNLElBQU0sT0FDeENiLFNBQVNZLFdBQVcsV0FDcEJaLFNBQVNZLFdBQVcsV0FDcEJaLFNBQVNZLFdBQVcsYUFDcEIsS0FBRWEsR0FBU0MsU0FBU0MsU0FDcEJaLFVBQVlJLEdBQVlMLFVBQ3hCQyxRQUFVSSxFQUNWTCxjQUFnQkwsY0FFaEJXLEVBQ0FILEVBQWFXLFFBQVUsV0FDakJGLFNBQVNHLGNBQWMseUNBZ0I3QlosRUFBYUksUUFBVSxDQUNuQixDQUNJUyxNQUFPLFNBQ1BDLElBQUtOLElBR2JSLEVBQWFXLFFBQVUsR0FBR2QsUUFBUUosVUFBVWdCLFNBQVNHLGNBQWMsZ0ZBQWdGRyxhQUFlLE9BckJsS2YsRUFBYVcsUUFBVUYsU0FBU0csY0FBYyxrQ0FBa0NHLFlBQ2hGZixFQUFhZ0IsTUFBUVAsU0FBU0csY0FBYyxtQ0FBbUNHLFlBQy9FZixFQUFhaUIsY0FBZ0IsK0NBQzdCakIsRUFBYWtCLGVBQWlCckIsUUFBUUgsS0FDdENNLEVBQWFDLGNBQ1RRLFNBQVNHLGNBQWMsNENBQTRDTyxLQUFPLCtEQUM5RW5CLEVBQWFvQixlQUFpQmxDLFFBQzlCYyxFQUFhSSxRQUFVLENBQ25CLENBQ0lTLE1BQU8sZUFDUEMsSUFBS04sS0FhWkosVUFDTUosRUFBYUksUUFDbkJDLElBQ0RMLEVBQWFDLGNBQ1QsZ0VBRUpELEVBQWFXLFFBQ2I1QixTQUFTc0MsWUFBWXJCLEdBRXJCakIsU0FBU3NDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODQ0MTA3MTY5MjA1MTkwNjg2XCIsXG59KSwgZWxhcHNlZCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuYXN5bmMgZnVuY3Rpb24gZ2V0U3RyaW5ncygpIHtcbiAgICByZXR1cm4gcHJlc2VuY2UuZ2V0U3RyaW5ncyh7XG4gICAgICAgIGJyb3dzZTogXCJnZW5lcmFsLmJyb3dzaW5nXCIsXG4gICAgICAgIGxpdmU6IFwiZ2VuZXJhbC5saXZlXCIsXG4gICAgfSwgYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSk7XG59XG5sZXQgc3RyaW5ncywgb2xkTGFuZyA9IG51bGw7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1EvUS1kYW5jZS9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9LCBbbmV3TGFuZywgcHJpdmFjeSwgYnV0dG9ucywgY292ZXJzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiY292ZXJzXCIpLFxuICAgIF0pLCB7IGhyZWYgfSA9IGRvY3VtZW50LmxvY2F0aW9uO1xuICAgIGlmIChvbGRMYW5nICE9PSBuZXdMYW5nIHx8ICFzdHJpbmdzKSB7XG4gICAgICAgIG9sZExhbmcgPSBuZXdMYW5nO1xuICAgICAgICBzdHJpbmdzID0gYXdhaXQgZ2V0U3RyaW5ncygpO1xuICAgIH1cbiAgICBpZiAocHJpdmFjeSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nXCI7XG4gICAgZWxzZSBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdmcuYXVkaW9wbGF5ZXItY29udHJvbHNfX2ljb24tLXBsYXlcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1ZGlvcGxheWVyLW5vd3BsYXlpbmdfX3RyYWNrXCIpLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1ZGlvcGxheWVyLW5vd3BsYXlpbmdfX2FydGlzdFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL2xpdmUucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHN0cmluZ3MubGl2ZTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5hdWRpb3BsYXllci1ub3dwbGF5aW5nX19pbWFnZSA+IGltZ1wiKT8uc3JjID8/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9RL1EtZGFuY2UvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGVsYXBzZWQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlR1bmUgSW4gTGl2ZVwiLFxuICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJCcm93c2VcIixcbiAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGAke3N0cmluZ3MuYnJvd3NlfSAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cIm5hdi1pdGVtX19saW5rIHJvdXRlci1saW5rLWV4YWN0LWFjdGl2ZSByb3V0ZXItbGluay1hY3RpdmUgYWN0aXZlXCJdJyk/LnRleHRDb250ZW50ID8/IFwiXCJ9YDtcbiAgICB9XG4gICAgaWYgKCFidXR0b25zKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgaWYgKCFjb3ZlcnMpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1EvUS1kYW5jZS9hc3NldHMvbG9nby5wbmdcIjtcbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZGZWtNc1MwRkJTeXhWUVVGVkxGVkJRVlU3U1VGRGVFSXNUMEZCVHl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVONlFqdFJRVU5ETEUxQlFVMHNSVUZCUlN4clFrRkJhMEk3VVVGRE1VSXNTVUZCU1N4RlFVRkZMR05CUVdNN1MwRkRjRUlzUlVGRFJDeE5RVUZOTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZNc1RVRkJUU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVNelJDeERRVUZETzBGQlEwZ3NRMEZCUXp0QlFVVkVMRWxCUVVrc1QwRkJLME1zUlVGRGJFUXNUMEZCVHl4SFFVRlhMRWxCUVVrc1EwRkJRenRCUVVONFFpeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN4RlFVTmFMRGhFUVVFNFJEdExRVU12UkN4RlFVTkVMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWRCUVVjc1RVRkJUU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETzFGQlEzWkVMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVk1zVFVGQlRTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF6dFJRVU55UkN4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxGTkJRVk1zUTBGQlF6dFJRVU4yUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxGTkJRVk1zUTBGQlF6dFJRVU4yUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxGRkJRVkVzUTBGQlF6dExRVU4wUXl4RFFVRkRMRVZCUTBZc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUXpsQ0xFbEJRVWtzVDBGQlR5eExRVUZMTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRSUVVOd1F5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTJ4Q0xFOUJRVThzUjBGQlJ5eE5RVUZOTEZWQlFWVXNSVUZCUlN4RFFVRkRPMHRCUXpkQ08wbEJRMFFzU1VGQlNTeFBRVUZQTzFGQlFVVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVkxFTkJRVU03VTBGRE1VTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYzBOQlFYTkRMRU5CUVVNc1JVRkJSVHRSUVVONlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRelZETEdkRFFVRm5ReXhEUVVOb1F5eERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTmtMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZETVVNc2FVTkJRV2xETEVOQlEycERMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRMlFzV1VGQldTeERRVUZETEdGQlFXRXNhVVJCUVdNc1EwRkJRenRSUVVONlF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRE0wTXNXVUZCV1N4RFFVRkRMR0ZCUVdFN1dVRkRla0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc2VVTkJRWGxETEVOQlEzcERMRVZCUVVVc1IwRkJSeXhKUVVGSkxEaEVRVUU0UkN4RFFVRkRPMUZCUXpGRkxGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTNSRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdXVUZEZEVJN1owSkJRME1zUzBGQlN5eEZRVUZGTEdOQlFXTTdaMEpCUTNKQ0xFZEJRVWNzUlVGQlJTeEpRVUZKTzJGQlExUTdVMEZEUkN4RFFVRkRPMHRCUTBZN1UwRkJUVHRSUVVOT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdXVUZEZEVJN1owSkJRME1zUzBGQlN5eEZRVUZGTEZGQlFWRTdaMEpCUTJZc1IwRkJSeXhGUVVGRkxFbEJRVWs3WVVGRFZEdFRRVU5FTEVOQlFVTTdVVUZEUml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNTVUZEZGtNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrSXNOa1ZCUVRaRkxFTkJRemRGTEVWQlFVVXNWMEZCVnl4SlFVRkpMRVZCUTI1Q0xFVkJRVVVzUTBGQlF6dExRVU5JTzBsQlEwUXNTVUZCU1N4RFFVRkRMRTlCUVU4N1VVRkJSU3hQUVVGUExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZETVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFJRVU5hTEZsQlFWa3NRMEZCUXl4aFFVRmhPMWxCUTNwQ0xEaEVRVUU0UkN4RFFVRkRPMHRCUTJoRk8wbEJRMFFzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMUZCUTNoRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiZWxhcHNlZCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJhc3luYyIsImdldFN0cmluZ3MiLCJicm93c2UiLCJsaXZlIiwiZ2V0U2V0dGluZyIsImNhdGNoIiwic3RyaW5ncyIsIm9sZExhbmciLCJvbiIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJuZXdMYW5nIiwicHJpdmFjeSIsImJ1dHRvbnMiLCJjb3ZlcnMiLCJQcm9taXNlIiwiYWxsIiwiaHJlZiIsImRvY3VtZW50IiwibG9jYXRpb24iLCJkZXRhaWxzIiwicXVlcnlTZWxlY3RvciIsImxhYmVsIiwidXJsIiwidGV4dENvbnRlbnQiLCJzdGF0ZSIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsInNyYyIsInN0YXJ0VGltZXN0YW1wIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;