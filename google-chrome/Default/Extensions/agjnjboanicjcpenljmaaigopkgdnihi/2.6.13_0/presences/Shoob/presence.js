var __webpack_exports__={};const presence=new Presence({clientId:"719127768868061246"}),browsingTimestamp=Math.floor(Date.now()/1e3),staticPages={"/":{details:"Viewing homepage"},"/home":{details:"Viewing homepage"},"/achievements":{details:"Viewing achievements"},"/appeals":{details:"Viewing Appeals"},"/anime":{details:"Viewing Anime"},"/bank":{details:"Viewing the Bank"},"/bump":{details:"Bumping"},"/card-abilities":{details:"Viewing Card Abilities"},"/cardmakers/leaderboard":{details:"Viewing CardMaker Leaderboards"},"/copyright":{details:"Viewing Copyright Policy"},"/creators":{details:"Viewing Creators"},"/dashboard":{details:"Viewing the Dashboard"},"/events":{details:"Viewing Events"},"/friends":{details:"Viewing Friends"},"/fusion":{details:"Fusing Cards"},"/giveaway":{details:"Viewing Giveaways"},"/keysgiveaways":{details:"Viewing Key Giveaways"},"/leaderboards":{details:"Viewing Leaderboards"},"/market":{details:"Viewing the Market"},"/medals":{details:"Viewing Medals"},"/messages":{details:"Viewing Private Messages"},"/notifications":{details:"Viewing Notifications"},"/premium":{details:"Viewing Premium"},"/privacy-policy":{details:"Viewing Privacy Policy"},"/rules":{details:"Reading the Rules"},"/settings":{details:"Managing Settings"},"/stacks":{details:"Viewing Stacks"},"/staff":{details:"Viewing Staff Pages"},"/staff-list":{details:"Viewing Staff List"},"/submit":{details:"Submitting a Card"},"/tasks":{details:"Viewing Statistics & Tasks"},"/this-or-that":{details:"Playing This or That"},"/trades":{details:"Viewing Trades"},"/updates":{details:"Viewing Updates"}};function convertSuffixedToNumber(e){const[,t,a]=e.match(/([\d.]+)\s*([A-Z])?/);return parseFloat(t)*({K:1e3,M:1e6,B:1e9,T:1e12}[a]??1)}function convertNumberToSuffixed(e){const t={K:1e3,M:1e6,B:1e9,T:1e12},a=Object.keys(t).reverse();for(const i of a)if(e>=t[i])return`${(e/t[i]).toFixed(1)}${i}`;return`${e}`}presence.on("UpdateData",(async()=>{let e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Shoob/assets/logo.png",startTimestamp:browsingTimestamp};const{pathname:t,href:a}=window.location,i=t.split("/").slice(1),s=document.querySelector("[itemprop='breadcrumb'] > li:last-child")?.textContent,r=document.querySelector(".header-avatar"),n=await presence.getSetting("currencyFormat");r&&(e.smallImageKey=getComputedStyle(r).backgroundImage.match(/url\("(.*)"\)/)[1],e.smallImageText=0===n?`💴 ${document.querySelector(".header-wallet").textContent}`:`💴 ${document.querySelector(".header-wallet").textContent} 💱 ${convertNumberToSuffixed(convertSuffixedToNumber(document.querySelector(".header-wallet").textContent)+convertSuffixedToNumber(document.querySelector(".header-bank:not(.orange)").textContent)+4.2*convertSuffixedToNumber(document.querySelector(".header-bank.orange").textContent))}`);for(const[a,i]of Object.entries(staticPages))t.startsWith(a)&&(e={...e,...i});switch(i[0]){case"articles":i[1]?(e.details="Reading an Article",e.state=s,e.largeImageKey=document.querySelector(".articleimg-img").src,e.buttons=[{label:"Read Article",url:a}]):e.details="Viewing Articles";break;case"auction":i[1]?(e.details="Viewing an Auction",e.state=s,e.buttons=[{label:"View Auction",url:a}]):e.details="Viewing the Auction HQ";break;case"cards":"info"===i[1]?(e.details="Viewing a Card",e.state=s,e.buttons=[{label:"View Card",url:a}]):e.details="Viewing the Cards";break;case"card-events":e.details="Viewing Card Events",i[1]&&(i[2]?(e.details="Viewing an Event Card",e.state=s,e.buttons=[{label:"View Card",url:a}]):e.state=`${document.querySelector("[itemprop='breadcrumb'] [href*='/card-events/']").textContent} Cards`);break;case"inventory":i[1]?(e.details="Viewing a card in their inventory",e.state=`${s}#${document.querySelector(".user_purchased + div + div b:nth-child(2)").textContent}`):(e.details="Viewing Inventory",e.state=`${document.querySelector(".inventory-percent + span").textContent} cards collected`);break;case"market":e.details="Viewing the Market",e.buttons=[{label:"View Market",url:a}];break;case"mini-games":i[1]?(e.details="Playing a Mini Game",e.buttons=[{label:"View Mini-Game",url:a}]):(e.details="Viewing Mini-Games",e.buttons=[{label:"View Mini-Games",url:a}]);break;case"servers":i[1]?(e.details="Viewing a Server",e.state=s,e.buttons=[{label:"View Server",url:a}]):e.details="Viewing Servers";break;case"shop":"category"===i[1]?(e.details="Browsing a Shop Category",e.state=s):"item"===i[1]?(e.details="Viewing a Shop Item",e.state=s,e.largeImageKey=document.querySelector(".item-pic-img").src,e.buttons=[{label:"View Item",url:a}]):e.details="Browsing the Shop";break;case"support":switch(i[1]){case"category":e.details="Browsing a Support Category",e.state=s;break;case"thread":e.details="Viewing a Support Thread",e.state=s,e.buttons=[{label:"View Thread",url:a}];break;default:e.details="Browsing Support"}break;case"user":{const t=document.querySelector("button.Mui-selected").textContent;if(e.details=`Viewing ${s}'s Profile`,"Info"===t){const[,t,a]=document.querySelector(".detailedStats > span").textContent.match(/(\d+)\s*level\s*\((\d+)\s*XP\)/);e.state=`🎚 Level ${t} ⚡${a} XP`}else e.state="Cards"===t?`Their Cards (Total: ${document.querySelector(".tabpanel-content > div > div:nth-child(2) .MuiTypography-root").textContent.match(/\d+/)[0]})`:`Their ${t}`;e.buttons=[{label:"View Profile",url:a}];break}}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsdUJBQXVCQyxZQUUxRCxHQURBYixFQUFhcEIsUUFBVSxXQUFXOEIsY0FDdEIsU0FBUm9CLEVBQWdCLENBQ2hCLE1BQU8sQ0FBRUMsRUFBT0MsR0FBTXJCLFNBQ2pCQyxjQUFjLHlCQUNkQyxZQUFZNUIsTUFBTSxrQ0FDdkJlLEVBQWF5QixNQUFRLFlBQVlNLE1BQVVDLE1BQy9DLE1BRUloQyxFQUFheUIsTUFEQSxVQUFSSyxFQUNnQix1QkFBdUJuQixTQUN2Q0MsY0FBYyxrRUFDZEMsWUFBWTVCLE1BQU0sT0FBTyxNQUdULFNBQVM2QyxJQUNsQzlCLEVBQWEyQixRQUFVLENBQUMsQ0FBRUMsTUFBTyxlQUFnQkMsSUFBS3pCLElBQ3RELEtBQ0osRUFFQUosRUFBYXBCLFFBQ2JULFNBQVM4RCxZQUFZakMsR0FFckI3QixTQUFTOEQsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI3MTkxMjc3Njg4NjgwNjEyNDZcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLCBzdGF0aWNQYWdlcyA9IHtcbiAgICBcIi9cIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgaG9tZXBhZ2VcIiB9LFxuICAgIFwiL2hvbWVcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgaG9tZXBhZ2VcIiB9LFxuICAgIFwiL2FjaGlldmVtZW50c1wiOiB7IGRldGFpbHM6IFwiVmlld2luZyBhY2hpZXZlbWVudHNcIiB9LFxuICAgIFwiL2FwcGVhbHNcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgQXBwZWFsc1wiIH0sXG4gICAgXCIvYW5pbWVcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgQW5pbWVcIiB9LFxuICAgIFwiL2JhbmtcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgdGhlIEJhbmtcIiB9LFxuICAgIFwiL2J1bXBcIjogeyBkZXRhaWxzOiBcIkJ1bXBpbmdcIiB9LFxuICAgIFwiL2NhcmQtYWJpbGl0aWVzXCI6IHsgZGV0YWlsczogXCJWaWV3aW5nIENhcmQgQWJpbGl0aWVzXCIgfSxcbiAgICBcIi9jYXJkbWFrZXJzL2xlYWRlcmJvYXJkXCI6IHsgZGV0YWlsczogXCJWaWV3aW5nIENhcmRNYWtlciBMZWFkZXJib2FyZHNcIiB9LFxuICAgIFwiL2NvcHlyaWdodFwiOiB7IGRldGFpbHM6IFwiVmlld2luZyBDb3B5cmlnaHQgUG9saWN5XCIgfSxcbiAgICBcIi9jcmVhdG9yc1wiOiB7IGRldGFpbHM6IFwiVmlld2luZyBDcmVhdG9yc1wiIH0sXG4gICAgXCIvZGFzaGJvYXJkXCI6IHsgZGV0YWlsczogXCJWaWV3aW5nIHRoZSBEYXNoYm9hcmRcIiB9LFxuICAgIFwiL2V2ZW50c1wiOiB7IGRldGFpbHM6IFwiVmlld2luZyBFdmVudHNcIiB9LFxuICAgIFwiL2ZyaWVuZHNcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgRnJpZW5kc1wiIH0sXG4gICAgXCIvZnVzaW9uXCI6IHsgZGV0YWlsczogXCJGdXNpbmcgQ2FyZHNcIiB9LFxuICAgIFwiL2dpdmVhd2F5XCI6IHsgZGV0YWlsczogXCJWaWV3aW5nIEdpdmVhd2F5c1wiIH0sXG4gICAgXCIva2V5c2dpdmVhd2F5c1wiOiB7IGRldGFpbHM6IFwiVmlld2luZyBLZXkgR2l2ZWF3YXlzXCIgfSxcbiAgICBcIi9sZWFkZXJib2FyZHNcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgTGVhZGVyYm9hcmRzXCIgfSxcbiAgICBcIi9tYXJrZXRcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgdGhlIE1hcmtldFwiIH0sXG4gICAgXCIvbWVkYWxzXCI6IHsgZGV0YWlsczogXCJWaWV3aW5nIE1lZGFsc1wiIH0sXG4gICAgXCIvbWVzc2FnZXNcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgUHJpdmF0ZSBNZXNzYWdlc1wiIH0sXG4gICAgXCIvbm90aWZpY2F0aW9uc1wiOiB7IGRldGFpbHM6IFwiVmlld2luZyBOb3RpZmljYXRpb25zXCIgfSxcbiAgICBcIi9wcmVtaXVtXCI6IHsgZGV0YWlsczogXCJWaWV3aW5nIFByZW1pdW1cIiB9LFxuICAgIFwiL3ByaXZhY3ktcG9saWN5XCI6IHsgZGV0YWlsczogXCJWaWV3aW5nIFByaXZhY3kgUG9saWN5XCIgfSxcbiAgICBcIi9ydWxlc1wiOiB7IGRldGFpbHM6IFwiUmVhZGluZyB0aGUgUnVsZXNcIiB9LFxuICAgIFwiL3NldHRpbmdzXCI6IHsgZGV0YWlsczogXCJNYW5hZ2luZyBTZXR0aW5nc1wiIH0sXG4gICAgXCIvc3RhY2tzXCI6IHsgZGV0YWlsczogXCJWaWV3aW5nIFN0YWNrc1wiIH0sXG4gICAgXCIvc3RhZmZcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgU3RhZmYgUGFnZXNcIiB9LFxuICAgIFwiL3N0YWZmLWxpc3RcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgU3RhZmYgTGlzdFwiIH0sXG4gICAgXCIvc3VibWl0XCI6IHsgZGV0YWlsczogXCJTdWJtaXR0aW5nIGEgQ2FyZFwiIH0sXG4gICAgXCIvdGFza3NcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgU3RhdGlzdGljcyAmIFRhc2tzXCIgfSxcbiAgICBcIi90aGlzLW9yLXRoYXRcIjogeyBkZXRhaWxzOiBcIlBsYXlpbmcgVGhpcyBvciBUaGF0XCIgfSxcbiAgICBcIi90cmFkZXNcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgVHJhZGVzXCIgfSxcbiAgICBcIi91cGRhdGVzXCI6IHsgZGV0YWlsczogXCJWaWV3aW5nIFVwZGF0ZXNcIiB9LFxufTtcbmZ1bmN0aW9uIGNvbnZlcnRTdWZmaXhlZFRvTnVtYmVyKGFtb3VudCkge1xuICAgIGNvbnN0IFssIG51bWJlciwgc3VmZml4XSA9IGFtb3VudC5tYXRjaCgvKFtcXGQuXSspXFxzKihbQS1aXSk/Lyk7XG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KG51bWJlcikgKlxuICAgICAgICAoe1xuICAgICAgICAgICAgSzogMWUzLFxuICAgICAgICAgICAgTTogMWU2LFxuICAgICAgICAgICAgQjogMWU5LFxuICAgICAgICAgICAgVDogMWUxMixcbiAgICAgICAgfVtzdWZmaXhdID8/IDEpKTtcbn1cbmZ1bmN0aW9uIGNvbnZlcnROdW1iZXJUb1N1ZmZpeGVkKGFtb3VudCkge1xuICAgIGNvbnN0IGFtb3VudHMgPSB7XG4gICAgICAgIEs6IDFlMyxcbiAgICAgICAgTTogMWU2LFxuICAgICAgICBCOiAxZTksXG4gICAgICAgIFQ6IDFlMTIsXG4gICAgfSwgc3VmZml4ZXMgPSBPYmplY3Qua2V5cyhhbW91bnRzKS5yZXZlcnNlKCk7XG4gICAgZm9yIChjb25zdCBzdWZmaXggb2Ygc3VmZml4ZXMpIHtcbiAgICAgICAgaWYgKGFtb3VudCA+PSBhbW91bnRzW3N1ZmZpeF0pXG4gICAgICAgICAgICByZXR1cm4gYCR7KGFtb3VudCAvIGFtb3VudHNbc3VmZml4XSkudG9GaXhlZCgxKX0ke3N1ZmZpeH1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7YW1vdW50fWA7XG59XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1Nob29iL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfTtcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBocmVmIH0gPSB3aW5kb3cubG9jYXRpb24sIHBhdGhTcGxpdCA9IHBhdGhuYW1lLnNwbGl0KFwiL1wiKS5zbGljZSgxKSwgcGFnZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpdGVtcHJvcD0nYnJlYWRjcnVtYiddID4gbGk6bGFzdC1jaGlsZFwiKT8udGV4dENvbnRlbnQsIHByb2ZpbGVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWF2YXRhclwiKSwgY3VycmVuY3lGb3JtYXQgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiY3VycmVuY3lGb3JtYXRcIik7XG4gICAgaWYgKHByb2ZpbGVJbWFnZSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9XG4gICAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlKHByb2ZpbGVJbWFnZSkuYmFja2dyb3VuZEltYWdlLm1hdGNoKC91cmxcXChcIiguKilcIlxcKS8pWzFdO1xuICAgICAgICBpZiAoY3VycmVuY3lGb3JtYXQgPT09IDApIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGDwn5K0ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItd2FsbGV0XCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBg8J+StCAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXdhbGxldFwiKS50ZXh0Q29udGVudH0g8J+SsSAke2NvbnZlcnROdW1iZXJUb1N1ZmZpeGVkKGNvbnZlcnRTdWZmaXhlZFRvTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXdhbGxldFwiKS50ZXh0Q29udGVudCkgK1xuICAgICAgICAgICAgICAgIGNvbnZlcnRTdWZmaXhlZFRvTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWJhbms6bm90KC5vcmFuZ2UpXCIpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudCkgK1xuICAgICAgICAgICAgICAgIDQuMiAqXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRTdWZmaXhlZFRvTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWJhbmsub3JhbmdlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQpKX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgW3BhdGgsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRpY1BhZ2VzKSlcbiAgICAgICAgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgocGF0aCkpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEgPSB7IC4uLnByZXNlbmNlRGF0YSwgLi4uZGF0YSB9O1xuICAgIHN3aXRjaCAocGF0aFNwbGl0WzBdKSB7XG4gICAgICAgIGNhc2UgXCJhcnRpY2xlc1wiOlxuICAgICAgICAgICAgaWYgKHBhdGhTcGxpdFsxXSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIGFuIEFydGljbGVcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYWdlVGl0bGU7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGVpbWctaW1nXCIpLnNyYztcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlJlYWQgQXJ0aWNsZVwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgQXJ0aWNsZXNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXVjdGlvblwiOlxuICAgICAgICAgICAgaWYgKHBhdGhTcGxpdFsxXSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFuIEF1Y3Rpb25cIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYWdlVGl0bGU7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IEF1Y3Rpb25cIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBBdWN0aW9uIEhRXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNhcmRzXCI6XG4gICAgICAgICAgICBpZiAocGF0aFNwbGl0WzFdID09PSBcImluZm9cIikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgQ2FyZFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHBhZ2VUaXRsZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgQ2FyZFwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIENhcmRzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNhcmQtZXZlbnRzXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBDYXJkIEV2ZW50c1wiO1xuICAgICAgICAgICAgaWYgKHBhdGhTcGxpdFsxXSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXRoU3BsaXRbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYW4gRXZlbnQgQ2FyZFwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYWdlVGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBDYXJkXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaXRlbXByb3A9J2JyZWFkY3J1bWInXSBbaHJlZio9Jy9jYXJkLWV2ZW50cy8nXVwiKS50ZXh0Q29udGVudH0gQ2FyZHNgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaW52ZW50b3J5XCI6XG4gICAgICAgICAgICBpZiAocGF0aFNwbGl0WzFdKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBjYXJkIGluIHRoZWlyIGludmVudG9yeVwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3BhZ2VUaXRsZX0jJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfcHVyY2hhc2VkICsgZGl2ICsgZGl2IGI6bnRoLWNoaWxkKDIpXCIpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgSW52ZW50b3J5XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnZlbnRvcnktcGVyY2VudCArIHNwYW5cIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50fSBjYXJkcyBjb2xsZWN0ZWRgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtYXJrZXRcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBNYXJrZXRcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBNYXJrZXRcIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtaW5pLWdhbWVzXCI6XG4gICAgICAgICAgICBpZiAocGF0aFNwbGl0WzFdKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBsYXlpbmcgYSBNaW5pIEdhbWVcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgTWluaS1HYW1lXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIE1pbmktR2FtZXNcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgTWluaS1HYW1lc1wiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNlcnZlcnNcIjpcbiAgICAgICAgICAgIGlmIChwYXRoU3BsaXRbMV0pIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIFNlcnZlclwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHBhZ2VUaXRsZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgU2VydmVyXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBTZXJ2ZXJzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNob3BcIjpcbiAgICAgICAgICAgIGlmIChwYXRoU3BsaXRbMV0gPT09IFwiY2F0ZWdvcnlcIikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBhIFNob3AgQ2F0ZWdvcnlcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYWdlVGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRoU3BsaXRbMV0gPT09IFwiaXRlbVwiKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBTaG9wIEl0ZW1cIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYWdlVGl0bGU7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tcGljLWltZ1wiKS5zcmM7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IEl0ZW1cIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0aGUgU2hvcFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzdXBwb3J0XCI6XG4gICAgICAgICAgICBzd2l0Y2ggKHBhdGhTcGxpdFsxXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjYXRlZ29yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBhIFN1cHBvcnQgQ2F0ZWdvcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcGFnZVRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInRocmVhZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgU3VwcG9ydCBUaHJlYWRcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcGFnZVRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgVGhyZWFkXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIFN1cHBvcnRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInVzZXJcIjoge1xuICAgICAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5NdWktc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7cGFnZVRpdGxlfSdzIFByb2ZpbGVgO1xuICAgICAgICAgICAgaWYgKHRhYiA9PT0gXCJJbmZvXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbLCBsZXZlbCwgeHBdID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsZWRTdGF0cyA+IHNwYW5cIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50Lm1hdGNoKC8oXFxkKylcXHMqbGV2ZWxcXHMqXFwoKFxcZCspXFxzKlhQXFwpLyk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYPCfjpogTGV2ZWwgJHtsZXZlbH0g4pqhJHt4cH0gWFBgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGFiID09PSBcIkNhcmRzXCIpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgVGhlaXIgQ2FyZHMgKFRvdGFsOiAke2RvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRhYnBhbmVsLWNvbnRlbnQgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpIC5NdWlUeXBvZ3JhcGh5LXJvb3RcIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50Lm1hdGNoKC9cXGQrLylbMF19KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFRoZWlyICR7dGFifWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgUHJvZmlsZVwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGRGFrUXNWMEZCVnl4SFFVRnBRenRKUVVNelF5eEhRVUZITEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc2EwSkJRV3RDTEVWQlFVVTdTVUZEY0VNc1QwRkJUeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEd0Q1FVRnJRaXhGUVVGRk8wbEJRM2hETEdWQlFXVXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3h6UWtGQmMwSXNSVUZCUlR0SlFVTndSQ3hWUVVGVkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNhVUpCUVdsQ0xFVkJRVVU3U1VGRE1VTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxHVkJRV1VzUlVGQlJUdEpRVU4wUXl4UFFVRlBMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzYTBKQlFXdENMRVZCUVVVN1NVRkRlRU1zVDBGQlR5eEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRk5CUVZNc1JVRkJSVHRKUVVNdlFpeHBRa0ZCYVVJc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeDNRa0ZCZDBJc1JVRkJSVHRKUVVONFJDeDVRa0ZCZVVJc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeG5RMEZCWjBNc1JVRkJSVHRKUVVONFJTeFpRVUZaTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc01FSkJRVEJDTEVWQlFVVTdTVUZEY2tRc1YwRkJWeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEd0Q1FVRnJRaXhGUVVGRk8wbEJRelZETEZsQlFWa3NSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3gxUWtGQmRVSXNSVUZCUlR0SlFVTnNSQ3hUUVVGVExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVU3U1VGRGVFTXNWVUZCVlN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxHbENRVUZwUWl4RlFVRkZPMGxCUXpGRExGTkJRVk1zUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4alFVRmpMRVZCUVVVN1NVRkRkRU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRzFDUVVGdFFpeEZRVUZGTzBsQlF6ZERMR2RDUVVGblFpeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMSFZDUVVGMVFpeEZRVUZGTzBsQlEzUkVMR1ZCUVdVc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeHpRa0ZCYzBJc1JVRkJSVHRKUVVOd1JDeFRRVUZUTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc2IwSkJRVzlDTEVWQlFVVTdTVUZETlVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRk8wbEJRM2hETEZkQlFWY3NSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3d3UWtGQk1FSXNSVUZCUlR0SlFVTndSQ3huUWtGQlowSXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3gxUWtGQmRVSXNSVUZCUlR0SlFVTjBSQ3hWUVVGVkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNhVUpCUVdsQ0xFVkJRVVU3U1VGRE1VTXNhVUpCUVdsQ0xFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNkMEpCUVhkQ0xFVkJRVVU3U1VGRGVFUXNVVUZCVVN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxHMUNRVUZ0UWl4RlFVRkZPMGxCUXpGRExGZEJRVmNzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4dFFrRkJiVUlzUlVGQlJUdEpRVU0zUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzWjBKQlFXZENMRVZCUVVVN1NVRkRlRU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMSEZDUVVGeFFpeEZRVUZGTzBsQlF6VkRMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeHZRa0ZCYjBJc1JVRkJSVHRKUVVOb1JDeFRRVUZUTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVTdTVUZETTBNc1VVRkJVU3hGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTERSQ1FVRTBRaXhGUVVGRk8wbEJRMjVFTEdWQlFXVXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3h6UWtGQmMwSXNSVUZCUlR0SlFVTndSQ3hUUVVGVExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVU3U1VGRGVFTXNWVUZCVlN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxHbENRVUZwUWl4RlFVRkZPME5CUXpGRExFTkJRVU03UVVGRlNDeFRRVUZUTEhWQ1FVRjFRaXhEUVVGRExFMUJRV003U1VGRE9VTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0SlFVTXZSQ3hQUVVGUExFTkJRMDRzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTnNRaXhEUVVGRE8xbEJRMEVzUTBGQlF5eEZRVUZGTEVkQlFVYzdXVUZEVGl4RFFVRkRMRVZCUVVVc1IwRkJSenRaUVVOT0xFTkJRVU1zUlVGQlJTeEhRVUZITzFsQlEwNHNRMEZCUXl4RlFVRkZMRWxCUVVrN1UwRkRVQ3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVTm1MRU5CUVVNN1FVRkRTQ3hEUVVGRE8wRkJSVVFzVTBGQlV5eDFRa0ZCZFVJc1EwRkJReXhOUVVGak8wbEJRemxETEUxQlFVMHNUMEZCVHl4SFFVRXlRanRSUVVOMFF5eERRVUZETEVWQlFVVXNSMEZCUnp0UlFVTk9MRU5CUVVNc1JVRkJSU3hIUVVGSE8xRkJRMDRzUTBGQlF5eEZRVUZGTEVkQlFVYzdVVUZEVGl4RFFVRkRMRVZCUVVVc1NVRkJTVHRMUVVOUUxFVkJRMFFzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZETTBNc1MwRkJTeXhOUVVGTkxFMUJRVTBzU1VGQlNTeFJRVUZSTEVWQlFVVTdVVUZET1VJc1NVRkJTU3hOUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTTFRaXhQUVVGUExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRE8wdEJRelZFTzBsQlEwUXNUMEZCVHl4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRE8wRkJRM0JDTEVOQlFVTTdRVUZGUkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhKUVVGSkxGbEJRVmtzUjBGQmFVSTdVVUZEYUVNc1lVRkJZU3hGUVVGRkxEUkVRVUUwUkR0UlFVTXpSU3hqUVVGakxFVkJRVVVzYVVKQlFXbENPMHRCUTJwRExFTkJRVU03U1VGRFJpeE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlEzcERMRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGRGVFTXNVMEZCVXl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRMnBETEhsRFFVRjVReXhEUVVONlF5eEZRVUZGTEZkQlFWY3NSVUZEWkN4WlFVRlpMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmIwSXNaMEpCUVdkQ0xFTkJRVU1zUlVGRE1VVXNZMEZCWXl4SFFVRkhMRTFCUVUwc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlV5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8wbEJSWFJGTEVsQlFVa3NXVUZCV1N4RlFVRkZPMUZCUTJwQ0xGbEJRVmtzUTBGQlF5eGhRVUZoTzFsQlEzcENMR2RDUVVGblFpeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVVVzU1VGQlNTeGpRVUZqTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTNwQ0xGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NUVUZETjBJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmEwSXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eFhRVU16UkN4RlFVRkZMRU5CUVVNN1UwRkRTRHRoUVVGTk8xbEJRMDRzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4TlFVTTNRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZyUWl4blFrRkJaMElzUTBGQlF5eERRVUZETEZkQlF6TkVMRTlCUVU4c2RVSkJRWFZDTEVOQlF6ZENMSFZDUVVGMVFpeERRVU4wUWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGclFpeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGRGNrVTdaMEpCUTBFc2RVSkJRWFZDTEVOQlEzUkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRV3RDTERKQ1FVRXlRaXhEUVVGRE8zRkNRVU5zUlN4WFFVRlhMRU5CUTJJN1owSkJRMFFzUjBGQlJ6dHZRa0ZEUml4MVFrRkJkVUlzUTBGRGRFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJhMElzY1VKQlFYRkNMRU5CUVVNN2VVSkJRelZFTEZkQlFWY3NRMEZEWWl4RFFVTklMRVZCUVVVc1EwRkJRenRUUVVOS08wdEJRMFE3U1VGRlJDeExRVUZMTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRja1FzU1VGQlNTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVGRkxGbEJRVmtzUjBGQlJ5eEZRVUZGTEVkQlFVY3NXVUZCV1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hGUVVGRkxFTkJRVU03U1VGRk5VVXNVVUZCVVN4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGRGNrSXNTMEZCU3l4VlFVRlZPMWxCUTJRc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdaMEpCUTJwQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03WjBKQlF6VkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzJkQ1FVTXZRaXhaUVVGWkxFTkJRVU1zWVVGQllUdHZRa0ZEZWtJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmJVSXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTTdaMEpCUTJwRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hqUVVGakxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRPVVE3TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1dVRkRha1FzVFVGQlRUdFJRVU5RTEV0QlFVc3NVMEZCVXp0WlFVTmlMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzJkQ1FVTnFRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEc5Q1FVRnZRaXhEUVVGRE8yZENRVU0xUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF6dG5Ra0ZETDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMR05CUVdNc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTTVSRHM3WjBKQlFVMHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0WlFVTjJSQ3hOUVVGTk8xRkJRMUFzUzBGQlN5eFBRVUZQTzFsQlExZ3NTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVFVGQlRTeEZRVUZGTzJkQ1FVTTFRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8yZENRVU40UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF6dG5Ra0ZETDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRmRCUVZjc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTXpSRHM3WjBKQlFVMHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0WlFVTnNSQ3hOUVVGTk8xRkJRMUFzUzBGQlN5eGhRVUZoTzFsQlEycENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN1dVRkROME1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1owSkJRMnBDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU5xUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIVkNRVUYxUWl4RFFVRkRPMjlDUVVNdlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenR2UWtGREwwSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dHBRa0ZETTBRN2NVSkJRVTA3YjBKQlEwNHNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVOd1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTnlRaXhwUkVGQmFVUXNRMEZEYWtRc1EwRkJReXhYUVVOSUxGRkJRVkVzUTBGQlF6dHBRa0ZEVkR0aFFVTkVPMWxCUTBRc1RVRkJUVHRSUVVOUUxFdEJRVXNzVjBGQlZ6dFpRVU5tTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yZENRVU5xUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMURRVUZ0UXl4RFFVRkRPMmRDUVVNelJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1UwRkJVeXhKUVVOb1F5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRFJEUVVFMFF5eERRVUZETzNGQ1FVTnNSU3hYUVVOSUxFVkJRVVVzUTBGQlF6dGhRVU5JTzJsQ1FVRk5PMmRDUVVOT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03WjBKQlF6TkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGRGNFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJhMElzTWtKQlFUSkNMRU5CUVVNN2NVSkJRMnhGTEZkQlEwZ3NhMEpCUVd0Q0xFTkJRVU03WVVGRGJrSTdXVUZEUkN4TlFVRk5PMUZCUTFBc1MwRkJTeXhSUVVGUk8xbEJRMW9zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dFpRVU0xUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNZVUZCWVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6ZEVMRTFCUVUwN1VVRkRVQ3hMUVVGTExGbEJRVms3V1VGRGFFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3WjBKQlEycENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN1owSkJRemRETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTm9SVHRwUWtGQlRUdG5Ra0ZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMmRDUVVNMVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzYVVKQlFXbENMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEYWtVN1dVRkRSQ3hOUVVGTk8xRkJRMUFzUzBGQlN5eFRRVUZUTzFsQlEySXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3WjBKQlEycENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1owSkJRekZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRE8yZENRVU12UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNZVUZCWVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzJGQlF6ZEVPenRuUWtGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFsQlEyaEVMRTFCUVUwN1VVRkRVQ3hMUVVGTExFMUJRVTA3V1VGRFZpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhWUVVGVkxFVkJRVVU3WjBKQlEyaERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTUVKQlFUQkNMRU5CUVVNN1owSkJRMnhFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRE8yRkJReTlDTzJsQ1FVRk5MRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEUxQlFVMHNSVUZCUlR0blFrRkRia01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4eFFrRkJjVUlzUTBGQlF6dG5Ra0ZETjBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdaMEpCUXk5Q0xGbEJRVmtzUTBGQlF5eGhRVUZoTzI5Q1FVTjZRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZ0UWl4bFFVRmxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03WjBKQlF5OUVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4WFFVRlhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZETTBRN08yZENRVUZOTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTTdXVUZEYkVRc1RVRkJUVHRSUVVOUUxFdEJRVXNzVTBGQlV6dFpRVU5pTEZGQlFWRXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yZENRVU55UWl4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRE8yOUNRVU5vUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEWkNRVUUyUWl4RFFVRkRPMjlDUVVOeVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenR2UWtGREwwSXNUVUZCVFR0cFFrRkRUanRuUWtGRFJDeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRPMjlDUVVOa0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU03YjBKQlEyeEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzI5Q1FVTXZRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1lVRkJZU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVNM1JDeE5RVUZOTzJsQ1FVTk9PMmRDUVVORUxFOUJRVThzUTBGQlF5eERRVUZETzI5Q1FVTlNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN2FVSkJRekZETzJGQlEwUTdXVUZEUkN4TlFVRk5PMUZCUTFBc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU5hTEUxQlFVMHNSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRMnBETEhGQ1FVRnhRaXhEUVVOeVFpeERRVUZETEZkQlFWY3NRMEZCUXp0WlFVTmtMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVjBGQlZ5eFRRVUZUTEZsQlFWa3NRMEZCUXp0WlFVTjRSQ3hKUVVGSkxFZEJRVWNzUzBGQlN5eE5RVUZOTEVWQlFVVTdaMEpCUTI1Q0xFMUJRVTBzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUk8zRkNRVU0xUWl4aFFVRmhMRU5CUVd0Q0xIVkNRVUYxUWl4RFFVRkRPM0ZDUVVOMlJDeFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMR2REUVVGblF5eERRVUZETEVOQlFVTTdaMEpCUTNSRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NXVUZCV1N4TFFVRkxMRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU03WVVGRGJrUTdhVUpCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzVDBGQlR5eEZRVUZGTzJkQ1FVTXpRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEhWQ1FVTndRaXhSUVVGUk8zRkNRVU5PTEdGQlFXRXNRMEZEWWl4blJVRkJaMFVzUTBGRGFFVTdjVUpCUTBFc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUXpkQ0xFZEJRVWNzUTBGQlF6dGhRVU5LT3p0blFrRkJUU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZOQlFWTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRNME1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxHTkJRV01zUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNNVJDeE5RVUZOTzFOQlEwNDdTMEZEUkR0SlFVVkVMRWxCUVVrc1dVRkJXU3hEUVVGRExFOUJRVTg3VVVGQlJTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE96dFJRVU40UkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE4wSXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwic3RhdGljUGFnZXMiLCJkZXRhaWxzIiwiY29udmVydFN1ZmZpeGVkVG9OdW1iZXIiLCJhbW91bnQiLCJudW1iZXIiLCJzdWZmaXgiLCJtYXRjaCIsInBhcnNlRmxvYXQiLCJLIiwiTSIsIkIiLCJUIiwiY29udmVydE51bWJlclRvU3VmZml4ZWQiLCJhbW91bnRzIiwic3VmZml4ZXMiLCJPYmplY3QiLCJrZXlzIiwicmV2ZXJzZSIsInRvRml4ZWQiLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGF0aG5hbWUiLCJocmVmIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRoU3BsaXQiLCJzcGxpdCIsInNsaWNlIiwicGFnZVRpdGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJwcm9maWxlSW1hZ2UiLCJjdXJyZW5jeUZvcm1hdCIsImdldFNldHRpbmciLCJzbWFsbEltYWdlS2V5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInNtYWxsSW1hZ2VUZXh0IiwicGF0aCIsImRhdGEiLCJlbnRyaWVzIiwic3RhcnRzV2l0aCIsInN0YXRlIiwic3JjIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwidGFiIiwibGV2ZWwiLCJ4cCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;