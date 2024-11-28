var __webpack_exports__={};const presence=new Presence({clientId:"991078618866274364"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CodinGame/assets/0.png",startTimestamp:browsingTimestamp},{pathname:t}=document.location;if("/"===t)e.details="Browsing...";else if(t.includes("/home"))e.details="On the dashboard",e.state=`${document.querySelectorAll("div[class='home-content'] > div > div > div > div > home > div > home-react > div > div > section > section > div > div > div > div")[0].textContent} - Rank : ${document.querySelectorAll("div[class='home-content'] > div > div > div > div > home > div > home-react > div > div > section > section > div > div > div > div")[4].textContent}`;else if(t.includes("/training"))t.includes("/easy/")?(e.details="Training: Easy",e.state=`${document.querySelector("h1[class='title']").textContent} (${document.querySelector("div[class='chart-inner']").textContent}%)`):t.includes("/medium/")?(e.details="Training: Medium",e.state=`${document.querySelector("h1[class='title']").textContent} (${document.querySelector("div[class='chart-inner']").textContent}%)`):t.includes("/hard/")?(e.details="Training: Hard",e.state=`${document.querySelector("h1[class='title']").textContent} (${document.querySelector("div[class='chart-inner']").textContent}%)`):t.includes("/expert/")?(e.details="Training: Very Hard",e.state=`${document.querySelector("h1[class='title']").textContent} (${document.querySelector("div[class='chart-inner']").textContent}%)`):e.details="Looking at Practice";else if(t.includes("/multiplayer"))if(t.includes("/clashofcode"))e.details="Looking at Clash of Code",e.state=`Rank : ${document.querySelector("span[class='rank-value']").textContent} th`;else if(t.includes("/bot-programming")){e.details="Training: Bot Programming";try{e.state=`${document.querySelector("h1[class='title']").textContent} - Rank : ${document.querySelectorAll("div[id='content-details-league'] > div > div")[1].textContent}`}catch{e.state=`${document.querySelector("h1[class='title']").textContent} - Not yet solved`}}else if(t.includes("/codegolf")){e.details="Training: Code Golf";try{"0"!==document.querySelector("div[class='chart-inner']").textContent?e.state=`${document.querySelector("h1[class='title']").textContent} (${document.querySelector("span[class='rank-value']").textContent}${document.querySelector("span[class='rank-suffix']").textContent}/${document.querySelector("span[class='rank-total']").textContent})`:e.state="Not yet solved"}catch{e.state=`${document.querySelector("h1[class='title']").textContent} (${document.querySelector("span[class='rank-value']").textContent}${document.querySelector("span[class='rank-suffix']").textContent}/${document.querySelector("span[class='rank-total']").textContent})`}}else if(t.includes("/optimization")){e.details="Training: Optimization";try{"0"!==document.querySelector("div[class='chart-inner']").textContent?e.state=`${document.querySelector("h1[class='title']").textContent} (${document.querySelector("span[class='rank-value']").textContent}${document.querySelector("span[class='rank-suffix']").textContent}/${document.querySelector("span[class='rank-total']").textContent})`:e.state="Not yet solved"}catch{e.state=`${document.querySelector("h1[class='title']").textContent} (${document.querySelector("span[class='rank-value']").textContent}${document.querySelector("span[class='rank-suffix']").textContent}/${document.querySelector("span[class='rank-total']").textContent})`}}else e.details="Looking at a competition";else if(t.includes("/cooperate"))e.details="Looking at the corporate page";else if(t.includes("/learn"))e.details="Looking at the learn page";else if(t.includes("/events"))e.details="Looking at the events page";else if(t.includes("/contribute/community"))e.details="Looking at community page";else if(t.includes("/contribute/my-contributions"))e.details="Looking at their contributions";else if(t.includes("/live-streams"))e.details="Looking at live streams";else if(t.includes("/blog"))e.details="Looking at the blog";else if(t.includes("/forum"))e.details="Looking at the forum";else if(t.includes("/profile"))e.details="Looking at a profile";else if(t.includes("/settings"))e.details="Looking at their settings";else if(t.includes("/about"))e.details="Looking at the about page";else if(t.includes("/careers"))e.details="Looking at the careers page";else if(t.includes("/work"))e.details="Looking at the work page";else if(t.includes("/legal/privacy-policy")&&t.includes("/playgrounds"))e.details="Looking at the privacy policy";else if(t.includes("/help-center"))e.details="Looking at the FAQ page";else if(t.includes("/start"))e.details="Not logged in";else if(t.includes("/ide"))if(t.includes("/ide/puzzle/")){e.details=`Solving the challenge: ${document.querySelectorAll("h1[class='cg-ide-title'] > span")[document.querySelectorAll("h1[class='cg-ide-title'] > span").length-1].textContent}`;try{const t=document.querySelector("span[class*='score-value']").textContent;if("N/A"===t)e.state="0%";else try{const n=document.querySelector("span[class='rank-value']").textContent;e.state=n?`${t}%`:`${n}th/${document.querySelector("span[class='rank-total']").textContent}`}catch{e.state=`${t}%`}}catch{e.state=`League: ${document.querySelector("span[class='league-value']").textContent}`}}else e.details=document.querySelectorAll("h1[class='cg-ide-title'] > span")[document.querySelectorAll("h1[class='cg-ide-title'] > span").length-1].textContent,e.state=`Time left : ${document.querySelector("span[class*='minutes']").textContent}m : ${document.querySelector("span[class*='seconds']").textContent}s`;else t.includes("/clashofcode/clash/")?(e.details="Waiting for the Clash of Code",e.buttons=[{label:"Join clash",url:document.querySelector("input[class='copy-url-button']").getAttribute("value")}]):!t.includes("/legal/privacy-policy")&&t.includes("/playgrounds")&&(e.details=document.querySelector("h1[class='playground_header-title'] > span").textContent,e.state="Learning");e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUNMLFNBQVNLLGlCQUFpQixtQ0FBbUNHLE9BQ3ZLLEdBQUdGLGNBQ1AsSUFDSSxNQUFNRyxFQUFRVCxTQUFTTyxjQUFjLDhCQUE4QkQsWUFDbkUsR0FBYyxRQUFWRyxFQUNBYixFQUFhUSxNQUFRLFVBRXJCLElBQ0ksTUFBTU0sRUFBT1YsU0FBU08sY0FBYyw0QkFBNEJELFlBSzVEVixFQUFhUSxNQUpaTSxFQUlvQixHQUFHRCxLQUhILEdBQUdDLE9BQVVWLFNBQVNPLGNBQWMsNEJBQTRCRCxhQU83RixDQUZBLE1BQ0lWLEVBQWFRLE1BQVEsR0FBR0ssSUFDNUIsQ0FLUixDQUZBLE1BQ0liLEVBQWFRLE1BQVEsV0FBV0osU0FBU08sY0FBYyw4QkFBOEJELGFBQ3pGLENBQ0osTUFFSVYsRUFBYU0sUUFBVUYsU0FBU0ssaUJBQWlCLG1DQUFtQ0wsU0FBU0ssaUJBQWlCLG1DQUFtQ0csT0FBUyxHQUFHRixZQUM3SlYsRUFBYVEsTUFBUSxlQUFlSixTQUFTTyxjQUFjLDBCQUEwQkQsa0JBQWtCTixTQUFTTyxjQUFjLDBCQUEwQkQsb0JBR3ZKUCxFQUFTSSxTQUFTLHdCQUN2QlAsRUFBYU0sUUFBVSxnQ0FDdkJOLEVBQWFlLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxhQUNQQyxJQUFLYixTQUNBTyxjQUFjLGtDQUNkTyxhQUFhLGFBSXBCZixFQUFTSSxTQUFTLDBCQUN4QkosRUFBU0ksU0FBUyxrQkFDbEJQLEVBQWFNLFFBQVVGLFNBQVNPLGNBQWMsOENBQThDRCxZQUM1RlYsRUFBYVEsTUFBUSxZQUVyQlIsRUFBYU0sUUFDYmhCLFNBQVM2QixZQUFZbkIsR0FFckJWLFNBQVM2QixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjk5MTA3ODYxODg2NjI3NDM2NFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ29kaW5HYW1lL2Fzc2V0cy8wLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSB9ID0gZG9jdW1lbnQubG9jYXRpb247XG4gICAgaWYgKHBhdGhuYW1lID09PSBcIi9cIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nLi4uXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvaG9tZVwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiT24gdGhlIGRhc2hib2FyZFwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W2NsYXNzPSdob21lLWNvbnRlbnQnXSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGhvbWUgPiBkaXYgPiBob21lLXJlYWN0ID4gZGl2ID4gZGl2ID4gc2VjdGlvbiA+IHNlY3Rpb24gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXZcIilbMF0udGV4dENvbnRlbnR9IC0gUmFuayA6ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdltjbGFzcz0naG9tZS1jb250ZW50J10gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBob21lID4gZGl2ID4gaG9tZS1yZWFjdCA+IGRpdiA+IGRpdiA+IHNlY3Rpb24gPiBzZWN0aW9uID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2XCIpWzRdLnRleHRDb250ZW50fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3RyYWluaW5nXCIpKSB7XG4gICAgICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9lYXN5L1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlRyYWluaW5nOiBFYXN5XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFbY2xhc3M9J3RpdGxlJ11cIikudGV4dENvbnRlbnR9ICgke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3M9J2NoYXJ0LWlubmVyJ11cIikudGV4dENvbnRlbnR9JSlgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL21lZGl1bS9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJUcmFpbmluZzogTWVkaXVtXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFbY2xhc3M9J3RpdGxlJ11cIikudGV4dENvbnRlbnR9ICgke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3M9J2NoYXJ0LWlubmVyJ11cIikudGV4dENvbnRlbnR9JSlgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2hhcmQvXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVHJhaW5pbmc6IEhhcmRcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVtjbGFzcz0ndGl0bGUnXVwiKS50ZXh0Q29udGVudH0gKCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdltjbGFzcz0nY2hhcnQtaW5uZXInXVwiKS50ZXh0Q29udGVudH0lKWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvZXhwZXJ0L1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlRyYWluaW5nOiBWZXJ5IEhhcmRcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVtjbGFzcz0ndGl0bGUnXVwiKS50ZXh0Q29udGVudH0gKCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdltjbGFzcz0nY2hhcnQtaW5uZXInXVwiKS50ZXh0Q29udGVudH0lKWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgUHJhY3RpY2VcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvbXVsdGlwbGF5ZXJcIikpIHtcbiAgICAgICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2NsYXNob2Zjb2RlXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBhdCBDbGFzaCBvZiBDb2RlXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgUmFuayA6ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5bY2xhc3M9J3JhbmstdmFsdWUnXVwiKS50ZXh0Q29udGVudH0gdGhgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2JvdC1wcm9ncmFtbWluZ1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlRyYWluaW5nOiBCb3QgUHJvZ3JhbW1pbmdcIjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxW2NsYXNzPSd0aXRsZSddXCIpLnRleHRDb250ZW50fSAtIFJhbmsgOiAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZbaWQ9J2NvbnRlbnQtZGV0YWlscy1sZWFndWUnXSA+IGRpdiA+IGRpdlwiKVsxXS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVtjbGFzcz0ndGl0bGUnXVwiKS50ZXh0Q29udGVudH0gLSBOb3QgeWV0IHNvbHZlZGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvY29kZWdvbGZcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJUcmFpbmluZzogQ29kZSBHb2xmXCI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2W2NsYXNzPSdjaGFydC1pbm5lciddXCIpLnRleHRDb250ZW50ICE9PSBcIjBcIikge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFbY2xhc3M9J3RpdGxlJ11cIikudGV4dENvbnRlbnR9ICgke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuW2NsYXNzPSdyYW5rLXZhbHVlJ11cIikudGV4dENvbnRlbnR9JHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhbltjbGFzcz0ncmFuay1zdWZmaXgnXVwiKS50ZXh0Q29udGVudH0vJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhbltjbGFzcz0ncmFuay10b3RhbCddXCIpLnRleHRDb250ZW50fSlgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiTm90IHlldCBzb2x2ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFbY2xhc3M9J3RpdGxlJ11cIikudGV4dENvbnRlbnR9ICgke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuW2NsYXNzPSdyYW5rLXZhbHVlJ11cIikudGV4dENvbnRlbnR9JHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhbltjbGFzcz0ncmFuay1zdWZmaXgnXVwiKS50ZXh0Q29udGVudH0vJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhbltjbGFzcz0ncmFuay10b3RhbCddXCIpLnRleHRDb250ZW50fSlgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL29wdGltaXphdGlvblwiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlRyYWluaW5nOiBPcHRpbWl6YXRpb25cIjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3M9J2NoYXJ0LWlubmVyJ11cIikudGV4dENvbnRlbnQgIT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVtjbGFzcz0ndGl0bGUnXVwiKS50ZXh0Q29udGVudH0gKCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5bY2xhc3M9J3JhbmstdmFsdWUnXVwiKS50ZXh0Q29udGVudH0ke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuW2NsYXNzPSdyYW5rLXN1ZmZpeCddXCIpLnRleHRDb250ZW50fS8ke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuW2NsYXNzPSdyYW5rLXRvdGFsJ11cIikudGV4dENvbnRlbnR9KWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJOb3QgeWV0IHNvbHZlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVtjbGFzcz0ndGl0bGUnXVwiKS50ZXh0Q29udGVudH0gKCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5bY2xhc3M9J3JhbmstdmFsdWUnXVwiKS50ZXh0Q29udGVudH0ke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuW2NsYXNzPSdyYW5rLXN1ZmZpeCddXCIpLnRleHRDb250ZW50fS8ke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuW2NsYXNzPSdyYW5rLXRvdGFsJ11cIikudGV4dENvbnRlbnR9KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgYSBjb21wZXRpdGlvblwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9jb29wZXJhdGVcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb29raW5nIGF0IHRoZSBjb3Jwb3JhdGUgcGFnZVwiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2xlYXJuXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBhdCB0aGUgbGVhcm4gcGFnZVwiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2V2ZW50c1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgdGhlIGV2ZW50cyBwYWdlXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvY29udHJpYnV0ZS9jb21tdW5pdHlcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb29raW5nIGF0IGNvbW11bml0eSBwYWdlXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvY29udHJpYnV0ZS9teS1jb250cmlidXRpb25zXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBhdCB0aGVpciBjb250cmlidXRpb25zXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvbGl2ZS1zdHJlYW1zXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBhdCBsaXZlIHN0cmVhbXNcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9ibG9nXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBhdCB0aGUgYmxvZ1wiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2ZvcnVtXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBhdCB0aGUgZm9ydW1cIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9wcm9maWxlXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBhdCBhIHByb2ZpbGVcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9zZXR0aW5nc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgdGhlaXIgc2V0dGluZ3NcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9hYm91dFwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgdGhlIGFib3V0IHBhZ2VcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9jYXJlZXJzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBhdCB0aGUgY2FyZWVycyBwYWdlXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvd29ya1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgdGhlIHdvcmsgcGFnZVwiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2xlZ2FsL3ByaXZhY3ktcG9saWN5XCIpICYmXG4gICAgICAgIHBhdGhuYW1lLmluY2x1ZGVzKFwiL3BsYXlncm91bmRzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBhdCB0aGUgcHJpdmFjeSBwb2xpY3lcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9oZWxwLWNlbnRlclwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgdGhlIEZBUSBwYWdlXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvc3RhcnRcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJOb3QgbG9nZ2VkIGluXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvaWRlXCIpKSB7XG4gICAgICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9pZGUvcHV6emxlL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU29sdmluZyB0aGUgY2hhbGxlbmdlOiAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMVtjbGFzcz0nY2ctaWRlLXRpdGxlJ10gPiBzcGFuXCIpW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMVtjbGFzcz0nY2ctaWRlLXRpdGxlJ10gPiBzcGFuXCIpLmxlbmd0aCAtXG4gICAgICAgICAgICAgICAgMV0udGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhbltjbGFzcyo9J3Njb3JlLXZhbHVlJ11cIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3JlID09PSBcIk4vQVwiKVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIjAlXCI7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5bY2xhc3M9J3JhbmstdmFsdWUnXVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmFuaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3Jhbmt9dGgvJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhbltjbGFzcz0ncmFuay10b3RhbCddXCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7c2NvcmV9JWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7c2NvcmV9JWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYExlYWd1ZTogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhbltjbGFzcz0nbGVhZ3VlLXZhbHVlJ11cIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgxW2NsYXNzPSdjZy1pZGUtdGl0bGUnXSA+IHNwYW5cIilbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgxW2NsYXNzPSdjZy1pZGUtdGl0bGUnXSA+IHNwYW5cIikubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgVGltZSBsZWZ0IDogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhbltjbGFzcyo9J21pbnV0ZXMnXVwiKS50ZXh0Q29udGVudH1tIDogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhbltjbGFzcyo9J3NlY29uZHMnXVwiKS50ZXh0Q29udGVudH1zYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9jbGFzaG9mY29kZS9jbGFzaC9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIldhaXRpbmcgZm9yIHRoZSBDbGFzaCBvZiBDb2RlXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkpvaW4gY2xhc2hcIixcbiAgICAgICAgICAgICAgICB1cmw6IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbY2xhc3M9J2NvcHktdXJsLWJ1dHRvbiddXCIpXG4gICAgICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCFwYXRobmFtZS5pbmNsdWRlcyhcIi9sZWdhbC9wcml2YWN5LXBvbGljeVwiKSAmJlxuICAgICAgICBwYXRobmFtZS5pbmNsdWRlcyhcIi9wbGF5Z3JvdW5kc1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVtjbGFzcz0ncGxheWdyb3VuZF9oZWFkZXItdGl0bGUnXSA+IHNwYW5cIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiTGVhcm5pbmdcIjtcbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN4RlFVTmFMRFpFUVVFMlJEdFJRVU01UkN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRVZCUTBRc1JVRkJSU3hSUVVGUkxFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTJ4RExFbEJRVWtzVVVGQlVTeExRVUZMTEVkQlFVYzdVVUZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHRkJRV0VzUTBGQlF6dFRRVU4wUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdVVUZEY0VNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRSUVVNeFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUTNCQ0xGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkRlRUlzY1VsQlFYRkpMRU5CUTNKSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZEVGl4aFFVTkRMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZEZUVJc2NVbEJRWEZKTEVOQlEzSkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGRFRpeEZRVUZGTEVOQlFVTTdTMEZEU0R0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0UlFVTXhReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1dVRkRhRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUTBGQlF6dFpRVU40UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRM0JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4WFFVTTNReXhMUVVGTExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVsQlFVa3NRMEZCUXp0VFFVTjRSVHRoUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRaUVVONlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETzFsQlF6RkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGRGNFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRmRCUXpkRExFdEJRVXNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl3d1FrRkJNRUlzUTBGQlF5eERRVUZETEZkQlFWY3NTVUZCU1N4RFFVRkRPMU5CUTNoRk8yRkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8xbEJRM1pETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdXVUZEZUVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1YwRkROME1zUzBGQlN5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMREJDUVVFd1FpeERRVUZETEVOQlFVTXNWMEZCVnl4SlFVRkpMRU5CUVVNN1UwRkRlRVU3WVVGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3V1VGRGVrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0WlFVTTNReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlEzQkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJReXhYUVVNM1F5eExRVUZMTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNRMEZCUXl4WFFVRlhMRWxCUVVrc1EwRkJRenRUUVVONFJUczdXVUZCVFN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPMHRCUTNCRU8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8xRkJRemRETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdFpRVU4wUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEQkNRVUV3UWl4RFFVRkRPMWxCUTJ4RUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NWVUZEY0VJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5d3dRa0ZCTUVJc1EwRkJReXhEUVVGRExGZEJRM0JFTEV0QlFVc3NRMEZCUXp0VFFVTk9PMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFVkJRVVU3V1VGRGFrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd5UWtGQk1rSXNRMEZCUXp0WlFVVnVSQ3hKUVVGSk8yZENRVU5JTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkRjRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETEZkQlF6ZERMR0ZCUTBNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVTjRRaXc0UTBGQk9FTXNRMEZET1VNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVU5PTEVWQlFVVXNRMEZCUXp0aFFVTklPMWxCUVVNc1RVRkJUVHRuUWtGRFVDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUTNCQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF5eFhRVU0zUXl4dFFrRkJiVUlzUTBGQlF6dGhRVU53UWp0VFFVTkVPMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMWxCUXpGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03V1VGRE4wTXNTVUZCU1R0blFrRkRTQ3hKUVVORExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEV0QlFVc3NSMEZCUnl4RlFVTnlSVHR2UWtGRFJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUTNCQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF5eFhRVU0zUXl4TFFVRkxMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1EwRkJReXhYUVVGWExFZEJRMnhGTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc01rSkJRVEpDTEVOQlFVTXNRMEZCUXl4WFFVTnlSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXp0cFFrRkRkRVU3TzI5Q1FVRk5MRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1lVRkROME03V1VGQlF5eE5RVUZOTzJkQ1FVTlFMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGRGNFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRmRCUXpkRExFdEJRVXNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl3d1FrRkJNRUlzUTBGQlF5eERRVUZETEZkQlFWY3NSMEZEYkVVc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5d3lRa0ZCTWtJc1EwRkJReXhEUVVGRExGZEJRM0pFTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXd3UWtGQk1FSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRE8yRkJRM1JGTzFOQlEwUTdZVUZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEVWQlFVVTdXVUZET1VNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJRenRaUVVOb1JDeEpRVUZKTzJkQ1FVTklMRWxCUTBNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5d3dRa0ZCTUVJc1EwRkJReXhEUVVGRExGZEJRVmNzUzBGQlN5eEhRVUZITEVWQlEzSkZPMjlDUVVORUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZEY0VJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExGZEJRemRETEV0QlFVc3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXd3UWtGQk1FSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1IwRkRiRVVzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl3eVFrRkJNa0lzUTBGQlF5eERRVUZETEZkQlEzSkVMRWxCUVVrc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5d3dRa0ZCTUVJc1EwRkJReXhEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETzJsQ1FVTjBSVHM3YjBKQlFVMHNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0aFFVTTNRenRaUVVGRExFMUJRVTA3WjBKQlExQXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVOd1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVTXNWMEZETjBNc1MwRkJTeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETERCQ1FVRXdRaXhEUVVGRExFTkJRVU1zVjBGQlZ5eEhRVU5zUlN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExESkNRVUV5UWl4RFFVRkRMRU5CUVVNc1YwRkRja1FzU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMREJDUVVFd1FpeERRVUZETEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNN1lVRkRkRVU3VTBGRFJEczdXVUZCVFN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEQkNRVUV3UWl4RFFVRkRPMHRCUTNwRU8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMQ3RDUVVFclFpeERRVUZETzFOQlEyNUVMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYmtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3lRa0ZCTWtJc1EwRkJRenRUUVVNdlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc05FSkJRVFJDTEVOQlFVTTdVMEZEYUVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEhWQ1FVRjFRaXhEUVVGRE8xRkJRMnhFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01rSkJRVEpDTEVOQlFVTTdVMEZETDBNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETERoQ1FVRTRRaXhEUVVGRE8xRkJRM3BFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1owTkJRV2RETEVOQlFVTTdVMEZEY0VRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXp0UlFVTXhReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRE8xTkJRemRETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03VVVGRGJFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0VFFVTjZReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUTI1RExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03VTBGRE1VTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF6dFJRVU55UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMU5CUXpGRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRkRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3eVFrRkJNa0lzUTBGQlF6dFRRVU12UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETzFGQlEyNURMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTWtKQlFUSkNMRU5CUVVNN1UwRkRMME1zU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRSUVVOeVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRFpDUVVFMlFpeERRVUZETzFOQlEycEVMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEYkVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRUUVVNNVF5eEpRVU5LTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTTdVVUZETVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTTdVVUZGYWtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3JRa0ZCSzBJc1EwRkJRenRUUVVOdVJDeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRE8xRkJRM3BETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTTdVMEZETjBNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0UlFVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETzFOQlEzaEZMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0UlFVTnVReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVN1dVRkRkRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3d1FrRkRkRUlzVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUXpORUxGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwN1owSkJRMnhGTEVOQlFVTXNRMEZEUml4RFFVRkRMRmRCUTBnc1JVRkJSU3hEUVVGRE8xbEJRMGdzU1VGQlNUdG5Ra0ZEU0N4TlFVRk5MRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU51UXl3MFFrRkJORUlzUTBGRE5VSXNRMEZCUXl4WFFVRlhMRU5CUVVNN1owSkJRMlFzU1VGQlNTeExRVUZMTEV0QlFVc3NTMEZCU3p0dlFrRkJSU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0eFFrRkRNVU03YjBKQlEwb3NTVUZCU1R0M1FrRkRTQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTnNReXd3UWtGQk1FSXNRMEZETVVJc1EwRkJReXhYUVVGWExFTkJRVU03ZDBKQlEyUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSVHMwUWtGRFZpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1NVRkJTU3hOUVVNelFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMREJDUVVFd1FpeERRVUZETEVOQlFVTXNWMEZEY0VRc1JVRkJSU3hEUVVGRE8zbENRVU5JT3pzMFFrRkJUU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NTMEZCU3l4SFFVRkhMRU5CUVVNN2NVSkJRM2hETzI5Q1FVRkRMRTFCUVUwN2QwSkJRMUFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhMRXRCUVVzc1IwRkJSeXhEUVVGRE8zRkNRVU5xUXp0cFFrRkRSRHRoUVVORU8xbEJRVU1zVFVGQlRUdG5Ra0ZEVUN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGZEJRM0JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc05FSkJRVFJDTEVOQlFVTXNRMEZCUXl4WFFVTjBSQ3hGUVVGRkxFTkJRVU03WVVGRFNEdFRRVU5FTzJGQlFVMDdXVUZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkRMME1zYVVOQlFXbERMRU5CUTJwRExFTkJRMEVzVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGRGRrVXNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRaQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdWQlEzQkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1EwRkJReXhYUVVOc1JDeFBRVUZQTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJRenRUUVVOMlJUdExRVU5FTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRVZCUVVVN1VVRkRjRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3clFrRkJLMElzUTBGQlF6dFJRVU4yUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8xbEJRM1JDTzJkQ1FVTkRMRXRCUVVzc1JVRkJSU3haUVVGWk8yZENRVU51UWl4SFFVRkhMRVZCUVVVc1VVRkJVVHR4UWtGRFdDeGhRVUZoTEVOQlFVTXNaME5CUVdkRExFTkJRVU03Y1VKQlF5OURMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU03WVVGRGRrSTdVMEZEUkN4RFFVRkRPMHRCUTBZN1UwRkJUU3hKUVVOT0xFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4MVFrRkJkVUlzUTBGQlF6dFJRVU16UXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eEZRVU5vUXp0UlFVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZETlVNc05FTkJRVFJETEVOQlF6VkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRMlFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4VlFVRlZMRU5CUVVNN1MwRkRhRU03U1VGRlJDeEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXpzN1VVRkRlRVFzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpkQ0xFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGF0aG5hbWUiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiZGV0YWlscyIsImluY2x1ZGVzIiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGV4dENvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwic2NvcmUiLCJyYW5rIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;