var __webpack_exports__={};const presence=new Presence({clientId:"611657413350654010"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused"});let playback,lastPlaybackState=null,browsingTimestamp=Math.floor(Date.now()/1e3);lastPlaybackState!==playback&&(lastPlaybackState=playback,browsingTimestamp=Math.floor(Date.now()/1e3)),presence.on("UpdateData",(async()=>{const e=document.querySelector("#player > div.jw-media.jw-reset > video");if(playback=null!==e,!playback){const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/Aniyan/assets/logo.png",details:"Browsing...",startTimestamp:browsingTimestamp};delete e.state,delete e.smallImageKey,presence.setActivity(e,!0)}if(playback){const t=document.querySelector("div > div.episodeInfo > div.nomeAnime"),a=document.querySelector("div > div.episodeInfo > div.epInfo"),[s,n]=presence.getTimestamps(e.currentTime,e.duration),i={details:t.textContent,state:a.textContent,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/Aniyan/assets/logo.png",smallImageKey:e.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",smallImageText:e.paused?(await strings).pause:(await strings).play,startTimestamp:s,endTimestamp:n};i.details=t.textContent,i.state=a.textContent,i.startTimestamp=browsingTimestamp,e.paused&&(delete i.startTimestamp,delete i.endTimestamp),presence.setActivity(i,!0)}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsS0FBTSxrQkFDTkMsTUFBTyxtQkFFWCxJQUE4QkMsU0FBMUJDLGtCQUFvQixLQUFnQkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hGTCxvQkFBc0JELFdBQ3RCQyxrQkFBb0JELFNBQ3BCRSxrQkFBb0JDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsTUFFaERiLFNBQVNjLEdBQUcsY0FBY0MsVUFDdEIsTUFBTUMsRUFBUUMsU0FBU0MsY0FBYywyQ0FFckMsR0FEQVgsU0FBcUIsT0FBVlMsR0FDTlQsU0FBVSxDQUNYLE1BQU1ZLEVBQWUsQ0FDakJDLGNBQWUsOERBQ2ZDLFFBQVMsY0FDVEMsZUFBZ0JiLDBCQUViVSxFQUFhSSxhQUNiSixFQUFhSyxjQUNwQnhCLFNBQVN5QixZQUFZTixHQUFjLEVBQ3ZDLENBQ0EsR0FBSVosU0FBVSxDQUNWLE1BQU1tQixFQUFhVCxTQUFTQyxjQUFjLHlDQUEwQ1MsRUFBVVYsU0FBU0MsY0FBYyx1Q0FBd0NJLEVBQWdCTSxHQUFnQjVCLFNBQVM2QixjQUFjYixFQUFNYyxZQUFhZCxFQUFNZSxVQUFXWixFQUFlLENBQ25RRSxRQUFTSyxFQUFXTSxZQUNwQlQsTUFBT0ksRUFBUUssWUFDZlosY0FBZSw4REFDZkksY0FBZVIsRUFBTWlCLE9BQVMsZ0RBQWtELCtDQUNoRkMsZUFBZ0JsQixFQUFNaUIsY0FDVDlCLFNBQVNHLGFBQ1RILFNBQVNFLEtBQ3RCaUIsaUJBQ0FNLGdCQUVKVCxFQUFhRSxRQUFVSyxFQUFXTSxZQUNsQ2IsRUFBYUksTUFBUUksRUFBUUssWUFDN0JiLEVBQWFHLGVBQWlCYixrQkFDMUJPLEVBQU1pQixnQkFDQ2QsRUFBYUcsc0JBQ2JILEVBQWFTLGNBRXhCNUIsU0FBU3lCLFlBQVlOLEdBQWMsRUFDdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjExNjU3NDEzMzUwNjU0MDEwXCIsXG59KSwgc3RyaW5ncyA9IHByZXNlbmNlLmdldFN0cmluZ3Moe1xuICAgIHBsYXk6IFwiZ2VuZXJhbC5wbGF5aW5nXCIsXG4gICAgcGF1c2U6IFwiZ2VuZXJhbC5wYXVzZWRcIixcbn0pO1xubGV0IGxhc3RQbGF5YmFja1N0YXRlID0gbnVsbCwgcGxheWJhY2ssIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5pZiAobGFzdFBsYXliYWNrU3RhdGUgIT09IHBsYXliYWNrKSB7XG4gICAgbGFzdFBsYXliYWNrU3RhdGUgPSBwbGF5YmFjaztcbiAgICBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xufVxucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyID4gZGl2Lmp3LW1lZGlhLmp3LXJlc2V0ID4gdmlkZW9cIik7XG4gICAgcGxheWJhY2sgPSB2aWRlbyAhPT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcbiAgICBpZiAoIXBsYXliYWNrKSB7XG4gICAgICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9BL0FuaXlhbi9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmcuLi5cIixcbiAgICAgICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEsIHRydWUpO1xuICAgIH1cbiAgICBpZiAocGxheWJhY2spIHtcbiAgICAgICAgY29uc3QgdmlkZW9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYgPiBkaXYuZXBpc29kZUluZm8gPiBkaXYubm9tZUFuaW1lXCIpLCBlcGlzb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiA+IGRpdi5lcGlzb2RlSW5mbyA+IGRpdi5lcEluZm9cIiksIFtzdGFydFRpbWVzdGFtcCwgZW5kVGltZXN0YW1wXSA9IHByZXNlbmNlLmdldFRpbWVzdGFtcHModmlkZW8uY3VycmVudFRpbWUsIHZpZGVvLmR1cmF0aW9uKSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICAgICAgZGV0YWlsczogdmlkZW9UaXRsZS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIHN0YXRlOiBlcGlzb2RlLnRleHRDb250ZW50LFxuICAgICAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0EvQW5peWFuL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZUtleTogdmlkZW8ucGF1c2VkID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIiA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0OiB2aWRlby5wYXVzZWRcbiAgICAgICAgICAgICAgICA/IChhd2FpdCBzdHJpbmdzKS5wYXVzZVxuICAgICAgICAgICAgICAgIDogKGF3YWl0IHN0cmluZ3MpLnBsYXksXG4gICAgICAgICAgICBzdGFydFRpbWVzdGFtcCxcbiAgICAgICAgICAgIGVuZFRpbWVzdGFtcCxcbiAgICAgICAgfTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSB2aWRlb1RpdGxlLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBlcGlzb2RlLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCkge1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcDtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgICAgICB9XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSwgdHJ1ZSk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNM1FpeEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08wbEJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3UTBGRGRrSXNRMEZCUXl4RFFVRkRPMEZCUlVvc1NVRkJTU3hwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRVZCUXpOQ0xGRkJRVkVzUlVGRFVpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVTF1UkN4SlFVRkpMR2xDUVVGcFFpeExRVUZMTEZGQlFWRXNSVUZCUlR0SlFVTnVReXhwUWtGQmFVSXNSMEZCUnl4UlFVRlJMRU5CUVVNN1NVRkROMElzYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UTBGRGJFUTdRVUZGUkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTnVReXg1UTBGQmVVTXNRMEZEZWtNc1EwRkJRenRKUVVWR0xGRkJRVkVzUjBGQlJ5eExRVUZMTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVVjZReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFGQlEyUXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xbEJRMnhETEdGQlFXRXNLMFJCUVdFN1dVRkRNVUlzVDBGQlR5eEZRVUZGTEdGQlFXRTdXVUZEZEVJc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0VFFVTnFReXhEUVVGRE8xRkJSVVlzVDBGQlR5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpGQ0xFOUJRVThzV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVVnNReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVONlF6dEpRVVZFTEVsQlFVa3NVVUZCVVN4RlFVRkZPMUZCUTJJc1RVRkJUU3hWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEZGtNc2RVTkJRWFZETEVOQlEzWkRMRVZCUTBRc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF5OUNMRzlEUVVGdlF5eERRVU53UXl4RlFVTkVMRU5CUVVNc1kwRkJZeXhGUVVGRkxGbEJRVmtzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNSRUxFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlEycENMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRMlFzUlVGRFJDeFpRVUZaTEVkQlFXbENPMWxCUXpWQ0xFOUJRVThzUlVGQlJTeFZRVUZWTEVOQlFVTXNWMEZCVnp0WlFVTXZRaXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEZkQlFWYzdXVUZETVVJc1lVRkJZU3dyUkVGQllUdFpRVU14UWl4aFFVRmhMRVZCUVVVc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEdsRVFVRmpMRU5CUVVNc0swTkJRVms3V1VGRGVFUXNZMEZCWXl4RlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTk8yZENRVU16UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVczdaMEpCUTNaQ0xFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTVHRaUVVOMlFpeGpRVUZqTzFsQlEyUXNXVUZCV1R0VFFVTmFMRU5CUVVNN1VVRkZTQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRPVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM3BETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZGYUVRc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEycENMRTlCUVU4c1dVRkJXU3hEUVVGRExHTkJRV01zUTBGQlF6dFpRVU51UXl4UFFVRlBMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU03VTBGRGFrTTdVVUZGUkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTjZRenRCUVVOR0xFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJzdHJpbmdzIiwiZ2V0U3RyaW5ncyIsInBsYXkiLCJwYXVzZSIsInBsYXliYWNrIiwibGFzdFBsYXliYWNrU3RhdGUiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwidmlkZW8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5IiwiZGV0YWlscyIsInN0YXJ0VGltZXN0YW1wIiwic3RhdGUiLCJzbWFsbEltYWdlS2V5Iiwic2V0QWN0aXZpdHkiLCJ2aWRlb1RpdGxlIiwiZXBpc29kZSIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwidGV4dENvbnRlbnQiLCJwYXVzZWQiLCJzbWFsbEltYWdlVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=
undefined;