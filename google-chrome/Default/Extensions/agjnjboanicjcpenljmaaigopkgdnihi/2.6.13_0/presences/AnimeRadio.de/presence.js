var __webpack_exports__={};const presence=new Presence({clientId:"687352219598585905"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/AnimeRadio.de/assets/logo.png",startTimestamp:browsingTimestamp};switch(document.location.host){case"www.animeradio.de":document.location.pathname.includes("/webplayer/")?(e.details="Hört AnimeRadio",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png"):document.URL.includes("top100")?e.details="Betrachtet Top100":document.URL.includes("events")?e.details="Betrachtet Events":document.URL.includes("programm")&&(e.details="Betrachtet Programm");break;case"www.animetreff.de":e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/A/AnimeRadio.de/assets/0.png",document.URL.includes("/CustomPage/?id=1")?(e.details="Chattet",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/writing.png"):document.location.pathname.includes("/gallery/")?document.location.pathname.includes("/Image/")?(e.details="Betrachtet Bild",e.state=document.querySelector("#content > header > h1").textContent):document.location.pathname.includes("/Album/")?(e.details="Betrachtet Album",e.state=document.querySelector("#content > header > h1").textContent.replace(document.querySelector("#content > header > h1 > span").textContent,"")):document.location.pathname.includes("/AlbumList/")&&(e.details="Betrachtet Galerie"):document.location.pathname.includes("/calendar/")?(e.details="Betrachtet Kalender",e.state=document.querySelector("#content > header > h1").textContent):document.location.pathname.includes("/MemberList/")?e.details="Betrachtet Mitglieder":document.location.pathname.includes("/User/")?e.details="Betrachtet Nutzer":document.location.pathname.includes("/Thread/")?(e.details="Liest Beiträge:",e.state=document.querySelector("#content > header > h1 > a").textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):document.location.pathname.includes("/Board/")?e.details=`Betrachtet ${document.querySelector("#content > header > h1 > a").textContent}`:document.location.pathname.includes("/Search/")?document.querySelector("#errorMessage")?e.details=`Sucht nach ${document.querySelector("#errorMessage").textContent.split("„")[1].split("“")[0]}`:e.details=`Sucht nach ${document.querySelector("#content > header > p > strong").textContent}`:e.details="Stöbert in den Foren";break;case"www.animenews.de":e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/A/AnimeRadio.de/assets/1.png",e.details="Liest Neuigkeiten",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;case"www.animekino.de":e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/A/AnimeRadio.de/assets/2.png",document.URL.includes("partner")?e.details="Betrachtet Partner":document.URL.includes("kontakt")?e.details="Betrachtet Kontakt":document.URL.includes("ort")?e.details="Betrachtet Ort":document.URL.includes("filme")?e.details="Betrachtet Filmvorstellungen":e.details="Betrachtet Kino";break;case"www.animehamburg.de":document.URL.includes("partner")?e.details="Betrachtet Partner":document.URL.includes("kontakt")?e.details="Betrachtet Kontakt":document.URL.includes("ort")?e.details="Betrachtet Ort":document.URL.includes("programm")?e.details="Betrachtet Programm":e.details="Betrachtet Hanmaco";break;case"www.animekultur.de":document.URL.includes("joinus")?(e.details="Will ein Mitglied werden",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/writing.png"):document.URL.includes("projekte")?e.details="Betrachtet Projekte":document.URL.includes("pressemitteilungen")?e.details="Betrachtet Pressemitteilungen":document.URL.includes("marketing")?e.details="Betrachtet Marketing":document.URL.includes("kontakt")?e.details="Betrachtet Kontakt":document.URL.includes("hajime")?e.details="Betrachtet Hanjime! Anime-Con":e.details="Betrachtet Kultur / Über uns";break;case"www.animetickets.de":document.location.pathname.includes("/event/")?(e.details="Betrachtet Eventtickets für",e.state=document.querySelector("body > div > div > div > div:nth-child(2) > span").textContent):document.location.pathname.includes("/events")?e.details="Betrachtet Events":document.location.pathname.includes("contact")?e.details="Betrachtet Kontakt":document.location.pathname.includes("order")&&(e.details="Betrachtet Order");break;case"www.animemesse.de":e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/A/AnimeRadio.de/assets/3.png",e.details=`Betrachtet ${document.querySelector("#content > li.active > a").textContent}`;break;case"www.animefanshop.de":{e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/A/AnimeRadio.de/assets/4.png";const t=document.querySelector(".product-info-title-desktop > span");t?(e.details="Betrachtet Produkt:",e.state=t.textContent):document.location.pathname.includes("/advanced_search_result")&&(e.details=`Sucht nach ${document.querySelector("#main > div > h1").textContent.split('"')[1].split('"')[0]}`);break}}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hDUyxjQUFjLG9CQUNkQyxZQUFZRSxNQUFNLEtBQUssR0FDdkJBLE1BQU0sS0FBSyxNQUVwQixLQUNKLEVBRUFmLEVBQWFRLFFBQ2JsQixTQUFTMkIsWUFBWWpCLEdBRXJCVixTQUFTMkIsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2ODczNTIyMTk1OTg1ODU5MDVcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9BL0FuaW1lUmFkaW8uZGUvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9O1xuICAgIHN3aXRjaCAoZG9jdW1lbnQubG9jYXRpb24uaG9zdCkge1xuICAgICAgICBjYXNlIFwid3d3LmFuaW1lcmFkaW8uZGVcIjoge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3dlYnBsYXllci9cIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSMO2cnQgQW5pbWVSYWRpb1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwidG9wMTAwXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IFRvcDEwMFwiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwiZXZlbnRzXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IEV2ZW50c1wiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwicHJvZ3JhbW1cIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJldHJhY2h0ZXQgUHJvZ3JhbW1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJ3d3cuYW5pbWV0cmVmZi5kZVwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9BL0FuaW1lUmFkaW8uZGUvYXNzZXRzLzAucG5nXCI7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwiL0N1c3RvbVBhZ2UvP2lkPTFcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ2hhdHRldFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy93cml0aW5nLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZ2FsbGVyeS9cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvSW1hZ2UvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IEJpbGRcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50ID4gaGVhZGVyID4gaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL0FsYnVtL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmV0cmFjaHRldCBBbGJ1bVwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IGhlYWRlciA+IGgxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQucmVwbGFjZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQgPiBoZWFkZXIgPiBoMSA+IHNwYW5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudCwgXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL0FsYnVtTGlzdC9cIikpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IEdhbGVyaWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2NhbGVuZGFyL1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IEthbGVuZGVyXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50ID4gaGVhZGVyID4gaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9NZW1iZXJMaXN0L1wiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmV0cmFjaHRldCBNaXRnbGllZGVyXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9Vc2VyL1wiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmV0cmFjaHRldCBOdXR6ZXJcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL1RocmVhZC9cIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTGllc3QgQmVpdHLDpGdlOlwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IGhlYWRlciA+IGgxID4gYVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL0JvYXJkL1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYEJldHJhY2h0ZXQgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQgPiBoZWFkZXIgPiBoMSA+IGFcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL1NlYXJjaC9cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvck1lc3NhZ2VcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU3VjaHQgbmFjaCAke2RvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNlcnJvck1lc3NhZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIuKAnlwiKVsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwi4oCcXCIpWzBdfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBTdWNodCBuYWNoICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50ID4gaGVhZGVyID4gcCA+IHN0cm9uZ1wiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU3TDtmJlcnQgaW4gZGVuIEZvcmVuXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwid3d3LmFuaW1lbmV3cy5kZVwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9BL0FuaW1lUmFkaW8uZGUvYXNzZXRzLzEucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTGllc3QgTmV1aWdrZWl0ZW5cIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInd3dy5hbmltZWtpbm8uZGVcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9BbmltZVJhZGlvLmRlL2Fzc2V0cy8yLnBuZ1wiO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LlVSTC5pbmNsdWRlcyhcInBhcnRuZXJcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJldHJhY2h0ZXQgUGFydG5lclwiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwia29udGFrdFwiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmV0cmFjaHRldCBLb250YWt0XCI7XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5VUkwuaW5jbHVkZXMoXCJvcnRcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJldHJhY2h0ZXQgT3J0XCI7XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5VUkwuaW5jbHVkZXMoXCJmaWxtZVwiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmV0cmFjaHRldCBGaWxtdm9yc3RlbGx1bmdlblwiO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IEtpbm9cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJ3d3cuYW5pbWVoYW1idXJnLmRlXCI6IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5VUkwuaW5jbHVkZXMoXCJwYXJ0bmVyXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IFBhcnRuZXJcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LlVSTC5pbmNsdWRlcyhcImtvbnRha3RcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJldHJhY2h0ZXQgS29udGFrdFwiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwib3J0XCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IE9ydFwiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwicHJvZ3JhbW1cIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJldHJhY2h0ZXQgUHJvZ3JhbW1cIjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmV0cmFjaHRldCBIYW5tYWNvXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwid3d3LmFuaW1la3VsdHVyLmRlXCI6IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5VUkwuaW5jbHVkZXMoXCJqb2ludXNcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV2lsbCBlaW4gTWl0Z2xpZWQgd2VyZGVuXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3dyaXRpbmcucG5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5VUkwuaW5jbHVkZXMoXCJwcm9qZWt0ZVwiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmV0cmFjaHRldCBQcm9qZWt0ZVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwicHJlc3NlbWl0dGVpbHVuZ2VuXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IFByZXNzZW1pdHRlaWx1bmdlblwiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwibWFya2V0aW5nXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IE1hcmtldGluZ1wiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKFwia29udGFrdFwiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmV0cmFjaHRldCBLb250YWt0XCI7XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5VUkwuaW5jbHVkZXMoXCJoYWppbWVcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJldHJhY2h0ZXQgSGFuamltZSEgQW5pbWUtQ29uXCI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJldHJhY2h0ZXQgS3VsdHVyIC8gw5xiZXIgdW5zXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwid3d3LmFuaW1ldGlja2V0cy5kZVwiOiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZXZlbnQvXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJldHJhY2h0ZXQgRXZlbnR0aWNrZXRzIGbDvHJcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikgPiBzcGFuXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZXZlbnRzXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IEV2ZW50c1wiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJjb250YWN0XCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCZXRyYWNodGV0IEtvbnRha3RcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwib3JkZXJcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJldHJhY2h0ZXQgT3JkZXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJ3d3cuYW5pbWVtZXNzZS5kZVwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9BL0FuaW1lUmFkaW8uZGUvYXNzZXRzLzMucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBCZXRyYWNodGV0ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50ID4gbGkuYWN0aXZlID4gYVwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInd3dy5hbmltZWZhbnNob3AuZGVcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9BbmltZVJhZGlvLmRlL2Fzc2V0cy80LnBuZ1wiO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdC1pbmZvLXRpdGxlLWRlc2t0b3AgPiBzcGFuXCIpO1xuICAgICAgICAgICAgaWYgKHByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmV0cmFjaHRldCBQcm9kdWt0OlwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHByb2R1Y3QudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9hZHZhbmNlZF9zZWFyY2hfcmVzdWx0XCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU3VjaHQgbmFjaCAke2RvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI21haW4gPiBkaXYgPiBoMVwiKVxuICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQuc3BsaXQoJ1wiJylbMV1cbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCdcIicpWzBdfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVmR1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYkVNc1lVRkJZU3h6UlVGQllUdFJRVU14UWl4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRU5CUVVNN1NVRkZSaXhSUVVGUkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZPMUZCUXk5Q0xFdEJRVXNzYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRaUVVONlFpeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlR0blFrRkRka1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dG5Ra0ZEZWtNc1dVRkJXU3hEUVVGRExHRkJRV0VzYVVSQlFXTXNRMEZCUXp0aFFVTjZRenRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dG5Ra0ZEZWtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenRwUWtGRGRrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdaMEpCUTNaRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03YVVKQlEzWkRMRWxCUVVrc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRPMmRDUVVONlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSEZDUVVGeFFpeERRVUZETzFsQlJUbERMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRaUVVONlFpeFpRVUZaTEVOQlFVTXNZVUZCWVN4dlJVRkJiMElzUTBGQlF6dFpRVU12UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFVkJRVVU3WjBKQlF5OURMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVTBGQlV5eERRVUZETzJkQ1FVTnFReXhaUVVGWkxFTkJRVU1zWVVGQllTeHZSRUZCYVVJc1EwRkJRenRoUVVNMVF6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHRuUWtGRE5VUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN2IwSkJRMjVFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdiMEpCUTNwRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRNVU1zZDBKQlFYZENMRU5CUTNoQ0xFTkJRVU1zVjBGQlZ5eERRVUZETzJsQ1FVTmtPM0ZDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzI5Q1FVTXhSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8yOUNRVU14UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkU3ZVVKQlF6TkNMR0ZCUVdFc1EwRkJReXgzUWtGQmQwSXNRMEZCUXp0NVFrRkRka01zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZEYmtJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5d3JRa0ZCSzBJc1EwRkJRenQ1UWtGRGNrUXNWMEZCVnl4RlFVTmlMRVZCUVVVc1EwRkRSaXhEUVVGRE8ybENRVU5JTzNGQ1FVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJRenR2UWtGRE5VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0aFFVTTNRenRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlR0blFrRkROMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4eFFrRkJjVUlzUTBGQlF6dG5Ra0ZETjBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTXhReXgzUWtGQmQwSXNRMEZEZUVJc1EwRkJReXhYUVVGWExFTkJRVU03WVVGRFpEdHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNN1owSkJRemRFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdhVUpCUXpORExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dG5Ra0ZEY2tRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenRwUWtGRGRrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1owSkJRM3BFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdaMEpCUTNwRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRNVU1zTkVKQlFUUkNMRU5CUXpWQ0xFTkJRVU1zVjBGQlZ5eERRVUZETzJkQ1FVTmtMRmxCUVZrc1EwRkJReXhoUVVGaExHOUVRVUZwUWl4RFFVRkRPMkZCUXpWRE8ybENRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMmRDUVVNeFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR05CUTNSQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNORUpCUVRSQ0xFTkJRVU1zUTBGQlF5eFhRVU4wUkN4RlFVRkZMRU5CUVVNN1lVRkRTRHRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlR0blFrRkRNMFFzU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRk8yOUNRVU0xUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHTkJRM1JDTEZGQlFWRTdlVUpCUTA0c1lVRkJZU3hEUVVGRExHVkJRV1VzUTBGQlF6dDVRa0ZET1VJc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2VVSkJRM3BDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRMllzUlVGQlJTeERRVUZETzJsQ1FVTklPM0ZDUVVGTk8yOUNRVU5PTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1kwRkRkRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4blEwRkJaME1zUTBGQlF5eERRVUZETEZkQlF6RkVMRVZCUVVVc1EwRkJRenRwUWtGRFNEdGhRVU5FT3p0blFrRkJUU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8xbEJSWEpFTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0WlFVTjRRaXhaUVVGWkxFTkJRVU1zWVVGQllTeHZSVUZCYlVJc1EwRkJRenRaUVVNNVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzFsQlF6TkRMRmxCUVZrc1EwRkJReXhoUVVGaExHOUVRVUZwUWl4RFFVRkRPMWxCUlRWRExFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFpRVU40UWl4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UlVGQmJVSXNRMEZCUXp0WlFVTTVReXhKUVVGSkxGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJRenRuUWtGRGJrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0cFFrRkRlRU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU03WjBKQlEzaERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN2FVSkJRM2hETEVsQlFVa3NVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETzJkQ1FVTndReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8ybENRVU53UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXp0blFrRkRkRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3NFFrRkJPRUlzUTBGQlF6czdaMEpCUTJ4RUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03V1VGRk9VTXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFbEJRVWtzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRE8yZENRVU51UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMmxDUVVONFF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dG5Ra0ZEZUVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRwUWtGRGVFTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTTdaMEpCUTNCRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03YVVKQlEzQkRMRWxCUVVrc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRPMmRDUVVONlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSEZDUVVGeFFpeERRVUZET3p0blFrRkRla01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dFpRVVZxUkN4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNN1dVRkRNVUlzU1VGQlNTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdG5Ra0ZEY0VNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRuUWtGRGJFUXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdZVUZETlVNN2FVSkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU03WjBKQlF6TkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN2FVSkJRM3BETEVsQlFVa3NVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNN1owSkJRMjVFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc0swSkJRU3RDTEVOQlFVTTdhVUpCUTI1RUxFbEJRVWtzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRE8yZENRVU14UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMmxDUVVNeFF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dG5Ra0ZEZUVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRwUWtGRGVFTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdaMEpCUTNaRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NLMEpCUVN0Q0xFTkJRVU03TzJkQ1FVTnVSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERoQ1FVRTRRaXhEUVVGRE8xbEJSVE5FTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdG5Ra0ZEYmtRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5dzJRa0ZCTmtJc1EwRkJRenRuUWtGRGNrUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU14UXl4clJFRkJhMFFzUTBGRGJFUXNRMEZCUXl4WFFVRlhMRU5CUVVNN1lVRkRaRHRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdaMEpCUTNoRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03YVVKQlEzWkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJRenRuUWtGRGRFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0cFFrRkRlRU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETzJkQ1FVTndSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8xbEJSVE5ETEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhaUVVGWkxFTkJRVU1zWVVGQllTeHZSVUZCYjBJc1EwRkJRenRaUVVNdlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR05CUTNSQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF5eFhRVU53UkN4RlFVRkZMRU5CUVVNN1dVRkZTQ3hOUVVGTk8xTkJRMDQ3VVVGRFJDeExRVUZMTEhGQ1FVRnhRaXhEUVVGRExFTkJRVU03V1VGRE0wSXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwVkJRWE5DTEVOQlFVTTdXVUZEYWtRc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tNc2IwTkJRVzlETEVOQlEzQkRMRU5CUVVNN1dVRkRSaXhKUVVGSkxFOUJRVThzUlVGQlJUdG5Ra0ZEV2l4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPMmRDUVVNM1F5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU03WVVGRGVrTTdhVUpCUVUwc1NVRkRUaXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNSVUZETjBRN1owSkJRMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4alFVTjBRaXhSUVVGUk8zRkNRVU5PTEdGQlFXRXNRMEZCUXl4clFrRkJhMElzUTBGQlF6dHhRa0ZEYWtNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2NVSkJRM3BDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRMllzUlVGQlJTeERRVUZETzJGQlEwZzdXVUZGUkN4TlFVRk5PMU5CUTA0N1MwRkZSRHRKUVVWRUxFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZET3p0UlFVTjRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhvc3QiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiZGV0YWlscyIsInNtYWxsSW1hZ2VLZXkiLCJVUkwiLCJzdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGxpdCIsInByb2R1Y3QiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;