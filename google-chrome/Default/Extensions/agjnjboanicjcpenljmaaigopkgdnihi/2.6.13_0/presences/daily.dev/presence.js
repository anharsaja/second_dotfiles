var __webpack_exports__={};const presence=new Presence({clientId:"1248697988331864084"}),browsingTimestamp=Math.floor(Date.now()/1e3),processPostSite=()=>({details:"Reading a post",state:document.querySelector("h1")?.textContent,buttons:[{label:"Read Post",url:document.location.href}]}),processSourceSite=()=>({details:"Reading a source",state:`Source: ${document.querySelector("h1")?.textContent}`}),processSearchSite=()=>({details:"Searching",state:`Searching for ${new URLSearchParams(document.location.search).get("search")}`}),siteDataMap=[{path:/^\/$/,process:()=>({details:"Homepage",state:"Discovering new posts"})},{path:/^\/posts\/[a-z0-9-]+$/,process:processPostSite},{path:/^\/squads$/,process:()=>({details:"Squads page",state:"Discovering new squads"})},{path:/^\/discussed$/,process:()=>({details:"Discussion homepage",state:"Discovering new discussions"})},{path:/^\/bookmarks$/,process:()=>({details:"Bookmarks",state:"Discovering saved posts"})},{path:/^\/popular$/,process:()=>({details:"Popular posts",state:"Discovering popular posts"})},{path:/^\/sources\/.*$/,process:processSourceSite},{path:/^\/upvoted\/.*$/,process:()=>({details:"Upvoted posts",state:"Discovering upvoted posts"})},{path:/^\/search$/,process:()=>({details:"Searching",process:processSearchSite})},{path:/^\/history\/.*$/,process:()=>({details:"History",state:"Browsing personal history"})}];presence.on("UpdateData",(async()=>{let e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/daily.dev/assets/logo.png",startTimestamp:browsingTimestamp};const s=siteDataMap.find((e=>e.path.test(document.location.pathname)));s&&(e={...e,...s.process()}),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQzFDQyxnQkFBa0IsS0FDYixDQUNIQyxRQUFTLGlCQUNUQyxNQUFPQyxTQUFTQyxjQUFjLE9BQU9DLFlBQ3JDQyxRQUFTLENBQ0wsQ0FDSUMsTUFBTyxZQUNQQyxJQUFLTCxTQUFTTSxTQUFTQyxTQUlwQ0Msa0JBQW9CLEtBQ1osQ0FDSFYsUUFBUyxtQkFDVEMsTUFBTyxXQUFXQyxTQUFTQyxjQUFjLE9BQU9DLGdCQUVyRE8sa0JBQW9CLEtBQ1osQ0FDSFgsUUFBUyxZQUNUQyxNQUFPLGlCQUFpQixJQUFJVyxnQkFBZ0JWLFNBQVNNLFNBQVNLLFFBQVFDLElBQUksY0FFL0VDLFlBQWMsQ0FDYixDQUNJQyxLQUFNLE9BQ05DLFFBQVMsS0FBTSxDQUNYakIsUUFBUyxXQUNUQyxNQUFPLDJCQUdmLENBQ0llLEtBQU0sd0JBQ05DLFFBQVNsQixpQkFFYixDQUNJaUIsS0FBTSxhQUNOQyxRQUFTLEtBQU0sQ0FDWGpCLFFBQVMsY0FDVEMsTUFBTyw0QkFHZixDQUNJZSxLQUFNLGdCQUNOQyxRQUFTLEtBQU0sQ0FDWGpCLFFBQVMsc0JBQ1RDLE1BQU8saUNBR2YsQ0FDSWUsS0FBTSxnQkFDTkMsUUFBUyxLQUFNLENBQ1hqQixRQUFTLFlBQ1RDLE1BQU8sNkJBR2YsQ0FDSWUsS0FBTSxjQUNOQyxRQUFTLEtBQU0sQ0FDWGpCLFFBQVMsZ0JBQ1RDLE1BQU8sK0JBR2YsQ0FDSWUsS0FBTSxrQkFDTkMsUUFBU1AsbUJBRWIsQ0FDSU0sS0FBTSxrQkFDTkMsUUFBUyxLQUFNLENBQ1hqQixRQUFTLGdCQUNUQyxNQUFPLCtCQUdmLENBQ0llLEtBQU0sYUFDTkMsUUFBUyxLQUFNLENBQ1hqQixRQUFTLFlBQ1RpQixRQUFTTixxQkFHakIsQ0FDSUssS0FBTSxrQkFDTkMsUUFBUyxLQUFNLENBQ1hqQixRQUFTLFVBQ1RDLE1BQU8sZ0NBSW5CVixTQUFTMkIsR0FBRyxjQUFjQyxVQUN0QixJQUFJQyxFQUFlLENBQ2ZDLGNBQWUsaUVBQ2ZDLGVBQWdCNUIsbUJBRXBCLE1BQU02QixFQUFXUixZQUFZUyxNQUFLRCxHQUFZQSxFQUFTUCxLQUFLUyxLQUFLdkIsU0FBU00sU0FBU2tCLFlBQy9FSCxJQUNBSCxFQUFlLElBQ1JBLEtBQ0FHLEVBQVNOLFlBR3BCMUIsU0FBU29DLFlBQVlQLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiMTI0ODY5Nzk4ODMzMTg2NDA4NFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5jb25zdCBwcm9jZXNzUG9zdFNpdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGV0YWlsczogXCJSZWFkaW5nIGEgcG9zdFwiLFxuICAgICAgICBzdGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpPy50ZXh0Q29udGVudCxcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWQgUG9zdFwiLFxuICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfTtcbn0sIHByb2Nlc3NTb3VyY2VTaXRlID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRldGFpbHM6IFwiUmVhZGluZyBhIHNvdXJjZVwiLFxuICAgICAgICBzdGF0ZTogYFNvdXJjZTogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik/LnRleHRDb250ZW50fWAsXG4gICAgfTtcbn0sIHByb2Nlc3NTZWFyY2hTaXRlID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRldGFpbHM6IFwiU2VhcmNoaW5nXCIsXG4gICAgICAgIHN0YXRlOiBgU2VhcmNoaW5nIGZvciAke25ldyBVUkxTZWFyY2hQYXJhbXMoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJzZWFyY2hcIil9YCxcbiAgICB9O1xufSwgc2l0ZURhdGFNYXAgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAvXlxcLyQvLFxuICAgICAgICBwcm9jZXNzOiAoKSA9PiAoe1xuICAgICAgICAgICAgZGV0YWlsczogXCJIb21lcGFnZVwiLFxuICAgICAgICAgICAgc3RhdGU6IFwiRGlzY292ZXJpbmcgbmV3IHBvc3RzXCIsXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAvXlxcL3Bvc3RzXFwvW2EtejAtOS1dKyQvLFxuICAgICAgICBwcm9jZXNzOiBwcm9jZXNzUG9zdFNpdGUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IC9eXFwvc3F1YWRzJC8sXG4gICAgICAgIHByb2Nlc3M6ICgpID0+ICh7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIlNxdWFkcyBwYWdlXCIsXG4gICAgICAgICAgICBzdGF0ZTogXCJEaXNjb3ZlcmluZyBuZXcgc3F1YWRzXCIsXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAvXlxcL2Rpc2N1c3NlZCQvLFxuICAgICAgICBwcm9jZXNzOiAoKSA9PiAoe1xuICAgICAgICAgICAgZGV0YWlsczogXCJEaXNjdXNzaW9uIGhvbWVwYWdlXCIsXG4gICAgICAgICAgICBzdGF0ZTogXCJEaXNjb3ZlcmluZyBuZXcgZGlzY3Vzc2lvbnNcIixcbiAgICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IC9eXFwvYm9va21hcmtzJC8sXG4gICAgICAgIHByb2Nlc3M6ICgpID0+ICh7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIkJvb2ttYXJrc1wiLFxuICAgICAgICAgICAgc3RhdGU6IFwiRGlzY292ZXJpbmcgc2F2ZWQgcG9zdHNcIixcbiAgICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IC9eXFwvcG9wdWxhciQvLFxuICAgICAgICBwcm9jZXNzOiAoKSA9PiAoe1xuICAgICAgICAgICAgZGV0YWlsczogXCJQb3B1bGFyIHBvc3RzXCIsXG4gICAgICAgICAgICBzdGF0ZTogXCJEaXNjb3ZlcmluZyBwb3B1bGFyIHBvc3RzXCIsXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAvXlxcL3NvdXJjZXNcXC8uKiQvLFxuICAgICAgICBwcm9jZXNzOiBwcm9jZXNzU291cmNlU2l0ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogL15cXC91cHZvdGVkXFwvLiokLyxcbiAgICAgICAgcHJvY2VzczogKCkgPT4gKHtcbiAgICAgICAgICAgIGRldGFpbHM6IFwiVXB2b3RlZCBwb3N0c1wiLFxuICAgICAgICAgICAgc3RhdGU6IFwiRGlzY292ZXJpbmcgdXB2b3RlZCBwb3N0c1wiLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogL15cXC9zZWFyY2gkLyxcbiAgICAgICAgcHJvY2VzczogKCkgPT4gKHtcbiAgICAgICAgICAgIGRldGFpbHM6IFwiU2VhcmNoaW5nXCIsXG4gICAgICAgICAgICBwcm9jZXNzOiBwcm9jZXNzU2VhcmNoU2l0ZSxcbiAgICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IC9eXFwvaGlzdG9yeVxcLy4qJC8sXG4gICAgICAgIHByb2Nlc3M6ICgpID0+ICh7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIkhpc3RvcnlcIixcbiAgICAgICAgICAgIHN0YXRlOiBcIkJyb3dzaW5nIHBlcnNvbmFsIGhpc3RvcnlcIixcbiAgICAgICAgfSksXG4gICAgfSxcbl07XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9EL2RhaWx5LmRldi9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH07XG4gICAgY29uc3Qgc2l0ZURhdGEgPSBzaXRlRGF0YU1hcC5maW5kKHNpdGVEYXRhID0+IHNpdGVEYXRhLnBhdGgudGVzdChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSkpO1xuICAgIGlmIChzaXRlRGF0YSkge1xuICAgICAgICBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgICAgICAuLi5wcmVzZW5jZURhdGEsXG4gICAgICAgICAgICAuLi5zaXRlRGF0YS5wcm9jZXNzKCksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNjVUpCUVhGQ08wTkJReTlDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVMXVSQ3hOUVVGTkxHVkJRV1VzUjBGQlJ5eEhRVUV3UWl4RlFVRkZPMGxCUTJ4RUxFOUJRVTg3VVVGRFRpeFBRVUZQTEVWQlFVVXNaMEpCUVdkQ08xRkJRM3BDTEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEZkQlFWYzdVVUZEYUVRc1QwRkJUeXhGUVVGRk8xbEJRMUk3WjBKQlEwTXNTMEZCU3l4RlFVRkZMRmRCUVZjN1owSkJRMnhDTEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWs3WVVGRE0wSTdVMEZEUkR0TFFVTkVMRU5CUVVNN1FVRkRTQ3hEUVVGRExFVkJRMFFzYVVKQlFXbENMRWRCUVVjc1IwRkJSeXhGUVVGRk8wbEJRM2hDTEU5QlFVODdVVUZEVGl4UFFVRlBMRVZCUVVVc2EwSkJRV3RDTzFGQlF6TkNMRXRCUVVzc1JVRkJSU3hYUVVGWExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRk8wdEJRemRFTEVOQlFVTTdRVUZEU0N4RFFVRkRMRVZCUTBRc2FVSkJRV2xDTEVkQlFVY3NSMEZCUnl4RlFVRkZPMGxCUTNoQ0xFOUJRVTg3VVVGRFRpeFBRVUZQTEVWQlFVVXNWMEZCVnp0UlFVTndRaXhMUVVGTExFVkJRVVVzYVVKQlFXbENMRWxCUVVrc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVONFJTeFJRVUZSTEVOQlExSXNSVUZCUlR0TFFVTklMRU5CUVVNN1FVRkRTQ3hEUVVGRExFVkJRMFFzVjBGQlZ5eEhRVUZITzBsQlEySTdVVUZEUXl4SlFVRkpMRVZCUVVVc1RVRkJUVHRSUVVOYUxFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJZc1QwRkJUeXhGUVVGRkxGVkJRVlU3V1VGRGJrSXNTMEZCU3l4RlFVRkZMSFZDUVVGMVFqdFRRVU01UWl4RFFVRkRPMHRCUTBZN1NVRkRSRHRSUVVORExFbEJRVWtzUlVGQlJTeDFRa0ZCZFVJN1VVRkROMElzVDBGQlR5eEZRVUZGTEdWQlFXVTdTMEZEZUVJN1NVRkRSRHRSUVVORExFbEJRVWtzUlVGQlJTeFpRVUZaTzFGQlEyeENMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyWXNUMEZCVHl4RlFVRkZMR0ZCUVdFN1dVRkRkRUlzUzBGQlN5eEZRVUZGTEhkQ1FVRjNRanRUUVVNdlFpeERRVUZETzB0QlEwWTdTVUZEUkR0UlFVTkRMRWxCUVVrc1JVRkJSU3hsUVVGbE8xRkJRM0pDTEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMllzVDBGQlR5eEZRVUZGTEhGQ1FVRnhRanRaUVVNNVFpeExRVUZMTEVWQlFVVXNOa0pCUVRaQ08xTkJRM0JETEVOQlFVTTdTMEZEUmp0SlFVTkVPMUZCUTBNc1NVRkJTU3hGUVVGRkxHVkJRV1U3VVVGRGNrSXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRFppeFBRVUZQTEVWQlFVVXNWMEZCVnp0WlFVTndRaXhMUVVGTExFVkJRVVVzZVVKQlFYbENPMU5CUTJoRExFTkJRVU03UzBGRFJqdEpRVU5FTzFGQlEwTXNTVUZCU1N4RlFVRkZMR0ZCUVdFN1VVRkRia0lzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRaaXhQUVVGUExFVkJRVVVzWlVGQlpUdFpRVU40UWl4TFFVRkxMRVZCUVVVc01rSkJRVEpDTzFOQlEyeERMRU5CUVVNN1MwRkRSanRKUVVORU8xRkJRME1zU1VGQlNTeEZRVUZGTEdsQ1FVRnBRanRSUVVOMlFpeFBRVUZQTEVWQlFVVXNhVUpCUVdsQ08wdEJRekZDTzBsQlEwUTdVVUZEUXl4SlFVRkpMRVZCUVVVc2FVSkJRV2xDTzFGQlEzWkNMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyWXNUMEZCVHl4RlFVRkZMR1ZCUVdVN1dVRkRlRUlzUzBGQlN5eEZRVUZGTERKQ1FVRXlRanRUUVVOc1F5eERRVUZETzB0QlEwWTdTVUZEUkR0UlFVTkRMRWxCUVVrc1JVRkJSU3haUVVGWk8xRkJRMnhDTEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMllzVDBGQlR5eEZRVUZGTEZkQlFWYzdXVUZEY0VJc1QwRkJUeXhGUVVGRkxHbENRVUZwUWp0VFFVTXhRaXhEUVVGRE8wdEJRMFk3U1VGRFJEdFJRVU5ETEVsQlFVa3NSVUZCUlN4cFFrRkJhVUk3VVVGRGRrSXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRFppeFBRVUZQTEVWQlFVVXNVMEZCVXp0WlFVTnNRaXhMUVVGTExFVkJRVVVzTWtKQlFUSkNPMU5CUTJ4RExFTkJRVU03UzBGRFJqdERRVU5FTEVOQlFVTTdRVUZGU0N4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhKUVVGSkxGbEJRVmtzUjBGQmFVSTdVVUZEYUVNc1lVRkJZU3hyUlVGQllUdFJRVU14UWl4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRU5CUVVNN1NVRkZSaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRelZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUXpsRExFTkJRVU03U1VGRlJpeEpRVUZKTEZGQlFWRXNSVUZCUlR0UlFVTmlMRmxCUVZrc1IwRkJSenRaUVVOa0xFZEJRVWNzV1VGQldUdFpRVU5tTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSVHRUUVVOeVFpeERRVUZETzB0QlEwWTdTVUZGUkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwicHJvY2Vzc1Bvc3RTaXRlIiwiZGV0YWlscyIsInN0YXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCJwcm9jZXNzU291cmNlU2l0ZSIsInByb2Nlc3NTZWFyY2hTaXRlIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZ2V0Iiwic2l0ZURhdGFNYXAiLCJwYXRoIiwicHJvY2VzcyIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJzaXRlRGF0YSIsImZpbmQiLCJ0ZXN0IiwicGF0aG5hbWUiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;