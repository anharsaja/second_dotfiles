var __webpack_exports__={};const presence=new Presence({clientId:"1044942179958804552"}),browsingStamp=Math.floor(Date.now()/1e3);async function getStrings(){return presence.getStrings({play:"general.playing",paused:"general.paused",browse:"general.browsing",buttonWatchVideo:"general.buttonWatchVideo",viewCategory:"general.viewCategory",search:"general.searchFor"},await presence.getSetting("lang").catch((()=>"en")))}const unused_variable=(e,t)=>e+t;unused_variable(1,2);let strings,oldLang=null;presence.on("UpdateData",(async()=>{const e={startTimestamp:browsingStamp,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/M/MUBI/assets/logo.png"},{href:t,pathname:s}=document.location,[r,n,a,i,o]=await Promise.all([presence.getSetting("lang").catch((()=>"en")),presence.getSetting("privacy"),presence.getSetting("buttons"),presence.getSetting("covers"),presence.getSetting("viewState")]),c=document.querySelectorAll('input[name="query"]')[1];if(oldLang===r&&strings||(oldLang=r,strings=await getStrings()),n)return e.details=strings.browse,void presence.setActivity(e);if(c?.value||s.includes("/search/"))return e.details=`${strings.search} ${""!==c.value?c.value:t.split("=")[1]}`,e.state=`In ${document.querySelector('.css-1ws58ev.e175rd72"]')?.textContent.replace(/[0-9]*,*[.]*/gm,"")?.toLowerCase()??"All categories"}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",void presence.setActivity(e);switch(!0){case s.includes("showing"):case""===s:e.details="Viewing the home page";break;case s.includes("specials"):e.buttons=[{label:"Browse",url:t}],e.details=`Browsing ${document.querySelector(".css-9ziruj.e1cgaodc1")?.textContent??"specials"}`;break;case s.includes("notebook"):document.querySelector(".css-dve9fb.earvnqh7")?(e.details="Reading notebook interview about:",e.state=document.querySelector('[class="css-dve9fb earvnqh7"]')?.textContent):e.details="Reading all notebook interviews",e.buttons=[{label:"Read Notebook Interview",url:t}];break;case s.includes("/users/"):e.details=`Viewing ${document.querySelector('[data-cy="profile-name"]')?.textContent}'s Profile`,e.largeImageKey=document.querySelector('[data-cy="avatar-image-container"]')?.querySelector("img")?.getAttribute("src")??"https://cdn.rcd.gg/PreMiD/websites/M/MUBI/assets/logo.png";break;case s.includes("films"):case s.includes("shows"):{const s=document.querySelector("video"),r=document.querySelector('[itemprop="name"]')?.textContent,n=JSON.parse(document.querySelector("#__NEXT_DATA__")?.textContent)?.props?.initialProps?.pageProps?.initFilm;s?(delete e.startTimestamp,e.details=document.querySelector("__next-route-announcer__")?.textContent?.split("|")[0]??document.querySelector("title")?.textContent?.split("|")[0],s.duration&&!s.paused&&([e.startTimestamp,e.endTimestamp]=presence.getTimestampsfromMedia(s)),e.largeImageKey=document.querySelector("#__NEXT_DATA__")?.textContent?.match(/https:\/\/images[.]mubicdn[.]net\/images\/(film|show)\/[0-9]*\/cache-[0-9]*-[0-9]*\/image-w1280[.]jpg/)?.at(0)??"https://cdn.rcd.gg/PreMiD/websites/M/MUBI/assets/logo.png",e.smallImageKey=s.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=s.paused?strings.paused:strings.play,e.buttons=[{label:strings.buttonWatchVideo,url:t}]):(e.details=`${r.charAt(0)}${r.slice(1).toLowerCase()}`,e.largeImageKey=document.querySelector('[property="og:image"]')?.getAttribute("content"),e.state=o.replace("%tags%",n?.genres?.toString()?.replace(/,/gm,", ")).replace("%director%",1===n?.directors?.length?n?.directors?.[0]?.name:n?.directors?.map((e=>e?.name))?.join(", ")).replace("%locationAndDate%",1===n?.historic_countries?.length?`${n?.historic_countries}, ${n?.year}`:`${n?.historic_countries?.join(", ")}, ${n?.year}`).replace("%minutes%",`${n?.duration??document.querySelector('[itemprop="duration"]')?.textContent} minutes long`),e.buttons=[{label:"View Content",url:t}]);break}case s.includes("film"):e.buttons=[{label:"Browse",url:t}],e.details="Browsing movies";break;case s.includes("cast"):e.details="Viewing cast member",e.state=document.querySelector('[property="og:title"]')?.content,e.largeImageKey=document.querySelector('[data-testid="resp-img-src"] > img')?.getAttribute("src");break;default:{const t=document.querySelector(".css-1dccbe3.ej6uv270");t?.textContent?e.details=`Browsing ${t.textContent}`:document.querySelector(".css-1ljf7si.eugzkiw0")?.textContent?e.details=`Viewing ${document.querySelector(".css-1ljf7si.eugzkiw0")?.textContent} settings`:e.details="Browsing...";break}}i||"https://cdn.rcd.gg/PreMiD/websites/M/MUBI/assets/logo.png"===e.largeImageKey||(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/M/MUBI/assets/logo.png"),!a&&e.buttons&&delete e.buttons,e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQWFTLFFBQVUsQ0FDbkIsQ0FDSWlCLE1BQU8sU0FDUEMsSUFBS3hCLElBR2JILEVBQWFlLFFBQVUsa0JBQ3ZCLE1BRUosS0FBS1gsRUFBU2MsU0FBUyxRQUNuQmxCLEVBQWFlLFFBQVUsc0JBQ3ZCZixFQUFhb0IsTUFBUWYsU0FBU2dCLGNBQWMsMEJBQTBCbUMsUUFDdEV4RCxFQUFhRSxjQUFnQkcsU0FDeEJnQixjQUFjLHVDQUNiTyxhQUFhLE9BQ25CLE1BRUosUUFBUyxDQUNMLE1BQU02QixFQUFTcEQsU0FBU2dCLGNBQWMseUJBQ2xDb0MsR0FBUW5DLFlBQ1J0QixFQUFhZSxRQUFVLFlBQVkwQyxFQUFPbkMsY0FDckNqQixTQUFTZ0IsY0FBYywwQkFBMEJDLFlBQ3REdEIsRUFBYWUsUUFBVSxXQUFXVixTQUFTZ0IsY0FBYywwQkFBMEJDLHVCQUduRnRCLEVBQWFlLFFBQVUsY0FDM0IsS0FDSixFQUVDTCxHQUF5Qyw4REFBL0JWLEVBQWFFLGdCQUN4QkYsRUFBYUUsY0FBZ0IsOERBQzVCTyxHQUFXVCxFQUFhUyxnQkFDbEJULEVBQWFTLFFBQ3BCVCxFQUFhZSxRQUNidkMsU0FBU3dDLFlBQVloQixHQUVyQnhCLFNBQVN3QyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjEwNDQ5NDIxNzk5NTg4MDQ1NTJcIixcbn0pLCBicm93c2luZ1N0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5hc3luYyBmdW5jdGlvbiBnZXRTdHJpbmdzKCkge1xuICAgIHJldHVybiBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICAgICAgcGxheTogXCJnZW5lcmFsLnBsYXlpbmdcIixcbiAgICAgICAgcGF1c2VkOiBcImdlbmVyYWwucGF1c2VkXCIsXG4gICAgICAgIGJyb3dzZTogXCJnZW5lcmFsLmJyb3dzaW5nXCIsXG4gICAgICAgIGJ1dHRvbldhdGNoVmlkZW86IFwiZ2VuZXJhbC5idXR0b25XYXRjaFZpZGVvXCIsXG4gICAgICAgIHZpZXdDYXRlZ29yeTogXCJnZW5lcmFsLnZpZXdDYXRlZ29yeVwiLFxuICAgICAgICBzZWFyY2g6IFwiZ2VuZXJhbC5zZWFyY2hGb3JcIixcbiAgICB9LCBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibGFuZ1wiKS5jYXRjaCgoKSA9PiBcImVuXCIpKTtcbn1cbmNvbnN0IHVudXNlZF92YXJpYWJsZSA9IChhLCBiKSA9PiBhICsgYjtcbnVudXNlZF92YXJpYWJsZSgxLCAyKTtcbmxldCBzdHJpbmdzLCBvbGRMYW5nID0gbnVsbDtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdTdGFtcCxcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL00vTVVCSS9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9LCB7IGhyZWYsIHBhdGhuYW1lIH0gPSBkb2N1bWVudC5sb2NhdGlvbiwgW25ld0xhbmcsIHByaXZhY3ksIGJ1dHRvbnMsIGNvdmVycywgdmlld1N0YXRlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiY292ZXJzXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwidmlld1N0YXRlXCIpLFxuICAgIF0pLCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicXVlcnlcIl0nKVsxXTtcbiAgICBpZiAob2xkTGFuZyAhPT0gbmV3TGFuZyB8fCAhc3RyaW5ncykge1xuICAgICAgICBvbGRMYW5nID0gbmV3TGFuZztcbiAgICAgICAgc3RyaW5ncyA9IGF3YWl0IGdldFN0cmluZ3MoKTtcbiAgICB9XG4gICAgaWYgKHByaXZhY3kpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLmJyb3dzZTtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoPy52YWx1ZSB8fCBwYXRobmFtZS5pbmNsdWRlcyhcIi9zZWFyY2gvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7c3RyaW5ncy5zZWFyY2h9ICR7c2VhcmNoLnZhbHVlICE9PSBcIlwiID8gc2VhcmNoLnZhbHVlIDogaHJlZi5zcGxpdChcIj1cIilbMV19YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEluICR7ZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY3NzLTF3czU4ZXYuZTE3NXJkNzJcIl0nKVxuICAgICAgICAgICAgPy50ZXh0Q29udGVudC5yZXBsYWNlKC9bMC05XSosKlsuXSovZ20sIFwiXCIpXG4gICAgICAgICAgICA/LnRvTG93ZXJDYXNlKCkgPz8gXCJBbGwgY2F0ZWdvcmllc1wifWA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuaW5jbHVkZXMoXCJzaG93aW5nXCIpOlxuICAgICAgICBjYXNlIHBhdGhuYW1lID09PSBcIlwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgaG9tZSBwYWdlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHBhdGhuYW1lLmluY2x1ZGVzKFwic3BlY2lhbHNcIik6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQnJvd3NlXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYEJyb3dzaW5nICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jc3MtOXppcnVqLmUxY2dhb2RjMVwiKT8udGV4dENvbnRlbnQgPz9cbiAgICAgICAgICAgICAgICBcInNwZWNpYWxzXCJ9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuaW5jbHVkZXMoXCJub3RlYm9va1wiKToge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3NzLWR2ZTlmYi5lYXJ2bnFoN1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIG5vdGVib29rIGludGVydmlldyBhYm91dDpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJjc3MtZHZlOWZiIGVhcnZucWg3XCJdJyk/LnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIGFsbCBub3RlYm9vayBpbnRlcnZpZXdzXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWQgTm90ZWJvb2sgSW50ZXJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuaW5jbHVkZXMoXCIvdXNlcnMvXCIpOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY3k9XCJwcm9maWxlLW5hbWVcIl0nKT8udGV4dENvbnRlbnR9J3MgUHJvZmlsZWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWN5PVwiYXZhdGFyLWltYWdlLWNvbnRhaW5lclwiXScpXG4gICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgICA/LmdldEF0dHJpYnV0ZShcInNyY1wiKSA/PyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTS9NVUJJL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5pbmNsdWRlcyhcImZpbG1zXCIpOlxuICAgICAgICBjYXNlIHBhdGhuYW1lLmluY2x1ZGVzKFwic2hvd3NcIik6IHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpLCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpdGVtcHJvcD1cIm5hbWVcIl0nKT8udGV4dENvbnRlbnQsIGluZm9KU09OID0gSlNPTi5wYXJzZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI19fTkVYVF9EQVRBX19cIik/LnRleHRDb250ZW50KT8ucHJvcHM/LmluaXRpYWxQcm9wcz8ucGFnZVByb3BzPy5pbml0RmlsbTtcbiAgICAgICAgICAgIGlmICghdmlkZW8pIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGAke3RpdGxlLmNoYXJBdCgwKX0ke3RpdGxlXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1twcm9wZXJ0eT1cIm9nOmltYWdlXCJdJylcbiAgICAgICAgICAgICAgICAgICAgPy5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHZpZXdTdGF0ZVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiV0YWdzJVwiLCBpbmZvSlNPTj8uZ2VucmVzPy50b1N0cmluZygpPy5yZXBsYWNlKC8sL2dtLCBcIiwgXCIpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiVkaXJlY3RvciVcIiwgaW5mb0pTT04/LmRpcmVjdG9ycz8ubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAgICAgICAgID8gaW5mb0pTT04/LmRpcmVjdG9ycz8uWzBdPy5uYW1lXG4gICAgICAgICAgICAgICAgICAgIDogaW5mb0pTT04/LmRpcmVjdG9ycz8ubWFwKCh4KSA9PiB4Py5uYW1lKT8uam9pbihcIiwgXCIpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiVsb2NhdGlvbkFuZERhdGUlXCIsIGluZm9KU09OPy5oaXN0b3JpY19jb3VudHJpZXM/Lmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgICAgICAgICA/IGAke2luZm9KU09OPy5oaXN0b3JpY19jb3VudHJpZXN9LCAke2luZm9KU09OPy55ZWFyfWBcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtpbmZvSlNPTj8uaGlzdG9yaWNfY291bnRyaWVzPy5qb2luKFwiLCBcIil9LCAke2luZm9KU09OPy55ZWFyfWApXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJW1pbnV0ZXMlXCIsIGAke2luZm9KU09OPy5kdXJhdGlvbiA/P1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaXRlbXByb3A9XCJkdXJhdGlvblwiXScpPy50ZXh0Q29udGVudH0gbWludXRlcyBsb25nYCk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgQ29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID1cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiX19uZXh0LXJvdXRlLWFubm91bmNlcl9fXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnRleHRDb250ZW50Py5zcGxpdChcInxcIilbMF0gPz9cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKT8udGV4dENvbnRlbnQ/LnNwbGl0KFwifFwiKVswXTtcbiAgICAgICAgICAgICAgICBpZiAodmlkZW8uZHVyYXRpb24gJiYgIXZpZGVvLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzZnJvbU1lZGlhKHZpZGVvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjX19ORVhUX0RBVEFfX1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy50ZXh0Q29udGVudD8ubWF0Y2goL2h0dHBzOlxcL1xcL2ltYWdlc1suXW11YmljZG5bLl1uZXRcXC9pbWFnZXNcXC8oZmlsbXxzaG93KVxcL1swLTldKlxcL2NhY2hlLVswLTldKi1bMC05XSpcXC9pbWFnZS13MTI4MFsuXWpwZy8pXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmF0KDApID8/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9NL01VQkkvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSB2aWRlby5wYXVzZWQgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiIDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHZpZGVvLnBhdXNlZFxuICAgICAgICAgICAgICAgICAgICA/IHN0cmluZ3MucGF1c2VkXG4gICAgICAgICAgICAgICAgICAgIDogc3RyaW5ncy5wbGF5O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5ncy5idXR0b25XYXRjaFZpZGVvLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHBhdGhuYW1lLmluY2x1ZGVzKFwiZmlsbVwiKToge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJCcm93c2VcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIG1vdmllc1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5pbmNsdWRlcyhcImNhc3RcIik6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGNhc3QgbWVtYmVyXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbcHJvcGVydHk9XCJvZzp0aXRsZVwiXScpPy5jb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aWQ9XCJyZXNwLWltZy1zcmNcIl0gPiBpbWcnKVxuICAgICAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jc3MtMWRjY2JlMy5lajZ1djI3MFwiKTtcbiAgICAgICAgICAgIGlmIChhY3RpdmU/LnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYEJyb3dzaW5nICR7YWN0aXZlLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNzcy0xbGpmN3NpLmV1Z3praXcwXCIpPy50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNzcy0xbGpmN3NpLmV1Z3praXcwXCIpPy50ZXh0Q29udGVudH0gc2V0dGluZ3NgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZy4uLlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjb3ZlcnMgJiYgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgIT09IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9NL01VQkkvYXNzZXRzL2xvZ28ucG5nXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL00vTVVCSS9hc3NldHMvbG9nby5wbmdcIjtcbiAgICBpZiAoIWJ1dHRvbnMgJiYgcHJlc2VuY2VEYXRhLmJ1dHRvbnMpXG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuYnV0dG9ucztcbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNPME5CUXk5Q0xFTkJRVU1zUlVGRFJpeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkZMME1zUzBGQlN5eFZRVUZWTEZWQlFWVTdTVUZEZUVJc1QwRkJUeXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVU42UWp0UlFVTkRMRWxCUVVrc1JVRkJSU3hwUWtGQmFVSTdVVUZEZGtJc1RVRkJUU3hGUVVGRkxHZENRVUZuUWp0UlFVTjRRaXhOUVVGTkxFVkJRVVVzYTBKQlFXdENPMUZCUXpGQ0xHZENRVUZuUWl4RlFVRkZMREJDUVVFd1FqdFJRVU0xUXl4WlFVRlpMRVZCUVVVc2MwSkJRWE5DTzFGQlEzQkRMRTFCUVUwc1JVRkJSU3h0UWtGQmJVSTdTMEZETTBJc1JVRkRSQ3hOUVVGTkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVTXpSQ3hEUVVGRE8wRkJRMGdzUTBGQlF6dEJRVVZFTEUxQlFVMHNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVONFJDeGxRVUZsTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJWM1JDTEVsQlFVa3NUMEZCSzBNc1JVRkRiRVFzVDBGQlR5eEhRVUZYTEVsQlFVa3NRMEZCUXp0QlFVVjRRaXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWTBGQll5eEZRVUZGTEdGQlFXRTdVVUZETjBJc1lVRkJZU3cyUkVGQllUdExRVU14UWl4RlFVTkVMRVZCUVVVc1NVRkJTU3hGUVVGRkxGRkJRVkVzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUTNSRExFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxGTkJRVk1zUTBGQlF5eEhRVUZITEUxQlFVMHNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVOc1JTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlRMRTFCUVUwc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRja1FzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4VFFVRlRMRU5CUVVNN1VVRkRka01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4VFFVRlRMRU5CUVVNN1VVRkRka01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4UlFVRlJMRU5CUVVNN1VVRkRkRU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVXl4WFFVRlhMRU5CUVVNN1MwRkRlRU1zUTBGQlF5eEZRVU5HTEUxQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlEycERMSEZDUVVGeFFpeERRVU55UWl4RFFVRkRMRU5CUVVNc1EwRkJjVUlzUTBGQlF6dEpRVVV4UWl4SlFVRkpMRTlCUVU4c1MwRkJTeXhQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdVVUZEY0VNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF6dFJRVU5zUWl4UFFVRlBMRWRCUVVjc1RVRkJUU3hWUVVGVkxFVkJRVVVzUTBGQlF6dExRVU0zUWp0SlFVTkVMRWxCUVVrc1QwRkJUeXhGUVVGRk8xRkJRMW9zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM1JETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VVVGRGJrTXNUMEZCVHp0TFFVTlFPMGxCUTBRc1NVRkJTU3hOUVVGTkxFVkJRVVVzUzBGQlN5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3VVVGRGJrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlEzWkRMRTFCUVUwc1EwRkJReXhMUVVGTExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGRGRrUXNSVUZCUlN4RFFVRkRPMUZCUTBnc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVU53UWl4UlFVRlJPMkZCUTA0c1lVRkJZU3hEUVVGRExIbENRVUY1UWl4RFFVRkRPMWxCUTNwRExFVkJRVVVzVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZETTBNc1JVRkJSU3hYUVVGWExFVkJRVVVzU1VGQlNTeG5Ra0ZEY2tJc1JVRkJSU3hEUVVGRE8xRkJRMGdzV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03VVVGRE0wTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU51UXl4UFFVRlBPMHRCUTFBN1NVRkRSQ3hSUVVGUkxFbEJRVWtzUlVGQlJUdFJRVU5pTEV0QlFVc3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4TFFVRkxMRkZCUVZFc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIVkNRVUYxUWl4RFFVRkRPMWxCUXk5RExFMUJRVTA3VTBGRFRqdFJRVVZFTEV0QlFVc3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3WjBKQlEzUkNPMjlDUVVORExFdEJRVXNzUlVGQlJTeFJRVUZSTzI5Q1FVTm1MRWRCUVVjc1JVRkJSU3hKUVVGSk8ybENRVU5VTzJGQlEwUXNRMEZCUXp0WlFVTkdMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzV1VGRGRFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4RlFVRkZMRmRCUVZjN1owSkJRelZFTEZWQlEwUXNSVUZCUlN4RFFVRkRPMWxCUlVnc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRVZCUVVVN1owSkJRMjVFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVTkJRVzFETEVOQlFVTTdaMEpCUXpORUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRNVU1zSzBKQlFTdENMRU5CUXk5Q0xFVkJRVVVzVjBGQlZ5eERRVUZETzJGQlEyWTdPMmRDUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVU5CUVdsRExFTkJRVU03V1VGRGFFVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenRuUWtGRGRFSTdiMEpCUTBNc1MwRkJTeXhGUVVGRkxIbENRVUY1UWp0dlFrRkRhRU1zUjBGQlJ5eEZRVUZGTEVsQlFVazdhVUpCUTFRN1lVRkRSQ3hEUVVGRE8xbEJRMFlzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFhRVU4wUWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExEQkNRVUV3UWl4RFFVRkRMRVZCUVVVc1YwRkRja1FzV1VGQldTeERRVUZETzFsQlEySXNXVUZCV1N4RFFVRkRMR0ZCUVdFN1owSkJRM3BDTEZGQlFWRTdjVUpCUTA0c1lVRkJZU3hEUVVGRExHOURRVUZ2UXl4RFFVRkRPMjlDUVVOd1JDeEZRVUZGTEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNN2IwSkJRM1JDTEVWQlFVVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXdyUkVGQlpTeERRVUZETzFsQlEzWkRMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOb1F5eExRVUZMTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZ0UWl4UFFVRlBMRU5CUVVNc1JVRkRPVVFzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSVUZCUlN4WFFVRlhMRVZCUTJoRkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVTndRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFVkJRVVVzVjBGQlZ5eERRVU55UkN4RlFVRkZMRXRCUVVzc1JVRkJSU3haUVVGWkxFVkJRVVVzVTBGQlV5eEZRVUZGTEZGQlFWRXNRMEZCUXp0WlFVTTNReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzJkQ1FVTllMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXM3Y1VKQlF5OURMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03Y1VKQlExSXNWMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJRenRuUWtGRGJFSXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhSUVVGUk8zRkNRVU51UXl4aFFVRmhMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTTdiMEpCUTNaRExFVkJRVVVzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMmRDUVVNelFpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNN2NVSkJRelZDTEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFJRVUZSTEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzNGQ1FVTnlSU3hQUVVGUExFTkJRMUFzV1VGQldTeEZRVU5hTEZGQlFWRXNSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hMUVVGTExFTkJRVU03YjBKQlEyaERMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTVHR2UWtGRGFFTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hUUVVGVExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCV1N4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVOc1JUdHhRa0ZEUVN4UFFVRlBMRU5CUTFBc2JVSkJRVzFDTEVWQlEyNUNMRkZCUVZFc1JVRkJSU3hyUWtGQmEwSXNSVUZCUlN4TlFVRk5MRXRCUVVzc1EwRkJRenR2UWtGRGVrTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxHdENRVUZyUWl4TFFVRkxMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVU3YjBKQlEzUkVMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVOdVJUdHhRa0ZEUVN4UFFVRlBMRU5CUTFBc1YwRkJWeXhGUVVOWUxFZEJRME1zVVVGQlVTeEZRVUZGTEZGQlFWRTdiMEpCUTJ4Q0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zUlVGQlJTeFhRVU5zUkN4bFFVRmxMRU5CUTJZc1EwRkJRenRuUWtGRFNDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFqdDNRa0ZEUXl4TFFVRkxMRVZCUVVVc1kwRkJZenQzUWtGRGNrSXNSMEZCUnl4RlFVRkZMRWxCUVVrN2NVSkJRMVE3YVVKQlEwUXNRMEZCUXp0aFFVTkdPMmxDUVVGTk8yZENRVU5PTEU5QlFVOHNXVUZCV1N4RFFVRkRMR05CUVdNc1EwRkJRenRuUWtGRGJrTXNXVUZCV1N4RFFVRkRMRTlCUVU4N2IwSkJRMjVDTEZGQlFWRTdlVUpCUTA0c1lVRkJZU3hEUVVGRExEQkNRVUV3UWl4RFFVRkRPM2RDUVVNeFF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNkQ1FVTTNRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRemRFTEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTNCRExFTkJRVU1zV1VGQldTeERRVUZETEdOQlFXTXNSVUZCUlN4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRE8zZENRVU4yUkN4UlFVRlJMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN2FVSkJRM2hETzJkQ1FVTkVMRmxCUVZrc1EwRkJReXhoUVVGaE8yOUNRVU42UWl4UlFVRlJPM2xDUVVOT0xHRkJRV0VzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJRenQzUWtGRGFFTXNSVUZCUlN4WFFVRlhMRVZCUVVVc1MwRkJTeXhEUVVOdVFpeDFSMEZCZFVjc1EwRkRka2M3ZDBKQlEwUXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExDdEVRVUZsTEVOQlFVTTdaMEpCUTNwQ0xGbEJRVmtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExHbEVRVUZqTEVOQlFVTXNLME5CUVZrc1EwRkJRenRuUWtGRGRrVXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRUdHZRa0ZEZWtNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTzI5Q1FVTm9RaXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0dlFrRkRkRUk3ZDBKQlEwTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1EwRkJReXhuUWtGQlowSTdkMEpCUXk5Q0xFZEJRVWNzUlVGQlJTeEpRVUZKTzNGQ1FVTlVPMmxDUVVORUxFTkJRVU03WVVGRFJqdFpRVU5FTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXk5Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdaMEpCUTNSQ08yOUNRVU5ETEV0QlFVc3NSVUZCUlN4UlFVRlJPMjlDUVVObUxFZEJRVWNzUlVGQlJTeEpRVUZKTzJsQ1FVTlVPMkZCUTBRc1EwRkJRenRaUVVOR0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03V1VGRGVrTXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMElzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4eFFrRkJjVUlzUTBGQlF6dFpRVU0zUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6RkRMSFZDUVVGMVFpeERRVU4yUWl4RlFVRkZMRTlCUVU4c1EwRkJRenRaUVVOWUxGbEJRVmtzUTBGQlF5eGhRVUZoTEVkQlFVY3NVVUZCVVR0cFFrRkRia01zWVVGQllTeERRVUZETEc5RFFVRnZReXhEUVVGRE8yZENRVU53UkN4RlFVRkZMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU4yUWl4TlFVRk5PMU5CUTA0N1VVRkRSQ3hQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU5TTEUxQlFVMHNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1EwRkJRenRaUVVNdlJDeEpRVUZKTEUxQlFVMHNSVUZCUlN4WFFVRlhPMmRDUVVOMFFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZrc1RVRkJUU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzJsQ1FVTndSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zUlVGQlJTeFhRVUZYTEVWQlFVVTdaMEpCUTNSRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZEZEVJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eDFRa0ZCZFVJc1EwRkJReXhGUVVGRkxGZEJRMnhFTEZkQlFWY3NRMEZCUXp0aFFVTmFPenRuUWtGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR0ZCUVdFc1EwRkJRenRaUVVNMVF5eE5RVUZOTzFOQlEwNDdTMEZEUkR0SlFVVkVMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzV1VGQldTeERRVUZETEdGQlFXRXNaMFZCUVdkQ08xRkJRM2hFTEZsQlFWa3NRMEZCUXl4aFFVRmhMRGhFUVVGakxFTkJRVU03U1VGRE1VTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR6dFJRVUZGTEU5QlFVOHNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVOc1JTeEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXpzN1VVRkRlRVFzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpkQ0xFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1N0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImFzeW5jIiwiZ2V0U3RyaW5ncyIsInBsYXkiLCJwYXVzZWQiLCJicm93c2UiLCJidXR0b25XYXRjaFZpZGVvIiwidmlld0NhdGVnb3J5Iiwic2VhcmNoIiwiZ2V0U2V0dGluZyIsImNhdGNoIiwidW51c2VkX3ZhcmlhYmxlIiwiYSIsImIiLCJzdHJpbmdzIiwib2xkTGFuZyIsIm9uIiwicHJlc2VuY2VEYXRhIiwic3RhcnRUaW1lc3RhbXAiLCJsYXJnZUltYWdlS2V5IiwiaHJlZiIsInBhdGhuYW1lIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsIm5ld0xhbmciLCJwcml2YWN5IiwiYnV0dG9ucyIsImNvdmVycyIsInZpZXdTdGF0ZSIsIlByb21pc2UiLCJhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGV0YWlscyIsInNldEFjdGl2aXR5IiwidmFsdWUiLCJpbmNsdWRlcyIsInNwbGl0Iiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzbWFsbEltYWdlS2V5IiwibGFiZWwiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJ2aWRlbyIsInRpdGxlIiwiaW5mb0pTT04iLCJKU09OIiwicGFyc2UiLCJwcm9wcyIsImluaXRpYWxQcm9wcyIsInBhZ2VQcm9wcyIsImluaXRGaWxtIiwiZHVyYXRpb24iLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzZnJvbU1lZGlhIiwibWF0Y2giLCJhdCIsInNtYWxsSW1hZ2VUZXh0IiwiY2hhckF0Iiwic2xpY2UiLCJnZW5yZXMiLCJ0b1N0cmluZyIsImRpcmVjdG9ycyIsImxlbmd0aCIsIm5hbWUiLCJtYXAiLCJ4Iiwiam9pbiIsImhpc3RvcmljX2NvdW50cmllcyIsInllYXIiLCJjb250ZW50IiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==
undefined;