var __webpack_exports__={};const presence=new Presence({clientId:"1234183805380857907"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/WriterDuet/assets/logo.png",startTimestamp:browsingTimestamp},[,t,a]=document.location.pathname.split("/");switch(t.split("#")[0]){case"script":e.details=document.title,e.state=document.querySelector(".Mui-selected").querySelector("[data-tip]").textContent,presence.setActivity(e);break;case"":e.details="Browsing Home";break;case"category":case"article":e.details="Browsing Help",e.state=document.querySelector("#categoryHead > h1")?.textContent||document.querySelector(".title").textContent;break;case"pricing":e.details="Reviewing Payement Plans";break;case"blog":a?(e.details="Reading Blog Article",e.state=document.querySelector(".jupiterx-post-title").textContent):e.details="Reading the Blog";break;default:e.details="Browsing the Site"}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsa0VBQ2ZDLGVBQWdCVCxvQkFDaEIsQ0FBRVUsRUFBTUMsR0FBV0MsU0FBU0MsU0FBU0MsU0FBU0MsTUFBTSxLQUN4RCxPQUFRTCxFQUFLSyxNQUFNLEtBQUssSUFDcEIsSUFBSyxTQUVHUixFQUFhUyxRQUFVSixTQUFTSyxNQUNoQ1YsRUFBYVcsTUFBUU4sU0FDaEJPLGNBQWMsaUJBQ2RBLGNBQWMsY0FBY0MsWUFDakN2QixTQUFTd0IsWUFBWWQsR0FFekIsTUFDSixJQUFLLEdBRUdBLEVBQWFTLFFBQVUsZ0JBRTNCLE1BQ0osSUFBSyxXQUNMLElBQUssVUFFSVQsRUFBYVMsUUFBVSxnQkFDbkJULEVBQWFXLE1BQ1ZOLFNBQVNPLGNBQWMsdUJBQXVCQyxhQUMxQ1IsU0FBU08sY0FBYyxVQUFVQyxZQUVqRCxNQUNKLElBQUssVUFDRGIsRUFBYVMsUUFBVSwyQkFDdkIsTUFDSixJQUFLLE9BRU9MLEdBQ0FKLEVBQWFTLFFBQVUsdUJBQ3ZCVCxFQUFhVyxNQUFRTixTQUFTTyxjQUFjLHdCQUF3QkMsYUFHcEViLEVBQWFTLFFBQVUsbUJBRS9CLE1BQ0osUUFDSVQsRUFBYVMsUUFBVSxvQkFFL0JuQixTQUFTd0IsWUFBWWQsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCIxMjM0MTgzODA1MzgwODU3OTA3XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVy9Xcml0ZXJEdWV0L2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgWywgcGFnZSwgc3VicGFnZV0gPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XG4gICAgc3dpdGNoIChwYWdlLnNwbGl0KFwiI1wiKVswXSkge1xuICAgICAgICBjYXNlIFwic2NyaXB0XCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC50aXRsZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5NdWktc2VsZWN0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aXBdXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBIb21lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNhdGVnb3J5XCI6XG4gICAgICAgIGNhc2UgXCJhcnRpY2xlXCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgKHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBIZWxwXCIpLFxuICAgICAgICAgICAgICAgICAgICAocHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2F0ZWdvcnlIZWFkID4gaDFcIik/LnRleHRDb250ZW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInByaWNpbmdcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZXZpZXdpbmcgUGF5ZW1lbnQgUGxhbnNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYmxvZ1wiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChzdWJwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIEJsb2cgQXJ0aWNsZVwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmp1cGl0ZXJ4LXBvc3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIEJsb2dcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRoZSBTaXRlXCI7XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNjVUpCUVhGQ08wTkJReTlDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFXVnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeHRSVUZCWVR0UlFVTXhRaXhqUVVGakxFVkJRVVVzYVVKQlFXbENPMHRCUTJwRExFVkJRMFFzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRk0wUXNVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUXpOQ08xbEJRME03WjBKQlEwTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETzJkQ1FVTjBReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRTdjVUpCUXpOQ0xHRkJRV0VzUTBGQlF5eGxRVUZsTEVOQlFVTTdjVUpCUXpsQ0xHRkJRV0VzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1owSkJRekZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03WVVGRGJrTTdXVUZEUkN4TlFVRk5PMUZCUlZBN1dVRkRRenRuUWtGRFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR1ZCUVdVc1EwRkJRenRoUVVOMlF6dFpRVU5FTEUxQlFVMDdVVUZGVUN4blFrRkJaMEk3VVVGRGFFSTdXVUZEUXp0blFrRkRReXhEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaVUZCWlN4RFFVRkRPMjlDUVVOMlF5eERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxPM2RDUVVOc1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVWQlFVVXNWMEZCVnpzMFFrRkRla1FzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dGhRVU5vUkR0WlFVTkVMRTFCUVUwN1VVRkZVRHRaUVVORExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU03V1VGRGJFUXNUVUZCVFR0UlFVVlFPMWxCUTBNN1owSkJRME1zU1VGQlNTeFBRVUZQTEVWQlFVVTdiMEpCUTFvc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHpRa0ZCYzBJc1EwRkJRenR2UWtGRE9VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU14UXl4elFrRkJjMElzUTBGRGRFSXNRMEZCUXl4WFFVRlhMRU5CUVVNN2FVSkJRMlE3TzI5Q1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1lVRkRha1E3V1VGRFJDeE5RVUZOTzFGQlJWQTdXVUZEUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPMHRCUXpWRE8wbEJSVVFzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGFnZSIsInN1YnBhZ2UiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImRldGFpbHMiLCJ0aXRsZSIsInN0YXRlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;