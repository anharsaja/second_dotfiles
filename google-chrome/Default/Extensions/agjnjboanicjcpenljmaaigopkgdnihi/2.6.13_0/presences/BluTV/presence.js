var __webpack_exports__={};const presence=new Presence({clientId:"664216462038401066"}),strings=presence.getStrings({playing:"general.playing",paused:"general.paused",browsing:"general.browsing"});function seriesName(e){return e.replace(/([^\W_]+[^\s-]*) */g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}const startTimestamp=Math.floor(Date.now()/1e3);let data,video;presence.on("iFrameData",(async e=>{e&&(({video}=e),data=e)})),presence.on("UpdateData",(async()=>{const e=document.location.pathname,a={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/B/BluTV/assets/logo.png"};if(e.includes("izle")||(video=null,data=null),data){if(data.series?(a.details=data.series.name??seriesName(e.split("/")[3].replace(/-/gi," ")),a.state=`${data.series.season} | ${data.series.ep}`):(a.details=e.startsWith("/canli-yayin")?"Bir televizyon yayını izliyor:":"Bir film izliyor:",a.state=data.movie.name),video){a.smallImageKey=video.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",a.smallImageText=video.paused?(await strings).paused:(await strings).playing;const[e,t]=presence.getTimestamps(Math.floor(video.currentTime),Math.floor(video.duration));!video.duration||video.paused||document.location.pathname.startsWith("/canli-yayin")||([a.startTimestamp,a.endTimestamp]=[e,t])}}else a.startTimestamp=startTimestamp,a.details=(await strings).browsing;presence.setActivity(a)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsUUFBUyxrQkFDVEMsT0FBUSxpQkFDUkMsU0FBVSxxQkFFZCxTQUFTQyxXQUFXQyxHQUNoQixPQUFPQSxFQUFLQyxRQUFRLHVCQUF1QixTQUFVQyxHQUNqRCxPQUFPQSxFQUFLQyxPQUFPLEdBQUdDLGNBQWdCRixFQUFLRyxPQUFPLEdBQUdDLGFBQ3pELEdBQ0osQ0FDQSxNQUFNQyxlQUFpQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUMvQyxJQUFJQyxLQUFNQyxNQUNWdEIsU0FBU3VCLEdBQUcsY0FBY0MsTUFBT0MsSUFDeEJBLE1BRUZILE9BQVVHLEdBQ2JKLEtBQU9JLEVBQUcsSUFFZHpCLFNBQVN1QixHQUFHLGNBQWNDLFVBQ3RCLE1BQU1FLEVBQU9DLFNBQVNDLFNBQVNDLFNBQVVDLEVBQWUsQ0FDcERDLGNBQWUsOERBTW5CLEdBSktMLEVBQUtNLFNBQVMsVUFDZlYsTUFBUSxLQUNSRCxLQUFPLE1BRVBBLE1BWUEsR0FYSUEsS0FBS1ksUUFDTEgsRUFBYUksUUFDVGIsS0FBS1ksT0FBT3hCLE1BQVFELFdBQVdrQixFQUFLUyxNQUFNLEtBQUssR0FBR3pCLFFBQVEsTUFBTyxNQUNyRW9CLEVBQWFNLE1BQVEsR0FBR2YsS0FBS1ksT0FBT0ksWUFBWWhCLEtBQUtZLE9BQU9LLE9BRzVEUixFQUFhSSxRQUFVUixFQUFLYSxXQUFXLGdCQUNqQyxpQ0FDQSxvQkFDTlQsRUFBYU0sTUFBUWYsS0FBS21CLE1BQU0vQixNQUVoQ2EsTUFBTyxDQUNQUSxFQUFhVyxjQUFnQm5CLE1BQU1oQixPQUFTLGdEQUFrRCwrQ0FDOUZ3QixFQUFhWSxlQUFpQnBCLE1BQU1oQixjQUN2QkgsU0FBU0csY0FDVEgsU0FBU0UsUUFDdEIsTUFBT1csRUFBZ0IyQixHQUFnQjNDLFNBQVM0QyxjQUFjM0IsS0FBS0MsTUFBTUksTUFBTXVCLGFBQWM1QixLQUFLQyxNQUFNSSxNQUFNd0IsWUFDMUd4QixNQUFNd0IsVUFDTHhCLE1BQU1oQixRQUNOcUIsU0FBU0MsU0FBU0MsU0FBU1UsV0FBVyxtQkFDdENULEVBQWFkLGVBQWdCYyxFQUFhYSxjQUFnQixDQUN2RDNCLEVBQ0EyQixHQUdaLE9BR0FiLEVBQWFkLGVBQWlCQSxlQUM5QmMsRUFBYUksZUFBaUIvQixTQUFTSSxTQUUzQ1AsU0FBUytDLFlBQVlqQixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjY2NDIxNjQ2MjAzODQwMTA2NlwiLFxufSksIHN0cmluZ3MgPSBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICBwbGF5aW5nOiBcImdlbmVyYWwucGxheWluZ1wiLFxuICAgIHBhdXNlZDogXCJnZW5lcmFsLnBhdXNlZFwiLFxuICAgIGJyb3dzaW5nOiBcImdlbmVyYWwuYnJvd3NpbmdcIixcbn0pO1xuZnVuY3Rpb24gc2VyaWVzTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFteXFxXX10rW15cXHMtXSopICovZywgZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xufVxuY29uc3Qgc3RhcnRUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCBkYXRhLCB2aWRlbztcbnByZXNlbmNlLm9uKFwiaUZyYW1lRGF0YVwiLCBhc3luYyAobXNnKSA9PiB7XG4gICAgaWYgKCFtc2cpXG4gICAgICAgIHJldHVybjtcbiAgICAoeyB2aWRlbyB9ID0gbXNnKTtcbiAgICBkYXRhID0gbXNnO1xufSk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQi9CbHVUVi9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9O1xuICAgIGlmICghcGF0aC5pbmNsdWRlcyhcIml6bGVcIikpIHtcbiAgICAgICAgdmlkZW8gPSBudWxsO1xuICAgICAgICBkYXRhID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuc2VyaWVzKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9XG4gICAgICAgICAgICAgICAgZGF0YS5zZXJpZXMubmFtZSA/PyBzZXJpZXNOYW1lKHBhdGguc3BsaXQoXCIvXCIpWzNdLnJlcGxhY2UoLy0vZ2ksIFwiIFwiKSk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkYXRhLnNlcmllcy5zZWFzb259IHwgJHtkYXRhLnNlcmllcy5lcH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYXRoLnN0YXJ0c1dpdGgoXCIvY2FubGkteWF5aW5cIilcbiAgICAgICAgICAgICAgICA/IFwiQmlyIHRlbGV2aXp5b24geWF5xLFuxLEgaXpsaXlvcjpcIlxuICAgICAgICAgICAgICAgIDogXCJCaXIgZmlsbSBpemxpeW9yOlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZGF0YS5tb3ZpZS5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSB2aWRlby5wYXVzZWQgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiIDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gdmlkZW8ucGF1c2VkXG4gICAgICAgICAgICAgICAgPyAoYXdhaXQgc3RyaW5ncykucGF1c2VkXG4gICAgICAgICAgICAgICAgOiAoYXdhaXQgc3RyaW5ncykucGxheWluZztcbiAgICAgICAgICAgIGNvbnN0IFtzdGFydFRpbWVzdGFtcCwgZW5kVGltZXN0YW1wXSA9IHByZXNlbmNlLmdldFRpbWVzdGFtcHMoTWF0aC5mbG9vcih2aWRlby5jdXJyZW50VGltZSksIE1hdGguZmxvb3IodmlkZW8uZHVyYXRpb24pKTtcbiAgICAgICAgICAgIGlmICh2aWRlby5kdXJhdGlvbiAmJlxuICAgICAgICAgICAgICAgICF2aWRlby5wYXVzZWQgJiZcbiAgICAgICAgICAgICAgICAhZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9jYW5saS15YXlpblwiKSkge1xuICAgICAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID0gW1xuICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgZW5kVGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IHN0YXJ0VGltZXN0YW1wO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IChhd2FpdCBzdHJpbmdzKS5icm93c2luZztcbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXp0SlFVTTNRaXhQUVVGUExFVkJRVVVzYVVKQlFXbENPMGxCUXpGQ0xFMUJRVTBzUlVGQlJTeG5Ra0ZCWjBJN1NVRkRlRUlzVVVGQlVTeEZRVUZGTEd0Q1FVRnJRanREUVVNMVFpeERRVUZETEVOQlFVTTdRVUZGU2l4VFFVRlRMRlZCUVZVc1EwRkJReXhKUVVGWk8wbEJReTlDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4VlFVRlZMRWxCUVVrN1VVRkRlRVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdTVUZEY0VVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFNpeERRVUZETzBGQlJVUXNUVUZCVFN4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRmNrUXNTVUZCU1N4SlFVRnBRaXhGUVVOd1FpeExRVWxETEVOQlFVTTdRVUZyUWtnc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWRCUVdkQ0xFVkJRVVVzUlVGQlJUdEpRVU53UkN4SlFVRkpMRU5CUVVNc1IwRkJSenRSUVVGRkxFOUJRVTg3U1VGRGFrSXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyeENMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU03UVVGRFdpeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVVklMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUTNCRExFMUJRVTBzU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVOMFF5eFpRVUZaTEVkQlFXbENPMUZCUXpWQ0xHRkJRV0VzUlVGRFdpdzBSRUZCTkVRN1MwRkROMFFzUTBGQlF6dEpRVVZJTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzFGQlF6TkNMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRFlpeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMHRCUTFvN1NVRkZSQ3hKUVVGSkxFbEJRVWtzUlVGQlJUdFJRVU5VTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVOb1FpeFpRVUZaTEVOQlFVTXNUMEZCVHp0blFrRkRia0lzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRWxCUVVrc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM2hGTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNUVUZCVFN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFOQlEycEZPMkZCUVUwN1dVRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1kwRkJZeXhEUVVGRE8yZENRVU55UkN4RFFVRkRMRU5CUVVNc1owTkJRV2RETzJkQ1FVTnNReXhEUVVGRExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNN1dVRkRka0lzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF6dFRRVU55UXp0UlFVVkVMRWxCUVVrc1MwRkJTeXhGUVVGRk8xbEJRMVlzV1VGQldTeERRVUZETEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zYVVSQlFXTXNRMEZCUXl3clEwRkJXU3hEUVVGRE8xbEJRM1pGTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTA3WjBKQlEzcERMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFR0blFrRkRlRUlzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU03V1VGRk0wSXNUVUZCVFN4RFFVRkRMR05CUVdNc1JVRkJSU3haUVVGWkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTFSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkROMElzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRekZDTEVOQlFVTTdXVUZEUml4SlFVTkRMRXRCUVVzc1EwRkJReXhSUVVGUk8yZENRVU5rTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwN1owSkJRMklzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zWTBGQll5eERRVUZETEVWQlEzSkVPMmRDUVVORUxFTkJRVU1zV1VGQldTeERRVUZETEdOQlFXTXNSVUZCUlN4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWM3YjBKQlF6RkVMR05CUVdNN2IwSkJRMlFzV1VGQldUdHBRa0ZEV2l4RFFVRkRPMkZCUTBZN1UwRkRSRHRMUVVORU8xTkJRVTA3VVVGRFRpeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR05CUVdNc1EwRkJRenRSUVVNM1F5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1RVRkJUU3hQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTTdTMEZEYUVRN1NVRkZSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMEZCUTNCRExFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJzdHJpbmdzIiwiZ2V0U3RyaW5ncyIsInBsYXlpbmciLCJwYXVzZWQiLCJicm93c2luZyIsInNlcmllc05hbWUiLCJuYW1lIiwicmVwbGFjZSIsInRleHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsInRvTG93ZXJDYXNlIiwic3RhcnRUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiZGF0YSIsInZpZGVvIiwib24iLCJhc3luYyIsIm1zZyIsInBhdGgiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5IiwiaW5jbHVkZXMiLCJzZXJpZXMiLCJkZXRhaWxzIiwic3BsaXQiLCJzdGF0ZSIsInNlYXNvbiIsImVwIiwic3RhcnRzV2l0aCIsIm1vdmllIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiZW5kVGltZXN0YW1wIiwiZ2V0VGltZXN0YW1wcyIsImN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;