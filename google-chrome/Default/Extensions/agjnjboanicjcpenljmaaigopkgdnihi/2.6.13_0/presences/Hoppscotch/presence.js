"use strict";var __webpack_exports__={};const getWorkspace=()=>{if(document.querySelector('svg:has(circle[cx="12"][cy="7"]'))return{kind:"Personal"};const e=document.querySelector('svg:has(path[d="M22 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75"])+div');return e?.textContent?{kind:"Team",name:e.textContent}:{kind:"Error"}},getWorkspaceName=()=>{const e=getWorkspace();return"Personal"===e.kind?"📂 | Personal Workspace":"Team"===e.kind?`📂 | ${e.name}`:"📂 | Unknown workspace"};function getEndpoint(){const e=document.querySelector("input#url");if(!e)return null;const t=new URL(e.value);return`${t.hostname}${t.pathname}`}function GraphQL(){const e=getEndpoint();return e?{smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hoppscotch/assets/1.png",smallImageText:"GraphQL",details:getWorkspaceName(),state:`🧑‍💻 | ${e}`}:null}function getRealtimeEndpoint(){const e=document.querySelector("input[type=url]");if(!e)return null;const t=new URL(e.value);return`${t.hostname}${t.pathname}`}function MQTT(){const e=getRealtimeEndpoint();return e?{smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hoppscotch/assets/5.png",smallImageText:"MQTT",details:getWorkspaceName(),state:`🧑‍💻 | ${e}`}:null}function Profile(){return{smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hoppscotch/assets/7.png",smallImageText:"Profile",details:getWorkspaceName(),state:"Viewing their profile"}}function rest_getEndpoint(){const e=document.querySelector(".cm-line");if(!e)return null;const t=[...e.childNodes],n=t[0]?.textContent;return n?1===t.length?new URL(n).pathname:t.filter((e=>e.nodeType===e.TEXT_NODE)).map((e=>e.textContent)).join("").split("?")[0]:null}function getMethod(){const e=document.querySelector('[id*="removable-tab"].active');if(!e)return null;const t=e.querySelector("span.text-tiny");return t?t.textContent:null}function Rest(){const e=rest_getEndpoint();if(!e)return null;const t=getMethod();return t?{smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hoppscotch/assets/0.png",smallImageText:"REST",details:getWorkspaceName(),state:`🧑‍💻 | ${t} ${e}`}:null}function Settings(){return{smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hoppscotch/assets/6.png",smallImageText:"Settings",details:getWorkspaceName(),state:"Configuring settings"}}function SocketIO(){const e=getRealtimeEndpoint();return e?{smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hoppscotch/assets/4.png",smallImageText:"Socket.IO",details:getWorkspaceName(),state:`🧑‍💻 | ${e}`}:null}function ServerSentEvents(){const e=getRealtimeEndpoint();return e?{smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hoppscotch/assets/3.png",smallImageText:"Server Sent Events",details:getWorkspaceName(),state:`🧑‍💻 | ${e}`}:null}function Websocket(){const e=getRealtimeEndpoint();return e?{smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hoppscotch/assets/2.png",smallImageText:"Websocket",details:getWorkspaceName(),state:`🧑‍💻 | ${e}`}:null}const presence=new Presence({clientId:"792735245488488458"}),BASE={name:"Hoppscotch",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hoppscotch/assets/logo.png",startTimestamp:Math.floor(Date.now()/1e3)},Route={"/":Rest,"/graphql":GraphQL,"/realtime/websocket":Websocket,"/realtime/sse":ServerSentEvents,"/realtime/socketio":SocketIO,"/realtime/mqtt":MQTT,"/settings":Settings,"/profile":Profile};presence.on("UpdateData",(async()=>{const e=Route[document.location.pathname];if(!e)return;const t=e();null!==t&&presence.setActivity({...BASE,...t})}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVdLLHNCQUNqQixPQUFLTCxFQUVFLENBQ0hDLGNBQWUsK0RBQ2ZDLGVBQWdCLFlBQ2hCQyxRQUFTYixtQkFDVGMsTUFBTyxXQUFXSixLQUxYLElBT2YsQ0NKQSxNQUFNMkIsU0FBVyxJQUFJQyxTQUFTLENBQzFCQyxTQUFVLHVCQUVSQyxLQUFPLENBQ1R6QyxLQUFNLGFBQ04wQyxjQUFlLGtFQUNmQyxlQUFnQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxNQUN6Q0MsTUFBUSxDQUNQLElBQUtmLEtBQ0wsV0FBWXZCLFFBQ1osc0JBQXVCMkIsVUFDdkIsZ0JBQWlCRCxpQkFDakIscUJBQXNCRCxTQUN0QixpQkFBa0JsQixLQUNsQixZQUFhaUIsU0FDYixXQUFZaEIsU0FFaEJvQixTQUFTVyxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWVILE1BQU1yRCxTQUFTeUQsU0FBUzNDLFVBQzdDLElBQUswQyxFQUNELE9BQ0osTUFBTUUsRUFBZUYsSUFDQSxPQUFqQkUsR0FFSmYsU0FBU2dCLFlBQVksSUFBS2IsUUFBU1ksR0FBZSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi93b3Jrc3BhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2dyYXBocWwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3JlYWx0aW1lLnRzIiwid2VicGFjazovLy8uL3JvdXRlcy9tcXR0LnRzIiwid2VicGFjazovLy8uL3JvdXRlcy9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL3JvdXRlcy9yZXN0LnRzIiwid2VicGFjazovLy8uL3JvdXRlcy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvc29ja2V0aW8udHMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL3NzZS50cyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvd2Vic29ja2V0LnRzIiwid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdvcmtzcGFjZSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnOmhhcyhjaXJjbGVbY3g9XCIxMlwiXVtjeT1cIjdcIl0nKSlcbiAgICAgICAgcmV0dXJuIHsga2luZDogXCJQZXJzb25hbFwiIH07XG4gICAgY29uc3QgdGVhbVdvcmtzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZzpoYXMocGF0aFtkPVwiTTIyIDIxdi0yYTQgNCAwIDAgMC0zLTMuODdtLTMtMTJhNCA0IDAgMCAxIDAgNy43NVwiXSkrZGl2Jyk7XG4gICAgaWYgKHRlYW1Xb3Jrc3BhY2U/LnRleHRDb250ZW50KVxuICAgICAgICByZXR1cm4geyBraW5kOiBcIlRlYW1cIiwgbmFtZTogdGVhbVdvcmtzcGFjZS50ZXh0Q29udGVudCB9O1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHsga2luZDogXCJFcnJvclwiIH07XG59O1xuZXhwb3J0IGNvbnN0IGdldFdvcmtzcGFjZU5hbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gZ2V0V29ya3NwYWNlKCk7XG4gICAgaWYgKHdvcmtzcGFjZS5raW5kID09PSBcIlBlcnNvbmFsXCIpXG4gICAgICAgIHJldHVybiBcIvCfk4IgfCBQZXJzb25hbCBXb3Jrc3BhY2VcIjtcbiAgICBpZiAod29ya3NwYWNlLmtpbmQgPT09IFwiVGVhbVwiKVxuICAgICAgICByZXR1cm4gYPCfk4IgfCAke3dvcmtzcGFjZS5uYW1lfWA7XG4gICAgcmV0dXJuIFwi8J+TgiB8IFVua25vd24gd29ya3NwYWNlXCI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZDI5eWEzTndZV05sTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lkMjl5YTNOd1lXTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVV0QkxFMUJRVTBzV1VGQldTeEhRVUZITEVkQlFXTXNSVUZCUlR0SlFVVndReXhKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNhVU5CUVdsRExFTkJRVU03VVVGRE5VUXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hWUVVGVkxFVkJRVVVzUTBGQlF6dEpRVVUzUWl4TlFVRk5MR0ZCUVdFc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU16UXl3d1JVRkJNRVVzUTBGRE1VVXNRMEZCUXp0SlFVVkdMRWxCUVVrc1lVRkJZU3hGUVVGRkxGZEJRVmM3VVVGRE4wSXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeEZRVUZGTEdGQlFXRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenM3VVVGRGNrUXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF6dEJRVU12UWl4RFFVRkRMRU5CUVVNN1FVRkZSaXhOUVVGTkxFTkJRVU1zVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhIUVVGWExFVkJRVVU3U1VGRE5VTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1dVRkJXU3hGUVVGRkxFTkJRVU03U1VGRmFrTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1NVRkJTU3hMUVVGTExGVkJRVlU3VVVGQlJTeFBRVUZQTEhsQ1FVRjVRaXhEUVVGRE8wbEJSWEJGTEVsQlFVa3NVMEZCVXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhOUVVGTk8xRkJRVVVzVDBGQlR5eFJRVUZSTEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVVdlJDeFBRVUZQTEhkQ1FVRjNRaXhEUVVGRE8wRkJRMnBETEVOQlFVTXNRMEZCUXlKOSIsImltcG9ydCB7IGdldFdvcmtzcGFjZU5hbWUgfSBmcm9tIFwiLi4vbGliL3dvcmtzcGFjZVwiO1xuZnVuY3Rpb24gZ2V0RW5kcG9pbnQoKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjdXJsXCIpO1xuICAgIGlmICghaW5wdXQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoaW5wdXQudmFsdWUpO1xuICAgIHJldHVybiBgJHt1cmwuaG9zdG5hbWV9JHt1cmwucGF0aG5hbWV9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBHcmFwaFFMKCkge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0RW5kcG9pbnQoKTtcbiAgICBpZiAoIWVuZHBvaW50KVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvSC9Ib3Bwc2NvdGNoL2Fzc2V0cy8xLnBuZ1wiLFxuICAgICAgICBzbWFsbEltYWdlVGV4dDogXCJHcmFwaFFMXCIsXG4gICAgICAgIGRldGFpbHM6IGdldFdvcmtzcGFjZU5hbWUoKSxcbiAgICAgICAgc3RhdGU6IGDwn6eR4oCN8J+SuyB8ICR7ZW5kcG9pbnR9YCxcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWjNKaGNHaHhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltZHlZWEJvY1d3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRMEVzVDBGQlR5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFMUJRVTBzYTBKQlFXdENMRU5CUVVNN1FVRkZjRVFzVTBGQlV5eFhRVUZYTzBsQlEyNUNMRTFCUVUwc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFXMUNMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJSWEJGTEVsQlFVa3NRMEZCUXl4TFFVRkxPMUZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRmVFSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUldwRExFOUJRVThzUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEJRVU42UXl4RFFVRkRPMEZCUlVRc1RVRkJUU3hWUVVGVkxFOUJRVTg3U1VGRGRFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1YwRkJWeXhGUVVGRkxFTkJRVU03U1VGRkwwSXNTVUZCU1N4RFFVRkRMRkZCUVZFN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVVV6UWl4UFFVRlBPMUZCUTA0c1lVRkJZU3huUlVGQlowSTdVVUZETjBJc1kwRkJZeXhGUVVGRkxGTkJRVk03VVVGRGVrSXNUMEZCVHl4RlFVRkZMR2RDUVVGblFpeEZRVUZGTzFGQlF6TkNMRXRCUVVzc1JVRkJSU3hYUVVGWExGRkJRVkVzUlVGQlJUdExRVU0xUWl4RFFVRkRPMEZCUTBnc1EwRkJReUo5IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJlYWx0aW1lRW5kcG9pbnQoKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT11cmxdXCIpO1xuICAgIGlmICghaW5wdXQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoaW5wdXQudmFsdWUpO1xuICAgIHJldHVybiBgJHt1cmwuaG9zdG5hbWV9JHt1cmwucGF0aG5hbWV9YDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVmhiSFJwYldVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp5WldGc2RHbHRaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZWQlFWVXNiVUpCUVcxQ08wbEJRMnhETEUxQlFVMHNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVzFDTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03U1VGRk1VVXNTVUZCU1N4RFFVRkRMRXRCUVVzN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVVY0UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkZha01zVDBGQlR5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBGQlEzcERMRU5CUVVNaWZRPT0iLCJpbXBvcnQgeyBnZXRXb3Jrc3BhY2VOYW1lIH0gZnJvbSBcIi4uL2xpYi93b3Jrc3BhY2VcIjtcbmltcG9ydCB7IGdldFJlYWx0aW1lRW5kcG9pbnQgfSBmcm9tIFwiLi4vbGliL3JlYWx0aW1lXCI7XG5leHBvcnQgZnVuY3Rpb24gTVFUVCgpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGdldFJlYWx0aW1lRW5kcG9pbnQoKTtcbiAgICBpZiAoIWVuZHBvaW50KVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvSC9Ib3Bwc2NvdGNoL2Fzc2V0cy81LnBuZ1wiLFxuICAgICAgICBzbWFsbEltYWdlVGV4dDogXCJNUVRUXCIsXG4gICAgICAgIGRldGFpbHM6IGdldFdvcmtzcGFjZU5hbWUoKSxcbiAgICAgICAgc3RhdGU6IGDwn6eR4oCN8J+SuyB8ICR7ZW5kcG9pbnR9YCxcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYlhGMGRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW0xeGRIUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUTBFc1QwRkJUeXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRTFCUVUwc2EwSkJRV3RDTEVOQlFVTTdRVUZEY0VRc1QwRkJUeXhGUVVGRkxHMUNRVUZ0UWl4RlFVRkZMRTFCUVUwc2FVSkJRV2xDTEVOQlFVTTdRVUZGZEVRc1RVRkJUU3hWUVVGVkxFbEJRVWs3U1VGRGJrSXNUVUZCVFN4UlFVRlJMRWRCUVVjc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXp0SlFVVjJReXhKUVVGSkxFTkJRVU1zVVVGQlVUdFJRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUlROQ0xFOUJRVTg3VVVGRFRpeGhRVUZoTEdkRlFVRmhPMUZCUXpGQ0xHTkJRV01zUlVGQlJTeE5RVUZOTzFGQlEzUkNMRTlCUVU4c1JVRkJSU3huUWtGQlowSXNSVUZCUlR0UlFVTXpRaXhMUVVGTExFVkJRVVVzVjBGQlZ5eFJRVUZSTEVWQlFVVTdTMEZETlVJc1EwRkJRenRCUVVOSUxFTkJRVU1pZlE9PSIsImltcG9ydCB7IGdldFdvcmtzcGFjZU5hbWUgfSBmcm9tIFwiLi4vbGliL3dvcmtzcGFjZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0gvSG9wcHNjb3RjaC9hc3NldHMvNy5wbmdcIixcbiAgICAgICAgc21hbGxJbWFnZVRleHQ6IFwiUHJvZmlsZVwiLFxuICAgICAgICBkZXRhaWxzOiBnZXRXb3Jrc3BhY2VOYW1lKCksXG4gICAgICAgIHN0YXRlOiBcIlZpZXdpbmcgdGhlaXIgcHJvZmlsZVwiLFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEp2Wm1sc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5CeWIyWnBiR1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4RlFVRkZMR2RDUVVGblFpeEZRVUZGTEUxQlFVMHNhMEpCUVd0Q0xFTkJRVU03UVVGSGNFUXNUVUZCVFN4VlFVRlZMRTlCUVU4N1NVRkRkRUlzVDBGQlR6dFJRVU5PTEdGQlFXRXNaMFZCUVdkQ08xRkJRemRDTEdOQlFXTXNSVUZCUlN4VFFVRlRPMUZCUTNwQ0xFOUJRVThzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSVHRSUVVNelFpeExRVUZMTEVWQlFVVXNkVUpCUVhWQ08wdEJRMlFzUTBGQlF6dEJRVU51UWl4RFFVRkRJbjA9IiwiaW1wb3J0IHsgZ2V0V29ya3NwYWNlTmFtZSB9IGZyb20gXCIuLi9saWIvd29ya3NwYWNlXCI7XG5mdW5jdGlvbiBnZXRFbmRwb2ludCgpIHtcbiAgICBjb25zdCBjbUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNtLWxpbmVcIik7XG4gICAgaWYgKCFjbUxpbmUpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbLi4uY21MaW5lLmNoaWxkTm9kZXNdLCBmaXJzdE5vZGVDb250ZW50ID0gY2hpbGROb2Rlc1swXT8udGV4dENvbnRlbnQ7XG4gICAgaWYgKCFmaXJzdE5vZGVDb250ZW50KVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpXG4gICAgICAgIHJldHVybiBuZXcgVVJMKGZpcnN0Tm9kZUNvbnRlbnQpLnBhdGhuYW1lO1xuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1xuICAgICAgICAgICAgLmZpbHRlcihub2RlID0+IG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFKVxuICAgICAgICAgICAgLm1hcChub2RlID0+IG5vZGUudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAuam9pbihcIlwiKVxuICAgICAgICAgICAgLnNwbGl0KFwiP1wiKVswXTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRNZXRob2QoKSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkKj1cInJlbW92YWJsZS10YWJcIl0uYWN0aXZlJyk7XG4gICAgaWYgKCF0YWIpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1ldGhvZCA9IHRhYi5xdWVyeVNlbGVjdG9yKFwic3Bhbi50ZXh0LXRpbnlcIik7XG4gICAgaWYgKCFtZXRob2QpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHJldHVybiBtZXRob2QudGV4dENvbnRlbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gUmVzdCgpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGdldEVuZHBvaW50KCk7XG4gICAgaWYgKCFlbmRwb2ludClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWV0aG9kID0gZ2V0TWV0aG9kKCk7XG4gICAgaWYgKCFtZXRob2QpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9IL0hvcHBzY290Y2gvYXNzZXRzLzAucG5nXCIsXG4gICAgICAgIHNtYWxsSW1hZ2VUZXh0OiBcIlJFU1RcIixcbiAgICAgICAgZGV0YWlsczogZ2V0V29ya3NwYWNlTmFtZSgpLFxuICAgICAgICBzdGF0ZTogYPCfp5HigI3wn5K7IHwgJHttZXRob2R9ICR7ZW5kcG9pbnR9YCxcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5KbGMzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUlVFc1QwRkJUeXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRTFCUVUwc2EwSkJRV3RDTEVOQlFVTTdRVUZGY0VRc1UwRkJVeXhYUVVGWE8wbEJRMjVDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdTVUZGYkVRc1NVRkJTU3hEUVVGRExFMUJRVTA3VVVGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVVjZRaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVONFF5eG5Ra0ZCWjBJc1IwRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRPMGxCUlM5RExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVVZ1UXl4SlFVRkpMRlZCUVZVc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF6dFJRVUZGTEU5QlFVOHNTVUZCU1N4SFFVRkhMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1UwRkRiRVU3VVVGRFNpeFBRVUZQTEZWQlFWVTdZVUZEWml4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03WVVGRGFFUXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0aFFVTTNRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzJGQlExSXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEyaENPMEZCUTBZc1EwRkJRenRCUVVWRUxGTkJRVk1zVTBGQlV6dEpRVU5xUWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETERoQ1FVRTRRaXhEUVVGRExFTkJRVU03U1VGRmJrVXNTVUZCU1N4RFFVRkRMRWRCUVVjN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVVYwUWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03U1VGRmJrUXNTVUZCU1N4RFFVRkRMRTFCUVUwN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVVY2UWl4UFFVRlBMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU03UVVGRE0wSXNRMEZCUXp0QlFVVkVMRTFCUVUwc1ZVRkJWU3hKUVVGSk8wbEJRMjVDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRmRCUVZjc1JVRkJSU3hEUVVGRE8wbEJSUzlDTEVsQlFVa3NRMEZCUXl4UlFVRlJPMUZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRk0wSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1UwRkJVeXhGUVVGRkxFTkJRVU03U1VGRk0wSXNTVUZCU1N4RFFVRkRMRTFCUVUwN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVVY2UWl4UFFVRlBPMUZCUTA0c1lVRkJZU3huUlVGQllUdFJRVU14UWl4alFVRmpMRVZCUVVVc1RVRkJUVHRSUVVOMFFpeFBRVUZQTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVU3VVVGRE0wSXNTMEZCU3l4RlFVRkZMRmRCUVZjc1RVRkJUU3hKUVVGSkxGRkJRVkVzUlVGQlJUdExRVU4wUWl4RFFVRkRPMEZCUTI1Q0xFTkJRVU1pZlE9PSIsImltcG9ydCB7IGdldFdvcmtzcGFjZU5hbWUgfSBmcm9tIFwiLi4vbGliL3dvcmtzcGFjZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9IL0hvcHBzY290Y2gvYXNzZXRzLzYucG5nXCIsXG4gICAgICAgIHNtYWxsSW1hZ2VUZXh0OiBcIlNldHRpbmdzXCIsXG4gICAgICAgIGRldGFpbHM6IGdldFdvcmtzcGFjZU5hbWUoKSxcbiAgICAgICAgc3RhdGU6IFwiQ29uZmlndXJpbmcgc2V0dGluZ3NcIixcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJWMGRHbHVaM011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnpaWFIwYVc1bmN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZEUVN4UFFVRlBMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNUVUZCVFN4clFrRkJhMElzUTBGQlF6dEJRVVZ3UkN4TlFVRk5MRlZCUVZVc1VVRkJVVHRKUVVOMlFpeFBRVUZQTzFGQlEwNHNZVUZCWVN4blJVRkJhVUk3VVVGRE9VSXNZMEZCWXl4RlFVRkZMRlZCUVZVN1VVRkRNVUlzVDBGQlR5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRk8xRkJRek5DTEV0QlFVc3NSVUZCUlN4elFrRkJjMEk3UzBGRE4wSXNRMEZCUXp0QlFVTklMRU5CUVVNaWZRPT0iLCJpbXBvcnQgeyBnZXRXb3Jrc3BhY2VOYW1lIH0gZnJvbSBcIi4uL2xpYi93b3Jrc3BhY2VcIjtcbmltcG9ydCB7IGdldFJlYWx0aW1lRW5kcG9pbnQgfSBmcm9tIFwiLi4vbGliL3JlYWx0aW1lXCI7XG5leHBvcnQgZnVuY3Rpb24gU29ja2V0SU8oKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBnZXRSZWFsdGltZUVuZHBvaW50KCk7XG4gICAgaWYgKCFlbmRwb2ludClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0gvSG9wcHNjb3RjaC9hc3NldHMvNC5wbmdcIixcbiAgICAgICAgc21hbGxJbWFnZVRleHQ6IFwiU29ja2V0LklPXCIsXG4gICAgICAgIGRldGFpbHM6IGdldFdvcmtzcGFjZU5hbWUoKSxcbiAgICAgICAgc3RhdGU6IGDwn6eR4oCN8J+SuyB8ICR7ZW5kcG9pbnR9YCxcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzI5amEyVjBhVzh1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnpiMk5yWlhScGJ5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZEUVN4UFFVRlBMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNUVUZCVFN4clFrRkJhMElzUTBGQlF6dEJRVU53UkN4UFFVRlBMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNUVUZCVFN4cFFrRkJhVUlzUTBGQlF6dEJRVVYwUkN4TlFVRk5MRlZCUVZVc1VVRkJVVHRKUVVOMlFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4dFFrRkJiVUlzUlVGQlJTeERRVUZETzBsQlJYWkRMRWxCUVVrc1EwRkJReXhSUVVGUk8xRkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZGTTBJc1QwRkJUenRSUVVOT0xHRkJRV0VzWjBWQlFXbENPMUZCUXpsQ0xHTkJRV01zUlVGQlJTeFhRVUZYTzFGQlF6TkNMRTlCUVU4c1JVRkJSU3huUWtGQlowSXNSVUZCUlR0UlFVTXpRaXhMUVVGTExFVkJRVVVzVjBGQlZ5eFJRVUZSTEVWQlFVVTdTMEZETlVJc1EwRkJRenRCUVVOSUxFTkJRVU1pZlE9PSIsImltcG9ydCB7IGdldFdvcmtzcGFjZU5hbWUgfSBmcm9tIFwiLi4vbGliL3dvcmtzcGFjZVwiO1xuaW1wb3J0IHsgZ2V0UmVhbHRpbWVFbmRwb2ludCB9IGZyb20gXCIuLi9saWIvcmVhbHRpbWVcIjtcbmV4cG9ydCBmdW5jdGlvbiBTZXJ2ZXJTZW50RXZlbnRzKCkge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0UmVhbHRpbWVFbmRwb2ludCgpO1xuICAgIGlmICghZW5kcG9pbnQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9IL0hvcHBzY290Y2gvYXNzZXRzLzMucG5nXCIsXG4gICAgICAgIHNtYWxsSW1hZ2VUZXh0OiBcIlNlcnZlciBTZW50IEV2ZW50c1wiLFxuICAgICAgICBkZXRhaWxzOiBnZXRXb3Jrc3BhY2VOYW1lKCksXG4gICAgICAgIHN0YXRlOiBg8J+nkeKAjfCfkrsgfCAke2VuZHBvaW50fWAsXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzTmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWMzTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVOQkxFOUJRVThzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hOUVVGTkxHdENRVUZyUWl4RFFVRkRPMEZCUTNCRUxFOUJRVThzUlVGQlJTeHRRa0ZCYlVJc1JVRkJSU3hOUVVGTkxHbENRVUZwUWl4RFFVRkRPMEZCUlhSRUxFMUJRVTBzVlVGQlZTeG5Ra0ZCWjBJN1NVRkRMMElzVFVGQlRTeFJRVUZSTEVkQlFVY3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF6dEpRVVYyUXl4SlFVRkpMRU5CUVVNc1VVRkJVVHRSUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETzBsQlJUTkNMRTlCUVU4N1VVRkRUaXhoUVVGaExHZEZRVUY1UWp0UlFVTjBReXhqUVVGakxFVkJRVVVzYjBKQlFXOUNPMUZCUTNCRExFOUJRVThzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSVHRSUVVNelFpeExRVUZMTEVWQlFVVXNWMEZCVnl4UlFVRlJMRVZCUVVVN1MwRkROVUlzUTBGQlF6dEJRVU5JTEVOQlFVTWlmUT09IiwiaW1wb3J0IHsgZ2V0V29ya3NwYWNlTmFtZSB9IGZyb20gXCIuLi9saWIvd29ya3NwYWNlXCI7XG5pbXBvcnQgeyBnZXRSZWFsdGltZUVuZHBvaW50IH0gZnJvbSBcIi4uL2xpYi9yZWFsdGltZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIFdlYnNvY2tldCgpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGdldFJlYWx0aW1lRW5kcG9pbnQoKTtcbiAgICBpZiAoIWVuZHBvaW50KVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvSC9Ib3Bwc2NvdGNoL2Fzc2V0cy8yLnBuZ1wiLFxuICAgICAgICBzbWFsbEltYWdlVGV4dDogXCJXZWJzb2NrZXRcIixcbiAgICAgICAgZGV0YWlsczogZ2V0V29ya3NwYWNlTmFtZSgpLFxuICAgICAgICBzdGF0ZTogYPCfp5HigI3wn5K7IHwgJHtlbmRwb2ludH1gLFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkMlZpYzI5amEyVjBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWQyVmljMjlqYTJWMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVU5CTEU5QlFVOHNSVUZCUlN4blFrRkJaMElzUlVGQlJTeE5RVUZOTEd0Q1FVRnJRaXhEUVVGRE8wRkJRM0JFTEU5QlFVOHNSVUZCUlN4dFFrRkJiVUlzUlVGQlJTeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wRkJSWFJFTEUxQlFVMHNWVUZCVlN4VFFVRlRPMGxCUTNoQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU03U1VGRmRrTXNTVUZCU1N4RFFVRkRMRkZCUVZFN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVVV6UWl4UFFVRlBPMUZCUTA0c1lVRkJZU3huUlVGQmEwSTdVVUZETDBJc1kwRkJZeXhGUVVGRkxGZEJRVmM3VVVGRE0wSXNUMEZCVHl4RlFVRkZMR2RDUVVGblFpeEZRVUZGTzFGQlF6TkNMRXRCUVVzc1JVRkJSU3hYUVVGWExGRkJRVkVzUlVGQlJUdExRVU0xUWl4RFFVRkRPMEZCUTBnc1EwRkJReUo5IiwiaW1wb3J0IHsgR3JhcGhRTCB9IGZyb20gXCIuL3JvdXRlcy9ncmFwaHFsXCI7XG5pbXBvcnQgeyBNUVRUIH0gZnJvbSBcIi4vcm91dGVzL21xdHRcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi9yb3V0ZXMvcHJvZmlsZVwiO1xuaW1wb3J0IHsgUmVzdCB9IGZyb20gXCIuL3JvdXRlcy9yZXN0XCI7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuL3JvdXRlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgU29ja2V0SU8gfSBmcm9tIFwiLi9yb3V0ZXMvc29ja2V0aW9cIjtcbmltcG9ydCB7IFNlcnZlclNlbnRFdmVudHMgfSBmcm9tIFwiLi9yb3V0ZXMvc3NlXCI7XG5pbXBvcnQgeyBXZWJzb2NrZXQgfSBmcm9tIFwiLi9yb3V0ZXMvd2Vic29ja2V0XCI7XG5jb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNzkyNzM1MjQ1NDg4NDg4NDU4XCIsXG59KTtcbmNvbnN0IEJBU0UgPSB7XG4gICAgbmFtZTogXCJIb3Bwc2NvdGNoXCIsXG4gICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0gvSG9wcHNjb3RjaC9hc3NldHMvbG9nby5wbmdcIixcbiAgICBzdGFydFRpbWVzdGFtcDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG59LCBSb3V0ZSA9IHtcbiAgICBcIi9cIjogUmVzdCxcbiAgICBcIi9ncmFwaHFsXCI6IEdyYXBoUUwsXG4gICAgXCIvcmVhbHRpbWUvd2Vic29ja2V0XCI6IFdlYnNvY2tldCxcbiAgICBcIi9yZWFsdGltZS9zc2VcIjogU2VydmVyU2VudEV2ZW50cyxcbiAgICBcIi9yZWFsdGltZS9zb2NrZXRpb1wiOiBTb2NrZXRJTyxcbiAgICBcIi9yZWFsdGltZS9tcXR0XCI6IE1RVFQsXG4gICAgXCIvc2V0dGluZ3NcIjogU2V0dGluZ3MsXG4gICAgXCIvcHJvZmlsZVwiOiBQcm9maWxlLFxufTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFJvdXRlID0gUm91dGVbZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWVdO1xuICAgIGlmICghY3VycmVudFJvdXRlKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0gY3VycmVudFJvdXRlKCk7XG4gICAgaWYgKHByZXNlbmNlRGF0YSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHsgLi4uQkFTRSwgLi4ucHJlc2VuY2VEYXRhIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEUxQlFVMHNhMEpCUVd0Q0xFTkJRVU03UVVGRE0wTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxHVkJRV1VzUTBGQlF6dEJRVU55UXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFMUJRVTBzYTBKQlFXdENMRU5CUVVNN1FVRkRNME1zVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MR1ZCUVdVc1EwRkJRenRCUVVOeVF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc2JVSkJRVzFDTEVOQlFVTTdRVUZETjBNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeE5RVUZOTEcxQ1FVRnRRaXhEUVVGRE8wRkJRemRETEU5QlFVOHNSVUZCUlN4blFrRkJaMElzUlVGQlJTeE5RVUZOTEdOQlFXTXNRMEZCUXp0QlFVTm9SQ3hQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNiMEpCUVc5Q0xFTkJRVU03UVVGRkwwTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU03U1VGRE4wSXNVVUZCVVN4RlFVRkZMRzlDUVVGdlFqdERRVU01UWl4RFFVRkRMRU5CUVVNN1FVRmpTQ3hOUVVGTkxFbEJRVWtzUjBGQlJ6dEpRVU5ZTEVsQlFVa3NSVUZCUlN4WlFVRlpPMGxCUTJ4Q0xHRkJRV0VzYlVWQlFXRTdTVUZETVVJc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dERRVU0zUXl4RlFVTkVMRXRCUVVzc1IwRkJSenRKUVVOUUxFZEJRVWNzUlVGQlJTeEpRVUZKTzBsQlExUXNWVUZCVlN4RlFVRkZMRTlCUVU4N1NVRkRia0lzY1VKQlFYRkNMRVZCUVVVc1UwRkJVenRKUVVOb1F5eGxRVUZsTEVWQlFVVXNaMEpCUVdkQ08wbEJRMnBETEc5Q1FVRnZRaXhGUVVGRkxGRkJRVkU3U1VGRE9VSXNaMEpCUVdkQ0xFVkJRVVVzU1VGQlNUdEpRVU4wUWl4WFFVRlhMRVZCUVVVc1VVRkJVVHRKUVVOeVFpeFZRVUZWTEVWQlFVVXNUMEZCVHp0RFFVZHVRaXhEUVVGRE8wRkJSVWdzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3U1VGRGNFTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkZka1FzU1VGQlNTeERRVUZETEZsQlFWazdVVUZCUlN4UFFVRlBPMGxCUlRGQ0xFMUJRVTBzV1VGQldTeEhRVUZITEZsQlFWa3NSVUZCUlN4RFFVRkRPMGxCUlhCRExFbEJRVWtzV1VGQldTeExRVUZMTEVsQlFVazdVVUZCUlN4UFFVRlBPMGxCUld4RExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4SFFVRkhMRWxCUVVrc1JVRkJSU3hIUVVGSExGbEJRVmtzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZEY0VRc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJnZXRXb3Jrc3BhY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJraW5kIiwidGVhbVdvcmtzcGFjZSIsInRleHRDb250ZW50IiwibmFtZSIsImdldFdvcmtzcGFjZU5hbWUiLCJ3b3Jrc3BhY2UiLCJnZXRFbmRwb2ludCIsImlucHV0IiwidXJsIiwiVVJMIiwidmFsdWUiLCJob3N0bmFtZSIsInBhdGhuYW1lIiwiR3JhcGhRTCIsImVuZHBvaW50Iiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiZGV0YWlscyIsInN0YXRlIiwiZ2V0UmVhbHRpbWVFbmRwb2ludCIsIk1RVFQiLCJQcm9maWxlIiwiY21MaW5lIiwiY2hpbGROb2RlcyIsImZpcnN0Tm9kZUNvbnRlbnQiLCJsZW5ndGgiLCJmaWx0ZXIiLCJub2RlIiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJtYXAiLCJqb2luIiwic3BsaXQiLCJnZXRNZXRob2QiLCJ0YWIiLCJtZXRob2QiLCJSZXN0IiwiU2V0dGluZ3MiLCJTb2NrZXRJTyIsIlNlcnZlclNlbnRFdmVudHMiLCJXZWJzb2NrZXQiLCJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJCQVNFIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIlJvdXRlIiwib24iLCJhc3luYyIsImN1cnJlbnRSb3V0ZSIsImxvY2F0aW9uIiwicHJlc2VuY2VEYXRhIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;