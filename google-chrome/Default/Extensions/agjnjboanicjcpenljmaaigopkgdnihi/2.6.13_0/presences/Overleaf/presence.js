var __webpack_exports__={};const presence=new Presence({clientId:"784954155747377162"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/O/Overleaf/assets/logo.png",smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/O/Overleaf/assets/0.png",smallImageText:"Overleaf",startTimestamp:browsingTimestamp},t=window.location.pathname.toLowerCase();if("/project"===t||"/project/"===t){e.details="Browsing Projects";const t=document.querySelectorAll(".project-list-sidebar")[0].querySelectorAll(".active"),l=t[0].querySelectorAll(".name.ng-binding");0!==l.length?e.state=l[0].textContent:e.state=t[0].querySelectorAll("a")[0].textContent}else t.includes("/project")?(e.details=document.title.replace("- Online LaTeX Editor Overleaf",""),e.state=document.querySelectorAll(".file-tree-list")[0].querySelectorAll(".selected")[0].querySelectorAll("span")[0].textContent):t.includes("/learn")?(e.details="Browsing Documentation",e.state="/learn"===t||"/learn/"===t?"Main Page":document.title.replace("- Overleaf, Online LaTeX Editor","")):(e.details="Browsing:",e.state=document.title.replace("- Overleaf, Online LaTeX Editor",""));e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsZ0VBQ2ZDLGNBQWUsNkRBQ2ZDLGVBQWdCLFdBQ2hCQyxlQUFnQlgsbUJBQ2pCWSxFQUFNQyxPQUFPQyxTQUFTQyxTQUFTQyxjQUNsQyxHQUFZLGFBQVJKLEdBQThCLGNBQVJBLEVBQXFCLENBQzNDTCxFQUFhVSxRQUFVLG9CQUN2QixNQUFNQyxFQUFRQyxTQUNUQyxpQkFBaUIseUJBQXlCLEdBQzFDQSxpQkFBaUIsV0FBWUMsRUFBY0gsRUFBTSxHQUFHRSxpQkFBaUIsb0JBQy9DLElBQXZCQyxFQUFZQyxPQUNaZixFQUFhZ0IsTUFBUUYsRUFBWSxHQUFHRyxZQUVwQ2pCLEVBQWFnQixNQUFRTCxFQUFNLEdBQUdFLGlCQUFpQixLQUFLLEdBQUdJLFdBQy9ELE1BQ1NaLEVBQUlhLFNBQVMsYUFDbEJsQixFQUFhVSxRQUFVRSxTQUFTTyxNQUFNQyxRQUFRLGlDQUFrQyxJQUNoRnBCLEVBQWFnQixNQUFRSixTQUNoQkMsaUJBQWlCLG1CQUFtQixHQUNwQ0EsaUJBQWlCLGFBQWEsR0FDOUJBLGlCQUFpQixRQUFRLEdBQUdJLGFBRTVCWixFQUFJYSxTQUFTLFdBQ2xCbEIsRUFBYVUsUUFBVSx5QkFFbkJWLEVBQWFnQixNQURMLFdBQVJYLEdBQTRCLFlBQVJBLEVBQ0MsWUFFQU8sU0FBU08sTUFBTUMsUUFBUSxrQ0FBbUMsTUFJbkZwQixFQUFhVSxRQUFVLFlBQ3ZCVixFQUFhZ0IsTUFBUUosU0FBU08sTUFBTUMsUUFBUSxrQ0FBbUMsS0FFL0VwQixFQUFhVSxRQUNicEIsU0FBUytCLFlBQVlyQixHQUVyQlYsU0FBUytCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNzg0OTU0MTU1NzQ3Mzc3MTYyXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTy9PdmVybGVhZi9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL08vT3ZlcmxlYWYvYXNzZXRzLzAucG5nXCIsXG4gICAgICAgIHNtYWxsSW1hZ2VUZXh0OiBcIk92ZXJsZWFmXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCBwdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAocHRoID09PSBcIi9wcm9qZWN0XCIgfHwgcHRoID09PSBcIi9wcm9qZWN0L1wiKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBQcm9qZWN0c1wiO1xuICAgICAgICBjb25zdCBhY3RpZiA9IGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3Qtc2lkZWJhclwiKVswXVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpLCBtYXliZWN1c3RvbSA9IGFjdGlmWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmFtZS5uZy1iaW5kaW5nXCIpO1xuICAgICAgICBpZiAobWF5YmVjdXN0b20ubGVuZ3RoICE9PSAwKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gbWF5YmVjdXN0b21bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGFjdGlmWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpWzBdLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChwdGguaW5jbHVkZXMoXCIvcHJvamVjdFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGRvY3VtZW50LnRpdGxlLnJlcGxhY2UoXCItIE9ubGluZSBMYVRlWCBFZGl0b3IgT3ZlcmxlYWZcIiwgXCJcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5maWxlLXRyZWUtbGlzdFwiKVswXVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIilbMF1cbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVswXS50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgZWxzZSBpZiAocHRoLmluY2x1ZGVzKFwiL2xlYXJuXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBEb2N1bWVudGF0aW9uXCI7XG4gICAgICAgIGlmIChwdGggPT09IFwiL2xlYXJuXCIgfHwgcHRoID09PSBcIi9sZWFybi9cIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiTWFpbiBQYWdlXCI7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQudGl0bGUucmVwbGFjZShcIi0gT3ZlcmxlYWYsIE9ubGluZSBMYVRlWCBFZGl0b3JcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZzpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQudGl0bGUucmVwbGFjZShcIi0gT3ZlcmxlYWYsIE9ubGluZSBMYVRlWCBFZGl0b3JcIiwgXCJcIik7XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeEZRVU5hTEN0RVFVRXJSRHRSUVVOb1JTeGhRVUZoTEVWQlExb3NORVJCUVRSRU8xRkJRemRFTEdOQlFXTXNSVUZCUlN4VlFVRlZPMUZCUXpGQ0xHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUlVGRFJDeEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdTVUZIT1VNc1NVRkJTU3hIUVVGSExFdEJRVXNzVlVGQlZTeEpRVUZKTEVkQlFVY3NTMEZCU3l4WFFVRlhMRVZCUVVVN1VVRkRPVU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dFFrRkJiVUlzUTBGQlF6dFJRVU16UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhSUVVGUk8yRkJRMjVDTEdkQ1FVRm5RaXhEUVVGRExIVkNRVUYxUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRelZETEdkQ1FVRm5RaXhEUVVGRExGTkJRVk1zUTBGQlF5eEZRVU0zUWl4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1VVRkROMFFzU1VGQlNTeFhRVUZYTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNN1dVRkRNMElzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZET3p0WlFVVTFReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdTMEZEZUVVN1UwRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1VVRkZjRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGRE5VTXNaME5CUVdkRExFVkJRMmhETEVWQlFVVXNRMEZEUml4RFFVRkRPMUZCUTBZc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTzJGQlF6TkNMR2RDUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzUkRMR2RDUVVGblFpeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOb1F5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1MwRkRNVU03VTBGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3VVVGRmJFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0UlFVTm9SQ3hKUVVGSkxFZEJRVWNzUzBGQlN5eFJRVUZSTEVsQlFVa3NSMEZCUnl4TFFVRkxMRk5CUVZNN1dVRkJSU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZkQlFWY3NRMEZCUXp0aFFVTjJSVHRaUVVOS0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRekZETEdsRFFVRnBReXhGUVVOcVF5eEZRVUZGTEVOQlEwWXNRMEZCUXp0VFFVTkdPMHRCUTBRN1UwRkJUVHRSUVVWT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUTI1RExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRekZETEdsRFFVRnBReXhGUVVOcVF5eEZRVUZGTEVOQlEwWXNRMEZCUXp0TFFVTkdPMGxCUlVRc1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR6dFJRVUZGTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03TzFGQlEzaEVMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEJRVU0zUWl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0Iiwic3RhcnRUaW1lc3RhbXAiLCJwdGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidG9Mb3dlckNhc2UiLCJkZXRhaWxzIiwiYWN0aWYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXliZWN1c3RvbSIsImxlbmd0aCIsInN0YXRlIiwidGV4dENvbnRlbnQiLCJpbmNsdWRlcyIsInRpdGxlIiwicmVwbGFjZSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;