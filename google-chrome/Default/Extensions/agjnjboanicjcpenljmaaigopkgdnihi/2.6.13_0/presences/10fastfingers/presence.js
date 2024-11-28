var __webpack_exports__={};const presence=new Presence({clientId:"895022531868774451"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/0-9/10fastfingers/assets/logo.png",startTimestamp:browsingTimestamp},[e,i]=presence.getTimestamps(presence.timestampFromFormat("00:00"),presence.timestampFromFormat("1:00"));if("/"===document.location.pathname)t.details="In home page";else if(document.location.pathname.match(/\/typing-test\/.+\/top50/gm))t.details="Viewing top 50";else if(document.location.pathname.includes("/typing-test/")){const a=document.querySelector("#timer").textContent;"1:00"===a?t.details="Waiting to start a typing test":"0:00"===a?(t.details="Finishing a typing test:",t.state=`In ${document.querySelector("#switch-typing-test-language").textContent} | ${document.querySelector("#wpm").textContent.split("(")[0]} `):([t.startTimestamp,t.endTimestamp]=[e,i],t.details="Doing a typing test:",t.state=`In ${document.querySelector("#switch-typing-test-language").textContent}`)}else if(document.location.pathname.includes("/advanced-typing-test/")){const e=document.querySelector("#timer").textContent;"1:00"===e?t.details="Waiting to start an advance Typing test":"0:00"===e?(t.details="Finishing an advance typing test:",t.state=`In ${document.querySelector("#switch-typing-test-language").textContent} | ${document.querySelector("#wpm").textContent.split("(")[0]} `):(t.endTimestamp=i,t.details="Doing an advance typing test:",t.state=`In ${document.querySelector("#switch-typing-test-language").textContent}`)}else if(document.location.pathname.includes("/competition/")){const e=document.querySelector("#timer").textContent;"1:00"===e?t.details="Waiting to start a competition":"0:00"===e?(t.details="Finishing a competition:",t.state=`${document.querySelector("#wpm").textContent.split("(")[0]} WPM `):(t.endTimestamp=i,t.details="Doing a competition")}else if(document.location.pathname.includes("/text/"))if("00:00"===document.querySelector("#time").textContent)t.details="Waiting to start a text practice";else{const e=document.querySelector(".col-md-6 > p > strong");e?(t.details="Finishing a text practice",t.state=`Final time: ${e.textContent}m`):t.details="Doing a text practice"}else if(document.location.pathname.includes("/widget/")||document.location.pathname.includes("/widgets/")){const e=document.querySelector("#timer").textContent;e.match(/([125]{1}[0]{0,1}:[0]{2})|(0:30)/)?t.details="Waiting to start a custom typing test":"0:00"===e?(t.details="Finishing a custom typing test:",t.state=`${document.querySelector("#wpm").textContent.split("(")[0]}`):t.details=" Doing a custom typing test"}else if(document.location.pathname.includes("/user/"))t.details="Viewing a user profile:",t.state=document.querySelector(".row > h2").lastChild.nodeValue;else if(document.location.pathname.includes("/top1000/")){const e=document.location.pathname.split("/");t.details="Doing the top 1000 typing test:",t.state=`In ${e[e.length-3]}`}else switch(document.location.pathname){case"/email_settings":t.details="Viewing email settings";break;case"/active-user-alltime":t.details="Viewing all-time records";break;case"/text-practice/new":t.details="Viewing text practice";break;case"/multiplayer":t.details="Doing a multiplayer typing test";break;case"/faq":t.details="Reading the FAQ";break;case"/forum/":t.details="Viewing the forums";break;case"/supporter":t.details="Viewing the list of supporters";break;case"/login":t.details="Logging in...";break;case"/create-account":t.details="Creating an account..";break;case"/impressum":t.details="Reading the privacy policy";break;case"/gdpr":t.details="Reading information about GDPR";break;case"/cookie-policy":t.details="Reading the cookie policy";break;case"/settings":t.details="Viewing their settings";break;case"/achievements":t.details="Viewing their achievements";break;case"/translations":t.details="Learning how to translate";break;case"/anticheat":t.details="Viewing the Anti-Cheat";break;case"/top1000":t.details="Viewing the top 1000 typing mode";break;case"/competitions":t.details="Viewing the list of competitions"}t.details?presence.setActivity(t):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODk1MDIyNTMxODY4Nzc0NDUxXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzEwZmFzdGZpbmdlcnMvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCBbc3RhcnQsIGVuZF0gPSBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKHByZXNlbmNlLnRpbWVzdGFtcEZyb21Gb3JtYXQoXCIwMDowMFwiKSwgcHJlc2VuY2UudGltZXN0YW1wRnJvbUZvcm1hdChcIjE6MDBcIikpO1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJJbiBob21lIHBhZ2VcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvXFwvdHlwaW5nLXRlc3RcXC8uK1xcL3RvcDUwL2dtKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdG9wIDUwXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdHlwaW5nLXRlc3QvXCIpKSB7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lclwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgaWYgKHRpbWVyID09PSBcIjE6MDBcIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJXYWl0aW5nIHRvIHN0YXJ0IGEgdHlwaW5nIHRlc3RcIjtcbiAgICAgICAgZWxzZSBpZiAodGltZXIgPT09IFwiMDowMFwiKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRmluaXNoaW5nIGEgdHlwaW5nIHRlc3Q6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgSW4gJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaC10eXBpbmctdGVzdC1sYW5ndWFnZVwiKS50ZXh0Q29udGVudH0gfCAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3BtXCIpLnRleHRDb250ZW50LnNwbGl0KFwiKFwiKVswXX0gYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID0gW3N0YXJ0LCBlbmRdO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkRvaW5nIGEgdHlwaW5nIHRlc3Q6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgSW4gJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaC10eXBpbmctdGVzdC1sYW5ndWFnZVwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FkdmFuY2VkLXR5cGluZy10ZXN0L1wiKSkge1xuICAgICAgICBjb25zdCB0aW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZXJcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmICh0aW1lciA9PT0gXCIxOjAwXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV2FpdGluZyB0byBzdGFydCBhbiBhZHZhbmNlIFR5cGluZyB0ZXN0XCI7XG4gICAgICAgIGVsc2UgaWYgKHRpbWVyID09PSBcIjA6MDBcIikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZpbmlzaGluZyBhbiBhZHZhbmNlIHR5cGluZyB0ZXN0OlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEluICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2gtdHlwaW5nLXRlc3QtbGFuZ3VhZ2VcIikudGV4dENvbnRlbnR9IHwgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwbVwiKS50ZXh0Q29udGVudC5zcGxpdChcIihcIilbMF19IGA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wID0gZW5kO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkRvaW5nIGFuIGFkdmFuY2UgdHlwaW5nIHRlc3Q6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgSW4gJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaC10eXBpbmctdGVzdC1sYW5ndWFnZVwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2NvbXBldGl0aW9uL1wiKSkge1xuICAgICAgICBjb25zdCB0aW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZXJcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmICh0aW1lciA9PT0gXCIxOjAwXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV2FpdGluZyB0byBzdGFydCBhIGNvbXBldGl0aW9uXCI7XG4gICAgICAgIGVsc2UgaWYgKHRpbWVyID09PSBcIjA6MDBcIikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZpbmlzaGluZyBhIGNvbXBldGl0aW9uOlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cG1cIikudGV4dENvbnRlbnQuc3BsaXQoXCIoXCIpWzBdfSBXUE0gYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXAgPSBlbmQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRG9pbmcgYSBjb21wZXRpdGlvblwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3RleHQvXCIpKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVcIikudGV4dENvbnRlbnQgPT09IFwiMDA6MDBcIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJXYWl0aW5nIHRvIHN0YXJ0IGEgdGV4dCBwcmFjdGljZVwiO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29sLW1kLTYgPiBwID4gc3Ryb25nXCIpO1xuICAgICAgICAgICAgaWYgKGZpbmFsVGltZSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJGaW5pc2hpbmcgYSB0ZXh0IHByYWN0aWNlXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEZpbmFsIHRpbWU6ICR7ZmluYWxUaW1lLnRleHRDb250ZW50fW1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJEb2luZyBhIHRleHQgcHJhY3RpY2VcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi93aWRnZXQvXCIpIHx8XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3dpZGdldHMvXCIpKSB7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lclwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgaWYgKHRpbWVyLm1hdGNoKC8oWzEyNV17MX1bMF17MCwxfTpbMF17Mn0pfCgwOjMwKS8pKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIldhaXRpbmcgdG8gc3RhcnQgYSBjdXN0b20gdHlwaW5nIHRlc3RcIjtcbiAgICAgICAgZWxzZSBpZiAodGltZXIgPT09IFwiMDowMFwiKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRmluaXNoaW5nIGEgY3VzdG9tIHR5cGluZyB0ZXN0OlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cG1cIikudGV4dENvbnRlbnQuc3BsaXQoXCIoXCIpWzBdfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIiBEb2luZyBhIGN1c3RvbSB0eXBpbmcgdGVzdFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi91c2VyL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIHVzZXIgcHJvZmlsZTpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm93ID4gaDJcIikubGFzdENoaWxkLm5vZGVWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdG9wMTAwMC9cIikpIHtcbiAgICAgICAgY29uc3QgbGFuZyA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkRvaW5nIHRoZSB0b3AgMTAwMCB0eXBpbmcgdGVzdDpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEluICR7bGFuZ1tsYW5nLmxlbmd0aCAtIDNdfWA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiL2VtYWlsX3NldHRpbmdzXCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgZW1haWwgc2V0dGluZ3NcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIvYWN0aXZlLXVzZXItYWxsdGltZVwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFsbC10aW1lIHJlY29yZHNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIvdGV4dC1wcmFjdGljZS9uZXdcIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0ZXh0IHByYWN0aWNlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiL211bHRpcGxheWVyXCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkRvaW5nIGEgbXVsdGlwbGF5ZXIgdHlwaW5nIHRlc3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIvZmFxXCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIEZBUVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIi9mb3J1bS9cIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgZm9ydW1zXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiL3N1cHBvcnRlclwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBsaXN0IG9mIHN1cHBvcnRlcnNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIvbG9naW5cIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9nZ2luZyBpbi4uLlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIi9jcmVhdGUtYWNjb3VudFwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDcmVhdGluZyBhbiBhY2NvdW50Li5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIvaW1wcmVzc3VtXCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIHByaXZhY3kgcG9saWN5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiL2dkcHJcIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBpbmZvcm1hdGlvbiBhYm91dCBHRFBSXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiL2Nvb2tpZS1wb2xpY3lcIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgY29va2llIHBvbGljeVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIi9zZXR0aW5nc1wiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZWlyIHNldHRpbmdzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiL2FjaGlldmVtZW50c1wiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZWlyIGFjaGlldmVtZW50c1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIi90cmFuc2xhdGlvbnNcIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTGVhcm5pbmcgaG93IHRvIHRyYW5zbGF0ZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIi9hbnRpY2hlYXRcIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgQW50aS1DaGVhdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIi90b3AxMDAwXCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIHRvcCAxMDAwIHR5cGluZyBtb2RlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiL2NvbXBldGl0aW9uc1wiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBsaXN0IG9mIGNvbXBldGl0aW9uc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeEZRVU5hTEhORlFVRnpSVHRSUVVOMlJTeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVWQlEwUXNRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY0VNc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVOeVF5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlEzQkRMRU5CUVVNN1NVRkRTQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWRCUVVjN1VVRkJSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdOQlFXTXNRMEZCUXp0VFFVTjZSU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXcwUWtGQk5FSXNRMEZCUXp0UlFVTjBSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xTkJRM0JETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZPMUZCUXpsRUxFMUJRVTBzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlF6TkVMRWxCUVVrc1MwRkJTeXhMUVVGTExFMUJRVTA3V1VGRGJrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUTBGQlowTXNRMEZCUXp0aFFVTndSQ3hKUVVGSkxFdEJRVXNzUzBGQlN5eE5RVUZOTEVWQlFVVTdXVUZETVVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRaUVVOc1JDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUTNCQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNPRUpCUVRoQ0xFTkJRVU1zUTBGQlF5eFhRVU40UkN4TlFVRk5MRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRPMU5CUTJ4Rk8yRkJRVTA3V1VGRFRpeERRVUZETEZsQlFWa3NRMEZCUXl4alFVRmpMRVZCUVVVc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM2hGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdXVUZET1VNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNc1YwRkRlRVFzUlVGQlJTeERRVUZETzFOQlEwZzdTMEZEUkR0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVWQlFVVTdVVUZEZWtVc1RVRkJUU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE0wUXNTVUZCU1N4TFFVRkxMRXRCUVVzc1RVRkJUVHRaUVVOdVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGxEUVVGNVF5eERRVUZETzJGQlF6ZEVMRWxCUVVrc1MwRkJTeXhMUVVGTExFMUJRVTBzUlVGQlJUdFpRVU14UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMURRVUZ0UXl4RFFVRkRPMWxCUXpORUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZEY0VJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRExGZEJRM2hFTEUxQlFVMHNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTTdVMEZEYkVVN1lVRkJUVHRaUVVOT0xGbEJRVmtzUTBGQlF5eFpRVUZaTEVkQlFVY3NSMEZCUnl4RFFVRkRPMWxCUTJoRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NLMEpCUVN0Q0xFTkJRVU03V1VGRGRrUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVOd1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTXNWMEZEZUVRc1JVRkJSU3hEUVVGRE8xTkJRMGc3UzBGRFJEdFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZPMUZCUTJoRkxFMUJRVTBzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlF6TkVMRWxCUVVrc1MwRkJTeXhMUVVGTExFMUJRVTA3V1VGRGJrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUTBGQlowTXNRMEZCUXp0aFFVTndSQ3hKUVVGSkxFdEJRVXNzUzBGQlN5eE5RVUZOTEVWQlFVVTdXVUZETVVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRaUVVOc1JDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUTNCQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUTNoRUxFOUJRVThzUTBGQlF6dFRRVU5TTzJGQlFVMDdXVUZEVGl4WlFVRlpMRU5CUVVNc1dVRkJXU3hIUVVGSExFZEJRVWNzUTBGQlF6dFpRVU5vUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPMU5CUXpkRE8wdEJRMFE3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTjZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1YwRkJWeXhMUVVGTExFOUJRVTg3V1VGRE1VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUTBGQmEwTXNRMEZCUXp0aFFVTjBSRHRaUVVOS0xFMUJRVTBzVTBGQlV5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXp0WlFVVnVSU3hKUVVGSkxGTkJRVk1zUlVGQlJUdG5Ra0ZEWkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExESkNRVUV5UWl4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR1ZCUVdVc1UwRkJVeXhEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETzJGQlF6ZEVPenRuUWtGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSFZDUVVGMVFpeERRVUZETzFOQlEzUkVPMHRCUTBRN1UwRkJUU3hKUVVOT0xGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGREwwTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVTXZRenRSUVVORUxFMUJRVTBzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlF6TkVMRWxCUVVrc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eHJRMEZCYTBNc1EwRkJRenRaUVVOc1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSFZEUVVGMVF5eERRVUZETzJGQlF6TkVMRWxCUVVrc1MwRkJTeXhMUVVGTExFMUJRVTBzUlVGQlJUdFpRVU14UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbERRVUZwUXl4RFFVRkRPMWxCUTNwRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZEY0VJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZEZUVRc1JVRkJSU3hEUVVGRE8xTkJRMGc3TzFsQlFVMHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcyUWtGQk5rSXNRMEZCUXp0TFFVTTFSRHRUUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFGQlEzcEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZVVKQlFYbENMRU5CUVVNN1VVRkRha1FzV1VGQldTeERRVUZETEV0QlFVczdXVUZEYWtJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRE8wdEJRM3BFTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVN1VVRkROVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTI1RUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVU5CUVdsRExFTkJRVU03VVVGRGVrUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03UzBGRGJrUTdVMEZCVFR0UlFVTk9MRkZCUVZFc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVTdXVUZEYmtNc1MwRkJTeXhwUWtGQmFVSTdaMEpCUTNKQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03WjBKQlEyaEVMRTFCUVUwN1dVRkRVQ3hMUVVGTExITkNRVUZ6UWp0blFrRkRNVUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3d1FrRkJNRUlzUTBGQlF6dG5Ra0ZEYkVRc1RVRkJUVHRaUVVOUUxFdEJRVXNzYjBKQlFXOUNPMmRDUVVONFFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSFZDUVVGMVFpeERRVUZETzJkQ1FVTXZReXhOUVVGTk8xbEJRMUFzUzBGQlN5eGpRVUZqTzJkQ1FVTnNRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsRFFVRnBReXhEUVVGRE8yZENRVU42UkN4TlFVRk5PMWxCUTFBc1MwRkJTeXhOUVVGTk8yZENRVU5XTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdaMEpCUTNwRExFMUJRVTA3V1VGRFVDeExRVUZMTEZOQlFWTTdaMEpCUTJJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRuUWtGRE5VTXNUVUZCVFR0WlFVTlFMRXRCUVVzc1dVRkJXVHRuUWtGRGFFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUTBGQlowTXNRMEZCUXp0blFrRkRlRVFzVFVGQlRUdFpRVU5RTEV0QlFVc3NVVUZCVVR0blFrRkRXaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXp0blFrRkRka01zVFVGQlRUdFpRVU5RTEV0QlFVc3NhVUpCUVdsQ08yZENRVU55UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIVkNRVUYxUWl4RFFVRkRPMmRDUVVNdlF5eE5RVUZOTzFsQlExQXNTMEZCU3l4WlFVRlpPMmRDUVVOb1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRFJDUVVFMFFpeERRVUZETzJkQ1FVTndSQ3hOUVVGTk8xbEJRMUFzUzBGQlN5eFBRVUZQTzJkQ1FVTllMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWjBOQlFXZERMRU5CUVVNN1owSkJRM2hFTEUxQlFVMDdXVUZEVUN4TFFVRkxMR2RDUVVGblFqdG5Ra0ZEY0VJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3lRa0ZCTWtJc1EwRkJRenRuUWtGRGJrUXNUVUZCVFR0WlFVTlFMRXRCUVVzc1YwRkJWenRuUWtGRFppeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzJkQ1FVTm9SQ3hOUVVGTk8xbEJRMUFzUzBGQlN5eGxRVUZsTzJkQ1FVTnVRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERSQ1FVRTBRaXhEUVVGRE8yZENRVU53UkN4TlFVRk5PMWxCUTFBc1MwRkJTeXhsUVVGbE8yZENRVU51UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExESkNRVUV5UWl4RFFVRkRPMmRDUVVOdVJDeE5RVUZOTzFsQlExQXNTMEZCU3l4WlFVRlpPMmRDUVVOb1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzJkQ1FVTm9SQ3hOUVVGTk8xbEJRMUFzUzBGQlN5eFZRVUZWTzJkQ1FVTmtMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBOQlFXdERMRU5CUVVNN1owSkJRekZFTEUxQlFVMDdXVUZEVUN4TFFVRkxMR1ZCUVdVN1owSkJRMjVDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2EwTkJRV3RETEVOQlFVTTdaMEpCUXpGRUxFMUJRVTA3VTBGRFVEdExRVU5FTzBsQlJVUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwic3RhcnQiLCJlbmQiLCJnZXRUaW1lc3RhbXBzIiwidGltZXN0YW1wRnJvbUZvcm1hdCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImRldGFpbHMiLCJtYXRjaCIsImluY2x1ZGVzIiwidGltZXIiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzdGF0ZSIsInNwbGl0IiwiZW5kVGltZXN0YW1wIiwiZmluYWxUaW1lIiwibGFzdENoaWxkIiwibm9kZVZhbHVlIiwibGFuZyIsImxlbmd0aCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;