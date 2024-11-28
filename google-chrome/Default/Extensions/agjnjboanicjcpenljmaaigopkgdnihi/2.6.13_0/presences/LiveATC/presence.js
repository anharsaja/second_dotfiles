var __webpack_exports__={};const presence=new Presence({clientId:"1247668968395903030"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={type:2,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/L/LiveATC/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t,href:a,hostname:s}=document.location;switch(s.split(".")[0]){case"www":switch(t.split("/")[1].replace(".php","")){case"":case"index":e.details="Viewing homepage";break;case"search":{const t=new URL(a).searchParams;e.details="Searching",e.state=`${t.get("freq")?"Frequency: ":t.get("icao")?"ICAO: ":""}${t.get("freq")||t.get("icao")?.toUpperCase()||""}`;break}case"hlisten":{const t=document.querySelector("h1").childNodes.item(2).textContent.split(" - ");e.details=t[0],e.state=t[1],e.largeImageText=document.querySelector("font").textContent.trim(),e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/live.png",e.buttons=[{url:a,label:"Listen to Feed"}];break}case"archive":if(document.querySelector("audio")){const t=document.querySelector("audio");e.details="Listening to archive",e.state=t.querySelector("source").src.split("/")[4].split(".")[0],e.smallImageKey=t.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=t.paused?"Paused":"Playing",t.paused||([e.startTimestamp,e.endTimestamp]=presence.getTimestampsfromMedia(t))}else e.details="Searching archive";break;case"recordings":e.details="Browsing recordings";break;case"feedindex":e.details="Browsing feeds",e.state=document.querySelector("h1 > font");break;case"topfeeds":e.details="Browsing top 50 feeds";break;case"map":e.details="Viewing feed map";break;case"badwxfeeds":e.details="Viewing bad weather airports";break;case"coverage":e.details="Viewing coverage guide";break;default:e.details=t.split("/")[1].replace(".php","")}break;case"forums":{const t=document.querySelector(".navigate_section .last a").href;e.details="Browsing the forums",e.state=document.querySelector(".navigate_section .last span"),"index.php"!==new URL(t).pathname.split("/")[1]&&(e.buttons=[{url:t,label:"View page"}])}}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLEtBQU0sRUFDTkMsY0FBZSwrREFDZkMsZUFBZ0JWLG9CQUNqQixTQUFFVyxFQUFRLEtBQUVDLEVBQUksU0FBRUMsR0FBYUMsU0FBU0MsU0FDM0MsT0FBUUYsRUFBU0csTUFBTSxLQUFLLElBQ3hCLElBQUssTUFDRCxPQUFRTCxFQUFTSyxNQUFNLEtBQUssR0FBR0MsUUFBUSxPQUFRLEtBQzNDLElBQUssR0FJTCxJQUFLLFFBQ0RWLEVBQWFXLFFBQVUsbUJBQ3ZCLE1BRUosSUFBSyxTQUFVLENBQ1gsTUFBTUMsRUFBUyxJQUFJQyxJQUFJUixHQUFNUyxhQUM3QmQsRUFBYVcsUUFBVSxZQUN2QlgsRUFBYWUsTUFBUSxHQUFHSCxFQUFPSSxJQUFJLFFBQzdCLGNBQ0FKLEVBQU9JLElBQUksUUFDUCxTQUNBLEtBQUtKLEVBQU9JLElBQUksU0FBV0osRUFBT0ksSUFBSSxTQUFTQyxlQUFpQixLQUMxRSxLQUNKLENBQ0EsSUFBSyxVQUFXLENBQ1osTUFBTUMsRUFBWVgsU0FDYlksY0FBYyxNQUNkQyxXQUFXQyxLQUFLLEdBQ2hCQyxZQUFZYixNQUFNLE9BQ3ZCVCxFQUFhVyxRQUFVTyxFQUFVLEdBQ2pDbEIsRUFBYWUsTUFBUUcsRUFBVSxHQUMvQmxCLEVBQWF1QixlQUFpQmhCLFNBQ3pCWSxjQUFjLFFBQ2RHLFlBQVlFLE9BQ2pCeEIsRUFBYXlCLGNBQWdCLCtDQUM3QnpCLEVBQWEwQixRQUFVLENBQ25CLENBQ0lDLElBQUt0QixFQUNMdUIsTUFBTyxtQkFHZixLQUNKLENBQ0EsSUFBSyxVQUNELEdBQUlyQixTQUFTWSxjQUFjLFNBQVUsQ0FDakMsTUFBTVUsRUFBUXRCLFNBQVNZLGNBQWMsU0FDckNuQixFQUFhVyxRQUFVLHVCQUN2QlgsRUFBYWUsTUFBUWMsRUFDaEJWLGNBQWMsVUFDZFcsSUFBSXJCLE1BQU0sS0FBSyxHQUNmQSxNQUFNLEtBQUssR0FDaEJULEVBQWF5QixjQUFnQkksRUFBTUUsT0FDN0IsZ0RBQ0EsK0NBQ04vQixFQUFhZ0MsZUFBaUJILEVBQU1FLE9BQVMsU0FBVyxVQUNuREYsRUFBTUUsVUFDTi9CLEVBQWFHLGVBQWdCSCxFQUFhaUMsY0FDdkMzQyxTQUFTNEMsdUJBQXVCTCxHQUU1QyxNQUVJN0IsRUFBYVcsUUFBVSxvQkFDM0IsTUFFSixJQUFLLGFBQ0RYLEVBQWFXLFFBQVUsc0JBQ3ZCLE1BRUosSUFBSyxZQUNEWCxFQUFhVyxRQUFVLGlCQUN2QlgsRUFBYWUsTUFBUVIsU0FBU1ksY0FBYyxhQUM1QyxNQUVKLElBQUssV0FDRG5CLEVBQWFXLFFBQVUsd0JBQ3ZCLE1BRUosSUFBSyxNQUNEWCxFQUFhVyxRQUFVLG1CQUN2QixNQUVKLElBQUssYUFDRFgsRUFBYVcsUUFBVSwrQkFDdkIsTUFFSixJQUFLLFdBQ0RYLEVBQWFXLFFBQVUseUJBQ3ZCLE1BRUosUUFDSVgsRUFBYVcsUUFBVVAsRUFBU0ssTUFBTSxLQUFLLEdBQUdDLFFBQVEsT0FBUSxJQUl0RSxNQUVKLElBQUssU0FBVSxDQUNYLE1BQU15QixFQUFVNUIsU0FBU1ksY0FBYyw2QkFBNkJkLEtBQ3BFTCxFQUFhVyxRQUFVLHNCQUN2QlgsRUFBYWUsTUFBUVIsU0FBU1ksY0FBYyxnQ0FDSSxjQUE1QyxJQUFJTixJQUFJc0IsR0FBUy9CLFNBQVNLLE1BQU0sS0FBSyxLQUNyQ1QsRUFBYTBCLFFBQVUsQ0FDbkIsQ0FDSUMsSUFBS1EsRUFDTFAsTUFBTyxjQUl2QixFQUVKdEMsU0FBUzhDLFlBQVlwQyxFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjEyNDc2Njg5NjgzOTU5MDMwMzBcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIHR5cGU6IDIsXG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9ML0xpdmVBVEMvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCB7IHBhdGhuYW1lLCBocmVmLCBob3N0bmFtZSB9ID0gZG9jdW1lbnQubG9jYXRpb247XG4gICAgc3dpdGNoIChob3N0bmFtZS5zcGxpdChcIi5cIilbMF0pIHtcbiAgICAgICAgY2FzZSBcInd3d1wiOiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXS5yZXBsYWNlKFwiLnBocFwiLCBcIlwiKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBob21lcGFnZVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImluZGV4XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgaG9tZXBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMKGhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtwYXJhbXMuZ2V0KFwiZnJlcVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkZyZXF1ZW5jeTogXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyYW1zLmdldChcImljYW9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiSUNBTzogXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9JHtwYXJhbXMuZ2V0KFwiZnJlcVwiKSB8fCBwYXJhbXMuZ2V0KFwiaWNhb1wiKT8udG9VcHBlckNhc2UoKSB8fCBcIlwifWA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiaGxpc3RlblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5mbyA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImgxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGROb2Rlcy5pdGVtKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQuc3BsaXQoXCIgLSBcIik7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcmFkaW9JbmZvWzBdO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSByYWRpb0luZm9bMV07XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlVGV4dCA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImZvbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9saXZlLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTGlzdGVuIHRvIEZlZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiYXJjaGl2ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxpc3RlbmluZyB0byBhcmNoaXZlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBhdWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwic291cmNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNyYy5zcGxpdChcIi9cIilbNF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBhdWRpby5wYXVzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGF1ZGlvLnBhdXNlZCA/IFwiUGF1c2VkXCIgOiBcIlBsYXlpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXVkaW8ucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzZnJvbU1lZGlhKGF1ZGlvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIGFyY2hpdmVcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZWNvcmRpbmdzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHJlY29yZGluZ3NcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkaW5kZXhcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgZmVlZHNcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxID4gZm9udFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3BmZWVkc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0b3AgNTAgZmVlZHNcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJtYXBcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBmZWVkIG1hcFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImJhZHd4ZmVlZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBiYWQgd2VhdGhlciBhaXJwb3J0c1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvdmVyYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY292ZXJhZ2UgZ3VpZGVcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYXRobmFtZS5zcGxpdChcIi9cIilbMV0ucmVwbGFjZShcIi5waHBcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJmb3J1bXNcIjoge1xuICAgICAgICAgICAgY29uc3QgcGFnZVVSTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGVfc2VjdGlvbiAubGFzdCBhXCIpLmhyZWY7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhlIGZvcnVtc1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0ZV9zZWN0aW9uIC5sYXN0IHNwYW5cIik7XG4gICAgICAgICAgICBpZiAobmV3IFVSTChwYWdlVVJMKS5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0gIT09IFwiaW5kZXgucGhwXCIpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBwYWdlVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBwYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNPME5CUXk5Q0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVTF1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYWtNc1NVRkJTU3hIUVVGM1FqdFJRVU0xUWl4aFFVRmhMR2RGUVVGaE8xRkJRekZDTEdOQlFXTXNSVUZCUlN4cFFrRkJhVUk3UzBGRGFrTXNSVUZEUkN4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVWc1JDeFJRVUZSTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdVVUZETDBJc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU5ZTEZGQlFWRXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzJkQ1FVTnVSQ3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTlNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN2IwSkJRekZETEUxQlFVMDdhVUpCUTA0N1owSkJRMFFzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXp0dlFrRkRZaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8yOUNRVU14UXl4TlFVRk5PMmxDUVVOT08yZENRVU5FTEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVNN2IwSkJRMlFzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzI5Q1FVVXhReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXp0dlFrRkRia01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVTndRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0M1FrRkRha0lzUTBGQlF5eERRVUZETEdGQlFXRTdkMEpCUTJZc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRPelJDUVVOd1FpeERRVUZETEVOQlFVTXNVVUZCVVRzMFFrRkRWaXhEUVVGRExFTkJRVU1zUlVGRFNpeEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hYUVVGWExFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXp0dlFrRkRia1VzVFVGQlRUdHBRa0ZEVGp0blFrRkRSQ3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETzI5Q1FVTm1MRTFCUVUwc1UwRkJVeXhIUVVGSExGRkJRVkU3ZVVKQlEzaENMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU03ZVVKQlEyNUNMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTnNRaXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMjlDUVVVelFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEY0VNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRMnhETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1VVRkJVVHQ1UWtGRGNFTXNZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJRenQ1UWtGRGNrSXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8yOUNRVU55UWl4WlFVRlpMRU5CUVVNc1lVRkJZU3hwUkVGQll5eERRVUZETzI5Q1FVTjZReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzNkQ1FVTjBRanMwUWtGRFF5eEhRVUZITEVWQlFVVXNTVUZCU1RzMFFrRkRWQ3hMUVVGTExFVkJRVVVzWjBKQlFXZENPM2xDUVVOMlFqdHhRa0ZEUkN4RFFVRkRPMjlDUVVOR0xFMUJRVTA3YVVKQlEwNDdaMEpCUTBRc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6dHZRa0ZEWml4SlFVRkpMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdkMEpCUTNCRExFMUJRVTBzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03ZDBKQlJUbERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN2QwSkJRemxETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTenMyUWtGRGVFSXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJRenMyUWtGRGRrSXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdOa0pCUTJwQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenQzUWtGRGFFSXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRUczBRa0ZEZUVNc1EwRkJRenMwUWtGRFJDeERRVUZETEN0RFFVRlpMRU5CUVVNN2QwSkJRMllzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenQzUWtGRGJFVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3TkVKQlEyeENMRU5CUVVNc1dVRkJXU3hEUVVGRExHTkJRV01zUlVGQlJTeFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRPMmREUVVOMlJDeFJRVUZSTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdlVUpCUTNoRE8zRkNRVU5FT3p0M1FrRkJUU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8yOUNRVU5zUkN4TlFVRk5PMmxDUVVOT08yZENRVU5FTEV0QlFVc3NXVUZCV1N4RFFVRkRMRU5CUVVNN2IwSkJRMnhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTTdiMEpCUXpkRExFMUJRVTA3YVVKQlEwNDdaMEpCUTBRc1MwRkJTeXhYUVVGWExFTkJRVU1zUTBGQlF6dHZRa0ZEYWtJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenR2UWtGRGVFTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMjlDUVVONlJDeE5RVUZOTzJsQ1FVTk9PMmRDUVVORUxFdEJRVXNzVlVGQlZTeERRVUZETEVOQlFVTTdiMEpCUTJoQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkVUpCUVhWQ0xFTkJRVU03YjBKQlF5OURMRTFCUVUwN2FVSkJRMDQ3WjBKQlEwUXNTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJRenR2UWtGRFdDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETzI5Q1FVTXhReXhOUVVGTk8ybENRVU5PTzJkQ1FVTkVMRXRCUVVzc1dVRkJXU3hEUVVGRExFTkJRVU03YjBKQlEyeENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzT0VKQlFUaENMRU5CUVVNN2IwSkJRM1JFTEUxQlFVMDdhVUpCUTA0N1owSkJRMFFzUzBGQlN5eFZRVUZWTEVOQlFVTXNRMEZCUXp0dlFrRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4M1FrRkJkMElzUTBGQlF6dHZRa0ZEYUVRc1RVRkJUVHRwUWtGRFRqdG5Ra0ZEUkN4UFFVRlBMRU5CUVVNc1EwRkJRenR2UWtGRFVpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0dlFrRkRiRVVzVFVGQlRUdHBRa0ZEVGp0aFFVTkVPMWxCUTBRc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTmtMRTFCUVUwc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEzSkRMREpDUVVFeVFpeERRVU16UWl4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVWUUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03V1VGRE4wTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU14UXl3NFFrRkJPRUlzUTBGRE9VSXNRMEZCUXp0WlFVTkdMRWxCUVVrc1NVRkJTU3hIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4WFFVRlhMRVZCUVVVN1owSkJRelZFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN2IwSkJRM1JDTzNkQ1FVTkRMRWRCUVVjc1JVRkJSU3hQUVVGUE8zZENRVU5hTEV0QlFVc3NSVUZCUlN4WFFVRlhPM0ZDUVVOc1FqdHBRa0ZEUkN4RFFVRkRPMkZCUTBZN1UwRkRSRHRMUVVORU8wbEJSVVFzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwidHlwZSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInBhdGhuYW1lIiwiaHJlZiIsImhvc3RuYW1lIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInNwbGl0IiwicmVwbGFjZSIsImRldGFpbHMiLCJwYXJhbXMiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJzdGF0ZSIsImdldCIsInRvVXBwZXJDYXNlIiwicmFkaW9JbmZvIiwicXVlcnlTZWxlY3RvciIsImNoaWxkTm9kZXMiLCJpdGVtIiwidGV4dENvbnRlbnQiLCJsYXJnZUltYWdlVGV4dCIsInRyaW0iLCJzbWFsbEltYWdlS2V5IiwiYnV0dG9ucyIsInVybCIsImxhYmVsIiwiYXVkaW8iLCJzcmMiLCJwYXVzZWQiLCJzbWFsbEltYWdlVGV4dCIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHNmcm9tTWVkaWEiLCJwYWdlVVJMIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;