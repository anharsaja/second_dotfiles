var __webpack_exports__={};const presence=new Presence({clientId:"952575137180442626"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/PHP.net/assets/logo.png",startTimestamp:browsingTimestamp},a=document.location.pathname.split("/");switch(a[1]){case"":e.details="Browsing the main page...";break;case"downloads":case"downloads.php":e.details="Browsing the download section";break;case"docs.php":e.details="Browsing the documentation";break;case"download-docs.php":e.details="Downloading the documentation";break;case"download-logos.php":e.details="Viewing the official logos";break;case"manual-lookup.php":e.details="Searching the documentation";break;case"manual":{e.details="Viewing the documentation: ";const t=document.title.replaceAll("PHP: ","").replaceAll(" - Manual","");if(e.buttons=[{label:"Open Documentation",url:document.location.href}],a[3].includes("function."))e.state=`Function: ${t}`,e.buttons=[{label:"View Function",url:document.location.href}];else if(a[3].includes("language.")){const s=a[3].split(".")[1];e.state=`${s.charAt(0).toUpperCase()+s.slice(1)}: ${t}`}else e.state=t;break}case"releases":a[2]?(e.details="Viewing an release version:",e.state=`PHP v${a[2]}`):e.details="Viewing the releases";break;default:e.details="Browsing the website"}a[1].toLowerCase().includes("changelog")&&(e.details="Reading the changelogs"),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWMsS0FDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSwrREFDZkMsZUFBZ0JSLG1CQUNqQlMsRUFBUUMsU0FBU0MsU0FBU0MsU0FBU0MsTUFBTSxLQUM1QyxPQUFRSixFQUFNLElBQ1YsSUFBSyxHQUNESCxFQUFhUSxRQUFVLDRCQUN2QixNQUNKLElBQUssWUFDTCxJQUFLLGdCQUNEUixFQUFhUSxRQUFVLGdDQUN2QixNQUNKLElBQUssV0FDRFIsRUFBYVEsUUFBVSw2QkFDdkIsTUFDSixJQUFLLG9CQUNEUixFQUFhUSxRQUFVLGdDQUN2QixNQUNKLElBQUsscUJBQ0RSLEVBQWFRLFFBQVUsNkJBQ3ZCLE1BQ0osSUFBSyxvQkFDRFIsRUFBYVEsUUFBVSw4QkFDdkIsTUFDSixJQUFLLFNBQVUsQ0FDWFIsRUFBYVEsUUFBVSw4QkFDdkIsTUFBTUMsRUFBY0wsU0FBU00sTUFDeEJDLFdBQVcsUUFBUyxJQUNwQkEsV0FBVyxZQUFhLElBSTdCLEdBSEFYLEVBQWFZLFFBQVUsQ0FDbkIsQ0FBRUMsTUFBTyxxQkFBc0JDLElBQUtWLFNBQVNDLFNBQVNVLE9BRXREWixFQUFNLEdBQUdhLFNBQVMsYUFDbEJoQixFQUFhaUIsTUFBUSxhQUFhUixJQUNsQ1QsRUFBYVksUUFBVSxDQUNuQixDQUFFQyxNQUFPLGdCQUFpQkMsSUFBS1YsU0FBU0MsU0FBU1UsWUFHcEQsR0FBSVosRUFBTSxHQUFHYSxTQUFTLGFBQWMsQ0FDckMsTUFBTUUsRUFBSWYsRUFBTSxHQUFHSSxNQUFNLEtBQUssR0FDOUJQLEVBQWFpQixNQUFRLEdBQUdDLEVBQUVDLE9BQU8sR0FBR0MsY0FBZ0JGLEVBQUVHLE1BQU0sT0FBT1osR0FDdkUsTUFFSVQsRUFBYWlCLE1BQVFSLEVBQ3pCLEtBQ0osQ0FDQSxJQUFLLFdBQ0dOLEVBQU0sSUFDTkgsRUFBYVEsUUFBVSw4QkFDdkJSLEVBQWFpQixNQUFRLFFBQVFkLEVBQU0sTUFHbkNILEVBQWFRLFFBQVUsdUJBQzNCLE1BQ0osUUFDSVIsRUFBYVEsUUFBVSx1QkFFM0JMLEVBQU0sR0FBR21CLGNBQWNOLFNBQVMsZUFDaENoQixFQUFhUSxRQUFVLDBCQUMzQmpCLFNBQVNnQyxZQUFZdkIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI5NTI1NzUxMzcxODA0NDI2MjZcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9QL1BIUC5uZXQvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCByb3V0ZSA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICBzd2l0Y2ggKHJvdXRlWzFdKSB7XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0aGUgbWFpbiBwYWdlLi4uXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRvd25sb2Fkc1wiOlxuICAgICAgICBjYXNlIFwiZG93bmxvYWRzLnBocFwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRoZSBkb3dubG9hZCBzZWN0aW9uXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRvY3MucGhwXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhlIGRvY3VtZW50YXRpb25cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZG93bmxvYWQtZG9jcy5waHBcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJEb3dubG9hZGluZyB0aGUgZG9jdW1lbnRhdGlvblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkb3dubG9hZC1sb2dvcy5waHBcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBvZmZpY2lhbCBsb2dvc1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtYW51YWwtbG9va3VwLnBocFwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyB0aGUgZG9jdW1lbnRhdGlvblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtYW51YWxcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIGRvY3VtZW50YXRpb246IFwiO1xuICAgICAgICAgICAgY29uc3QgbWFudWFsVGl0bGUgPSBkb2N1bWVudC50aXRsZVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlQWxsKFwiUEhQOiBcIiwgXCJcIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZUFsbChcIiAtIE1hbnVhbFwiLCBcIlwiKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiT3BlbiBEb2N1bWVudGF0aW9uXCIsIHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZiB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVszXS5pbmNsdWRlcyhcImZ1bmN0aW9uLlwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBGdW5jdGlvbjogJHttYW51YWxUaXRsZX1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIlZpZXcgRnVuY3Rpb25cIiwgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJvdXRlWzNdLmluY2x1ZGVzKFwibGFuZ3VhZ2UuXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHJvdXRlWzNdLnNwbGl0KFwiLlwiKVsxXTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYy5zbGljZSgxKX06ICR7bWFudWFsVGl0bGV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBtYW51YWxUaXRsZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJyZWxlYXNlc1wiOlxuICAgICAgICAgICAgaWYgKHJvdXRlWzJdKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYW4gcmVsZWFzZSB2ZXJzaW9uOlwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBQSFAgdiR7cm91dGVbMl19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgcmVsZWFzZXNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRoZSB3ZWJzaXRlXCI7XG4gICAgfVxuICAgIGlmIChyb3V0ZVsxXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiY2hhbmdlbG9nXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgY2hhbmdlbG9nc1wiO1xuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4SFFVRkhMRVZCUVVVN1NVRkRPVUlzVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJwRExHRkJRV0VzUlVGRFdpdzRSRUZCT0VRN1VVRkRMMFFzWTBGQll5eEZRVUZGTEdsQ1FVRnBRanRMUVVOcVF5eEZRVU5FTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkZMME1zVVVGQlVTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1VVRkRha0lzUzBGQlN5eEZRVUZGTzFsQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd5UWtGQk1rSXNRMEZCUXp0WlFVTnVSQ3hOUVVGTk8xRkJRMUFzUzBGQlN5eFhRVUZYTEVOQlFVTTdVVUZEYWtJc1MwRkJTeXhsUVVGbE8xbEJRMjVDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc0swSkJRU3RDTEVOQlFVTTdXVUZEZGtRc1RVRkJUVHRSUVVOUUxFdEJRVXNzVlVGQlZUdFpRVU5rTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc05FSkJRVFJDTEVOQlFVTTdXVUZEY0VRc1RVRkJUVHRSUVVOUUxFdEJRVXNzYlVKQlFXMUNPMWxCUTNaQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NLMEpCUVN0Q0xFTkJRVU03V1VGRGRrUXNUVUZCVFR0UlFVTlFMRXRCUVVzc2IwSkJRVzlDTzFsQlEzaENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTkVKQlFUUkNMRU5CUVVNN1dVRkRjRVFzVFVGQlRUdFJRVU5RTEV0QlFVc3NiVUpCUVcxQ08xbEJRM1pDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc05rSkJRVFpDTEVOQlFVTTdXVUZEY2tRc1RVRkJUVHRSUVVOUUxFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEWkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEWkNRVUUyUWl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxPMmxDUVVOb1F5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVc1EwRkJRenRwUWtGRGRrSXNWVUZCVlN4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU01UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8yZENRVU4wUWl4RlFVRkZMRXRCUVVzc1JVRkJSU3h2UWtGQmIwSXNSVUZCUlN4SFFVRkhMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVTdZVUZETlVRc1EwRkJRenRaUVVOR0xFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJUdG5Ra0ZEYmtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGhRVUZoTEZkQlFWY3NSVUZCUlN4RFFVRkRPMmRDUVVOb1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFpeEZRVUZGTEV0QlFVc3NSVUZCUlN4bFFVRmxMRVZCUVVVc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZPMmxDUVVOMlJDeERRVUZETzJGQlEwWTdhVUpCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8yZENRVU14UXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnFReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlEzQkNMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlEzUkRMRXRCUVVzc1YwRkJWeXhGUVVGRkxFTkJRVU03WVVGRGJrSTdPMmRDUVVGTkxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NWMEZCVnl4RFFVRkRPMWxCUTNoRExFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NWVUZCVlR0WlFVTmtMRWxCUVVrc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzJkQ1FVTmlMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTmtKQlFUWkNMRU5CUVVNN1owSkJRM0pFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0aFFVTjRRenM3WjBKQlFVMHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0WlFVTnlSQ3hOUVVGTk8xRkJRMUE3V1VGRFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSE5DUVVGelFpeERRVUZETzB0QlF5OURPMGxCUlVRc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU12UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMGxCUldwRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1FVRkRjRU1zUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicm91dGUiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImRldGFpbHMiLCJtYW51YWxUaXRsZSIsInRpdGxlIiwicmVwbGFjZUFsbCIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsImhyZWYiLCJpbmNsdWRlcyIsInN0YXRlIiwiYyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;