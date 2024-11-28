var __webpack_exports__={};const presence=new Presence({clientId:"989759189394030613"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/M/Minesweeper/assets/0.png",startTimestamp:browsingTimestamp},{pathname:t}=window.location;if("/"===document.location.pathname)e.details="Viewing the home page";else if(document.location.pathname.startsWith("/game/"))e.details="Clicking cells",e.state=`Difficulty: ${document.querySelector("a.level-select-link.active > span").textContent}`,e.buttons=[{label:"Spectate Game",url:location.href}];else if(document.location.pathname.startsWith("/player/"))e.details="Viewing profile",e.state=`${document.querySelector("meta[property='og:title']").getAttribute("content").replace(" - Minesweeper Online","")}`,e.buttons=[{label:"View Profile",url:location.href}];else if(document.location.pathname.startsWith("/help/"))e.details="Viewing the help page",e.state=`${document.querySelector("meta[property='og:title']").getAttribute("content").replace(" - Minesweeper Online","")}`;else switch(t){case"/ranking":e.details="Viewing the rankings";break;case"/my-games":e.details="Viewing their games history";break;case"/best-players":e.details="Viewing the best players";break;case"/season-leaders":e.details="Viewing this seasons's leaders";break;case"/quests":e.details="Viewing their quests";break;case"/arena":e.details="In the arena";break;case"/equipment":e.details="Viewing their equipment";break;case"/marketplace":e.details="Viewing the marketplace";break;case"/events":e.details="Viewing the event";break;case"/players-online":e.details="Viewing players online";break;case"/news":e.details="Viewing the news";break;case"/statistics":e.details="Viewing statistics";break;case"/chat":e.details="Chatting";break;case"/premium":e.details="Viewing premium perks";break;case"/shop":e.details="Viewing the shop";break;case"/profile":e.details="Managing their account details"}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsZ0VBQ2ZDLGVBQWdCVCxvQkFDakIsU0FBRVUsR0FBYUMsT0FBT0MsU0FDekIsR0FBbUMsTUFBL0JDLFNBQVNELFNBQVNGLFNBQ2xCSCxFQUFhTyxRQUFVLDZCQUN0QixHQUFJRCxTQUFTRCxTQUFTRixTQUFTSyxXQUFXLFVBQzNDUixFQUFhTyxRQUFVLGlCQUN2QlAsRUFBYVMsTUFBUSxlQUFlSCxTQUFTSSxjQUFjLHFDQUFxQ0MsY0FDaEdYLEVBQWFZLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxnQkFDUEMsSUFBS1QsU0FBU1UsWUFJckIsR0FBSVQsU0FBU0QsU0FBU0YsU0FBU0ssV0FBVyxZQUMzQ1IsRUFBYU8sUUFBVSxrQkFDdkJQLEVBQWFTLE1BQVEsR0FBR0gsU0FDbkJJLGNBQWMsNkJBQ2RNLGFBQWEsV0FDYkMsUUFBUSx3QkFBeUIsTUFDdENqQixFQUFhWSxRQUFVLENBQ25CLENBQ0lDLE1BQU8sZUFDUEMsSUFBS1QsU0FBU1UsWUFJckIsR0FBSVQsU0FBU0QsU0FBU0YsU0FBU0ssV0FBVyxVQUMzQ1IsRUFBYU8sUUFBVSx3QkFDdkJQLEVBQWFTLE1BQVEsR0FBR0gsU0FDbkJJLGNBQWMsNkJBQ2RNLGFBQWEsV0FDYkMsUUFBUSx3QkFBeUIsV0FHdEMsT0FBUWQsR0FDSixJQUFLLFdBQ0RILEVBQWFPLFFBQVUsdUJBQ3ZCLE1BRUosSUFBSyxZQUNEUCxFQUFhTyxRQUFVLDhCQUN2QixNQUVKLElBQUssZ0JBQ0RQLEVBQWFPLFFBQVUsMkJBQ3ZCLE1BRUosSUFBSyxrQkFDRFAsRUFBYU8sUUFBVSxpQ0FDdkIsTUFFSixJQUFLLFVBQ0RQLEVBQWFPLFFBQVUsdUJBQ3ZCLE1BRUosSUFBSyxTQUNEUCxFQUFhTyxRQUFVLGVBQ3ZCLE1BRUosSUFBSyxhQUNEUCxFQUFhTyxRQUFVLDBCQUN2QixNQUVKLElBQUssZUFDRFAsRUFBYU8sUUFBVSwwQkFDdkIsTUFFSixJQUFLLFVBQ0RQLEVBQWFPLFFBQVUsb0JBQ3ZCLE1BRUosSUFBSyxrQkFDRFAsRUFBYU8sUUFBVSx5QkFDdkIsTUFFSixJQUFLLFFBQ0RQLEVBQWFPLFFBQVUsbUJBQ3ZCLE1BRUosSUFBSyxjQUNEUCxFQUFhTyxRQUFVLHFCQUN2QixNQUVKLElBQUssUUFDRFAsRUFBYU8sUUFBVSxXQUN2QixNQUVKLElBQUssV0FDRFAsRUFBYU8sUUFBVSx3QkFDdkIsTUFFSixJQUFLLFFBQ0RQLEVBQWFPLFFBQVUsbUJBQ3ZCLE1BRUosSUFBSyxXQUNEUCxFQUFhTyxRQUFVLGlDQUtuQ2pCLFNBQVM0QixZQUFZbEIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI5ODk3NTkxODkzOTQwMzA2MTNcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9NL01pbmVzd2VlcGVyL2Fzc2V0cy8wLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBob21lIHBhZ2VcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2dhbWUvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDbGlja2luZyBjZWxsc1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgRGlmZmljdWx0eTogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5sZXZlbC1zZWxlY3QtbGluay5hY3RpdmUgPiBzcGFuXCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNwZWN0YXRlIEdhbWVcIixcbiAgICAgICAgICAgICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3BsYXllci9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgcHJvZmlsZVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW3Byb3BlcnR5PSdvZzp0aXRsZSddXCIpXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIgLSBNaW5lc3dlZXBlciBPbmxpbmVcIiwgXCJcIil9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBQcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9oZWxwL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgaGVscCBwYWdlXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIm1ldGFbcHJvcGVydHk9J29nOnRpdGxlJ11cIilcbiAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpXG4gICAgICAgICAgICAucmVwbGFjZShcIiAtIE1pbmVzd2VlcGVyIE9ubGluZVwiLCBcIlwiKX1gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChwYXRobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIi9yYW5raW5nXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgcmFua2luZ3NcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvbXktZ2FtZXNcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZWlyIGdhbWVzIGhpc3RvcnlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvYmVzdC1wbGF5ZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgYmVzdCBwbGF5ZXJzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL3NlYXNvbi1sZWFkZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGlzIHNlYXNvbnMncyBsZWFkZXJzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL3F1ZXN0c1wiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlaXIgcXVlc3RzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL2FyZW5hXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSW4gdGhlIGFyZW5hXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL2VxdWlwbWVudFwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlaXIgZXF1aXBtZW50XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL21hcmtldHBsYWNlXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgbWFya2V0cGxhY2VcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgZXZlbnRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvcGxheWVycy1vbmxpbmVcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHBsYXllcnMgb25saW5lXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL25ld3NcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBuZXdzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL3N0YXRpc3RpY3NcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHN0YXRpc3RpY3NcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvY2hhdFwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNoYXR0aW5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL3ByZW1pdW1cIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHByZW1pdW0gcGVya3NcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvc2hvcFwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIHNob3BcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvcHJvZmlsZVwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIk1hbmFnaW5nIHRoZWlyIGFjY291bnQgZGV0YWlsc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeEZRVU5hTEN0RVFVRXJSRHRSUVVOb1JTeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVWQlEwUXNSVUZCUlN4UlFVRlJMRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETzBsQlJXaERMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEV0QlFVc3NSMEZCUnp0UlFVTnlReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8xTkJRek5ETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMUZCUTNwRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03VVVGRGVFTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhsUVVOd1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTnlRaXh0UTBGQmJVTXNRMEZEYmtNc1EwRkJReXhYUVVOSUxFVkJRVVVzUTBGQlF6dFJRVU5JTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1dVRkRkRUk3WjBKQlEwTXNTMEZCU3l4RlFVRkZMR1ZCUVdVN1owSkJRM1JDTEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1NVRkJTVHRoUVVOc1FqdFRRVU5FTEVOQlFVTTdTMEZEUmp0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xRkJRemRFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZEZWtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEZGQlFWRTdZVUZET1VJc1lVRkJZU3hEUVVGRExESkNRVUV5UWl4RFFVRkRPMkZCUXpGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTTdZVUZEZGtJc1QwRkJUeXhEUVVGRExIVkNRVUYxUWl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRGVrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenRaUVVOMFFqdG5Ra0ZEUXl4TFFVRkxMRVZCUVVVc1kwRkJZenRuUWtGRGNrSXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhKUVVGSk8yRkJRMnhDTzFOQlEwUXNRMEZCUXp0TFFVTkdPMU5CUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3VVVGRE0wUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0UlFVTXZReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NVVUZCVVR0aFFVTTVRaXhoUVVGaExFTkJRVU1zTWtKQlFUSkNMRU5CUVVNN1lVRkRNVU1zV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXp0aFFVTjJRaXhQUVVGUExFTkJRVU1zZFVKQlFYVkNMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dExRVU42UXp0VFFVRk5PMUZCUTA0c1VVRkJVU3hSUVVGUkxFVkJRVVU3V1VGRGFrSXNTMEZCU3l4VlFVRlZMRU5CUVVNc1EwRkJRenRuUWtGRGFFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0blFrRkRPVU1zVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJRenRuUWtGRGFrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcyUWtGQk5rSXNRMEZCUXp0blFrRkRja1FzVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4bFFVRmxMRU5CUVVNc1EwRkJRenRuUWtGRGNrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXp0blFrRkRiRVFzVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4cFFrRkJhVUlzUTBGQlF5eERRVUZETzJkQ1FVTjJRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkRFFVRm5ReXhEUVVGRE8yZENRVU40UkN4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETzJkQ1FVTm1MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1owSkJRemxETEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlEyUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhqUVVGakxFTkJRVU03WjBKQlEzUkRMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzV1VGQldTeERRVUZETEVOQlFVTTdaMEpCUTJ4Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NlVUpCUVhsQ0xFTkJRVU03WjBKQlEycEVMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzWTBGQll5eERRVUZETEVOQlFVTTdaMEpCUTNCQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NlVUpCUVhsQ0xFTkJRVU03WjBKQlEycEVMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTTdaMEpCUTJZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenRuUWtGRE0wTXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMmRDUVVOMlFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzJkQ1FVTm9SQ3hOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRPMmRDUVVOaUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03WjBKQlF6RkRMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzWVVGQllTeERRVUZETEVOQlFVTTdaMEpCUTI1Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03WjBKQlF6VkRMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTJJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFZRVUZWTEVOQlFVTTdaMEpCUTJ4RExFMUJRVTA3WVVGRFRqdFpRVU5FTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdaMEpCUXk5RExFMUJRVTA3WVVGRFRqdFpRVU5FTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRMklzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dG5Ra0ZETVVNc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blEwRkJaME1zUTBGQlF6dG5Ra0ZEZUVRc1RVRkJUVHRoUVVOT08xTkJRMFE3UzBGRFJEdEpRVU5FTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03UVVGRGNFTXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInBhdGhuYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJkb2N1bWVudCIsImRldGFpbHMiLCJzdGFydHNXaXRoIiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;