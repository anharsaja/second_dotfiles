var __webpack_exports__={};const presence=new Presence({clientId:"934462939417673770"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/StockX/assets/logo.png",details:"Browsing...",startTimestamp:browsingTimestamp},t=document.querySelector("#main-content > div > section:nth-child(3) > div > div.css-0 > h1"),{pathname:n}=document.location,[s,i,r]=await Promise.all([presence.getSetting("price"),presence.getSetting("image"),presence.getSetting("buttons")]);n.startsWith("/search")?(e.details="Searching For:",e.state=document.querySelector("#browse-wrapper nav > ol > li:nth-child(3) > p").textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):n.startsWith("/buy")||n.startsWith("/sell")?"/sell"===n?e.details="Selling an Item":(n.startsWith("/buy")?e.details="Buying a Product/Placing a Bid:":e.details="Selling an Item:",e.state=document.querySelector("#main-content > div > div > div > div > div > h1").textContent,e.largeImageKey=document.querySelector("#main-content > div > div > div > div > div > img")?.src??"logo"):n.startsWith("/news/")?"/news/"===n?e.details="Browsing News":(e.details="Reading an Article:",e.state=document.title.replace("- StockX News","").trim(),e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.buttons=[{label:"Read Article",url:document.URL}]):n.startsWith("/about")?(e.details="Reading about StockX",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):t?(s?(e.details=`Viewing: ${t.textContent}`,e.state=`${document.querySelector("#main-content div:nth-child(1) > div > dl > dd").textContent} / ${document.querySelector("#main-content div:nth-child(3) > div > dl > dd").textContent}`):(e.details="Viewing Product:",e.state=t.textContent),e.largeImageKey=document.querySelector("div > div > div > img")?.src??"logo",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.buttons=[{label:"View Product",url:document.URL}]):document.querySelector("#browse-wrapper > div > h1")&&(e.details="Viewing Category:",e.state=document.querySelector("#browse-wrapper > div > h1").textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"),i||(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/S/StockX/assets/logo.png"),r||delete e.buttons,presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsOERBQ2ZDLFFBQVMsY0FDVEMsZUFBZ0JWLG1CQUNqQlcsRUFBY0MsU0FBU0MsY0FBYyxzRUFBc0UsU0FBRUMsR0FBYUYsU0FBU0csVUFBV0MsRUFBT0MsRUFBT0MsU0FBaUJDLFFBQVFDLElBQUksQ0FDeEx2QixTQUFTd0IsV0FBVyxTQUNwQnhCLFNBQVN3QixXQUFXLFNBQ3BCeEIsU0FBU3dCLFdBQVcsYUFFcEJQLEVBQVNRLFdBQVcsWUFDcEJmLEVBQWFFLFFBQVUsaUJBQ3ZCRixFQUFhZ0IsTUFBUVgsU0FBU0MsY0FBYyxrREFBa0RXLFlBQzlGakIsRUFBYWtCLGNBQWdCLGtEQUV4QlgsRUFBU1EsV0FBVyxTQUFXUixFQUFTUSxXQUFXLFNBQ3ZDLFVBQWJSLEVBQ0FQLEVBQWFFLFFBQVUsbUJBRW5CSyxFQUFTUSxXQUFXLFFBQ3BCZixFQUFhRSxRQUFVLGtDQUV2QkYsRUFBYUUsUUFBVSxtQkFDM0JGLEVBQWFnQixNQUFRWCxTQUFTQyxjQUFjLG9EQUFvRFcsWUFDaEdqQixFQUFhQyxjQUNUSSxTQUFTQyxjQUFjLHNEQUFzRGEsS0FBTyxRQUd2RlosRUFBU1EsV0FBVyxVQUNSLFdBQWJSLEVBQ0FQLEVBQWFFLFFBQVUsaUJBRXZCRixFQUFhRSxRQUFVLHNCQUN2QkYsRUFBYWdCLE1BQVFYLFNBQVNlLE1BQU1DLFFBQVEsZ0JBQWlCLElBQUlDLE9BQ2pFdEIsRUFBYWtCLGNBQWdCLGtEQUM3QmxCLEVBQWFXLFFBQVUsQ0FBQyxDQUFFWSxNQUFPLGVBQWdCQyxJQUFLbkIsU0FBU29CLE9BRzlEbEIsRUFBU1EsV0FBVyxXQUN6QmYsRUFBYUUsUUFBVSx1QkFDdkJGLEVBQWFrQixjQUFnQixtREFFeEJkLEdBQ0RLLEdBQ0FULEVBQWFFLFFBQVUsWUFBWUUsRUFBWWEsY0FDL0NqQixFQUFhZ0IsTUFBUSxHQUFHWCxTQUFTQyxjQUFjLGtEQUFrRFcsaUJBQWlCWixTQUFTQyxjQUFjLGtEQUFrRFcsZ0JBRzNMakIsRUFBYUUsUUFBVSxtQkFDdkJGLEVBQWFnQixNQUFRWixFQUFZYSxhQUVyQ2pCLEVBQWFDLGNBQ1RJLFNBQVNDLGNBQWMsMEJBQTBCYSxLQUM3QyxPQUNSbkIsRUFBYWtCLGNBQWdCLGlEQUM3QmxCLEVBQWFXLFFBQVUsQ0FBQyxDQUFFWSxNQUFPLGVBQWdCQyxJQUFLbkIsU0FBU29CLE9BRTFEcEIsU0FBU0MsY0FBYyxnQ0FDNUJOLEVBQWFFLFFBQVUsb0JBQ3ZCRixFQUFhZ0IsTUFBUVgsU0FBU0MsY0FBYyw4QkFBOEJXLFlBQzFFakIsRUFBYWtCLGNBQWdCLG1EQUU1QlIsSUFDRFYsRUFBYUMsY0FDVCwrREFFSFUsVUFDTVgsRUFBYVcsUUFDeEJyQixTQUFTb0MsWUFBWTFCLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTM0NDYyOTM5NDE3NjczNzcwXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TdG9ja1gvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmcuLi5cIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHByb2R1Y3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnQgPiBkaXYgPiBzZWN0aW9uOm50aC1jaGlsZCgzKSA+IGRpdiA+IGRpdi5jc3MtMCA+IGgxXCIpLCB7IHBhdGhuYW1lIH0gPSBkb2N1bWVudC5sb2NhdGlvbiwgW3ByaWNlLCBpbWFnZSwgYnV0dG9uc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJwcmljZVwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImltYWdlXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKSxcbiAgICBdKTtcbiAgICBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9zZWFyY2hcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBGb3I6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnJvd3NlLXdyYXBwZXIgbmF2ID4gb2wgPiBsaTpudGgtY2hpbGQoMykgPiBwXCIpLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2J1eVwiKSB8fCBwYXRobmFtZS5zdGFydHNXaXRoKFwiL3NlbGxcIikpIHtcbiAgICAgICAgaWYgKHBhdGhuYW1lID09PSBcIi9zZWxsXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VsbGluZyBhbiBJdGVtXCI7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYnV5XCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCdXlpbmcgYSBQcm9kdWN0L1BsYWNpbmcgYSBCaWQ6XCI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlbGxpbmcgYW4gSXRlbTpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnQgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBpbWdcIik/LnNyYyA/PyBcImxvZ29cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL25ld3MvXCIpKSB7XG4gICAgICAgIGlmIChwYXRobmFtZSA9PT0gXCIvbmV3cy9cIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBOZXdzXCI7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYW4gQXJ0aWNsZTpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnRpdGxlLnJlcGxhY2UoXCItIFN0b2NrWCBOZXdzXCIsIFwiXCIpLnRyaW0oKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJSZWFkIEFydGljbGVcIiwgdXJsOiBkb2N1bWVudC5VUkwgfV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hYm91dFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBhYm91dCBTdG9ja1hcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb2R1Y3ROYW1lKSB7XG4gICAgICAgIGlmIChwcmljZSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmlld2luZzogJHtwcm9kdWN0TmFtZS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnQgZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGRsID4gZGRcIikudGV4dENvbnRlbnR9IC8gJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudCBkaXY6bnRoLWNoaWxkKDMpID4gZGl2ID4gZGwgPiBkZFwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgUHJvZHVjdDpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHByb2R1Y3ROYW1lLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYgPiBkaXYgPiBkaXYgPiBpbWdcIik/LnNyYyA/P1xuICAgICAgICAgICAgICAgIFwibG9nb1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgUHJvZHVjdFwiLCB1cmw6IGRvY3VtZW50LlVSTCB9XTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNicm93c2Utd3JhcHBlciA+IGRpdiA+IGgxXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIENhdGVnb3J5OlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jyb3dzZS13cmFwcGVyID4gZGl2ID4gaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgIH1cbiAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1N0b2NrWC9hc3NldHMvbG9nby5wbmdcIjtcbiAgICB9XG4gICAgaWYgKCFidXR0b25zKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN4RlFVTmFMRFpFUVVFMlJEdFJRVU01UkN4UFFVRlBMRVZCUVVVc1lVRkJZVHRSUVVOMFFpeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVWQlEwUXNWMEZCVnl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRMjVETEcxRlFVRnRSU3hEUVVOdVJTeEZRVU5FTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGRGFFTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFOUJRVThzUTBGQlF5eEhRVUZITEUxQlFVMHNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVNelF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlZMRTlCUVU4c1EwRkJRenRSUVVOeVF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlZMRTlCUVU4c1EwRkJRenRSUVVOeVF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlZMRk5CUVZNc1EwRkJRenRMUVVOMlF5eERRVUZETEVOQlFVTTdTVUZEU2l4SlFVRkpMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdVVUZEYmtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRSUVVONFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRekZETEdkRVFVRm5SQ3hEUVVOb1JDeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTmtMRmxCUVZrc1EwRkJReXhoUVVGaExHMUVRVUZuUWl4RFFVRkRPMHRCUXpORE8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1VVRkRka1VzU1VGQlNTeFJRVUZSTEV0QlFVc3NUMEZCVHp0WlFVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1lVRkRPVVE3V1VGRFNpeEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRE8yZENRVU01UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbERRVUZwUXl4RFFVRkRPenRuUWtGRGNrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0WlFVTXZReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpGRExHdEVRVUZyUkN4RFFVTnNSQ3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU5rTEZsQlFWa3NRMEZCUXl4aFFVRmhPMmRDUVVONlFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTnlRaXh0UkVGQmJVUXNRMEZEYmtRc1JVRkJSU3hIUVVGSExFbEJRVWtzVFVGQlRTeERRVUZETzFOQlEyeENPMHRCUTBRN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1VVRkRla01zU1VGQlNTeFJRVUZSTEV0QlFVc3NVVUZCVVR0WlFVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETzJGQlF6ZEVPMWxCUTBvc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenRaUVVNM1F5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFpRVU40UlN4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0WlFVTTFReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1kwRkJZeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOMFJUdExRVU5FTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFGQlEzcERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1VVRkRPVU1zV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03UzBGRE5VTTdVMEZCVFN4SlFVRkpMRmRCUVZjc1JVRkJSVHRSUVVOMlFpeEpRVUZKTEV0QlFVc3NSVUZCUlR0WlFVTldMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzV1VGQldTeFhRVUZYTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1dVRkROMFFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVTndRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4blJFRkJaMFFzUTBGRGFFUXNRMEZCUXl4WFFVTklMRTFCUTBNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrSXNaMFJCUVdkRUxFTkJRMmhFTEVOQlFVTXNWMEZEU0N4RlFVRkZMRU5CUVVNN1UwRkRTRHRoUVVGTk8xbEJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dFpRVU14UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF5eFhRVUZYTEVOQlFVTTdVMEZETjBNN1VVRkRSQ3haUVVGWkxFTkJRVU1zWVVGQllUdFpRVU42UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGdFFpeDFRa0ZCZFVJc1EwRkJReXhGUVVGRkxFZEJRVWM3WjBKQlEzUkZMRTFCUVUwc1EwRkJRenRSUVVOU0xGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8xRkJRek5ETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeGpRVUZqTEVWQlFVVXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzB0QlEzUkZPMU5CUVUwc1NVRkRUaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZ4UWl3MFFrRkJORUlzUTBGQlF5eEZRVU4yUlR0UlFVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYlVKQlFXMUNMRU5CUVVNN1VVRkRNME1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNeFF5dzBRa0ZCTkVJc1EwRkROVUlzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEWkN4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0TFFVTTFRenRKUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdVVUZEV0N4WlFVRlpMRU5CUVVNc1lVRkJZVHRaUVVONlFpdzJSRUZCTmtRc1EwRkJRenRMUVVNdlJEdEpRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1QwRkJUeXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlF6RkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdRVUZEY0VNc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsImRldGFpbHMiLCJzdGFydFRpbWVzdGFtcCIsInByb2R1Y3ROYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInByaWNlIiwiaW1hZ2UiLCJidXR0b25zIiwiUHJvbWlzZSIsImFsbCIsImdldFNldHRpbmciLCJzdGFydHNXaXRoIiwic3RhdGUiLCJ0ZXh0Q29udGVudCIsInNtYWxsSW1hZ2VLZXkiLCJzcmMiLCJ0aXRsZSIsInJlcGxhY2UiLCJ0cmltIiwibGFiZWwiLCJ1cmwiLCJVUkwiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;