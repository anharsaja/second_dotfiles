var __webpack_exports__={};const presence=new Presence({clientId:"812085870382809128"}),time=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e=location.href.replace(/\/?$/,"/").replace(`https://${location.hostname}`,"").replace("?","/");let t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/R/Riot%20Games/assets/logo.png",startTimestamp:time};if(location.hostname.includes("riotgames.com")){const s={"/":{details:"Idling..."},"/who-we-are/":{details:"Looking at:",state:"Who we are | Riot Games"},"/work-with-us/":{details:"Looking at:",state:"Work with us! | Riot Games"},"/news/":{details:"Looking at News:",state:`${Array.from(document.querySelectorAll("div")).find((e=>e.className?.includes("style__Title")))?.textContent} | Riot Games`},"/category/":{details:"Browsing Store:",state:`${document.querySelector("h1")?.textContent} | Riot Merch`},"/product/":{details:"Looking at Product:",state:`${document.querySelector("h1")?.textContent} | Riot Merch`},"/account/":{details:"Looking at Account:",state:`${document.querySelector("h1")?.textContent} | Riot Merch`},"/cart/":{details:"Looking at Cart:",state:`${document.querySelector("h1")?.textContent} | Riot Merch`}};for(const[a,o]of Object.entries(s))e.match(a)&&(t.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/R/Riot%20Games/assets/logo.png",t={...t,...o})}else switch(location.hostname){case"teamfighttactics.leagueoflegends.com":{const s={"/":{details:"Idling..."},"/news/":{details:"Looking at News:",state:`${Array.from(document.querySelectorAll("div")).find((e=>e.className?.includes("style__Title")))?.textContent} | TfT`},"/set-overview/":{details:"Looking at:",state:"Set-Overview | TfT"}};for(const[a,o]of Object.entries(s))e.match(a)&&(t.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/R/Riot%20Games/assets/2.png",t={...t,...o});break}case"wildrift.leagueoflegends.com":{const s={"/":{details:"Idling..."},"/news/":{details:"Looking at News:",state:`${document.querySelector("h1")?.textContent} | LoL: Wild Rift`},"/game-overview/":{details:"Looking at:",state:"Game-Overview | LoL:Wild Rift"},"/champions/":{details:"Looking at Champion:",state:`${document.querySelector("h3")?.textContent} | LoL: Wild Rift`}};for(const[a,o]of Object.entries(s))e.match(a)&&(t.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/R/Riot%20Games/assets/3.png",t={...t,...o});break}case"playvalorant.com":{const s={"/":{details:"Idling..."},"/news/":{details:"Looking at News:",state:`${document.querySelector("h2")?.textContent} | VALORANT`},"/maps/":{details:"Looking at:",state:"Maps | VALORANT"},"/agents/":{details:"Looking at:",state:`${document.querySelector(".slick-slide.slick-active.slick-center.slick-current > div > div > h2")?.textContent} | VALORANT`},"/media/":{details:"Browsing Media",state:"VALORANT"},"/leaderboards/":{details:"Browsing Leaderboards:",state:"VALORANT"},"/specs/":{details:"Looking at:",state:"Specs | VALORANT"},"/arsenal/":{details:"Looking at:",state:"Arsenal | VALORANT"}};for(const[a,o]of Object.entries(s))e.match(a)&&(t.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/R/Riot%20Games/assets/0.png",t={...t,...o});break}default:if(location.hostname.includes("leagueoflegends.com")){const s={"/":{details:"Idling..."},"/how-to-play/":{details:"Looking at:",state:"How to Play! | LoL"},"/champions/":{details:"Looking at Champion:",state:`${document.querySelector("strong")?.textContent} | LoL`},"/champion/":{details:"Looking at Champion:",state:`${Array.from(document.querySelectorAll("span")).find((e=>e.className?.includes("title")))?.textContent} | LoL`},"/news/":{details:"Looking at News:",state:`${Array.from(document.querySelectorAll("div")).find((e=>e.className?.includes("style__Title")))?.textContent} | LoL`},"/news/tags/patch-notes/":{details:"Looking at:",state:"Patch notes Overview | LoL"},"/featured/":{details:"Looking at:",state:"League Displays | LoL"},"/story/":{details:"Reading Story:",state:`${document.querySelector("h1")?.textContent} | LoL`},"/regions/":{details:"Looking at Region:",state:`${Array.from(document.querySelectorAll("span")).find((e=>e.className?.includes("title")))?.textContent} | LoL`},"/comic/":{details:"LoL - Reading comic:",state:`${document.querySelector("h1")?.textContent} | LoL`},"/kda/":{details:"Alt Universe:",state:"K/DA | LoL"},"/star-guardian/":{details:"Alt Universe:",state:"Star Guardians | LoL"},"/odyssey/":{details:"Alt Universe:",state:"Odyssey | LoL"},"/explore/":{details:"Searching through:",state:"Everything League | LoL"}};for(const[a,o]of Object.entries(s))e.match(a)&&(t.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/R/Riot%20Games/assets/1.png",t={...t,...o})}else if(location.hostname.includes("playruneterra.com")){const s={"/":{details:"Idling..."},"/news/":{details:"Looking at news:",state:`${Array.from(document.querySelectorAll("div")).find((e=>e.className?.includes("style__Title")))?.textContent} | LoR`},"/news/competitive/":{details:"Tournaments:",state:`${document.querySelector("h1")?.textContent} | LoR`}};for(const[a,o]of Object.entries(s))e.match(a)&&(t.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/R/Riot%20Games/assets/4.png",t={...t,...o})}}t.details?presence.setActivity(t):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxrQkFBbUIsQ0FDZkQsUUFBUyxnQkFDVEMsTUFBTyx3QkFFWCxZQUFhLENBQ1RELFFBQVMsZ0JBQ1RDLE1BQU8saUJBRVgsWUFBYSxDQUNURCxRQUFTLHFCQUNUQyxNQUFPLDRCQUdmLElBQUssTUFBT1UsRUFBR0MsS0FBTUMsT0FBT0MsUUFBUWYsR0FDNUJULEVBQUt5QixNQUFNSixLQUNYaEIsRUFBYUMsY0FBZ0IsaUVBQzdCRCxFQUFlLElBQUtBLEtBQWlCaUIsR0FHakQsTUFDSyxHQUFJckIsU0FBU0csU0FBU0ksU0FBUyxxQkFBc0IsQ0FDdEQsTUFBTUMsRUFBVSxDQUNaLElBQUssQ0FDREMsUUFBUyxhQUViLFNBQVUsQ0FDTkEsUUFBUyxtQkFDVEMsTUFBTyxHQUFHQyxNQUFNQyxLQUFLQyxTQUFTQyxpQkFBaUIsUUFBUUMsTUFBS0MsR0FBS0EsRUFBRUMsV0FBV1YsU0FBUyxtQkFBa0JXLHFCQUU3RyxxQkFBc0IsQ0FDbEJULFFBQVMsZUFDVEMsTUFBTyxHQUFHRyxTQUFTTSxjQUFjLE9BQU9ELHNCQUdoRCxJQUFLLE1BQU9FLEVBQUdDLEtBQU1DLE9BQU9DLFFBQVFmLEdBQzVCVCxFQUFLeUIsTUFBTUosS0FDWGhCLEVBQWFDLGNBQWdCLGlFQUM3QkQsRUFBZSxJQUFLQSxLQUFpQmlCLEdBR2pELEVBR1JqQixFQUFhSyxRQUNicEIsU0FBU29DLFlBQVlyQixHQUVyQmYsU0FBU29DLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODEyMDg1ODcwMzgyODA5MTI4XCIsXG59KSwgdGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXRoID0gbG9jYXRpb24uaHJlZlxuICAgICAgICAucmVwbGFjZSgvXFwvPyQvLCBcIi9cIilcbiAgICAgICAgLnJlcGxhY2UoYGh0dHBzOi8vJHtsb2NhdGlvbi5ob3N0bmFtZX1gLCBcIlwiKVxuICAgICAgICAucmVwbGFjZShcIj9cIiwgXCIvXCIpO1xuICAgIGxldCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9SL1Jpb3QlMjBHYW1lcy9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IHRpbWUsXG4gICAgfTtcbiAgICBpZiAobG9jYXRpb24uaG9zdG5hbWUuaW5jbHVkZXMoXCJyaW90Z2FtZXMuY29tXCIpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY3MgPSB7XG4gICAgICAgICAgICBcIi9cIjoge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiSWRsaW5nLi4uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIvd2hvLXdlLWFyZS9cIjoge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiTG9va2luZyBhdDpcIixcbiAgICAgICAgICAgICAgICBzdGF0ZTogXCJXaG8gd2UgYXJlIHwgUmlvdCBHYW1lc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiL3dvcmstd2l0aC11cy9cIjoge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiTG9va2luZyBhdDpcIixcbiAgICAgICAgICAgICAgICBzdGF0ZTogXCJXb3JrIHdpdGggdXMhIHwgUmlvdCBHYW1lc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiL25ld3MvXCI6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkxvb2tpbmcgYXQgTmV3czpcIixcbiAgICAgICAgICAgICAgICBzdGF0ZTogYCR7QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpKS5maW5kKGMgPT4gYy5jbGFzc05hbWU/LmluY2x1ZGVzKFwic3R5bGVfX1RpdGxlXCIpKT8udGV4dENvbnRlbnR9IHwgUmlvdCBHYW1lc2AsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIvY2F0ZWdvcnkvXCI6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkJyb3dzaW5nIFN0b3JlOlwiLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik/LnRleHRDb250ZW50fSB8IFJpb3QgTWVyY2hgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiL3Byb2R1Y3QvXCI6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkxvb2tpbmcgYXQgUHJvZHVjdDpcIixcbiAgICAgICAgICAgICAgICBzdGF0ZTogYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpPy50ZXh0Q29udGVudH0gfCBSaW90IE1lcmNoYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIi9hY2NvdW50L1wiOiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogXCJMb29raW5nIGF0IEFjY291bnQ6XCIsXG4gICAgICAgICAgICAgICAgc3RhdGU6IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKT8udGV4dENvbnRlbnR9IHwgUmlvdCBNZXJjaGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIvY2FydC9cIjoge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiTG9va2luZyBhdCBDYXJ0OlwiLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik/LnRleHRDb250ZW50fSB8IFJpb3QgTWVyY2hgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGljcykpIHtcbiAgICAgICAgICAgIGlmIChwYXRoLm1hdGNoKGspKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUi9SaW90JTIwR2FtZXMvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhID0geyAuLi5wcmVzZW5jZURhdGEsIC4uLnYgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChsb2NhdGlvbi5ob3N0bmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcInRlYW1maWdodHRhY3RpY3MubGVhZ3Vlb2ZsZWdlbmRzLmNvbVwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCIvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiSWRsaW5nLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiL25ld3MvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiTG9va2luZyBhdCBOZXdzOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGAke0FycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKSkuZmluZChjID0+IGMuY2xhc3NOYW1lPy5pbmNsdWRlcyhcInN0eWxlX19UaXRsZVwiKSk/LnRleHRDb250ZW50fSB8IFRmVGAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiL3NldC1vdmVydmlldy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogXCJMb29raW5nIGF0OlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwiU2V0LU92ZXJ2aWV3IHwgVGZUXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzdGF0aWNzKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aC5tYXRjaChrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUi9SaW90JTIwR2FtZXMvYXNzZXRzLzIucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEgPSB7IC4uLnByZXNlbmNlRGF0YSwgLi4udiB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIndpbGRyaWZ0LmxlYWd1ZW9mbGVnZW5kcy5jb21cIjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIklkbGluZy4uLlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIi9uZXdzL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkxvb2tpbmcgYXQgTmV3czpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik/LnRleHRDb250ZW50fSB8IExvTDogV2lsZCBSaWZ0YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIvZ2FtZS1vdmVydmlldy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogXCJMb29raW5nIGF0OlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwiR2FtZS1PdmVydmlldyB8IExvTDpXaWxkIFJpZnRcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIvY2hhbXBpb25zL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkxvb2tpbmcgYXQgQ2hhbXBpb246XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpPy50ZXh0Q29udGVudH0gfCBMb0w6IFdpbGQgUmlmdGAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzdGF0aWNzKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aC5tYXRjaChrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUi9SaW90JTIwR2FtZXMvYXNzZXRzLzMucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEgPSB7IC4uLnByZXNlbmNlRGF0YSwgLi4udiB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInBsYXl2YWxvcmFudC5jb21cIjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIklkbGluZy4uLlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIi9uZXdzL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkxvb2tpbmcgYXQgTmV3czpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIik/LnRleHRDb250ZW50fSB8IFZBTE9SQU5UYCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIvbWFwcy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogXCJMb29raW5nIGF0OlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwiTWFwcyB8IFZBTE9SQU5UXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiL2FnZW50cy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogXCJMb29raW5nIGF0OlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpY2stc2xpZGUuc2xpY2stYWN0aXZlLnNsaWNrLWNlbnRlci5zbGljay1jdXJyZW50ID4gZGl2ID4gZGl2ID4gaDJcIik/LnRleHRDb250ZW50fSB8IFZBTE9SQU5UYCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIvbWVkaWEvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmcgTWVkaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBcIlZBTE9SQU5UXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiL2xlYWRlcmJvYXJkcy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogXCJCcm93c2luZyBMZWFkZXJib2FyZHM6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJWQUxPUkFOVFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIi9zcGVjcy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogXCJMb29raW5nIGF0OlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwiU3BlY3MgfCBWQUxPUkFOVFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIi9hcnNlbmFsL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkxvb2tpbmcgYXQ6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJBcnNlbmFsIHwgVkFMT1JBTlRcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRpY3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoLm1hdGNoKGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9SL1Jpb3QlMjBHYW1lcy9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YSA9IHsgLi4ucHJlc2VuY2VEYXRhLCAuLi52IH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5ob3N0bmFtZS5pbmNsdWRlcyhcImxlYWd1ZW9mbGVnZW5kcy5jb21cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogXCJJZGxpbmcuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9ob3ctdG8tcGxheS9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiTG9va2luZyBhdDpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJIb3cgdG8gUGxheSEgfCBMb0xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9jaGFtcGlvbnMvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkxvb2tpbmcgYXQgQ2hhbXBpb246XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHJvbmdcIik/LnRleHRDb250ZW50fSB8IExvTGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2hhbXBpb24vXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkxvb2tpbmcgYXQgQ2hhbXBpb246XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGAke0FycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIikpLmZpbmQoYyA9PiBjLmNsYXNzTmFtZT8uaW5jbHVkZXMoXCJ0aXRsZVwiKSk/LnRleHRDb250ZW50fSB8IExvTGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvbmV3cy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiTG9va2luZyBhdCBOZXdzOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBgJHtBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIikpLmZpbmQoYyA9PiBjLmNsYXNzTmFtZT8uaW5jbHVkZXMoXCJzdHlsZV9fVGl0bGVcIikpPy50ZXh0Q29udGVudH0gfCBMb0xgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL25ld3MvdGFncy9wYXRjaC1ub3Rlcy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiTG9va2luZyBhdDpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJQYXRjaCBub3RlcyBPdmVydmlldyB8IExvTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL2ZlYXR1cmVkL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogXCJMb29raW5nIGF0OlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBcIkxlYWd1ZSBEaXNwbGF5cyB8IExvTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL3N0b3J5L1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogXCJSZWFkaW5nIFN0b3J5OlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik/LnRleHRDb250ZW50fSB8IExvTGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvcmVnaW9ucy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiTG9va2luZyBhdCBSZWdpb246XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGAke0FycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIikpLmZpbmQoYyA9PiBjLmNsYXNzTmFtZT8uaW5jbHVkZXMoXCJ0aXRsZVwiKSk/LnRleHRDb250ZW50fSB8IExvTGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvY29taWMvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkxvTCAtIFJlYWRpbmcgY29taWM6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKT8udGV4dENvbnRlbnR9IHwgTG9MYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9rZGEvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkFsdCBVbml2ZXJzZTpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJLL0RBIHwgTG9MXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvc3Rhci1ndWFyZGlhbi9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiQWx0IFVuaXZlcnNlOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBcIlN0YXIgR3VhcmRpYW5zIHwgTG9MXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvb2R5c3NleS9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiQWx0IFVuaXZlcnNlOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBcIk9keXNzZXkgfCBMb0xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9leHBsb3JlL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogXCJTZWFyY2hpbmcgdGhyb3VnaDpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJFdmVyeXRoaW5nIExlYWd1ZSB8IExvTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGljcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXRoLm1hdGNoKGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUi9SaW90JTIwR2FtZXMvYXNzZXRzLzEucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhID0geyAuLi5wcmVzZW5jZURhdGEsIC4uLnYgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb2NhdGlvbi5ob3N0bmFtZS5pbmNsdWRlcyhcInBsYXlydW5ldGVycmEuY29tXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiSWRsaW5nLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvbmV3cy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiTG9va2luZyBhdCBuZXdzOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBgJHtBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIikpLmZpbmQoYyA9PiBjLmNsYXNzTmFtZT8uaW5jbHVkZXMoXCJzdHlsZV9fVGl0bGVcIikpPy50ZXh0Q29udGVudH0gfCBMb1JgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL25ld3MvY29tcGV0aXRpdmUvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIlRvdXJuYW1lbnRzOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik/LnRleHRDb250ZW50fSB8IExvUmAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzdGF0aWNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGgubWF0Y2goaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9SL1Jpb3QlMjBHYW1lcy9hc3NldHMvNC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEgPSB7IC4uLnByZXNlbmNlRGF0YSwgLi4udiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGWGRFTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEVsQlFVazdVMEZEZUVJc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTTdVMEZEY0VJc1QwRkJUeXhEUVVGRExGZEJRVmNzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRUUVVNelF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM0JDTEVsQlFVa3NXVUZCV1N4SFFVRnBRanRSUVVOb1F5eGhRVUZoTEhGRlFVRmhPMUZCUXpGQ0xHTkJRV01zUlVGQlJTeEpRVUZKTzB0QlEzQkNMRU5CUVVNN1NVRkRSaXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRk8xRkJRMmhFTEUxQlFVMHNUMEZCVHl4SFFVVlVPMWxCUTBnc1IwRkJSeXhGUVVGRk8yZENRVU5LTEU5QlFVOHNSVUZCUlN4WFFVRlhPMkZCUTNCQ08xbEJRMFFzWTBGQll5eEZRVUZGTzJkQ1FVTm1MRTlCUVU4c1JVRkJSU3hoUVVGaE8yZENRVU4wUWl4TFFVRkxMRVZCUVVVc2VVSkJRWGxDTzJGQlEyaERPMWxCUTBRc1owSkJRV2RDTEVWQlFVVTdaMEpCUTJwQ0xFOUJRVThzUlVGQlJTeGhRVUZoTzJkQ1FVTjBRaXhMUVVGTExFVkJRVVVzTkVKQlFUUkNPMkZCUTI1RE8xbEJRMFFzVVVGQlVTeEZRVUZGTzJkQ1FVTlVMRTlCUVU4c1JVRkJSU3hyUWtGQmEwSTdaMEpCUXpOQ0xFdEJRVXNzUlVGQlJTeEhRVU5PTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUTNKRUxFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVOeVF5eEZRVUZGTEZkQlEwb3NaVUZCWlR0aFFVTm1PMWxCUTBRc1dVRkJXU3hGUVVGRk8yZENRVU5pTEU5QlFVOHNSVUZCUlN4cFFrRkJhVUk3WjBKQlF6RkNMRXRCUVVzc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1YwRkJWeXhsUVVGbE8yRkJRMnhGTzFsQlEwUXNWMEZCVnl4RlFVRkZPMmRDUVVOYUxFOUJRVThzUlVGQlJTeHhRa0ZCY1VJN1owSkJRemxDTEV0QlFVc3NSVUZCUlN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNWMEZCVnl4bFFVRmxPMkZCUTJ4Rk8xbEJRMFFzVjBGQlZ5eEZRVUZGTzJkQ1FVTmFMRTlCUVU4c1JVRkJSU3h4UWtGQmNVSTdaMEpCUXpsQ0xFdEJRVXNzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzVjBGQlZ5eGxRVUZsTzJGQlEyeEZPMWxCUTBRc1VVRkJVU3hGUVVGRk8yZENRVU5VTEU5QlFVOHNSVUZCUlN4clFrRkJhMEk3WjBKQlF6TkNMRXRCUVVzc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1YwRkJWeXhsUVVGbE8yRkJRMnhGTzFOQlEwUXNRMEZCUXp0UlFVTkdMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzFsQlF6ZERMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0blFrRkRiRUlzV1VGQldTeERRVUZETEdGQlFXRXNjMFZCUVdNc1EwRkJRenRuUWtGRGVrTXNXVUZCV1N4SFFVRkhMRVZCUVVVc1IwRkJSeXhaUVVGWkxFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXp0aFFVTjZRenRUUVVORU8wdEJRMFE3VTBGQlRUdFJRVU5PTEZGQlFWRXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSVHRaUVVNeFFpeExRVUZMTEhORFFVRnpReXhEUVVGRExFTkJRVU03WjBKQlF6VkRMRTFCUVUwc1QwRkJUeXhIUVVWVU8yOUNRVU5JTEVkQlFVY3NSVUZCUlR0M1FrRkRTaXhQUVVGUExFVkJRVVVzVjBGQlZ6dHhRa0ZEY0VJN2IwSkJRMFFzVVVGQlVTeEZRVUZGTzNkQ1FVTlVMRTlCUVU4c1JVRkJSU3hyUWtGQmEwSTdkMEpCUXpOQ0xFdEJRVXNzUlVGQlJTeEhRVU5PTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUTNKRUxFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVOeVF5eEZRVUZGTEZkQlEwb3NVVUZCVVR0eFFrRkRVanR2UWtGRFJDeG5Ra0ZCWjBJc1JVRkJSVHQzUWtGRGFrSXNUMEZCVHl4RlFVRkZMR0ZCUVdFN2QwSkJRM1JDTEV0QlFVc3NSVUZCUlN4dlFrRkJiMEk3Y1VKQlF6TkNPMmxDUVVORUxFTkJRVU03WjBKQlEwWXNTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3YjBKQlF6ZERMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0M1FrRkRiRUlzV1VGQldTeERRVUZETEdGQlFXRXNiVVZCUVdFc1EwRkJRenQzUWtGRGVFTXNXVUZCV1N4SFFVRkhMRVZCUVVVc1IwRkJSeXhaUVVGWkxFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXp0eFFrRkRla003YVVKQlEwUTdaMEpCUlVRc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8yZENRVU53UXl4TlFVRk5MRTlCUVU4c1IwRkZWRHR2UWtGRFNDeEhRVUZITEVWQlFVVTdkMEpCUTBvc1QwRkJUeXhGUVVGRkxGZEJRVmM3Y1VKQlEzQkNPMjlDUVVORUxGRkJRVkVzUlVGQlJUdDNRa0ZEVkN4UFFVRlBMRVZCUVVVc2EwSkJRV3RDTzNkQ1FVTXpRaXhMUVVGTExFVkJRVVVzUjBGRFRpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxGZEJReTlDTEcxQ1FVRnRRanR4UWtGRGJrSTdiMEpCUTBRc2FVSkJRV2xDTEVWQlFVVTdkMEpCUTJ4Q0xFOUJRVThzUlVGQlJTeGhRVUZoTzNkQ1FVTjBRaXhMUVVGTExFVkJRVVVzSzBKQlFTdENPM0ZDUVVOMFF6dHZRa0ZEUkN4aFFVRmhMRVZCUVVVN2QwSkJRMlFzVDBGQlR5eEZRVUZGTEhOQ1FVRnpRanQzUWtGREwwSXNTMEZCU3l4RlFVRkZMRWRCUTA0c1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4WFFVTXZRaXh0UWtGQmJVSTdjVUpCUTI1Q08ybENRVU5FTEVOQlFVTTdaMEpCUTBZc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdiMEpCUXpkRExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHQzUWtGRGJFSXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2JVVkJRV3RDTEVOQlFVTTdkMEpCUXpkRExGbEJRVmtzUjBGQlJ5eEZRVUZGTEVkQlFVY3NXVUZCV1N4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU03Y1VKQlEzcERPMmxDUVVORU8yZENRVVZFTEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0blFrRkRlRUlzVFVGQlRTeFBRVUZQTEVkQlJWUTdiMEpCUTBnc1IwRkJSeXhGUVVGRk8zZENRVU5LTEU5QlFVOHNSVUZCUlN4WFFVRlhPM0ZDUVVOd1FqdHZRa0ZEUkN4UlFVRlJMRVZCUVVVN2QwSkJRMVFzVDBGQlR5eEZRVUZGTEd0Q1FVRnJRanQzUWtGRE0wSXNTMEZCU3l4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4WFFVRlhMR0ZCUVdFN2NVSkJRMmhGTzI5Q1FVTkVMRkZCUVZFc1JVRkJSVHQzUWtGRFZDeFBRVUZQTEVWQlFVVXNZVUZCWVR0M1FrRkRkRUlzUzBGQlN5eEZRVUZGTEdsQ1FVRnBRanR4UWtGRGVFSTdiMEpCUTBRc1ZVRkJWU3hGUVVGRk8zZENRVU5ZTEU5QlFVOHNSVUZCUlN4aFFVRmhPM2RDUVVOMFFpeExRVUZMTEVWQlFVVXNSMEZEVGl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVFpeDFSVUZCZFVVc1EwRkRka1VzUlVGQlJTeFhRVU5LTEdGQlFXRTdjVUpCUTJJN2IwSkJRMFFzVTBGQlV5eEZRVUZGTzNkQ1FVTldMRTlCUVU4c1JVRkJSU3huUWtGQlowSTdkMEpCUTNwQ0xFdEJRVXNzUlVGQlJTeFZRVUZWTzNGQ1FVTnFRanR2UWtGRFJDeG5Ra0ZCWjBJc1JVRkJSVHQzUWtGRGFrSXNUMEZCVHl4RlFVRkZMSGRDUVVGM1FqdDNRa0ZEYWtNc1MwRkJTeXhGUVVGRkxGVkJRVlU3Y1VKQlEycENPMjlDUVVORUxGTkJRVk1zUlVGQlJUdDNRa0ZEVml4UFFVRlBMRVZCUVVVc1lVRkJZVHQzUWtGRGRFSXNTMEZCU3l4RlFVRkZMR3RDUVVGclFqdHhRa0ZEZWtJN2IwSkJRMFFzVjBGQlZ5eEZRVUZGTzNkQ1FVTmFMRTlCUVU4c1JVRkJSU3hoUVVGaE8zZENRVU4wUWl4TFFVRkxMRVZCUVVVc2IwSkJRVzlDTzNGQ1FVTXpRanRwUWtGRFJDeERRVUZETzJkQ1FVTkdMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzI5Q1FVTTNReXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN2QwSkJRMnhDTEZsQlFWa3NRMEZCUXl4aFFVRmhMRzFGUVVGclFpeERRVUZETzNkQ1FVTTNReXhaUVVGWkxFZEJRVWNzUlVGQlJTeEhRVUZITEZsQlFWa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRE8zRkNRVU42UXp0cFFrRkRSRHRuUWtGRlJDeE5RVUZOTzJGQlEwNDdXVUZEUkR0blFrRkRReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMSEZDUVVGeFFpeERRVUZETEVWQlFVVTdiMEpCUTNSRUxFMUJRVTBzVDBGQlR5eEhRVVZVTzNkQ1FVTklMRWRCUVVjc1JVRkJSVHMwUWtGRFNpeFBRVUZQTEVWQlFVVXNWMEZCVnp0NVFrRkRjRUk3ZDBKQlEwUXNaVUZCWlN4RlFVRkZPelJDUVVOb1FpeFBRVUZQTEVWQlFVVXNZVUZCWVRzMFFrRkRkRUlzUzBGQlN5eEZRVUZGTEc5Q1FVRnZRanQ1UWtGRE0wSTdkMEpCUTBRc1lVRkJZU3hGUVVGRk96UkNRVU5rTEU5QlFVOHNSVUZCUlN4elFrRkJjMEk3TkVKQlF5OUNMRXRCUVVzc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1YwRkJWeXhSUVVGUk8zbENRVU12UkR0M1FrRkRSQ3haUVVGWkxFVkJRVVU3TkVKQlEySXNUMEZCVHl4RlFVRkZMSE5DUVVGelFqczBRa0ZETDBJc1MwRkJTeXhGUVVGRkxFZEJRMDRzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZEZEVRc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUXpsQ0xFVkJRVVVzVjBGRFNpeFJRVUZSTzNsQ1FVTlNPM2RDUVVORUxGRkJRVkVzUlVGQlJUczBRa0ZEVkN4UFFVRlBMRVZCUVVVc2EwSkJRV3RDT3pSQ1FVTXpRaXhMUVVGTExFVkJRVVVzUjBGRFRpeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVTnlSQ3hEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkRja01zUlVGQlJTeFhRVU5LTEZGQlFWRTdlVUpCUTFJN2QwSkJRMFFzZVVKQlFYbENMRVZCUVVVN05FSkJRekZDTEU5QlFVOHNSVUZCUlN4aFFVRmhPelJDUVVOMFFpeExRVUZMTEVWQlFVVXNORUpCUVRSQ08zbENRVU51UXp0M1FrRkRSQ3haUVVGWkxFVkJRVVU3TkVKQlEySXNUMEZCVHl4RlFVRkZMR0ZCUVdFN05FSkJRM1JDTEV0QlFVc3NSVUZCUlN4MVFrRkJkVUk3ZVVKQlF6bENPM2RDUVVORUxGTkJRVk1zUlVGQlJUczBRa0ZEVml4UFFVRlBMRVZCUVVVc1owSkJRV2RDT3pSQ1FVTjZRaXhMUVVGTExFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxGZEJRVmNzVVVGQlVUdDVRa0ZETTBRN2QwSkJRMFFzVjBGQlZ5eEZRVUZGT3pSQ1FVTmFMRTlCUVU4c1JVRkJSU3h2UWtGQmIwSTdORUpCUXpkQ0xFdEJRVXNzUlVGQlJTeEhRVU5PTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUTNSRUxFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVNNVFpeEZRVUZGTEZkQlEwb3NVVUZCVVR0NVFrRkRVanQzUWtGRFJDeFRRVUZUTEVWQlFVVTdORUpCUTFZc1QwRkJUeXhGUVVGRkxITkNRVUZ6UWpzMFFrRkRMMElzUzBGQlN5eEZRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeFhRVUZYTEZGQlFWRTdlVUpCUXpORU8zZENRVU5FTEU5QlFVOHNSVUZCUlRzMFFrRkRVaXhQUVVGUExFVkJRVVVzWlVGQlpUczBRa0ZEZUVJc1MwRkJTeXhGUVVGRkxGbEJRVms3ZVVKQlEyNUNPM2RDUVVORUxHbENRVUZwUWl4RlFVRkZPelJDUVVOc1FpeFBRVUZQTEVWQlFVVXNaVUZCWlRzMFFrRkRlRUlzUzBGQlN5eEZRVUZGTEhOQ1FVRnpRanQ1UWtGRE4wSTdkMEpCUTBRc1YwRkJWeXhGUVVGRk96UkNRVU5hTEU5QlFVOHNSVUZCUlN4bFFVRmxPelJDUVVONFFpeExRVUZMTEVWQlFVVXNaVUZCWlR0NVFrRkRkRUk3ZDBKQlEwUXNWMEZCVnl4RlFVRkZPelJDUVVOYUxFOUJRVThzUlVGQlJTeHZRa0ZCYjBJN05FSkJRemRDTEV0QlFVc3NSVUZCUlN4NVFrRkJlVUk3ZVVKQlEyaERPM0ZDUVVORUxFTkJRVU03YjBKQlEwWXNTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3ZDBKQlF6ZERMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlRzMFFrRkRiRUlzV1VGQldTeERRVUZETEdGQlFXRXNiVVZCUVdFc1EwRkJRenMwUWtGRGVFTXNXVUZCV1N4SFFVRkhMRVZCUVVVc1IwRkJSeXhaUVVGWkxFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXp0NVFrRkRla003Y1VKQlEwUTdhVUpCUTBRN2NVSkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RlFVRkZPMjlDUVVNelJDeE5RVUZOTEU5QlFVOHNSMEZGVkR0M1FrRkRTQ3hIUVVGSExFVkJRVVU3TkVKQlEwb3NUMEZCVHl4RlFVRkZMRmRCUVZjN2VVSkJRM0JDTzNkQ1FVTkVMRkZCUVZFc1JVRkJSVHMwUWtGRFZDeFBRVUZQTEVWQlFVVXNhMEpCUVd0Q096UkNRVU16UWl4TFFVRkxMRVZCUVVVc1IwRkRUaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVU55UkN4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZEY2tNc1JVRkJSU3hYUVVOS0xGRkJRVkU3ZVVKQlExSTdkMEpCUTBRc2IwSkJRVzlDTEVWQlFVVTdORUpCUTNKQ0xFOUJRVThzUlVGQlJTeGpRVUZqT3pSQ1FVTjJRaXhMUVVGTExFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxGZEJRVmNzVVVGQlVUdDVRa0ZETTBRN2NVSkJRMFFzUTBGQlF6dHZRa0ZEUml4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdDNRa0ZETjBNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPelJDUVVOc1FpeFpRVUZaTEVOQlFVTXNZVUZCWVN4dFJVRkJZU3hEUVVGRE96UkNRVU40UXl4WlFVRlpMRWRCUVVjc1JVRkJSU3hIUVVGSExGbEJRVmtzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRPM2xDUVVONlF6dHhRa0ZEUkR0cFFrRkRSRHRUUVVOR08wdEJRMFE3U1VGRFJDeEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXpzN1VVRkRlRVFzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpkQ0xFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJ0aW1lIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwYXRoIiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsImhvc3RuYW1lIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiaW5jbHVkZXMiLCJzdGF0aWNzIiwiZGV0YWlscyIsInN0YXRlIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmluZCIsImMiLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJrIiwidiIsIk9iamVjdCIsImVudHJpZXMiLCJtYXRjaCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;