var __webpack_exports__={};const presence=new Presence({clientId:"797749214175035412"}),timeStamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(()=>{const{title:e,location:{pathname:t}}=document,a={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/F/freeCodeCamp/assets/logo.png",startTimestamp:timeStamp},s=t.split("/").filter(String),i=e=>e.split("-").map((e=>e.replace(e.charAt(0),e.charAt(0).toUpperCase()))).join(" ");"/"!==t&&(a.buttons=[{label:"Visit Page",url:`https://freecodecamp.org${t}`}]),a.details=((e,t)=>"/"===e?"Viewing:":e.match(/^\/news|^\/settings|^\/donate/)?"Viewing page:":e.startsWith("/learn")?1===s.length?"Learning:":`${i(s[1])}:`:t.startsWith("Profile")?"Viewing Profile:":void 0)(t,e),a.state=((e,t)=>"/"===e?"The Main Page":e.match(/^\/news|^\/settings|^\/donate/)?s[1]?t:i(s[0]):e.startsWith("/learn")?s[2]?i(s[2]):s[1]?"Selecting Lesson":"Selecting Course":t.startsWith("Profile")?s[0]:void 0)(t,e),presence.setActivity(a)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsVUFBWUMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUN4Q1AsU0FBU1EsR0FBRyxjQUFjLEtBQ3RCLE1BQU0sTUFBRUMsRUFBT0MsVUFBWUMsU0FBVUMsSUFBWUMsU0FBVUMsRUFBZSxDQUN0RUMsY0FBZSxvRUFDZkMsZUFBZ0JiLFdBQ2pCYyxFQUFNTCxFQUFLTSxNQUFNLEtBQUtDLE9BQU9DLFFBQVNDLEVBQWNDLEdBQVFBLEVBQzFESixNQUFNLEtBQ05LLEtBQUlDLEdBQVFBLEVBQUtDLFFBQVFELEVBQUtFLE9BQU8sR0FBSUYsRUFBS0UsT0FBTyxHQUFHQyxpQkFDeERDLEtBQUssS0F3QkcsTUFBVGhCLElBQ0FFLEVBQWFlLFFBQVUsQ0FDbkIsQ0FBRUMsTUFBTyxhQUFjQyxJQUFLLDJCQUEyQm5CLE9BRy9ERSxFQUFha0IsUUE3QmEsRUFBQ3BCLEVBQU1ILElBQ2hCLE1BQVRHLEVBQ08sV0FDUEEsRUFBS3FCLE1BQU0saUNBQ0osZ0JBQ1ByQixFQUFLc0IsV0FBVyxVQUNNLElBQWZqQixFQUFJa0IsT0FBZSxZQUFjLEdBQUdkLEVBQVdKLEVBQUksT0FDMURSLEVBQU15QixXQUFXLFdBQ1Ysd0JBRFgsRUFzQm1CRixDQUFRcEIsRUFBTUgsR0FDckNLLEVBQWFzQixNQXJCRixFQUFDeEIsRUFBTUgsSUFDRCxNQUFURyxFQUNPLGdCQUNQQSxFQUFLcUIsTUFBTSxpQ0FDSmhCLEVBQUksR0FBS1IsRUFBUVksRUFBV0osRUFBSSxJQUN2Q0wsRUFBS3NCLFdBQVcsVUFDVGpCLEVBQUksR0FDTEksRUFBV0osRUFBSSxJQUNmQSxFQUFJLEdBQ0EsbUJBQ0EsbUJBRVZSLEVBQU15QixXQUFXLFdBQ1ZqQixFQUFJLFFBRGYsRUFTaUJtQixDQUFNeEIsRUFBTUgsR0FDakNULFNBQVNxQyxZQUFZdkIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI3OTc3NDkyMTQxNzUwMzU0MTJcIixcbn0pLCB0aW1lU3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCAoKSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSwgbG9jYXRpb246IHsgcGF0aG5hbWU6IHBhZ2UgfSwgfSA9IGRvY3VtZW50LCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9GL2ZyZWVDb2RlQ2FtcC9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IHRpbWVTdGFtcCxcbiAgICB9LCBhcnIgPSBwYWdlLnNwbGl0KFwiL1wiKS5maWx0ZXIoU3RyaW5nKSwgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHN0clxuICAgICAgICAuc3BsaXQoXCItXCIpXG4gICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLnJlcGxhY2UoaXRlbS5jaGFyQXQoMCksIGl0ZW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkpKVxuICAgICAgICAuam9pbihcIiBcIiksIGRldGFpbHMgPSAocGFnZSwgdGl0bGUpID0+IHtcbiAgICAgICAgaWYgKHBhZ2UgPT09IFwiL1wiKVxuICAgICAgICAgICAgcmV0dXJuIFwiVmlld2luZzpcIjtcbiAgICAgICAgaWYgKHBhZ2UubWF0Y2goL15cXC9uZXdzfF5cXC9zZXR0aW5nc3xeXFwvZG9uYXRlLykpXG4gICAgICAgICAgICByZXR1cm4gXCJWaWV3aW5nIHBhZ2U6XCI7XG4gICAgICAgIGlmIChwYWdlLnN0YXJ0c1dpdGgoXCIvbGVhcm5cIikpXG4gICAgICAgICAgICByZXR1cm4gYXJyLmxlbmd0aCA9PT0gMSA/IFwiTGVhcm5pbmc6XCIgOiBgJHtjYXBpdGFsaXplKGFyclsxXSl9OmA7XG4gICAgICAgIGlmICh0aXRsZS5zdGFydHNXaXRoKFwiUHJvZmlsZVwiKSlcbiAgICAgICAgICAgIHJldHVybiBcIlZpZXdpbmcgUHJvZmlsZTpcIjtcbiAgICB9LCBzdGF0ZSA9IChwYWdlLCB0aXRsZSkgPT4ge1xuICAgICAgICBpZiAocGFnZSA9PT0gXCIvXCIpXG4gICAgICAgICAgICByZXR1cm4gXCJUaGUgTWFpbiBQYWdlXCI7XG4gICAgICAgIGlmIChwYWdlLm1hdGNoKC9eXFwvbmV3c3xeXFwvc2V0dGluZ3N8XlxcL2RvbmF0ZS8pKVxuICAgICAgICAgICAgcmV0dXJuIGFyclsxXSA/IHRpdGxlIDogY2FwaXRhbGl6ZShhcnJbMF0pO1xuICAgICAgICBpZiAocGFnZS5zdGFydHNXaXRoKFwiL2xlYXJuXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyWzJdXG4gICAgICAgICAgICAgICAgPyBjYXBpdGFsaXplKGFyclsyXSlcbiAgICAgICAgICAgICAgICA6IGFyclsxXVxuICAgICAgICAgICAgICAgICAgICA/IFwiU2VsZWN0aW5nIExlc3NvblwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJTZWxlY3RpbmcgQ291cnNlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpdGxlLnN0YXJ0c1dpdGgoXCJQcm9maWxlXCIpKVxuICAgICAgICAgICAgcmV0dXJuIGFyclswXTtcbiAgICB9O1xuICAgIGlmIChwYWdlICE9PSBcIi9cIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiVmlzaXQgUGFnZVwiLCB1cmw6IGBodHRwczovL2ZyZWVjb2RlY2FtcC5vcmcke3BhZ2V9YCB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGRldGFpbHMocGFnZSwgdGl0bGUpO1xuICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHN0YXRlKHBhZ2UsIHRpdGxlKTtcbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkZNME1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1IwRkJSeXhGUVVGRk8wbEJRemxDTEUxQlFVMHNSVUZEU2l4TFFVRkxMRVZCUTB3c1VVRkJVU3hGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SFFVTTFRaXhIUVVGSExGRkJRVkVzUlVGRFdpeFpRVUZaTEVkQlFXbENPMUZCUXpWQ0xHRkJRV0VzUlVGRFdpeHRSVUZCYlVVN1VVRkRjRVVzWTBGQll5eEZRVUZGTEZOQlFWTTdTMEZEZWtJc1JVRkRSQ3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlEzQkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFZEJRVmNzUlVGQlJTeEZRVUZGTEVOQlF6VkNMRWRCUVVjN1UwRkRSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETzFOQlExWXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlExb3NUMEZCVHl4SFFVRkhMRU5CUVVNc1NVRkJXU3hGUVVGRkxFdEJRV0VzUlVGQlJTeEZRVUZGTzFGQlEzcERMRWxCUVVrc1NVRkJTU3hMUVVGTExFZEJRVWM3V1VGQlJTeFBRVUZQTEZWQlFWVXNRMEZCUXp0UlFVTndReXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNLMEpCUVN0Q0xFTkJRVU03V1VGQlJTeFBRVUZQTEdWQlFXVXNRMEZCUXp0UlFVTjRSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUXpWQ0xFOUJRVThzUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTnNSU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUVVVc1QwRkJUeXhyUWtGQmEwSXNRMEZCUXp0SlFVTTFSQ3hEUVVGRExFVkJRMFFzUzBGQlN5eEhRVUZITEVOQlFVTXNTVUZCV1N4RlFVRkZMRXRCUVdFc1JVRkJSU3hGUVVGRk8xRkJRM1pETEVsQlFVa3NTVUZCU1N4TFFVRkxMRWRCUVVjN1dVRkJSU3hQUVVGUExHVkJRV1VzUTBGQlF6dFJRVU42UXl4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zSzBKQlFTdENMRU5CUVVNN1dVRkRPVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0WlFVTTVRaXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTFvc1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM0JDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5TTEVOQlFVTXNRMEZCUXl4clFrRkJhMEk3YjBKQlEzQkNMRU5CUVVNc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0VFFVTjBRanRSUVVORUxFbEJRVWtzUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkJSU3hQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hEUVVGRExFTkJRVU03U1VGRFNDeEpRVUZKTEVsQlFVa3NTMEZCU3l4SFFVRkhMRVZCUVVVN1VVRkRha0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0WlFVTjBRaXhGUVVGRkxFdEJRVXNzUlVGQlJTeFpRVUZaTEVWQlFVVXNSMEZCUnl4RlFVRkZMREpDUVVFeVFpeEpRVUZKTEVWQlFVVXNSVUZCUlR0VFFVTXZSQ3hEUVVGRE8wdEJRMFk3U1VGRFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM2hETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03UVVGRGNFTXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwidGltZVN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwidGl0bGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicGFnZSIsImRvY3VtZW50IiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiYXJyIiwic3BsaXQiLCJmaWx0ZXIiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwic3RyIiwibWFwIiwiaXRlbSIsInJlcGxhY2UiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJkZXRhaWxzIiwibWF0Y2giLCJzdGFydHNXaXRoIiwibGVuZ3RoIiwic3RhdGUiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;