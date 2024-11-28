var __webpack_exports__={};const presence=new Presence({clientId:"776479405009666098"}),browsingTimestamp=Math.floor(Date.now()/1e3);class VideoData{currentTime;duration;paused}let videoData=null;function getByXpath(t,e){try{return(e||(t=>t))(document.evaluate(t,document,null,XPathResult.ANY_TYPE,null).iterateNext())}catch(t){return null}}presence.on("iFrameData",(t=>{videoData=t})),presence.on("UpdateData",(()=>{const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Proxer/assets/logo.png",details:"Idle",state:"Browsing Proxer.me"},{pathname:e}=document.location;if(e.startsWith("/watch")){const e=getByXpath("//*[@id='wContainer']//*[@class='wEp']",(t=>t.textContent)),a=getByXpath("//*[@id='wContainer']//*[@class='wEp']",(t=>t.nextSibling.textContent.substr(1).trim())),s=getByXpath("//*[@id='wContainer']//*[@class='wLanguage']",(t=>t.textContent));videoData?(t.type=3,videoData.paused?t.details="Paused":(t.details="Watching",[t.startTimestamp,t.endTimestamp]=presence.getTimestamps(videoData.currentTime,videoData.duration))):getByXpath("//*[@id='wContainer']//*[@class='wStream']/div/@style",(t=>t.textContent.includes("/images/misc/streamfehlt.png")))?t.details="Awaiting":(t.details="Watching",t.startTimestamp=browsingTimestamp),t.details+=` ${getByXpath("//*[@id='wContainer']//*[@class='wName']",(t=>t.textContent))||"Unknown Anime"}`,t.state="",e&&(t.state+=e,a&&(t.state+=`/${a}`),s&&(t.state+=` (${s})`))}else e.startsWith("/info")?t.details=`Checking out ${document.title.replace(/ - Proxer\.Me$/,"")}`:e.startsWith("/anime")||e.startsWith("/season")?t.details="Checking out Anime":e.startsWith("/chat")?t.details="Chatting":e.startsWith("/forum")?t.details="Checking the forum":e.startsWith("/gallery")?t.details="Checking the gallery":e.startsWith("/news")&&(t.details="Checking the news");t.details?presence.setActivity(t):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELE1BQU1DLFVBQ0ZDLFlBQ0FDLFNBQ0FDLE9BRUosSUFBSUMsVUFBWSxLQXdEaEIsU0FBU0MsV0FBV0MsRUFBT0MsR0FDdkIsSUFDSSxPQUFRQSxHQUFhLENBQUNDLEdBQUtBLElBQUlDLFNBQzFCQyxTQUFTSixFQUFPRyxTQUFVLEtBQU1FLFlBQVlDLFNBQVUsTUFDdERDLGNBSVQsQ0FGQSxNQUFPTCxHQUNILE9BQU8sSUFDWCxDQUNKLENBaEVBaEIsU0FBU3NCLEdBQUcsY0FBZUMsSUFDdkJYLFVBQVlXLENBQUksSUFFcEJ2QixTQUFTc0IsR0FBRyxjQUFjLEtBQ3RCLE1BQU1FLEVBQWUsQ0FDakJDLGNBQWUsOERBQ2ZDLFFBQVMsT0FDVEMsTUFBTyx1QkFDUixTQUFFQyxHQUFhWCxTQUFTWSxTQUMzQixHQUFJRCxFQUFTRSxXQUFXLFVBQVcsQ0FDL0IsTUFBTUMsRUFBS2xCLFdBQVcsMENBQTBDRyxHQUFLQSxFQUFFZ0IsY0FBY0MsRUFBUXBCLFdBQVcsMENBQTBDRyxHQUFLQSxFQUFFa0IsWUFBWUYsWUFBWUcsT0FBTyxHQUFHQyxTQUFTQyxFQUFPeEIsV0FBVyxnREFBZ0RHLEdBQUtBLEVBQUVnQixjQUN6UXBCLFdBQ0FZLEVBQWFjLEtBQU8sRUFDZjFCLFVBQVVELE9BTVhhLEVBQWFFLFFBQVUsVUFMdkJGLEVBQWFFLFFBQVUsWUFDdEJGLEVBQWFlLGVBQWdCZixFQUFhZ0IsY0FDdkN4QyxTQUFTeUMsY0FBYzdCLFVBQVVILFlBQWFHLFVBQVVGLFlBSzNERyxXQUFXLHlEQUF5REcsR0FBS0EsRUFBRWdCLFlBQVlVLFNBQVMsa0NBQ3JHbEIsRUFBYUUsUUFBVSxZQUV2QkYsRUFBYUUsUUFBVSxXQUN2QkYsRUFBYWUsZUFBaUJwQyxtQkFFbENxQixFQUFhRSxTQUFXLElBQUliLFdBQVcsNENBQTRDRyxHQUFLQSxFQUFFZ0IsZUFBZ0Isa0JBQzFHUixFQUFhRyxNQUFRLEdBQ2pCSSxJQUNBUCxFQUFhRyxPQUFTSSxFQUNsQkUsSUFDQVQsRUFBYUcsT0FBUyxJQUFJTSxLQUMxQkksSUFDQWIsRUFBYUcsT0FBUyxLQUFLVSxNQUV2QyxNQUNTVCxFQUFTRSxXQUFXLFNBQ3pCTixFQUFhRSxRQUFVLGdCQUFnQlQsU0FBUzBCLE1BQU1DLFFBQVEsaUJBQWtCLE1BRTNFaEIsRUFBU0UsV0FBVyxXQUFhRixFQUFTRSxXQUFXLFdBQzFETixFQUFhRSxRQUFVLHFCQUNsQkUsRUFBU0UsV0FBVyxTQUN6Qk4sRUFBYUUsUUFBVSxXQUNsQkUsRUFBU0UsV0FBVyxVQUN6Qk4sRUFBYUUsUUFBVSxxQkFDbEJFLEVBQVNFLFdBQVcsWUFDekJOLEVBQWFFLFFBQVUsdUJBQ2xCRSxFQUFTRSxXQUFXLFdBQ3pCTixFQUFhRSxRQUFVLHFCQUN2QkYsRUFBYUUsUUFDYjFCLFNBQVM2QyxZQUFZckIsR0FFckJ4QixTQUFTNkMsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI3NzY0Nzk0MDUwMDk2NjYwOThcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuY2xhc3MgVmlkZW9EYXRhIHtcbiAgICBjdXJyZW50VGltZTtcbiAgICBkdXJhdGlvbjtcbiAgICBwYXVzZWQ7XG59XG5sZXQgdmlkZW9EYXRhID0gbnVsbDtcbnByZXNlbmNlLm9uKFwiaUZyYW1lRGF0YVwiLCAoZGF0YSkgPT4ge1xuICAgIHZpZGVvRGF0YSA9IGRhdGE7XG59KTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUC9Qcm94ZXIvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIGRldGFpbHM6IFwiSWRsZVwiLFxuICAgICAgICBzdGF0ZTogXCJCcm93c2luZyBQcm94ZXIubWVcIixcbiAgICB9LCB7IHBhdGhuYW1lIH0gPSBkb2N1bWVudC5sb2NhdGlvbjtcbiAgICBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi93YXRjaFwiKSkge1xuICAgICAgICBjb25zdCBlcCA9IGdldEJ5WHBhdGgoXCIvLypbQGlkPSd3Q29udGFpbmVyJ10vLypbQGNsYXNzPSd3RXAnXVwiLCBlID0+IGUudGV4dENvbnRlbnQpLCBtYXhFcCA9IGdldEJ5WHBhdGgoXCIvLypbQGlkPSd3Q29udGFpbmVyJ10vLypbQGNsYXNzPSd3RXAnXVwiLCBlID0+IGUubmV4dFNpYmxpbmcudGV4dENvbnRlbnQuc3Vic3RyKDEpLnRyaW0oKSksIGxhbmcgPSBnZXRCeVhwYXRoKFwiLy8qW0BpZD0nd0NvbnRhaW5lciddLy8qW0BjbGFzcz0nd0xhbmd1YWdlJ11cIiwgZSA9PiBlLnRleHRDb250ZW50KTtcbiAgICAgICAgaWYgKHZpZGVvRGF0YSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnR5cGUgPSAzO1xuICAgICAgICAgICAgaWYgKCF2aWRlb0RhdGEucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIldhdGNoaW5nXCI7XG4gICAgICAgICAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKHZpZGVvRGF0YS5jdXJyZW50VGltZSwgdmlkZW9EYXRhLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUGF1c2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ2V0QnlYcGF0aChcIi8vKltAaWQ9J3dDb250YWluZXInXS8vKltAY2xhc3M9J3dTdHJlYW0nXS9kaXYvQHN0eWxlXCIsIGUgPT4gZS50ZXh0Q29udGVudC5pbmNsdWRlcyhcIi9pbWFnZXMvbWlzYy9zdHJlYW1mZWhsdC5wbmdcIikpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkF3YWl0aW5nXCI7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIldhdGNoaW5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyArPSBgICR7Z2V0QnlYcGF0aChcIi8vKltAaWQ9J3dDb250YWluZXInXS8vKltAY2xhc3M9J3dOYW1lJ11cIiwgZSA9PiBlLnRleHRDb250ZW50KSB8fCBcIlVua25vd24gQW5pbWVcIn1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlwiO1xuICAgICAgICBpZiAoZXApIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSArPSBlcDtcbiAgICAgICAgICAgIGlmIChtYXhFcClcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgKz0gYC8ke21heEVwfWA7XG4gICAgICAgICAgICBpZiAobGFuZylcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgKz0gYCAoJHtsYW5nfSlgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvaW5mb1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBDaGVja2luZyBvdXQgJHtkb2N1bWVudC50aXRsZS5yZXBsYWNlKC8gLSBQcm94ZXJcXC5NZSQvLCBcIlwiKX1gO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2FuaW1lXCIpIHx8IHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvc2Vhc29uXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ2hlY2tpbmcgb3V0IEFuaW1lXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9jaGF0XCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ2hhdHRpbmdcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2ZvcnVtXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ2hlY2tpbmcgdGhlIGZvcnVtXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9nYWxsZXJ5XCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ2hlY2tpbmcgdGhlIGdhbGxlcnlcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL25ld3NcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDaGVja2luZyB0aGUgbmV3c1wiO1xuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbmZ1bmN0aW9uIGdldEJ5WHBhdGgoeHBhdGgsIGV4dHJhY3Rvcikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoZXh0cmFjdG9yIHx8IChlID0+IGUpKShkb2N1bWVudFxuICAgICAgICAgICAgLmV2YWx1YXRlKHhwYXRoLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuQU5ZX1RZUEUsIG51bGwpXG4gICAgICAgICAgICAuaXRlcmF0ZU5leHQoKSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hOUVVGTkxGTkJRVk03U1VGRFpDeFhRVUZYTEVOQlFWTTdTVUZEY0VJc1VVRkJVU3hEUVVGVE8wbEJRMnBDTEUxQlFVMHNRMEZCVlR0RFFVTm9RanRCUVVWRUxFbEJRVWtzVTBGQlV5eEhRVUZqTEVsQlFVa3NRMEZCUXp0QlFVVm9ReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRWxCUVdVc1JVRkJSU3hGUVVGRk8wbEJRemRETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRiRUlzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZGU0N4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeEhRVUZITEVWQlFVVTdTVUZET1VJc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEycERMR0ZCUVdFc1JVRkRXaXcyUkVGQk5rUTdVVUZET1VRc1QwRkJUeXhGUVVGRkxFMUJRVTA3VVVGRFppeExRVUZMTEVWQlFVVXNiMEpCUVc5Q08wdEJRek5DTEVWQlEwUXNSVUZCUlN4UlFVRlJMRVZCUVVVc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETzBsQlJXeERMRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTnNReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eFZRVUZWTEVOQlEyNUNMSGREUVVGM1F5eEZRVU40UXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlEyeENMRVZCUTBRc1MwRkJTeXhIUVVGSExGVkJRVlVzUTBGQlF5eDNRMEZCZDBNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVU5vUlN4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRekZETEVWQlEwUXNTVUZCU1N4SFFVRkhMRlZCUVZVc1EwRkRhRUlzT0VOQlFUaERMRVZCUXpsRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkRiRUlzUTBGQlF6dFJRVVZJTEVsQlFVa3NVMEZCVXl4RlFVRkZPMWxCUTJRc1dVRkJXU3hEUVVGRExFbEJRVWtzU1VGQmQwSXNRMEZCUXp0WlFVTXhReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlR0blFrRkRkRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNN1owSkJRMnhETEVOQlFVTXNXVUZCV1N4RFFVRkRMR05CUVdNc1JVRkJSU3haUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETzI5Q1FVTjJSQ3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJGQlEyNUZPenRuUWtGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJRenRUUVVOMlF6dGhRVUZOTEVsQlEwNHNWVUZCVlN4RFFVRkRMSFZFUVVGMVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUTNaRkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlEzUkVPMWxCUlVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFZRVUZWTEVOQlFVTTdZVUZET1VJN1dVRkRTaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXp0WlFVTnNReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8xTkJRMmhFTzFGQlEwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hKUVVOMlFpeFZRVUZWTEVOQlExUXNNRU5CUVRCRExFVkJRekZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGRGJFSXNTVUZCU1N4bFFVTk9MRVZCUVVVc1EwRkJRenRSUVVWSUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTNoQ0xFbEJRVWtzUlVGQlJTeEZRVUZGTzFsQlExQXNXVUZCV1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRGVrSXNTVUZCU1N4TFFVRkxPMmRDUVVGRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRaUVVVM1F5eEpRVUZKTEVsQlFVazdaMEpCUVVVc1dVRkJXU3hEUVVGRExFdEJRVXNzU1VGQlNTeExRVUZMTEVsQlFVa3NSMEZCUnl4RFFVRkRPMU5CUXpkRE8wdEJWVVE3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3VVVGRGVFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUWtGQlowSXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRelZFTEdkQ1FVRm5RaXhGUVVOb1FpeEZRVUZGTEVOQlEwWXNSVUZCUlN4RFFVRkRPMHRCUTBvN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEZWtVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRUUVVONFF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRE8xRkJRVVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNN1UwRkRjRVVzU1VGQlNTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVOeVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzlDUVVGdlFpeERRVUZETzFOQlEzaERMRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTTdVVUZEZGtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHpRa0ZCYzBJc1EwRkJRenRUUVVNeFF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRE8xRkJRM0JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTTdTVUZGTlVNc1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR6dFJRVUZGTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03TzFGQlEzaEVMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEJRVU0zUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVWSUxGTkJRVk1zVlVGQlZTeERRVUZKTEV0QlFXRXNSVUZCUlN4VFFVRjVRanRKUVVNNVJDeEpRVUZKTzFGQlEwZ3NUMEZCVHl4RFFVRkRMRk5CUVZNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkROMElzVVVGQlVUdGhRVU5PTEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJRenRoUVVNelJDeFhRVUZYTEVWQlFVVXNRMEZEWml4RFFVRkRPMHRCUTBZN1NVRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTFvN1FVRkRSaXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiVmlkZW9EYXRhIiwiY3VycmVudFRpbWUiLCJkdXJhdGlvbiIsInBhdXNlZCIsInZpZGVvRGF0YSIsImdldEJ5WHBhdGgiLCJ4cGF0aCIsImV4dHJhY3RvciIsImUiLCJkb2N1bWVudCIsImV2YWx1YXRlIiwiWFBhdGhSZXN1bHQiLCJBTllfVFlQRSIsIml0ZXJhdGVOZXh0Iiwib24iLCJkYXRhIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsImRldGFpbHMiLCJzdGF0ZSIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJzdGFydHNXaXRoIiwiZXAiLCJ0ZXh0Q29udGVudCIsIm1heEVwIiwibmV4dFNpYmxpbmciLCJzdWJzdHIiLCJ0cmltIiwibGFuZyIsInR5cGUiLCJzdGFydFRpbWVzdGFtcCIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJpbmNsdWRlcyIsInRpdGxlIiwicmVwbGFjZSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;