var __webpack_exports__={};const presence=new Presence({clientId:"1208682131392565320"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/M/ModDB/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t,href:s}=document.location,a=t.split("/"),i=await presence.getSetting("buttons");switch(a.shift(),!0){case t.startsWith("/members/register"):e.details="Registering";break;case/\/members\/[A-Za-z0-9-_.]*\/[a-z]*/.test(t):e.details=`Viewing ${a[1]}'s ${a[2]}`;break;case t.startsWith("/members/"):{const t=document.querySelector(".headercorner .title h2 a")?.textContent;e.details="Viewing member information",t&&(e.state=t);break}case/\/(games|mods|addons|downloads|engines|company|groups)\/(top|latest)/.test(t):o(),e.details=`Viewing ${a[1]} ${a[0]}`;break;case/\/(games|mods|addons|downloads|articles|engines|company|groups)\/add/.test(t):{const t=a[0].split("");"s"===t.at(-1)&&t.pop();const s=t.join("");e.details=`Adding a${s.startsWith("a")?"n":""} ${s}`;break}case/\/(games|mods)\/[A-Za-z0-9|-]{1,}\/(news|articles|tutorials|reviews|downloads|addons|mods|videos|images)(\/[A-Za-z0-9|-]{1,})?/.test(t):{const t=document.querySelector(".title h2[itemprop='name']")?.textContent;o();const s=a[0].split("");"s"===s.at(-1)&&s.pop();const i=s.join("");e.details=`Viewing ${t?`${t} ${i}`:`${i.startsWith("a")?"an":"a"} ${i}`}'s ${a[2]}`;const n=document.querySelector(".normalcorner .title .heading");n&&!n.textContent.startsWith("Reviews")&&(e.state=n.textContent);break}case/\/(games|mods)\/[A-Za-z0-9|-]{1,}/.test(t):{const t=document.querySelector(".title h2[itemprop='name']")?.textContent;o();const s=a[0].split("");"s"===s.at(-1)&&s.pop();const i=s.join("");e.details="Viewing "+(t?`${t} ${i}`:`${i.startsWith("a")?"an":"a"} ${i}`);break}case/\/mods\/[A-Za-z0-9|-]{1,}/.test(t):{const t=document.querySelector(".title h2 a")?.textContent;o(),e.details="Viewing "+(t?`${t} mod`:"a mod");break}case/\/rtx(\/)?[a-z]?/.test(t):o(),e.details=`Viewing ${document.querySelector(".normalcorner .title .heading")?.textContent.split("  ")[0]}`;break;case t.startsWith("/jobs/add"):o(),e.details="Posting a job";break;case/\/games|mods|addons|downloads|videos|articles|engines|company|groups|jobs/.test(t):{o();let t=a[0];"company"===t&&(t="developers"),e.details=`Viewing ${t}`;break}case t.startsWith("/about"):o(),e.details="Viewing about page";break;case"/"===t:o(),e.details="Viewing home page";break;case t.startsWith("/today"):o(),e.details="Viewing files uploaded today";break;case/(\/)(week|month|year)/.test(t):o(),e.details=`Viewing files uploaded this ${a[0]}`;break;case/reviews|headline|blogs|images|audio/.test(t):e.details=`Viewing ${a[0]}`;break;case t.startsWith("/forum"):{o(),e.details="Viewing forums";const t=document.querySelector("tr.category td .heading")?.textContent;e.state=t&&"Your Favorites"!==t?t:"Site Forums";break}}function o(){i&&(e.buttons=[{label:"View",url:s}])}e.details=e.details.toString(),a.includes("downloads")&&(e.details=e.details.replace("downloads","files")),a.includes("top")&&(e.details=e.details.replace("top","popular")),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWEsUUFBVSxXQUFXUCxJQUNsQyxLQUNKLENBQ0osS0FBS0gsRUFBU1MsV0FBVyxVQUNyQk8sSUFDQW5CLEVBQWFhLFFBQVUscUJBQ3ZCLE1BQ0osSUFBa0IsTUFBYlYsRUFDRGdCLElBQ0FuQixFQUFhYSxRQUFVLG9CQUN2QixNQUNKLEtBQUtWLEVBQVNTLFdBQVcsVUFDckJPLElBQ0FuQixFQUFhYSxRQUFVLCtCQUN2QixNQUNKLElBQUssd0JBQXdCQyxLQUFLWCxHQUM5QmdCLElBQ0FuQixFQUFhYSxRQUFVLCtCQUErQk4sRUFBVSxLQUNoRSxNQUNKLElBQUssc0NBQXNDTyxLQUFLWCxHQUM1Q0gsRUFBYWEsUUFBVSxXQUFXTixFQUFVLEtBQzVDLE1BQ0osS0FBS0osRUFBU1MsV0FBVyxVQUFXLENBQ2hDTyxJQUNBbkIsRUFBYWEsUUFBVSxpQkFDdkIsTUFBTWEsRUFBVXJCLFNBQVNXLGNBQWMsNEJBQTRCQyxZQUUvRGpCLEVBQWFrQixNQURiUSxHQUF1QixtQkFBWkEsRUFDVUEsRUFFQSxjQUN6QixLQUNKLEVBRUosU0FBU1AsSUFDQVYsSUFFTFQsRUFBYTRCLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxPQUNQQyxJQUFLMUIsSUFHakIsQ0FDQUosRUFBYWEsUUFBVWIsRUFBYWEsUUFBUWtCLFdBQ3hDeEIsRUFBVXlCLFNBQVMsZUFDbkJoQyxFQUFhYSxRQUFVYixFQUFhYSxRQUFRb0IsUUFBUSxZQUFhLFVBQ2pFMUIsRUFBVXlCLFNBQVMsU0FDbkJoQyxFQUFhYSxRQUFVYixFQUFhYSxRQUFRb0IsUUFBUSxNQUFPLFlBQy9EM0MsU0FBUzRDLFlBQVlsQyxFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjEyMDg2ODIxMzEzOTI1NjUzMjBcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9NL01vZERCL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSwgaHJlZiB9ID0gZG9jdW1lbnQubG9jYXRpb24sIGxvY2F0aW9ucyA9IHBhdGhuYW1lLnNwbGl0KFwiL1wiKSwgc2hvd0J1dHRvbnMgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKTtcbiAgICBsb2NhdGlvbnMuc2hpZnQoKTtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBwYXRobmFtZS5zdGFydHNXaXRoKFwiL21lbWJlcnMvcmVnaXN0ZXJcIik6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnaXN0ZXJpbmdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIC9cXC9tZW1iZXJzXFwvW0EtWmEtejAtOS1fLl0qXFwvW2Etel0qLy50ZXN0KHBhdGhuYW1lKTpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHtsb2NhdGlvbnNbMV19J3MgJHtsb2NhdGlvbnNbMl19YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvbWVtYmVycy9cIik6IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcmNvcm5lciAudGl0bGUgaDIgYVwiKT8udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBtZW1iZXIgaW5mb3JtYXRpb25cIjtcbiAgICAgICAgICAgIGlmIChuYW1lKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IG5hbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIC9cXC8oZ2FtZXN8bW9kc3xhZGRvbnN8ZG93bmxvYWRzfGVuZ2luZXN8Y29tcGFueXxncm91cHMpXFwvKHRvcHxsYXRlc3QpLy50ZXN0KHBhdGhuYW1lKTpcbiAgICAgICAgICAgIHNob3dMaW5rQnV0dG9uKCk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7bG9jYXRpb25zWzFdfSAke2xvY2F0aW9uc1swXX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgL1xcLyhnYW1lc3xtb2RzfGFkZG9uc3xkb3dubG9hZHN8YXJ0aWNsZXN8ZW5naW5lc3xjb21wYW55fGdyb3VwcylcXC9hZGQvLnRlc3QocGF0aG5hbWUpOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBsb2NhdGlvbnNbMF0uc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUuYXQoLTEpID09PSBcInNcIilcbiAgICAgICAgICAgICAgICAgICAgdHlwZS5wb3AoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlSm9pbmVkID0gdHlwZS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYEFkZGluZyBhJHt0eXBlSm9pbmVkLnN0YXJ0c1dpdGgoXCJhXCIpID8gXCJuXCIgOiBcIlwifSAke3R5cGVKb2luZWR9YDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAvXFwvKGdhbWVzfG1vZHMpXFwvW0EtWmEtejAtOXwtXXsxLH1cXC8obmV3c3xhcnRpY2xlc3x0dXRvcmlhbHN8cmV2aWV3c3xkb3dubG9hZHN8YWRkb25zfG1vZHN8dmlkZW9zfGltYWdlcykoXFwvW0EtWmEtejAtOXwtXXsxLH0pPy8udGVzdChwYXRobmFtZSk6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlIGgyW2l0ZW1wcm9wPSduYW1lJ11cIik/LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHNob3dMaW5rQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGxvY2F0aW9uc1swXS5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZS5hdCgtMSkgPT09IFwic1wiKVxuICAgICAgICAgICAgICAgICAgICB0eXBlLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVKb2luZWQgPSB0eXBlLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmlld2luZyAke2dhbWVOYW1lXG4gICAgICAgICAgICAgICAgICAgID8gYCR7Z2FtZU5hbWV9ICR7dHlwZUpvaW5lZH1gXG4gICAgICAgICAgICAgICAgICAgIDogYCR7dHlwZUpvaW5lZC5zdGFydHNXaXRoKFwiYVwiKSA/IFwiYW5cIiA6IFwiYVwifSAke3R5cGVKb2luZWR9YH0ncyAke2xvY2F0aW9uc1syXX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vcm1hbGNvcm5lciAudGl0bGUgLmhlYWRpbmdcIik7XG4gICAgICAgICAgICAgICAgaWYgKGhlYWRpbmcgJiYgIWhlYWRpbmcudGV4dENvbnRlbnQuc3RhcnRzV2l0aChcIlJldmlld3NcIikpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGhlYWRpbmcudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgL1xcLyhnYW1lc3xtb2RzKVxcL1tBLVphLXowLTl8LV17MSx9Ly50ZXN0KHBhdGhuYW1lKToge1xuICAgICAgICAgICAgY29uc3QgZ2FtZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlIGgyW2l0ZW1wcm9wPSduYW1lJ11cIik/LnRleHRDb250ZW50O1xuICAgICAgICAgICAgc2hvd0xpbmtCdXR0b24oKTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBsb2NhdGlvbnNbMF0uc3BsaXQoXCJcIik7XG4gICAgICAgICAgICBpZiAodHlwZS5hdCgtMSkgPT09IFwic1wiKVxuICAgICAgICAgICAgICAgIHR5cGUucG9wKCk7XG4gICAgICAgICAgICBjb25zdCB0eXBlSm9pbmVkID0gdHlwZS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmlld2luZyAke2dhbWVOYW1lXG4gICAgICAgICAgICAgICAgPyBgJHtnYW1lTmFtZX0gJHt0eXBlSm9pbmVkfWBcbiAgICAgICAgICAgICAgICA6IGAke3R5cGVKb2luZWQuc3RhcnRzV2l0aChcImFcIikgPyBcImFuXCIgOiBcImFcIn0gJHt0eXBlSm9pbmVkfWB9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgL1xcL21vZHNcXC9bQS1aYS16MC05fC1dezEsfS8udGVzdChwYXRobmFtZSk6IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlIGgyIGFcIik/LnRleHRDb250ZW50O1xuICAgICAgICAgICAgc2hvd0xpbmtCdXR0b24oKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHttb2ROYW1lID8gYCR7bW9kTmFtZX0gbW9kYCA6IFwiYSBtb2RcIn1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAvXFwvcnR4KFxcLyk/W2Etel0/Ly50ZXN0KHBhdGhuYW1lKTpcbiAgICAgICAgICAgIHNob3dMaW5rQnV0dG9uKCk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5ub3JtYWxjb3JuZXIgLnRpdGxlIC5oZWFkaW5nXCIpXG4gICAgICAgICAgICAgICAgPy50ZXh0Q29udGVudC5zcGxpdChcIiDCoFwiKVswXX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuc3RhcnRzV2l0aChcIi9qb2JzL2FkZFwiKTpcbiAgICAgICAgICAgIHNob3dMaW5rQnV0dG9uKCk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUG9zdGluZyBhIGpvYlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgL1xcL2dhbWVzfG1vZHN8YWRkb25zfGRvd25sb2Fkc3x2aWRlb3N8YXJ0aWNsZXN8ZW5naW5lc3xjb21wYW55fGdyb3Vwc3xqb2JzLy50ZXN0KHBhdGhuYW1lKTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaG93TGlua0J1dHRvbigpO1xuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGxvY2F0aW9uc1swXTtcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gPT09IFwiY29tcGFueVwiKVxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IFwiZGV2ZWxvcGVyc1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHtsb2NhdGlvbn1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYWJvdXRcIik6XG4gICAgICAgICAgICBzaG93TGlua0J1dHRvbigpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYWJvdXQgcGFnZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF0aG5hbWUgPT09IFwiL1wiOlxuICAgICAgICAgICAgc2hvd0xpbmtCdXR0b24oKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGhvbWUgcGFnZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuc3RhcnRzV2l0aChcIi90b2RheVwiKTpcbiAgICAgICAgICAgIHNob3dMaW5rQnV0dG9uKCk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBmaWxlcyB1cGxvYWRlZCB0b2RheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgLyhcXC8pKHdlZWt8bW9udGh8eWVhcikvLnRlc3QocGF0aG5hbWUpOlxuICAgICAgICAgICAgc2hvd0xpbmtCdXR0b24oKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgZmlsZXMgdXBsb2FkZWQgdGhpcyAke2xvY2F0aW9uc1swXX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgL3Jldmlld3N8aGVhZGxpbmV8YmxvZ3N8aW1hZ2VzfGF1ZGlvLy50ZXN0KHBhdGhuYW1lKTpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHtsb2NhdGlvbnNbMF19YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZm9ydW1cIik6IHtcbiAgICAgICAgICAgIHNob3dMaW5rQnV0dG9uKCk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBmb3J1bXNcIjtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidHIuY2F0ZWdvcnkgdGQgLmhlYWRpbmdcIik/LnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKGhlYWRpbmcgJiYgaGVhZGluZyAhPT0gXCJZb3VyIEZhdm9yaXRlc1wiKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGhlYWRpbmc7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJTaXRlIEZvcnVtc1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2hvd0xpbmtCdXR0b24oKSB7XG4gICAgICAgIGlmICghc2hvd0J1dHRvbnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXdcIixcbiAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHByZXNlbmNlRGF0YS5kZXRhaWxzLnRvU3RyaW5nKCk7XG4gICAgaWYgKGxvY2F0aW9ucy5pbmNsdWRlcyhcImRvd25sb2Fkc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwcmVzZW5jZURhdGEuZGV0YWlscy5yZXBsYWNlKFwiZG93bmxvYWRzXCIsIFwiZmlsZXNcIik7XG4gICAgaWYgKGxvY2F0aW9ucy5pbmNsdWRlcyhcInRvcFwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwcmVzZW5jZURhdGEuZGV0YWlscy5yZXBsYWNlKFwidG9wXCIsIFwicG9wdWxhclwiKTtcbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNPME5CUXk5Q0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVTF1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYWtNc1lVRkJZU3c0UkVGQllUdFJRVU14UWl4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRVZCUTBRc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkRkRU1zVTBGQlV5eEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJReTlDTEZkQlFWY3NSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzVTBGQlV5eERRVUZETEVOQlFVTTdTVUZETjBRc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzBsQlEyeENMRkZCUVZFc1NVRkJTU3hGUVVGRk8xRkJRMklzUzBGQlN5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRzFDUVVGdFFpeERRVUZETzFsQlF6VkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzFsQlEzSkRMRTFCUVUwN1VVRkRVQ3hMUVVGTExHOURRVUZ2UXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGRGRrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhYUVVGWExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU51UlN4TlFVRk5PMUZCUTFBc1MwRkJTeXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRU1zVFVGQlRTeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRiRU1zTWtKQlFUSkNMRU5CUXpOQ0xFVkJRVVVzVjBGQlZ5eERRVUZETzFsQlEyWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcwUWtGQk5FSXNRMEZCUXp0WlFVTndSQ3hKUVVGSkxFbEJRVWs3WjBKQlFVVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGNFTXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXh6UlVGQmMwVXNRMEZCUXl4SlFVRkpMRU5CUXk5RkxGRkJRVkVzUTBGRFVqdFpRVU5CTEdOQlFXTXNSVUZCUlN4RFFVRkRPMWxCUTJwQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1dVRkRha1VzVFVGQlRUdFJRVU5RTEV0QlFVc3NjMFZCUVhORkxFTkJRVU1zU1VGQlNTeERRVU12UlN4UlFVRlJMRU5CUTFJN1dVRkJSVHRuUWtGRFJpeE5RVUZOTEVsQlFVa3NSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVOd1F5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITzI5Q1FVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VNc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGFrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhYUVVOMFFpeFZRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTNCRExFbEJRVWtzVlVGQlZTeEZRVUZGTEVOQlFVTTdaMEpCUTJwQ0xFMUJRVTA3WVVGRFRqdFJRVU5FTEV0QlFVc3NaMGxCUVdkSkxFTkJRVU1zU1VGQlNTeERRVU42U1N4UlFVRlJMRU5CUTFJN1dVRkJSVHRuUWtGRFJpeE5RVUZOTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOMFF5dzBRa0ZCTkVJc1EwRkROVUlzUlVGQlJTeFhRVUZYTEVOQlFVTTdaMEpCUTJZc1kwRkJZeXhGUVVGRkxFTkJRVU03WjBKQlEycENMRTFCUVUwc1NVRkJTU3hIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEzQkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjN2IwSkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOd1F5eE5RVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTnFReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZkQlEzUkNMRkZCUVZFN2IwSkJRMUFzUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4SlFVRkpMRlZCUVZVc1JVRkJSVHR2UWtGRE4wSXNRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NWVUZCVlN4RlFVTTFSQ3hOUVVGTkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOeVFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN1owSkJRM2hGTEVsQlFVa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRPMjlDUVVONFJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU03WjBKQlF6RkRMRTFCUVUwN1lVRkRUanRSUVVORUxFdEJRVXNzYlVOQlFXMURMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZUVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEZEVNc05FSkJRVFJDTEVOQlF6VkNMRVZCUVVVc1YwRkJWeXhEUVVGRE8xbEJRMllzWTBGQll5eEZRVUZGTEVOQlFVTTdXVUZEYWtJc1RVRkJUU3hKUVVGSkxFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhPMmRDUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTndReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMnBETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1YwRkRkRUlzVVVGQlVUdG5Ra0ZEVUN4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFbEJRVWtzVlVGQlZTeEZRVUZGTzJkQ1FVTTNRaXhEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hWUVVGVkxFVkJRelZFTEVWQlFVVXNRMEZCUXp0WlFVTklMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzTWtKQlFUSkNMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVRc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJSU3hYUVVGWExFTkJRVU03V1VGRGJrVXNZMEZCWXl4RlFVRkZMRU5CUVVNN1dVRkRha0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WFFVRlhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03V1VGRGVrVXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhyUWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRE8xbEJRM0pETEdOQlFXTXNSVUZCUlN4RFFVRkRPMWxCUTJwQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZEZEVJc1VVRkJVVHRwUWtGRFRpeGhRVUZoTEVOQlFVTXNLMEpCUVN0Q0xFTkJRVU03WjBKQlF5OURMRVZCUVVVc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUXpkQ0xFVkJRVVVzUTBGQlF6dFpRVU5JTEUxQlFVMDdVVUZEVUN4TFFVRkxMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlEzQkRMR05CUVdNc1JVRkJSU3hEUVVGRE8xbEJRMnBDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1pVRkJaU3hEUVVGRE8xbEJRM1pETEUxQlFVMDdVVUZEVUN4TFFVRkxMREpGUVVFeVJTeERRVUZETEVsQlFVa3NRMEZEY0VZc1VVRkJVU3hEUVVOU08xbEJRVVU3WjBKQlEwWXNZMEZCWXl4RlFVRkZMRU5CUVVNN1owSkJRMnBDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETlVJc1NVRkJTU3hSUVVGUkxFdEJRVXNzVTBGQlV6dHZRa0ZCUlN4UlFVRlJMRWRCUVVjc1dVRkJXU3hEUVVGRE8yZENRVU53UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRVmNzVVVGQlVTeEZRVUZGTEVOQlFVTTdaMEpCUXpkRExFMUJRVTA3WVVGRFRqdFJRVU5FTEV0QlFVc3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGRGFrTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1dVRkRha0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dFpRVU0xUXl4TlFVRk5PMUZCUTFBc1MwRkJTeXhSUVVGUkxFdEJRVXNzUjBGQlJ6dFpRVU53UWl4alFVRmpMRVZCUVVVc1EwRkJRenRaUVVOcVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzFsQlF6TkRMRTFCUVUwN1VVRkRVQ3hMUVVGTExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUTJwRExHTkJRV01zUlVGQlJTeERRVUZETzFsQlEycENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzT0VKQlFUaENMRU5CUVVNN1dVRkRkRVFzVFVGQlRUdFJRVU5RTEV0QlFVc3NkVUpCUVhWQ0xFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0WlFVTXhReXhqUVVGakxFVkJRVVVzUTBGQlF6dFpRVU5xUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExDdENRVUVyUWl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU55UlN4TlFVRk5PMUZCUTFBc1MwRkJTeXh4UTBGQmNVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRE8xbEJRM2hFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1YwRkJWeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0WlFVTnFSQ3hOUVVGTk8xRkJRMUFzUzBGQlN5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1dVRkRha0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUTBGQlF6dFpRVU40UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UXl4NVFrRkJlVUlzUTBGRGVrSXNSVUZCUlN4WFFVRlhMRU5CUVVNN1dVRkRaaXhKUVVGSkxFOUJRVThzU1VGQlNTeFBRVUZQTEV0QlFVc3NaMEpCUVdkQ08yZENRVUZGTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRE96dG5Ra0ZEY2tVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGhRVUZoTEVOQlFVTTdXVUZEZUVNc1RVRkJUVHRUUVVOT08wdEJRMFE3U1VGRFJDeFRRVUZUTEdOQlFXTTdVVUZEZEVJc1NVRkJTU3hEUVVGRExGZEJRVmM3V1VGQlJTeFBRVUZQTzFGQlEzcENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3V1VGRGRFSTdaMEpCUTBNc1MwRkJTeXhGUVVGRkxFMUJRVTA3WjBKQlEySXNSMEZCUnl4RlFVRkZMRWxCUVVrN1lVRkRWRHRUUVVORUxFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNaRUxFbEJRVWtzVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRiRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRNMFVzU1VGQlNTeFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVNMVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVOMlJTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRM0JETEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsImhyZWYiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwibG9jYXRpb25zIiwic3BsaXQiLCJzaG93QnV0dG9ucyIsImdldFNldHRpbmciLCJzaGlmdCIsInN0YXJ0c1dpdGgiLCJkZXRhaWxzIiwidGVzdCIsIm5hbWUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzdGF0ZSIsInNob3dMaW5rQnV0dG9uIiwidHlwZSIsImF0IiwicG9wIiwidHlwZUpvaW5lZCIsImpvaW4iLCJnYW1lTmFtZSIsImhlYWRpbmciLCJtb2ROYW1lIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;