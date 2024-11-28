var __webpack_exports__={};const presence=new Presence({clientId:"802246778010730548"}),SelectorMap={Red:"div#sbettors1 > span.redtext > strong",Blue:"div#sbettors2 > span.bluetext > strong",estatus:"div#status > span#betstatus",tmode:"span#tournament-note",footer:"div#footer-alert",betRed:"span#lastbet.dynamic-view > span.redtext",betBlue:"span#lastbet.dynamic-view > span.bluetext",prize:"span#lastbet.dynamic-view > span.greentext",oddsRed:"span#lastbet.dynamic-view > span.redtext:nth-last-child(2)",oddsBlue:"span#lastbet.dynamic-view > span.bluetext:nth-last-child(1)",betsView:"span#lastbet.dynamic-view",balance:"span#balance.dollar"};let fightersCheck,browsingTimestamp=Math.floor(Date.now()/1e3);function getText(e){return document.querySelector(e)?.textContent}function getModeImageKey(){return getText(SelectorMap.tmode)||getText(SelectorMap.footer).includes("bracket!")||getText(SelectorMap.footer).includes("FINAL")?["https://cdn.rcd.gg/PreMiD/websites/S/Salty%20Bet/assets/1.png","Tournament Mode"]:getText(SelectorMap.footer).includes("exhibition")||getText(SelectorMap.footer).includes("Exhibition")?["https://cdn.rcd.gg/PreMiD/websites/S/Salty%20Bet/assets/2.png","Exhibition Mode"]:["https://cdn.rcd.gg/PreMiD/websites/S/Salty%20Bet/assets/0.png","Matchmaking Mode"]}function getFighters(){return getText(SelectorMap.Red)&&getText(SelectorMap.Blue)?`${getText(SelectorMap.Red)} VS ${getText(SelectorMap.Blue)}`:"Loading Fighters..."}function isBetOpen(){return getText(SelectorMap.estatus).includes("OPEN!")}function getBetStatus(e){return isBetOpen()?getText(SelectorMap.estatus)?getText(SelectorMap.estatus):"Loading...":getText(SelectorMap.estatus).includes("Payouts")?getText(SelectorMap.estatus)?getText(SelectorMap.estatus).split("wins!")[0].length<=32?`${getText(SelectorMap.estatus).split("wins!")[0]}wins!`:`${getText(SelectorMap.estatus).replace(".","").split(" ").splice(-2).join(" ")} wins!`:"Loading...":getText(SelectorMap.betsView).includes("|")&&e?getText(SelectorMap.betRed).includes("$")?`$${abbrNum(+getText(SelectorMap.betRed).replace("$",""),1)}(Red) → +$${abbrNum(+getText(SelectorMap.prize).replace("+$",""),1)} | ${getText(SelectorMap.oddsRed)}:${getText(SelectorMap.oddsBlue)}`:`$${abbrNum(+getText(SelectorMap.betBlue).replace("$",""),1)}(Blue) → +$${abbrNum(+getText(SelectorMap.prize).replace("+$",""),1)} | ${getText(SelectorMap.oddsRed)}:${getText(SelectorMap.oddsBlue)}`:getText(SelectorMap.oddsRed)&&getText(SelectorMap.oddsBlue)?`Odds: ${getText(SelectorMap.oddsRed)}:${getText(SelectorMap.oddsBlue)}`:"Loading..."}function abbrNum(e,t){if(e>=1e3){let s,a;t=Math.pow(10,t);const r=["k","m","b","t"];for(let n=r.length-1;n>=0;n--){const i=Math.pow(10,3*(n+1));if(i<=e){1e3==(e=Math.round(e*t/i)/t)&&n<r.length-1&&(e=1,n++),a=r[n],s=e;break}}return String(s)+a}return String(e)}presence.on("UpdateData",(async()=>{const[e,t]=await Promise.all([presence.getSetting("bet"),presence.getSetting("buttons")]),s={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Salty%20Bet/assets/logo.png"};switch(document.location.pathname){case"/":case"/index":{const[a,r]=getModeImageKey();if(fightersCheck!==getFighters()?(s.details=getFighters(),fightersCheck=getFighters()):(s.details=`${getFighters()}‎`,fightersCheck=`${getFighters()}‎`),s.state=getBetStatus(e),s.smallImageKey=a,s.smallImageText=r,isBetOpen()?browsingTimestamp=Math.floor(Date.now()/1e3):s.startTimestamp=browsingTimestamp,t)switch(a){case"trofeo":s.buttons=[{label:"Tournament Bracket",url:"https://www.saltybet.com/shaker?bracket=1"}];break;case"saltgirl":s.buttons=[{label:"Exhibition Queue",url:"https://www.saltybet.com/shaker?activerequests=1"}]}break}case"/authenticate":s.details="Signing in...",s.startTimestamp=browsingTimestamp;break;case"/bank":s.details="Checking Bank",s.startTimestamp=browsingTimestamp;break;default:"https://www.saltybet.com/shaker?bracket=1"===document.URL?(s.details="Checking Tournament Bracket",s.startTimestamp=browsingTimestamp):"https://www.saltybet.com/shaker?activerequests=1"===document.URL?(s.details="Checking Exhibition Queue",s.startTimestamp=browsingTimestamp):s.details=null}s.details?presence.setActivity(s):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJqRCxtQkFFUixxREFBakJPLFNBQVM2QyxLQUNkYixFQUFhTSxRQUFVLDRCQUN2Qk4sRUFBYVUsZUFBaUJqRCxtQkFHOUJ1QyxFQUFhTSxRQUFVLEtBRS9CTixFQUFhTSxRQUNiOUQsU0FBU3NFLFlBQVlkLEdBRXJCeEQsU0FBU3NFLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7IGNsaWVudElkOiBcIjgwMjI0Njc3ODAxMDczMDU0OFwiIH0pLCBTZWxlY3Rvck1hcCA9IHtcbiAgICBSZWQ6IFwiZGl2I3NiZXR0b3JzMSA+IHNwYW4ucmVkdGV4dCA+IHN0cm9uZ1wiLFxuICAgIEJsdWU6IFwiZGl2I3NiZXR0b3JzMiA+IHNwYW4uYmx1ZXRleHQgPiBzdHJvbmdcIixcbiAgICBlc3RhdHVzOiBcImRpdiNzdGF0dXMgPiBzcGFuI2JldHN0YXR1c1wiLFxuICAgIHRtb2RlOiBcInNwYW4jdG91cm5hbWVudC1ub3RlXCIsXG4gICAgZm9vdGVyOiBcImRpdiNmb290ZXItYWxlcnRcIixcbiAgICBiZXRSZWQ6IFwic3BhbiNsYXN0YmV0LmR5bmFtaWMtdmlldyA+IHNwYW4ucmVkdGV4dFwiLFxuICAgIGJldEJsdWU6IFwic3BhbiNsYXN0YmV0LmR5bmFtaWMtdmlldyA+IHNwYW4uYmx1ZXRleHRcIixcbiAgICBwcml6ZTogXCJzcGFuI2xhc3RiZXQuZHluYW1pYy12aWV3ID4gc3Bhbi5ncmVlbnRleHRcIixcbiAgICBvZGRzUmVkOiBcInNwYW4jbGFzdGJldC5keW5hbWljLXZpZXcgPiBzcGFuLnJlZHRleHQ6bnRoLWxhc3QtY2hpbGQoMilcIixcbiAgICBvZGRzQmx1ZTogXCJzcGFuI2xhc3RiZXQuZHluYW1pYy12aWV3ID4gc3Bhbi5ibHVldGV4dDpudGgtbGFzdC1jaGlsZCgxKVwiLFxuICAgIGJldHNWaWV3OiBcInNwYW4jbGFzdGJldC5keW5hbWljLXZpZXdcIixcbiAgICBiYWxhbmNlOiBcInNwYW4jYmFsYW5jZS5kb2xsYXJcIixcbn07XG5sZXQgZmlnaHRlcnNDaGVjaywgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmZ1bmN0aW9uIGdldFRleHQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik/LnRleHRDb250ZW50O1xufVxuZnVuY3Rpb24gZ2V0TW9kZUltYWdlS2V5KCkge1xuICAgIGlmIChnZXRUZXh0KFNlbGVjdG9yTWFwLnRtb2RlKSB8fFxuICAgICAgICBnZXRUZXh0KFNlbGVjdG9yTWFwLmZvb3RlcikuaW5jbHVkZXMoXCJicmFja2V0IVwiKSB8fFxuICAgICAgICBnZXRUZXh0KFNlbGVjdG9yTWFwLmZvb3RlcikuaW5jbHVkZXMoXCJGSU5BTFwiKSlcbiAgICAgICAgcmV0dXJuIFtcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TYWx0eSUyMEJldC9hc3NldHMvMS5wbmdcIiwgXCJUb3VybmFtZW50IE1vZGVcIl07XG4gICAgZWxzZSBpZiAoZ2V0VGV4dChTZWxlY3Rvck1hcC5mb290ZXIpLmluY2x1ZGVzKFwiZXhoaWJpdGlvblwiKSB8fFxuICAgICAgICBnZXRUZXh0KFNlbGVjdG9yTWFwLmZvb3RlcikuaW5jbHVkZXMoXCJFeGhpYml0aW9uXCIpKVxuICAgICAgICByZXR1cm4gW1wiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NhbHR5JTIwQmV0L2Fzc2V0cy8yLnBuZ1wiLCBcIkV4aGliaXRpb24gTW9kZVwiXTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBbXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU2FsdHklMjBCZXQvYXNzZXRzLzAucG5nXCIsIFwiTWF0Y2htYWtpbmcgTW9kZVwiXTtcbn1cbmZ1bmN0aW9uIGdldEZpZ2h0ZXJzKCkge1xuICAgIGlmIChnZXRUZXh0KFNlbGVjdG9yTWFwLlJlZCkgJiYgZ2V0VGV4dChTZWxlY3Rvck1hcC5CbHVlKSlcbiAgICAgICAgcmV0dXJuIGAke2dldFRleHQoU2VsZWN0b3JNYXAuUmVkKX0gVlMgJHtnZXRUZXh0KFNlbGVjdG9yTWFwLkJsdWUpfWA7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gXCJMb2FkaW5nIEZpZ2h0ZXJzLi4uXCI7XG59XG5mdW5jdGlvbiBpc0JldE9wZW4oKSB7XG4gICAgcmV0dXJuIGdldFRleHQoU2VsZWN0b3JNYXAuZXN0YXR1cykuaW5jbHVkZXMoXCJPUEVOIVwiKTtcbn1cbmZ1bmN0aW9uIGdldEJldFN0YXR1cyhzaG93KSB7XG4gICAgaWYgKCFpc0JldE9wZW4oKSkge1xuICAgICAgICBpZiAoIWdldFRleHQoU2VsZWN0b3JNYXAuZXN0YXR1cykuaW5jbHVkZXMoXCJQYXlvdXRzXCIpKSB7XG4gICAgICAgICAgICBpZiAoZ2V0VGV4dChTZWxlY3Rvck1hcC5iZXRzVmlldykuaW5jbHVkZXMoXCJ8XCIpICYmIHNob3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0VGV4dChTZWxlY3Rvck1hcC5iZXRSZWQpLmluY2x1ZGVzKFwiJFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGAkJHthYmJyTnVtKCtnZXRUZXh0KFNlbGVjdG9yTWFwLmJldFJlZCkucmVwbGFjZShcIiRcIiwgXCJcIiksIDEpfShSZWQpIOKGkiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGArJCR7YWJick51bSgrZ2V0VGV4dChTZWxlY3Rvck1hcC5wcml6ZSkucmVwbGFjZShcIiskXCIsIFwiXCIpLCAxKX0gfCAke2dldFRleHQoU2VsZWN0b3JNYXAub2Rkc1JlZCl9OiR7Z2V0VGV4dChTZWxlY3Rvck1hcC5vZGRzQmx1ZSl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGAkJHthYmJyTnVtKCtnZXRUZXh0KFNlbGVjdG9yTWFwLmJldEJsdWUpLnJlcGxhY2UoXCIkXCIsIFwiXCIpLCAxKX0oQmx1ZSkg4oaSIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCskJHthYmJyTnVtKCtnZXRUZXh0KFNlbGVjdG9yTWFwLnByaXplKS5yZXBsYWNlKFwiKyRcIiwgXCJcIiksIDEpfSB8ICR7Z2V0VGV4dChTZWxlY3Rvck1hcC5vZGRzUmVkKX06JHtnZXRUZXh0KFNlbGVjdG9yTWFwLm9kZHNCbHVlKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChnZXRUZXh0KFNlbGVjdG9yTWFwLm9kZHNSZWQpICYmXG4gICAgICAgICAgICAgICAgZ2V0VGV4dChTZWxlY3Rvck1hcC5vZGRzQmx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYE9kZHM6ICR7Z2V0VGV4dChTZWxlY3Rvck1hcC5vZGRzUmVkKX06JHtnZXRUZXh0KFNlbGVjdG9yTWFwLm9kZHNCbHVlKX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnZXRUZXh0KFNlbGVjdG9yTWFwLmVzdGF0dXMpKSB7XG4gICAgICAgICAgICBpZiAoZ2V0VGV4dChTZWxlY3Rvck1hcC5lc3RhdHVzKS5zcGxpdChcIndpbnMhXCIpWzBdLmxlbmd0aCA8PSAzMilcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Z2V0VGV4dChTZWxlY3Rvck1hcC5lc3RhdHVzKS5zcGxpdChcIndpbnMhXCIpWzBdfXdpbnMhYDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtnZXRUZXh0KFNlbGVjdG9yTWFwLmVzdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiLlwiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpY2UoLTIpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKFwiIFwiKX0gd2lucyFgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZ2V0VGV4dChTZWxlY3Rvck1hcC5lc3RhdHVzKSlcbiAgICAgICAgcmV0dXJuIGdldFRleHQoU2VsZWN0b3JNYXAuZXN0YXR1cyk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gXCJMb2FkaW5nLi4uXCI7XG59XG5mdW5jdGlvbiBhYmJyTnVtKG51bWJlciwgZGVjUGxhY2VzKSB7XG4gICAgaWYgKG51bWJlciA+PSAxMDAwKSB7XG4gICAgICAgIGxldCBhYmJyLCBsZXR0ZXI7XG4gICAgICAgIGRlY1BsYWNlcyA9IE1hdGgucG93KDEwLCBkZWNQbGFjZXMpO1xuICAgICAgICBjb25zdCBhYmJyZXYgPSBbXCJrXCIsIFwibVwiLCBcImJcIiwgXCJ0XCJdO1xuICAgICAgICBmb3IgKGxldCBpID0gYWJicmV2Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gTWF0aC5wb3coMTAsIChpICsgMSkgKiAzKTtcbiAgICAgICAgICAgIGlmIChzaXplIDw9IG51bWJlcikge1xuICAgICAgICAgICAgICAgIG51bWJlciA9IE1hdGgucm91bmQoKG51bWJlciAqIGRlY1BsYWNlcykgLyBzaXplKSAvIGRlY1BsYWNlcztcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyID09PSAxMDAwICYmIGkgPCBhYmJyZXYubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldHRlciA9IGFiYnJldltpXTtcbiAgICAgICAgICAgICAgICBhYmJyID0gbnVtYmVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcoYWJicikgKyBsZXR0ZXI7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIFN0cmluZyhudW1iZXIpO1xufVxucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBbYmV0LCBidXR0b25zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJldFwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvbnNcIiksXG4gICAgXSksIHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU2FsdHklMjBCZXQvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfTtcbiAgICBzd2l0Y2ggKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgIGNhc2UgXCIvXCI6XG4gICAgICAgIGNhc2UgXCIvaW5kZXhcIjoge1xuICAgICAgICAgICAgY29uc3QgW21vZGVLZXksIG1vZGVUZXh0XSA9IGdldE1vZGVJbWFnZUtleSgpO1xuICAgICAgICAgICAgaWYgKGZpZ2h0ZXJzQ2hlY2sgIT09IGdldEZpZ2h0ZXJzKCkpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGdldEZpZ2h0ZXJzKCk7XG4gICAgICAgICAgICAgICAgZmlnaHRlcnNDaGVjayA9IGdldEZpZ2h0ZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGAke2dldEZpZ2h0ZXJzKCl94oCOYDtcbiAgICAgICAgICAgICAgICBmaWdodGVyc0NoZWNrID0gYCR7Z2V0RmlnaHRlcnMoKX3igI5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZ2V0QmV0U3RhdHVzKGJldCk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IG1vZGVLZXk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBtb2RlVGV4dDtcbiAgICAgICAgICAgIGlzQmV0T3BlbigpXG4gICAgICAgICAgICAgICAgPyAoYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSlcbiAgICAgICAgICAgICAgICA6IChwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcCk7XG4gICAgICAgICAgICBpZiAoYnV0dG9ucykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJvZmVvXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRvdXJuYW1lbnQgQnJhY2tldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuc2FsdHliZXQuY29tL3NoYWtlcj9icmFja2V0PTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2FsdGdpcmxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRXhoaWJpdGlvbiBRdWV1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuc2FsdHliZXQuY29tL3NoYWtlcj9hY3RpdmVyZXF1ZXN0cz0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiL2F1dGhlbnRpY2F0ZVwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2lnbmluZyBpbi4uLlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiL2JhbmtcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNoZWNraW5nIEJhbmtcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5VUkwgPT09IFwiaHR0cHM6Ly93d3cuc2FsdHliZXQuY29tL3NoYWtlcj9icmFja2V0PTFcIikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDaGVja2luZyBUb3VybmFtZW50IEJyYWNrZXRcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LlVSTCA9PT0gXCJodHRwczovL3d3dy5zYWx0eWJldC5jb20vc2hha2VyP2FjdGl2ZXJlcXVlc3RzPTFcIikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDaGVja2luZyBFeGhpYml0aW9uIFF1ZXVlXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBudWxsO1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4RlFVRkZMRkZCUVZFc1JVRkJSU3h2UWtGQmIwSXNSVUZCUlN4RFFVRkRMRVZCUTJoRkxGZEJRVmNzUjBGQlowTTdTVUZETVVNc1IwRkJSeXhGUVVGRkxIVkRRVUYxUXp0SlFVTTFReXhKUVVGSkxFVkJRVVVzZDBOQlFYZERPMGxCUXpsRExFOUJRVThzUlVGQlJTdzJRa0ZCTmtJN1NVRkRkRU1zUzBGQlN5eEZRVUZGTEhOQ1FVRnpRanRKUVVNM1FpeE5RVUZOTEVWQlFVVXNhMEpCUVd0Q08wbEJRekZDTEUxQlFVMHNSVUZCUlN3d1EwRkJNRU03U1VGRGJFUXNUMEZCVHl4RlFVRkZMREpEUVVFeVF6dEpRVU53UkN4TFFVRkxMRVZCUVVVc05FTkJRVFJETzBsQlEyNUVMRTlCUVU4c1JVRkJSU3cwUkVGQk5FUTdTVUZEY2tVc1VVRkJVU3hGUVVGRkxEWkVRVUUyUkR0SlFVTjJSU3hSUVVGUkxFVkJRVVVzTWtKQlFUSkNPMGxCUTNKRExFOUJRVThzUlVGQlJTeHhRa0ZCY1VJN1EwRkRPVUlzUTBGQlF6dEJRVVZJTEVsQlFVa3NZVUZCY1VJc1JVRkRlRUlzYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRmJrUXNVMEZCVXl4UFFVRlBMRU5CUVVNc1VVRkJaMEk3U1VGRGFFTXNUMEZCVHl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEZkQlFWY3NRMEZCUXp0QlFVTjBSQ3hEUVVGRE8wRkJVVVFzVTBGQlV5eGxRVUZsTzBsQlEzWkNMRWxCUTBNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZETVVJc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xRkJRMmhFTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXp0UlFVVTNReXhQUVVGUExHdEZRVUZuUWl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFOQlEzUkRMRWxCUTBvc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRMnhFTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXp0UlFVVnNSQ3hQUVVGUExHdEZRVUZyUWl4cFFrRkJhVUlzUTBGQlF5eERRVUZET3p0UlFVTjRReXhQUVVGUExHdEZRVUZuUWl4clFrRkJhMElzUTBGQlF5eERRVUZETzBGQlEycEVMRU5CUVVNN1FVRkZSQ3hUUVVGVExGZEJRVmM3U1VGRGJrSXNTVUZCU1N4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJRM2hFTEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6czdVVUZEYWtVc1QwRkJUeXh4UWtGQmNVSXNRMEZCUXp0QlFVTnVReXhEUVVGRE8wRkJSVVFzVTBGQlV5eFRRVUZUTzBsQlEycENMRTlCUVU4c1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRGRrUXNRMEZCUXp0QlFVVkVMRk5CUVZNc1dVRkJXU3hEUVVGRExFbEJRV0U3U1VGRGJFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRk8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRaUVVOMFJDeEpRVUZKTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSVHRuUWtGRGVFUXNTVUZCU1N4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRE9VTXNUMEZCVHl4RFFVTk9MRWxCUVVrc1QwRkJUeXhEUVVOV0xFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVTTNReXhEUVVGRExFTkJRMFFzVlVGQlZUdDNRa0ZEV0N4TFFVRkxMRTlCUVU4c1EwRkRXQ3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZETjBNc1EwRkJReXhEUVVORUxFMUJRVTBzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRemRETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUTNCQ0xFVkJRVVVzUTBGRFNDeERRVUZETzJsQ1FVTkdPM0ZDUVVGTk8yOUNRVU5PTEU5QlFVOHNRMEZEVGl4SlFVRkpMRTlCUVU4c1EwRkRWaXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZET1VNc1EwRkJReXhEUVVORUxGZEJRVmM3ZDBKQlExb3NTMEZCU3l4UFFVRlBMRU5CUTFnc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlF6ZERMRU5CUVVNc1EwRkRSQ3hOUVVGTkxFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVNM1F5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVTndRaXhGUVVGRkxFTkJRMGdzUTBGQlF6dHBRa0ZEUmp0aFFVTkVPMmxDUVVGTkxFbEJRMDRzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNN1owSkJRelZDTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRelZDTzJkQ1FVTkVMRTlCUVU4c1UwRkJVeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkRkRVFzVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZEY0VJc1JVRkJSU3hEUVVGRE8yRkJRMG83TzJkQ1FVRk5MRTlCUVU4c1dVRkJXU3hEUVVGRE8xTkJRek5DTzJGQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzFsQlEzaERMRWxCUVVrc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVN1owSkJRemxFTEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETzJsQ1FVTTFSRHRuUWtGRFNpeFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU03Y1VKQlEzQkRMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETzNGQ1FVTm9RaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETzNGQ1FVTldMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHhRa0ZEVml4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF6dGhRVU53UWp0VFFVTkVPenRaUVVGTkxFOUJRVThzV1VGQldTeERRVUZETzB0QlF6TkNPMU5CUVUwc1NVRkJTU3hQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXp0UlFVRkZMRTlCUVU4c1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXpzN1VVRkRlRVVzVDBGQlR5eFpRVUZaTEVOQlFVTTdRVUZETVVJc1EwRkJRenRCUVVWRUxGTkJRVk1zVDBGQlR5eERRVUZETEUxQlFXTXNSVUZCUlN4VFFVRnBRanRKUVVOcVJDeEpRVUZKTEUxQlFVMHNTVUZCU1N4SlFVRkpMRVZCUVVVN1VVRkRia0lzU1VGQlNTeEpRVUZaTEVWQlFVVXNUVUZCWXl4RFFVRkRPMUZCUTJwRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU53UXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0JETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU0xUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeE5RVUZOTEVWQlFVVTdaMEpCUTI1Q0xFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExGTkJRVk1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenRuUWtGRE4wUXNTVUZCU1N4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRE4wTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGRFdDeERRVUZETEVWQlFVVXNRMEZCUXp0cFFrRkRTanRuUWtGRFJDeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU51UWl4SlFVRkpMRWRCUVVjc1RVRkJUU3hEUVVGRE8yZENRVU5rTEUxQlFVMDdZVUZEVGp0VFFVTkVPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMHRCUXpkQ096dFJRVUZOTEU5QlFVOHNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRemxDTEVOQlFVTTdRVUZGUkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRTFCUVUwc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU4yUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxFdEJRVXNzUTBGQlF6dFJRVU51UXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxGTkJRVk1zUTBGQlF6dExRVU4yUXl4RFFVRkRMRVZCUTBZc1dVRkJXU3hIUVVGcFFqdFJRVU0xUWl4aFFVRmhMRVZCUTFvc2EwVkJRV3RGTzB0QlEyNUZMRU5CUVVNN1NVRkRTQ3hSUVVGUkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTI1RExFdEJRVXNzUjBGQlJ5eERRVUZETzFGQlExUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVOa0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRWRCUVVjc1pVRkJaU3hGUVVGRkxFTkJRVU03V1VGRk9VTXNTVUZCU1N4aFFVRmhMRXRCUVVzc1YwRkJWeXhGUVVGRkxFVkJRVVU3WjBKQlEzQkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVjBGQlZ5eEZRVUZGTEVOQlFVTTdaMEpCUTNKRExHRkJRV0VzUjBGQlJ5eFhRVUZYTEVWQlFVVXNRMEZCUXp0aFFVTTVRanRwUWtGQlRUdG5Ra0ZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFZEJRVWNzVjBGQlZ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0blFrRkRNME1zWVVGQllTeEhRVUZITEVkQlFVY3NWMEZCVnl4RlFVRkZMRWRCUVVjc1EwRkJRenRoUVVOd1F6dFpRVVZFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlJYWkRMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzVDBGQlR5eERRVUZETzFsQlEzSkRMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVVVGQlVTeERRVUZETzFsQlJYWkRMRk5CUVZNc1JVRkJSVHRuUWtGRFZpeERRVUZETEVOQlFVTXNRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRja1FzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMWxCUlhKRUxFbEJRVWtzVDBGQlR5eEZRVUZGTzJkQ1FVTmFMRkZCUVZFc1QwRkJUeXhGUVVGRk8yOUNRVU5vUWl4TFFVRkxMRkZCUVZFN2QwSkJRMW9zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnpzMFFrRkRkRUk3WjBOQlEwTXNTMEZCU3l4RlFVRkZMRzlDUVVGdlFqdG5RMEZETTBJc1IwRkJSeXhGUVVGRkxESkRRVUV5UXpzMlFrRkRhRVE3ZVVKQlEwUXNRMEZCUXp0M1FrRkRSaXhOUVVGTk8yOUNRVU5RTEV0QlFVc3NWVUZCVlR0M1FrRkRaQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZIT3pSQ1FVTjBRanRuUTBGRFF5eExRVUZMTEVWQlFVVXNhMEpCUVd0Q08yZERRVU42UWl4SFFVRkhMRVZCUVVVc2EwUkJRV3RFT3paQ1FVTjJSRHQ1UWtGRFJDeERRVUZETzNkQ1FVTkdMRTFCUVUwN2FVSkJRMUE3WVVGRFJEdFpRVVZFTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc1pVRkJaU3hEUVVGRExFTkJRVU03V1VGRGNrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU03V1VGRGRrTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0WlFVVm9SQ3hOUVVGTk8xTkJRMDQ3VVVGRFJDeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTJJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTTdXVUZEZGtNc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRaUVVWb1JDeE5RVUZOTzFOQlEwNDdVVUZEUkR0WlFVTkRMRWxCUVVrc1VVRkJVU3hEUVVGRExFZEJRVWNzUzBGQlN5d3lRMEZCTWtNc1JVRkJSVHRuUWtGRGFrVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcyUWtGQk5rSXNRMEZCUXp0blFrRkRja1FzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dGhRVU5vUkR0cFFrRkJUU3hKUVVOT0xGRkJRVkVzUTBGQlF5eEhRVUZITEV0QlFVc3NhMFJCUVd0RUxFVkJRMnhGTzJkQ1FVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTWtKQlFUSkNMRU5CUVVNN1owSkJRMjVFTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdZVUZEYUVRN08yZENRVUZOTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRE8wdEJRM0JETzBsQlJVUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJTZWxlY3Rvck1hcCIsIlJlZCIsIkJsdWUiLCJlc3RhdHVzIiwidG1vZGUiLCJmb290ZXIiLCJiZXRSZWQiLCJiZXRCbHVlIiwicHJpemUiLCJvZGRzUmVkIiwib2Rkc0JsdWUiLCJiZXRzVmlldyIsImJhbGFuY2UiLCJmaWdodGVyc0NoZWNrIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiZ2V0VGV4dCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJnZXRNb2RlSW1hZ2VLZXkiLCJpbmNsdWRlcyIsImdldEZpZ2h0ZXJzIiwiaXNCZXRPcGVuIiwiZ2V0QmV0U3RhdHVzIiwic2hvdyIsInNwbGl0IiwibGVuZ3RoIiwicmVwbGFjZSIsInNwbGljZSIsImpvaW4iLCJhYmJyTnVtIiwibnVtYmVyIiwiZGVjUGxhY2VzIiwiYWJiciIsImxldHRlciIsInBvdyIsImFiYnJldiIsImkiLCJzaXplIiwicm91bmQiLCJTdHJpbmciLCJvbiIsImFzeW5jIiwiYmV0IiwiYnV0dG9ucyIsIlByb21pc2UiLCJhbGwiLCJnZXRTZXR0aW5nIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJtb2RlS2V5IiwibW9kZVRleHQiLCJkZXRhaWxzIiwic3RhdGUiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJzdGFydFRpbWVzdGFtcCIsImxhYmVsIiwidXJsIiwiVVJMIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;