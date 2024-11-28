var __webpack_exports__={};const presence=new Presence({clientId:"835652520637890620"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/PodcastAddict/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t,search:s}=document.location;if("/"===t&&"?q"===s.substr(0,2))e.details="Searching:",e.state=document.querySelector(".caption").textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png";else if("/"===t)e.details="Viewing the homepage";else if(t.startsWith("/app"))e.details="Reading the app page";else if(t.startsWith("/ads"))e.details="Reading the ads page";else if(t.startsWith("/privacy"))e.details="Reading the privacy policy & ToS page";else if(t.startsWith("/submit"))e.details="Reading the podcast submission page";else if(t.startsWith("/podcasters"))e.details="Reading the podcasters page";else if(t.startsWith("/premium"))e.details="Reading the premium page";else if(t.startsWith("/faq"))e.details="Reading the FAQ page";else if(t.startsWith("/changelog"))e.details="Reading the changelog page";else if(t.startsWith("/contact"))e.details="Reading the contact page";else if(t.startsWith("/podcast"))e.details="Viewing:",e.state=document.querySelector(".caption").textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/viewing.png",e.buttons=[{label:"View Podcast",url:window.location.href}];else if(t.startsWith("/episode")){const t=presence.timestampFromFormat(document.querySelector("#elapsedTime").textContent);e.buttons=[{label:"Listen Along",url:window.location.href}],e.details=document.querySelector(".pure-button").textContent,e.state=document.querySelector(".title").textContent,document.querySelector("#play-pause-button").classList.contains("fa-play-circle")?e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/pause.png":([e.startTimestamp,e.endTimestamp]=presence.getTimestamps(t,presence.timestampFromFormat(document.querySelector("#remainingTime").textContent.substr(1))+t),e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png")}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUscUVBQ2ZDLGVBQWdCVCxvQkFDakIsU0FBRVUsRUFBUSxPQUFFQyxHQUFXQyxTQUFTQyxTQUNuQyxHQUFpQixNQUFiSCxHQUE0QyxPQUF4QkMsRUFBT0csT0FBTyxFQUFHLEdBQ3JDUCxFQUFhUSxRQUFVLGFBQ3ZCUixFQUFhUyxNQUFRSixTQUFTSyxjQUFjLFlBQVlDLFlBQ3hEWCxFQUFhWSxjQUFnQixzREFFNUIsR0FBaUIsTUFBYlQsRUFDTEgsRUFBYVEsUUFBVSw0QkFDdEIsR0FBSUwsRUFBU1UsV0FBVyxRQUN6QmIsRUFBYVEsUUFBVSw0QkFDdEIsR0FBSUwsRUFBU1UsV0FBVyxRQUN6QmIsRUFBYVEsUUFBVSw0QkFDdEIsR0FBSUwsRUFBU1UsV0FBVyxZQUN6QmIsRUFBYVEsUUFBVSw2Q0FDdEIsR0FBSUwsRUFBU1UsV0FBVyxXQUN6QmIsRUFBYVEsUUFBVSwyQ0FDdEIsR0FBSUwsRUFBU1UsV0FBVyxlQUN6QmIsRUFBYVEsUUFBVSxtQ0FDdEIsR0FBSUwsRUFBU1UsV0FBVyxZQUN6QmIsRUFBYVEsUUFBVSxnQ0FDdEIsR0FBSUwsRUFBU1UsV0FBVyxRQUN6QmIsRUFBYVEsUUFBVSw0QkFDdEIsR0FBSUwsRUFBU1UsV0FBVyxjQUN6QmIsRUFBYVEsUUFBVSxrQ0FDdEIsR0FBSUwsRUFBU1UsV0FBVyxZQUN6QmIsRUFBYVEsUUFBVSxnQ0FDdEIsR0FBSUwsRUFBU1UsV0FBVyxZQUN6QmIsRUFBYVEsUUFBVSxXQUN2QlIsRUFBYVMsTUFBUUosU0FBU0ssY0FBYyxZQUFZQyxZQUN4RFgsRUFBYVksY0FBZ0Isa0RBQzdCWixFQUFhYyxRQUFVLENBQ25CLENBQUVDLE1BQU8sZUFBZ0JDLElBQUtDLE9BQU9YLFNBQVNZLFlBR2pELEdBQUlmLEVBQVNVLFdBQVcsWUFBYSxDQUN0QyxNQUFNTSxFQUFjN0IsU0FBUzhCLG9CQUFvQmYsU0FBU0ssY0FBYyxnQkFBZ0JDLGFBQ3hGWCxFQUFhYyxRQUFVLENBQ25CLENBQUVDLE1BQU8sZUFBZ0JDLElBQUtDLE9BQU9YLFNBQVNZLE9BRWxEbEIsRUFBYVEsUUFBVUgsU0FBU0ssY0FBYyxnQkFBZ0JDLFlBQzlEWCxFQUFhUyxNQUFRSixTQUFTSyxjQUFjLFVBQVVDLFlBQ2pETixTQUNBSyxjQUFjLHNCQUNkVyxVQUFVQyxTQUFTLGtCQU1wQnRCLEVBQWFZLGNBQWdCLGtEQUw1QlosRUFBYUUsZUFBZ0JGLEVBQWF1QixjQUN2Q2pDLFNBQVNrQyxjQUFjTCxFQUFhN0IsU0FBUzhCLG9CQUFvQmYsU0FBU0ssY0FBYyxrQkFBa0JDLFlBQVlKLE9BQU8sSUFBTVksR0FDdkluQixFQUFhWSxjQUFnQiwrQ0FJckMsQ0FDQXRCLFNBQVNtQyxZQUFZekIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI4MzU2NTI1MjA2Mzc4OTA2MjBcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9QL1BvZGNhc3RBZGRpY3QvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCB7IHBhdGhuYW1lLCBzZWFyY2ggfSA9IGRvY3VtZW50LmxvY2F0aW9uO1xuICAgIGlmIChwYXRobmFtZSA9PT0gXCIvXCIgJiYgc2VhcmNoLnN1YnN0cigwLCAyKSA9PT0gXCI/cVwiKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbmc6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FwdGlvblwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUgPT09IFwiL1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgaG9tZXBhZ2VcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2FwcFwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIGFwcCBwYWdlXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hZHNcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRoZSBhZHMgcGFnZVwiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvcHJpdmFjeVwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIHByaXZhY3kgcG9saWN5ICYgVG9TIHBhZ2VcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL3N1Ym1pdFwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIHBvZGNhc3Qgc3VibWlzc2lvbiBwYWdlXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wb2RjYXN0ZXJzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgcG9kY2FzdGVycyBwYWdlXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wcmVtaXVtXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgcHJlbWl1bSBwYWdlXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9mYXFcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRoZSBGQVEgcGFnZVwiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvY2hhbmdlbG9nXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgY2hhbmdlbG9nIHBhZ2VcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2NvbnRhY3RcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRoZSBjb250YWN0IHBhZ2VcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL3BvZGNhc3RcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmc6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FwdGlvblwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3ZpZXdpbmcucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgeyBsYWJlbDogXCJWaWV3IFBvZGNhc3RcIiwgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZiB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2VwaXNvZGVcIikpIHtcbiAgICAgICAgY29uc3QgZWxhcHNlZFRpbWUgPSBwcmVzZW5jZS50aW1lc3RhbXBGcm9tRm9ybWF0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWxhcHNlZFRpbWVcIikudGV4dENvbnRlbnQpO1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiTGlzdGVuIEFsb25nXCIsIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYgfSxcbiAgICAgICAgXTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnB1cmUtYnV0dG9uXCIpLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgICBpZiAoIWRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNwbGF5LXBhdXNlLWJ1dHRvblwiKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5jb250YWlucyhcImZhLXBsYXktY2lyY2xlXCIpKSB7XG4gICAgICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9XG4gICAgICAgICAgICAgICAgcHJlc2VuY2UuZ2V0VGltZXN0YW1wcyhlbGFwc2VkVGltZSwgcHJlc2VuY2UudGltZXN0YW1wRnJvbUZvcm1hdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlbWFpbmluZ1RpbWVcIikudGV4dENvbnRlbnQuc3Vic3RyKDEpKSArIGVsYXBzZWRUaW1lKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIjtcbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN4RlFVTmFMRzlGUVVGdlJUdFJRVU55UlN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRVZCUTBRc1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVVeFF5eEpRVUZKTEZGQlFWRXNTMEZCU3l4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRk8xRkJRM0pFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1dVRkJXU3hEUVVGRE8xRkJRM0JETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRjRVVzV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03UzBGRE0wTTdVMEZCVFN4SlFVRkpMRkZCUVZFc1MwRkJTeXhIUVVGSE8xRkJRVVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4elFrRkJjMElzUTBGQlF6dFRRVU4wUlN4SlFVRkpMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEyNURMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1UwRkRNVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVOdVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSE5DUVVGelFpeERRVUZETzFOQlF6RkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTTdVVUZEZGtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDFRMEZCZFVNc1EwRkJRenRUUVVNelJDeEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM1JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2NVTkJRWEZETEVOQlFVTTdVMEZEZWtRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTXhReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERaQ1FVRTJRaXhEUVVGRE8xTkJRMnBFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRGRrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXp0VFFVTTVReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUTI1RExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03VTBGRE1VTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU42UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEUkNRVUUwUWl4RFFVRkRPMU5CUTJoRUxFbEJRVWtzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNN1VVRkRka01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3d1FrRkJNRUlzUTBGQlF6dFRRVU01UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdVVUZEZWtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZEYkVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU53UlN4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0UlFVTTFReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzFsQlEzUkNMRVZCUVVVc1MwRkJTeXhGUVVGRkxHTkJRV01zUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVU3VTBGRGNFUXNRMEZCUXp0TFFVTkdPMU5CUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMUZCUXpORExFMUJRVTBzVjBGQlZ5eEhRVUZITEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGREwwTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlEyeEVMRU5CUVVNN1VVRkZSaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzFsQlEzUkNMRVZCUVVVc1MwRkJTeXhGUVVGRkxHTkJRV01zUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVU3VTBGRGNFUXNRMEZCUXp0UlFVTkdMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE1VVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVOc1JTeEpRVU5ETEVOQlFVTXNVVUZCVVR0aFFVTlFMR0ZCUVdFc1EwRkJReXh2UWtGQmIwSXNRMEZCUXp0aFFVTnVReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFVkJRM0pETzFsQlEwUXNRMEZCUXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhGUVVGRkxGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTTdaMEpCUTNaRUxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEzSkNMRmRCUVZjc1JVRkRXQ3hSUVVGUkxFTkJRVU1zYlVKQlFXMUNMRU5CUXpOQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVNNVJDeEhRVUZITEZkQlFWY3NRMEZEWml4RFFVRkRPMWxCUTBnc1dVRkJXU3hEUVVGRExHRkJRV0VzYVVSQlFXTXNRMEZCUXp0VFFVTjZRenM3V1VGQlRTeFpRVUZaTEVOQlFVTXNZVUZCWVN4clJFRkJaU3hEUVVGRE8wdEJRMnBFTzBsQlEwUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU53UXl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsInNlYXJjaCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJzdWJzdHIiLCJkZXRhaWxzIiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzbWFsbEltYWdlS2V5Iiwic3RhcnRzV2l0aCIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsIndpbmRvdyIsImhyZWYiLCJlbGFwc2VkVGltZSIsInRpbWVzdGFtcEZyb21Gb3JtYXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;