var __webpack_exports__={};const presence=new Presence({clientId:"839539095393796116"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async function(){const e=await presence.getSetting("timeElapsed"),t=await presence.getSetting("showButtons"),s=await presence.getSetting("logo"),a=await presence.getSetting("privacy"),i=window.location.pathname.split("/"),n={largeImageKey:["https://cdn.rcd.gg/PreMiD/websites/C/CNN/assets/0.png","https://cdn.rcd.gg/PreMiD/websites/C/CNN/assets/1.png"][s]||"https://cdn.rcd.gg/PreMiD/websites/C/CNN/assets/0.png"};if(e&&!a&&(n.startTimestamp=browsingTimestamp),i[1])if("world"===i[1]||"us"===i[1]||"politics"===i[1]||"business"===i[1]||"health"===i[1]||"entertainment"===i[1]||"style"===i[1]||"travel"===i[1]||"sport"===i[1]||"sport"===i[1]&&document.querySelector("a.sc-fjdhpX.sc-chPdSV.ewmEKt")||"videos"===i[1]||"africa"===i[1]||"americas"===i[1]||"asia"===i[1]||"australia"===i[1]||"china"===i[1]||"europe"===i[1]||"india"===i[1]||"middle-east"===i[1]||"uk"===i[1])n.details=a?"Category":"Category:",a||(n.state=document.querySelector("h1.metadata-header__title")?.textContent||document.querySelector(".Text-sc-1amvtpj-0-span.jKFEoX")?.textContent.replace("Follow CNN ","")||"Not found"),t&&!a&&(n.buttons=[{label:"View Category",url:window.location.href}]);else if(i[1]>="1900"&&parseInt(i[1])<=(new Date).getFullYear()&&i[2]>="01"&&i[2]<="12"&&i[3]>="01"&&i[3]<="31")n.details=a?"Article":"Article:",a||(n.state=document.querySelector("h1.pg-headline")?.textContent||"Not found"),t&&!a&&(n.buttons=[{label:"View Article",url:window.location.href}]);else if("profiles"===i[1])n.details=a?"Profile":"Profile:",a||(n.state=document.querySelector("div.cd__profile-name")?.textContent||"Not found"),t&&!a&&(n.buttons=[{label:"View Profile",url:window.location.href}]);else if("specials"===i[1])i[2]?(i[3]&&"us"!==i[2]?(n.details=a?"Special":"Special:",a||(n.state=document.querySelector("h1.pg-headline")?.textContent||document.querySelector("li>a.geyBat")?.textContent||"Not found")):(n.details=a?"Special":"Special:",a||(n.state=document.querySelector("a.sc-fjdhpX.sc-chPdSV.ewmEKt")?.textContent||"Not found")),t&&!a&&(n.buttons=[{label:"View Special",url:window.location.href}])):n.details="Specials";else if("election"===i[1]&&i[2]>="1900")if(n.details=`Election ${i[2]}`,"president"===i[4]){const e=document.querySelectorAll("div.bop-main-scorestyles__BOPCount-sc-17mbuqb-2"),t=document.querySelectorAll("div.bop-main-scorestyles__BOPName-sc-17mbuqb-3");n.state=`${t[1]?.textContent}: ${e[1]?.textContent} - ${t[2]?.textContent}: ${e[2]?.textContent}`}else"state"===i[4]?(n.state=document.querySelector("h1.pagestyles__DesktopH1-sc-7kqwl2-74")?.textContent,t&&!a&&(n.buttons=[{label:"View Results",url:window.location.href}])):n.state="Other";else switch(i[1]){case"interactive":n.details="Interactive Article";break;case"account":n.details="Account","register"!==i[2]||a?"confirm"!==i[2]||a?"settings"!==i[2]||a||(n.state="Settings"):n.state="Confirming E-Mail":n.state="Register";break;case"newsletters":n.details="Browsing Newsletters";break;default:n.details="Other"}else n.details="Home";n.details?presence.setActivity(n):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixjQUFmQSxFQUFRLEdBQW9CLENBQzVCLE1BQU1vQixFQUFhWixTQUFTYSxpQkFBaUIsbURBQW9EQyxFQUFjZCxTQUFTYSxpQkFBaUIsa0RBQ3pJaEIsRUFBYU0sTUFBUSxHQUFHVyxFQUFZLElBQUlWLGdCQUFnQlEsRUFBVyxJQUFJUixpQkFBaUJVLEVBQVksSUFBSVYsZ0JBQWdCUSxFQUFXLElBQUlSLGFBQzNJLEtBQ3dCLFVBQWZaLEVBQVEsSUFDYkssRUFBYU0sTUFBUUgsU0FBU0MsY0FBYywwQ0FBMENHLFlBQ2xGZCxJQUF3QkEsSUFDeEJPLEVBQWFTLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxlQUNQQyxJQUFLZixPQUFPQyxTQUFTZSxTQU1qQ1osRUFBYU0sTUFBUSxhQUd6QixPQUFRWCxFQUFRLElBQ1osSUFBSyxjQUNESyxFQUFhSyxRQUFVLHNCQUN2QixNQUVKLElBQUssVUFDREwsRUFBYUssUUFBVSxVQUNKLGFBQWZWLEVBQVEsSUFBc0JGLEVBRVYsWUFBZkUsRUFBUSxJQUFxQkYsRUFFZCxhQUFmRSxFQUFRLElBQXNCRixJQUNuQ08sRUFBYU0sTUFBUSxZQUZyQk4sRUFBYU0sTUFBUSxvQkFGckJOLEVBQWFNLE1BQVEsV0FLekIsTUFFSixJQUFLLGNBQ0ROLEVBQWFLLFFBQVUsdUJBQ3ZCLE1BRUosUUFDSUwsRUFBYUssUUFBVSxhQXBKL0JMLEVBQWFLLFFBQVUsT0F1SnZCTCxFQUFhSyxRQUNidEIsU0FBU21DLFlBQVlsQixHQUVyQmpCLFNBQVNtQyxhQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI4Mzk1MzkwOTUzOTM3OTYxMTZcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZXR0aW5nID0ge1xuICAgICAgICB0aW1lRWxhcHNlZDogYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInRpbWVFbGFwc2VkXCIpLFxuICAgICAgICBzaG93QnV0dG9uczogYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInNob3dCdXR0b25zXCIpLFxuICAgICAgICBsb2dvOiBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibG9nb1wiKSxcbiAgICAgICAgcHJpdmFjeTogYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgfSwgdXJscGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIiksIHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogW1wiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NOTi9hc3NldHMvMC5wbmdcIiwgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ05OL2Fzc2V0cy8xLnBuZ1wiXVtzZXR0aW5nLmxvZ29dIHx8IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NOTi9hc3NldHMvMC5wbmdcIixcbiAgICB9O1xuICAgIGlmIChzZXR0aW5nLnRpbWVFbGFwc2VkICYmICFzZXR0aW5nLnByaXZhY3kpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgIGlmICghdXJscGF0aFsxXSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkhvbWVcIjtcbiAgICBlbHNlIGlmICh1cmxwYXRoWzFdID09PSBcIndvcmxkXCIgfHxcbiAgICAgICAgdXJscGF0aFsxXSA9PT0gXCJ1c1wiIHx8XG4gICAgICAgIHVybHBhdGhbMV0gPT09IFwicG9saXRpY3NcIiB8fFxuICAgICAgICB1cmxwYXRoWzFdID09PSBcImJ1c2luZXNzXCIgfHxcbiAgICAgICAgdXJscGF0aFsxXSA9PT0gXCJoZWFsdGhcIiB8fFxuICAgICAgICB1cmxwYXRoWzFdID09PSBcImVudGVydGFpbm1lbnRcIiB8fFxuICAgICAgICB1cmxwYXRoWzFdID09PSBcInN0eWxlXCIgfHxcbiAgICAgICAgdXJscGF0aFsxXSA9PT0gXCJ0cmF2ZWxcIiB8fFxuICAgICAgICB1cmxwYXRoWzFdID09PSBcInNwb3J0XCIgfHxcbiAgICAgICAgKHVybHBhdGhbMV0gPT09IFwic3BvcnRcIiAmJlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2MtZmpkaHBYLnNjLWNoUGRTVi5ld21FS3RcIikpIHx8XG4gICAgICAgIHVybHBhdGhbMV0gPT09IFwidmlkZW9zXCIgfHxcbiAgICAgICAgdXJscGF0aFsxXSA9PT0gXCJhZnJpY2FcIiB8fFxuICAgICAgICB1cmxwYXRoWzFdID09PSBcImFtZXJpY2FzXCIgfHxcbiAgICAgICAgdXJscGF0aFsxXSA9PT0gXCJhc2lhXCIgfHxcbiAgICAgICAgdXJscGF0aFsxXSA9PT0gXCJhdXN0cmFsaWFcIiB8fFxuICAgICAgICB1cmxwYXRoWzFdID09PSBcImNoaW5hXCIgfHxcbiAgICAgICAgdXJscGF0aFsxXSA9PT0gXCJldXJvcGVcIiB8fFxuICAgICAgICB1cmxwYXRoWzFdID09PSBcImluZGlhXCIgfHxcbiAgICAgICAgdXJscGF0aFsxXSA9PT0gXCJtaWRkbGUtZWFzdFwiIHx8XG4gICAgICAgIHVybHBhdGhbMV0gPT09IFwidWtcIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHNldHRpbmcucHJpdmFjeSA/IFwiQ2F0ZWdvcnlcIiA6IFwiQ2F0ZWdvcnk6XCI7XG4gICAgICAgIGlmICghc2V0dGluZy5wcml2YWN5KSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMS5tZXRhZGF0YS1oZWFkZXJfX3RpdGxlXCIpPy50ZXh0Q29udGVudCB8fFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuVGV4dC1zYy0xYW12dHBqLTAtc3Bhbi5qS0ZFb1hcIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8udGV4dENvbnRlbnQucmVwbGFjZShcIkZvbGxvdyBDTk4gXCIsIFwiXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgIFwiTm90IGZvdW5kXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmcuc2hvd0J1dHRvbnMgJiYgIXNldHRpbmcucHJpdmFjeSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IENhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodXJscGF0aFsxXSA+PSBcIjE5MDBcIiAmJlxuICAgICAgICBwYXJzZUludCh1cmxwYXRoWzFdKSA8PSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgdXJscGF0aFsyXSA+PSBcIjAxXCIgJiZcbiAgICAgICAgdXJscGF0aFsyXSA8PSBcIjEyXCIgJiZcbiAgICAgICAgdXJscGF0aFszXSA+PSBcIjAxXCIgJiZcbiAgICAgICAgdXJscGF0aFszXSA8PSBcIjMxXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzZXR0aW5nLnByaXZhY3kgPyBcIkFydGljbGVcIiA6IFwiQXJ0aWNsZTpcIjtcbiAgICAgICAgaWYgKCFzZXR0aW5nLnByaXZhY3kpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxLnBnLWhlYWRsaW5lXCIpPy50ZXh0Q29udGVudCB8fCBcIk5vdCBmb3VuZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5nLnNob3dCdXR0b25zICYmICFzZXR0aW5nLnByaXZhY3kpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBBcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodXJscGF0aFsxXSA9PT0gXCJwcm9maWxlc1wiKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc2V0dGluZy5wcml2YWN5ID8gXCJQcm9maWxlXCIgOiBcIlByb2ZpbGU6XCI7XG4gICAgICAgIGlmICghc2V0dGluZy5wcml2YWN5KSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2RfX3Byb2ZpbGUtbmFtZVwiKT8udGV4dENvbnRlbnQgfHxcbiAgICAgICAgICAgICAgICAgICAgXCJOb3QgZm91bmRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZy5zaG93QnV0dG9ucyAmJiAhc2V0dGluZy5wcml2YWN5KSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgUHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHVybHBhdGhbMV0gPT09IFwic3BlY2lhbHNcIikge1xuICAgICAgICBpZiAodXJscGF0aFsyXSkge1xuICAgICAgICAgICAgaWYgKHVybHBhdGhbM10gJiYgdXJscGF0aFsyXSAhPT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzZXR0aW5nLnByaXZhY3kgPyBcIlNwZWNpYWxcIiA6IFwiU3BlY2lhbDpcIjtcbiAgICAgICAgICAgICAgICBpZiAoIXNldHRpbmcucHJpdmFjeSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxLnBnLWhlYWRsaW5lXCIpPy50ZXh0Q29udGVudCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaT5hLmdleUJhdFwiKT8udGV4dENvbnRlbnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5vdCBmb3VuZFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc2V0dGluZy5wcml2YWN5ID8gXCJTcGVjaWFsXCIgOiBcIlNwZWNpYWw6XCI7XG4gICAgICAgICAgICAgICAgaWYgKCFzZXR0aW5nLnByaXZhY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNjLWZqZGhwWC5zYy1jaFBkU1YuZXdtRUt0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy50ZXh0Q29udGVudCB8fCBcIk5vdCBmb3VuZFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXR0aW5nLnNob3dCdXR0b25zICYmICFzZXR0aW5nLnByaXZhY3kpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBTcGVjaWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNwZWNpYWxzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVybHBhdGhbMV0gPT09IFwiZWxlY3Rpb25cIiAmJiB1cmxwYXRoWzJdID49IFwiMTkwMFwiKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYEVsZWN0aW9uICR7dXJscGF0aFsyXX1gO1xuICAgICAgICBpZiAodXJscGF0aFs0XSA9PT0gXCJwcmVzaWRlbnRcIikge1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuYm9wLW1haW4tc2NvcmVzdHlsZXNfX0JPUENvdW50LXNjLTE3bWJ1cWItMlwiKSwgc2NvcmVTdHlsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmJvcC1tYWluLXNjb3Jlc3R5bGVzX19CT1BOYW1lLXNjLTE3bWJ1cWItM1wiKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3Njb3JlU3R5bGUyWzFdPy50ZXh0Q29udGVudH06ICR7c2NvcmVTdHlsZVsxXT8udGV4dENvbnRlbnR9IC0gJHtzY29yZVN0eWxlMlsyXT8udGV4dENvbnRlbnR9OiAke3Njb3JlU3R5bGVbMl0/LnRleHRDb250ZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXJscGF0aFs0XSA9PT0gXCJzdGF0ZVwiKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEucGFnZXN0eWxlc19fRGVza3RvcEgxLXNjLTdrcXdsMi03NFwiKT8udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoc2V0dGluZy5zaG93QnV0dG9ucyAmJiAhc2V0dGluZy5wcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgUmVzdWx0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiT3RoZXJcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAodXJscGF0aFsxXSkge1xuICAgICAgICAgICAgY2FzZSBcImludGVyYWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSW50ZXJhY3RpdmUgQXJ0aWNsZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImFjY291bnRcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJBY2NvdW50XCI7XG4gICAgICAgICAgICAgICAgaWYgKHVybHBhdGhbMl0gPT09IFwicmVnaXN0ZXJcIiAmJiAhc2V0dGluZy5wcml2YWN5KVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlJlZ2lzdGVyXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXJscGF0aFsyXSA9PT0gXCJjb25maXJtXCIgJiYgIXNldHRpbmcucHJpdmFjeSlcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDb25maXJtaW5nIEUtTWFpbFwiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVybHBhdGhbMl0gPT09IFwic2V0dGluZ3NcIiAmJiAhc2V0dGluZy5wcml2YWN5KVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlNldHRpbmdzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwibmV3c2xldHRlcnNcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBOZXdzbGV0dGVyc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiT3RoZXJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVTl1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTzBsQlF6bENMRTFCUVUwc1QwRkJUeXhIUVVGSE8xRkJRMlFzVjBGQlZ5eEZRVUZGTEUxQlFVMHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hoUVVGaExFTkJRVU03VVVGRE9VUXNWMEZCVnl4RlFVRkZMRTFCUVUwc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeGhRVUZoTEVOQlFVTTdVVUZET1VRc1NVRkJTU3hGUVVGRkxFMUJRVTBzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVVN4TlFVRk5MRU5CUVVNN1VVRkRPVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hUUVVGVExFTkJRVU03UzBGRGRFUXNSVUZEUkN4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVNM1F5eFpRVUZaTEVkQlFXbENPMUZCUXpWQ0xHRkJRV0VzUlVGRFdpeHJTRUZCWjBNc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETERKRVFVRmxPMHRCUXpsRUxFTkJRVU03U1VGRlNDeEpRVUZKTEU5QlFVOHNRMEZCUXl4WFFVRlhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR6dFJRVU14UXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMGxCUldwRUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVMEZETVVNc1NVRkRTaXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NUMEZCVHp0UlFVTjBRaXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1R0UlFVTnVRaXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NWVUZCVlR0UlFVTjZRaXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NWVUZCVlR0UlFVTjZRaXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVVUZCVVR0UlFVTjJRaXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NaVUZCWlR0UlFVTTVRaXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NUMEZCVHp0UlFVTjBRaXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVVUZCVVR0UlFVTjJRaXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NUMEZCVHp0UlFVTjBRaXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4UFFVRlBPMWxCUTNSQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNPRUpCUVRoQ0xFTkJRVU1zUTBGQlF6dFJRVU40UkN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVVVGQlVUdFJRVU4yUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVVVGQlVUdFJRVU4yUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVlVGQlZUdFJRVU42UWl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVFVGQlRUdFJRVU55UWl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVjBGQlZ6dFJRVU14UWl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVDBGQlR6dFJRVU4wUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVVVGQlVUdFJRVU4yUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVDBGQlR6dFJRVU4wUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzWVVGQllUdFJRVU0xUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVU5zUWp0UlFVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEYkVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZEY2tJc1dVRkJXU3hEUVVGRExFdEJRVXM3WjBKQlEycENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zTWtKQlFUSkNMRU5CUVVNc1JVRkJSU3hYUVVGWE8yOUNRVU5vUlN4UlFVRlJPM2xDUVVOT0xHRkJRV0VzUTBGQlF5eG5RMEZCWjBNc1EwRkJRenQzUWtGRGFFUXNSVUZCUlN4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUlVGQlJTeEZRVUZGTEVOQlFVTTdiMEpCUTNwRExGZEJRVmNzUTBGQlF6dFRRVU5pTzFGQlJVUXNTVUZCU1N4UFFVRlBMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTTFReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzJkQ1FVTjBRanR2UWtGRFF5eExRVUZMTEVWQlFVVXNaVUZCWlR0dlFrRkRkRUlzUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTVHRwUWtGRGVrSTdZVUZEUkN4RFFVRkRPMU5CUTBZN1MwRkRSRHRUUVVGTkxFbEJRMDRzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRTFCUVUwN1VVRkRjRUlzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTXNWMEZCVnl4RlFVRkZPMUZCUTJoRUxFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpPMUZCUTJ4Q0xFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpPMUZCUTJ4Q0xFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpPMUZCUTJ4Q0xFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUTJwQ08xRkJRMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJRenRSUVVOb1JTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOeVFpeFpRVUZaTEVOQlFVTXNTMEZCU3p0blFrRkRha0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEZRVUZGTEZkQlFWY3NTVUZCU1N4WFFVRlhMRU5CUVVNN1UwRkRkRVU3VVVGRlJDeEpRVUZKTEU5QlFVOHNRMEZCUXl4WFFVRlhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlF6VkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3WjBKQlEzUkNPMjlDUVVORExFdEJRVXNzUlVGQlJTeGpRVUZqTzI5Q1FVTnlRaXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpPMmxDUVVONlFqdGhRVU5FTEVOQlFVTTdVMEZEUmp0TFFVTkVPMU5CUVUwc1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMUZCUTNKRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNN1VVRkRhRVVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRja0lzV1VGQldTeERRVUZETEV0QlFVczdaMEpCUTJwQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zUlVGQlJTeFhRVUZYTzI5Q1FVTXpSQ3hYUVVGWExFTkJRVU03VTBGRFlqdFJRVVZFTEVsQlFVa3NUMEZCVHl4RFFVRkRMRmRCUVZjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZETlVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dG5Ra0ZEZEVJN2IwSkJRME1zUzBGQlN5eEZRVUZGTEdOQlFXTTdiMEpCUTNKQ0xFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrN2FVSkJRM3BDTzJGQlEwUXNRMEZCUXp0VFFVTkdPMHRCUTBRN1UwRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VlFVRlZMRVZCUVVVN1VVRkRja01zU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRaaXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTzJkQ1FVTjBReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRPMmRDUVVOb1JTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSVHR2UWtGRGNrSXNXVUZCV1N4RFFVRkRMRXRCUVVzN2QwSkJRMnBDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNSVUZCUlN4WFFVRlhPelJDUVVOeVJDeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRkxGZEJRVmM3TkVKQlEyeEVMRmRCUVZjc1EwRkJRenRwUWtGRFlqdGhRVU5FTzJsQ1FVRk5PMmRDUVVOT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNN1owSkJRMmhGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRk8yOUNRVU55UWl4WlFVRlpMRU5CUVVNc1MwRkJTenQzUWtGRGFrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXc0UWtGQk9FSXNRMEZCUXpzMFFrRkRja1FzUlVGQlJTeFhRVUZYTEVsQlFVa3NWMEZCVnl4RFFVRkRPMmxDUVVNdlFqdGhRVU5FTzFsQlJVUXNTVUZCU1N4UFFVRlBMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlR0blFrRkROVU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0dlFrRkRkRUk3ZDBKQlEwTXNTMEZCU3l4RlFVRkZMR05CUVdNN2QwSkJRM0pDTEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWs3Y1VKQlEzcENPMmxDUVVORUxFTkJRVU03WVVGRFJqdFRRVU5FT3p0WlFVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVlVGQlZTeERRVUZETzB0QlEzcERPMU5CUVUwc1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NWVUZCVlN4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeE5RVUZOTEVWQlFVVTdVVUZETjBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFpRVUZaTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJSV2hFTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGZEJRVmNzUlVGQlJUdFpRVU12UWl4TlFVRk5MRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUXpGRExHbEVRVUZwUkN4RFFVTnFSQ3hGUVVORUxGZEJRVmNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRM1JETEdkRVFVRm5SQ3hEUVVOb1JDeERRVUZETzFsQlJVZ3NXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4WFFVRlhMRXRCUVVzc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZkQlFWY3NUVUZCVFN4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVjBGQlZ5eExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hYUVVGWExFVkJRVVVzUTBGQlF6dFRRVU55U2p0aFFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEU5QlFVOHNSVUZCUlR0WlFVTnNReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpGRExIVkRRVUYxUXl4RFFVTjJReXhGUVVGRkxGZEJRVmNzUTBGQlF6dFpRVVZtTEVsQlFVa3NUMEZCVHl4RFFVRkRMRmRCUVZjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUXpWRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdiMEpCUTNSQ08zZENRVU5ETEV0QlFVc3NSVUZCUlN4alFVRmpPM2RDUVVOeVFpeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSk8zRkNRVU42UWp0cFFrRkRSQ3hEUVVGRE8yRkJRMFk3VTBGRFJEczdXVUZCVFN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF6dExRVU53UXp0VFFVRk5PMUZCUTA0c1VVRkJVU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdXVUZEYmtJc1MwRkJTeXhoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenRuUWtGRE4wTXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6dG5Ra0ZEWml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGTkJRVk1zUTBGQlF6dG5Ra0ZEYWtNc1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NWVUZCVlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVTg3YjBKQlEyaEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVlVGQlZTeERRVUZETzNGQ1FVTTFRaXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR6dHZRa0ZEY0VRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenR4UWtGRGNrTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVlVGQlZTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4N2IwSkJRM0pFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1ZVRkJWU3hEUVVGRE8yZENRVVZxUXl4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExHRkJRV0VzUTBGQlF5eERRVUZETzJkQ1FVTnVRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8yZENRVU01UXl4TlFVRk5PMkZCUTA0N1dVRkRSRHRuUWtGRFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRenRUUVVOb1F6dExRVU5FTzBsQlJVUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwic2V0dGluZyIsImdldFNldHRpbmciLCJ1cmxwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGV0YWlscyIsInN0YXRlIiwidGV4dENvbnRlbnQiLCJyZXBsYWNlIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiaHJlZiIsInBhcnNlSW50IiwiZ2V0RnVsbFllYXIiLCJzY29yZVN0eWxlIiwicXVlcnlTZWxlY3RvckFsbCIsInNjb3JlU3R5bGUyIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;