var __webpack_exports__={};const presence=new Presence({clientId:"719179907518693427"}),assets={char_box:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/0.png",char_crt:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/1.png",char_vox:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/2.png",char_blk:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/3.png",char_crg:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/4.png",char_qua:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/5.png",char_inf:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/6.png",map_attack:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/7.png",map_area:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/8.png",map_combat:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/9.png",map_point:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/10.png",map_final:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/11.png",map_vector:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/12.png",map_location:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/13.png",map_position:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/14.png",map_dig:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/15.png",map_battle:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/16.png",map_war:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/17.png",map_platform:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/18.png",map_big:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/19.png",map_excavate:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/20.png",map_unearth:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/21.png","20xx":"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/22.png",char_cub:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/23.png"};let data20XX=null;const characterNameMap={box:"Box",crt:"Crate",qua:"Quad",vox:"Voxel",blk:"Block",crg:"Cargo",inf:"Plus",cub:"Cube"},mapNameMap={attack:"Attack Area",battle:"Battle Field",big:"Big Place",area:"404",combat:"Combat Zone",final:"Final Destination",location:"Last Location",platform:"Penultimate Platform",point:"Prerequisite Point",position:"Primary Position",vector:"Veritable Vector",war:"War Ground",dig:"Dig",unearth:"Unearth",excavate:"Excavate"};let gameStartTimestamp=null;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/0-9/20XX/assets/logo.png"};if(data20XX){switch(data20XX.nav){case"setgame":e.details="Changing Game Settings";break;case"setgraphic":e.details="Changing Graphic Settings";break;case"stat":e.details="Looking at Player Stats";break;case"unlock":e.details="Looking at Unlocks";break;case"lobby":e.details="In Lobby Select";break;default:e.details="Main Menu"}data20XX.user&&(e.state=`${data20XX.user.displayName} (${data20XX.user.isGuest?"guest":`rank ${data20XX.user.rank}`})`,data20XX.serverInfo&&(e.state+=` in ${data20XX.serverInfo.location}`)),data20XX.game?(e.details=`In-Game - ${data20XX.game.info.gametype} (${data20XX.game.info.players}/${data20XX.game.info.maxplayers})`,gameStartTimestamp??=Date.now(),e.smallImageKey=assets[`char_${data20XX.game.character.split("_")[0]}`],e.smallImageText=characterNameMap[data20XX.game.character.split("_")[0]],data20XX.game.map&&(e.largeImageKey=assets[`map_${data20XX.game.map}`],e.smallImageText=`${mapNameMap[data20XX.game.map]} - ${e.smallImageText}`),e.startTimestamp=gameStartTimestamp):gameStartTimestamp=null}else location.pathname.endsWith("/help.html")?e.details="Reading the Help Document":location.pathname.endsWith("/rules.html")?e.details="Reading the Rules":location.pathname.endsWith("/tos.html")&&(e.details="Reading the Terms of Service");await presence.getSetting("showName")||delete e.state,e.details?presence.setActivity(e):presence.setActivity()})),presence.on("iFrameData",(e=>{data20XX=e}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFFMUNsRixTQUFTc0QsR0FBRyxjQUFlNkIsSUFDdkJ4RCxTQUFXd0QsQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI3MTkxNzk5MDc1MTg2OTM0MjdcIixcbn0pLCBhc3NldHMgPSB7XG4gICAgY2hhcl9ib3g6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy8wLTkvMjBYWC9hc3NldHMvMC5wbmdcIixcbiAgICBjaGFyX2NydDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzLzAtOS8yMFhYL2Fzc2V0cy8xLnBuZ1wiLFxuICAgIGNoYXJfdm94OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzIucG5nXCIsXG4gICAgY2hhcl9ibGs6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy8wLTkvMjBYWC9hc3NldHMvMy5wbmdcIixcbiAgICBjaGFyX2NyZzogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzLzAtOS8yMFhYL2Fzc2V0cy80LnBuZ1wiLFxuICAgIGNoYXJfcXVhOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzUucG5nXCIsXG4gICAgY2hhcl9pbmY6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy8wLTkvMjBYWC9hc3NldHMvNi5wbmdcIixcbiAgICBtYXBfYXR0YWNrOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzcucG5nXCIsXG4gICAgbWFwX2FyZWE6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy8wLTkvMjBYWC9hc3NldHMvOC5wbmdcIixcbiAgICBtYXBfY29tYmF0OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzkucG5nXCIsXG4gICAgbWFwX3BvaW50OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzEwLnBuZ1wiLFxuICAgIG1hcF9maW5hbDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzLzAtOS8yMFhYL2Fzc2V0cy8xMS5wbmdcIixcbiAgICBtYXBfdmVjdG9yOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzEyLnBuZ1wiLFxuICAgIG1hcF9sb2NhdGlvbjogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzLzAtOS8yMFhYL2Fzc2V0cy8xMy5wbmdcIixcbiAgICBtYXBfcG9zaXRpb246IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy8wLTkvMjBYWC9hc3NldHMvMTQucG5nXCIsXG4gICAgbWFwX2RpZzogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzLzAtOS8yMFhYL2Fzc2V0cy8xNS5wbmdcIixcbiAgICBtYXBfYmF0dGxlOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzE2LnBuZ1wiLFxuICAgIG1hcF93YXI6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy8wLTkvMjBYWC9hc3NldHMvMTcucG5nXCIsXG4gICAgbWFwX3BsYXRmb3JtOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzE4LnBuZ1wiLFxuICAgIG1hcF9iaWc6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy8wLTkvMjBYWC9hc3NldHMvMTkucG5nXCIsXG4gICAgbWFwX2V4Y2F2YXRlOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzIwLnBuZ1wiLFxuICAgIG1hcF91bmVhcnRoOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzIxLnBuZ1wiLFxuICAgIFwiMjB4eFwiOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzIyLnBuZ1wiLFxuICAgIGNoYXJfY3ViOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzLzIzLnBuZ1wiLFxufTtcbmxldCBkYXRhMjBYWCA9IG51bGw7XG5jb25zdCBjaGFyYWN0ZXJOYW1lTWFwID0ge1xuICAgIGJveDogXCJCb3hcIixcbiAgICBjcnQ6IFwiQ3JhdGVcIixcbiAgICBxdWE6IFwiUXVhZFwiLFxuICAgIHZveDogXCJWb3hlbFwiLFxuICAgIGJsazogXCJCbG9ja1wiLFxuICAgIGNyZzogXCJDYXJnb1wiLFxuICAgIGluZjogXCJQbHVzXCIsXG4gICAgY3ViOiBcIkN1YmVcIixcbn0sIG1hcE5hbWVNYXAgPSB7XG4gICAgYXR0YWNrOiBcIkF0dGFjayBBcmVhXCIsXG4gICAgYmF0dGxlOiBcIkJhdHRsZSBGaWVsZFwiLFxuICAgIGJpZzogXCJCaWcgUGxhY2VcIixcbiAgICBhcmVhOiBcIjQwNFwiLFxuICAgIGNvbWJhdDogXCJDb21iYXQgWm9uZVwiLFxuICAgIGZpbmFsOiBcIkZpbmFsIERlc3RpbmF0aW9uXCIsXG4gICAgbG9jYXRpb246IFwiTGFzdCBMb2NhdGlvblwiLFxuICAgIHBsYXRmb3JtOiBcIlBlbnVsdGltYXRlIFBsYXRmb3JtXCIsXG4gICAgcG9pbnQ6IFwiUHJlcmVxdWlzaXRlIFBvaW50XCIsXG4gICAgcG9zaXRpb246IFwiUHJpbWFyeSBQb3NpdGlvblwiLFxuICAgIHZlY3RvcjogXCJWZXJpdGFibGUgVmVjdG9yXCIsXG4gICAgd2FyOiBcIldhciBHcm91bmRcIixcbiAgICBkaWc6IFwiRGlnXCIsXG4gICAgdW5lYXJ0aDogXCJVbmVhcnRoXCIsXG4gICAgZXhjYXZhdGU6IFwiRXhjYXZhdGVcIixcbn07XG5sZXQgZ2FtZVN0YXJ0VGltZXN0YW1wID0gbnVsbDtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzIwWFgvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfTtcbiAgICBpZiAoZGF0YTIwWFgpIHtcbiAgICAgICAgc3dpdGNoIChkYXRhMjBYWC5uYXYpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzZXRnYW1lXCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNoYW5naW5nIEdhbWUgU2V0dGluZ3NcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzZXRncmFwaGljXCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNoYW5naW5nIEdyYXBoaWMgU2V0dGluZ3NcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdGF0XCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgUGxheWVyIFN0YXRzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidW5sb2NrXCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgVW5sb2Nrc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxvYmJ5XCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkluIExvYmJ5IFNlbGVjdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTWFpbiBNZW51XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEyMFhYLnVzZXIpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RhdGEyMFhYLnVzZXIuZGlzcGxheU5hbWV9ICgke2RhdGEyMFhYLnVzZXIuaXNHdWVzdCA/IFwiZ3Vlc3RcIiA6IGByYW5rICR7ZGF0YTIwWFgudXNlci5yYW5rfWB9KWA7XG4gICAgICAgICAgICBpZiAoZGF0YTIwWFguc2VydmVySW5mbylcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgKz0gYCBpbiAke2RhdGEyMFhYLnNlcnZlckluZm8ubG9jYXRpb259YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YTIwWFguZ2FtZSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgSW4tR2FtZSAtICR7ZGF0YTIwWFguZ2FtZS5pbmZvLmdhbWV0eXBlfSAoJHtkYXRhMjBYWC5nYW1lLmluZm8ucGxheWVyc30vJHtkYXRhMjBYWC5nYW1lLmluZm8ubWF4cGxheWVyc30pYDtcbiAgICAgICAgICAgIGdhbWVTdGFydFRpbWVzdGFtcCA/Pz0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID1cbiAgICAgICAgICAgICAgICBhc3NldHNbYGNoYXJfJHtkYXRhMjBYWC5nYW1lLmNoYXJhY3Rlci5zcGxpdChcIl9cIilbMF19YF07XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPVxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlck5hbWVNYXBbZGF0YTIwWFguZ2FtZS5jaGFyYWN0ZXIuc3BsaXQoXCJfXCIpWzBdXTtcbiAgICAgICAgICAgIGlmIChkYXRhMjBYWC5nYW1lLm1hcCkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gYXNzZXRzW2BtYXBfJHtkYXRhMjBYWC5nYW1lLm1hcH1gXTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBgJHttYXBOYW1lTWFwW2RhdGEyMFhYLmdhbWUubWFwXX0gLSAke3ByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gZ2FtZVN0YXJ0VGltZXN0YW1wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGdhbWVTdGFydFRpbWVzdGFtcCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmVuZHNXaXRoKFwiL2hlbHAuaHRtbFwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIEhlbHAgRG9jdW1lbnRcIjtcbiAgICBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcIi9ydWxlcy5odG1sXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgUnVsZXNcIjtcbiAgICBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcIi90b3MuaHRtbFwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIFRlcm1zIG9mIFNlcnZpY2VcIjtcbiAgICBpZiAoIShhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwic2hvd05hbWVcIikpKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXRlO1xuICAgIGlmICghcHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG5wcmVzZW5jZS5vbihcImlGcmFtZURhdGFcIiwgKGRhdGEpID0+IHtcbiAgICBkYXRhMjBYWCA9IGRhdGE7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZGUml4TlFVRk5MRWRCUVRKQ08wbEJRMmhETEZGQlFWRXNSVUZCUlN3d1JFRkJNRVE3U1VGRGNFVXNVVUZCVVN4RlFVRkZMREJFUVVFd1JEdEpRVU53UlN4UlFVRlJMRVZCUVVVc01FUkJRVEJFTzBsQlEzQkZMRkZCUVZFc1JVRkJSU3d3UkVGQk1FUTdTVUZEY0VVc1VVRkJVU3hGUVVGRkxEQkVRVUV3UkR0SlFVTndSU3hSUVVGUkxFVkJRVVVzTUVSQlFUQkVPMGxCUTNCRkxGRkJRVkVzUlVGQlJTd3dSRUZCTUVRN1NVRkRjRVVzVlVGQlZTeEZRVUZGTERCRVFVRXdSRHRKUVVOMFJTeFJRVUZSTEVWQlFVVXNNRVJCUVRCRU8wbEJRM0JGTEZWQlFWVXNSVUZCUlN3d1JFRkJNRVE3U1VGRGRFVXNVMEZCVXl4RlFVRkZMREpFUVVFeVJEdEpRVU4wUlN4VFFVRlRMRVZCUVVVc01rUkJRVEpFTzBsQlEzUkZMRlZCUVZVc1JVRkJSU3d5UkVGQk1rUTdTVUZEZGtVc1dVRkJXU3hGUVVGRkxESkVRVUV5UkR0SlFVTjZSU3haUVVGWkxFVkJRVVVzTWtSQlFUSkVPMGxCUTNwRkxFOUJRVThzUlVGQlJTd3lSRUZCTWtRN1NVRkRjRVVzVlVGQlZTeEZRVUZGTERKRVFVRXlSRHRKUVVOMlJTeFBRVUZQTEVWQlFVVXNNa1JCUVRKRU8wbEJRM0JGTEZsQlFWa3NSVUZCUlN3eVJFRkJNa1E3U1VGRGVrVXNUMEZCVHl4RlFVRkZMREpFUVVFeVJEdEpRVU53UlN4WlFVRlpMRVZCUVVVc01rUkJRVEpFTzBsQlEzcEZMRmRCUVZjc1JVRkJSU3d5UkVGQk1rUTdTVUZEZUVVc1RVRkJUU3hGUVVGRkxESkVRVUV5UkR0SlFVTnVSU3hSUVVGUkxFVkJRVVVzTWtSQlFUSkVPME5CUTNKRkxFTkJRVU03UVVGM1EwZ3NTVUZCU1N4UlFVRlJMRWRCUVdFc1NVRkJTU3hEUVVGRE8wRkJUemxDTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVms3U1VGRGFFTXNSMEZCUnl4RlFVRkZMRXRCUVVzN1NVRkRWaXhIUVVGSExFVkJRVVVzVDBGQlR6dEpRVU5hTEVkQlFVY3NSVUZCUlN4TlFVRk5PMGxCUTFnc1IwRkJSeXhGUVVGRkxFOUJRVTg3U1VGRFdpeEhRVUZITEVWQlFVVXNUMEZCVHp0SlFVTmFMRWRCUVVjc1JVRkJSU3hQUVVGUE8wbEJRMW9zUjBGQlJ5eEZRVUZGTEUxQlFVMDdTVUZEV0N4SFFVRkhMRVZCUVVVc1RVRkJUVHREUVVOWUxFVkJSVVFzVlVGQlZTeEhRVUZaTzBsQlEzSkNMRTFCUVUwc1JVRkJSU3hoUVVGaE8wbEJRM0pDTEUxQlFVMHNSVUZCUlN4alFVRmpPMGxCUTNSQ0xFZEJRVWNzUlVGQlJTeFhRVUZYTzBsQlEyaENMRWxCUVVrc1JVRkJSU3hMUVVGTE8wbEJRMWdzVFVGQlRTeEZRVUZGTEdGQlFXRTdTVUZEY2tJc1MwRkJTeXhGUVVGRkxHMUNRVUZ0UWp0SlFVTXhRaXhSUVVGUkxFVkJRVVVzWlVGQlpUdEpRVU42UWl4UlFVRlJMRVZCUVVVc2MwSkJRWE5DTzBsQlEyaERMRXRCUVVzc1JVRkJSU3h2UWtGQmIwSTdTVUZETTBJc1VVRkJVU3hGUVVGRkxHdENRVUZyUWp0SlFVTTFRaXhOUVVGTkxFVkJRVVVzYTBKQlFXdENPMGxCUXpGQ0xFZEJRVWNzUlVGQlJTeFpRVUZaTzBsQlEycENMRWRCUVVjc1JVRkJSU3hMUVVGTE8wbEJRMVlzVDBGQlR5eEZRVUZGTEZOQlFWTTdTVUZEYkVJc1VVRkJVU3hGUVVGRkxGVkJRVlU3UTBGRGNFSXNRMEZCUXp0QlFVZElMRWxCUVVrc2EwSkJRV3RDTEVkQlFWY3NTVUZCU1N4RFFVRkRPMEZCUlhSRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNXVUZCV1N4SFFVRnBRanRSUVVOc1F5eGhRVUZoTEVWQlExb3NOa1JCUVRaRU8wdEJRemxFTEVOQlFVTTdTVUZGUml4SlFVRkpMRkZCUVZFc1JVRkJSVHRSUVVOaUxGRkJRVkVzVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlR0WlFVTnlRaXhMUVVGTExGTkJRVk03WjBKQlEySXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0blFrRkRhRVFzVFVGQlRUdFpRVU5RTEV0QlFVc3NXVUZCV1R0blFrRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3eVFrRkJNa0lzUTBGQlF6dG5Ra0ZEYmtRc1RVRkJUVHRaUVVOUUxFdEJRVXNzVFVGQlRUdG5Ra0ZEVml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPMmRDUVVOcVJDeE5RVUZOTzFsQlExQXNTMEZCU3l4UlFVRlJPMmRDUVVOYUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03WjBKQlF6VkRMRTFCUVUwN1dVRkRVQ3hMUVVGTExFOUJRVTg3WjBKQlExZ3NXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0blFrRkRla01zVFVGQlRUdFpRVU5RTzJkQ1FVTkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVjBGQlZ5eERRVUZETzFOQlEzQkRPMUZCUlVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTzFsQlEyeENMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1MwRkRhRVFzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGRE4wUXNSMEZCUnl4RFFVRkRPMWxCUTBvc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZUdG5Ra0ZEZEVJc1dVRkJXU3hEUVVGRExFdEJRVXNzU1VGQlNTeFBRVUZQTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VTBGRE4wUTdVVUZGUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRGJFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVVGaExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1MwRkJTeXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRU5CUVVNN1dVRkZia2tzYTBKQlFXdENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlIyeERMRmxCUVZrc1EwRkJReXhoUVVGaE8yZENRVU42UWl4TlFVRk5MRU5CUVVNc1VVRkJVU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNwRUxGbEJRVmtzUTBGQlF5eGpRVUZqTzJkQ1FVTXhRaXhuUWtGQlowSXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVWQ2UkN4SlFVRkpMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzJkQ1FVTjBRaXhaUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRhRVVzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVTTNSQ3haUVVGWkxFTkJRVU1zWTBGRFpDeEZRVUZGTEVOQlFVTTdZVUZEU0R0WlFVVkVMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1UwRkRha1E3TzFsQlFVMHNhMEpCUVd0Q0xFZEJRVWNzU1VGQlNTeERRVUZETzB0QlEycERPMU5CUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNN1VVRkRiRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3eVFrRkJNa0lzUTBGQlF6dFRRVU12UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTnFSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8xTkJRM1pETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlF5OURMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzT0VKQlFUaENMRU5CUVVNN1NVRkZka1FzU1VGQlNTeERRVUZETEVOQlFVTXNUVUZCVFN4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxGVkJRVlVzUTBGQlF5eERRVUZETzFGQlEzQkVMRTlCUVU4c1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVVV6UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVTg3VVVGQlJTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN08xRkJRemRETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03UVVGRGVrTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkZTQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRWxCUVdNc1JVRkJSU3hGUVVGRk8wbEJRelZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRha0lzUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImFzc2V0cyIsImNoYXJfYm94IiwiY2hhcl9jcnQiLCJjaGFyX3ZveCIsImNoYXJfYmxrIiwiY2hhcl9jcmciLCJjaGFyX3F1YSIsImNoYXJfaW5mIiwibWFwX2F0dGFjayIsIm1hcF9hcmVhIiwibWFwX2NvbWJhdCIsIm1hcF9wb2ludCIsIm1hcF9maW5hbCIsIm1hcF92ZWN0b3IiLCJtYXBfbG9jYXRpb24iLCJtYXBfcG9zaXRpb24iLCJtYXBfZGlnIiwibWFwX2JhdHRsZSIsIm1hcF93YXIiLCJtYXBfcGxhdGZvcm0iLCJtYXBfYmlnIiwibWFwX2V4Y2F2YXRlIiwibWFwX3VuZWFydGgiLCJjaGFyX2N1YiIsImRhdGEyMFhYIiwiY2hhcmFjdGVyTmFtZU1hcCIsImJveCIsImNydCIsInF1YSIsInZveCIsImJsayIsImNyZyIsImluZiIsImN1YiIsIm1hcE5hbWVNYXAiLCJhdHRhY2siLCJiYXR0bGUiLCJiaWciLCJhcmVhIiwiY29tYmF0IiwiZmluYWwiLCJsb2NhdGlvbiIsInBsYXRmb3JtIiwicG9pbnQiLCJwb3NpdGlvbiIsInZlY3RvciIsIndhciIsImRpZyIsInVuZWFydGgiLCJleGNhdmF0ZSIsImdhbWVTdGFydFRpbWVzdGFtcCIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5IiwibmF2IiwiZGV0YWlscyIsInVzZXIiLCJzdGF0ZSIsImRpc3BsYXlOYW1lIiwiaXNHdWVzdCIsInJhbmsiLCJzZXJ2ZXJJbmZvIiwiZ2FtZSIsImluZm8iLCJnYW1ldHlwZSIsInBsYXllcnMiLCJtYXhwbGF5ZXJzIiwiRGF0ZSIsIm5vdyIsInNtYWxsSW1hZ2VLZXkiLCJjaGFyYWN0ZXIiLCJzcGxpdCIsInNtYWxsSW1hZ2VUZXh0IiwibWFwIiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsImVuZHNXaXRoIiwiZ2V0U2V0dGluZyIsInNldEFjdGl2aXR5IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;