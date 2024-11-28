var __webpack_exports__={};const presence=new Presence({clientId:"752464948965408768"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/I/Itch.io/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t,hostname:s}=document.location;if(s.includes("itch.io"))if("itch"!==s.split(".")[0])if("/"===t)e.details="Viewing Developer Profile",e.state=document.title.replace(" - itch.io","");else{const[s,a]=document.title.split(" by ");e.details=s,e.state=a,document.querySelector(".game_loaded")&&(e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText="Playing"),"devlog"===t.split("/")[2]&&(e.state=`${a}'s Devlog`)}else if(t.startsWith("/board")||t.startsWith("/community"))e.details="In Community Discussion";else if(t.startsWith("/jam")&&t.split("/")[2]&&document.querySelector(".jam_header_widget"))e.details=document.querySelector(".jam_title_header").textContent,e.state=`Jam ${document.querySelector(".jam_host_header").textContent}`;else switch(t){case"/games":e.details="Browsing Games";break;case"/devlogs":e.details="Browsing Devlogs";break;case"/jams":e.details="Browsing Jams";break;case"/dashboard":e.details="Dashboard";break;case"/my-feed":e.details="Browsing My Feed";break;case"/featured-games-feed":e.details="Browsing Featured Games Feed";break;case"/feed":e.details="Browsing Global Feed";break;default:e.details="Idling"}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsK0RBQ2ZDLGVBQWdCVCxvQkFDakIsU0FBRVUsRUFBUSxTQUFFQyxHQUFhQyxTQUFTQyxTQUNyQyxHQUFJRixFQUFTRyxTQUFTLFdBQ2xCLEdBQStCLFNBQTNCSCxFQUFTSSxNQUFNLEtBQUssR0FDcEIsR0FBaUIsTUFBYkwsRUFDQUgsRUFBYVMsUUFBVSw0QkFDdkJULEVBQWFVLE1BQVFMLFNBQVNNLE1BQU1DLFFBQVEsYUFBYyxRQUV6RCxDQUNELE1BQU9DLEVBQVVDLEdBQVdULFNBQVNNLE1BQU1ILE1BQU0sUUFDakRSLEVBQWFTLFFBQVVJLEVBQ3ZCYixFQUFhVSxNQUFRSSxFQUNqQlQsU0FBU1UsY0FBYyxrQkFDdkJmLEVBQWFnQixjQUFnQiwrQ0FDN0JoQixFQUFhaUIsZUFBaUIsV0FFSCxXQUEzQmQsRUFBU0ssTUFBTSxLQUFLLEtBQ3BCUixFQUFhVSxNQUFRLEdBQUdJLGFBQ2hDLE1BRUMsR0FBSVgsRUFBU2UsV0FBVyxXQUN6QmYsRUFBU2UsV0FBVyxjQUNwQmxCLEVBQWFTLFFBQVUsK0JBQ3RCLEdBQUlOLEVBQVNlLFdBQVcsU0FDekJmLEVBQVNLLE1BQU0sS0FBSyxJQUNwQkgsU0FBU1UsY0FBYyxzQkFDdkJmLEVBQWFTLFFBQVVKLFNBQVNVLGNBQWMscUJBQXFCSSxZQUNuRW5CLEVBQWFVLE1BQVEsT0FBT0wsU0FBU1UsY0FBYyxvQkFBb0JJLG1CQUd2RSxPQUFRaEIsR0FDSixJQUFLLFNBQ0RILEVBQWFTLFFBQVUsaUJBQ3ZCLE1BQ0osSUFBSyxXQUNEVCxFQUFhUyxRQUFVLG1CQUN2QixNQUNKLElBQUssUUFDRFQsRUFBYVMsUUFBVSxnQkFDdkIsTUFDSixJQUFLLGFBQ0RULEVBQWFTLFFBQVUsWUFDdkIsTUFDSixJQUFLLFdBQ0RULEVBQWFTLFFBQVUsbUJBQ3ZCLE1BQ0osSUFBSyx1QkFDRFQsRUFBYVMsUUFBVSwrQkFDdkIsTUFDSixJQUFLLFFBQ0RULEVBQWFTLFFBQVUsdUJBQ3ZCLE1BQ0osUUFDSVQsRUFBYVMsUUFBVSxTQUtuQ1QsRUFBYVMsUUFDYm5CLFNBQVM4QixZQUFZcEIsR0FFckJWLFNBQVM4QixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjc1MjQ2NDk0ODk2NTQwODc2OFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0kvSXRjaC5pby9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHsgcGF0aG5hbWUsIGhvc3RuYW1lIH0gPSBkb2N1bWVudC5sb2NhdGlvbjtcbiAgICBpZiAoaG9zdG5hbWUuaW5jbHVkZXMoXCJpdGNoLmlvXCIpKSB7XG4gICAgICAgIGlmIChob3N0bmFtZS5zcGxpdChcIi5cIilbMF0gIT09IFwiaXRjaFwiKSB7XG4gICAgICAgICAgICBpZiAocGF0aG5hbWUgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgRGV2ZWxvcGVyIFByb2ZpbGVcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC50aXRsZS5yZXBsYWNlKFwiIC0gaXRjaC5pb1wiLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtnYW1lTmFtZSwgZGV2TmFtZV0gPSBkb2N1bWVudC50aXRsZS5zcGxpdChcIiBieSBcIik7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBnYW1lTmFtZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkZXZOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVfbG9hZGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlBsYXlpbmdcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSA9PT0gXCJkZXZsb2dcIilcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZGV2TmFtZX0ncyBEZXZsb2dgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYm9hcmRcIikgfHxcbiAgICAgICAgICAgIHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvY29tbXVuaXR5XCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkluIENvbW11bml0eSBEaXNjdXNzaW9uXCI7XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvamFtXCIpICYmXG4gICAgICAgICAgICBwYXRobmFtZS5zcGxpdChcIi9cIilbMl0gJiZcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuamFtX2hlYWRlcl93aWRnZXRcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qYW1fdGl0bGVfaGVhZGVyXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEphbSAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuamFtX2hvc3RfaGVhZGVyXCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIi9nYW1lc1wiOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgR2FtZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIi9kZXZsb2dzXCI6XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBEZXZsb2dzXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvamFtc1wiOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgSmFtc1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiL2Rhc2hib2FyZFwiOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRGFzaGJvYXJkXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvbXktZmVlZFwiOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgTXkgRmVlZFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiL2ZlYXR1cmVkLWdhbWVzLWZlZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIEZlYXR1cmVkIEdhbWVzIEZlZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIi9mZWVkXCI6XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBHbG9iYWwgRmVlZFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSWRsaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeEZRVU5hTERoRVFVRTRSRHRSUVVNdlJDeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVWQlEwUXNSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVVTFReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1VVRkRha01zU1VGQlNTeFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEUxQlFVMHNSVUZCUlR0WlFVTjBReXhKUVVGSkxGRkJRVkVzUzBGQlN5eEhRVUZITEVWQlFVVTdaMEpCUTNKQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNa0pCUVRKQ0xFTkJRVU03WjBKQlEyNUVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJGQlF6bEVPMmxDUVVGTk8yZENRVU5PTEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03WjBKQlEzcEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETzJkQ1FVTm9ReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXp0blFrRkROMElzU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8yOUNRVU16UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3hwUkVGQll5eERRVUZETzI5Q1FVTjZReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEZOQlFWTXNRMEZCUXp0cFFrRkRlRU03WjBKQlEwUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRkZCUVZFN2IwSkJRM1JETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhQUVVGUExGZEJRVmNzUTBGQlF6dGhRVU0xUXp0VFFVTkVPMkZCUVUwc1NVRkRUaXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXp0WlFVTTNRaXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXp0WlFVVnFReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRE8yRkJRemRETEVsQlEwb3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRE0wSXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhGUVVNelF6dFpRVU5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUTI1Q0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNiVUpCUVcxQ0xFTkJRekZETEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUTJRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFBRVU51UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHdENRVUZyUWl4RFFVRnBRaXhEUVVGRExGZEJRemRFTEVWQlFVVXNRMEZCUXp0VFFVTklPMkZCUVUwN1dVRkRUaXhSUVVGUkxGRkJRVkVzUlVGQlJUdG5Ra0ZGYWtJc1MwRkJTeXhSUVVGUk8yOUNRVU5hTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdiMEpCUTNoRExFMUJRVTA3WjBKQlJWQXNTMEZCU3l4VlFVRlZPMjlDUVVOa0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03YjBKQlF6RkRMRTFCUVUwN1owSkJSVkFzUzBGQlN5eFBRVUZQTzI5Q1FVTllMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETzI5Q1FVTjJReXhOUVVGTk8yZENRVVZRTEV0QlFVc3NXVUZCV1R0dlFrRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WFFVRlhMRU5CUVVNN2IwSkJRMjVETEUxQlFVMDdaMEpCUlZBc1MwRkJTeXhWUVVGVk8yOUNRVU5rTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdiMEpCUXpGRExFMUJRVTA3WjBKQlExQXNTMEZCU3l4elFrRkJjMEk3YjBKQlF6RkNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzT0VKQlFUaENMRU5CUVVNN2IwSkJRM1JFTEUxQlFVMDdaMEpCUTFBc1MwRkJTeXhQUVVGUE8yOUNRVU5ZTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdiMEpCUXpsRExFMUJRVTA3WjBKQlJWQTdiMEpCUTBNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTTdiMEpCUTJoRExFMUJRVTA3WVVGRFVEdFRRVU5FTzB0QlEwUTdTVUZGUkN4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenM3VVVGRGVFUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsImhvc3RuYW1lIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImluY2x1ZGVzIiwic3BsaXQiLCJkZXRhaWxzIiwic3RhdGUiLCJ0aXRsZSIsInJlcGxhY2UiLCJnYW1lTmFtZSIsImRldk5hbWUiLCJxdWVyeVNlbGVjdG9yIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0Iiwic3RhcnRzV2l0aCIsInRleHRDb250ZW50Iiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;