var __webpack_exports__={};const presence=new Presence({clientId:"806926545771167774"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/B/Bots%20For%20Discord/assets/logo.png",startTimestamp:browsingTimestamp};"botsfordiscord.com"===window.location.hostname?(t.details="Viewing page:",document.querySelector("head > title").textContent.split("|")[0].trim().startsWith("Error")?t.state=`${document.querySelector("#errortitle").textContent.trim()} (${document.querySelector("#errorsubtitle").textContent.trim()})`:"/"===window.location.pathname.toLowerCase()?t.state="Homepage":"/bots"===window.location.pathname.toLowerCase()?t.state="Discord bots":"/bot/add"===window.location.pathname.toLowerCase()?t.state="Add a new bot":"/verification"===window.location.pathname.toLowerCase()?t.state="Verification program":window.location.pathname.startsWith("/house")?t.state="House program":"/me"===window.location.pathname.toLowerCase()||window.location.pathname.startsWith("/user/")?(t.details="Viewing a profile:",t.state=document.querySelectorAll("div.container #highlight")[1].textContent.trim()):"/me/favorites"===window.location.pathname.toLowerCase()?t.state=`${document.querySelectorAll("div.navbar-item a")[8].textContent.split("#")[0].trim()} favorite bots`:"/me/history"===window.location.pathname.toLowerCase()?t.state="Voting history":window.location.pathname.startsWith("/privacy")?t.state="Privacy policy":"/license"===window.location.pathname.toLowerCase()?t.state="Website license":"/tos"===window.location.pathname.toLowerCase()?t.state="Terms of Service (ToS)":"/partners"===window.location.pathname.toLowerCase()?t.state="Partners":"/contributors"===window.location.pathname.toLowerCase()?t.state="Contributors":window.location.pathname.startsWith("/tag/")?(t.details="Viewing bots with tag:",t.state=document.querySelector("div.container h1").textContent.split("</i>")[1].trim()):"/login"===window.location.pathname.toLowerCase()?t.state="Login":window.location.pathname.startsWith("/bot/")?(t.details="Viewing a bot:",t.state=document.querySelectorAll("div.container #highlight")[0].textContent.split("<a")[0].trim()):window.location.pathname.startsWith("/bots/search/")&&(t.state=`Search results (${window.location.pathname.split("/search/")[1].trim()})`)):"docs.botsfordiscord.com"===window.location.hostname&&window.location.pathname.startsWith("/")&&(t.details="API Docs | Viewing page:",t.state=document.querySelector("h1 span").textContent.trim()),t.state?presence.setActivity(t):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsNEVBQ2ZDLGVBQWdCVCxtQkFFYSx1QkFBN0JVLE9BQU9DLFNBQVNDLFVBQ2hCTCxFQUFhTSxRQUFVLGdCQUNuQkMsU0FDQ0MsY0FBYyxnQkFDZEMsWUFBWUMsTUFBTSxLQUFLLEdBQ3ZCQyxPQUNBQyxXQUFXLFNBQ1paLEVBQWFhLE1BQVEsR0FBR04sU0FDbkJDLGNBQWMsZUFDZEMsWUFBWUUsV0FBV0osU0FDdkJDLGNBQWMsa0JBQ2RDLFlBQVlFLFVBRStCLE1BQTNDUixPQUFPQyxTQUFTVSxTQUFTQyxjQUM5QmYsRUFBYWEsTUFBUSxXQUMyQixVQUEzQ1YsT0FBT0MsU0FBU1UsU0FBU0MsY0FDOUJmLEVBQWFhLE1BQVEsZUFDMkIsYUFBM0NWLE9BQU9DLFNBQVNVLFNBQVNDLGNBQzlCZixFQUFhYSxNQUFRLGdCQUMyQixrQkFBM0NWLE9BQU9DLFNBQVNVLFNBQVNDLGNBQzlCZixFQUFhYSxNQUFRLHVCQUNoQlYsT0FBT0MsU0FBU1UsU0FBU0YsV0FBVyxVQUN6Q1osRUFBYWEsTUFBUSxnQkFDMkIsUUFBM0NWLE9BQU9DLFNBQVNVLFNBQVNDLGVBQzlCWixPQUFPQyxTQUFTVSxTQUFTRixXQUFXLFdBQ3BDWixFQUFhTSxRQUFVLHFCQUN2Qk4sRUFBYWEsTUFBUU4sU0FDaEJTLGlCQUFpQiw0QkFBNEIsR0FDN0NQLFlBQVlFLFFBRStCLGtCQUEzQ1IsT0FBT0MsU0FBU1UsU0FBU0MsY0FDOUJmLEVBQWFhLE1BQVEsR0FBR04sU0FDbkJTLGlCQUFpQixxQkFBcUIsR0FDdENQLFlBQVlDLE1BQU0sS0FBSyxHQUN2QkMsdUJBRTJDLGdCQUEzQ1IsT0FBT0MsU0FBU1UsU0FBU0MsY0FDOUJmLEVBQWFhLE1BQVEsaUJBQ2hCVixPQUFPQyxTQUFTVSxTQUFTRixXQUFXLFlBQ3pDWixFQUFhYSxNQUFRLGlCQUMyQixhQUEzQ1YsT0FBT0MsU0FBU1UsU0FBU0MsY0FDOUJmLEVBQWFhLE1BQVEsa0JBQzJCLFNBQTNDVixPQUFPQyxTQUFTVSxTQUFTQyxjQUM5QmYsRUFBYWEsTUFBUSx5QkFDMkIsY0FBM0NWLE9BQU9DLFNBQVNVLFNBQVNDLGNBQzlCZixFQUFhYSxNQUFRLFdBQzJCLGtCQUEzQ1YsT0FBT0MsU0FBU1UsU0FBU0MsY0FDOUJmLEVBQWFhLE1BQVEsZUFDaEJWLE9BQU9DLFNBQVNVLFNBQVNGLFdBQVcsVUFDekNaLEVBQWFNLFFBQVUseUJBQ3ZCTixFQUFhYSxNQUFRTixTQUNoQkMsY0FBYyxvQkFDZEMsWUFBWUMsTUFBTSxRQUFRLEdBQzFCQyxRQUUyQyxXQUEzQ1IsT0FBT0MsU0FBU1UsU0FBU0MsY0FDOUJmLEVBQWFhLE1BQVEsUUFDaEJWLE9BQU9DLFNBQVNVLFNBQVNGLFdBQVcsVUFDekNaLEVBQWFNLFFBQVUsaUJBQ3ZCTixFQUFhYSxNQUFRTixTQUNoQlMsaUJBQWlCLDRCQUE0QixHQUM3Q1AsWUFBWUMsTUFBTSxNQUFNLEdBQ3hCQyxRQUVBUixPQUFPQyxTQUFTVSxTQUFTRixXQUFXLG1CQUN6Q1osRUFBYWEsTUFDVCxtQkFBbUJWLE9BQU9DLFNBQVNVLFNBQzlCSixNQUFNLFlBQVksR0FDbEJDLFlBR3FCLDRCQUE3QlIsT0FBT0MsU0FBU0MsVUFDckJGLE9BQU9DLFNBQVNVLFNBQVNGLFdBQVcsT0FDcENaLEVBQWFNLFFBQVUsMkJBQ3ZCTixFQUFhYSxNQUFRTixTQUFTQyxjQUFjLFdBQVdDLFlBQVlFLFFBRWxFWCxFQUFhYSxNQUdkdkIsU0FBUzJCLFlBQVlqQixHQUZyQlYsU0FBUzJCLGFBRXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjgwNjkyNjU0NTc3MTE2Nzc3NFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0IvQm90cyUyMEZvciUyMERpc2NvcmQvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9O1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09IFwiYm90c2ZvcmRpc2NvcmQuY29tXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgcGFnZTpcIjtcbiAgICAgICAgaWYgKGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImhlYWQgPiB0aXRsZVwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnNwbGl0KFwifFwiKVswXVxuICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgLnN0YXJ0c1dpdGgoXCJFcnJvclwiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNlcnJvcnRpdGxlXCIpXG4gICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKX0gKCR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNlcnJvcnN1YnRpdGxlXCIpXG4gICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKX0pYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCIvXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkhvbWVwYWdlXCI7XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS50b0xvd2VyQ2FzZSgpID09PSBcIi9ib3RzXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkRpc2NvcmQgYm90c1wiO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCIvYm90L2FkZFwiKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJBZGQgYSBuZXcgYm90XCI7XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS50b0xvd2VyQ2FzZSgpID09PSBcIi92ZXJpZmljYXRpb25cIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiVmVyaWZpY2F0aW9uIHByb2dyYW1cIjtcbiAgICAgICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvaG91c2VcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkhvdXNlIHByb2dyYW1cIjtcbiAgICAgICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiL21lXCIgfHxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3VzZXIvXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIHByb2ZpbGU6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmNvbnRhaW5lciAjaGlnaGxpZ2h0XCIpWzFdXG4gICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCIvbWUvZmF2b3JpdGVzXCIpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYubmF2YmFyLWl0ZW0gYVwiKVs4XVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIiNcIilbMF1cbiAgICAgICAgICAgICAgICAudHJpbSgpfSBmYXZvcml0ZSBib3RzYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCIvbWUvaGlzdG9yeVwiKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJWb3RpbmcgaGlzdG9yeVwiO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wcml2YWN5XCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJQcml2YWN5IHBvbGljeVwiO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCIvbGljZW5zZVwiKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJXZWJzaXRlIGxpY2Vuc2VcIjtcbiAgICAgICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiL3Rvc1wiKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJUZXJtcyBvZiBTZXJ2aWNlIChUb1MpXCI7XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS50b0xvd2VyQ2FzZSgpID09PSBcIi9wYXJ0bmVyc1wiKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJQYXJ0bmVyc1wiO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCIvY29udHJpYnV0b3JzXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkNvbnRyaWJ1dG9yc1wiO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi90YWcvXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBib3RzIHdpdGggdGFnOlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImRpdi5jb250YWluZXIgaDFcIilcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQuc3BsaXQoXCI8L2k+XCIpWzFdXG4gICAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCIvbG9naW5cIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiTG9naW5cIjtcbiAgICAgICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYm90L1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBib3Q6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmNvbnRhaW5lciAjaGlnaGxpZ2h0XCIpWzBdXG4gICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnNwbGl0KFwiPGFcIilbMF1cbiAgICAgICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2JvdHMvc2VhcmNoL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICBgU2VhcmNoIHJlc3VsdHMgKCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi9zZWFyY2gvXCIpWzFdXG4gICAgICAgICAgICAgICAgICAgIC50cmltKCl9YCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJkb2NzLmJvdHNmb3JkaXNjb3JkLmNvbVwiICYmXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQVBJIERvY3MgfCBWaWV3aW5nIHBhZ2U6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSBzcGFuXCIpLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICB9XG4gICAgaWYgKCFwcmVzZW5jZURhdGEuc3RhdGUpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVVZ1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYkVNc1lVRkJZU3hGUVVOYUxESkZRVUV5UlR0UlFVTTFSU3hqUVVGakxFVkJRVVVzYVVKQlFXbENPMHRCUTJwRExFTkJRVU03U1VGRFJpeEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hMUVVGTExHOUNRVUZ2UWl4RlFVRkZPMUZCUTNSRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaVUZCWlN4RFFVRkRPMUZCUTNaRExFbEJRME1zVVVGQlVUdGhRVU5PTEdGQlFXRXNRMEZCUXl4alFVRmpMRU5CUVVNN1lVRkROMElzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGVrSXNTVUZCU1N4RlFVRkZPMkZCUTA0c1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVU53UWp0WlFVTkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eFJRVUZSTzJsQ1FVTTVRaXhoUVVGaExFTkJRVU1zWVVGQllTeERRVUZETzJsQ1FVTTFRaXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NVVUZCVVR0cFFrRkRMMElzWVVGQllTeERRVUZETEdkQ1FVRm5RaXhEUVVGRE8ybENRVU12UWl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF6dFRRVU40UWp0aFFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRXRCUVVzc1IwRkJSenRaUVVONFJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJRenRoUVVNMVFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeExRVUZMTEU5QlFVODdXVUZETVVRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGpRVUZqTEVOQlFVTTdZVUZEYUVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJTeXhWUVVGVk8xbEJRemRFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1pVRkJaU3hEUVVGRE8yRkJRMnBETEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEV0QlFVc3NaVUZCWlR0WlFVTnNSU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8yRkJRM2hETEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXp0WlFVTnlSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdWQlFXVXNRMEZCUXp0aFFVTnFReXhKUVVOS0xFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hMUVVGTExFdEJRVXM3V1VGRGFFUXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVTTFRenRaUVVORUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03V1VGRE5VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUk8ybENRVU16UWl4blFrRkJaMElzUTBGQlF5d3dRa0ZCTUVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZETDBNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFOQlEzSkNPMkZCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJTeXhsUVVGbExFVkJRVVU3V1VGRGRFVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExGRkJRVkU3YVVKQlF6bENMR2RDUVVGblFpeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTjRReXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRGVrSXNTVUZCU1N4RlFVRkZMR2RDUVVGblFpeERRVUZETzFOQlEzcENPMkZCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJTeXhoUVVGaE8xbEJRMnhGTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdZVUZEYkVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xbEJRM1pFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdZVUZEYkVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJTeXhWUVVGVk8xbEJRemRFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdZVUZEYmtNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJTeXhOUVVGTk8xbEJRM3BFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdZVUZETVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJTeXhYUVVGWE8xbEJRemxFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1ZVRkJWU3hEUVVGRE8yRkJRelZDTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEV0QlFVc3NaVUZCWlR0WlFVTnNSU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdOQlFXTXNRMEZCUXp0aFFVTm9ReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdFpRVU4wUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMWxCUTJoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVR0cFFrRkRNMElzWVVGQllTeERRVUZETEd0Q1FVRnJRaXhEUVVGRE8ybENRVU5xUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkROVUlzU1VGQlNTeEZRVUZGTEVOQlFVTTdVMEZEVkR0aFFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRXRCUVVzc1VVRkJVVHRaUVVNM1JDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJRenRoUVVONlFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0WlFVTjBSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xbEJRM2hETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVVHRwUWtGRE0wSXNaMEpCUVdkQ0xFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlF5OURMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVNeFFpeEpRVUZKTEVWQlFVVXNRMEZCUXp0VFFVTlVPMkZCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJaU3hEUVVGRExFVkJRVVU3V1VGRGFFVXNXVUZCV1N4RFFVRkRMRXRCUVVzN1owSkJRMnBDTEcxQ1FVRnRRaXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRTdjVUpCUTNwRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2NVSkJRM0JDTEVsQlFVa3NSVUZCUlN4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRE8xTkJRMnhDTzB0QlEwUTdVMEZCVFN4SlFVTk9MRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeExRVUZMTEhsQ1FVRjVRanRSUVVOMFJDeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlEzWkRPMUZCUTBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRSUVVOc1JDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wdEJRekZGTzBsQlEwUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPenRSUVVNelF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRM3BETEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiZGV0YWlscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic3BsaXQiLCJ0cmltIiwic3RhcnRzV2l0aCIsInN0YXRlIiwicGF0aG5hbWUiLCJ0b0xvd2VyQ2FzZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;