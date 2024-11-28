var __webpack_exports__={};const presence=new Presence({clientId:"1244143703660953651"}),browsingTimestamp=Math.floor(Date.now()/1e3);let detailMsg="Roleplaying on Wolfery.com",stateMsg="",appLocation=null;presence.on("UpdateData",(async()=>{const e=await presence.getSetting("characterPrivacy");switch(appLocation=document.querySelector(".panel--titletxt").textContent.toLowerCase(),appLocation){case"awake":case"character info":{let t=document.querySelector(".namesection--title").textContent;e?(stateMsg="",t=""):stateMsg=`Awake As: ${t}`;break}case"character select":stateMsg="✏️ Choosing Character",detailMsg=null;break;case"character settings":stateMsg="🔧 Tweaking Character Settings",detailMsg=null;break;default:stateMsg="Roleplaying",detailMsg=null}presence.setActivity({details:detailMsg,state:stateMsg,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/Wolfery/assets/logo.png",startTimestamp:browsingTimestamp})}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUFFQyxTQUFVLHdCQUEwQkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hILElBQUlDLFVBQVksNkJBQThCQyxTQUFXLEdBQUlDLFlBQWMsS0FDM0VWLFNBQVNXLEdBQUcsY0FBY0MsVUFDdEIsTUFBTUMsUUFBeUJiLFNBQVNjLFdBQVcsb0JBS25ELE9BSkFKLFlBQWNLLFNBQ1RDLGNBQWMsb0JBQ2RDLFlBQVlDLGNBRVRSLGFBQ0osSUFBSyxRQUNMLElBQUssaUJBQWtCLENBQ25CLElBQUlTLEVBSm1CSixTQUFTQyxjQUFjLHVCQUF1QkMsWUFLakVKLEdBQ0FKLFNBQVcsR0FDWFUsRUFBZ0IsSUFHaEJWLFNBQVcsYUFBYVUsSUFDNUIsS0FDSixDQUNBLElBQUssbUJBQ0RWLFNBQVcsd0JBQ1hELFVBQVksS0FDWixNQUVKLElBQUsscUJBQ0RDLFNBQVcsaUNBQ1hELFVBQVksS0FDWixNQUVKLFFBQ0lDLFNBQVcsY0FDWEQsVUFBWSxLQUdwQlIsU0FBU29CLFlBQVksQ0FDakJDLFFBQVNiLFVBQ1RjLE1BQU9iLFNBQ1BjLGNBQWUsK0RBQ2ZDLGVBQWdCckIsbUJBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2UoeyBjbGllbnRJZDogXCIxMjQ0MTQzNzAzNjYwOTUzNjUxXCIgfSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5sZXQgZGV0YWlsTXNnID0gXCJSb2xlcGxheWluZyBvbiBXb2xmZXJ5LmNvbVwiLCBzdGF0ZU1zZyA9IFwiXCIsIGFwcExvY2F0aW9uID0gbnVsbDtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2hhcmFjdGVyUHJpdmFjeSA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJjaGFyYWN0ZXJQcml2YWN5XCIpO1xuICAgIGFwcExvY2F0aW9uID0gZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucGFuZWwtLXRpdGxldHh0XCIpXG4gICAgICAgIC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGdldENoYXJhY3Rlck5hbWUgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWVzZWN0aW9uLS10aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICBzd2l0Y2ggKGFwcExvY2F0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJhd2FrZVwiOlxuICAgICAgICBjYXNlIFwiY2hhcmFjdGVyIGluZm9cIjoge1xuICAgICAgICAgICAgbGV0IGNoYXJhY3Rlck5hbWUgPSBnZXRDaGFyYWN0ZXJOYW1lKCk7XG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyUHJpdmFjeSkge1xuICAgICAgICAgICAgICAgIHN0YXRlTXNnID0gXCJcIjtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZU1zZyA9IGBBd2FrZSBBczogJHtjaGFyYWN0ZXJOYW1lfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiY2hhcmFjdGVyIHNlbGVjdFwiOiB7XG4gICAgICAgICAgICBzdGF0ZU1zZyA9IFwi4pyP77iPIENob29zaW5nIENoYXJhY3RlclwiO1xuICAgICAgICAgICAgZGV0YWlsTXNnID0gbnVsbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJjaGFyYWN0ZXIgc2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgc3RhdGVNc2cgPSBcIvCflKcgVHdlYWtpbmcgQ2hhcmFjdGVyIFNldHRpbmdzXCI7XG4gICAgICAgICAgICBkZXRhaWxNc2cgPSBudWxsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgc3RhdGVNc2cgPSBcIlJvbGVwbGF5aW5nXCI7XG4gICAgICAgICAgICBkZXRhaWxNc2cgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHtcbiAgICAgICAgZGV0YWlsczogZGV0YWlsTXNnLFxuICAgICAgICBzdGF0ZTogc3RhdGVNc2csXG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9XL1dvbGZlcnkvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZGQlFWRXNSVUZCUlN4eFFrRkJjVUlzUlVGQlJTeERRVUZETEVWQlEycEZMR2xDUVVGcFFpeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCVVc1RUxFbEJRVWtzVTBGQlV5eEhRVUZITERSQ1FVRTBRaXhGUVVNelF5eFJRVUZSTEVkQlFVY3NSVUZCUlN4RlFVTmlMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRmNFSXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRMnBFTEd0Q1FVRnJRaXhEUVVOc1FpeERRVUZETzBsQlJVWXNWMEZCVnl4SFFVRkhMRkZCUVZFN1UwRkRjRUlzWVVGQllTeERRVUZETEd0Q1FVRnJRaXhEUVVGRE8xTkJRMnBETEZkQlFWY3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRKUVVVMVFpeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVU0zUWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJSVE5FTEZGQlFWRXNWMEZCVnl4RlFVRkZPMUZCUTNCQ0xFdEJRVXNzVDBGQlR5eERRVUZETzFGQlEySXNTMEZCU3l4blFrRkJaMElzUTBGQlF5eERRVUZETzFsQlEzUkNMRWxCUVVrc1lVRkJZU3hIUVVGSExHZENRVUZuUWl4RlFVRkZMRU5CUVVNN1dVRkZka01zU1VGQlNTeG5Ra0ZCWjBJc1JVRkJSVHRuUWtGRGNrSXNVVUZCVVN4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRFpDeGhRVUZoTEVkQlFVY3NSVUZCUlN4RFFVRkRPMkZCUTI1Q096dG5Ra0ZCVFN4UlFVRlJMRWRCUVVjc1lVRkJZU3hoUVVGaExFVkJRVVVzUTBGQlF6dFpRVU12UXl4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1dVRkRlRUlzVVVGQlVTeEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8xbEJRMjVETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRha0lzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4dlFrRkJiMElzUTBGQlF5eERRVUZETzFsQlF6RkNMRkZCUVZFc1IwRkJSeXhuUTBGQlowTXNRMEZCUXp0WlFVTTFReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEycENMRTFCUVUwN1UwRkRUanRSUVVORUxFOUJRVThzUTBGQlF5eERRVUZETzFsQlExSXNVVUZCVVN4SFFVRkhMR0ZCUVdFc1EwRkJRenRaUVVONlFpeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRPMU5CUTJwQ08wdEJRMFE3U1VGRlJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTNCQ0xFOUJRVThzUlVGQlJTeFRRVUZUTzFGQlEyeENMRXRCUVVzc1JVRkJSU3hSUVVGUk8xRkJRMllzWVVGQllTeG5SVUZCWVR0UlFVTXhRaXhqUVVGakxFVkJRVVVzYVVKQlFXbENPMHRCUTJwRExFTkJRVU1zUTBGQlF6dEJRVU5LTEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImRldGFpbE1zZyIsInN0YXRlTXNnIiwiYXBwTG9jYXRpb24iLCJvbiIsImFzeW5jIiwiY2hhcmFjdGVyUHJpdmFjeSIsImdldFNldHRpbmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInRvTG93ZXJDYXNlIiwiY2hhcmFjdGVyTmFtZSIsInNldEFjdGl2aXR5IiwiZGV0YWlscyIsInN0YXRlIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIl0sInNvdXJjZVJvb3QiOiIifQ==
undefined;