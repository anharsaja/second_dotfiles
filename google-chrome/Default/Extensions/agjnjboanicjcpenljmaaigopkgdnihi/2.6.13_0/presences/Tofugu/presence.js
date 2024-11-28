var __webpack_exports__={};const presence=new Presence({clientId:"958766344311025786"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/Tofugu/assets/logo.png",startTimestamp:browsingTimestamp};switch(location.host){case"www.tofugu.com":{const[,t,a]=location.pathname.split("/");switch(t){case"":e.details="Viewing the homepage";break;case"japanese":a?(e.details="Viewing a Japanese article",e.state=document.querySelector(".article-highlight").textContent):(e.details="Viewing category",e.state=document.querySelector("h1 > a").textContent);break;case"interviews":a?(e.details="Viewing an interview article",e.state=document.querySelector(".article-highlight").textContent):(e.details="Viewing category",e.state=document.querySelector("h1 > a").textContent);break;case"reviews":a?(e.details="Viewing a review article",e.state=document.querySelector(".article-highlight").textContent):(e.details="Viewing category",e.state=document.querySelector("h1 > a").textContent);break;case"news":a?(e.details="Viewing a news article",e.state=document.querySelector("h2").textContent):(e.details="Viewing category",e.state=document.querySelector("h1 > a").textContent);break;case"travel":a?(e.details="Viewing a travel article",e.state=document.querySelector(".article-highlight").textContent):(e.details="Viewing category",e.state=document.querySelector("h1 > a").textContent);break;case"japanese-grammar":a?(e.details="Viewing a Japanese grammar article",e.state=document.querySelector(".article-highlight").textContent):(e.details="Viewing category",e.state=document.querySelector("h1 > a").textContent);break;case"japanese-learning-resources-database":a?(e.details="Viewing a Japanese learning resource article",e.state=document.querySelector(".article-highlight").textContent):(e.details="Viewing category",e.state=document.querySelector("h1 > a").textContent);break;case"japan":a?(e.details="Viewing a Japan article",e.state=document.querySelector(".article-highlight").textContent):(e.details="Viewing category",e.state=document.querySelector("h1 > a").textContent);break;case"series":a?(e.details="Viewing an article series",e.state=document.querySelector(".article-highlight").textContent):(e.details="Viewing category",e.state=document.querySelector("h1 > a").textContent);break;case"jobs":a?(e.details="Viewing a job listing",e.state=document.querySelector("h2").textContent):e.details="Viewing job listings";break;default:e.details="Browsing",e.state=document.querySelector("h1 > a").textContent}break}case"kana-quiz.tofugu.com":switch(document.querySelector(".App > div").className){case"start":e.details="Preparing to practice kana",e.state="practice-hiragana"===document.querySelector(".check").htmlFor?"Hiragana":"Katakana";break;case"quiz-page":e.details="Practicing kana",e.state=document.querySelector(".focused-card span").textContent;break;case"results":{const[,t,a,i]=document.querySelector(".results > h3").textContent.match(/.*?(\d+)\/(\d+).*?([\d.]+)/);e.details="Viewing kana quiz results",e.state=`${t}/${a} (${i}%)`;break}}}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNWLE1BRUosSUFBSyxZQUNEZixFQUFhUyxRQUFVLGtCQUN2QlQsRUFBYVUsTUFDVEMsU0FBU0MsY0FBYyxzQkFBc0JDLFlBQ2pELE1BRUosSUFBSyxVQUFXLENBQ1osTUFBTyxDQUFFRyxFQUFTQyxFQUFPQyxHQUFXUCxTQUMvQkMsY0FBYyxpQkFDZEMsWUFBWU0sTUFBTSw4QkFDdkJuQixFQUFhUyxRQUFVLDRCQUN2QlQsRUFBYVUsTUFBUSxHQUFHTSxLQUFXQyxNQUFVQyxNQUM3QyxLQUNKLEdBS1ozQixTQUFTNkIsWUFBWXBCLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTU4NzY2MzQ0MzExMDI1Nzg2XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVC9Ub2Z1Z3UvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9O1xuICAgIHN3aXRjaCAobG9jYXRpb24uaG9zdCkge1xuICAgICAgICBjYXNlIFwid3d3LnRvZnVndS5jb21cIjoge1xuICAgICAgICAgICAgY29uc3QgWywgY2F0ZWdvcnksIHBhdGhdID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgaG9tZXBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJqYXBhbmVzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIEphcGFuZXNlIGFydGljbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlLWhpZ2hsaWdodFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGNhdGVnb3J5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEgPiBhXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJ2aWV3c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhbiBpbnRlcnZpZXcgYXJ0aWNsZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGUtaGlnaGxpZ2h0XCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY2F0ZWdvcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSA+IGFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZXZpZXdzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcmV2aWV3IGFydGljbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlLWhpZ2hsaWdodFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGNhdGVnb3J5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEgPiBhXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwibmV3c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIG5ld3MgYXJ0aWNsZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY2F0ZWdvcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSA+IGFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmF2ZWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSB0cmF2ZWwgYXJ0aWNsZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGUtaGlnaGxpZ2h0XCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY2F0ZWdvcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSA+IGFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJqYXBhbmVzZS1ncmFtbWFyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgSmFwYW5lc2UgZ3JhbW1hciBhcnRpY2xlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZS1oaWdobGlnaHRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBjYXRlZ29yeVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxID4gYVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImphcGFuZXNlLWxlYXJuaW5nLXJlc291cmNlcy1kYXRhYmFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3aW5nIGEgSmFwYW5lc2UgbGVhcm5pbmcgcmVzb3VyY2UgYXJ0aWNsZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGUtaGlnaGxpZ2h0XCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY2F0ZWdvcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSA+IGFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJqYXBhblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIEphcGFuIGFydGljbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlLWhpZ2hsaWdodFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGNhdGVnb3J5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEgPiBhXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwic2VyaWVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFuIGFydGljbGUgc2VyaWVzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZS1oaWdobGlnaHRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBjYXRlZ29yeVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxID4gYVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImpvYnNcIjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBqb2IgbGlzdGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGpvYiBsaXN0aW5nc1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxID4gYVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwia2FuYS1xdWl6LnRvZnVndS5jb21cIjoge1xuICAgICAgICAgICAgc3dpdGNoIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkFwcCA+IGRpdlwiKS5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUHJlcGFyaW5nIHRvIHByYWN0aWNlIGthbmFcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tcIikuaHRtbEZvciA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByYWN0aWNlLWhpcmFnYW5hXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiSGlyYWdhbmFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJLYXRha2FuYVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInF1aXotcGFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJQcmFjdGljaW5nIGthbmFcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9jdXNlZC1jYXJkIHNwYW5cIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwicmVzdWx0c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFssIGNvcnJlY3QsIHRvdGFsLCBwZXJjZW50XSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzID4gaDNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5tYXRjaCgvLio/KFxcZCspXFwvKFxcZCspLio/KFtcXGQuXSspLyk7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGthbmEgcXVpeiByZXN1bHRzXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2NvcnJlY3R9LyR7dG90YWx9ICgke3BlcmNlbnR9JSlgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVVZ1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeEhRVUZITEVWQlFVVTdTVUZET1VJc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEyeERMR0ZCUVdFc1JVRkRXaXcyUkVGQk5rUTdVVUZET1VRc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0TFFVTnFReXhEUVVGRE8wbEJSVVlzVVVGQlVTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZPMUZCUTNSQ0xFdEJRVXNzWjBKQlFXZENMRU5CUVVNc1EwRkJRenRaUVVOMFFpeE5RVUZOTEVOQlFVTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGVFUXNVVUZCVVN4UlFVRlJMRVZCUVVVN1owSkJRMnBDTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN2IwSkJRMUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4elFrRkJjMElzUTBGQlF6dHZRa0ZET1VNc1RVRkJUVHRwUWtGRFRqdG5Ra0ZEUkN4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRE8yOUNRVU5vUWl4SlFVRkpMRWxCUVVrc1JVRkJSVHQzUWtGRFZDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRFJDUVVFMFFpeERRVUZETzNkQ1FVTndSQ3haUVVGWkxFTkJRVU1zUzBGQlN6czBRa0ZEYWtJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dHhRa0ZETVVRN2VVSkJRVTA3ZDBKQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0M1FrRkRNVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXp0eFFrRkRiRVU3YjBKQlEwUXNUVUZCVFR0cFFrRkRUanRuUWtGRFJDeExRVUZMTEZsQlFWa3NRMEZCUXl4RFFVRkRPMjlDUVVOc1FpeEpRVUZKTEVsQlFVa3NSVUZCUlR0M1FrRkRWQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERoQ1FVRTRRaXhEUVVGRE8zZENRVU4wUkN4WlFVRlpMRU5CUVVNc1MwRkJTenMwUWtGRGFrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenR4UWtGRE1VUTdlVUpCUVUwN2QwSkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dDNRa0ZETVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dHhRa0ZEYkVVN2IwSkJRMFFzVFVGQlRUdHBRa0ZEVGp0blFrRkRSQ3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETzI5Q1FVTm1MRWxCUVVrc1NVRkJTU3hGUVVGRk8zZENRVU5VTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01FSkJRVEJDTEVOQlFVTTdkMEpCUTJ4RUxGbEJRVmtzUTBGQlF5eExRVUZMT3pSQ1FVTnFRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzNGQ1FVTXhSRHQ1UWtGQlRUdDNRa0ZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPM2RDUVVNeFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRPM0ZDUVVOc1JUdHZRa0ZEUkN4TlFVRk5PMmxDUVVOT08yZENRVU5FTEV0QlFVc3NUVUZCVFN4RFFVRkRMRU5CUVVNN2IwSkJRMW9zU1VGQlNTeEpRVUZKTEVWQlFVVTdkMEpCUTFRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJRenQzUWtGRGFFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenR4UWtGRE9VUTdlVUpCUVUwN2QwSkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dDNRa0ZETVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dHhRa0ZEYkVVN2IwSkJRMFFzVFVGQlRUdHBRa0ZEVGp0blFrRkRSQ3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETzI5Q1FVTmtMRWxCUVVrc1NVRkJTU3hGUVVGRk8zZENRVU5VTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01FSkJRVEJDTEVOQlFVTTdkMEpCUTJ4RUxGbEJRVmtzUTBGQlF5eExRVUZMT3pSQ1FVTnFRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzNGQ1FVTXhSRHQ1UWtGQlRUdDNRa0ZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPM2RDUVVNeFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRPM0ZDUVVOc1JUdHZRa0ZEUkN4TlFVRk5PMmxDUVVOT08yZENRVU5FTEV0QlFVc3NhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dHZRa0ZEZUVJc1NVRkJTU3hKUVVGSkxFVkJRVVU3ZDBKQlExUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh2UTBGQmIwTXNRMEZCUXp0M1FrRkROVVFzV1VGQldTeERRVUZETEV0QlFVczdORUpCUTJwQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdjVUpCUXpGRU8zbENRVUZOTzNkQ1FVTk9MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN2QwSkJRekZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN2NVSkJRMnhGTzI5Q1FVTkVMRTFCUVUwN2FVSkJRMDQ3WjBKQlEwUXNTMEZCU3l4elEwRkJjME1zUTBGQlF5eERRVUZETzI5Q1FVTTFReXhKUVVGSkxFbEJRVWtzUlVGQlJUdDNRa0ZEVkN4WlFVRlpMRU5CUVVNc1QwRkJUenMwUWtGRGJrSXNPRU5CUVRoRExFTkJRVU03ZDBKQlEyaEVMRmxCUVZrc1EwRkJReXhMUVVGTE96UkNRVU5xUWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8zRkNRVU14UkR0NVFrRkJUVHQzUWtGRFRpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETzNkQ1FVTXhReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzNGQ1FVTnNSVHR2UWtGRFJDeE5RVUZOTzJsQ1FVTk9PMmRDUVVORUxFdEJRVXNzVDBGQlR5eERRVUZETEVOQlFVTTdiMEpCUTJJc1NVRkJTU3hKUVVGSkxFVkJRVVU3ZDBKQlExUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXg1UWtGQmVVSXNRMEZCUXp0M1FrRkRha1FzV1VGQldTeERRVUZETEV0QlFVczdORUpCUTJwQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdjVUpCUXpGRU8zbENRVUZOTzNkQ1FVTk9MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN2QwSkJRekZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN2NVSkJRMnhGTzI5Q1FVTkVMRTFCUVUwN2FVSkJRMDQ3WjBKQlEwUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenR2UWtGRFpDeEpRVUZKTEVsQlFVa3NSVUZCUlR0M1FrRkRWQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERKQ1FVRXlRaXhEUVVGRE8zZENRVU51UkN4WlFVRlpMRU5CUVVNc1MwRkJTenMwUWtGRGFrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenR4UWtGRE1VUTdlVUpCUVUwN2QwSkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dDNRa0ZETVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dHhRa0ZEYkVVN2IwSkJRMFFzVFVGQlRUdHBRa0ZEVGp0blFrRkRSQ3hMUVVGTExFMUJRVTBzUTBGQlF5eERRVUZETzI5Q1FVTmFMRWxCUVVrc1NVRkJTU3hGUVVGRk8zZENRVU5VTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdkMEpCUXk5RExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdjVUpCUXpsRU96dDNRa0ZCVFN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMjlDUVVWeVJDeE5RVUZOTzJsQ1FVTk9PMmRDUVVORUxFOUJRVThzUTBGQlF5eERRVUZETzI5Q1FVTlNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVlVGQlZTeERRVUZETzI5Q1FVTnNReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzJsQ1FVTnNSVHRoUVVORU8xbEJRMFFzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4elFrRkJjMElzUTBGQlF5eERRVUZETzFsQlF6VkNMRkZCUVZFc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVN1owSkJRM1pFTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN2IwSkJRMklzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3MFFrRkJORUlzUTBGQlF6dHZRa0ZEY0VRc1dVRkJXU3hEUVVGRExFdEJRVXM3ZDBKQlEycENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVzFDTEZGQlFWRXNRMEZCUXl4RFFVRkRMRTlCUVU4N05FSkJRekZFTEcxQ1FVRnRRanMwUWtGRGJFSXNRMEZCUXl4RFFVRkRMRlZCUVZVN05FSkJRMW9zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXp0dlFrRkRaaXhOUVVGTk8ybENRVU5PTzJkQ1FVTkVMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU03YjBKQlEycENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYVVKQlFXbENMRU5CUVVNN2IwSkJRM3BETEZsQlFWa3NRMEZCUXl4TFFVRkxPM2RDUVVOcVFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRPMjlDUVVNeFJDeE5RVUZOTzJsQ1FVTk9PMmRDUVVORUxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTTdiMEpCUTJZc1RVRkJUU3hEUVVGRExFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhSUVVGUk8zbENRVU14UXl4aFFVRmhMRU5CUVVNc1pVRkJaU3hEUVVGRE8zbENRVU01UWl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExEUkNRVUUwUWl4RFFVRkRMRU5CUVVNN2IwSkJRMnhFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01rSkJRVEpDTEVOQlFVTTdiMEpCUTI1RUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4UFFVRlBMRWxCUVVrc1MwRkJTeXhMUVVGTExFOUJRVThzU1VGQlNTeERRVUZETzI5Q1FVTjZSQ3hOUVVGTk8ybENRVU5PTzJGQlEwUTdXVUZEUkN4TlFVRk5PMU5CUTA0N1MwRkRSRHRKUVVWRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1FVRkRjRU1zUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwibG9jYXRpb24iLCJob3N0IiwiY2F0ZWdvcnkiLCJwYXRoIiwicGF0aG5hbWUiLCJzcGxpdCIsImRldGFpbHMiLCJzdGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImNvcnJlY3QiLCJ0b3RhbCIsInBlcmNlbnQiLCJtYXRjaCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;