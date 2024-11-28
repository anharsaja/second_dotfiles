var __webpack_exports__={};const presence=new Presence({clientId:"814919836835905566"}),tmb=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Google%20Fonts/assets/logo.png",smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Google%20Fonts/assets/0.png",startTimestamp:tmb},t=document.location.pathname.toLowerCase(),o=await presence.getSetting("showButton");if("/"===t){const t=document.querySelector("#main-content > gf-global-toolbar > div.global-toolbar__filters-area > gf-global-filters-row > div > div > gf-toolbar-category-filter > button > span.mat-button-wrapper").querySelectorAll(".gf-outlined-menu-button-content")[0].textContent;" Categories "===t?e.state="All categories":t.includes("+")?e.state=`Categories: ${new URL(document.location.href).searchParams.get("category").replace(/,/gi,", ")}`:e.state=`Category: ${t}`,e.details="Browsing fonts"}else if(t.includes("/specimen"))e.details=`Looking at font: ${document.querySelector("#main-content > gf-sticky-header > div > h1").textContent}`,e.state=`Viewing the "${document.querySelectorAll(".gf-nav__link--active")[0].textContent.trim()}" tab`,o&&(e.buttons=[{label:"View font",url:document.URL}]);else if("/featured"===t)e.details="Looking at the featured fonts";else if(t.includes("/featured/")){let t;document.querySelectorAll(".gmat-headline-1")[0]?t=document.querySelectorAll(".gmat-headline-1")[0].textContent:document.querySelectorAll(".gmat-headline-1")[0]||(t=document.querySelectorAll(".gmat-headline-4")[0].textContent),e.details="Looking at a featured font:",e.state=t,o&&(e.buttons=[{label:"View featured font",url:document.URL}])}else"/icons"===t?null===new URL(document.location.href).searchParams.get("icon.query")?document.querySelectorAll(".mdc-chip--selected")[0]?(e.details="Browsing Material icons",e.state=`Looking at the ${document.querySelectorAll(".mdc-chip--selected")[0].textContent.toLowerCase()} icons`):(e.details="Browsing Material icons",e.state="Looking at all icons"):(e.details="Searching for icons",e.state=`Search query: ${new URL(document.location.href).searchParams.get("icon.query")}`):"/about"===t&&(e.details="Viewing the about page");e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsSUFBTUMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUNsQ1AsU0FBU1EsR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLHNFQUNmQyxjQUFlLG1FQUNmQyxlQUFnQlYsS0FDakJXLEVBQU9DLFNBQVNDLFNBQVNDLFNBQVNDLGNBQWVDLFFBQW1CbkIsU0FBU29CLFdBQVcsY0FDM0YsR0FBYSxNQUFUTixFQUFjLENBQ2QsTUFBTU8sRUFBUU4sU0FDVE8sY0FBYyw0S0FDZEMsaUJBQWlCLG9DQUFvQyxHQUFHQyxZQUMvQyxpQkFBVkgsRUFDQVgsRUFBYWUsTUFBUSxpQkFDaEJKLEVBQU1LLFNBQVMsS0FDcEJoQixFQUFhZSxNQUFRLGVBQWUsSUFBSUUsSUFBSVosU0FBU0MsU0FBU1ksTUFBTUMsYUFDL0RDLElBQUksWUFDSkMsUUFBUSxNQUFPLFFBR3BCckIsRUFBYWUsTUFBUSxhQUFhSixJQUN0Q1gsRUFBYXNCLFFBQVUsZ0JBQzNCLE1BQ0ssR0FBSWxCLEVBQUtZLFNBQVMsYUFDbkJoQixFQUFhc0IsUUFBVSxvQkFBb0JqQixTQUFTTyxjQUFjLCtDQUM3REUsY0FDTGQsRUFBYWUsTUFBUSxnQkFBZ0JWLFNBQ2hDUSxpQkFBaUIseUJBQXlCLEdBQzFDQyxZQUFZUyxjQUNiZCxJQUNBVCxFQUFhd0IsUUFBVSxDQUNuQixDQUNJQyxNQUFPLFlBQ1BDLElBQUtyQixTQUFTWSxZQUt6QixHQUFhLGNBQVRiLEVBQ0xKLEVBQWFzQixRQUFVLHFDQUN0QixHQUFJbEIsRUFBS1ksU0FBUyxjQUFlLENBQ2xDLElBQUlXLEVBQ0F0QixTQUFTUSxpQkFBaUIsb0JBQW9CLEdBQzlDYyxFQUNJdEIsU0FBU1EsaUJBQWlCLG9CQUFvQixHQUFHQyxZQUUvQ1QsU0FBU1EsaUJBQWlCLG9CQUFvQixLQUNwRGMsRUFDSXRCLFNBQVNRLGlCQUFpQixvQkFBb0IsR0FBR0MsYUFFekRkLEVBQWFzQixRQUFVLDhCQUN2QnRCLEVBQWFlLE1BQVFZLEVBQ2pCbEIsSUFDQVQsRUFBYXdCLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxxQkFDUEMsSUFBS3JCLFNBQVNZLE1BSTlCLEtBQ2tCLFdBQVRiLEVBQ2tFLE9BQW5FLElBQUlhLElBQUlaLFNBQVNDLFNBQVNZLE1BQU1DLGFBQWFDLElBQUksY0FDN0NmLFNBQVNRLGlCQUFpQix1QkFBdUIsSUFDakRiLEVBQWFzQixRQUFVLDBCQUN2QnRCLEVBQWFlLE1BQVEsa0JBQWtCVixTQUNsQ1EsaUJBQWlCLHVCQUF1QixHQUN4Q0MsWUFBWU4sd0JBR2pCUixFQUFhc0IsUUFBVSwwQkFDdkJ0QixFQUFhZSxNQUFRLHlCQUl6QmYsRUFBYXNCLFFBQVUsc0JBQ3ZCdEIsRUFBYWUsTUFBUSxpQkFBaUIsSUFBSUUsSUFBSVosU0FBU0MsU0FBU1ksTUFBTUMsYUFBYUMsSUFBSSxpQkFHN0UsV0FBVGhCLElBQ0xKLEVBQWFzQixRQUFVLDBCQUN2QnRCLEVBQWFzQixRQUNiaEMsU0FBU3NDLFlBQVk1QixHQUVyQlYsU0FBU3NDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODE0OTE5ODM2ODM1OTA1NTY2XCIsXG59KSwgdG1iID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR29vZ2xlJTIwRm9udHMvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dvb2dsZSUyMEZvbnRzL2Fzc2V0cy8wLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogdG1iLFxuICAgIH0sIHBhdGggPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS50b0xvd2VyQ2FzZSgpLCBzaG93QnV0dG9uID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInNob3dCdXR0b25cIik7XG4gICAgaWYgKHBhdGggPT09IFwiL1wiKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudCA+IGdmLWdsb2JhbC10b29sYmFyID4gZGl2Lmdsb2JhbC10b29sYmFyX19maWx0ZXJzLWFyZWEgPiBnZi1nbG9iYWwtZmlsdGVycy1yb3cgPiBkaXYgPiBkaXYgPiBnZi10b29sYmFyLWNhdGVnb3J5LWZpbHRlciA+IGJ1dHRvbiA+IHNwYW4ubWF0LWJ1dHRvbi13cmFwcGVyXCIpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5nZi1vdXRsaW5lZC1tZW51LWJ1dHRvbi1jb250ZW50XCIpWzBdLnRleHRDb250ZW50O1xuICAgICAgICBpZiAoY2F0ZWcgPT09IFwiIENhdGVnb3JpZXMgXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkFsbCBjYXRlZ29yaWVzXCI7XG4gICAgICAgIGVsc2UgaWYgKGNhdGVnLmluY2x1ZGVzKFwiK1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYENhdGVnb3JpZXM6ICR7bmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXNcbiAgICAgICAgICAgICAgICAuZ2V0KFwiY2F0ZWdvcnlcIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvLC9naSwgXCIsIFwiKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBDYXRlZ29yeTogJHtjYXRlZ31gO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgZm9udHNcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aC5pbmNsdWRlcyhcIi9zcGVjaW1lblwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBMb29raW5nIGF0IGZvbnQ6ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnQgPiBnZi1zdGlja3ktaGVhZGVyID4gZGl2ID4gaDFcIilcbiAgICAgICAgICAgIC50ZXh0Q29udGVudH1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgVmlld2luZyB0aGUgXCIke2RvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5nZi1uYXZfX2xpbmstLWFjdGl2ZVwiKVswXVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKX1cIiB0YWJgO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IGZvbnRcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5VUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aCA9PT0gXCIvZmVhdHVyZWRcIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgdGhlIGZlYXR1cmVkIGZvbnRzXCI7XG4gICAgZWxzZSBpZiAocGF0aC5pbmNsdWRlcyhcIi9mZWF0dXJlZC9cIikpIHtcbiAgICAgICAgbGV0IGZlYXR1cmVkRm9udHM7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdtYXQtaGVhZGxpbmUtMVwiKVswXSkge1xuICAgICAgICAgICAgZmVhdHVyZWRGb250cyA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nbWF0LWhlYWRsaW5lLTFcIilbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ21hdC1oZWFkbGluZS0xXCIpWzBdKSB7XG4gICAgICAgICAgICBmZWF0dXJlZEZvbnRzID1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdtYXQtaGVhZGxpbmUtNFwiKVswXS50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBhdCBhIGZlYXR1cmVkIGZvbnQ6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGZlYXR1cmVkRm9udHM7XG4gICAgICAgIGlmIChzaG93QnV0dG9uKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgZmVhdHVyZWQgZm9udFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGRvY3VtZW50LlVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoID09PSBcIi9pY29uc1wiKSB7XG4gICAgICAgIGlmIChuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJpY29uLnF1ZXJ5XCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZGMtY2hpcC0tc2VsZWN0ZWRcIilbMF0pIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgTWF0ZXJpYWwgaWNvbnNcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgTG9va2luZyBhdCB0aGUgJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tZGMtY2hpcC0tc2VsZWN0ZWRcIilbMF1cbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCl9IGljb25zYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBNYXRlcmlhbCBpY29uc1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiTG9va2luZyBhdCBhbGwgaWNvbnNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbmcgZm9yIGljb25zXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgU2VhcmNoIHF1ZXJ5OiAke25ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zLmdldChcImljb24ucXVlcnlcIil9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoID09PSBcIi9hYm91dFwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgYWJvdXQgcGFnZVwiO1xuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRmNrTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEycERMR0ZCUVdFc1JVRkRXaXh4UlVGQmNVVTdVVUZEZEVVc1lVRkJZU3hGUVVOYUxHdEZRVUZyUlR0UlFVTnVSU3hqUVVGakxFVkJRVVVzUjBGQlJ6dExRVU51UWl4RlFVTkVMRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkRMME1zVlVGQlZTeEhRVUZITEUxQlFVMHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3haUVVGWkxFTkJRVU1zUTBGQlF6dEpRVVV2UkN4SlFVRkpMRWxCUVVrc1MwRkJTeXhIUVVGSExFVkJRVVU3VVVGRGFrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1VVRkJVVHRoUVVOd1FpeGhRVUZoTEVOQlEySXNNRXRCUVRCTExFTkJRekZMTzJGQlEwRXNaMEpCUVdkQ0xFTkJRVU1zYTBOQlFXdERMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEZEVVc1NVRkJTU3hMUVVGTExFdEJRVXNzWTBGQll6dFpRVUZGTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdZVUZETDBRc1NVRkJTU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXpkQ0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NaVUZCWlN4SlFVRkpMRWRCUVVjc1EwRkRNVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUTNSQ0xFTkJRVU1zV1VGQldUdHBRa0ZEV2l4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRE8ybENRVU5tTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dFRRVU42UWpzN1dVRkJUU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdGQlFXRXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRha1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUTBGQlF6dExRVU40UXp0VFFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0UlFVTjBReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEc5Q1FVTjBRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETERaRFFVRTJReXhEUVVGRE8yRkJRMjVGTEZkQlEwZ3NSVUZCUlN4RFFVRkRPMUZCUTBnc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eG5Ra0ZCWjBJc1VVRkJVVHRoUVVNelF5eG5Ra0ZCWjBJc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNMVF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJRenRSUVVNMVFpeEpRVUZKTEZWQlFWVXNSVUZCUlR0WlFVTm1MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3WjBKQlEzUkNPMjlDUVVORExFdEJRVXNzUlVGQlJTeFhRVUZYTzI5Q1FVTnNRaXhIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEVkQlFVYzdhVUpCUTJwQ08yRkJRMFFzUTBGQlF6dFRRVU5HTzB0QlEwUTdVMEZCVFN4SlFVRkpMRWxCUVVrc1MwRkJTeXhYUVVGWE8xRkJRemxDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc0swSkJRU3RDTEVOQlFVTTdVMEZEYmtRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZPMUZCUTNKRExFbEJRVWtzWVVGQllTeERRVUZETzFGQlEyeENMRWxCUVVrc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRja1FzWVVGQllUdG5Ra0ZEV2l4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkRPVVE3WVVGQlRTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdXVUZETjBRc1lVRkJZVHRuUWtGRFdpeFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdVMEZET1VRN1VVRkRSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERaQ1FVRTJRaXhEUVVGRE8xRkJRM0pFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1lVRkJZU3hEUVVGRE8xRkJSVzVETEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTJZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dG5Ra0ZEZEVJN2IwSkJRME1zUzBGQlN5eEZRVUZGTEc5Q1FVRnZRanR2UWtGRE0wSXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSE8ybENRVU5xUWp0aFFVTkVMRU5CUVVNN1UwRkRSanRMUVVORU8xTkJRVTBzU1VGQlNTeEpRVUZKTEV0QlFVc3NVVUZCVVN4RlFVRkZPMUZCUXpkQ0xFbEJRME1zU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFbEJRVWtzUlVGRGRFVTdXVUZEUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMmRDUVVONFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGxDUVVGNVFpeERRVUZETzJkQ1FVTnFSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEd0Q1FVRnJRaXhSUVVGUk8zRkNRVU0zUXl4blFrRkJaMElzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHhRa0ZETVVNc1YwRkJWeXhEUVVGRExGZEJRVmNzUlVGQlJTeFJRVUZSTEVOQlFVTTdZVUZEY0VNN2FVSkJRVTA3WjBKQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXg1UWtGQmVVSXNRMEZCUXp0blFrRkRha1FzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4elFrRkJjMElzUTBGQlF6dGhRVU0xUXp0VFFVTkVPMkZCUVUwN1dVRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8xbEJRemRETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc2FVSkJRV2xDTEVsQlFVa3NSMEZCUnl4RFFVTTFReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZEZEVJc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRU5CUVVNN1UwRkRia003UzBGRFJEdFRRVUZOTEVsQlFVa3NTVUZCU1N4TFFVRkxMRkZCUVZFN1VVRkJSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8wbEJSVGxGTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTlCUVU4N1VVRkJSU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPenRSUVVONFJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkROMElzUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInRtYiIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInNtYWxsSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInBhdGgiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0b0xvd2VyQ2FzZSIsInNob3dCdXR0b24iLCJnZXRTZXR0aW5nIiwiY2F0ZWciLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInRleHRDb250ZW50Iiwic3RhdGUiLCJpbmNsdWRlcyIsIlVSTCIsImhyZWYiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJyZXBsYWNlIiwiZGV0YWlscyIsInRyaW0iLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJmZWF0dXJlZEZvbnRzIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;