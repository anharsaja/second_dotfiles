var __webpack_exports__={};const presence=new Presence({clientId:"836534947170353173"}),browsingTimestamp=Math.floor(Date.now()/1e3);async function getStrings(){return presence.getStrings({readingArticle:"general.readingArticle",viewing:"general.viewing",viewingList:"general.viewList",viewingUser:"general.viewUser",viewingHomepage:"general.viewHome",searchingFor:"general.searchFor",viewProfileButton:"general.buttonViewProfile",readArticleButton:"general.buttonReadArticle"},await presence.getSetting("lang").catch((()=>"en")))}presence.on("UpdateData",(async()=>{const e=await getStrings(),i={1:"Honkai Impact 3rd",2:"Genshin Impact",4:"Tears of Themis",5:"HoYoLAB",6:"Honkai: Star Rail",8:"Zenless Zone Zero"},t={27:"Official posts",28:"Player guides",29:"Fan arts",30:"the Tavern",31:"Official posts",32:"Player guides",33:"Fan arts",34:"the Hyperion",35:"Official posts",36:"Player guides",37:"Fan arts",38:"the Law Firm",39:"Official posts",40:"Player guides",41:"Fan arts",42:"the Astral Express",46:"the Coff Cafe",47:"Official posts",48:"Fan arts",43:"Offical posts",44:"the LAB"},a={postList:"Posts",replyList:"Comments",favList:"Favorites",topicList:"Topics",followList:"Following",fanList:"Followers"},s={timeline:"Timeline",events:"Events"},n={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hoyolab/assets/logo.png",startTimestamp:browsingTimestamp},{location:r}=document,o=r.pathname.split("/");switch(o.shift(),o[0]){case"home":o[1]?n.details=`${e.viewing} ${s[o[1]]}`:n.details=`${e.viewingHomepage}`;break;case"circles":n.details=`${i[parseInt(o[1])]} Circle`,n.state=`Scrolling through ${t[parseInt(o[2])]}`;break;case"accountCenter":{const i=document.querySelector("body > div > div > div > div.root-page-container > div > div > div > div > div > div.account-center-user-wrap > div > div > span.user-basic-nickname").textContent;n.details=`${e.viewingUser} ${i}`,n.state=`${e.viewingList} ${a[o[1]]}`,n.buttons=[{label:e.viewProfileButton,url:r.search}];break}case"setting":n.details=`${e.viewing} Account settings`;break;case"search":n.details=`${e.searchingFor} ${new URLSearchParams(r.search).get("keyword")}`;break;case"article":n.details=`${e.readingArticle} ${document.querySelector("body > div > div > div > div.root-page-container > div > div > div > div > div.mhy-article-page__body > div > div > h1").textContent}`,n.buttons=[{label:e.readArticleButton,url:`https://www.hoyolab.com/article/${o[1]}`}];break;case"topicDetail":{const e=document.querySelector("body > div > div > div > div.root-page-container > div > div > div > div > div > div > div.mhy-topic-basic > div > div.mhy-topic-basic-title > div").textContent.replaceAll("\n","").trimEnd();n.details=`Viewing Topic: ${e}`;break}case"newArticle":n.details="Creating a new article"}presence.setActivity(n)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI4MzY1MzQ5NDcxNzAzNTMxNzNcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuYXN5bmMgZnVuY3Rpb24gZ2V0U3RyaW5ncygpIHtcbiAgICByZXR1cm4gcHJlc2VuY2UuZ2V0U3RyaW5ncyh7XG4gICAgICAgIHJlYWRpbmdBcnRpY2xlOiBcImdlbmVyYWwucmVhZGluZ0FydGljbGVcIixcbiAgICAgICAgdmlld2luZzogXCJnZW5lcmFsLnZpZXdpbmdcIixcbiAgICAgICAgdmlld2luZ0xpc3Q6IFwiZ2VuZXJhbC52aWV3TGlzdFwiLFxuICAgICAgICB2aWV3aW5nVXNlcjogXCJnZW5lcmFsLnZpZXdVc2VyXCIsXG4gICAgICAgIHZpZXdpbmdIb21lcGFnZTogXCJnZW5lcmFsLnZpZXdIb21lXCIsXG4gICAgICAgIHNlYXJjaGluZ0ZvcjogXCJnZW5lcmFsLnNlYXJjaEZvclwiLFxuICAgICAgICB2aWV3UHJvZmlsZUJ1dHRvbjogXCJnZW5lcmFsLmJ1dHRvblZpZXdQcm9maWxlXCIsXG4gICAgICAgIHJlYWRBcnRpY2xlQnV0dG9uOiBcImdlbmVyYWwuYnV0dG9uUmVhZEFydGljbGVcIixcbiAgICB9LCBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibGFuZ1wiKS5jYXRjaCgoKSA9PiBcImVuXCIpKTtcbn1cbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc3RyaW5ncyA9IGF3YWl0IGdldFN0cmluZ3MoKSwgY2lyY2xlTmFtZSA9IHtcbiAgICAgICAgMTogXCJIb25rYWkgSW1wYWN0IDNyZFwiLFxuICAgICAgICAyOiBcIkdlbnNoaW4gSW1wYWN0XCIsXG4gICAgICAgIDQ6IFwiVGVhcnMgb2YgVGhlbWlzXCIsXG4gICAgICAgIDU6IFwiSG9Zb0xBQlwiLFxuICAgICAgICA2OiBcIkhvbmthaTogU3RhciBSYWlsXCIsXG4gICAgICAgIDg6IFwiWmVubGVzcyBab25lIFplcm9cIixcbiAgICB9LCBjaXJjbGVUYWJOYW1lID0ge1xuICAgICAgICAyNzogXCJPZmZpY2lhbCBwb3N0c1wiLFxuICAgICAgICAyODogXCJQbGF5ZXIgZ3VpZGVzXCIsXG4gICAgICAgIDI5OiBcIkZhbiBhcnRzXCIsXG4gICAgICAgIDMwOiBcInRoZSBUYXZlcm5cIixcbiAgICAgICAgMzE6IFwiT2ZmaWNpYWwgcG9zdHNcIixcbiAgICAgICAgMzI6IFwiUGxheWVyIGd1aWRlc1wiLFxuICAgICAgICAzMzogXCJGYW4gYXJ0c1wiLFxuICAgICAgICAzNDogXCJ0aGUgSHlwZXJpb25cIixcbiAgICAgICAgMzU6IFwiT2ZmaWNpYWwgcG9zdHNcIixcbiAgICAgICAgMzY6IFwiUGxheWVyIGd1aWRlc1wiLFxuICAgICAgICAzNzogXCJGYW4gYXJ0c1wiLFxuICAgICAgICAzODogXCJ0aGUgTGF3IEZpcm1cIixcbiAgICAgICAgMzk6IFwiT2ZmaWNpYWwgcG9zdHNcIixcbiAgICAgICAgNDA6IFwiUGxheWVyIGd1aWRlc1wiLFxuICAgICAgICA0MTogXCJGYW4gYXJ0c1wiLFxuICAgICAgICA0MjogXCJ0aGUgQXN0cmFsIEV4cHJlc3NcIixcbiAgICAgICAgNDY6IFwidGhlIENvZmYgQ2FmZVwiLFxuICAgICAgICA0NzogXCJPZmZpY2lhbCBwb3N0c1wiLFxuICAgICAgICA0ODogXCJGYW4gYXJ0c1wiLFxuICAgICAgICA0MzogXCJPZmZpY2FsIHBvc3RzXCIsXG4gICAgICAgIDQ0OiBcInRoZSBMQUJcIixcbiAgICB9LCBhY2NvdW50Q2VudGVyU3RhdGUgPSB7XG4gICAgICAgIHBvc3RMaXN0OiBcIlBvc3RzXCIsXG4gICAgICAgIHJlcGx5TGlzdDogXCJDb21tZW50c1wiLFxuICAgICAgICBmYXZMaXN0OiBcIkZhdm9yaXRlc1wiLFxuICAgICAgICB0b3BpY0xpc3Q6IFwiVG9waWNzXCIsXG4gICAgICAgIGZvbGxvd0xpc3Q6IFwiRm9sbG93aW5nXCIsXG4gICAgICAgIGZhbkxpc3Q6IFwiRm9sbG93ZXJzXCIsXG4gICAgfSwgaG9tZXBhZ2VOYW1lID0ge1xuICAgICAgICB0aW1lbGluZTogXCJUaW1lbGluZVwiLFxuICAgICAgICBldmVudHM6IFwiRXZlbnRzXCIsXG4gICAgfSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvSC9Ib3lvbGFiL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBsb2NhdGlvbiB9ID0gZG9jdW1lbnQsIHBhdGhMaXN0ID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgIHBhdGhMaXN0LnNoaWZ0KCk7XG4gICAgc3dpdGNoIChwYXRoTGlzdFswXSkge1xuICAgICAgICBjYXNlIFwiaG9tZVwiOiB7XG4gICAgICAgICAgICBpZiAoIXBhdGhMaXN0WzFdKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7c3RyaW5ncy52aWV3aW5nSG9tZXBhZ2V9YDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7c3RyaW5ncy52aWV3aW5nfSAke2hvbWVwYWdlTmFtZVtwYXRoTGlzdFsxXV19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhvbWVwYWdlTmFtZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJjaXJjbGVzXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7Y2lyY2xlTmFtZVtwYXJzZUludChwYXRoTGlzdFsxXSldfSBDaXJjbGVgO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFNjcm9sbGluZyB0aHJvdWdoICR7Y2lyY2xlVGFiTmFtZVtwYXJzZUludChwYXRoTGlzdFsyXSldfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiYWNjb3VudENlbnRlclwiOiB7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2LnJvb3QtcGFnZS1jb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYuYWNjb3VudC1jZW50ZXItdXNlci13cmFwID4gZGl2ID4gZGl2ID4gc3Bhbi51c2VyLWJhc2ljLW5pY2tuYW1lXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgJHtzdHJpbmdzLnZpZXdpbmdVc2VyfSAke3VzZXJuYW1lfWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtzdHJpbmdzLnZpZXdpbmdMaXN0fSAke2FjY291bnRDZW50ZXJTdGF0ZVtwYXRoTGlzdFsxXV19YDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZ3Mudmlld1Byb2ZpbGVCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIHVybDogbG9jYXRpb24uc2VhcmNoLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInNldHRpbmdcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgJHtzdHJpbmdzLnZpZXdpbmd9IEFjY291bnQgc2V0dGluZ3NgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGAke3N0cmluZ3Muc2VhcmNoaW5nRm9yfSAke25ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKS5nZXQoXCJrZXl3b3JkXCIpfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiYXJ0aWNsZVwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGAke3N0cmluZ3MucmVhZGluZ0FydGljbGV9ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYucm9vdC1wYWdlLWNvbnRhaW5lciA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdi5taHktYXJ0aWNsZS1wYWdlX19ib2R5ID4gZGl2ID4gZGl2ID4gaDFcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZ3MucmVhZEFydGljbGVCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIHVybDogYGh0dHBzOi8vd3d3LmhveW9sYWIuY29tL2FydGljbGUvJHtwYXRoTGlzdFsxXX1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRvcGljRGV0YWlsXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHRvcGljTmFtZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2LnJvb3QtcGFnZS1jb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYubWh5LXRvcGljLWJhc2ljID4gZGl2ID4gZGl2Lm1oeS10b3BpYy1iYXNpYy10aXRsZSA+IGRpdlwiKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5yZXBsYWNlQWxsKFwiXFxuXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgLnRyaW1FbmQoKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgVG9waWM6ICR7dG9waWNOYW1lfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwibmV3QXJ0aWNsZVwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ3JlYXRpbmcgYSBuZXcgYXJ0aWNsZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeExRVUZMTEZWQlFWVXNWVUZCVlR0SlFVTjRRaXhQUVVGUExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlEzcENPMUZCUTBNc1kwRkJZeXhGUVVGRkxIZENRVUYzUWp0UlFVTjRReXhQUVVGUExFVkJRVVVzYVVKQlFXbENPMUZCUXpGQ0xGZEJRVmNzUlVGQlJTeHJRa0ZCYTBJN1VVRkRMMElzVjBGQlZ5eEZRVUZGTEd0Q1FVRnJRanRSUVVNdlFpeGxRVUZsTEVWQlFVVXNhMEpCUVd0Q08xRkJRMjVETEZsQlFWa3NSVUZCUlN4dFFrRkJiVUk3VVVGRGFrTXNhVUpCUVdsQ0xFVkJRVVVzTWtKQlFUSkNPMUZCUXpsRExHbENRVUZwUWl4RlFVRkZMREpDUVVFeVFqdExRVU01UXl4RlFVTkVMRTFCUVUwc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlF6TkVMRU5CUVVNN1FVRkRTQ3hEUVVGRE8wRkJSVVFzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3U1VGRGNFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1RVRkJUU3hWUVVGVkxFVkJRVVVzUlVGRGFrTXNWVUZCVlN4SFFVRXlRanRSUVVOd1F5eERRVUZETEVWQlFVVXNiVUpCUVcxQ08xRkJRM1JDTEVOQlFVTXNSVUZCUlN4blFrRkJaMEk3VVVGRGJrSXNRMEZCUXl4RlFVRkZMR2xDUVVGcFFqdFJRVU53UWl4RFFVRkRMRVZCUVVVc1UwRkJVenRSUVVOYUxFTkJRVU1zUlVGQlJTeHRRa0ZCYlVJN1VVRkRkRUlzUTBGQlF5eEZRVUZGTEcxQ1FVRnRRanRMUVVOMFFpeEZRVU5FTEdGQlFXRXNSMEZCTWtJN1VVRkZka01zUlVGQlJTeEZRVUZGTEdkQ1FVRm5RanRSUVVOd1FpeEZRVUZGTEVWQlFVVXNaVUZCWlR0UlFVTnVRaXhGUVVGRkxFVkJRVVVzVlVGQlZUdFJRVU5rTEVWQlFVVXNSVUZCUlN4WlFVRlpPMUZCUldoQ0xFVkJRVVVzUlVGQlJTeG5Ra0ZCWjBJN1VVRkRjRUlzUlVGQlJTeEZRVUZGTEdWQlFXVTdVVUZEYmtJc1JVRkJSU3hGUVVGRkxGVkJRVlU3VVVGRFpDeEZRVUZGTEVWQlFVVXNZMEZCWXp0UlFVVnNRaXhGUVVGRkxFVkJRVVVzWjBKQlFXZENPMUZCUTNCQ0xFVkJRVVVzUlVGQlJTeGxRVUZsTzFGQlEyNUNMRVZCUVVVc1JVRkJSU3hWUVVGVk8xRkJRMlFzUlVGQlJTeEZRVUZGTEdOQlFXTTdVVUZGYkVJc1JVRkJSU3hGUVVGRkxHZENRVUZuUWp0UlFVTndRaXhGUVVGRkxFVkJRVVVzWlVGQlpUdFJRVU51UWl4RlFVRkZMRVZCUVVVc1ZVRkJWVHRSUVVOa0xFVkJRVVVzUlVGQlJTeHZRa0ZCYjBJN1VVRkZlRUlzUlVGQlJTeEZRVUZGTEdWQlFXVTdVVUZEYmtJc1JVRkJSU3hGUVVGRkxHZENRVUZuUWp0UlFVTndRaXhGUVVGRkxFVkJRVVVzVlVGQlZUdFJRVWRrTEVWQlFVVXNSVUZCUlN4bFFVRmxPMUZCUTI1Q0xFVkJRVVVzUlVGQlJTeFRRVUZUTzB0QlEySXNSVUZEUkN4clFrRkJhMElzUjBGQk1rSTdVVUZETlVNc1VVRkJVU3hGUVVGRkxFOUJRVTg3VVVGRGFrSXNVMEZCVXl4RlFVRkZMRlZCUVZVN1VVRkRja0lzVDBGQlR5eEZRVUZGTEZkQlFWYzdVVUZEY0VJc1UwRkJVeXhGUVVGRkxGRkJRVkU3VVVGRGJrSXNWVUZCVlN4RlFVRkZMRmRCUVZjN1VVRkRka0lzVDBGQlR5eEZRVUZGTEZkQlFWYzdTMEZEY0VJc1JVRkRSQ3haUVVGWkxFZEJRVEpDTzFGQlEzUkRMRkZCUVZFc1JVRkJSU3hWUVVGVk8xRkJRM0JDTEUxQlFVMHNSVUZCUlN4UlFVRlJPMHRCUTJoQ0xFVkJRMFFzV1VGQldTeEhRVUZwUWp0UlFVTTFRaXhoUVVGaExFVkJRMW9zT0VSQlFUaEVPMUZCUXk5RUxHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUlVGRFJDeEZRVUZGTEZGQlFWRXNSVUZCUlN4SFFVRkhMRkZCUVZFc1JVRkRka0lzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlJYcERMRkZCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dEpRVVZxUWl4UlFVRlJMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdFJRVU53UWl4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRMW9zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRVVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlF6dHBRa0ZEYWtVN1owSkJRMG9zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUExFbEJRM2hETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRM3BDTEVWQlFVVXNRMEZCUXp0aFFVTklPMWxCUTBRc1dVRkJXU3hEUVVGRE8xbEJRMklzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVObUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSMEZCUnl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVOeVJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMSEZDUVVOd1FpeGhRVUZoTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVU53UXl4RlFVRkZMRU5CUVVNN1dVRkRTQ3hOUVVGTk8xTkJRMDQ3VVVGRFJDeExRVUZMTEdWQlFXVXNRMEZCUXl4RFFVRkRPMWxCUTNKQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNSRExITktRVUZ6U2l4RFFVTjBTaXhEUVVGRExGZEJRVmNzUTBGQlF6dFpRVVZrTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zVjBGQlZ5eEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUXpWRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1YwRkJWeXhKUVVNeFF5eHJRa0ZCYTBJc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlF5OUNMRVZCUVVVc1EwRkJRenRaUVVOSUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdaMEpCUTNSQ08yOUNRVU5ETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc2FVSkJRV2xDTzI5Q1FVTm9ReXhIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEUxQlFVMDdhVUpCUTNCQ08yRkJRMFFzUTBGQlF6dFpRVVZHTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRFppeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRExFOUJRVThzYlVKQlFXMUNMRU5CUVVNN1dVRkROMFFzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVOa0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1dVRkJXU3hKUVVGSkxFbEJRVWtzWlVGQlpTeERRVU53UlN4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVObUxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1dVRkRia0lzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVObUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1kwRkJZeXhKUVVNdlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTnlRaXgzU0VGQmQwZ3NRMEZEZUVnc1EwRkJReXhYUVVOSUxFVkJRVVVzUTBGQlF6dFpRVU5JTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1owSkJRM1JDTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zYVVKQlFXbENPMjlDUVVOb1F5eEhRVUZITEVWQlFVVXNiVU5CUVcxRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0cFFrRkRja1E3WVVGRFJDeERRVUZETzFsQlEwWXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhoUVVGaExFTkJRVU1zUTBGQlF6dFpRVU51UWl4TlFVRk5MRk5CUVZNc1IwRkJSeXhSUVVGUk8ybENRVU40UWl4aFFVRmhMRU5CUTJJc2IwcEJRVzlLTEVOQlEzQktPMmxDUVVOQkxGZEJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJRenRwUWtGRGFFTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1dVRkZXaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhUUVVGVExFVkJRVVVzUTBGQlF6dFpRVVZ5UkN4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExGbEJRVmtzUTBGQlF5eERRVUZETzFsQlEyeENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZDBKQlFYZENMRU5CUVVNN1dVRkRhRVFzVFVGQlRUdFRRVU5PTzB0QlEwUTdTVUZGUkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiYXN5bmMiLCJnZXRTdHJpbmdzIiwicmVhZGluZ0FydGljbGUiLCJ2aWV3aW5nIiwidmlld2luZ0xpc3QiLCJ2aWV3aW5nVXNlciIsInZpZXdpbmdIb21lcGFnZSIsInNlYXJjaGluZ0ZvciIsInZpZXdQcm9maWxlQnV0dG9uIiwicmVhZEFydGljbGVCdXR0b24iLCJnZXRTZXR0aW5nIiwiY2F0Y2giLCJvbiIsInN0cmluZ3MiLCJjaXJjbGVOYW1lIiwiY2lyY2xlVGFiTmFtZSIsImFjY291bnRDZW50ZXJTdGF0ZSIsInBvc3RMaXN0IiwicmVwbHlMaXN0IiwiZmF2TGlzdCIsInRvcGljTGlzdCIsImZvbGxvd0xpc3QiLCJmYW5MaXN0IiwiaG9tZXBhZ2VOYW1lIiwidGltZWxpbmUiLCJldmVudHMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwicGF0aExpc3QiLCJwYXRobmFtZSIsInNwbGl0Iiwic2hpZnQiLCJkZXRhaWxzIiwicGFyc2VJbnQiLCJzdGF0ZSIsInVzZXJuYW1lIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwic2VhcmNoIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwidG9waWNOYW1lIiwicmVwbGFjZUFsbCIsInRyaW1FbmQiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;