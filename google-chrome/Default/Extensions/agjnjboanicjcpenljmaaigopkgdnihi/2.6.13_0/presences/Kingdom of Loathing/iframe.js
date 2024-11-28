var __webpack_exports__={};const koliFrame=new iFrame;let currentMonster=null;function updateCombat(e){const t=document.querySelector("#monname");if(t){const n=t.textContent;if(n!==currentMonster)return currentMonster=n,e.send({type:"MONSTER",payload:n})}}let currentChoiceId=-1;function updateChoice(e){const t=document.querySelector("input[name=whichchoice]");if(t){const n=Number(t.value);if(n!==currentChoiceId)return currentChoiceId=n,e.send({type:"CHOICE",payload:n})}}let lastPing=0,currentAdventures=-1;function updateCharpane(e){const t=document.querySelector('img[alt="Adventures Remaining"] ~ span'),n=document.querySelector("#lastadvmenu"),r=document.querySelector('img[src$="slimhourglass.gif"]');let a=-1;if(t?a=Number(t.textContent):n?a=Number(n.parentElement.parentElement.nextSibling.textContent):r&&(a=Number(r.previousSibling.textContent)),-1!==a&&(a!==currentAdventures||Date.now()-lastPing>1e4))return currentAdventures=a,lastPing=Date.now(),e.send({type:"ADVENTURES",payload:a})}koliFrame.on("UpdateData",(async()=>{switch(window.name){case"mainpane":switch(location.pathname){case"/fight.php":return updateCombat(koliFrame);case"/mall.php":case"/mallstore.php":return koliFrame.send({type:"MALL"});case"/messages.php":return koliFrame.send({type:"KMAIL"});case"/choice.php":return updateChoice(koliFrame);case"/inventory.php":return koliFrame.send({type:"INVENTORY"});case"/skillz.php":return koliFrame.send({type:"SKILLS"});case"/familiar.php":return koliFrame.send({type:"FAMILIAR"});case"/sendmessage.php":return koliFrame.send({type:"SENDMESSAGE"});default:return koliFrame.send({type:"UNHANDLED"})}case"charpane":return updateCharpane(koliFrame);default:return}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWZyYW1lLmpzIiwibWFwcGluZ3MiOiIyQkFBQSxNQUFNQSxVQUFZLElBQUlDLE9BQ3RCLElBQUlDLGVBQWlCLEtBQ3JCLFNBQVNDLGFBQWFDLEdBQ2xCLE1BQU1DLEVBQU9DLFNBQVNDLGNBQWMsWUFDcEMsR0FBSUYsRUFBTSxDQUNOLE1BQU1HLEVBQVVILEVBQUtJLFlBQ3JCLEdBQUlELElBQVlOLGVBRVosT0FEQUEsZUFBaUJNLEVBQ1ZKLEVBQUVNLEtBQUssQ0FBRUMsS0FBTSxVQUFXQyxRQUFTSixHQUVsRCxDQUNKLENBQ0EsSUFBSUssaUJBQW1CLEVBQ3ZCLFNBQVNDLGFBQWFWLEdBQ2xCLE1BQU1XLEVBQVNULFNBQVNDLGNBQWMsMkJBQ3RDLEdBQUlRLEVBQVEsQ0FDUixNQUFNQyxFQUFXQyxPQUFPRixFQUFPRyxPQUMvQixHQUFJRixJQUFhSCxnQkFFYixPQURBQSxnQkFBa0JHLEVBQ1haLEVBQUVNLEtBQUssQ0FBRUMsS0FBTSxTQUFVQyxRQUFTSSxHQUVqRCxDQUNKLENBQ0EsSUFBSUcsU0FBVyxFQUFHQyxtQkFBcUIsRUFDdkMsU0FBU0MsZUFBZWpCLEdBQ3BCLE1BQU1rQixFQUFzQmhCLFNBQVNDLGNBQWMsMENBQTJDZ0IsRUFBbUJqQixTQUFTQyxjQUFjLGdCQUFpQmlCLEVBQWdCbEIsU0FBU0MsY0FBYyxpQ0FDaE0sSUFBSWtCLEdBQWMsRUFRbEIsR0FQSUgsRUFDQUcsRUFBYVIsT0FBT0ssRUFBb0JiLGFBQ25DYyxFQUNMRSxFQUFhUixPQUFPTSxFQUFpQkcsY0FBY0EsY0FBY0MsWUFBWWxCLGFBRXhFZSxJQUNMQyxFQUFhUixPQUFPTyxFQUFjSSxnQkFBZ0JuQixlQUNsQyxJQUFoQmdCLElBQ0NBLElBQWVMLG1CQUFxQlMsS0FBS0MsTUFBUVgsU0FBVyxLQUc3RCxPQUZBQyxrQkFBb0JLLEVBQ3BCTixTQUFXVSxLQUFLQyxNQUNUMUIsRUFBRU0sS0FBSyxDQUFFQyxLQUFNLGFBQWNDLFFBQVNhLEdBRXJELENBQ0F6QixVQUFVK0IsR0FBRyxjQUFjQyxVQUN2QixPQUFRQyxPQUFPNUIsTUFDWCxJQUFLLFdBQ0QsT0FBUTZCLFNBQVNDLFVBQ2IsSUFBSyxhQUNELE9BQU9oQyxhQUFhSCxXQUN4QixJQUFLLFlBQ0wsSUFBSyxpQkFDRCxPQUFPQSxVQUFVVSxLQUFLLENBQUVDLEtBQU0sU0FDbEMsSUFBSyxnQkFDRCxPQUFPWCxVQUFVVSxLQUFLLENBQUVDLEtBQU0sVUFDbEMsSUFBSyxjQUNELE9BQU9HLGFBQWFkLFdBQ3hCLElBQUssaUJBQ0QsT0FBT0EsVUFBVVUsS0FBSyxDQUFFQyxLQUFNLGNBQ2xDLElBQUssY0FDRCxPQUFPWCxVQUFVVSxLQUFLLENBQUVDLEtBQU0sV0FDbEMsSUFBSyxnQkFDRCxPQUFPWCxVQUFVVSxLQUFLLENBQUVDLEtBQU0sYUFDbEMsSUFBSyxtQkFDRCxPQUFPWCxVQUFVVSxLQUFLLENBQUVDLEtBQU0sZ0JBQ2xDLFFBQ0ksT0FBT1gsVUFBVVUsS0FBSyxDQUFFQyxLQUFNLGNBRTFDLElBQUssV0FDRCxPQUFPVSxlQUFlckIsV0FDMUIsUUFDSSxPQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaWZyYW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtvbGlGcmFtZSA9IG5ldyBpRnJhbWUoKTtcbmxldCBjdXJyZW50TW9uc3RlciA9IG51bGw7XG5mdW5jdGlvbiB1cGRhdGVDb21iYXQoaSkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vbm5hbWVcIik7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbW9uc3RlciA9IG5hbWUudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmIChtb25zdGVyICE9PSBjdXJyZW50TW9uc3Rlcikge1xuICAgICAgICAgICAgY3VycmVudE1vbnN0ZXIgPSBtb25zdGVyO1xuICAgICAgICAgICAgcmV0dXJuIGkuc2VuZCh7IHR5cGU6IFwiTU9OU1RFUlwiLCBwYXlsb2FkOiBtb25zdGVyIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxubGV0IGN1cnJlbnRDaG9pY2VJZCA9IC0xO1xuZnVuY3Rpb24gdXBkYXRlQ2hvaWNlKGkpIHtcbiAgICBjb25zdCBjaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT13aGljaGNob2ljZV1cIik7XG4gICAgaWYgKGNob2ljZSkge1xuICAgICAgICBjb25zdCBjaG9pY2VJZCA9IE51bWJlcihjaG9pY2UudmFsdWUpO1xuICAgICAgICBpZiAoY2hvaWNlSWQgIT09IGN1cnJlbnRDaG9pY2VJZCkge1xuICAgICAgICAgICAgY3VycmVudENob2ljZUlkID0gY2hvaWNlSWQ7XG4gICAgICAgICAgICByZXR1cm4gaS5zZW5kKHsgdHlwZTogXCJDSE9JQ0VcIiwgcGF5bG9hZDogY2hvaWNlSWQgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5sZXQgbGFzdFBpbmcgPSAwLCBjdXJyZW50QWR2ZW50dXJlcyA9IC0xO1xuZnVuY3Rpb24gdXBkYXRlQ2hhcnBhbmUoaSkge1xuICAgIGNvbnN0IG5vbkNvbXBhY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWdbYWx0PVwiQWR2ZW50dXJlcyBSZW1haW5pbmdcIl0gfiBzcGFuJyksIGNvbXBhY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhc3RhZHZtZW51XCIpLCBjaGl0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nW3NyYyQ9XCJzbGltaG91cmdsYXNzLmdpZlwiXScpO1xuICAgIGxldCBhZHZlbnR1cmVzID0gLTE7XG4gICAgaWYgKG5vbkNvbXBhY3RDb250YWluZXIpXG4gICAgICAgIGFkdmVudHVyZXMgPSBOdW1iZXIobm9uQ29tcGFjdENvbnRhaW5lci50ZXh0Q29udGVudCk7XG4gICAgZWxzZSBpZiAoY29tcGFjdENvbnRhaW5lcikge1xuICAgICAgICBhZHZlbnR1cmVzID0gTnVtYmVyKGNvbXBhY3RDb250YWluZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLnRleHRDb250ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hpdENvbnRhaW5lcilcbiAgICAgICAgYWR2ZW50dXJlcyA9IE51bWJlcihjaGl0Q29udGFpbmVyLnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudCk7XG4gICAgaWYgKGFkdmVudHVyZXMgIT09IC0xICYmXG4gICAgICAgIChhZHZlbnR1cmVzICE9PSBjdXJyZW50QWR2ZW50dXJlcyB8fCBEYXRlLm5vdygpIC0gbGFzdFBpbmcgPiAxMDAwMCkpIHtcbiAgICAgICAgY3VycmVudEFkdmVudHVyZXMgPSBhZHZlbnR1cmVzO1xuICAgICAgICBsYXN0UGluZyA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybiBpLnNlbmQoeyB0eXBlOiBcIkFEVkVOVFVSRVNcIiwgcGF5bG9hZDogYWR2ZW50dXJlcyB9KTtcbiAgICB9XG59XG5rb2xpRnJhbWUub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBzd2l0Y2ggKHdpbmRvdy5uYW1lKSB7XG4gICAgICAgIGNhc2UgXCJtYWlucGFuZVwiOlxuICAgICAgICAgICAgc3dpdGNoIChsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvZmlnaHQucGhwXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVDb21iYXQoa29saUZyYW1lKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiL21hbGwucGhwXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIi9tYWxsc3RvcmUucGhwXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrb2xpRnJhbWUuc2VuZCh7IHR5cGU6IFwiTUFMTFwiIH0pO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvbWVzc2FnZXMucGhwXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrb2xpRnJhbWUuc2VuZCh7IHR5cGU6IFwiS01BSUxcIiB9KTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiL2Nob2ljZS5waHBcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZUNob2ljZShrb2xpRnJhbWUpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvaW52ZW50b3J5LnBocFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga29saUZyYW1lLnNlbmQoeyB0eXBlOiBcIklOVkVOVE9SWVwiIH0pO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvc2tpbGx6LnBocFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga29saUZyYW1lLnNlbmQoeyB0eXBlOiBcIlNLSUxMU1wiIH0pO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvZmFtaWxpYXIucGhwXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrb2xpRnJhbWUuc2VuZCh7IHR5cGU6IFwiRkFNSUxJQVJcIiB9KTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiL3NlbmRtZXNzYWdlLnBocFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga29saUZyYW1lLnNlbmQoeyB0eXBlOiBcIlNFTkRNRVNTQUdFXCIgfSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvbGlGcmFtZS5zZW5kKHsgdHlwZTogXCJVTkhBTkRMRURcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcImNoYXJwYW5lXCI6XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlQ2hhcnBhbmUoa29saUZyYW1lKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXWnlZVzFsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lhV1p5WVcxbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1RVRkJUU3hGUVVGRkxFTkJRVU03UVVGRkwwSXNTVUZCU1N4alFVRmpMRWRCUVd0Q0xFbEJRVWtzUTBGQlF6dEJRVU42UXl4VFFVRlRMRmxCUVZrc1EwRkJReXhEUVVGVE8wbEJRemxDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdTVUZGYUVRc1NVRkJTU3hKUVVGSkxFVkJRVVU3VVVGRFZDeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRMnBETEVsQlFVa3NUMEZCVHl4TFFVRkxMR05CUVdNc1JVRkJSVHRaUVVNdlFpeGpRVUZqTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUTNwQ0xFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRja1E3UzBGRFJEdEJRVU5HTEVOQlFVTTdRVUZGUkN4SlFVRkpMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU42UWl4VFFVRlRMRmxCUVZrc1EwRkJReXhEUVVGVE8wbEJRemxDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM0JETEhsQ1FVRjVRaXhEUVVONlFpeERRVUZETzBsQlJVWXNTVUZCU1N4TlFVRk5MRVZCUVVVN1VVRkRXQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRM1JETEVsQlFVa3NVVUZCVVN4TFFVRkxMR1ZCUVdVc1JVRkJSVHRaUVVOcVF5eGxRVUZsTEVkQlFVY3NVVUZCVVN4RFFVRkRPMWxCUXpOQ0xFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRja1E3UzBGRFJEdEJRVU5HTEVOQlFVTTdRVUZGUkN4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMllzYVVKQlFXbENMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGVFSXNVMEZCVXl4alFVRmpMRU5CUVVNc1EwRkJVenRKUVVOb1F5eE5RVUZOTEcxQ1FVRnRRaXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEyaEVMSGREUVVGM1F5eERRVU40UXl4RlFVTkVMR2RDUVVGblFpeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRM3BFTEdGQlFXRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVF5d3JRa0ZCSzBJc1EwRkRMMElzUTBGQlF6dEpRVVZJTEVsQlFVa3NWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJSWEJDTEVsQlFVa3NiVUpCUVcxQ08xRkJRVVVzVlVGQlZTeEhRVUZITEUxQlFVMHNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0VFFVTjZSU3hKUVVGSkxHZENRVUZuUWl4RlFVRkZPMUZCUXpGQ0xGVkJRVlVzUjBGQlJ5eE5RVUZOTEVOQlEyeENMR2RDUVVGblFpeERRVUZETEdGQlFXRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRExGZEJRVmNzUTBGRGNFVXNRMEZCUXp0TFFVTkdPMU5CUVUwc1NVRkJTU3hoUVVGaE8xRkJRM1pDTEZWQlFWVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExHVkJRV1VzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0SlFVVm9SU3hKUVVORExGVkJRVlVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYWtJc1EwRkJReXhWUVVGVkxFdEJRVXNzYVVKQlFXbENMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEZGQlFWRXNSMEZCUnl4TFFVRk5MRU5CUVVNc1JVRkRia1U3VVVGRFJDeHBRa0ZCYVVJc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGREwwSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU4wUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNXVUZCV1N4RlFVRkZMRTlCUVU4c1JVRkJSU3hWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETzB0QlF6TkVPMEZCUTBZc1EwRkJRenRCUVVWRUxGTkJRVk1zUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0pETEZGQlFWRXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSVHRSUVVOd1FpeExRVUZMTEZWQlFWVTdXVUZEWkN4UlFVRlJMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVU3WjBKQlF6RkNMRXRCUVVzc1dVRkJXVHR2UWtGRGFFSXNUMEZCVHl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03WjBKQlEyaERMRXRCUVVzc1YwRkJWeXhEUVVGRE8yZENRVU5xUWl4TFFVRkxMR2RDUVVGblFqdHZRa0ZEY0VJc1QwRkJUeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEzcERMRXRCUVVzc1pVRkJaVHR2UWtGRGJrSXNUMEZCVHl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRekZETEV0QlFVc3NZVUZCWVR0dlFrRkRha0lzVDBGQlR5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1owSkJRMmhETEV0QlFVc3NaMEpCUVdkQ08yOUNRVU53UWl4UFFVRlBMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRE9VTXNTMEZCU3l4aFFVRmhPMjlDUVVOcVFpeFBRVUZQTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRNME1zUzBGQlN5eGxRVUZsTzI5Q1FVTnVRaXhQUVVGUExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZETjBNc1MwRkJTeXhyUWtGQmEwSTdiMEpCUTNSQ0xFOUJRVThzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hoUVVGaExFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTm9SRHR2UWtGRFF5eFBRVUZQTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTTVRenRSUVVOR0xFdEJRVXNzVlVGQlZUdFpRVU5rTEU5QlFVOHNZMEZCWXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMnhETzFsQlEwTXNUMEZCVHp0TFFVTlNPMEZCUTBZc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJrb2xpRnJhbWUiLCJpRnJhbWUiLCJjdXJyZW50TW9uc3RlciIsInVwZGF0ZUNvbWJhdCIsImkiLCJuYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9uc3RlciIsInRleHRDb250ZW50Iiwic2VuZCIsInR5cGUiLCJwYXlsb2FkIiwiY3VycmVudENob2ljZUlkIiwidXBkYXRlQ2hvaWNlIiwiY2hvaWNlIiwiY2hvaWNlSWQiLCJOdW1iZXIiLCJ2YWx1ZSIsImxhc3RQaW5nIiwiY3VycmVudEFkdmVudHVyZXMiLCJ1cGRhdGVDaGFycGFuZSIsIm5vbkNvbXBhY3RDb250YWluZXIiLCJjb21wYWN0Q29udGFpbmVyIiwiY2hpdENvbnRhaW5lciIsImFkdmVudHVyZXMiLCJwYXJlbnRFbGVtZW50IiwibmV4dFNpYmxpbmciLCJwcmV2aW91c1NpYmxpbmciLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9
undefined;