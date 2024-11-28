var __webpack_exports__={};const presence=new Presence({clientId:"919182644296683520"});async function getPlaygroundInfo(e){const t=await fetch(`https://api.gametools.network/bf2042/playground/?playgroundid=${e}`);if(!t.ok)throw new Error("Failed");return t.text()}let called=!1,playgroundId=null;const editingStamp=Math.floor(Date.now()/1e3),info={};presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/B/Battlefield%20Portal/assets/logo.png"},[t,n,o,a,r]=await Promise.all([presence.getSetting("block"),presence.getSetting("time"),presence.getSetting("buttons"),presence.getSetting("name"),presence.getSetting("desc")]),l=document.URL;if(l.search("=")>0&&(playgroundId=l.split("=").pop()),document.cookie.match(new RegExp("(^| )sessionId=([^;]+)"))[1]&&playgroundId&&(info.playgroundId=playgroundId,"complete"===document.readyState?called||(called=!0,await getPlaygroundInfo(playgroundId).then((e=>{const t=JSON.parse(e);t?(info.type=t.naming.type,info.playgroundDescription=t.naming.playgroundDescription,info.playgroundName=t.naming.playgroundName,presence.info(JSON.stringify(info))):called=!1}))):called=!1),info&&(a&&(e.details=`Making ${info.playgroundName}`),r&&(e.state=info.playgroundDescription)),t){const t=document.querySelector(".blocklySelected");if(t)if("SUBROUTINE"===t.querySelector(".subroutineBlockSubroutineText")?.textContent){const n=t.querySelectorAll("text[class=blocklyText]");for(const t of n)"translate(126.36666870117188,18)"===t.parentElement.getAttribute("transform")&&(e.state=`in Subroutine ${t.textContent}`)}else if("RULE"===t.querySelector(".ruleBlockRuleText")?.textContent){const n=t.querySelectorAll("text[class=blocklyText]");for(const t of n)"translate(72.78333282470703,8.5)"===t.parentElement.getAttribute("transform")&&(e.state=`in RULE ${t.textContent}`)}else r&&(e.state=info.playgroundDescription)}n&&(e.startTimestamp=editingStamp),o&&(e.buttons=[{label:"View Experience",url:l}]),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZEMsZUFBZUMsa0JBQWtCQyxHQUM3QixNQUFNQyxRQUFhQyxNQUFNLGlFQUFpRUYsS0FDMUYsSUFBS0MsRUFBS0UsR0FDTixNQUFNLElBQUlDLE1BQU0sVUFDcEIsT0FBT0gsRUFBS0ksTUFDaEIsQ0FDQSxJQUFJQyxRQUFTLEVBQU9OLGFBQWUsS0FDbkMsTUFBTU8sYUFBZUMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUFPQyxLQUFPLENBQUMsRUFDNURqQixTQUFTa0IsR0FBRyxjQUFjZixVQUN0QixNQUFNZ0IsRUFBZSxDQUNqQkMsY0FBZSw4RUFDZkMsRUFBT0MsRUFBTUMsRUFBU0MsRUFBTUMsU0FBcUJDLFFBQVFDLElBQUksQ0FDN0QzQixTQUFTNEIsV0FBVyxTQUNwQjVCLFNBQVM0QixXQUFXLFFBQ3BCNUIsU0FBUzRCLFdBQVcsV0FDcEI1QixTQUFTNEIsV0FBVyxRQUNwQjVCLFNBQVM0QixXQUFXLFVBQ3BCQyxFQUFNQyxTQUFTQyxJQStCbkIsR0E5QklGLEVBQUlHLE9BQU8sS0FBTyxJQUNsQjNCLGFBQWV3QixFQUFJSSxNQUFNLEtBQUtDLE9BQzlCSixTQUFTSyxPQUFPQyxNQUFNLElBQUlDLE9BQU8sMkJBQTJCLElBQzVEaEMsZUFDQVksS0FBS1osYUFBZUEsYUFDUSxhQUF4QnlCLFNBQVNRLFdBQ0ozQixTQUNEQSxRQUFTLFFBQ0hQLGtCQUFrQkMsY0FBY2tDLE1BQUtDLElBQ3ZDLE1BQU1DLEVBQU9DLEtBQUtDLE1BQU1ILEdBQ25CQyxHQUdEeEIsS0FBSzJCLEtBQU9ILEVBQUtJLE9BQU9ELEtBQ3hCM0IsS0FBSzZCLHNCQUF3QkwsRUFBS0ksT0FBT0Msc0JBQ3pDN0IsS0FBSzhCLGVBQWlCTixFQUFLSSxPQUFPRSxlQUNsQy9DLFNBQVNpQixLQUFLeUIsS0FBS00sVUFBVS9CLFFBTDdCTixRQUFTLENBTWIsS0FLUkEsUUFBUyxHQUViTSxPQUNJTyxJQUNBTCxFQUFhOEIsUUFBVSxVQUFVaEMsS0FBSzhCLGtCQUN0Q3RCLElBQ0FOLEVBQWErQixNQUFRakMsS0FBSzZCLHdCQUU5QnpCLEVBQU8sQ0FDUCxNQUFNOEIsRUFBV3JCLFNBQVNzQixjQUFjLG9CQUN4QyxHQUFJRCxFQUNBLEdBQ3NCLGVBRGxCQSxFQUFTQyxjQUFjLG1DQUNyQkMsWUFBOEIsQ0FDaEMsTUFBTUMsRUFBY0gsRUFBU0ksaUJBQWlCLDJCQUM5QyxJQUFLLE1BQU1DLEtBQVdGLEVBRWQscUNBREFFLEVBQVFDLGNBQWNDLGFBQWEsZUFFbkN2QyxFQUFhK0IsTUFBUSxpQkFBaUJNLEVBQVFILGNBRTFELE1BQ0ssR0FBa0UsU0FBOURGLEVBQVNDLGNBQWMsdUJBQXVCQyxZQUF3QixDQUMzRSxNQUFNQyxFQUFjSCxFQUFTSSxpQkFBaUIsMkJBQzlDLElBQUssTUFBTUMsS0FBV0YsRUFFZCxxQ0FEQUUsRUFBUUMsY0FBY0MsYUFBYSxlQUVuQ3ZDLEVBQWErQixNQUFRLFdBQVdNLEVBQVFILGNBRXBELE1BQ1M1QixJQUNMTixFQUFhK0IsTUFBUWpDLEtBQUs2QixzQkFHdEMsQ0FDSXhCLElBQ0FILEVBQWF3QyxlQUFpQi9DLGNBQzlCVyxJQUNBSixFQUFhSSxRQUFVLENBQUMsQ0FBRXFDLE1BQU8sa0JBQW1CL0IsU0FDeEQ3QixTQUFTNkQsWUFBWTFDLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTE5MTgyNjQ0Mjk2NjgzNTIwXCIsXG59KTtcbmFzeW5jIGZ1bmN0aW9uIGdldFBsYXlncm91bmRJbmZvKHBsYXlncm91bmRJZCkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2FtZXRvb2xzLm5ldHdvcmsvYmYyMDQyL3BsYXlncm91bmQvP3BsYXlncm91bmRpZD0ke3BsYXlncm91bmRJZH1gKTtcbiAgICBpZiAoIXJlc3Aub2spXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZFwiKTtcbiAgICByZXR1cm4gcmVzcC50ZXh0KCk7XG59XG5sZXQgY2FsbGVkID0gZmFsc2UsIHBsYXlncm91bmRJZCA9IG51bGw7XG5jb25zdCBlZGl0aW5nU3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSwgaW5mbyA9IHt9O1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9CL0JhdHRsZWZpZWxkJTIwUG9ydGFsL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgIH0sIFtibG9jaywgdGltZSwgYnV0dG9ucywgbmFtZSwgZGVzY3JpcHRpb25dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYmxvY2tcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcIm5hbWVcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJkZXNjXCIpLFxuICAgIF0pLCB1cmwgPSBkb2N1bWVudC5VUkw7XG4gICAgaWYgKHVybC5zZWFyY2goXCI9XCIpID4gMClcbiAgICAgICAgcGxheWdyb3VuZElkID0gdXJsLnNwbGl0KFwiPVwiKS5wb3AoKTtcbiAgICBpZiAoZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXCIoXnwgKXNlc3Npb25JZD0oW147XSspXCIpKVsxXSAmJlxuICAgICAgICBwbGF5Z3JvdW5kSWQpIHtcbiAgICAgICAgaW5mby5wbGF5Z3JvdW5kSWQgPSBwbGF5Z3JvdW5kSWQ7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBhd2FpdCBnZXRQbGF5Z3JvdW5kSW5mbyhwbGF5Z3JvdW5kSWQpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghanNvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8udHlwZSA9IGpzb24ubmFtaW5nLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvLnBsYXlncm91bmREZXNjcmlwdGlvbiA9IGpzb24ubmFtaW5nLnBsYXlncm91bmREZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8ucGxheWdyb3VuZE5hbWUgPSBqc29uLm5hbWluZy5wbGF5Z3JvdW5kTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmluZm8oSlNPTi5zdHJpbmdpZnkoaW5mbykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2FsbGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpbmZvKSB7XG4gICAgICAgIGlmIChuYW1lKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgTWFraW5nICR7aW5mby5wbGF5Z3JvdW5kTmFtZX1gO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24pXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBpbmZvLnBsYXlncm91bmREZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKGJsb2NrKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9ja2x5U2VsZWN0ZWRcIik7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3IoXCIuc3Vicm91dGluZUJsb2NrU3Vicm91dGluZVRleHRcIilcbiAgICAgICAgICAgICAgICA/LnRleHRDb250ZW50ID09PSBcIlNVQlJPVVRJTkVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrbHlUZXh0ID0gc2VsZWN0ZWQucXVlcnlTZWxlY3RvckFsbChcInRleHRbY2xhc3M9YmxvY2tseVRleHRdXCIpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBibG9ja2x5VGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlKDEyNi4zNjY2Njg3MDExNzE4OCwxOClcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBpbiBTdWJyb3V0aW5lICR7ZWxlbWVudC50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3IoXCIucnVsZUJsb2NrUnVsZVRleHRcIik/LnRleHRDb250ZW50ID09PSBcIlJVTEVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrbHlUZXh0ID0gc2VsZWN0ZWQucXVlcnlTZWxlY3RvckFsbChcInRleHRbY2xhc3M9YmxvY2tseVRleHRdXCIpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBibG9ja2x5VGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlKDcyLjc4MzMzMjgyNDcwNzAzLDguNSlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBpbiBSVUxFICR7ZWxlbWVudC50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gaW5mby5wbGF5Z3JvdW5kRGVzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWUpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGVkaXRpbmdTdGFtcDtcbiAgICBpZiAoYnV0dG9ucylcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IEV4cGVyaWVuY2VcIiwgdXJsIH1dO1xuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNM1FpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNRMEZCUXp0QlFWTklMRXRCUVVzc1ZVRkJWU3hwUWtGQmFVSXNRMEZCUXl4WlFVRnZRanRKUVVOd1JDeE5RVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRXRCUVVzc1EwRkRka0lzYVVWQlFXbEZMRmxCUVZrc1JVRkJSU3hEUVVNdlJTeERRVUZETzBsQlEwWXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xRkJRVVVzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVONFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRCUVVOd1FpeERRVUZETzBGQlJVUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1MwRkJTeXhGUVVOcVFpeFpRVUZaTEVkQlFWY3NTVUZCU1N4RFFVRkRPMEZCUlRkQ0xFMUJRVTBzV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVTnFSQ3hKUVVGSkxFZEJRV3RDTEVWQlFVVXNRMEZCUXp0QlFVVXhRaXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeEZRVU5hTERKRlFVRXlSVHRMUVVNMVJTeEZRVU5FTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEZkQlFWY3NRMEZCUXl4SFFVRkhMRTFCUVUwc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU0zUkN4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxFOUJRVThzUTBGQlF6dFJRVU55UXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxFMUJRVTBzUTBGQlF6dFJRVU53UXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxGTkJRVk1zUTBGQlF6dFJRVU4yUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxFMUJRVTBzUTBGQlF6dFJRVU53UXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxFMUJRVTBzUTBGQlF6dExRVU53UXl4RFFVRkRMRVZCUTBZc1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTTdTVUZGY0VJc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkJSU3haUVVGWkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEpRVVUzUkN4SlFVTkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVFzV1VGQldTeEZRVU5ZTzFGQlEwUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhaUVVGWkxFTkJRVU03VVVGRGFrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hMUVVGTExGVkJRVlVzUlVGQlJUdFpRVU4yUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU5hTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJRMlFzVFVGQlRTeHBRa0ZCYVVJc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN2IwSkJRMnhFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdiMEpCUXk5Q0xFbEJRVWtzUTBGQlF5eEpRVUZKTzNkQ1FVRkZMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03ZVVKQlEzSkNPM2RDUVVOS0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03ZDBKQlF6ZENMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRPM2RDUVVNdlJDeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETzNkQ1FVTnFSQ3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dHhRa0ZEY0VNN1owSkJRMFlzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEU0R0VFFVTkVPenRaUVVGTkxFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZEZEVJN1NVRkRSQ3hKUVVGSkxFbEJRVWtzUlVGQlJUdFJRVU5VTEVsQlFVa3NTVUZCU1R0WlFVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVlVGQlZTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1VVRkRha1VzU1VGQlNTeFhRVUZYTzFsQlFVVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNN1MwRkRha1U3U1VGRlJDeEpRVUZKTEV0QlFVc3NSVUZCUlR0UlFVTldMRTFCUVUwc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVU0xUkN4SlFVRkpMRkZCUVZFc1JVRkJSVHRaUVVOaUxFbEJRME1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4blEwRkJaME1zUTBGQlF6dG5Ra0ZEZGtRc1JVRkJSU3hYUVVGWExFdEJRVXNzV1VGQldTeEZRVU01UWp0blFrRkRSQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRelZETEhsQ1FVRjVRaXhEUVVONlFpeERRVUZETzJkQ1FVTkdMRXRCUVVzc1RVRkJUU3hQUVVGUExFbEJRVWtzVjBGQlZ5eEZRVUZGTzI5Q1FVTnNReXhKUVVORExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1EwRkJRenQzUWtGREwwTXNhME5CUVd0RE8zZENRVVZzUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHbENRVUZwUWl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03YVVKQlF6ZEVPMkZCUTBRN2FVSkJRVTBzU1VGRFRpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVWQlFVVXNWMEZCVnl4TFFVRkxMRTFCUVUwc1JVRkRia1U3WjBKQlEwUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVTTFReXg1UWtGQmVVSXNRMEZEZWtJc1EwRkJRenRuUWtGRFJpeExRVUZMTEUxQlFVMHNUMEZCVHl4SlFVRkpMRmRCUVZjc1JVRkJSVHR2UWtGRGJFTXNTVUZEUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eFhRVUZYTEVOQlFVTTdkMEpCUXk5RExHdERRVUZyUXp0M1FrRkZiRU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4WFFVRlhMRTlCUVU4c1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dHBRa0ZEZGtRN1lVRkRSRHRwUWtGQlRTeEpRVUZKTEZkQlFWY3NSVUZCUlR0blFrRkZka0lzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTTdZVUZEYUVRN1UwRkRSRHRMUVVORU8wbEJSVVFzU1VGQlNTeEpRVUZKTzFGQlFVVXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhaUVVGWkxFTkJRVU03U1VGRGNrUXNTVUZCU1N4UFFVRlBPMUZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMR2xDUVVGcFFpeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRlRVVzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJhc3luYyIsImdldFBsYXlncm91bmRJbmZvIiwicGxheWdyb3VuZElkIiwicmVzcCIsImZldGNoIiwib2siLCJFcnJvciIsInRleHQiLCJjYWxsZWQiLCJlZGl0aW5nU3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiaW5mbyIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsImJsb2NrIiwidGltZSIsImJ1dHRvbnMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJQcm9taXNlIiwiYWxsIiwiZ2V0U2V0dGluZyIsInVybCIsImRvY3VtZW50IiwiVVJMIiwic2VhcmNoIiwic3BsaXQiLCJwb3AiLCJjb29raWUiLCJtYXRjaCIsIlJlZ0V4cCIsInJlYWR5U3RhdGUiLCJ0aGVuIiwidmFsdWUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsIm5hbWluZyIsInBsYXlncm91bmREZXNjcmlwdGlvbiIsInBsYXlncm91bmROYW1lIiwic3RyaW5naWZ5IiwiZGV0YWlscyIsInN0YXRlIiwic2VsZWN0ZWQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJibG9ja2x5VGV4dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwicGFyZW50RWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInN0YXJ0VGltZXN0YW1wIiwibGFiZWwiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;