var __webpack_exports__={};const presence=new Presence({clientId:"904084297831571518"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/atomicradio/assets/logo.png",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png",startTimestamp:browsingTimestamp},t=document.querySelector("div.player");t?(e.largeImageKey=t.querySelector("#artwork").textContent,e.smallImageKey="play-button"===t.querySelector('[id*="-button"]').id?"https://cdn.rcd.gg/PreMiD/resources/play.png":"https://cdn.rcd.gg/PreMiD/resources/pause.png",e.details=t.querySelector("div.track-title").textContent,e.state=t.querySelector("div.track-artist").textContent,e.endTimestamp=new Date(t.querySelector("#endingAt").textContent).getTime(),e.smallImageText=t.querySelector("div.track-space").textContent,e.buttons=[{label:"Listen",url:`https://atomic.radio/${t.querySelector("#spaceId").textContent}`}]):e.details="Browsing...",e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWMsS0FDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSxtRUFDZkMsY0FBZSxpREFDZkMsZUFBZ0JULG1CQUNqQlUsRUFBU0MsU0FBU0MsY0FBYyxjQUMvQkYsR0FDQUosRUFBYUMsY0FBZ0JHLEVBQU9FLGNBQWMsWUFBWUMsWUFDOURQLEVBQWFFLGNBRUwsZ0JBREpFLEVBQU9FLGNBQWMsbUJBQW1CRSxHQUVsQywrQ0FDQSxnREFDVlIsRUFBYVMsUUFDVEwsRUFBT0UsY0FBYyxtQkFBbUJDLFlBQzVDUCxFQUFhVSxNQUNUTixFQUFPRSxjQUFjLG9CQUFvQkMsWUFDN0NQLEVBQWFXLGFBQWUsSUFBSWQsS0FBS08sRUFBT0UsY0FBYyxhQUFhQyxhQUFhSyxVQUNwRlosRUFBYWEsZUFDVFQsRUFBT0UsY0FBYyxtQkFBbUJDLFlBQzVDUCxFQUFhYyxRQUFVLENBQ25CLENBQ0lDLE1BQU8sU0FDUEMsSUFBSyx3QkFBd0JaLEVBQU9FLGNBQWMsWUFBWUMsaUJBS3RFUCxFQUFhUyxRQUFVLGNBQ3ZCVCxFQUFhUyxRQUNibEIsU0FBUzBCLFlBQVlqQixHQUVyQlQsU0FBUzBCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTA0MDg0Mjk3ODMxNTcxNTE4XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9hdG9taWNyYWRpby9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCBwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnBsYXllclwiKTtcbiAgICBpZiAocGxheWVyKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gcGxheWVyLnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0d29ya1wiKS50ZXh0Q29udGVudDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPVxuICAgICAgICAgICAgcGxheWVyLnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCItYnV0dG9uXCJdJykuaWQgPT09XG4gICAgICAgICAgICAgICAgXCJwbGF5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCJcbiAgICAgICAgICAgICAgICA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID1cbiAgICAgICAgICAgIHBsYXllci5xdWVyeVNlbGVjdG9yKFwiZGl2LnRyYWNrLXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgcGxheWVyLnF1ZXJ5U2VsZWN0b3IoXCJkaXYudHJhY2stYXJ0aXN0XCIpLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wID0gbmV3IERhdGUocGxheWVyLnF1ZXJ5U2VsZWN0b3IoXCIjZW5kaW5nQXRcIikudGV4dENvbnRlbnQpLmdldFRpbWUoKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID1cbiAgICAgICAgICAgIHBsYXllci5xdWVyeVNlbGVjdG9yKFwiZGl2LnRyYWNrLXNwYWNlXCIpLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJMaXN0ZW5cIixcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL2F0b21pYy5yYWRpby8ke3BsYXllci5xdWVyeVNlbGVjdG9yKFwiI3NwYWNlSWRcIikudGV4dENvbnRlbnR9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nLi4uXCI7XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVU3U1VGRE9VSXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnBETEdGQlFXRXNSVUZEV2l4clJVRkJhMFU3VVVGRGJrVXNZVUZCWVN4clJFRkJaVHRSUVVNMVFpeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVWQlEwUXNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRV2xDTEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUlM5RUxFbEJRVWtzVFVGQlRTeEZRVUZGTzFGQlExZ3NXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVNeFJTeFpRVUZaTEVOQlFVTXNZVUZCWVR0WlFVTjZRaXhOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZ2UWl4cFFrRkJhVUlzUTBGQlF5eERRVUZETEVWQlFVVTdaMEpCUXpkRUxHRkJRV0U3WjBKQlExb3NRMEZCUXp0blFrRkRSQ3hEUVVGRExHZEVRVUZoTEVOQlFVTTdVVUZEYWtJc1dVRkJXU3hEUVVGRExFOUJRVTg3V1VGRGJrSXNUVUZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJiMElzYVVKQlFXbENMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVFVXNXVUZCV1N4RFFVRkRMRXRCUVVzN1dVRkRha0lzVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCYVVJc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRkRVVzV1VGQldTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkRia01zVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRemRETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkRXaXhaUVVGWkxFTkJRVU1zWTBGQll6dFpRVU14UWl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM0pFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1dVRkRkRUk3WjBKQlEwTXNTMEZCU3l4RlFVRkZMRkZCUVZFN1owSkJRMllzUjBGQlJ5eEZRVUZGTEhkQ1FVTktMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNWMEZEYkVNc1JVRkJSVHRoUVVOR08xTkJRMFFzUTBGQlF6dExRVU5HT3p0UlFVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzBsQlJUVkRMRWxCUVVrc1dVRkJXU3hEUVVGRExFOUJRVTg3VVVGQlJTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE96dFJRVU40UkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE4wSXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic21hbGxJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGxheWVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJpZCIsImRldGFpbHMiLCJzdGF0ZSIsImVuZFRpbWVzdGFtcCIsImdldFRpbWUiLCJzbWFsbEltYWdlVGV4dCIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;