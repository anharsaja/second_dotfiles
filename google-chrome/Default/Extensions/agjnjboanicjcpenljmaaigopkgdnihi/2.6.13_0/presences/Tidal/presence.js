var __webpack_exports__={};const LOGO_URL="https://cdn.rcd.gg/PreMiD/websites/T/Tidal/assets/logo.png",presence=new Presence({clientId:"901591802342150174"});async function getStrings(){return presence.getStrings({play:"general.playing",pause:"general.paused",viewSong:"general.buttonViewSong"},await presence.getSetting("lang").catch((()=>"en")))}let strings,oldLang=null;presence.on("UpdateData",(async()=>{if(!document.querySelector("#footerPlayer"))return presence.setActivity({largeImageKey:LOGO_URL});const[e,t,r,a]=await Promise.all([presence.getSetting("lang").catch((()=>"en")),presence.getSetting("timestamps"),presence.getSetting("cover"),presence.getSetting("buttons")]);oldLang===e&&strings||(oldLang=e,strings=await getStrings());const n={largeImageKey:LOGO_URL,type:2},s=document.querySelector("[data-test='footer-track-title'] > div > a"),o=document.querySelector('time[data-test="current-time"]').textContent,c="play"===document.querySelector('div[data-test="play-controls"] div > button').getAttribute("data-test"),i=document.querySelector('div[data-test="play-controls"] > button[data-test="repeat"]').getAttribute("data-type");n.details=s.textContent,n.state=Array.from(document.querySelectorAll("#footerPlayer .artist-link a")).map((e=>e.textContent)).join(", "),r&&(n.largeImageKey=document.querySelector("figure[data-test=current-media-imagery] > div > div > div > img").getAttribute("src").replace("80x80","640x640")),(1e3*(60*parseFloat(o[0])+parseFloat(o[1]))>0||!c)&&([n.startTimestamp,n.endTimestamp]=presence.getTimestamps(presence.timestampFromFormat(o),presence.timestampFromFormat(document.querySelector('time[data-test="duration"]').textContent)),n.smallImageKey=c?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",n.smallImageText=c?strings.pause:strings.play),"true"===document.querySelector('div[data-test="play-controls"] > button[data-test="repeat"]').getAttribute("aria-checked")&&(n.smallImageKey="button__repeatAll"===i?"https://cdn.rcd.gg/PreMiD/resources/repeat.png":"https://cdn.rcd.gg/PreMiD/resources/repeat-one.png",n.smallImageText="button__repeatAll"===i?"Playlist on loop":"On loop",delete n.endTimestamp),a&&(n.buttons=[{label:strings.viewSong,url:s.href}]),t||delete n.endTimestamp,presence.setActivity(n)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsNkRBQThEQyxTQUFXLElBQUlDLFNBQVMsQ0FBRUMsU0FBVSx1QkFDbkhDLGVBQWVDLGFBQ1gsT0FBT0osU0FBU0ksV0FBVyxDQUN2QkMsS0FBTSxrQkFDTkMsTUFBTyxpQkFDUEMsU0FBVSxnQ0FDTFAsU0FBU1EsV0FBVyxRQUFRQyxPQUFNLElBQU0sT0FDckQsQ0FDQSxJQUFJQyxRQUFTQyxRQUFVLEtBQ3ZCWCxTQUFTWSxHQUFHLGNBQWNULFVBQ3RCLElBQUtVLFNBQVNDLGNBQWMsaUJBQ3hCLE9BQU9kLFNBQVNlLFlBQVksQ0FBRUMsY0FBZWpCLFdBQ2pELE1BQU9rQixFQUFTQyxFQUFZQyxFQUFPQyxTQUFpQkMsUUFBUUMsSUFBSSxDQUM1RHRCLFNBQVNRLFdBQVcsUUFBUUMsT0FBTSxJQUFNLE9BQ3hDVCxTQUFTUSxXQUFXLGNBQ3BCUixTQUFTUSxXQUFXLFNBQ3BCUixTQUFTUSxXQUFXLGFBRXBCRyxVQUFZTSxHQUFZUCxVQUN4QkMsUUFBVU0sRUFDVlAsY0FBZ0JOLGNBRXBCLE1BQU1tQixFQUFlLENBQ2pCUCxjQUFlakIsU0FDZnlCLEtBQU0sR0FDUEMsRUFBWVosU0FBU0MsY0FBYyw4Q0FBK0NZLEVBQWNiLFNBQVNDLGNBQWMsa0NBQWtDYSxZQUFhQyxFQUV0SSxTQUYrSWYsU0FDN0tDLGNBQWMsK0NBQ2RlLGFBQWEsYUFBeUJDLEVBQWFqQixTQUNuREMsY0FBYywrREFDZGUsYUFBYSxhQUNsQk4sRUFBYVEsUUFBVU4sRUFBVUUsWUFDakNKLEVBQWFTLE1BQVFDLE1BQU1DLEtBQUtyQixTQUFTc0IsaUJBQWlCLGlDQUNyREMsS0FBSUMsR0FBVUEsRUFBT1YsY0FDckJXLEtBQUssTUFDTm5CLElBQ0FJLEVBQWFQLGNBQWdCSCxTQUN4QkMsY0FBYyxtRUFDZGUsYUFBYSxPQUNiVSxRQUFRLFFBQVMsYUFFMkMsS0FBbkMsR0FBN0JDLFdBQVdkLEVBQVksSUFBV2MsV0FBV2QsRUFBWSxLQUFjLElBQ3ZFRSxNQUNBTCxFQUFha0IsZUFBZ0JsQixFQUFhbUIsY0FDdkMxQyxTQUFTMkMsY0FBYzNDLFNBQVM0QyxvQkFBb0JsQixHQUFjMUIsU0FBUzRDLG9CQUFvQi9CLFNBQVNDLGNBQWMsOEJBQ2pIYSxjQUNUSixFQUFhc0IsY0FBZ0JqQixFQUFTLGdEQUFrRCwrQ0FDeEZMLEVBQWF1QixlQUFpQmxCLEVBQVNsQixRQUFRSixNQUFRSSxRQUFRTCxNQUk3QixTQUZsQ1EsU0FDQ0MsY0FBYywrREFDZGUsYUFBYSxrQkFDZE4sRUFBYXNCLGNBQ00sc0JBQWZmLEVBQXFDLGlEQUFtRCxxREFDNUZQLEVBQWF1QixlQUNNLHNCQUFmaEIsRUFBcUMsbUJBQXFCLGlCQUN2RFAsRUFBYW1CLGNBRXBCdEIsSUFDQUcsRUFBYUgsUUFBVSxDQUNuQixDQUNJMkIsTUFBT3JDLFFBQVFILFNBQ2Z5QyxJQUFLdkIsRUFBVXdCLFFBSXRCL0IsVUFDTUssRUFBYW1CLGFBQ3hCMUMsU0FBU2UsWUFBWVEsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExPR09fVVJMID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVGlkYWwvYXNzZXRzL2xvZ28ucG5nXCIsIHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHsgY2xpZW50SWQ6IFwiOTAxNTkxODAyMzQyMTUwMTc0XCIgfSk7XG5hc3luYyBmdW5jdGlvbiBnZXRTdHJpbmdzKCkge1xuICAgIHJldHVybiBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICAgICAgcGxheTogXCJnZW5lcmFsLnBsYXlpbmdcIixcbiAgICAgICAgcGF1c2U6IFwiZ2VuZXJhbC5wYXVzZWRcIixcbiAgICAgICAgdmlld1Nvbmc6IFwiZ2VuZXJhbC5idXR0b25WaWV3U29uZ1wiLFxuICAgIH0sIGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJsYW5nXCIpLmNhdGNoKCgpID0+IFwiZW5cIikpO1xufVxubGV0IHN0cmluZ3MsIG9sZExhbmcgPSBudWxsO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyUGxheWVyXCIpKVxuICAgICAgICByZXR1cm4gcHJlc2VuY2Uuc2V0QWN0aXZpdHkoeyBsYXJnZUltYWdlS2V5OiBMT0dPX1VSTCB9KTtcbiAgICBjb25zdCBbbmV3TGFuZywgdGltZXN0YW1wcywgY292ZXIsIGJ1dHRvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibGFuZ1wiKS5jYXRjaCgoKSA9PiBcImVuXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwidGltZXN0YW1wc1wiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImNvdmVyXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKSxcbiAgICBdKTtcbiAgICBpZiAob2xkTGFuZyAhPT0gbmV3TGFuZyB8fCAhc3RyaW5ncykge1xuICAgICAgICBvbGRMYW5nID0gbmV3TGFuZztcbiAgICAgICAgc3RyaW5ncyA9IGF3YWl0IGdldFN0cmluZ3MoKTtcbiAgICB9XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBMT0dPX1VSTCxcbiAgICAgICAgdHlwZTogMixcbiAgICB9LCBzb25nVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVzdD0nZm9vdGVyLXRyYWNrLXRpdGxlJ10gPiBkaXYgPiBhXCIpLCBjdXJyZW50VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpbWVbZGF0YS10ZXN0PVwiY3VycmVudC10aW1lXCJdJykudGV4dENvbnRlbnQsIHBhdXNlZCA9IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS10ZXN0PVwicGxheS1jb250cm9sc1wiXSBkaXYgPiBidXR0b24nKVxuICAgICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS10ZXN0XCIpID09PSBcInBsYXlcIiwgcmVwZWF0VHlwZSA9IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS10ZXN0PVwicGxheS1jb250cm9sc1wiXSA+IGJ1dHRvbltkYXRhLXRlc3Q9XCJyZXBlYXRcIl0nKVxuICAgICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpO1xuICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc29uZ1RpdGxlLnRleHRDb250ZW50O1xuICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNmb290ZXJQbGF5ZXIgLmFydGlzdC1saW5rIGFcIikpXG4gICAgICAgIC5tYXAoYXJ0aXN0ID0+IGFydGlzdC50ZXh0Q29udGVudClcbiAgICAgICAgLmpvaW4oXCIsIFwiKTtcbiAgICBpZiAoY292ZXIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJmaWd1cmVbZGF0YS10ZXN0PWN1cnJlbnQtbWVkaWEtaW1hZ2VyeV0gPiBkaXYgPiBkaXYgPiBkaXYgPiBpbWdcIilcbiAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJzcmNcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiODB4ODBcIiwgXCI2NDB4NjQwXCIpO1xuICAgIH1cbiAgICBpZiAoKHBhcnNlRmxvYXQoY3VycmVudFRpbWVbMF0pICogNjAgKyBwYXJzZUZsb2F0KGN1cnJlbnRUaW1lWzFdKSkgKiAxMDAwID4gMCB8fFxuICAgICAgICAhcGF1c2VkKSB7XG4gICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHMocHJlc2VuY2UudGltZXN0YW1wRnJvbUZvcm1hdChjdXJyZW50VGltZSksIHByZXNlbmNlLnRpbWVzdGFtcEZyb21Gb3JtYXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGltZVtkYXRhLXRlc3Q9XCJkdXJhdGlvblwiXScpXG4gICAgICAgICAgICAgICAgLnRleHRDb250ZW50KSk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gcGF1c2VkID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIiA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gcGF1c2VkID8gc3RyaW5ncy5wYXVzZSA6IHN0cmluZ3MucGxheTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS10ZXN0PVwicGxheS1jb250cm9sc1wiXSA+IGJ1dHRvbltkYXRhLXRlc3Q9XCJyZXBlYXRcIl0nKVxuICAgICAgICAuZ2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIpID09PSBcInRydWVcIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9XG4gICAgICAgICAgICByZXBlYXRUeXBlID09PSBcImJ1dHRvbl9fcmVwZWF0QWxsXCIgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlcGVhdC5wbmdcIiA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVwZWF0LW9uZS5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID1cbiAgICAgICAgICAgIHJlcGVhdFR5cGUgPT09IFwiYnV0dG9uX19yZXBlYXRBbGxcIiA/IFwiUGxheWxpc3Qgb24gbG9vcFwiIDogXCJPbiBsb29wXCI7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgIH1cbiAgICBpZiAoYnV0dG9ucykge1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5ncy52aWV3U29uZyxcbiAgICAgICAgICAgICAgICB1cmw6IHNvbmdUaXRsZS5ocmVmLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgaWYgKCF0aW1lc3RhbXBzKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5dzBSRUZCTkVRc1JVRkROVVVzVVVGQlVTeEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRMRVZCUVVVc1VVRkJVU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVVM1JDeExRVUZMTEZWQlFWVXNWVUZCVlR0SlFVTjRRaXhQUVVGUExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlEzcENPMUZCUTBNc1NVRkJTU3hGUVVGRkxHbENRVUZwUWp0UlFVTjJRaXhMUVVGTExFVkJRVVVzWjBKQlFXZENPMUZCUTNaQ0xGRkJRVkVzUlVGQlJTeDNRa0ZCZDBJN1MwRkRiRU1zUlVGRFJDeE5RVUZOTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZNc1RVRkJUU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVNelJDeERRVUZETzBGQlEwZ3NRMEZCUXp0QlFVVkVMRWxCUVVrc1QwRkJLME1zUlVGRGJFUXNUMEZCVHl4SFFVRlhMRWxCUVVrc1EwRkJRenRCUVVWNFFpeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eGxRVUZsTEVOQlFVTTdVVUZETTBNc1QwRkJUeXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNZVUZCWVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRk1VUXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRTFCUVUwc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU12UkN4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVExFMUJRVTBzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGNrUXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3haUVVGWkxFTkJRVU03VVVGRE1VTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hQUVVGUExFTkJRVU03VVVGRGNrTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hUUVVGVExFTkJRVU03UzBGRGRrTXNRMEZCUXl4RFFVRkRPMGxCUlVnc1NVRkJTU3hQUVVGUExFdEJRVXNzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMUZCUTNCRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTTdVVUZEYkVJc1QwRkJUeXhIUVVGSExFMUJRVTBzVlVGQlZTeEZRVUZGTEVOQlFVTTdTMEZETjBJN1NVRkRSQ3hOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYWtNc1lVRkJZU3hGUVVGRkxGRkJRVkU3VVVGRGRrSXNTVUZCU1N4SFFVRjNRanRMUVVNMVFpeEZRVU5FTEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOcVF5dzBRMEZCTkVNc1EwRkROVU1zUlVGRFJDeFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRia01zWjBOQlFXZERMRU5CUTJoRExFTkJRVU1zVjBGQlZ5eEZRVU5pTEUxQlFVMHNSMEZEVEN4UlFVRlJPMU5CUTA0c1lVRkJZU3hEUVVGRExEWkRRVUUyUXl4RFFVRkRPMU5CUXpWRUxGbEJRVmtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4TlFVRk5MRVZCUTNaRExGVkJRVlVzUjBGQlJ5eFJRVUZSTzFOQlEyNUNMR0ZCUVdFc1EwRkRZaXcyUkVGQk5rUXNRMEZETjBRN1UwRkRRU3haUVVGWkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZGTjBJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFRRVUZUTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUlRkRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkRPVUlzVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGdlFpdzRRa0ZCT0VJc1EwRkJReXhEUVVNMVJUdFRRVU5ETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTTdVMEZEYWtNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlJXSXNTVUZCU1N4TFFVRkxMRVZCUVVVN1VVRkRWaXhaUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZITEZGQlFWRTdZVUZEYmtNc1lVRkJZU3hEUVVOaUxHbEZRVUZwUlN4RFFVTnFSVHRoUVVOQkxGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTTdZVUZEYmtJc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0TFFVTTVRanRKUVVORUxFbEJRME1zUTBGQlF5eFZRVUZWTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRPMUZCUTNwRkxFTkJRVU1zVFVGQlRTeEZRVU5PTzFGQlEwUXNRMEZCUXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhGUVVGRkxGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTTdXVUZEZGtRc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrSXNVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVTjZReXhSUVVGUkxFTkJRVU1zYlVKQlFXMUNMRU5CUXpOQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFXTXNORUpCUVRSQ0xFTkJRVU03YVVKQlF5OUVMRmRCUVZjc1EwRkRZaXhEUVVORUxFTkJRVU03VVVGRFNDeFpRVUZaTEVOQlFVTXNZVUZCWVN4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExHbEVRVUZqTEVOQlFVTXNLME5CUVZrc1EwRkJRenRSUVVOcVJTeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF6dExRVU53UlR0SlFVVkVMRWxCUTBNc1VVRkJVVHRUUVVOT0xHRkJRV0VzUTBGRFlpdzJSRUZCTmtRc1EwRkROMFE3VTBGRFFTeFpRVUZaTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1RVRkJUU3hGUVVONFF6dFJRVU5FTEZsQlFWa3NRMEZCUXl4aFFVRmhPMWxCUTNwQ0xGVkJRVlVzUzBGQlN5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExHdEVRVUZsTEVOQlFVTXNjVVJCUVdsQ0xFTkJRVU03VVVGRGRrVXNXVUZCV1N4RFFVRkRMR05CUVdNN1dVRkRNVUlzVlVGQlZTeExRVUZMTEcxQ1FVRnRRaXhEUVVGRExFTkJRVU1zUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlJYSkZMRTlCUVU4c1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF6dExRVU5xUXp0SlFVTkVMRWxCUVVrc1QwRkJUeXhGUVVGRk8xRkJRMW9zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0WlFVTjBRanRuUWtGRFF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRkZCUVZFN1owSkJRM1pDTEVkQlFVY3NSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTVHRoUVVOdVFqdFRRVU5FTEVOQlFVTTdTMEZEUmp0SlFVTkVMRWxCUVVrc1EwRkJReXhWUVVGVk8xRkJRVVVzVDBGQlR5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRPMGxCUTJ4RUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1FVRkRjRU1zUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbIkxPR09fVVJMIiwicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYXN5bmMiLCJnZXRTdHJpbmdzIiwicGxheSIsInBhdXNlIiwidmlld1NvbmciLCJnZXRTZXR0aW5nIiwiY2F0Y2giLCJzdHJpbmdzIiwib2xkTGFuZyIsIm9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QWN0aXZpdHkiLCJsYXJnZUltYWdlS2V5IiwibmV3TGFuZyIsInRpbWVzdGFtcHMiLCJjb3ZlciIsImJ1dHRvbnMiLCJQcm9taXNlIiwiYWxsIiwicHJlc2VuY2VEYXRhIiwidHlwZSIsInNvbmdUaXRsZSIsImN1cnJlbnRUaW1lIiwidGV4dENvbnRlbnQiLCJwYXVzZWQiLCJnZXRBdHRyaWJ1dGUiLCJyZXBlYXRUeXBlIiwiZGV0YWlscyIsInN0YXRlIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImFydGlzdCIsImpvaW4iLCJyZXBsYWNlIiwicGFyc2VGbG9hdCIsInN0YXJ0VGltZXN0YW1wIiwiZW5kVGltZXN0YW1wIiwiZ2V0VGltZXN0YW1wcyIsInRpbWVzdGFtcEZyb21Gb3JtYXQiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJsYWJlbCIsInVybCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9
undefined;