var __webpack_exports__={};const presence=new Presence({clientId:"759926761554313218"});function getTimeStamp(){return Math.floor(Date.now()/1e3)}let Server,Region,Nickname,Mass;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/V/Vanis.io/assets/0.png"},t=document.querySelector("#hud .stats div:nth-child(3)"),s=document.querySelector("#overlay");if("none"!==s.style.display){const e=document.querySelector("#tab-menu .tabs .tab.active"),s=document.querySelector("#tab-menu .server-list .active .server-name"),a=document.querySelector("#player-data #nickname");Region=e&&e.textContent.trim(),Server=s&&s.textContent.trim(),Nickname=a&&a.value,Mass=t&&t.textContent.split(":")[1].trim()}else Mass=t&&t.textContent.split(":")[1].trim();"none"!==s.style.display&&Mass.startsWith("0")?(e.details="Main menu",e.startTimestamp=getTimeStamp()):(e.details=`Playing on server: ${Region} | ${Server}`,e.state=`Player: ${Nickname} | Mass: ${Mass}`,e.startTimestamp=getTimeStamp()),presence.setActivity(e,!0)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZCxTQUFTQyxlQUNMLE9BQU9DLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsSUFDbkMsQ0FDQSxJQUFJQyxPQUFRQyxPQUFRQyxTQUFVQyxLQUM5QlgsU0FBU1ksR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLDhEQUNoQkMsRUFBY0MsU0FBU0MsY0FBYyxnQ0FBaUNDLEVBQVVGLFNBQVNDLGNBQWMsWUFDMUcsR0FBOEIsU0FBMUJDLEVBQVFDLE1BQU1DLFFBQW9CLENBQ2xDLE1BQU1DLEVBQWdCTCxTQUFTQyxjQUFjLCtCQUFnQ0ssRUFBZ0JOLFNBQVNDLGNBQWMsK0NBQWdETSxFQUFtQlAsU0FBU0MsY0FBYywwQkFDOU1ULE9BQVNhLEdBQWlCQSxFQUFjRyxZQUFZQyxPQUNwRGxCLE9BQVNlLEdBQWlCQSxFQUFjRSxZQUFZQyxPQUNwRGhCLFNBQVdjLEdBQW1CQSxFQUFnQkcsTUFDOUNoQixLQUFPSyxHQUFlQSxFQUFZUyxZQUFZRyxNQUFNLEtBQUssR0FBR0YsTUFDaEUsTUFFSWYsS0FBT0ssR0FBZUEsRUFBWVMsWUFBWUcsTUFBTSxLQUFLLEdBQUdGLE9BRWxDLFNBQTFCUCxFQUFRQyxNQUFNQyxTQUFzQlYsS0FBS2tCLFdBQVcsTUFDcERmLEVBQWFnQixRQUFVLFlBQ3ZCaEIsRUFBYWlCLGVBQWlCNUIsaUJBRzlCVyxFQUFhZ0IsUUFBVSxzQkFBc0JyQixZQUFZRCxTQUN6RE0sRUFBYWtCLE1BQVEsV0FBV3RCLG9CQUFvQkMsT0FDcERHLEVBQWFpQixlQUFpQjVCLGdCQUVsQ0gsU0FBU2lDLFlBQVluQixHQUFjLEVBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNzU5OTI2NzYxNTU0MzEzMjE4XCIsXG59KTtcbmZ1bmN0aW9uIGdldFRpbWVTdGFtcCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG59XG5sZXQgU2VydmVyLCBSZWdpb24sIE5pY2tuYW1lLCBNYXNzO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9WL1ZhbmlzLmlvL2Fzc2V0cy8wLnBuZ1wiLFxuICAgIH0sIG1hc3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNodWQgLnN0YXRzIGRpdjpudGgtY2hpbGQoMylcIiksIG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG4gICAgaWYgKG92ZXJsYXkuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgY29uc3QgUmVnaW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLW1lbnUgLnRhYnMgLnRhYi5hY3RpdmVcIiksIFNlcnZlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYi1tZW51IC5zZXJ2ZXItbGlzdCAuYWN0aXZlIC5zZXJ2ZXItbmFtZVwiKSwgTmlja25hbWVFbGVtZW50ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLWRhdGEgI25pY2tuYW1lXCIpKTtcbiAgICAgICAgUmVnaW9uID0gUmVnaW9uRWxlbWVudCAmJiBSZWdpb25FbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgU2VydmVyID0gU2VydmVyRWxlbWVudCAmJiBTZXJ2ZXJFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgTmlja25hbWUgPSBOaWNrbmFtZUVsZW1lbnQgJiYgTmlja25hbWVFbGVtZW50LnZhbHVlO1xuICAgICAgICBNYXNzID0gbWFzc0VsZW1lbnQgJiYgbWFzc0VsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoXCI6XCIpWzFdLnRyaW0oKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIE1hc3MgPSBtYXNzRWxlbWVudCAmJiBtYXNzRWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIjpcIilbMV0udHJpbSgpO1xuICAgIH1cbiAgICBpZiAob3ZlcmxheS5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIiAmJiBNYXNzLnN0YXJ0c1dpdGgoXCIwXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJNYWluIG1lbnVcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gZ2V0VGltZVN0YW1wKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBQbGF5aW5nIG9uIHNlcnZlcjogJHtSZWdpb259IHwgJHtTZXJ2ZXJ9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFBsYXllcjogJHtOaWNrbmFtZX0gfCBNYXNzOiAke01hc3N9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gZ2V0VGltZVN0YW1wKCk7XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSwgdHJ1ZSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNM1FpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNRMEZCUXp0QlFVZElMRk5CUVZNc1dVRkJXVHRKUVVOd1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNSRExFTkJRVU03UVVGSFJDeEpRVUZKTEUxQlFXTXNSVUZCUlN4TlFVRmpMRVZCUVVVc1VVRkJaMElzUlVGQlJTeEpRVUZaTEVOQlFVTTdRVUZGYmtVc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkZjRU1zVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJwRExHRkJRV0VzUlVGRFdpdzBSRUZCTkVRN1MwRkROMFFzUlVGRFJDeFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RlFVTndSU3hQUVVGUExFZEJRV2RDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03U1VGRk0wUXNTVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUzBGQlN5eE5RVUZOTEVWQlFVVTdVVUZGY2tNc1RVRkJUU3hoUVVGaExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eEZRVU14UlN4aFFVRmhMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrTXNOa05CUVRaRExFTkJRemRETEVWQlEwUXNaVUZCWlN4SFFVRnhRaXhEUVVOdVF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVOQlEyaEVMRU5CUVVNN1VVRkhTQ3hOUVVGTkxFZEJRVWNzWVVGQllTeEpRVUZKTEdGQlFXRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRE0wUXNUVUZCVFN4SFFVRkhMR0ZCUVdFc1NVRkJTU3hoUVVGaExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUXpORUxGRkJRVkVzUjBGQlJ5eGxRVUZsTEVsQlFVa3NaVUZCWlN4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVOd1JDeEpRVUZKTEVkQlFVY3NWMEZCVnl4SlFVRkpMRmRCUVZjc1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzB0QlEyNUZPMU5CUVUwN1VVRkZUaXhKUVVGSkxFZEJRVWNzVjBGQlZ5eEpRVUZKTEZkQlFWY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wdEJRMjVGTzBsQlJVUXNTVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUzBGQlN5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFJRVU0zUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRVmNzUTBGQlF6dFJRVU51UXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExGbEJRVmtzUlVGQlJTeERRVUZETzB0QlF6ZERPMU5CUVUwN1VVRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhOQ1FVRnpRaXhOUVVGTkxFMUJRVTBzVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZEYkVVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFhRVUZYTEZGQlFWRXNXVUZCV1N4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVNelJDeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRmxCUVZrc1JVRkJSU3hEUVVGRE8wdEJRemRETzBsQlJVUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETVVNc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJnZXRUaW1lU3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiU2VydmVyIiwiUmVnaW9uIiwiTmlja25hbWUiLCJNYXNzIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJtYXNzRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm92ZXJsYXkiLCJzdHlsZSIsImRpc3BsYXkiLCJSZWdpb25FbGVtZW50IiwiU2VydmVyRWxlbWVudCIsIk5pY2tuYW1lRWxlbWVudCIsInRleHRDb250ZW50IiwidHJpbSIsInZhbHVlIiwic3BsaXQiLCJzdGFydHNXaXRoIiwiZGV0YWlscyIsInN0YXJ0VGltZXN0YW1wIiwic3RhdGUiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;