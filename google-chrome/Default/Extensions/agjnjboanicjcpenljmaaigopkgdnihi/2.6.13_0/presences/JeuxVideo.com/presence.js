var __webpack_exports__={};const presence=new Presence({clientId:"651930315279040512"});function truncateString(e,t){return e.length>t?`${e.substring(0,t-3)}...`:e}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/J/JeuxVideo.com/assets/logo.jpg"};"/"===document.location.pathname?e.details="Page d'accueil":document.location.pathname.includes("/news/")?(e.details="Lis une actualité",e.state=truncateString(document.querySelector("div.titre-wrapper").textContent,128)):document.location.pathname.includes("/videos/")?(e.details="Regarde une vidéo",e.state=truncateString(document.querySelector("div.titre-video").textContent,128)):document.location.pathname.includes("/test/")?(e.details="Lis un test",e.state=`${truncateString(document.querySelector(".gameHeaderBanner__title").textContent,128)} (${document.querySelector(".bloc-avis-testeur > .note > strong").textContent}/20)`):document.location.pathname.includes("/messages-prives/")?e.details="Lis ses MP":document.location.pathname.includes("/forums/0-")?(e.details=truncateString(document.querySelector("#forum-main-col > .titre-head-bloc > .titre-bloc-forum").textContent,64),e.state=document.querySelector(".panel-heading > .nb-connect-fofo").textContent):document.location.pathname.includes("/forums/")&&(e.details=truncateString(document.querySelector(".bloc-fil-ariane-crumb-forum > .fil-ariane-crumb > span:last-of-type > a").textContent,64),e.state=truncateString(document.querySelector("#forum-main-col > .titre-head-bloc > .titre-bloc-forum > #bloc-title-forum").textContent,128)),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZCxTQUFTQyxlQUFlQyxFQUFNQyxHQUMxQixPQUFJRCxFQUFLQyxPQUFTQSxFQUNQLEdBQUdELEVBQUtFLFVBQVUsRUFBR0QsRUFBUyxRQUU5QkQsQ0FDZixDQUNBSixTQUFTTyxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsc0VBRWdCLE1BQS9CQyxTQUFTQyxTQUFTQyxTQUNsQkosRUFBYUssUUFBVSxpQkFDbEJILFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsV0FDekNOLEVBQWFLLFFBQVUsb0JBQ3ZCTCxFQUFhTyxNQUFRYixlQUFlUSxTQUFTTSxjQUFjLHFCQUFxQkMsWUFBYSxNQUV4RlAsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxhQUN6Q04sRUFBYUssUUFBVSxvQkFDdkJMLEVBQWFPLE1BQVFiLGVBQWVRLFNBQVNNLGNBQWMsbUJBQW1CQyxZQUFhLE1BRXRGUCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLFdBQ3pDTixFQUFhSyxRQUFVLGNBQ3ZCTCxFQUFhTyxNQUFRLEdBQUdiLGVBQWVRLFNBQVNNLGNBQWMsNEJBQTRCQyxZQUFhLFNBQVNQLFNBQVNNLGNBQWMsdUNBQXVDQyxtQkFFektQLFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMscUJBQ3pDTixFQUFhSyxRQUFVLGFBQ2xCSCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGVBQ3pDTixFQUFhSyxRQUFVWCxlQUFlUSxTQUFTTSxjQUFjLDBEQUEwREMsWUFBYSxJQUNwSVQsRUFBYU8sTUFBUUwsU0FBU00sY0FBYyxxQ0FBcUNDLGFBRTVFUCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGNBQ3pDTixFQUFhSyxRQUFVWCxlQUFlUSxTQUFTTSxjQUFjLDRFQUE0RUMsWUFBYSxJQUN0SlQsRUFBYU8sTUFBUWIsZUFBZVEsU0FBU00sY0FBYyw4RUFBOEVDLFlBQWEsTUFFdEpULEVBQWFLLFFBQ2JkLFNBQVNtQixZQUFZVixHQUVyQlQsU0FBU21CLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjUxOTMwMzE1Mjc5MDQwNTEyXCIsXG59KTtcbmZ1bmN0aW9uIHRydW5jYXRlU3RyaW5nKHRleHQsIGxlbmd0aCkge1xuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGxlbmd0aClcbiAgICAgICAgcmV0dXJuIGAke3RleHQuc3Vic3RyaW5nKDAsIGxlbmd0aCAtIDMpfS4uLmA7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gdGV4dDtcbn1cbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvSi9KZXV4VmlkZW8uY29tL2Fzc2V0cy9sb2dvLmpwZ1wiLFxuICAgIH07XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBhZ2UgZCdhY2N1ZWlsXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvbmV3cy9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxpcyB1bmUgYWN0dWFsaXTDqVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0cnVuY2F0ZVN0cmluZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnRpdHJlLXdyYXBwZXJcIikudGV4dENvbnRlbnQsIDEyOCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3ZpZGVvcy9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlZ2FyZGUgdW5lIHZpZMOpb1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0cnVuY2F0ZVN0cmluZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnRpdHJlLXZpZGVvXCIpLnRleHRDb250ZW50LCAxMjgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi90ZXN0L1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTGlzIHVuIHRlc3RcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7dHJ1bmNhdGVTdHJpbmcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lSGVhZGVyQmFubmVyX190aXRsZVwiKS50ZXh0Q29udGVudCwgMTI4KX0gKCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9jLWF2aXMtdGVzdGV1ciA+IC5ub3RlID4gc3Ryb25nXCIpLnRleHRDb250ZW50fS8yMClgO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9tZXNzYWdlcy1wcml2ZXMvXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTGlzIHNlcyBNUFwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2ZvcnVtcy8wLVwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRydW5jYXRlU3RyaW5nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ydW0tbWFpbi1jb2wgPiAudGl0cmUtaGVhZC1ibG9jID4gLnRpdHJlLWJsb2MtZm9ydW1cIikudGV4dENvbnRlbnQsIDY0KTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYW5lbC1oZWFkaW5nID4gLm5iLWNvbm5lY3QtZm9mb1wiKS50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZm9ydW1zL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRydW5jYXRlU3RyaW5nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvYy1maWwtYXJpYW5lLWNydW1iLWZvcnVtID4gLmZpbC1hcmlhbmUtY3J1bWIgPiBzcGFuOmxhc3Qtb2YtdHlwZSA+IGFcIikudGV4dENvbnRlbnQsIDY0KTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdHJ1bmNhdGVTdHJpbmcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3J1bS1tYWluLWNvbCA+IC50aXRyZS1oZWFkLWJsb2MgPiAudGl0cmUtYmxvYy1mb3J1bSA+ICNibG9jLXRpdGxlLWZvcnVtXCIpLnRleHRDb250ZW50LCAxMjgpO1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUTBGQlF6dEJRVTlJTEZOQlFWTXNZMEZCWXl4RFFVRkRMRWxCUVZrc1JVRkJSU3hOUVVGak8wbEJRMjVFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTk8xRkJRVVVzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRPenRSUVVOc1JTeFBRVUZQTEVsQlFVa3NRMEZCUXp0QlFVTnNRaXhEUVVGRE8wRkJSVVFzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3U1VGRGNFTXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnhETEdGQlFXRXNSVUZEV2l4dlJVRkJiMFU3UzBGRGNrVXNRMEZCUXp0SlFVVkdMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEV0QlFVc3NSMEZCUnp0UlFVTnlReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xTkJRM0JETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMUZCUTNaRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03VVVGRE0wTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhqUVVGakxFTkJRMnhETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUTNaRUxFZEJRVWNzUTBGRFNDeERRVUZETzB0QlEwWTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRSUVVNelJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzFGQlF6TkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzWTBGQll5eERRVU5zUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVOeVJDeEhRVUZITEVOQlEwZ3NRMEZCUXp0TFFVTkdPMU5CUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3VVVGRGVrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVVGaExFTkJRVU03VVVGRGNrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExHTkJRV01zUTBGRGNrTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXd3UWtGQk1FSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkRPVVFzUjBGQlJ5eERRVU5JTEV0QlEwRXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh4UTBGQmNVTXNRMEZCUXl4RFFVRkRMRmRCUXk5RUxFMUJRVTBzUTBGQlF6dExRVU5RTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03VVVGRGJFVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxFTkJRVU03VTBGRGFFTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVN1VVRkRNMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4alFVRmpMRU5CUTNCRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEzSkNMSGRFUVVGM1JDeERRVU40UkN4RFFVRkRMRmRCUVZjc1JVRkRZaXhGUVVGRkxFTkJRMFlzUTBGQlF6dFJRVU5HTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE1VTXNiVU5CUVcxRExFTkJRMjVETEVOQlFVTXNWMEZCVnl4RFFVRkRPMHRCUTJRN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUlVGQlJUdFJRVU16UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHTkJRV01zUTBGRGNFTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRja0lzTUVWQlFUQkZMRU5CUXpGRkxFTkJRVU1zVjBGQlZ5eEZRVU5pTEVWQlFVVXNRMEZEUml4RFFVRkRPMUZCUTBZc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGpRVUZqTEVOQlEyeERMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM0pDTERSRlFVRTBSU3hEUVVNMVJTeERRVUZETEZkQlFWY3NSVUZEWWl4SFFVRkhMRU5CUTBnc1EwRkJRenRMUVVOR08wbEJSVVFzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMUZCUTNoRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwidHJ1bmNhdGVTdHJpbmciLCJ0ZXh0IiwibGVuZ3RoIiwic3Vic3RyaW5nIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJkZXRhaWxzIiwiaW5jbHVkZXMiLCJzdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;