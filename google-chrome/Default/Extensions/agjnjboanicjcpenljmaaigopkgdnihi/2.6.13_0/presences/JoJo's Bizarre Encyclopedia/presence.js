var __webpack_exports__={};const presence=new Presence({clientId:"1007688410875564062"});function titleToUrl(e){return encodeURI(e.replace(/\s/g,"_"))}function urlToTitle(e){return decodeURI(e.replaceAll("_"," "))}function toTitleCase(e){return e.toLowerCase().split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")}function newsUrlToCategory(e){const t=(e=e.replace(/(^\/|\/$)/g,"")).split("/");return t.length>1&&(e=t[t.length-1]),(e=(e=(e=(e=toTitleCase(e=e.replaceAll("-"," "))).replace(/\bjojos\b/i,"JoJo's")).replace(/^interview$/i,"Interviews")).replace(/^exclusive$/i,"Exclusives")).replace(/^analysis$/i,"Analyses")}presence.on("UpdateData",(async()=>{let e={};const t=await presence.getSetting("showButtons"),{hostname:s,pathname:i,origin:o,href:a,search:l}=document.location,r=new URLSearchParams(l);if("jojowiki.com"===s)if(e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/J/JoJo's%20Bizarre%20Encyclopedia/assets/0.png",smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/J/JoJo's%20Bizarre%20Encyclopedia/assets/1.png",smallImageText:"jojowiki.com"},e.details="Browsing JoJoWiki",""===i||"/"===i||"/JoJo_Wiki"===i||"/index.php"===i&&!r.get("action"))e.state="Viewing homepage";else if(i.toLowerCase().includes("/index.php")){const t=r.get("search"),s=r.get("action");let i;i=r.get("title")?urlToTitle(r.get("title")):"Homepage",t?.length>0?e.state=`Searching "${t}"`:"history"===s?(e.state=`Viewing history: ${i}`,e.buttons=[{label:"View Page",url:`${o}/${titleToUrl(i)}`}]):"purge"===s&&(e.state=`Purging: ${i}`,e.buttons=[{label:"View Page",url:`${o}/${titleToUrl(i)}`}])}else if(i.toLowerCase().startsWith("/user:"))e.state=`Viewing User: ${i.match(/\/user:(.*)/i)[1]}`,e.buttons=[{label:"View User",url:a}];else if(i.toLowerCase().startsWith("/category:"))e.state=`Viewing Category: ${urlToTitle(i.match(/\/category:(.*)/i)[1])}`,e.buttons=[{label:"View Category",url:a}];else if(i.toLowerCase().startsWith("/file:"))e.state=`Viewing File: ${i.match(/\/file:(.*)/i)[1]}`,e.buttons=[{label:"View File",url:a}];else if(i.toLowerCase().startsWith("/special:"))if(i.toLowerCase().startsWith("/special:movepage/")){const t=urlToTitle(i.substring(18));e.state=`Moving: ${t}`,e.buttons=[{label:"View Page",url:`${o}/${titleToUrl(t)}`}]}else i.toLowerCase().startsWith("/special:notifications")?e.state="Checking Notifications":i.toLowerCase().startsWith("/special:preferences")&&(e.state="Viewing Settings");else if(i.toLowerCase().startsWith("/user_talk:")||i.toLowerCase().startsWith("/userwiki:")||i.toLowerCase().startsWith("/jojo_wiki:"));else if(i.toLowerCase().startsWith("/list_of_references_to_jojo"))e.state="Browsing JoJo References 👀",e.buttons=[{label:"Join The Fun!",url:a}];else if(i.toLowerCase().startsWith("/talk:"))e.state=`Discussing: ${document.querySelector("#firstHeading").innerHTML.replace(/^Talk:/,"")}`,e.buttons=[{label:"Join The Discussion!",url:a}];else{const t=urlToTitle(location.pathname.substring(1));r.get("veswitched")?.length||"edit"===r.get("veaction")?(e.state=`Editing: ${t}`,e.buttons=[{label:"View Page",url:`${o}/${titleToUrl(t)}`}]):(e.state=`Reading: ${t}`,e.buttons=[{label:"View Page",url:a}])}if("jojo-news.com"===s)if(e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/J/JoJo's%20Bizarre%20Encyclopedia/assets/0.png",smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/J/JoJo's%20Bizarre%20Encyclopedia/assets/2.png",smallImageText:"jojo-news.com"},e.details="Browsing News",""===i||"/"===i||"/JoJo_Wiki"===i)e.state="Viewing: Homepage";else if(i.match(/^\/\d+\/\d+\/\d+\//))e.state=`Reading ${document.querySelectorAll(".entry-title.entry--item.h2")[0].innerHTML}`,e.buttons=[{label:"Read Article",url:a}];else if("/fun/jojodle/"===i.toLowerCase())e.state="Playing JoJodle!",e.buttons=[{label:"Play Along!",url:a}];else if(i.toLowerCase().includes("/category")){let t=i.toLowerCase().match(/^\/category\/(.+)/)[1];t=newsUrlToCategory(t),e.state=`Browsing category: ${t}`}t||delete e.buttons,presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxvRkFDZkMsY0FBZSxvRkFDZkMsZUFBZ0IsaUJBRXBCZCxFQUFhZSxRQUFVLGdCQUNOLEtBQWJYLEdBQWdDLE1BQWJBLEdBQWlDLGVBQWJBLEVBQ3ZDSixFQUFhaUIsTUFBUSx5QkFDcEIsR0FBSWIsRUFBU21CLE1BQU0sc0JBQ3BCdkIsRUFBYWlCLE1BQVEsV0FBV1QsU0FBU21CLGlCQUFpQiwrQkFBK0IsR0FBR0QsWUFDNUYxQixFQUFhb0IsUUFBVSxDQUNuQixDQUNJQyxNQUFPLGVBQ1B2QyxJQUFLd0IsU0FJWixHQUErQixrQkFBM0JGLEVBQVNqQixjQUNkYSxFQUFhaUIsTUFBUSxtQkFDckJqQixFQUFhb0IsUUFBVSxDQUNuQixDQUNJQyxNQUFPLGNBQ1B2QyxJQUFLd0IsU0FJWixHQUFJRixFQUFTakIsY0FBYytCLFNBQVMsYUFBYyxDQUNuRCxJQUFJVSxFQUFXeEIsRUFBU2pCLGNBQWNvQyxNQUFNLHFCQUFxQixHQUNqRUssRUFBV2pDLGtCQUFrQmlDLEdBQzdCNUIsRUFBYWlCLE1BQVEsc0JBQXNCVyxHQUMvQyxDQUVDM0IsVUFDTUQsRUFBYW9CLFFBQ3hCOUMsU0FBU3VELFlBQVk3QixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjEwMDc2ODg0MTA4NzU1NjQwNjJcIixcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgcHJlc2VuY2VEYXRhID0ge307XG4gICAgY29uc3Qgc2hvd0J1dHRvbnMgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwic2hvd0J1dHRvbnNcIiksIHsgaG9zdG5hbWUsIHBhdGhuYW1lLCBvcmlnaW4sIGhyZWYsIHNlYXJjaCB9ID0gZG9jdW1lbnQubG9jYXRpb24sIHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKTtcbiAgICBpZiAoaG9zdG5hbWUgPT09IFwiam9qb3dpa2kuY29tXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0ovSm9KbydzJTIwQml6YXJyZSUyMEVuY3ljbG9wZWRpYS9hc3NldHMvMC5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9KL0pvSm8ncyUyMEJpemFycmUlMjBFbmN5Y2xvcGVkaWEvYXNzZXRzLzEucG5nXCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlVGV4dDogXCJqb2pvd2lraS5jb21cIixcbiAgICAgICAgfTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIEpvSm9XaWtpXCI7XG4gICAgICAgIGlmIChwYXRobmFtZSA9PT0gXCJcIiB8fFxuICAgICAgICAgICAgcGF0aG5hbWUgPT09IFwiL1wiIHx8XG4gICAgICAgICAgICBwYXRobmFtZSA9PT0gXCIvSm9Kb19XaWtpXCIgfHxcbiAgICAgICAgICAgIChwYXRobmFtZSA9PT0gXCIvaW5kZXgucGhwXCIgJiYgIXNlYXJjaFBhcmFtcy5nZXQoXCJhY3Rpb25cIikpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJWaWV3aW5nIGhvbWVwYWdlXCI7XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCIvaW5kZXgucGhwXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBzZWFyY2hQYXJhbXMuZ2V0KFwic2VhcmNoXCIpLCBhY3Rpb24gPSBzZWFyY2hQYXJhbXMuZ2V0KFwiYWN0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IHRpdGxlO1xuICAgICAgICAgICAgaWYgKHNlYXJjaFBhcmFtcy5nZXQoXCJ0aXRsZVwiKSlcbiAgICAgICAgICAgICAgICB0aXRsZSA9IHVybFRvVGl0bGUoc2VhcmNoUGFyYW1zLmdldChcInRpdGxlXCIpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aXRsZSA9IFwiSG9tZXBhZ2VcIjtcbiAgICAgICAgICAgIGlmIChzZWFyY2g/Lmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFNlYXJjaGluZyBcIiR7c2VhcmNofVwiYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJoaXN0b3J5XCIpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgVmlld2luZyBoaXN0b3J5OiAke3RpdGxlfWA7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgUGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtvcmlnaW59LyR7dGl0bGVUb1VybCh0aXRsZSl9YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSBcInB1cmdlXCIpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgUHVyZ2luZzogJHt0aXRsZX1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IFBhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYCR7b3JpZ2lufS8ke3RpdGxlVG9VcmwodGl0bGUpfWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXRobmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoXCIvdXNlcjpcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBWaWV3aW5nIFVzZXI6ICR7cGF0aG5hbWUubWF0Y2goL1xcL3VzZXI6KC4qKS9pKVsxXX1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IFVzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChcIi9jYXRlZ29yeTpcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBWaWV3aW5nIENhdGVnb3J5OiAke3VybFRvVGl0bGUocGF0aG5hbWUubWF0Y2goL1xcL2NhdGVnb3J5OiguKikvaSlbMV0pfWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgQ2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChcIi9maWxlOlwiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFZpZXdpbmcgRmlsZTogJHtwYXRobmFtZS5tYXRjaCgvXFwvZmlsZTooLiopL2kpWzFdfWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgRmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKFwiL3NwZWNpYWw6XCIpKSB7XG4gICAgICAgICAgICBpZiAocGF0aG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKFwiL3NwZWNpYWw6bW92ZXBhZ2UvXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB1cmxUb1RpdGxlKHBhdGhuYW1lLnN1YnN0cmluZygxOCkpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBNb3Zpbmc6ICR7dGl0bGV9YDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBQYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAke29yaWdpbn0vJHt0aXRsZVRvVXJsKHRpdGxlKX1gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoXCIvc3BlY2lhbDpub3RpZmljYXRpb25zXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQ2hlY2tpbmcgTm90aWZpY2F0aW9uc1wiO1xuICAgICAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKFwiL3NwZWNpYWw6cHJlZmVyZW5jZXNcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJWaWV3aW5nIFNldHRpbmdzXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKFwiL3VzZXJfdGFsazpcIikgfHxcbiAgICAgICAgICAgIHBhdGhuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChcIi91c2Vyd2lraTpcIikgfHxcbiAgICAgICAgICAgIHBhdGhuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChcIi9qb2pvX3dpa2k6XCIpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKFwiL2xpc3Rfb2ZfcmVmZXJlbmNlc190b19qb2pvXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJyb3dzaW5nIEpvSm8gUmVmZXJlbmNlcyDwn5GAXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkpvaW4gVGhlIEZ1biFcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChcIi90YWxrOlwiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYERpc2N1c3Npbmc6ICR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNmaXJzdEhlYWRpbmdcIilcbiAgICAgICAgICAgICAgICAuaW5uZXJIVE1MLnJlcGxhY2UoL15UYWxrOi8sIFwiXCIpfWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkpvaW4gVGhlIERpc2N1c3Npb24hXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdXJsVG9UaXRsZShsb2NhdGlvbi5wYXRobmFtZS5zdWJzdHJpbmcoMSkpO1xuICAgICAgICAgICAgaWYgKHNlYXJjaFBhcmFtcy5nZXQoXCJ2ZXN3aXRjaGVkXCIpPy5sZW5ndGggfHxcbiAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuZ2V0KFwidmVhY3Rpb25cIikgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEVkaXRpbmc6ICR7dGl0bGV9YDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBQYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAke29yaWdpbn0vJHt0aXRsZVRvVXJsKHRpdGxlKX1gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgUmVhZGluZzogJHt0aXRsZX1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IFBhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChob3N0bmFtZSA9PT0gXCJqb2pvLW5ld3MuY29tXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0ovSm9KbydzJTIwQml6YXJyZSUyMEVuY3ljbG9wZWRpYS9hc3NldHMvMC5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9KL0pvSm8ncyUyMEJpemFycmUlMjBFbmN5Y2xvcGVkaWEvYXNzZXRzLzIucG5nXCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlVGV4dDogXCJqb2pvLW5ld3MuY29tXCIsXG4gICAgICAgIH07XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBOZXdzXCI7XG4gICAgICAgIGlmIChwYXRobmFtZSA9PT0gXCJcIiB8fCBwYXRobmFtZSA9PT0gXCIvXCIgfHwgcGF0aG5hbWUgPT09IFwiL0pvSm9fV2lraVwiKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJWaWV3aW5nOiBIb21lcGFnZVwiO1xuICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5tYXRjaCgvXlxcL1xcZCtcXC9cXGQrXFwvXFxkK1xcLy8pKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgUmVhZGluZyAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZW50cnktdGl0bGUuZW50cnktLWl0ZW0uaDJcIilbMF0uaW5uZXJIVE1MfWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWQgQXJ0aWNsZVwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCIvZnVuL2pvam9kbGUvXCIpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiUGxheWluZyBKb0pvZGxlIVwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQbGF5IEFsb25nIVwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcIi9jYXRlZ29yeVwiKSkge1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKS5tYXRjaCgvXlxcL2NhdGVnb3J5XFwvKC4rKS8pWzFdO1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBuZXdzVXJsVG9DYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgQnJvd3NpbmcgY2F0ZWdvcnk6ICR7Y2F0ZWdvcnl9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNob3dCdXR0b25zKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuZnVuY3Rpb24gdGl0bGVUb1VybCh0aXRsZSkge1xuICAgIHJldHVybiBlbmNvZGVVUkkodGl0bGUucmVwbGFjZSgvXFxzL2csIFwiX1wiKSk7XG59XG5mdW5jdGlvbiB1cmxUb1RpdGxlKHVybCkge1xuICAgIHJldHVybiBkZWNvZGVVUkkodXJsLnJlcGxhY2VBbGwoXCJfXCIsIFwiIFwiKSk7XG59XG5mdW5jdGlvbiB0b1RpdGxlQ2FzZShwaHJhc2UpIHtcbiAgICByZXR1cm4gcGhyYXNlXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgLm1hcCh3b3JkID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuICAgICAgICAuam9pbihcIiBcIik7XG59XG5mdW5jdGlvbiBuZXdzVXJsVG9DYXRlZ29yeSh1cmwpIHtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvKF5cXC98XFwvJCkvZywgXCJcIik7XG4gICAgY29uc3QgdXJsU3BsaXQgPSB1cmwuc3BsaXQoXCIvXCIpO1xuICAgIGlmICh1cmxTcGxpdC5sZW5ndGggPiAxKVxuICAgICAgICB1cmwgPSB1cmxTcGxpdFt1cmxTcGxpdC5sZW5ndGggLSAxXTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpO1xuICAgIHVybCA9IHRvVGl0bGVDYXNlKHVybCk7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcYmpvam9zXFxiL2ksIFwiSm9KbydzXCIpO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKC9eaW50ZXJ2aWV3JC9pLCBcIkludGVydmlld3NcIik7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL15leGNsdXNpdmUkL2ksIFwiRXhjbHVzaXZlc1wiKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXmFuYWx5c2lzJC9pLCBcIkFuYWx5c2VzXCIpO1xuICAgIHJldHVybiB1cmw7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNPME5CUXk5Q0xFTkJRVU1zUTBGQlF6dEJRVVZJTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRWxCUVVrc1dVRkJXU3hIUVVGcFFpeEZRVUZGTEVOQlFVTTdTVUZGY0VNc1RVRkJUU3hYUVVGWExFZEJRVWNzVFVGQlRTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVNelJDeEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVOb1JTeFpRVUZaTEVkQlFVY3NTVUZCU1N4bFFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRk5VTXNTVUZCU1N4UlFVRlJMRXRCUVVzc1kwRkJZeXhGUVVGRk8xRkJRMmhETEZsQlFWa3NSMEZCUnp0WlFVTmtMR0ZCUVdFc1JVRkRXaXh0UmtGQmJVWTdXVUZEY0VZc1lVRkJZU3hGUVVOYUxHMUdRVUZ0Ump0WlFVTndSaXhqUVVGakxFVkJRVVVzWTBGQll6dFRRVU01UWl4RFFVRkRPMUZCUTBZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenRSUVVVelF5eEpRVU5ETEZGQlFWRXNTMEZCU3l4RlFVRkZPMWxCUTJZc1VVRkJVU3hMUVVGTExFZEJRVWM3V1VGRGFFSXNVVUZCVVN4TFFVRkxMRmxCUVZrN1dVRkRla0lzUTBGQlF5eFJRVUZSTEV0QlFVc3NXVUZCV1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVVXhSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8yRkJRM0JETEVsQlFVa3NVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlR0WlFVTjJSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVONFF5eE5RVUZOTEVkQlFVY3NXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVVZ5UXl4SlFVRkpMRXRCUVVzc1EwRkJRenRaUVVOV0xFbEJRVWtzV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNN1owSkJRelZDTEV0QlFVc3NSMEZCUnl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPenRuUWtGRE1VTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJRenRaUVVWNFFpeEpRVUZKTEUxQlFVMHNSVUZCUlN4TlFVRk5MRWRCUVVjc1EwRkJRenRuUWtGQlJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR05CUVdNc1RVRkJUU3hIUVVGSExFTkJRVU03YVVKQlEyaEZMRWxCUVVrc1RVRkJUU3hMUVVGTExGTkJRVk1zUlVGQlJUdG5Ra0ZET1VJc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHZRa0ZCYjBJc1MwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlEycEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3YjBKQlEzUkNPM2RDUVVORExFdEJRVXNzUlVGQlJTeFhRVUZYTzNkQ1FVTnNRaXhIUVVGSExFVkJRVVVzUjBGQlJ5eE5RVUZOTEVsQlFVa3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8zRkNRVU55UXp0cFFrRkRSQ3hEUVVGRE8yRkJRMFk3YVVKQlFVMHNTVUZCU1N4TlFVRk5MRXRCUVVzc1QwRkJUeXhGUVVGRk8yZENRVU01UWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGbEJRVmtzUzBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUTNwRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdiMEpCUTNSQ08zZENRVU5ETEV0QlFVc3NSVUZCUlN4WFFVRlhPM2RDUVVOc1FpeEhRVUZITEVWQlFVVXNSMEZCUnl4TlFVRk5MRWxCUVVrc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzNGQ1FVTnlRenRwUWtGRFJDeERRVUZETzJGQlEwWTdVMEZEUkR0aFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRaUVVOMlJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR2xDUVVGcFFpeFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdXVUZETVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dG5Ra0ZEZEVJN2IwSkJRME1zUzBGQlN5eEZRVUZGTEZkQlFWYzdiMEpCUTJ4Q0xFZEJRVWNzUlVGQlJTeEpRVUZKTzJsQ1FVTlVPMkZCUTBRc1EwRkJRenRUUVVOR08yRkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTzFsQlF6TkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzY1VKQlFYRkNMRlZCUVZVc1EwRkRia1FzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVTnlReXhGUVVGRkxFTkJRVU03V1VGRFNpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMmRDUVVOMFFqdHZRa0ZEUXl4TFFVRkxMRVZCUVVVc1pVRkJaVHR2UWtGRGRFSXNSMEZCUnl4RlFVRkZMRWxCUVVrN2FVSkJRMVE3WVVGRFJDeERRVUZETzFOQlEwWTdZVUZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1dVRkRka1FzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4cFFrRkJhVUlzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFsQlF6RkZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3WjBKQlEzUkNPMjlDUVVORExFdEJRVXNzUlVGQlJTeFhRVUZYTzI5Q1FVTnNRaXhIUVVGSExFVkJRVVVzU1VGQlNUdHBRa0ZEVkR0aFFVTkVMRU5CUVVNN1UwRkRSanRoUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJUdFpRVU14UkN4SlFVRkpMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUlVGQlJUdG5Ra0ZETlVRc1RVRkJUU3hMUVVGTExFZEJRVWNzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYWtRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFhRVUZYTEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVONFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFqdDNRa0ZEUXl4TFFVRkxMRVZCUVVVc1YwRkJWenQzUWtGRGJFSXNSMEZCUnl4RlFVRkZMRWRCUVVjc1RVRkJUU3hKUVVGSkxGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0eFFrRkRja003YVVKQlEwUXNRMEZCUXp0aFFVTkdPMmxDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRlZCUVZVc1EwRkJReXgzUWtGQmQwSXNRMEZCUXp0blFrRkRja1VzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4M1FrRkJkMElzUTBGQlF6dHBRa0ZETVVNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMSE5DUVVGelFpeERRVUZETzJkQ1FVTnFSU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8xTkJRM3BETzJGQlFVMHNTVUZEVGl4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTm9SQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmxCUVZrc1EwRkJRenRaUVVNdlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExHRkJRV0VzUTBGQlF5eEZRVU12UXp0VFFVVkVPMkZCUVUwc1NVRkRUaXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRFpDUVVFMlFpeERRVUZETEVWQlF5OUVPMWxCUTBRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5dzJRa0ZCTmtJc1EwRkJRenRaUVVOdVJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMmRDUVVOMFFqdHZRa0ZEUXl4TFFVRkxMRVZCUVVVc1pVRkJaVHR2UWtGRGRFSXNSMEZCUnl4RlFVRkZMRWxCUVVrN2FVSkJRMVE3WVVGRFJDeERRVUZETzFOQlEwWTdZVUZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1dVRkRka1FzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4bFFVRmxMRkZCUVZFN2FVSkJRekZETEdGQlFXRXNRMEZCUXl4bFFVRmxMRU5CUVVNN2FVSkJRemxDTEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdXVUZEY0VNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dG5Ra0ZEZEVJN2IwSkJRME1zUzBGQlN5eEZRVUZGTEhOQ1FVRnpRanR2UWtGRE4wSXNSMEZCUnl4RlFVRkZMRWxCUVVrN2FVSkJRMVE3WVVGRFJDeERRVUZETzFOQlEwWTdZVUZCVFR0WlFVTk9MRTFCUVUwc1MwRkJTeXhIUVVGSExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJYcEVMRWxCUTBNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlN4TlFVRk5PMmRDUVVOMFF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFMUJRVTBzUlVGRGRFTTdaMEpCUTBRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVONlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFqdDNRa0ZEUXl4TFFVRkxMRVZCUVVVc1YwRkJWenQzUWtGRGJFSXNSMEZCUnl4RlFVRkZMRWRCUVVjc1RVRkJUU3hKUVVGSkxGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0eFFrRkRja003YVVKQlEwUXNRMEZCUXp0aFFVTkdPMmxDUVVGTk8yZENRVU5PTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1dVRkJXU3hMUVVGTExFVkJRVVVzUTBGQlF6dG5Ra0ZEZWtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dHZRa0ZEZEVJN2QwSkJRME1zUzBGQlN5eEZRVUZGTEZkQlFWYzdkMEpCUTJ4Q0xFZEJRVWNzUlVGQlJTeEpRVUZKTzNGQ1FVTlVPMmxDUVVORUxFTkJRVU03WVVGRFJqdFRRVU5FTzB0QlEwUTdTVUZEUkN4SlFVRkpMRkZCUVZFc1MwRkJTeXhsUVVGbExFVkJRVVU3VVVGRGFrTXNXVUZCV1N4SFFVRkhPMWxCUTJRc1lVRkJZU3hGUVVOYUxHMUdRVUZ0Ump0WlFVTndSaXhoUVVGaExFVkJRMW9zYlVaQlFXMUdPMWxCUTNCR0xHTkJRV01zUlVGQlJTeGxRVUZsTzFOQlF5OUNMRU5CUVVNN1VVRkRSaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXp0UlFVVjJReXhKUVVGSkxGRkJRVkVzUzBGQlN5eEZRVUZGTEVsQlFVa3NVVUZCVVN4TFFVRkxMRWRCUVVjc1NVRkJTU3hSUVVGUkxFdEJRVXNzV1VGQldUdFpRVU51UlN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPMkZCUTNKRExFbEJRVWtzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eEZRVUZGTzFsQlF6bERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVjBGRGNFSXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETERaQ1FVRTJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZETjBRc1JVRkJSU3hEUVVGRE8xbEJRMGdzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUk3YjBKQlEwTXNTMEZCU3l4RlFVRkZMR05CUVdNN2IwSkJRM0pDTEVkQlFVY3NSVUZCUlN4SlFVRkpPMmxDUVVOVU8yRkJRMFFzUTBGQlF6dFRRVU5HTzJGQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFdEJRVXNzWlVGQlpTeEZRVUZGTzFsQlEzUkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1dVRkRlRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUk3YjBKQlEwTXNTMEZCU3l4RlFVRkZMR0ZCUVdFN2IwSkJRM0JDTEVkQlFVY3NSVUZCUlN4SlFVRkpPMmxDUVVOVU8yRkJRMFFzUTBGQlF6dFRRVU5HTzJGQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMWxCUTNoRUxFbEJRVWtzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVVZ3UlN4UlFVRlJMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkZka01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4elFrRkJjMElzVVVGQlVTeEZRVUZGTEVOQlFVTTdVMEZEZEVRN1MwRkRSRHRKUVVORUxFbEJRVWtzUTBGQlF5eFhRVUZYTzFGQlFVVXNUMEZCVHl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRemxETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03UVVGRGNFTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkZTQ3hUUVVGVExGVkJRVlVzUTBGQlF5eExRVUZoTzBsQlEyaERMRTlCUVU4c1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE4wTXNRMEZCUXp0QlFVTkVMRk5CUVZNc1ZVRkJWU3hEUVVGRExFZEJRVmM3U1VGRE9VSXNUMEZCVHl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNMVF5eERRVUZETzBGQlEwUXNVMEZCVXl4WFFVRlhMRU5CUVVNc1RVRkJZenRKUVVOc1F5eFBRVUZQTEUxQlFVMDdVMEZEV0N4WFFVRlhMRVZCUVVVN1UwRkRZaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETzFOQlExWXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM3BFTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOaUxFTkJRVU03UVVGRFJDeFRRVUZUTEdsQ1FVRnBRaXhEUVVGRExFZEJRVmM3U1VGRGNrTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNCRExFMUJRVTBzVVVGQlVTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRmFFTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU03VVVGQlJTeEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGTjBRc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJReTlDTEVkQlFVY3NSMEZCUnl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRmRrSXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUXpGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dEpRVU5vUkN4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eGpRVUZqTEVWQlFVVXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRhRVFzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzBsQlJUZERMRTlCUVU4c1IwRkJSeXhEUVVGRE8wRkJRMW9zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwidGl0bGVUb1VybCIsInRpdGxlIiwiZW5jb2RlVVJJIiwicmVwbGFjZSIsInVybFRvVGl0bGUiLCJ1cmwiLCJkZWNvZGVVUkkiLCJyZXBsYWNlQWxsIiwidG9UaXRsZUNhc2UiLCJwaHJhc2UiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwibWFwIiwid29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwibmV3c1VybFRvQ2F0ZWdvcnkiLCJ1cmxTcGxpdCIsImxlbmd0aCIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJzaG93QnV0dG9ucyIsImdldFNldHRpbmciLCJob3N0bmFtZSIsInBhdGhuYW1lIiwib3JpZ2luIiwiaHJlZiIsInNlYXJjaCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsYXJnZUltYWdlS2V5Iiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiZGV0YWlscyIsImdldCIsInN0YXRlIiwiaW5jbHVkZXMiLCJhY3Rpb24iLCJidXR0b25zIiwibGFiZWwiLCJzdGFydHNXaXRoIiwibWF0Y2giLCJzdWJzdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwicXVlcnlTZWxlY3RvckFsbCIsImNhdGVnb3J5Iiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;