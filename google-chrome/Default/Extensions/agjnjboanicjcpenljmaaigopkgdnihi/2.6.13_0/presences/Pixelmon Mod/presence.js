var __webpack_exports__={};const presence=new Presence({clientId:"976435781486911509"}),browsingTimestamp=Math.floor(Date.now()/1e3),timestampCheck={hash:"",timestamp:Math.floor(Date.now()/1e3)};function fullURL(e,t){return"https://cdn.rcd.gg/PreMiD/websites/P/Pixelmon%20Mod/assets/logo.png"===t?"https://cdn.rcd.gg/PreMiD/websites/P/Pixelmon%20Mod/assets/logo.png":t&&e?`https://${e}${t}`:void 0}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Pixelmon%20Mod/assets/logo.png",startTimestamp:browsingTimestamp},t=await presence.getSetting("image"),{pathname:s,hostname:a,href:n}=document.location,i=document.querySelector('[class="side-segment"]')??document.querySelector("#page-body > main > div > div.col-md-9 > div.side-segment > h3"),o=document.querySelector("#content > div.contentHeader")?.firstElementChild,c=document.querySelector("#searchInput"),r=n;switch(timestampCheck.hash!==r&&(timestampCheck.hash=r,timestampCheck.timestamp=Math.floor(Date.now()/1e3)),!0){case!!c?.value:e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.details="Searching for",e.state=c.value;break;case!!document.querySelector("#firstHeading-h2csdq87lb"):e.details="Search results for",e.state=document.querySelector("#ooui-php-1").textContent;break;case document.querySelector("#siteSub")?.textContent.includes("Wiki"):if(o.className.includes("firstHeading")){e.state=o.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.details="Reading wiki page";const s=document.evaluate("//b[contains(text(),'#')]",document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null)?.singleNodeValue?.textContent,i=s?`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${0===Number(s?.split("#")[1].at(0))?s?.split("#")[1].slice(1):s?.split("#")[1]}.png`:fullURL(a,document.querySelector('[class="image"] > img')?.getAttribute("src")??"https://cdn.rcd.gg/PreMiD/websites/P/Pixelmon%20Mod/assets/logo.png");e.largeImageKey=0===t?i:"https://cdn.rcd.gg/PreMiD/websites/P/Pixelmon%20Mod/assets/logo.png",e.smallImageKey=0===t||2===t?"https://cdn.rcd.gg/PreMiD/resources/reading.png":i??"https://cdn.rcd.gg/PreMiD/resources/reading.png",e.buttons=[{label:"Read Wiki Page",url:n}]}else e.details="Reading the wiki";break;case s.includes("index.php"):e.details="Viewing the forum";break;case s.includes("viewforum.php"):e.details=`${i.textContent} Forum`;break;case s.includes("viewtopic.php"):e.details="Viewing post",e.state=i.textContent,e.buttons=[{label:"Read Post",url:n}];break;case s.includes("team.php"):e.details=`Pixelmon's ${document.querySelector("li[class='team-nav-active']").textContent} Team`;break;case s.includes("ucp.php?mode="):e.details=i.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;case s.includes("downloads.php"):e.details="Viewing all available downloads";break;case s.includes("donation.php"):e.details="Viewing the donations page";break;case s.includes("tracker.php"):e.details="Bugs"===i?.textContent?"Viewing known bugs":i.textContent,e.state=document.querySelectorAll('[class="side-segment"]')?.[1]?.textContent??"",e.buttons=[{label:"View Bug Report",url:n}];break;case!!document.querySelector("#page-body > main > div > div.col-sm-8 > div:nth-child(2)"):e.details="Viewing the homepage"}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsa0NBQ3ZCLE1BRUosS0FBS1osRUFBU2UsU0FBUyxnQkFDbkJwQixFQUFhaUIsUUFBVSw2QkFDdkIsTUFFSixLQUFLWixFQUFTZSxTQUFTLGVBQ25CcEIsRUFBYWlCLFFBQ2MsU0FBdkJQLEdBQU9TLFlBQ0QscUJBQ0FULEVBQU1TLFlBQ2hCbkIsRUFBYWtCLE1BQ1RWLFNBQVMyQixpQkFBaUIsNEJBQTRCLElBQUloQixhQUN0RCxHQUNSbkIsRUFBYWlDLFFBQVUsQ0FBQyxDQUFFQyxNQUFPLGtCQUFtQnJDLElBQUtVLElBQ3pELE1BRUosTUFBT0MsU0FBU0csY0FBYyw2REFFdEJYLEVBQWFpQixRQUFVLHVCQUkvQmpCLEVBQWFpQixRQUNiakMsU0FBU29ELFlBQVlwQyxHQUVyQmhCLFNBQVNvRCxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjk3NjQzNTc4MTQ4NjkxMTUwOVwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5jb25zdCB0aW1lc3RhbXBDaGVjayA9IHtcbiAgICBoYXNoOiBcIlwiLFxuICAgIHRpbWVzdGFtcDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG59O1xuZnVuY3Rpb24gZnVsbFVSTChob3N0LCB1cmwpIHtcbiAgICBpZiAodXJsID09PSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUC9QaXhlbG1vbiUyME1vZC9hc3NldHMvbG9nby5wbmdcIilcbiAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9QL1BpeGVsbW9uJTIwTW9kL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgIGVsc2UgaWYgKHVybCAmJiBob3N0KVxuICAgICAgICByZXR1cm4gYGh0dHBzOi8vJHtob3N0fSR7dXJsfWA7XG59XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1AvUGl4ZWxtb24lMjBNb2QvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCBpbWFnZSA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJpbWFnZVwiKSwgeyBwYXRobmFtZSwgaG9zdG5hbWUsIGhyZWYgfSA9IGRvY3VtZW50LmxvY2F0aW9uLCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cInNpZGUtc2VnbWVudFwiXScpID8/XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1ib2R5ID4gbWFpbiA+IGRpdiA+IGRpdi5jb2wtbWQtOSA+IGRpdi5zaWRlLXNlZ21lbnQgPiBoM1wiKSwgZmlyc3RDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IGRpdi5jb250ZW50SGVhZGVyXCIpPy5maXJzdEVsZW1lbnRDaGlsZCwgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hJbnB1dFwiKSwgaGFzaCA9IGhyZWY7XG4gICAgaWYgKHRpbWVzdGFtcENoZWNrLmhhc2ggIT09IGhhc2gpIHtcbiAgICAgICAgdGltZXN0YW1wQ2hlY2suaGFzaCA9IGhhc2g7XG4gICAgICAgIHRpbWVzdGFtcENoZWNrLnRpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSAhIXNlYXJjaD8udmFsdWU6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIGZvclwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc2VhcmNoLnZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3RIZWFkaW5nLWgyY3NkcTg3bGJcIik6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2ggcmVzdWx0cyBmb3JcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb291aS1waHAtMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlU3ViXCIpPy50ZXh0Q29udGVudC5pbmNsdWRlcyhcIldpa2lcIik6IHtcbiAgICAgICAgICAgIGlmIChmaXJzdENoaWxkLmNsYXNzTmFtZS5pbmNsdWRlcyhcImZpcnN0SGVhZGluZ1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgd2lraSBwYWdlXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdFbGVtZW50ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCIvL2JbY29udGFpbnModGV4dCgpLCcjJyldXCIsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCk/LnNpbmdsZU5vZGVWYWx1ZT8udGV4dENvbnRlbnQsIGltZyA9IG1hdGNoaW5nRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICA/IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vb3RoZXIvb2ZmaWNpYWwtYXJ0d29yay8ke051bWJlcihtYXRjaGluZ0VsZW1lbnQ/LnNwbGl0KFwiI1wiKVsxXS5hdCgwKSkgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbWF0Y2hpbmdFbGVtZW50Py5zcGxpdChcIiNcIilbMV0uc2xpY2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbWF0Y2hpbmdFbGVtZW50Py5zcGxpdChcIiNcIilbMV19LnBuZ2BcbiAgICAgICAgICAgICAgICAgICAgOiBmdWxsVVJMKGhvc3RuYW1lLCBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cImltYWdlXCJdID4gaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKFwic3JjXCIpID8/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9QL1BpeGVsbW9uJTIwTW9kL2Fzc2V0cy9sb2dvLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGltYWdlID09PSAwID8gaW1nIDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1AvUGl4ZWxtb24lMjBNb2QvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgICAgICBpbWFnZSA9PT0gMCB8fCBpbWFnZSA9PT0gMiA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIiA6IGltZyA/PyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJSZWFkIFdpa2kgUGFnZVwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIHdpa2lcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuaW5jbHVkZXMoXCJpbmRleC5waHBcIik6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBmb3J1bVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5pbmNsdWRlcyhcInZpZXdmb3J1bS5waHBcIik6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7dGl0bGUudGV4dENvbnRlbnR9IEZvcnVtYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuaW5jbHVkZXMoXCJ2aWV3dG9waWMucGhwXCIpOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBwb3N0XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiUmVhZCBQb3N0XCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuaW5jbHVkZXMoXCJ0ZWFtLnBocFwiKToge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgUGl4ZWxtb24ncyAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaVtjbGFzcz0ndGVhbS1uYXYtYWN0aXZlJ11cIikudGV4dENvbnRlbnR9IFRlYW1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5pbmNsdWRlcyhcInVjcC5waHA/bW9kZT1cIik6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuaW5jbHVkZXMoXCJkb3dubG9hZHMucGhwXCIpOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhbGwgYXZhaWxhYmxlIGRvd25sb2Fkc1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5pbmNsdWRlcyhcImRvbmF0aW9uLnBocFwiKToge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIGRvbmF0aW9ucyBwYWdlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHBhdGhuYW1lLmluY2x1ZGVzKFwidHJhY2tlci5waHBcIik6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID1cbiAgICAgICAgICAgICAgICB0aXRsZT8udGV4dENvbnRlbnQgPT09IFwiQnVnc1wiXG4gICAgICAgICAgICAgICAgICAgID8gXCJWaWV3aW5nIGtub3duIGJ1Z3NcIlxuICAgICAgICAgICAgICAgICAgICA6IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3M9XCJzaWRlLXNlZ21lbnRcIl0nKT8uWzFdPy50ZXh0Q29udGVudCA/P1xuICAgICAgICAgICAgICAgICAgICBcIlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IEJ1ZyBSZXBvcnRcIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1ib2R5ID4gbWFpbiA+IGRpdiA+IGRpdi5jb2wtc20tOCA+IGRpdjpudGgtY2hpbGQoMilcIik6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIGhvbWVwYWdlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVdHVSQ3hOUVVGTkxHTkJRV01zUjBGSGFFSTdTVUZEU0N4SlFVRkpMRVZCUVVVc1JVRkJSVHRKUVVOU0xGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRMEZEZUVNc1EwRkJRenRCUVVWR0xGTkJRVk1zVDBGQlR5eERRVUZETEVsQlFWa3NSVUZCUlN4SFFVRlhPMGxCUTNwRExFbEJRVWtzUjBGQlJ5d3dSVUZCWjBJN1VVRkJSU3cyUlVGQmJVSTdVMEZEZGtNc1NVRkJTU3hIUVVGSExFbEJRVWtzU1VGQlNUdFJRVUZGTEU5QlFVOHNWMEZCVnl4SlFVRkpMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRFUXNRMEZCUXp0QlFVVkVMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUTNCRExFMUJRVTBzV1VGQldTeEhRVUZwUWp0UlFVTnFReXhoUVVGaExIVkZRVUZoTzFGQlF6RkNMR05CUVdNc1JVRkJSU3hwUWtGQmFVSTdTMEZEYWtNc1JVRkRSQ3hMUVVGTExFZEJRVWNzVFVGQlRTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlRMRTlCUVU4c1EwRkJReXhGUVVOc1JDeEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZEYUVRc1MwRkJTeXhIUVVOS0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU03VVVGRGFFUXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRja0lzWjBWQlFXZEZMRU5CUTJoRkxFVkJRMFlzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTJ4RExEaENRVUU0UWl4RFFVTTVRaXhGUVVGRkxHbENRVUZwUWl4RlFVTndRaXhOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCYlVJc1kwRkJZeXhEUVVGRExFVkJRMnBGTEVsQlFVa3NSMEZCVnl4SlFVRkpMRU5CUVVNN1NVRkRja0lzU1VGQlNTeGpRVUZqTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1JVRkJSVHRSUVVOcVF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVNelFpeGpRVUZqTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRM3BFTzBsQlEwUXNVVUZCVVN4SlFVRkpMRVZCUVVVN1VVRkRZaXhMUVVGTExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRja0lzV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03V1VGRE0wTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU03V1VGRGRrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzFsQlEyeERMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpGRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03V1VGRE5VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVOMlJTeE5RVUZOTzFOQlEwNDdVVUZEUkN4TFFVRkxMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkZMRWxCUVVrc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVN1owSkJRMnhFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF6dG5Ra0ZETlVNc1dVRkJXU3hEUVVGRExHRkJRV0VzYjBSQlFXbENMRU5CUVVNN1owSkJRelZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTTdaMEpCUXpORExFMUJRVTBzWlVGQlpTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUTNaRExESkNRVUV5UWl4RlFVTXpRaXhSUVVGUkxFVkJRMUlzU1VGQlNTeEZRVU5LTEZkQlFWY3NRMEZCUXl4MVFrRkJkVUlzUlVGRGJrTXNTVUZCU1N4RFFVTktMRVZCUVVVc1pVRkJaU3hGUVVGRkxGZEJRVmNzUlVGREwwSXNSMEZCUnl4SFFVRkhMR1ZCUVdVN2IwSkJRM0JDTEVOQlFVTXNRMEZCUXl4dFIwRkRRU3hOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRE8zZENRVU5xUkN4RFFVRkRMRU5CUVVNc1pVRkJaU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzNkQ1FVTjZReXhEUVVGRExFTkJRVU1zWlVGQlpTeEZRVUZGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRMmhETEUxQlFVMDdiMEpCUTFJc1EwRkJReXhEUVVGRExFOUJRVThzUTBGRFVDeFJRVUZSTEVWQlExSXNVVUZCVVR0NVFrRkRUaXhoUVVGaExFTkJRVU1zZFVKQlFYVkNMRU5CUVVNN2QwSkJRM1pETEVWQlFVVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXg1UlVGQlpTeERRVU53UXl4RFFVRkRPMmRDUVVOT0xGbEJRVmtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNjMFZCUVZrc1EwRkJRenRuUWtGRE4wUXNXVUZCV1N4RFFVRkRMR0ZCUVdFN2IwSkJRM3BDTEV0QlFVc3NTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEcxRVFVRm5RaXhEUVVGRExFTkJRVU1zUjBGQlJ5eHhSRUZCYTBJc1EwRkJRenRuUWtGRmNrVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTJoRk96dG5Ra0ZCVFN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMWxCUTJwRUxFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYlVKQlFXMUNMRU5CUVVNN1dVRkRNME1zVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZUVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4WFFVRlhMRkZCUVZFc1EwRkJRenRaUVVOd1JDeE5RVUZOTzFOQlEwNDdVVUZEUkN4TFFVRkxMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjRReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdOQlFXTXNRMEZCUXp0WlFVTjBReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRka01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxGZEJRVmNzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNelJDeE5RVUZOTzFOQlEwNDdVVUZEUkN4TFFVRkxMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdOQlEzUkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1EwRkJReXhYUVVOMlJDeFBRVUZQTEVOQlFVTTdXVUZEVWl4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRGVrTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdXVUZETlVNc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGVFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUTBGQmFVTXNRMEZCUXp0WlFVTjZSQ3hOUVVGTk8xTkJRMDQ3VVVGRFJDeExRVUZMTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEUkNRVUUwUWl4RFFVRkRPMWxCUTNCRUxFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkRMRmxCUVZrc1EwRkJReXhQUVVGUE8yZENRVU51UWl4TFFVRkxMRVZCUVVVc1YwRkJWeXhMUVVGTExFMUJRVTA3YjBKQlF6VkNMRU5CUVVNc1EwRkJReXh2UWtGQmIwSTdiMEpCUTNSQ0xFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUTNSQ0xGbEJRVmtzUTBGQlF5eExRVUZMTzJkQ1FVTnFRaXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGZEJRVmM3YjBKQlEzSkZMRVZCUVVVc1EwRkJRenRaUVVOS0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hwUWtGQmFVSXNSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5xUlN4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTFRaXd5UkVGQk1rUXNRMEZETTBRN1dVRkJSVHRuUWtGRFJpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSE5DUVVGelFpeERRVUZETzJkQ1FVTTVReXhOUVVGTk8yRkJRMDQ3UzBGRFJEdEpRVVZFTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTlCUVU4N1VVRkJSU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPenRSUVVONFJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkROMElzUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInRpbWVzdGFtcENoZWNrIiwiaGFzaCIsInRpbWVzdGFtcCIsImZ1bGxVUkwiLCJob3N0IiwidXJsIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImltYWdlIiwiZ2V0U2V0dGluZyIsInBhdGhuYW1lIiwiaG9zdG5hbWUiLCJocmVmIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImZpcnN0Q2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInNlYXJjaCIsInZhbHVlIiwic21hbGxJbWFnZUtleSIsImRldGFpbHMiLCJzdGF0ZSIsInRleHRDb250ZW50IiwiaW5jbHVkZXMiLCJjbGFzc05hbWUiLCJtYXRjaGluZ0VsZW1lbnQiLCJldmFsdWF0ZSIsIlhQYXRoUmVzdWx0IiwiRklSU1RfT1JERVJFRF9OT0RFX1RZUEUiLCJzaW5nbGVOb2RlVmFsdWUiLCJpbWciLCJOdW1iZXIiLCJzcGxpdCIsImF0Iiwic2xpY2UiLCJnZXRBdHRyaWJ1dGUiLCJidXR0b25zIiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;