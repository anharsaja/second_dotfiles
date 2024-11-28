var __webpack_exports__={};const presence=new Presence({clientId:"640538683392655370"}),browsingTimestamp=Math.floor(Date.now()/1e3);let title,player,dj,listeners;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/TruckSimFM/assets/logo.png"};player=document.querySelector("#player"),player.paused?document.location.pathname.includes("/recent")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the recently",e.state="played songs",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):document.location.pathname.includes("/team")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the staff team"):document.location.pathname.includes("/request")?(e.startTimestamp=browsingTimestamp,e.details="Requesting a song"):document.location.pathname.includes("/applications")?(e.startTimestamp=browsingTimestamp,e.details="Applying for staff"):document.location.pathname.includes("/about")?(e.startTimestamp=browsingTimestamp,e.details="Reading about TSFM",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):document.location.pathname.includes("/schedule")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the schedule"):document.location.pathname.includes("/convoys")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the convoys"):document.location.pathname.includes("/streamers")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the streamers"):document.location.pathname.includes("/partner")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the partners"):document.location.pathname.includes("/vtc")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the VTC"):document.location.pathname.includes("/weekly")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the weekly",e.state="shows on TSFM"):document.location.pathname.includes("/tuneoftheweek")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the tune",e.state="of the week"):document.location.pathname.includes("/contact")?(e.startTimestamp=browsingTimestamp,e.details="Contacting TSR",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/writing.png"):document.location.pathname.includes("/modifications")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the offical",e.state="modifications list"):document.location.pathname.includes("/advertisements")?(e.startTimestamp=browsingTimestamp,e.details="Viewing the",e.state="advertisements packages"):"/"===document.location.pathname&&(e.startTimestamp=browsingTimestamp,e.details="Browsing..."):(title=document.querySelector("#song"),dj=document.querySelector("#djname"),listeners=document.querySelector("#listeners"),e.details=title.textContent,e.state=`DJ: ${dj.textContent} Listeners: ${listeners.textContent.replace(" Listeners","")}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png"),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2NDA1Mzg2ODMzOTI2NTUzNzBcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xubGV0IHRpdGxlLCBwbGF5ZXIsIGRqLCBsaXN0ZW5lcnM7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVHJ1Y2tTaW1GTS9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9O1xuICAgIHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xuICAgIGlmICghcGxheWVyLnBhdXNlZCkge1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29uZ1wiKTtcbiAgICAgICAgZGogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RqbmFtZVwiKTtcbiAgICAgICAgbGlzdGVuZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0ZW5lcnNcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBESjogJHtkai50ZXh0Q29udGVudH0gTGlzdGVuZXJzOiAke2xpc3RlbmVycy50ZXh0Q29udGVudC5yZXBsYWNlKFwiIExpc3RlbmVyc1wiLCBcIlwiKX1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvcmVjZW50XCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgcmVjZW50bHlcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJwbGF5ZWQgc29uZ3NcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3RlYW1cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBzdGFmZiB0ZWFtXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3JlcXVlc3RcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZXF1ZXN0aW5nIGEgc29uZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9hcHBsaWNhdGlvbnNcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJBcHBseWluZyBmb3Igc3RhZmZcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvYWJvdXRcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIGFib3V0IFRTRk1cIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3NjaGVkdWxlXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgc2NoZWR1bGVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvY29udm95c1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIGNvbnZveXNcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvc3RyZWFtZXJzXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgc3RyZWFtZXJzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3BhcnRuZXJcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBwYXJ0bmVyc1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi92dGNcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBWVENcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvd2Vla2x5XCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgd2Vla2x5XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwic2hvd3Mgb24gVFNGTVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi90dW5lb2Z0aGV3ZWVrXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgdHVuZVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIm9mIHRoZSB3ZWVrXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2NvbnRhY3RcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDb250YWN0aW5nIFRTUlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvd3JpdGluZy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvbW9kaWZpY2F0aW9uc1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIG9mZmljYWxcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJtb2RpZmljYXRpb25zIGxpc3RcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvYWR2ZXJ0aXNlbWVudHNcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcImFkdmVydGlzZW1lbnRzIHBhY2thZ2VzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nLi4uXCI7XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hKUVVGSkxFdEJRV3RDTEVWQlEzSkNMRTFCUVhkQ0xFVkJRM2hDTEVWQlFXVXNSVUZEWml4VFFVRnpRaXhEUVVGRE8wRkJSWGhDTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5zUXl4aFFVRmhMRVZCUTFvc2FVVkJRV2xGTzB0QlEyeEZMRU5CUVVNN1NVRkZSaXhOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVNelF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSVHRSUVVOdVFpeExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU40UXl4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTjJReXhUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVOcVJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhQUVVOd1FpeEZRVUZGTEVOQlFVTXNWMEZEU2l4bFFVRmxMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRMnBGTEZsQlFWa3NRMEZCUXl4aFFVRmhMR2xFUVVGakxFTkJRVU03UzBGRGVrTTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRSUVVNeFJDeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFGQlEyaEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1VVRkRPVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4alFVRmpMRU5CUVVNN1VVRkRjRU1zV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03UzBGRE5VTTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRSUVVONFJDeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFGQlEyaEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZDBKQlFYZENMRU5CUVVNN1MwRkRhRVE3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlR0UlFVTXpSQ3haUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8xRkJRMmhFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTTdTMEZETTBNN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zUlVGQlJUdFJRVU5vUlN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMUZCUTJoRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03UzBGRE5VTTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRSUVVONlJDeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFGQlEyaEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN1VVRkROVU1zV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03UzBGRE5VTTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHRSUVVNMVJDeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFGQlEyaEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1MwRkRPVU03VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlR0UlFVTXpSQ3haUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8xRkJRMmhFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTTdTMEZETjBNN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zUlVGQlJUdFJRVU0zUkN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMUZCUTJoRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkVUpCUVhWQ0xFTkJRVU03UzBGREwwTTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRSUVVNelJDeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFGQlEyaEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1MwRkRPVU03VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0UlFVTjJSQ3haUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8xRkJRMmhFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdTMEZEZWtNN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdFJRVU14UkN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMUZCUTJoRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03VVVGRE5VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhsUVVGbExFTkJRVU03UzBGRGNrTTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEZRVUZGTzFGQlEycEZMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRhRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dFJRVU14UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHRkJRV0VzUTBGQlF6dExRVU51UXp0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xRkJRek5FTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZEYUVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRSUVVONFF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4dlJFRkJhVUlzUTBGQlF6dExRVU0xUXp0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVWQlFVVTdVVUZEYWtVc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRSUVVOb1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSEZDUVVGeFFpeERRVUZETzFGQlF6ZERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN1MwRkRNVU03VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhGUVVGRk8xRkJRMnhGTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZEYUVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGhRVUZoTEVOQlFVTTdVVUZEY2tNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eDVRa0ZCZVVJc1EwRkJRenRMUVVNdlF6dFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFdEJRVXNzUjBGQlJ5eEZRVUZGTzFGQlF6bERMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRhRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4aFFVRmhMRU5CUVVNN1MwRkRja003U1VGRlJDeEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXpzN1VVRkRlRVFzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpkQ0xFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ0aXRsZSIsInBsYXllciIsImRqIiwibGlzdGVuZXJzIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXVzZWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJzdGFydFRpbWVzdGFtcCIsImRldGFpbHMiLCJzdGF0ZSIsInNtYWxsSW1hZ2VLZXkiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;