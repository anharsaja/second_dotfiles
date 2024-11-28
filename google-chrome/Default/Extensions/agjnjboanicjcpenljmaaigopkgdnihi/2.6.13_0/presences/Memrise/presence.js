var __webpack_exports__={};const presence=new Presence({clientId:"1095377958241304586"}),browsingTimestamp=Math.floor(Date.now()/1e3);function getPageData(e,t,r,s){switch(e){case"dashboard":return{details:`Viewing their ${e}...`,state:document.querySelector("h1").textContent,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"};case"course":return{details:document.querySelector(".course-name")?.textContent,state:document.querySelector(".progress-box-title")?.textContent,largeImageKey:document.querySelector(".course-photo img")?.src,buttons:[{label:"Go to Course",url:`https://app.memrise.com/course/${t}/${r}`}]};case"aprender":{const e=document.querySelector('div[data-testid="testLearnableCard"] > div > div > div'),t=document.querySelector("span > div > span"),r=document.querySelector('div[data-testid="endOfSession"] h2');let s="";return e?.textContent&&t?.textContent?s=`translate: ${e.textContent} | ${t.textContent} points`:r?.textContent&&(s=r.textContent),{details:document.querySelector("header > div > a").textContent,state:s,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/reading.png"}}case"courses":return{details:"Browsing...",state:document.querySelector(".category-header").textContent,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"};case"dictionary":{const e=t.charAt(0).toUpperCase()+t.slice(1);return r?{details:`Learning ${e} phrase:`,state:`${document.querySelector("mark:nth-child(1)").textContent} = \n\t\t\t\t${document.querySelector("h2").textContent}`,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/reading.png"}:{details:`Looking up ${e} phrases...`,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"}}case"user":return{details:"Viewing profile...",state:`Knows ${document.querySelector("li:nth-child(3) > div > strong").textContent} words | ${document.querySelector(".stat-value-xs").textContent} points`};case"home":return getHomeDetail(t);case"settings":return getSettingsDetail(t);case"categories":return{details:"Browsing Community forums...",state:"All categories",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"};case"top":return{details:"Browsing Community forums...",state:"Top posted",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"};case"latest":return{details:"Browsing Community forums...",state:"Latest posts",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"};case"badges":return{details:"Browsing Community forums...",state:"All badges",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"};case"tags":return{details:"Browsing Community forums...",state:"Filter tags",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"};case"c":return s?{details:`Forum: ${t.replaceAll("-"," ")}`,state:`Topic: ${r.replaceAll("-"," ")}`,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"}:{details:"Browsing forum category...",state:t.replaceAll("-"," "),smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"};case"t":return{details:`Forum: ${document.querySelector("a:nth-child(1) > span.badge-category.clear-badge > span").textContent} > ${document.querySelector("a:nth-child(2) > span.badge-category.clear-badge > span").textContent}`,state:`Post: ${document.querySelector(".fancy-title").textContent}`,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/reading.png"};case"about":return{details:"Viewing About us page..."};case"team":return{details:`Viewing Memrise ${e}...`};case"philosophy":return{details:`Reading Memrise ${e}...`};case"jobs":return{details:`Searching Memrise ${e}...`};case"blog":return{details:`Reading Memrise ${e}s...`,state:document.querySelector("#hs_cos_wrapper_name").textContent,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/reading.png"};case"contact":return{details:`Viewing Memrise ${e} page`};case"terms":return{details:`Reading Memrise ${e}`};case"privacy":case"cookies":return{details:`Reading Memrise ${e} policy`};default:return{details:"Browsing...",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png"}}}function getHomeDetail(e){switch(e){case"learning-statistics":return{details:"Viewing their learning stats...",state:`${document.querySelector(".rank").textContent} \n\t\t\t\t[Best Streak ${document.querySelector("#attendance-grid-label2 .large").textContent} | \n\t\t\t\tCurrent ${document.querySelector("#attendance-grid-label3 .large").textContent} | \n\t\t\t\tTotal ${document.querySelector("#attendance-grid-label1 .large").textContent} days in the last 365 days]`};case"difficult-words":return{details:`Viewing their ${document.querySelector(".tabbed-main > div.left").textContent}`};case"leaderboard":return{details:"Viewing their group leaderboard...",state:`${document.querySelector("li.btn.btn-small.active").textContent}: \n\t\t\t\t${document.querySelector(".row-points").textContent} points`};default:return{details:"browsing home..."}}}function getSettingsDetail(e){switch(e){case"":return{details:"Changing their profile settings..."};case"personal_data":return{details:"Requesting their Personal Data..."};case"premium":return{details:"Changing their subscription settings..."};case"change_password":return{details:"Changing their password settings..."};case"deactivate":return{details:"Viewing their delete account settings..."};default:return{details:"Changing settings..."}}}presence.on("UpdateData",(async()=>{const{pathname:e}=document.location,t=e.split("/"),{details:r,smallImageKey:s,largeImageKey:a,state:n,buttons:c}=getPageData(t[1],t[2],t[3],t[4]),i={largeImageKey:a||"https://cdn.rcd.gg/PreMiD/websites/M/Memrise/assets/logo.png",startTimestamp:browsingTimestamp,details:r};c&&(i.buttons=c),s&&(i.smallImageKey=s),n&&(i.state=n),r&&presence.setActivity(i)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTyxDQUFFQSxRQUFTLDRDQUN0QixRQUNJLE1BQU8sQ0FBRUEsUUFBUyx3QkFFOUIsQ0FoTUFiLFNBQVNtQyxHQUFHLGNBQWNDLFVBQ3RCLE1BQU0sU0FBRUMsR0FBYXRCLFNBQVN1QixTQUFVQyxFQUFVRixFQUFTRyxNQUFNLE1BQU0sUUFBRTNCLEVBQU8sY0FBRUssRUFBYSxjQUFFQyxFQUFhLE1BQUVMLEVBQUssUUFBRU8sR0FBWWIsWUFBWStCLEVBQVEsR0FBSUEsRUFBUSxHQUFJQSxFQUFRLEdBQUlBLEVBQVEsSUFBS0UsRUFBZSxDQUMzTXRCLGNBQWVBLEdBQWlCLCtEQUNoQ3VCLGVBQWdCdkMsa0JBQ2hCVSxXQUVBUSxJQUNBb0IsRUFBYXBCLFFBQVVBLEdBQ3ZCSCxJQUNBdUIsRUFBYXZCLGNBQWdCQSxHQUM3QkosSUFDQTJCLEVBQWEzQixNQUFRQSxHQUNyQkQsR0FDQWIsU0FBUzJDLFlBQVlGLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7IGNsaWVudElkOiBcIjEwOTUzNzc5NTgyNDEzMDQ1ODZcIiB9KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gZG9jdW1lbnQubG9jYXRpb24sIHBhdGhBcnIgPSBwYXRobmFtZS5zcGxpdChcIi9cIiksIHsgZGV0YWlscywgc21hbGxJbWFnZUtleSwgbGFyZ2VJbWFnZUtleSwgc3RhdGUsIGJ1dHRvbnMgfSA9IGdldFBhZ2VEYXRhKHBhdGhBcnJbMV0sIHBhdGhBcnJbMl0sIHBhdGhBcnJbM10sIHBhdGhBcnJbNF0pLCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IGxhcmdlSW1hZ2VLZXkgfHwgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL00vTWVtcmlzZS9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgICAgICBkZXRhaWxzLFxuICAgIH07XG4gICAgaWYgKGJ1dHRvbnMpXG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gYnV0dG9ucztcbiAgICBpZiAoc21hbGxJbWFnZUtleSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBzbWFsbEltYWdlS2V5O1xuICAgIGlmIChzdGF0ZSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc3RhdGU7XG4gICAgaWYgKGRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbmZ1bmN0aW9uIGdldFBhZ2VEYXRhKHBhZ2UsIHBhZ2VEZXRhaWwsIHRpdGxlLCBzdWJ0aXRsZSkge1xuICAgIHN3aXRjaCAocGFnZSkge1xuICAgICAgICBjYXNlIFwiZGFzaGJvYXJkXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IGBWaWV3aW5nIHRoZWlyICR7cGFnZX0uLi5gLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiY291cnNlXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291cnNlLW5hbWVcIik/LnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIHN0YXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLWJveC10aXRsZVwiKT8udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgbGFyZ2VJbWFnZUtleTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3Vyc2UtcGhvdG8gaW1nXCIpPy5zcmMsXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJHbyB0byBDb3Vyc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYGh0dHBzOi8vYXBwLm1lbXJpc2UuY29tL2NvdXJzZS8ke3BhZ2VEZXRhaWx9LyR7dGl0bGV9YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcImFwcmVuZGVyXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLXRlc3RpZD1cInRlc3RMZWFybmFibGVDYXJkXCJdID4gZGl2ID4gZGl2ID4gZGl2JyksIHBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuID4gZGl2ID4gc3BhblwiKSwgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtdGVzdGlkPVwiZW5kT2ZTZXNzaW9uXCJdIGgyJyk7XG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZT8udGV4dENvbnRlbnQgJiYgcG9pbnRzPy50ZXh0Q29udGVudClcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGB0cmFuc2xhdGU6ICR7dHJhbnNsYXRlLnRleHRDb250ZW50fSB8ICR7cG9pbnRzLnRleHRDb250ZW50fSBwb2ludHNgO1xuICAgICAgICAgICAgZWxzZSBpZiAoY29tcGxldGVkPy50ZXh0Q29udGVudClcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGNvbXBsZXRlZC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciA+IGRpdiA+IGFcIikudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiY291cnNlc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkJyb3dzaW5nLi4uXCIsXG4gICAgICAgICAgICAgICAgc3RhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnktaGVhZGVyXCIpLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcImRpY3Rpb25hcnlcIjoge1xuICAgICAgICAgICAgY29uc3QgbGFuZyA9IHBhZ2VEZXRhaWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwYWdlRGV0YWlsLnNsaWNlKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IGBMZWFybmluZyAke2xhbmd9IHBocmFzZTpgLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1hcms6bnRoLWNoaWxkKDEpXCIpLnRleHRDb250ZW50fSA9IFxuXHRcdFx0XHQke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKS50ZXh0Q29udGVudH1gLFxuICAgICAgICAgICAgICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgTG9va2luZyB1cCAke2xhbmd9IHBocmFzZXMuLi5gLFxuICAgICAgICAgICAgICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJ1c2VyXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiVmlld2luZyBwcm9maWxlLi4uXCIsXG4gICAgICAgICAgICAgICAgc3RhdGU6IGBLbm93cyAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaTpudGgtY2hpbGQoMykgPiBkaXYgPiBzdHJvbmdcIikudGV4dENvbnRlbnR9IHdvcmRzIHwgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXQtdmFsdWUteHNcIikudGV4dENvbnRlbnR9IHBvaW50c2AsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICAgICAgcmV0dXJuIGdldEhvbWVEZXRhaWwocGFnZURldGFpbCk7XG4gICAgICAgIGNhc2UgXCJzZXR0aW5nc1wiOlxuICAgICAgICAgICAgcmV0dXJuIGdldFNldHRpbmdzRGV0YWlsKHBhZ2VEZXRhaWwpO1xuICAgICAgICBjYXNlIFwiY2F0ZWdvcmllc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkJyb3dzaW5nIENvbW11bml0eSBmb3J1bXMuLi5cIixcbiAgICAgICAgICAgICAgICBzdGF0ZTogXCJBbGwgY2F0ZWdvcmllc1wiLFxuICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkJyb3dzaW5nIENvbW11bml0eSBmb3J1bXMuLi5cIixcbiAgICAgICAgICAgICAgICBzdGF0ZTogXCJUb3AgcG9zdGVkXCIsXG4gICAgICAgICAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwibGF0ZXN0XCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmcgQ29tbXVuaXR5IGZvcnVtcy4uLlwiLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBcIkxhdGVzdCBwb3N0c1wiLFxuICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcImJhZGdlc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkJyb3dzaW5nIENvbW11bml0eSBmb3J1bXMuLi5cIixcbiAgICAgICAgICAgICAgICBzdGF0ZTogXCJBbGwgYmFkZ2VzXCIsXG4gICAgICAgICAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwidGFnc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkJyb3dzaW5nIENvbW11bml0eSBmb3J1bXMuLi5cIixcbiAgICAgICAgICAgICAgICBzdGF0ZTogXCJGaWx0ZXIgdGFnc1wiLFxuICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcImNcIjoge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnRpdGxlXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IGBGb3J1bTogJHtwYWdlRGV0YWlsLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKX1gLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogYFRvcGljOiAke3RpdGxlLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKX1gLFxuICAgICAgICAgICAgICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmcgZm9ydW0gY2F0ZWdvcnkuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHBhZ2VEZXRhaWwucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJ0XCI6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogYEZvcnVtOiAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhOm50aC1jaGlsZCgxKSA+IHNwYW4uYmFkZ2UtY2F0ZWdvcnkuY2xlYXItYmFkZ2UgPiBzcGFuXCIpLnRleHRDb250ZW50fSA+ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImE6bnRoLWNoaWxkKDIpID4gc3Bhbi5iYWRnZS1jYXRlZ29yeS5jbGVhci1iYWRnZSA+IHNwYW5cIikudGV4dENvbnRlbnR9YCxcbiAgICAgICAgICAgICAgICBzdGF0ZTogYFBvc3Q6ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYW5jeS10aXRsZVwiKS50ZXh0Q29udGVudH1gLFxuICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImFib3V0XCI6XG4gICAgICAgICAgICByZXR1cm4geyBkZXRhaWxzOiBcIlZpZXdpbmcgQWJvdXQgdXMgcGFnZS4uLlwiIH07XG4gICAgICAgIGNhc2UgXCJ0ZWFtXCI6XG4gICAgICAgICAgICByZXR1cm4geyBkZXRhaWxzOiBgVmlld2luZyBNZW1yaXNlICR7cGFnZX0uLi5gIH07XG4gICAgICAgIGNhc2UgXCJwaGlsb3NvcGh5XCI6XG4gICAgICAgICAgICByZXR1cm4geyBkZXRhaWxzOiBgUmVhZGluZyBNZW1yaXNlICR7cGFnZX0uLi5gIH07XG4gICAgICAgIGNhc2UgXCJqb2JzXCI6XG4gICAgICAgICAgICByZXR1cm4geyBkZXRhaWxzOiBgU2VhcmNoaW5nIE1lbXJpc2UgJHtwYWdlfS4uLmAgfTtcbiAgICAgICAgY2FzZSBcImJsb2dcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogYFJlYWRpbmcgTWVtcmlzZSAke3BhZ2V9cy4uLmAsXG4gICAgICAgICAgICAgICAgc3RhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHNfY29zX3dyYXBwZXJfbmFtZVwiKS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGV0YWlsczogYFZpZXdpbmcgTWVtcmlzZSAke3BhZ2V9IHBhZ2VgIH07XG4gICAgICAgIGNhc2UgXCJ0ZXJtc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGV0YWlsczogYFJlYWRpbmcgTWVtcmlzZSAke3BhZ2V9YCB9O1xuICAgICAgICBjYXNlIFwicHJpdmFjeVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGV0YWlsczogYFJlYWRpbmcgTWVtcmlzZSAke3BhZ2V9IHBvbGljeWAgfTtcbiAgICAgICAgY2FzZSBcImNvb2tpZXNcIjpcbiAgICAgICAgICAgIHJldHVybiB7IGRldGFpbHM6IGBSZWFkaW5nIE1lbXJpc2UgJHtwYWdlfSBwb2xpY3lgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4geyBkZXRhaWxzOiBcIkJyb3dzaW5nLi4uXCIsIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiIH07XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0SG9tZURldGFpbChwYWdlRGV0YWlsKSB7XG4gICAgc3dpdGNoIChwYWdlRGV0YWlsKSB7XG4gICAgICAgIGNhc2UgXCJsZWFybmluZy1zdGF0aXN0aWNzXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiVmlld2luZyB0aGVpciBsZWFybmluZyBzdGF0cy4uLlwiLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmtcIikudGV4dENvbnRlbnR9IFxuXHRcdFx0XHRbQmVzdCBTdHJlYWsgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGVuZGFuY2UtZ3JpZC1sYWJlbDIgLmxhcmdlXCIpLnRleHRDb250ZW50fSB8IFxuXHRcdFx0XHRDdXJyZW50ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdHRlbmRhbmNlLWdyaWQtbGFiZWwzIC5sYXJnZVwiKS50ZXh0Q29udGVudH0gfCBcblx0XHRcdFx0VG90YWwgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGVuZGFuY2UtZ3JpZC1sYWJlbDEgLmxhcmdlXCIpLnRleHRDb250ZW50fSBkYXlzIGluIHRoZSBsYXN0IDM2NSBkYXlzXWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiZGlmZmljdWx0LXdvcmRzXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IGBWaWV3aW5nIHRoZWlyICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJiZWQtbWFpbiA+IGRpdi5sZWZ0XCIpLnRleHRDb250ZW50fWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwibGVhZGVyYm9hcmRcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIHRoZWlyIGdyb3VwIGxlYWRlcmJvYXJkLi4uXCIsXG4gICAgICAgICAgICAgICAgc3RhdGU6IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaS5idG4uYnRuLXNtYWxsLmFjdGl2ZVwiKS50ZXh0Q29udGVudH06IFxuXHRcdFx0XHQke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm93LXBvaW50c1wiKS50ZXh0Q29udGVudH0gcG9pbnRzYCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4geyBkZXRhaWxzOiBcImJyb3dzaW5nIGhvbWUuLi5cIiB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFNldHRpbmdzRGV0YWlsKHBhZ2VEZXRhaWxzKSB7XG4gICAgc3dpdGNoIChwYWdlRGV0YWlscykge1xuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgICByZXR1cm4geyBkZXRhaWxzOiBcIkNoYW5naW5nIHRoZWlyIHByb2ZpbGUgc2V0dGluZ3MuLi5cIiB9O1xuICAgICAgICBjYXNlIFwicGVyc29uYWxfZGF0YVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGV0YWlsczogXCJSZXF1ZXN0aW5nIHRoZWlyIFBlcnNvbmFsIERhdGEuLi5cIiB9O1xuICAgICAgICBjYXNlIFwicHJlbWl1bVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGV0YWlsczogXCJDaGFuZ2luZyB0aGVpciBzdWJzY3JpcHRpb24gc2V0dGluZ3MuLi5cIiB9O1xuICAgICAgICBjYXNlIFwiY2hhbmdlX3Bhc3N3b3JkXCI6XG4gICAgICAgICAgICByZXR1cm4geyBkZXRhaWxzOiBcIkNoYW5naW5nIHRoZWlyIHBhc3N3b3JkIHNldHRpbmdzLi4uXCIgfTtcbiAgICAgICAgY2FzZSBcImRlYWN0aXZhdGVcIjpcbiAgICAgICAgICAgIHJldHVybiB7IGRldGFpbHM6IFwiVmlld2luZyB0aGVpciBkZWxldGUgYWNjb3VudCBzZXR0aW5ncy4uLlwiIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4geyBkZXRhaWxzOiBcIkNoYW5naW5nIHNldHRpbmdzLi4uXCIgfTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4RlFVRkZMRkZCUVZFc1JVRkJSU3h4UWtGQmNVSXNSVUZCUlN4RFFVRkRMRVZCUTJwRkxHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJUVzVFTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1JVRkJSU3hSUVVGUkxFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVTnlReXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkROMElzUlVGQlJTeFBRVUZQTEVWQlFVVXNZVUZCWVN4RlFVRkZMR0ZCUVdFc1JVRkJSU3hMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTEVkQlFVY3NWMEZCVnl4RFFVTjBSU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlExWXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVOV0xFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZEVml4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRMVlzUlVGRFJDeFpRVUZaTEVkQlFXbENPMUZCUXpWQ0xHRkJRV0VzUlVGQlJTeGhRVUZoTEd0RlFVRmxPMUZCUXpORExHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1VVRkRha01zVDBGQlR6dExRVU5RTEVOQlFVTTdTVUZGU0N4SlFVRkpMRTlCUVU4N1VVRkJSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXp0SlFVTTFReXhKUVVGSkxHRkJRV0U3VVVGQlJTeFpRVUZaTEVOQlFVTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJRenRKUVVNNVJDeEpRVUZKTEV0QlFVczdVVUZCUlN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVVYwUXl4SlFVRkpMRTlCUVU4N1VVRkJSU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMEZCUTJwRUxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJVZ3NVMEZCVXl4WFFVRlhMRU5CUTI1Q0xFbEJRVmtzUlVGRFdpeFZRVUZyUWl4RlFVTnNRaXhMUVVGaExFVkJRMklzVVVGQlowSTdTVUZSYUVJc1VVRkJVU3hKUVVGSkxFVkJRVVU3VVVGRFlpeExRVUZMTEZkQlFWYzdXVUZEWml4UFFVRlBPMmRDUVVOT0xFOUJRVThzUlVGQlJTeHBRa0ZCYVVJc1NVRkJTU3hMUVVGTE8yZENRVU51UXl4TFFVRkxMRVZCUVVVc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVRlhPMmRDUVVNdlF5eGhRVUZoTEd0RVFVRmxPMkZCUXpWQ0xFTkJRVU03VVVGRFNDeExRVUZMTEZGQlFWRTdXVUZEV2l4UFFVRlBPMmRDUVVOT0xFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRkxGZEJRVmM3WjBKQlF6VkVMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFVkJRVVVzVjBGQlZ6dG5Ra0ZEYWtVc1lVRkJZU3hGUVVOYUxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFXMUNMRzFDUVVGdFFpeERRVUZETEVWQlFVVXNSMEZCUnp0blFrRkRia1VzVDBGQlR5eEZRVUZGTzI5Q1FVTlNPM2RDUVVORExFdEJRVXNzUlVGQlJTeGpRVUZqTzNkQ1FVTnlRaXhIUVVGSExFVkJRVVVzYTBOQlFXdERMRlZCUVZVc1NVRkJTU3hMUVVGTExFVkJRVVU3Y1VKQlF6VkVPMmxDUVVORU8yRkJRMFFzUTBGQlF6dFJRVU5JTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkRhRUlzVFVGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRkRU1zZDBSQlFYZEVMRU5CUTNoRUxFVkJRMFFzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSVUZEY0VRc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEycERMRzlEUVVGdlF5eERRVU53UXl4RFFVRkRPMWxCUTBnc1NVRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEyWXNTVUZCU1N4VFFVRlRMRVZCUVVVc1YwRkJWeXhKUVVGSkxFMUJRVTBzUlVGQlJTeFhRVUZYTzJkQ1FVTm9SQ3hMUVVGTExFZEJRVWNzWTBGQll5eFRRVUZUTEVOQlFVTXNWMEZCVnl4TlFVRk5MRTFCUVUwc1EwRkJReXhYUVVGWExGTkJRVk1zUTBGQlF6dHBRa0ZEZWtVc1NVRkJTU3hUUVVGVExFVkJRVVVzVjBGQlZ6dG5Ra0ZCUlN4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU12UkN4UFFVRlBPMmRDUVVOT0xFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTXNWMEZCVnp0blFrRkRMMFFzUzBGQlN6dG5Ra0ZEVEN4aFFVRmhMRzFFUVVGblFqdGhRVU0zUWl4RFFVRkRPMU5CUTBZN1VVRkRSQ3hMUVVGTExGTkJRVk03V1VGRFlpeFBRVUZQTzJkQ1FVTk9MRTlCUVU4c1JVRkJSU3hoUVVGaE8yZENRVU4wUWl4TFFVRkxMRVZCUVVVc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRExGZEJRVmM3WjBKQlF6ZEVMR0ZCUVdFc2EwUkJRV1U3WVVGRE5VSXNRMEZCUXp0UlFVTklMRXRCUVVzc1dVRkJXU3hEUVVGRExFTkJRVU03V1VGRGJFSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSRkxFOUJRVThzUzBGQlN6dG5Ra0ZEV0N4RFFVRkRMRU5CUVVNN2IwSkJRMEVzVDBGQlR5eEZRVUZGTEZsQlFWa3NTVUZCU1N4VlFVRlZPMjlDUVVOdVF5eExRVUZMTEVWQlFVVXNSMEZEVGl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1YwRkROME03VFVGRFFTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJUdHZRa0ZETVVNc1lVRkJZU3h0UkVGQlowSTdhVUpCUXpWQ08yZENRVU5JTEVOQlFVTXNRMEZCUXp0dlFrRkRRU3hQUVVGUExFVkJRVVVzWTBGQll5eEpRVUZKTEdGQlFXRTdiMEpCUTNoRExHRkJRV0VzYTBSQlFXVTdhVUpCUXpOQ0xFTkJRVU03VTBGRFREdFJRVU5FTEV0QlFVc3NUVUZCVFR0WlFVTldMRTlCUVU4N1owSkJRMDRzVDBGQlR5eEZRVUZGTEc5Q1FVRnZRanRuUWtGRE4wSXNTMEZCU3l4RlFVRkZMRk5CUTA0c1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eG5RMEZCWjBNc1EwRkJReXhEUVVGRExGZEJRekZFTEZsQlEwTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRmRCUXpGRExGTkJRVk03WVVGRFZDeERRVUZETzFGQlEwZ3NTMEZCU3l4TlFVRk5PMWxCUTFZc1QwRkJUeXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZEYkVNc1MwRkJTeXhWUVVGVk8xbEJRMlFzVDBGQlR5eHBRa0ZCYVVJc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU4wUXl4TFFVRkxMRmxCUVZrN1dVRkRhRUlzVDBGQlR6dG5Ra0ZEVGl4UFFVRlBMRVZCUVVVc09FSkJRVGhDTzJkQ1FVTjJReXhMUVVGTExFVkJRVVVzWjBKQlFXZENPMmRDUVVOMlFpeGhRVUZoTEd0RVFVRmxPMkZCUXpWQ0xFTkJRVU03VVVGRFNDeExRVUZMTEV0QlFVczdXVUZEVkN4UFFVRlBPMmRDUVVOT0xFOUJRVThzUlVGQlJTdzRRa0ZCT0VJN1owSkJRM1pETEV0QlFVc3NSVUZCUlN4WlFVRlpPMmRDUVVOdVFpeGhRVUZoTEd0RVFVRmxPMkZCUXpWQ0xFTkJRVU03VVVGRFNDeExRVUZMTEZGQlFWRTdXVUZEV2l4UFFVRlBPMmRDUVVOT0xFOUJRVThzUlVGQlJTdzRRa0ZCT0VJN1owSkJRM1pETEV0QlFVc3NSVUZCUlN4alFVRmpPMmRDUVVOeVFpeGhRVUZoTEd0RVFVRmxPMkZCUXpWQ0xFTkJRVU03VVVGRFNDeExRVUZMTEZGQlFWRTdXVUZEV2l4UFFVRlBPMmRDUVVOT0xFOUJRVThzUlVGQlJTdzRRa0ZCT0VJN1owSkJRM1pETEV0QlFVc3NSVUZCUlN4WlFVRlpPMmRDUVVOdVFpeGhRVUZoTEd0RVFVRmxPMkZCUXpWQ0xFTkJRVU03VVVGRFNDeExRVUZMTEUxQlFVMDdXVUZEVml4UFFVRlBPMmRDUVVOT0xFOUJRVThzUlVGQlJTdzRRa0ZCT0VJN1owSkJRM1pETEV0QlFVc3NSVUZCUlN4aFFVRmhPMmRDUVVOd1FpeGhRVUZoTEd0RVFVRmxPMkZCUXpWQ0xFTkJRVU03VVVGRFNDeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUlZRc1QwRkJUeXhSUVVGUk8yZENRVU5rTEVOQlFVTXNRMEZCUXp0dlFrRkRRU3hQUVVGUExFVkJRVVVzVlVGQlZTeFZRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJUdHZRa0ZEY0VRc1MwRkJTeXhGUVVGRkxGVkJRVlVzUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVU3YjBKQlF6ZERMR0ZCUVdFc2EwUkJRV1U3YVVKQlF6TkNPMmRDUVVOSUxFTkJRVU1zUTBGQlF6dHZRa0ZEUVN4UFFVRlBMRVZCUVVVc05FSkJRVFJDTzI5Q1FVTnlReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8yOUNRVU4wUXl4aFFVRmhMR3RFUVVGbE8ybENRVU16UWl4RFFVRkRPMU5CUTB3N1VVRkRSQ3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlExUXNUMEZCVHp0blFrRkRUaXhQUVVGUExFVkJRVVVzVlVGRFVpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTnlRaXg1UkVGQmVVUXNRMEZEZWtRc1EwRkJReXhYUVVOSUxFMUJRME1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc2VVUkJRWGxFTEVOQlEzcEVMRU5CUVVNc1YwRkRTQ3hGUVVGRk8yZENRVU5HTEV0QlFVc3NSVUZCUlN4VFFVRlRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZPMmRDUVVOd1JTeGhRVUZoTEcxRVFVRm5RanRoUVVNM1FpeERRVUZETzFOQlEwWTdVVUZEUkN4TFFVRkxMRTlCUVU4N1dVRkRXQ3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTERCQ1FVRXdRaXhGUVVGRkxFTkJRVU03VVVGRGFFUXNTMEZCU3l4TlFVRk5PMWxCUTFZc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeHRRa0ZCYlVJc1NVRkJTU3hMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU5zUkN4TFFVRkxMRmxCUVZrN1dVRkRhRUlzVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4dFFrRkJiVUlzU1VGQlNTeExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTnNSQ3hMUVVGTExFMUJRVTA3V1VGRFZpeFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMSEZDUVVGeFFpeEpRVUZKTEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTNCRUxFdEJRVXNzVFVGQlRUdFpRVU5XTEU5QlFVODdaMEpCUTA0c1QwRkJUeXhGUVVGRkxHMUNRVUZ0UWl4SlFVRkpMRTFCUVUwN1owSkJRM1JETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRU5CUVVNc1YwRkJWenRuUWtGRGFrVXNZVUZCWVN4dFJFRkJaMEk3WVVGRE4wSXNRMEZCUXp0UlFVTklMRXRCUVVzc1UwRkJVenRaUVVOaUxFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNiVUpCUVcxQ0xFbEJRVWtzVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZEY0VRc1MwRkJTeXhQUVVGUE8xbEJRMWdzVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4dFFrRkJiVUlzU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFVTXZReXhMUVVGTExGTkJRVk03V1VGRFlpeFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRzFDUVVGdFFpeEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUTNSRUxFdEJRVXNzVTBGQlV6dFpRVU5pTEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVc2JVSkJRVzFDTEVsQlFVa3NVMEZCVXl4RlFVRkZMRU5CUVVNN1VVRkRkRVE3V1VGRFF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMR0ZCUVdFc1JVRkJSU3hoUVVGaExHdEVRVUZsTEVWQlFVVXNRMEZCUXp0TFFVTnFSVHRCUVVOR0xFTkJRVU03UVVGRFJDeFRRVUZUTEdGQlFXRXNRMEZCUXl4VlFVRnJRanRKUVVONFF5eFJRVUZSTEZWQlFWVXNSVUZCUlR0UlFVTnVRaXhMUVVGTExIRkNRVUZ4UWp0WlFVTjZRaXhQUVVGUE8yZENRVU5PTEU5QlFVOHNSVUZCUlN4cFEwRkJhVU03WjBKQlF6RkRMRXRCUVVzc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1YwRkJWenR0UWtGRmNFUXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhuUTBGQlowTXNRMEZCUXl4RFFVRkRMRmRCUXpGRU8yTkJSVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4blEwRkJaME1zUTBGQlF5eERRVUZETEZkQlF6RkVPMWxCUlVNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eG5RMEZCWjBNc1EwRkJReXhEUVVGRExGZEJRekZFTERaQ1FVRTJRanRoUVVNM1FpeERRVUZETzFGQlEwZ3NTMEZCU3l4cFFrRkJhVUk3V1VGRGNrSXNUMEZCVHp0blFrRkRUaXhQUVVGUExFVkJRVVVzYVVKQlExSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRMRmRCUTI1RUxFVkJRVVU3WVVGRFJpeERRVUZETzFGQlEwZ3NTMEZCU3l4aFFVRmhPMWxCUTJwQ0xFOUJRVTg3WjBKQlEwNHNUMEZCVHl4RlFVRkZMRzlEUVVGdlF6dG5Ra0ZETjBNc1MwRkJTeXhGUVVGRkxFZEJRMDRzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETEZkQlEyNUVPMDFCUTBVc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4WFFVRlhMRk5CUVZNN1lVRkROVVFzUTBGQlF6dFJRVU5JTzFsQlEwTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSU3hyUWtGQmEwSXNSVUZCUlN4RFFVRkRPMHRCUTNoRE8wRkJRMFlzUTBGQlF6dEJRVVZFTEZOQlFWTXNhVUpCUVdsQ0xFTkJRVU1zVjBGQmJVSTdTVUZETjBNc1VVRkJVU3hYUVVGWExFVkJRVVU3VVVGRGNFSXNTMEZCU3l4RlFVRkZPMWxCUTA0c1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeHZRMEZCYjBNc1JVRkJSU3hEUVVGRE8xRkJRekZFTEV0QlFVc3NaVUZCWlR0WlFVTnVRaXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEcxRFFVRnRReXhGUVVGRkxFTkJRVU03VVVGRGVrUXNTMEZCU3l4VFFVRlRPMWxCUTJJc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeDVRMEZCZVVNc1JVRkJSU3hEUVVGRE8xRkJReTlFTEV0QlFVc3NhVUpCUVdsQ08xbEJRM0pDTEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVc2NVTkJRWEZETEVWQlFVVXNRMEZCUXp0UlFVTXpSQ3hMUVVGTExGbEJRVms3V1VGRGFFSXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSU3d3UTBGQk1FTXNSVUZCUlN4RFFVRkRPMUZCUTJoRk8xbEJRME1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4elFrRkJjMElzUlVGQlJTeERRVUZETzB0QlF6VkRPMEZCUTBZc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImdldFBhZ2VEYXRhIiwicGFnZSIsInBhZ2VEZXRhaWwiLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGV0YWlscyIsInN0YXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzbWFsbEltYWdlS2V5IiwibGFyZ2VJbWFnZUtleSIsInNyYyIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsInRyYW5zbGF0ZSIsInBvaW50cyIsImNvbXBsZXRlZCIsImxhbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZ2V0SG9tZURldGFpbCIsImdldFNldHRpbmdzRGV0YWlsIiwicmVwbGFjZUFsbCIsInBhZ2VEZXRhaWxzIiwib24iLCJhc3luYyIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJwYXRoQXJyIiwic3BsaXQiLCJwcmVzZW5jZURhdGEiLCJzdGFydFRpbWVzdGFtcCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;