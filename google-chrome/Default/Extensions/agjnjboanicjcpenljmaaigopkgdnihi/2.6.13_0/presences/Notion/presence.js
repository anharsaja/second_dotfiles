var __webpack_exports__={};const presence=new Presence({clientId:"926386695354609684"}),browsingTimestamp=Math.floor(Date.now()/1e3),shortenedURLs={};async function shortenURL(t,e){if(!t||t.length<256)return t;if(shortenedURLs[t])return shortenedURLs[t];try{return shortenedURLs[t]=await(await fetch(`https://pd.premid.app/create/${t}`)).text()}catch(t){return presence.error(t),e}}presence.on("UpdateData",(async()=>{const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/N/Notion/assets/logo.png",startTimestamp:browsingTimestamp},e=document.location.pathname,[i,n]=await Promise.all([presence.getSetting("title"),presence.getSetting("icon")]),a=document.querySelector("div.notion-overlay-container.notion-default-overlay-container div[class='notranslate'][contenteditable='true']"),o=document.querySelector(":is(.notion-frame, .notion-overlay-container.notion-default-overlay-container) .notion-record-icon div > div > img:not(.notion-emoji)");e.startsWith("/product")?t.details="/product"===e?"Viewing Home page":"Viewing Products page":e.startsWith("/templates")?t.details="Browsing templates":e.startsWith("/customers")?t.details="Viewing customers":e.startsWith("/desktop")||e.startsWith("/mobile")||e.startsWith("/web-clipper")?t.details="Viewing Downloads page":e.startsWith("/blog")?t.details="Reading blogs":e.startsWith("/guides")?t.details="Reading Guides & Tutorials":a||document.querySelector("div.notion-cursor-listener div.notion-frame > div:nth-child(2) > div > div")?(t.details="Editing a page",i&&(t.state=a?a.textContent||a.getAttribute("placeholder"):document.title),t.smallImageKey=i&&n?o?o.alt?`https://twemoji.maxcdn.com/v/latest/72x72/${o.alt.codePointAt(0).toString(16)}.png`:await shortenURL(o.src,"edit"):"edit":"https://cdn.rcd.gg/PreMiD/resources/writing.png",t.smallImageText="Editing"):document.querySelector("div.notion-topbar div.notion-focusable > div[class='notranslate']")&&(t.details="Reading a page",i&&(t.state=document.title),t.smallImageKey=i&&n?o?o.alt?`https://twemoji.maxcdn.com/v/latest/72x72/${o.alt.codePointAt(0).toString(16)}.png`:await shortenURL(o.src,"read"):"read":"https://cdn.rcd.gg/PreMiD/resources/reading.png",t.smallImageText="Reading"),presence.setActivity(t)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQU9DLGNBQWdCLENBQUMsRUFDeEVDLGVBQWVDLFdBQVdDLEVBQUtDLEdBQzNCLElBQUtELEdBQU9BLEVBQUlFLE9BQVMsSUFDckIsT0FBT0YsRUFDWCxHQUFJSCxjQUFjRyxHQUNkLE9BQU9ILGNBQWNHLEdBQ3pCLElBQ0ksT0FBUUgsY0FBY0csZUFBb0JHLE1BQU0sZ0NBQWdDSCxNQUFRSSxNQUs1RixDQUhBLE1BQU9DLEdBRUgsT0FEQWhCLFNBQVNpQixNQUFNRCxHQUNSSixDQUNYLENBQ0osQ0FDQVosU0FBU2tCLEdBQUcsY0FBY1QsVUFDdEIsTUFBTVUsRUFBZSxDQUNqQkMsY0FBZSw4REFDZkMsZUFBZ0JsQixtQkFDakJtQixFQUFPQyxTQUFTQyxTQUFTQyxVQUFXQyxFQUFPQyxTQUFzQkMsUUFBUUMsSUFBSSxDQUM1RTdCLFNBQVM4QixXQUFXLFNBQ3BCOUIsU0FBUzhCLFdBQVcsVUFDcEJDLEVBQWVSLFNBQVNTLGNBQWMsa0hBQW1IQyxFQUFXVixTQUFTUyxjQUFjLHlJQUMzTFYsRUFBS1ksV0FBVyxZQUVaZixFQUFhZ0IsUUFESixhQUFUYixFQUN1QixvQkFFQSx3QkFFdEJBLEVBQUtZLFdBQVcsY0FDckJmLEVBQWFnQixRQUFVLHFCQUNsQmIsRUFBS1ksV0FBVyxjQUNyQmYsRUFBYWdCLFFBQVUsb0JBQ2xCYixFQUFLWSxXQUFXLGFBQ3JCWixFQUFLWSxXQUFXLFlBQ2hCWixFQUFLWSxXQUFXLGdCQUNoQmYsRUFBYWdCLFFBQVUseUJBQ2xCYixFQUFLWSxXQUFXLFNBQ3JCZixFQUFhZ0IsUUFBVSxnQkFDbEJiLEVBQUtZLFdBQVcsV0FDckJmLEVBQWFnQixRQUFVLDZCQUNsQkosR0FDTFIsU0FBU1MsY0FBYywrRUFDdkJiLEVBQWFnQixRQUFVLGlCQUNuQlQsSUFJSVAsRUFBYWlCLE1BSFpMLEVBSUdBLEVBQWFNLGFBQWVOLEVBQWFPLGFBQWEsZUFIckNmLFNBQVNHLE9BT2xDUCxFQUFhb0IsY0FEYmIsR0FBU0MsRUFDb0JNLEVBQ3ZCQSxFQUFTTyxJQUNMLDZDQUE2Q1AsRUFBU08sSUFDbkRDLFlBQVksR0FDWkMsU0FBUyxnQkFDTmhDLFdBQVd1QixFQUFTVSxJQUFLLFFBQ25DLE9BR3VCLGtEQUNqQ3hCLEVBQWF5QixlQUFpQixXQUV6QnJCLFNBQVNTLGNBQWMsdUVBQzVCYixFQUFhZ0IsUUFBVSxpQkFDbkJULElBQ0FQLEVBQWFpQixNQUFRYixTQUFTRyxPQUU5QlAsRUFBYW9CLGNBRGJiLEdBQVNDLEVBQ29CTSxFQUN2QkEsRUFBU08sSUFDTCw2Q0FBNkNQLEVBQVNPLElBQ25EQyxZQUFZLEdBQ1pDLFNBQVMsZ0JBQ05oQyxXQUFXdUIsRUFBU1UsSUFBSyxRQUNuQyxPQUd1QixrREFDakN4QixFQUFheUIsZUFBaUIsV0FFbEM1QyxTQUFTNkMsWUFBWTFCLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTI2Mzg2Njk1MzU0NjA5Njg0XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSwgc2hvcnRlbmVkVVJMcyA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gc2hvcnRlblVSTCh1cmwsIGZhbGxiYWNrKSB7XG4gICAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA8IDI1NilcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICBpZiAoc2hvcnRlbmVkVVJMc1t1cmxdKVxuICAgICAgICByZXR1cm4gc2hvcnRlbmVkVVJMc1t1cmxdO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoc2hvcnRlbmVkVVJMc1t1cmxdID0gYXdhaXQgKGF3YWl0IGZldGNoKGBodHRwczovL3BkLnByZW1pZC5hcHAvY3JlYXRlLyR7dXJsfWApKS50ZXh0KCkpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHByZXNlbmNlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgICB9XG59XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL04vTm90aW9uL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgcGF0aCA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLCBbdGl0bGUsIHNob3dQYWdlSWNvbl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aXRsZVwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImljb25cIiksXG4gICAgXSksIG92ZXJsYXlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubm90aW9uLW92ZXJsYXktY29udGFpbmVyLm5vdGlvbi1kZWZhdWx0LW92ZXJsYXktY29udGFpbmVyIGRpdltjbGFzcz0nbm90cmFuc2xhdGUnXVtjb250ZW50ZWRpdGFibGU9J3RydWUnXVwiKSwgcGFnZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOmlzKC5ub3Rpb24tZnJhbWUsIC5ub3Rpb24tb3ZlcmxheS1jb250YWluZXIubm90aW9uLWRlZmF1bHQtb3ZlcmxheS1jb250YWluZXIpIC5ub3Rpb24tcmVjb3JkLWljb24gZGl2ID4gZGl2ID4gaW1nOm5vdCgubm90aW9uLWVtb2ppKVwiKTtcbiAgICBpZiAocGF0aC5zdGFydHNXaXRoKFwiL3Byb2R1Y3RcIikpIHtcbiAgICAgICAgaWYgKHBhdGggPT09IFwiL3Byb2R1Y3RcIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEhvbWUgcGFnZVwiO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBQcm9kdWN0cyBwYWdlXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGguc3RhcnRzV2l0aChcIi90ZW1wbGF0ZXNcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0ZW1wbGF0ZXNcIjtcbiAgICBlbHNlIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvY3VzdG9tZXJzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBjdXN0b21lcnNcIjtcbiAgICBlbHNlIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvZGVza3RvcFwiKSB8fFxuICAgICAgICBwYXRoLnN0YXJ0c1dpdGgoXCIvbW9iaWxlXCIpIHx8XG4gICAgICAgIHBhdGguc3RhcnRzV2l0aChcIi93ZWItY2xpcHBlclwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgRG93bmxvYWRzIHBhZ2VcIjtcbiAgICBlbHNlIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvYmxvZ1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYmxvZ3NcIjtcbiAgICBlbHNlIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvZ3VpZGVzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBHdWlkZXMgJiBUdXRvcmlhbHNcIjtcbiAgICBlbHNlIGlmIChvdmVybGF5VGl0bGUgfHxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5ub3Rpb24tY3Vyc29yLWxpc3RlbmVyIGRpdi5ub3Rpb24tZnJhbWUgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2XCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFZGl0aW5nIGEgcGFnZVwiO1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIGlmICghb3ZlcmxheVRpdGxlKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVRpdGxlLnRleHRDb250ZW50IHx8IG92ZXJsYXlUaXRsZS5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGl0bGUgJiYgc2hvd1BhZ2VJY29uKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHBhZ2VJY29uXG4gICAgICAgICAgICAgICAgPyBwYWdlSWNvbi5hbHRcbiAgICAgICAgICAgICAgICAgICAgPyBgaHR0cHM6Ly90d2Vtb2ppLm1heGNkbi5jb20vdi9sYXRlc3QvNzJ4NzIvJHtwYWdlSWNvbi5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlUG9pbnRBdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KX0ucG5nYFxuICAgICAgICAgICAgICAgICAgICA6IGF3YWl0IHNob3J0ZW5VUkwocGFnZUljb24uc3JjLCBcImVkaXRcIilcbiAgICAgICAgICAgICAgICA6IFwiZWRpdFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy93cml0aW5nLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIkVkaXRpbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5ub3Rpb24tdG9wYmFyIGRpdi5ub3Rpb24tZm9jdXNhYmxlID4gZGl2W2NsYXNzPSdub3RyYW5zbGF0ZSddXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIGEgcGFnZVwiO1xuICAgICAgICBpZiAodGl0bGUpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC50aXRsZTtcbiAgICAgICAgaWYgKHRpdGxlICYmIHNob3dQYWdlSWNvbikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBwYWdlSWNvblxuICAgICAgICAgICAgICAgID8gcGFnZUljb24uYWx0XG4gICAgICAgICAgICAgICAgICAgID8gYGh0dHBzOi8vdHdlbW9qaS5tYXhjZG4uY29tL3YvbGF0ZXN0LzcyeDcyLyR7cGFnZUljb24uYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAuY29kZVBvaW50QXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygxNil9LnBuZ2BcbiAgICAgICAgICAgICAgICAgICAgOiBhd2FpdCBzaG9ydGVuVVJMKHBhZ2VJY29uLnNyYywgXCJyZWFkXCIpXG4gICAgICAgICAgICAgICAgOiBcInJlYWRcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJSZWFkaW5nXCI7XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZEYWtRc1lVRkJZU3hIUVVFeVFpeEZRVUZGTEVOQlFVTTdRVUZGTlVNc1MwRkJTeXhWUVVGVkxGVkJRVlVzUTBGQlF5eEhRVUZYTEVWQlFVVXNVVUZCYVVJN1NVRkRka1FzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWM3VVVGQlJTeFBRVUZQTEVkQlFVY3NRMEZCUXp0SlFVTjZReXhKUVVGSkxHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZCUlN4UFFVRlBMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU5zUkN4SlFVRkpPMUZCUTBnc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUTJ4RExFMUJRVTBzUzBGQlN5eERRVUZETEdkRFFVRm5ReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVU5zUkN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03UzBGRFZqdEpRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZPMUZCUTJJc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTndRaXhQUVVGUExGRkJRVkVzUTBGQlF6dExRVU5vUWp0QlFVTkdMRU5CUVVNN1FVRkZSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeEZRVU5hTERaRVFVRTJSRHRSUVVNNVJDeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVWQlEwUXNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVU5xUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3haUVVGWkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRla01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4UFFVRlBMRU5CUVVNN1VVRkRja01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4TlFVRk5MRU5CUVVNN1MwRkRjRU1zUTBGQlF5eEZRVU5HTEZsQlFWa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOd1F5eG5TRUZCWjBnc1EwRkRhRWdzUlVGRFJDeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRhRU1zZFVsQlFYVkpMRU5CUTNaSkxFTkJRVU03U1VGRFNDeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3VVVGRGFFTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1ZVRkJWVHRaUVVGRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03TzFsQlF5OUVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN1MwRkRjRVE3VTBGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRM1pETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTTdVMEZEZUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTnlReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8xTkJRM1pETEVsQlEwb3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRE0wSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRE1VSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhqUVVGakxFTkJRVU03VVVGRkwwSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0VFFVTTFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRPMUZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTTdVMEZEY2tVc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTnNReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERSQ1FVRTBRaXhEUVVGRE8xTkJSV2hFTEVsQlEwb3NXVUZCV1R0UlFVTmFMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM0pDTERSRlFVRTBSU3hEUVVNMVJTeEZRVU5CTzFGQlEwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0UlFVTjRReXhKUVVGSkxFdEJRVXNzUlVGQlJUdFpRVU5XTEVsQlFVa3NRMEZCUXl4WlFVRlpPMmRDUVVGRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJRenRwUWtGRGJFUTdaMEpCUTBvc1dVRkJXU3hEUVVGRExFdEJRVXM3YjBKQlEycENMRmxCUVZrc1EwRkJReXhYUVVGWExFbEJRVWtzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRoUVVOMFJUdFRRVU5FTzFGQlJVUXNTVUZCU1N4TFFVRkxMRWxCUVVrc1dVRkJXU3hGUVVGRk8xbEJRekZDTEZsQlFWa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1VVRkJVVHRuUWtGRGNFTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSE8yOUNRVU5pTEVOQlFVTXNRMEZCUXl3MlEwRkJOa01zVVVGQlVTeERRVUZETEVkQlFVYzdlVUpCUTNoRUxGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdlVUpCUTJRc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTzI5Q1FVTnlRaXhEUVVGRExFTkJRVU1zVFVGQlRTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU03WjBKQlEzcERMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU03VTBGRFZqczdXVUZCVFN4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0UlFVTnVSQ3haUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEZOQlFWTXNRMEZCUXp0TFFVTjRRenRUUVVGTkxFbEJRMDRzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc2JVVkJRVzFGTEVOQlEyNUZMRVZCUTBFN1VVRkRSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xRkJRM2hETEVsQlFVa3NTMEZCU3p0WlFVRkZMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTXZReXhKUVVGSkxFdEJRVXNzU1VGQlNTeFpRVUZaTEVWQlFVVTdXVUZETVVJc1dVRkJXU3hEUVVGRExHRkJRV0VzUjBGQlJ5eFJRVUZSTzJkQ1FVTndReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVYzdiMEpCUTJJc1EwRkJReXhEUVVGRExEWkRRVUUyUXl4UlFVRlJMRU5CUVVNc1IwRkJSenQ1UWtGRGVFUXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenQ1UWtGRFpDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwN2IwSkJRM0pDTEVOQlFVTXNRMEZCUXl4TlFVRk5MRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXp0blFrRkRla01zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0VFFVTldPenRaUVVGTkxGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8xRkJRMjVFTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1UwRkJVeXhEUVVGRE8wdEJRM2hETzBsQlEwUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU53UXl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNob3J0ZW5lZFVSTHMiLCJhc3luYyIsInNob3J0ZW5VUkwiLCJ1cmwiLCJmYWxsYmFjayIsImxlbmd0aCIsImZldGNoIiwidGV4dCIsImVyciIsImVycm9yIiwib24iLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRoIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidGl0bGUiLCJzaG93UGFnZUljb24iLCJQcm9taXNlIiwiYWxsIiwiZ2V0U2V0dGluZyIsIm92ZXJsYXlUaXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlSWNvbiIsInN0YXJ0c1dpdGgiLCJkZXRhaWxzIiwic3RhdGUiLCJ0ZXh0Q29udGVudCIsImdldEF0dHJpYnV0ZSIsInNtYWxsSW1hZ2VLZXkiLCJhbHQiLCJjb2RlUG9pbnRBdCIsInRvU3RyaW5nIiwic3JjIiwic21hbGxJbWFnZVRleHQiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;