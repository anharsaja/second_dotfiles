var __webpack_exports__={};const presence=new Presence({clientId:"1005501034191409153"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e=document.title.replace(" - Los Angeles Times",""),[t,a,s,n]=await Promise.all([presence.getSetting("privacy"),presence.getSetting("buttons"),presence.getSetting("articleAuthor"),presence.getSetting("moreDetails")]),{pathname:r,href:i,search:o}=window.location,l=r.split("/"),c={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/L/Los%20Angeles%20Times/assets/logo.jpg",startTimestamp:browsingTimestamp};if(a&&!t&&(c.buttons=[{label:"View Page",url:i}]),l[1])if(r.includes("/topic/"))c.details="Viewing a Topic",t||(c.state=e);else if(r.includes("/search"))c.details=t?"Searching":"Searching for",t||(c.state=new URLSearchParams(o).get("q")),a&&!t&&(c.buttons=[{label:"Show Search Results",url:i}]);else if("people"===l[1]&&l[2]){const t={name:document.querySelector("h1.author-name")?.textContent??e??"Unknown",title:document.querySelector("p.author-title")?.textContent,avatar:document.querySelector("div.author-avatar > picture > img")};c.details="Viewing an Author",c.state=`${t.name}${t.title?` (${t.title})`:""}`,t.avatar&&(c.smallImageKey=await getShortURL(t.avatar.src),c.smallImageText=t.name)}else if(hasDatePath(r)&&l[4]){const r={img:document.querySelector("div.author-avatar a > img"),name:document.querySelector("div.author-avatar a")?.ariaLabel.trim()},o=document.querySelector("div.authors > div.author-name"),l=document.querySelector("h1.headline")?.textContent??e;c.details=n?l:"Reading an Article",t||(c.state=n?`${o?.textContent.trim()??`By ${r.name}`}, ${document.querySelector("time span")?.textContent}`:l),a&&!t&&(c.buttons=[{label:"Read Article",url:i}]),s&&!t&&r.name&&(c.smallImageKey=await getShortURL(r.img?.src),c.smallImageText=o?.textContent.trim()??`By ${r.name}`)}else if("projects"===l[1]&&l[2])c.details="Viewing a Project",t||(c.state=e,a&&(c.buttons=[{label:"View Project",url:i}]));else switch(l[1]){case"bestcovery":{const e=["auto","home","lifestyle","electronics","tech","health-beauty","fashion","sports","music","kids-babies","streaming"],a=document.title.replace(" - Bestcovery","");c.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/L/Los%20Angeles%20Times/assets/0.png",c.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/L/Los%20Angeles%20Times/assets/1.png",c.smallImageText="Bestcovery powered by L.A. Times",e.includes(l[2])?(c.details="Viewing a Category",c.buttons[0].label="View Category",t||(c.state=a)):(c.details="Reading a Review",c.state=a.replace(" | Review by Bestcovery",""),c.buttons[0].label="Read Article");break}case"coupon-codes":c.details="Viewing Coupon Codes";break;case"games":c.details="Viewing Games",!t&&l[2]&&(c.details="Playing a Game",c.state=document.querySelector("h2.subhead")?.textContent,c.buttons[0].label="View Game");break;default:l[1]&&(c.details="Viewing a Category",t||(c.state=e))}else c.details="Viewing Home Page",delete c.buttons;c.state||delete c.state,c.details?presence.setActivity(c):presence.setActivity()}));const shortenedURLs={};async function getShortURL(e){if(!e||e.length<256)return e;if(shortenedURLs[e])return shortenedURLs[e];try{const t=await(await fetch(`https://pd.premid.app/create/${e}`)).text();return shortenedURLs[e]=t,t}catch(t){return presence.error(t),e}}function hasDatePath(e){return/[0-9]{4}-[0-9]{2}-[0-9]{2}/g.test(e)}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1ELEdBQ1I1QixDQUNYLENBQ0osQ0FDQSxTQUFTZSxZQUFZM0IsR0FDakIsTUFBTyw4QkFBOEIwQyxLQUFLMUMsRUFDOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiMTAwNTUwMTAzNDE5MTQwOTE1M1wiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQudGl0bGUucmVwbGFjZShcIiAtIExvcyBBbmdlbGVzIFRpbWVzXCIsIFwiXCIpLCBbcHJpdmFjeU1vZGUsIHNob3dCdXR0b25zLCBzaG93QXJ0aWNsZUF1dGhvciwgc2hvd01vcmVEZXRhaWxzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYXJ0aWNsZUF1dGhvclwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcIm1vcmVEZXRhaWxzXCIpLFxuICAgIF0pLCB7IHBhdGhuYW1lLCBocmVmLCBzZWFyY2ggfSA9IHdpbmRvdy5sb2NhdGlvbiwgcGF0aCA9IHBhdGhuYW1lLnNwbGl0KFwiL1wiKSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTC9Mb3MlMjBBbmdlbGVzJTIwVGltZXMvYXNzZXRzL2xvZ28uanBnXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9O1xuICAgIGlmIChzaG93QnV0dG9ucyAmJiAhcHJpdmFjeU1vZGUpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBQYWdlXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgaWYgKCFwYXRoWzFdKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEhvbWUgUGFnZVwiO1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3RvcGljL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIFRvcGljXCI7XG4gICAgICAgIGlmICghcHJpdmFjeU1vZGUpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvc2VhcmNoXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcHJpdmFjeU1vZGUgPyBcIlNlYXJjaGluZ1wiIDogXCJTZWFyY2hpbmcgZm9yXCI7XG4gICAgICAgIGlmICghcHJpdmFjeU1vZGUpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCkuZ2V0KFwicVwiKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b25zICYmICFwcml2YWN5TW9kZSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaG93IFNlYXJjaCBSZXN1bHRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoWzFdID09PSBcInBlb3BsZVwiICYmIHBhdGhbMl0pIHtcbiAgICAgICAgY29uc3QgYXV0aG9yID0ge1xuICAgICAgICAgICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxLmF1dGhvci1uYW1lXCIpPy50ZXh0Q29udGVudCA/P1xuICAgICAgICAgICAgICAgIHRpdGxlID8/XG4gICAgICAgICAgICAgICAgXCJVbmtub3duXCIsXG4gICAgICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInAuYXV0aG9yLXRpdGxlXCIpPy50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIGF2YXRhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5hdXRob3ItYXZhdGFyID4gcGljdHVyZSA+IGltZ1wiKSxcbiAgICAgICAgfTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYW4gQXV0aG9yXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2F1dGhvci5uYW1lfSR7YXV0aG9yLnRpdGxlID8gYCAoJHthdXRob3IudGl0bGV9KWAgOiBcIlwifWA7XG4gICAgICAgIGlmIChhdXRob3IuYXZhdGFyKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IGF3YWl0IGdldFNob3J0VVJMKGF1dGhvci5hdmF0YXIuc3JjKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGF1dGhvci5uYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGhhc0RhdGVQYXRoKHBhdGhuYW1lKSAmJiBwYXRoWzRdKSB7XG4gICAgICAgIGNvbnN0IGF1dGhvciA9IHtcbiAgICAgICAgICAgIGltZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5hdXRob3ItYXZhdGFyIGEgPiBpbWdcIiksXG4gICAgICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmF1dGhvci1hdmF0YXIgYVwiKT8uYXJpYUxhYmVsLnRyaW0oKSxcbiAgICAgICAgfSwgYXV0aG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuYXV0aG9ycyA+IGRpdi5hdXRob3ItbmFtZVwiKSwgaGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEuaGVhZGxpbmVcIik/LnRleHRDb250ZW50ID8/IHRpdGxlO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9ICFzaG93TW9yZURldGFpbHMgPyBcIlJlYWRpbmcgYW4gQXJ0aWNsZVwiIDogaGVhZGxpbmU7XG4gICAgICAgIGlmICghcHJpdmFjeU1vZGUpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHNob3dNb3JlRGV0YWlsc1xuICAgICAgICAgICAgICAgID8gYCR7YXV0aG9ycz8udGV4dENvbnRlbnQudHJpbSgpID8/IGBCeSAke2F1dGhvci5uYW1lfWB9LCAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aW1lIHNwYW5cIik/LnRleHRDb250ZW50fWBcbiAgICAgICAgICAgICAgICA6IGhlYWRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93QnV0dG9ucyAmJiAhcHJpdmFjeU1vZGUpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUmVhZCBBcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0FydGljbGVBdXRob3IgJiYgIXByaXZhY3lNb2RlICYmIGF1dGhvci5uYW1lKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IGF3YWl0IGdldFNob3J0VVJMKGF1dGhvci5pbWc/LnNyYyk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPVxuICAgICAgICAgICAgICAgIGF1dGhvcnM/LnRleHRDb250ZW50LnRyaW0oKSA/PyBgQnkgJHthdXRob3IubmFtZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhbMV0gPT09IFwicHJvamVjdHNcIiAmJiBwYXRoWzJdKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgUHJvamVjdFwiO1xuICAgICAgICBpZiAoIXByaXZhY3lNb2RlKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZTtcbiAgICAgICAgICAgIGlmIChzaG93QnV0dG9ucykge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IFByb2plY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKHBhdGhbMV0pIHtcbiAgICAgICAgICAgIGNhc2UgXCJiZXN0Y292ZXJ5XCI6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW1xuICAgICAgICAgICAgICAgICAgICBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJob21lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGlmZXN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlY3Ryb25pY3NcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZWNoXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVhbHRoLWJlYXV0eVwiLFxuICAgICAgICAgICAgICAgICAgICBcImZhc2hpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJzcG9ydHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtdXNpY1wiLFxuICAgICAgICAgICAgICAgICAgICBcImtpZHMtYmFiaWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RyZWFtaW5nXCIsXG4gICAgICAgICAgICAgICAgXSwgdGl0bGUgPSBkb2N1bWVudC50aXRsZS5yZXBsYWNlKFwiIC0gQmVzdGNvdmVyeVwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9ML0xvcyUyMEFuZ2VsZXMlMjBUaW1lcy9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9ML0xvcyUyMEFuZ2VsZXMlMjBUaW1lcy9hc3NldHMvMS5wbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIkJlc3Rjb3ZlcnkgcG93ZXJlZCBieSBMLkEuIFRpbWVzXCI7XG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMuaW5jbHVkZXMocGF0aFsyXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBDYXRlZ29yeVwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9uc1swXS5sYWJlbCA9IFwiVmlldyBDYXRlZ29yeVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByaXZhY3lNb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBhIFJldmlld1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZS5yZXBsYWNlKFwiIHwgUmV2aWV3IGJ5IEJlc3Rjb3ZlcnlcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zWzBdLmxhYmVsID0gXCJSZWFkIEFydGljbGVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY291cG9uLWNvZGVzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBDb3Vwb24gQ29kZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJnYW1lc1wiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgR2FtZXNcIjtcbiAgICAgICAgICAgICAgICBpZiAoIXByaXZhY3lNb2RlICYmIHBhdGhbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBsYXlpbmcgYSBHYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDIuc3ViaGVhZFwiKT8udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zWzBdLmxhYmVsID0gXCJWaWV3IEdhbWVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChwYXRoWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgQ2F0ZWdvcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcml2YWN5TW9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXByZXNlbmNlRGF0YS5zdGF0ZSlcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICBpZiAoIXByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuY29uc3Qgc2hvcnRlbmVkVVJMcyA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0U2hvcnRVUkwodXJsKSB7XG4gICAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA8IDI1NilcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICBpZiAoc2hvcnRlbmVkVVJMc1t1cmxdKVxuICAgICAgICByZXR1cm4gc2hvcnRlbmVkVVJMc1t1cmxdO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBkVVJMID0gYXdhaXQgKGF3YWl0IGZldGNoKGBodHRwczovL3BkLnByZW1pZC5hcHAvY3JlYXRlLyR7dXJsfWApKS50ZXh0KCk7XG4gICAgICAgIHNob3J0ZW5lZFVSTHNbdXJsXSA9IHBkVVJMO1xuICAgICAgICByZXR1cm4gcGRVUkw7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcHJlc2VuY2UuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG59XG5mdW5jdGlvbiBoYXNEYXRlUGF0aChwYXRobmFtZSkge1xuICAgIHJldHVybiAvWzAtOV17NH0tWzAtOV17Mn0tWzAtOV17Mn0vZy50ZXN0KHBhdGhuYW1lKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNjVUpCUVhGQ08wTkJReTlDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFWRnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eHpRa0ZCYzBJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGREwwUXNRMEZCUXl4WFFVRlhMRVZCUVVVc1YwRkJWeXhGUVVGRkxHbENRVUZwUWl4RlFVRkZMR1ZCUVdVc1EwRkJReXhIUVVNM1JDeE5RVUZOTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRha0lzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4VFFVRlRMRU5CUVVNN1VVRkRka01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4VFFVRlRMRU5CUVVNN1VVRkRka01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4bFFVRmxMRU5CUVVNN1VVRkROME1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4aFFVRmhMRU5CUVVNN1MwRkRNME1zUTBGQlF5eEZRVU5JTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVTTFReXhKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkRNVUlzV1VGQldTeEhRVUZwUWp0UlFVTTFRaXhoUVVGaExEaEZRVUZoTzFGQlF6RkNMR05CUVdNc1JVRkJSU3hwUWtGQmFVSTdTMEZEYWtNc1EwRkJRenRKUVVWSUxFbEJRVWtzVjBGQlZ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMUZCUTJoRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdXVUZEZEVJN1owSkJRME1zUzBGQlN5eEZRVUZGTEZkQlFWYzdaMEpCUTJ4Q0xFZEJRVWNzUlVGQlJTeEpRVUZKTzJGQlExUTdVMEZEUkN4RFFVRkRPMHRCUTBZN1NVRkZSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUTJJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenRSUVVNelF5eFBRVUZQTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1MwRkROVUk3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3VVVGRGVFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0UlFVTjZReXhKUVVGSkxFTkJRVU1zVjBGQlZ6dFpRVUZGTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8wdEJRemRETzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzFGQlEzaERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExHVkJRV1VzUTBGQlF6dFJRVU51UlN4SlFVRkpMRU5CUVVNc1YwRkJWenRaUVVGRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4bFFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlRWRkxFbEJRVWtzVjBGQlZ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMWxCUTJoRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdaMEpCUTNSQ08yOUNRVU5ETEV0QlFVc3NSVUZCUlN4eFFrRkJjVUk3YjBKQlF6VkNMRWRCUVVjc1JVRkJSU3hKUVVGSk8ybENRVU5VTzJGQlEwUXNRMEZCUXp0VFFVTkdPMHRCUTBRN1UwRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzFGQlF6TkRMRTFCUVUwc1RVRkJUU3hIUVVGSE8xbEJRMlFzU1VGQlNTeEZRVU5JTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNSVUZCUlN4WFFVRlhPMmRDUVVOeVJDeExRVUZMTzJkQ1FVTk1MRk5CUVZNN1dVRkRWaXhMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEZRVUZGTEZkQlFWYzdXVUZETlVRc1RVRkJUU3hGUVVGRkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6ZENMRzFEUVVGdFF5eERRVU51UXp0VFFVTkVMRU5CUVVNN1VVRkZSaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8xRkJRek5ETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVU5zUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEUxQlFVMHNRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGRGRrTXNSVUZCUlN4RFFVRkRPMUZCUlVnc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEyeENMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzVFVGQlRTeFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5zUlN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdVMEZETVVNN1MwRkRSRHRUUVVGTkxFbEJRVWtzVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdFJRVU0xUXl4TlFVRk5MRTFCUVUwc1IwRkJSenRaUVVOaUxFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTXhRaXd5UWtGQk1rSXNRMEZETTBJN1dVRkRSQ3hKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVN1UwRkRja1VzUlVGRFJDeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXdyUWtGQkswSXNRMEZCUXl4RlFVTnFSU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJSU3hYUVVGWExFbEJRVWtzUzBGQlN5eERRVUZETzFGQlJYaEZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkZNVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTnFRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdWQlFXVTdaMEpCUTI1RExFTkJRVU1zUTBGQlF5eEhRVUZITEU5QlFVOHNSVUZCUlN4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzVFVGQlRTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUTNKRUxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1YwRkRja01zUlVGQlJUdG5Ra0ZEU2l4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRE8xTkJRMW83VVVGRlJDeEpRVUZKTEZkQlFWY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOb1F5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMmRDUVVOMFFqdHZRa0ZEUXl4TFFVRkxMRVZCUVVVc1kwRkJZenR2UWtGRGNrSXNSMEZCUnl4RlFVRkZMRWxCUVVrN2FVSkJRMVE3WVVGRFJDeERRVUZETzFOQlEwWTdVVUZGUkN4SlFVRkpMR2xDUVVGcFFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRGNrUXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhOUVVGTkxGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMmhGTEZsQlFWa3NRMEZCUXl4alFVRmpPMmRDUVVNeFFpeFBRVUZQTEVWQlFVVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFMUJRVTBzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMU5CUTNCRU8wdEJRMFE3VTBGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhWUVVGVkxFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUXpkRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03VVVGRE0wTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOcVFpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRaUVVVelFpeEpRVUZKTEZkQlFWY3NSVUZCUlR0blFrRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0dlFrRkRkRUk3ZDBKQlEwTXNTMEZCU3l4RlFVRkZMR05CUVdNN2QwSkJRM0pDTEVkQlFVY3NSVUZCUlN4SlFVRkpPM0ZDUVVOVU8ybENRVU5FTEVOQlFVTTdZVUZEUmp0VFFVTkVPMHRCUTBRN1UwRkJUVHRSUVVOT0xGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTJoQ0xFdEJRVXNzV1VGQldTeERRVUZETEVOQlFVTTdaMEpCUTJ4Q0xFMUJRVTBzVlVGQlZTeEhRVUZITzI5Q1FVTnFRaXhOUVVGTk8yOUNRVU5PTEUxQlFVMDdiMEpCUTA0c1YwRkJWenR2UWtGRFdDeGhRVUZoTzI5Q1FVTmlMRTFCUVUwN2IwSkJRMDRzWlVGQlpUdHZRa0ZEWml4VFFVRlRPMjlDUVVOVUxGRkJRVkU3YjBKQlExSXNUMEZCVHp0dlFrRkRVQ3hoUVVGaE8yOUNRVU5pTEZkQlFWYzdhVUpCUTFnc1JVRkRSQ3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVVnlSQ3haUVVGWkxFTkJRVU1zWVVGQllTdzBSVUZCYjBJc1EwRkJRenRuUWtGREwwTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc05FVkJRVzFDTEVOQlFVTTdaMEpCUXpsRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NhME5CUVd0RExFTkJRVU03WjBKQlJXcEZMRWxCUVVrc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRGFrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0dlFrRkROVU1zV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzWlVGQlpTeERRVUZETzI5Q1FVVm9SQ3hKUVVGSkxFTkJRVU1zVjBGQlZ6dDNRa0ZCUlN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dHBRa0ZETjBNN2NVSkJRVTA3YjBKQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0dlFrRkRNVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExIbENRVUY1UWl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yOUNRVU5zUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4alFVRmpMRU5CUVVNN2FVSkJReTlETzJkQ1FVVkVMRTFCUVUwN1lVRkRUanRaUVVWRUxFdEJRVXNzWTBGQll5eERRVUZETEVOQlFVTTdaMEpCUTNCQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03WjBKQlF6bERMRTFCUVUwN1lVRkRUanRaUVVWRUxFdEJRVXNzVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTJJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTTdaMEpCUlhaRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU0xUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHZENRVUZuUWl4RFFVRkRPMjlDUVVONFF5eFpRVUZaTEVOQlFVTXNTMEZCU3p0M1FrRkRha0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1JVRkJSU3hYUVVGWExFTkJRVU03YjBKQlEyNUVMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRmRCUVZjc1EwRkJRenRwUWtGRE5VTTdaMEpCUlVRc1RVRkJUVHRoUVVOT08xbEJSVVE3WjBKQlEwTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlExb3NXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0dlFrRkZOVU1zU1VGQlNTeERRVUZETEZkQlFWYzdkMEpCUVVVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdhVUpCUXpkRE8xTkJRMFk3UzBGRFJEdEpRVVZFTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTenRSUVVGRkxFOUJRVThzV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTnVSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03TzFGQlF6ZERMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdRVUZEZWtNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRlNDeE5RVUZOTEdGQlFXRXNSMEZCTWtJc1JVRkJSU3hEUVVGRE8wRkJRMnBFTEV0QlFVc3NWVUZCVlN4WFFVRlhMRU5CUVVNc1IwRkJWenRKUVVOeVF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ6dFJRVUZGTEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTNwRExFbEJRVWtzWVVGQllTeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVRkZMRTlCUVU4c1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyeEVMRWxCUVVrN1VVRkRTQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlEyNUNMRTFCUVUwc1MwRkJTeXhEUVVGRExHZERRVUZuUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVOc1JDeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTFRc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTXpRaXhQUVVGUExFdEJRVXNzUTBGQlF6dExRVU5pTzBsQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVN1VVRkRZaXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNCQ0xFOUJRVThzUjBGQlJ5eERRVUZETzB0QlExZzdRVUZEUml4RFFVRkRPMEZCUlVRc1UwRkJVeXhYUVVGWExFTkJRVU1zVVVGQlowSTdTVUZEY0VNc1QwRkJUeXcyUWtGQk5rSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRGNrUXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwidGl0bGUiLCJkb2N1bWVudCIsInJlcGxhY2UiLCJwcml2YWN5TW9kZSIsInNob3dCdXR0b25zIiwic2hvd0FydGljbGVBdXRob3IiLCJzaG93TW9yZURldGFpbHMiLCJQcm9taXNlIiwiYWxsIiwiZ2V0U2V0dGluZyIsInBhdGhuYW1lIiwiaHJlZiIsInNlYXJjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aCIsInNwbGl0IiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiaW5jbHVkZXMiLCJkZXRhaWxzIiwic3RhdGUiLCJVUkxTZWFyY2hQYXJhbXMiLCJnZXQiLCJhdXRob3IiLCJuYW1lIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiYXZhdGFyIiwic21hbGxJbWFnZUtleSIsImdldFNob3J0VVJMIiwic3JjIiwic21hbGxJbWFnZVRleHQiLCJoYXNEYXRlUGF0aCIsImltZyIsImFyaWFMYWJlbCIsInRyaW0iLCJhdXRob3JzIiwiaGVhZGxpbmUiLCJjYXRlZ29yaWVzIiwic2V0QWN0aXZpdHkiLCJzaG9ydGVuZWRVUkxzIiwibGVuZ3RoIiwicGRVUkwiLCJmZXRjaCIsInRleHQiLCJlcnIiLCJlcnJvciIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9
undefined;