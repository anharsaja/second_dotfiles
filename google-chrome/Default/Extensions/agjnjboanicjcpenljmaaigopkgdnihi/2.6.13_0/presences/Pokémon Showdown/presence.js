var __webpack_exports__={};const presence=new Presence({clientId:"808762003476709406"});let elapsed=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Pok%C3%A9mon%20Showdown/assets/logo.png"},t=document.location.pathname;"/"===t?(e.details="Viewing Homepage",elapsed=null):t.startsWith("/teambuilder")?(e.details="Building a Team",elapsed=null):t.startsWith("/ladder")?(e.details="Viewing a Ladder",elapsed=null):t.includes("battle")?(e.details=document.querySelector("a.roomtab i.text").textContent,e.state=document.querySelector("a.roomtab.button.cur span").textContent,e.buttons=[{label:"Spectate",url:document.baseURI}],null===elapsed&&(elapsed=Math.floor(Date.now()/1e3)),e.startTimestamp=elapsed):(e.details="Somewhere on-site",elapsed=null),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZCxJQUFJQyxRQUFVQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ3RDUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsZ0ZBQ2hCQyxFQUFPQyxTQUFTQyxTQUFTQyxTQUNmLE1BQVRILEdBQ0FGLEVBQWFNLFFBQVUsbUJBQ3ZCYixRQUFVLE1BRUxTLEVBQUtLLFdBQVcsaUJBQ3JCUCxFQUFhTSxRQUFVLGtCQUN2QmIsUUFBVSxNQUVMUyxFQUFLSyxXQUFXLFlBQ3JCUCxFQUFhTSxRQUFVLG1CQUN2QmIsUUFBVSxNQUVMUyxFQUFLTSxTQUFTLFdBQ25CUixFQUFhTSxRQUNUSCxTQUFTTSxjQUFjLG9CQUFvQkMsWUFDL0NWLEVBQWFXLE1BQVFSLFNBQVNNLGNBQWMsNkJBQTZCQyxZQUN6RVYsRUFBYVksUUFBVSxDQUNuQixDQUNJQyxNQUFPLFdBQ1BDLElBQUtYLFNBQVNZLFVBR04sT0FBWnRCLFVBQ0FBLFFBQVVDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsTUFDdENHLEVBQWFnQixlQUFpQnZCLFVBRzlCTyxFQUFhTSxRQUFVLG9CQUN2QmIsUUFBVSxNQUVkSCxTQUFTMkIsWUFBWWpCLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODA4NzYyMDAzNDc2NzA5NDA2XCIsXG59KTtcbmxldCBlbGFwc2VkID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1AvUG9rJUMzJUE5bW9uJTIwU2hvd2Rvd24vYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfSwgcGF0aCA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmIChwYXRoID09PSBcIi9cIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBIb21lcGFnZVwiO1xuICAgICAgICBlbGFwc2VkID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aC5zdGFydHNXaXRoKFwiL3RlYW1idWlsZGVyXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCdWlsZGluZyBhIFRlYW1cIjtcbiAgICAgICAgZWxhcHNlZCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGguc3RhcnRzV2l0aChcIi9sYWRkZXJcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBMYWRkZXJcIjtcbiAgICAgICAgZWxhcHNlZCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGguaW5jbHVkZXMoXCJiYXR0bGVcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEucm9vbXRhYiBpLnRleHRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnJvb210YWIuYnV0dG9uLmN1ciBzcGFuXCIpLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTcGVjdGF0ZVwiLFxuICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQuYmFzZVVSSSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIGlmIChlbGFwc2VkID09PSBudWxsKVxuICAgICAgICAgICAgZWxhcHNlZCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBlbGFwc2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNvbWV3aGVyZSBvbi1zaXRlXCI7XG4gICAgICAgIGVsYXBzZWQgPSBudWxsO1xuICAgIH1cbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUTBGQlF6dEJRVVZJTEVsQlFVa3NUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJSVFZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5xUXl4aFFVRmhMRVZCUTFvc09FVkJRVGhGTzB0QlF5OUZMRVZCUTBRc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTI1RExFbEJRVWtzU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlR0UlFVTnFRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8xRkJRekZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1MwRkRaanRUUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4alFVRmpMRU5CUVVNc1JVRkJSVHRSUVVNelF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFGQlEzcERMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03UzBGRFpqdFRRVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdFJRVU4wUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMUZCUXpGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTMEZEWmp0VFFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTnVReXhaUVVGWkxFTkJRVU1zVDBGQlR6dFpRVU51UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM2hFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE1VTXNNa0pCUVRKQ0xFTkJRek5DTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTJRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dFpRVU4wUWp0blFrRkRReXhMUVVGTExFVkJRVVVzVlVGQlZUdG5Ra0ZEYWtJc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eFBRVUZQTzJGQlEzSkNPMU5CUTBRc1EwRkJRenRSUVVOR0xFbEJRVWtzVDBGQlR5eExRVUZMTEVsQlFVazdXVUZCUlN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRk9VUXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhQUVVGUExFTkJRVU03UzBGRGRFTTdVMEZCVFR0UlFVTk9MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYlVKQlFXMUNMRU5CUVVNN1VVRkRNME1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0TFFVTm1PMGxCUTBRc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0QlFVTndReXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiZWxhcHNlZCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInBhdGgiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJkZXRhaWxzIiwic3RhcnRzV2l0aCIsImluY2x1ZGVzIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic3RhdGUiLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJiYXNlVVJJIiwic3RhcnRUaW1lc3RhbXAiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;