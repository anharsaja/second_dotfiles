var __webpack_exports__={};const presence=new Presence({clientId:"1137362720254074972"}),browsingTimestamp=Math.floor(Date.now()/1e3),anime=document.querySelector("#anime_name_id"),animeicon=document.querySelector(".img-fluid.lozad"),{pathname,href}=document.location;presence.on("UpdateData",(async()=>{const e={startTimestamp:browsingTimestamp,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/O/ogladajanime/assets/0.png"};"/main2"===pathname?e.details="Przegląda stronę główną":pathname.includes("/search/name/")?e.details="Szuka Anime":pathname.includes("/chat")?e.details="Rozmawia na chacie":pathname.includes("/anime_list/")?(e.details="Przegląda listę Anime",e.buttons=[{label:"Zobacz Listę Anime",url:href}]):pathname.includes("/anime")&&(anime&&(e.details=anime.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/O/ogladajanime/assets/0.png",e.buttons=[{label:"Obejrzyj Teraz",url:href}],e.state=`Odcinek : ${parseInt(href.split("/").pop()||"1",10)||1}`),animeicon&&(e.largeImageKey=animeicon.getAttribute("data-srcset").split(" ")[0])),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUFFQyxTQUFVLHdCQUEwQkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQU9DLE1BQVFDLFNBQVNDLGNBQWMsa0JBQW1CQyxVQUFZRixTQUFTQyxjQUFjLHFCQUFxQixTQUFVLE1BQVdELFNBQVNHLFNBQy9QWixTQUFTYSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGVBQWdCYixrQkFDaEJjLGNBQWUsa0VBRUYsV0FBYkMsU0FDQUgsRUFBYUksUUFBVSwwQkFDbEJELFNBQVNFLFNBQVMsaUJBQ3ZCTCxFQUFhSSxRQUFVLGNBQ2xCRCxTQUFTRSxTQUFTLFNBQ3ZCTCxFQUFhSSxRQUFVLHFCQUNsQkQsU0FBU0UsU0FBUyxpQkFDdkJMLEVBQWFJLFFBQVUsd0JBQ3ZCSixFQUFhTSxRQUFVLENBQUMsQ0FBRUMsTUFBTyxxQkFBc0JDLElBQUtDLFFBRXZETixTQUFTRSxTQUFTLFlBQ25CWixRQUNBTyxFQUFhSSxRQUFVWCxNQUFNaUIsWUFDN0JWLEVBQWFXLGNBQ1QsaUVBQ0pYLEVBQWFNLFFBQVUsQ0FBQyxDQUFFQyxNQUFPLGlCQUFrQkMsSUFBS0MsT0FDeERULEVBQWFZLE1BQVEsYUFBYUMsU0FBU0osS0FBS0ssTUFBTSxLQUFLQyxPQUFTLElBQUssS0FBTyxLQUVoRm5CLFlBQ0FJLEVBQWFFLGNBQWdCTixVQUN4Qm9CLGFBQWEsZUFDYkYsTUFBTSxLQUFLLEtBR3hCN0IsU0FBU2dDLFlBQVlqQixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2UoeyBjbGllbnRJZDogXCIxMTM3MzYyNzIwMjU0MDc0OTcyXCIgfSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksIGFuaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbmltZV9uYW1lX2lkXCIpLCBhbmltZWljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltZy1mbHVpZC5sb3phZFwiKSwgeyBwYXRobmFtZSwgaHJlZiB9ID0gZG9jdW1lbnQubG9jYXRpb247XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTy9vZ2xhZGFqYW5pbWUvYXNzZXRzLzAucG5nXCIsXG4gICAgfTtcbiAgICBpZiAocGF0aG5hbWUgPT09IFwiL21haW4yXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJQcnplZ2zEhWRhIHN0cm9uxJkgZ8WCw7N3bsSFXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvc2VhcmNoL25hbWUvXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU3p1a2EgQW5pbWVcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9jaGF0XCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUm96bWF3aWEgbmEgY2hhY2llXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvYW5pbWVfbGlzdC9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlByemVnbMSFZGEgbGlzdMSZIEFuaW1lXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiWm9iYWN6IExpc3TEmSBBbmltZVwiLCB1cmw6IGhyZWYgfV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2FuaW1lXCIpKSB7XG4gICAgICAgIGlmIChhbmltZSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBhbmltZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID1cbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTy9vZ2xhZGFqYW5pbWUvYXNzZXRzLzAucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIk9iZWpyenlqIFRlcmF6XCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBPZGNpbmVrIDogJHtwYXJzZUludChocmVmLnNwbGl0KFwiL1wiKS5wb3AoKSB8fCBcIjFcIiwgMTApIHx8IDF9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5pbWVpY29uKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGFuaW1laWNvblxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY3NldFwiKVxuICAgICAgICAgICAgICAgIC5zcGxpdChcIiBcIilbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZGQlFWRXNSVUZCUlN4eFFrRkJjVUlzUlVGQlJTeERRVUZETEVWQlEycEZMR2xDUVVGcFFpeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVTnFSQ3hMUVVGTExFZEJRV2RDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNSVUZETjBRc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUlVGRGRFUXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0QlFVVjRReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRiRU1zWTBGQll5eEZRVUZGTEdsQ1FVRnBRanRSUVVOcVF5eGhRVUZoTEVWQlExb3NaMFZCUVdkRk8wdEJRMnBGTEVOQlFVTTdTVUZGUml4SlFVRkpMRkZCUVZFc1MwRkJTeXhSUVVGUk8xRkJRVVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4NVFrRkJlVUlzUTBGQlF6dFRRVU4yUlN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETzFGQlF6RkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzFOQlEycERMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEYkVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRUUVVONFF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3VVVGRE0wTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0UlFVTXZReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc2IwSkJRVzlDTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03UzBGRGNFVTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdVVUZEZGtNc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFZpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRGVrTXNXVUZCV1N4RFFVRkRMR0ZCUVdFN1owSkJRM3BDTEdkRlFVRm5SU3hEUVVGRE8xbEJRMnhGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVVm9SU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdGQlEzQkNMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVTXZReXhGUVVGRkxFTkJRVU03VTBGRFNEdFJRVVZFTEVsQlFVa3NVMEZCVXl4RlFVRkZPMWxCUTJRc1dVRkJXU3hEUVVGRExHRkJRV0VzUjBGQlJ5eFRRVUZUTzJsQ1FVTndReXhaUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETzJsQ1FVTXpRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRhRUk3UzBGRFJEdEpRVU5FTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03UVVGRGNFTXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiYW5pbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbmltZWljb24iLCJsb2NhdGlvbiIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJzdGFydFRpbWVzdGFtcCIsImxhcmdlSW1hZ2VLZXkiLCJwYXRobmFtZSIsImRldGFpbHMiLCJpbmNsdWRlcyIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsImhyZWYiLCJ0ZXh0Q29udGVudCIsInNtYWxsSW1hZ2VLZXkiLCJzdGF0ZSIsInBhcnNlSW50Iiwic3BsaXQiLCJwb3AiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;