var __webpack_exports__={};const presence=new Presence({clientId:"845360129715994685"}),timeElapsed=~~(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/AtCoder/assets/logo.png",startTimestamp:timeElapsed};if(location.pathname.split("/")[1])switch(location.pathname.split("/")[1]){case"home":e.details="Viewing Home Page";break;case"register":e.details="Creating an account";break;case"login":e.details="Logging in";break;case"contests":switch(e.details="Viewing Contest",e.state=`${document.title.split("-")[0]}`,location.pathname.split("/")[3]){case"tasks":e.details="Viewing Contest Tasks",e.state=`${document.title.split("-")[1]}`,5===location.pathname.split("/").length&&(e.details=document.querySelector(".contest-title").textContent,e.state=document.title);break;case"clarifications":e.details="Viewing Clarifications",e.state=`Contest: ${location.pathname.split("/")[2].toUpperCase()}`;break;case"submit":e.details=`Submitting Solution: ${location.pathname.split("/")[2].toUpperCase()}`,e.state=`${document.querySelectorAll(".select2-selection__rendered").item(0).textContent} [${document.querySelectorAll(".select2-selection__rendered").item(1).textContent}]`;break;case"submissions":"me"===location.pathname.split("/")[4]?e.details="Viewing my Submissions":e.details="Viewing All Submissions",e.state=document.querySelector(".contest-title").textContent;break;case"score":e.details="Viewing my Score",e.state=document.querySelector(".contest-title").textContent;break;case"standings":"virtual"===location.pathname.split("/")[4]?e.details="Viewing Virtual Standings":e.details="Viewing Standings",e.state=`Contest: ${location.pathname.split("/")[2].toUpperCase()}`;break;case"results":e.details="Viewing Result",e.state=`Contest: ${location.pathname.split("/")[2].toUpperCase()}`;break;case"editorial":e.details="Viewing Editorial",e.state=`Contest: ${location.pathname.split("/")[2].toUpperCase()}`,5===location.pathname.split("/").length&&(e.details="Reading Editorial",e.state=`${location.pathname.split("/")[2].toUpperCase()}: ${document.querySelector("#main-container").querySelector("h2").querySelector("a").textContent}`);break;case"custom_test":e.details="Performing Custom Test",e.state=`Contest: ${location.pathname.split("/")[2].toUpperCase()}`}break;case"ranking":e.details="Viewing Ranks",e.state=`Page no. ${location.search.split("=")[1]||1}`;break;case"users":{const t=document.querySelector(".username").textContent;e.details="Viewing Profile","history"===location.pathname.split("/")[3]?e.state=`${t}'s Competition History`:e.state=t;break}case"settings":e.details="Editing their Settings";break;case"posts":if(location.pathname.split("/")[2]){e.details="Reading Post",e.state=document.querySelector(".panel-title").childNodes[0].textContent;break}e.details="Browsing Post Archive..."}else e.details="Viewing Home Page";e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxrQkFDaUIsWUFBcENILFNBQVNDLFNBQVNDLE1BQU0sS0FBSyxHQUM3QkwsRUFBYU8sTUFBUSxHQUFHVSwwQkFFeEJqQixFQUFhTyxNQUFRVSxFQUN6QixLQUNKLENBQ0EsSUFBSyxXQUNEakIsRUFBYU0sUUFBVSx5QkFDdkIsTUFFSixJQUFLLFFBQ0QsR0FBS0gsU0FBU0MsU0FBU0MsTUFBTSxLQUFLLEdBRTdCLENBRUdMLEVBQWFNLFFBQVUsZUFDdkJOLEVBQWFPLE1BQ1RDLFNBQVNHLGNBQWMsZ0JBQWdCTyxXQUFXLEdBQUdOLFlBRTdELEtBQ0osQ0FSSVosRUFBYU0sUUFBVSxnQ0EzSG5DTixFQUFhTSxRQUFVLG9CQXVJdkJOLEVBQWFNLFFBQ2JkLFNBQVMyQixZQUFZbkIsR0FFckJSLFNBQVMyQixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjg0NTM2MDEyOTcxNTk5NDY4NVwiLFxufSksIHRpbWVFbGFwc2VkID0gfn4oRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9BL0F0Q29kZXIvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiB0aW1lRWxhcHNlZCxcbiAgICB9O1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBIb21lIFBhZ2VcIjtcbiAgICBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0pIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBIb21lIFBhZ2VcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNyZWF0aW5nIGFuIGFjY291bnRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvZ2dpbmcgaW5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjb250ZXN0c1wiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgQ29udGVzdFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnRpdGxlLnNwbGl0KFwiLVwiKVswXX1gO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzNdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0YXNrc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBDb250ZXN0IFRhc2tzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC50aXRsZS5zcGxpdChcIi1cIilbMV19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlc3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2xhcmlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgQ2xhcmlmaWNhdGlvbnNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBDb250ZXN0OiAke2xvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVsyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3VibWl0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFN1Ym1pdHRpbmcgU29sdXRpb246ICR7bG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpWzJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCl9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkXCIpLml0ZW0oMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnR9IFske2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkXCIpLml0ZW0oMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnR9XWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3VibWlzc2lvbnNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVs0XSA9PT0gXCJtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIG15IFN1Ym1pc3Npb25zXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgQWxsIFN1Ym1pc3Npb25zXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVzdC10aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzY29yZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBteSBTY29yZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlc3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhbmRpbmdzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbNF0gPT09IFwidmlydHVhbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFZpcnR1YWwgU3RhbmRpbmdzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgU3RhbmRpbmdzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgQ29udGVzdDogJHtsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilbMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlc3VsdHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgUmVzdWx0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgQ29udGVzdDogJHtsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilbMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvcmlhbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBFZGl0b3JpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBDb250ZXN0OiAke2xvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVsyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIEVkaXRvcmlhbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2xvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilbMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCl9OiAke2RvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiaDJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY3VzdG9tX3Rlc3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBlcmZvcm1pbmcgQ3VzdG9tIFRlc3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBDb250ZXN0OiAke2xvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVsyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJyYW5raW5nXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBSYW5rc1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBQYWdlIG5vLiAke2xvY2F0aW9uLnNlYXJjaC5zcGxpdChcIj1cIilbMV0gfHwgMX1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInVzZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcm5hbWVcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgUHJvZmlsZVwiO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbM10gPT09IFwiaGlzdG9yeVwiKVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHt1c2VybmFtZX0ncyBDb21wZXRpdGlvbiBIaXN0b3J5YDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHVzZXJuYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRWRpdGluZyB0aGVpciBTZXR0aW5nc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInBvc3RzXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSlcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIFBvc3QgQXJjaGl2ZS4uLlwiO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBQb3N0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFuZWwtdGl0bGVcIikuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhYUVVGWExFZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlJUZERMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUTNCRExFMUJRVTBzV1VGQldTeEhRVUZwUWp0UlFVTnNReXhoUVVGaExFVkJRMW9zT0VSQlFUaEVPMUZCUXk5RUxHTkJRV01zUlVGQlJTeFhRVUZYTzB0QlF6TkNMRU5CUVVNN1NVRkZSaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNURMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYlVKQlFXMUNMRU5CUVVNN1UwRkRka003VVVGRFNpeFJRVUZSTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTNoRExFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFVTTdaMEpCUTFvc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenRuUWtGRE0wTXNUVUZCVFR0aFFVTk9PMWxCUlVRc1MwRkJTeXhWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenRuUWtGRE4wTXNUVUZCVFR0aFFVTk9PMWxCUlVRc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF6dG5Ra0ZEWWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGbEJRVmtzUTBGQlF6dG5Ra0ZEY0VNc1RVRkJUVHRoUVVOT08xbEJSVVFzUzBGQlN5eFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dG5Ra0ZEZWtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJSWFpFTEZGQlFWRXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRM2hETEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN2QwSkJRMklzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4MVFrRkJkVUlzUTBGQlF6dDNRa0ZETDBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN2QwSkJSWFpFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHMwUWtGRE9VTXNXVUZCV1N4RFFVRkRMRTlCUVU4N1owTkJRMjVDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN05FSkJRM1JFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF6dDVRa0ZEY0VNN2QwSkJRMFFzVFVGQlRUdHhRa0ZEVGp0dlFrRkZSQ3hMUVVGTExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN2QwSkJRM1JDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdkMEpCUTJoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NXVUZCV1N4UlFVRlJMRU5CUVVNc1VVRkJVVHMyUWtGRGFFUXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czJRa0ZEWWl4WFFVRlhMRVZCUVVVc1JVRkJSU3hEUVVGRE8zZENRVU5zUWl4TlFVRk5PM0ZDUVVOT08yOUNRVVZFTEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVNN2QwSkJRMlFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4M1FrRkJkMElzVVVGQlVTeERRVUZETEZGQlFWRTdOa0pCUXpsRUxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN05rSkJRMklzVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXp0M1FrRkRiRUlzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVTndRaXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE96WkNRVU12UkN4WFFVTklMRXRCUTBNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenMyUWtGREwwUXNWMEZEU0N4SFFVRkhMRU5CUVVNN2QwSkJRMG9zVFVGQlRUdHhRa0ZEVGp0dlFrRkZSQ3hMUVVGTExHRkJRV0VzUTBGQlF5eERRVUZETzNkQ1FVTnVRaXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVazdORUpCUXpORExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03T3pSQ1FVTTFReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRE8zZENRVVYwUkN4WlFVRlpMRU5CUVVNc1MwRkJTenMwUWtGRGFrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenQzUWtGRGRFUXNUVUZCVFR0eFFrRkRUanR2UWtGRlJDeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRPM2RDUVVOaUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03ZDBKQlF6RkRMRmxCUVZrc1EwRkJReXhMUVVGTE96UkNRVU5xUWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8zZENRVU4wUkN4TlFVRk5PM0ZDUVVOT08yOUNRVVZFTEV0QlFVc3NWMEZCVnl4RFFVRkRMRU5CUVVNN2QwSkJRMnBDTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVenMwUWtGRGFFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd5UWtGQk1rSXNRMEZCUXpzN05FSkJReTlETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTTdkMEpCUldoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NXVUZCV1N4UlFVRlJMRU5CUVVNc1VVRkJVVHMyUWtGRGFFUXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czJRa0ZEWWl4WFFVRlhMRVZCUVVVc1JVRkJSU3hEUVVGRE8zZENRVU5zUWl4TlFVRk5PM0ZDUVVOT08yOUNRVVZFTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN2QwSkJRMllzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUTBGQlF6dDNRa0ZEZUVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEZGQlFWRXNRMEZCUXl4UlFVRlJPelpDUVVOb1JDeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96WkNRVU5pTEZkQlFWY3NSVUZCUlN4RlFVRkZMRU5CUVVNN2QwSkJRMnhDTEUxQlFVMDdjVUpCUTA0N2IwSkJSVVFzUzBGQlN5eFhRVUZYTEVOQlFVTXNRMEZCUXp0M1FrRkRha0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dFFrRkJiVUlzUTBGQlF6dDNRa0ZETTBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEZGQlFWRXNRMEZCUXl4UlFVRlJPelpDUVVOb1JDeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96WkNRVU5pTEZkQlFWY3NSVUZCUlN4RlFVRkZMRU5CUVVNN2QwSkJSV3hDTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHMwUWtGRE9VTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXpzMFFrRkRNME1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUk8ybERRVU4yUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsRFFVTmlMRmRCUVZjc1JVRkJSU3hMUVVOa0xGRkJRVkU3YVVOQlEwNHNZVUZCWVN4RFFVRkRMR2xDUVVGcFFpeERRVUZETzJsRFFVTm9ReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETzJsRFFVTnVRaXhoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNWMEZEZEVJc1JVRkJSU3hEUVVGRE8zbENRVU5JTzNkQ1FVTkVMRTFCUVUwN2NVSkJRMDQ3YjBKQlJVUXNTMEZCU3l4aFFVRmhMRU5CUVVNc1EwRkJRenQzUWtGRGJrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0M1FrRkRhRVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4WlFVRlpMRkZCUVZFc1EwRkJReXhSUVVGUk96WkNRVU5vUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3paQ1FVTmlMRmRCUVZjc1JVRkJSU3hGUVVGRkxFTkJRVU03ZDBKQlEyeENMRTFCUVUwN2NVSkJRMDQ3YVVKQlEwUTdaMEpCUTBRc1RVRkJUVHRoUVVOT08xbEJSVVFzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXp0blFrRkRaaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXp0blFrRkRka01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4WlFVRlpMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzJkQ1FVTjBSU3hOUVVGTk8yRkJRMDQ3V1VGRlJDeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRPMmRDUVVOaUxFMUJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzJkQ1FVTnFSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8yZENRVU42UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk03YjBKQlEyaEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eFJRVUZSTEhkQ1FVRjNRaXhEUVVGRE96dHZRa0ZEY2tRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTTdaMEpCUTI1RExFMUJRVTA3WVVGRFRqdFpRVVZFTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdaMEpCUTJoRUxFMUJRVTA3WVVGRFRqdFpRVVZFTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRMklzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRia01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3d1FrRkJNRUlzUTBGQlF6dHhRa0ZET1VNN2IwSkJRMG83ZDBKQlEwTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhqUVVGakxFTkJRVU03ZDBKQlEzUkRMRmxCUVZrc1EwRkJReXhMUVVGTE96UkNRVU5xUWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03Y1VKQlEyeEZPMjlDUVVORUxFMUJRVTA3YVVKQlEwNDdZVUZEUkR0VFFVTkVPMHRCUTBRN1NVRkZSQ3hKUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZQTzFGQlFVVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6czdVVUZEZUVRc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6ZENMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwidGltZUVsYXBzZWQiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImRldGFpbHMiLCJzdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJsZW5ndGgiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJ0b1VwcGVyQ2FzZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtIiwic2VhcmNoIiwidXNlcm5hbWUiLCJjaGlsZE5vZGVzIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;