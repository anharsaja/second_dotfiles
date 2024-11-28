var __webpack_exports__={};const presence=new Presence({clientId:"1037407267336753152"}),browsingTimestamp=Math.floor(Date.now()/1e3),slideshow=presence.createSlideshow();async function getListImages(){return await Promise.all([...document.querySelectorAll(".image-prompt-overlay-container")].map((async e=>[await getShortURL(e.querySelector(".generated-image > img").src),e.querySelector(".image-prompt-overlay").textContent])))}const shortenedURLs={};async function getShortURL(e){if(e.length<256)return e;if(shortenedURLs[e])return shortenedURLs[e];try{const t=await(await fetch(`https://pd.premid.app/create/${e}`)).text();return shortenedURLs[e]=t,t}catch(t){return presence.error(t),e}}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/DALL-E/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t,href:i}=window.location,s=await presence.getSetting("showImages");if("/"===t){const t=document.querySelector(".image-prompt-input");t.value?(e.details="Crafting a prompt",e.state=t.value):e.details="Thinking of a prompt"}else if(t.startsWith("/history"))if(s){const t=await getListImages();if(t.length>0)for(const[i,[s,a]]of t.entries())slideshow.addSlide(i.toString(),{...e,details:"Viewing history",state:a,largeImageKey:s},5e3);else e.details="Viewing history"}else e.details="Viewing history";else if(t.startsWith("/c/"))if(s){const s=await getListImages();if(0===s.length)e.details="Viewing a collection",e.state=document.querySelector("[class*=h3]").textContent;else for(const[a,[n,r]]of s.entries()){const s={...e,details:`Viewing collection: ${document.querySelector("[class*=h3]").textContent}`,state:r,largeImageKey:n};document.querySelector(".collection-layout-private")||t.includes("/private")||(s.buttons=[{label:"View Collection",url:i}]),slideshow.addSlide(a.toString(),s,5e3)}}else e.details="Viewing a collection",e.state=document.querySelector("[class*=h3]").textContent;else if(t.startsWith("/collections"))e.details="Viewing collections";else if(t.startsWith("/account"))e.details="Viewing their account";else if(t.startsWith("/e/")){const t=document.querySelector(".image-prompt-input")?.value;if(s){const i=await Promise.all([...document.querySelectorAll(".task-page-generations-img .generated-image > img")].map((e=>getShortURL(e.src)))),s=document.querySelector(".edit-page-image .generated-image > img");if(0!==i.length||s)if(s)e.details="Viewing an image",e.largeImageKey=await getShortURL(s.src);else for(const[s,a]of i.entries())slideshow.addSlide(s.toString(),{...e,details:"Viewing a generation",state:t,largeImageKey:a},5e3);else e.details="Generating images",e.state=t}else e.details="Viewing a generation",e.state=t}else t.startsWith("/s/")?(e.details="Viewing an image",e.state=document.querySelector(".gen-detail-caption").textContent,e.buttons=[{label:"View Image",url:i}],s&&(e.largeImageKey=await getShortURL(document.querySelector(".generated-image > img").src))):t.startsWith("/editor")?e.details="Using the image editor":(e.details="Browsing",e.state=document.title.match(/^(.*)?( \| DALL·E)?$/)[1]);e.details?(presence.setActivity(e),slideshow.deleteAllSlides()):slideshow.getSlides().length>0?presence.setActivity(slideshow):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJDQUNoRixHQUFzQixJQUFsQjBCLEVBQU9yQixRQUFpQitCLEVBSXZCLEdBQUlBLEVBQ0x4QixFQUFhVyxRQUFVLG1CQUN2QlgsRUFBYUMsb0JBQXNCZCxZQUFZcUMsRUFBY25DLFVBRzdELElBQUssTUFBTzBCLEVBQUdDLEtBQVVGLEVBQU9HLFVBQzVCeEMsVUFBVXlDLFNBQVNILEVBQUVJLFdBQVksSUFDMUJuQixFQUNIVyxRQUFTLHVCQUNUQyxNQUFPSCxFQUNQUixjQUFlZSxHQUNoQixVQWRQaEIsRUFBYVcsUUFBVSxvQkFDdkJYLEVBQWFZLE1BQVFILENBZ0I3QixNQUVJVCxFQUFhVyxRQUFVLHVCQUN2QlgsRUFBYVksTUFBUUgsQ0FFN0IsTUFDU04sRUFBU1UsV0FBVyxRQUN6QmIsRUFBYVcsUUFBVSxtQkFDdkJYLEVBQWFZLE1BQVE3QixTQUFTSyxjQUFjLHVCQUF1QkUsWUFDbkVVLEVBQWFzQixRQUFVLENBQUMsQ0FBRUMsTUFBTyxhQUFjL0IsSUFBS1ksSUFDaERHLElBQ0FQLEVBQWFDLG9CQUFzQmQsWUFBWUosU0FBU0ssY0FBYywwQkFBMEJDLE9BRy9GYyxFQUFTVSxXQUFXLFdBQ3pCYixFQUFhVyxRQUFVLDBCQUV2QlgsRUFBYVcsUUFBVSxXQUN2QlgsRUFBYVksTUFBUTdCLFNBQVMwQyxNQUFNQyxNQUFNLHdCQUF3QixJQUVsRTFCLEVBQWFXLFNBQ2IxQyxTQUFTMEQsWUFBWTNCLEdBQ3JCdkIsVUFBVW1ELG1CQUVMbkQsVUFBVW9ELFlBQVlwQyxPQUFTLEVBQ3BDeEIsU0FBUzBELFlBQVlsRCxXQUVyQlIsU0FBUzBELGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiMTAzNzQwNzI2NzMzNjc1MzE1MlwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksIHNsaWRlc2hvdyA9IHByZXNlbmNlLmNyZWF0ZVNsaWRlc2hvdygpO1xuYXN5bmMgZnVuY3Rpb24gZ2V0TGlzdEltYWdlcygpIHtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlLXByb21wdC1vdmVybGF5LWNvbnRhaW5lclwiKSxcbiAgICBdLm1hcChhc3luYyAoY29udGFpbmVyKSA9PiBbXG4gICAgICAgIGF3YWl0IGdldFNob3J0VVJMKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmdlbmVyYXRlZC1pbWFnZSA+IGltZ1wiKS5zcmMpLFxuICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbWFnZS1wcm9tcHQtb3ZlcmxheVwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LFxuICAgIF0pKTtcbn1cbmNvbnN0IHNob3J0ZW5lZFVSTHMgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldFNob3J0VVJMKHVybCkge1xuICAgIGlmICh1cmwubGVuZ3RoIDwgMjU2KVxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIGlmIChzaG9ydGVuZWRVUkxzW3VybF0pXG4gICAgICAgIHJldHVybiBzaG9ydGVuZWRVUkxzW3VybF07XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGRVUkwgPSBhd2FpdCAoYXdhaXQgZmV0Y2goYGh0dHBzOi8vcGQucHJlbWlkLmFwcC9jcmVhdGUvJHt1cmx9YCkpLnRleHQoKTtcbiAgICAgICAgc2hvcnRlbmVkVVJMc1t1cmxdID0gcGRVUkw7XG4gICAgICAgIHJldHVybiBwZFVSTDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBwcmVzZW5jZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbn1cbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRC9EQUxMLUUvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCB7IHBhdGhuYW1lLCBocmVmIH0gPSB3aW5kb3cubG9jYXRpb24sIHNob3dJbWFnZXMgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwic2hvd0ltYWdlc1wiKTtcbiAgICBpZiAocGF0aG5hbWUgPT09IFwiL1wiKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZS1wcm9tcHQtaW5wdXRcIik7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNyYWZ0aW5nIGEgcHJvbXB0XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVGhpbmtpbmcgb2YgYSBwcm9tcHRcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9oaXN0b3J5XCIpKSB7XG4gICAgICAgIGlmIChzaG93SW1hZ2VzKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBnZXRMaXN0SW1hZ2VzKCk7XG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtpLCBbaW1hZ2UsIHRleHRdXSBvZiBpbWFnZXMuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc2hvdy5hZGRTbGlkZShpLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXNlbmNlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiVmlld2luZyBoaXN0b3J5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IGltYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgaGlzdG9yeVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGhpc3RvcnlcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9jL1wiKSkge1xuICAgICAgICBpZiAoc2hvd0ltYWdlcykge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgZ2V0TGlzdEltYWdlcygpO1xuICAgICAgICAgICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIGNvbGxlY3Rpb25cIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzKj1oM11cIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtpLCBbaW1hZ2UsIHRleHRdXSBvZiBpbWFnZXMuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsaWRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJlc2VuY2VEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogYFZpZXdpbmcgY29sbGVjdGlvbjogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzKj1oM11cIikudGV4dENvbnRlbnR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2VJbWFnZUtleTogaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2xsZWN0aW9uLWxheW91dC1wcml2YXRlXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhcGF0aG5hbWUuaW5jbHVkZXMoXCIvcHJpdmF0ZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgQ29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzaG93LmFkZFNsaWRlKGkudG9TdHJpbmcoKSwgc2xpZGUsIDUwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgY29sbGVjdGlvblwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzKj1oM11cIikudGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9jb2xsZWN0aW9uc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY29sbGVjdGlvbnNcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2FjY291bnRcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZWlyIGFjY291bnRcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2UvXCIpKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZS1wcm9tcHQtaW5wdXRcIik/LnZhbHVlO1xuICAgICAgICBpZiAoc2hvd0ltYWdlcykge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1wYWdlLWdlbmVyYXRpb25zLWltZyAuZ2VuZXJhdGVkLWltYWdlID4gaW1nXCIpLFxuICAgICAgICAgICAgXS5tYXAoaW1hZ2UgPT4gZ2V0U2hvcnRVUkwoaW1hZ2Uuc3JjKSkpLCBjZW50ZXJlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXBhZ2UtaW1hZ2UgLmdlbmVyYXRlZC1pbWFnZSA+IGltZ1wiKTtcbiAgICAgICAgICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAwICYmICFjZW50ZXJlZEltYWdlKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkdlbmVyYXRpbmcgaW1hZ2VzXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjZW50ZXJlZEltYWdlKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYW4gaW1hZ2VcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGF3YWl0IGdldFNob3J0VVJMKGNlbnRlcmVkSW1hZ2Uuc3JjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2ksIGltYWdlXSBvZiBpbWFnZXMuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc2hvdy5hZGRTbGlkZShpLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXNlbmNlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiVmlld2luZyBhIGdlbmVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IGltYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIGdlbmVyYXRpb25cIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGlucHV0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvcy9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYW4gaW1hZ2VcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZW4tZGV0YWlsLWNhcHRpb25cIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBJbWFnZVwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgIGlmIChzaG93SW1hZ2VzKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGF3YWl0IGdldFNob3J0VVJMKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZXJhdGVkLWltYWdlID4gaW1nXCIpLnNyYyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9lZGl0b3JcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJVc2luZyB0aGUgaW1hZ2UgZWRpdG9yXCI7XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC50aXRsZS5tYXRjaCgvXiguKik/KCBcXHwgREFMTMK3RSk/JC8pWzFdO1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpIHtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgc2xpZGVzaG93LmRlbGV0ZUFsbFNsaWRlcygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzbGlkZXNob3cuZ2V0U2xpZGVzKCkubGVuZ3RoID4gMClcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoc2xpZGVzaG93KTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNjVUpCUVhGQ08wTkJReTlDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZEYWtRc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUXp0QlFVVjRReXhMUVVGTExGVkJRVlVzWVVGQllUdEpRVU16UWl4UFFVRlBMRTFCUVUwc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGRGRrSTdVVUZEUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZETTBJc2FVTkJRV2xETEVOQlEycERPMHRCUTBRc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZETEZOQlFWTXNSVUZCUXl4RlFVRkZMRU5CUVVNN1VVRkRlRUlzVFVGQlRTeFhRVUZYTEVOQlEyaENMRk5CUVZNc1EwRkJReXhoUVVGaExFTkJRVzFDTEhkQ1FVRjNRaXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVU4yUlR0UlFVTkVMRk5CUVZNc1EwRkJReXhoUVVGaExFTkJRV2xDTEhWQ1FVRjFRaXhEUVVGRE8yRkJRemxFTEZkQlFWYzdTMEZEWWl4RFFVRkRMRU5CUTBZc1EwRkJRenRCUVVOSUxFTkJRVU03UVVGRlJDeE5RVUZOTEdGQlFXRXNSMEZCTWtJc1JVRkJSU3hEUVVGRE8wRkJRMnBFTEV0QlFVc3NWVUZCVlN4WFFVRlhMRU5CUVVNc1IwRkJWenRKUVVOeVF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSenRSUVVGRkxFOUJRVThzUjBGQlJ5eERRVUZETzBsQlEycERMRWxCUVVrc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF6dFJRVUZGTEU5QlFVOHNZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVsQlFVazdVVUZEU0N4TlFVRk5MRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRMjVDTEUxQlFVMHNTMEZCU3l4RFFVRkRMR2REUVVGblF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVTnNSQ3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFGQlExUXNZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU16UWl4UFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOaU8wbEJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVTdVVUZEWWl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzQkNMRTlCUVU4c1IwRkJSeXhEUVVGRE8wdEJRMWc3UVVGRFJpeERRVUZETzBGQlJVUXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEycERMR0ZCUVdFc1JVRkRXaXcyUkVGQk5rUTdVVUZET1VRc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0TFFVTnFReXhGUVVORUxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRM0JETEZWQlFWVXNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzV1VGQldTeERRVUZETEVOQlFVTTdTVUZGTDBRc1NVRkJTU3hSUVVGUkxFdEJRVXNzUjBGQlJ5eEZRVUZGTzFGQlEzSkNMRTFCUVUwc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEyNURMSEZDUVVGeFFpeERRVU55UWl4RFFVRkRPMUZCUTBZc1NVRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyaENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYlVKQlFXMUNMRU5CUVVNN1dVRkRNME1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRE8xTkJRMnBET3p0WlFVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1MwRkRja1E3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3VVVGRE0wTXNTVUZCU1N4VlFVRlZMRVZCUVVVN1dVRkRaaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEdGQlFXRXNSVUZCUlN4RFFVRkRPMWxCUTNKRExFbEJRVWtzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRM1JDTEV0QlFVc3NUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdHZRa0ZEYkVRc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGRGFrSXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVOYU8zZENRVU5ETEVkQlFVY3NXVUZCV1R0M1FrRkRaaXhQUVVGUExFVkJRVVVzYVVKQlFXbENPM2RDUVVNeFFpeExRVUZMTEVWQlFVVXNTVUZCU1R0M1FrRkRXQ3hoUVVGaExFVkJRVVVzUzBGQlN6dHhRa0ZEY0VJc1JVRkRSQ3hKUVVGSkxFTkJRMG9zUTBGQlF6dHBRa0ZEUmp0aFFVTkVPenRuUWtGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFOQlEyaEVPenRaUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03UzBGRGFFUTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdVVUZEZEVNc1NVRkJTU3hWUVVGVkxFVkJRVVU3V1VGRFppeE5RVUZOTEUxQlFVMHNSMEZCUnl4TlFVRk5MR0ZCUVdFc1JVRkJSU3hEUVVGRE8xbEJRM0pETEVsQlFVa3NUVUZCVFN4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlEzaENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1owSkJRemxETEZsQlFWa3NRMEZCUXl4TFFVRkxPMjlDUVVOcVFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRnBRaXhoUVVGaExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdZVUZEYmtVN2FVSkJRVTA3WjBKQlEwNHNTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTzI5Q1FVTnNSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ6dDNRa0ZEWWl4SFFVRkhMRmxCUVZrN2QwSkJRMllzVDBGQlR5eEZRVUZGTEhWQ1FVTlNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRV2xDTEdGQlFXRXNRMEZCUXl4RFFVRkRMRmRCUTNaRUxFVkJRVVU3ZDBKQlEwWXNTMEZCU3l4RlFVRkZMRWxCUVVrN2QwSkJRMWdzWVVGQllTeEZRVUZGTEV0QlFVczdjVUpCUTNCQ0xFTkJRVU03YjBKQlEwWXNTVUZEUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM1JDTERSQ1FVRTBRaXhEUVVNMVFqdDNRa0ZEUkN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlF6ZENPM2RDUVVORUxFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVYzdORUpCUTJZN1owTkJRME1zUzBGQlN5eEZRVUZGTEdsQ1FVRnBRanRuUTBGRGVFSXNSMEZCUnl4RlFVRkZMRWxCUVVrN05rSkJRMVE3ZVVKQlEwUXNRMEZCUXp0eFFrRkRSanR2UWtGRFJDeFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRemxETzJGQlEwUTdVMEZEUkR0aFFVRk5PMWxCUTA0c1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHpRa0ZCYzBJc1EwRkJRenRaUVVNNVF5eFpRVUZaTEVOQlFVTXNTMEZCU3p0blFrRkRha0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCYVVJc1lVRkJZU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzFOQlEyNUZPMHRCUTBRN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCUXpkRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03VTBGRGVrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF6dFJRVU4yUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIVkNRVUYxUWl4RFFVRkRPMU5CUXpORExFbEJRVWtzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVOd1F5eE5RVUZOTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOdVF5eHhRa0ZCY1VJc1EwRkRja0lzUlVGQlJTeExRVUZMTEVOQlFVTTdVVUZEVkN4SlFVRkpMRlZCUVZVc1JVRkJSVHRaUVVObUxFMUJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkRPVUk3WjBKQlEwTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlF6TkNMRzFFUVVGdFJDeERRVU51UkR0aFFVTkVMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVU4wUXl4RlFVTkVMR0ZCUVdFc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UXl4NVEwRkJlVU1zUTBGRGVrTXNRMEZCUXp0WlFVTklMRWxCUVVrc1RVRkJUU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVN1owSkJRekZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTTdaMEpCUXpORExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMkZCUXpOQ08ybENRVUZOTEVsQlFVa3NZVUZCWVN4RlFVRkZPMmRDUVVONlFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETzJkQ1FVTXhReXhaUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZITEUxQlFVMHNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU5zUlR0cFFrRkJUVHRuUWtGRFRpeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZPMjlDUVVNeFF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVTnFRaXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlExbzdkMEpCUTBNc1IwRkJSeXhaUVVGWk8zZENRVU5tTEU5QlFVOHNSVUZCUlN4elFrRkJjMEk3ZDBKQlF5OUNMRXRCUVVzc1JVRkJSU3hMUVVGTE8zZENRVU5hTEdGQlFXRXNSVUZCUlN4TFFVRkxPM0ZDUVVOd1FpeEZRVU5FTEVsQlFVa3NRMEZEU2l4RFFVRkRPMmxDUVVOR08yRkJRMFE3VTBGRFJEdGhRVUZOTzFsQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0WlFVTTVReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0VFFVTXpRanRMUVVORU8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRM1JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdVVUZETVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTXhReXh4UWtGQmNVSXNRMEZEY2tJc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRFpDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzV1VGQldTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZFTEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTJZc1dVRkJXU3hEUVVGRExHRkJRV0VzUjBGQlJ5eE5RVUZOTEZkQlFWY3NRMEZETjBNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmJVSXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlEzUkZMRU5CUVVNN1UwRkRSanRMUVVORU8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJRenRSUVVONFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzFOQlF6VkRPMUZCUTBvc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZEYkVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXh6UWtGQmMwSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRM0pGTzBsQlJVUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xRkJRM3BDTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VVVGRGJrTXNVMEZCVXl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRE8wdEJRelZDTzFOQlFVMHNTVUZCU1N4VFFVRlRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTTdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZET3p0UlFVTjRSU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJzbGlkZXNob3ciLCJjcmVhdGVTbGlkZXNob3ciLCJhc3luYyIsImdldExpc3RJbWFnZXMiLCJQcm9taXNlIiwiYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwIiwiY29udGFpbmVyIiwiZ2V0U2hvcnRVUkwiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwidGV4dENvbnRlbnQiLCJzaG9ydGVuZWRVUkxzIiwidXJsIiwibGVuZ3RoIiwicGRVUkwiLCJmZXRjaCIsInRleHQiLCJlcnIiLCJlcnJvciIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGF0aG5hbWUiLCJocmVmIiwid2luZG93IiwibG9jYXRpb24iLCJzaG93SW1hZ2VzIiwiZ2V0U2V0dGluZyIsImlucHV0IiwidmFsdWUiLCJkZXRhaWxzIiwic3RhdGUiLCJzdGFydHNXaXRoIiwiaW1hZ2VzIiwiaSIsImltYWdlIiwiZW50cmllcyIsImFkZFNsaWRlIiwidG9TdHJpbmciLCJzbGlkZSIsImluY2x1ZGVzIiwiYnV0dG9ucyIsImxhYmVsIiwiY2VudGVyZWRJbWFnZSIsInRpdGxlIiwibWF0Y2giLCJzZXRBY3Rpdml0eSIsImRlbGV0ZUFsbFNsaWRlcyIsImdldFNsaWRlcyJdLCJzb3VyY2VSb290IjoiIn0=
undefined;