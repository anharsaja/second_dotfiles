var __webpack_exports__={};const presence=new Presence({clientId:"1017593958546821160"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/M/MusicBrainz%20Picard/assets/logo.png",startTimestamp:browsingTimestamp},{hostname:t,pathname:a}=window.location;switch(t){case"picard.musicbrainz.org":switch(e.details="Browsing...",a.split("/")[1]){case"":e.state="Home page";break;case"docs":e.details="Browsing documentation",e.state=document.querySelector("h1").textContent;break;default:e.state=document.title.match(/(.*?)( - MusicBrainz Picard$|$)/)[1]}break;case"picard-docs.musicbrainz.org":if(e.details="Browsing documentation...","index.html"===a.match(/^(?:\/v[\d.]+)?\/[a-z]{2}\/(.*)/)[1])e.state="Home page";else{const{textContent:t}=document.querySelector("h1");e.state=t.substring(0,t.length-1)}}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWMsS0FDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSw0RUFDZkMsZUFBZ0JSLG9CQUNqQixTQUFFUyxFQUFRLFNBQUVDLEdBQWFDLE9BQU9DLFNBQ25DLE9BQVFILEdBQ0osSUFBSyx5QkFFRCxPQURBSCxFQUFhTyxRQUFVLGNBQ2ZILEVBQVNJLE1BQU0sS0FBSyxJQUN4QixJQUFLLEdBQ0RSLEVBQWFTLE1BQVEsWUFDckIsTUFFSixJQUFLLE9BQ0RULEVBQWFPLFFBQVUseUJBQ3ZCUCxFQUFhUyxNQUFRQyxTQUFTQyxjQUFjLE1BQU1DLFlBQ2xELE1BRUosUUFDSVosRUFBYVMsTUFBUUMsU0FBU0csTUFBTUMsTUFBTSxtQ0FBbUMsR0FHckYsTUFFSixJQUFLLDhCQUVELEdBREFkLEVBQWFPLFFBQVUsNEJBQ3NDLGVBQXpESCxFQUFTVSxNQUFNLG1DQUFtQyxHQUNsRGQsRUFBYVMsTUFBUSxnQkFDcEIsQ0FDRCxNQUFNLFlBQUVHLEdBQWdCRixTQUFTQyxjQUFjLE1BQy9DWCxFQUFhUyxNQUFRRyxFQUFZRyxVQUFVLEVBQUdILEVBQVlJLE9BQVMsRUFDdkUsRUFJUnpCLFNBQVMwQixZQUFZakIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCIxMDE3NTkzOTU4NTQ2ODIxMTYwXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2Vuc2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTS9NdXNpY0JyYWlueiUyMFBpY2FyZC9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHsgaG9zdG5hbWUsIHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgc3dpdGNoIChob3N0bmFtZSkge1xuICAgICAgICBjYXNlIFwicGljYXJkLm11c2ljYnJhaW56Lm9yZ1wiOiB7XG4gICAgICAgICAgICBwcmVzZW5zZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcuLi5cIjtcbiAgICAgICAgICAgIHN3aXRjaCAocGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbnNlRGF0YS5zdGF0ZSA9IFwiSG9tZSBwYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiZG9jc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbnNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBkb2N1bWVudGF0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbnNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2Vuc2VEYXRhLnN0YXRlID0gZG9jdW1lbnQudGl0bGUubWF0Y2goLyguKj8pKCAtIE11c2ljQnJhaW56IFBpY2FyZCR8JCkvKVsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwicGljYXJkLWRvY3MubXVzaWNicmFpbnoub3JnXCI6IHtcbiAgICAgICAgICAgIHByZXNlbnNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBkb2N1bWVudGF0aW9uLi4uXCI7XG4gICAgICAgICAgICBpZiAocGF0aG5hbWUubWF0Y2goL14oPzpcXC92W1xcZC5dKyk/XFwvW2Etel17Mn1cXC8oLiopLylbMV0gPT09IFwiaW5kZXguaHRtbFwiKVxuICAgICAgICAgICAgICAgIHByZXNlbnNlRGF0YS5zdGF0ZSA9IFwiSG9tZSBwYWdlXCI7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRleHRDb250ZW50IH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gICAgICAgICAgICAgICAgcHJlc2Vuc2VEYXRhLnN0YXRlID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIHRleHRDb250ZW50Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2Vuc2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2NVSkJRWEZDTzBOQlF5OUNMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVU3U1VGRE9VSXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnBETEdGQlFXRXNSVUZEV2l3eVJVRkJNa1U3VVVGRE5VVXNZMEZCWXl4RlFVRkZMR2xDUVVGcFFqdExRVU5xUXl4RlFVTkVMRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNN1NVRkRNVU1zVVVGQlVTeFJRVUZSTEVWQlFVVTdVVUZEYWtJc1MwRkJTeXgzUWtGQmQwSXNRMEZCUXl4RFFVRkRPMWxCUXpsQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZVUZCWVN4RFFVRkRPMWxCUTNKRExGRkJRVkVzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdG5Ra0ZETDBJc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dHZRa0ZEVWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF6dHZRa0ZEYWtNc1RVRkJUVHRwUWtGRFRqdG5Ra0ZEUkN4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRE8yOUNRVU5hTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdiMEpCUTJoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdiMEpCUXpsRUxFMUJRVTA3YVVKQlEwNDdaMEpCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03YjBKQlExSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZEZUVNc2FVTkJRV2xETEVOQlEycERMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEwdzdZVUZEUkR0WlFVTkVMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzTmtKQlFUWkNMRU5CUVVNc1EwRkJRenRaUVVOdVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMREpDUVVFeVFpeERRVUZETzFsQlEyNUVMRWxCUVVrc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZsQlFWazdaMEpCUTNoRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NWMEZCVnl4RFFVRkRPMmxDUVVNM1FqdG5Ra0ZEU2l4TlFVRk5MRVZCUVVVc1YwRkJWeXhGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRGNrUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhYUVVGWExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzUkZPMWxCUTBRc1RVRkJUVHRUUVVOT08wdEJRMFE3U1VGRFJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRM0JETEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwicHJlc2Vuc2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiaG9zdG5hbWUiLCJwYXRobmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiZGV0YWlscyIsInNwbGl0Iiwic3RhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInRpdGxlIiwibWF0Y2giLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;