var __webpack_exports__={};const presence=new Presence({clientId:"957670687278002206"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/O/Objection.lol/assets/logo.jpg",startTimestamp:browsingTimestamp},{pathname:t,href:a}=document.location;if("/"===t){const t=document.querySelector("textarea").value;""!==t?(e.details="Creating a Simple Objection",e.smallImageKey=document.querySelector(".selected").src,t.length>127?e.smallImageText=`${t.substring(0,124)}...`:e.smallImageText=t):e.details="Viewing the homepage"}else if("/maker"===t)e.details="Creating an Objection";else if(t.startsWith("/objection/"))e.details="Viewing an Objection",e.buttons=[{label:"View Objection",url:a}];else if(t.startsWith("/case/"))e.details="Viewing a Case","Play Case"!==document.title&&(e.state=document.title),e.buttons=[{label:"View Case",url:a}];else if(t.startsWith("/courtroom/")){const[t,o]=Array.from(document.querySelectorAll("header > div > div > button")).map((e=>e.textContent));""===document.querySelectorAll(".v-btn__content")[2].textContent?e.details="Participating in a Courtroom":e.details="Spectating a Courtroom",e.state=`${document.querySelector(".v-toolbar__title").textContent||"Joining..."} | Participants: ${t} | Spectators: ${o??0}`,e.buttons=[{label:"Join Courtroom",url:a}]}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWMsS0FDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSxxRUFDZkMsZUFBZ0JSLG9CQUNqQixTQUFFUyxFQUFRLEtBQUVDLEdBQVNDLFNBQVNDLFNBQ2pDLEdBQWlCLE1BQWJILEVBQWtCLENBQ2xCLE1BQU1JLEVBQXNCRixTQUFTRyxjQUFjLFlBQVlDLE1BQ25DLEtBQXhCRixHQUNBUCxFQUFhVSxRQUFVLDhCQUN2QlYsRUFBYVcsY0FDVE4sU0FBU0csY0FBYyxhQUFhSSxJQUNwQ0wsRUFBb0JNLE9BQVMsSUFDN0JiLEVBQWFjLGVBQWlCLEdBQUdQLEVBQW9CUSxVQUFVLEVBQUcsVUFHbEVmLEVBQWFjLGVBQWlCUCxHQUdsQ1AsRUFBYVUsUUFBVSxzQkFDL0IsTUFDSyxHQUFpQixXQUFiUCxFQUNMSCxFQUFhVSxRQUFVLDZCQUN0QixHQUFJUCxFQUFTYSxXQUFXLGVBQ3pCaEIsRUFBYVUsUUFBVSx1QkFDdkJWLEVBQWFpQixRQUFVLENBQ25CLENBQ0lDLE1BQU8saUJBQ1BDLElBQUtmLFNBSVosR0FBSUQsRUFBU2EsV0FBVyxVQUN6QmhCLEVBQWFVLFFBQVUsaUJBQ0EsY0FBbkJMLFNBQVNlLFFBQ1RwQixFQUFhcUIsTUFBUWhCLFNBQVNlLE9BRWxDcEIsRUFBYWlCLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxZQUNQQyxJQUFLZixTQUlaLEdBQUlELEVBQVNhLFdBQVcsZUFBZ0IsQ0FDekMsTUFBT00sRUFBY0MsR0FBY0MsTUFBTUMsS0FBS3BCLFNBQVNxQixpQkFBaUIsZ0NBQWdDQyxLQUFJQyxHQUFVQSxFQUFPQyxjQUN6RCxLQUFoRXhCLFNBQVNxQixpQkFBaUIsbUJBQW1CLEdBQUdHLFlBQ2hEN0IsRUFBYVUsUUFBVSwrQkFFdkJWLEVBQWFVLFFBQVUseUJBQzNCVixFQUFhcUIsTUFBUSxHQUFHaEIsU0FBU0csY0FBYyxxQkFBcUJxQixhQUFlLGdDQUFnQ1AsbUJBQThCQyxHQUFjLElBQy9KdkIsRUFBYWlCLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxpQkFDUEMsSUFBS2YsR0FHakIsQ0FDQWIsU0FBU3VDLFlBQVk5QixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjk1NzY3MDY4NzI3ODAwMjIwNlwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL08vT2JqZWN0aW9uLmxvbC9hc3NldHMvbG9nby5qcGdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHsgcGF0aG5hbWUsIGhyZWYgfSA9IGRvY3VtZW50LmxvY2F0aW9uO1xuICAgIGlmIChwYXRobmFtZSA9PT0gXCIvXCIpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlT2JqZWN0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKS52YWx1ZTtcbiAgICAgICAgaWYgKHNpbXBsZU9iamVjdGlvblRleHQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDcmVhdGluZyBhIFNpbXBsZSBPYmplY3Rpb25cIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnNyYztcbiAgICAgICAgICAgIGlmIChzaW1wbGVPYmplY3Rpb25UZXh0Lmxlbmd0aCA+IDEyNykge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGAke3NpbXBsZU9iamVjdGlvblRleHQuc3Vic3RyaW5nKDAsIDEyNCl9Li4uYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBzaW1wbGVPYmplY3Rpb25UZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBob21lcGFnZVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZSA9PT0gXCIvbWFrZXJcIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNyZWF0aW5nIGFuIE9iamVjdGlvblwiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvb2JqZWN0aW9uL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhbiBPYmplY3Rpb25cIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBPYmplY3Rpb25cIixcbiAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2Nhc2UvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgQ2FzZVwiO1xuICAgICAgICBpZiAoZG9jdW1lbnQudGl0bGUgIT09IFwiUGxheSBDYXNlXCIpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgQ2FzZVwiLFxuICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvY291cnRyb29tL1wiKSkge1xuICAgICAgICBjb25zdCBbcGFydGljaXBhbnRzLCBzcGVjdGF0b3JzXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImhlYWRlciA+IGRpdiA+IGRpdiA+IGJ1dHRvblwiKSkubWFwKGJ1dHRvbiA9PiBidXR0b24udGV4dENvbnRlbnQpO1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52LWJ0bl9fY29udGVudFwiKVsyXS50ZXh0Q29udGVudCA9PT0gXCJcIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJQYXJ0aWNpcGF0aW5nIGluIGEgQ291cnRyb29tXCI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTcGVjdGF0aW5nIGEgQ291cnRyb29tXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudi10b29sYmFyX190aXRsZVwiKS50ZXh0Q29udGVudCB8fCBcIkpvaW5pbmcuLi5cIn0gfCBQYXJ0aWNpcGFudHM6ICR7cGFydGljaXBhbnRzfSB8IFNwZWN0YXRvcnM6ICR7c3BlY3RhdG9ycyA/PyAwfWA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkpvaW4gQ291cnRyb29tXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVU3U1VGRE9VSXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnBETEdGQlFXRXNSVUZEV2l4dlJVRkJiMFU3VVVGRGNrVXNZMEZCWXl4RlFVRkZMR2xDUVVGcFFqdExRVU5xUXl4RlFVTkVMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNN1NVRkZlRU1zU1VGQlNTeFJRVUZSTEV0QlFVc3NSMEZCUnl4RlFVRkZPMUZCUTNKQ0xFMUJRVTBzYlVKQlFXMUNMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRja1VzU1VGQlNTeHRRa0ZCYlVJc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGREwwSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcyUWtGQk5rSXNRMEZCUXp0WlFVTnlSQ3haUVVGWkxFTkJRVU1zWVVGQllUdG5Ra0ZEZWtJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmJVSXNWMEZCVnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRE8xbEJRek5FTEVsQlFVa3NiVUpCUVcxQ0xFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NSVUZCUlR0blFrRkRja01zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4SFFVRkhMRzFDUVVGdFFpeERRVUZETEZOQlFWTXNRMEZETjBRc1EwRkJReXhGUVVORUxFZEJRVWNzUTBGRFNDeExRVUZMTEVOQlFVTTdZVUZEVURzN1owSkJRVTBzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4dFFrRkJiVUlzUTBGQlF6dFRRVU42UkRzN1dVRkJUU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8wdEJRM0pFTzFOQlFVMHNTVUZCU1N4UlFVRlJMRXRCUVVzc1VVRkJVVHRSUVVNdlFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSFZDUVVGMVFpeERRVUZETzFOQlF6TkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlR0UlFVTTFReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8xRkJRemxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1dVRkRkRUk3WjBKQlEwTXNTMEZCU3l4RlFVRkZMR2RDUVVGblFqdG5Ra0ZEZGtJc1IwRkJSeXhGUVVGRkxFbEJRVWs3WVVGRFZEdFRRVU5FTEVOQlFVTTdTMEZEUmp0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTjZReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xRkJRM2hETEVsQlFVa3NVVUZCVVN4RFFVRkRMRXRCUVVzc1MwRkJTeXhYUVVGWExFVkJRVVU3V1VGRmJrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETzFOQlEzQkRPMUZCUTBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dFpRVU4wUWp0blFrRkRReXhMUVVGTExFVkJRVVVzVjBGQlZ6dG5Ra0ZEYkVJc1IwRkJSeXhGUVVGRkxFbEJRVWs3WVVGRFZEdFRRVU5FTEVOQlFVTTdTMEZEUmp0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlR0UlFVTTVReXhOUVVGTkxFTkJRVU1zV1VGQldTeEZRVUZGTEZWQlFWVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRelZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5dzJRa0ZCTmtJc1EwRkJReXhEUVVONFJDeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTndReXhKUVVGSkxGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUzBGQlN5eEZRVUZGTzFsQlEzSkZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzT0VKQlFUaENMRU5CUVVNN08xbEJRMnhFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdVVUZEY2tRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhKUVVGSkxGbEJRelZFTEc5Q1FVRnZRaXhaUVVGWkxHdENRVUZyUWl4VlFVRlZMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRGNFVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenRaUVVOMFFqdG5Ra0ZEUXl4TFFVRkxMRVZCUVVVc1owSkJRV2RDTzJkQ1FVTjJRaXhIUVVGSExFVkJRVVVzU1VGQlNUdGhRVU5VTzFOQlEwUXNRMEZCUXp0TFFVTkdPMGxCUlVRc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0QlFVTndReXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsImhyZWYiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwic2ltcGxlT2JqZWN0aW9uVGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJzbWFsbEltYWdlS2V5Iiwic3JjIiwibGVuZ3RoIiwic21hbGxJbWFnZVRleHQiLCJzdWJzdHJpbmciLCJzdGFydHNXaXRoIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwidGl0bGUiLCJzdGF0ZSIsInBhcnRpY2lwYW50cyIsInNwZWN0YXRvcnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwIiwiYnV0dG9uIiwidGV4dENvbnRlbnQiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;