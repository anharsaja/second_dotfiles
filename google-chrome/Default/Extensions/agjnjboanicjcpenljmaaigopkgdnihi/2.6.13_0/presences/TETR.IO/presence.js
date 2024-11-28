var __webpack_exports__={};const presence=new Presence({clientId:"815006153066151998"}),SelectorMap={header:"div#header_text.ns",username:"h1#me_username",status:"div#social_status",game:"div#social_status > b",roomid:"div#roomid",replay:"div#data_replay"},menuPrincipal=["SOLO","MULTIPLAYER"],soloModes={zen:"ZEN",bl:"BLITZ",lines40:"40 LINES",ct:"CUSTOM",ctgame:"custom game"};let browsingTimestamp=Math.floor(Date.now()/1e3);function getText(e){return null!==document.querySelector(e)&&document.querySelector(e)?document.querySelector(e).textContent:null}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/TETR.IO/assets/logo.jpg"},t=await presence.getSetting("privateRoom"),s=await presence.getSetting("showButtons"),a=getText(SelectorMap.header),l=getText(SelectorMap.status),i=getText(SelectorMap.game),o=getText(SelectorMap.roomid);l.includes("Idle")||l.includes("Busy")||l.includes("Offline")?e.details=l:menuPrincipal.includes(a)?(browsingTimestamp=Math.floor(Date.now()/1e3),e.details=a,e.state="In Menus"):Object.values(soloModes).includes(a)?(browsingTimestamp=Math.floor(Date.now()/1e3),e.details=a,e.state="Setting up game",e.smallImageKey=Object.keys(soloModes).find((e=>soloModes[e]===a)),e.smallImageText=a):a.includes("LISTING")?(browsingTimestamp=Math.floor(Date.now()/1e3),e.details="ROOM LISTING",e.state="Browsing public rooms",e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/TETR.IO/assets/1.png",e.smallImageText="ROOM LISTING"):l.includes("custom room")?(l.includes("game")?e.startTimestamp=browsingTimestamp:browsingTimestamp=Math.floor(Date.now()/1e3),e.details="CUSTOM GAME",e.state=l.replace(/([a-z]+) .* ([a-z]+)/i,"$1 $2"),e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/TETR.IO/assets/1.png",e.smallImageText=i,l.includes("public")?e.buttons=[{label:"Enter Public Room",url:`https://tetr.io/${o}`}]:t&&(e.buttons=[{label:"Enter Private Room",url:`https://tetr.io/${o}`}])):l.includes("QUICK")?(l.includes("game")?e.startTimestamp=browsingTimestamp:browsingTimestamp=Math.floor(Date.now()/1e3),e.details=i,e.state=l.replace(/([a-z]+) .* ([a-z]+)/i,"$1 $2"),e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/TETR.IO/assets/0.png",e.smallImageText=i):l.includes("LEAGUE")?(l.includes("game")?e.startTimestamp=browsingTimestamp:browsingTimestamp=Math.floor(Date.now()/1e3),e.details=i,e.state=l.replace(/([a-z]+) .* ([a-z]+)/i,"$1 $2"),e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/TETR.IO/assets/2.png",e.smallImageText=i):a.includes("LEAGUE")?(browsingTimestamp=Math.floor(Date.now()/1e3),e.details=a,e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/TETR.IO/assets/2.png",e.smallImageText=a):Object.values(soloModes).includes(i)?(a.includes("RESULTS")?(browsingTimestamp=Math.floor(Date.now()/1e3),e.state="Checking Results"):e.startTimestamp=browsingTimestamp,e.details=i,e.smallImageKey=Object.keys(soloModes).find((e=>soloModes[e]===i)),e.smallImageText=i):document.querySelector("#replay").classList.contains("hidden")?(browsingTimestamp=Math.floor(Date.now()/1e3),e.details=l):(e.startTimestamp=browsingTimestamp,e.details="REPLAY",e.state=getText(SelectorMap.replay)),""!==getText(SelectorMap.username)&&!getText(SelectorMap.username).includes("guest-")&&s?e.buttons=[{label:"View Profile",url:`https://ch.tetr.io/u/${getText(SelectorMap.username)}`}]:delete e.buttons,e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBYVEsTUFBUS9CLEVBQU93QyxRQUFRLHdCQUF5QixTQUM3RGpCLEVBQWFXLGNBQWdCLDREQUM3QlgsRUFBYWUsZUFBaUJyQyxHQUV6QkgsRUFBTytCLFNBQVMsV0FDckJsQixrQkFBb0JDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsS0FDNUNRLEVBQWFPLFFBQVVoQyxFQUN2QnlCLEVBQWFXLGNBQWdCLDREQUM3QlgsRUFBYWUsZUFBaUJ4QyxHQUV6QmtDLE9BQU9DLE9BQU81QixXQUFXd0IsU0FBUzVCLElBQ2xDSCxFQUFPK0IsU0FBUyxZQUdqQmxCLGtCQUFvQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUM1Q1EsRUFBYVEsTUFBUSxvQkFIckJSLEVBQWFnQixlQUFpQjVCLGtCQUtsQ1ksRUFBYU8sUUFBVTdCLEVBQ3ZCc0IsRUFBYVcsY0FBZ0JGLE9BQU9HLEtBQUs5QixXQUFXK0IsTUFBS0MsR0FBT2hDLFVBQVVnQyxLQUFTcEMsSUFDbkZzQixFQUFhZSxlQUFpQnJDLEdBRXhCaUIsU0FBU0MsY0FBYyxXQUFXeUIsVUFBVUMsU0FBUyxXQU0zRGxDLGtCQUFvQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUM1Q1EsRUFBYU8sUUFBVTlCLElBTnZCdUIsRUFBYWdCLGVBQWlCNUIsa0JBQzlCWSxFQUFhTyxRQUFVLFNBQ3ZCUCxFQUFhUSxNQUFRZixRQUFRbkIsWUFBWU0sU0FNUCxLQUFsQ2EsUUFBUW5CLFlBQVlFLFlBQ25CaUIsUUFBUW5CLFlBQVlFLFVBQVU4QixTQUFTLFdBQ3hDRixFQUNBSixFQUFha0IsUUFBVSxDQUNuQixDQUNJQyxNQUFPLGVBQ1BDLElBQUssd0JBQXdCM0IsUUFBUW5CLFlBQVlFLHFCQUtsRHdCLEVBQWFrQixRQUNwQmxCLEVBQWFPLFFBQ2JwQyxTQUFTb0QsWUFBWXZCLEdBRXJCN0IsU0FBU29ELGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODE1MDA2MTUzMDY2MTUxOTk4XCIsXG59KSwgU2VsZWN0b3JNYXAgPSB7XG4gICAgaGVhZGVyOiBcImRpdiNoZWFkZXJfdGV4dC5uc1wiLFxuICAgIHVzZXJuYW1lOiBcImgxI21lX3VzZXJuYW1lXCIsXG4gICAgc3RhdHVzOiBcImRpdiNzb2NpYWxfc3RhdHVzXCIsXG4gICAgZ2FtZTogXCJkaXYjc29jaWFsX3N0YXR1cyA+IGJcIixcbiAgICByb29taWQ6IFwiZGl2I3Jvb21pZFwiLFxuICAgIHJlcGxheTogXCJkaXYjZGF0YV9yZXBsYXlcIixcbn0sIG1lbnVQcmluY2lwYWwgPSBbXCJTT0xPXCIsIFwiTVVMVElQTEFZRVJcIl0sIHNvbG9Nb2RlcyA9IHtcbiAgICB6ZW46IFwiWkVOXCIsXG4gICAgYmw6IFwiQkxJVFpcIixcbiAgICBsaW5lczQwOiBcIjQwIExJTkVTXCIsXG4gICAgY3Q6IFwiQ1VTVE9NXCIsXG4gICAgY3RnYW1lOiBcImN1c3RvbSBnYW1lXCIsXG59O1xubGV0IGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5mdW5jdGlvbiBnZXRUZXh0KHNlbGVjdG9yKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpICE9PSBudWxsICYmXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikudGV4dENvbnRlbnQ7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gbnVsbDtcbn1cbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVC9URVRSLklPL2Fzc2V0cy9sb2dvLmpwZ1wiLFxuICAgIH0sIHNob3dQcml2QnV0dG9uID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhdGVSb29tXCIpLCBzaG93QnV0dG9ucyA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJzaG93QnV0dG9uc1wiKSwgaGVhZGVyID0gZ2V0VGV4dChTZWxlY3Rvck1hcC5oZWFkZXIpLCBzdGF0dXMgPSBnZXRUZXh0KFNlbGVjdG9yTWFwLnN0YXR1cyksIGdhbWUgPSBnZXRUZXh0KFNlbGVjdG9yTWFwLmdhbWUpLCByb29tSUQgPSBnZXRUZXh0KFNlbGVjdG9yTWFwLnJvb21pZCk7XG4gICAgaWYgKHN0YXR1cy5pbmNsdWRlcyhcIklkbGVcIikgfHxcbiAgICAgICAgc3RhdHVzLmluY2x1ZGVzKFwiQnVzeVwiKSB8fFxuICAgICAgICBzdGF0dXMuaW5jbHVkZXMoXCJPZmZsaW5lXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0YXR1cztcbiAgICBlbHNlIGlmIChtZW51UHJpbmNpcGFsLmluY2x1ZGVzKGhlYWRlcikpIHtcbiAgICAgICAgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBoZWFkZXI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiSW4gTWVudXNcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoT2JqZWN0LnZhbHVlcyhzb2xvTW9kZXMpLmluY2x1ZGVzKGhlYWRlcikpIHtcbiAgICAgICAgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBoZWFkZXI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiU2V0dGluZyB1cCBnYW1lXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gT2JqZWN0LmtleXMoc29sb01vZGVzKS5maW5kKGtleSA9PiBzb2xvTW9kZXNba2V5XSA9PT0gaGVhZGVyKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gaGVhZGVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChoZWFkZXIuaW5jbHVkZXMoXCJMSVNUSU5HXCIpKSB7XG4gICAgICAgIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJST09NIExJU1RJTkdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJCcm93c2luZyBwdWJsaWMgcm9vbXNcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVC9URVRSLklPL2Fzc2V0cy8xLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlJPT00gTElTVElOR1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0dXMuaW5jbHVkZXMoXCJjdXN0b20gcm9vbVwiKSkge1xuICAgICAgICBpZiAoc3RhdHVzLmluY2x1ZGVzKFwiZ2FtZVwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ1VTVE9NIEdBTUVcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc3RhdHVzLnJlcGxhY2UoLyhbYS16XSspIC4qIChbYS16XSspL2ksIFwiJDEgJDJcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVEVUUi5JTy9hc3NldHMvMS5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gZ2FtZTtcbiAgICAgICAgaWYgKHN0YXR1cy5pbmNsdWRlcyhcInB1YmxpY1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFbnRlciBQdWJsaWMgUm9vbVwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL3RldHIuaW8vJHtyb29tSUR9YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaG93UHJpdkJ1dHRvbikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFbnRlciBQcml2YXRlIFJvb21cIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly90ZXRyLmlvLyR7cm9vbUlEfWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdHVzLmluY2x1ZGVzKFwiUVVJQ0tcIikpIHtcbiAgICAgICAgaWYgKHN0YXR1cy5pbmNsdWRlcyhcImdhbWVcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBnYW1lO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzdGF0dXMucmVwbGFjZSgvKFthLXpdKykgLiogKFthLXpdKykvaSwgXCIkMSAkMlwiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVC9URVRSLklPL2Fzc2V0cy8wLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBnYW1lO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0dXMuaW5jbHVkZXMoXCJMRUFHVUVcIikpIHtcbiAgICAgICAgaWYgKHN0YXR1cy5pbmNsdWRlcyhcImdhbWVcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBnYW1lO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzdGF0dXMucmVwbGFjZSgvKFthLXpdKykgLiogKFthLXpdKykvaSwgXCIkMSAkMlwiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVC9URVRSLklPL2Fzc2V0cy8yLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBnYW1lO1xuICAgIH1cbiAgICBlbHNlIGlmIChoZWFkZXIuaW5jbHVkZXMoXCJMRUFHVUVcIikpIHtcbiAgICAgICAgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBoZWFkZXI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVEVUUi5JTy9hc3NldHMvMi5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gaGVhZGVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChPYmplY3QudmFsdWVzKHNvbG9Nb2RlcykuaW5jbHVkZXMoZ2FtZSkpIHtcbiAgICAgICAgaWYgKCFoZWFkZXIuaW5jbHVkZXMoXCJSRVNVTFRTXCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQ2hlY2tpbmcgUmVzdWx0c1wiO1xuICAgICAgICB9XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZ2FtZTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBPYmplY3Qua2V5cyhzb2xvTW9kZXMpLmZpbmQoa2V5ID0+IHNvbG9Nb2Rlc1trZXldID09PSBnYW1lKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gZ2FtZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVwbGF5XCIpLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJFUExBWVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBnZXRUZXh0KFNlbGVjdG9yTWFwLnJlcGxheSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0YXR1cztcbiAgICB9XG4gICAgaWYgKGdldFRleHQoU2VsZWN0b3JNYXAudXNlcm5hbWUpICE9PSBcIlwiICYmXG4gICAgICAgICFnZXRUZXh0KFNlbGVjdG9yTWFwLnVzZXJuYW1lKS5pbmNsdWRlcyhcImd1ZXN0LVwiKSAmJlxuICAgICAgICBzaG93QnV0dG9ucykge1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IFByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL2NoLnRldHIuaW8vdS8ke2dldFRleHQoU2VsZWN0b3JNYXAudXNlcm5hbWUpfWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuYnV0dG9ucztcbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFhRVUZYTEVkQlFVYzdTVUZEWWl4TlFVRk5MRVZCUVVVc2IwSkJRVzlDTzBsQlF6VkNMRkZCUVZFc1JVRkJSU3huUWtGQlowSTdTVUZETVVJc1RVRkJUU3hGUVVGRkxHMUNRVUZ0UWp0SlFVTXpRaXhKUVVGSkxFVkJRVVVzZFVKQlFYVkNPMGxCUXpkQ0xFMUJRVTBzUlVGQlJTeFpRVUZaTzBsQlEzQkNMRTFCUVUwc1JVRkJSU3hwUWtGQmFVSTdRMEZEZWtJc1JVRkRSQ3hoUVVGaExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNZVUZCWVN4RFFVRkRMRVZCUTNaRExGTkJRVk1zUjBGQk9FSTdTVUZEZEVNc1IwRkJSeXhGUVVGRkxFdEJRVXM3U1VGRFZpeEZRVUZGTEVWQlFVVXNUMEZCVHp0SlFVTllMRTlCUVU4c1JVRkJSU3hWUVVGVk8wbEJRMjVDTEVWQlFVVXNSVUZCUlN4UlFVRlJPMGxCUTFvc1RVRkJUU3hGUVVGRkxHRkJRV0U3UTBGRGNrSXNRMEZCUXp0QlFVTklMRWxCUVVrc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkZkRVFzVTBGQlV5eFBRVUZQTEVOQlFVTXNVVUZCWjBJN1NVRkRhRU1zU1VGRFF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFbEJRVWs3VVVGRGVrTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRmFFTXNUMEZCVHl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXpzN1VVRkRhRVFzVDBGQlR5eEpRVUZKTEVOQlFVTTdRVUZEYkVJc1EwRkJRenRCUVZORUxGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNXVUZCV1N4SFFVRnBRanRSUVVOcVF5eGhRVUZoTEdkRlFVRmhPMHRCUXpGQ0xFVkJRMFFzWTBGQll5eEhRVUZITEUxQlFVMHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hoUVVGaExFTkJRVU1zUlVGRGJFVXNWMEZCVnl4SFFVRkhMRTFCUVUwc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeGhRVUZoTEVOQlFVTXNSVUZETDBRc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUTNCRExFMUJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVOd1F5eEpRVUZKTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGRGFFTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEZEVNc1NVRkRReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjJRaXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjJRaXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVVXhRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXp0VFFVTXhRaXhKUVVGSkxHRkJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1VVRkRlRU1zYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGJFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRE9VSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVkxFTkJRVU03UzBGRGFFTTdVMEZCVFN4SlFVRkpMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRk8xRkJRM0pFTEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEyeEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlF6bENMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRka01zV1VGQldTeERRVUZETEdGQlFXRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZEZGtRc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1RVRkJUU3hEUVVOb1F5eERRVUZETzFGQlEwWXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhOUVVGTkxFTkJRVU03UzBGRGNrTTdVMEZCVFN4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdVVUZEZEVNc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRiRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4alFVRmpMRU5CUVVNN1VVRkRkRU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4MVFrRkJkVUlzUTBGQlF6dFJRVU0zUXl4WlFVRlpMRU5CUVVNc1lVRkJZU3c0UkVGQldTeERRVUZETzFGQlEzWkRMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzWTBGQll5eERRVUZETzB0QlF6ZERPMU5CUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4RlFVRkZPMUZCUXpGRExFbEJRVWtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkRNVUlzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6czdXVUZETlVNc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRka1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4aFFVRmhMRU5CUVVNN1VVRkRja01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExIVkNRVUYxUWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRM1JGTEZsQlFWa3NRMEZCUXl4aFFVRmhMRGhFUVVGWkxFTkJRVU03VVVGRGRrTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGJrTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFsQlF6bENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3WjBKQlEzUkNPMjlDUVVORExFdEJRVXNzUlVGQlJTeHRRa0ZCYlVJN2IwSkJRekZDTEVkQlFVY3NSVUZCUlN4dFFrRkJiVUlzVFVGQlRTeEZRVUZGTzJsQ1FVTm9RenRoUVVORUxFTkJRVU03VTBGRFJqdGhRVUZOTEVsQlFVa3NZMEZCWXl4RlFVRkZPMWxCUXpGQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdaMEpCUTNSQ08yOUNRVU5ETEV0QlFVc3NSVUZCUlN4dlFrRkJiMEk3YjBKQlF6TkNMRWRCUVVjc1JVRkJSU3h0UWtGQmJVSXNUVUZCVFN4RlFVRkZPMmxDUVVOb1F6dGhRVU5FTEVOQlFVTTdVMEZEUmp0TFFVTkVPMU5CUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPMUZCUTNCRExFbEJRVWtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkRNVUlzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6czdXVUZETlVNc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRka1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkROVUlzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExIVkNRVUYxUWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRM1JGTEZsQlFWa3NRMEZCUXl4aFFVRmhMRGhFUVVGWkxFTkJRVU03VVVGRGRrTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU03UzBGRGJrTTdVMEZCVFN4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdVVUZEY2tNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTXhRaXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE96dFpRVU0xUXl4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTTFRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc2RVSkJRWFZDTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRkRVVzV1VGQldTeERRVUZETEdGQlFXRXNPRVJCUVZrc1EwRkJRenRSUVVOMlF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJRenRMUVVOdVF6dFRRVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdFJRVU55UXl4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnNSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTTVRaXhaUVVGWkxFTkJRVU1zWVVGQllTdzRSRUZCV1N4RFFVRkRPMUZCUTNaRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NUVUZCVFN4RFFVRkRPMHRCUTNKRE8xTkJRVTBzU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0UlFVTnVSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRPVUlzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dGhRVU0xUXp0WlFVTktMR2xDUVVGcFFpeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTJ4RUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03VTBGRGVFTTdVVUZEUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU0xUWl4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVOMlJDeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlF6bENMRU5CUVVNN1VVRkRSaXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXp0TFFVTnVRenRUUVVGTkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1VVRkRNMFVzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dFJRVU5vUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF6dFJRVU5vUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1MwRkRha1E3VTBGQlRUdFJRVU5PTEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEyeEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETzB0QlF6bENPMGxCUTBRc1NVRkRReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVN1VVRkRjRU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtRc1YwRkJWeXhGUVVOV08xRkJRMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0WlFVTjBRanRuUWtGRFF5eExRVUZMTEVWQlFVVXNZMEZCWXp0blFrRkRja0lzUjBGQlJ5eEZRVUZGTEhkQ1FVRjNRaXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMkZCUXpWRU8xTkJRMFFzUTBGQlF6dExRVU5HT3p0UlFVRk5MRTlCUVU4c1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVVZ1UXl4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenM3VVVGRGVFUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsIlNlbGVjdG9yTWFwIiwiaGVhZGVyIiwidXNlcm5hbWUiLCJzdGF0dXMiLCJnYW1lIiwicm9vbWlkIiwicmVwbGF5IiwibWVudVByaW5jaXBhbCIsInNvbG9Nb2RlcyIsInplbiIsImJsIiwibGluZXM0MCIsImN0IiwiY3RnYW1lIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiZ2V0VGV4dCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInNob3dQcml2QnV0dG9uIiwiZ2V0U2V0dGluZyIsInNob3dCdXR0b25zIiwicm9vbUlEIiwiaW5jbHVkZXMiLCJkZXRhaWxzIiwic3RhdGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzbWFsbEltYWdlS2V5Iiwia2V5cyIsImZpbmQiLCJrZXkiLCJzbWFsbEltYWdlVGV4dCIsInN0YXJ0VGltZXN0YW1wIiwicmVwbGFjZSIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;