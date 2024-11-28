var __webpack_exports__={};const presence=new Presence({clientId:"698231292172435567"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused"}),browsingTimestamp=Math.floor(Date.now()/1e3);let currentTime,duration,paused,timestamps;presence.on("iFrameData",(e=>{e.iframeVideo.dur&&({paused,dur:duration,currTime:currentTime}=e.iframeVideo)})),presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/K/KissCartoon/assets/logo.png"};e.startTimestamp=browsingTimestamp,"/"===document.location.pathname||"/kisscartoon.html"===document.location.pathname?e.details="Viewing home page":document.querySelector(".full.watch_container")?(timestamps=presence.getTimestamps(Math.floor(currentTime),Math.floor(duration)),isNaN(duration)?isNaN(duration)&&(e.startTimestamp=browsingTimestamp,e.details="Looking at:",e.state=`${document.querySelector("#adsIfrme > div > div > div > h1 > strong").textContent.replace("Watch ","").replace(" online free","")} ${document.querySelector("#selectEpisode").textContent.trim()}`):(e.smallImageKey=paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=paused?(await strings).pause:(await strings).play,[e.startTimestamp,e.endTimestamp]=timestamps,e.details=document.querySelector("#adsIfrme > div > div > div > h1 > strong").textContent.replace("Watch ","").replace(" online free",""),e.state=document.querySelector("#selectEpisode").textContent.trim(),paused&&(delete e.startTimestamp,delete e.endTimestamp))):document.location.pathname.includes("/CartoonList")?e.details="Viewing the Cartoon List":document.location.pathname.includes("/Cartoon")?(e.details="Viewing Cartoon:",e.state=document.querySelector("#leftside > div:nth-child(2) > div.barContent.full > div.full > h1 > a").textContent):document.location.pathname.includes("/ReportError")&&(e.details="Reporting an error",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/writing.png"),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsS0FBTSxrQkFDTkMsTUFBTyxtQkFDUEMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLFlBQWFDLFNBQVVDLE9BQVFDLFdBQ25DZixTQUFTZ0IsR0FBRyxjQUFlQyxJQUNuQkEsRUFBS0MsWUFBWUMsT0FDZEwsT0FBUUssSUFBS04sU0FBVU8sU0FBVVIsYUFBZ0JLLEVBQUtDLFlBQVksSUFFN0VsQixTQUFTZ0IsR0FBRyxjQUFjSyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLG9FQUVuQkQsRUFBYUUsZUFBaUJqQixrQkFDSyxNQUEvQmtCLFNBQVNDLFNBQVNDLFVBQ2Esc0JBQS9CRixTQUFTQyxTQUFTQyxTQUNsQkwsRUFBYU0sUUFBVSxvQkFDbEJILFNBQVNJLGNBQWMsMEJBQzVCZCxXQUFhZixTQUFTOEIsY0FBY3RCLEtBQUtDLE1BQU1HLGFBQWNKLEtBQUtDLE1BQU1JLFdBQ25Fa0IsTUFBTWxCLFVBa0JGa0IsTUFBTWxCLFlBQ1hTLEVBQWFFLGVBQWlCakIsa0JBQzlCZSxFQUFhTSxRQUFVLGNBQ3ZCTixFQUFhVSxNQUFRLEdBQUdQLFNBQ25CSSxjQUFjLDZDQUNkSSxZQUFZQyxRQUFRLFNBQVUsSUFDOUJBLFFBQVEsZUFBZ0IsT0FBT1QsU0FDL0JJLGNBQWMsa0JBQ2RJLFlBQVlFLFdBekJqQmIsRUFBYWMsY0FBZ0J0QixPQUFTLGdEQUFrRCwrQ0FDeEZRLEVBQWFlLGVBQWlCdkIsY0FDakJYLFNBQVNHLGFBQ1RILFNBQVNFLE1BQ3JCaUIsRUFBYUUsZUFBZ0JGLEVBQWFnQixjQUFnQnZCLFdBQzNETyxFQUFhTSxRQUFVSCxTQUNsQkksY0FBYyw2Q0FDZEksWUFBWUMsUUFBUSxTQUFVLElBQzlCQSxRQUFRLGVBQWdCLElBQzdCWixFQUFhVSxNQUFRUCxTQUNoQkksY0FBYyxrQkFDZEksWUFBWUUsT0FDYnJCLGdCQUNPUSxFQUFhRSxzQkFDYkYsRUFBYWdCLGdCQWN2QmIsU0FBU0MsU0FBU0MsU0FBU1ksU0FBUyxnQkFDekNqQixFQUFhTSxRQUFVLDJCQUNsQkgsU0FBU0MsU0FBU0MsU0FBU1ksU0FBUyxhQUN6Q2pCLEVBQWFNLFFBQVUsbUJBQ3ZCTixFQUFhVSxNQUFRUCxTQUFTSSxjQUFjLDBFQUEwRUksYUFFakhSLFNBQVNDLFNBQVNDLFNBQVNZLFNBQVMsa0JBQ3pDakIsRUFBYU0sUUFBVSxxQkFDdkJOLEVBQWFjLGNBQWdCLG1EQUU3QmQsRUFBYU0sUUFDYjVCLFNBQVN3QyxZQUFZbEIsR0FFckJ0QixTQUFTd0MsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2OTgyMzEyOTIxNzI0MzU1NjdcIixcbn0pLCBzdHJpbmdzID0gcHJlc2VuY2UuZ2V0U3RyaW5ncyh7XG4gICAgcGxheTogXCJnZW5lcmFsLnBsYXlpbmdcIixcbiAgICBwYXVzZTogXCJnZW5lcmFsLnBhdXNlZFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5sZXQgY3VycmVudFRpbWUsIGR1cmF0aW9uLCBwYXVzZWQsIHRpbWVzdGFtcHM7XG5wcmVzZW5jZS5vbihcImlGcmFtZURhdGFcIiwgKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5pZnJhbWVWaWRlby5kdXIpXG4gICAgICAgICh7IHBhdXNlZCwgZHVyOiBkdXJhdGlvbiwgY3VyclRpbWU6IGN1cnJlbnRUaW1lIH0gPSBkYXRhLmlmcmFtZVZpZGVvKTtcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9LL0tpc3NDYXJ0b29uL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgIH07XG4gICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiB8fFxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIva2lzc2NhcnRvb24uaHRtbFwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBob21lIHBhZ2VcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGwud2F0Y2hfY29udGFpbmVyXCIpKSB7XG4gICAgICAgIHRpbWVzdGFtcHMgPSBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKE1hdGguZmxvb3IoY3VycmVudFRpbWUpLCBNYXRoLmZsb29yKGR1cmF0aW9uKSk7XG4gICAgICAgIGlmICghaXNOYU4oZHVyYXRpb24pKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBwYXVzZWRcbiAgICAgICAgICAgICAgICA/IChhd2FpdCBzdHJpbmdzKS5wYXVzZVxuICAgICAgICAgICAgICAgIDogKGF3YWl0IHN0cmluZ3MpLnBsYXk7XG4gICAgICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9IHRpbWVzdGFtcHM7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYWRzSWZybWUgPiBkaXYgPiBkaXYgPiBkaXYgPiBoMSA+IHN0cm9uZ1wiKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5yZXBsYWNlKFwiV2F0Y2ggXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoXCIgb25saW5lIGZyZWVcIiwgXCJcIik7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdEVwaXNvZGVcIilcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHBhdXNlZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNOYU4oZHVyYXRpb24pKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb29raW5nIGF0OlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNhZHNJZnJtZSA+IGRpdiA+IGRpdiA+IGRpdiA+IGgxID4gc3Ryb25nXCIpXG4gICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnJlcGxhY2UoXCJXYXRjaCBcIiwgXCJcIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZShcIiBvbmxpbmUgZnJlZVwiLCBcIlwiKX0gJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdEVwaXNvZGVcIilcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvQ2FydG9vbkxpc3RcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBDYXJ0b29uIExpc3RcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9DYXJ0b29uXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIENhcnRvb246XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVmdHNpZGUgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2LmJhckNvbnRlbnQuZnVsbCA+IGRpdi5mdWxsID4gaDEgPiBhXCIpLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9SZXBvcnRFcnJvclwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVwb3J0aW5nIGFuIGVycm9yXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy93cml0aW5nLnBuZ1wiO1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNM1FpeEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08wbEJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3UTBGRGRrSXNRMEZCUXl4RlFVTkdMR2xDUVVGcFFpeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUlc1RUxFbEJRVWtzVjBGQmJVSXNSVUZEZEVJc1VVRkJaMElzUlVGRGFFSXNUVUZCWlN4RlFVTm1MRlZCUVc5Q0xFTkJRVU03UVVGWGRFSXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEpRVUZuUWl4RlFVRkZMRVZCUVVVN1NVRkRPVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjN1VVRkRka0lzUTBGQlF5eEZRVUZGTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFhRVUZYTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03UVVGRGVFVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkZTQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRiRU1zWVVGQllTeEZRVU5hTEd0RlFVRnJSVHRMUVVOdVJTeERRVUZETzBsQlJVWXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0SlFVVm9SQ3hKUVVORExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWRCUVVjN1VVRkRiRU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRXRCUVVzc2JVSkJRVzFDTzFGQlJXeEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYlVKQlFXMUNMRU5CUVVNN1UwRkRka01zU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMSFZDUVVGMVFpeERRVUZETEVWQlFVVTdVVUZEZWtRc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEyeERMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlEzWkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlEzQkNMRU5CUVVNN1VVRkRSaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMWxCUTNKQ0xGbEJRVmtzUTBGQlF5eGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc2FVUkJRV01zUTBGQlF5d3JRMEZCV1N4RFFVRkRPMWxCUTJwRkxGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NUVUZCVFR0blFrRkRia01zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTE8yZENRVU4yUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTjRRaXhEUVVGRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVWQlFVVXNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF6dFpRVVYwUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkU3YVVKQlF6ZENMR0ZCUVdFc1EwRkJReXd5UTBGQk1rTXNRMEZCUXp0cFFrRkRNVVFzVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRE8ybENRVU5xUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6bENMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVUdHBRa0ZETTBJc1lVRkJZU3hEUVVGRExHZENRVUZuUWl4RFFVRkRPMmxDUVVNdlFpeFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkZja0lzU1VGQlNTeE5RVUZOTEVWQlFVVTdaMEpCUTFnc1QwRkJUeXhaUVVGWkxFTkJRVU1zWTBGQll5eERRVUZETzJkQ1FVTnVReXhQUVVGUExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTTdZVUZEYWtNN1UwRkRSRHRoUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMWxCUXpOQ0xGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03V1VGRGFFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVVGaExFTkJRVU03V1VGRGNrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExGRkJRVkU3YVVKQlF6bENMR0ZCUVdFc1EwRkJReXd5UTBGQk1rTXNRMEZCUXp0cFFrRkRNVVFzVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRE8ybENRVU5xUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEZGQlFWRTdhVUpCUTNaRExHRkJRV0VzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJRenRwUWtGREwwSXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU03VTBGRGRrSTdTMEZEUkR0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJRenRSUVVNM1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMREJDUVVFd1FpeERRVUZETzFOQlF6bERMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xRkJRM3BFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdVVUZETVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTXhReXgzUlVGQmQwVXNRMEZEZUVVc1EwRkJReXhYUVVGWExFTkJRVU03UzBGRFpEdFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZPMUZCUXk5RUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03VVVGRE5VTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdTMEZETlVNN1NVRkZSQ3hKUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZQTzFGQlFVVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6czdVVUZEZUVRc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6ZENMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwic3RyaW5ncyIsImdldFN0cmluZ3MiLCJwbGF5IiwicGF1c2UiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwicGF1c2VkIiwidGltZXN0YW1wcyIsIm9uIiwiZGF0YSIsImlmcmFtZVZpZGVvIiwiZHVyIiwiY3VyclRpbWUiLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImRldGFpbHMiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0VGltZXN0YW1wcyIsImlzTmFOIiwic3RhdGUiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJ0cmltIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiZW5kVGltZXN0YW1wIiwiaW5jbHVkZXMiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;