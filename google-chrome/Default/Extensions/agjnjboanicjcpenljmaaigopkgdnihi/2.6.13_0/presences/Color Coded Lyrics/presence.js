var __webpack_exports__={};const presence=new Presence({clientId:"1023360990802366544"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/C/Color%20Coded%20Lyrics/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t,href:a,search:s}=window.location,i=new URLSearchParams(s),n=t.split("/").filter((e=>e)),r=document.querySelector("h1")?.textContent;switch(n[0]??""){case"":case"page":i.get("s")?(e.details="Searching songs",e.state=i.get("s")):(e.details="Browsing",e.state="Home page");break;case"author":e.details="Viewing contributions by an author",e.state=r.match(/^Author: (.*?)$/)[1];break;case"calendar":e.details="Viewing calendar","today"===n[1]||"month"===n[1]||/^\d{4}-\d{2}(-\d{2})?$/.test(n[1])?e.state=`In ${document.querySelector(".tribe-events-c-top-bar__datepicker-desktop").textContent.trim()}`:(e.details="Viewing an event",e.state=document.querySelector(".tribe-events-single-event-title").textContent);break;case"category":e.details="Viewing contributions by a category",e.state=r.match(/^Category: (.*?)$/)[1];break;case"index":e.details="Viewing index of songs";break;case"requests":e.details="Submitting a request";break;case"translations":e.details="Submitting a translation";break;case"wp-login.php":e.details="Logging in to WordPress dashboard";break;case"wp-admin":switch(e.details="Viewing WordPress page",n[1]){case"index.php":e.state="Dashboard";break;case"profile.php":e.state="Profile";break;default:document.title.match(/(.*?) \u2039 Color Coded Lyrics — WordPress/)[1]}break;default:/^\/\d{4}(\/\d{2}\/?(\d{2})?)?\/?$/.test(t)?(e.details="Viewing contributions by a date",e.state=r.match(/^.*?: (.*?)$/)[1]):/^\/\d{4}\/\d{2}\/\d{2}\/.*?\/$/.test(t)?(e.details="Viewing song lyrics",e.state=r,e.buttons=[{label:"View Song",url:a}],e.largeImageKey=document.querySelector(".inner-article-content img").src):(e.details="Browsing",e.state=r)}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsOEVBQ2ZDLGVBQWdCVCxvQkFDakIsU0FBRVUsRUFBUSxLQUFFQyxFQUFJLE9BQUVDLEdBQVdDLE9BQU9DLFNBQVVDLEVBQWUsSUFBSUMsZ0JBQWdCSixHQUFTSyxFQUFZUCxFQUFTUSxNQUFNLEtBQUtDLFFBQU9DLEdBQUtBLElBQUlDLEVBQVlDLFNBQVNDLGNBQWMsT0FBT0MsWUFDdkwsT0FBUVAsRUFBVSxJQUFNLElBQ3BCLElBQUssR0FDTCxJQUFLLE9BQ0dGLEVBQWFVLElBQUksTUFDakJsQixFQUFhbUIsUUFBVSxrQkFDdkJuQixFQUFhb0IsTUFBUVosRUFBYVUsSUFBSSxPQUd0Q2xCLEVBQWFtQixRQUFVLFdBQ3ZCbkIsRUFBYW9CLE1BQVEsYUFFekIsTUFFSixJQUFLLFNBQ0RwQixFQUFhbUIsUUFBVSxxQ0FDdkJuQixFQUFhb0IsTUFBUU4sRUFBVU8sTUFBTSxtQkFBbUIsR0FDeEQsTUFFSixJQUFLLFdBQ0RyQixFQUFhbUIsUUFBVSxtQkFDRixVQUFqQlQsRUFBVSxJQUNPLFVBQWpCQSxFQUFVLElBQ1YseUJBQXlCWSxLQUFLWixFQUFVLElBQ3hDVixFQUFhb0IsTUFBUSxNQUFNTCxTQUN0QkMsY0FBYywrQ0FDZEMsWUFBWU0sVUFHakJ2QixFQUFhbUIsUUFBVSxtQkFDdkJuQixFQUFhb0IsTUFBUUwsU0FBU0MsY0FBYyxvQ0FBb0NDLGFBRXBGLE1BRUosSUFBSyxXQUNEakIsRUFBYW1CLFFBQVUsc0NBQ3ZCbkIsRUFBYW9CLE1BQVFOLEVBQVVPLE1BQU0scUJBQXFCLEdBQzFELE1BRUosSUFBSyxRQUNEckIsRUFBYW1CLFFBQVUseUJBQ3ZCLE1BRUosSUFBSyxXQUNEbkIsRUFBYW1CLFFBQVUsdUJBQ3ZCLE1BRUosSUFBSyxlQUNEbkIsRUFBYW1CLFFBQVUsMkJBQ3ZCLE1BRUosSUFBSyxlQUNEbkIsRUFBYW1CLFFBQVUsb0NBQ3ZCLE1BRUosSUFBSyxXQUVELE9BREFuQixFQUFhbUIsUUFBVSx5QkFDZlQsRUFBVSxJQUNkLElBQUssWUFDRFYsRUFBYW9CLE1BQVEsWUFDckIsTUFFSixJQUFLLGNBQ0RwQixFQUFhb0IsTUFBUSxVQUNyQixNQUVKLFFBQ0lMLFNBQVNTLE1BQU1ILE1BQU0sK0NBQStDLEdBRzVFLE1BRUosUUFDUSxvQ0FBb0NDLEtBQUtuQixJQUN6Q0gsRUFBYW1CLFFBQVUsa0NBQ3ZCbkIsRUFBYW9CLE1BQVFOLEVBQVVPLE1BQU0sZ0JBQWdCLElBRWhELGlDQUFpQ0MsS0FBS25CLElBQzNDSCxFQUFhbUIsUUFBVSxzQkFDdkJuQixFQUFhb0IsTUFBUU4sRUFDckJkLEVBQWF5QixRQUFVLENBQ25CLENBQ0lDLE1BQU8sWUFDUEMsSUFBS3ZCLElBR2JKLEVBQWFDLGNBQWdCYyxTQUFTQyxjQUFjLDhCQUE4QlksTUFHbEY1QixFQUFhbUIsUUFBVSxXQUN2Qm5CLEVBQWFvQixNQUFRTixHQUlqQ3hCLFNBQVN1QyxZQUFZN0IsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCIxMDIzMzYwOTkwODAyMzY2NTQ0XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2xvciUyMENvZGVkJTIwTHlyaWNzL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSwgaHJlZiwgc2VhcmNoIH0gPSB3aW5kb3cubG9jYXRpb24sIHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKSwgcGF0aFNwbGl0ID0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpLmZpbHRlcih4ID0+IHgpLCBwYWdlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik/LnRleHRDb250ZW50O1xuICAgIHN3aXRjaCAocGF0aFNwbGl0WzBdID8/IFwiXCIpIHtcbiAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICBjYXNlIFwicGFnZVwiOiB7XG4gICAgICAgICAgICBpZiAoc2VhcmNoUGFyYW1zLmdldChcInNcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIHNvbmdzXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc2VhcmNoUGFyYW1zLmdldChcInNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkhvbWUgcGFnZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImF1dGhvclwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBjb250cmlidXRpb25zIGJ5IGFuIGF1dGhvclwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcGFnZVRpdGxlLm1hdGNoKC9eQXV0aG9yOiAoLio/KSQvKVsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJjYWxlbmRhclwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBjYWxlbmRhclwiO1xuICAgICAgICAgICAgaWYgKHBhdGhTcGxpdFsxXSA9PT0gXCJ0b2RheVwiIHx8XG4gICAgICAgICAgICAgICAgcGF0aFNwbGl0WzFdID09PSBcIm1vbnRoXCIgfHxcbiAgICAgICAgICAgICAgICAvXlxcZHs0fS1cXGR7Mn0oLVxcZHsyfSk/JC8udGVzdChwYXRoU3BsaXRbMV0pKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEluICR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIudHJpYmUtZXZlbnRzLWMtdG9wLWJhcl9fZGF0ZXBpY2tlci1kZXNrdG9wXCIpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC50cmltKCl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFuIGV2ZW50XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmliZS1ldmVudHMtc2luZ2xlLWV2ZW50LXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImNhdGVnb3J5XCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGNvbnRyaWJ1dGlvbnMgYnkgYSBjYXRlZ29yeVwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcGFnZVRpdGxlLm1hdGNoKC9eQ2F0ZWdvcnk6ICguKj8pJC8pWzFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImluZGV4XCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGluZGV4IG9mIHNvbmdzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwicmVxdWVzdHNcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlN1Ym1pdHRpbmcgYSByZXF1ZXN0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwidHJhbnNsYXRpb25zXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTdWJtaXR0aW5nIGEgdHJhbnNsYXRpb25cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJ3cC1sb2dpbi5waHBcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvZ2dpbmcgaW4gdG8gV29yZFByZXNzIGRhc2hib2FyZFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIndwLWFkbWluXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFdvcmRQcmVzcyBwYWdlXCI7XG4gICAgICAgICAgICBzd2l0Y2ggKHBhdGhTcGxpdFsxXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJpbmRleC5waHBcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkRhc2hib2FyZFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInByb2ZpbGUucGhwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJQcm9maWxlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlLm1hdGNoKC8oLio/KSBcXHUyMDM5IENvbG9yIENvZGVkIEx5cmljcyDigJQgV29yZFByZXNzLylbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgaWYgKC9eXFwvXFxkezR9KFxcL1xcZHsyfVxcLz8oXFxkezJ9KT8pP1xcLz8kLy50ZXN0KHBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGNvbnRyaWJ1dGlvbnMgYnkgYSBkYXRlXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcGFnZVRpdGxlLm1hdGNoKC9eLio/OiAoLio/KSQvKVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKC9eXFwvXFxkezR9XFwvXFxkezJ9XFwvXFxkezJ9XFwvLio/XFwvJC8udGVzdChwYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBzb25nIGx5cmljc1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHBhZ2VUaXRsZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBTb25nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5uZXItYXJ0aWNsZS1jb250ZW50IGltZ1wiKS5zcmM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYWdlVGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2NVSkJRWEZDTzBOQlF5OUNMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN4RlFVTmFMRFpGUVVFMlJUdFJRVU01UlN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRVZCUTBRc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SFFVRkhMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRelZETEZsQlFWa3NSMEZCUnl4SlFVRkpMR1ZCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGRE1VTXNVMEZCVXl4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlF6bERMRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZ4UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hYUVVGWExFTkJRVU03U1VGRk0wVXNVVUZCVVN4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTzFGQlF6TkNMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMUlzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTmFMRWxCUVVrc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRNVUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dG5Ra0ZEZWtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRek5ETzJsQ1FVRk5PMmRDUVVOT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRPMmRDUVVOc1F5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmRCUVZjc1EwRkJRenRoUVVOcVF6dFpRVU5FTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRFpDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzlEUVVGdlF5eERRVUZETzFsQlF6VkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORUxFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dFpRVU14UXl4SlFVTkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFBRVUZQTzJkQ1FVTjRRaXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NUMEZCVHp0blFrRkRlRUlzZDBKQlFYZENMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVTXhRenRuUWtGRFJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1VVRkJVVHR4UWtGRGFrTXNZVUZCWVN4RFFVTmlMRFpEUVVFMlF5eERRVU0zUXp0eFFrRkRRU3hYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXp0aFFVTjJRanRwUWtGQlRUdG5Ra0ZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMmRDUVVNeFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRekZETEd0RFFVRnJReXhEUVVOc1F5eERRVUZETEZkQlFWY3NRMEZCUXp0aFFVTmtPMWxCUTBRc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eFZRVUZWTEVOQlFVTXNRMEZCUXp0WlFVTm9RaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGRFFVRnhReXhEUVVGRE8xbEJRemRFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6ZEVMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzVDBGQlR5eERRVUZETEVOQlFVTTdXVUZEWWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMWxCUTJoRUxFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4elFrRkJjMElzUTBGQlF6dFpRVU01UXl4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExHTkJRV01zUTBGQlF5eERRVUZETzFsQlEzQkNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTUVKQlFUQkNMRU5CUVVNN1dVRkRiRVFzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4alFVRmpMRU5CUVVNc1EwRkJRenRaUVVOd1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFEUVVGdFF5eERRVUZETzFsQlF6TkVMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzVlVGQlZTeERRVUZETEVOQlFVTTdXVUZEYUVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJRenRaUVVOb1JDeFJRVUZSTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGRGNrSXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJRenR2UWtGRGFrSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhYUVVGWExFTkJRVU03YjBKQlEycERMRTFCUVUwN2FVSkJRMDQ3WjBKQlEwUXNTMEZCU3l4aFFVRmhMRU5CUVVNc1EwRkJRenR2UWtGRGJrSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03YjBKQlF5OUNMRTFCUVUwN2FVSkJRMDQ3WjBKQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNN2IwSkJRMUlzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUTI1Q0xEWkRRVUUyUXl4RFFVTTNReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTk1PMkZCUTBRN1dVRkRSQ3hOUVVGTk8xTkJRMDQ3VVVGRFJDeFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTlNMRWxCUVVrc2JVTkJRVzFETEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU4yUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbERRVUZwUXl4RFFVRkRPMmRDUVVONlJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRlRVE3YVVKQlFVMHNTVUZCU1N4blEwRkJaME1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1owSkJRek5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTTdaMEpCUXpkRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMmRDUVVNdlFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFqdDNRa0ZEUXl4TFFVRkxMRVZCUVVVc1YwRkJWenQzUWtGRGJFSXNSMEZCUnl4RlFVRkZMRWxCUVVrN2NVSkJRMVE3YVVKQlEwUXNRMEZCUXp0blFrRkRSaXhaUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTJ4RUxEUkNRVUUwUWl4RFFVTTFRaXhEUVVGRExFZEJRVWNzUTBGQlF6dGhRVU5PTzJsQ1FVRk5PMmRDUVVOT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRPMmRDUVVOc1F5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRoUVVNdlFqdFRRVU5FTzB0QlEwUTdTVUZGUkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInBhdGhuYW1lIiwiaHJlZiIsInNlYXJjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwicGF0aFNwbGl0Iiwic3BsaXQiLCJmaWx0ZXIiLCJ4IiwicGFnZVRpdGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJnZXQiLCJkZXRhaWxzIiwic3RhdGUiLCJtYXRjaCIsInRlc3QiLCJ0cmltIiwidGl0bGUiLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJzcmMiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;