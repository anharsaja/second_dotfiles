var __webpack_exports__={};const presence=new Presence({clientId:"923893773048619008"}),browsingTimestamp=Math.floor(Date.now()/1e3);let cacheMangaURL,cacheMangaChapter;presence.on("UpdateData",(async()=>{const e={details:"Browsing",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/M/Manga%20Plus/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t}=document.location,a=document.querySelector("#app div.Navigation-module_detailContainer_1aDk8 > a"),s=document.querySelector("#app > div > div > div > div > div > div > p"),n=await presence.getSetting("buttons");a?.href!==cacheMangaURL&&(cacheMangaURL=a.href),s?.textContent!==cacheMangaChapter&&(cacheMangaChapter=s.textContent),t.startsWith("/updates")?e.details="Browsing lastest updates":t.startsWith("/featured")?e.details="Browsing featured mangas":t.startsWith("/manga_list")?t.includes("all")?e.details="Browsing all mangas":t.includes("hot")?e.details="Browsing hottest mangas":t.includes("updated")&&(e.details="Browsing updated mangas"):t.startsWith("/favorited")?e.details="Viewing favorited mangas":t.startsWith("/titles")?(e.details=`Viewing: ${document.title.substring(0,document.title.lastIndexOf("-")-1)}`,e.state=document.title.substring(document.title.lastIndexOf("-")+1,document.title.lastIndexOf("|")-1),e.buttons=[{label:"View series",url:document.URL}]):t.startsWith("/viewer")&&(e.details=`Reading: ${document.querySelector("#app a > h1").textContent}`,e.state=`Chapter ${cacheMangaChapter}`,e.buttons=[{label:"Read chapter",url:document.URL},{label:"View series",url:cacheMangaURL}]),n||delete e.buttons,presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLGNBQWVDLGtCQUNuQlQsU0FBU1UsR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxRQUFTLFdBQ1RDLGNBQWUsb0VBQ2ZDLGVBQWdCWixvQkFDakIsU0FBRWEsR0FBYUMsU0FBU0MsU0FBVUMsRUFBV0YsU0FBU0csY0FBYyx3REFBeURDLEVBQWVKLFNBQVNHLGNBQWMsZ0RBQWlERSxRQUFnQnRCLFNBQVN1QixXQUFXLFdBQ3ZQSixHQUFVSyxPQUFTaEIsZ0JBQ25CQSxjQUFnQlcsRUFBU0ssTUFDekJILEdBQWNJLGNBQWdCaEIsb0JBQzlCQSxrQkFBb0JZLEVBQWFJLGFBQ2pDVCxFQUFTVSxXQUFXLFlBQ3BCZCxFQUFhQyxRQUFVLDJCQUNsQkcsRUFBU1UsV0FBVyxhQUN6QmQsRUFBYUMsUUFBVSwyQkFDbEJHLEVBQVNVLFdBQVcsZUFDckJWLEVBQVNXLFNBQVMsT0FDbEJmLEVBQWFDLFFBQVUsc0JBQ2xCRyxFQUFTVyxTQUFTLE9BQ3ZCZixFQUFhQyxRQUFVLDBCQUNsQkcsRUFBU1csU0FBUyxhQUN2QmYsRUFBYUMsUUFBVSwyQkFFdEJHLEVBQVNVLFdBQVcsY0FDekJkLEVBQWFDLFFBQVUsMkJBQ2xCRyxFQUFTVSxXQUFXLFlBQ3pCZCxFQUFhQyxRQUFVLFlBQVlJLFNBQVNXLE1BQU1DLFVBQVUsRUFBR1osU0FBU1csTUFBTUUsWUFBWSxLQUFPLEtBQ2pHbEIsRUFBYW1CLE1BQVFkLFNBQVNXLE1BQU1DLFVBQVVaLFNBQVNXLE1BQU1FLFlBQVksS0FBTyxFQUFHYixTQUFTVyxNQUFNRSxZQUFZLEtBQU8sR0FDckhsQixFQUFhVSxRQUFVLENBQUMsQ0FBRVUsTUFBTyxjQUFlQyxJQUFLaEIsU0FBU2lCLE9BRXpEbEIsRUFBU1UsV0FBVyxhQUN6QmQsRUFBYUMsUUFBVSxZQUFZSSxTQUFTRyxjQUFjLGVBQWVLLGNBQ3pFYixFQUFhbUIsTUFBUSxXQUFXdEIsb0JBQ2hDRyxFQUFhVSxRQUFVLENBQ25CLENBQUVVLE1BQU8sZUFBZ0JDLElBQUtoQixTQUFTaUIsS0FDdkMsQ0FDSUYsTUFBTyxjQUNQQyxJQUFLekIsaUJBSVpjLFVBQ01WLEVBQWFVLFFBQ3hCdEIsU0FBU21DLFlBQVl2QixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjkyMzg5Mzc3MzA0ODYxOTAwOFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5sZXQgY2FjaGVNYW5nYVVSTCwgY2FjaGVNYW5nYUNoYXB0ZXI7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgZGV0YWlsczogXCJCcm93c2luZ1wiLFxuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTS9NYW5nYSUyMFBsdXMvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCB7IHBhdGhuYW1lIH0gPSBkb2N1bWVudC5sb2NhdGlvbiwgbWFuZ2FVUkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcCBkaXYuTmF2aWdhdGlvbi1tb2R1bGVfZGV0YWlsQ29udGFpbmVyXzFhRGs4ID4gYVwiKSwgbWFuZ2FDaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHAgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBwXCIpLCBidXR0b25zID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvbnNcIik7XG4gICAgaWYgKG1hbmdhVVJMPy5ocmVmICE9PSBjYWNoZU1hbmdhVVJMKVxuICAgICAgICBjYWNoZU1hbmdhVVJMID0gbWFuZ2FVUkwuaHJlZjtcbiAgICBpZiAobWFuZ2FDaGFwdGVyPy50ZXh0Q29udGVudCAhPT0gY2FjaGVNYW5nYUNoYXB0ZXIpXG4gICAgICAgIGNhY2hlTWFuZ2FDaGFwdGVyID0gbWFuZ2FDaGFwdGVyLnRleHRDb250ZW50O1xuICAgIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL3VwZGF0ZXNcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBsYXN0ZXN0IHVwZGF0ZXNcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2ZlYXR1cmVkXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgZmVhdHVyZWQgbWFuZ2FzXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9tYW5nYV9saXN0XCIpKSB7XG4gICAgICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcImFsbFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBhbGwgbWFuZ2FzXCI7XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiaG90XCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIGhvdHRlc3QgbWFuZ2FzXCI7XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwidXBkYXRlZFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB1cGRhdGVkIG1hbmdhc1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2Zhdm9yaXRlZFwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgZmF2b3JpdGVkIG1hbmdhc1wiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdGl0bGVzXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmc6ICR7ZG9jdW1lbnQudGl0bGUuc3Vic3RyaW5nKDAsIGRvY3VtZW50LnRpdGxlLmxhc3RJbmRleE9mKFwiLVwiKSAtIDEpfWA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnRpdGxlLnN1YnN0cmluZyhkb2N1bWVudC50aXRsZS5sYXN0SW5kZXhPZihcIi1cIikgKyAxLCBkb2N1bWVudC50aXRsZS5sYXN0SW5kZXhPZihcInxcIikgLSAxKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IHNlcmllc1wiLCB1cmw6IGRvY3VtZW50LlVSTCB9XTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi92aWV3ZXJcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgUmVhZGluZzogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcCBhID4gaDFcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYENoYXB0ZXIgJHtjYWNoZU1hbmdhQ2hhcHRlcn1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiUmVhZCBjaGFwdGVyXCIsIHVybDogZG9jdW1lbnQuVVJMIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBzZXJpZXNcIixcbiAgICAgICAgICAgICAgICB1cmw6IGNhY2hlTWFuZ2FVUkwsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBpZiAoIWJ1dHRvbnMpXG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuYnV0dG9ucztcbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVVZ1UkN4SlFVRkpMR0ZCUVhGQ0xFVkJRVVVzYVVKQlFYbENMRU5CUVVNN1FVRkZja1FzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3U1VGRGNFTXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnBETEU5QlFVOHNSVUZCUlN4VlFVRlZPMUZCUTI1Q0xHRkJRV0VzUlVGRFdpeHRSVUZCYlVVN1VVRkRjRVVzWTBGQll5eEZRVUZGTEdsQ1FVRnBRanRMUVVOcVF5eEZRVU5FTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGRGFFTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRMmhETEhORVFVRnpSQ3hEUVVOMFJDeEZRVU5FTEZsQlFWa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOd1F5dzRRMEZCT0VNc1EwRkRPVU1zUlVGRFJDeFBRVUZQTEVkQlFVY3NUVUZCVFN4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxGTkJRVk1zUTBGQlF5eERRVUZETzBsQlIzcEVMRWxCUVVrc1VVRkJVU3hGUVVGRkxFbEJRVWtzUzBGQlN5eGhRVUZoTzFGQlFVVXNZVUZCWVN4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRGNFVXNTVUZCU1N4WlFVRlpMRVZCUVVVc1YwRkJWeXhMUVVGTExHbENRVUZwUWp0UlFVTnNSQ3hwUWtGQmFVSXNSMEZCUnl4WlFVRlpMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJSVGxETEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRGJFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXp0VFFVTTVReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTNoRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU03VTBGRE9VTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExHRkJRV0VzUTBGQlF5eEZRVUZGTzFGQlF6VkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPMkZCUTNSRkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkRhRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4NVFrRkJlVUlzUTBGQlF6dGhRVU0zUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlEzQkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZVVKQlFYbENMRU5CUVVNN1MwRkRiRVE3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRek5ETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01FSkJRVEJDTEVOQlFVTTdVMEZET1VNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMUZCUTNoRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NXVUZCV1N4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGRE1VUXNRMEZCUXl4RlFVTkVMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkRia01zUlVGQlJTeERRVUZETzFGQlEwb3NXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZETlVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVOdVF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlEyNURMRU5CUVVNN1VVRkRSaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1lVRkJZU3hGUVVGRkxFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRMUVVOeVJUdFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdFJRVU14UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGbEJRM1JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVhGQ0xHRkJRV0VzUTBGQlF5eERRVUZETEZkQlF6TkVMRVZCUVVVc1EwRkJRenRSUVVOSUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NWMEZCVnl4cFFrRkJhVUlzUlVGQlJTeERRVUZETzFGQlEzQkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3V1VGRGRFSXNSVUZCUlN4TFFVRkxMRVZCUVVVc1kwRkJZeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZPMWxCUXpWRE8yZENRVU5ETEV0QlFVc3NSVUZCUlN4aFFVRmhPMmRDUVVOd1FpeEhRVUZITEVWQlFVVXNZVUZCWVR0aFFVTnNRanRUUVVORUxFTkJRVU03UzBGRFJqdEpRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1QwRkJUeXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlF6RkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdRVUZEY0VNc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjYWNoZU1hbmdhVVJMIiwiY2FjaGVNYW5nYUNoYXB0ZXIiLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwiZGV0YWlscyIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInBhdGhuYW1lIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsIm1hbmdhVVJMIiwicXVlcnlTZWxlY3RvciIsIm1hbmdhQ2hhcHRlciIsImJ1dHRvbnMiLCJnZXRTZXR0aW5nIiwiaHJlZiIsInRleHRDb250ZW50Iiwic3RhcnRzV2l0aCIsImluY2x1ZGVzIiwidGl0bGUiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInN0YXRlIiwibGFiZWwiLCJ1cmwiLCJVUkwiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;