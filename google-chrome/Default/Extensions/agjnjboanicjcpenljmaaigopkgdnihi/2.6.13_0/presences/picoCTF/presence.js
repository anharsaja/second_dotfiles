var __webpack_exports__={};const presence=new Presence({clientId:"989558631823474748"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e=await presence.getSetting("privacy"),t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/picoCTF/assets/logo.png",startTimestamp:browsingTimestamp};if("picoctf.org"===document.location.hostname)if(document.location.pathname.includes("/learning_guides/"))t.details="Reading a guide:",t.state=`${document.location.pathname.split("/")[2].replaceAll("-"," ").slice(6,-4)}`;else if(document.location.pathname.includes("/pdfs/"))t.details=document.location.pathname.includes("Sponsorship_Flyer")?"Reading about sponsoring":"Reading a research paper";else if("/get_started.html"===document.location.pathname){const a="User Guide"===document.querySelectorAll('ul#competition-tabs li a:not([aria-selected="false"])')[0].innerHTML?"Viewing the user guide":"Viewing the FAQ";t.details=a,e||"Viewing the user guide"!==a||(t.state=Array.from(document.querySelectorAll('div.active button:not([aria-selected="false"]) span'),(e=>e.innerHTML)).splice(document.querySelectorAll('ul#guide-tabs li a:not([aria-selected="false"])')[0].innerHTML.includes("Learner")?0:2,2).join(": "))}else switch(document.location.pathname){case"/":t.details="Viewing home page";break;case"/resources.html":t.details="Viewing learning resources";break;case"/community.html":t.details="Viewing community page";break;case"/competitions/past.html":t.details="Viewing past competitions";break;case"/privacy.html":t.details="Reading privacy statement";break;case"/terms.html":t.details="Reading terms of service";break;case"/about.html":t.details="Reading the about page";break;case"/research.html":t.details="Reading the research page";break;case"/sponsors.html":t.details="Viewing sponsors";break;case"/contact.html":t.details="Viewing the contact page"}if("play.picoctf.org"===document.location.hostname)if("/login"===document.location.pathname)t.details=e?"Viewing home page":"Logging in";else if("/practice"===document.location.pathname){const a=new URLSearchParams(document.location.search),i=e=>{if(34===e)return"uncategorized";const t=document.querySelector("ul.filter-list").children[e].innerHTML.toLowerCase().split(" "),a=parseInt(t[t.length-1].replace(/\D/g,""))||"";return 0===e?a:3===t.length?`${a} ${t[0]} ${t[1]}`:`${a} ${t[0]}`};if(a.has("category")?t.details=`Viewing ${i(parseInt(a.get("category")))} challs`:t.details=`Viewing ${i(0)} challs`,t.state=a.has("page")?`Page ${a.get("page")}`:"Page 1",!e){const e=document.querySelector("div.col-md-3 h3.text-bluish").innerHTML.split(" ");e.splice(0,1),e.unshift(", "),t.state+=e.join(" ")}}else if(document.location.pathname.includes("/practice/challenge/"))e?t.details="Solving a challenge":(t.details=`Viewing "${document.querySelector("div.row.d-flex.justify-content-between h3.mb-1").innerHTML.split("<button")[0]}" chall`,t.state=`${"user"===document.querySelector("div.body-lg.mr-3 svg").attributes[2].value?"Unsolved":"Solved"}, ${document.querySelector("button.btn.btn-danger.btn-xs").innerHTML}`);else if(document.location.pathname.includes("/users/"))t.details=e?"Viewing an account":`Viewing account "${document.location.pathname.split("/")[2]}"`;else if(document.location.pathname.includes("/events/")&&document.location.pathname.includes("/scoreboards"))t.details=`Viewing ${document.querySelector("h3.card-title div.text-left").innerHTML}`;else if(document.location.pathname.includes("/classrooms"))parseInt(document.location.pathname.split("/")[2])&&!e?t.details=`Viewing classroom "${document.querySelector("div.col-md-6 h2.card-title").innerHTML}"`:t.details="Viewing classrooms";else if("/notifications"===document.location.pathname){if(t.details="Viewing notifications",!e){const e=new URLSearchParams(window.location.search);e.has("show")&&(t.details=`Viewing ${e.get("show")} notifications`),t.state=`Page ${e.get("page")}`}}else"/account"!==document.location.pathname||e?"/compete"===document.location.pathname&&(t.details="Viewing competitions"):t.details="Editing account";presence.setActivity(t)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEMsU0FBU0MsU0FBU0UsVUFBNEJSLEVBRWYsYUFBL0JLLFNBQVNDLFNBQVNFLFdBQ3ZCTixFQUFhUSxRQUFVLHdCQUZ2QlIsRUFBYVEsUUFBVSxrQkFJL0JwQixTQUFTc0QsWUFBWTFDLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTg5NTU4NjMxODIzNDc0NzQ4XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJpdmFjeSA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJwcml2YWN5XCIpLCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9QL3BpY29DVEYvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9O1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJwaWNvY3RmLm9yZ1wiKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9sZWFybmluZ19ndWlkZXMvXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBhIGd1aWRlOlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpWzJdXG4gICAgICAgICAgICAgICAgLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKVxuICAgICAgICAgICAgICAgIC5zbGljZSg2LCAtNCl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9wZGZzL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIlNwb25zb3JzaGlwX0ZseWVyXCIpXG4gICAgICAgICAgICAgICAgPyBcIlJlYWRpbmcgYWJvdXQgc3BvbnNvcmluZ1wiXG4gICAgICAgICAgICAgICAgOiBcIlJlYWRpbmcgYSByZXNlYXJjaCBwYXBlclwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9nZXRfc3RhcnRlZC5odG1sXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bCNjb21wZXRpdGlvbi10YWJzIGxpIGE6bm90KFthcmlhLXNlbGVjdGVkPVwiZmFsc2VcIl0pJylbMF0uaW5uZXJIVE1MID09PSBcIlVzZXIgR3VpZGVcIlxuICAgICAgICAgICAgICAgID8gXCJWaWV3aW5nIHRoZSB1c2VyIGd1aWRlXCJcbiAgICAgICAgICAgICAgICA6IFwiVmlld2luZyB0aGUgRkFRXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHZpZXdpbmc7XG4gICAgICAgICAgICBpZiAoIXByaXZhY3kgJiYgdmlld2luZyA9PT0gXCJWaWV3aW5nIHRoZSB1c2VyIGd1aWRlXCIpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5hY3RpdmUgYnV0dG9uOm5vdChbYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJdKSBzcGFuJyksIGVsID0+IGVsLmlubmVySFRNTClcbiAgICAgICAgICAgICAgICAgICAgLnNwbGljZShkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgndWwjZ3VpZGUtdGFicyBsaSBhOm5vdChbYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJdKScpWzBdXG4gICAgICAgICAgICAgICAgICAgIC5pbm5lckhUTUwuaW5jbHVkZXMoXCJMZWFybmVyXCIpXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IDIsIDIpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKFwiOiBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgaG9tZSBwYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvcmVzb3VyY2VzLmh0bWxcIjpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgbGVhcm5pbmcgcmVzb3VyY2VzXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvY29tbXVuaXR5Lmh0bWxcIjpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY29tbXVuaXR5IHBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIi9jb21wZXRpdGlvbnMvcGFzdC5odG1sXCI6XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHBhc3QgY29tcGV0aXRpb25zXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvcHJpdmFjeS5odG1sXCI6XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHByaXZhY3kgc3RhdGVtZW50XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvdGVybXMuaHRtbFwiOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0ZXJtcyBvZiBzZXJ2aWNlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvYWJvdXQuaHRtbFwiOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgYWJvdXQgcGFnZVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiL3Jlc2VhcmNoLmh0bWxcIjpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIHJlc2VhcmNoIHBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIi9zcG9uc29ycy5odG1sXCI6XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHNwb25zb3JzXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvY29udGFjdC5odG1sXCI6XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBjb250YWN0IHBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcInBsYXkucGljb2N0Zi5vcmdcIikge1xuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9ICFwcml2YWN5ID8gXCJMb2dnaW5nIGluXCIgOiBcIlZpZXdpbmcgaG9tZSBwYWdlXCI7XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9wcmFjdGljZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBwcmFjdGljZXBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoKSwgZm9ybWF0Q2F0ZWdvcnkgPSAoY2F0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNhdCA9PT0gMzQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInVuY2F0ZWdvcml6ZWRcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRUZXh0ID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5maWx0ZXItbGlzdFwiKVxuICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW5bY2F0XS5pbm5lckhUTUwudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIgXCIpLCBhbW91bnQgPSBwYXJzZUludChjYXRUZXh0W2NhdFRleHQubGVuZ3RoIC0gMV0ucmVwbGFjZSgvXFxEL2csIFwiXCIpKSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChjYXQgPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbW91bnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhdFRleHQubGVuZ3RoID09PSAzXG4gICAgICAgICAgICAgICAgICAgID8gYCR7YW1vdW50fSAke2NhdFRleHRbMF19ICR7Y2F0VGV4dFsxXX1gXG4gICAgICAgICAgICAgICAgICAgIDogYCR7YW1vdW50fSAke2NhdFRleHRbMF19YDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocHJhY3RpY2VwYXJhbXMuaGFzKFwiY2F0ZWdvcnlcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7Zm9ybWF0Q2F0ZWdvcnkocGFyc2VJbnQocHJhY3RpY2VwYXJhbXMuZ2V0KFwiY2F0ZWdvcnlcIikpKX0gY2hhbGxzYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7Zm9ybWF0Q2F0ZWdvcnkoMCl9IGNoYWxsc2A7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwcmFjdGljZXBhcmFtcy5oYXMoXCJwYWdlXCIpXG4gICAgICAgICAgICAgICAgPyBgUGFnZSAke3ByYWN0aWNlcGFyYW1zLmdldChcInBhZ2VcIil9YFxuICAgICAgICAgICAgICAgIDogXCJQYWdlIDFcIjtcbiAgICAgICAgICAgIGlmICghcHJpdmFjeSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY29sLW1kLTMgaDMudGV4dC1ibHVpc2hcIilcbiAgICAgICAgICAgICAgICAgICAgLmlubmVySFRNTC5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgc2NvcmUuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgIHNjb3JlLnVuc2hpZnQoXCIsIFwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgKz0gc2NvcmUuam9pbihcIiBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvcHJhY3RpY2UvY2hhbGxlbmdlL1wiKSkge1xuICAgICAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmlld2luZyBcIiR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJkaXYucm93LmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBoMy5tYi0xXCIpXG4gICAgICAgICAgICAgICAgICAgIC5pbm5lckhUTUwuc3BsaXQoXCI8YnV0dG9uXCIpWzBdfVwiIGNoYWxsYDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmJvZHktbGcubXItMyBzdmdcIikuYXR0cmlidXRlc1syXS52YWx1ZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcIlVuc29sdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlNvbHZlZFwifSwgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmJ0bi5idG4tZGFuZ2VyLmJ0bi14c1wiKS5pbm5lckhUTUx9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU29sdmluZyBhIGNoYWxsZW5nZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3VzZXJzL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwcml2YWN5XG4gICAgICAgICAgICAgICAgPyBcIlZpZXdpbmcgYW4gYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgOiBgVmlld2luZyBhY2NvdW50IFwiJHtkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMl19XCJgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2V2ZW50cy9cIikgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3Njb3JlYm9hcmRzXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzLmNhcmQtdGl0bGUgZGl2LnRleHQtbGVmdFwiKS5pbm5lckhUTUx9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jbGFzc3Jvb21zXCIpKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzJdKSAmJiAhcHJpdmFjeSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgY2xhc3Nyb29tIFwiJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNvbC1tZC02IGgyLmNhcmQtdGl0bGVcIikuaW5uZXJIVE1MfVwiYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBjbGFzc3Jvb21zXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL25vdGlmaWNhdGlvbnNcIikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgbm90aWZpY2F0aW9uc1wiO1xuICAgICAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm90aWZwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgICAgIGlmIChub3RpZnBhcmFtcy5oYXMoXCJzaG93XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHtub3RpZnBhcmFtcy5nZXQoXCJzaG93XCIpfSBub3RpZmljYXRpb25zYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFBhZ2UgJHtub3RpZnBhcmFtcy5nZXQoXCJwYWdlXCIpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FjY291bnRcIiAmJiAhcHJpdmFjeSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFZGl0aW5nIGFjY291bnRcIjtcbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2NvbXBldGVcIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGNvbXBldGl0aW9uc1wiO1xuICAgIH1cbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVVZ1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxFOUJRVThzUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1UwRkJVeXhEUVVGRExFVkJRelZFTEZsQlFWa3NSMEZCYVVJN1VVRkROVUlzWVVGQllTeEZRVU5hTERoRVFVRTRSRHRSUVVNdlJDeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVOQlFVTTdTVUZGU0N4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeExRVUZMTEdGQlFXRXNSVUZCUlR0UlFVTnFSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RlFVRkZPMWxCUXpkRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03V1VGRE1VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVR0cFFrRkRhRVFzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRFlpeFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRwUWtGRGNFSXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdVMEZEYWtJN1lVRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdFpRVU42UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkRla1FzYlVKQlFXMUNMRU5CUTI1Q08yZENRVU5CTEVOQlFVTXNRMEZCUXl3d1FrRkJNRUk3WjBKQlF6VkNMRU5CUVVNc1EwRkJReXd3UWtGQk1FSXNRMEZCUXp0VFFVTTVRanRoUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRXRCUVVzc2JVSkJRVzFDTEVWQlFVVTdXVUZET1VRc1RVRkJUU3hQUVVGUExFZEJRMW9zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVONFFpeDFSRUZCZFVRc1EwRkRka1FzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRXRCUVVzc1dVRkJXVHRuUWtGRE9VSXNRMEZCUXl4RFFVRkRMSGRDUVVGM1FqdG5Ra0ZETVVJc1EwRkJReXhEUVVGRExHbENRVUZwUWl4RFFVRkRPMWxCUlhSQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUlM5Q0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4TFFVRkxMSGRDUVVGM1FpeEZRVUZGTzJkQ1FVTnlSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUXpsQ0xGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkRlRUlzY1VSQlFYRkVMRU5CUTNKRUxFVkJRMFFzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhEUVVOc1FqdHhRa0ZEUXl4TlFVRk5MRU5CUTA0c1VVRkJVVHR4UWtGRFRpeG5Ra0ZCWjBJc1EwRkRhRUlzYVVSQlFXbEVMRU5CUTJwRUxFTkJRVU1zUTBGQlF5eERRVUZETzNGQ1FVTklMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETzI5Q1FVTTVRaXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEU0N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVOS0xFTkJRVU1zUTBGRFJEdHhRa0ZEUVN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGRFlqdFRRVU5FTzJGQlFVMDdXVUZEVGl4UlFVRlJMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJkQ1FVTnVReXhMUVVGTExFZEJRVWM3YjBKQlExQXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0dlFrRkRNME1zVFVGQlRUdG5Ra0ZEVUN4TFFVRkxMR2xDUVVGcFFqdHZRa0ZEY2tJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5dzBRa0ZCTkVJc1EwRkJRenR2UWtGRGNFUXNUVUZCVFR0blFrRkRVQ3hMUVVGTExHbENRVUZwUWp0dlFrRkRja0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4M1FrRkJkMElzUTBGQlF6dHZRa0ZEYUVRc1RVRkJUVHRuUWtGRFVDeExRVUZMTEhsQ1FVRjVRanR2UWtGRE4wSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd5UWtGQk1rSXNRMEZCUXp0dlFrRkRia1FzVFVGQlRUdG5Ra0ZEVUN4TFFVRkxMR1ZCUVdVN2IwSkJRMjVDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01rSkJRVEpDTEVOQlFVTTdiMEpCUTI1RUxFMUJRVTA3WjBKQlExQXNTMEZCU3l4aFFVRmhPMjlDUVVOcVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMREJDUVVFd1FpeERRVUZETzI5Q1FVTnNSQ3hOUVVGTk8yZENRVU5RTEV0QlFVc3NZVUZCWVR0dlFrRkRha0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4M1FrRkJkMElzUTBGQlF6dHZRa0ZEYUVRc1RVRkJUVHRuUWtGRFVDeExRVUZMTEdkQ1FVRm5RanR2UWtGRGNFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd5UWtGQk1rSXNRMEZCUXp0dlFrRkRia1FzVFVGQlRUdG5Ra0ZEVUN4TFFVRkxMR2RDUVVGblFqdHZRa0ZEY0VJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenR2UWtGRE1VTXNUVUZCVFR0blFrRkRVQ3hMUVVGTExHVkJRV1U3YjBKQlEyNUNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTUVKQlFUQkNMRU5CUVVNN2IwSkJRMnhFTEUxQlFVMDdZVUZEVUR0VFFVTkVPMHRCUTBRN1NVRkZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMR3RDUVVGclFpeEZRVUZGTzFGQlEzUkVMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEV0QlFVc3NVVUZCVVR0WlFVTXhReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEcxQ1FVRnRRaXhEUVVGRE8yRkJRMnBGTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFdEJRVXNzVjBGQlZ5eEZRVUZGTzFsQlEzQkVMRTFCUVUwc1kwRkJZeXhIUVVGSExFbEJRVWtzWlVGQlpTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRMjVGTEdOQlFXTXNSMEZCUnl4RFFVRkRMRWRCUVZjc1JVRkJSU3hGUVVGRk8yZENRVU5vUXl4SlFVRkpMRWRCUVVjc1MwRkJTeXhGUVVGRk8yOUNRVUZGTEU5QlFVOHNaVUZCWlN4RFFVRkRPMmRDUVVWMlF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UlFVRlJPM0ZDUVVOeVFpeGhRVUZoTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU03Y1VKQlF5OUNMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNWMEZCVnl4RlFVRkZPM0ZDUVVOeVF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUTFvc1RVRkJUU3hIUVVOTUxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVVnFSU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETzI5Q1FVRkZMRTlCUVU4c1RVRkJUU3hEUVVGRE8yZENRVVUzUWl4UFFVRlBMRTlCUVU4c1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF6dHZRa0ZETVVJc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTNwRExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU01UWl4RFFVRkRMRU5CUVVNN1dVRkZTQ3hKUVVGSkxHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1owSkJRMjVETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1YwRkJWeXhqUVVGakxFTkJReTlETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlEzaERMRk5CUVZNc1EwRkJRenRoUVVOWU96dG5Ra0ZCVFN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRVmNzWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkZjRVVzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF6dG5Ra0ZET1VNc1EwRkJReXhEUVVGRExGRkJRVkVzWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRuUWtGRGRFTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJRenRaUVVWYUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUTJJc1RVRkJUU3hMUVVGTExFZEJRVWNzVVVGQlVUdHhRa0ZEY0VJc1lVRkJZU3hEUVVGRExEWkNRVUUyUWl4RFFVRkRPM0ZDUVVNMVF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU4yUWl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia0lzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRGNFSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTNSRE8xTkJRMFE3WVVGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eHpRa0ZCYzBJc1EwRkJReXhGUVVGRk8xbEJRM1pGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1owSkJRMklzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WlFVTjBRaXhSUVVGUk8zRkNRVU5PTEdGQlFXRXNRMEZCUXl4blJFRkJaMFFzUTBGQlF6dHhRa0ZETDBRc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUXk5Q0xGTkJRVk1zUTBGQlF6dG5Ra0ZEVml4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRM0JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN6dHZRa0ZEYkVVc1RVRkJUVHR2UWtGRFRDeERRVUZETEVOQlFVTXNWVUZCVlR0dlFrRkRXaXhEUVVGRExFTkJRVU1zVVVGRFNpeExRVUZMTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRoUVVONFJUczdaMEpCUVUwc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenRUUVVOd1JEdGhRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMWxCUXpGRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHp0blFrRkROMElzUTBGQlF5eERRVUZETEc5Q1FVRnZRanRuUWtGRGRFSXNRMEZCUXl4RFFVRkRMRzlDUVVGdlFpeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRUUVVOdVJUdGhRVUZOTEVsQlEwNHNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXp0WlFVTXZReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRMnhFTzFsQlEwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhYUVVOMFFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRFpDUVVFMlFpeERRVUZETEVOQlFVTXNVMEZEZGtRc1JVRkJSU3hEUVVGRE8xTkJRMGc3WVVGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlR0WlFVTTVSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdG5Ra0ZEYmtVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHpRa0ZEZEVJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5dzBRa0ZCTkVJc1EwRkJReXhEUVVGRExGTkJRM1JFTEVkQlFVY3NRMEZCUXp0aFFVTktPenRuUWtGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzlDUVVGdlFpeERRVUZETzFOQlEyNUVPMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNTMEZCU3l4blFrRkJaMElzUlVGQlJUdFpRVU16UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIVkNRVUYxUWl4RFFVRkRPMWxCUlM5RExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUTJJc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVVc1NVRkJTU3hYUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMjlDUVVNMVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmRCUVZjc1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGRGFFUXNUVUZCVFN4RFFVTk9MR2RDUVVGblFpeERRVUZETzJsQ1FVTnNRanRuUWtGRFJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRPMkZCUTNaRU8xTkJRMFE3WVVGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hMUVVGTExGVkJRVlVzU1VGQlNTeERRVUZETEU5QlFVODdXVUZETDBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRoUVVOeVF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hMUVVGTExGVkJRVlU3V1VGRGFrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0TFFVTXZRenRKUVVWRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1FVRkRjRU1zUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwcml2YWN5IiwiZ2V0U2V0dGluZyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJkZXRhaWxzIiwic3RhdGUiLCJzcGxpdCIsInJlcGxhY2VBbGwiLCJzbGljZSIsInZpZXdpbmciLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwiQXJyYXkiLCJmcm9tIiwiZWwiLCJzcGxpY2UiLCJqb2luIiwicHJhY3RpY2VwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJmb3JtYXRDYXRlZ29yeSIsImNhdCIsImNhdFRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJ0b0xvd2VyQ2FzZSIsImFtb3VudCIsInBhcnNlSW50IiwibGVuZ3RoIiwicmVwbGFjZSIsImhhcyIsImdldCIsInNjb3JlIiwidW5zaGlmdCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsIm5vdGlmcGFyYW1zIiwid2luZG93Iiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;