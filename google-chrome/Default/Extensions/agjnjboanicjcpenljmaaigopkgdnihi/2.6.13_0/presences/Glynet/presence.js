var __webpack_exports__={};const presence=new Presence({clientId:"655480486046466098"}),browsingTimestamp=Math.floor(Date.now()/1e3),presenceData={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Glynet/assets/logo.png",startTimestamp:browsingTimestamp};presence.on("UpdateData",(()=>{const e=document.location.pathname;"/"===e&&(presenceData.details="Ana sayfa"),e.startsWith("/feed")&&(presenceData.details="Ana sayfa",presenceData.state="Duvarını kontrol ediyor..."),e.startsWith("/explore")&&(presenceData.details="Keşfet bölümünde..."),e.startsWith("/hashtag-")&&(presenceData.details="Bir etikete bakıyor...",presenceData.state=document.querySelector("#content > div > div:nth-child(2) > div.eksigimneanlamiyorum > div > a")?.textContent),e.startsWith("/news")&&(presenceData.details="Haberlere göz atıyor..."),e.startsWith("/@")&&(presenceData.details="Bir profile göz atıyor...",presenceData.state=document.querySelector("#profiletop_username")?.textContent),e.startsWith("/404")&&(presenceData.details="Server Error: 404",presenceData.state="Sayfa bulunamadı."),e.startsWith("/403")&&(presenceData.details="Server Error: 403",presenceData.state="Yasaklı Bölge!"),(e.startsWith("/503")||e.startsWith("/500"))&&(presenceData.details=`Server Error: ${e.substring(1)}`,presenceData.state="Sunucuya şu anda ulaşılamıyor."),e.startsWith("/400")&&(presenceData.details="Server Error: 400",presenceData.state="Geçersiz istek."),"string"==typeof presenceData.details?presence.setActivity(presenceData):presence.setActivity({details:"Bilinmeyen bir sayfada...",startTimestamp:browsingTimestamp,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Glynet/assets/logo.png"})}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUFFQyxTQUFVLHVCQUF5QkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQU9DLGFBQWUsQ0FDaklDLGNBQWUsOERBQ2ZDLGVBQWdCUCxtQkFFcEJILFNBQVNXLEdBQUcsY0FBYyxLQUN0QixNQUFNQyxFQUFPQyxTQUFTQyxTQUFTQyxTQUNsQixNQUFUSCxJQUNBSixhQUFhUSxRQUFVLGFBQ3ZCSixFQUFLSyxXQUFXLFdBQ2hCVCxhQUFhUSxRQUFVLFlBQ3ZCUixhQUFhVSxNQUFRLDhCQUVyQk4sRUFBS0ssV0FBVyxjQUNoQlQsYUFBYVEsUUFBVSx1QkFDdkJKLEVBQUtLLFdBQVcsZUFDaEJULGFBQWFRLFFBQVUseUJBQ3ZCUixhQUFhVSxNQUFRTCxTQUFTTSxjQUFjLDJFQUEyRUMsYUFFdkhSLEVBQUtLLFdBQVcsV0FDaEJULGFBQWFRLFFBQVUsMkJBQ3ZCSixFQUFLSyxXQUFXLFFBQ2hCVCxhQUFhUSxRQUFVLDRCQUN2QlIsYUFBYVUsTUFBUUwsU0FBU00sY0FBYyx5QkFBeUJDLGFBRXJFUixFQUFLSyxXQUFXLFVBQ2hCVCxhQUFhUSxRQUFVLG9CQUN2QlIsYUFBYVUsTUFBUSxxQkFFckJOLEVBQUtLLFdBQVcsVUFDaEJULGFBQWFRLFFBQVUsb0JBQ3ZCUixhQUFhVSxNQUFRLG1CQUVyQk4sRUFBS0ssV0FBVyxTQUFXTCxFQUFLSyxXQUFXLFdBQzNDVCxhQUFhUSxRQUFVLGlCQUFpQkosRUFBS1MsVUFBVSxLQUN2RGIsYUFBYVUsTUFBUSxrQ0FFckJOLEVBQUtLLFdBQVcsVUFDaEJULGFBQWFRLFFBQVUsb0JBQ3ZCUixhQUFhVSxNQUFRLG1CQUVXLGlCQUF6QlYsYUFBYVEsUUFDcEJoQixTQUFTc0IsWUFBWWQsY0FFckJSLFNBQVNzQixZQUFZLENBQ2pCTixRQUFTLDRCQUNUTixlQUFnQlAsa0JBQ2hCTSxjQUFlLCtEQUV2QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHsgY2xpZW50SWQ6IFwiNjU1NDgwNDg2MDQ2NDY2MDk4XCIgfSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksIHByZXNlbmNlRGF0YSA9IHtcbiAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRy9HbHluZXQvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxufTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmIChwYWdlID09PSBcIi9cIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkFuYSBzYXlmYVwiO1xuICAgIGlmIChwYWdlLnN0YXJ0c1dpdGgoXCIvZmVlZFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQW5hIHNheWZhXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiRHV2YXLEsW7EsSBrb250cm9sIGVkaXlvci4uLlwiO1xuICAgIH1cbiAgICBpZiAocGFnZS5zdGFydHNXaXRoKFwiL2V4cGxvcmVcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJLZcWfZmV0IGLDtmzDvG3DvG5kZS4uLlwiO1xuICAgIGlmIChwYWdlLnN0YXJ0c1dpdGgoXCIvaGFzaHRhZy1cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJpciBldGlrZXRlIGJha8SxeW9yLi4uXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYuZWtzaWdpbW5lYW5sYW1peW9ydW0gPiBkaXYgPiBhXCIpPy50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgaWYgKHBhZ2Uuc3RhcnRzV2l0aChcIi9uZXdzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSGFiZXJsZXJlIGfDtnogYXTEsXlvci4uLlwiO1xuICAgIGlmIChwYWdlLnN0YXJ0c1dpdGgoXCIvQFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmlyIHByb2ZpbGUgZ8O2eiBhdMSxeW9yLi4uXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZXRvcF91c2VybmFtZVwiKT8udGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIGlmIChwYWdlLnN0YXJ0c1dpdGgoXCIvNDA0XCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZXJ2ZXIgRXJyb3I6IDQwNFwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlNheWZhIGJ1bHVuYW1hZMSxLlwiO1xuICAgIH1cbiAgICBpZiAocGFnZS5zdGFydHNXaXRoKFwiLzQwM1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VydmVyIEVycm9yOiA0MDNcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJZYXNha2zEsSBCw7ZsZ2UhXCI7XG4gICAgfVxuICAgIGlmIChwYWdlLnN0YXJ0c1dpdGgoXCIvNTAzXCIpIHx8IHBhZ2Uuc3RhcnRzV2l0aChcIi81MDBcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU2VydmVyIEVycm9yOiAke3BhZ2Uuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiU3VudWN1eWEgxZ91IGFuZGEgdWxhxZ/EsWxhbcSxeW9yLlwiO1xuICAgIH1cbiAgICBpZiAocGFnZS5zdGFydHNXaXRoKFwiLzQwMFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VydmVyIEVycm9yOiA0MDBcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJHZcOnZXJzaXogaXN0ZWsuXCI7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcHJlc2VuY2VEYXRhLmRldGFpbHMgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHtcbiAgICAgICAgICAgIGRldGFpbHM6IFwiQmlsaW5tZXllbiBiaXIgc2F5ZmFkYS4uLlwiLFxuICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgICAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2x5bmV0L2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeHZRa0ZCYjBJc1JVRkJSU3hEUVVGRExFVkJRMmhGTEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eEZRVU5xUkN4WlFVRlpMRWRCUVdsQ08wbEJRelZDTEdGQlFXRXNSVUZEV2l3MlJFRkJOa1E3U1VGRE9VUXNZMEZCWXl4RlFVRkZMR2xDUVVGcFFqdERRVU5xUXl4RFFVRkRPMEZCUlVnc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNSMEZCUnl4RlFVRkZPMGxCUXpsQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRE8wbEJSWGhETEVsQlFVa3NTVUZCU1N4TFFVRkxMRWRCUVVjN1VVRkJSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXp0SlFVVnlSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1VVRkROMElzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WFFVRlhMRU5CUVVNN1VVRkRia01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl3MFFrRkJORUlzUTBGQlF6dExRVU5zUkR0SlFVZEVMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTTdVVUZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPMGxCUnpsRkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHRSUVVOcVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzFGQlEyaEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZETVVNc2QwVkJRWGRGTEVOQlEzaEZMRVZCUVVVc1YwRkJWeXhEUVVGRE8wdEJRMlk3U1VGRlJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRE8xRkJRek5DTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTTdTVUZIYkVRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMUZCUXpGQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNa0pCUVRKQ0xFTkJRVU03VVVGRGJrUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU14UXl4elFrRkJjMElzUTBGRGRFSXNSVUZCUlN4WFFVRlhMRU5CUVVNN1MwRkRaanRKUVVsRUxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRSUVVNMVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzFGQlF6TkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYlVKQlFXMUNMRU5CUVVNN1MwRkRla003U1VGRlJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3VVVGRE5VSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0UlFVTXpReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8wdEJRM1JETzBsQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3VVVGRGRrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlF6VkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzWjBOQlFXZERMRU5CUVVNN1MwRkRkRVE3U1VGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3VVVGRE5VSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0UlFVTXpReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8wdEJRM1pETzBsQlEwUXNTVUZCU1N4UFFVRlBMRmxCUVZrc1EwRkJReXhQUVVGUExFdEJRVXNzVVVGQlVUdFJRVU16UXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzFOQlF5OUNPMUZCUTBvc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU53UWl4UFFVRlBMRVZCUVVVc01rSkJRVEpDTzFsQlEzQkRMR05CUVdNc1JVRkJSU3hwUWtGQmFVSTdXVUZEYWtNc1lVRkJZU3hGUVVOYUxEWkVRVUUyUkR0VFFVTTVSQ3hEUVVGRExFTkJRVU03UzBGRFNEdEJRVU5HTEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsIm9uIiwicGFnZSIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImRldGFpbHMiLCJzdGFydHNXaXRoIiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzdWJzdHJpbmciLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;