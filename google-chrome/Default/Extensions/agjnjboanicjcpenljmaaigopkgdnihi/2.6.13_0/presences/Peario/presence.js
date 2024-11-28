var __webpack_exports__={};const presence=new Presence({clientId:"969204609845428234"}),browsingTimestamp=Math.floor(Date.now()/1e3);let cached;async function fetchWithoutVideo(){const e=window.location.href.split("/");if(cached&&JSON.stringify(cached).includes(e[5]))return cached;{if(document.querySelector("#app > div > div > div > div.loading > div > ion-icon"))return;const t=await fetch(`https://v3-cinemeta.strem.io/meta/${e[4]}/${e[5]}.json`).then((e=>e.json()));return cached=t,t}}async function fetchWithVideo(e){if(cached&&JSON.stringify(cached).includes(window.location.href.split("/")[5]))return cached;{const t=await fetch(`https://v3-cinemeta.strem.io/meta/movie/${e.getAttribute("poster").split("/")[5]}.json`).then((e=>e.json()));return cached=t,t}}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Peario/assets/logo.png",startTimestamp:browsingTimestamp},t=document.querySelector("#app > div > div > div > div.player > video"),i=window.location.pathname,[s,a]=await Promise.all([presence.getSetting("privacy"),presence.getSetting("buttons")]);if(s&&!t)e.details="Browsing...";else if(s&&t)e.details="Watching...";else if(document.querySelector("#addons"))e.details="Addons";else if(document.querySelector("#app > div.modal > div.inner > div.title.secondary > ion-icon"))e.details="Settings";else if(i.includes("search")){const t=document.querySelector("#app > div > div > div > div > input");t?.value?(e.details="Searching for:",e.state=t.value):e.details="Browsing..."}else if(i.includes("stream")||i.includes("room"))if(e.buttons=[{label:"Join Room",url:document.location.href}],document.querySelector("#app > div > div > div > div.player > div.lock-screen > div > button"))e.details="Waiting...";else if(t){delete e.startTimestamp;const i=await fetchWithVideo(t);i&&(e.details=i.meta.name),e.smallImageText=`${document.querySelector("#app > div > div > div > div.users.show > div").textContent} Viewers`,t.paused||isNaN(t.duration)?(delete e.endTimestamp,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/pause.png"):(e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",[e.startTimestamp,e.endTimestamp]=presence.getTimestampsfromMedia(t))}else{const t=await fetchWithoutVideo();t&&(e.details=t.meta.name)}else e.details="Browsing...";a||delete e.buttons,e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLE9BQ0pDLGVBQWVDLG9CQUNYLE1BQU1DLEVBQVFDLE9BQU9DLFNBQVNDLEtBQUtILE1BQU0sS0FDekMsR0FBS0gsUUFBV08sS0FBS0MsVUFBVVIsUUFBUVMsU0FBU04sRUFBTSxJQVFsRCxPQUFPSCxPQVJnRCxDQUN2RCxHQUFJVSxTQUFTQyxjQUFjLHlEQUN2QixPQUNKLE1BQU1DLFFBQWdCQyxNQUFNLHFDQUFxQ1YsRUFBTSxNQUFNQSxFQUFNLFdBQVdXLE1BQUtDLEdBQUtBLEVBQUVDLFNBRTFHLE9BREFoQixPQUFTWSxFQUNGQSxDQUNYLENBR0osQ0FDQVgsZUFBZWdCLGVBQWVDLEdBQzFCLEdBQUtsQixRQUNBTyxLQUFLQyxVQUFVUixRQUFRUyxTQUFTTCxPQUFPQyxTQUFTQyxLQUFLSCxNQUFNLEtBQUssSUFNakUsT0FBT0gsT0FOK0QsQ0FDdEUsTUFBTVksUUFBZ0JDLE1BQU0sMkNBQTJDSyxFQUFNQyxhQUFhLFVBQVVoQixNQUFNLEtBQUssV0FBV1csTUFBS0MsR0FBS0EsRUFBRUMsU0FFdEksT0FEQWhCLE9BQVNZLEVBQ0ZBLENBQ1gsQ0FHSixDQUNBcEIsU0FBUzRCLEdBQUcsY0FBY25CLFVBQ3RCLE1BQU1vQixFQUFlLENBQ2pCQyxjQUFlLDhEQUNmQyxlQUFnQjVCLG1CQUNqQnVCLEVBQVFSLFNBQVNDLGNBQWMsK0NBQWdEYSxFQUFPcEIsT0FBT0MsU0FBU29CLFVBQVdDLEVBQVNDLFNBQWlCQyxRQUFRQyxJQUFJLENBQ3RKckMsU0FBU3NDLFdBQVcsV0FDcEJ0QyxTQUFTc0MsV0FBVyxhQUV4QixHQUFJSixJQUFZUixFQUNaRyxFQUFhVSxRQUFVLG1CQUN0QixHQUFJTCxHQUFXUixFQUNoQkcsRUFBYVUsUUFBVSxtQkFDdEIsR0FBSXJCLFNBQVNDLGNBQWMsV0FDNUJVLEVBQWFVLFFBQVUsY0FDdEIsR0FBSXJCLFNBQVNDLGNBQWMsaUVBQzVCVSxFQUFhVSxRQUFVLGdCQUN0QixHQUFJUCxFQUFLZixTQUFTLFVBQVcsQ0FDOUIsTUFBTXVCLEVBQVN0QixTQUFTQyxjQUFjLHdDQUNsQ3FCLEdBQVFDLE9BQ1JaLEVBQWFVLFFBQVUsaUJBQ3ZCVixFQUFhYSxNQUFRRixFQUFPQyxPQUc1QlosRUFBYVUsUUFBVSxhQUMvQixNQUNLLEdBQUlQLEVBQUtmLFNBQVMsV0FBYWUsRUFBS2YsU0FBUyxRQU85QyxHQU5BWSxFQUFhTSxRQUFVLENBQ25CLENBQ0lRLE1BQU8sWUFDUEMsSUFBSzFCLFNBQVNMLFNBQVNDLE9BRzNCSSxTQUFTQyxjQUFjLHdFQUN2QlUsRUFBYVUsUUFBVSxrQkFDdEIsR0FBSWIsRUFBTyxRQUNMRyxFQUFhRSxlQUNwQixNQUFNWCxRQUFnQkssZUFBZUMsR0FDakNOLElBQ0FTLEVBQWFVLFFBQVVuQixFQUFReUIsS0FBS0MsTUFDeENqQixFQUFha0IsZUFBaUIsR0FBRzdCLFNBQVNDLGNBQWMsaURBQ25ENkIsc0JBQ0R0QixFQUFNdUIsUUFBVUMsTUFBTXhCLEVBQU15QixrQkFDckJ0QixFQUFhdUIsYUFDcEJ2QixFQUFhd0IsY0FBZ0Isa0RBRzdCeEIsRUFBYXdCLGNBQWdCLGdEQUM1QnhCLEVBQWFFLGVBQWdCRixFQUFhdUIsY0FDdkNwRCxTQUFTc0QsdUJBQXVCNUIsR0FFNUMsS0FDSyxDQUNELE1BQU1OLFFBQWdCVixvQkFDbEJVLElBQ0FTLEVBQWFVLFFBQVVuQixFQUFReUIsS0FBS0MsS0FDNUMsTUFHQWpCLEVBQWFVLFFBQVUsY0FDdEJKLFVBQ01OLEVBQWFNLFFBQ3BCTixFQUFhVSxRQUNidkMsU0FBU3VELFlBQVkxQixHQUVyQjdCLFNBQVN1RCxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjk2OTIwNDYwOTg0NTQyODIzNFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5sZXQgY2FjaGVkO1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXaXRob3V0VmlkZW8oKSB7XG4gICAgY29uc3Qgc3BsaXQgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIi9cIik7XG4gICAgaWYgKCFjYWNoZWQgfHwgIUpTT04uc3RyaW5naWZ5KGNhY2hlZCkuaW5jbHVkZXMoc3BsaXRbNV0pKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcCA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdi5sb2FkaW5nID4gZGl2ID4gaW9uLWljb25cIikpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGZldGNoZWQgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly92My1jaW5lbWV0YS5zdHJlbS5pby9tZXRhLyR7c3BsaXRbNF19LyR7c3BsaXRbNV19Lmpzb25gKS50aGVuKHggPT4geC5qc29uKCkpO1xuICAgICAgICBjYWNoZWQgPSBmZXRjaGVkO1xuICAgICAgICByZXR1cm4gZmV0Y2hlZDtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gY2FjaGVkO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXaXRoVmlkZW8odmlkZW8pIHtcbiAgICBpZiAoIWNhY2hlZCB8fFxuICAgICAgICAhSlNPTi5zdHJpbmdpZnkoY2FjaGVkKS5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIi9cIilbNV0pKSB7XG4gICAgICAgIGNvbnN0IGZldGNoZWQgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly92My1jaW5lbWV0YS5zdHJlbS5pby9tZXRhL21vdmllLyR7dmlkZW8uZ2V0QXR0cmlidXRlKFwicG9zdGVyXCIpLnNwbGl0KFwiL1wiKVs1XX0uanNvbmApLnRoZW4oeCA9PiB4Lmpzb24oKSk7XG4gICAgICAgIGNhY2hlZCA9IGZldGNoZWQ7XG4gICAgICAgIHJldHVybiBmZXRjaGVkO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBjYWNoZWQ7XG59XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1AvUGVhcmlvL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcCA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdi5wbGF5ZXIgPiB2aWRlb1wiKSwgcGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgW3ByaXZhY3ksIGJ1dHRvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwicHJpdmFjeVwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvbnNcIiksXG4gICAgXSk7XG4gICAgaWYgKHByaXZhY3kgJiYgIXZpZGVvKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcuLi5cIjtcbiAgICBlbHNlIGlmIChwcml2YWN5ICYmIHZpZGVvKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV2F0Y2hpbmcuLi5cIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZG9uc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkFkZG9uc1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwID4gZGl2Lm1vZGFsID4gZGl2LmlubmVyID4gZGl2LnRpdGxlLnNlY29uZGFyeSA+IGlvbi1pY29uXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2V0dGluZ3NcIjtcbiAgICBlbHNlIGlmIChwYWdlLmluY2x1ZGVzKFwic2VhcmNoXCIpKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gaW5wdXRcIik7XG4gICAgICAgIGlmIChzZWFyY2g/LnZhbHVlKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIGZvcjpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHNlYXJjaC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcuLi5cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFnZS5pbmNsdWRlcyhcInN0cmVhbVwiKSB8fCBwYWdlLmluY2x1ZGVzKFwicm9vbVwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJKb2luIFJvb21cIixcbiAgICAgICAgICAgICAgICB1cmw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHAgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYucGxheWVyID4gZGl2LmxvY2stc2NyZWVuID4gZGl2ID4gYnV0dG9uXCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIldhaXRpbmcuLi5cIjtcbiAgICAgICAgZWxzZSBpZiAodmlkZW8pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgICAgICBjb25zdCBmZXRjaGVkID0gYXdhaXQgZmV0Y2hXaXRoVmlkZW8odmlkZW8pO1xuICAgICAgICAgICAgaWYgKGZldGNoZWQpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBmZXRjaGVkLm1ldGEubmFtZTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2LnVzZXJzLnNob3cgPiBkaXZcIilcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnR9IFZpZXdlcnNgO1xuICAgICAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCB8fCBpc05hTih2aWRlby5kdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHNmcm9tTWVkaWEodmlkZW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmV0Y2hlZCA9IGF3YWl0IGZldGNoV2l0aG91dFZpZGVvKCk7XG4gICAgICAgICAgICBpZiAoZmV0Y2hlZClcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGZldGNoZWQubWV0YS5uYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nLi4uXCI7XG4gICAgaWYgKCFidXR0b25zKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVU5dVJDeEpRVUZKTEUxQlFWa3NRMEZCUXp0QlFVVnFRaXhMUVVGTExGVkJRVlVzYVVKQlFXbENPMGxCUXk5Q0xFMUJRVTBzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTTVReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGRE1VUXNTVUZEUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVFpeDFSRUZCZFVRc1EwRkRka1E3V1VGRlJDeFBRVUZQTzFGQlExSXNUVUZCVFN4UFFVRlBMRWRCUVVjc1RVRkJUU3hMUVVGTExFTkJRekZDTEhGRFFVRnhReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRMmhGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRkRUlzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTnFRaXhQUVVGUExFOUJRVThzUTBGQlF6dExRVU5tT3p0UlFVRk5MRTlCUVU4c1RVRkJUU3hEUVVGRE8wRkJRM1JDTEVOQlFVTTdRVUZEUkN4TFFVRkxMRlZCUVZVc1kwRkJZeXhEUVVGRExFdEJRWFZDTzBsQlEzQkVMRWxCUTBNc1EwRkJReXhOUVVGTk8xRkJRMUFzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkRia1U3VVVGRFJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRXRCUVVzc1EwRkRNVUlzTWtOQlEwTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVNeFF5eFBRVUZQTEVOQlExQXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMFFpeE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTJwQ0xFOUJRVThzVDBGQlR5eERRVUZETzB0QlEyWTdPMUZCUVUwc1QwRkJUeXhOUVVGTkxFTkJRVU03UVVGRGRFSXNRMEZCUXp0QlFVTkVMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUTNCRExFMUJRVTBzV1VGQldTeEhRVUZwUWp0UlFVTnFReXhoUVVGaExFVkJRMW9zTmtSQlFUWkVPMUZCUXpsRUxHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUlVGRFJDeExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkROMElzTmtOQlFUWkRMRU5CUXpkRExFVkJRMFFzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVNdlFpeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhOUVVGTkxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEZEVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeFRRVUZUTEVOQlFVTTdVVUZEZGtNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeFRRVUZUTEVOQlFVTTdTMEZEZGtNc1EwRkJReXhEUVVGRE8wbEJRMG9zU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxPMUZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGhRVUZoTEVOQlFVTTdVMEZEZGtRc1NVRkJTU3hQUVVGUExFbEJRVWtzUzBGQlN6dFJRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1lVRkJZU3hEUVVGRE8xTkJRek5FTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhUUVVGVExFTkJRVU03VVVGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJRenRUUVVOMlJTeEpRVU5LTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNKQ0xDdEVRVUVyUkN4RFFVTXZSRHRSUVVWRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRPMU5CUXpsQ0xFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRSUVVOcVF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOd1F5eHpRMEZCYzBNc1EwRkRkRU1zUTBGQlF6dFJRVU5HTEVsQlFVa3NUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSVHRaUVVOc1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2RDUVVGblFpeERRVUZETzFsQlEzaERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTnNRenM3V1VGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR0ZCUVdFc1EwRkJRenRMUVVNMVF6dFRRVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRk8xRkJRelZFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1dVRkRkRUk3WjBKQlEwTXNTMEZCU3l4RlFVRkZMRmRCUVZjN1owSkJRMnhDTEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWs3WVVGRE0wSTdVMEZEUkN4RFFVRkRPMUZCUTBZc1NVRkRReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4elJVRkJjMFVzUTBGRGRFVTdXVUZGUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGbEJRVmtzUTBGQlF6dGhRVU5vUXl4SlFVRkpMRXRCUVVzc1JVRkJSVHRaUVVObUxFOUJRVThzV1VGQldTeERRVUZETEdOQlFXTXNRMEZCUXp0WlFVTnVReXhOUVVGTkxFOUJRVThzUjBGQlJ5eE5RVUZOTEdOQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVNMVF5eEpRVUZKTEU5QlFVODdaMEpCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOMFJDeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWRCUXpkQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNLME5CUVN0RExFTkJRVU03YVVKQlEzSkZMRmRCUTBnc1ZVRkJWU3hEUVVGRE8xbEJRMWdzU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdaMEpCUXpGRExFOUJRVThzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0blFrRkRha01zV1VGQldTeERRVUZETEdGQlFXRXNhMFJCUVdVc1EwRkJRenRoUVVNeFF6dHBRa0ZCVFR0blFrRkRUaXhaUVVGWkxFTkJRVU1zWVVGQllTeHBSRUZCWXl4RFFVRkRPMmRDUVVONlF5eERRVUZETEZsQlFWa3NRMEZCUXl4alFVRmpMRVZCUVVVc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF6dHZRa0ZEZGtRc1VVRkJVU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRM2hETzFOQlEwUTdZVUZCVFR0WlFVTk9MRTFCUVUwc1QwRkJUeXhIUVVGSExFMUJRVTBzYVVKQlFXbENMRVZCUVVVc1EwRkJRenRaUVVNeFF5eEpRVUZKTEU5QlFVODdaMEpCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRUUVVOMFJEdExRVU5FT3p0UlFVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzBsQlF6VkRMRWxCUVVrc1EwRkJReXhQUVVGUE8xRkJRVVVzVDBGQlR5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUXpGRExFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZET3p0UlFVTjRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjYWNoZWQiLCJhc3luYyIsImZldGNoV2l0aG91dFZpZGVvIiwic3BsaXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5jbHVkZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaGVkIiwiZmV0Y2giLCJ0aGVuIiwieCIsImpzb24iLCJmZXRjaFdpdGhWaWRlbyIsInZpZGVvIiwiZ2V0QXR0cmlidXRlIiwib24iLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYWdlIiwicGF0aG5hbWUiLCJwcml2YWN5IiwiYnV0dG9ucyIsIlByb21pc2UiLCJhbGwiLCJnZXRTZXR0aW5nIiwiZGV0YWlscyIsInNlYXJjaCIsInZhbHVlIiwic3RhdGUiLCJsYWJlbCIsInVybCIsIm1ldGEiLCJuYW1lIiwic21hbGxJbWFnZVRleHQiLCJ0ZXh0Q29udGVudCIsInBhdXNlZCIsImlzTmFOIiwiZHVyYXRpb24iLCJlbmRUaW1lc3RhbXAiLCJzbWFsbEltYWdlS2V5IiwiZ2V0VGltZXN0YW1wc2Zyb21NZWRpYSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;