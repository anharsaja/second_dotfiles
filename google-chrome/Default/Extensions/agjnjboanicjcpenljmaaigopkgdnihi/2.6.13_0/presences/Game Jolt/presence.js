var __webpack_exports__={};const presence=new Presence({clientId:"633419305836347393"}),pages={"/games":"Games","/login":"Login","/join":"Register","/terms":"Terms of Use","/privacy":"Privacy Policy","/cookies":"Cookie Policy","/welcome":"Just Registered!","/discover":"Explore","/client":"Client","/forums":"Forums","/notifications":"Notifications","/library":"Game Library","/dashboard/profile/edit":"Edit Profile","/settings":"Settings","/dashboard/games/add":"Add a Game","/firesides":"Searching for a Fireside","/dashboard/fireside/add":"Staring a Fireside"},creatingNow=["Gathering Wood","Lighting the Fire","Getting the Flint & Steel","Searching how to start a campfire","Creating"][Math.floor(5*Math.random())+0];presence.on("UpdateData",(async()=>{const e=document.location.pathname,t=document.querySelector("#content > div > div > div > div > header > section > div.container > div.row > div > div > h1 > a"),i=document.querySelector("#content > div > div > div > div > header > section > div.container > div.row > div > div > div > a > small"),s=document.querySelector("#content > div > div > header > section > div > div.row > div > div > h1 > small"),a={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Game%20Jolt/assets/logo.png",startTimestamp:Math.floor(Date.now()/1e3)};if(e.includes("/games/tag-")){const t=e.replace("/games/tag-","");a.details="Browsing games by tag:",a.state=t[0].toUpperCase()+t.slice(1)}else if(e.includes("/dashboard/fireside/add"))a.details=pages[e],a.state=creatingNow;else if(e.startsWith("/firesides")||e.startsWith("/fireside"))if(""!==e.slice("/firesides".length)){const t=document.querySelector("#content > div > div > div > div > h2 > small > a").getAttribute("href").slice(1);a.details=`Sitting By ${t.slice(1)}'s Fireside`,a.state=`Fireside name: ${document.querySelector("#content > div > div > div > div > h2").textContent.replace(/(\t|\n)/gm,"").replace(t,"").slice(13)}`,a.buttons=[{label:"Join Them!",url:`https://gamejolt.com${e}`}]}else a.details=pages[e],a.state="Searching";else if(e.includes("/games/")&&t&&""!==t.textContent)a.details=`Viewing a game${i&&""!==i.textContent?` by ${i.textContent}`:""}:`,a.state=t.textContent.trim();else if(pages[e]||pages[e.slice(0,-1)])a.details="Viewing a page:",a.state=pages[e]||pages[e.slice(0,-1)];else if(e.includes("/search")){const t=document.title.replace(" - Game Jolt","").replace("Search results for ","");a.details=`Searching for${e.includes("/search/users")?" a user":e.includes("/search/games")?" a game":""}:`,a.state=t[0].toUpperCase()+t.slice(1),a.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"}else s&&""!==s.textContent?(a.details="Viewing a user:",a.state=s.textContent):(a.details="Viewing a page:",a.state="Home");a.details&&a.state&&presence.setActivity(a)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0IsU0FBUzBDLFlBQVl4QixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYzMzQxOTMwNTgzNjM0NzM5M1wiLFxufSksIHBhZ2VzID0ge1xuICAgIFwiL2dhbWVzXCI6IFwiR2FtZXNcIixcbiAgICBcIi9sb2dpblwiOiBcIkxvZ2luXCIsXG4gICAgXCIvam9pblwiOiBcIlJlZ2lzdGVyXCIsXG4gICAgXCIvdGVybXNcIjogXCJUZXJtcyBvZiBVc2VcIixcbiAgICBcIi9wcml2YWN5XCI6IFwiUHJpdmFjeSBQb2xpY3lcIixcbiAgICBcIi9jb29raWVzXCI6IFwiQ29va2llIFBvbGljeVwiLFxuICAgIFwiL3dlbGNvbWVcIjogXCJKdXN0IFJlZ2lzdGVyZWQhXCIsXG4gICAgXCIvZGlzY292ZXJcIjogXCJFeHBsb3JlXCIsXG4gICAgXCIvY2xpZW50XCI6IFwiQ2xpZW50XCIsXG4gICAgXCIvZm9ydW1zXCI6IFwiRm9ydW1zXCIsXG4gICAgXCIvbm90aWZpY2F0aW9uc1wiOiBcIk5vdGlmaWNhdGlvbnNcIixcbiAgICBcIi9saWJyYXJ5XCI6IFwiR2FtZSBMaWJyYXJ5XCIsXG4gICAgXCIvZGFzaGJvYXJkL3Byb2ZpbGUvZWRpdFwiOiBcIkVkaXQgUHJvZmlsZVwiLFxuICAgIFwiL3NldHRpbmdzXCI6IFwiU2V0dGluZ3NcIixcbiAgICBcIi9kYXNoYm9hcmQvZ2FtZXMvYWRkXCI6IFwiQWRkIGEgR2FtZVwiLFxuICAgIFwiL2ZpcmVzaWRlc1wiOiBcIlNlYXJjaGluZyBmb3IgYSBGaXJlc2lkZVwiLFxuICAgIFwiL2Rhc2hib2FyZC9maXJlc2lkZS9hZGRcIjogXCJTdGFyaW5nIGEgRmlyZXNpZGVcIixcbn0sIGNyZWF0aW5nTm93ID0gW1xuICAgIFwiR2F0aGVyaW5nIFdvb2RcIixcbiAgICBcIkxpZ2h0aW5nIHRoZSBGaXJlXCIsXG4gICAgXCJHZXR0aW5nIHRoZSBGbGludCAmIFN0ZWVsXCIsXG4gICAgXCJTZWFyY2hpbmcgaG93IHRvIHN0YXJ0IGEgY2FtcGZpcmVcIixcbiAgICBcIkNyZWF0aW5nXCIsXG5dW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg0IC0gMCArIDEpKSArIDBdO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUsIGdhbWVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gaGVhZGVyID4gc2VjdGlvbiA+IGRpdi5jb250YWluZXIgPiBkaXYucm93ID4gZGl2ID4gZGl2ID4gaDEgPiBhXCIpLCBhdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBoZWFkZXIgPiBzZWN0aW9uID4gZGl2LmNvbnRhaW5lciA+IGRpdi5yb3cgPiBkaXYgPiBkaXYgPiBkaXYgPiBhID4gc21hbGxcIiksIHByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQgPiBkaXYgPiBkaXYgPiBoZWFkZXIgPiBzZWN0aW9uID4gZGl2ID4gZGl2LnJvdyA+IGRpdiA+IGRpdiA+IGgxID4gc21hbGxcIiksIHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2FtZSUyMEpvbHQvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICB9O1xuICAgIGlmIChwYWdlLmluY2x1ZGVzKFwiL2dhbWVzL3RhZy1cIikpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IHBhZ2UucmVwbGFjZShcIi9nYW1lcy90YWctXCIsIFwiXCIpO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgZ2FtZXMgYnkgdGFnOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0YWdOYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyB0YWdOYW1lLnNsaWNlKDEpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYWdlLmluY2x1ZGVzKFwiL2Rhc2hib2FyZC9maXJlc2lkZS9hZGRcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYWdlc1twYWdlXTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gY3JlYXRpbmdOb3c7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhZ2Uuc3RhcnRzV2l0aChcIi9maXJlc2lkZXNcIikgfHwgcGFnZS5zdGFydHNXaXRoKFwiL2ZpcmVzaWRlXCIpKSB7XG4gICAgICAgIGlmIChwYWdlLnNsaWNlKFwiL2ZpcmVzaWRlc1wiLmxlbmd0aCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcmVzaWRlT3duZXIgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBoMiA+IHNtYWxsID4gYVwiKVxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDEpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU2l0dGluZyBCeSAke2ZpcmVzaWRlT3duZXIuc2xpY2UoMSl9J3MgRmlyZXNpZGVgO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEZpcmVzaWRlIG5hbWU6ICR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNjb250ZW50ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gaDJcIilcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQucmVwbGFjZSgvKFxcdHxcXG4pL2dtLCBcIlwiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGZpcmVzaWRlT3duZXIsIFwiXCIpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDEzKX1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJKb2luIFRoZW0hXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYGh0dHBzOi8vZ2FtZWpvbHQuY29tJHtwYWdlfWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHBhZ2VzW3BhZ2VdO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJTZWFyY2hpbmdcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYWdlLmluY2x1ZGVzKFwiL2dhbWVzL1wiKSAmJlxuICAgICAgICBnYW1lTmFtZSAmJlxuICAgICAgICBnYW1lTmFtZS50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nIGEgZ2FtZSR7YXV0aG9yICYmIGF1dGhvci50ZXh0Q29udGVudCAhPT0gXCJcIiA/IGAgYnkgJHthdXRob3IudGV4dENvbnRlbnR9YCA6IFwiXCJ9OmA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGdhbWVOYW1lLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFnZXNbcGFnZV0gfHwgcGFnZXNbcGFnZS5zbGljZSgwLCAtMSldKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcGFnZTpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcGFnZXNbcGFnZV0gfHwgcGFnZXNbcGFnZS5zbGljZSgwLCAtMSldO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYWdlLmluY2x1ZGVzKFwiL3NlYXJjaFwiKSkge1xuICAgICAgICBjb25zdCBmaXhlZFNlYXJjaE5hbWUgPSBkb2N1bWVudC50aXRsZVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIgLSBHYW1lIEpvbHRcIiwgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiU2VhcmNoIHJlc3VsdHMgZm9yIFwiLCBcIlwiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU2VhcmNoaW5nIGZvciR7cGFnZS5pbmNsdWRlcyhcIi9zZWFyY2gvdXNlcnNcIilcbiAgICAgICAgICAgID8gXCIgYSB1c2VyXCJcbiAgICAgICAgICAgIDogYCR7cGFnZS5pbmNsdWRlcyhcIi9zZWFyY2gvZ2FtZXNcIikgPyBcIiBhIGdhbWVcIiA6IFwiXCJ9YH06YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgIGZpeGVkU2VhcmNoTmFtZVswXS50b1VwcGVyQ2FzZSgpICsgZml4ZWRTZWFyY2hOYW1lLnNsaWNlKDEpO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9maWxlICYmIHByb2ZpbGUudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSB1c2VyOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwcm9maWxlLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBwYWdlOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkhvbWVcIjtcbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzICYmIHByZXNlbmNlRGF0YS5zdGF0ZSlcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhMUVVGTExFZEJRVFJDTzBsQlEyaERMRkZCUVZFc1JVRkJSU3hQUVVGUE8wbEJRMnBDTEZGQlFWRXNSVUZCUlN4UFFVRlBPMGxCUTJwQ0xFOUJRVThzUlVGQlJTeFZRVUZWTzBsQlEyNUNMRkZCUVZFc1JVRkJSU3hqUVVGak8wbEJRM2hDTEZWQlFWVXNSVUZCUlN4blFrRkJaMEk3U1VGRE5VSXNWVUZCVlN4RlFVRkZMR1ZCUVdVN1NVRkRNMElzVlVGQlZTeEZRVUZGTEd0Q1FVRnJRanRKUVVNNVFpeFhRVUZYTEVWQlFVVXNVMEZCVXp0SlFVTjBRaXhUUVVGVExFVkJRVVVzVVVGQlVUdEpRVU51UWl4VFFVRlRMRVZCUVVVc1VVRkJVVHRKUVVOdVFpeG5Ra0ZCWjBJc1JVRkJSU3hsUVVGbE8wbEJRMnBETEZWQlFWVXNSVUZCUlN4alFVRmpPMGxCUXpGQ0xIbENRVUY1UWl4RlFVRkZMR05CUVdNN1NVRkRla01zVjBGQlZ5eEZRVUZGTEZWQlFWVTdTVUZEZGtJc2MwSkJRWE5DTEVWQlFVVXNXVUZCV1R0SlFVTndReXhaUVVGWkxFVkJRVVVzTUVKQlFUQkNPMGxCUTNoRExIbENRVUY1UWl4RlFVRkZMRzlDUVVGdlFqdERRVU12UXl4RlFVTkVMRmRCUVZjc1IwRkJSenRKUVVOaUxHZENRVUZuUWp0SlFVTm9RaXh0UWtGQmJVSTdTVUZEYmtJc01rSkJRVEpDTzBsQlF6TkNMRzFEUVVGdFF6dEpRVU51UXl4VlFVRlZPME5CUTFZc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVVZvUkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkRkRU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTJoRExHOUhRVUZ2Unl4RFFVTnlSaXhGUVVOb1FpeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRPVUlzTmtkQlFUWkhMRU5CUXpsR0xFVkJRMmhDTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNdlFpeHJSa0ZCYTBZc1EwRkRia1VzUlVGRGFFSXNXVUZCV1N4SFFVRnBRanRSUVVNMVFpeGhRVUZoTEVWQlExb3NhMFZCUVd0Rk8xRkJRMjVGTEdOQlFXTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1MwRkROME1zUTBGQlF6dEpRVVZJTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUlVGQlJUdFJRVU5xUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVWb1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzFGQlEyaEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRha1U3VTBGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNSVUZCUlR0UlFVTndSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOdVF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmRCUVZjc1EwRkJRenRMUVVOcVF6dFRRVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8xRkJRM3BGTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZPMWxCUXpORExFMUJRVTBzWVVGQllTeEhRVUZITEZGQlFWRTdhVUpCUXpWQ0xHRkJRV0VzUTBGQlF5eHRSRUZCYlVRc1EwRkJRenRwUWtGRGJFVXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJRenRwUWtGRGNFSXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMWdzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4alFVRmpMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTjZSU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEd0Q1FVRnJRaXhSUVVGUk8ybENRVU0zUXl4aFFVRmhMRU5CUVVNc2RVTkJRWFZETEVOQlFVTTdhVUpCUTNSRUxGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJRenRwUWtGRGNFTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFTkJRVU03YVVKQlF6RkNMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETzFsQlEyUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenRuUWtGRGRFSTdiMEpCUTBNc1MwRkJTeXhGUVVGRkxGbEJRVms3YjBKQlEyNUNMRWRCUVVjc1JVRkJSU3gxUWtGQmRVSXNTVUZCU1N4RlFVRkZPMmxDUVVOc1F6dGhRVU5FTEVOQlFVTTdVMEZEUmp0aFFVRk5PMWxCUTA0c1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRia01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4WFFVRlhMRU5CUVVNN1UwRkRha003UzBGRFJEdFRRVUZOTEVsQlEwNHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGVFSXNVVUZCVVR0UlFVTlNMRkZCUVZFc1EwRkJReXhYUVVGWExFdEJRVXNzUlVGQlJTeEZRVU14UWp0UlFVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYVVKQlEzUkNMRTFCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTNKRkxFZEJRVWNzUTBGQlF6dFJRVU5LTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0TFFVTnFSRHRUUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGRGJrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0UlFVTjZReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlF6ZEVPMU5CUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMUZCUTNCRExFMUJRVTBzWlVGQlpTeEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxPMkZCUTNCRExFOUJRVThzUTBGQlF5eGpRVUZqTEVWQlFVVXNSVUZCUlN4RFFVRkRPMkZCUXpOQ0xFOUJRVThzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVVZ5UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHZENRVU4wUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF6dFpRVU0zUWl4RFFVRkRMRU5CUVVNc1UwRkJVenRaUVVOWUxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVOMFJDeEhRVUZITEVOQlFVTTdVVUZEU2l4WlFVRlpMRU5CUVVNc1MwRkJTenRaUVVOcVFpeGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzWlVGQlpTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNM1JDeFpRVUZaTEVOQlFVTXNZVUZCWVN4dFJFRkJaMElzUTBGQlF6dExRVU16UXp0VFFVRk5MRWxCUVVrc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eFhRVUZYTEV0QlFVc3NSVUZCUlN4RlFVRkZPMUZCUTJwRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03VVVGRGVrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETzB0QlEzcERPMU5CUVUwN1VVRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8xRkJRM3BETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRE8wdEJRelZDTzBsQlJVUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUeXhKUVVGSkxGbEJRVmtzUTBGQlF5eExRVUZMTzFGQlF6ZERMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdRVUZEY2tNc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJwYWdlcyIsImNyZWF0aW5nTm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwib24iLCJhc3luYyIsInBhZ2UiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJnYW1lTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJhdXRob3IiLCJwcm9maWxlIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImluY2x1ZGVzIiwidGFnTmFtZSIsInJlcGxhY2UiLCJkZXRhaWxzIiwic3RhdGUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic3RhcnRzV2l0aCIsImxlbmd0aCIsImZpcmVzaWRlT3duZXIiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsInRyaW0iLCJmaXhlZFNlYXJjaE5hbWUiLCJ0aXRsZSIsInNtYWxsSW1hZ2VLZXkiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;