var __webpack_exports__={};const browsingTimestamp=Math.floor(Date.now()/1e3),presence=new Presence({clientId:"629653820405710848"});presence.on("UpdateData",(()=>{const e=new URLSearchParams(window.location.search),t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/E/Ecosia/assets/logo.png",startTimestamp:browsingTimestamp};"/"===document.location.pathname?t.details="Home":document.location.pathname.startsWith("/search")&&e.has("q")?(t.details=`Searching for ${e.get("q")}`,t.state=document.querySelectorAll(".result-count")[0].textContent,t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):document.location.pathname.startsWith("/images")&&e.has("q")?(t.details="Ecosia Images",t.state=`Searching for ${e.get("q")}`,t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):document.location.pathname.startsWith("/news")&&e.has("q")?(t.details="Ecosia News",t.state=`Searching for ${e.get("q")}`,t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):document.location.pathname.startsWith("/videos")&&e.has("q")&&(t.details="Ecosia Videos",t.state=`Searching for ${e.get("q")}`,t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"),presence.setActivity(t)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLGtCQUFvQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUFPQyxTQUFXLElBQUlDLFNBQVMsQ0FDN0VDLFNBQVUsdUJBRWRGLFNBQVNHLEdBQUcsY0FBYyxLQUN0QixNQUFNQyxFQUFZLElBQUlDLGdCQUFnQkMsT0FBT0MsU0FBU0MsUUFBU0MsRUFBZSxDQUMxRUMsY0FBZSw4REFDZkMsZUFBZ0JoQixtQkFFZSxNQUEvQmlCLFNBQVNMLFNBQVNNLFNBQ2xCSixFQUFhSyxRQUFVLE9BQ2xCRixTQUFTTCxTQUFTTSxTQUFTRSxXQUFXLFlBQzNDWCxFQUFVWSxJQUFJLE1BQ2RQLEVBQWFLLFFBQVUsaUJBQWlCVixFQUFVYSxJQUFJLE9BQ3REUixFQUFhUyxNQUNUTixTQUFTTyxpQkFBaUIsaUJBQWlCLEdBQUdDLFlBQ2xEWCxFQUFhWSxjQUFnQixrREFFeEJULFNBQVNMLFNBQVNNLFNBQVNFLFdBQVcsWUFDM0NYLEVBQVVZLElBQUksTUFDZFAsRUFBYUssUUFBVSxnQkFDdkJMLEVBQWFTLE1BQVEsaUJBQWlCZCxFQUFVYSxJQUFJLE9BQ3BEUixFQUFhWSxjQUFnQixrREFFeEJULFNBQVNMLFNBQVNNLFNBQVNFLFdBQVcsVUFDM0NYLEVBQVVZLElBQUksTUFDZFAsRUFBYUssUUFBVSxjQUN2QkwsRUFBYVMsTUFBUSxpQkFBaUJkLEVBQVVhLElBQUksT0FDcERSLEVBQWFZLGNBQWdCLGtEQUV4QlQsU0FBU0wsU0FBU00sU0FBU0UsV0FBVyxZQUMzQ1gsRUFBVVksSUFBSSxPQUNkUCxFQUFhSyxRQUFVLGdCQUN2QkwsRUFBYVMsTUFBUSxpQkFBaUJkLEVBQVVhLElBQUksT0FDcERSLEVBQWFZLGNBQWdCLGtEQUVqQ3JCLFNBQVNzQixZQUFZYixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSwgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYyOTY1MzgyMDQwNTcxMDg0OFwiLFxufSk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCksIHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0UvRWNvc2lhL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfTtcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSG9tZVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvc2VhcmNoXCIpICYmXG4gICAgICAgIHVybFBhcmFtcy5oYXMoXCJxXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFNlYXJjaGluZyBmb3IgJHt1cmxQYXJhbXMuZ2V0KFwicVwiKX1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHQtY291bnRcIilbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvaW1hZ2VzXCIpICYmXG4gICAgICAgIHVybFBhcmFtcy5oYXMoXCJxXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFY29zaWEgSW1hZ2VzXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBTZWFyY2hpbmcgZm9yICR7dXJsUGFyYW1zLmdldChcInFcIil9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9uZXdzXCIpICYmXG4gICAgICAgIHVybFBhcmFtcy5oYXMoXCJxXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFY29zaWEgTmV3c1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgU2VhcmNoaW5nIGZvciAke3VybFBhcmFtcy5nZXQoXCJxXCIpfWA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdmlkZW9zXCIpICYmXG4gICAgICAgIHVybFBhcmFtcy5oYXMoXCJxXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFY29zaWEgVmlkZW9zXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBTZWFyY2hpbmcgZm9yICR7dXJsUGFyYW1zLmdldChcInFcIil9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MR2xDUVVGcFFpeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVTjBSQ3hSUVVGUkxFZEJRVWNzU1VGQlNTeFJRVUZSTEVOQlFVTTdTVUZEZGtJc1VVRkJVU3hGUVVGRkxHOUNRVUZ2UWp0RFFVTTVRaXhEUVVGRExFTkJRVU03UVVGRFNpeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVU3U1VGRE9VSXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hsUVVGbExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkROVVFzV1VGQldTeEhRVUZwUWp0UlFVTTFRaXhoUVVGaExFVkJRMW9zTmtSQlFUWkVPMUZCUXpsRUxHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUTBGQlF6dEpRVU5JTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFdEJRVXNzUjBGQlJ6dFJRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRE8xTkJRMnBGTEVsQlEwb3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTm9SQ3hUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTnFRanRSUVVORUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVNM1JDeFpRVUZaTEVOQlFVTXNTMEZCU3p0WlFVTnFRaXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUlRORUxGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8wdEJRek5ETzFOQlFVMHNTVUZEVGl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTJoRUxGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUTJwQ08xRkJRMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4bFFVRmxMRU5CUVVNN1VVRkRka01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4cFFrRkJhVUlzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJSVE5FTEZsQlFWa3NRMEZCUXl4aFFVRmhMRzFFUVVGblFpeERRVUZETzB0QlF6TkRPMU5CUVUwc1NVRkRUaXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRE8xRkJRemxETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRMnBDTzFGQlEwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVVGaExFTkJRVU03VVVGRGNrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhwUWtGQmFVSXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlJUTkVMRmxCUVZrc1EwRkJReXhoUVVGaExHMUVRVUZuUWl4RFFVRkRPMHRCUXpORE8xTkJRVTBzU1VGRFRpeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETzFGQlEyaEVMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlEycENPMUZCUTBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTTdVVUZEZGtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHBRa0ZCYVVJc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUlRORUxGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8wdEJRek5ETzBsQlEwUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU53UXl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsIm9uIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJkb2N1bWVudCIsInBhdGhuYW1lIiwiZGV0YWlscyIsInN0YXJ0c1dpdGgiLCJoYXMiLCJnZXQiLCJzdGF0ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZXh0Q29udGVudCIsInNtYWxsSW1hZ2VLZXkiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;