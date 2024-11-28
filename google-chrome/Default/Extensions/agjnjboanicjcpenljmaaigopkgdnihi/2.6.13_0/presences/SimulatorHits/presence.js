var __webpack_exports__={};const presence=new Presence({clientId:"701623299460825108"});let title="Loading SimulatorHits",artist="",presenter="AutoDJ";function getSongData(){fetch("https://api.simulatorhits.com/now-playing?override").then((e=>{200===e.status&&e.json().then((e=>{({title,artist}=e.song),presenter=e.presenter.username}))}))}setInterval(getSongData,1e4),getSongData();const currentTime=Math.floor(Date.now()/1e3);presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/SimulatorHits/assets/logo.png",smallImageText:`Current Presenter: ${presenter}`,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/play.png",startTimestamp:currentTime};if("simulatorhits.com"===document.location.hostname)switch(document.location.pathname){case"/schedule":e.details="Viewing Schedule",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;case"/news":e.details="Reading News",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;case"/about/meet-the-team":e.details="Viewing Staff Team",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;case"/request":e.details="Making a Request",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/writing.png";break;case"/streamers":e.details="Viewing Streamers",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;default:e.details=title,e.state=artist}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZCxJQUFJQyxNQUFRLHdCQUF5QkMsT0FBUyxHQUFJQyxVQUFZLFNBQzlELFNBQVNDLGNBQ0xDLE1BQU0sc0RBQXNEQyxNQUFLQyxJQUNyQyxNQUFwQkEsRUFBU0MsUUFDVEQsRUFBU0UsT0FBT0gsTUFBS0ksTUFDZFQsTUFBT0MsUUFBV1EsRUFBS0MsTUFDMUJSLFVBQVlPLEVBQUtQLFVBQVVTLFFBQVEsR0FFM0MsR0FFUixDQUNBQyxZQUFZVCxZQUFhLEtBQ3pCQSxjQUNBLE1BQU1VLFlBQWNDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsS0FDNUNwQixTQUFTcUIsR0FBRyxjQUFjLEtBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUscUVBQ2ZDLGVBQWdCLHNCQUFzQm5CLFlBQ3RDb0IsY0FBZSwrQ0FDZkMsZUFBZ0JWLGFBRXBCLEdBQW1DLHNCQUEvQlcsU0FBU0MsU0FBU0MsU0FDbEIsT0FBUUYsU0FBU0MsU0FBU0UsVUFDdEIsSUFBSyxZQUNEUixFQUFhUyxRQUFVLG1CQUN2QlQsRUFBYUcsY0FBZ0Isa0RBQzdCLE1BRUosSUFBSyxRQUNESCxFQUFhUyxRQUFVLGVBQ3ZCVCxFQUFhRyxjQUFnQixrREFDN0IsTUFFSixJQUFLLHVCQUNESCxFQUFhUyxRQUFVLHFCQUN2QlQsRUFBYUcsY0FBZ0Isa0RBQzdCLE1BRUosSUFBSyxXQUNESCxFQUFhUyxRQUFVLG1CQUN2QlQsRUFBYUcsY0FBZ0Isa0RBQzdCLE1BRUosSUFBSyxhQUNESCxFQUFhUyxRQUFVLG9CQUN2QlQsRUFBYUcsY0FBZ0Isa0RBQzdCLE1BRUosUUFDSUgsRUFBYVMsUUFBVTVCLE1BQ3ZCbUIsRUFBYVUsTUFBUTVCLE9BSTdCa0IsRUFBYVMsUUFDYi9CLFNBQVNpQyxZQUFZWCxHQUVyQnRCLFNBQVNpQyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjcwMTYyMzI5OTQ2MDgyNTEwOFwiLFxufSk7XG5sZXQgdGl0bGUgPSBcIkxvYWRpbmcgU2ltdWxhdG9ySGl0c1wiLCBhcnRpc3QgPSBcIlwiLCBwcmVzZW50ZXIgPSBcIkF1dG9ESlwiO1xuZnVuY3Rpb24gZ2V0U29uZ0RhdGEoKSB7XG4gICAgZmV0Y2goXCJodHRwczovL2FwaS5zaW11bGF0b3JoaXRzLmNvbS9ub3ctcGxheWluZz9vdmVycmlkZVwiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAoeyB0aXRsZSwgYXJ0aXN0IH0gPSBkYXRhLnNvbmcpO1xuICAgICAgICAgICAgICAgIHByZXNlbnRlciA9IGRhdGEucHJlc2VudGVyLnVzZXJuYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbnNldEludGVydmFsKGdldFNvbmdEYXRhLCAxMDAwMCk7XG5nZXRTb25nRGF0YSgpO1xuY29uc3QgY3VycmVudFRpbWUgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TaW11bGF0b3JIaXRzL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzbWFsbEltYWdlVGV4dDogYEN1cnJlbnQgUHJlc2VudGVyOiAke3ByZXNlbnRlcn1gLFxuICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBjdXJyZW50VGltZSxcbiAgICB9O1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJzaW11bGF0b3JoaXRzLmNvbVwiKSB7XG4gICAgICAgIHN3aXRjaCAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCIvc2NoZWR1bGVcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFNjaGVkdWxlXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL25ld3NcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIE5ld3NcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvYWJvdXQvbWVldC10aGUtdGVhbVwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgU3RhZmYgVGVhbVwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9yZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTWFraW5nIGEgUmVxdWVzdFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy93cml0aW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9zdHJlYW1lcnNcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFN0cmVhbWVyc1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYXJ0aXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNM1FpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNRMEZCUXp0QlFVVklMRWxCUVVrc1MwRkJTeXhIUVVGSExIVkNRVUYxUWl4RlFVTnNReXhOUVVGTkxFZEJRVWNzUlVGQlJTeEZRVU5ZTEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNN1FVRkZkRUlzVTBGQlV5eFhRVUZYTzBsQlEyNUNMRXRCUVVzc1EwRkJReXh2UkVGQmIwUXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdFJRVU16UlN4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEZRVUZGTzFsQlF6VkNMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1owSkJRek5DTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOb1F5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGRGNrTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRTRHRKUVVOR0xFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEwb3NRMEZCUXp0QlFVVkVMRmRCUVZjc1EwRkJReXhYUVVGWExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEYUVNc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGRlpDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWc1JDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVU3U1VGRE9VSXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnhETEdGQlFXRXNSVUZEV2l4dlJVRkJiMFU3VVVGRGNrVXNZMEZCWXl4RlFVRkZMSE5DUVVGelFpeFRRVUZUTEVWQlFVVTdVVUZEYWtRc1lVRkJZU3huUkVGQllUdFJRVU14UWl4alFVRmpMRVZCUVVVc1YwRkJWenRMUVVNelFpeERRVUZETzBsQlJVWXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUzBGQlN5eHRRa0ZCYlVJc1JVRkJSVHRSUVVOMlJDeFJRVUZSTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRMjVETEV0QlFVc3NWMEZCVnl4RFFVRkRMRU5CUVVNN1owSkJRMnBDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdaMEpCUXpGRExGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8yZENRVVUxUXl4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzJkQ1FVTmlMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWTBGQll5eERRVUZETzJkQ1FVTjBReXhaUVVGWkxFTkJRVU1zWVVGQllTeHZSRUZCYVVJc1EwRkJRenRuUWtGRk5VTXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXh6UWtGQmMwSXNRMEZCUXl4RFFVRkRPMmRDUVVNMVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzlDUVVGdlFpeERRVUZETzJkQ1FVTTFReXhaUVVGWkxFTkJRVU1zWVVGQllTeHZSRUZCYVVJc1EwRkJRenRuUWtGRk5VTXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRuUWtGRE1VTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdaMEpCUlRWRExFMUJRVTA3WVVGRFRqdFpRVU5FTEV0QlFVc3NXVUZCV1N4RFFVRkRMRU5CUVVNN1owSkJRMnhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTTdaMEpCUXpORExGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8yZENRVVUxUXl4TlFVRk5PMkZCUTA0N1dVRkRSQ3hQUVVGUExFTkJRVU1zUTBGQlF6dG5Ra0ZEVWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dG5Ra0ZETjBJc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdZVUZETlVJN1UwRkRSRHRMUVVORU8wbEJSVVFzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMUZCUTNoRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwidGl0bGUiLCJhcnRpc3QiLCJwcmVzZW50ZXIiLCJnZXRTb25nRGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJzb25nIiwidXNlcm5hbWUiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRUaW1lIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0Iiwic21hbGxJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJkZXRhaWxzIiwic3RhdGUiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;