var __webpack_exports__={};const presence=new Presence({clientId:"817859401477259315"}),slideshow=presence.createSlideshow(),icons={red:["https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/22.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/20.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/23.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/4.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/19.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/1.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/21.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/3.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/16.png"],blue:["https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/2.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/14.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/15.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/6.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/9.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/13.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/12.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/8.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/10.png"],beige:["https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/24.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/11.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/5.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/17.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/0.png","https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/18.png"]};let browsingTimestamp=Math.floor(Date.now()/1e3),lastTeamLog="beige",currentlySetColor="beige";presence.on("UpdateData",(async()=>{let e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/C/Codenames/assets/logo.png"};const s=await presence.getSetting("buttons");if(document.querySelector("#gamescene"))if(s&&(e.buttons=[{label:"Join room",url:document.URL}]),document.querySelector(".justify-start.items-center"))e.details="Waiting for game",e.state="to start...","beige"!==lastTeamLog&&(browsingTimestamp=Math.floor(Date.now()/1e3),lastTeamLog="beige"),e.startTimestamp=browsingTimestamp,slideshow.getSlides().length&&(presence.info("Removing all cards from SlideShow."),slideshow.deleteAllSlides());else{const s=document.querySelector(".scrollTarget").children.length;if(s){const e=document.querySelector(".scrollTarget").children[s-1].className.split("team-")[1].split(" ")[0];e!==lastTeamLog&&(browsingTimestamp=Math.floor(Date.now()/1e3),slideshow.deleteAllSlides(),presence.info("Removing all cards from SlideShow."),lastTeamLog=e)}e.startTimestamp=browsingTimestamp;const t=Array.from(document.querySelectorAll("section")).filter((e=>e.className?.includes("items-center"))),n=Array.from(document.querySelectorAll("section")).filter((e=>e.className?.includes("items-center"))).filter((e=>{const s=e.parentElement.parentElement.style.transform;return!Array.from(document.querySelectorAll(".coverToken")).find((e=>e.style.transform.split("scale")[0]===s.split("scale")[0]))})),r=t.filter((e=>!n.includes(e))),i=Array.from(document.querySelectorAll("div")).filter((e=>e.className?.includes("items-center text"))),o=Array.from(document.querySelectorAll("button")).find((e=>e.className?.includes("text-base color-"))).attributes.getNamedItem("color").textContent;o!==currentlySetColor&&(slideshow.deleteAllSlides(),presence.info("Removing all cards from SlideShow."),currentlySetColor=o);let a=0;for(const[e,s]of n.entries()){const t=s.textContent;slideshow.hasSlide(t)||(presence.info(`Adding ${t} card to SlideShow.`),a>icons[o].length&&(a=0),slideshow.addSlide(t,{smallImageKey:icons[o][a],smallImageText:`Available cards: ${t} (${e+1}/${n.length})`},5e3),a++)}for(const e of r){const s=e.textContent;slideshow.hasSlide(s)&&(presence.info(`Removing ${s} card from SlideShow.`),slideshow.deleteSlide(s))}e={...e,...slideshow.currentSlide},"beige"===o?i.length?(e.details="Spectating... Current clue:",e.state=`${i[0].firstElementChild.textContent} (Matches ${i[0].children[1].textContent} cards)`):e.details="Spectating...":document.querySelector("input")?(e.details="Giving a clue",e.state="to their operatives..."):document.querySelector(".cursor-pointer")?(e.details="Guessing clue:",e.state=`${i[0].firstElementChild.textContent} (Matches ${i[0].children[1].textContent} cards)`):i.length?(e.details="Waiting for operatives to guess clue:",e.state=`${i[0].firstElementChild.textContent} (Matches ${i[0].children[1].textContent} cards)`):(e.details="Waiting for spymaster(s)",e.state="to give clue...")}else e.startTimestamp=browsingTimestamp,slideshow.getSlides().length&&(presence.info("Removing all cards from SlideShow."),slideshow.deleteAllSlides()),document.location.pathname.includes("/room/create")?(e.details="Creating a room...",s&&(e.buttons=[{label:"Join room",url:document.URL}])):document.location.pathname.includes("/room/")?(e.details="Joining a room...",s&&(e.buttons=[{label:"Join room",url:document.URL}])):e.details="Browsing...";presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ25CLENBQ0lJLE1BQU8sWUFDUEMsSUFBS0gsU0FBU0ksUUFLckJKLFNBQVNvRCxTQUFTQyxTQUFTOUIsU0FBUyxXQUN6QzNCLEVBQWFTLFFBQVUsb0JBQ25CUCxJQUNBRixFQUFhRSxRQUFVLENBQ25CLENBQ0lJLE1BQU8sWUFDUEMsSUFBS0gsU0FBU0ksUUFNMUJSLEVBQWFTLFFBQVUsY0FFL0IzQixTQUFTNEUsWUFBWTFELEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODE3ODU5NDAxNDc3MjU5MzE1XCIsXG59KSwgc2xpZGVzaG93ID0gcHJlc2VuY2UuY3JlYXRlU2xpZGVzaG93KCksIGljb25zID0ge1xuICAgIHJlZDogW1xuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzIyLnBuZ1wiLFxuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzIwLnBuZ1wiLFxuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzIzLnBuZ1wiLFxuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzQucG5nXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NvZGVuYW1lcy9hc3NldHMvMTkucG5nXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NvZGVuYW1lcy9hc3NldHMvMS5wbmdcIixcbiAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ29kZW5hbWVzL2Fzc2V0cy8yMS5wbmdcIixcbiAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ29kZW5hbWVzL2Fzc2V0cy8zLnBuZ1wiLFxuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzE2LnBuZ1wiLFxuICAgIF0sXG4gICAgYmx1ZTogW1xuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzIucG5nXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NvZGVuYW1lcy9hc3NldHMvMTQucG5nXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NvZGVuYW1lcy9hc3NldHMvMTUucG5nXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NvZGVuYW1lcy9hc3NldHMvNi5wbmdcIixcbiAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ29kZW5hbWVzL2Fzc2V0cy85LnBuZ1wiLFxuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzEzLnBuZ1wiLFxuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzEyLnBuZ1wiLFxuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzgucG5nXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NvZGVuYW1lcy9hc3NldHMvMTAucG5nXCIsXG4gICAgXSxcbiAgICBiZWlnZTogW1xuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzI0LnBuZ1wiLFxuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzExLnBuZ1wiLFxuICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9Db2RlbmFtZXMvYXNzZXRzLzUucG5nXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NvZGVuYW1lcy9hc3NldHMvMTcucG5nXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NvZGVuYW1lcy9hc3NldHMvMC5wbmdcIixcbiAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ29kZW5hbWVzL2Fzc2V0cy8xOC5wbmdcIixcbiAgICBdLFxufTtcbmxldCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLCBsYXN0VGVhbUxvZyA9IFwiYmVpZ2VcIiwgY3VycmVudGx5U2V0Q29sb3IgPSBcImJlaWdlXCI7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NvZGVuYW1lcy9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9O1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lc2NlbmVcIikpIHtcbiAgICAgICAgaWYgKGJ1dHRvbnMpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSm9pbiByb29tXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQuVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmp1c3RpZnktc3RhcnQuaXRlbXMtY2VudGVyXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV2FpdGluZyBmb3IgZ2FtZVwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJ0byBzdGFydC4uLlwiO1xuICAgICAgICAgICAgaWYgKGxhc3RUZWFtTG9nICE9PSBcImJlaWdlXCIpIHtcbiAgICAgICAgICAgICAgICBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgICAgIGxhc3RUZWFtTG9nID0gXCJiZWlnZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICBpZiAoc2xpZGVzaG93LmdldFNsaWRlcygpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLmluZm8oXCJSZW1vdmluZyBhbGwgY2FyZHMgZnJvbSBTbGlkZVNob3cuXCIpO1xuICAgICAgICAgICAgICAgIHNsaWRlc2hvdy5kZWxldGVBbGxTbGlkZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxvZ0RhdGFMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbFRhcmdldFwiKS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobG9nRGF0YUxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlYW0gPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5zY3JvbGxUYXJnZXRcIilcbiAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuW2xvZ0RhdGFMZW5ndGggLSAxXS5jbGFzc05hbWUuc3BsaXQoXCJ0ZWFtLVwiKVsxXVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIgXCIpWzBdO1xuICAgICAgICAgICAgICAgIGlmICh0ZWFtICE9PSBsYXN0VGVhbUxvZykge1xuICAgICAgICAgICAgICAgICAgICBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNob3cuZGVsZXRlQWxsU2xpZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmluZm8oXCJSZW1vdmluZyBhbGwgY2FyZHMgZnJvbSBTbGlkZVNob3cuXCIpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbUxvZyA9IHRlYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICBjb25zdCBhbGxDYXJkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIikpLmZpbHRlcihzID0+IHMuY2xhc3NOYW1lPy5pbmNsdWRlcyhcIml0ZW1zLWNlbnRlclwiKSksIGF2YWlsYWJsZUNhcmRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHMgPT4gcy5jbGFzc05hbWU/LmluY2x1ZGVzKFwiaXRlbXMtY2VudGVyXCIpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb3ZlclRva2VuXCIpKS5maW5kKHQgPT4gdC5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoXCJzY2FsZVwiKVswXSA9PT1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3BsaXQoXCJzY2FsZVwiKVswXSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSksIGZvdW5kQ2FyZHMgPSBhbGxDYXJkcy5maWx0ZXIoeCA9PiAhYXZhaWxhYmxlQ2FyZHMuaW5jbHVkZXMoeCkpLCBjdXJyZW50Q2x1ZURhdGEgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIikpLmZpbHRlcihkID0+IGQuY2xhc3NOYW1lPy5pbmNsdWRlcyhcIml0ZW1zLWNlbnRlciB0ZXh0XCIpKSwgY29sb3IgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpXG4gICAgICAgICAgICAgICAgLmZpbmQoYiA9PiBiLmNsYXNzTmFtZT8uaW5jbHVkZXMoXCJ0ZXh0LWJhc2UgY29sb3ItXCIpKVxuICAgICAgICAgICAgICAgIC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShcImNvbG9yXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKGNvbG9yICE9PSBjdXJyZW50bHlTZXRDb2xvcikge1xuICAgICAgICAgICAgICAgIHNsaWRlc2hvdy5kZWxldGVBbGxTbGlkZXMoKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5pbmZvKFwiUmVtb3ZpbmcgYWxsIGNhcmRzIGZyb20gU2xpZGVTaG93LlwiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlTZXRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJhbmRvbUludCA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgY2FyZF0gb2YgYXZhaWxhYmxlQ2FyZHMuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNhcmQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKCFzbGlkZXNob3cuaGFzU2xpZGUobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2UuaW5mbyhgQWRkaW5nICR7bmFtZX0gY2FyZCB0byBTbGlkZVNob3cuYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbnQgPiBpY29uc1tjb2xvcl0ubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzaG93LmFkZFNsaWRlKG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6IGljb25zW2NvbG9yXVtyYW5kb21JbnRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxJbWFnZVRleHQ6IGBBdmFpbGFibGUgY2FyZHM6ICR7bmFtZX0gKCR7aW5kZXggKyAxfS8ke2F2YWlsYWJsZUNhcmRzLmxlbmd0aH0pYCxcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbUludCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FyZCBvZiBmb3VuZENhcmRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNhcmQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlc2hvdy5oYXNTbGlkZShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5pbmZvKGBSZW1vdmluZyAke25hbWV9IGNhcmQgZnJvbSBTbGlkZVNob3cuYCk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc2hvdy5kZWxldGVTbGlkZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEgPSB7IC4uLnByZXNlbmNlRGF0YSwgLi4uc2xpZGVzaG93LmN1cnJlbnRTbGlkZSB9O1xuICAgICAgICAgICAgaWYgKGNvbG9yID09PSBcImJlaWdlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENsdWVEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU3BlY3RhdGluZy4uLiBDdXJyZW50IGNsdWU6XCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2N1cnJlbnRDbHVlRGF0YVswXS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudH0gKE1hdGNoZXMgJHtjdXJyZW50Q2x1ZURhdGFbMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnR9IGNhcmRzKWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNwZWN0YXRpbmcuLi5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJHaXZpbmcgYSBjbHVlXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJ0byB0aGVpciBvcGVyYXRpdmVzLi4uXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvci1wb2ludGVyXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkd1ZXNzaW5nIGNsdWU6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7Y3VycmVudENsdWVEYXRhWzBdLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50fSAoTWF0Y2hlcyAke2N1cnJlbnRDbHVlRGF0YVswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudH0gY2FyZHMpYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRDbHVlRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV2FpdGluZyBmb3Igb3BlcmF0aXZlcyB0byBndWVzcyBjbHVlOlwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2N1cnJlbnRDbHVlRGF0YVswXS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudH0gKE1hdGNoZXMgJHtjdXJyZW50Q2x1ZURhdGFbMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnR9IGNhcmRzKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV2FpdGluZyBmb3Igc3B5bWFzdGVyKHMpXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJ0byBnaXZlIGNsdWUuLi5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIGlmIChzbGlkZXNob3cuZ2V0U2xpZGVzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBwcmVzZW5jZS5pbmZvKFwiUmVtb3ZpbmcgYWxsIGNhcmRzIGZyb20gU2xpZGVTaG93LlwiKTtcbiAgICAgICAgICAgIHNsaWRlc2hvdy5kZWxldGVBbGxTbGlkZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvcm9vbS9jcmVhdGVcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDcmVhdGluZyBhIHJvb20uLi5cIjtcbiAgICAgICAgICAgIGlmIChidXR0b25zKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkpvaW4gcm9vbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5VUkwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9yb29tL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkpvaW5pbmcgYSByb29tLi4uXCI7XG4gICAgICAgICAgICBpZiAoYnV0dG9ucykge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJKb2luIHJvb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQuVVJMLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nLi4uXCI7XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVFclFrRXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU03U1VGRE5VSXNVVUZCVVN4RlFVRkZMRzlDUVVGdlFqdERRVU01UWl4RFFVRkRMRVZCUTBZc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eGxRVUZsTEVWQlFVVXNSVUZEZEVNc1MwRkJTeXhIUVVGSE8wbEJRMUFzUjBGQlJ5eEZRVUZGT3pzN096czdPenM3TzB0QlZVbzdTVUZEUkN4SlFVRkpMRVZCUVVVN096czdPenM3T3pzN1MwRlZURHRKUVVORUxFdEJRVXNzUlVGQlJUczdPenM3T3p0TFFVOU9PME5CUTBRc1EwRkJRenRCUVVWSUxFbEJRVWtzYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRM0JFTEZkQlFWY3NSMEZCYjBJc1QwRkJUeXhGUVVOMFF5eHBRa0ZCYVVJc1IwRkJiMElzVDBGQlR5eERRVUZETzBGQlJUbERMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUTNCRExFbEJRVWtzV1VGQldTeEhRVUZwUWp0UlFVTm9ReXhoUVVGaExHdEZRVUZoTzB0QlF6RkNMRU5CUVVNN1NVRkZSaXhOUVVGTkxFOUJRVThzUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGSE9VUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTzFGQlEzcERMRWxCUVVrc1QwRkJUeXhGUVVGRk8xbEJRMW9zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUk3YjBKQlEwTXNTMEZCU3l4RlFVRkZMRmRCUVZjN2IwSkJRMnhDTEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1IwRkJSenRwUWtGRGFrSTdZVUZEUkN4RFFVRkRPMU5CUTBZN1VVRkRSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUlVGQlJUdFpRVU14UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMWxCUXpGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NZVUZCWVN4RFFVRkRPMWxCUTI1RExFbEJRVWtzVjBGQlZ5eExRVUZMTEU5QlFVOHNSVUZCUlR0blFrRkROVUlzYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEyeEVMRmRCUVZjc1IwRkJSeXhQUVVGUExFTkJRVU03WVVGRGRFSTdXVUZEUkN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMWxCUTJoRUxFbEJRVWtzVTBGQlV5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRGFrTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXh2UTBGQmIwTXNRMEZCUXl4RFFVRkRPMmRDUVVOd1JDeFRRVUZUTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1lVRkROVUk3VTBGRFJEdGhRVUZOTzFsQlEwNHNUVUZCVFN4aFFVRmhMRWRCUTJ4Q0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF6dFpRVU42UkN4SlFVRkpMR0ZCUVdFc1JVRkJSVHRuUWtGRGJFSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1VVRkJVVHR4UWtGRGJrSXNZVUZCWVN4RFFVRkRMR1ZCUVdVc1EwRkJRenR4UWtGRE9VSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHhRa0ZEZGtRc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCYjBJc1EwRkJRenRuUWtGRGJrTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1YwRkJWeXhGUVVGRk8yOUNRVU42UWl4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRiRVFzVTBGQlV5eERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRPMjlDUVVNMVFpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzlEUVVGdlF5eERRVUZETEVOQlFVTTdiMEpCUTNCRUxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdhVUpCUTI1Q08yRkJRMFE3V1VGRFJDeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFsQlEyaEVMRTFCUVUwc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVOMFJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVTXhReXhGUVVORUxHTkJRV01zUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRwUWtGREwwUXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03YVVKQlEyeEVMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdG5Ra0ZEV0N4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRE8yZENRVU0xUkN4SlFVTkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVTjRSQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVU5HTEVOQlFXbENMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU53UkN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVTjRRanR2UWtGRlJDeFBRVUZQTEV0QlFVc3NRMEZCUXpzN2IwSkJRMVFzVDBGQlR5eEpRVUZKTEVOQlFVTTdXVUZEYkVJc1EwRkJReXhEUVVGRExFVkJRMGdzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGRE9VUXNaVUZCWlN4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVTndSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUXk5RExFVkJRMFFzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8ybENRVU55UkN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRkZCUVZFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMmxDUVVOd1JDeFZRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGZEJRVGhDTEVOQlFVTTdXVUZGYmtVc1NVRkJTU3hMUVVGTExFdEJRVXNzYVVKQlFXbENMRVZCUVVVN1owSkJRMmhETEZOQlFWTXNRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRenRuUWtGRE5VSXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXh2UTBGQmIwTXNRMEZCUXl4RFFVRkRPMmRDUVVOd1JDeHBRa0ZCYVVJc1IwRkJSeXhMUVVGTExFTkJRVU03WVVGRE1VSTdXVUZGUkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGJFSXNTMEZCU3l4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJSVHRuUWtGRGNrUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dG5Ra0ZET1VJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN2IwSkJRemxDTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hKUVVGSkxIRkNRVUZ4UWl4RFFVRkRMRU5CUVVNN2IwSkJRMjVFTEVsQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eE5RVUZOTzNkQ1FVRkZMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03YjBKQlEyNUVMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRMnBDTEVsQlFVa3NSVUZEU2p0M1FrRkRReXhoUVVGaExFVkJRVVVzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenQzUWtGRGRFTXNZMEZCWXl4RlFVRkZMRzlDUVVGdlFpeEpRVUZKTEV0QlFVc3NTMEZCU3l4SFFVRkhMRU5CUVVNc1NVRkRja1FzWTBGQll5eERRVUZETEUxQlEyaENMRWRCUVVjN2NVSkJRMGdzUlVGRFJDeEpRVUZKTEVOQlEwb3NRMEZCUXp0dlFrRkRSaXhUUVVGVExFVkJRVVVzUTBGQlF6dHBRa0ZEV2p0aFFVTkVPMWxCUTBRc1MwRkJTeXhOUVVGTkxFbEJRVWtzU1VGQlNTeFZRVUZWTEVWQlFVVTdaMEpCUXpsQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1owSkJRemxDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdHZRa0ZETjBJc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVsQlFVa3NkVUpCUVhWQ0xFTkJRVU1zUTBGQlF6dHZRa0ZEZGtRc1UwRkJVeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0cFFrRkROVUk3WVVGRFJEdFpRVVZFTEZsQlFWa3NSMEZCUnl4RlFVRkZMRWRCUVVjc1dVRkJXU3hGUVVGRkxFZEJRVWNzVTBGQlV5eERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMWxCUlRsRUxFbEJRVWtzUzBGQlN5eExRVUZMTEU5QlFVOHNSVUZCUlR0blFrRkZkRUlzU1VGQlNTeGxRVUZsTEVOQlFVTXNUVUZCVFN4RlFVRkZPMjlDUVVNelFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRFpDUVVFMlFpeERRVUZETzI5Q1FVTnlSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRmRCUVZjc1lVRkJZU3hsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzVTBGQlV5eERRVUZETzJsQ1FVTjZTVHM3YjBKQlFVMHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU03WVVGRE9VTTdhVUpCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPMmRDUVVVelF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR1ZCUVdVc1EwRkJRenRuUWtGRGRrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0aFFVTTVRenRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNSVUZCUlR0blFrRkZja1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUTBGQlF6dG5Ra0ZEZUVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4WFFVRlhMR0ZCUVdFc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExGTkJRVk1zUTBGQlF6dGhRVU42U1R0cFFrRkJUU3hKUVVGSkxHVkJRV1VzUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUld4RExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkVU5CUVhWRExFTkJRVU03WjBKQlF5OUVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNWMEZCVnl4aFFVRmhMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhUUVVGVExFTkJRVU03WVVGRGVrazdhVUpCUVUwN1owSkJSVTRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3d1FrRkJNRUlzUTBGQlF6dG5Ra0ZEYkVRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRoUVVOMlF6dFRRVU5FTzB0QlEwUTdVMEZCVFR0UlFVTk9MRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRhRVFzU1VGQlNTeFRRVUZUTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMnBETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc2IwTkJRVzlETEVOQlFVTXNRMEZCUXp0WlFVTndSQ3hUUVVGVExFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdVMEZETlVJN1VVRkZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdFpRVU40UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMWxCUXpWRExFbEJRVWtzVDBGQlR5eEZRVUZGTzJkQ1FVTmFMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3YjBKQlEzUkNPM2RDUVVORExFdEJRVXNzUlVGQlJTeFhRVUZYTzNkQ1FVTnNRaXhIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEVkQlFVYzdjVUpCUTJwQ08ybENRVU5FTEVOQlFVTTdZVUZEUmp0VFFVTkVPMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3V1VGRGVrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0WlFVTXpReXhKUVVGSkxFOUJRVThzUlVGQlJUdG5Ra0ZEV2l4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8yOUNRVU4wUWp0M1FrRkRReXhMUVVGTExFVkJRVVVzVjBGQlZ6dDNRa0ZEYkVJc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEhRVUZITzNGQ1FVTnFRanRwUWtGRFJDeERRVUZETzJGQlEwWTdVMEZEUkRzN1dVRkJUU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdGQlFXRXNRMEZCUXp0TFFVTTFRenRKUVVORUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1FVRkRjRU1zUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInNsaWRlc2hvdyIsImNyZWF0ZVNsaWRlc2hvdyIsImljb25zIiwicmVkIiwiYmx1ZSIsImJlaWdlIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwibGFzdFRlYW1Mb2ciLCJjdXJyZW50bHlTZXRDb2xvciIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5IiwiYnV0dG9ucyIsImdldFNldHRpbmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsYWJlbCIsInVybCIsIlVSTCIsImRldGFpbHMiLCJzdGF0ZSIsInN0YXJ0VGltZXN0YW1wIiwiZ2V0U2xpZGVzIiwibGVuZ3RoIiwiaW5mbyIsImRlbGV0ZUFsbFNsaWRlcyIsImxvZ0RhdGFMZW5ndGgiLCJjaGlsZHJlbiIsInRlYW0iLCJjbGFzc05hbWUiLCJzcGxpdCIsImFsbENhcmRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbHRlciIsInMiLCJpbmNsdWRlcyIsImF2YWlsYWJsZUNhcmRzIiwiaSIsInN0eWxlIiwicGFyZW50RWxlbWVudCIsInRyYW5zZm9ybSIsImZpbmQiLCJ0IiwiZm91bmRDYXJkcyIsIngiLCJjdXJyZW50Q2x1ZURhdGEiLCJkIiwiY29sb3IiLCJiIiwiYXR0cmlidXRlcyIsImdldE5hbWVkSXRlbSIsInRleHRDb250ZW50IiwicmFuZG9tSW50IiwiaW5kZXgiLCJjYXJkIiwiZW50cmllcyIsIm5hbWUiLCJoYXNTbGlkZSIsImFkZFNsaWRlIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiZGVsZXRlU2xpZGUiLCJjdXJyZW50U2xpZGUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;