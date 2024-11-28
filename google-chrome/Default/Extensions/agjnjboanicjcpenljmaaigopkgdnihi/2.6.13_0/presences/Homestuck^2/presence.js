var __webpack_exports__={};const presence=new Presence({clientId:"945791515169521694"}),browsingTimestamp=Math.floor(Date.now()/1e3);async function getPages(){const e=await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://homestuck2.com/story/rss");return(await e.json()).items[0].title}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Homestuck%5E2/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t}=document.location,s=t.split("/");switch(s[1]){case"":e.details="Viewing the home page";break;case"story":e.details="Reading Homestuck^2",e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/H/Homestuck%5E2/assets/0.png",s[2]?e.state=`Page ${s[2]} of ${await getPages()}`:e.state=`Page 1 of ${await getPages()}`,document.querySelector("h2")?e.smallImageText=document.querySelector("h2").textContent:e.smallImageText=document.querySelector("title").textContent,e.buttons=[{label:"Read Along",url:`https://www.homestuck2.com${t}`}];break;case"bonus":switch(e.details="Viewing bonus content",s[2]){case"catnapped":e.details="Reading Catnapped",e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/H/Homestuck%5E2/assets/0.png",e.state=`Page ${s[3]} of 28`,e.smallImageText=document.querySelector("h2").textContent,e.buttons=[{label:"Read Along",url:`https://www.homestuck2.com${t}`}];break;case"a-treatise-on-representational-democracy":e.details="Reading A Treatise on Representational Democracy",e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/H/Homestuck%5E2/assets/0.png",e.state=`Page ${s[3]} of 13`,e.smallImageText=document.querySelector("h2").textContent,e.buttons=[{label:"Read Along",url:`https://www.homestuck2.com${t}`}];break;case"diamonds-dames-and-dads":e.details="Reading Diamonds, Dames, and Dads",e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/H/Homestuck%5E2/assets/0.png",e.state=`Page ${s[3]} of 46`,e.smallImageText=document.querySelector("h2").textContent,e.buttons=[{label:"Read Along",url:`https://www.homestuck2.com${t}`}];break;case"a-threat-sensed":e.details="Reading A Threat, Sensed",e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/H/Homestuck%5E2/assets/0.png",e.state=`Page ${s[3]} of 13`,e.smallImageText=document.querySelector("h2").textContent,e.buttons=[{label:"Read Along",url:`https://www.homestuck2.com${t}`}];break;case"the-influencers":e.details="Reading The Influencers",e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/H/Homestuck%5E2/assets/0.png",e.state=`Page ${s[3]} of 34`,e.smallImageText=document.querySelector("h2").textContent,e.buttons=[{label:"Read Along",url:`https://www.homestuck2.com${t}`}]}break;case"about":e.details="Viewing the about page";break;case"contacts":e.details="Viewing the contact information";break;case"credits":e.details="Viewing the credits";break;case"log":e.details="Viewing the adventure log";break;case"privacy-policy":e.details="Viewing the privacy policy";break;case"recap":e.details="Viewing recap";break;default:e.details="Viewing an unsupported page"}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnhCLFNBQVNpQyxZQUFZakIsR0FFckJoQixTQUFTaUMsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI5NDU3OTE1MTUxNjk1MjE2OTRcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9IL0hvbWVzdHVjayU1RTIvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCB7IHBhdGhuYW1lIH0gPSBkb2N1bWVudC5sb2NhdGlvbiwgcGF0aEFyciA9IHBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICBzd2l0Y2ggKHBhdGhBcnJbMV0pIHtcbiAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIGhvbWUgcGFnZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzdG9yeVwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgSG9tZXN0dWNrXjJcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0gvSG9tZXN0dWNrJTVFMi9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgIGlmICghcGF0aEFyclsyXSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgUGFnZSAxIG9mICR7YXdhaXQgZ2V0UGFnZXMoKX1gO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBQYWdlICR7cGF0aEFyclsyXX0gb2YgJHthd2FpdCBnZXRQYWdlcygpfWA7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUmVhZCBBbG9uZ1wiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL3d3dy5ob21lc3R1Y2syLmNvbSR7cGF0aG5hbWV9YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm9udXNcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGJvbnVzIGNvbnRlbnRcIjtcbiAgICAgICAgICAgIHN3aXRjaCAocGF0aEFyclsyXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjYXRuYXBwZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgQ2F0bmFwcGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0gvSG9tZXN0dWNrJTVFMi9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFBhZ2UgJHtwYXRoQXJyWzNdfSBvZiAyOGA7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWQgQWxvbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL3d3dy5ob21lc3R1Y2syLmNvbSR7cGF0aG5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhLXRyZWF0aXNlLW9uLXJlcHJlc2VudGF0aW9uYWwtZGVtb2NyYWN5XCI6XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVhZGluZyBBIFRyZWF0aXNlIG9uIFJlcHJlc2VudGF0aW9uYWwgRGVtb2NyYWN5XCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0gvSG9tZXN0dWNrJTVFMi9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFBhZ2UgJHtwYXRoQXJyWzNdfSBvZiAxM2A7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWQgQWxvbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL3d3dy5ob21lc3R1Y2syLmNvbSR7cGF0aG5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkaWFtb25kcy1kYW1lcy1hbmQtZGFkc1wiOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBEaWFtb25kcywgRGFtZXMsIGFuZCBEYWRzXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0gvSG9tZXN0dWNrJTVFMi9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFBhZ2UgJHtwYXRoQXJyWzNdfSBvZiA0NmA7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWQgQWxvbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL3d3dy5ob21lc3R1Y2syLmNvbSR7cGF0aG5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhLXRocmVhdC1zZW5zZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgQSBUaHJlYXQsIFNlbnNlZFwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9IL0hvbWVzdHVjayU1RTIvYXNzZXRzLzAucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBQYWdlICR7cGF0aEFyclszXX0gb2YgMTNgO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJSZWFkIEFsb25nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly93d3cuaG9tZXN0dWNrMi5jb20ke3BhdGhuYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidGhlLWluZmx1ZW5jZXJzXCI6XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIFRoZSBJbmZsdWVuY2Vyc1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9IL0hvbWVzdHVjayU1RTIvYXNzZXRzLzAucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBQYWdlICR7cGF0aEFyclszXX0gb2YgMzRgO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJSZWFkIEFsb25nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly93d3cuaG9tZXN0dWNrMi5jb20ke3BhdGhuYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYWJvdXRcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBhYm91dCBwYWdlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNvbnRhY3RzXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgY29udGFjdCBpbmZvcm1hdGlvblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjcmVkaXRzXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgY3JlZGl0c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsb2dcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBhZHZlbnR1cmUgbG9nXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInByaXZhY3ktcG9saWN5XCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgcHJpdmFjeSBwb2xpY3lcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicmVjYXBcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHJlY2FwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFuIHVuc3VwcG9ydGVkIHBhZ2VcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG5hc3luYyBmdW5jdGlvbiBnZXRQYWdlcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5yc3MyanNvbi5jb20vdjEvYXBpLmpzb24/cnNzX3VybD0ke1wiaHR0cHM6Ly9ob21lc3R1Y2syLmNvbS9zdG9yeS9yc3NcIn1gKSwgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YS5pdGVtc1swXS50aXRsZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVOXVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeHpSVUZCWVR0UlFVTXhRaXhqUVVGakxFVkJRVVVzYVVKQlFXbENPMHRCUTJwRExFVkJRMFFzUlVGQlJTeFJRVUZSTEVWQlFVVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVOb1F5eFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVVV2UWl4UlFVRlJMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdFJRVU51UWl4TFFVRkxMRVZCUVVVN1dVRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8xbEJReTlETEUxQlFVMDdVVUZGVUN4TFFVRkxMRTlCUVU4N1dVRkRXQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8xbEJRemRETEZsQlFWa3NRMEZCUXl4aFFVRmhMRzlGUVVGbExFTkJRVU03V1VGRE1VTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlFVVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhoUVVGaExFMUJRVTBzVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXpzN1owSkJRMnBGTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNUVUZCVFN4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJSWFJGTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlF5OUNMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03YVVKQlEyNUZPMmRDUVVOS0xGbEJRVmtzUTBGQlF5eGpRVUZqTzI5Q1FVTXhRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRoUVVNM1F6dFpRVU5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1owSkJRM1JDTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3haUVVGWk8yOUNRVU51UWl4SFFVRkhMRVZCUVVVc05rSkJRVFpDTEZGQlFWRXNSVUZCUlR0cFFrRkROVU03WVVGRFJDeERRVUZETzFsQlEwWXNUVUZCVFR0UlFVVlFMRXRCUVVzc1QwRkJUenRaUVVOWUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkVUpCUVhWQ0xFTkJRVU03V1VGREwwTXNVVUZCVVN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3WjBKQlEyNUNMRXRCUVVzc1YwRkJWenR2UWtGRFppeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzI5Q1FVTXpReXhaUVVGWkxFTkJRVU1zWVVGQllTeHZSVUZCWlN4RFFVRkRPMjlDUVVNeFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTTdiMEpCUTJoRUxGbEJRVmtzUTBGQlF5eGpRVUZqTzNkQ1FVTXhRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenR2UWtGRE1VTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenQzUWtGRGRFSTdORUpCUTBNc1MwRkJTeXhGUVVGRkxGbEJRVms3TkVKQlEyNUNMRWRCUVVjc1JVRkJSU3cyUWtGQk5rSXNVVUZCVVN4RlFVRkZPM2xDUVVNMVF6dHhRa0ZEUkN4RFFVRkRPMjlDUVVOR0xFMUJRVTA3WjBKQlJWQXNTMEZCU3l3d1EwRkJNRU03YjBKQlF6bERMRmxCUVZrc1EwRkJReXhQUVVGUE8zZENRVU51UWl4clJFRkJhMFFzUTBGQlF6dHZRa0ZEY0VRc1dVRkJXU3hEUVVGRExHRkJRV0VzYjBWQlFXVXNRMEZCUXp0dlFrRkRNVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETzI5Q1FVTm9SQ3haUVVGWkxFTkJRVU1zWTBGQll6dDNRa0ZETVVJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN2IwSkJRekZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN2QwSkJRM1JDT3pSQ1FVTkRMRXRCUVVzc1JVRkJSU3haUVVGWk96UkNRVU51UWl4SFFVRkhMRVZCUVVVc05rSkJRVFpDTEZGQlFWRXNSVUZCUlR0NVFrRkROVU03Y1VKQlEwUXNRMEZCUXp0dlFrRkRSaXhOUVVGTk8yZENRVVZRTEV0QlFVc3NlVUpCUVhsQ08yOUNRVU0zUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMURRVUZ0UXl4RFFVRkRPMjlDUVVNelJDeFpRVUZaTEVOQlFVTXNZVUZCWVN4dlJVRkJaU3hEUVVGRE8yOUNRVU14UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNN2IwSkJRMmhFTEZsQlFWa3NRMEZCUXl4alFVRmpPM2RDUVVNeFFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dHZRa0ZETVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dDNRa0ZEZEVJN05FSkJRME1zUzBGQlN5eEZRVUZGTEZsQlFWazdORUpCUTI1Q0xFZEJRVWNzUlVGQlJTdzJRa0ZCTmtJc1VVRkJVU3hGUVVGRk8zbENRVU0xUXp0eFFrRkRSQ3hEUVVGRE8yOUNRVU5HTEUxQlFVMDdaMEpCUlZBc1MwRkJTeXhwUWtGQmFVSTdiMEpCUTNKQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU03YjBKQlEyeEVMRmxCUVZrc1EwRkJReXhoUVVGaExHOUZRVUZsTEVOQlFVTTdiMEpCUXpGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF6dHZRa0ZEYUVRc1dVRkJXU3hEUVVGRExHTkJRV003ZDBKQlF6RkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRPMjlDUVVNeFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPM2RDUVVOMFFqczBRa0ZEUXl4TFFVRkxMRVZCUVVVc1dVRkJXVHMwUWtGRGJrSXNSMEZCUnl4RlFVRkZMRFpDUVVFMlFpeFJRVUZSTEVWQlFVVTdlVUpCUXpWRE8zRkNRVU5FTEVOQlFVTTdiMEpCUTBZc1RVRkJUVHRuUWtGRlVDeExRVUZMTEdsQ1FVRnBRanR2UWtGRGNrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXg1UWtGQmVVSXNRMEZCUXp0dlFrRkRha1FzV1VGQldTeERRVUZETEdGQlFXRXNiMFZCUVdVc1EwRkJRenR2UWtGRE1VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRPMjlDUVVOb1JDeFpRVUZaTEVOQlFVTXNZMEZCWXp0M1FrRkRNVUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03YjBKQlF6RkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3ZDBKQlEzUkNPelJDUVVORExFdEJRVXNzUlVGQlJTeFpRVUZaT3pSQ1FVTnVRaXhIUVVGSExFVkJRVVVzTmtKQlFUWkNMRkZCUVZFc1JVRkJSVHQ1UWtGRE5VTTdjVUpCUTBRc1EwRkJRenR2UWtGRFJpeE5RVUZOTzJkQ1FVVlFPMjlDUVVORExFMUJRVTA3WVVGRFVEdFpRVU5FTEUxQlFVMDdVVUZGVUN4TFFVRkxMRTlCUVU4N1dVRkRXQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8xbEJRMmhFTEUxQlFVMDdVVUZGVUN4TFFVRkxMRlZCUVZVN1dVRkRaQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsRFFVRnBReXhEUVVGRE8xbEJRM3BFTEUxQlFVMDdVVUZGVUN4TFFVRkxMRk5CUVZNN1dVRkRZaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8xbEJRemRETEUxQlFVMDdVVUZGVUN4TFFVRkxMRXRCUVVzN1dVRkRWQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERKQ1FVRXlRaXhEUVVGRE8xbEJRMjVFTEUxQlFVMDdVVUZGVUN4TFFVRkxMR2RDUVVGblFqdFpRVU53UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEUkNRVUUwUWl4RFFVRkRPMWxCUTNCRUxFMUJRVTA3VVVGRlVDeExRVUZMTEU5QlFVODdXVUZEV0N4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF6dFpRVU4yUXl4TlFVRk5PMUZCUlZBN1dVRkRReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERaQ1FVRTJRaXhEUVVGRE8xbEJRM0pFTEUxQlFVMDdTMEZEVUR0SlFVVkVMRWxCUVVrc1dVRkJXU3hEUVVGRExFOUJRVTg3VVVGQlJTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE96dFJRVU40UkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE4wSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkZTQ3hMUVVGTExGVkJRVlVzVVVGQlVUdEpRVU4wUWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhOUVVGTkxFdEJRVXNzUTBGRE1VSXNaMFJCUVdkRUxHdERRVUZyUXl4RlFVRkZMRU5CUTNCR0xFVkJRMFFzU1VGQlNTeEhRVUZITEUxQlFVMHNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wbEJRemxDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTTdRVUZETlVJc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImFzeW5jIiwiZ2V0UGFnZXMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsIml0ZW1zIiwidGl0bGUiLCJvbiIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInBhdGhuYW1lIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhBcnIiLCJzcGxpdCIsImRldGFpbHMiLCJzbWFsbEltYWdlS2V5Iiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yIiwic21hbGxJbWFnZVRleHQiLCJ0ZXh0Q29udGVudCIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;