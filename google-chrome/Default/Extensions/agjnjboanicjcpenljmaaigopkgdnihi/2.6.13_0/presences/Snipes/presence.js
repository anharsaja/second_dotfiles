var __webpack_exports__={};const presence=new Presence({clientId:"827620297896230912"}),browsingTimestamp=Math.floor(Date.now()/1e3),assets={fr:"https://cdn.rcd.gg/PreMiD/websites/S/Snipes/assets/0.png",at:"https://cdn.rcd.gg/PreMiD/websites/S/Snipes/assets/1.png",es:"https://cdn.rcd.gg/PreMiD/websites/S/Snipes/assets/2.png",nl:"https://cdn.rcd.gg/PreMiD/websites/S/Snipes/assets/3.png",it:"https://cdn.rcd.gg/PreMiD/websites/S/Snipes/assets/4.png",be:"https://cdn.rcd.gg/PreMiD/websites/S/Snipes/assets/5.png",ch:"https://cdn.rcd.gg/PreMiD/websites/S/Snipes/assets/6.png",usa:"https://cdn.rcd.gg/PreMiD/websites/S/Snipes/assets/7.png",de:"https://cdn.rcd.gg/PreMiD/websites/S/Snipes/assets/8.png"};presence.on("UpdateData",(async function(){const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Snipes/assets/logo.png"},t=await presence.getSetting("timeElapsed"),s=await presence.getSetting("showButtons"),a=await presence.getSetting("showSmallImages"),i=window.location.pathname.split("/"),n=/nl|fr|de/.test(i[1])?1:0;if(t&&(e.startTimestamp=browsingTimestamp),i[n+1])if("c"===i[n+1]){let t="men"===i[2]||"women"===i[2]||"kids"===i[2]?3:2;switch("www.snipes.be"!==document.location.hostname&&"www.snipes.ch"!==document.location.hostname||(t+=n),document.querySelector("a.b-refinements-category-link.active")&&i[t+1]&&(e.state=document.querySelector("a.b-refinements-category-link.active").getAttribute("data-name")),s&&(e.buttons=[{label:"View Category",url:window.location.href}]),i[t]){case"new":e.details="New";break;case"shoes":e.details="Shoes";break;case"clothing":e.details="Clothing";break;case"accessories":e.details="Accessoires";break;default:"brands"===i[n+2]?(e.details="Brands",i[n+3]&&(e.state=document.querySelector("li.b-breadcrumb-item>span.b-breadcrumb-text").textContent)):"sale"===i[n+2]?e.details="Sale":"deals"===i[n+2]?e.details="Deals":"musthaves"===i[n+2]?e.details="Must haves":document.querySelector("li.b-breadcrumb-item>span.b-breadcrumb-text")&&(e.details="Category:",e.state=document.querySelector("li.b-breadcrumb-item>span.b-breadcrumb-text").textContent)}}else if("p"===i[n+1]){const t=document.querySelector("div.js-target>a").textContent;s&&(e.buttons=[{label:"View Product",url:window.location.href}]),e.details=t,e.state=document.querySelector("div.js-target").textContent.replace(document.querySelector("div.js-target>.h-hide").textContent,"").replace(t,"").replace(/\s+/g," ").trim()}else i[n+1].startsWith("search")?(e.details="Search:",e.state=new URLSearchParams(window.location.search).get("q"),s&&(e.buttons=[{label:"View Results",url:window.location.href}])):"view-account"===i[n+1]?e.details="Account":"edit-account"===i[n+1]?e.details="Editing account":"cliqueoverview"===i[n+1]?e.details="Clique":"edit-password"===i[n+1]?e.details="Editing password":"order-history"===i[n+1]?e.details="Order history":"wishlist"===i[n+1]?e.details="Wishlist":"cart"===i[n+1]?e.details="Shopping cart":"addresses"===i[n+1]?e.details="Addresses":"newsletter-settings"===i[n+1]?e.details="Newsletter":"newsletter-preferences"===i[n+1]?e.details="Newsletter settings":"login"===i[n+1]?e.details="Login":"registration"===i[n+1]?e.details="Register":"storefinder"===i[n+1]?e.details="Storefinder":"content"===i[n+1]&&(e.details="Other");else e.details="Home";let r=document.location.hostname.replace("www.snipes.","").replace("www.snipesusa.","");a&&("com"===r&&(r="www.snipesusa.com"===document.location.hostname?"usa":"de"),e.smallImageKey=assets[r],e.smallImageText=`SNIPES ${r.toUpperCase()}`),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODI3NjIwMjk3ODk2MjMwOTEyXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmNvbnN0IGFzc2V0cyA9IHtcbiAgICBmcjogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU25pcGVzL2Fzc2V0cy8wLnBuZ1wiLFxuICAgIGF0OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TbmlwZXMvYXNzZXRzLzEucG5nXCIsXG4gICAgZXM6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NuaXBlcy9hc3NldHMvMi5wbmdcIixcbiAgICBubDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU25pcGVzL2Fzc2V0cy8zLnBuZ1wiLFxuICAgIGl0OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TbmlwZXMvYXNzZXRzLzQucG5nXCIsXG4gICAgYmU6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NuaXBlcy9hc3NldHMvNS5wbmdcIixcbiAgICBjaDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU25pcGVzL2Fzc2V0cy82LnBuZ1wiLFxuICAgIHVzYTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU25pcGVzL2Fzc2V0cy83LnBuZ1wiLFxuICAgIGRlOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TbmlwZXMvYXNzZXRzLzgucG5nXCIsXG59O1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NuaXBlcy9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9LCBzZXRUaW1lRWxhcHNlZCA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lRWxhcHNlZFwiKSwgc2V0U2hvd0J1dHRvbnMgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwic2hvd0J1dHRvbnNcIiksIHNldFNtYWxsSW1hZ2VzID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInNob3dTbWFsbEltYWdlc1wiKSwgdXJscGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIiksIHVybHBOdW0gPSAvbmx8ZnJ8ZGUvLnRlc3QodXJscGF0aFsxXSkgPyAxIDogMDtcbiAgICBpZiAoc2V0VGltZUVsYXBzZWQpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgIGlmICghdXJscGF0aFt1cmxwTnVtICsgMV0pXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJIb21lXCI7XG4gICAgZWxzZSBpZiAodXJscGF0aFt1cmxwTnVtICsgMV0gPT09IFwiY1wiKSB7XG4gICAgICAgIGxldCBudW0gPSB1cmxwYXRoWzJdID09PSBcIm1lblwiIHx8IHVybHBhdGhbMl0gPT09IFwid29tZW5cIiB8fCB1cmxwYXRoWzJdID09PSBcImtpZHNcIlxuICAgICAgICAgICAgPyAzXG4gICAgICAgICAgICA6IDI7XG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJ3d3cuc25pcGVzLmJlXCIgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcInd3dy5zbmlwZXMuY2hcIilcbiAgICAgICAgICAgIG51bSA9IG51bSArIHVybHBOdW07XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5iLXJlZmluZW1lbnRzLWNhdGVnb3J5LWxpbmsuYWN0aXZlXCIpICYmXG4gICAgICAgICAgICB1cmxwYXRoW251bSArIDFdKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYS5iLXJlZmluZW1lbnRzLWNhdGVnb3J5LWxpbmsuYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0U2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBDYXRlZ29yeVwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodXJscGF0aFtudW1dKSB7XG4gICAgICAgICAgICBjYXNlIFwibmV3XCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTmV3XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwic2hvZXNcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTaG9lc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNsb3RoaW5nXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ2xvdGhpbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJhY2Nlc3Nvcmllc1wiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkFjY2Vzc29pcmVzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmICh1cmxwYXRoW3VybHBOdW0gKyAyXSA9PT0gXCJicmFuZHNcIikge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJhbmRzXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmxwYXRoW3VybHBOdW0gKyAzXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpLmItYnJlYWRjcnVtYi1pdGVtPnNwYW4uYi1icmVhZGNydW1iLXRleHRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXJscGF0aFt1cmxwTnVtICsgMl0gPT09IFwic2FsZVwiKVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2FsZVwiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVybHBhdGhbdXJscE51bSArIDJdID09PSBcImRlYWxzXCIpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJEZWFsc1wiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVybHBhdGhbdXJscE51bSArIDJdID09PSBcIm11c3RoYXZlc1wiKVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTXVzdCBoYXZlc1wiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaS5iLWJyZWFkY3J1bWItaXRlbT5zcGFuLmItYnJlYWRjcnVtYi10ZXh0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDYXRlZ29yeTpcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpLmItYnJlYWRjcnVtYi1pdGVtPnNwYW4uYi1icmVhZGNydW1iLXRleHRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHVybHBhdGhbdXJscE51bSArIDFdID09PSBcInBcIikge1xuICAgICAgICBjb25zdCBicmFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuanMtdGFyZ2V0PmFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmIChzZXRTaG93QnV0dG9ucykge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IFByb2R1Y3RcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGJyYW5kO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuanMtdGFyZ2V0XCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQucmVwbGFjZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmpzLXRhcmdldD4uaC1oaWRlXCIpLnRleHRDb250ZW50LCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoYnJhbmQsIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcbiAgICAgICAgICAgIC50cmltKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVybHBhdGhbdXJscE51bSArIDFdLnN0YXJ0c1dpdGgoXCJzZWFyY2hcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaDpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJxXCIpO1xuICAgICAgICBpZiAoc2V0U2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBSZXN1bHRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodXJscGF0aFt1cmxwTnVtICsgMV0gPT09IFwidmlldy1hY2NvdW50XCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJBY2NvdW50XCI7XG4gICAgZWxzZSBpZiAodXJscGF0aFt1cmxwTnVtICsgMV0gPT09IFwiZWRpdC1hY2NvdW50XCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFZGl0aW5nIGFjY291bnRcIjtcbiAgICBlbHNlIGlmICh1cmxwYXRoW3VybHBOdW0gKyAxXSA9PT0gXCJjbGlxdWVvdmVydmlld1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ2xpcXVlXCI7XG4gICAgZWxzZSBpZiAodXJscGF0aFt1cmxwTnVtICsgMV0gPT09IFwiZWRpdC1wYXNzd29yZFwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRWRpdGluZyBwYXNzd29yZFwiO1xuICAgIGVsc2UgaWYgKHVybHBhdGhbdXJscE51bSArIDFdID09PSBcIm9yZGVyLWhpc3RvcnlcIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIk9yZGVyIGhpc3RvcnlcIjtcbiAgICBlbHNlIGlmICh1cmxwYXRoW3VybHBOdW0gKyAxXSA9PT0gXCJ3aXNobGlzdFwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV2lzaGxpc3RcIjtcbiAgICBlbHNlIGlmICh1cmxwYXRoW3VybHBOdW0gKyAxXSA9PT0gXCJjYXJ0XCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTaG9wcGluZyBjYXJ0XCI7XG4gICAgZWxzZSBpZiAodXJscGF0aFt1cmxwTnVtICsgMV0gPT09IFwiYWRkcmVzc2VzXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJBZGRyZXNzZXNcIjtcbiAgICBlbHNlIGlmICh1cmxwYXRoW3VybHBOdW0gKyAxXSA9PT0gXCJuZXdzbGV0dGVyLXNldHRpbmdzXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJOZXdzbGV0dGVyXCI7XG4gICAgZWxzZSBpZiAodXJscGF0aFt1cmxwTnVtICsgMV0gPT09IFwibmV3c2xldHRlci1wcmVmZXJlbmNlc1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTmV3c2xldHRlciBzZXR0aW5nc1wiO1xuICAgIGVsc2UgaWYgKHVybHBhdGhbdXJscE51bSArIDFdID09PSBcImxvZ2luXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb2dpblwiO1xuICAgIGVsc2UgaWYgKHVybHBhdGhbdXJscE51bSArIDFdID09PSBcInJlZ2lzdHJhdGlvblwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnaXN0ZXJcIjtcbiAgICBlbHNlIGlmICh1cmxwYXRoW3VybHBOdW0gKyAxXSA9PT0gXCJzdG9yZWZpbmRlclwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU3RvcmVmaW5kZXJcIjtcbiAgICBlbHNlIGlmICh1cmxwYXRoW3VybHBOdW0gKyAxXSA9PT0gXCJjb250ZW50XCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJPdGhlclwiO1xuICAgIGxldCBzbWFsbGltYWdlID0gZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgICAgLnJlcGxhY2UoXCJ3d3cuc25pcGVzLlwiLCBcIlwiKVxuICAgICAgICAucmVwbGFjZShcInd3dy5zbmlwZXN1c2EuXCIsIFwiXCIpO1xuICAgIGlmIChzZXRTbWFsbEltYWdlcykge1xuICAgICAgICBpZiAoc21hbGxpbWFnZSA9PT0gXCJjb21cIikge1xuICAgICAgICAgICAgc21hbGxpbWFnZSA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgPT09IFwid3d3LnNuaXBlc3VzYS5jb21cIiA/IFwidXNhXCIgOiBcImRlXCI7XG4gICAgICAgIH1cbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBhc3NldHNbc21hbGxpbWFnZV07XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGBTTklQRVMgJHtzbWFsbGltYWdlLnRvVXBwZXJDYXNlKCl9YDtcbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVUxdVJDeE5RVUZOTEUxQlFVMHNSMEZCUnp0SlFVTmtMRVZCUVVVc1JVRkJSU3d3UkVGQk1FUTdTVUZET1VRc1JVRkJSU3hGUVVGRkxEQkVRVUV3UkR0SlFVTTVSQ3hGUVVGRkxFVkJRVVVzTUVSQlFUQkVPMGxCUXpsRUxFVkJRVVVzUlVGQlJTd3dSRUZCTUVRN1NVRkRPVVFzUlVGQlJTeEZRVUZGTERCRVFVRXdSRHRKUVVNNVJDeEZRVUZGTEVWQlFVVXNNRVJCUVRCRU8wbEJRemxFTEVWQlFVVXNSVUZCUlN3d1JFRkJNRVE3U1VGRE9VUXNSMEZCUnl4RlFVRkZMREJFUVVFd1JEdEpRVU12UkN4RlFVRkZMRVZCUVVVc01FUkJRVEJFTzBOQlF6bEVMRU5CUVVNN1FVRkZSaXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxPMGxCUXpsQ0xFMUJRVTBzV1VGQldTeEhRVUZwUWp0UlFVTnFReXhoUVVGaExDdEVRVUZoTzB0QlF6RkNMRVZCUTBRc1kwRkJZeXhIUVVGSExFMUJRVTBzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4aFFVRmhMRU5CUVVNc1JVRkRiRVVzWTBGQll5eEhRVUZITEUxQlFVMHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hoUVVGaExFTkJRVU1zUlVGRGJFVXNZMEZCWXl4SFFVRkhMRTFCUVUwc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeHBRa0ZCYVVJc1EwRkJReXhGUVVOMFJTeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTTNReXhQUVVGUExFZEJRVWNzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRkwwTXNTVUZCU1N4alFVRmpPMUZCUVVVc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRKUVVWd1JTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU03VVVGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJRenRUUVVOd1JDeEpRVUZKTEU5QlFVOHNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eEZRVUZGTzFGQlEzUkRMRWxCUVVrc1IwRkJSeXhIUVVOT0xFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVFVGQlRUdFpRVU4wUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEVGl4SlFVTkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeExRVUZMTEdWQlFXVTdXVUZET1VNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEV0QlFVc3NaVUZCWlR0WlFVVTVReXhIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTnlRaXhKUVVORExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNjME5CUVhORExFTkJRVU03V1VGRE9VUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGRFpqdFpRVU5FTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVVHRwUWtGRE0wSXNZVUZCWVN4RFFVRkRMSE5EUVVGelF5eERRVUZETzJsQ1FVTnlSQ3haUVVGWkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZETlVJN1VVRkRSQ3hKUVVGSkxHTkJRV01zUlVGQlJUdFpRVU51UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8yZENRVU4wUWp0dlFrRkRReXhMUVVGTExFVkJRVVVzWlVGQlpUdHZRa0ZEZEVJc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1R0cFFrRkRla0k3WVVGRFJDeERRVUZETzFOQlEwWTdVVUZGUkN4UlFVRlJMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU55UWl4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRE8yZENRVU5ZTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRE8yZENRVU0zUWl4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzJkQ1FVTmlMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzJkQ1FVTXZRaXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRPMmRDUVVOb1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRlZCUVZVc1EwRkJRenRuUWtGRGJFTXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGhRVUZoTEVOQlFVTTdaMEpCUTNKRExFMUJRVTA3WVVGRFRqdFpRVU5FTzJkQ1FVTkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4UlFVRlJMRVZCUVVVN2IwSkJRM1JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRE8yOUNRVU5vUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVTdkMEpCUTNwQ0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRNVU1zTmtOQlFUWkRMRU5CUXpkRExFTkJRVU1zVjBGQlZ5eERRVUZETzNGQ1FVTmtPMmxDUVVORU8zRkNRVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eE5RVUZOTzI5Q1FVTjZReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXp0eFFrRkRNVUlzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFOUJRVTg3YjBKQlEzaERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzNGQ1FVTXpRaXhKUVVGSkxFOUJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1YwRkJWenR2UWtGRE5VTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxFTkJRVU03Y1VKQlEyaERMRWxCUTBvc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5dzJRMEZCTmtNc1EwRkJReXhGUVVOd1JUdHZRa0ZEUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRVmNzUTBGQlF6dHZRa0ZEYmtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTXhReXcyUTBGQk5rTXNRMEZETjBNc1EwRkJReXhYUVVGWExFTkJRVU03YVVKQlEyUTdVMEZEUmp0TFFVTkVPMU5CUVUwc1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSVHRSUVVONFF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM0JGTEVsQlFVa3NZMEZCWXl4RlFVRkZPMWxCUTI1Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdaMEpCUTNSQ08yOUNRVU5ETEV0QlFVc3NSVUZCUlN4alFVRmpPMjlDUVVOeVFpeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSk8ybENRVU42UWp0aFFVTkVMRU5CUVVNN1UwRkRSanRSUVVWRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUXpkQ0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVR0aFFVTXpRaXhoUVVGaExFTkJRVU1zWlVGQlpTeERRVUZETzJGQlF6bENMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRMjVDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUXpORUxFVkJRVVVzUTBGRFJqdGhRVU5CTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRE8yRkJRMnhDTEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRE8yRkJRM0JDTEVsQlFVa3NSVUZCUlN4RFFVRkRPMHRCUTFRN1UwRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFGQlEzSkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlEycERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZNVVVzU1VGQlNTeGpRVUZqTEVWQlFVVTdXVUZEYmtJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dG5Ra0ZEZEVJN2IwSkJRME1zUzBGQlN5eEZRVUZGTEdOQlFXTTdiMEpCUTNKQ0xFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrN2FVSkJRM3BDTzJGQlEwUXNRMEZCUXp0VFFVTkdPMHRCUTBRN1UwRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1kwRkJZenRSUVVOcVJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVNM1FpeEpRVUZKTEU5QlFVOHNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzWTBGQll6dFJRVU12UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMU5CUTNKRExFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhuUWtGQlowSTdVVUZEYWtRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVMEZETlVJc1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMR1ZCUVdVN1VVRkRhRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dFRRVU4wUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NaVUZCWlR0UlFVTm9SQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXp0VFFVTnVReXhKUVVGSkxFOUJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1ZVRkJWVHRSUVVNelF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRlZCUVZVc1EwRkJRenRUUVVNNVFpeEpRVUZKTEU5QlFVOHNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzVFVGQlRUdFJRVU4yUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF6dFRRVU51UXl4SlFVRkpMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NWMEZCVnp0UlFVTTFReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXp0VFFVTXZRaXhKUVVGSkxFOUJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc2NVSkJRWEZDTzFGQlEzUkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzV1VGQldTeERRVUZETzFOQlEyaERMRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4M1FrRkJkMEk3VVVGRGVrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0VFFVTjZReXhKUVVGSkxFOUJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1QwRkJUenRSUVVGRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMU5CUTNKRkxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhqUVVGak8xRkJReTlETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xTkJRemxDTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eGhRVUZoTzFGQlF6bERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzFOQlEycERMRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRPMUZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTTdTVUZGTlVVc1NVRkJTU3hWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJPMU5CUTNwRExFOUJRVThzUTBGQlF5eGhRVUZoTEVWQlFVVXNSVUZCUlN4RFFVRkRPMU5CUXpGQ0xFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVVZvUXl4SlFVRkpMR05CUVdNc1JVRkJSVHRSUVVOdVFpeEpRVUZKTEZWQlFWVXNTMEZCU3l4TFFVRkxMRVZCUVVVN1dVRkRla0lzVlVGQlZUdG5Ra0ZEVkN4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUzBGQlN5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1UwRkRia1U3VVVGRlJDeFpRVUZaTEVOQlFVTXNZVUZCWVN4SFFVRkhMRTFCUVUwc1EwRkJReXhWUVVGcFF5eERRVUZETEVOQlFVTTdVVUZEZGtVc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eFZRVUZWTEZWQlFWVXNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hEUVVGRE8wdEJRMjVGTzBsQlJVUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJhc3NldHMiLCJmciIsImF0IiwiZXMiLCJubCIsIml0IiwiYmUiLCJjaCIsInVzYSIsImRlIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzZXRUaW1lRWxhcHNlZCIsImdldFNldHRpbmciLCJzZXRTaG93QnV0dG9ucyIsInNldFNtYWxsSW1hZ2VzIiwidXJscGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsInVybHBOdW0iLCJ0ZXN0Iiwic3RhcnRUaW1lc3RhbXAiLCJudW0iLCJkb2N1bWVudCIsImhvc3RuYW1lIiwicXVlcnlTZWxlY3RvciIsInN0YXRlIiwiZ2V0QXR0cmlidXRlIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiaHJlZiIsImRldGFpbHMiLCJ0ZXh0Q29udGVudCIsImJyYW5kIiwicmVwbGFjZSIsInRyaW0iLCJzdGFydHNXaXRoIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZ2V0Iiwic21hbGxpbWFnZSIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsInRvVXBwZXJDYXNlIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;