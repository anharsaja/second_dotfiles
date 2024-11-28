var __webpack_exports__={};const presence=new Presence({clientId:"809083630117978123"}),browsingTimestamp=Math.round(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/Hytale/assets/logo.jpg",startTimestamp:browsingTimestamp};if("/"===document.location.pathname)e.details="Viewing the main page";else if("/news"===document.location.pathname)e.details="Browsing Blog Posts";else if(document.location.pathname.includes("/news/archive/"))e.details="Browsing Blog Archives",e.state=`From ${document.querySelector(".subHeading").textContent}`;else if(document.location.pathname.includes("/news/"))e.details="Reading Blog Post",e.state=document.querySelector(".post__heading").textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";else switch(document.location.pathname){case"/media":e.details="Browsing Hytale media",document.location.hash.includes("#screenshots")?e.state="Screenshot":document.location.hash.includes("#desktopWallpapers")?e.state="Desktop Wallpaper":document.location.hash.includes("#mobileWallpapers")?e.state="Mobile Wallpaper":document.location.hash.includes("#conceptArt")?e.state="Concept Art":document.location.hash.includes("#videos")?e.state="Video":document.location.hash.includes("#clips")&&(e.state="Clip");break;case"/game":e.details="Learning more about",e.state="the game";break;case"/community":e.details="Viewing the",e.state="Community page";break;case"/jobs":e.details="Viewing Job Openings";break;case"/jobs/data-protection-statement":e.details="Reading the",e.state="Data protection statement",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;default:if(document.location.pathname.includes("/jobs/"))e.details="Viewing Job",e.state=document.querySelector(".pageHeading").textContent;else switch(document.location.pathname){case"/signup":e.details="Signing up for the beta",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/writing.png";break;case"/about":e.details="Learning more about",e.state="Hypixel Studios","#contact"===document.location.hash?(e.details="Viewing the",e.state="Contact information"):"#press"===document.location.hash&&(e.details="Viewing the",e.state="Press information");break;case"/cookie-policy":switch(e.details="Reading the Cookie Policy",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",document.location.hash){case"#what-is-cookie":e.state="What is a Cookie?";break;case"#why-are-cookies-used":e.state="Why are Cookies used?";break;case"#who-places-cookies":e.state="Who places Cookies";break;case"#how-manage-cookies":e.state="How can I manage cookies?";break;case"#do-not-track-signals":e.state="Do-not-track signals";break;case"#policy-updates":e.state="Policy updates";break;case"#contact-us":e.state="Contact us"}break;case"/privacy":e.details="Viewing the",e.state="Privacy Policy",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;case"/legal":e.details="Viewing the",e.state="Legal Information",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;case"/corporate-governance":e.details="Reading about",e.state="Corporate Governance",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;case"/supersecretpage":e.details="Viewing a",e.state="Super Secret Page";break;default:e.details="Viewing an",e.state="Unknown page"}}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0IsTUFFSixJQUFLLFNBQ0RYLEVBQWFNLFFBQVUsY0FDdkJOLEVBQWFRLE1BQVEsb0JBQ3JCUixFQUFhVyxjQUFnQixrREFDN0IsTUFFSixJQUFLLHdCQUNEWCxFQUFhTSxRQUFVLGdCQUN2Qk4sRUFBYVEsTUFBUSx1QkFDckJSLEVBQWFXLGNBQWdCLGtEQUM3QixNQUVKLElBQUssbUJBQ0RYLEVBQWFNLFFBQVUsWUFDdkJOLEVBQWFRLE1BQVEsb0JBQ3JCLE1BRUosUUFDSVIsRUFBYU0sUUFBVSxhQUN2Qk4sRUFBYVEsTUFBUSxnQkFNekNSLEVBQWFNLFFBQ2JoQixTQUFTdUIsWUFBWWIsR0FFckJWLFNBQVN1QixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjgwOTA4MzYzMDExNzk3ODEyM1wiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0gvSHl0YWxlL2Fzc2V0cy9sb2dvLmpwZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfTtcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgbWFpbiBwYWdlXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL25ld3NcIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIEJsb2cgUG9zdHNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9uZXdzL2FyY2hpdmUvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBCbG9nIEFyY2hpdmVzXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBGcm9tICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJIZWFkaW5nXCIpLnRleHRDb250ZW50fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL25ld3MvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIEJsb2cgUG9zdFwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvc3RfX2hlYWRpbmdcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIi9tZWRpYVwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIEh5dGFsZSBtZWRpYVwiO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoLmluY2x1ZGVzKFwiI3NjcmVlbnNob3RzXCIpKVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlNjcmVlbnNob3RcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoLmluY2x1ZGVzKFwiI2Rlc2t0b3BXYWxscGFwZXJzXCIpKVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkRlc2t0b3AgV2FsbHBhcGVyXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaC5pbmNsdWRlcyhcIiNtb2JpbGVXYWxscGFwZXJzXCIpKVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIk1vYmlsZSBXYWxscGFwZXJcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoLmluY2x1ZGVzKFwiI2NvbmNlcHRBcnRcIikpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQ29uY2VwdCBBcnRcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoLmluY2x1ZGVzKFwiI3ZpZGVvc1wiKSlcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJWaWRlb1wiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhhc2guaW5jbHVkZXMoXCIjY2xpcHNcIikpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQ2xpcFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9nYW1lXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTGVhcm5pbmcgbW9yZSBhYm91dFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwidGhlIGdhbWVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvY29tbXVuaXR5XCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGVcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkNvbW11bml0eSBwYWdlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL2pvYnNcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEpvYiBPcGVuaW5nc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9qb2JzL2RhdGEtcHJvdGVjdGlvbi1zdGF0ZW1lbnRcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRoZVwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiRGF0YSBwcm90ZWN0aW9uIHN0YXRlbWVudFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvam9icy9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgSm9iXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VIZWFkaW5nXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9zaWdudXBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTaWduaW5nIHVwIGZvciB0aGUgYmV0YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy93cml0aW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9hYm91dFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxlYXJuaW5nIG1vcmUgYWJvdXRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkh5cGl4ZWwgU3R1ZGlvc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoID09PSBcIiNjb250YWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQ29udGFjdCBpbmZvcm1hdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoID09PSBcIiNwcmVzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlByZXNzIGluZm9ybWF0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9jb29raWUtcG9saWN5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgQ29va2llIFBvbGljeVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiI3doYXQtaXMtY29va2llXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiV2hhdCBpcyBhIENvb2tpZT9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIjd2h5LWFyZS1jb29raWVzLXVzZWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJXaHkgYXJlIENvb2tpZXMgdXNlZD9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIjd2hvLXBsYWNlcy1jb29raWVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiV2hvIHBsYWNlcyBDb29raWVzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiI2hvdy1tYW5hZ2UtY29va2llc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkhvdyBjYW4gSSBtYW5hZ2UgY29va2llcz9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIjZG8tbm90LXRyYWNrLXNpZ25hbHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJEby1ub3QtdHJhY2sgc2lnbmFsc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiNwb2xpY3ktdXBkYXRlc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlBvbGljeSB1cGRhdGVzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiI2NvbnRhY3QtdXNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkNvbnRhY3QgdXNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvcHJpdmFjeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJQcml2YWN5IFBvbGljeVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9sZWdhbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJMZWdhbCBJbmZvcm1hdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9jb3Jwb3JhdGUtZ292ZXJuYW5jZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYWJvdXRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkNvcnBvcmF0ZSBHb3Zlcm5hbmNlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL3N1cGVyc2VjcmV0cGFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiU3VwZXIgU2VjcmV0IFBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiVW5rbm93biBwYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGJFTXNZVUZCWVN4RlFVTmFMRFpFUVVFMlJEdFJRVU01UkN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRU5CUVVNN1NVRkZSaXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWRCUVVjN1VVRkRja01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4MVFrRkJkVUlzUTBGQlF6dFRRVU16UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeExRVUZMTEU5QlFVODdVVUZET1VNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenRUUVVONlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhGUVVGRk8xRkJReTlFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdVVUZEYUVRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEZkQlEzWkRMRVZCUVVVc1EwRkJRenRMUVVOSU8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdVVUZEZWtRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenRSUVVNelF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE1VVXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdTMEZETlVNN1UwRkJUVHRSUVVOT0xGRkJRVkVzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVN1dVRkRia01zUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRaQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8yZENRVU12UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNN2IwSkJRMnhFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1dVRkJXU3hEUVVGRE8zRkNRVU01UWl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF6dHZRa0ZETjBRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenR4UWtGRGNrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03YjBKQlF6VkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN2NVSkJRM0JETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXp0dlFrRkRkRVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4aFFVRmhMRU5CUVVNN2NVSkJReTlDTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXp0dlFrRkRiRVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNN2NVSkJRM3BDTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0dlFrRkRha1FzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNN1owSkJSVGRDTEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlEySXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0blFrRkROME1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4VlFVRlZMRU5CUVVNN1owSkJSV2hETEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc1dVRkJXU3hEUVVGRExFTkJRVU03WjBKQlEyeENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzJkQ1FVTnlReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8yZENRVVYwUXl4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzJkQ1FVTmlMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1owSkJRemxETEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc2FVTkJRV2xETEVOQlFVTXNRMEZCUXp0blFrRkRka01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4aFFVRmhMRU5CUVVNN1owSkJRM0pETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc01rSkJRVEpDTEVOQlFVTTdaMEpCUTJwRUxGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8yZENRVVUxUXl4TlFVRk5PMkZCUTA0N1dVRkRSRHRuUWtGRFF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0dlFrRkRiRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4aFFVRmhMRU5CUVVNN2IwSkJRM0pETEZsQlFWa3NRMEZCUXl4TFFVRkxPM2RDUVVOcVFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dHBRa0ZEY0VRN2NVSkJRVTA3YjBKQlEwNHNVVUZCVVN4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJUdDNRa0ZEYmtNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6czBRa0ZEWml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPelJDUVVOcVJDeFpRVUZaTEVOQlFVTXNZVUZCWVN4dlJFRkJhVUlzUTBGQlF6czBRa0ZGTlVNc1RVRkJUVHQ1UWtGRFRqdDNRa0ZEUkN4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRE96UkNRVU5rTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTTdORUpCUXpkRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03TkVKQlEzWkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEV0QlFVc3NWVUZCVlN4RlFVRkZPMmREUVVNeFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR0ZCUVdFc1EwRkJRenRuUTBGRGNrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh4UWtGQmNVSXNRMEZCUXpzMlFrRkRNME03YVVOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUzBGQlN5eFJRVUZSTEVWQlFVVTdaME5CUXk5RExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZVUZCWVN4RFFVRkRPMmREUVVOeVF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRzFDUVVGdFFpeERRVUZET3paQ1FVTjZRenMwUWtGRlJDeE5RVUZOTzNsQ1FVTk9PM2RDUVVORUxFdEJRVXNzWjBKQlFXZENMRU5CUVVNc1EwRkJRenMwUWtGRGRFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd5UWtGQk1rSXNRMEZCUXpzMFFrRkRia1FzV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03TkVKQlF6VkRMRkZCUVZFc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVTdaME5CUXk5Q0xFdEJRVXNzYVVKQlFXbENMRU5CUVVNc1EwRkJRenR2UTBGRGRrSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0dlEwRkRla01zVFVGQlRUdHBRMEZEVGp0blEwRkRSQ3hMUVVGTExIVkNRVUYxUWl4RFFVRkRMRU5CUVVNN2IwTkJRemRDTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdiME5CUXpkRExFMUJRVTA3YVVOQlEwNDdaME5CUTBRc1MwRkJTeXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMjlEUVVNelFpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRzlDUVVGdlFpeERRVUZETzI5RFFVTXhReXhOUVVGTk8ybERRVU5PTzJkRFFVTkVMRXRCUVVzc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0dlEwRkRNMElzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl3eVFrRkJNa0lzUTBGQlF6dHZRMEZEYWtRc1RVRkJUVHRwUTBGRFRqdG5RMEZEUkN4TFFVRkxMSFZDUVVGMVFpeERRVUZETEVOQlFVTTdiME5CUXpkQ0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03YjBOQlF6VkRMRTFCUVUwN2FVTkJRMDQ3WjBOQlEwUXNTMEZCU3l4cFFrRkJhVUlzUTBGQlF5eERRVUZETzI5RFFVTjJRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8yOURRVU4wUXl4TlFVRk5PMmxEUVVOT08yZERRVU5FTEV0QlFVc3NZVUZCWVR0dlEwRkRha0k3ZDBOQlEwTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhaUVVGWkxFTkJRVU03Y1VOQlJXeERPMjlEUVVORUxFMUJRVTA3TmtKQlExQTdORUpCUlVRc1RVRkJUVHQ1UWtGRFRqdDNRa0ZEUkN4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRE96UkNRVU5vUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHRkJRV0VzUTBGQlF6czBRa0ZEY2tNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenMwUWtGRGRFTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdORUpCUlRWRExFMUJRVTA3ZVVKQlEwNDdkMEpCUTBRc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6czBRa0ZEWkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHRkJRV0VzUTBGQlF6czBRa0ZEY2tNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenMwUWtGRGVrTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdORUpCUlRWRExFMUJRVTA3ZVVKQlEwNDdkMEpCUTBRc1MwRkJTeXgxUWtGQmRVSXNRMEZCUXl4RFFVRkRPelJDUVVNM1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR1ZCUVdVc1EwRkJRenMwUWtGRGRrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh6UWtGQmMwSXNRMEZCUXpzMFFrRkROVU1zV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03TkVKQlJUVkRMRTFCUVUwN2VVSkJRMDQ3ZDBKQlEwUXNTMEZCU3l4clFrRkJhMElzUTBGQlF5eERRVUZET3pSQ1FVTjRRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXpzMFFrRkRia01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4dFFrRkJiVUlzUTBGQlF6czBRa0ZGZWtNc1RVRkJUVHQ1UWtGRFRqdDNRa0ZEUkN4UFFVRlBMRU5CUVVNc1EwRkJRenMwUWtGRFVpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJRenMwUWtGRGNFTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhqUVVGakxFTkJRVU03ZVVKQlEzQkRPM0ZDUVVORU8ybENRVU5FTzFOQlEwWTdTMEZEUkR0SlFVVkVMRWxCUVVrc1dVRkJXU3hEUVVGRExFOUJRVTg3VVVGQlJTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE96dFJRVU40UkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE4wSXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImRldGFpbHMiLCJpbmNsdWRlcyIsInN0YXRlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic21hbGxJbWFnZUtleSIsImhhc2giLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;