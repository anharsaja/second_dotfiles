var __webpack_exports__={};const presence=new Presence({clientId:"640253556078673951"}),browsingTimestamp=Math.floor(Date.now()/1e3);let title,iFrameVideo=!1,currentTime=0,duration=0,paused=!0;function capitalizeFirstLetter(e){return e?e.trim().charAt(0).toUpperCase()+e.trim().slice(1).toLowerCase():"Undefined"}function fullURL(e,t){return e?.includes("https")?e:e?.includes("Uploads")?`https://${t}${e}`:"https://cdn.rcd.gg/PreMiD/websites/K/KimCartoon/assets/logo.png"}presence.on("iFrameData",(e=>{({iFrameVideo,paused}=e.iframeVideo),currentTime=e.iframeVideo.currTime,duration=e.iframeVideo.dur})),presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/K/KimCartoon/assets/logo.png",startTimestamp:browsingTimestamp},t=await presence.getSetting("cover"),{hostname:a,pathname:s,href:r}=document.location;switch(!0){case iFrameVideo:{const t=document.querySelector('option[selected="selected"]')?.textContent??document.querySelector('[id="selectEpisode"] > [selected]')?.textContent,s=document.querySelector('[class="watch_title a_center"]')?.textContent.toLowerCase()?.replace("watch","")?.replace(" online free","")?.replace(" information","")?.split(" season")??document.querySelector('[id="navsubbar"]')?.textContent.toLowerCase()?.replace("watch","")?.replace(" online free","")?.replace(" information","")?.split(" season");title=capitalizeFirstLetter(s?.[0]),e.details=title,e.state=t?.includes("Episode")&&s?.length>1?`Season ${s[1]} ${t}`:t?.includes("Movie")?"Movie":t?.includes("Episode")&&1===s?.length?t:`Episode ${t}`,e.largeImageKey=fullURL(document.querySelector('[property="og:image"]')?.getAttribute("content"),a),iFrameVideo&&!isNaN(duration)?(delete e.startTimestamp,e.smallImageKey=paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=paused?"Paused":"Playing",paused||([e.startTimestamp,e.endTimestamp]=presence.getTimestamps(currentTime,duration)),e.buttons=[{label:"Watch Cartoon",url:r}]):e.buttons=[{label:"View Cartoon",url:r}];break}case"/"===s:e.details="Viewing the homepage";break;case s.includes("/Genre"):e.details="Viewing all genres";break;case s.includes("/CartoonList"):e.details="Viewing the cartoonlist",e.buttons=[{label:"View The Cartoonlist",url:r}];break;case s.includes("/Cartoon/"):e.details="Viewing cartoon:",e.state=document.querySelector('[class="bigChar"]')?.textContent??s.split("/")[2].replace("-"," "),e.largeImageKey=document.querySelector('[property="og:image"]')?.getAttribute("content")??"https://cdn.rcd.gg/PreMiD/websites/K/KimCartoon/assets/logo.png",e.buttons=[{label:"View Cartoon",url:r}];break;case s.includes("/kimcartoon.me"):e.details="Viewing the old homepage"}t||"https://cdn.rcd.gg/PreMiD/websites/K/KimCartoon/assets/logo.png"===e.largeImageKey||(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/K/KimCartoon/assets/logo.png"),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLE1BQU9DLGFBQWMsRUFBT0MsWUFBYyxFQUFHQyxTQUFXLEVBQUdDLFFBQVMsRUFDeEUsU0FBU0Msc0JBQXNCQyxHQUMzQixPQUFLQSxFQUVHQSxFQUFPQyxPQUFPQyxPQUFPLEdBQUdDLGNBQWdCSCxFQUFPQyxPQUFPRyxNQUFNLEdBQUdDLGNBRDVELFdBRWYsQ0FDQSxTQUFTQyxRQUFRQyxFQUFRQyxHQUNyQixPQUFJRCxHQUFRRSxTQUFTLFNBQ1ZGLEVBQ0ZBLEdBQVFFLFNBQVMsV0FDZixXQUFXRCxJQUFXRCxJQUV0QixpRUFDZixDQUNBckIsU0FBU3dCLEdBQUcsY0FBZUMsTUFDcEJoQixZQUFhRyxRQUFXYSxFQUFLQyxhQUNoQ2hCLFlBQWNlLEVBQUtDLFlBQVlDLFNBQy9CaEIsU0FBV2MsRUFBS0MsWUFBWUUsR0FBRyxJQUVuQzVCLFNBQVN3QixHQUFHLGNBQWNLLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsa0VBQ2ZDLGVBQWdCN0IsbUJBQ2pCOEIsUUFBY2pDLFNBQVNrQyxXQUFXLFVBQVUsU0FBRVosRUFBUSxTQUFFYSxFQUFRLEtBQUVDLEdBQVNDLFNBQVNDLFNBQ3ZGLFFBQVEsR0FDSixLQUFLN0IsWUFBYSxDQUNkLE1BQU04QixFQUFhRixTQUFTRyxjQUFjLGdDQUFnQ0MsYUFDdEVKLFNBQVNHLGNBQWMsc0NBQ2pCQyxZQUFhQyxFQUFhTCxTQUMvQkcsY0FBYyxtQ0FDYkMsWUFBWXRCLGVBQ1p3QixRQUFRLFFBQVMsS0FDakJBLFFBQVEsZUFBZ0IsS0FDeEJBLFFBQVEsZUFBZ0IsS0FDeEJDLE1BQU0sWUFDUlAsU0FDS0csY0FBYyxxQkFDYkMsWUFBWXRCLGVBQ1p3QixRQUFRLFFBQVMsS0FDakJBLFFBQVEsZUFBZ0IsS0FDeEJBLFFBQVEsZUFBZ0IsS0FDeEJDLE1BQU0sV0FDaEJwQyxNQUFRSyxzQkFBc0I2QixJQUFhLElBQzNDWixFQUFhZSxRQUFVckMsTUFDdkJzQixFQUFhZ0IsTUFDVFAsR0FBWWhCLFNBQVMsWUFBY21CLEdBQVlLLE9BQVMsRUFDbEQsVUFBVUwsRUFBVyxNQUFNSCxJQUMzQkEsR0FBWWhCLFNBQVMsU0FDakIsUUFDQWdCLEdBQVloQixTQUFTLFlBQXFDLElBQXZCbUIsR0FBWUssT0FDM0NSLEVBQ0EsV0FBV0EsSUFDN0JULEVBQWFDLGNBQWdCWCxRQUFRaUIsU0FDaENHLGNBQWMsMEJBQ2JRLGFBQWEsV0FBWTFCLEdBQzNCYixjQUFnQndDLE1BQU10QyxrQkFDZm1CLEVBQWFFLGVBQ3BCRixFQUFhb0IsY0FBZ0J0QyxPQUFTLGdEQUFrRCwrQ0FDeEZrQixFQUFhcUIsZUFBaUJ2QyxPQUFTLFNBQVcsVUFDN0NBLFVBQ0FrQixFQUFhRSxlQUFnQkYsRUFBYXNCLGNBQ3ZDcEQsU0FBU3FELGNBQWMzQyxZQUFhQyxXQUU1Q21CLEVBQWF3QixRQUFVLENBQUMsQ0FBRUMsTUFBTyxnQkFBaUJDLElBQUtwQixLQUd2RE4sRUFBYXdCLFFBQVUsQ0FBQyxDQUFFQyxNQUFPLGVBQWdCQyxJQUFLcEIsSUFDMUQsS0FDSixDQUNBLElBQWtCLE1BQWJELEVBQ0RMLEVBQWFlLFFBQVUsdUJBQ3ZCLE1BRUosS0FBS1YsRUFBU1osU0FBUyxVQUNuQk8sRUFBYWUsUUFBVSxxQkFDdkIsTUFFSixLQUFLVixFQUFTWixTQUFTLGdCQUNuQk8sRUFBYWUsUUFBVSwwQkFDdkJmLEVBQWF3QixRQUFVLENBQUMsQ0FBRUMsTUFBTyx1QkFBd0JDLElBQUtwQixJQUM5RCxNQUVKLEtBQUtELEVBQVNaLFNBQVMsYUFDbkJPLEVBQWFlLFFBQVUsbUJBQ3ZCZixFQUFhZ0IsTUFDVFQsU0FBU0csY0FBYyxzQkFBc0JDLGFBQ3pDTixFQUFTUyxNQUFNLEtBQUssR0FBR0QsUUFBUSxJQUFLLEtBQzVDYixFQUFhQyxjQUNUTSxTQUNLRyxjQUFjLDBCQUNiUSxhQUFhLFlBQWMsa0VBQ3JDbEIsRUFBYXdCLFFBQVUsQ0FBQyxDQUFFQyxNQUFPLGVBQWdCQyxJQUFLcEIsSUFDdEQsTUFFSixLQUFLRCxFQUFTWixTQUFTLGtCQUNuQk8sRUFBYWUsUUFBVSwyQkFJMUJaLEdBQXdDLG9FQUEvQkgsRUFBYUMsZ0JBQ3ZCRCxFQUFhQyxjQUFnQixtRUFDN0JELEVBQWFlLFFBQ2I3QyxTQUFTeUQsWUFBWTNCLEdBRXJCOUIsU0FBU3lELGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjQwMjUzNTU2MDc4NjczOTUxXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCB0aXRsZSwgaUZyYW1lVmlkZW8gPSBmYWxzZSwgY3VycmVudFRpbWUgPSAwLCBkdXJhdGlvbiA9IDAsIHBhdXNlZCA9IHRydWU7XG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gICAgaWYgKCFzdHJpbmcpXG4gICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiO1xuICAgIHJldHVybiAoc3RyaW5nLnRyaW0oKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy50cmltKCkuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBmdWxsVVJMKGNvdmVycywgaG9zdG5hbWUpIHtcbiAgICBpZiAoY292ZXJzPy5pbmNsdWRlcyhcImh0dHBzXCIpKVxuICAgICAgICByZXR1cm4gY292ZXJzO1xuICAgIGVsc2UgaWYgKGNvdmVycz8uaW5jbHVkZXMoXCJVcGxvYWRzXCIpKVxuICAgICAgICByZXR1cm4gYGh0dHBzOi8vJHtob3N0bmFtZX0ke2NvdmVyc31gO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9LL0tpbUNhcnRvb24vYXNzZXRzL2xvZ28ucG5nXCI7XG59XG5wcmVzZW5jZS5vbihcImlGcmFtZURhdGFcIiwgKGRhdGEpID0+IHtcbiAgICAoeyBpRnJhbWVWaWRlbywgcGF1c2VkIH0gPSBkYXRhLmlmcmFtZVZpZGVvKTtcbiAgICBjdXJyZW50VGltZSA9IGRhdGEuaWZyYW1lVmlkZW8uY3VyclRpbWU7XG4gICAgZHVyYXRpb24gPSBkYXRhLmlmcmFtZVZpZGVvLmR1cjtcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9LL0tpbUNhcnRvb24vYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCBjb3ZlciA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJjb3ZlclwiKSwgeyBob3N0bmFtZSwgcGF0aG5hbWUsIGhyZWYgfSA9IGRvY3VtZW50LmxvY2F0aW9uO1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIGlGcmFtZVZpZGVvOiB7XG4gICAgICAgICAgICBjb25zdCBlcHNPck1vdmllID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignb3B0aW9uW3NlbGVjdGVkPVwic2VsZWN0ZWRcIl0nKT8udGV4dENvbnRlbnQgPz9cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQ9XCJzZWxlY3RFcGlzb2RlXCJdID4gW3NlbGVjdGVkXScpXG4gICAgICAgICAgICAgICAgICAgID8udGV4dENvbnRlbnQsIHRpdGxlU3BsaXQgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJ3YXRjaF90aXRsZSBhX2NlbnRlclwiXScpXG4gICAgICAgICAgICAgICAgPy50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgPy5yZXBsYWNlKFwid2F0Y2hcIiwgXCJcIilcbiAgICAgICAgICAgICAgICA/LnJlcGxhY2UoXCIgb25saW5lIGZyZWVcIiwgXCJcIilcbiAgICAgICAgICAgICAgICA/LnJlcGxhY2UoXCIgaW5mb3JtYXRpb25cIiwgXCJcIilcbiAgICAgICAgICAgICAgICA/LnNwbGl0KFwiIHNlYXNvblwiKSA/P1xuICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbaWQ9XCJuYXZzdWJiYXJcIl0nKVxuICAgICAgICAgICAgICAgICAgICA/LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgPy5yZXBsYWNlKFwid2F0Y2hcIiwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgPy5yZXBsYWNlKFwiIG9ubGluZSBmcmVlXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgID8ucmVwbGFjZShcIiBpbmZvcm1hdGlvblwiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICA/LnNwbGl0KFwiIHNlYXNvblwiKTtcbiAgICAgICAgICAgIHRpdGxlID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRpdGxlU3BsaXQ/LlswXSk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRpdGxlO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICBlcHNPck1vdmllPy5pbmNsdWRlcyhcIkVwaXNvZGVcIikgJiYgdGl0bGVTcGxpdD8ubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICA/IGBTZWFzb24gJHt0aXRsZVNwbGl0WzFdfSAke2Vwc09yTW92aWV9YFxuICAgICAgICAgICAgICAgICAgICA6IGVwc09yTW92aWU/LmluY2x1ZGVzKFwiTW92aWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJNb3ZpZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVwc09yTW92aWU/LmluY2x1ZGVzKFwiRXBpc29kZVwiKSAmJiB0aXRsZVNwbGl0Py5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVwc09yTW92aWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGBFcGlzb2RlICR7ZXBzT3JNb3ZpZX1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBmdWxsVVJMKGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1twcm9wZXJ0eT1cIm9nOmltYWdlXCJdJylcbiAgICAgICAgICAgICAgICA/LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksIGhvc3RuYW1lKTtcbiAgICAgICAgICAgIGlmIChpRnJhbWVWaWRlbyAmJiAhaXNOYU4oZHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gcGF1c2VkID8gXCJQYXVzZWRcIiA6IFwiUGxheWluZ1wiO1xuICAgICAgICAgICAgICAgIGlmICghcGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHMoY3VycmVudFRpbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJXYXRjaCBDYXJ0b29uXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgQ2FydG9vblwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHBhdGhuYW1lID09PSBcIi9cIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIGhvbWVwYWdlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHBhdGhuYW1lLmluY2x1ZGVzKFwiL0dlbnJlXCIpOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhbGwgZ2VucmVzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHBhdGhuYW1lLmluY2x1ZGVzKFwiL0NhcnRvb25MaXN0XCIpOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgY2FydG9vbmxpc3RcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBUaGUgQ2FydG9vbmxpc3RcIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5pbmNsdWRlcyhcIi9DYXJ0b29uL1wiKToge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY2FydG9vbjpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzPVwiYmlnQ2hhclwiXScpPy50ZXh0Q29udGVudCA/P1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZS5zcGxpdChcIi9cIilbMl0ucmVwbGFjZShcIi1cIiwgXCIgXCIpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbcHJvcGVydHk9XCJvZzppbWFnZVwiXScpXG4gICAgICAgICAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSA/PyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvSy9LaW1DYXJ0b29uL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IENhcnRvb25cIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5pbmNsdWRlcyhcIi9raW1jYXJ0b29uLm1lXCIpOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgb2xkIGhvbWVwYWdlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWNvdmVyICYmIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ICE9PSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvSy9LaW1DYXJ0b29uL2Fzc2V0cy9sb2dvLnBuZ1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9LL0tpbUNhcnRvb24vYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeEpRVUZKTEV0QlFXRXNSVUZEYUVJc1YwRkJWeXhIUVVGSExFdEJRVXNzUlVGRGJrSXNWMEZCVnl4SFFVRkhMRU5CUVVNc1JVRkRaaXhSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVU5hTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRmhaaXhUUVVGVExIRkNRVUZ4UWl4RFFVRkRMRTFCUVdNN1NVRkROVU1zU1VGQlNTeERRVUZETEUxQlFVMDdVVUZCUlN4UFFVRlBMRmRCUVZjc1EwRkJRenRKUVVOb1F5eFBRVUZQTEVOQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVU0xUlN4RFFVRkRPMEZCUTBnc1EwRkJRenRCUVVWRUxGTkJRVk1zVDBGQlR5eERRVUZETEUxQlFXTXNSVUZCUlN4UlFVRm5RanRKUVVOb1JDeEpRVUZKTEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8xRkJRVVVzVDBGQlR5eE5RVUZOTEVOQlFVTTdVMEZEZUVNc1NVRkJTU3hOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVRkZMRTlCUVU4c1YwRkJWeXhSUVVGUkxFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTTdPMUZCUTNaRkxIbEZRVUZ0UWp0QlFVTjZRaXhEUVVGRE8wRkJSVVFzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhKUVVGblFpeEZRVUZGTEVWQlFVVTdTVUZET1VNc1EwRkJReXhGUVVGRkxGZEJRVmNzUlVGQlJTeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03U1VGRE4wTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETzBsQlEzaERMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NRMEZCUXp0QlFVTnFReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVVZJTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5xUXl4aFFVRmhMRzFGUVVGaE8xRkJRekZDTEdOQlFXTXNSVUZCUlN4cFFrRkJhVUk3UzBGRGFrTXNSVUZEUkN4TFFVRkxMRWRCUVVjc1RVRkJUU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEU5QlFVOHNRMEZCUXl4RlFVTnVSQ3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dEpRVVZzUkN4UlFVRlJMRWxCUVVrc1JVRkJSVHRSUVVOaUxFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZEYWtJc1RVRkJUU3hWUVVGVkxFZEJRMlFzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eEZRVUZGTEZkQlFWYzdaMEpCUTJ4RkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNiVU5CUVcxRExFTkJRVU03YjBKQlF6RkVMRVZCUVVVc1YwRkJWeXhGUVVObUxGVkJRVlVzUjBGRFZDeFJRVUZSTzJsQ1FVTk9MR0ZCUVdFc1EwRkJReXhuUTBGQlowTXNRMEZCUXp0blFrRkRhRVFzUlVGQlJTeFhRVUZYTEVOQlFVTXNWMEZCVnl4RlFVRkZPMmRDUVVNelFpeEZRVUZGTEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJSU3hEUVVGRE8yZENRVU4wUWl4RlFVRkZMRTlCUVU4c1EwRkJReXhqUVVGakxFVkJRVVVzUlVGQlJTeERRVUZETzJkQ1FVTTNRaXhGUVVGRkxFOUJRVThzUTBGQlF5eGpRVUZqTEVWQlFVVXNSVUZCUlN4RFFVRkRPMmRDUVVNM1FpeEZRVUZGTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNN1owSkJRMjVDTEZGQlFWRTdjVUpCUTA0c1lVRkJZU3hEUVVGRExHdENRVUZyUWl4RFFVRkRPMjlDUVVOc1F5eEZRVUZGTEZkQlFWY3NRMEZCUXl4WFFVRlhMRVZCUVVVN2IwSkJRek5DTEVWQlFVVXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRkxFTkJRVU03YjBKQlEzUkNMRVZCUVVVc1QwRkJUeXhEUVVGRExHTkJRV01zUlVGQlJTeEZRVUZGTEVOQlFVTTdiMEpCUXpkQ0xFVkJRVVVzVDBGQlR5eERRVUZETEdOQlFXTXNSVUZCUlN4RlFVRkZMRU5CUVVNN2IwSkJRemRDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xbEJSWFJDTEV0QlFVc3NSMEZCUnl4eFFrRkJjVUlzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRE8xbEJRemRDTEZsQlFWa3NRMEZCUXl4TFFVRkxPMmRDUVVOcVFpeFZRVUZWTEVWQlFVVXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVkQlFVY3NRMEZCUXp0dlFrRkRlRVFzUTBGQlF5eERRVUZETEZWQlFWVXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxGVkJRVlVzUlVGQlJUdHZRa0ZEZWtNc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRPM2RDUVVNdlFpeERRVUZETEVOQlFVTXNUMEZCVHp0M1FrRkRWQ3hEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hWUVVGVkxFVkJRVVVzVFVGQlRTeExRVUZMTEVOQlFVTTdORUpCUXpkRUxFTkJRVU1zUTBGQlF5eFZRVUZWT3pSQ1FVTmFMRU5CUVVNc1EwRkJReXhYUVVGWExGVkJRVlVzUlVGQlJTeERRVUZETzFsQlF6VkNMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzVDBGQlR5eERRVU51UXl4UlFVRlJPMmxDUVVOT0xHRkJRV0VzUTBGQlF5eDFRa0ZCZFVJc1EwRkJRenRuUWtGRGRrTXNSVUZCUlN4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRekZDTEZGQlFWRXNRMEZEVWl4RFFVRkRPMWxCUTBZc1NVRkJTU3hYUVVGWExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1owSkJRM0JETEU5QlFVOHNXVUZCV1N4RFFVRkRMR05CUVdNc1EwRkJRenRuUWtGRGJrTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eHBSRUZCWXl4RFFVRkRMQ3REUVVGWkxFTkJRVU03WjBKQlEycEZMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dG5Ra0ZETlVRc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdHZRa0ZEV2l4RFFVRkRMRmxCUVZrc1EwRkJReXhqUVVGakxFVkJRVVVzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0M1FrRkRka1FzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03YVVKQlF5OURPMmRDUVVWRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hsUVVGbExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRMMFE3TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4alFVRmpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tVc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eFJRVUZSTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRkRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4elFrRkJjMElzUTBGQlF6dFpRVU01UXl4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzlDUVVGdlFpeERRVUZETzFsQlF6VkRMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTTdXVUZEYWtRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMSE5DUVVGelFpeEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1JGTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03V1VGRE1VTXNXVUZCV1N4RFFVRkRMRXRCUVVzN1owSkJRMnBDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSVUZCUlN4WFFVRlhPMjlDUVVONFJDeFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE1VTXNXVUZCV1N4RFFVRkRMR0ZCUVdFN1owSkJRM3BDTEZGQlFWRTdjVUpCUTA0c1lVRkJZU3hEUVVGRExIVkNRVUYxUWl4RFFVRkRPMjlDUVVOMlF5eEZRVUZGTEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc2NVVkJRV1VzUTBGQlF6dFpRVU16UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNZMEZCWXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6bEVMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZWtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRaUVVOc1JDeE5RVUZOTzFOQlEwNDdTMEZEUkR0SlFVVkVMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzV1VGQldTeERRVUZETEdGQlFXRXNjMFZCUVdkQ08xRkJRM1pFTEZsQlFWa3NRMEZCUXl4aFFVRmhMRzlGUVVGakxFTkJRVU03U1VGRk1VTXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ0aXRsZSIsImlGcmFtZVZpZGVvIiwiY3VycmVudFRpbWUiLCJkdXJhdGlvbiIsInBhdXNlZCIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsInRyaW0iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJmdWxsVVJMIiwiY292ZXJzIiwiaG9zdG5hbWUiLCJpbmNsdWRlcyIsIm9uIiwiZGF0YSIsImlmcmFtZVZpZGVvIiwiY3VyclRpbWUiLCJkdXIiLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImNvdmVyIiwiZ2V0U2V0dGluZyIsInBhdGhuYW1lIiwiaHJlZiIsImRvY3VtZW50IiwibG9jYXRpb24iLCJlcHNPck1vdmllIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwidGl0bGVTcGxpdCIsInJlcGxhY2UiLCJzcGxpdCIsImRldGFpbHMiLCJzdGF0ZSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlzTmFOIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiZW5kVGltZXN0YW1wIiwiZ2V0VGltZXN0YW1wcyIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;