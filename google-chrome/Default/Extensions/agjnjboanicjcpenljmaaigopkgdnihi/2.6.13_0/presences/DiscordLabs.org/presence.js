var __webpack_exports__={};const presence=new Presence({clientId:"660894911331172372"}),browsingTimestamp=Math.floor(Date.now()/1e3);let priceEls;presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/DiscordLabs.org/assets/logo.png",startTimestamp:browsingTimestamp};if("bots.discordlabs.org"===document.location.hostname)if(e.details="Viewing Page:",e.state="DiscordLabs Bot List",document.location.pathname.includes("/partners"))e.details="Viewing Page:",e.state="DiscordLabs Partners";else if(document.location.pathname.includes("/profile/")){priceEls=document.querySelectorAll(".uname");for(const t of priceEls)e.details="Viewing a profile:",e.state=t.textContent}else if(document.location.pathname.includes("/submit/"))e.details="Viewing Page:",e.state="DiscordLabs Bot Sumbit";else if(document.location.pathname.includes("/submit"))e.details="Viewing Page:",e.state="DiscordLabs Bot Sumbit";else if(document.location.pathname.includes("/search/"))e.details="Search for:",e.state=window.location.href.slice(39).replaceAll("+|%20"," ");else if(document.location.pathname.includes("/bot/")){priceEls=document.querySelectorAll(".botname");for(const t of priceEls)e.details="Viewing a Discord bot:",e.state=t.textContent}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLFNBQ0pSLFNBQVNTLEdBQUcsY0FBYyxLQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLHVFQUNmQyxlQUFnQlQsbUJBRXBCLEdBQW1DLHlCQUEvQlUsU0FBU0MsU0FBU0MsU0FHbEIsR0FGQUwsRUFBYU0sUUFBVSxnQkFDdkJOLEVBQWFPLE1BQVEsdUJBQ2pCSixTQUFTQyxTQUFTSSxTQUFTQyxTQUFTLGFBQ3BDVCxFQUFhTSxRQUFVLGdCQUN2Qk4sRUFBYU8sTUFBUSw0QkFFcEIsR0FBSUosU0FBU0MsU0FBU0ksU0FBU0MsU0FBUyxhQUFjLENBQ3ZEWCxTQUFXSyxTQUFTTyxpQkFBaUIsVUFDckMsSUFBSyxNQUFNQyxLQUFXYixTQUNsQkUsRUFBYU0sUUFBVSxxQkFDdkJOLEVBQWFPLE1BQVFJLEVBQVFDLFdBRXJDLE1BQ0ssR0FBSVQsU0FBU0MsU0FBU0ksU0FBU0MsU0FBUyxZQUN6Q1QsRUFBYU0sUUFBVSxnQkFDdkJOLEVBQWFPLE1BQVEsOEJBRXBCLEdBQUlKLFNBQVNDLFNBQVNJLFNBQVNDLFNBQVMsV0FDekNULEVBQWFNLFFBQVUsZ0JBQ3ZCTixFQUFhTyxNQUFRLDhCQUVwQixHQUFJSixTQUFTQyxTQUFTSSxTQUFTQyxTQUFTLFlBQ3pDVCxFQUFhTSxRQUFVLGNBQ3ZCTixFQUFhTyxNQUFRTSxPQUFPVCxTQUFTVSxLQUNoQ0MsTUFBTSxJQUNOQyxXQUFXLFFBQVMsVUFFeEIsR0FBSWIsU0FBU0MsU0FBU0ksU0FBU0MsU0FBUyxTQUFVLENBQ25EWCxTQUFXSyxTQUFTTyxpQkFBaUIsWUFDckMsSUFBSyxNQUFNQyxLQUFXYixTQUNsQkUsRUFBYU0sUUFBVSx5QkFDdkJOLEVBQWFPLE1BQVFJLEVBQVFDLFdBRXJDLENBRUFaLEVBQWFNLFFBQ2JoQixTQUFTMkIsWUFBWWpCLEdBRXJCVixTQUFTMkIsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2NjA4OTQ5MTEzMzExNzIzNzJcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xubGV0IHByaWNlRWxzO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9EL0Rpc2NvcmRMYWJzLm9yZy9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH07XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcImJvdHMuZGlzY29yZGxhYnMub3JnXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgUGFnZTpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJEaXNjb3JkTGFicyBCb3QgTGlzdFwiO1xuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvcGFydG5lcnNcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFBhZ2U6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkRpc2NvcmRMYWJzIFBhcnRuZXJzXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvcHJvZmlsZS9cIikpIHtcbiAgICAgICAgICAgIHByaWNlRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51bmFtZVwiKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJpY2VFbCBvZiBwcmljZUVscykge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcHJvZmlsZTpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwcmljZUVsLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3N1Ym1pdC9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFBhZ2U6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkRpc2NvcmRMYWJzIEJvdCBTdW1iaXRcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9zdWJtaXRcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFBhZ2U6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkRpc2NvcmRMYWJzIEJvdCBTdW1iaXRcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9zZWFyY2gvXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoIGZvcjpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICAgICAgICAgICAgLnNsaWNlKDM5KVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlQWxsKFwiK3wlMjBcIiwgXCIgXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2JvdC9cIikpIHtcbiAgICAgICAgICAgIHByaWNlRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib3RuYW1lXCIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcmljZUVsIG9mIHByaWNlRWxzKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBEaXNjb3JkIGJvdDpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwcmljZUVsLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hKUVVGSkxGRkJRVkVzUTBGQlF6dEJRVVZpTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzUlVGQlJUdEpRVU01UWl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGJFTXNZVUZCWVN4RlFVTmFMSE5GUVVGelJUdFJRVU4yUlN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRU5CUVVNN1NVRkZSaXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMSE5DUVVGelFpeEZRVUZGTzFGQlF6RkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETzFGQlEzWkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1VVRkZOVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdXVUZEY2tRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTTdXVUZEZGtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHpRa0ZCYzBJc1EwRkJRenRUUVVNMVF6dGhRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMWxCUXpWRUxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZETDBNc1MwRkJTeXhOUVVGTkxFOUJRVThzU1VGQlNTeFJRVUZSTEVWQlFVVTdaMEpCUXk5Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03WjBKQlF6VkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWtzVDBGQmRVSXNRMEZCUXl4WFFVRlhMRU5CUVVNN1lVRkRNVVE3VTBGRFJEdGhRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMWxCUXpORUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaVUZCWlN4RFFVRkRPMWxCUTNaRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03VTBGRE9VTTdZVUZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRaUVVNeFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR1ZCUVdVc1EwRkJRenRaUVVOMlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMSGRDUVVGM1FpeERRVUZETzFOQlF6bERPMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3V1VGRE0wUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVVGaExFTkJRVU03V1VGRGNrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVazdhVUpCUTNaRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTTdhVUpCUTFRc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTXpRanRoUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzFsQlEzaEVMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03V1VGRGFrUXNTMEZCU3l4TlFVRk5MRTlCUVU4c1NVRkJTU3hSUVVGUkxFVkJRVVU3WjBKQlF5OUNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZDBKQlFYZENMRU5CUVVNN1owSkJRMmhFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVrc1QwRkJkVUlzUTBGQlF5eFhRVUZYTEVOQlFVTTdZVUZETVVRN1UwRkRSRHRMUVVORU8wbEJRMFFzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMUZCUTNoRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwicHJpY2VFbHMiLCJvbiIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImRldGFpbHMiLCJzdGF0ZSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJpY2VFbCIsInRleHRDb250ZW50Iiwid2luZG93IiwiaHJlZiIsInNsaWNlIiwicmVwbGFjZUFsbCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;