var __webpack_exports__={};const presence=new Presence({clientId:"719865208515854369"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused",live:"general.live",browsing:"general.browsing"});let video={current:0,duration:0,paused:!0,isLive:!1};presence.on("iFrameData",(e=>{video=e})),presence.on("UpdateData",(async()=>{const e=document.location.pathname;if("/portal/search"===e)return presence.setActivity({details:"Searching for :",state:document.location.search.replace("?q=",""),largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/AIS%20Play/assets/logo.png",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png",smallImageText:"Searching..."});if(e.includes("/portal/get_section"))return presence.setActivity({details:"Browsing for :",state:document.querySelector(".default-title").textContent||"",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/AIS%20Play/assets/logo.png"});const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/AIS%20Play/assets/logo.png"};if(isNaN(video.duration)||video.duration<=0)return t.details="Browsing...",presence.setActivity(t);const s=presence.getTimestamps(Math.floor(video.current),Math.floor(video.duration)),i=document.querySelector(".default-title")||document.querySelector(".live-text-text");let a;if(i.textContent.includes("ตอนที่")){const e=i.textContent.split("ตอนที่");a=e.pop(),a=`ตอนที่ ${a}`,t.state=a,[t.details]=e}else i.textContent&&(t.details=i.textContent);t.smallImageKey=video.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":video.isLive?"https://cdn.rcd.gg/PreMiD/resources/live.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",t.smallImageText=video.paused?(await strings).pause:video.isLive?(await strings).live:(await strings).play,video.paused||video.isLive?!video.paused&&video.isLive?[t.startTimestamp]=s:(delete t.startTimestamp,delete t.endTimestamp):[t.startTimestamp,t.endTimestamp]=s,presence.setActivity(t)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsS0FBTSxrQkFDTkMsTUFBTyxpQkFDUEMsS0FBTSxlQUNOQyxTQUFVLHFCQUVkLElBQUlDLE1BQVEsQ0FDUkMsUUFBUyxFQUNUQyxTQUFVLEVBQ1ZDLFFBQVEsRUFDUkMsUUFBUSxHQUVaYixTQUFTYyxHQUFHLGNBQWVDLElBQ3ZCTixNQUFRTSxDQUFJLElBRWhCZixTQUFTYyxHQUFHLGNBQWNFLFVBQ3RCLE1BQU1DLEVBQU9DLFNBQVNDLFNBQVNDLFNBQy9CLEdBQWEsbUJBQVRILEVBQ0EsT0FBT2pCLFNBQVNxQixZQUFZLENBQ3hCQyxRQUFTLGtCQUNUQyxNQUFPTCxTQUFTQyxTQUFTSyxPQUFPQyxRQUFRLE1BQU8sSUFDL0NDLGNBQWUsa0VBQ2ZDLGNBQWUsaURBQ2ZDLGVBQWdCLGlCQUd4QixHQUFJWCxFQUFLWSxTQUFTLHVCQUNkLE9BQU83QixTQUFTcUIsWUFBWSxDQUN4QkMsUUFBUyxpQkFDVEMsTUFBT0wsU0FBU1ksY0FBYyxrQkFBa0JDLGFBQWUsR0FDL0RMLGNBQWUsb0VBR3ZCLE1BQU1NLEVBQWUsQ0FBRU4sY0FBZSxtRUFDdEMsR0FBSU8sTUFBTXhCLE1BQU1FLFdBQWFGLE1BQU1FLFVBQVksRUFFM0MsT0FEQXFCLEVBQWFWLFFBQVUsY0FDaEJ0QixTQUFTcUIsWUFBWVcsR0FFaEMsTUFBTUUsRUFBYWxDLFNBQVNtQyxjQUFjQyxLQUFLQyxNQUFNNUIsTUFBTUMsU0FBVTBCLEtBQUtDLE1BQU01QixNQUFNRSxXQUFZMkIsRUFBT3BCLFNBQVNZLGNBQWMsbUJBQzVIWixTQUFTWSxjQUFjLG1CQUMzQixJQUFJUyxFQUNKLEdBQUlELEVBQUtQLFlBQVlGLFNBQVMsVUFBVyxDQUNyQyxNQUFNVyxFQUFPRixFQUFLUCxZQUFZVSxNQUFNLFVBQ3BDRixFQUFVQyxFQUFLRSxNQUNmSCxFQUFVLFVBQVVBLElBQ3BCUCxFQUFhVCxNQUFRZ0IsR0FDcEJQLEVBQWFWLFNBQVdrQixDQUM3QixNQUNTRixFQUFLUCxjQUNWQyxFQUFhVixRQUFVZ0IsRUFBS1AsYUFDaENDLEVBQWFMLGNBQWdCbEIsTUFBTUcsT0FDN0IsZ0RBQ0FILE1BQU1JLE9BQ0YsK0NBQ0EsK0NBQ1ZtQixFQUFhSixlQUFpQm5CLE1BQU1HLGNBQ3ZCVCxTQUFTRyxNQUNoQkcsTUFBTUksY0FDS1YsU0FBU0ksWUFDVEosU0FBU0UsS0FDckJJLE1BQU1HLFFBQVdILE1BQU1JLFFBRWxCSixNQUFNRyxRQUFVSCxNQUFNSSxRQUMzQm1CLEVBQWFXLGdCQUFrQlQsVUFFekJGLEVBQWFXLHNCQUNiWCxFQUFhWSxlQUxuQlosRUFBYVcsZUFBZ0JYLEVBQWFZLGNBQWdCVixFQU8vRGxDLFNBQVNxQixZQUFZVyxFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjcxOTg2NTIwODUxNTg1NDM2OVwiLFxufSksIHN0cmluZ3MgPSBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICBwbGF5OiBcImdlbmVyYWwucGxheWluZ1wiLFxuICAgIHBhdXNlOiBcImdlbmVyYWwucGF1c2VkXCIsXG4gICAgbGl2ZTogXCJnZW5lcmFsLmxpdmVcIixcbiAgICBicm93c2luZzogXCJnZW5lcmFsLmJyb3dzaW5nXCIsXG59KTtcbmxldCB2aWRlbyA9IHtcbiAgICBjdXJyZW50OiAwLFxuICAgIGR1cmF0aW9uOiAwLFxuICAgIHBhdXNlZDogdHJ1ZSxcbiAgICBpc0xpdmU6IGZhbHNlLFxufTtcbnByZXNlbmNlLm9uKFwiaUZyYW1lRGF0YVwiLCAoZGF0YSkgPT4ge1xuICAgIHZpZGVvID0gZGF0YTtcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgaWYgKHBhdGggPT09IFwiL3BvcnRhbC9zZWFyY2hcIikge1xuICAgICAgICByZXR1cm4gcHJlc2VuY2Uuc2V0QWN0aXZpdHkoe1xuICAgICAgICAgICAgZGV0YWlsczogXCJTZWFyY2hpbmcgZm9yIDpcIixcbiAgICAgICAgICAgIHN0YXRlOiBkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9xPVwiLCBcIlwiKSxcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9BL0FJUyUyMFBsYXkvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0OiBcIlNlYXJjaGluZy4uLlwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHBhdGguaW5jbHVkZXMoXCIvcG9ydGFsL2dldF9zZWN0aW9uXCIpKSB7XG4gICAgICAgIHJldHVybiBwcmVzZW5jZS5zZXRBY3Rpdml0eSh7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIkJyb3dzaW5nIGZvciA6XCIsXG4gICAgICAgICAgICBzdGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWZhdWx0LXRpdGxlXCIpLnRleHRDb250ZW50IHx8IFwiXCIsXG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9BSVMlMjBQbGF5L2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0geyBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9BSVMlMjBQbGF5L2Fzc2V0cy9sb2dvLnBuZ1wiIH07XG4gICAgaWYgKGlzTmFOKHZpZGVvLmR1cmF0aW9uKSB8fCB2aWRlby5kdXJhdGlvbiA8PSAwKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZy4uLlwiO1xuICAgICAgICByZXR1cm4gcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICB9XG4gICAgY29uc3QgdGltZXN0YW1wcyA9IHByZXNlbmNlLmdldFRpbWVzdGFtcHMoTWF0aC5mbG9vcih2aWRlby5jdXJyZW50KSwgTWF0aC5mbG9vcih2aWRlby5kdXJhdGlvbikpLCBJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWZhdWx0LXRpdGxlXCIpIHx8XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGl2ZS10ZXh0LXRleHRcIik7XG4gICAgbGV0IGVwaXNvZGU7XG4gICAgaWYgKEluZm8udGV4dENvbnRlbnQuaW5jbHVkZXMoXCLguJXguK3guJnguJfguLXguYhcIikpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IEluZm8udGV4dENvbnRlbnQuc3BsaXQoXCLguJXguK3guJnguJfguLXguYhcIik7XG4gICAgICAgIGVwaXNvZGUgPSBpbmZvLnBvcCgpO1xuICAgICAgICBlcGlzb2RlID0gYOC4leC4reC4meC4l+C4teC5iCAke2VwaXNvZGV9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZXBpc29kZTtcbiAgICAgICAgW3ByZXNlbmNlRGF0YS5kZXRhaWxzXSA9IGluZm87XG4gICAgfVxuICAgIGVsc2UgaWYgKEluZm8udGV4dENvbnRlbnQpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gSW5mby50ZXh0Q29udGVudDtcbiAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHZpZGVvLnBhdXNlZFxuICAgICAgICA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCJcbiAgICAgICAgOiB2aWRlby5pc0xpdmVcbiAgICAgICAgICAgID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9saXZlLnBuZ1wiXG4gICAgICAgICAgICA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSB2aWRlby5wYXVzZWRcbiAgICAgICAgPyAoYXdhaXQgc3RyaW5ncykucGF1c2VcbiAgICAgICAgOiB2aWRlby5pc0xpdmVcbiAgICAgICAgICAgID8gKGF3YWl0IHN0cmluZ3MpLmxpdmVcbiAgICAgICAgICAgIDogKGF3YWl0IHN0cmluZ3MpLnBsYXk7XG4gICAgaWYgKCF2aWRlby5wYXVzZWQgJiYgIXZpZGVvLmlzTGl2ZSlcbiAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPSB0aW1lc3RhbXBzO1xuICAgIGVsc2UgaWYgKCF2aWRlby5wYXVzZWQgJiYgdmlkZW8uaXNMaXZlKVxuICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wXSA9IHRpbWVzdGFtcHM7XG4gICAgZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgIH1cbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNM1FpeEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08wbEJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3U1VGRGRrSXNTVUZCU1N4RlFVRkZMR05CUVdNN1NVRkRjRUlzVVVGQlVTeEZRVUZGTEd0Q1FVRnJRanREUVVNMVFpeERRVUZETEVOQlFVTTdRVUZGU2l4SlFVRkpMRXRCUVVzc1IwRkJSenRKUVVOWUxFOUJRVThzUlVGQlJTeERRVUZETzBsQlExWXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hOUVVGTkxFVkJRVVVzU1VGQlNUdEpRVU5hTEUxQlFVMHNSVUZCUlN4TFFVRkxPME5CUTJJc1EwRkJRenRCUVVWR0xGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlExWXNXVUZCV1N4RlFVTmFMRU5CUVVNc1NVRkxRU3hGUVVGRkxFVkJRVVU3U1VGRFNpeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTJRc1EwRkJReXhEUVVORUxFTkJRVU03UVVGTlJpeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTjRReXhKUVVGSkxFbEJRVWtzUzBGQlN5eG5Ra0ZCWjBJc1JVRkJSVHRSUVVNNVFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRNMElzVDBGQlR5eEZRVUZGTEdsQ1FVRnBRanRaUVVNeFFpeExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRiRVFzWVVGQllTeHRSVUZCWVR0WlFVTXhRaXhoUVVGaExHdEVRVUZsTzFsQlF6VkNMR05CUVdNc1JVRkJSU3hqUVVGak8xTkJRemxDTEVOQlFVTXNRMEZCUXp0TFFVTklPMGxCUlVRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFVkJRVVU3VVVGRGVrTXNUMEZCVHl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRek5DTEU5QlFVOHNSVUZCUlN4blFrRkJaMEk3V1VGRGVrSXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJReXhYUVVGWExFbEJRVWtzUlVGQlJUdFpRVU5xUlN4aFFVRmhMRVZCUTFvc2FVVkJRV2xGTzFOQlEyeEZMRU5CUVVNc1EwRkJRenRMUVVOSU8wbEJSVVFzVFVGQlRTeFpRVUZaTEVkQlFXbENMRVZCUVVVc1lVRkJZU3h0UlVGQllTeEZRVUZGTEVOQlFVTTdTVUZEYkVVc1NVRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eEZRVUZGTzFGQlEycEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzFGQlJYSkRMRTlCUVU4c1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0TFFVTXhRenRKUVVWRUxFMUJRVTBzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNaRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVONlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGRE1VSXNSVUZEUkN4SlFVRkpMRWRCUTBnc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJRenRSUVVONFF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdTVUZETlVNc1NVRkJTU3hQUVVGUExFTkJRVU03U1VGRldpeEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFGQlEzaERMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRemxETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRmNrSXNUMEZCVHl4SFFVRkhMRlZCUVZVc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRE9VSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGRE4wSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzB0QlF6bENPMU5CUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ6dFJRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dEpRVVZ5UlN4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTzFGQlEzaERMRU5CUVVNN1VVRkRSQ3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMDdXVUZEWkN4RFFVRkRPMWxCUTBRc1EwRkJReXdyUTBGQldTeERRVUZETzBsQlEyWXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRUdFJRVU42UXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVczdVVUZEZGtJc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTzFsQlEyUXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTzFsQlEzUkNMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUlhoQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTA3VVVGRGFrTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhGUVVGRkxGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNN1UwRkRiRVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTA3VVVGRGNrTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETzFOQlEzWkRPMUZCUTBvc1QwRkJUeXhaUVVGWkxFTkJRVU1zWTBGQll5eERRVUZETzFGQlEyNURMRTlCUVU4c1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF6dExRVU5xUXp0SlFVVkVMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdRVUZEY0VNc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJzdHJpbmdzIiwiZ2V0U3RyaW5ncyIsInBsYXkiLCJwYXVzZSIsImxpdmUiLCJicm93c2luZyIsInZpZGVvIiwiY3VycmVudCIsImR1cmF0aW9uIiwicGF1c2VkIiwiaXNMaXZlIiwib24iLCJkYXRhIiwiYXN5bmMiLCJwYXRoIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2V0QWN0aXZpdHkiLCJkZXRhaWxzIiwic3RhdGUiLCJzZWFyY2giLCJyZXBsYWNlIiwibGFyZ2VJbWFnZUtleSIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsImluY2x1ZGVzIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicHJlc2VuY2VEYXRhIiwiaXNOYU4iLCJ0aW1lc3RhbXBzIiwiZ2V0VGltZXN0YW1wcyIsIk1hdGgiLCJmbG9vciIsIkluZm8iLCJlcGlzb2RlIiwiaW5mbyIsInNwbGl0IiwicG9wIiwic3RhcnRUaW1lc3RhbXAiLCJlbmRUaW1lc3RhbXAiXSwic291cmNlUm9vdCI6IiJ9
undefined;