var __webpack_exports__={};const presence=new Presence({clientId:"721740741570986016"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused",browsing:"general.browsing"});function getTime(e){let t=0;for(let n=e.length-1;n>=0;n--)t+=parseInt(e[n])*60**n;return t}function getTimestamps(e,t){return[Math.floor(Date.now()/1e3),Math.floor(Date.now()/1e3)-getTime(e.split(":").reverse())+getTime(t.split(":").reverse())]}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/Anghami/assets/logo.png"},t=!!document.querySelector("anghami-player");if(t){const n=document.querySelectorAll(".duration-text"),a=null!==document.querySelector("anghami-player anghami-icon.icon.pause");let s=document.querySelector("anghami-player .action-title .trim");e.details=s&&s.textContent||null,s=document.querySelector("anghami-player .action-artist .trim"),e.state=s&&s.textContent||null,e.smallImageKey=a?"https://cdn.rcd.gg/PreMiD/resources/play.png":"https://cdn.rcd.gg/PreMiD/resources/pause.png",e.smallImageText=a?(await strings).play:(await strings).pause,[e.startTimestamp,e.endTimestamp]=getTimestamps(n[0]&&n[0].textContent.trim()||"0:0",n[1]&&n[1].textContent.trim()||"0:0"),a||(delete e.startTimestamp,delete e.endTimestamp),presence.setActivity(e,t)}else e.details=(await strings).browsing,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText=(await strings).browsing,presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsS0FBTSxrQkFDTkMsTUFBTyxpQkFDUEMsU0FBVSxxQkFFZCxTQUFTQyxRQUFRQyxHQUNiLElBQUlDLEVBQU0sRUFDVixJQUFLLElBQUlDLEVBQVFGLEVBQUtHLE9BQVMsRUFBR0QsR0FBUyxFQUFHQSxJQUMxQ0QsR0FBT0csU0FBU0osRUFBS0UsSUFBVSxJQUFNQSxFQUN6QyxPQUFPRCxDQUNYLENBQ0EsU0FBU0ksY0FBY0MsRUFBV0MsR0FDOUIsTUFBTyxDQUNIQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ3hCSCxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ3BCWixRQUFRTyxFQUFVTSxNQUFNLEtBQUtDLFdBQzdCZCxRQUFRUSxFQUFjSyxNQUFNLEtBQUtDLFdBRTdDLENBQ0F0QixTQUFTdUIsR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLGdFQUNoQkMsSUFBYUMsU0FBU0MsY0FBYyxrQkFDdkMsR0FBSUYsRUFBVSxDQUNWLE1BQU1HLEVBQVlGLFNBQVNHLGlCQUFpQixrQkFBbUJDLEVBQzNELE9BRHFFSixTQUFTQyxjQUFjLDBDQUVoRyxJQUFJSSxFQUFXTCxTQUFTQyxjQUFjLHNDQUN0Q0osRUFBYVMsUUFBV0QsR0FBWUEsRUFBU0UsYUFBZ0IsS0FDN0RGLEVBQVdMLFNBQVNDLGNBQWMsdUNBQ2xDSixFQUFhVyxNQUFTSCxHQUFZQSxFQUFTRSxhQUFnQixLQUMzRFYsRUFBYVksY0FBZ0JMLEVBQVUsK0NBQWlELGdEQUN4RlAsRUFBYWEsZUFBaUJOLFNBQ2pCN0IsU0FBU0UsWUFDVEYsU0FBU0csT0FDckJtQixFQUFhYyxlQUFnQmQsRUFBYWUsY0FBZ0IxQixjQUFlZ0IsRUFBVSxJQUFNQSxFQUFVLEdBQUdLLFlBQVlNLFFBQVcsTUFBUVgsRUFBVSxJQUFNQSxFQUFVLEdBQUdLLFlBQVlNLFFBQVcsT0FDckxULFdBQ01QLEVBQWFjLHNCQUNiZCxFQUFhZSxjQUV4QnhDLFNBQVMwQyxZQUFZakIsRUFBY0UsRUFDdkMsTUFFSUYsRUFBYVMsZUFBaUIvQixTQUFTSSxTQUN2Q2tCLEVBQWFZLGNBQWdCLGlEQUM3QlosRUFBYWEsc0JBQXdCbkMsU0FBU0ksU0FDOUNQLFNBQVMwQyxZQUFZakIsRUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNzIxNzQwNzQxNTcwOTg2MDE2XCIsXG59KSwgc3RyaW5ncyA9IHByZXNlbmNlLmdldFN0cmluZ3Moe1xuICAgIHBsYXk6IFwiZ2VuZXJhbC5wbGF5aW5nXCIsXG4gICAgcGF1c2U6IFwiZ2VuZXJhbC5wYXVzZWRcIixcbiAgICBicm93c2luZzogXCJnZW5lcmFsLmJyb3dzaW5nXCIsXG59KTtcbmZ1bmN0aW9uIGdldFRpbWUobGlzdCkge1xuICAgIGxldCByZXQgPSAwO1xuICAgIGZvciAobGV0IGluZGV4ID0gbGlzdC5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKVxuICAgICAgICByZXQgKz0gcGFyc2VJbnQobGlzdFtpbmRleF0pICogNjAgKiogaW5kZXg7XG4gICAgcmV0dXJuIHJldDtcbn1cbmZ1bmN0aW9uIGdldFRpbWVzdGFtcHMoYXVkaW9UaW1lLCBhdWRpb0R1cmF0aW9uKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApIC1cbiAgICAgICAgICAgIGdldFRpbWUoYXVkaW9UaW1lLnNwbGl0KFwiOlwiKS5yZXZlcnNlKCkpICtcbiAgICAgICAgICAgIGdldFRpbWUoYXVkaW9EdXJhdGlvbi5zcGxpdChcIjpcIikucmV2ZXJzZSgpKSxcbiAgICBdO1xufVxucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9BL0FuZ2hhbWkvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfSwgcGxheWJhY2sgPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhbmdoYW1pLXBsYXllclwiKTtcbiAgICBpZiAocGxheWJhY2spIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kdXJhdGlvbi10ZXh0XCIpLCBwbGF5aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFuZ2hhbWktcGxheWVyIGFuZ2hhbWktaWNvbi5pY29uLnBhdXNlXCIpICE9PVxuICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFuZ2hhbWktcGxheWVyIC5hY3Rpb24tdGl0bGUgLnRyaW1cIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gKHNlbGVjdG9yICYmIHNlbGVjdG9yLnRleHRDb250ZW50KSB8fCBudWxsO1xuICAgICAgICBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhbmdoYW1pLXBsYXllciAuYWN0aW9uLWFydGlzdCAudHJpbVwiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gKHNlbGVjdG9yICYmIHNlbGVjdG9yLnRleHRDb250ZW50KSB8fCBudWxsO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHBsYXlpbmcgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBwbGF5aW5nXG4gICAgICAgICAgICA/IChhd2FpdCBzdHJpbmdzKS5wbGF5XG4gICAgICAgICAgICA6IChhd2FpdCBzdHJpbmdzKS5wYXVzZTtcbiAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPSBnZXRUaW1lc3RhbXBzKChzZWxlY3RvcnNbMF0gJiYgc2VsZWN0b3JzWzBdLnRleHRDb250ZW50LnRyaW0oKSkgfHwgXCIwOjBcIiwgKHNlbGVjdG9yc1sxXSAmJiBzZWxlY3RvcnNbMV0udGV4dENvbnRlbnQudHJpbSgpKSB8fCBcIjA6MFwiKTtcbiAgICAgICAgaWYgKCFwbGF5aW5nKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgICAgIH1cbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhLCBwbGF5YmFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IChhd2FpdCBzdHJpbmdzKS5icm93c2luZztcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gKGF3YWl0IHN0cmluZ3MpLmJyb3dzaW5nO1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXp0SlFVTTNRaXhKUVVGSkxFVkJRVVVzYVVKQlFXbENPMGxCUTNaQ0xFdEJRVXNzUlVGQlJTeG5Ra0ZCWjBJN1NVRkRka0lzVVVGQlVTeEZRVUZGTEd0Q1FVRnJRanREUVVNMVFpeERRVUZETEVOQlFVTTdRVUZOU2l4VFFVRlRMRTlCUVU4c1EwRkJReXhKUVVGak8wbEJRemxDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOYUxFdEJRVXNzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEpRVUZKTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVN1VVRkRjRVFzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NTMEZCU3l4RFFVRkRPMGxCUlRWRExFOUJRVThzUjBGQlJ5eERRVUZETzBGQlExb3NRMEZCUXp0QlFVVkVMRk5CUVZNc1lVRkJZU3hEUVVGRExGTkJRV2xDTEVWQlFVVXNZVUZCY1VJN1NVRkRPVVFzVDBGQlR6dFJRVU5PTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRE5VSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1dVRkRka01zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdTMEZETlVNc1EwRkJRenRCUVVOSUxFTkJRVU03UVVGRlJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN4blJVRkJZVHRMUVVNeFFpeEZRVU5FTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8wbEJSWFpFTEVsQlFVa3NVVUZCVVN4RlFVRkZPMUZCUTJJc1RVRkJUU3hUUVVGVExFZEJRMklzVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRVZCUXpWRExFOUJRVThzUjBGRFRpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMSGREUVVGM1F5eERRVUZETzFsQlEyaEZMRWxCUVVrc1EwRkJRenRSUVVOUUxFbEJRVWtzVVVGQlVTeEhRVUZUTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpGRExHOURRVUZ2UXl4RFFVTndReXhEUVVGRE8xRkJRMFlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRPMUZCUTJ4RkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVVUZEZWtVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEZGQlFWRXNTVUZCU1N4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETzFGQlJXaEZMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzVDBGQlR5eERRVUZETEVOQlFVTXNaMFJCUVdFc1EwRkJReXhuUkVGQllTeERRVUZETzFGQlEyeEZMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVDBGQlR6dFpRVU53UXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVazdXVUZEZEVJc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRla0lzUTBGQlF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RlFVRkZMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eGhRVUZoTEVOQlEzWkZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNTVUZCU1N4TFFVRkxMRVZCUXpGRUxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRekZFTEVOQlFVTTdVVUZGUml4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRMklzVDBGQlR5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RFFVRkRPMWxCUTI1RExFOUJRVThzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0VFFVTnFRenRSUVVWRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wdEJRemRETzFOQlFVMDdVVUZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zVFVGQlRTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRhRVFzV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03VVVGRE0wTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhEUVVGRExFMUJRVTBzVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUTNaRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1MwRkRia003UVVGRFJpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJzdHJpbmdzIiwiZ2V0U3RyaW5ncyIsInBsYXkiLCJwYXVzZSIsImJyb3dzaW5nIiwiZ2V0VGltZSIsImxpc3QiLCJyZXQiLCJpbmRleCIsImxlbmd0aCIsInBhcnNlSW50IiwiZ2V0VGltZXN0YW1wcyIsImF1ZGlvVGltZSIsImF1ZGlvRHVyYXRpb24iLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwic3BsaXQiLCJyZXZlcnNlIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJwbGF5YmFjayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwbGF5aW5nIiwic2VsZWN0b3IiLCJkZXRhaWxzIiwidGV4dENvbnRlbnQiLCJzdGF0ZSIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsInN0YXJ0VGltZXN0YW1wIiwiZW5kVGltZXN0YW1wIiwidHJpbSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;