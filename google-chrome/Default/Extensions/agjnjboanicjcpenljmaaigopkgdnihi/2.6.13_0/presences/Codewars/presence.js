var __webpack_exports__={};const presence=new Presence({clientId:"821106305241972746"}),timebrowsed=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e=document.location.pathname.split("/").filter((e=>e)),t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/C/Codewars/assets/logo.png",startTimestamp:timebrowsed,details:"Browsing..."},a=await presence.getSetting("statsdisplay");switch(e[0]){case"dashboard":t.details="Viewing Dashboard",a&&(t.state=`${document.querySelector(".ml-10px").textContent} Honor`);break;case"topics":e[1]?(t.details="Viewing Topic",t.state=`Topic: ${e[1]}`):t.details="Viewing Forum";break;case"kumite":t.details="Viewing kumite";break;case"subscription":t.details="Viewing Codewars Red";break;default:if("users"===e[0]&&"leaderboard"===e[1])t.details="Viewing Leaderboard";else if("kata"===e[0])if(e[2]&&e[2].startsWith("my-languages")){const e=document.querySelectorAll('[name="q"]')[0].getAttribute("value")||"All Katas";let a=document.querySelector('[Label="Difficulty"]').getAttribute("value");a=a?a.split(",").map((e=>`${e.replace(/-/g,"").trim()} kyu`)).join(", "):"Any kyu",t.details="Searching Katas",t.state=`${e} | ${a}`}else t.details=`Solving Kata | ${document.querySelector(".w-full>div>div>div>span").textContent}`,t.state=document.querySelector(".items-center > h4").textContent;else if("users"===e[0]&&"edit"===e[1])t.details="Editing Account";else if("trainer"===e[0]&&"setup"===e[1])t.details="Editing Trainer Setup",t.state=`${Array.from(document.querySelectorAll(".icon-list > li > .is-active")).length} Languages selected`;else if("users"===e[0]&&"leaderboard"!==e[1]&&"edit"!==e[1]){const i=Array.from(document.querySelectorAll("img")).map((e=>e.src));i.find((e=>e.includes("avatar")&&e!==i.find((e=>e.includes("avatar")))))?(t.details="Viewing profile of",a&&(t.state=`${e[1]} | \n\t\t\t\t\t${Array.from(document.querySelector(".stat-box").children).find((e=>e.textContent.startsWith("Clan:"))).textContent.slice("Clan:".length)}`)):(t.details="Viewing own profile",a&&(t.state=`${document.querySelector(".ml-10px").textContent} Honor | ${document.querySelector(".small-hex").textContent}`))}}t.details?presence.setActivity(t):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsWUFBY0MsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUMxQ1AsU0FBU1EsR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFRQyxTQUFTQyxTQUFTQyxTQUFTQyxNQUFNLEtBQUtDLFFBQU9DLEdBQUtBLElBQUlDLEVBQWUsQ0FDL0VDLGNBQWUsZ0VBQ2ZDLGVBQWdCaEIsWUFDaEJpQixRQUFTLGVBQ1ZDLFFBQXFCckIsU0FBU3NCLFdBQVcsZ0JBQzVDLE9BQVFaLEVBQU0sSUFDVixJQUFLLFlBQ0RPLEVBQWFHLFFBQVUsb0JBQ25CQyxJQUNBSixFQUFhTSxNQUFRLEdBQUdaLFNBQVNhLGNBQWMsWUFBWUMscUJBRS9ELE1BRUosSUFBSyxTQUNHZixFQUFNLElBQ05PLEVBQWFHLFFBQVUsZ0JBQ3ZCSCxFQUFhTSxNQUFRLFVBQVViLEVBQU0sTUFHckNPLEVBQWFHLFFBQVUsZ0JBQzNCLE1BRUosSUFBSyxTQUNESCxFQUFhRyxRQUFVLGlCQUN2QixNQUVKLElBQUssZUFDREgsRUFBYUcsUUFBVSx1QkFDdkIsTUFFSixRQUNJLEdBQWlCLFVBQWJWLEVBQU0sSUFBK0IsZ0JBQWJBLEVBQU0sR0FDOUJPLEVBQWFHLFFBQVUsMkJBQ3RCLEdBQWlCLFNBQWJWLEVBQU0sR0FDWCxHQUFJQSxFQUFNLElBQU1BLEVBQU0sR0FBR2dCLFdBQVcsZ0JBQWlCLENBQ2pELE1BQU1DLEVBQVNoQixTQUFTaUIsaUJBQWlCLGNBQWMsR0FBR0MsYUFBYSxVQUFZLFlBQ25GLElBQUlDLEVBQW1CbkIsU0FDbEJhLGNBQWMsd0JBQ2RLLGFBQWEsU0FFZEMsRUFEQUEsRUFDbUJBLEVBQ2RoQixNQUFNLEtBQ05pQixLQUFLQyxHQUNDLEdBQUdBLEVBQUVDLFFBQVEsS0FBTSxJQUFJQyxlQUU3QkMsS0FBSyxNQUdTLFVBQ3ZCbEIsRUFBYUcsUUFBVSxrQkFDdkJILEVBQWFNLE1BQVEsR0FBR0ksT0FBWUcsR0FDeEMsTUFFSWIsRUFBYUcsUUFBVSxrQkFBa0JULFNBQVNhLGNBQWMsNEJBQTRCQyxjQUM1RlIsRUFBYU0sTUFDVFosU0FBU2EsY0FBYyxzQkFBc0JDLGlCQUdwRCxHQUFpQixVQUFiZixFQUFNLElBQStCLFNBQWJBLEVBQU0sR0FDbkNPLEVBQWFHLFFBQVUsdUJBQ3RCLEdBQWlCLFlBQWJWLEVBQU0sSUFBaUMsVUFBYkEsRUFBTSxHQUNyQ08sRUFBYUcsUUFBVSx3QkFDdkJILEVBQWFNLE1BQVEsR0FBR2EsTUFBTUMsS0FBSzFCLFNBQVNpQixpQkFBaUIsaUNBQ3hEVSxpQ0FFSixHQUFpQixVQUFiNUIsRUFBTSxJQUNFLGdCQUFiQSxFQUFNLElBQ08sU0FBYkEsRUFBTSxHQUFlLENBQ3JCLE1BQU02QixFQUFPSCxNQUFNQyxLQUFLMUIsU0FBU2lCLGlCQUFpQixRQUFRRyxLQUFJUyxHQUFLQSxFQUFFQyxNQUNoRUYsRUFBS0csTUFBS0YsR0FBS0EsRUFBRUcsU0FBUyxXQUFhSCxJQUFNRCxFQUFLRyxNQUFLRixHQUFLQSxFQUFFRyxTQUFTLGVBT3hFMUIsRUFBYUcsUUFBVSxxQkFDbkJDLElBQ0FKLEVBQWFNLE1BQVEsR0FBR2IsRUFBTSxvQkFDL0MwQixNQUFNQyxLQUFLMUIsU0FBU2EsY0FBYyxhQUFhb0IsVUFDekJGLE1BQUtGLEdBQUtBLEVBQUVmLFlBQVlDLFdBQVcsV0FDbkNELFlBQVlvQixNQUFNLFFBQVFQLGFBWG5DckIsRUFBYUcsUUFBVSxzQkFDbkJDLElBQ0FKLEVBQWFNLE1BQVEsR0FBR1osU0FBU2EsY0FBYyxZQUFZQyx1QkFBdUJkLFNBQVNhLGNBQWMsY0FBY0MsZUFZbkksRUFFSFIsRUFBYUcsUUFHZHBCLFNBQVM4QyxZQUFZN0IsR0FGckJqQixTQUFTOEMsYUFFeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODIxMTA2MzA1MjQxOTcyNzQ2XCIsXG59KSwgdGltZWJyb3dzZWQgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikuZmlsdGVyKHAgPT4gcCksIHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ29kZXdhcnMvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiB0aW1lYnJvd3NlZCxcbiAgICAgICAgZGV0YWlsczogXCJCcm93c2luZy4uLlwiLFxuICAgIH0sIGRpc3BsYXlTdGF0cyA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJzdGF0c2Rpc3BsYXlcIik7XG4gICAgc3dpdGNoIChwYWdlc1swXSkge1xuICAgICAgICBjYXNlIFwiZGFzaGJvYXJkXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIERhc2hib2FyZFwiO1xuICAgICAgICAgICAgaWYgKGRpc3BsYXlTdGF0cykge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWwtMTBweFwiKS50ZXh0Q29udGVudH0gSG9ub3JgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRvcGljc1wiOiB7XG4gICAgICAgICAgICBpZiAocGFnZXNbMV0pIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBUb3BpY1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBUb3BpYzogJHtwYWdlc1sxXX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEZvcnVtXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwia3VtaXRlXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGt1bWl0ZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInN1YnNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBDb2Rld2FycyBSZWRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAocGFnZXNbMF0gPT09IFwidXNlcnNcIiAmJiBwYWdlc1sxXSA9PT0gXCJsZWFkZXJib2FyZFwiKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIExlYWRlcmJvYXJkXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChwYWdlc1swXSA9PT0gXCJrYXRhXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFnZXNbMl0gJiYgcGFnZXNbMl0uc3RhcnRzV2l0aChcIm15LWxhbmd1YWdlc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInFcIl0nKVswXS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSB8fCBcIkFsbCBLYXRhc1wiO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZmljdWx0eUZpbHRlciA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignW0xhYmVsPVwiRGlmZmljdWx0eVwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmaWN1bHR5RmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmaWN1bHR5RmlsdGVyID0gZGlmZmljdWx0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3gucmVwbGFjZSgvLS9nLCBcIlwiKS50cmltKCl9IGt5dWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZmljdWx0eUZpbHRlciA9IFwiQW55IGt5dVwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIEthdGFzXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3NlYXJjaH0gfCAke2RpZmZpY3VsdHlGaWx0ZXJ9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFNvbHZpbmcgS2F0YSB8ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53LWZ1bGw+ZGl2PmRpdj5kaXY+c3BhblwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtcy1jZW50ZXIgPiBoNFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYWdlc1swXSA9PT0gXCJ1c2Vyc1wiICYmIHBhZ2VzWzFdID09PSBcImVkaXRcIilcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRWRpdGluZyBBY2NvdW50XCI7XG4gICAgICAgICAgICBlbHNlIGlmIChwYWdlc1swXSA9PT0gXCJ0cmFpbmVyXCIgJiYgcGFnZXNbMV0gPT09IFwic2V0dXBcIikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFZGl0aW5nIFRyYWluZXIgU2V0dXBcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaWNvbi1saXN0ID4gbGkgPiAuaXMtYWN0aXZlXCIpKVxuICAgICAgICAgICAgICAgICAgICAubGVuZ3RofSBMYW5ndWFnZXMgc2VsZWN0ZWRgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFnZXNbMF0gPT09IFwidXNlcnNcIiAmJlxuICAgICAgICAgICAgICAgIHBhZ2VzWzFdICE9PSBcImxlYWRlcmJvYXJkXCIgJiZcbiAgICAgICAgICAgICAgICBwYWdlc1sxXSAhPT0gXCJlZGl0XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpKS5tYXAoZSA9PiBlLnNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKCF1cmxzLmZpbmQoZSA9PiBlLmluY2x1ZGVzKFwiYXZhdGFyXCIpICYmIGUgIT09IHVybHMuZmluZChlID0+IGUuaW5jbHVkZXMoXCJhdmF0YXJcIikpKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBvd24gcHJvZmlsZVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzcGxheVN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1sLTEwcHhcIikudGV4dENvbnRlbnR9IEhvbm9yIHwgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNtYWxsLWhleFwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBwcm9maWxlIG9mXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5U3RhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3BhZ2VzWzFdfSB8IFxuXHRcdFx0XHRcdCR7QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXQtYm94XCIpLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKGUgPT4gZS50ZXh0Q29udGVudC5zdGFydHNXaXRoKFwiQ2xhbjpcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnNsaWNlKFwiQ2xhbjpcIi5sZW5ndGgpfWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIGlmICghcHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkZOME1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3U1VGRGNFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVOcVJTeFpRVUZaTEVkQlFXbENPMUZCUXpWQ0xHRkJRV0VzUlVGRFdpd3JSRUZCSzBRN1VVRkRhRVVzWTBGQll5eEZRVUZGTEZkQlFWYzdVVUZETTBJc1QwRkJUeXhGUVVGRkxHRkJRV0U3UzBGRGRFSXNSVUZEUkN4WlFVRlpMRWRCUVVjc1RVRkJUU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUTI1RkxGRkJRVkVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUTJwQ0xFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZEYWtJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenRaUVVNelF5eEpRVUZKTEZsQlFWa3NSVUZCUlR0blFrRkRha0lzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVTndRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRmRCUTNCRExGRkJRVkVzUTBGQlF6dGhRVU5VTzFsQlEwUXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU5rTEVsQlFVa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yZENRVU5pTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1pVRkJaU3hEUVVGRE8yZENRVU4yUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGVkJRVlVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1lVRkRNVU03TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETzFsQlF6bERMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEWkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHZENRVUZuUWl4RFFVRkRPMWxCUTNoRExFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NZMEZCWXl4RFFVRkRMRU5CUVVNN1dVRkRjRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4elFrRkJjMElzUTBGQlF6dFpRVU01UXl4TlFVRk5PMU5CUTA0N1VVRkRSRHRaUVVORExFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRTlCUVU4c1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NZVUZCWVR0blFrRkRja1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4eFFrRkJjVUlzUTBGQlF6dHBRa0ZEZWtNc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NUVUZCVFN4RlFVRkZPMmRDUVVNM1FpeEpRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8yOUNRVU53UkN4TlFVRk5MRTFCUVUwc1IwRkZWaXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVU42UXl4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeFhRVUZYTEVOQlFVTTdiMEpCUTNoRExFbEJRVWtzWjBKQlFXZENMRWRCUVVjc1VVRkJVVHQ1UWtGRE4wSXNZVUZCWVN4RFFVRnRRaXh6UWtGQmMwSXNRMEZCUXp0NVFrRkRka1FzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMjlDUVVONFFpeEpRVUZKTEdkQ1FVRm5RaXhGUVVGRk8zZENRVU55UWl4blFrRkJaMElzUjBGQlJ5eG5Ra0ZCWjBJN05rSkJRMnBETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNN05rSkJRMVlzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVN05FSkJRMnhDTEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRE8zZENRVU0xUXl4RFFVRkRMRU5CUVVNN05rSkJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPM0ZDUVVOaU96dDNRa0ZCVFN4blFrRkJaMElzUjBGQlJ5eFRRVUZUTEVOQlFVTTdiMEpCUTNCRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03YjBKQlEzcERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eE5RVUZOTEUxQlFVMHNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF6dHBRa0ZEZGtRN2NVSkJRVTA3YjBKQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUWtGRGRFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXd3UWtGQk1FSXNRMEZCUXl4RFFVRkRMRmRCUTNCRUxFVkJRVVVzUTBGQlF6dHZRa0ZEU0N4WlFVRlpMRU5CUVVNc1MwRkJTenQzUWtGRGFrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRwUWtGRE1VUTdZVUZEUkR0cFFrRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4UFFVRlBMRWxCUVVrc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEUxQlFVMDdaMEpCUTNKRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03YVVKQlEzSkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVDBGQlR5eEZRVUZGTzJkQ1FVTjRSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8yZENRVU12UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRM0JDTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdjVUpCUTI1RkxFMUJRMGdzY1VKQlFYRkNMRU5CUVVNN1lVRkRkRUk3YVVKQlFVMHNTVUZEVGl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVDBGQlR6dG5Ra0ZEY0VJc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEdGQlFXRTdaMEpCUXpGQ0xFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4TlFVRk5MRVZCUTJ4Q08yZENRVU5FTEUxQlFVMHNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVTTFSQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUTFZc1EwRkJRenRuUWtGRFJpeEpRVU5ETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkRWQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVU5JTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRMjVGTEVWQlEwRTdiMEpCUTBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenR2UWtGRE4wTXNTVUZCU1N4WlFVRlpMRVZCUVVVN2QwSkJRMnBDTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkRjRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhYUVVOd1F5eFpRVUZaTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdjVUpCUXk5RU8ybENRVU5FTzNGQ1FVRk5PMjlDUVVOT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03YjBKQlF6VkRMRWxCUVVrc1dVRkJXU3hGUVVGRk8zZENRVU5xUWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0UFFVTXZRaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZET3paQ1FVTjRSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXpzMlFrRkROVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF6dHhRa0ZEY2tNN2FVSkJRMFE3WVVGRFJEdExRVU5HTzBsQlJVUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPenRSUVVNM1F5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRM3BETEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInRpbWVicm93c2VkIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwYWdlcyIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwiZmlsdGVyIiwicCIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRldGFpbHMiLCJkaXNwbGF5U3RhdHMiLCJnZXRTZXR0aW5nIiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzdGFydHNXaXRoIiwic2VhcmNoIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEF0dHJpYnV0ZSIsImRpZmZpY3VsdHlGaWx0ZXIiLCJtYXAiLCJ4IiwicmVwbGFjZSIsInRyaW0iLCJqb2luIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwidXJscyIsImUiLCJzcmMiLCJmaW5kIiwiaW5jbHVkZXMiLCJjaGlsZHJlbiIsInNsaWNlIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;