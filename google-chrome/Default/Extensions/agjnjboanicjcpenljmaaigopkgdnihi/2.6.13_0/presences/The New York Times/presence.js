var __webpack_exports__={};const presence=new Presence({clientId:"813781191308083239"}),time=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e=document.title.replace(" - The New York Times",""),t=await getSettings(),{pathname:a,hostname:s,href:i,search:n}=window.location,r=a.split("/"),c={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/The%20New%20York%20Times/assets/logo.jpg",startTimestamp:time};if("www.nytimes.com"===s)if(t.buttons&&!t.privacy&&(c.buttons=[{label:"View Page",url:i}]),("international"!==r[1]&&"ca"!==r[1]&&"es"!==r[1]||r[2])&&r[1]){if(a.includes("/interactive/"))c.details="Viewing an Interactive:",t.privacy||(c.state=e);else if(a.includes("/section/")||a.includes("/spotlight/podcasts"))c.details="Viewing a Section Page:",t.privacy||(c.state=e);else if(a.includes("/destination/"))c.details="Viewing a Destination Page:",t.privacy||(c.state=e);else if(a.includes("/reviews/"))c.details="Viewing a Review Page:",t.privacy||(c.state=e);else if(a.includes("/column/"))c.details="Viewing a Column Page:",t.privacy||(c.state=e);else if(a.includes("/search"))c.details=t.privacy?"Searching":"Searching for:",t.privacy||(c.state=new URLSearchParams(n).get("query")),t.buttons&&!t.privacy&&(c.buttons=[{label:"Show Search Results",url:i}]);else if(a.includes("/video/"))c.details="Viewing a Video Section:",c.state=e;else if(hasDatePath(a)&&a.includes("/podcasts/")){const a=document.querySelector("audio"),s=document.querySelector("span.css-1f76qa2 span"),n=document.querySelector("span.css-1f76qa2 img");c.details=t.privacy?"Listening to a Podcast":"Listening to a Podcast:",s&&!t.privacy&&(c.state=`${s.textContent}: ${e}`),a&&!isNaN(a.duration)&&([c.startTimestamp,c.endTimestamp]=presence.getTimestampsfromMedia(a),a.paused&&(delete c.endTimestamp,c.startTimestamp=time)),t.buttons&&!t.privacy&&(c.buttons=[{label:"Listen to Podcast",url:i}]),t.podcastLogo&&!t.privacy&&n&&(c.largeImageKey=await getShortURL(n.src))}else if("by"===r[1]&&r[2]){const e=document.querySelector("h1.css-1uxfi68.e16wpn5v0")?.textContent??"Unknown";c.details="Viewing an Author Page:",c.state=e,document.querySelector("div.css-cnx41t img")&&(c.smallImageKey=await getShortURL(document.querySelector("div.css-cnx41t img").src),c.smallImageText=e)}else if(hasDatePath(a)&&r[4]){const a=document.querySelector("img.css-1bfqq7u.ey68jwv2"),s=document.querySelector("p.css-aknsld.e1jsehar1"),n=document.querySelector('h1[data-testid="headline"]')?.textContent??e,r=document.querySelector('span span.css-bwjyn0.live-blog-header-live-label[data-active="true"]'),o=document.querySelector("span.css-233int.e16638kd4");c.details=t.privacy?"Reading an Article":!t.moreDetails||r||o?"Reading an Article:":n,t.privacy||(c.state=!t.moreDetails||r||o?n:`${s?.textContent??`By ${a?.title??"Unknown"}`}, ${document.querySelector("time span")?.textContent}`),t.buttons&&!t.privacy&&(c.buttons=[{label:"Read Article",url:i}]),r?(c.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/live.png",c.smallImageText="Live"):t.articleAuthor&&!t.privacy&&a&&(c.smallImageKey=await getShortURL(a.src),c.smallImageText=s?.textContent??`By ${a.title}`)}}else c.details="Viewing Home Page";else if("myaccount.nytimes.com"===s&&(c.details="Managing Account",!t.privacy))switch(r[2]){case"subscription":c.state="Subscription Overview";break;case"billing":c.state="Billing History";break;case"settings":c.state="Emails and Settings";break;case"change-email":c.state="Change Email";break;case"forgot-password":c.state="Reset Password";break;default:"get-started"===r[1]&&"manage-billing"===r[2]&&(c.state="Payment details")}c.state||delete c.state,c.details?presence.setActivity(c):presence.setActivity()}));const shortenedURLs={};async function getShortURL(e){if(!e||e.length<256)return e;if(shortenedURLs[e])return shortenedURLs[e];try{const t=await(await fetch(`https://pd.premid.app/create/${e}`)).text();return shortenedURLs[e]=t,t}catch(t){return presence.error(t),e}}function hasDatePath(e){return/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/g.test(e)}async function getSettings(){const e=await Promise.all([presence.getSetting("privacy"),presence.getSetting("buttons"),presence.getSetting("podcastLogo"),presence.getSetting("articleAuthor"),presence.getSetting("moreDetails")]),t=["privacy","buttons","podcastLogo","articleAuthor","moreDetails"],a={};for(const[s,i]of t.entries())a[i]=e[s];return a}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsZUFDckIsTUFFSixJQUFLLGtCQUNEVCxFQUFhUyxNQUFRLGlCQUNyQixNQUVKLFFBQ29CLGdCQUFaWCxFQUFLLElBQW9DLG1CQUFaQSxFQUFLLEtBQ2xDRSxFQUFhUyxNQUFRLG1CQUlwQ1QsRUFBYVMsY0FDUFQsRUFBYVMsTUFDbkJULEVBQWFRLFFBR2QvQixTQUFTeUQsWUFBWWxDLEdBRnJCdkIsU0FBU3lELGFBRXlCLElBRTFDLE1BQU1DLGNBQWdCLENBQUMsRUFDdkJqRCxlQUFlcUMsWUFBWWpCLEdBQ3ZCLElBQUtBLEdBQU9BLEVBQUk4QixPQUFTLElBQ3JCLE9BQU85QixFQUNYLEdBQUk2QixjQUFjN0IsR0FDZCxPQUFPNkIsY0FBYzdCLEdBQ3pCLElBQ0ksTUFBTStCLGNBQXFCQyxNQUFNLGdDQUFnQ2hDLE1BQVFpQyxPQUV6RSxPQURBSixjQUFjN0IsR0FBTytCLEVBQ2RBLENBS1gsQ0FIQSxNQUFPRyxHQUVILE9BREEvRCxTQUFTZ0UsTUFBTUQsR0FDUmxDLENBQ1gsQ0FDSixDQUNBLFNBQVNNLFlBQVlwQixHQUNqQixNQUFPLGdDQUFnQ2tELEtBQUtsRCxFQUNoRCxDQUNBTixlQUFlSyxjQUNYLE1BQU1vRCxRQUFpQkMsUUFBUUMsSUFBSSxDQUMvQnBFLFNBQVNxRSxXQUFXLFdBQ3BCckUsU0FBU3FFLFdBQVcsV0FDcEJyRSxTQUFTcUUsV0FBVyxlQUNwQnJFLFNBQVNxRSxXQUFXLGlCQUNwQnJFLFNBQVNxRSxXQUFXLGlCQUNwQkMsRUFBUSxDQUNSLFVBQ0EsVUFDQSxjQUNBLGdCQUNBLGVBQ0RDLEVBQU0sQ0FBQyxFQUNWLElBQUssTUFBT0MsRUFBR0MsS0FBU0gsRUFBTUksVUFDMUJILEVBQUlFLEdBQVFQLEVBQVNNLEdBQ3pCLE9BQU9ELENBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODEzNzgxMTkxMzA4MDgzMjM5XCIsXG59KSwgdGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnRpdGxlLnJlcGxhY2UoXCIgLSBUaGUgTmV3IFlvcmsgVGltZXNcIiwgXCJcIiksIHNldHRpbmcgPSBhd2FpdCBnZXRTZXR0aW5ncygpLCB7IHBhdGhuYW1lLCBob3N0bmFtZSwgaHJlZiwgc2VhcmNoIH0gPSB3aW5kb3cubG9jYXRpb24sIHBhdGggPSBwYXRobmFtZS5zcGxpdChcIi9cIiksIHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVGhlJTIwTmV3JTIwWW9yayUyMFRpbWVzL2Fzc2V0cy9sb2dvLmpwZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogdGltZSxcbiAgICB9O1xuICAgIGlmIChob3N0bmFtZSA9PT0gXCJ3d3cubnl0aW1lcy5jb21cIikge1xuICAgICAgICBpZiAoc2V0dGluZy5idXR0b25zICYmICFzZXR0aW5nLnByaXZhY3kpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBQYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKChwYXRoWzFdID09PSBcImludGVybmF0aW9uYWxcIiB8fCBwYXRoWzFdID09PSBcImNhXCIgfHwgcGF0aFsxXSA9PT0gXCJlc1wiKSAmJlxuICAgICAgICAgICAgIXBhdGhbMl0pIHx8XG4gICAgICAgICAgICAhcGF0aFsxXSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEhvbWUgUGFnZVwiO1xuICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9pbnRlcmFjdGl2ZS9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFuIEludGVyYWN0aXZlOlwiO1xuICAgICAgICAgICAgaWYgKCFzZXR0aW5nLnByaXZhY3kpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvc2VjdGlvbi9cIikgfHxcbiAgICAgICAgICAgIHBhdGhuYW1lLmluY2x1ZGVzKFwiL3Nwb3RsaWdodC9wb2RjYXN0c1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBTZWN0aW9uIFBhZ2U6XCI7XG4gICAgICAgICAgICBpZiAoIXNldHRpbmcucHJpdmFjeSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9kZXN0aW5hdGlvbi9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgRGVzdGluYXRpb24gUGFnZTpcIjtcbiAgICAgICAgICAgIGlmICghc2V0dGluZy5wcml2YWN5KVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3Jldmlld3MvXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIFJldmlldyBQYWdlOlwiO1xuICAgICAgICAgICAgaWYgKCFzZXR0aW5nLnByaXZhY3kpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvY29sdW1uL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBDb2x1bW4gUGFnZTpcIjtcbiAgICAgICAgICAgIGlmICghc2V0dGluZy5wcml2YWN5KVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3NlYXJjaFwiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzZXR0aW5nLnByaXZhY3kgPyBcIlNlYXJjaGluZ1wiIDogXCJTZWFyY2hpbmcgZm9yOlwiO1xuICAgICAgICAgICAgaWYgKCFzZXR0aW5nLnByaXZhY3kpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpLmdldChcInF1ZXJ5XCIpO1xuICAgICAgICAgICAgaWYgKHNldHRpbmcuYnV0dG9ucyAmJiAhc2V0dGluZy5wcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNob3cgU2VhcmNoIFJlc3VsdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3ZpZGVvL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBWaWRlbyBTZWN0aW9uOlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGFzRGF0ZVBhdGgocGF0aG5hbWUpICYmIHBhdGhuYW1lLmluY2x1ZGVzKFwiL3BvZGNhc3RzL1wiKSkge1xuICAgICAgICAgICAgY29uc3QgYXVkaW9QbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIiksIHBvZGNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jc3MtMWY3NnFhMiBzcGFuXCIpLCBwb2RjYXN0TG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmNzcy0xZjc2cWEyIGltZ1wiKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc2V0dGluZy5wcml2YWN5XG4gICAgICAgICAgICAgICAgPyBcIkxpc3RlbmluZyB0byBhIFBvZGNhc3RcIlxuICAgICAgICAgICAgICAgIDogXCJMaXN0ZW5pbmcgdG8gYSBQb2RjYXN0OlwiO1xuICAgICAgICAgICAgaWYgKHBvZGNhc3QgJiYgIXNldHRpbmcucHJpdmFjeSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtwb2RjYXN0LnRleHRDb250ZW50fTogJHt0aXRsZX1gO1xuICAgICAgICAgICAgaWYgKGF1ZGlvUGxheWVyICYmICFpc05hTihhdWRpb1BsYXllci5kdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHNmcm9tTWVkaWEoYXVkaW9QbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGlmIChhdWRpb1BsYXllci5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IHRpbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNldHRpbmcuYnV0dG9ucyAmJiAhc2V0dGluZy5wcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxpc3RlbiB0byBQb2RjYXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXR0aW5nLnBvZGNhc3RMb2dvICYmICFzZXR0aW5nLnByaXZhY3kgJiYgcG9kY2FzdExvZ28pXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBhd2FpdCBnZXRTaG9ydFVSTChwb2RjYXN0TG9nby5zcmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhbMV0gPT09IFwiYnlcIiAmJiBwYXRoWzJdKSB7XG4gICAgICAgICAgICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEuY3NzLTF1eGZpNjguZTE2d3BuNXYwXCIpPy50ZXh0Q29udGVudCA/P1xuICAgICAgICAgICAgICAgIFwiVW5rbm93blwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYW4gQXV0aG9yIFBhZ2U6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBhdXRob3I7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jc3MtY254NDF0IGltZ1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gYXdhaXQgZ2V0U2hvcnRVUkwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jc3MtY254NDF0IGltZ1wiKS5zcmMpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGF1dGhvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoYXNEYXRlUGF0aChwYXRobmFtZSkgJiYgcGF0aFs0XSkge1xuICAgICAgICAgICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZy5jc3MtMWJmcXE3dS5leTY4and2MlwiKSwgYXV0aG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwLmNzcy1ha25zbGQuZTFqc2VoYXIxXCIpLCBoZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxW2RhdGEtdGVzdGlkPVwiaGVhZGxpbmVcIl0nKT8udGV4dENvbnRlbnQgPz9cbiAgICAgICAgICAgICAgICB0aXRsZSwgaXNMaXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbiBzcGFuLmNzcy1id2p5bjAubGl2ZS1ibG9nLWhlYWRlci1saXZlLWxhYmVsW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXScpLCB3YXNMaXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4uY3NzLTIzM2ludC5lMTY2MzhrZDRcIik7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHNldHRpbmcucHJpdmFjeVxuICAgICAgICAgICAgICAgID8gXCJSZWFkaW5nIGFuIEFydGljbGVcIlxuICAgICAgICAgICAgICAgIDogc2V0dGluZy5tb3JlRGV0YWlscyAmJiAhaXNMaXZlICYmICF3YXNMaXZlXG4gICAgICAgICAgICAgICAgICAgID8gaGVhZGxpbmVcbiAgICAgICAgICAgICAgICAgICAgOiBcIlJlYWRpbmcgYW4gQXJ0aWNsZTpcIjtcbiAgICAgICAgICAgIGlmICghc2V0dGluZy5wcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZy5tb3JlRGV0YWlscyAmJiAhaXNMaXZlICYmICF3YXNMaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke2F1dGhvcnM/LnRleHRDb250ZW50ID8/IGBCeSAke2F1dGhvcj8udGl0bGUgPz8gXCJVbmtub3duXCJ9YH0sICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRpbWUgc3BhblwiKT8udGV4dENvbnRlbnR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBoZWFkbGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXR0aW5nLmJ1dHRvbnMgJiYgIXNldHRpbmcucHJpdmFjeSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJSZWFkIEFydGljbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTGl2ZSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9saXZlLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiTGl2ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2V0dGluZy5hcnRpY2xlQXV0aG9yICYmICFzZXR0aW5nLnByaXZhY3kgJiYgYXV0aG9yKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBhd2FpdCBnZXRTaG9ydFVSTChhdXRob3Iuc3JjKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPVxuICAgICAgICAgICAgICAgICAgICBhdXRob3JzPy50ZXh0Q29udGVudCA/PyBgQnkgJHthdXRob3IudGl0bGV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChob3N0bmFtZSA9PT0gXCJteWFjY291bnQubnl0aW1lcy5jb21cIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTWFuYWdpbmcgQWNjb3VudFwiO1xuICAgICAgICBpZiAoIXNldHRpbmcucHJpdmFjeSkge1xuICAgICAgICAgICAgc3dpdGNoIChwYXRoWzJdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN1YnNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiU3Vic2NyaXB0aW9uIE92ZXJ2aWV3XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiYmlsbGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQmlsbGluZyBIaXN0b3J5XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkVtYWlscyBhbmQgU2V0dGluZ3NcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2UtZW1haWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkNoYW5nZSBFbWFpbFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImZvcmdvdC1wYXNzd29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiUmVzZXQgUGFzc3dvcmRcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoWzFdID09PSBcImdldC1zdGFydGVkXCIgJiYgcGF0aFsyXSA9PT0gXCJtYW5hZ2UtYmlsbGluZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJQYXltZW50IGRldGFpbHNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXByZXNlbmNlRGF0YS5zdGF0ZSlcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICBpZiAoIXByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuY29uc3Qgc2hvcnRlbmVkVVJMcyA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0U2hvcnRVUkwodXJsKSB7XG4gICAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA8IDI1NilcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICBpZiAoc2hvcnRlbmVkVVJMc1t1cmxdKVxuICAgICAgICByZXR1cm4gc2hvcnRlbmVkVVJMc1t1cmxdO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBkVVJMID0gYXdhaXQgKGF3YWl0IGZldGNoKGBodHRwczovL3BkLnByZW1pZC5hcHAvY3JlYXRlLyR7dXJsfWApKS50ZXh0KCk7XG4gICAgICAgIHNob3J0ZW5lZFVSTHNbdXJsXSA9IHBkVVJMO1xuICAgICAgICByZXR1cm4gcGRVUkw7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcHJlc2VuY2UuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG59XG5mdW5jdGlvbiBoYXNEYXRlUGF0aChwYXRobmFtZSkge1xuICAgIHJldHVybiAvWzAtOV17NH1cXC9bMC05XXsyfVxcL1swLTldezJ9L2cudGVzdChwYXRobmFtZSk7XG59XG5hc3luYyBmdW5jdGlvbiBnZXRTZXR0aW5ncygpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwicG9kY2FzdExvZ29cIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJhcnRpY2xlQXV0aG9yXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibW9yZURldGFpbHNcIiksXG4gICAgXSksIG5hbWVzID0gW1xuICAgICAgICBcInByaXZhY3lcIixcbiAgICAgICAgXCJidXR0b25zXCIsXG4gICAgICAgIFwicG9kY2FzdExvZ29cIixcbiAgICAgICAgXCJhcnRpY2xlQXV0aG9yXCIsXG4gICAgICAgIFwibW9yZURldGFpbHNcIixcbiAgICBdLCBvYmogPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtpLCBuYW1lXSBvZiBuYW1lcy5lbnRyaWVzKCkpXG4gICAgICAgIG9ialtuYW1lXSA9IHNldHRpbmdzW2ldO1xuICAgIHJldHVybiBvYmo7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkZkRU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3U1VGRGNFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNkVUpCUVhWQ0xFVkJRVVVzUlVGQlJTeERRVUZETEVWQlEyaEZMRTlCUVU4c1IwRkJSeXhOUVVGTkxGZEJRVmNzUlVGQlJTeEZRVU0zUWl4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SFFVRkhMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRM1JFTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVU14UWl4WlFVRlpMRWRCUVdsQ08xRkJRelZDTEdGQlFXRXNSVUZEV2l3clJVRkJLMFU3VVVGRGFFWXNZMEZCWXl4RlFVRkZMRWxCUVVrN1MwRkRjRUlzUTBGQlF6dEpRVVZJTEVsQlFVa3NVVUZCVVN4TFFVRkxMR2xDUVVGcFFpeEZRVUZGTzFGQlEyNURMRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRlRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUk3YjBKQlEwTXNTMEZCU3l4RlFVRkZMRmRCUVZjN2IwSkJRMnhDTEVkQlFVY3NSVUZCUlN4SlFVRkpPMmxDUVVOVU8yRkJRMFFzUTBGQlF6dFRRVU5HTzFGQlJVUXNTVUZEUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEdWQlFXVXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFTkJRVU03V1VGRGNrVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZVaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8yRkJRM1pETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zUlVGQlJUdFpRVU0xUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPMWxCUTJwRUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHp0blFrRkJSU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0VFFVTnFSRHRoUVVGTkxFbEJRMDRzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRPVUlzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eEZRVU4yUXp0WlFVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZVVKQlFYbENMRU5CUVVNN1dVRkRha1FzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBPMmRDUVVGRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMU5CUTJwRU8yRkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRk8xbEJRemxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc05rSkJRVFpDTEVOQlFVTTdXVUZEY2tRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTzJkQ1FVRkZMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzFOQlEycEVPMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMWxCUXpGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03V1VGRGFFUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUE8yZENRVUZGTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xTkJRMnBFTzJGQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTzFsQlEzcERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZDBKQlFYZENMRU5CUVVNN1dVRkRhRVFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBPMmRDUVVGRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMU5CUTJwRU8yRkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8xbEJRM2hETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNRMEZCUXp0WlFVTjRSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVODdaMEpCUTI1Q0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4bFFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUlM5RUxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVU3WjBKQlEzaERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3YjBKQlEzUkNPM2RDUVVORExFdEJRVXNzUlVGQlJTeHhRa0ZCY1VJN2QwSkJRelZDTEVkQlFVY3NSVUZCUlN4SlFVRkpPM0ZDUVVOVU8ybENRVU5FTEVOQlFVTTdZVUZEUmp0VFFVTkVPMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMWxCUTNoRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU03V1VGRGJFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03VTBGRE0wSTdZVUZCVFN4SlFVRkpMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJReXhGUVVGRk8xbEJRM0JGTEUxQlFVMHNWMEZCVnl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlEyeEVMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFVkJRM3BFTEZkQlFWY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOdVF5eHpRa0ZCYzBJc1EwRkRkRUlzUTBGQlF6dFpRVVZJTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFOUJRVTg3WjBKQlEzSkRMRU5CUVVNc1EwRkJReXgzUWtGQmQwSTdaMEpCUXpGQ0xFTkJRVU1zUTBGQlF5eDVRa0ZCZVVJc1EwRkJRenRaUVVNM1FpeEpRVUZKTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUE8yZENRVU01UWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEZkQlFWY3NTMEZCU3l4TFFVRkxMRVZCUVVVc1EwRkJRenRaUVVWNlJDeEpRVUZKTEZkQlFWY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdaMEpCUTJoRUxFTkJRVU1zV1VGQldTeERRVUZETEdOQlFXTXNSVUZCUlN4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRE8yOUNRVU4yUkN4UlFVRlJMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1owSkJSVGxETEVsQlFVa3NWMEZCVnl4RFFVRkRMRTFCUVUwc1JVRkJSVHR2UWtGRGRrSXNUMEZCVHl4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRE8yOUNRVU5xUXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF6dHBRa0ZEYmtNN1lVRkRSRHRaUVVWRUxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVU3WjBKQlEzaERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3YjBKQlEzUkNPM2RDUVVORExFdEJRVXNzUlVGQlJTeHRRa0ZCYlVJN2QwSkJRekZDTEVkQlFVY3NSVUZCUlN4SlFVRkpPM0ZDUVVOVU8ybENRVU5FTEVOQlFVTTdZVUZEUmp0WlFVVkVMRWxCUVVrc1QwRkJUeXhEUVVGRExGZEJRVmNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRWxCUVVrc1YwRkJWenRuUWtGRGVrUXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhOUVVGTkxGZEJRVmNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRha1U3WVVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTNaRExFMUJRVTBzVFVGQlRTeEhRVU5ZTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNSVUZCUlN4WFFVRlhPMmRDUVVNdlJDeFRRVUZUTEVOQlFVTTdXVUZGV0N4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPMWxCUTJwRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUlRWQ0xFbEJRVWtzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eEZRVUZGTzJkQ1FVTnFSQ3haUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZITEUxQlFVMHNWMEZCVnl4RFFVTTNReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZ0UWl4dlFrRkJiMElzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZEYkVVc1EwRkJRenRuUWtGRFJpeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRTFCUVUwc1EwRkJRenRoUVVOeVF6dFRRVU5FTzJGQlFVMHNTVUZCU1N4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUXpWRExFMUJRVTBzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTI1RExEQkNRVUV3UWl4RFFVTXhRaXhGUVVORUxFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVWQlF6RkVMRkZCUVZFc1IwRkRVQ3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETERSQ1FVRTBRaXhEUVVGRExFVkJRVVVzVjBGQlZ6dG5Ra0ZEYWtVc1MwRkJTeXhGUVVOT0xFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTVRaXh6UlVGQmMwVXNRMEZEZEVVc1JVRkRSQ3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl3eVFrRkJNa0lzUTBGQlF5eERRVUZETzFsQlJTOUVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVODdaMEpCUTNKRExFTkJRVU1zUTBGQlF5eHZRa0ZCYjBJN1owSkJRM1JDTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNUMEZCVHp0dlFrRkROVU1zUTBGQlF5eERRVUZETEZGQlFWRTdiMEpCUTFZc1EwRkJReXhEUVVGRExIRkNRVUZ4UWl4RFFVRkRPMWxCUlhwQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZPMmRDUVVOeVFpeFpRVUZaTEVOQlFVTXNTMEZCU3p0dlFrRkRha0lzVDBGQlR5eERRVUZETEZkQlFWY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFOUJRVTg3ZDBKQlEzcERMRU5CUVVNc1EwRkJReXhIUVVGSExFOUJRVThzUlVGQlJTeFhRVUZYTEVsQlFVa3NUVUZCVFN4TlFVRk5MRVZCUVVVc1MwRkJTeXhKUVVGSkxGTkJRVk1zUlVGQlJTeExRVU0zUkN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEZkQlEzSkRMRVZCUVVVN2QwSkJRMG9zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXp0aFFVTmlPMWxCUlVRc1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSVHRuUWtGRGVFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenR2UWtGRGRFSTdkMEpCUTBNc1MwRkJTeXhGUVVGRkxHTkJRV003ZDBKQlEzSkNMRWRCUVVjc1JVRkJSU3hKUVVGSk8zRkNRVU5VTzJsQ1FVTkVMRU5CUVVNN1lVRkRSanRaUVVWRUxFbEJRVWtzVFVGQlRTeEZRVUZGTzJkQ1FVTllMRmxCUVZrc1EwRkJReXhoUVVGaExHbEVRVUZqTEVOQlFVTTdaMEpCUTNwRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NUVUZCVFN4RFFVRkRPMkZCUTNKRE8ybENRVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMR0ZCUVdFc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVsQlFVa3NUVUZCVFN4RlFVRkZPMmRDUVVNdlJDeFpRVUZaTEVOQlFVTXNZVUZCWVN4SFFVRkhMRTFCUVUwc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRNMFFzV1VGQldTeERRVUZETEdOQlFXTTdiMEpCUXpGQ0xFOUJRVThzUlVGQlJTeFhRVUZYTEVsQlFVa3NUVUZCVFN4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03WVVGRE9VTTdVMEZEUkR0TFFVTkVPMU5CUVUwc1NVRkJTU3hSUVVGUkxFdEJRVXNzZFVKQlFYVkNMRVZCUVVVN1VVRkRhRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dFJRVVV4UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJUdFpRVU55UWl4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdG5Ra0ZEYUVJc1MwRkJTeXhqUVVGakxFTkJRVU1zUTBGQlF6dHZRa0ZEY0VJc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eDFRa0ZCZFVJc1EwRkJRenR2UWtGRE4wTXNUVUZCVFR0cFFrRkRUanRuUWtGRFJDeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRPMjlDUVVObUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03YjBKQlEzWkRMRTFCUVUwN2FVSkJRMDQ3WjBKQlEwUXNTMEZCU3l4VlFVRlZMRU5CUVVNc1EwRkJRenR2UWtGRGFFSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0dlFrRkRNME1zVFVGQlRUdHBRa0ZEVGp0blFrRkRSQ3hMUVVGTExHTkJRV01zUTBGQlF5eERRVUZETzI5Q1FVTndRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdOQlFXTXNRMEZCUXp0dlFrRkRjRU1zVFVGQlRUdHBRa0ZEVGp0blFrRkRSQ3hMUVVGTExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN2IwSkJRM1pDTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdiMEpCUTNSRExFMUJRVTA3YVVKQlEwNDdaMEpCUTBRN2IwSkJRME1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1lVRkJZU3hKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4blFrRkJaMEk3ZDBKQlF6VkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1lVRkRla003VTBGRFJEdExRVU5FTzBsQlJVUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTE8xRkJRVVVzVDBGQlR5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUlc1RUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6czdVVUZETjBNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0QlFVTjZReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVVZJTEUxQlFVMHNZVUZCWVN4SFFVRXlRaXhGUVVGRkxFTkJRVU03UVVGRGFrUXNTMEZCU3l4VlFVRlZMRmRCUVZjc1EwRkJReXhIUVVGWE8wbEJRM0pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITzFGQlFVVXNUMEZCVHl4SFFVRkhMRU5CUVVNN1NVRkRla01zU1VGQlNTeGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUVVVc1QwRkJUeXhoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEYkVRc1NVRkJTVHRSUVVOSUxFMUJRVTBzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZEYmtJc1RVRkJUU3hMUVVGTExFTkJRVU1zWjBOQlFXZERMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRMnhFTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRWQ3hoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUXpOQ0xFOUJRVThzUzBGQlN5eERRVUZETzB0QlEySTdTVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRSUVVOaUxGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRjRUlzVDBGQlR5eEhRVUZITEVOQlFVTTdTMEZEV0R0QlFVTkdMRU5CUVVNN1FVRkZSQ3hUUVVGVExGZEJRVmNzUTBGQlF5eFJRVUZuUWp0SlFVTndReXhQUVVGUExDdENRVUVyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVU4yUkN4RFFVRkRPMEZCUlVRc1MwRkJTeXhWUVVGVkxGZEJRVmM3U1VGRGVrSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1RVRkJUU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETzFGQlEycERMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzVTBGQlV5eERRVUZETzFGQlEzWkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzVTBGQlV5eERRVUZETzFGQlEzWkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzWVVGQllTeERRVUZETzFGQlF6TkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzWlVGQlpTeERRVUZETzFGQlF6ZERMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzWVVGQllTeERRVUZETzB0QlF6TkRMRU5CUVVNc1JVRkRSaXhMUVVGTExFZEJRVWM3VVVGRFVDeFRRVUZUTzFGQlExUXNVMEZCVXp0UlFVTlVMR0ZCUVdFN1VVRkRZaXhsUVVGbE8xRkJRMllzWVVGQllUdExRVU5pTEVWQlEwUXNSMEZCUnl4SFFVVkRMRVZCUVVVc1EwRkJRenRKUVVWU0xFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTzFGQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVnFSU3hQUVVGUExFZEJRVWNzUTBGQlF6dEJRVU5hTEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInRpbWUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInRpdGxlIiwiZG9jdW1lbnQiLCJyZXBsYWNlIiwic2V0dGluZyIsImdldFNldHRpbmdzIiwicGF0aG5hbWUiLCJob3N0bmFtZSIsImhyZWYiLCJzZWFyY2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGgiLCJzcGxpdCIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImJ1dHRvbnMiLCJwcml2YWN5IiwibGFiZWwiLCJ1cmwiLCJpbmNsdWRlcyIsImRldGFpbHMiLCJzdGF0ZSIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCIsImhhc0RhdGVQYXRoIiwiYXVkaW9QbGF5ZXIiLCJxdWVyeVNlbGVjdG9yIiwicG9kY2FzdCIsInBvZGNhc3RMb2dvIiwidGV4dENvbnRlbnQiLCJpc05hTiIsImR1cmF0aW9uIiwiZW5kVGltZXN0YW1wIiwiZ2V0VGltZXN0YW1wc2Zyb21NZWRpYSIsInBhdXNlZCIsImdldFNob3J0VVJMIiwic3JjIiwiYXV0aG9yIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiYXV0aG9ycyIsImhlYWRsaW5lIiwiaXNMaXZlIiwid2FzTGl2ZSIsIm1vcmVEZXRhaWxzIiwiYXJ0aWNsZUF1dGhvciIsInNldEFjdGl2aXR5Iiwic2hvcnRlbmVkVVJMcyIsImxlbmd0aCIsInBkVVJMIiwiZmV0Y2giLCJ0ZXh0IiwiZXJyIiwiZXJyb3IiLCJ0ZXN0Iiwic2V0dGluZ3MiLCJQcm9taXNlIiwiYWxsIiwiZ2V0U2V0dGluZyIsIm5hbWVzIiwib2JqIiwiaSIsIm5hbWUiLCJlbnRyaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==
undefined;